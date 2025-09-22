---
sidebar_label: Diseño del Protocolo
description: Diseño del Modelo de Distribución de Ingresos Core Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño del Sistema del Protocolo Core Rev+

---

## Visión General de la Arquitectura

Rev+ se implementa como una característica a nivel de protocolo integrada directamente en la pipeline de procesamiento de transacciones de la blockchain Core. El modelo Rev+ comprende dos componentes principales: un contrato de `configuration` on-chain y `core chain modifications` que manejan la lógica de distribución de fees.

## Componentes principales

### 1. Configuration Contract (Configuration.sol)

**Dirección de Contrato**: `0x0000000000000000000000000000000000001016`

El contrato `Configuration.sol` funciona como el registro on-chain que gobierna las reglas para la distribución de fees de Rev+. Permite definir y gestionar qué smart contracts, eventos o funciones son elegibles para recompensas por fees de gas y cómo se asignan dichas recompensas. Cabe destacar que todas estas configuraciones se actualizan mediante propuestas de gobernanza aprobadas por el Core DAO.

**Responsabilidades Clave:**

- Almacenar datos de configuración para contratos objetivo, incluyendo events y (opcionalmente) functions.
- Definir asignaciones de gas y los destinatarios de recompensas asociados.
- Hacer cumplir límites en la cantidad de destinatarios de recompensas por event.
- Asegurar que la suma de los porcentajes de recompensa sea válida (debe ser igual al 100%).
- Permitir operaciones de ciclo de vida controladas por governance (agregar, actualizar, eliminar, activar/desactivar).
- Mantener un `isActive` flag para la habilitación dinámica de configuraciones.

### 2. Integración con Core Blockchain

La lógica del protocolo Rev+ se integra directamente en la capa de procesamiento de transacciones de Core blockchain. Esta implementación asegura que la distribución de comisiones ocurra de manera transparente y determinista después de la ejecución de la EVM, sin alterar la lógica de los smart contracts.

Es importante destacar que los desarrolladores no necesitan modificar sus smart contracts desplegados para participar en Rev+, siempre que utilicen -`-eth_estimateGas` para las estimaciones de gas en su código. Rev+ funciona monitoreando los contract events emitidos durante la ejecución de transacciones. Mientras un contrato emita un event configurado (a través del logging estándar de Solidity), el sistema Rev+ puede reconocerlo y activar la distribución de recompensas. Esto hace que Rev+ sea totalmente componible y compatible con las aplicaciones existentes basadas en EVM.

Los cambios en las configuraciones enviados a través del contrato de governance de Core se aplicarán a la siguiente transacción después de ser aprobados y activados por Core DAO.

La lógica central de Rev+ está implementada directamente en la capa de procesamiento de transacciones de la Core blockchain, ubicada en core-chain/eth/feemarket/ y `core-chain/eth/state_transition.go`, consulta [aquí](https://www.google.com/url?q=https://github.com/coredao-org/core-chain/pull/59&sa=D&source=docs&ust=1748354919957219&usg=AOvVaw182idwbrHVNYZTy364X1E-) para más detalles. Utiliza las mismas structs que las de Solidity.

**Características Clave:**

- **Execution Timing:** La lógica de Rev+ se ejecuta después de la ejecución de la EVM, antes del compromiso final del estado de la transacción.
- **Gas Model:** El gas distribuido se agrega al gas pool del bloque y _**no**_ se incluye en `block.gasUsed`. Las distribuciones se realizan a través del gas pool del bloque. Esto asegura que la contabilidad del gas del bloque permanezca sin cambios.
- **Configuration Sync:** Lee la configuración más reciente desde `Configuration.sol`. Las actualizaciones de governance se reflejan inmediatamente en la siguiente transacción procesada.
- **Struct Compatibility:** Utiliza versiones en Go-language de las mismas structs que en Solidity, asegurando consistencia entre capas.

#### Gas Accounting

Rev+ introduce un mecanismo distinto de contabilización de gas que preserva el límite estándar de 50M de gas por bloque en Core, al tiempo que soporta distribuciones adicionales de recompensas basadas en gas.

- **Distributed Gas**: El gas utilizado para las distribuciones de comisiones de Rev+ **no se incluye en `block.gasUsed`**. Se agrega al gas pool del bloque y luego se deduce tanto del gas pool como del gas usado, asegurando que la contabilidad del gas del bloque permanezca inalterada.
- **Block Limit Compliance**: A pesar de distribuir recompensas adicionales de gas, el bloque sigue respetando el techo de 50M de gas reportado a los clientes y block explorers.
- **Post-EVM Execution**: La lógica de Rev+ se ejecuta después de la ejecución de la EVM y no interfiere con la ejecución de transacciones ni con los cálculos de gas de la EVM.

##### Ejemplo

- `block.gasUsed`: 50,000,000 (reportado)

- Suma de todos `tx.gasUsed`: 150,000,000 (incluye 100M para recompensas Rev+)

- Efecto neto: El throughput del bloque permanece estable, mientras que el gas distribuido se maneja de forma transparente después de la ejecución de la EVM.

Este modelo de contabilización asegura que Rev+ pueda escalar junto con el uso de la red sin interrumpir la producción de bloques por parte de los validadores ni degradar el rendimiento de la red.

## Estructuras de Datos

### Esquema de Configuración

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

## Cómo Funciona

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

### 6. Fee Distribution

- The total distributed reward:
  - Is added back to the block’s gas pool.
  - Is **not counted** in the `block.gasUsed` field.
- Gas rewards are transferred directly to the configured reward addresses (e.g., DAOs, developers, multisigs, etc).
- Any unused transaction gas is refunded to the sender per standard EVM behavior.

### 7. Accounting and Compliance

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

### Example Scenario

Block Gas Limit: 50,000,000
Block Gas Used: 50,000,000 (reported)
Actual Transaction Gas Sum: 150,000,000 (includes 100M distributed)

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

