---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Découvrez le processus d'élection des validateurs
---

# Core Validator Election

---

## Aperçu

Core's Satoshi Plus consensus draws validator support from three delegation sources:

- **Delegated Proof of Work (DPoW)** from Bitcoin miners
- **Self-Custodial Bitcoin Staking** from Bitcoin holders
- **Delegated Proof of Stake (DPoS)** from CORE token holders

Each source contributes to a validator's **hybrid score**, which determines their election into the active validator set.

## Election Process

<p align="center">![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)</p>

### 1. Delegation of Support

Validators receive support from three sources:

- **Bitcoin Holders**: Timelock Bitcoin using CLTV and embed validator metadata in the redeem script to vote for validators.
- **Bitcoin Miners**: Delegate hash power by including validator votes in the op_return field of Bitcoin coinbase transactions.
- **CORE Token Holders**: Delegate CORE tokens directly to preferred validators.

Each form of delegation contributes to validator selection and reward eligibility.

### 2. Hybrid Score Calculation

Validators are ranked by a **hybrid score** that blends the three forms of support:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Où, $$m + k + l = 1$$

- $$rHp$$: Puissance de hachage Bitcoin déléguée à un validateur.
- $$tHp$$: Puissance de hachage totale sur Core.
- $$rSp$$: Montant de tokens CORE stakés auprès d’un validateur.
- $$tSp$$: Montant total de tokens CORE stakés sur Core.
- $$rBp$$: Montant de tokens BTC stakés auprès d’un validateur.
- $$tBp$$: Montant total de tokens BTC stakés sur Core.
- $$m$$: Ratio attribué à la puissance de hachage.
- $$k$$: Ratio attribué au staking de CORE.
- $$l$$: Ratio attribué au staking de BTC.

This formula promotes proportional and fair influence across all delegation sources.

### 3. Validator Selection and Block Production

- The **top 29 validators** with the highest hybrid scores are elected every **round (1 day)**
- Validators produce blocks in a **round-robin** fashion, with each slot lasting **3 seconds**
- The **validator set is updated every 200 blocks** to promote consistency and prevent disruption from underperforming or penalized validators
- Core maintains liveness as long as fewer than **⅓ of validators are malicious**

## Flow Summary

The validator election cycle proceeds as follows:

1. **Delegation**: Miners, CORE stakers, and Bitcoin stakers delegate support
2. **Score Calculation**: Hybrid scores are computed using the defined formula
3. **Election**: Top 29 validators are selected based on scores
4. **Block Production**: Validators take turns producing blocks
5. **Rewards**: CORE tokens are earned by validators and distributed proportionally to delegators
6. **Cycle Repeats**: Validator set updates every 200 blocks
