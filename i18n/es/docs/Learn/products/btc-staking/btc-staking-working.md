---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Cómo Funciona el Staking Autocustodiado de Bitcoin {#how-self-custodial-bitcoin-staking-works}

El Staking Autocustodiado de Bitcoin es uno de los tres componentes fundamentales del consenso Satoshi Plus de Core. Esta funcionalidad integra a los poseedores de Bitcoin en el consenso de Core, mejorando la seguridad de la red mientras permite que el Bitcoin se convierta en un activo generador de rendimiento.

A diferencia de los mecanismos de staking tradicionales que requieren que los usuarios transfieran la custodia de sus activos, el enfoque de Core aprovecha los timelocks de [`CheckLockTimeVerify (CLTV`)](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), una función criptográfica nativa de Bitcoin. Esto garantiza que el Bitcoin permanezca de forma segura en las wallets de los usuarios, al mismo tiempo que se utiliza en staking para apoyar la red de Core.

## Cómo funciona el Timelock CLTV

El bloqueo temporal CLTV es una función criptográfica nativa de Bitcoin que especifica una condición bajo la cual la salida de una transacción no puede ser gastada hasta que haya pasado un punto específico en el tiempo. Este tiempo puede definirse como una fecha y hora específica o por la altura del bloque. CLTV actúa como una bóveda con bloqueo temporal, restringiendo el acceso a los Bitcoines en staking hasta que transcurre un tiempo predeterminado. Cuando un usuario inicia una transacción CLTV:

- El Bitcoin permanece bloqueado durante un período de tiempo especificado.
- Una vez que el timelock expira, el Bitcoin se devuelve automáticamente al usuario.
- Los usuarios ganan recompensas de staking en tokens CORE por la duración del bloqueo.

A diferencia de los modelos de staking con custodia que involucran a terceros, el modelo de staking de Core permite a los usuarios mantener el control total de su Bitcoin mientras participan en la seguridad de la red y obtienen recompensas por ello.

### Cómo funciona el staking de Bitcoin en Core

#### 1. Creando una transacción de staking CLTV

Para participar en el staking de Bitcoin, los holders deben crear una transacción de timelock válida utilizando la función CLTV (`CheckLockTimeVerify`) nativa de Bitcoin. Para que la red de Core reconozca esta transacción como una delegación válida a un validador, la transacción debe incluir metadatos específicos en el script. Estos metadatos deben contener:

- **Dirección de Delegación del Validador:** El validador de Core al que el staker está delegando su Bitcoin.
- **Dirección de Recompensa:** La dirección donde el staker desea recibir las recompensas en CORE.

#### 2. Papel de los retransmisores de Core (relayers)

Los **relayers** en el ecosistema de Core continuamente **monitorean la red de Bitcoin** en busca de transacciones válidas con timelocks. Cuando se detecta una transacción CLTV, los relayers:

- Verifican los detalles de la transacción.
- Reenvían la información al **Consensus Engine** de Core para su procesamiento.
- El **Consensus Engine** de Core es responsable de recompensar a los stakers los Bitcoin delegados correspondientes.

### Consideraciones de Seguridad y Riesgo

- **Sin riesgo de custodia:** El mecanismo de Core **no** mueve BTC fuera de la cadena ni lo transfiere a contratos inteligentes de terceros.
- **El Bitcoin permanece en la billetera del usuario:** Los usuarios **siempre** mantienen el control total sobre su BTC en staking.
- **Sin Riesgo a Nivel de Protocolo:** El staking solo implica bloquear BTC mediante una función nativa de Bitcoin.

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
![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

El mecanismo de timelocking de Bitcoin en Core opera a través de dos blockchains separadas: Bitcoin y Core. La siguiente tabla describe las operaciones específicas que ocurren en cada cadena cuando los holders de Bitcoin participan y obtienen recompensas. Es importante destacar que este mecanismo mantiene el modelo de seguridad de Bitcoin sin introducir riesgos adicionales ni suposiciones de confianza. Mientras que la blockchain de Core monitorea y verifica las transacciones de timelock y distribuye recompensas, todas las operaciones con Bitcoin —incluyendo el timelocking, la redención y la custodia— permanecen completamente en la red de Bitcoin bajo el control del titular.

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
 - Aunque no existe una duración mínima obligatoria al hacer staking mediante la herramienta CLI, se recomienda un mínimo de 24 horas para ser elegible para recompensas de staking. La UI de Core normalmente sugiere un período de bloqueo de 5+ días para asegurar una participación óptima y mayor potencial de recompensas.

2. **Delegar a un validador de Core**
 - La transacción de timelock debe incluir:
  - **Dirección del validador de Core** (para la delegación de BTC).
  - **Dirección de recompensa CORE** (para recibir las recompensas CORE).

3. **Comienza el período de bloqueo de Bitcoin**
 - El BTC permanece bloqueado por una duración específica.
 - Permanece **seguro en la red de Bitcoin** y bajo la custodia del titular.

4. **Selección de Validador y Acumulación de Recompensas**
 - Core utiliza el BTC apostado para calcular el puntaje híbrido del validador.
 - Un mayor BTC delegado aumenta las probabilidades de elección del validador.
 - Los stakers obtienen recompensas en tokens CORE en función del monto bloqueado y la confiabilidad del validador.

5. **Disponibilidad de Bitcoin tras la Expiración del Timelock**
 - Una vez que expire el timelock, el BTC **permanece en la dirección del usuario pero queda bloqueado**.
 - El usuario debe enviar un **script de canje** explícitamente después de que termine el período de timelock para recuperar el acceso y poder gastar su BTC.
 - Alternativamente, los usuarios pueden **volver a delegarlo directamente** sin necesidad de canjearlo.

### Cronología

A continuación se presenta una descripción general de la cronología para el timelocking de Bitcoin y el momento en que comienzan a generarse las recompensas:

1. **Confirmación del Timelock:** Una vez que se transmite una transacción de timelock de Bitcoin, esta requiere confirmación en la blockchain de Bitcoin (típicamente 6 bloques o aproximadamente 60 minutos) antes de que los relayers de Core la reconozcan.
2. **Reconocimiento por la Red de Core:** Después de que la transacción de timelock ha sido confirmada en Bitcoin, los relayers de Core detectan la información de delegación e incluyen en ella los cálculos de elección de validadores para la siguiente ronda.
3. **Activación de Recompensas:** La elección de validadores ocurre una vez por ronda (~24 horas, basada en horario UTC+0). El Bitcoin en timelock comenzará a influir en la elección de validadores y generar recompensas a partir de la primera ronda posterior a la confirmación de la transacción.
4. **Disponibilidad de Datos:** Una vez que el Bitcoin en timelock está participando activamente en el consenso, todos los datos relacionados con el staking se vuelven accesibles a través de la API de Staking de Core.

#### **Ejemplo: Transacción de Staking de Bitcoin con duración de 2 días**

- Supongamos que se realiza una orden de timelock a las 6:00 AM UTC+0 del día de hoy.
- La transacción pasará por 6 bloques de Bitcoin durante el mismo día.
- El staking se volverá efectivo a las 00:00 AM UTC+0 del segundo día.
- Una vez que el staking sea efectivo, los datos de staking estarán disponibles.

#### **Ejemplo: Transacción de Staking de Bitcoin con duración de 3 días**

- Supongamos que se realiza una orden de staking a las 11:30 PM UTC+0.
- La transacción pasará por 6 bloques de Bitcoin durante el día siguiente.
- El staking se volverá efectivo a las 12:00 AM UTC+0 del tercer día.

### Guías para hacer staking o canjear Bitcoin

Sigua estas recomendaciones para asegurar un timelock y redención de Bitcoin eficientes:

1. **Incluya Comisiones Suficientes**

- Las transacciones con comisiones bajas pueden experimentar tiempos de confirmación demorados.
- Utilice una tarifa competitiva (medida en sats/vB) para garantizar un procesamiento oportuno.
- Durante períodos de congestión en la red, una comisión insuficiente puede hacer que su transacción permanezca en el mempool por una largo periodo (potencialmente días).

2. **Manejo de Transacciones Atrasadas**

- Si su transacción de Bitcoin está atascada debido a una comisión baja, considere usar un servicio acelerador de transacciones.
- Varios pools de minería ofrecen servicios de aceleración, como viaBTC.
- Alternativamente, si su wallet soporta Replace-By-Fee (RBF), puedes aumentar la comisión de tu transacción pendiente.

## Conclusión

El Timelocking de Bitcoin transforma al Bitcoin de un activo pasivo a un activo productivo que genera rendimiento sin renunciar a la autocustodia. Al aprovechar el mecanismo nativo de CLTV de Bitcoin, los holders pueden participar en el consenso de Core, contribuir a la selección de validadores, y ganar recompensas en CORE, todo mientras su Bitcoin permanece seguro en la blockchain de Bitcoin. Esta integración ejemplifica cómo Core extiende la utilidad de Bitcoin sin comprometer sus propiedades fundamentales de seguridad.

Para una guía detallada sobre el diseño de transacciones de staking, consulta [aquí](design.md).
