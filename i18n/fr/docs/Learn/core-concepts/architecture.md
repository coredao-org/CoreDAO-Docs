---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de la blockchain de Core
---

# Architecture de la blockchain Core

---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Self-Custodial Bitcoin Staking**.

Grâce à Satoshi Plus, les mineurs de Bitcoin, les pools de minage, les stakers de jetons CORE et les stakers de Bitcoin participent à l'élection des validateurs pour sécuriser le reseau Core. La sélection des validateurs est basée sur un score hybride, en considérant:

- Puissance de hachage déléguée par les mineurs/pools de minage
- Jetons CORE délégués/mis en staking par les détenteurs de jetons CORE
- Bitcoin délégués/mis en staking par les stakers de Bitcoin

### **The First Self-Custodial Bitcoin Staking Mechanism**

Satoshi Plus's Self-Custodial Bitcoin Staking component is **the first live self-custodial Bitcoin staking mechanism**, allowing Bitcoin holders to earn trustless yield **without introducing new trust assumptions**.

### Exploiter la sécurité de Bitcoin et donner du pouvoir aux mineurs

Actuellement, Satoshi Plus bénéficie de la sécurité de ~75% de toute la puissance de hachage minière de Bitcoin grâce à la délégation. By involving miners in validator elections, it leverages Bitcoin’s unmatched decentralization while offering miners supplemental rewards, addressing the long-term decline in Bitcoin block rewards.

<p align="center">![component-diagram](../../../static/img/Core-Architecture.png)</p>

## Core Blockchain : Composants, Rôles et Flux de travail

#### Rôles Clés

- \*\*Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Validator must register and lock a refundable CORE validator bond deposit.
- **Bitcoin Miners**: Secure Bitcoin via Proof of Work and can delegate hash power to Core validators by including delegation information in the coinbase transaction of a block.
- **CORE Stakers**: Delegate CORE tokens to validators as part of the validator election to support network security.
- **Bitcoin Stakers**: Delegate timelocked Bitcoin to validators on Core through Self-Custodial Bitcoin staking and earn yield without relinquishing custody of their assets.
- **Relayers**: Responsible for synchronizing the data between the Core and Bitcoin network. Ils acheminent les données de blocs et de transactions Bitcoin vers Core. N'importe qui peut devenir un relayer en s'inscrivant et en bloquant un dépôt de jetons CORE remboursable.
- Les Vérificateurs (verifiers) : Signalent les comportements malveillants sur le réseau Core. Successful verification flags can trigger the slashing or jailing of validators and bad actors. Verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a Verifier on the Core network.

#### Consensus et Élection

- **Validator Election**: Every **round (1 day)**, the top **27 validators** by **hybrid score** (based on DPoW from miners, DPoS from CORE stakers, and staked Bitcoin from Bitcoin holders) are elected to become part of the active validator set and secure the network. Tout validateur de l'ensemble actuel de validateurs qui n'a pas été emprisonné ou sanctionné est considéré comme "actif" ou "en activité". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.
- Score Hybride : Chaque nœud de validation cherchant à faire partie de l'ensemble actif de validateurs se voit attribuer un score hybride, calculé en fonction de trois délégations : puissance de hachage, CORE et Bitcoin. L'ensemble actif de validateurs comprend actuellement les 27 meilleurs validateurs ayant les scores hybrides les plus élevés.
- Tour : Un tour dure un jour, pendant lequel les 27 meilleurs validateurs (classés selon leur score hybride) sont élus pour produire des blocs. At the end of each round, **rewards are calculated and distributed**, and the next validator set is selected.
- Époque (10 min ou 200 créneaux) : Des vérifications périodiques du statut des validateurs garantissent que les nœuds emprisonnés ne participent pas au consensus. Le statut du validateur est vérifié une fois par époque pour garder un TPS stable durant chaque tour.
- Créneau (3 sec) : Chaque tour d'un jour est divisé en créneaux, et tous les validateurs de l'ensemble prennent tour à tour pour produire un bloc par créneau de manière rotative.

#### Récompenses & Stabilité

- **Reward Module:** Rewards are distributed at the end of each round based on validator performance. Le module de récompenses calcule et distribue ces récompenses en conséquence.
- Les récompenses sont distribuées à la fin de chaque tour.
- Les validateurs actifs sont mis à jour toutes les 200 blocs pour maintenir un TPS stable.

## Preuve de Travail Déléguée

Pour participer à Satoshi Plus, les mineurs de Bitcoin et/ou les pools de minage écrivent simplement deux informations supplémentaires dans le champ op_return lorsqu'ils produisent un nouveau bloc Bitcoin :

1. L'adresse du validateur Core auquel ils souhaitent déléguer leur puissance de hachage.
2. L'adresse à laquelle le mineur souhaite recevoir les récompenses en jetons CORE.

In exchange for participating in Core’s consensus process by delegating their hash power to help elect validators, Bitcoin miners receive supplemental CORE token rewards in addition to their existing mining rewards from the Bitcoin network. In this way, Satoshi Plus brings Bitcoin miner participation to the Core network, while the Bitcoin network receives better compensated (i.e. more highly incentivized) miners.

## Preuve d’enjeu déléguée

La Preuve de Participation Déléguée (DPoS) est la méthode utilisée pour impliquer les détenteurs de jetons CORE dans la sécurité du protocole. To participate in consensus, any CORE token holder can stake their CORE tokens with validators on the Core network, thus helping elect those validators in the same way that a miner might delegate its hash power to help elect a validator.\
Similarly, just as miners receive rewards, CORE token stakers also earn CORE token rewards for contributing to Satoshi Plus consensus. La DPoS se distingue des modèles PoS standard en permettant une participation égale de tous les détenteurs de jetons. Contrairement aux modèles PoS standard qui favorisent souvent les gros détenteurs.

## Self-Custodial Bitcoin Staking

Satoshi Plus's methodology for integrating Bitcoin staking centers on absolute timelocks using Bitcoin's native CLTV (CheckLockTimeVerify) function, a cryptographic feature that locks up the outputs of a transaction for a pre-defined period of time, during which they can't be spent.
Rather than holders giving up custody of Bitcoin to external staking, stakers with Satoshi Plus merely place their Bitcoin in absolute timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs Bitcoin dans leurs blocs délégués :

1. L'adresse du validateur Core à laquelle le staker souhaite déléguer ses Bitcoins.
2. L'adresse à laquelle le staker souhaite recevoir ses récompenses en jetons CORE.

Bitcoin stakers earn yield on their otherwise passive bitcoin in the form of CORE token rewards for however long they set the timelock (and thus for however long they delegate their bitcoin to vote for validators on Core).

## Élection des Validateurs

The synthesis of DPoW, DPoS, and Self-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set. Les validateurs qui reçoivent la plus grande combinaison de puissance de hachage déléguée, de CORE stakés et de bitcoins stakés sont élus à l'ensemble des validateurs. Cette combinaison est déterminée par un score hybride qui équilibre les trois éléments.

## Récompenses

Les récompenses de Satoshi Plus proviennent de :

1. CORE block rewards being paid out over **81 years**
2. Transaction fees paid on the Core network in CORE tokens.

Après une production de bloc réussie, les validateurs gagnent ces récompenses en jetons CORE. Étant donné que les validateurs élus sont entièrement dépendants de leurs délégateurs, lorsqu'ils reçoivent des récompenses de bloc et des frais de transaction pour la production de blocs, ils reversent la majeure partie de leurs récompenses à leurs mineurs délégants, aux stakeurs CORE et aux stakeurs Bitcoin.\
Rewards paid out to delegators are allocated proportionally to their delegation power. So, whatever weight their delegation carries in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Slashing et Sécurité

Dans les systèmes Proof of Stake classiques, les stakers s'exposent à des sanctions (slash) en cas de défaillance de leur nœud, de comportement malveillant ou d'activités nuisant à l'intégrité du réseau Dans Satoshi Plus, cela reste vrai pour les validateurs. Les validateurs sont tenus à un niveau élevé d'exigence car leur rôle est de respecter honnêtement l'ensemble de règles de Satoshi Plus. Thus, if they fail to perform, they face the slashing of their accumulated rewards and locked up CORE token deposit, resulting in a severe economic penalty and zero rewards.

While slashing keeps validators maximally accountable, Satoshi Plus' design is not meant to penalize participants for actions they don’t control. Par conséquent, les mineurs, les détenteurs de CORE et les détenteurs de Bitcoin ne risquent pas de voir leurs actifs délégués confisqués (slash) Leur incitation à choisir les meilleurs validateurs réside dans les récompenses qu'ils peuvent accumuler en les sélectionnant de manière rigoureuse. S'ils choisissent les mauvais validateurs, les mineurs et les stakers risquent simplement de ne pas obtenir les récompenses attendues. Cette pénalité économique constitue une incitation efficace tout en étant équitable pour les stakers.

## Conclusion

L'architecture de Core est conçue pour en faire la plateforme idéale pour le BTCfi. Satoshi Plus extends Bitcoin’s protection and reinforces its security model, while also introducing trustless yield to the Bitcoin asset. Cette conception complète sécurise un écosystème BTCfi de bout en bout, débloquant tout le potentiel de l'actif Bitcoin.
