---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Quick Glance on the Core Chain's Underlying Architecture
---

# Architecture of Core Chain

---

Core Chain, a Bitcoin-aligned EVM blockchain, represents a critical innovation for Bitcoin's integration into the decentralized finance (DeFi) space. This document outlines the architectural components of Core Chain, which is designed to function as a highly scalable smart contract platform that enhances Bitcoin’s utility without compromising its foundational principles.

The Core Chain ecosystem is constructed upon a multifaceted and innovative blockchain architecture that ensures the network's security, scalability, and decentralization. At the forefront is the CORE Consensus Engine which integrates the Satoshi Plus consensus mechanism, a hybrid system that utilizes the combined strength of Bitcoin miners and Core validators.

![component-diagram](../../../static/img/staoshi-plus/component-diagram.jpg)

## Core Consensus Engine

The Core Consensus Engine is the heart of the Core Chain, where consensus is achieved through a unique combination of Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) and Non-Custodial Bitcoin Staking. This engine coordinates the intricate processes involving validators, delegators, stakers, relayers, and other network participants to maintain the blockchain's integrity and performance.

### Satoshi Plus Consensus Mechanism

Core Chain introduces a novel consensus mechanism known as Satoshi Plus, a hybrid model that blends Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Non-Custodial Bitcoin Staking. This model is designed to leverage the existing Bitcoin mining infrastructure to secure a smart contract platform, thereby providing a symbiotic relationship between the two chains.

### Delegated Proof of Work (DPoW)

- Bitcoin miners can participate in the Satoshi Plus mechanism's DPoW part by appending additional metadata in the `op_return` field of Bitcoin blocks. This metadata includes the address of the Core Validator to whom they wish to delegate their hashing power, and the address for receiving CORE token rewards.
- This mechanism allows miners to earn supplemental rewards in CORE tokens over and above their usual Bitcoin mining rewards, thus incentivizing their participation in the Core Chain ecosystem.

### Delegated Proof of Stake (DPoS) and Non-Custodial Bitcoin Staking

- CORE token holders can stake their tokens with Core Validators, participating directly in the blockchain’s security and governance.
- BTC holders can stake their BTC on the Core network through non-custodial BTC staking and then delegate these to any Core Validators, participating directly in the blockchain’s security and governance.
- Stakers receive CORE token rewards, aligning their interests with the overall health and security of the network.

### Major Components and Roles

**1. Validators:** Validators have the critical role of producing blocks and validating transactions on the Core network. They are elected into the validator set based on a hybrid score that reflects both the Bitcoin hash power delegated to them and the CORE staked in their favor. The **top 23 validators** are selected each round, which currently lasts one day.

**2. Relayers:** Relayers are tasked with relaying Bitcoin block headers to the Core network, ensuring that the DPoW component of the consensus is maintained. In order to register itself, a relayer node should submit a refundable CORE deposit to participate.

**3. BTC Miners:** BTC Miners secure the Bitcoin network and can delegate their hash power to Core validators to influence the consensus on Core without compromising their work on Bitcoin. This act of delegation is facilitated through a non-destructive process.

**4. CORE Holders:** CORE holders can stake their tokens by delegating them to validators, participating in securing the network and influencing the validator election process.

**5. BTC Holders:** BTC holders can stake thier BTC onto the Core network and then delegate thier staked BTC to a Core validator of their choice and earn CORE tokens as rewards in exchange of their staked BTC. In this way, BTC holders can participate in securing the network and influencing the validator election process.

**6. Verifiers:** Verifiers are responsible for identifying and reporting malicious behaviors within the network. They play a vital role in the security mechanisms of the Core Chain ecosystem.

### Workflows and Processes

**1. Staking and Governance Module:** CORE and BTC holders can delegate or stake their tokens to validators, participating in network security and governance decisions, like updates to consensus parameters or protocol upgrades.

**2. Block Production and Round Robin:** Validators take turns producing blocks in a round-robin manner. Each round is divided into slots, with a length currently set to **3 seconds**.

**3. Reward Module:** Rewards are distributed at the end of each round based on validators' performance. The Reward Module calculates and distributes these rewards accordingly.

**4. Epochs and Validator Quorum Updates:** Epochs, set to **200 slots (or 10 minutes)**, are the cycle lengths for checking each validator's status. Jailed validators are excluded from the quorum to keep the Transaction Per Second (TPS) rate stable throughout the round.

**5. Security Measures (Slashing and Jailing):** Validators and relayers must act honestly to avoid penalties. Malicious behaviors reported by verifiers can lead to slashing of stakes or jailing, where validators are temporarily removed from the consensus process.

**6. Hybrid Score Calculation:** This is the protocol function used in validator election calculations, incorporating the delegated BTC hash power, BTC and CORE tokens to produce a score determining the validators' ranks.

## Core Chain Infrastructure

### Core-Native Bitcoin Wrapping (coreBTC)

- Core Chain facilitates the wrapping of Bitcoin through a decentralized mechanism. This involves locking Bitcoin on the Bitcoin blockchain and issuing an equivalent amount of coreBTC on Core Chain.
- Lockers and Porters play crucial roles in managing the lock and wrap processes, ensuring that coreBTC is backed 1:1 by Bitcoin, thus preserving trustlessness and security.

### Non-Custodial Bitcoin Staking

- This feature allows Bitcoin holders to stake their bitcoins in a non-custodial manner using absolute time locks. This means that users can earn yields on their bitcoins without relinquishing control over them.
- The staking mechanism integrates with the Satoshi Plus consensus, involving similar processes used by miners for securing the network.

### HTLC Atomic Swaps

- Core Chain supports trustless atomic swaps using Hashed TimeLock Contracts (HTLCs), facilitating the seamless exchange of tokens between Bitcoin and EVM-compatible chains.
- This feature enhances the interoperability and liquidity options available to both Bitcoin and Core Chain users, promoting a more integrated DeFi ecosystem.

## Future Enhancements

- **Governance Expansion:** Plans are underway to potentially include Bitcoin miners and stakers in the governance processes of Core Chain, further aligning incentives across both ecosystems.

- **Fee Market Development:** Core Chain may introduce local fee markets to make Bitcoin transactions faster and more economical, thus supporting Bitcoin's use as a viable means of payment.

- **HTLC Improvements:** Enhancements to the atomic swap process, including the introduction of liquidity pools and order book supplements, are considered to facilitate more efficient trading and liquidity management.

## Conclusion

Core Chain's architecture is designed to leverage Bitcoin’s robust security while expanding its functionality into smart contracts and DeFi. By integrating innovative consensus mechanisms and providing new utilities like non-custodial staking and decentralized wrapping, Core Chain positions itself as a pivotal platform in the evolution of Bitcoin DeFi.
