---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du Liquid Staking (stCORE)

---

Le stCORE est conçu pour améliorer l'utilité du token CORE et simplifier le processus de staking. This initiative allows token holders to maximize the potential of their assets with greater flexibility and efficiency.

## Résumé de la conception

Liquid staking via stCORE is designed as follows:

- A new module called `Earn` is introduced alongside a standard ERC-20 token, **stCORE**
- Users interact with the `Earn` module to mint, redeem, and withdraw assets
- The `Earn` module interacts with Core platform contracts such as `PledgeAgent` (staking) and `CandidateHub`
- All value accrued by the `Earn` module is reflected in the **stCORE** token value
- The **CORE/stCORE** conversion ratio is updated **daily**
- Additional methods are provided to allow the system operator to rebalance and optimize staking across validators

## Perspective utilisateur

### Création

Les utilisateurs peuvent créer du stCORE en utilisant du CORE. At any given time during the day (UTC), the conversion ratio remains fixed. For example, if the ratio is 1:1.1, users can mint 100 stCORE using 110 CORE.

### Rachat

Users can redeem any amount of stCORE they hold. For example, if the conversion ratio is 1:1.1, users can redeem 100 stCORE to receive 110 CORE.

:::note
There is a redemption period of **7 days**. Once users initiate a redemption, they must wait **7 days** before withdrawing the CORE tokens to their wallet.
:::

## Common ERC-20 Use Cases

stCORE is a standard ERC-20 token and can be used in all typical ERC-20 scenarios: transfers, liquidity provision on DEXs, swaps, and more.

## Implémentations

The implementation of the `Earn` module for liquid staking can be found [here](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

User methods in the `Earn` module include:

- **`mint()`:** Mint stCORE using CORE
- **`redeem()`:** Redeem stCORE for CORE
- **`withdraw()`:** Withdraw CORE to the wallet after the redemption period

Operator methods in the `Earn` module include:

- **`afterTurnRound()`:** Implements autocompounding
- **`rebalance()`:** Balances staking between the most and least staked validators
- **`manualRebalance()`:** Manually transfers staking between validators

### Validator Selection on Mint/Redeem

Whenever a `mint` happens, the `Earn` contract delegates CORE to `PledgeAgent`. While when a `redeem` happens, the `Earn` contract undelegates CORE from `PledgeAgent`. Cela est mis en œuvre de manière à simplifier la gestion comptable.

When users mint, they must specify a validator address to stake the CORE with. This ensures equal treatment of all validator candidates, whether elected or queued. For a smoother experience, the official frontend may randomly select a validator on behalf of the user.

During redemption, the `Earn` contract selects validators randomly using `_randomIndex()`. This random index determines where in the validator list the system starts undelegating CORE until the requested amount is reached.

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

