---
sidebar_label: Cómo funciona
hide_table_of_contents: false
sidebar_position: 2
---

# How Self-Custodial Bitcoin Staking Works {#how-self-custodial-bitcoin-staking-works}

Self-Custodial Bitcoin Staking is one of the three fundamental components of Core’s Satoshi Plus consensus. This feature integrates Bitcoin holders into Core’s consensus, enhancing network security while enabling Bitcoin to become a yield-generating asset.

Unlike traditional staking mechanisms that require users to transfer custody of their assets, Core's approach leverages [`CheckLockTimeVerify (CLTV)`](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) timelocks, a Bitcoin-native cryptographic function. This ensures Bitcoin remains securely in users’ wallets while still being staked to support the Core network.

## Cómo funciona el bloqueo temporal CLTV (`CheckLockTimeVerify`)

El bloqueo temporal CLTV es una función criptográfica nativa de Bitcoin que especifica una condición bajo la cual la salida de una transacción no puede ser gastada hasta que haya pasado un punto específico en el tiempo. Este tiempo puede definirse como una fecha y hora específica o por la altura del bloque. CLTV actúa como una bóveda con bloqueo temporal, restringiendo el acceso a los Bitcoines en staking hasta que transcurre un tiempo predeterminado. Cuando un usuario inicia una transacción CLTV:

- The Bitcoin remains locked for a specified duration.
- Once the timelock expires, the Bitcoin is automatically returned to the user.
- Los usuarios ganan recompensas de staking en tokens CORE por la duración del bloqueo.

A diferencia de los modelos de staking con custodia que involucran a terceros, el modelo de staking de Core permite a los usuarios mantener el control total de su Bitcoin mientras participan en la seguridad de la red y obtienen recompensas por ello.

### Cómo funciona el staking de Bitcoin en Core

#### 1. Creando una transacción de staking CLTV

To participate in Bitcoin staking, holders must create a valid timelock transaction using Bitcoin's CLTV (`CheckLockTimeVerify`) function. For the Core network to recognize this transaction as a valid delegation to a validator, the timelock transaction must include specific metadata in the script. This metadata must contain:

- **Dirección de Delegación del Validador:** El validador de Core al que el staker está delegando su Bitcoin.
- **Dirección de Recompensa:** La dirección donde el staker desea recibir las recompensas en CORE.

#### 2. Papel de los retransmisores de Core (relayers)

**Relayers** in the Core ecosystem continuously **monitor the Bitcoin network** for valid Bitcoin timelock transactions. Cuando se detecta una transacción CLTV, los relayers:

- Verifican los detalles de la transacción.
- Reenvían la información al **Motor de Consenso** de Core para su procesamiento.
- Core’s **Consensus Engine** is then responsible for awarding the stakers delegated Bitcoin accordingly.

### Consideraciones de Seguridad y Riesgo

- **Sin riesgo de custodia:** El mecanismo de Core **no** mueve BTC fuera de la cadena ni lo transfiere a contratos inteligentes de terceros.
- **El Bitcoin permanece en la billetera del usuario:** Los usuarios **siempre** mantienen el control total sobre su BTC en staking.
- **No Protocol-Level Risk:** Staking only involves locking BTC via a Bitcoin-native function.

### Requisitos para el Staking de Bitcoin

#### Requisitos Generales

Para garantizar que una transacción de staking de BTC sea **válida y detectada** por los relayers de Core, los usuarios deben:

1. **Usar CLTV Timelock:** El BTC debe estar bloqueado utilizando una **transacción de timelock nativa de Bitcoin** que especifique los detalles de la delegación, como la salida de la transacción.
2. **Incluir una salida OP_RETURN:** La transacción debe contener:
 - **Dirección del validador de Core** (para delegar su Bitcoin en staking).
 - **Dirección de recompensa en CORE** (para recibir las recompensas del staking).

#### Requisitos mínimos de Staking

| Método                     | **BTC mínimo en staking** | Duración mínima del bloqueo |
| -------------------------- | ------------------------- | --------------------------- |
| \*\*Interfaz Official \*\* | 0.01 BTC  | 5 días                      |
| **Script de Staking**      | Sin Mínimo                | No hay requisito de bloqueo |

### Flujo de las transacciones

<p align="center">
![btc-staking-tx-workflow](../../../../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

Core's Bitcoin Timelocking operates across two separate blockchains—Bitcoin and Core. The table below outlines the specific operations that occur on each chain when Bitcoin holders participate and earn rewards. Importantly, this mechanism maintains Bitcoin's security model without introducing additional risks or trust assumptions. While the Core blockchain monitors and verifies timelock transactions and distributes rewards, all Bitcoin operations—including timelocking, redemption, and custody—remain entirely on the Bitcoin network under the holder's control.

| **Paso**                                                                      | **Red de Bitcoin**                                                                                                                                                                                                                                                                            | **Red de Core**                                                                                                                       |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Iniciar el staking. Iniciar el staking** | El usuario crea una transacción **CLTV con timelock**, bloqueando BTC por una duración elegida y especificando los detalles de la delegación en `OP_RETURN`.                                                                                                                  | Los relayers monitorean transacciones de Bitcoin por actividad válida de staking.                                     |
| **2. Transmitir transacción**                                 | El usuario envía la **transacción CLTV** a la red de Bitcoin.                                                                                                                                                                                                                 | Los relayers rastrean y validan la transacción.                                                                       |
| **3. Comienza el periodo de bloqueo**                         | El BTC se bloquea en la billetera del usuario en la red de Bitcoin. Una vez confirmados (lo cual puede tomar horas debido al tiempo del bloque, confirmaciones y congestión), los activos bloqueados aparecen en los registros de staking. | Los relayers registran el BTC bloqueado y actualizan los registros de staking de Core.                                |
| \*\*4. Detección por los relayers                             | Los relayers detectan la transacción de staking en la red de Bitcoin.                                                                                                                                                                                                         | La verifican y la reenvían al Motor de Consenso de Core.                                                              |
| **5. Acumulación de Recompensas por Staking**                 | El BTC permanece bloqueado, pero las recompensas se acumulan en Core.                                                                                                                                                                                                         | Las recompensas en tokens CORE se acumulan durante el periodo de staking; los usuarios deben reclamarlas manualmente. |
| **6. Desbloqueo del Bitcoin**                                 | Después de que expire el timelock, el usuario **debe** enviar un script de canje para recuperar el acceso a su BTC bloqueado.                                                                                                                                                 | Los relayers actualizan los registros de staking para reflejar el desbloqueo del BTC.                                 |

**Importante:** Los usuarios también pueden **redelegar** BTC directamente sin necesidad de redimirlo primero.\
_**(_Opcional_)**_ Después de que la transacción sea confirmada en la red Bitcoin, los usuarios pueden recuperar los datos de la transacción y enviarlos a la blockchain de Core. Este paso es opcional si los usuarios componen la transacción en un formato estándar, como lo sugiere Core. Los relayers de la infraestructura de Core detectarán la transacción de staking y la enviarán a la cadena de bloques de Core en nombre de los usuarios.

#### Proceso de staking paso a paso

1. **Bloqueo del Bitcoin**
 - El usuario crea una **transacción CLTV con bloqueo de tiempo** en la red de Bitcoin.
 - While there’s no minimum lock duration when staking via the CLI tool, a minimum of 24 hours is recommended to be eligible for staking rewards. The Core UI typically suggests a lock period of 5+ days to ensure optimal participation and reward potential.

2. **Delegar a un validador de Core**
 - The timelocking transaction must include:
  - **Dirección del validador de Core** (para la delegación de BTC).
  - **Dirección de recompensa CORE** (para recibir las recompensas CORE).

3. **Comienza el período de bloqueo de Bitcoin**
 - El BTC permanece bloqueado por una duración específica.
 - It remains **securely on the Bitcoin network** in the holder's custody.

4. **Selección de Validador y Acumulación de Recompensas**
 - Core utiliza el BTC apostado para calcular el puntaje híbrido del validador.
 - Un mayor BTC delegado aumenta las probabilidades de elección del validador.
 - Stakers earn **CORE token rewards** based on their timelocked amount and validator reliability.

5. **Bitcoin Availability After Timelock Expiration**
 - Una vez que expire el timelock, el BTC **permanece en la dirección del usuario pero queda bloqueado**.
 - El usuario debe enviar un **script de canje** explícitamente después de que termine el período de timelock para recuperar el acceso y poder gastar su BTC.
 - Alternativamente, los usuarios pueden **volver a delegarlo directamente** sin necesidad de canjearlo.

### Timeline

Here's an overview of the timeline for Bitcoin timelocking and when rewards take effect:

1. **Timelock Confirmation:** Once a Bitcoin timelock transaction is broadcast, it requires confirmation on the Bitcoin blockchain (typically 6 blocks or approximately 60 minutes) before Core's relayers will recognize it.
2. **Core Network Recognition:** After the timelock transaction is confirmed on Bitcoin, Core's relayers detect the delegation information and include it in the validator election calculations for the next round.
3. **Rewards Activation:** Validator election occurs once per round (~24 hours, based on UTC+0 time). Timelocked Bitcoin will influence validator election and generate rewards starting from the first round after transaction confirmation.
4. **Data Availability:** Once the timelocked Bitcoin is actively participating in consensus, all related staking data becomes accessible via the Core Staking API.

#### **Example: Bitcoin Staking Transaction with 2-day Duration**

- Assume a timelock order is placed at 6:00 AM UTC+0 today.
- The transaction will go through 6 Bitcoin blocks on the same day.
- The staking will become effective at 00:00 AM UTC+0 on the second day.
- After the staking goes effective, the staking data is then accessible.

#### **Example: Bitcoin Staking Transaction with 3-day Duration**

- Assume a staking order is placed at 11:30 PM UTC+0.
- The transaction will go through 6 Bitcoin blocks on the next day.
- The staking will become effective at 12:00 AM UTC+0 on the third day.

### Guías para hacer staking o canjear Bitcoin

Follow these guidelines to ensure efficient Bitcoin timelocking and redemption:

1. **Include Sufficient Fees**

- Transactions with low fees may experience delayed confirmation times.
- Use a competitive fee rate (measured in sats/vB) to ensure timely processing.
- During periods of network congestion, insufficient fees may result in your transaction remaining in the mempool for an extended period (potentially days).

2. **Handling Delayed Transactions**

- If your Bitcoin transaction is stuck due to low fees, consider using a transaction accelerator service.
- Several mining pools offer acceleration services, such as viaBTC.
- Alternatively, if your wallet supports Replace-By-Fee (RBF), you can increase the fee on your pending transaction.

## Conclusión

Bitcoin Timelocking transforms Bitcoin from a passive store of value into a productive asset that generates yield while maintaining self-custody. By leveraging Bitcoin's native CLTV mechanism, holders can participate in Core's consensus, contribute to validator selection, and earn CORE rewards—all while their Bitcoin remains securely on the Bitcoin blockchain. This integration exemplifies how Core extends Bitcoin's utility without compromising its fundamental security properties.

Para una guía detallada sobre el diseño de transacciones de staking, consulta [aquí](design.md).
