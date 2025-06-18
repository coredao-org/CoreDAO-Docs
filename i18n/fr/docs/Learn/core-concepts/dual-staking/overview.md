---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Overview

Dual Staking refers to staking both Bitcoin and CORE tokens simultaneously, with higher CORE-to-Bitcoin staking ratios earning access to higher tiers of yield. **The more CORE staked relative to Bitcoin, the higher the yield potential.** Thus, attractive Bitcoin staking rates are perpetually available to the most Core-aligned participants, encouraging Bitcoin stakers to also stake CORE—aligning incentives and strengthening network security.

Dual Staking creates a **mathematical advantage** in Core's reward distribution system by recognizing dual participation as providing greater security value to the network than either mechanism in isolation, with max yields ~25-50x higher than Bitcoin staking alone.

**View live yield rates at [stake.coredao.org/staking](https://stake.coredao.org/staking)**

## How Dual Staking Works

### 1. Dual Participation

Dual Staking requires simultaneous participation in two legs of Core's tripartite Satoshi Plus consensus:

**Self-Custodial Bitcoin Staking (Timelocking):**

- Timelock Bitcoin using CLTV on the Bitcoin blockchain
- Include validator vote metadata in the timelock transaction
- Maintain complete self-custody of Bitcoin throughout

**Delegated Proof of Stake (CORE Delegation):**

- Delegate CORE tokens to validators on the Core network
- Support the same or different validators as chosen for Bitcoin staking

### 2. Tiered Yield System

The protocol uses a **tier-based multiplier system** to enhance Bitcoin staking rewards for Dual Stakers:

| **Tier**         | **CORE-to-Bitcoin Ratio (R)** | **Label**           | **Description**               |
| ---------------- | ------------------------------------------------ | ------------------- | ----------------------------- |
| **Base Tier**    | R < R₁                  | P<sub>Base</sub>    | No CORE delegation            |
| **Boost Tier**   | R₁ ≤ R < R₂             | P<sub>Boost</sub>   | Entry-level Dual Staking tier |
| **Super Tier**   | R₂ ≤ R < R₃             | P<sub>Super</sub>   | Higher CORE-to-Bitcoin ratio  |
| **Satoshi Tier** | R ≥ R₃                                           | P<sub>Satoshi</sub> | Highest tier; maximum rewards |

- Tier thresholds (**R₁, R₂, R₃**) are dynamic and adjust based on network conditions.
- Higher tiers unlock progressively greater **reward multipliers**.

### 3. Example Calculation

Suppose you stake **10 Bitcoin**.

If tier ratios are defined as:

- **R₁ = 3,000 CORE/Bitcoin**
- **R₂ = 9,000 CORE/Bitcoin**
- **R₃ = 24,000 CORE/Bitcoin**

Then your thresholds would be:

| **Tier**     | **CORE Required** |
| ------------ | ----------------- |
| Boost Tier   | 30,000 CORE       |
| Super Tier   | 90,000 CORE       |
| Satoshi Tier | 240,000 CORE      |

Your reward tier is determined by how much CORE you've delegated relative to your staked Bitcoin.

## Benefits

**Enhanced Yields:**

- Achieve ~25-50x higher yields compared to solo Bitcoin staking
- Access sustainable, protocol-native rewards
- Benefit from both fixed emissions and transaction fee revenue

**Risk Considerations:**

- Bitcoin principal remains completely secure with no new trust assumptions
- CORE delegation operates under the same trust assumptions as DPoS
- Dual Staking does not change how you stake, just how you are rewarded

## Best Practices

- **Monitor tier thresholds** regularly—they adjust based on participation
- **Track validator performance** to maximize uptime and yield
- **Diversify validator selection** to reduce dependency on a single provider

## Yield Sustainability

- Tiers adjust **dynamically** to maintain attractive yields
- The protocol balances accessibility with long-term sustainability by adapting to market conditions and participation levels

## Why It Matters

Dual Staking unlocks sustainably attractive yields for Bitcoin stakers who are most committed to Core, as represented by their CORE staking relative to Bitcoin. The system incentivizes Bitcoin holders to become CORE holders, thereby aligning the two ecosystems and creating stronger network effects as both assets work together to secure and grow the Core network.

**Start Dual Staking at stake.coredao.org**

:::info
Please refer to the [Dual Staking FAQ section](../../../FAQs/dual-staking-faqs.md) for further questions or clarifications. Pour un support supplémentaire, vous pouvez diriger vos questions vers le [Forum des développeurs de Core](http://forum.coredao.org) ou le [Serveur Discord de Core](https://discord.gg/M2AGJKSG).\
:::
