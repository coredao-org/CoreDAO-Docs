---
sidebar_label: Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking - Unlock Higher APY for BTC Staking
---

## Introduction

[Non-Custodial Bitcoin Staking](../Learn/products/btc-staking/overview) was integrated into the Core blockchain in April 2024, allowing users to stake Bitcoin and earn yield while retaining full control over their assets. This implementation provides a native mechanism for generating Bitcoin yield without introducing additional trust assumptions.

To further enhance yield generation from Non-Custodial Bitcoin staking at scale, **Dual Staking** unlocks higher yield tiers by staking Bitcoin and CORE simultaneously. Since daily CORE emissions are fixed, those who stake CORE alongside Bitcoin earn higher reward tiers than those staking Bitcoin alone. The percentage of boost on yield is determined by staking CORE above multiple defined thresholds, with each threshold corresponding to increasing tiers of Bitcoin staking rewards. By linking higher Bitcoin staking rewards with the volume of CORE tokens staked, this approach encourages Bitcoin stakers to make a deeper commitment to the Core ecosystem and maximizes the yield returns for committed users. 

## What Changes with Dual Staking?

From the perspective of how staking is performed, nothing fundamentally changes with Dual Staking. Users can still stake Bitcoin and CORE independently; however, by staking both Bitcoin and CORE simultaneously, they unlock the potential for higher returns on Bitcoin staking. Staking both assets is not mandatory, but rather an optional enhancement for Bitcoin holders seeking to maximize their yield. Think of this as a reward boost, where Bitcoin stakers will receive enhanced rewards as they increase the amount of CORE staked.

Dual Staking strengthens the relationship between Bitcoin and the Core blockchains, aligning incentives and value across both ecosystems, by offering increased rewards for those who actively participate in both staking options, without introducing any new requirements or complexities to the staking process.

## Key Features of Dual Staking

1. **Increased Rewards Through CORE Staking**: Bitcoin stakers can now stake CORE tokens alongside Bitcoin to unlock higher Bitcoin staking yields. To earn these enhanced staking rates, Bitcoin stakers are required to stake CORE above a certain threshold.

2. **Cumulative Reward Boost**: Once Dual Staking is adopted, Bitcoin stakers will receive higher rates as they increase the amount of CORE staked. This means stakers can maximize their returns by staking more CORE.

3. **Risk-Free and Non-Custodial Staking**: Core's Non-Custodial Bitcoin Staking enables users to maintain full ownership of their assets throughout the staking process. Bitcoin remains securely in the user’s wallet and is unlocked when their chosen lock period expires. No external entity ever gains custody of the staker’s Bitcoin. Meanwhile, in exchange for stakers locking up their Bitcoin, they can delegate to Core validators that secure CORE and earn them rewards. This setup eliminates custodial risk and enhances security, as stakers participate in Core’s security without putting their Bitcoin at risk.

## How does Dual Staking Work? 

Dual Staking does not alter the staking process for Bitcoin and CORE. For more information on Non-Custodial Bitcoin Staking, please refer [here](../Learn/products/btc-staking/overview) and consult this detailed [guidebook](./delegating-core) on CORE delegation.

Dual Staking creates an opportunity to unlock higher yields when both Bitcoin and CORE are staked simultaneously, with varying CORE staking thresholds  corresponding to different yield boost levels on Bitcoin staking rewards on the Core blockchain. 

Bitcoin holders can [stake their Bitcoin](../Learn/products/btc-staking/stake-btc-guide) through Core's Non-Custodial Bitcoin Staking to accumulate CORE rewards. By subsequently [staking their CORE](delegating-core.md) tokens above the minimum threshold for Dual Staking, users unlock higher tiers of Bitcoin yields, paid in CORE. While Dual Staking enhances Bitcoin staking rewards, it has no impact on the yield generated from CORE staking itself.

In order to enable higher yields for Bitcoin staking through Dual Staking, users must meet the following requirements: 

1. Stake both CORE and Bitcoin simultaneously, ensuring that the amount of CORE staked exceeds the minimum dual staking threshold  **AND**   
2. The CORE staking wallet address ***must*** match the designated CORE rewards address for Bitcoin staking to which the yield is paid to.

### Boosted Yield Thresholds

Currently, Satoshi Plus rewards are allocated via three pools, one for each of the three entities participating in the election of Core validators, namely namely (1) Hash Power Delegators, (2) Bitcoin Stakers, and (3) CORE Stakers. 

Dual Staking does not affect these reward pools, but does enable Bitcoin stakers who also stake CORE tokens to earn a higher proportion of rewards in the Bitcoin Staking pool. In this section, we cover in detail the working of the grading algorithm with respect to dual staking.

1. **Boosted Yield Levels**  
Under Dual Staking, there are 3 boosted yield tiers for Bitcoin Staking based on the proportion of CORE staked relative to Bitcoin staked. For Solo-Stakers of only Bitcoin, a fourth tier exists with the lowest Bitcoin staking rate. It is important to note that the annual percentage yield (APY) for Bitcoin Staking can fluctuate significantly, often due to varying prices and other market dynamics. As a result, the actual boosted yields may change daily based on market conditions.  

    * **P<sub>BASE</sub>** \= the BTC staking base rate  
    * **P<sub>Level1</sub>** \= the BTC staking base rate \+ Level 1 boosted yield  
    * **P<sub>Level2</sub>** \= the BTC staking base rate \+ Level 2 boosted yield  
    * **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= the BTC staking base rate \+ Level 3 boosted yield


2. **Staked CORE Thresholds and Staking Ratios (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**   
The deciding mechanism for a Bitcoin staker’s yield tier  (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, or **P<sub>Level3</sub> (P<sub>MAX</sub>)**) is based on CORE tokens staked relative to Bitcoin staked, where **R** represents the `CORE:BTC` Ration and **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**:  

    * **Staked CORE Threshold for P<sub>Level1</sub>** \= BTC staked quantity \* Staking Ratio (**R<sub>1</sub>**)  
    * **Staked CORE Threshold for P<sub>Level2</sub>** \= BTC staked quantity \* Staking Ratio (**R<sub>2</sub>**)  
    * **Staked CORE Threshold for P<sub>MAX</sub>** \= BTC staked quantity \* Staking Ratio (**R<sub>3</sub>**)

:::note
The staked CORE and/or staked Bitcoin can be distributed across multiple active Core validators.
:::

3. **Boosted yield level determination for each (1) staked Bitcoin**  
   * If staked CORE amount  \< **R<sub>1</sub>**, the user is in tier **P<sub>BASE</sub>**  
   * If **R<sub>1</sub>** \=\< staked CORE amount **R**\< **R<sub>2</sub>**, the user enters tier **P<sub>Level1</sub>**  
   * If **R<sub>2</sub>** \=\< staked CORE amount **R** \< **R<sub>3</sub>**, the user enters tier **P<sub>Level2</sub>**
   * If staked CORE amount  \>= **R<sub>3</sub>**, the user enters tier **P<sub>Level3</sub>** (**P<sub>MAX</sub>**) 

:::note
Staking ratios and the number of levels are configurable and subject to change by governance vote. 
:::

### Example

The following is a simple example following the parameters outlined above:

* Staking Ratio **R<sub>1</sub>** \= 1,000  
* Staking Ratio **R<sub>2</sub>** \= 3,000  
* Staking Ratio **R<sub>3</sub>** \= 8,000  
* Staked BTC quantity \= 10 BTC

The **Staked CORE Thresholds** with the above variables are:  
* Staked CORE Threshold for **P<sub>Level1</sub>** \= 10 \* 1,000 \= 10,000 staked CORE  
* Staked CORE Threshold for **P<sub>Level2</sub>** \= 10 \* 3,000 \= 30,000 staked CORE  
* Staked CORE Threshold for **P<sub>Level3</sub>** \= 10 \* 8,000 \= 80,000 staked CORE

Hence, the staked BTC in this example will enjoy a yield of  
* **P<sub>BASE</sub>** if the amount of staked CORE is below 10,000  
* **P<sub>Level1</sub>** if the amount of staked CORE is above or equal to 10,000 but below 30,000  
* **P<sub>Level2</sub>** if the amount of staked CORE is above or equal to 30,000 but below 80,000  
* **P<sub>Level3</sub> (P<sub>MAX</sub>)** if the amount of staked CORE is above or equal to 80,000


## Who Can Benefit from Dual Staking?

Dual staking is designed for everyone from individuals to the largest financial institutions — whoever wants to earn higher Bitcoin staking rates. In addition to Bitcoin holders, Bitcoin miners can also leverage Dual Staking to optimize their earnings.

Bitcoin Miners can earn CORE rewards by delegating their hash power to validators on the Core network and then stake both their Bitcoin and CORE tokens. By staking CORE tokens over the minimum dual staking threshold, they can unlock higher yields on their Bitcoin treasuries. This integration of mining rewards with the Dual Staking mechanism provides an opportunity for miners to maximize returns on both their mining and staking activities.

:::info  
For further questions or clarifications, please refer to the [Dual Staking FAQ section](../FAQs/dual-staking-faqs.md). Additionally, you may direct your inquiries to the [Core Dev Forum](http://forum.coredao.org) or [Core Discord Server](https://discord.gg/M2AGJKSG) for additional support.  
:::

## Conclusion

Dual Staking is a mechanism for providing sustainable Bitcoin staking rates at scale on Core. Further establishing Core as the leading end-to-end BTCfi platform, the CORE token is becoming the key to unlocking sustainable yield for Bitcoin. 

