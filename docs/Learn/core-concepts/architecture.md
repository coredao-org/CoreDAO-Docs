---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Quick Glance at Core's Underlying Blockchain Architecture
---

# Architecture of the Core Blockchain
---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Self-Custodial Bitcoin Staking, and Delegated Proof of Stake (DPoS)**.

Through Satoshi Plus, **Bitcoin miners/mining pools, Bitcoin stakers, and CORE token stakers** delegate resources to elect validators who secure the Core network. Validator selection is based on a hybrid score, considering:

- **Delegated hash power** from Bitcoin miners/mining pools
- **Delegated/staked Bitcoin** from Bitcoin holders
- **Delegated/staked CORE tokens** from CORE token holders


## Satoshi Plus Consensus: Major Components 

<p align="center">
![component-diagram](../../../static/img/Core-Architecture.png)
</p>

## Key Roles

- **Validators**: Produce blocks and validate transactions on the Core network. Validators must register and lock a refundable CORE validator bond deposit.
- **Bitcoin Miners**: Secure Bitcoin via Proof of Work and can delegate hash power to Core validators by including delegation information in the coinbase transaction of a block.
- **CORE Stakers**: Delegate CORE tokens to validators as part of the validator election to support network security.
- **Bitcoin Stakers**: Delegate timelocked Bitcoin to validators on Core through Self-Custodial Bitcoin staking and earn yield without relinquishing custody of their assets.
- **Relayers**: Responsible for synchronizing the data between the Core and Bitcoin networks. They transmit Bitcoin block and transaction data to Core. Anyone can become a relayer by registering and locking up a refundable CORE token deposit.
- **Verifiers**: Report malicious behavior on the Core network. Successful verification flags can trigger the slashing or jailing of validators and bad actors. Verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a Verifier on the Core network.

## Consensus & Election

- **Validator Election**: Every **round (1 day)**, the top **31 validators** by **hybrid score** (based on DPoW from miners, DPoS from CORE holders, and staked Bitcoin from Bitcoin holders) are elected to become part of the active validator set and secure the network. Any validator in the current validator set that hasn't been jailed or slashed is considered "live". To ensure a more stable TPS, the live validators are updated every 200 blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual.
- **Hybrid Score:** Every validator node seeking to become part of the active validator set is given a hybrid score, which is calculated based on three delegations: hashpower, CORE, and Bitcoin. The active validator set currently comprises the top 31 validators with the highest hybrid scores.
- **Round:** A round lasts **one day**, during which the **top 31 validators** (ranked by hybrid score) are elected to produce blocks. At the end of each round, **rewards are calculated and distributed**, and the next validator set is selected.
- **Epoch (10 min or 200 slots)**: Periodic validator status checks ensure jailed nodes don't participate in consensus. The validator status is checked once per epoch (rather than continuously) to keep TPS roughly constant in a given round.
- **Slot (3 sec)**: Each 1-day round is divided into slots, and all validators in the validator set take turns producing one block per slot in a round-robin fashion.

## Rewards & Stability

- **Reward Module:** Rewards are distributed at the end of each round based on validator performance. The Reward Module calculates and distributes these rewards accordingly.
- Rewards are distributed at the **end of each round**.
- Live validators are updated **every 200 blocks** to maintain stable TPS.
