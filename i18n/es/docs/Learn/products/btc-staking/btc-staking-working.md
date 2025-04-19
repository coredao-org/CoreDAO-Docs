---
sidebar_label: Cómo funciona
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo Funciona el Staking sin Custodia de Bitcoin\*\* {#how-non-custodial-bitcoin-staking-works}

El Staking sin Custodia de Bitcoin es uno de los tres fundamentos del mecanismo de consenso Satoshi Plus de Core. Esta función integra a los poseedores de Bitcoin en el ecosistema de Core, mejorando la seguridad de la red mientras permite que el Bitcoin se convierta en un activo generador de rendimiento.

Los stakers de Bitcoin ganan rendimiento como recompensas de staking en forma de tokens CORE por su Bitcoin normalmente pasivo durante el período de bloqueo que definan (es decir, delegan su Bitcoin a validadores en la red Core). El Staking sin Custodia de Bitcoin en Core convierte miles de millones de dólares en valor no aprovechado de Bitcoin en algo productivo, remunerando a los stakers mientras amplía el alcance de los casos de uso de Bitcoin.

A diferencia de los mecanismos tradicionales de staking que requieren que los usuarios transfieran la custodia de sus activos, el enfoque de Core aprovecha [CheckLockTimeVerify (CLTV)](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), una función criptográfica nativa de Bitcoin basada en bloqueo por tiempo. Esto asegura que el Bitcoin permanezca de forma segura en las carteras de los usuarios mientras sigue siendo utilizado en staking en la red Core.

## Cómo funciona el bloqueo temporal CLTV (CheckLockTimeVerify)

El bloqueo temporal CLTV es una función criptográfica nativa de Bitcoin que especifica una condición bajo la cual la salida de una transacción no puede ser gastada hasta que haya pasado un punto específico en el tiempo. Este tiempo puede definirse como una fecha y hora específica o por la altura del bloque. CLTV actúa como una bóveda con bloqueo temporal, restringiendo el acceso a los Bitcoines en staking hasta que transcurre un tiempo predeterminado. Cuando un usuario inicia una transacción CLTV:

- El BTC permanece bloqueado por una duración específica.
- Una vez que expira el bloqueo de tiempo, los BTC se devuelven automáticamente al usuario.
- Los usuarios ganan recompensas de staking en tokens CORE por la duración del bloqueo.

A diferencia de los modelos de staking con custodia que involucran a terceros, el modelo de staking de Core permite a los usuarios mantener el control total de su Bitcoin mientras participan en la seguridad de la red y obtienen recompensas por ello.

### Cómo funciona el staking de Bitcoin en Core

#### 1. Creando una transacción de staking CLTV

Para participar, los poseedores de Bitcoin deben iniciar una **transacción CLTV calificada** en la red de Bitcoin. Para asegurar que las transacciones sean válidas y puedan ser seleccionadas como delegaciones para los validadores en la red Core, los stakers deben incluir un script que contenga la siguiente información:

- **Dirección de Delegación del Validador:** El validador de Core al que el staker está delegando su Bitcoin.
- **Dirección de Recompensa:** La dirección donde el staker desea recibir las recompensas en CORE.

#### 2. Papel de los retransmisores de Core (relayers)

Los **relayers** en el ecosistema de Core **monitorean continuamente la red de Bitcoin** en busca de transacciones válidas de staking de Bitcoin para los validadores de Core. Cuando se detecta una transacción CLTV, los relayers:

- Verifican los detalles de la transacción.
- Reenvían la información al **Motor de Consenso** de Core para su procesamiento.
- El **Motor de Consenso** de Core es luego responsable de recompensar a los stakers de acuerdo con ello.

### Consideraciones de Seguridad y Riesgo

- **Sin riesgo de custodia:** El mecanismo de Core **no** mueve BTC fuera de la cadena ni lo transfiere a contratos inteligentes de terceros.
- **El Bitcoin permanece en la billetera del usuario:** Los usuarios **siempre** mantienen el control total sobre su BTC en staking.
- **Sin riesgo a nivel de protocolo:** El staking solo implica bloquear BTC a través de una función nativa de Bitcoin, lo que garantiza seguridad y descentralización.

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

La implementación de staking de Bitcoin en Core es completamente nativa y sin custodia, es decir, los usuarios pueden mantener sus activos de Bitcoin en la red de Bitcoin sin tener que trasladarlos antes de hacer staking.

<p align="center">
![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

Tenga en cuenta que las operaciones de Staking sin Custodia de BTC se realizan en dos cadenas de bloques separadas: Bitcoin y Core. La siguiente tabla identifica lo que sucede en cada cadena de bloques para que los poseedores de Bitcoin ganen recompensas de staking exitosamente a través del staking sin custodia de Bitcoin. Es importante señalar que el Staking sin Custodia de Bitcoin en Core no introduce riesgos adicionales ni supuestos de confianza. Más allá de monitorear y verificar las transacciones de staking de Bitcoin, la acumulación y la reclamación de recompensas, todas las operaciones, incluidos el bloqueo de activos, el canje y la gestión de activos, permanecen de manera segura en la red Bitcoin.

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
 - La duración mínima del staking depende del método utilizado. La interfaz web oficial requiere un mínimo de 5 días, mientras que el staking mediante script no tiene requisito de bloqueo.

2. **Delegar a un validador de Core**
 - La transacción de staking debe incluir:
  - **Dirección del validador de Core** (para la delegación de BTC).
  - **Dirección de recompensa CORE** (para recibir las recompensas CORE).

3. **Comienza el período de bloqueo de Bitcoin**
 - El BTC permanece bloqueado por una duración específica.
 - Permanece **de manera segura en la red de Bitcoin** sin moverse fuera de la cadena.

4. **Selección de Validador y Acumulación de Recompensas**
 - Core utiliza el BTC apostado para calcular el puntaje híbrido del validador.
 - Un mayor BTC delegado aumenta las probabilidades de elección del validador.
 - Los stakers ganan **recompensas en tokens CORE** basadas en la duración de la delegación.

5. **Redimir Bitcoin después de que termine el staking**
 - Una vez que expire el timelock, el BTC **permanece en la dirección del usuario pero queda bloqueado**.
 - El usuario debe enviar un **script de canje** explícitamente después de que termine el período de timelock para recuperar el acceso y poder gastar su BTC.
 - Alternativamente, los usuarios pueden **volver a delegarlo directamente** sin necesidad de canjearlo.

### Cronograma para el Staking de Bitcoin sin Custodia

Aquí tienes una descripción general del cronograma para realizar una orden de staking de Bitcoin y cuándo comienzan a aplicarse las recompensas:

1. **Colocación de la orden de staking:** Una vez que se coloca la orden de staking, normalmente toma 6 bloques de Bitcoin (aproximadamente 60 minutos) para que la transacción de Bitcoin se transfiera a la blockchain de Core.
2. **Activación de la recompensa de staking:** Después de que se complete la transferencia, toma una ronda (~24 horas, basada en la hora UTC+0) para que la recompensa de staking entre en vigor.
3. **Accesibilidad de los datos de staking:** Después de que el staking se haga efectivo, los datos de staking estarán disponibles a través de la API de Staking.

#### **Ejemplo: Transacción de staking de Bitcoin con una duración de 2 días**

- Supongamos que se coloca una orden de staking a las 6:00 AM UTC+0 de hoy.
- La transacción pasará por 6 bloques de Bitcoin en el mismo día.
- El staking se hará efectivo a las 00:00 AM UTC+0 del segundo día.
- Después de que el staking se haga efectivo, sus datos estarán disponibles.

#### **Ejemplo: Transacción de Staking de Bitcoin con Duración de 3 Días**

- Supón que se coloca una orden de staking a las 11:30 PM UTC+0.
- La transacción pasará por 6 bloques de Bitcoin al día siguiente.
- El staking se hará efectivo a las 12:00 AM UTC+0 del tercer día.
- Después de que el staking se haga efectivo, sus datos estarán disponibles.

### Guías para hacer staking o canjear Bitcoin

Por favor, siga estas directrices para asegurar transacciones fluidas al hacer staking o canjear su Bitcoin. Seguir estas recomendaciones puede asegurar un proceso más eficiente de staking y canjeo para su Bitcoin.

1. **Evitar Tarifas de Gas Bajas**
 - Las transacciones con **bajas comisiones de gas** pueden experimentar largos tiempos de confirmación.
 - Utiliza una **comisión de red competitiva** para asegurar un procesamiento oportuno.
 - Usar una comisión de gas demasiado baja, especialmente durante períodos de congestión de la red, puede hacer que tu transacción de Bitcoin tarde un tiempo prolongado (potencialmente días) en ser confirmada.

2. **Manejo de transacciones atascadas**

- Si su transacción de Bitcoin se retrasa debido a una tarifa de gas baja, considere usar un **acelerador de transacciones de Bitcoin**.
- Los servicios de aceleración gratuitos, como [viaBTC](https://www.viabtc.com/tools/txaccelerator), pueden ayudar a acelerar las confirmaciones.
- Se recomienda investigar y elegir un servicio que se adapte mejor a tus necesidades.

## Conclusión

El **Staking de Bitcoin sin Custodia** de Core transforma Bitcoin de un valor de reserva pasivo a un activo productivo—**de manera segura y sin riesgo de custodia**. Al aprovechar el staking nativo de Bitcoin, los poseedores de BTC pueden contribuir a la seguridad de Core, ganar recompensas en CORE y maximizar la utilidad de sus activos mientras mantienen el control total sobre su Bitcoin.

Para una guía detallada sobre el diseño de transacciones de staking, consulta [aquí](design.md).