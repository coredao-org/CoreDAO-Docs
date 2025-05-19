---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
---

# Processus d'Élection des Validateurs sur le Réseau Core

---

## Aperçu

Les validateurs sont une partie cruciale du réseau Core. En plus de valider les transactions et produire des blocs, le processus d’élection des validateurs est l’endroit où tous les composants (DPoW, DPoS, et le staking non-custodial de Bitcoin) du consensus Satoshi Plus se réunissent. Le processus d'élection des validateurs est une caractéristique centrale du mécanisme de consensus Satoshi Plus utilisé par la blockchain Core. Ce processus garantit l’intégrité, la sécurité et l’efficacité de la blockchain en élisant les validateurs responsables de la validation des transactions et de la création de nouveaux blocs.

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
 Un groupe de validateurs est formé à partir de ceux ayant les scores les plus élevés. Ce groupe est mis à jour dynamiquement pour refléter les changements continus dans les délégations de stake et les allocations de puissance de hachage. Il y a deux étapes dans l'élection des validateurs.

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

2. À la fin de chaque tour, les validateurs sont classés par ordre de leur score hybride, et les 27 meilleurs validateurs avec les scores hybrides les plus élevés sont sélectionnés pour l'ensemble de validateurs du tour suivant.
 En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Les mineurs de Bitcoin peuvent voter pour des validateurs via leur PoW (en inscrivant les informations des validateurs dans la transaction coinbase des blocs qu'ils ont déjà minés), les détenteurs de tokens CORE peuvent voter pour un validateur avec leur PoS (en leur déléguant leurs tokens), et les stakers non-custodial de bitcoin peuvent voter pour un validateurvia la délégation de leurs tokens. Ce mécanisme combinant PoW délégué , PoS délégué et staking de BTC non-custodial permet d’attribuer un score hybride à chaque validateur.

C'est le "cœur" de la blockchain Core, le mécanisme par lequel le réseau exploite la sécurité et la décentralisation du réseau Bitcoin ainsi que la scalabilité et la composition des chaînes PoS comme Ethereum. Permettre aux mineurs de Bitcoin et aux stakers de bitcoin de voter pour les validateurs permet à Core de bénéficier de la robustesse légendaire de Bitcoin. De plus, comme Core est compatible avec l'EVM, il est possible de construire des contrats intelligents, des dApps et d'autres applications sur Core sans avoir à modifier le protocole Bitcoin sous-jacent.

5. Production de blocs : Après l'élection, tous les validateurs sont triés approximativement par ordre de leur score hybride, et ils prennent tour à tour pour produire des blocs de manière tour à tour avant que le processus ne recommence depuis le début.
 En limitant initialement le nombre de validateurs à **21**_, Satoshi Plus offre un taux de transaction plus élevé et une meilleure évolutivité, mais il est prévu que le nombre de validateurs augmente à **34 validateurs Q2 2025**. Au deuxième trimestre 2024, Core a déjà élargi son ensemble de validateurs actifs de **21** à **27**. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core est sécurisé tant que pas plus d'un tiers des validateurs ne soient malveillants.

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

  Les calculs de récompense par unité déterminent la part de récompenses distribuée pour chaque unité de puissance de hachage, de CORE ou de BTC stakée :

  - Récompense par unité de puissance de hachage : $$rHu$$ =  $$\frac{rH}{rHp}$$
  - Récompense par unité de CORE : rSu = $$\frac{rS}{rSp}$$
  - Récompense par unité de BTC :  $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicateur de rendement pour le Niveau<sub>n</sub>

  Où:

  - $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
  - $$rSu$$ est la récompense de staking de tokens CORE par unité ;
  - $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
  - **Multiplicateurs de rendement :** Chaque niveau de rendement (boosted yield level) possède un multiplicateur spécifique (e,f,g,h, ..., etc), déterminé à la fois par les données de staking de l’utilisateur et par la configuration du dual staking au niveau du système. Ces paramètres peuvent être ajustés et sont soumis à un processus de gouvernance. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

#### Impact du Dual Staking sur les récompenses BTC

Avec l’introduction du Dual Staking, les récompenses de staking de BTC sont désormais réparties par paliers, en fonction du montant de CORE staké par rapport à la quantité de BTC. Les récompenses en BTC ne sont donc plus réparties uniformément entre tous les participants. Elles sont à la place allouées de manière dynamique en fonction des seuils de dual staking, les paliers supérieurs recevant généralement une plus grande proportion des récompenses. Cette structure de paliers introduit une variabilité dans les rendements de staking BTC, aligne les intérêts au sein de l’écosystème Core et maintient une distribution proportionnelle des récompenses.

### Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

<p align="center">  
![validator-election-flow](../../../../../../static/img/validator/Validator-Election-Workflow.png)
</p>

Ce schéma illustre la nature cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme de consensus Satoshi Plus. Il souligne comment la délégation de stake et de puissance de hachage influence directement la sélection des validateurs, la production de blocs et la distribution des récompenses, conduisant à un réseau sécurisé, décentralisé et géré de manière efficace.
