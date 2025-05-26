---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Staking Autocustodiado de Bitcoin (Timelocking) en Satoshi Plus

---

## Visión general

El Staking de Bitcoin (o Bitcoin Timelocking) permite a los poseedores de Bitcoin participar en el consenso de Core bloqueando temporalmente sus Bitcoins mediante la función nativa de CheckLockTimeVerify (CLTV), sin ceder la custodia ni exponer sus activos al riesgo de contratos inteligentes.

El Staking de Bitcoin transforma el Bitcoin de un activo estático a uno productivo que genera rendimiento, sin comprometer sus propiedades de seguridad. Al incluir metadatos de selección de validadores en las transacciones de timelock, los poseedores de Bitcoin pueden participar en la elección de validadores de Core y así ganar recompensas en tokens CORE.

## Cómo Funciona el Staking de Bitcoin en Satoshi Plus

El protocolo nativo de Bitcoin incluye una función CLTV, que permite a los usuarios hacer que Bitcoin no se puedan gastar durante un período de tiempo determinado. Core aprovecha este mecanismo para permitir a los poseedores de Bitcoin participar en el consenso mientras mantienen el control total de sus activos.

1. **Creación de Timelocks:** Los poseedores de Bitcoin utilizan la función CLTV para bloquear su Bitcoin en la cadena de bloques de Bitcoin durante un periodo de tiempo determinado (mínimo 24 horas), haciendo que esas monedas sean temporalmente inutilizables.

2. **Inclusión de Metadatos:** Durante la creación del timelock, los poseedores incluyen metadatos especificando el validador Core elegido y una dirección Core para recibir recompensas CORE.

3. **Apoyo a Validadores:** La cantidad de Bitcoin bloqueado en apoyo a un validador influye en su posición en la elección de validador de Core, teniendo efecto en sus posibilidades de ser seleccionado para producir bloques.

4. **Monitoreo por Relayers:** La red de relayers de Core monitorea la blockchain de Bitcoin en busca de transacciones con bloqueo temporal que incluyan metadatos de consenso válidos.

5. **Distribución de Recompensas:** Los validadores elegidos aseguran la blockchain de Core produciendo bloques y validando transacciones. Con base en la confiabilidad del validador y la cantidad de Bitcoin bloqueado temporalmente delegado en su apoyo, el protocolo de Core distribuye recompensas en tokens CORE a las direcciones de Core especificadas por los participantes del staking de Bitcoin.

6. **Vencimiento del Timelock:** Cuando finaliza el período de timelock, el Bitcoin vuelve a ser gastable y cesa la participación en el consenso de Core. Las recompensas en CORE obtenidas permanecen en la dirección de Core del poseedor, pero no se generarán recompensas adicionales a menos que se cree un nuevo timelock.

## Importancia del Staking de Bitcoin en Satoshi Plus

- **Activación de Bitcoin:** Transforma a Bitcoin de un activo estático en uno productivo que genera rendimiento sin comprometer su seguridad ni requerir conversión.

- **Contribución a la Seguridad:** Aprovecha el inmenso valor de Bitcoin para reforzar el modelo de seguridad de Core, sin necesidad de que Bitcoin abandone su blockchain nativa.

- **Preservación de la Custodia:** Permite a los poseedores de Bitcoin participar en el consenso de Core mientras mantienen la custodia completa y directa de sus activos.

#### Conclusión

El staking de Bitcoin permite a los poseedores de Bitcoin obtener rendimientos al contribuir a la seguridad de Core, manteniendo al mismo tiempo la custodia total de sus activos. Como componente integral del consenso Satoshi Plus, funciona en conjunto con DPoW y DPoS para crear un marco de seguridad sólido y multinivel. Este mecanismo alinea los incentivos entre los poseedores de Bitcoin y la red Core, transformando a Bitcoin de una reserva de valor estática en un activo productivo, sin necesidad de que abandone su blockchain nativa.