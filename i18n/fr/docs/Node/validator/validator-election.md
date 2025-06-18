---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
---

# Processus d'Élection des Validateurs sur le Réseau Core

---

## Aperçu

Les validateurs sont une partie cruciale du réseau Core. In addition to handling transaction validation and block production, the validator election process is where all the components — i.e., DPoW, DPoS, and Self-Custodial Bitcoin Staking — of the Satoshi Plus consensus come together. The Validator election process is a central feature of the Satoshi Plus consensus mechanism employed by the Core blockchain. Ce processus garantit l’intégrité, la sécurité et l’efficacité de la blockchain en élisant les validateurs responsables de la validation des transactions et de la création de nouveaux blocs.

## Importance de l'Élection des Validateurs

- **Sécurité et Intégrité**: Les validateurs maintiennent l'intégrité de la blockchain, rendant un processus d'élection robuste crucial pour garantir que seuls les nœuds les plus fiables gèrent le registre de la blockchain.

- **Décentralisation**: Le processus d'élection permet aux mineurs et aux stakers de participer à la sélection des validateurs, favorisant ainsi la décentralisation et empêchant la concentration du contrôle.

- **Alignement des Incitations**: Les parties prenantes sont incitées à soutenir les validateurs efficaces, alignant ainsi les intérêts à travers le réseau. Les validateurs et leurs supporters (mineurs et stakers) reçoivent des récompenses, garantissant la responsabilité et la participation continue.

- **Efficacité et Évolutivité**: Des validateurs compétents améliorent la capacité de traitement des transactions du réseau, ce qui est crucial pour la performance et l'évolutivité.

## Déroulement du Processus d'Élection des Validateurs

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. Délégation de staking : Les détenteurs de jetons CORE et BTC mettent en jeu et délèguent leurs jetons aux candidats validateurs. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. Délégation de puissance de hachage : Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils exploitent. Ce processus intègre la puissance de minage du Bitcoin dans le mécanisme de sécurité de Core.

3. Sélection des validateurs : Les validateurs sont sélectionnés en fonction du soutien total qu'ils reçoivent, calculé en combinant les jetons mis en jeu (BTC et CORE) et la puissance de hachage Bitcoin déléguée.

4. **Formation du Groupe de Validateurs**:
  Un groupe de validateurs est formé à partir de ceux ayant les scores les plus élevés. Ce groupe est mis à jour dynamiquement pour refléter les changements continus dans les délégations de stake et les allocations de puissance de hachage. There are two steps involved in the validator election.

  1. Les scores hybrides sont calculés pour tous les validateurs du réseau avec l'équation suivante. Le score hybride pour chaque validateur est calculé par la formule suivante :

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

2. At the end of each round, validators are ranked in order of their hybrid score, and the top **27** validators with the highest hybrid scores are selected for the validator set in the next round.
  En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and self-custodial Bitcoin stakers can vote for a validator through the delegation of their tokens. This includes delegated Proof-of-Work (PoW), delegated Proof-of-Stake (PoS), and Self-Custodial Bitcoin Staking, which are weighted to determine the hybrid score.

C'est le "cœur" de la blockchain Core, le mécanisme par lequel le réseau exploite la sécurité et la décentralisation du réseau Bitcoin ainsi que la scalabilité et la composition des chaînes PoS comme Ethereum. Allowing Bitcoin miners and Bitcoin stakers to vote on validators enables Core to leverage Bitcoin’s legendary robustness. Because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Block Production**: After the election, all validators are sorted roughly in order of their hybrid score, and they take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning.
  By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability; the number of validators is expected to rise to **34 by Q2 2025**. Au deuxième trimestre 2024, Core a déjà élargi son ensemble de validateurs actifs de **21** à **27**. Furthermore, this mechanism offers enhanced security through improved efficiency and a tolerance for a large number of Byzantine players. Core est sécurisé tant que pas plus d'un tiers des validateurs ne soient malveillants.

6. **Distribution des Récompenses**:
  - Les récompenses sont distribuées en fonction des contributions à la sécurité du réseau, en utilisant la formule suivante :

    $$
       rH = \frac{\frac{rHp}{tHp} * m} {S} * R
    $$

    $$
       rS = \frac{\frac{rSp}{tSp} * k} {S} * R
    $$

    $$
       rB = \frac{\frac{rBp}{tBp} * l} {S} * R
    $$

    Où:

    - $$rH$$: Récompenses attribuées à la puissance de hachage déléguée (DPoW).
    - $$rS$$: Récompenses attribuées au staking de CORE (DPoS).
    - $$rB$$: Récompenses attribuées au staking de BTC.
    - $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
    - $$m$$: Proportion des récompenses allouées à la puissance de hachage.
    - $$k$$: Proportion des récompenses allouées au staking de CORE.
    - $$l$$: Proportion des récompenses allouées au staking de BTC.
    - $$S$$: Score hybride du validateur.

    Per-unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

    - Récompense par unité de puissance de hachage : $$rHu$$ =  $$\frac{rH}{rHp}$$
    - Récompense par unité de CORE : rSu = $$\frac{rS}{rSp}$$
    - Récompense par unité de BTC :  $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicateur de rendement pour le Niveau<sub>n</sub>

    Où:

    - $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
    - $$rSu$$ est la récompense de staking de tokens CORE par unité ;
    - $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for a delegator with PN BTC yield level
    - **Multiplicateurs de rendement :** Chaque niveau de rendement (boosted yield level) possède un multiplicateur spécifique (e,f,g,h, ..., etc), déterminé à la fois par les données de staking de l’utilisateur et par la configuration du dual staking au niveau du système. The settings are subject to change and can be configured through governance voting. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

#### Impact du Dual Staking sur les récompenses BTC

Avec l’introduction du Dual Staking, les récompenses de staking de BTC sont désormais réparties par paliers, en fonction du montant de CORE staké par rapport à la quantité de BTC. Les récompenses en BTC ne sont donc plus réparties uniformément entre tous les participants. Elles sont à la place allouées de manière dynamique en fonction des seuils de dual staking, les paliers supérieurs recevant généralement une plus grande proportion des récompenses. Cette structure de paliers introduit une variabilité dans les rendements de staking BTC, aligne les intérêts au sein de l’écosystème Core et maintient une distribution proportionnelle des récompenses.

### Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

<p align="center">  ![validator-election-flow](../../../static/img/validator/Validator-Election-Workflow.png)</p>

Ce schéma illustre la nature cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme de consensus Satoshi Plus. Il souligne comment la délégation de stake et de puissance de hachage influence directement la sélection des validateurs, la production de blocs et la distribution des récompenses, conduisant à un réseau sécurisé, décentralisé et géré de manière efficace.