---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
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

## 3. Recompensas del validador

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

#### Delegadores de poder hash (mineros y grupos de minería)

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

donde:

- $$rH$$: Recompensas atribuidas al poder de hash delegado (DPoW).
- $$rS$$: Recompensas atribuidas a la participación CORE (DPoS).
- $$rB$$: Recompensas atribuidas a la apuesta de BTC.
- $$R$$: Recompensas totales asignadas a todos los delegados.
- $$m$$: Proporción de recompensas asignadas al poder hash.
- $$m$$: Proporción de recompensas asignadas al poder hash.
- $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
- $$S$$: Puntuación híbrida del validador.

## 5. Per-Unit Reward Calculations

Los cálculos de recompensa por unidad determinan las recompensas distribuidas por cada unidad apostada de poder hash, CORE o BTC:

- **Per unit hash power reward:** $$rHu$$ = $$\frac{rH}{rHp}$$
- **Recompensa por unidad de CORE:** $$rSu$$ = $$\frac{rS}{rSp}$$
- **Per unit BTC reward:** $$rBu$$ of **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Donde:

- $$rHu$$ son las recompensas del poder hash del validador por unidad;
- $$rSu$$ son las recompensas de apuesta de tokens CORE por unidad;
- $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
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

## Conclusión

<p align="center">
![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

Core's reward system properly incentivizes and aligns **miners, stakers, validators, and infrastructure roles**. Through a transparent and configurable system, rewards drive security, decentralization, and sustained community participation across Satoshi Plus consensus.
