---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Staking de Bitcoin Autocustodiado

El Staking de Bitcoin (o Timelocking de Bitcoin) permite a los holders de Bitcoin participar en el consenso de Core al hacer timelocking de su Bitcoin utilizando la función nativa CheckLockTimeVerify (CLTV), sin transferir la custodia ni exponer sus activos a riesgos de contratos inteligentes.

El Staking de Bitcoin transforma a Bitcoin de un activo estático a uno productivo que genera rendimiento mientras mantiene sus propiedades de seguridad. Al incluir metadatos de selección de validadores en las transacciones de timelock, los holders de Bitcoin pueden participar en la elección de validadores de Core para ganar recompensas en tokens CORE.

## Cómo Funciona el Staking de Bitcoin en Satoshi Plus

El protocolo nativo de Bitcoin incluye una función CLTV que permite a los usuarios volver su Bitcoin no gastable durante un período específico. Core aprovecha este mecanismo para permitir que los holders de Bitcoin participen en el consenso mientras mantienen el control total de sus activos.

1. **Creación de Timelocks:** Los holders de Bitcoin utilizan la función CLTV para hacer timelock de su Bitcoin en la blockchain de Bitcoin por un período elegido (mínimo de 24 horas), haciendo que esas monedas no puedan gastarse temporalmente.

2. **Inclusión de Metadatos:** Durante la creación del timelock, los usuarios incluyen metadatos que especifican el validador de Core al que desean delegar y una dirección de Core para recibir las recompensas en CORE.

3. **Apoyo a Validadores:** La cantidad de Bitcoin en timelock en apoyo a un validador influye en su posición en la elección de validadores de Core, afectando sus probabilidades de ser elegido para producir bloques.

4. **Monitoreo por Relayers:** La red de relayers de Core monitorea la blockchain de Bitcoin en busca de transacciones de timelock que incluyan metadatos válidos de consenso.

5. **Distribución de Recompensas:** Los validadores elegidos aseguran la blockchain de Core al producir bloques y validar transacciones. Según la fiabilidad del validador y la cantidad de Bitcoin en timelock delegada en su apoyo, el protocolo de Core distribuye recompensas en tokens CORE a las direcciones especificadas por los stakers de Bitcoin.

6. **Expiración del Timelock:** Cuando finaliza el período de timelock, el Bitcoin vuelve a estar disponible para gastar y la participación en el consenso de Core cesa. Las recompensas en CORE ganadas permanecen en la dirección de Core del usuario, pero no se generan nuevas recompensas a menos que se cree un nuevo timelock.

## Importancia del Staking de Bitcoin en Satoshi Plus

- **Activación de Bitcoin:** Transforma el Bitcoin de un activo estático en uno productivo que genera rendimiento sin comprometer su seguridad ni requerir conversión.

- **Contribución a la Seguridad:** Aprovecha el inmenso valor de Bitcoin para fortalecer el modelo de seguridad de Core sin que el Bitcoin tenga que salir de su blockchain nativa.

- **Preservación de la Custodia:** Permite que los poseedores de Bitcoin participen en el consenso de Core mientras mantienen la custodia total de sus activos.

#### **Conclusión**

El Staking de Bitcoin permite a los holders de Bitcoin generar rendimiento al contribuir a la seguridad de Core, todo mientras conservan la custodia completa de sus activos. Como componente integral del consenso Satoshi Plus, trabaja en conjunto con DPoW y DPoS para formar un marco de seguridad sólido y multinivel. Este mecanismo alinea los incentivos entre los poseedores de Bitcoin y la red Core, transformando a Bitcoin de una reserva de valor estática en un activo productivo sin necesidad de que abandone su blockchain nativa.