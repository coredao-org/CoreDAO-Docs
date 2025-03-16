---
sidebar_label: Major Components
hide_table_of_contents: false
sidebar_position: 2
description: Learn about the major components of the Satoshi Plus Mechanism
---

# Satoshi Plus Consensus Mechanism 
---

The Satoshi Plus consensus mechanism represents a groundbreaking innovation in blockchain technology, specifically engineered for the Core platform to synergistically combine the robust security attributes of Bitcoin with the flexibility and scalability of smart contracts. This hybrid consensus model merges Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Non-custodial Bitcoin Staking, enables Bitcoin miners to participate directly in the governance and security of a decentralized smart contract platform without incurring additional costs. By leveraging the established Bitcoin mining infrastructure, Satoshi Plus not only fosters a dual-layered security protocol but also enhances the incentive structures across both ecosystems, ensuring a balanced alignment of interests among all stakeholders involved in Core blockchain. 

![satoshi-plus](../../../../static/img/staoshi-plus/Satoshi-Plus-Components.png)


## Major Components of the Satoshi Plus Mechanism

The Satoshi Plus consensus mechanism, designed for Core blockchain, ingeniously integrates features of both Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) and Non-Cstodial Bitcoin Staking. This hybrid system is tailored to harness the strengths of Bitcoin's existing mining infrastructure while simultaneously incorporating the flexibility of staking mechanisms prevalent in many modern blockchains. Below are the various components, their roles, and how they interoperate to maintain network security and efficiency. Below, is a diagram illustrating how the different major components of the Satoshiu plus consensus mechanism fit together to provide a secure and robust ecosystem. 

<p align="center">
![component-diagram](../../../../static/img/Core-Architecture.png)
</p>

### 1. **Delegated Proof of Work (DPoW)**
**Description:**
DPoW extends the traditional Proof of Work (PoW) system used by Bitcoin to include delegation features. This allows Bitcoin miners to participate in the consensus mechanism of Core blockchain without altering their existing mining operations significantly.

**How it works:**
- **Miner Participation:** Bitcoin miners contribute to the security of Core blockchain by allocating a part of their computational power to the network. This is facilitated through a unique implementation where miners include specific metadata (such as the address of a Core Validator and the destination for their CORE token rewards) in a Bitcoin block’s `op_return` field.
- **Workflow:** When a miner mines a new Bitcoin block, they add this additional information to indicate their support for a particular Core Validator. This delegated hash power helps secure Core blockchain, and in return, miners earn additional CORE tokens, which are supplementary to their regular Bitcoin mining rewards.
    * **Bitcoin Miners** - Bitcoin miners secure the Bitcoin network via PoW, and can delegate their PoW to a Core validator by including certain information in the coinbase transaction of a block as it’s in the process of being mined. This delegation is non-destructive, meaning that they’re re-purposing their existing work, not choosing between securing Bitcoin and securing Core.
    
    * **Relayers** - Relayers transmit Bitcoin blocks and transaction data to the Core network. Anyone can become a relayer by registering and locking up a refundable CORE token deposit.


### 2. **Delegated Proof of Stake (DPoS)**
**Description:**
DPoS allows Bitcoin and CORE token holders to engage in the network's governance by staking their tokens with Validators. This model promotes a more democratic and scalable consensus process compared to traditional PoW.

**How it works:**
- **Staking and Voting:** Token holders stake their CORE tokens with Validators, effectively voting for them to participate in the consensus process. The more tokens staked with a Validator, the greater their influence in validating transactions and creating new blocks.
- **Workflow:** Stakers delegate their tokens to Validators through a secure staking process on the Core platform. In exchange, they receive staking rewards in the form of CORE tokens. The staked tokens contribute to the network's overall security and decision-making processes.
    * **Bitcoin Stakers** - The third leg of Satoshi Plus consensus is non-custodial Bitcoin staking, which allows any bitcoin holder to earn yield by staking their bitcoin tokens without giving up custody.
    * **CORE Stakers** - All holders of Core blockchain’s native CORE tokens are able to underwrite the network’s security by delegating their token holdings to a validator.


### 3. **Non-Custodial Bitcoin Staking**
**Description:**
The third most important component of the Satoshi Plush consensus mechanism is the **Non-custodial Bitcoin Staking**. This features allows Bitcoin holders to engage in the network's governance by staking their Bitcoin natively on Bitcoin and then delegating them to their desired validators on the Core network. This model promotes a more democratic and scalable consensus process compared to traditional PoW.

**How it works:**
- **Staking and Voting:** Bitcoin holders stake their assets on Bitcoin network and also delegate them to their desired Validators on the Core blockchain, effectively voting for them to participate in the consensus process. The more Bitcoin staked with a Validator, the greater their influence in validating transactions and creating new blocks.
- **Workflow:** Stakers delegate their Bitcoin to Validators through a secure staking process on the Core platform. In exchange, they receive staking rewards in the form of CORE tokens. The staked tokens contribute to the network's overall security and decision-making processes.


### 4. **Validators**
**Description:**
Validators are central to the functioning of the Satoshi Plus mechanism. They perform critical network functions including block production, transaction validation, and consensus achievement. Anyone can become a Core validator by registering with the network and locking up a refundable CORE token deposit.

**How it works:**
- **Block Production:** Validators are responsible for creating new blocks in the Core blockchain. They aggregate transactions into blocks, execute them, and then append these blocks to the blockchain.
- **Workflow:** Validators are chosen to produce blocks based on their total delegated stake (from both DPoW and DPoS). The selection process considers the amount of hash power and token stake delegated to them, ensuring that those with higher support from the community have a higher chance of being selected to create blocks.
    * **Validator Election** - The validator set is determined through election, with validators chosen based on their hybrid score for each round. Any validator in the current validator set which hasn’t been jailed or slashed is considered “_live_”. To ensure a more stable TPS, the live validators are updated every **200** blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual. Core uses its Validator Election mechanism to rank the top **27** validators based on hybrid scores, creating the validator set for a consensus period of **200** slots, known as an epoch. Each slot presents an opportunity for a block to be created and lasts **3** seconds. As such, each epoch lasts **600** seconds, or **10** minutes, and gives a validator up to **10** chances to create a block once accepted for an epoch.

    * **Hybrid Score** - Every validator node seeking to become part of the validator set is given a hybrid score, which is calculated based on three factors: the DPoW from Bitcoin miners, the DPoS from CORE holders, and bitcoin holders delegating bitcoin to their preferred validators. The validator set is made up of the **27** validators with the highest hybrid scores.
    
    * **Verifiers** - Verifiers are responsible for reporting malicious behaviors on the network. Successful verification flags may result in slashing a malicious validator’s rewards or stake, or by jailing them outright, and verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a verifier on the Core network.

    * **Round** - A round is the period of time during which the Core network updates the validator set and distributes rewards. At present, a round is one day. Every round (i.e. every day), all validators are given a hybrid score, and the **27** validators with the highest hybrid scores are elected to the validator set. The validator set then becomes responsible for producing blocks on the Core network for the entirety of that round. When the last block of each round has been produced, the accumulated rewards for the full round are calculated and distributed, and the validator set for the next round is also determined.

    * **Slot** - Each **1-day** round is divided into slots, and all validators in the validator set take turns producing one block per slot, in a round robin manner. Currently, the slot length is set to three seconds. In each slot, an honest validator either produces a block or fails to do so (if there are network issues, eclipse attacks, etc).

    * **Epoch** - An epoch is the span of time during which the system checks each validator’s status so as to exclude jailed validators from participating in consensus activities. Currently, an epoch is set to **200** slots, which is **600** seconds or **10** minutes. Validator status is checked once per epoch (rather than continuously) in order to keep TPS roughly constant in a given round.


### 5. **Incentive Alignment**
**Description:**
A critical aspect of Satoshi Plus is the alignment of incentives across miners, stakers, and Validators. This ensures all parties are motivated to act in the best interests of the network.

**How it works:**
- **Rewards Distribution:** Both miners and stakers receive rewards in CORE tokens, aligning their interests with the network's health. This dual-reward system encourages ongoing participation and support for the network.
- **Workflow:** Rewards are calculated based on several factors including the amount of computational power or tokens contributed, and are distributed automatically by the Core blockchain protocol. This incentivizes continuous and honest participation in the network.

### 6. **Network Security and Symbiosis**
**Description:**
Satoshi Plus enhances the security of both the Bitcoin and Core networks by creating a symbiotic relationship where security enhancements in one benefit the other.

**How it works:**
- **Shared Security Model:** By allowing Bitcoin miners to participate in Core's security mechanisms, the system leverages Bitcoin's immense hashing power, enhancing the security of Core blockchain without requiring significant additional resources.
- **Workflow:** As miners and stakers contribute to Core blockchain’s security, both networks benefit. Miners use their existing setups to support Core blockchain, and stakers provide additional security layers through token delegation, creating a robust and resilient network.


## Conclusion
In summary, the Satoshi Plus consensus mechanism cleverly integrates these components into a cohesive system that benefits from the security and decentralization of Bitcoin's mining process and the agility and governance capabilities of modern staking models, fostering a secure, efficient, and scalable blockchain environment.
