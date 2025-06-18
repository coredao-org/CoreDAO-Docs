---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
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

## 1) Mining Rewards (Delegated Proof of Work)

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

## 3. Récompenses des validateurs

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

#### Délégateurs de Puissance de Hachage (Mineurs et Pools de Minage)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

#### Stakers CORE

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

#### Stakers de Bitcoin

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Où:

- $$rH$$: Récompenses attribuées à la puissance de hachage déléguée (DPoW).
- $$rS$$: Récompenses attribuées au staking de CORE (DPoS).
- $$rB$$: Récompenses attribuées au staking de BTC.
- $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
- $$m$$: Proportion des récompenses allouées à la puissance de hachage.
- $$k$$: Proportion des récompenses allouées au staking de CORE.
- $$l$$: Proportion des récompenses allouées au staking de BTC.
- $$S$$: Score hybride du validateur.

## 5. Per-Unit Reward Calculations

Les calculs de récompense par unité déterminent la part de récompenses distribuée pour chaque unité de puissance de hachage, de CORE ou de BTC stakée :

- **Per unit hash power reward:** $$rHu$$ = $$\frac{rH}{rHp}$$
- \*\*Récompense par unité de CORE : $$rSu$$ = $$\frac{rS}{rSp}$$
- **Per unit BTC reward:** $$rBu$$ of **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
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

<p align="center">![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)</p>

Core's reward system properly incentivizes and aligns **miners, stakers, validators, and infrastructure roles**. Through a transparent and configurable system, rewards drive security, decentralization, and sustained community participation across Satoshi Plus consensus.
