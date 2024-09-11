---
sidebar_label: Rewards
hide_table_of_contents: false
sidebar_position: 2
description: Rewards in the Core Ecosystem
---

# Satoshi Plus Rewards
---

![rewards](../../../../static/img/validator/Reward-Distribution.png)

## Validator Rewards

Validators earn rewards for their role in processing transactions, creating new blocks, and maintaining the Core blockchain's integrity. These rewards are critical for compensating Validators for their efforts and operational costs.

Validator rewards are derived from two sources:
1. Transaction fees from economic activity on the Core blockchain.
2. CORE block rewards, following a sustainable 81-year emissions schedule.

Validators share rewards with the entities that delegated to them – including CORE stakers, bitcoin stakers, and PoW delegators – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous in order to attract more stake and hash power.

## Delegator Rewards

After the validators take their fees, the protocol uses this function to determine how the remaining rewards are split between CORE stakers, Bitcoin stakers, and hash power delegators. The reward distribution is based on the following formulas:

### Hash Power Delegators (Miners & Mining Pools)

$$ 
    rH = \frac{rHp}{tHp} * \frac{m}{S} * R
$$

### CORE Stakers

$$
    rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
$$

### Bitcoin Stakers

$$
    rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
$$

Where: 
* $rH$ is the rewards received by the validator because of the hash power delegated to it (DPoW)
* $rS$ is the rewards received by the validator because of the CORE delegated to it (DPoS)
* $rB$ is validator rewards attributed to Bitcoin staking
* $R$ is the overall rewards attributed to all delegators

For completeness, here are three other ratios of interest:

$$
    rHu = \frac{rH}{rHp}
$$

$$
    rSu = \frac{rS}{rSp}
$$

$$
    rBu = \frac{rB}{rBp}
$$

Where:
* $rHu$ is the validator hash power rewards per unit;
* $rSu$ is the CORE token staking rewards per unit;
* $rBu$ is the Bitcoin staking rewards per unit;

## Reward Split

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated staked CORE and Bitcoin. For their part, delegators will try to optimize their own rewards by choosing validators with lower amounts of delegated hash power and stake. To maximize their rewards, delegators will look both for validators that are generous in their payouts, but also don’t already have a substantial amount of delegated CORE tokens or delegated PoW. The less a given validator has staked, the greater a contribution from a delegator will be. If a delegator adds one CORE token to a validator that only has one token, they’re 50% of that validator’s total delegation. If they delegate to a validator with 99 CORE tokens, they’re only 1% of that validator’s total delegation. Since payouts are determined in part based on the percentage of total stake each delegator accounts for, they’ll be incentivized to try and find validators with small delegations.

## Relayer and Verifier Rewards

Of the CORE block rewards and transaction fees, 90% are distributed to validators and 10% to the System Rewards Contract. The System Reward Contract accumulates rewards to remunerate relayers and verifiers.

Relayers are responsible for communicating the Bitcoin block headers to the Core network. They earn a portion of the base system rewards and transaction fees for this cross-chain communications work. Relayer rewards are distributed in batches, every 100 Bitcoin blocks. Relayers claim their rewards periodically.

Verifiers in the Core  ecosystem are responsible for monitoring the behavior of validators and report them if they engage in double signing or other malicious activity. When successful, rewards are paid out immediately from the System Rewards Contract, in the same transaction.
 
