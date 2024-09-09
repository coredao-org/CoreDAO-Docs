---
sidebar_label: FAQ sur le Liquid Staking (stCORE)
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Liquid Staking (stCORE)

---

### 1. Qu'est-ce que stCORE ?

stCORE est une solution innovante de la Core Chain conçue pour améliorer l'utilité des tokens CORE en introduisant le liquid staking. Cela permet aux détenteurs de tokens CORE de maximiser le potentiel de leurs actifs avec une plus grande flexibilité et efficacité. Le processus implique le staking de tokens CORE pour sécuriser le réseau tout en obtenant simultanément de la liquidité via l'émission de tokens stCORE, qui peuvent être utilisés dans divers protocoles DeFi.

### 2. Quels sont les avantages du liquid staking avec stCORE ?

Le liquid staking avec stCORE permet aux détenteurs de tokens CORE de participer aux protocoles DeFi tout en maintenant leurs actifs en staking. Cela améliore l'utilité des actifs et génère potentiellement des rendements supplémentaires, sans compromettre les contributions à la sécurité du réseau.

### 3. Quelle est la période de déverrouillage pour stCORE ?

Une période de déverrouillage de **7 jours** est requise par défaut pour retirer des tokens CORE après l'initiation de la récupération.

### 4. Comment les validateurs sont-ils choisis lors de la creation/deverouillage ?

Lors de la création/déverrouillage, le contrat Earn délègue les CORE au PledgeAgent ou annule la délégation des CORE du PledgeAgent. Cela est implémenté de manière à simplifier la gestion comptable.

Lors de l'appel de la méthode `mint()`, l'utilisateur doit passer une adresse de validateur à laquelle déléguer les tokens CORE - cela permet de traiter tous les candidats validateurs de manière équitable, qu'ils soient déjà élus ou en attente. Cependant, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur aléatoirement sans que l'utilisateur ne s'en aperçoive.

Lors de la récupération, le contrat `Earn` choisit des validateurs de manière aléatoire grâce à `_randomIndex()`, un index aléatoire est sélectionné pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.

### 5. Comment garder un équilibre entre les validateurs en termes de montant de staking ?

Chaque fois que :

- Une création a lieu, l'utilisateur peut choisir librement un validateur.
- Une récupération a lieu, le système choisit les validateurs de manière aléatoire.

Ce mécanisme garantit presque que les tokens CORE détenus par le module Earn sont répartis de manière équitable entre différents validateurs.

Cependant, des déséquilibres peuvent survenir en raison d'opérations spécifiques comme une création ou un récupération de grande valeur. Pour ces cas, des méthodes de rééquilibrage ont été introduites.

- **rebalance():** Le système sélectionne les validateurs avec les montants les plus élevés et les plus faibles de staking, et les égalise si l'écart dépasse un seuil prédéfini.
- **manualRebalance():** L'opérateur transfère manuellement le staking d'un validateur à un autre.

### 6. Comment le ratio de conversion est-il calculé ?

À chaque tour après un turn round, le module Earn récupère les récompenses de chaque validateur et les redélègue en conséquence. Cela permet de réaliser un auto-compounding interne. Pendant cette période, le système transfère également le staking des validateurs inactifs/emprisonnés vers des validateurs actifs pour améliorer le taux de rendement annuel global (APR).

Ensuite, le ratio de conversion de stCORE/CORE peut être mis à jour. La formule est la suivante :

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply() 
```

Étant donné que la **récupération des récompenses n'a lieu qu'une fois par jour** dans cette conception, le taux de conversion reste inchangé tout au long de la journée jusqu'à ce que le prochain turn round ait lieu.

Ces logiques sont implémentées dans la méthode `afterTurnRound()`.

### 7. Comment gérer la protection des dus lors de la délégation/annulation de délégation ?

À noter que dans le contrat `PledgeAgent` (le contrat de staking), lorsque les utilisateurs délèguent :

- e montant de CORE **doit** >= 1.

Et lorsqu'ils annulent une délégation :

- Le montant de CORE **doit** >= 1, **ET**
- Le montant restant de CORE sur un validateur pour cette adresse **doit** >= 1.

Lors de la gestion de la délégation/annulation de délégation en interne, le module `Earn` doit également suivre ces mêmes restrictions.

L'implémentation détaillée de ces logiques se trouve dans la méthode `_undelegateWithStrategy()`.

Lors de l'appel de la méthode `mint()`, l'utilisateur doit passer une adresse de validateur à laquelle déléguer les tokens CORE - cela permet de traiter tous les candidats validateurs de manière équitable, qu'ils soient déjà élus ou en attente. Cependant, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur aléatoirement sans que l'utilisateur ne s'en aperçoive.

Lors de la récupération, le contrat Earn choisit des validateurs de manière aléatoire grâce à `_randomIndex()`, un index aléatoire est sélectionné pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.
