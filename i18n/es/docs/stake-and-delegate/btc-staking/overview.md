---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Staking de Bitcoin Autocustodiado

El Staking de Bitcoin (o Timelocking de Bitcoin) permite a los poseedores de Bitcoin participar en el consenso de Core bloqueando temporalmente sus BTC mediante la función nativa CheckLockTimeVerify (CLTV) de Bitcoin, sin transferir la custodia ni exponer sus activos al riesgo de contratos inteligentes.

El Staking de Bitcoin transforma el Bitcoin de un activo estático en uno productivo que genera rendimiento, manteniendo sus propiedades de seguridad. Al incluir metadatos de selección de validadores en las transacciones con timelock, los poseedores de Bitcoin pueden participar en la elección de validadores de Core para ganar recompensas en tokens CORE.

## Cómo Funciona el Staking de Bitcoin en Satoshi Plus

El protocolo nativo de Bitcoin incluye una función CLTV que permite a los usuarios hacer que sus bitcoins sean imposibles de gastar por un período específico. Core aprovecha este mecanismo para permitir a los poseedores de Bitcoin participar en el consenso manteniendo el control total sobre sus activos.

1. **Creación de Timelocks:** Los poseedores de Bitcoin utilizan la función CLTV para bloquear temporalmente su Bitcoin en la blockchain de Bitcoin durante un período elegido (mínimo de 24 horas), haciendo que esas monedas sean temporalmente no gastables.

2. **Inclusión de Metadatos:** Durante la creación del timelock, los holders incluyen metadatos que especifican el validador de Core elegido y una dirección de Core donde se recibirán las recompensas en tokens CORE.

3. **Apoyo a Validadores:** La cantidad de Bitcoin en tinmelock en apoyo a un validador influye en su posición dentro de la elección de validadores de Core, lo que afecta sus probabilidades de ser seleccionado para producir bloques.

4. **Monitoreo por Relayers:** La red de relayers de Core monitorea la blockchain de Bitcoin en busca de transacciones con timelock que incluyan metadatos válidos de consenso.

5. **Distribución de Recompensas:** Los validadores elegidos aseguran la blockchain de Core produciendo bloques y validando transacciones. Con base en la fiabilidad del validador y la cantidad de Bitcoin bloqueado a su favor, el protocolo de Core distribuye recompensas en tokens CORE a las direcciones de Core especificadas por los stakers de Bitcoin.

6. **Expiración del Timelock:** Cuando termina el período del timelock, los Bitcoin se vuelven gastables nuevamente, y la participación en el consenso de Core finaliza. Cualquier recompensa en CORE obtenida permanece en la dirección de Core del usuario, pero no se generarán más recompensas a menos que se cree un nuevo timelock.

## Importancia del Staking de Bitcoin en Satoshi Plus

- **Activación de Bitcoin:** Convierte a Bitcoin de un activo estático en uno productivo que genera rendimiento sin comprometer su seguridad ni requerir su conversión.

- **Contribución a la Seguridad:** Aprovecha el enorme valor de Bitcoin para reforzar el modelo de seguridad de Core, sin que Bitcoin tenga que salir de su blockchain nativa.

- **Preservación de la Custodia:** Permite que los holders de Bitcoin participen en el consenso de Core mientras mantienen la custodia total y directa de sus activos.

#### **Conclusión**

El staking de Bitcoin permite a los holders obtener rendimiento al contribuir con la seguridad de Core, sin perder la custodia de sus activos. Como parte fundamental del consenso Satoshi Plus, trabaja en conjunto con DPoW y DPoS para formar un marco de seguridad robusto y de múltiples capas. Este mecanismo alinea los incentivos entre los holders de Bitcoin y la red Core, transformando a Bitcoin de una reserva de valor pasiva en un activo productivo, sin necesidad de salir de su blockchain nativa.