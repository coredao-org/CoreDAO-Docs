---
sidebar_label: Prueba de trabajo delegada
hide_table_of_contents: false
sidebar_position: 2
description: Aprovechando DPoW en Satoshi Plus
---

# Prueba de Trabajo Delegada (DPoW)

---

## Descripción general

La Prueba de Trabajo Delegada (DPoW) es una piedra angular del consenso Satoshi Plus. Este sistema aprovecha la infraestructura de minería ya establecida de Bitcoin, integrándola con la blockchain de Core para reforzar la seguridad sin requerir trabajo computacional adicional.

DPoW crea una relación mutuamente beneficiosa en la que los mineros de Bitcoin pueden obtener recompensas adicionales en CORE mientras continúan con sus operaciones principales de minería de Bitcoin. Al incluir metadatos de selección de validadores en los bloques de Bitcoin recién minados, los mineros extienden su influencia hacia la red Core sin comprometer su papel en la seguridad en Bitcoin.

<p align="center">
![dpow-core-architechture](../../../../static/img/staoshi-plus/DPoW.png)
</p>

## Cómo funciona DPoW en Satoshi Plus

En la red de Bitcoin, los mineros generan poder de hash para minar bloques, asegurar la red y obtener recompensas en Bitcoin. Para estabilizar las recompensas a lo largo del tiempo, los mineros suelen unirse a pools de minería, que agregan poder de cómputo para aumentar las probabilidades de minar bloques. DPoW integra la minería de Bitcoin al protocolo de seguridad de Core mediante un sistema de delegación.

1. **Integración de la Minería:** Los mineros de Bitcoin continúan con sus actividades de minería habituales mientras señalan su apoyo a la blockchain de Core al incluir información específica en los bloques de Bitcoin que minan, indicando su validador preferido de Core.

2. **Metadatos en bloques Bitcoin**: En el bloque de Bitcoin minado, los mineros añaden metadatos en el campo `op_return` que contiene la dirección del validador Core y la dirección para recibir recompensas de tokens CORE, delegando efectivamente su influencia minera a la red Core.

3. **Soporte a Validadores:** Al incluir esta información, los mineros delegan su poder computacional a los validadores en Core. Las proporciones de poder de hash delegado son críticas para la elección de validadores de Core, ya que influyen directamente en qué validadores se eligen para producir bloques y asegurar la red.

4. **Relayers:** Los relayers monitorean la red de Bitcoin y transmiten datos de bloques y transacciones a Core. An on-chain embedded BTC light client processes this data and forwards delegation information to the "Delegation Hub," which manages all delegations within Core. During each one-day round, Core calculates DPoW for validators based on miner delegations from one week prior.

5. **Reward Mechanism**: Miners receive CORE tokens in addition to their regular Bitcoin rewards, creating a dual-reward system that incentivizes participation without diverting resources from Bitcoin mining.

## Proceso paso a paso

1. **Extracción de bloques de Bitcoin:** Los mineros de Bitcoin continúan con su función principal de extraer bloques en la red de Bitcoin mediante Prueba de trabajo (PoW).

2. **Including Delegation Information:** Miners add two additional pieces of information in the `op_return` field of the coinbase transaction:

- **Dirección del validador principal:** La dirección del validador principal al que delegar el poder hash.
- **Dirección de recompensa del token CORE:** La dirección a la que el minero desea que se le envíen las recompensas del token CORE.

3. **Delegating Hash Power:** This action delegates the miner's hash power to the chosen Core validator, repurposing existing work without incurring additional costs.

4. **Elección del validador:** Los validadores con mayor poder de hash delegado tienen una mayor probabilidad de ser elegidos para el conjunto de validadores.

5. **Recompensas del validador:** Los validadores obtienen recompensas por procesar bloques, reciben una pequeña comisión y pasan recompensas a sus delegados, incluido cualquier minero de Bitcoin o grupo de minería que les haya delegado poder de hash.

6. **Obtención de recompensas:** Los mineros o los grupos de minería reciben recompensas en tokens CORE además de sus recompensas de Bitcoin, lo que brinda incentivos adicionales.

## Importancia de DPoW en Satoshi Plus

- **Seguridad mejorada:** Al integrar el PoW de Bitcoin, Core se beneficia de la incomparable infraestructura de seguridad de Bitcoin, lo que hace que la red Core sea más resistente.

- **Miner Support:** Bitcoin miners gain an additional revenue stream through CORE token rewards, enhancing their overall profitability without additional energy costs.

- **Relación simbiótica:** Este sistema promueve beneficios mutuos para las redes Bitcoin y Core, fomentando un entorno cooperativo que fortalece el ecosistema blockchain.

#### **Conclusión**

DPoW is a critical component within Satoshi Plus consensus. It extends the incentives of Bitcoin miners to align with Core's consensus mechanism. Core recibe la participación de los mineros de Bitcoin en su seguridad, y Bitcoin recibe mineros mejor remunerados. El resultado es un conjunto de mineros que está más incentivado a proteger tanto Bitcoin como Core.