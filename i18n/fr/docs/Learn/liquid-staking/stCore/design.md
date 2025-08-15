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

Pendant le remboursement, le contrat 'Earn' sélectionne les validateurs de manière aléatoire en utilisant '_randomIndex()'. Cet index aléatoire détermine à quel endroit dans la liste des validateurs le système commence à annuler la délégation des CORE jusqu'à atteindre le montant demandé.

### Équilibre des validateurs sur les montants stakés

La distribution des validateurs fonctionne comme suit :

- Lors de la création (minting), les utilisateurs choisissent le validateur
- Lors du remboursement, le système sélectionne aléatoirement les validateurs.

Ce système équilibre naturellement le staking entre les validateurs. Cependant, les opérations importantes de création (mint) ou de remboursement peuvent perturber cet équilibre. Pour corriger ces déséquilibres, deux méthodes de rééquilibrage sont disponibles :

- **rebalance() :** Équilibre automatiquement le validateur avec le plus de CORE mis en jeu et celui avec le moins, si la différence dépasse un seuil prédéfini.
- **manualRebalance() :** Permet à l'opérateur de redistribuer manuellement les enjeux entre les validateurs.

### Calcul du ratio de conversion stCORE/CORE

À chaque tour, après la fin du tour, le module Earn :

- Collecte les récompenses des validateurs.
- Ré-affecte les récompenses aux mêmes validateurs (auto-capitalisation des intérêts).
- Déplace les enjeux des validateurs emprisonnés/inactifs vers les validateurs actifs pour maximiser le taux annuel de rendement (APR).

Ensuite, le ratio de conversion est recalculé à l'aide de la formule :

```
    Montant des tokens CORE stakés sur PledgeAgent / stCORE.totalSupply()
```

Étant donné que la **récupération des récompenses n'a lieu qu'une fois par jour**, le ratio de conversion reste le même tout au long de la journée jusqu'à la prochaine mise à jour. Les logiques mentionnées ci-dessus sont implémentées dans la méthode `afterTurnRound()`.

### Gestion de la protection des dus lors de la délégation/annulation de délégation

Dans le contrat `PledgeAgent` (le contrat de staking), lorsque les utilisateurs délèguent, le montant de CORE **doit** être >= 1.

Alors que lors de la fin de la délégation (undelegation),

- Le montant de CORE annulé **doit** être supérieur ou égal à 1 **ET**
- Le montant de CORE restant sur un validateur pour cette adresse **doit** être supérieur ou égal à 1

Lorsque le module `Earn` gère la délégation ou l'annulation de délégation en interne, il doit également suivre ces mêmes restrictions.

L'implémentation détaillée de ces logiques se trouve dans la méthode `_undelegateWithStrategy()`.
