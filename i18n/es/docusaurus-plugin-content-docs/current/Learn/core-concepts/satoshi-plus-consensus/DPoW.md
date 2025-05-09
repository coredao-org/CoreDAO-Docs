---
sidebar_label: Prueba de trabajo delegada
hide_table_of_contents: false
sidebar_position: 2
description: Aprovechando DPoW en Satoshi Plus
---

# Delegated Proof of Work (DPoW)

---

## Descripción general

Delegated Proof of Work (DPoW) is a cornerstone of Satoshi Plus consensus. This system leverages Bitcoin's established mining infrastructure, integrating it with the Core blockchain to strengthen security without requiring additional computational work.

DPoW creates a mutually beneficial relationship where Bitcoin miners can earn supplemental CORE rewards while maintaining their primary Bitcoin mining operations. By including validator selection metadata in newly mined Bitcoin blocks, miners extend their influence to the Core network without compromising their Bitcoin security role.

<p align="center">
![dpow-core-architechture](../../../../../../../static/img/staoshi-plus/DPoW.png)
</p>

## Cómo funciona DPoW en Satoshi Plus

On the Bitcoin network, miners generate hash power to mine blocks,secure the network, and earn Bitcoin rewards. To stabilize rewards over time, miners often contribute to mining pools, which aggregate hash power to increase chances of mining blocks. DPoW integrates Bitcoin mining into Core's security protocol through a delegation system.

1. **Mining Integration**: Bitcoin miners continue their standard mining activities while signaling support for the Core blockchain by including specific information in the Bitcoin blocks they mine, indicating their preferred Core validator.

2. **Metadata in Bitcoin Blocks**: In the mined Bitcoin block, miners add metadata in the `op_return` field containing the Core validator address and the address for receiving CORE token rewards, effectively delegating their mining influence to the Core network.

3. **Validator Support**: By including this information, miners delegate their computational power to validators on Core. Proportions of delegated hash power are critical to Core's validator election, directly influencing which validators are elected to produce blocks and secure the network.

4. **Relayers**: Relayers monitor the Bitcoin network and transmit block and transaction data to Core. An on-chain embedded BTC light client processes this data and forwards delegation information to the "Delegation Hub," which manages all delegations within Core. During each one-day round, Core calculates DPoW for validators based on miner delegations from one week prior.

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