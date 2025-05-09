---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Delegated Proof of Work (DPoW)

---

## Aperçu

Delegated Proof of Work (DPoW) is a cornerstone of Satoshi Plus consensus. This system leverages Bitcoin's established mining infrastructure, integrating it with the Core blockchain to strengthen security without requiring additional computational work.

DPoW creates a mutually beneficial relationship where Bitcoin miners can earn supplemental CORE rewards while maintaining their primary Bitcoin mining operations. By including validator selection metadata in newly mined Bitcoin blocks, miners extend their influence to the Core network without compromising their Bitcoin security role.

<p align="center">![dpow-core-architechture](../../../../static/img/staoshi-plus/DPoW.png)</p>

## Fonctionnement de la DPoW dans Satoshi Plus

On the Bitcoin network, miners generate hash power to mine blocks,secure the network, and earn Bitcoin rewards. To stabilize rewards over time, miners often contribute to mining pools, which aggregate hash power to increase chances of mining blocks. DPoW integrates Bitcoin mining into Core's security protocol through a delegation system.

1. **Mining Integration**: Bitcoin miners continue their standard mining activities while signaling support for the Core blockchain by including specific information in the Bitcoin blocks they mine, indicating their preferred Core validator.

2. **Metadata in Bitcoin Blocks**: In the mined Bitcoin block, miners add metadata in the `op_return` field containing the Core validator address and the address for receiving CORE token rewards, effectively delegating their mining influence to the Core network.

3. **Validator Support**: By including this information, miners delegate their computational power to validators on Core. Proportions of delegated hash power are critical to Core's validator election, directly influencing which validators are elected to produce blocks and secure the network.

4. **Relayers**: Relayers monitor the Bitcoin network and transmit block and transaction data to Core. An on-chain embedded BTC light client processes this data and forwards delegation information to the "Delegation Hub," which manages all delegations within Core. During each one-day round, Core calculates DPoW for validators based on miner delegations from one week prior.

5. **Reward Mechanism**: Miners receive CORE tokens in addition to their regular Bitcoin rewards, creating a dual-reward system that incentivizes participation without diverting resources from Bitcoin mining.

## Processus étape par étape

1. **Minage des Blocs Bitcoin :** Les mineurs de Bitcoin continuent leur rôle principal de minage de blocs sur le réseau Bitcoin en utilisant la Preuve de Travail (PoW).

2. **Including Delegation Information:** Miners add two additional pieces of information in the `op_return` field of the coinbase transaction:

- **Adresse du Validateur Core :** L'adresse du validateur Core à qui déléguer la puissance de hachage.
- **Adresse de Récompense en Tokens CORE :** L'adresse où le mineur souhaite que ses récompenses en tokens CORE soient envoyées.

3. **Delegating Hash Power:** This action delegates the miner's hash power to the chosen Core validator, repurposing existing work without incurring additional costs.

4. **Élection des Validateurs :** Les validateurs avec une puissance de hachage déléguée plus élevée ont une plus grande chance d'être élus dans l'ensemble des validateurs.

5. **Récompenses des Validateurs :** Les validateurs gagnent des récompenses pour le traitement des blocs, prennent une petite commission et transfèrent les récompenses à leurs délégateurs, y compris les mineurs de Bitcoin ou les pools de minage qui leur ont délégué de la puissance de hachage.

6. **Obtention des Récompenses :** Les mineurs ou les pools de minage reçoivent des récompenses en tokens CORE en plus de leurs récompenses en Bitcoin, offrant ainsi des incitations supplémentaires.

## Importance de la DPoW dans Satoshi Plus

- **Sécurité Améliorée :** En intégrant la PoW de Bitcoin, Core bénéficie de l'infrastructure de sécurité inégalée de Bitcoin, rendant le réseau Core plus résilient.

- **Miner Support:** Bitcoin miners gain an additional revenue stream through CORE token rewards, enhancing their overall profitability without additional energy costs.

- **Relation Symbiotique :** Ce système promeut des avantages mutuels pour les réseaux Bitcoin et Core, encourageant un environnement coopératif qui renforce l'écosystème blockchain.

#### **Conclusion**

DPoW is a critical component within Satoshi Plus consensus. It extends the incentives of Bitcoin miners to align with Core's consensus mechanism. Core bénéficie de la participation des mineurs de Bitcoin à sa sécurité, et les mineurs de Bitcoin reçoivent une meilleure rémunération. Le résultat est un ensemble de mineurs qui sont fortement incités à sécuriser à la fois Bitcoin et Core.