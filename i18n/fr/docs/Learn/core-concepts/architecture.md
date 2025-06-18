---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de la blockchain de Core
---

# Architecture de la blockchain Core

---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Self-Custodial Bitcoin Staking, and Delegated Proof of Stake (DPoS)**.

Through Satoshi Plus, **Bitcoin miners/mining pools, Bitcoin stakers, and CORE token stakers** delegate resources to elect validators who secure the Core network. La sélection des validateurs est basée sur un score hybride, en considérant:

- Puissance de hachage déléguée par les mineurs/pools de minage
- **Delegated/staked Bitcoin** from Bitcoin holders
- **Delegated/staked CORE tokens** from CORE token holders

## Satoshi Plus Consensus: Major Components

<p align="center">![component-diagram](../../../static/img/Core-Architecture.png)</p>

## Key Roles

- \*\*Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Validators must register and lock a refundable CORE validator bond deposit.
- **Les mineurs de Bitcoin :** sécurisent Bitcoin via PoW et peuvent déléguer la puissance de hachage aux validateurs Core en incluant les informations de délégation dans la transaction coinbase d'un bloc sans compromettre la sécurité de Bitcoin.
- Les Stakers CORE : Délèguent des jetons CORE aux validateurs pour soutenir la sécurité du réseau
- Les Stakers Bitcoin : Délèguent du Bitcoin aux validateurs sur Core via un staking Bitcoin non-dépositaire et gagnent un rendement sans renoncer à la garde de leurs actifs.
- **Relayers**: Responsible for synchronizing the data between the Core and Bitcoin networks. Ils acheminent les données de blocs et de transactions Bitcoin vers Core. N'importe qui peut devenir un relayer en s'inscrivant et en bloquant un dépôt de jetons CORE remboursable.
- **Verifiers**: Report malicious behavior on the Core network. Les indicateurs de vérification réussis peuvent déclencher des sanctions, comme la réduction de récompense ou la mise à l'écart temporaire des validateurs et des acteurs malveillants. Les vérificateurs sont indemnisés pour cette activité de surveillance lorsque les récompenses de bloc sont distribuées. Toute personne peut jouer le rôle de vérificateur sur le réseau Core.

## Consensus & Election

- **Validator Election**: Every **round (1 day)**, the top **29 validators** by **hybrid score** (based on DPoW from miners, DPoS from CORE holders, and staked Bitcoin from Bitcoin holders) are elected to become part of the active validator set and secure the network. Any validator in the current validator set that hasn't been jailed or slashed is considered "live". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.
- Score Hybride : Chaque nœud de validation cherchant à faire partie de l'ensemble actif de validateurs se voit attribuer un score hybride, calculé en fonction de trois délégations : puissance de hachage, CORE et Bitcoin. The active validator set currently comprises the top 29 validators with the highest hybrid scores.
- **Round:** A round lasts **one day**, during which the **top 29 validators** (ranked by hybrid score) are elected to produce blocks. À la fin du tour, les récompenses sont calculées pour ce tour complet et distribuées, et le prochain ensemble de validateurs est sélectionné.
- **Epoch (10 min or 200 slots)**: Periodic validator status checks ensure jailed nodes don't participate in consensus. Le statut du validateur est vérifié une fois par époque pour garder un TPS stable durant chaque tour.
- Créneau (3 sec) : Chaque tour d'un jour est divisé en créneaux, et tous les validateurs de l'ensemble prennent tour à tour pour produire un bloc par créneau de manière rotative.

## Rewards & Stability

- **Module de Récompense :** Les récompenses sont distribuées à la fin de chaque round en fonction des performances des validateurs. Le module de récompenses calcule et distribue ces récompenses en conséquence.
- Les récompenses sont distribuées à la fin de chaque tour.
- Les validateurs actifs sont mis à jour toutes les 200 blocs pour maintenir un TPS stable.
