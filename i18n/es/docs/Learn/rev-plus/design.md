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

#### Contabilización de gas

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

El protocolo Rev+ opera como una capa descentralizada de distribución de comisiones post-EVM que asigna de manera transparente una porción de las comisiones de gas a destinatarios designados. Este mecanismo se ejecuta como parte del proceso de finalización de transacciones de Core sin alterar la lógica subyacente de los contratos habilitados para Rev+.

### 1. Configuración de Governanza

- Las reglas de distribución de comisiones son propuestas mediante governance proposals por participantes del ecosistema (p. ej., desarrolladores de dApps, emisores de stablecoins) y aprobadas por la Core DAO.
- Cada configuración incluye:
  - Una dirección de smart contract objetivo
  - Uno o más events o functions disparadores
  - Montos de gas asociados a cada disparador
  - Una lista de destinatarios de recompensas con divisiones porcentuales (deben sumar 100%)

### 2. Pre-Transaction Gas Estimation

- Cuando un usuario o dApp llama a `eth_estimateGas `:
  - Core verifica configuraciones Rev+ aplicables.
  - Si se encuentra una coincidencia, la estimación de gas retornada incluye el gas adicional de Rev+ para los disparadores configurados.
  - Esto permite a los usuarios tener una visión transparente y anticipada del costo total de gas.

### 3. Transaction Execution (EVM Layer)

- Como de costumbre, la transacción es enviada y ejecutada por la capa EVM de Core.
- La lógica del contrato se ejecuta sin interferencia ni instrumentación por parte de Rev+.
- Durante esta fase, el contrato puede emitir events y ocurrir transacciones internas.
- La lógica de Rev+ **no se invoca** durante la ejecución de la EVM para mantener total compatibilidad con el comportamiento existente de la EVM.

### 4. Detección de disparadores de eventos post-ejecución

- Después de que la ejecución de la EVM finaliza:
  - Rev+ inspecciona los event logs de la transacción (incluyendo los de llamadas internas).
  - Compara las firmas de events/functions emitidas contra la configuración on-chain almacenada en `Configuration.sol`.
  - Si se encuentran coincidencias, el valor de gas correspondiente se registra para su distribución.

### 5. Cálculo de Recompensas

- Para cada event o function coincidente:
  - El valor de gas configurado se multiplica por el **effective gas price** de la transacción (tip cap o `gasPrice`).
  - Esto produce el **fee reward pool** total para el evento.
  - El pool se divide proporcionalmente entre los destinatarios según sus porcentajes en basis points (ejemplo: 7000 = 70%).

```javascript
effectiveTip := msg.GasPrice
if rules.IsLondon {
	effectiveTip = cmath.BigMin(msg.GasTipCap, new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee))}
    rewardAmount := new(uint256.Int).SetUint64(rewardGas) // 10000 (comes from Solidity Event.gas)
    rewardAmount.Mul(rewardAmount, effectiveTipU256)  // 10000 * effectiveTip (gasPrice)
```

### 6. Distribución de Fees

- La recompensa total distribuida:
  - Se agrega nuevamente al gas pool del bloque.
  - **No se contabiliza** en el campo `block.gasUsed`.
- Las recompensas de gas se transfieren directamente a las direcciones configuradas de recompensas (p. ej., DAOs, desarrolladores, multisigs, etc.).
- Cualquier gas no utilizado en la transacción es reembolsado al remitente según el comportamiento estándar de la EVM.

### 7. Contabilización y cumplimiento

- Core aplica el límite estándar de **50M de gas por bloque**, incluso con Rev+ activo.
- Aunque `block.gasUsed` pueda mostrar 50M, la suma real de todo el consumo de gas de las transacciones (incluyendo el gas de distribución Rev+) puede excederlo.
- Esta separación permite que Rev+ escale los mecanismos de incentivos mientras preserva el throughput y la compatibilidad con clientes y herramientas existentes.
- Todas las distribuciones son visibles on-chain, y próximamente se dispondrá de herramientas que permitirán un seguimiento de las ganancias de Rev+ mediante dashboards.

Este mecanismo asegura que el protocolo Rev+ opere como una **capa de reparto de comisiones transparente, auditable y componible**, fomentando la participación a largo plazo en el ecosistema y el desarrollo sostenible del protocolo, sin sacrificar el rendimiento, la seguridad ni la compatibilidad.

## **Flujo de Procesamiento de Transacciones**

### 1. Fase Pre-Transacción

```bash
User calls eth_estimateGas
├── Core calculates base gas requirement
├── Checks for Rev+ configurations on target contract
├── Adds Rev+ gas costs to estimate
└── Returns total gas estimate to user
```

### 2. Fase de Ejecución de Transacción

```bash
Transaction submitted to Core
├── EVM executes contract logic normally
├── Transaction generates event logs
├── Rev+ system scans logs for configured events
├── Matches event signatures against configurations
└── Calculates required gas distributions
```

### 3. Distribución Post-Ejecución

```bash
After EVM execution completes
├── Rev+ system processes matched events
├── Calculates reward amounts per recipient
├── Distributes fees to reward addresses
├── Deducts distributed gas from block accounting
└── Refunds remaining gas to transaction sender
```

## Lógica de Cálculo de Comisiones

### Cálculo de la propina efectiva

```go
effectiveTip := msg.GasPrice
if rules.IsLondon {
    effectiveTip = cmath.BigMin(
        msg.GasTipCap, 
        new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee)
    )
}
```

### Distribución de recompensas

```go
rewardAmount := new(uint256.Int).SetUint64(rewardGas) // From Event.gas
rewardAmount.Mul(rewardAmount, effectiveTipU256)      // gas * effectiveTip

// For each reward recipient:
recipientAmount = (rewardAmount * rewardPercentage) / DENOMINATOR
```

## Modelo de contabilización de gas

### Contabilidad a Nivel de Bloque

- **Block Gas Limit**: Mantiene el límite de 50M de gas
- **Distributed Gas**: No se contabiliza en `block.gasUsed`
- **Transaction Gas**: Cada `tx.gasUsed` individual incluye gas de Rev+
- **Net Effect**: El bloque puede acomodar la misma cantidad de transacciones que antes de Rev+

### Ejemplo

Block Gas Limit: 50,000,000
Block Gas Used: 50,000,000 (reportado)
Actual Transaction Gas Sum: 150,000,000 (incluye 100M distribuidos)

## Ciclo de Vida de la Configuración

El modelo de reparto de ingresos de Rev+ permite a Core DAO, el organismo de gobernanza de la Core blockchain, gestionar las configuraciones de distribución de comisiones a través de un conjunto de operaciones controladas por governance. Todas las modificaciones a las configuraciones de Rev+ deben ser propuestas y aprobadas mediante el proceso de gobernanza on-chain de Core. Estos cambios se aplican on-chain a través del contrato `Configuration.sol`.

### Operaciones Soportadas

- **`addConfig`:** Registra una nueva configuración para un contrato objetivo. La configuración debe especificar uno o más events y/o functions, junto con sus valores de gas asociados y las distribuciones de recompensas.

- **`updateConfig`:** Modifica las definiciones de events y functions para una configuración existente de contrato. Esto permite cambios en asignaciones de gas, porcentajes de recompensas o condiciones de disparo sin necesidad de eliminar toda la configuración.

- **`removeConfig`:** Elimina permanentemente una configuración existente y sus reglas asociadas para un contrato específico. Una vez eliminada, no se distribuirán más recompensas Rev+ para ese contrato a menos que se vuelva a agregar mediante una nueva propuesta de governance.

- **`ssetConfigStatus`:** Alterna el estado activo de una configuración. Esto permite que governance deshabilite temporalmente o vuelva a habilitar una configuración sin eliminarla por completo.

### Requisitos de Gobernanza

- Solo la Core DAO puede ejecutar estas operaciones.

- Todos los cambios requieren presentación a través del proceso de propuestas de gobernanza de Core.

- Los cambios aprobados se aplican inmediatamente en la siguiente transacción tras la confirmación.

- No existen mecanismos de admin overrides ni llaves de emergencia.

#### Reglas de Validación

##### Constraints de Configuración

- Máximo 5 destinatarios de recompensas por event/function
- Máximo 5 events por configuración de contrato
- Máximo 5 functions por configuración de contrato
- Máximo 1,000,000 gas por event/function
- Los porcentajes de recompensas deben sumar exactamente 10,000 (100%)
- No se permiten direcciones de contrato duplicadas
- Se requiere al menos un event o function
- Todas las direcciones deben ser válidas (no nulas / non-zero)

##### Governance Controls

- Todas las modificaciones de configuraciones solo pueden ser realizadas por la Core DAO
- Todos los cambios requieren presentación mediante propuestas de gobernanza y aprobación
- Los cambios entran en vigor en la siguiente transacción después de la aprobación e implementación
- No existen mecanismos de emergencia ni admin override

## Modelo de Seguridad

### Control de Acceso

- **Core DAO Approval**: Todos los cambios de configuración requieren la aprobación de la propuesta por parte de la Core DAO
- **Sin Admin Keys**: No existen backdoors ni mecanismos de acceso de emergencia
- **Lógica Inmutable**: La lógica de Rev+ en Core no puede modificarse sin un hardfork

### Seguridad Económica

- **Distribución limitada**: Los límites máximos de gas previenen un drenaje excesivo de comisiones
- **Validación de porcentajes**: Todas las distribuciones deben sumar exactamente 100%
- **Preservación del límite de bloque**: La capacidad total de procesamiento por bloque permanece sin cambios

### Seguridad en la Coincidencia de Eventos

- **Coincidencia exacta de firmas**: Se utilizan hashes criptográficos de firmas de eventos
- **Verificación de logs**: Solo se procesan transaction logs verificados
- **Contract Address Binding**: Las configuraciones están vinculadas a direcciones específicas de contrato

## Performance Considerations

### Sobrecarga de gas

- La lógica de Rev+ añade una sobrecarga computacional mínima por transacción
- La coincidencia de firmas de eventos utiliza búsquedas de hash eficientes
- Los cálculos de distribución son operaciones aritméticas simples

### Escalabilidad

- Soporta procesamiento concurrente de múltiples contratos configurados
- La coincidencia de eventos escala linealmente con el número de configuraciones
- No se genera state bloat a partir de registros históricos de distribución

### Impacto en la red

- El tiempo de producción de bloques permanece sin cambios
- El throughput de transacciones se mantiene en 50M de gas por bloque
- La contabilización de gas distribuido previene la congestión de la red

