---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Apprenez-en plus sur le processus d'élection des validateurs Satoshi Plus
---

# Élection des Validateurs

---

## Aperçu

Le processus d'élection des validateurs dans le mécanisme de consensus Satoshi Plus de Core combine la Preuve de Travail Déléguée (DPoW), la Preuve d'Enjeu Déléguée (DPoS) et le staking Non-Custodial de Bitcoin. Les mineurs de Bitcoin/pools de minage, les stakers de CORE et les stakers de Bitcoin contribuent à l'élection des validateurs via un système de score hybride.

Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Le processus d'élection détermine quels validateurs feront partie de l'ensemble des validateurs actifs pour chaque cycle, garantissant que les validateurs les plus fiables et soutenus sont choisis pour maintenir l'intégrité du réseau.

## Processus étape par étape

1. **Délégation des ressources :**
   - **Mineurs de Bitcoin :** Les mineurs de Bitcoin délèguent leur puissance de hachage aux validateurs Core en incluant des informations spécifiques dans le champ op_return de la transaction coinbase.
   - **Stakers de tokens CORE :** Les détenteurs de tokens CORE délèguent leurs tokens stakés à leurs validateurs préférés.
   - **Stakers de Bitcoin :** Les détenteurs de Bitcoin verrouillent leur Bitcoin dans des time-locks absolus et délèguent leur Bitcoin aux validateurs de leur choix.

2. **Calcul du score hybride :**
   - Le score hybride de chaque validateur est calculé en fonction de la puissance de hachage déléguée par les mineurs de Bitcoin, du montant de tokens CORE stakés et du montant de Bitcoin staké.
   - La formule équilibre ces trois composants pour produire un score qui reflète le soutien global et la fiabilité du validateur.

3. Élection des validateurs :
   - Chaque tour, qui dure une journée, les validateurs ayant les meilleurs scores hybrides sont élus dans l'ensemble des validateurs.
   - The top 27 validators with the highest scores are chosen to be part of the active validator set for that round.

4. Responsabilités des validateurs :
   - Les validateurs élus sont responsables de produire des blocs et de valider des transactions tout au long du tour.
   - Ils travaillent à tour de rôle, chacun leur tour pour produire des blocs à chaque créneau, avec chaque créneau durant trois secondes.

5. Mise à jour de l'ensemble des validateurs :
   - L'ensemble des validateurs est mis à jour tous les 200 blocs pour assurer stabilité et performance. Si un validateur est emprisonné ou pénalisé, les autres continuent de produire des blocs sans interruption.
   - À la fin de chaque cycle, les récompenses accumulées sont calculées et distribuées, et un nouvel ensemble de validateurs est déterminé en fonction des scores hybrides mis à jour.

6. Distribution des Récompenses :
   - Les validateurs et leurs délégateurs gagnent des récompenses en tokens CORE en fonction de leurs performances et des ressources qui leur ont été déléguées.
   - Ces récompenses incitent à une participation continue et à une performance assidue des validateurs.

## Déroulement du Processus d'Élection des Validateurs​

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. **Délégation de Stake:**
   - Les détenteurs de tokens CORE et Bitcoin stakent et délèguent leurs tokens aux candidats validateurs. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. **Délégation de la Puissance de Hachage:**
   - Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils minent. Ce processus intègre la puissance de minage du Bitcoin dans le mécanisme de sécurité de Core.

3. **Sélection des Validateurs:**
   - Les validateurs sont sélectionnés en fonction du soutien total qu'ils reçoivent, calculé en combinant les tokens stakés (CORE et Bitcoin) et la puissance de hachage déléguée. L'équation derrière le score hybride est la suivante :

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Où :

- $rHp$ est la puissance de hachage du Bitcoin déléguée à un validateur, mesurée par le nombre total de blocs Bitcoin avec les informations de ce validateur inscrites dans leurs transactions coinbase;
- $tHp$ est la puissance de hachage totale sur Core
- $rSp$ est le montant de tokens CORE délégués par les détenteurs de tokens CORE à ce validateur
- $tSp$ est le montant total de tokens CORE stakés sur Core
- $rBp$ est le montant de Bitcoin délégués par les détenteurs de Bitcoin à ce validateur
- $tBp$ est le montant total de Bitcoin staké sur Core
- $m$ est un facteur dynamique qui contrôle les poids globaux de la puissance de hachage $(0 < m <1)$
- $n$ est un facteur dynamique qui contrôle le pouvoir de vote de chaque Bitcoin par rapport à chaque token CORE.

En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Les mineurs de Bitcoin peuvent voter pour des validateurs via leur PoW (en inscrivant les informations des validateurs dans la transaction coinbase des blocs qu'ils ont déjà minés), les détenteurs de tokens CORE peuvent voter pour un validateur avec leur PoS (en leur déléguant leurs tokens), et les stakers non-custodial de bitcoin peuvent voter pour un validateur par le même mécanisme. Ces composants de la DPoW, de la DPoS et du staking de Bitcoin sont pondérés pour déterminer le score hybride.

4. **Production de Blocs :**
   - Après l'élection, tous les validateurs sont triés approximativement selon leur score hybride, et ils se relaient pour produire des blocs de **manière rotative** avant que le processus ne recommence depuis le début. The present number of validators is **27**_, with the number of validators expected to increase over time as the network grows. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core est sécurisé tant que pas plus d'un tiers des validateurs ne soient malveillants.

5. **Distribution des Récompenses:**
   - Les récompenses sont distribuées en fonction des contributions à la sécurité du réseau, en utilisant la formule suivante :

     $$
        rH = \frac{rHp}{tHp} * \frac{m}{S} * R
     $$

     $$
        rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
     $$

     $$
        rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
     $$

     Où:

     - $rH$ sont les récompenses reçues par le validateur en raison de la puissance de hachage déléguée à celui-ci (DPoW)
     - $rS$ sont les récompenses reçues par le validateur en raison des tokens CORE délégués à celui-ci (DPoS)
     - $rB$ sont les récompenses attribuées au staking de Bitcoin
     - $R$ est la récompense globale attribuée à tous les délégateurs

     Pour compléter, voici trois autres ratios d'intérêt:

     $$
        rHu = \frac{rH}{rHp}
     $$

     $$
        rSu = \frac{rS}{rSp}
     $$

     $$
        rBu = \frac{rB}{rBp}
     $$

     Où:

     - $rHu$ est la récompense de la puissance de hachage par unité;
     - $rSu$ est la récompense de staking de tokens CORE par unité;
     - $rBu$ = récompense de staking de Bitcoin par unité;

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (Bitcoin et CORE).

## Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

Ce diagramme illustre le processus cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme Satoshi Plus. Il met en évidence la manière dont les délégations de staking et de puissance de hachage influencent directement la sélection des validateurs, la production des blocs et la distribution des récompenses, favorisant un réseau sécurisé, décentralisé et géré de manière efficace.
