---
sidebar_label: Rewards
hide_table_of_contents: false
sidebar_position: 2
description: Rewards in the Core Ecosystem
---

# Consensus Rewards

---

## Overview

The Core network's reward system is a foundational component of the **Satoshi Plus consensus**, aligning incentives across miners, stakers, validators, relayers, and verifiers. Through this system, participants are compensated for contributing to network security, decentralization, and governance.

Rewards are distributed across four main categories:

1. Mining (DPoW)
2. Staking (CORE and Bitcoin)
3. Validator Operations
4. System-Level Roles (Relayers and Verifiers)

## 1. Mining Rewards (Delegated Proof of Work)

**Who earns**: Bitcoin miners and mining pools

**Mechanism**:

- Miners include validator delegation metadata in the Bitcoin blocks they mine.
- This enables them to extend support to Core without diverting resources from Bitcoin mining.
- In return, miners earn **CORE tokens** as supplemental rewards, in addition to regular Bitcoin block rewards.

## 2. Staking Rewards (CORE & Bitcoin)

**Who earns**: Holders of CORE or Bitcoin

**Mechanism**:

- Participants delegate CORE or timelocked Bitcoin to validators.
- Voting power is proportional to the amount delegated.
- Rewards are distributed based on a validator's performance and the participant's share of total delegation.

Rewards from staking encourage long-term participation and give delegators influence over validator selection.

## 3. Validator Rewards

**Who earns**: Validators, and their delegators (miners, CORE stakers, Bitcoin stakers)

**Mechanism**:

- Validators earn from two sources:
  - **Block Rewards**: Newly minted CORE tokens
  - **Transaction Fees**: Collected from each processed block
- Rewards are calculated and distributed at the **end of each round** (200 blocks / ~1 day)

**Reward Split**:

- **90%** goes to validators (and their delegators/voters)
- **10%** is allocated to the **System Reward Contract**
- Validators take a commission before distributing remaining rewards to their delegators

Validators are incentivized to offer competitive reward shares to attract delegators.

## 4. Reward Distribution Formula

After validator commission, the protocol calculates delegator rewards based on contribution type:

#### Hash Power Delegators (Miners & Mining Pools)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

#### CORE Stakers

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

#### Bitcoin Stakers

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Where:

- $$rH$$: Rewards attributed to delegated hash power (DPoW).
- $$rS$$: Rewards attributed to CORE staking (DPoS).
- $$rB$$: Rewards attributed to BTC staking.
- $$R$$: Total rewards allocated to all delegators.
- $$m$$: Proportion of rewards allocated to hash power.
- $$k$$: Proportion of rewards allocated to CORE staking.
- $$l$$: Proportion of rewards allocated to BTC staking.
- $$S$$: Hybrid score of the validator.

## 5. Per-Unit Reward Calculations

Per unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

- **Per unit hash power reward:** $$rHu$$ = $$ \frac{rH}{rHp} $$
- **Per unit CORE reward:** $$rSu$$ = $$ \frac{rS}{rSp} $$
- **Per unit BTC reward:** $$rBu$$ of **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Where:

- $$rHu$$ is the validator hash power rewards per unit;
- $$rSu$$ is the CORE token staking rewards per unit;
- $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for delegator with PN BTC yield level
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e, f, g, h,..., etc) that is determined by a user's staking data as well as system Dual Staking settings. The settings are dynamically set through governance and reward users for pairing CORE and Bitcoin staking.

## 6. Dual Staking Impact on Bitcoin Rewards

Bitcoin staking rewards are tiered based on how much CORE a delegator has staked relative to their Bitcoin delegation.

- Higher tiers (e.g., Satoshi Tier) receive larger reward multipliers
- This creates a **market-driven incentive** for pairing CORE with Bitcoin to boost returns

Learn more about [Dual Staking](../dual-staking/overview.md).

## 7. Reward Optimization Strategies

Delegators are incentivized to:

- Choose validators with **smaller delegation pools**, where their stake makes up a larger percentage
- Seek out validators with **lower commission fees**
- Balance staking across under-subscribed validators to maximize marginal yield

This dynamic fosters active delegation decisions and validator competition.

## 8. Relayer & Verifier Rewards

### Relayers

- Relay Bitcoin block and transaction data to Core
- Paid from the **System Reward Contract**
- Rewards are batched every **100 Bitcoin blocks**
- Claimed periodically by relayers

### Verifiers

- Monitor validators for malicious behavior (e.g. double signing)
- When they submit valid reports, rewards are issued **immediately** from the System Reward Contract

**Note:** The **System Reward Contract** is capped at **10 million CORE tokens**. Any overflow is **burned**, making excess participation deflationary.

## Conclusion

<p align="center">
![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

Core's reward system properly incentivizes and aligns **miners, stakers, validators, and infrastructure roles**. Through a transparent and configurable system, rewards drive security, decentralization, and sustained community participation across Satoshi Plus consensus.
