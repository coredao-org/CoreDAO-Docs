---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du Liquid Staking (stCORE)

---

Le stCORE est conçu pour améliorer l'utilité du token CORE et simplifier le processus de staking. Cette initiative permet aux détenteurs de tokens de maximiser leur potentiel d'actifs avec plus de flexibilité et d'efficacité.

## Principes de conception

Les principaux principes de conception du liquid staking via stCORE sur la Core Chain sont les suivants:

- Simple, avec peu ou aucune modification des protocoles blockchain existants.
- Décentralisé, sans compromettre la sécurité du réseau.
- Facile à utiliser du point de vue des utilisateurs.

## Résumé de la conception

Après avoir étudié différents projets de LST (Liquid Staking Token) comme LiDO et Kava, et en tenant compte des caractéristiques uniques de la blockchain Core, le liquid staking sous forme de stCORE est conçu comme suit:

- Introduction d'un nouveau module appelé "Earn" avec un token standard ERC-20, **stCORE**
- Les utilisateurs interagissent avec le module `Earn` pour créer/racheter/retirer leurs actifs
- Le module `Earn` interagit avec les contrats de la plateforme Core tels que `PledgeAgent` (le contrat de staking) et `CandidateHub`
- La valeur de tous les revenus du module `Earn` sera reflétée dans la valeur du token **stCORE**
- Le ratio de conversion **CORE/stCORE** sera mis à jour quotidiennement pour s'adapter au mécanisme de tour de la blockchain Core
- D'autres méthodes sont également introduites pour permettre à l'opérateur du système de rééquilibrer et d'optimiser le staking sur l'ensemble des validateurs.

## Perspective utilisateur

### Création

Les utilisateurs peuvent créer du stCORE en utilisant du CORE. À tout moment de la journée (UTC), ils peuvent créer du stCORE au même ratio de conversion. Par exemple, si le ratio de conversion est de 1:1,1, les utilisateurs peuvent créer 100 stCORE en utilisant 110 CORE.

### Rachat

Le système est conçu de manière à ce que les utilisateurs puissent toujours racheter la quantité de tokens stCORE qu'ils possèdent. Par exemple, si le ratio de conversion est de 1:1,1, alors ils peuvent racheter 100 stCORE et recevoir 110 CORE en retour.

:::note
Il existe une période de rachat par défaut de **7 jours**. Une fois que les utilisateurs demandent un rachat, ils doivent attendre 7 jours avant de pouvoir retirer leurs tokens CORE dans leur portefeuille.
:::

## Cas d'utilisation communs ERC-20

Le stCORE étant un token ERC-20 standard, les utilisateurs peuvent effectuer toutes les actions éligibles à un token ERC-20, telles que le transfert, la fourniture de liquidités sur des DEX, l'échange, etc.

## Implémentations

L'implémentation du module `Earn` de liquid staking se trouve [ici](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

Les méthodes utilisateur dans le module `Earn` incluent les suivantes:

- **mint():** créer du stCORE en utilisant du CORE
- **redeem():** racheter du stCORE et récupérer du CORE
- **withdraw():** réclamer du CORE dans le portefeuille après la période de rachat

Les méthodes opérateur dans le module `Earn` incluent :

- **afterTurnRound():** où l'autocompounding (intérêts composés automatiques) est mis en œuvre
- **rebalance():** équilibrer les validateurs les plus/moins stakés
- **manualRebalance():** transférer manuellement le staking entre deux validateurs

### Sélection des validateurs lors de création/rachat

Notez que chaque fois qu'une création ou un rachat a lieu, le contrat `Earn` délègue des tokens CORE au `PledgeAgent` ou annule la délégation depuis `PledgeAgent`. Cela est mis en œuvre de manière à simplifier la gestion comptable.

Lors de l'appel à la méthode `mint()`, l'utilisateur doit fournir une adresse de validateur à laquelle les tokens CORE seront délégués. Cela vise à traiter tous les candidats validateurs de manière égale, qu'ils soient déjà élus ou en attente. Toutefois, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur approprié de manière aléatoire et le rendre invisible pour les utilisateurs.

Lors d'un redeem, le contrat `Earn` sélectionne les validateurs de manière aléatoire via -  `_randomIndex()`. Un index est choisi aléatoirement et utilisé comme point de départ pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.

### Équilibre des validateurs sur les montants stakés

Chaque fois que

- Une création a lieu, l'utilisateur peut choisir librement le validateur
- Un rachat a lieu, le système sélectionne les validateurs de manière aléatoire

Ce mécanisme garantit que les tokens CORE détenus par le module Earn sont répartis de manière relativement équilibrée entre les validateurs.

Cependant, des déséquilibres peuvent survenir en raison d'opérations spécifiques comme une création ou un rachat de grande valeur. Pour ces cas, des méthodes de rééquilibrage ont été introduites.

- **rebalance():** Le système sélectionne les validateurs avec les montants les plus élevés et les plus faibles de staking, et les égalise si l'écart dépasse un seuil prédéfini.
- **manualRebalance():** L'opérateur transfère manuellement le staking d'un validateur à un autre.

### Calcul du ratio de conversion stCORE/CORE

Après chaque tour, le module `Earn` récupère les récompenses de chaque validateur et les délègue à nouveau. C'est ainsi que l'autocompounding (intérêts composés automatiques) est mis en œuvre en interne. Pendant cette période, le système déplace également le staking des validateurs inactifs ou en prison vers des validateurs actifs pour améliorer le rendement global.

Après cela, le ratio de conversion stCORE/CORE est mis à jour. La formule est la suivante

```
    Montant des tokens CORE stakés sur PledgeAgent / stCORE.totalSupply() 
```

Étant donné que la **récupération des récompenses n'a lieu qu'une fois par jour**, le ratio de conversion reste le même tout au long de la journée jusqu'à la prochaine mise à jour.

Les logiques mentionnées ci-dessus sont implémentées dans la méthode `afterTurnRound()`.

### Gestion de la protection des dus lors de la délégation/annulation de délégation

Note that in the `PledgeAgent` contract (the staking contract), when users delegate

- The amount of CORE **must** >= 1

And when they undelegate

- The amount of CORE **must** >= 1 **AND**
- The remaining CORE left on a validator of this address **must** >= 1

When handling delegate/undelegate internally, the `Earn` module must also follow the same restrictions.

The implementation/case elaborations are in `_undelegateWithStrategy()` method.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so we hope to treat all validator candidates equally no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choosing a proper validator and make it unseen for users.

During redeem, the Earn contract chooses validators randomly - ` _randomIndex()`, an index will be randomly selected, which is used as the start index to iterate through the validators array until enough CORE tokens are undelegated.
