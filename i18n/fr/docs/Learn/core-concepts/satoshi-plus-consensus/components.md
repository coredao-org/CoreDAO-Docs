---
sidebar_label: Éléments Principaux
hide_table_of_contents: false
sidebar_position: 2
description: Apprendre sur les éléments principaux du mécanisme de Satoshi Plus
---

# Satoshi Plus Consensus

---

Satoshi Plus est le mécanisme de consensus innovant de Core qui unit la sécurité de Bitcoin à la programmabilité EVM pour sécuriser un écosystème blockchain unique et puissant. En intégrant trois méthodes de participation distinctes - les contributions des mineurs Bitcoin via Delegated Proof of Work (DPoW), la délégation de jetons CORE via Delegated Proof of Stake (DPoS), et le verrouillage temporel de Bitcoin ainsi que la délégation via le Staking Bitcoin en auto-garde - Satoshi Plus crée un cadre de sécurité robuste qui aligne les incitations à travers les écosystèmes Bitcoin et Core. Cette approche multicouche est conçue pour empêcher tout groupe unique de contrôler le réseau, tout en permettant aux détenteurs de Bitcoin de gagner des rendements, aux mineurs Bitcoin de recevoir des récompenses supplémentaires et aux détenteurs de CORE de participer à la sécurité du réseau - tout en maintenant les propriétés de sécurité fondamentales de Bitcoin et en les étendant pour protéger la fonctionnalité de contrat intelligent de Core.

![satoshi-plus](../../../../static/img/staoshi-plus/consensus-components.png)

## Composants majeurs du mécanisme Satoshi Plus

<p align="center">
![component-diagram](../../../../static/img/Core-Architecture.png)</p>

**Validateurs :** Les validateurs sont responsables de la production des blocs et de la validation des transactions sur le réseau Core. N’importe qui peut devenir un validateur Core en s’enregistrant sur le réseau et bloquant un dépôt de token CORE remboursable.

**Élection des validateurs :** Le groupe de validateurs est déterminé par élection, les validateurs étant choisis sur la base de leur score hybride à chaque tour. Chaque validateur qui est dans l’ensemble actuel des validateurs et qui n’a pas été emprisonné ou pénalisé est considéré "actif". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.

**Score Hybride :** A chaque nœud de validateur souhaitant faire partie de l’ensemble des validateurs est attribué un score hybride, qui est calculé en se basant sur trois facteurs : le DPoW des mineurs de Bitcoin, le DPoS des détenteurs de CORE, et les détenteurs de bitcoin déléguant leur bitcoin aux validateurs de leur choix. L’ensemble des validateurs actuel est composé de 27 validateurs avec le plus grand score hybride.

Mineurs Bitcoin : Les mineurs Bitcoin sécurisent le réseau Bitcoin via Delegated Proof of Work et peuvent déléguer leur soutien à un validateur Core en incluant des métadonnées spécifiques dans la transaction coinbase d'un nouveau bloc miné. Cette délégation est non destructive, ce qui signifie que les mineurs poursuivent leur rôle principal de sécurisation de Bitcoin tout en soutenant simultanément Core.

**Stakers CORE :** Les détenteurs de jetons CORE natifs de Core peuvent participer à la sécurité du réseau en déléguant leurs jetons à des validateurs, gagnant des récompenses proportionnelles à leur délégation et à l'activité de leurs validateurs choisis.

**Stakers Bitcoin (Timelockers) :** Les détenteurs de Bitcoin peuvent verrouiller temporairement leur Bitcoin sur la blockchain Bitcoin en utilisant la fonction native CLTV de Bitcoin, rendant ainsi leurs Bitcoin non dépensables pendant la période désignée. En échange du verrouillage temporaire de leur Bitcoin, les détenteurs de Bitcoin gagnent le droit de participer à l'élection des validateurs Core. Lorsque leurs validateurs élus sécurisent Core, le détenteur de Bitcoin gagne des récompenses en CORE.

Relayers : Les relayers transmettent les en-têtes de blocs Bitcoin au réseau Core. N’importe qui peut devenir un relayeur en s’enregistrant et bloquant un dépôt de token CORE remboursable.

**Vérificateurs :** Les vérificateurs surveillent le réseau pour détecter les comportements malveillants. Une vérification réussie de violations peut entraîner une réduction des récompenses ou de la mise d'un validateur malveillant, voire son exclusion, les vérificateurs recevant une compensation pour cette surveillance. N’importe qui peut être vérificateur sur le réseau Core.

**Tour :** Un tour dure un jour, pendant lequel les 27 meilleurs validateurs (classés selon leur score hybride) agissent en tant que producteurs de blocs. À la fin de chaque tour, les récompenses sont calculées et distribuées, et un nouvel ensemble de validateurs est sélectionné pour le tour suivant.