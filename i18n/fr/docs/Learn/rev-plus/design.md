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

La logique de Rev+ est intégrée directement dans la couche de traitement des transactions de la blockchain Core, plus précisément dans les fichiers situés à core-chain/eth/feemarket/ et dans le fichier `core-chain/eth/state_transition.go`. Pour plus de détails,[here](https://www.google.com/url?q=https://github.com/coredao-org/core-chain/pull/59&sa=D&source=docs&ust=1748354919957219&usg=AOvVaw182idwbrHVNYZTy364X1E-). Il utilise les mêmes structures que celles de Solidity.

**Caractéristiques clés:**

- **Chronologie d'exécution:** La logique Rev+ s'exécute après l'exécution EVM, avant la validation finale de l'état de la transaction.
- **Modèle de gaz:** Le gaz distribué est ajouté au pool de gaz du bloc et n'est _**pas**_ inclus dans `block.gasUsed`. Les distributions se font soit via le pool de gaz du bloc. Cela garantit que la comptabilité du gaz du bloc reste inchangée.
- **Synchronisation de configuration:** Lit la dernière configuration à partir de `Configuration.sol`. Les mises à jour de gouvernance sont reflétées immédiatement dans la transaction suivante traitée.
- **Compatibilité des structures:** Utilise des versions en langage Go des mêmes structures qu'en Solidity, assurant ainsi la cohérence entre les couches.

#### **Comptabilité du gaz**

Rev+ introduit un mécanisme de comptabilité du gaz distinct qui préserve la limite standard de Core de 50 millions de gaz par bloc tout en prenant en charge des distributions de récompenses supplémentaires basées sur le gaz.

- **Gaz distribué**: Le gaz utilisé pour les distributions de frais Rev+ **n'est pas inclus dans `block.gasUsed`**. Il est ajouté au pool de gaz du bloc puis déduit du pool de gaz et du gaz utilisé du bloc, garantissant que la comptabilité du gaz du bloc reste inchangée.
- **Conformité à la limite de bloc**: Malgré la distribution de récompenses de gaz supplémentaires, le bloc respecte toujours le plafond de 50 millions de gaz signalé aux clients et aux explorateurs de blocs.
- **Exécution post-EVM**: La logique Rev+ s'exécute après l'exécution EVM et n'interfère pas avec l'exécution des transactions ou les calculs de gaz EVM.

##### Exemple

- `block.gasUsed`: 50 000 000 (signalé)
- Somme de tous les `tx.gasUsed`: 150 000 000 (comprend 100M pour les récompenses Rev+)
- Effet net: Le débit du bloc reste stable, tandis que le gaz distribué est géré de manière transparente après l'EVM.

Ce modèle comptable garantit que Rev+ peut évoluer en fonction de l'utilisation du réseau sans perturber la production de blocs des validateurs ni dégrader les performances du réseau.

## Les structures de données

### Schéma de configuration

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

## Fonctionnement

Le protocole Rev+ fonctionne comme une couche décentralisée de distribution de frais post-EVM qui attribue de manière transparente une partie des frais de gaz à des destinataires désignés. This mechanism is executed as part of Core’s transaction finalization process without altering the underlying Rev+ enabled contract logic.

### 1. Configuration de gouvernance

- Les règles de distribution des frais sont proposées par le biais de propositions de gouvernance par les participants de l'écosystème (par exemple, les développeurs de dApp, les émetteurs de stablecoin) et approuvées par Core DAO.
- Chaque configuration inclut:
  - Une adresse de contrat intelligent cible
  - Un ou plusieurs événements déclencheurs ou fonctions
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

## Logique de calcul des frais

### Calcul effectif du pourboire

```go
effectiveTip := msg.GasPrice
if rules.IsLondon {
    effectiveTip = cmath.BigMin(
        msg.GasTipCap, 
        new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee)
    )
}
```

### Distribution des récompenses

```go
rewardAmount := new(uint256.Int).SetUint64(rewardGas) // From Event.gas
rewardAmount.Mul(rewardAmount, effectiveTipU256)      // gas * effectiveTip

// For each reward recipient:
recipientAmount = (rewardAmount * rewardPercentage) / DENOMINATOR
```

## Modèle de comptabilité des frais de gaz

### Comptabilité au niveau du bloc

- **Limite de gaz par bloc**: Maintient une limite de gaz de 50 millions
- **Gaz distribué**: Non compté dans `block.gasUsed`
- **Gaz de transaction**: L'`tx.gasUsed` individuel inclut le gaz Rev+
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

