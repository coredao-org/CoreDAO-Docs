---
sidebar_label: Liquid Staking (stCORE) FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Liquid Staking (stCORE) FAQs
---

### 1. What is stCORE?
stCORE is an innovative solution on the Core blockchain designed to enhance the utility of CORE tokens by introducing liquid staking. This allows CORE token holders to maximize the potential of their assets with increased flexibility and efficiency. The process involves staking CORE tokens to secure the network and simultaneously gaining liquidity through minting stCORE tokens, which can be utilized in various DeFi protocols.

### 2. What are the benefits of liquid staking with stCORE?
Liquid staking with stCORE allows CORE token holders to participate in DeFi protocols while their assets are staked. This enhances asset utility and potential yield generation without compromising the security contributions to the network.

### 3. What is the redemption period for stCORE?
A **7-day** unlocking period is required by default for withdrawing CORE after redemption initiation.

### 4. How validators are chosen on mint/redeem?

Note that whenever mint/redeem happens, the `Earn` contract delegates CORE to `PledgeAgent` / undelegates CORE from `PledgeAgent`. This is implemented in such a way to keep the bookkeeping simpler. 

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so we hope to treat all validator candidates equally no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choosing a proper validator and make it unseen for users.  

During redeem, the `Earn` contract chooses validators randomly -  `_randomIndex()`, an index will be randomly selected, which is used as the start index to iterate through the validators array until enough CORE tokens are undelegated. 

### 5. How to keep validators balanced on staking amounts?

Everytime when 
* A mint happens, the caller can choose validator freely
* A redeem happens, the system picks validators randomly 

This mechanism almost guarantees that the CORE tokens held by the Earn module can be split to different validators evenly. 

However, considering there are cases the balance will be broken by certain operations, e.g. large value mint/redeem. We also introduced a few methods to rebalance stakings to validators from Earn.
* **rebalance():** the system picks the validators with the largest and smallest staking amounts and makes them break even if the gap exceeds the predefined threshold.  
* **manualRebalance():** the operator manually transfers staking from one validator to another. 

### 6. How is the conversion ratio calculated?

In every round after turn round happens, the Earn module fetches rewards from each validator and delegates them back correspondingly. This is how it does auto compounding internally. During the period, the system also moves staking from inactive/jailed validators to active ones to improve overall APR. 

And after that the conversion ratio of stCORE/CORE can also be updated. The formula for that is 

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply() 
```

Since **rewards claiming only happens once per day** in such design, the conversion rate can be kept the same in the entire day until the next turn round happens. 

The above logics are implemented in the `afterTurnRound()` method. 

### 7. How to handle the dues protection when delegating/undelegating?

Note that in the `PledgeAgent` contract (the staking contract), when users delegate

* The amount of CORE **must** >= 1

And when they undelegate

* The amount of CORE **must** >= 1 **AND**
* The remaining CORE left on a validator of this address **must** >= 1

When handling delegate/undelegate internally, the `Earn` module must also follow the same restrictions. 

The implementation/case elaborations are in `_undelegateWithStrategy()` method.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so we hope to treat all validator candidates equally no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choosing a proper validator and make it unseen for users.  

During redeem, the Earn contract chooses validators randomly - ` _randomIndex()`, an index will be randomly selected, which is used as the start index to iterate through the validators array until enough CORE tokens are undelegated. 
