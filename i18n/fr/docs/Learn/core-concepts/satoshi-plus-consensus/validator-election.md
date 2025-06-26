---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Découvrez le processus d'élection des validateurs
---

# Élection des Validateurs Core

---

## Aperçu

Le consensus Satoshi Plus de Core tire le soutien des validateurs de trois sources de délégation :

- **Preuve de travail déléguée (DPoW)** des mineurs Bitcoin
- **Staking Bitcoin en auto-garde** par les détenteurs de Bitcoin
- **Preuve de participation déléguée (DPoS)** des détenteurs de jetons CORE

Chaque source contribue au score **hybride** d'un validateur, qui détermine son élection dans l'ensemble actif de validateurs.

## Processus d'élection

<p align="center">![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)</p>

### 1. Délégation de soutien

Les validateurs reçoivent un soutien de trois sources:

- **Détenteurs de Bitcoin**: Verrouillent temporairement Bitcoin en utilisant CLTV (Check Lock Time Verify) et intègrent des métadonnées de validation dans le script de remboursement pour voter pour les validateurs.
- **Mineurs Bitcoin**: Délèguent leur puissance de hachage en incluant des votes de validation dans le champ op_return des transactions coinbase Bitcoin.
- **Détenteurs de jetons CORE**: Délèguent directement leurs jetons CORE à leurs validateurs préférés.

Chaque forme de délégation contribue à la sélection des validateurs et à l'éligibilité aux récompenses.

### 2. Calcul du score hybride

Les validateurs sont classés selon un **score hybride** qui combine les trois formes de soutien :

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Où, $$m + k + l = 1$$

- $$rHp$$: Puissance de hachage Bitcoin déléguée à un validateur.
- $$tHp$$: Puissance de hachage totale sur Core.
- $$rSp$$: Montant de tokens CORE stakés auprès d’un validateur.
- $$tSp$$: Montant total de tokens CORE stakés sur Core.
- $$rBp$$: Montant de tokens BTC stakés auprès d’un validateur.
- $$tBp$$: Montant total de tokens BTC stakés sur Core.
- $$m$$: Ratio attribué à la puissance de hachage.
- $$k$$: Ratio attribué au staking de CORE.
- $$l$$: Ratio attribué au staking de BTC.

Cette formule favorise une influence proportionnelle et équitable entre toutes les sources de délégation.

### 3. Sélection des validateurs et production de blocs

- Les **29 meilleurs validateurs** avec les scores hybrides les plus élevés sont élus à chaque **tour (1 jour)**
- Les validateurs produisent des blocs de manière **tournante**, chaque créneau durant **3 secondes**
- The **validator set is updated every 200 blocks** to promote consistency and prevent disruption from underperforming or penalized validators
- Core maintains liveness as long as fewer than **⅓ of validators are malicious**

## Flow Summary

The validator election cycle proceeds as follows:

1. **Delegation**: Miners, CORE stakers, and Bitcoin stakers delegate support
2. **Score Calculation**: Hybrid scores are computed using the defined formula
3. **Election**: Top 29 validators are selected based on scores
4. **Block Production**: Validators take turns producing blocks
5. **Rewards**: CORE tokens are earned by validators and distributed proportionally to delegators
6. **Cycle Repeats**: Validator set updates every 200 blocks
