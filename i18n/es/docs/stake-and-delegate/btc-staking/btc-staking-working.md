---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Cómo Funciona el Staking Autocustodiado de Bitcoin {#how-self-custodial-bitcoin-staking-works}

---

## Mecanismo de Timelock CLTV

[`CheckLockTimeVerify (CLTV)`](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) es una función nativa de Bitcoin que bloquea las salidas de transacciones hasta un tiempo o altura de bloque especificados. Al crear una transacción CLTV:

- El Bitcoin permanece bloqueado en tu wallet durante la duración especificada
- Ninguna tercera parte puede acceder a tu Bitcoin durante el período de bloqueo
- Mantienes la custodia completa durante todo el proceso
- Tras la expiración, debes enviar un script de redención para recuperar la capacidad de gasto

## Resumen del Proceso de Staking

1. **Crear una transacción con timelock** CLTV en la blockchain de Bitcoin
2. **Incluir metadata** que especifique la delegación al validador y la dirección para recibir recompensas
3. **Los relayers de Core** detectan transacciones válidas de staking en Bitcoin
4. **Ganar recompensas CORE** basadas en el desempeño del validador y la cantidad apostada
5. **Redimir el Bitcoin** después de que expire el timelock usando el script de redención

## Modelo de Seguridad

**Riesgo Cero de Custodia**: Tu Bitcoin nunca sale de la blockchain de Bitcoin ni de tu control. El mecanismo de staking utiliza únicamente funciones nativas de Bitcoin sin introducir suposiciones adicionales de confianza.

**Garantías Clave de Seguridad**:

- El Bitcoin permanece en tu wallet durante todo el staking
- No existe riesgo a nivel de protocolo más allá de la seguridad nativa de Bitcoin
- No hay riesgo de custodia por terceros ni por contratos inteligentes
- El mal comportamiento de un validador no puede afectar el principal de tu Bitcoin

## Requisitos Técnicos

### Estructura de la Transacción

Tu transacción de staking CLTV debe incluir:

**Salidas Requeridas**:

- **CLTV timelock output**: Bloquea tu Bitcoin por la duración especificada
- **`OP_RETURN` output**: Contiene la metadata de delegación

**Formato de Metadata** (en `OP_RETURN`):

- Dirección del validador Core (objetivo de la delegación)
- Dirección de recompensa CORE (donde se enviarán las recompensas)

### Requisitos Mínimos

| **Método** | \*\*BTC Mínimo"          | \*_Duración Mínima_                       |
| ---------- | ------------------------ | ----------------------------------------- |
|            | 0.01 BTC | 5 días                                    |
|            | Sin Mínimo               | 24 horas (recomendado) |

## Operaciones Cross-Chain

| **Paso** | **Red de Bitcoin**                                                     | **Red de Core**                                                        |
| -------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|          | El usuario crea una transacción CLTV con metadata de delegación        | Los relayers monitorean transacciones de staking válidas               |
|          | El Bitcoin se bloquea en la wallet del usuario, transacción confirmada | Los relayers validan y registran la posición de staking                |
|          | El Bitcoin permanece bloqueado y seguro                                | Las recompensas en CORE se acumulan según el rendimiento del validador |
|          | El usuario envía el redeem script para desbloquear el Bitcoin          | Los relayers actualizan los registros de staking                       |

## Flujo de las transacciones

<p align="center"></p>

### Cronograma y Activación

**Proceso de Confirmación**

1. **Transmisión de la transacción**: La transacción CLTV se envía a la red de Bitcoin
2. **Confirmación en Bitcoin**: ~60 minutos (6 bloques) para su reconocimiento
3. **Detección en Core**: Los relayers identifican la delegación válida
4. **Activación de recompensas**: En la próxima ronda de elección de validadores (~24 horas desde las UTC+0)

**Ejemplo de Cronograma**
Si haces staking de Bitcoin a las 6:00 AM UTC+0:

- Confirmación en Bitcoin: Mismo día después de 6 bloques
- Staking se activa: A las 12:00 AM UTC+0 del día siguiente
- Recompensas comienzan a acumularse: Desde la primera ronda activa

## Mejores Prácticas

### Comisiones de Transacción

- **Usa comisiones competitivas**: Las comisiones bajas causan demoras en la confirmación
- **Monitorea la congestión de la red**: Ajusta las tarifas en consecuencia
- **Considera RBF**: Habilita Replace-By-Fee para ajustar las comisiones

### Manejo de Demoras

- **Aceleradores de transacción**: Usa servicios como viaBTC si la transacción está atascada
- **Fee bumping**: Incrementa la tarifa en transacciones RBF pendientes
- **Paciencia**: Las transacciones con baja tarifa pueden tardar días durante congestión

### Selección de Validadores

Elige validadores en función de:

- Historial de rendimiento y disponibilidad
- Tasas de comisión
- Reputación dentro de la comunidad

## Redelegación vs Redención

**Redemption**: Unlock Bitcoin for general use

- Requiere un redeem script después de que expire el timelock
- El Bitcoin se vuelve completamente gastable nuevamente

**Redelegación**: Cambiar a un validador diferente sin desbloquear

- Puede hacerse directamente sin redención
- Mantiene la posición de staking con el nuevo validador

## API y Acceso a Datos

Los datos de staking están disponibles a través de la Core Staking API una vez que:

- La transacción de Bitcoin se confirma (6 bloques)
- Los relayers han procesado la delegación
- La posición de staking está activa en las elecciones de validadores

Esto permite a los desarrolladores rastrear posiciones de staking, recompensas y el rendimiento de los validadores de forma programática.

Para una guía detallada sobre el diseño de transacciones de staking, consulta [aquí](./design.md).
