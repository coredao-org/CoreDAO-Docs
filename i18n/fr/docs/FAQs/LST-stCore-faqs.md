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

### 4. How are validators chosen on mint/redeem?

Lors de la création/déverrouillage, le contrat Earn délègue les CORE au PledgeAgent ou annule la délégation des CORE du PledgeAgent. This is implemented in a way that keeps the bookkeeping simpler.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so, we hope to treat all validator candidates equally, no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choose a proper validator and make it unseen for users.

Lors de la récupération, le contrat `Earn` choisit des validateurs de manière aléatoire grâce à `_randomIndex()`, un index aléatoire est sélectionné pour parcourir le tableau des validateurs jusqu'à ce que suffisamment de tokens CORE soient annulés.

### 5. How to maintain a balanced distribution of validators across staking amounts?

Every time when

- A mint happens, the caller can choose a validator freely
- A redeem happens, and the system picks validators randomly

This mechanism ensures that the CORE tokens held by the Earn module can be distributed evenly among different validators.

However, considering there are cases, the balance will be disrupted by certain operations, e.g., large-value mint/redeem. Pour ces cas, des méthodes de rééquilibrage ont été introduites.

- **rebalance():** The system selects the validators with the largest and smallest staking amounts and ensures they break even if the gap exceeds the predefined threshold.
- **manualRebalance():** The operator manually transfers staking from one validator to another.

### 6. Comment le ratio de conversion est-il calculé ?

In every round after the turn round happens, the Earn module fetches rewards from each validator and delegates them back correspondingly. This is how it does auto-compounding internally. During this period, the system also transfers staking from inactive or jailed validators to active ones to improve the overall APR.

Additionally, the conversion ratio of stCORE/CORE can also be updated afterward. La formule est la suivante :

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply()
```

Since **rewards claiming only happens once per day**, in such a design, the conversion rate can be kept the same throughout the day until the next turn round happens.

Ces logiques sont implémentées dans la méthode `afterTurnRound()`.

### 7. How to handle the dues protection when delegating or undelegating?

À noter que dans le contrat `PledgeAgent` (le contrat de staking), lorsque les utilisateurs délèguent :

- e montant de CORE **doit** >= 1.

Et lorsqu'ils annulent une délégation :

- Le montant de CORE **doit** >= 1, **ET**
- Le montant restant de CORE sur un validateur pour cette adresse **doit** >= 1.

When handling delegate/undelegate operations internally, the `Earn` module must also adhere to the same restrictions.

The implementation and case elaborations are in the `_undelegateWithStrategy()` method.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so, we hope to treat all validator candidates equally, no matter whether they are already elected or queued. Cependant, pour améliorer l'expérience utilisateur, l'interface officielle peut choisir un validateur aléatoirement sans que l'utilisateur ne s'en aperçoive.

During redemption, the Earn contract chooses validators randomly using ` randomIndex()`, where an index is randomly selected to serve as the start index for iterating through the validators array until enough CORE tokens are undelegated.