---
sidebar_label: Design
hide_table_of_contents: false
sidebar_position: 2
---

# Design of Liquid Staking (stCORE)
---

stCORE is designed to enhance the utility of the CORE token and simplify the staking process. This initiative allows token holders to maximize their asset potential with greater flexibility and efficiency.

## Design Principles
The primary design principles of liquid staking through stCORE on the Core Chain are as follows:

* Simple and least/no changes to existing blockchain protocols. 
* Decentralized and won’t bring security concerns to the network.
* Easy to use (user’s perspective).

## Design Summary

After researching different LST projects, LiDO and Kava, etc., and combining the unique characteristics of Core blockchain, the liquid staking on the Core blockchain in the form of stCORE is designed as described below:

* We introduce a new module called `Earn` along with a standard ERC-20 token **stCORE**
* Users interact with `Earn` module, to mint/redeem/withdraw their assets
* `Earn` module interacts with Core platform contracts such as `PledgeAgent` (the staking contract) and `CandidateHub`
* All incurred value of `Earn` will be reflected in the **stCORE** token value
* The **CORE/stCORE** conversion ratio will be updated **daily** to fit the turn round mechanism of Core blockchain
* We also introduce a few other methods so the system operator can rebalance and optimize stakings across all validators. 

## User Perspective

### Mint

Users can mint stCORE using CORE. At any given time in a day (UTC), they can mint stCORE at the same conversion ratio. E.g. if the conversion ratio is 1:1.1, then users can mint 100 stCORE using 110 CORE. 

### Redeem

The system is designed in such a way that users can always redeem whatever amount of stCORE token they have. E.g. if the conversion ratio is 1:1.1, then users can redeem 100 stCORE to get 110 CORE back. 

:::note 
There is a redemption period which by default is **7 days**. Once users request redemption from the system, it gets **7 days** for them to withdraw the CORE tokens to their wallet. 
:::

## Common ERC-20 use cases

stCORE is a standard ERC-20 token and users can do whatever actions which are eligible on an ERC-20 token, such as transfer, provide liquidity on DEX, swap, etc. 

## Implementations

The implementation for `Earn` module of liquid staking can be found [here](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

User methods in the `Earn` module includes the following:
* **mint():** mint stCORE using CORE
* **redeem():** redeem stCORE and get CORE back
* **withdraw():** claim CORE to wallet after the redemption period

Operator methods in the `Earn` module includes the following:
* **afterTurnRound():** where autocompounding is implemented
* **rebalance():** break even the most/least staked validators
* **manualRebalance():** arbitrarily transfer staking between two validators

### Validators Selection on mint/redeem

Note that whenever mint/redeem happens, the `Earn` contract delegates CORE to `PledgeAgent` / undelegates CORE from `PledgeAgent`. This is implemented in such a way to keep the bookkeeping simpler. 

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so we hope to treat all validator candidates equally no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choosing a proper validator and make it unseen for users.  

During redeem, the `Earn` contract chooses validators randomly -  `_randomIndex()`, an index will be randomly selected, which is used as the start index to iterate through the validators array until enough CORE tokens are undelegated. 

### Keeping Validators Balanced on Staking Amounts

Everytime when 
* A mint happens, the caller can choose validator freely
* A redeem happens, the system picks validators randomly 

This mechanism almost guarantees that the CORE tokens held by the Earn module can be split to different validators evenly. 

However, considering there are cases the balance will be broken by certain operations, e.g. large value mint/redeem. We also introduced a few methods to rebalance stakings to validators from Earn.
* **rebalance():** the system picks the validators with the largest and smallest staking amounts and makes them break even if the gap exceeds the predefined threshold.  
* **manualRebalance():** the operator manually transfers staking from one validator to another. 

### stCORE/CORE Conversion Ratio Calculation

In every round after turn round happens, the `Earn` module fetches rewards from each validator and delegates them back correspondingly. This is how it does auto compounding internally. During the period, the system also moves staking from inactive/jailed validators to active ones to improve overall APR. 

And after that the conversion ratio of stCORE/CORE can also be updated. The formula for that is 

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply() 
```

Since **rewards claiming only happens once per day** in such design, the conversion rate can be kept the same in the entire day until the next turn round happens. 

The above logics are implemented in the `afterTurnRound()` method. 

### Handling the Dues Protection When delegating/undelegating

Note that in the `PledgeAgent` contract (the staking contract), when users delegate

* The amount of CORE **must** >= 1

And when they undelegate

* The amount of CORE **must** >= 1 **AND**
* The remaining CORE left on a validator of this address **must** >= 1

When handling delegate/undelegate internally, the `Earn` module must also follow the same restrictions. 

The implementation/case elaborations are in `_undelegateWithStrategy()` method. 

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so we hope to treat all validator candidates equally no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choosing a proper validator and make it unseen for users.  

During redeem, the Earn contract chooses validators randomly - ` _randomIndex()`, an index will be randomly selected, which is used as the start index to iterate through the validators array until enough CORE tokens are undelegated. 
