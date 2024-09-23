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
   - Les 23 validateurs ayant les meilleurs scores sont choisis pour faire partie de l'ensemble des validateurs actifs pour ce tour.

4. Responsabilités des validateurs :
   - Les validateurs élus sont responsables de produire des blocs et de valider des transactions tout au long du tour.
   - Ils travaillent à tour de rôle, chacun leur tour pour produire des blocs à chaque créneau, avec chaque créneau durant trois secondes.

5. Mise à jour de l'ensemble des validateurs :
   - L'ensemble des validateurs est mis à jour tous les 200 blocs pour assurer stabilité et performance. Si un validateur est emprisonné ou pénalisé, les autres continuent de produire des blocs sans interruption.
   - À la fin de chaque cycle, les récompenses accumulées sont calculées et distribuées, et un nouvel ensemble de validateurs est déterminé en fonction des scores hybrides mis à jour.

6. Distribution des Récompenses :
   - Les validateurs et leurs délégateurs gagnent des récompenses en tokens CORE en fonction de leurs performances et des ressources qui leur ont été déléguées.
   - These rewards incentivize continuous participation and diligent performance by validators.

## Workflow of the Validator Election Process​

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. **Stake Delegation:**
   - CORE and Bitcoin holders stake and delegate their tokens to validator candidates. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. **Hash Power Delegation:**
   - Bitcoin miners delegate a portion of their hash power by specifying their preferred validators in the Bitcoin blocks they mine. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Validator Selection:**
   - Validators are selected based on the total support they receive, calculated by combining staked tokens (CORE and Bitcoin) and delegated hash power. The equation behind the hybrid score is:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Where:

- $rHp$ is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;
- $tHp$ is the total hash power on Core
- $rSp$ is the amount of CORE tokens delegated by CORE token holders to that validator
- $tSp$ is the total amount of CORE tokens stake on Core
- $rBp$ is the amount of Bitcoin delegated by Bitcoin holders to that validator
- $tBp$ is the total amount of Bitcoin staked on Core
- $m$ is a dynamic factor that controls the overall weights of hash power $(0 < m <1)$
- $n$ is a dynamic factor that controls the voting power of each Bitcoin vs. each CORE token.

En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Les mineurs de Bitcoin peuvent voter pour des validateurs via leur PoW (en inscrivant les informations des validateurs dans la transaction coinbase des blocs qu'ils ont déjà minés), les détenteurs de tokens CORE peuvent voter pour un validateur avec leur PoS (en leur déléguant leurs tokens), et les stakers non-custodial de bitcoin peuvent voter pour un validateur par le même mécanisme. These DPoW, DPoS, and Bitcoin staking components are weighted to determine the hybrid score.

4. **Block Production:**
   - After election, all validators are sorted roughly in order of their hybrid score, and take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning. The present number of validators is **23**_, with the number of validators expected to increase over time as the network grows. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

5. **Reward Distribution:**
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
     - $rB$ is validator rewards attributed to Bitcoin staking
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
     - $rBu$ is the Bitcoin staking rewards per unit;

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated stake (Bitcoin and CORE).

## Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

This flowchart illustrates the cyclical process of the validator election and their ongoing responsibilities within Satoshi Plus. It emphasizes how stake and hash power delegations directly influence validator selection, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.
