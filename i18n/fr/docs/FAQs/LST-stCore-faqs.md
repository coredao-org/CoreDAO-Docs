---
sidebar_label: FAQ sur le Liquid Staking (stCORE)
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Liquid Staking (stCORE)

---

### 1. Qu'est-ce que stCORE ?

stCORE est une solution innovante sur la blockchain Core conçue pour améliorer l'utilité des tokens CORE en introduisant le liquid staking. Cela permet aux détenteurs de tokens CORE de maximiser le potentiel de leurs actifs avec une plus grande flexibilité et efficacité. Le processus implique le staking de tokens CORE pour sécuriser le réseau tout en obtenant simultanément de la liquidité via l'émission de tokens stCORE, qui peuvent être utilisés dans divers protocoles DeFi.

### 2. Quels sont les avantages du liquid staking avec stCORE ?

Le liquid staking avec stCORE permet aux détenteurs de tokens CORE de participer aux protocoles DeFi tout en maintenant leurs actifs en staking. Cela améliore l'utilité des actifs et génère potentiellement des rendements supplémentaires, sans compromettre les contributions à la sécurité du réseau.

### 3. Quelle est la période de déverrouillage pour stCORE ?

Une période de déverrouillage de **7 jours** est requise par défaut pour retirer des tokens CORE après l'initiation de la récupération.

### 4. Comment les validateurs sont-ils choisis lors de la creation/deverouillage ?

Lors de la création/déverrouillage, le contrat Earn délègue les CORE au PledgeAgent ou annule la délégation des CORE du PledgeAgent. Cela est mis en œuvre de manière à simplifier la gestion comptable.

Lors de l'appel à la méthode `mint()`, l'utilisateur doit fournir une adresse de validateur à laquelle les tokens CORE seront délégués. Cela vise à traiter tous les candidats validateurs de manière égale, qu'ils soient déjà élus ou en attente. Toutefois, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur approprié de manière aléatoire et le rendre invisible pour les utilisateurs.

Lors de la récupération, le contrat `Earn` choisit des validateurs de manière aléatoire grâce à `_randomIndex()`, un index aléatoire est sélectionné pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.

### 5. Comment maintenir une distribution équilibrée des validateurs à travers les montants de staking ?

Chaque fois que

- Une création a lieu, l'utilisateur peut choisir librement un validateur
- Un rachat a lieu, le système sélectionne les validateurs de manière aléatoire

Ce mécanisme garantit que les jetons CORE détenus par le module Earn peuvent être répartis de manière égale entre différents validateurs.

Cependant, des déséquilibres peuvent survenir en raison d'opérations spécifiques comme une création ou un rachat de grande valeur. Pour ces cas, des méthodes de rééquilibrage ont été introduites.

- **rebalance():** Le système sélectionne les validateurs avec les montants les plus élevés et les plus faibles de staking, et les égalise si l'écart dépasse un seuil prédéfini.
- **manualRebalance():** L'opérateur transfère manuellement le staking d'un validateur à un autre.

### 6. Comment le ratio de conversion est-il calculé ?

À chaque tour après un turn round, le module Earn récupère les récompenses de chaque validateur et les redélègue en conséquence. C'est ainsi que l'autocompounding (intérêts composés automatiques) est mis en œuvre en interne. Pendant cette période, le système déplace également le staking des validateurs inactifs ou en prison vers des validateurs actifs pour améliorer le rendement global.

Après cela, le ratio de conversion stCORE/CORE est mis à jour. La formule est la suivante :

```
    Montant des tokens CORE stakés sur PledgeAgent / stCORE.totalSupply()
```

Étant donné que la **récupération des récompenses n'a lieu qu'une fois par jour**, le ratio de conversion reste le même tout au long de la journée jusqu'à la prochaine mise à jour.

Ces logiques sont implémentées dans la méthode `afterTurnRound()`.

### 7. Comment gérer la protection des dus lors de la délégation/annulation de délégation ?

À noter que dans le contrat `PledgeAgent` (le contrat de staking), lorsque les utilisateurs délèguent :

- e montant de CORE **doit** >= 1.

Et lorsqu'ils annulent une délégation :

- Le montant de CORE **doit** >= 1, **ET**
- Le montant restant de CORE sur un validateur pour cette adresse **doit** >= 1.

Lorsque le module `Earn` gère la délégation ou l'annulation de délégation en interne, il doit également suivre ces mêmes restrictions.

L'implémentation détaillée de ces logiques se trouve dans la méthode `_undelegateWithStrategy()`.

Lors de l'appel à la méthode `mint()`, l'utilisateur doit fournir une adresse de validateur à laquelle les tokens CORE seront délégués. Cela vise à traiter tous les candidats validateurs de manière égale, qu'ils soient déjà élus ou en attente. Cependant, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur aléatoirement sans que l'utilisateur ne s'en aperçoive.

Lors de la récupération, le contrat Earn choisit des validateurs de manière aléatoire grâce à `_randomIndex()`, un index aléatoire est sélectionné pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.