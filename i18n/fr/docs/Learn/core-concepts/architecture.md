---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de la blockchain de Core
---

# Architecture de la blockchain Core

---

L'architecture de Core est construite autour de **Satoshi Plus**, un mécanisme consensus tripartite qui intègre **une preuve de travail déléguée (DPOW), une preuve de participation par délégation (DPoS) et le staking bitcoin sans garde**.

Grâce à Satoshi Plus, **les mineurs de Bitcoin, les pools de minage, les stakers de jetons CORE et les stakers de Bitcoin** participent à l'élection des validateurs pour sécuriser le reseau Core. La sélection des validateurs est basée sur un score hybride, en considérant:

- Puissance de hachage déléguée par les mineurs/pools de minage
- **Bitcoin délégués/mis en staking** par les stakers de Bitcoin
- **Jetons CORE délégués/mis en staking** par les détenteurs de jetons CORE

## Satoshi Plus Consensus: Major Components

<p align="center">![component-diagram](../../../static/img/Core-Architecture.png)</p>

## Rôles Clés

- \*\*Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Les validateurs doivent s'enregistrer et bloquer un dépôt de garantie de validateur CORE remboursable.
- **Les mineurs de Bitcoin :** sécurisent Bitcoin via PoW et peuvent déléguer la puissance de hachage aux validateurs Core en incluant les informations de délégation dans la transaction coinbase d'un bloc sans compromettre la sécurité de Bitcoin.
- Les Stakers CORE : Délèguent des jetons CORE aux validateurs pour soutenir la sécurité du réseau
- Les Stakers Bitcoin : Délèguent du Bitcoin aux validateurs sur Core via un staking Bitcoin non-dépositaire et gagnent un rendement sans renoncer à la garde de leurs actifs.
- **Les Relayers**: Ceux-ci sont chargés de synchroniser les données entre le réseau Core et Bitcoin. Ils acheminent les données de blocs et de transactions Bitcoin vers Core. N'importe qui peut devenir un relayer en s'inscrivant et en bloquant un dépôt de jetons CORE remboursable.
- Les Vérificateurs (verifiers) : Signalent les comportements malveillants sur le réseau Core. Les indicateurs de vérification réussis peuvent déclencher des sanctions, comme la réduction de récompense ou la mise à l'écart temporaire des validateurs et des acteurs malveillants. Les vérificateurs sont indemnisés pour cette activité de surveillance lorsque les récompenses de bloc sont distribuées. Toute personne peut jouer le rôle de vérificateur sur le réseau Core.

## Consensus et Élection

- **Élection des validateurs:** Chaque **tour (1 jour)**, les 29 meilleurs validateurs selon le **score hybride** (PoW des mineurs, DPoS des stakers CORE et staking Bitcoin) sont élus pour faire partie de l'ensemble actif de validateurs et sécuriser le réseau. Chaque validateur qui est dans l’ensemble actuel des validateurs et qui n’a pas été emprisonné ou pénalisé est considéré "actif". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.
- Score Hybride : Chaque nœud de validation cherchant à faire partie de l'ensemble actif de validateurs se voit attribuer un score hybride, calculé en fonction de trois délégations : puissance de hachage, CORE et Bitcoin. L'ensemble actif de validateurs comprend actuellement les 29 meilleurs validateurs ayant les scores hybrides les plus élevés.
- **Tour:** Un tour dure **un jour**, pendant lequel **les 29 meilleurs validateurs** (classés selon leur score hybride) sont élus pour produire des blocs. À la fin du tour, les récompenses sont calculées pour ce tour complet et distribuées, et le prochain ensemble de validateurs est sélectionné.
- **Époque (10 min ou 200 créneaux)**: Des vérifications périodiques du statut des validateurs garantissent que les nœuds emprisonnés ne participent pas au consensus. Le statut du validateur est vérifié une fois par époque pour garder un TPS stable durant chaque tour.
- Créneau (3 sec) : Chaque tour d'un jour est divisé en créneaux, et tous les validateurs de l'ensemble prennent tour à tour pour produire un bloc par créneau de manière rotative.

## Récompenses & Stabilité

- **Module de Récompense :** Les récompenses sont distribuées à la fin de chaque round en fonction des performances des validateurs. Le module de récompenses calcule et distribue ces récompenses en conséquence.
- Les récompenses sont distribuées à la fin de chaque tour.
- Les validateurs actifs sont mis à jour toutes les 200 blocs pour maintenir un TPS stable.
