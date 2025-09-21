---
sidebar_label: Conception de protocole
description: Conception du modèle de partage des revenus Core Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du système de protocole Core Rev+

---

## Vue d'ensemble de l'architecture

Rev+ est implémenté comme une fonctionnalité de niveau protocole intégrée directement dans le pipeline de traitement des transactions de la blockchain Core. Le modèle Rev+ comprend deux composants principaux : un contrat de `configuration` en chaîne et des `core chain modifications` qui gèrent la logique de distribution des frais.

## **Composants Principaux**

### 1. Contrat de Configuration (Configuration.sol)

**Contract Address**: `0x0000000000000000000000000000000000001016`

Le contrat `Configuration.sol` sert de registre en chaîne qui régit les règles de distribution des frais Rev+. Il permet de définir et de gérer quels contrats intelligents, événements ou fonctions sont éligibles aux récompenses de frais de gaz, et comment ces récompenses sont allouées. Notez que toutes ces configurations sont mises à jour via des propositions de gouvernance approuvées par le Core DAO.

**Responsabilités Clés:**

- Stocker les données de configuration pour les contrats cibles, y compris les événements et (éventuellement) les fonctions.
- Définir les allocations de gaz et les bénéficiaires de récompenses associés.
- Appliquer des limites aux bénéficiaires de récompenses par événement.
- Assurer la validité des sommes de pourcentages de récompense (doivent égaler 100 %).
- Autoriser les opérations de cycle de vie contrôlées par la gouvernance (ajouter, mettre à jour, supprimer, basculer).
- Maintenir un drapeau `isActive` pour l'activation de la configuration dynamique.

### 2. Intégration avec la blockchain Core

La logique du protocole Rev+ est intégrée directement dans la couche de traitement des transactions de la blockchain Core. Cette implémentation garantit que la distribution des frais se produit de manière transparente et déterministe après l'exécution EVM, sans modifier la logique des contrats intelligents.

Surtout, les développeurs n'ont pas besoin de modifier leurs contrats intelligents déployés pour participer à Rev+, tant qu'ils utilisent `--eth_estimateGas` pour les estimations de gaz dans leur code. Rev+ fonctionne en surveillant les événements de contrat émis lors de l'exécution des transactions. Tant qu'un contrat émet un événement configuré (via la journalisation Solidity standard), le système Rev+ peut le reconnaître et déclencher la distribution de récompenses. Cela rend Rev+ entièrement composable et compatible avec les applications existantes basées sur EVM.

Les modifications apportées aux configurations soumises via le contrat de gouvernance de Core seront appliquées à la transaction suivante après leur approbation et activation par Core DAO.

Rev+ core chain logic is implemented directly in the Core blockchain's transaction processing layer, located at core-chain/eth/feemarket/ and `core-chain/eth/state_transition.go`, refer [here](https://www.google.com/url?q=https://github.com/coredao-org/core-chain/pull/59&sa=D&source=docs&ust=1748354919957219&usg=AOvVaw182idwbrHVNYZTy364X1E-) for more details. It uses the same structs as the solidity ones.

**Key Characteristics:**

- **Execution Timing:** Rev+ logic runs after EVM execution, before final transaction state commitment.
- **Gas Model:** Distributed gas is added to the block’s gas pool and _**not**_ included in `block.gasUsed`. The distributions are either done through the block’s gas pool. This ensures the block gas accounting remains unchanged.
- **Configuration Sync:** Reads the latest configuration from `Configuration.sol`. Governance updates are reflected immediately in the next processed transaction.
- **Struct Compatibility:** Uses Go-language versions of the same structs as in Solidity, ensuring consistency across layers.

#### **Gas Accounting**

Rev+ introduces a distinct gas accounting mechanism that preserves Core’s standard 50M gas per block limit while supporting additional gas-based reward distributions.

- **Distributed Gas**: The gas used for Rev+ fee distributions is **not included in `block.gasUsed`**. It is added to the block's gas pool and then deducted from the block’s gas pool and gas used, ensuring block gas accounting remains unchanged.
- **Block Limit Compliance**: Despite distributing additional gas rewards, the block still respects the 50M gas ceiling reported to clients and block explorers.
- **Post-EVM Execution**: The Rev+ logic runs after EVM execution and does not interfere with transaction execution or EVM gas calculations.

##### Example

- `block.gasUsed`: 50,000,000 (reported)
- Sum of all `tx.gasUsed`: 150,000,000 (includes 100M for Rev+ rewards)
- Net effect: The block’s throughput remains stable, while distributed gas is transparently handled post-EVM.

This accounting model ensures that Rev+ can scale with network usage without disrupting validator block production or degrading network performance.

## Data Structures

### Configuration Schema

```javascript
// System Constants
MAX_REWARDS = 5;       // Maximum reward recipients per event/function
MAX_EVENTS = 5;        // Maximum events per contract
MAX_FUNCTIONS = 5;     // Maximum functions per contract  
MAX_GAS = 1000000;     // Maximum gas per event/function
DENOMINATOR = 10000;   // Basis points denominator (100%)

struct Reward {
    address rewardAddr;           // Recipient address
    uint16 rewardPercentage;     // Percentage in basis points (10000 = 100%)
}

struct Event {
    bytes32 eventSignature;      // Keccak256 hash of event signature
    uint32 gas;                  // Gas amount to distribute
    Reward[] rewards;            // Array of reward recipients
}

struct Function {
    bytes32 functionSignature;   // Keccak256 hash of function signature
    uint32 gas;                  // Gas amount to distribute  
    Reward[] rewards;            // Array of reward recipients
}

struct Config {
    address configAddress;       // Target contract address
    bool isActive;              // Configuration active status
    Event[] events;             // Array of configured events
    Function[] functions;       // Array of configured functions
}
```

## How It Works

The Rev+ protocol operates as a decentralized, post-EVM fee distribution layer that transparently allocates a portion of gas fees to designated recipients. This mechanism is executed as part of Core’s transaction finalization process without altering the underlying Rev+ enabled contract logic.

### 1. Governance Configuration

- Fee distribution rules are proposed through governance proposals by ecosystem participants (e.g., dApp developers, stablecoin issuers) and approved by Core DAO.
- Each configuration includes:
  - A target smart contract address
  - One or more triggering events or functions
  - Gas amounts associated with each trigger
  - A list of reward recipients with percentage splits (must total 100%)

### 2. Pre-Transaction Gas Estimation

- When a user or dApp calls `eth_estimateGas`:
  - Core checks for applicable Rev+ configurations.
  - If a match is found, the returned gas estimate includes the additional Rev+ gas for configured event triggers.
  - This enables transparent, upfront gas cost awareness for users.

### 3. Transaction Execution (EVM Layer)

- As usual, the transaction is submitted and executed by Core’s EVM layer.
- The contract’s logic runs without interference or instrumentation by Rev+.
- During this phase, events may be emitted by the contract, and internal transactions may occur.
- Rev+ logic is **not invoked** during EVM execution to maintain full compatibility with existing EVM behavior.

### 4. Post-Execution Event Trigger Detection

- After the EVM execution completes:
  - Rev+ inspects the transaction’s event logs (including those from internal calls).
  - It compares emitted event/function signatures against the on-chain configuration stored in `Configuration.sol`.
  - If matches are found, the corresponding gas value is recorded for distribution.

### 5. Reward Calculation

- For each matched event or function:
  - The configured gas value is multiplied by the transaction’s **effective gas price** (tip cap or `gasPrice`).
  - This produces the total **fee reward pool** for the event.
  - The pool is split proportionally across recipients as per their basis point percentages (e.g., 7000 \= 70%).

```javascript
effectiveTip := msg.GasPrice
if rules.IsLondon {
	effectiveTip = cmath.BigMin(msg.GasTipCap, new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee))}
    rewardAmount := new(uint256.Int).SetUint64(rewardGas) // 10000 (comes from Solidity Event.gas)
    rewardAmount.Mul(rewardAmount, effectiveTipU256)  // 10000 * effectiveTip (gasPrice)
```

### 6. Fee Distribution\*\*

- The total distributed reward:
  - Is added back to the block’s gas pool.
  - Is **not counted** in the `block.gasUsed` field.
- Gas rewards are transferred directly to the configured reward addresses (e.g., DAOs, developers, multisigs, etc).
- Any unused transaction gas is refunded to the sender per standard EVM behavior.

### . Accounting and Compliance

- Core enforces the standard **50M gas block limit**, even with Rev+ active.
- While `block.gasUsed` may show 50M, the actual sum of all transaction gas usage (including Rev+ distribution gas) may exceed it.
- This separation allows Rev+ to scale incentive mechanisms while preserving throughput and compatibility with existing clients and tooling.
- All distributions are visible on-chain, and upcoming tools will allow dashboard-based tracking of Rev+ earnings.

This mechanism ensures that the Rev+ protocol operates as a **transparent, auditable, and composable fee-sharing layer**, encouraging long-term ecosystem participation and sustainable protocol development without sacrificing performance, security, or compatibility.

## **Transaction Processing Flow**

### 1. Pre-Transaction Phase

```bash
User calls eth_estimateGas
├── Core calculates base gas requirement
├── Checks for Rev+ configurations on target contract
├── Adds Rev+ gas costs to estimate
└── Returns total gas estimate to user
```

### 2. Transaction Execution Phase

```bash
Transaction submitted to Core
├── EVM executes contract logic normally
├── Transaction generates event logs
├── Rev+ system scans logs for configured events
├── Matches event signatures against configurations
└── Calculates required gas distributions
```

### 3. Post-Execution Distribution

```bash
After EVM execution completes
├── Rev+ system processes matched events
├── Calculates reward amounts per recipient
├── Distributes fees to reward addresses
├── Deducts distributed gas from block accounting
└── Refunds remaining gas to transaction sender
```

## Fee Calculation Logic

### Effective Tip Calculation

```go
effectiveTip := msg.GasPrice
if rules.IsLondon {
    effectiveTip = cmath.BigMin(
        msg.GasTipCap, 
        new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee)
    )
}
```

### Reward Distribution

```go
rewardAmount := new(uint256.Int).SetUint64(rewardGas) // From Event.gas
rewardAmount.Mul(rewardAmount, effectiveTipU256)      // gas * effectiveTip

// For each reward recipient:
recipientAmount = (rewardAmount * rewardPercentage) / DENOMINATOR
```

## Gas Accounting Model

### Block-Level Accounting

- **Block Gas Limit**: Maintains 50M gas limit
- **Distributed Gas**: Not counted in `block.gasUsed`
- **Transaction Gas**: Individual `tx.gasUsed` includes Rev+ gas
- **Net Effect**: Block can accommodate same transaction count as before Rev+

### **Example Scenario**

```math
Block Gas Limit: 50,000,000
Block Gas Used: 50,000,000 (reported)
Actual Transaction Gas Sum: 150,000,000 (includes 100M distributed)
```

## Configuration Lifecycle

The Rev+ revenue sharing model allows Core DAO, the governing body of the Core blockchain, to manage fee distribution settings through a set of governance-controlled configuration operations. All modifications to Rev+ configurations must be proposed and approved via Core's on-chain governance process. These changes are enforced on-chain via the `Configuration.sol` contract.

### Supported Operations

- **`addConfig`:** Registers a new configuration for a target contract. The configuration must specify one or more events and/or functions, along with their associated gas values and reward distributions.

- **`updateConfig`:** Modifies the event and function definitions for an existing contract configuration. This allows changes to gas allocations, reward percentages, or trigger conditions without removing the entire configuration.

- **`removeConfig`:** Permanently deletes an existing configuration and its associated rules for a specific contract. Once removed, no further Rev+ rewards will be distributed for that contract unless re-added through a new governance proposal.

- **`setConfigStatus`:** Toggles the active status of a configuration. This allows governance to temporarily disable or re-enable a configuration without removing it entirely.

### Governance Requirements

- Only the Core DAO can perform these operations.

- All changes require submission through the Core governance proposal process.

- Approved changes are applied immediately on the next transaction following confirmation.

- There are no admin overrides or emergency keys.

#### Validation Rules

##### Configuration Constraints

- Maximum 5 reward recipients per event/function
- Maximum 5 events per contract configuration
- Maximum 5 functions per contract configuration
- Maximum 1,000,000 gas per event/function
- Reward percentages must sum to exactly 10,000 (100%)
- No duplicate contract addresses
- At least one event or function is required
- All addresses must be valid (non-zero)

##### Governance Controls

- All modifications to the configurations can only be made by the Core DAO
- All changes require submission through governance proposals and approval
- Changes take effect on the next transaction after approval and implementation of the new modifications
- No emergency or admin override mechanisms

## Security Model

### Access Control

- **Core DAO Approval**: All configuration changes require Core DAO’s approval of the proposal
- **No Admin Keys**: No backdoors or emergency access mechanisms
- **Immutable Logic**: Core’s Rev+ logic cannot be modified without a hardfork

### Economic Security

- **Bounded Distribution**: Maximum gas limits prevent excessive fee drainage
- **Percentage Validation**: All distributions must sum to exactly 100%
- **Block Limit Preservation**: Total block processing capacity remains unchanged

### Event Matching Security

- **Exact Signature Matching**: Uses cryptographic event signature hashes
- **Log Verification**: Only processes verified transaction logs
- **Contract Address Binding**: Configurations tied to specific contract addresses

## Performance Considerations

### Gas Overhead

- Rev+ logic adds minimal computational overhead per transaction
- Event signature matching uses efficient hash lookups
- Distribution calculations are simple arithmetic operations

### Scalability

- Supports concurrent processing of multiple configured contracts
- Event matching scales linearly with the number of configurations
- No state bloat from historical distribution records

### Network Impact

- Block production time remains unchanged
- Transaction throughput maintained at 50M gas per block
- Distributed gas accounting prevents network congestion

