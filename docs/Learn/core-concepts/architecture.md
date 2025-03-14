---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Quick Glance at Core's Underlying Blockchain Architecture
---

# Architecture of the Core Blockchain
---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Non-Custodial Bitcoin Staking**.

Through Satoshi Plus, **Bitcoin miners/mining pools, CORE token stakers, and Bitcoin stakers** delegate resources to elect validators who secure the Core network. Validator selection is based on a hybrid score, considering:

* **Delegated hash power** from Bitcoin miners/mining pools  
* **Delegated/staked CORE tokens** from CORE token stakers  
* **Delegated/staked Bitcoin** from Bitcoin stakers

### **First Non-Custodial Bitcoin Staking & Bitcoin Risk-Free Rate**

Satoshi Plus's Non-Custodial Bitcoin Staking component is **the first live non-custodial Bitcoin staking mechanism**, allowing Bitcoin holders to earn native yield **without changing Bitcoin’s trust assumptions**. This effectively establishes the **Bitcoin Risk-Free Rate**, a groundbreaking milestone in Bitcoin’s history.

### **Harnessing Bitcoin's Security & Empowering Miners**

Currently, Satoshi Plus benefits from the security of **\~75% of all Bitcoin mining hash power** through delegation. By involving miners in validator elections, it leverages Bitcoin’s unmatched decentralization while offering **miners additional rewards**, addressing the long-term decline in Bitcoin block rewards.

<p align="center">
![component-diagram](../../../static/img/Core-Architecture.png)
</p>

## **Core Blockchain: Components, Roles, and Workflows**

#### **Key Roles**

* **Validators**: Produce blocks and validate transactions on the Core network. Anyone can become a validator by registering and locking a refundable CORE validator bond deposit.  
* **Bitcoin Miners**: Secure Bitcoin via PoW and can delegate hash power to Core validators by including delegation information in the coinbase transaction of a block without sacrificing Bitcoin security.  
* **CORE Stakers**: Delegate CORE tokens to validators to support network security.  
* **Bitcoin Stakers**: Delegate Bitcoin to validators on Core through Non-Custodial Bitcoin staking and earn yield without relinquishing custody of their assets.  
* **Relayers**: These are responsible for synchronizing the data between the Core and Bitcoin network. They transmit Bitcoin block and transaction data to Core. Anyone can become a relayer by registering and locking up a refundable CORE token deposit.  
* **Verifiers**: Report malicious behaviors on the Core network. Successful verification flags can trigger the slashing or jailing of validators and bad actors, and verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a verifier on the Core network.

#### **Consensus & Election**

* **Validator Election**: Every **round (1 day)**, the top **27 validators** by **hybrid score** (PoW from miners, DPoS from CORE stakers, and Bitcoin staking) are elected to become part of the active validator set and secure the network. Any validator in the current validator set that hasn’t been jailed or slashed is considered “live”. To ensure a more stable TPS, the live validators are updated every 200 blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual.  
* **Hybrid Score:** Every validator node seeking to become part of the active validator set is given a hybrid score, which is calculated based on three delegations: hashpower, CORE, and Bitcoin. The active validator set currently comprises the top 27 validators with the highest hybrid scores.  
* **Round:** A round lasts **one day**, during which the **top 27 validators** (ranked by hybrid score) are elected to produce blocks. At the end of the round, **rewards are calculated for that complete round and distributed**, and the next validator set is selected.  
* **Epoch (10 min or 200 slots)**: Periodic validator status checks ensure jailed nodes don’t participate in consensus. The validator status is checked once per epoch (rather than continuously) to keep TPS roughly constant in a given round.  
* **Slot (3 sec)**: Each 1-day round is divided into slots, and all validators in the validator set take turns producing one block per slot in a round-robin fashion.

#### **Rewards & Stability**

* **Reward Module:** Rewards are distributed at the end of each round based on validators' performance. The Reward Module calculates and distributes these rewards accordingly.  
* Rewards are distributed at the **end of each round**.  
* Live validators are updated **every 200 blocks** to maintain stable TPS.

## Delegated Proof of Work

To participate in Satoshi Plus, Bitcoin miners and/or mining pools simply write two additional pieces of information in the \`op\_return\` field as they produce a new Bitcoin block:

1. The address of the Core Validator to whom they want to delegate their hash power.  
2. The address to which the miner would like to receive the CORE token rewards.

In exchange for participating in Core’s consensus process by delegating their hash power to vote for validators, Bitcoin miners receive supplemental CORE token rewards in addition to their existing mining rewards from the Bitcoin network. In this way, Satoshi Plus bridges Bitcoin miner participation to the Core network, while the Bitcoin network gets better compensated (i.e. more highly incentivized) miners.

## Delegated Proof of Stake

Delegated Proof of Stake (DPoS) is the method of involving CORE token holders in the security of the protocol. To participate in consensus, any CORE token holder can stake their CORE tokens with validators on the Core network, thus voting for those validators in the same way that a miner might delegate its hash power to elect a validator.  
Similarly, just as miners receive rewards, CORE token stakers also earn CORE token rewards for contributing to the Satoshi Plus consensus. One significant advantage of DPoS compared to standard Proof of Stake models is that the former allows all token holders to participate equally. In contrast, the latter sometimes only allows large holders to stake.

## Non-Custodial Bitcoin Staking

Satoshi Plus’s methodology for integrating Bitcoin staking centers on absolute time locks, a Bitcoin-native cryptographic feature that locks up the outputs of a transaction for a pre-defined period of time, during which they can’t be spent.   
Rather than holders giving up custody of Bitcoin to external staking, stakers with Satoshi Plus merely place their Bitcoin in absolute time locks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Within that transaction, stakers must include a script containing the same information that Bitcoin miners include in their delegated blocks:

1. The address of the Core Validator the staker wants to delegate their Bitcoin to.  
2. The address to which the staker would like to receive their CORE token rewards.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core). The result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while expanding the scope of Bitcoin’s utility.

## Validator Election

The synthesis of DPoW, DPoS, and Non-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set. The validators who receive the highest combination of delegated hash power, staked CORE, and staked Bitcoin are elected to the validator set. The highest combination is determined by a hybrid score, which balances the three elements.

## Rewards

Satoshi Plus rewards are derived from:

1. CORE block rewards to be paid out over **81 years**  
2. Transaction fees paid over the Core network in CORE tokens. 

Following successful block production, validators earn these CORE token rewards. Since elected validators are entirely dependent upon their delegators, when they receive block rewards and transaction fees for producing blocks, they pay most of their rewards back to their delegating miners, CORE stakers, and Bitcoin stakers.  
Rewards paid out to delegators are allocated proportionally to their voting power. So, whatever weight their vote carries in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Slashing and Security

In traditional Proof of Stake systems, stakers risk being slashed if they fail to maintain a secure and reliable node, behave maliciously, or engage in activities that compromise the network’s integrity. In Satoshi Plus, this remains true for validators. Validators are held to a high standard because their duty is to adhere honestly to the ruleset of Satoshi Plus. Thus, if they fail to perform, they face the slashing of their accumulated rewards and/or locked up CORE token deposit, resulting in a severe economic penalty and zero rewards.  

While slashing keeps validators maximally accountable, the Satoshi Plus mechanism’s design is not meant to penalize participants for actions they don’t control. Therefore, miners, CORE stakers, and Bitcoin stakers have no risk of their delegated assets being slashed. Their incentive to choose the best validators lies in the rewards they can accrue from selecting diligently. Their risk for choosing the wrong validators is that they won’t receive the rewards they would otherwise receive. That economic penalty serves as an effective incentive while being fair to stakers.

## Conclusion

Core’s architecture is designed to make it the ideal platform for BTCfi. Satoshi Plus extends Bitcoin’s protection and reinforces its security model while introducing native yield for Bitcoin for the first time. This comprehensive design secures an end-to-end BTCfi ecosystem, unlocking the full potential of the Bitcoin asset.  
