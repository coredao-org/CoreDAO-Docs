---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Découvrez le processus d'élection des validateurs
---

# Processus d'Élection des Validateurs sur le Réseau Core Chain

---

## Aperçu

Les validateurs sont une partie cruciale de la blockchain Core. En plus de gérer la validation des transactions et la production de blocs, le processus d'élection des validateurs est le point de convergence de tous les composants du consensus Satoshi Plus, à savoir la DPoW, la DPoS et le staking non-custodial du Bitcoin. Le processus d'élection des validateurs est une fonctionnalité centrale du mécanisme de consensus Satoshi Plus utilisé par Core Chain. Ce processus assure l'intégrité, la sécurité et l'efficacité de la blockchain en élisant les validateurs responsables de la validation des transactions et de la création de nouveaux blocs.

## Importance de l'Élection des Validateurs

- **Sécurité et Intégrité**: Les validateurs maintiennent l'intégrité de la blockchain, rendant un processus d'élection robuste crucial pour garantir que seuls les nœuds les plus fiables gèrent le registre de la blockchain.

- **Décentralisation**: Le processus d'élection permet aux mineurs et aux stakers de participer à la sélection des validateurs, favorisant ainsi la décentralisation et empêchant la concentration du contrôle.

- **Alignement des Incitations**: Les parties prenantes sont incitées à soutenir les validateurs efficaces, alignant ainsi les intérêts à travers le réseau. Les validateurs et leurs supporters (mineurs et stakers) reçoivent des récompenses, garantissant la responsabilité et la participation continue.

- **Efficacité et Évolutivité**: Des validateurs compétents améliorent la capacité de traitement des transactions du réseau, ce qui est crucial pour la performance et l'évolutivité.

## Déroulement du Processus d'Élection des Validateurs

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. **Délégation de Stake**:
   - Les détenteurs de tokens CORE et BTC stakent et délèguent leurs tokens aux candidats validateurs. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. **Délégation de la Puissance de Hachage**:
   - Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils minent. Ce processus intègre la puissance de minage du Bitcoin dans le mécanisme de sécurité de Core Chain.

3. **Sélection des Validateurs**:
   - Les validateurs sont sélectionnés en fonction du soutien total qu'ils reçoivent, calculé en combinant les tokens stakés et la puissance de hachage déléguée. L'équation de sélection est la suivante :

$$
   Score du Validateur = \alpha * {Tokens Stakés} + \beta * {Puissance de Hachage Déléguée} 
$$

- Dans cette équation, $\alpha$ et $\beta$ sont des poids attribués aux tokens stakés et à la puissance de hachage déléguée, respectivement, équilibrant leurs contributions au processus d'élection.

4. **Formation du Groupe de Validateurs**:
   Un groupe de validateurs est formé à partir de ceux ayant les scores les plus élevés. Ce groupe est mis à jour dynamiquement pour refléter les changements continus dans les délégations de stake et les allocations de puissance de hachage. Il y a deux étapes dans l'élection des validateurs.

5. Les scores hybrides sont calculés pour tous les validateurs du réseau avec l'équation suivante. Avant d'ajouter le staking de Bitcoin, nous calculions le score hybride pour chaque validateur avec l'équation suivante:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp}{tSp} * (1 - m) 
$$

Où:

- $rHp$ est la puissance de hachage du Bitcoin déléguée à un validateur, mesurée par le nombre total de blocs de Bitcoin avec les informations de ce validateur inscrites dans leurs transactions coinbase;
- $tHp$ est la puissance de hachage totale sur Core Chain;
- $rSp$ est le montant de tokens CORE délégués par les détenteurs de CORE à ce validateur;
- $tSp$ est le stake total sur Core Chain;
- $m$ est un poids dynamique qui s'ajuste au fil du temps pour assurer une transition en douceur pendant la montée en puissance;

Avec la mise en œuvre du staking, le nouveau score hybride est calculé avec cette équation:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Où:

- $rHp$ est la puissance de hachage du Bitcoin déléguée à un validateur, mesurée par le nombre total de blocs Bitcoin avec les informations de ce validateur inscrites dans leurs transactions coinbase;
- $tHp$ est la puissance de hachage totale sur Core Chain
- $rSp$ est le montant de tokens CORE délégués par les détenteurs de tokens CORE à ce validateur
- $tSp$ est le montant total de tokens CORE stakés sur Core Chain
- $rBp$ est le montant de tokens BTC délégués par les détenteurs de BTC à ce validateur
- $tBp$ est le montant total de BTC stakés sur Core Chain
- $m$ est un facteur dynamique qui contrôle les poids globaux de la puissance de hachage $(0 < m <1)$
- $n$ est un facteur dynamique qui contrôle le pouvoir de vote de chaque BTC par rapport à chaque token CORE.

2. À la fin de chaque round, les validateurs sont classés en fonction de leur score hybride, et les **23** validateurs ayant les scores hybrides les plus élevés sont sélectionnés pour le groupe de validateurs du round suivant.

En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Les mineurs de Bitcoin peuvent voter pour des validateurs via leur PoW (en inscrivant les informations des validateurs dans la transaction coinbase des blocs qu'ils ont déjà minés), les détenteurs de tokens CORE peuvent voter pour un validateur avec leur PoS (en leur déléguant leurs tokens), et les stakers non-custodial de bitcoin peuvent voter pour un validateur par le même mécanisme. Cette délégation de PoW et de PoS est pondérée pour déterminer le score hybride.

C'est le noyau de la blockchain Core, le mécanisme par lequel le réseau exploite la sécurité et la décentralisation du réseau Bitcoin ainsi que l'évolutivité et la composition d'Ethereum. Permettre aux mineurs de Bitcoin et aux stakers de bitcoin de voter pour les validateurs permet à Core Chain de bénéficier de la robustesse légendaire de Bitcoin ; et comme Core Chain est compatible EVM, il est possible de développer des contrats intelligents, des dApps, et d'autres applications sur Core Chain, ce qui ne serait pas possible sans modifier le protocole de base de Bitcoin.

5. **Production de Blocs**:
   - Après l'élection, tous les validateurs sont triés approximativement selon leur score hybride, et ils se relaient pour produire des blocs de **manière rotative** avant que le processus ne recommence depuis le début. En limitant initialement le nombre de validateurs à **23**, Satoshi Plus offre un taux de transaction plus élevé et une meilleure évolutivité, mais il est prévu que le nombre de validateurs augmente au fil du temps à mesure que le réseau se développe. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core Chain est sécurisée tant que pas plus d'un tiers des validateurs ne soient malveillants.

6. **Distribution des Récompenses**:

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
     - $rB$ sont les récompenses attribuées au staking de BTC
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
     - $rBu$ est la récompense de staking de BTC par unité;

   Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (BTC et CORE).

### Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

Ce schéma illustre la nature cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme de consensus Satoshi Plus. Il met en évidence comment la délégation de stake et de puissance de hachage influence directement la sélection des validateurs, la production de blocs et la distribution des récompenses, conduisant à un réseau sécurisé, décentralisé et géré de manière efficace.
