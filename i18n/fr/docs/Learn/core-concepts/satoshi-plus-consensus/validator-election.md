---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Découvrez le processus d'élection des validateurs
---

# Processus d'Élection des Validateurs sur le Réseau Core

---

## Aperçu

Le processus d'élection des validateurs dans le mécanisme de consensus Satoshi Plus de Core combine la Preuve de Travail Déléguée (DPoW), la Preuve d'Enjeu Déléguée (DPoS) et le staking Non-Custodial de Bitcoin. Les mineurs de Bitcoin/pools de minage, les stakers de CORE et les stakers de Bitcoin contribuent à l'élection des validateurs via un système de score hybride.

Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Le processus d'élection détermine quels validateurs feront partie de l'ensemble des validateurs actifs pour chaque cycle, garantissant que les validateurs les plus fiables et soutenus sont choisis pour maintenir l'intégrité du réseau.

## Processus étape par étape

1. **Délégation des ressources :**
 - **Mineurs de Bitcoin :** Les mineurs de Bitcoin délèguent leur puissance de hachage aux validateurs Core en incluant des informations spécifiques dans le champ op_return de la transaction coinbase.
 - **Stakers de jetons CORE :** Les détenteurs de jetons CORE délèguent leurs jetons stakés à leurs validateurs préférés.
 - **Stakers de Bitcoin :** Les détenteurs de Bitcoin verrouillent leur Bitcoin dans des time-locks absolus et délèguent leur Bitcoin aux validateurs de leur choix.

2. **Calcul du score hybride :**
 - Le score hybride de chaque validateur est calculé en fonction de la puissance de hachage déléguée par les mineurs de Bitcoin, du montant de tokens CORE stakés et du montant de Bitcoin staké.
 - La formule équilibre ces trois composants pour produire un score qui reflète le soutien global et la fiabilité du validateur.

3. **Élection des validateurs :**
 - Chaque tour, qui dure une journée, les validateurs ayant les meilleurs scores hybrides sont élus dans l'ensemble des validateurs.
 - Les 27 validateurs ayant les meilleurs scores sont choisis pour faire partie de l'ensemble des validateurs actifs pour ce tour.

4. **Responsabilités des validateurs :**
 - Les validateurs élus sont responsables de produire des blocs et de valider des transactions tout au long du tour.
 - Ils travaillent à tour de rôle, chacun leur tour pour produire des blocs à chaque créneau, avec chaque créneau durant trois secondes.

5. **Mise à jour de l'ensemble des validateurs :**
 - L'ensemble des validateurs sont mis à jour tous les 200 blocs pour assurer la stabilité et la performance. Si un validateur est emprisonné ou pénalisé, les autres continuent de produire des blocs sans interruption.
 - À la fin de chaque cycle, les récompenses accumulées sont calculées et distribuées, et un nouvel ensemble de validateurs est déterminé en fonction des scores hybrides mis à jour.

6. **Distribution des Récompenses :**
 - Les validateurs et leurs délégateurs gagnent des récompenses en tokens CORE en fonction de leurs performances et des ressources qui leur ont été déléguées.
 - Ces récompenses incitent à une participation continue et à une performance assidue des validateurs.

## Déroulement du Processus d'Élection des Validateurs​

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. **Délégation de Stake:**
 - Les détenteurs de jetons CORE et Bitcoin stakent et délèguent leurs jetons aux validateurs. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. **Délégation de la Puissance de Hachage:**
 - Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils minent. Ce processus intègre la puissance de minage du Bitcoin dans le mécanisme de sécurité de Core.

3. **Sélection des Validateurs:**
 - Les validateurs sont sélectionnés en fonction du soutien total qu'ils reçoivent, calculé en combinant les tokens stakés (CORE et Bitcoin) et la puissance de hachage déléguée. L'équation derrière le score hybride est la suivante :

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

4. **Production de Blocs :**
 - Après l'élection, tous les validateurs sont triés approximativement selon leur score hybride, et ils se relaient pour produire des blocs de **manière rotative** avant que le processus ne recommence depuis le début. Le nombre actuel de validateurs est de **27**, avec un nombre prévu d'augmenter au fur et à mesure que le réseau se développe. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core est sécurisé tant que pas plus d'un tiers des validateurs ne soient malveillants.

5. **Distribution des Récompenses:**

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

  Où :

  - $rH$ sont les récompenses reçues par le validateur en raison de la puissance de hachage déléguée à celui-ci (DPoW)
  - $rS$ sont les récompenses reçues par le validateur en raison des tokens CORE délégués à celui-ci (DPoS)
  - $rB$ sont les récompenses attribuées au staking de Bitcoin
  - $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
  - $$m$$: Proportion des récompenses allouées à la puissance de hachage.
  - $$k$$: Proportion des récompenses allouées au staking de CORE.
  - $$l$$: Proportion des récompenses allouées au staking de BTC.
  - $$S$$: Score hybride du validateur.

  Pour compléter, voici trois autres ratios d'intérêt:

  $$
     rHu = \frac{rH}{rHp}
  $$

  $$
     rSu = \frac{rS}{rSp}
  $$

 En ce qui concerne le staking de BTC, les récompenses par unité sont subdivisées en fonction des paliers de rendement liés au dual staking. Supposons qu’il existe 4 niveaux de rendement optimisé : (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, et P<sub>MAX</sub>), avec des multiplicateurs de rendement respectifs (e, f, g et h). La récompense par unité pour le staking de BTC se calcule ainsi

 - Récompense par unité de BTC :  $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp} * $$ Multiplicateur de rendement pour le Niveau<sub>n</sub>
  - $$rBu$$ de P<sub>BASE</sub>  = $$\frac{rB}{rBp} * e$$
  - $$rBu$$ de P<sub>1</sub>  = $$\frac{rB}{rBp} * f$$
  - $$rBu$$ de P<sub>2</sub>  = $$\frac{rB}{rBp} * g$$
  - $$rBu$$ de P<sub>Max</sub>  = $$\frac{rB}{rBp} * h$$

 Où:

 - $rHu$ est la récompense de la puissance de hachage par unité;
 - $rSu$ est la récompense de staking de tokens CORE par unité;
 - $rBu$ = récompense de staking de Bitcoin par unité;
 - $rBu$ de P<sub>BASE</sub> est la récompense de staking BTC par unité pour un délégateur au niveau P<sub>BASE</sub>
 - $rBu$ de P<sub>Level<sub>1</sub></sub> est la récompense de staking BTC par unité pour un délégateur au niveau P<sub>Level1</sub>
 - $rBu$ de P<sub>Level<sub>2</sub></sub> est la récompense de staking BTC par unité pour un délégateur au niveau P<sub>Level2</sub>
 - $rBu$ de P<sub>MAX</sub> est la récompense de staking BTC par unité pour un délégateur au niveau P<sub>MAX</sub>;
 - **Multiplicateurs de rendement :** Chaque palier de récompense dispose d’un multiplicateur spécifique (e,f,g,h, ..., etc) qui s’applique aux récompenses gagnées par unité de BTC staké.

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (Bitcoin et CORE).

## Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

<p align="center">![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)</p>

Ce diagramme illustre le processus cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme Satoshi Plus. Il met en évidence la manière dont les délégations de staking et de puissance de hachage influencent directement la sélection des validateurs, la production des blocs et la distribution des récompenses, favorisant un réseau sécurisé, décentralisé et géré de manière efficace.
