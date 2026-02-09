---
sidebar_label: Cómo Funciona
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo Funciona el Staking de Bitcoin con Autocustodia {#how-self-custodial-bitcoin-staking-works}

---

## Mecanismo de Bloqueo Temporal CLTV

[`CheckLockTimeVerify (CLTV)`](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) es una función nativa de Bitcoin que bloquea los outputs de una transacción hasta un tiempo o altura de bloque especificada. Cuando creas una transacción CLTV:

- El Bitcoin permanece bloqueado en tu wallet durante la duración especificada
- Ninguna tercera parte puede acceder a tu Bitcoin durante el periodo de bloqueo
- Conservas la custodia total durante todo el proceso
- Tras la expiración, debes enviar un redeem script para recuperar la capacidad de gasto

## Resumen del Proceso de Staking

1. **Crear una transacción con timelock** usando CLTV en la blockchain de Bitcoin
2. **Incluir metadatos** que especifiquen la delegación al validador y la dirección de recompensas
3. **Los realyers de Core** detectan transacciones de staking válidas en Bitcoin
4. **Gana recompensas en CORE** basadas en el rendimiento del validador y la cantidad en stake
5. **Redime tu Bitcoin** después de que expire el timelock usando el redeem script

## Modelo de Seguridad

**Riesgo Cero de Custodia**: Tu Bitcoin nunca sale de la blockchain de Bitcoin ni de tu control. El mecanismo de staking usa únicamente funciones nativas de Bitcoin, sin introducir nuevas suposiciones de confianza.

**Garantías Clave de Seguridad**:

- El Bitcoin permanece en tu billetera durante todo el staking
- No hay riesgos a nivel de protocolo más allá de la seguridad nativa de Bitcoin
- Sin custodia de terceros ni riesgos asociados a contratos inteligentes
- El mal comportamiento de un validador no puede afectar tu capital en Bitcoin

## Requisitos Técnicos

### Estructura de la Transacción

Tu transacción de staking con CLTV debe incluir:

**Salidas Requeridas**:

- **Salida con timelock CLTV**: Bloquea tu Bitcoin durante la duración especificada
- **`OP_RETURN` output**: Contiene los metadatos de delegación

**Formato de los Metadatos** (en `OP_RETURN`):

- Dirección del validador de Core (destino de la delegación)
- Dirección de recompensas CORE (a donde se enviarán las recompensas)

### Requisitos Mínimos

| **Método**        | **BTC Mínimo**           | **Duración Mínima**                       |
| ----------------- | ------------------------ | ----------------------------------------- |
| UI Oficial        | 0.01 BTC | 5 días                                    |
| Scripting directo | Sin mínimo               | 24 horas (recomendado) |

## Operaciones Cross-Chain

| **Paso**      | **Red de Bitcoin**                                                          | **Red de Core**                                                        |
| ------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Inicio**    | El usuario crea una transacción CLTV con metadatos de delegación            | Los relayers monitorean transacciones de staking válidas               |
| **Timelock**  | El Bitcoin queda bloqueado en la wallet del usuario, transacción confirmada | Los relayers validan y registran la posición de staking                |
| **Ganancia**  | El Bitcoin permanece bloqueado y seguro                                     | Las recompensas en CORE se acumulan según el rendimiento del validador |
| **Redención** | El usuario envía el script de redención para desbloquear su Bitcoin         | Los relayers actualizan los registros de staking                       |

## Flujo de Transacciones

<p align="center">
![btc-staking-tx-workflow](../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

### Cronología y Activación

**Proceso de Confirmación**

1. **Transmisión de la transacción**: Transacción CLTV enviada a la red Bitcoin
2. **Confirmación en Bitcoin**: ~60 minutos (6 bloques) para reconocimiento
3. **Detección en Core**: Los relayers identifican la delegación válida
4. **Activación de recompensas**: Siguiente ronda de elección de validadores (~24 horas desde UTC+0)

**Ejemplo de cronología**
Si haces staking de Bitcoin a las 6:00 AM UTC+0:

- Confirmación en Bitcoin: Mismo día después de 6 bloques
- El staking se activa: 12:00 AM UTC+0 del día siguiente
- Las recompensas comienzan a acumularse: Desde la primera ronda activa

## Mejores prácticas

### Tarifas de Transacción

- **Utiliza tarifas competitivas**: Las tarifas bajas causan retrasos en la confirmación
- **Monitorea la congestión de la red**: Ajusta las tarifas según sea necesario
- **Considera RBF**: Activa esta función para poder ajustar las tarifas

### Manejo de Retrasos

- **Aceleradores de transacción**: Usa servicios como viaBTC si la transacción está atorada
- **Incremento de tarifas**: Aumenta las tarifas en transacciones pendientes que usan RBF
- **Paciencia**: Las transacciones con tarifas bajas pueden tardar días durante congestión

### Selección de Validadores

Elige validadores basándote en:

- Historial de rendimiento y tiempo activo
- Tarifas de comisión
- Reputación en la comunidad

## Redelgación vs Redención

**Redención**: Desbloqueo de Bitcoin para uso general

- Requiere un script de redención después de que expire el timelock
- El Bitcoin vuelve a ser completamente disponible para gasto

**Redelgación**: Cambiar a un validador diferente sin desbloquear

- Se puede hacer directamente sin redención
- Mantiene la posición de staking con el nuevo validador

## API y Acceso a Datos

Los datos de staking están disponibles a través de la Core Staking API una vez que:

- La transacción de Bitcoin está confirmada (6 bloques)
- Los relayers han procesado la delegación
- La posición de staking está activa en las elecciones de validadores

Esto permite a los desarrolladores rastrear posiciones de staking, recompensas y desempeño de validadores de forma programática.

Para una guía detallada sobre el diseño de transacciones de staking, consulta [aquí](./design.md).
