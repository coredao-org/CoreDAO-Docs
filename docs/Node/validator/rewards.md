---
sidebar_label: Rewards
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Rewards in the Core Ecosystem 
---

The Core ecosystem is designed to incentivize participation and secure commitment from its community through a well-structured rewards system. This system underpins the Satoshi Plus consensus mechanism, ensuring network security, stakeholder engagement, and alignment of interests among all participants. The rewards system is fundamental in encouraging the community to partake actively in mining, staking, and governance, thereby enhancing the overall health and growth of the ecosystem.

## Validator Rewards
* **Description:** Validators earn rewards for their role in processing transactions, creating new blocks, and maintaining the blockchain's integrity. These rewards are critical for compensating Validators for their efforts and operational costs.
* **Mechanism:** Validators receive a combination of transaction fees and new CORE tokens minted through the blockchain's inflation policy. The amount of rewards a Validator receives is proportional to their stake and the delegated hash power from miners. There are two categories of validator rewards:
    1. **Base rewards**, i.e. newly minted CORE tokens;
    2. **Fees collected from transactions in each block**;

Base rewards are calculated and distributed when the last block of a round is mined. Currently, **90%** of the rewards go to the validators and **10%** of the rewards go to the `System Reward Contract`. Of the 90% paid to validators, some percentage is taken as a commission by the validator before they pay out their delegates. Each validator has an equal probability of producing blocks, so in the long run, all stable validators should get a similar portion of the reward.

Validators share rewards with the entities that delegated to them – including CORE stakers, bitcoin stakers, and PoW delegators – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous in order to attract more stake and hash power.

Validators are required to share rewards with the delegators who staked CORE or delegated hash power to them. Given the fact that each validator has an equal probability of producing blocks, all stable validators should get a similar portion of the rewards, in the long run. The portion validators keep for themselves (**commission fees**) will be distributed directly to their fee addresses at the end of each round. 

After the validators take their fees, the protocol uses this function to determine how the remaining rewards are split between CORE stakers, BTC stakers, and hash power delegators. Reward distribution is calculated based on the following formula: 

$$ 
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

$$ 
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Where: 
* $$rH$$: Rewards attributed to delegated hash power (DPoW).
* $$rS$$: Rewards attributed to CORE staking (DPoS).
* $$rB$$: Rewards attributed to BTC staking.
* $$R$$: Total rewards allocated to all delegators.
* $$m$$: Proportion of rewards allocated to hash power.
* $$k$$: Proportion of rewards allocated to CORE staking.
* $$l$$: Proportion of rewards allocated to BTC staking.
* $$S$$: Hybrid score of the validator.

Per unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

* Per unit hash power reward: $$rHu$$ =  $$ \frac{rH}{rHp} $$
* Per unit CORE reward: rSu = $$ \frac{rS}{rSp} $$
* Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Where:
* $$rHu$$ is the validator hash power rewards per unit;
* $$rSu$$ is the CORE token staking rewards per unit;
* $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for delegator with PN BTC yield level
* **Yield Multipliers:** Each boosted yield level has a specific multiplier (e,f,g,h, ..., etc) that is determined by a user's staking data as well as system dual staking settings. The settings are subject to change and are configurable through governance voting. These calculations ensure proportional rewards are distributed based on individual contributions to a validator’s delegation pool.

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated stake (BTC and CORE). For their part, delegators will try to optimize their own rewards by choosing validators with lower amounts of delegated hash power and stake. To maximize their rewards, delegators will look both for validators that are generous in their payouts, but also don’t already have a substantial amount of delegated CORE tokens or delegated PoW. The less a given validator has staked, the greater a contribution from a delegator will be. If a delegator adds one CORE token to a validator that only has one token, they’re 50% of that validator’s total delegation. If they delegate to a validator with 99 CORE tokens, they’re only 1% of that validator’s total delegation. Since payouts are determined in part based on the percentage of total stake each delegator accounts for, they’ll be incentivized to try and find validators with small delegations. Furhtermore, BTC staking rewards are influenced by dual staking tiers, encouraging greater network participation without prescribing specific strategies.

## Impact of Dual Staking on BTC Rewards
With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

## Reward Distribution Strategy
Core follows the following distribution Principles:
    * **Fairness:** The rewards system is designed to be fair, ensuring that contributions, whether in the form of staking, mining, or governance participation, are equitably recognized and rewarded.
    * **Transparency:** All aspects of the reward distribution are transparent, allowing participants to understand how rewards are calculated and distributed.
    * **Security:** The distribution mechanism is secured against manipulation and abuse, using cryptographic and smart contract-based safeguards to ensure the integrity of the reward process.

## Preventing Validator Misbehavior

Malicious validator behavior is disincentivized by slashing and jailing. Verifiers can submit evidence to have validators slashed or jailed if they fail to meet their obligations. The primary slashable activities are unavailability and double signing. Unavailability is reported by validators themselves in the consensus algorithm, and double signing is reported by external verifiers. Refer to the detailed guide on [slashing and jailing](../slashing/overview.md) for more information.
