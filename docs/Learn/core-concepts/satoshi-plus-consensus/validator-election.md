---
sidebar_label: Validator Election
hide_table_of_contents: false
sidebar_position: 2
description: Learn about the Satoshi Plus Validator Election Process
---

# Validator Election 
---

## Overview

The Validator Election Process in Core's Satoshi Plus consensus mechanism is where Delegated Proof of Work, Delegated Proof of Stake, and Non-Custodial Bitcoin Staking are synthesized. Bitcoin miners/mining pools, CORE stakers, and Bitcoin stakers contribute to the election of validators via a hybrid scoring system. 

Validators play a vital role in producing blocks and validating transactions on the Core network. The election process determines which validators will be part of the active validator set for each round, ensuring that the most trusted and well-supported validators are chosen to maintain the network’s integrity.

## Step by Step Process

1. **Delegation of Resources:**
   * **Bitcoin Miners:** Bitcoin miners delegate their hash power to Core Validators by including specific information in the op_return field of the coinbase transaction.
   * **CORE Token Stakers:** Holders of CORE tokens delegate their staked tokens to their preferred validators.
   * **Bitcoin Stakers:** Bitcoin holders lock their Bitcoin in absolute time locks and delegate their Bitcoin to their chosen validators.

2. **Hybrid Score Calculation:**
   * The hybrid score for each validator is calculated based on the amount of delegated hash power from Bitcoin miners, the amount of staked CORE tokens, and the amount of staked Bitcoin.
   * The formula balances these three components to produce a score that reflects the validator’s overall support and reliability.

3. Election of Validators:
   * Every round, which lasts one day, the validators with the highest hybrid scores are elected to the validator set.
   * The top 23 validators with the highest scores are chosen to be part of the active validator set for that round.

4. Validator Responsibilities:
   * Elected validators are responsible for producing blocks and validating transactions throughout the round.
   * They work in a round-robin manner, taking turns to produce blocks during each slot, with each slot lasting three seconds.

5. Updating the Validator Set:
   * The validator set is updated every 200 blocks to ensure stability and performance. If any validator is jailed or slashed, others continue to produce blocks without interruption.
   * At the end of each round, the accumulated rewards are calculated and distributed, and a new validator set is determined based on the updated hybrid scores.

6. Rewards Distribution:
   * Validators and their delegators earn CORE token rewards based on their performance and the amount of resources delegated to them.
   * These rewards incentivize continuous participation and diligent performance by validators.

## Workflow of the Validator Election Process​

The Validator election process in Satoshi Plus involves key steps, supported by specific equations to quantify stake and hash power contributions:

1. **Stake Delegation:**
   * CORE and Bitcoin holders stake and delegate their tokens to validator candidates. This delegation is a form of voting, where the weight of each vote corresponds to the number of staked tokens.

2. **Hash Power Delegation:**
   * Bitcoin miners delegate a portion of their hash power by specifying their preferred validators in the Bitcoin blocks they mine. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Validator Selection:** 
   * Validators are selected based on the total support they receive, calculated by combining staked tokens (CORE and Bitcoin) and delegated hash power. The equation behind the hybrid score is:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Where:

* $rHp$ is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;
* $tHp$ is the total hash power on Core 
* $rSp$ is the amount of CORE tokens delegated by CORE token holders to that validator
* $tSp$ is the total amount of CORE tokens stake on Core 
* $rBp$ is the amount of Bitcoin delegated by Bitcoin holders to that validator
* $tBp$ is the total amount of Bitcoin staked on Core 
* $m$ is a dynamic factor that controls the overall weights of hash power $(0 < m <1)$
* $n$ is a dynamic factor that controls the voting power of each Bitcoin vs. each CORE token.

Leaving aside the mathematical details, this is essentially a weighted, bicameral voting procedure. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the same mechanism. These DPoW, DPoS, and Bitcoin staking components are weighted to determine the hybrid score.

4. **Block Production:**
   * After election, all validators are sorted roughly in order of their hybrid score, and take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning. The present number of validators is **23**_, with the number of validators expected to increase over time as the network grows. What’s more, this mechanism provides additional security through improved efficiency and a tolerance for a large number of Byzantine players. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

5. **Reward Distribution:**
   * Rewards are distributed based on contributions to network security, using the following formula:
 
      $$ 
         rH = \frac{rHp}{tHp} * \frac{m}{S} * R
      $$

      $$
         rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
      $$

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

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated stake (Bitcoin and CORE). 

## Flow Diagram of the Validator Election Process

The following diagram visually represents the Validator election process in Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

This flowchart illustrates the cyclical process of the validator election and their ongoing responsibilities within Satoshi Plus. It emphasizes how stake and hash power delegations directly influence validator selection, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.
