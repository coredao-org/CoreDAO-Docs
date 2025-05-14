---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du Liquid Staking (stCORE)

---

Le stCORE est conçu pour améliorer l'utilité du token CORE et simplifier le processus de staking. Cette initiative permet aux détenteurs de tokens de maximiser le potentiel de leurs actifs avec une plus grande flexibilité et efficacité.

## Résumé de la conception

Le jalonnement liquide via stCORE est conçu comme suit :

- Un nouveau module appelé Earn est introduit aux côtés d'un jeton ERC-20 standard, **stCORE.**
- Les utilisateurs interagissent avec le module `Earn` pour créer/racheter/retirer leurs actifs
- Le module `Earn` interagit avec les contrats de la plateforme Core tels que `PledgeAgent` (le contrat de staking) et `CandidateHub`
- La valeur de tous les revenus du module `Earn` sera reflétée dans la valeur du token **stCORE**
- Le ratio de conversion CORE/stCORE est mis à jour quotidiennement.
- Des méthodes supplémentaires sont fournies pour permettre à l'opérateur du système de rééquilibrer et d'optimiser le jalonnement entre les validateurs.

## Perspective utilisateur

### Création

Les utilisateurs peuvent créer du stCORE en utilisant du CORE. À tout moment de la journée (UTC), le ratio de conversion reste fixe. Par exemple, si le ratio de conversion est de 1:1,1, les utilisateurs peuvent créer 100 stCORE en utilisant 110 CORE.

### Rachat

Les utilisateurs peuvent racheter n'importe quelle quantité de stCORE qu'ils détiennent. Par exemple, si le ratio de conversion est de 1:1,1, les utilisateurs peuvent racheter 100 stCORE en utilisant 110 CORE.

:::note
Il existe une période de rachat par défaut de **7 jours**. Une fois que les utilisateurs ont initié un remboursement, ils doivent attendre 7 jours avant de retirer les jetons CORE vers leur portefeuille.
:::

## Cas d'utilisation communs ERC-20

stCORE est un jeton ERC-20 standard et peut être utilisé dans tous les scénarios ERC-20 typiques : transferts, fourniture de liquidité sur les DEXs, échanges et plus encore.

## Implémentations

L'implémentation du module `Earn` de liquid staking se trouve [ici](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

Les méthodes utilisateur dans le module `Earn` incluent les suivantes:

- **\`mint():** créer du stCORE en utilisant du CORE
- **redeem() :** Racheter stCORE contre CORE
- **\`withdraw():** réclamer du CORE dans le portefeuille après la période de rachat

Les méthodes utilisateur dans le module `Earn` incluent les suivantes:

- **afterTurnRound() :** Implémente la capitalisation automatique des intérêts (autocompounding).
- **\`rebalance():** équilibrer les validateurs les plus/moins stakés
- **\`manualRebalance():** transférer manuellement le staking entre deux validateurs

### Sélection des validateurs lors de création/rachat

Chaque fois qu'un mint se produit, le contrat Earn délègue CORE à PledgeAgent. Chaque fois qu'un mint se produit, le contrat Earn délègue CORE à 'PledgeAgent'. Cela est mis en œuvre de manière à simplifier la gestion comptable.

Lorsque les utilisateurs créent (mint), ils doivent spécifier une adresse de validateur pour jalonner les CORE. Cela garantit un traitement égal de tous les candidats validateurs, qu'ils soient élus ou en file d'attente. Pour une expérience plus fluide, le frontend officiel peut sélectionner aléatoirement un validateur au nom de l'utilisateur.

Pendant le remboursement, le contrat 'Earn' sélectionne les validateurs de manière aléatoire en utilisant '_randomIndex()'. This random index determines where in the validator list the system starts undelegating CORE until the requested amount is reached.

### Keeping Validators Balanced in Stake Amounts

Validator distribution works as follows:

- When minting, users choose the validator
- When redeeming, the system randomly selects validators

This system naturally balances staking across validators. However, large mint or redeem operations can disrupt this balance. To correct such imbalances, two rebalancing methods are available:

- **`rebalance()`:** Automatically balances the validator with the most staked CORE and the one with the least, if the difference exceeds a set threshold
- **`manualRebalance()`:** Allows the operator to manually redistribute stake between validators

### Calcul du ratio de conversion stCORE/CORE

Each round, after the turn round completes, the `Earn` module:

- Collects rewards from validators
- Re-delegates rewards to the same validators (autocompounding)
- Moves stake from jailed/inactive validators to active ones to maximize APR

Then, the conversion ratio is recalculated using the formula:

```
    Montant des tokens CORE stakés sur PledgeAgent / stCORE.totalSupply() 
```

Since **rewards claiming only happens once per day**, the conversion rate remains same for the entire day until the next turn round happens. The logics for this are implemented in the `afterTurnRound()` method.

### Gestion de la protection des dus lors de la délégation/annulation de délégation

In the `PledgeAgent` contract (the staking contract), when users delegate the amount of CORE **must** >= 1.

Whereas, upon  undelegation

- Le montant de CORE annulé **doit** être supérieur ou égal à 1 **ET**
- Le montant de CORE restant sur un validateur pour cette adresse **doit** être supérieur ou égal à 1

When handling `delegate` and `undelegate` internally, the `Earn` module must also follow the same restrictions.

The implementation of these requriements can be found in `_undelegateWithStrategy()` method.

