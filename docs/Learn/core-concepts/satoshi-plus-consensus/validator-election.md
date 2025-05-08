---
sidebar_label: Validator Election
hide_table_of_contents: false
sidebar_position: 2
description: Satoshi Plus Validator Election Process
---

# Validator Election Process on Core
---

## Overview

The validator election process in Core's Satoshi Plus consensus mechanism is where DPoW, DPoS, and Non-Custodial Bitcoin Staking are synthesized. Bitcoin miners/mining pools, CORE stakers, and Bitcoin stakers contribute to the election of validators via a hybrid scoring system. 

Validators play a vital role in producing blocks and validating transactions on the Core network. The election process determines which validators will be part of the active validator set for each round, helping select the most trusted and well-supported validators to maintain the network's integrity.

## Step by Step Process

1. **Delegation of Resources:**
   * **Bitcoin Miners:** Bitcoin miners delegate their hash power to Core validators by including specific information in the `op_return` field of the coinbase transaction.
   * **CORE Token Stakers:** Holders of CORE tokens delegate their tokens to their preferred Core validators.
   * **Bitcoin Stakers:** Bitcoin holders lock their Bitcoin in CLTV absolute timelocks and delegate their assets to their preferred Core validators.

2. **Hybrid Score Calculation:**
   * The hybrid score for each validator is calculated based on the amount of delegated hash power from Bitcoin miners, the amount of staked CORE tokens, and the amount of staked Bitcoin.
   * The hybrid score formula balances these three components to produce a score that reflects the validator’s overall support.

3. **Election of Validators:**
   * Every round, which lasts one day, the validators with the highest hybrid scores are elected to the validator set.
   * The top **27** validators with the highest scores are chosen to be part of the active validator set for that round.

4. **Validator Responsibilities:**
   * Elected validators are responsible for producing blocks and validating transactions throughout the round.
   * They work in a round-robin manner, taking turns to produce blocks during each slot, with each slot lasting three seconds.

5. **Updating the Validator Set:**
   * The validator set is updated every **200 blocks** to ensure stability and performance. If any validator is jailed or slashed, others continue to produce blocks without interruption.
   * At the end of each round, the accumulated rewards are calculated and distributed, and a new validator set is determined based on the updated hybrid scores.

6. **Rewards Distribution:**
   * Validators and their delegators earn CORE token rewards when elected validators reliably produce blocks and secure the Core blockchain. 
   * These rewards incentivize continuous participation and diligent performance by validators.

## Workflow of the Validator Election Process​

The validator election process in Satoshi Plus involves key steps, supported by specific equations to quantify stake and hash power contributions:

1. **Stake Delegation:**
   * CORE holders stake their tokens by delegating to Core validators. Similarly, Bitcoin holders stake their tokens by timelocking them on Bitcoin and delegating to Core validators. The delegation's influence on validator election is proportional to the amount staked. 

2. **Hash Power Delegation:**
   * Bitcoin miners delegate a portion of their hash power by specifying their preferred validators in the Bitcoin blocks they mine. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Validator Selection:** 
   * Validators are selected based on the total support they receive, calculated by combining staked tokens (CORE and Bitcoin) and delegated hash power. The equation behind the hybrid score is:

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

4. **Block Production:**
   * After election, all validators are sorted roughly in order of their hybrid score, and take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning. The present number of validators is **27**, with the number of validators expected to increase over time as the network grows. What’s more, this mechanism provides additional security through improved efficiency and a tolerance for a large number of Byzantine players. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

5. **Reward Distribution:**
   * Rewards are distributed based on contributions to network security, using the following formula:
 
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
      * $rH$ is the rewards received by the validator because of the hash power delegated to it (DPoW)
      * $rS$ is the rewards received by the validator because of the CORE delegated to it (DPoS)
      * $rB$ is validator rewards attributed to Bitcoin staking
      * $$R$$: Total rewards allocated to all delegators of the validaotr.
      * $$m$$: Proportion of rewards allocated to hash power.
      * $$k$$: Proportion of rewards allocated to CORE staking.
      * $$l$$: Proportion of rewards allocated to BTC staking.
      * $$S$$: Hybrid score of the validator.

      For completeness, here are three other ratios of interest:

      $$
         rHu = \frac{rH}{rHp}
      $$

      $$
         rSu = \frac{rS}{rSp}
      $$

   As for BTC staking, the rewards per unit are further subdivided based on the delegators’ Dual Staking yield tiers. Assuming that there are 4 boosted yield levels (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>MAX</sub>) with Dual Staking yield multipliers (e, f, g, and h). The reward per unit for BTC staking will be calculated as follows
   * Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp} * $$ Yield Multiplier for Level<sub>n</sub>
      * $$rBu$$ of P<sub>BASE</sub>  = $$ \frac{rB}{rBp} * e $$
      * $$rBu$$ of P<sub>1</sub>  = $$ \frac{rB}{rBp} * f $$
      * $$rBu$$ of P<sub>2</sub>  = $$ \frac{rB}{rBp} * g $$
      * $$rBu$$ of P<sub>Max</sub>  = $$ \frac{rB}{rBp} * h $$

   Where:
      * $rHu$ is the validator hash power rewards per unit;
      * $rSu$ is the CORE token staking rewards per unit;
      * $rBu$ is the Bitcoin staking rewards per unit;
      * $rBu$ of P<sub>BASE</sub> is the BTC staking rewards per unit for P<sub>BASE</sub> delegator
      * $rBu$ of P<sub>Level<sub>1</sub></sub> is the BTC staking rewards per unit for P<sub>Level1</sub> delegator
      * $rBu$ of P<sub>Level<sub>2</sub></sub> is the BTC staking rewards per unit for P<sub>Level2</sub> delegator
      * $rBu$ of P<sub>MAX</sub> is the BTC staking rewards per unit for P<sub>MAX</sub> delegator;
      * **Yield Multipliers:** Each reward tier has a specific multiplier (e,f,g,h, ..., etc) that is multiplied to rewards earned per unit of BTC staked. 

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated stake (Bitcoin and CORE). 

## Flow Diagram of the Validator Election Process

The following diagram visually represents the Validator election process in Satoshi Plus:

<p align="center">
![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)
</p>

This flowchart illustrates the cyclical process of the validator election and their ongoing responsibilities within Satoshi Plus. It emphasizes how stake and hash power delegations directly influence validator election, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.
