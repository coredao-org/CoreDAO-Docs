---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Overview

---

Staking constitutes 2/3 of Core's Satoshi Plus consensus, enabling both Bitcoin and CORE token holders to help secure the network and earn rewards. Core supports two distinct forms of staking:

- **Self-Custodial Bitcoin Staking**, which uses Bitcoin's native timelocking to enable Bitcoin holders to vote for Core validators without foregoing custody
- **CORE Token Staking**, which allows CORE token holders to delegate their stake to validators as a vote

## How Staking Works

Core supports two trustless staking methods, each contributing to validator election and reward distribution. Each method allows you to support validators and earn CORE token rewards in return.

### Self-Custodial Bitcoin Staking

Bitcoin holders can stake natively without wrapping, bridging, or giving up custody. This is achieved using Bitcoin's CheckLockTimeVerify (CLTV) opcode.

**Steps:**

1. **Timelock Your Bitcoin** Use CLTV to lock a specific amount of BTC for a fixed period (minimum: 24 hours). During this time, the Bitcoin is completely unspendable.
2. **Specify Validator and Reward Address** When creating the timelock transaction, embed metadata that:
   - Indicates which Core validator you want to support
   - Specifies a Core address to receive your CORE rewards
3. **Broadcast the Bitcoin Transaction** Once confirmed on Bitcoin, the timelock is scanned and registered by Core's relayer network.
4. **Earn Rewards** If your selected validator is elected and actively participating, you'll receive a portion of their CORE rewards. These are sent to the Core address you provided.
5. **Unlock After Expiry** After the lock period ends, your Bitcoin becomes spendable again. To continue staking, you must create a new timelock.

### CORE Token Staking (Delegated Proof of Stake)

CORE token holders can stake by delegating their tokens to validators as votes.

**Steps:**

1. **Select a Validator** Review validator performance, commission rates, and history to decide where to delegate.
2. **Delegate CORE Tokens** Choose the amount of CORE to delegate.
3. **Earn Rewards** If your selected validator is elected and actively participating, you'll receive a portion of their CORE rewards. These are sent to the Core address you delegated CORE from.
4. **Modify or Redelegate** You can change your delegation at any time, including moving your stake to a different validator.

## Validator Election

Validator selection is based on a **hybrid score** calculated from:

- **Timelocked Bitcoin** (via CLTV)
- **Delegated CORE tokens** (via DPoS)
- **Delegated Bitcoin hashpower** (via Delegated Proof of Work)

Every election round, the validators with the highest hybrid scores are selected to validate transactions and produce blocks.

The more support a validator receives through Bitcoin and CORE staking, the higher their probability of being elected.

## Rewards and Staking Economics

### Reward Sources

- **Block Rewards**: New CORE tokens are issued on a fixed schedule over 81 years, with a 3.61% annual reduction.
- **Transaction Fees**: A portion of transaction fees on Core is distributed to validators and their delegators.

### Distribution

- Bitcoin stakers and CORE stakers receive rewards when their chosen validators are active and performing.
- Rewards are distributed based on proportional stake and validator commission structures.

## Dual Staking

Dual Staking refers to staking both Bitcoin and CORE tokens simultaneously, with higher CORE-to-Bitcoin staking ratios earning access to higher tiers of yield. **The more CORE staked relative to Bitcoin, the higher the yield potential.** Thus, attractive Bitcoin staking rates are perpetually available to the most Core-aligned participants, encouraging Bitcoin stakers to also stake CORE—aligning incentives and strengthening network security.

Dual Staking creates a **mathematical advantage** in Core's reward distribution system by recognizing dual participation as providing greater security value to the network than either mechanism in isolation, with max yields ~25-50x higher than Bitcoin staking alone.
