---
sidebar_label: Validator Election
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Election Process on the Core Network
---

## Overview

Validators are a crucial part of the Core network. In addition to the fact that they handle transaction validation and block production, the validator election process is where all the components, i.e., DPoW, DPoS, and Non-Custodial Bitcoin Staking, of Satoshi Plus consensus come together. The Validator election process is a central feature of the Satoshi Plus consensus mechanism employed by Core blockchain. This process ensures the integrity, security, and efficiency of the blockchain by electing Validators responsible for validating transactions and creating new blocks. 

## Importance of Validator Election

* **Security and Integrity**: Validators maintain the blockchain's integrity, making a robust election process crucial for ensuring that only the most reliable nodes manage the blockchain ledger.

* **Decentralization**: The election process allows miners and stakers to participate in Validator selection, promoting decentralization and preventing the concentration of control.

* **Incentive Alignment**: Stakeholders are incentivized to support effective Validators, aligning interests across the network. Validators and their supporters (miners and stakers) receive rewards, ensuring accountability and continued participation.

* **Efficiency and Scalability**: Competent Validators enhance the network's transaction handling capacity, crucial for performance and scalability.

## Workflow of the Validator Election Process

The Validator election process in Satoshi Plus involves key steps, supported by specific equations to quantify stake and hash power contributions:

1. **Stake Delegation**:
   - CORE and BTC token holders stake and delegate their tokens to Validator candidates. This delegation is a form of voting, where the weight of each vote corresponds to the number of staked tokens.

2. **Hash Power Delegation**:
   - Bitcoin miners delegate a portion of their hash power by specifying their preferred Validators in the Bitcoin blocks they mine. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Validator Selection**:
   - Validators are selected based on the total support they receive, calculated by combining staked tokens (BTC and CORE) and delegated Bitcoin hash power. 

4. **Validator Set Formation**:
A set of Validators is formed from those with the highest scores. This set is dynamically updated to reflect ongoing changes in stake delegations and hash power allocations. There are two steps involved in validator election. 

1. Hybrid scores are calculated for all validators in the network with the following equation. The hybrid score for each validator is calculated based on the following formula:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Where, $$ m + k + l = 1 $$
   * $$rHp$$: Bitcoin hash power delegated to a validator.
   * $$tHp$$: Total hash power on Core.
   * $$rSp$$: Amount of CORE tokens staked to a validator.
   * $$tSp$$: Total CORE tokens staked on Core.
   * $$rBp$$: Amount of BTC tokens staked to a validator.
   * $$tBp$$: Total BTC tokens staked on Core.
   * $$m$$: Ratio assigned to hash power.
   * $$k$$: Ratio assigned to CORE staking.
   * $$l$$: Ratio assigned to BTC staking.

2. At the end of each round validators are ranked in order of their hybrid score, and the *27** validators with the highest hybrid scores are selected for the validator set in the next round.

Leaving aside the mathematical details, this is essentially a weighted, bicameral voting procedure. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the delegation of their tokens. This delegated PoW, delegated PoS, and Non-Custodial BTC Staking are weighted to determine the hybrid score.

This is the “core” of the Core blockchain, the mechanism by which the network leverages the security and decentralization of the Bitcoin network and the scalability and composability of PoS chains like Ethereum. Letting Bitcoin miners and bitcoin stakers vote on validators allows Core to avail itself of Bitcoin’s legendary robustness; and because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Block Production**:
   - After election, all validators are sorted roughly in order of their hybrid score, and they take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning. By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability, but the number of validators is expected to increase to **34 validators by Q2 2025**. In Q2 2024, Core has already expanded its active validator set from **21** to **27**. What’s more, this mechanism provides additional security through improved efficiency and a tolerance for a large number of Byzantine players. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

6. **Reward Distribution**:
   - Rewards are distributed based on contributions to network security, using the following formula:

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
      
#### Impact of Dual Staking on BTC Rewards
With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

### Flow Diagram of the Validator Election Process

The following diagram visually represents the Validator election process in Satoshi Plus:

![validator-election-flow](../../../static/img/staoshi-plus/validator-election-flow.png)

This flowchart illustrates the cyclical nature of the validator election and their ongoing responsibilities within the Satoshi Plus consensus mechanism. It emphasizes how stake and hash power delegation directly influence validator selection, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.