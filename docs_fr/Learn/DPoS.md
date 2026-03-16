---
sidebar_label: Delegated Proof of Stake
hide_table_of_contents: false
sidebar_position: 2
description: Leveraging DPoS in Satoshi Plus
---

# Delegated Proof of Stake (DPoS)

---

## Overview

Delegated Proof of Stake (DPoS) is a pivotal component of the Satoshi Plus consensus mechanism employed by Core blockchain. This consensus model is designed to complement the robustness of Delegated Proof of Work (DPoW) with a flexible, democratic, and scalable staking system. DPoS not only enhances network security but also promotes community involvement in governance, making it an essential aspect of the blockchain’s operation.
DPoS allows holders of both CORE tokens and [Bitcoin](../../products/btc-staking/overview.md) to vote and participate in the election of the validator set by delegating their holdings to their preferred validators. Because there is only a very small minimum staking requirement of 1 CORE token, all CORE holders can contribute to the governance of the Core network. On the bitcoin-staking side, the present configuration requires a **minimum staking requirement of 0.01 BTC** (but this can be adjusted in the future through a governance vote). Holders of both CORE token and BTC can delegate their respective tokens to validators of their choice through the official [staking website](https://stake.coredao.org/). In this section, we cover in depth the working and importance of DPoS in the functioning of the Satoshi Plus.

## How DPoS Works in Satoshi Plus

DPoS operates by allowing CORE token holders to actively participate in the network's consensus by staking their tokens with Validators. This process involves several key steps:

- **Staking Tokens:** Core allows to kinds of token that can be staked, its native token CORE and the BTC. CORE token holders can stake their tokens on the Core platform by locking them in a smart contract associated with a Validator they choose to support. The staked tokens represent a vote of confidence in the Validator’s ability to maintain the integrity and security of the network. Similarly, BTC holders can stake their BTC onto the Core network through [non-custodial staking](../../products/btc-staking/overview.md) in a trustless and secure manner without having to give up custody of their assets. This is achieved using absolute time locks that ensure bitcoin remains in the holder's control while participating in staking. They can then delegate their staked BTC to any validator on the Core network and earn rewards in the form of CORE tokens in exchange of their delegation.

- **Validator Election:** Validators are elected based on the total stake (BTC and CORE) delegated to them by token holders. The more staked tokens a Validator has, the higher their chances of being selected to validate transactions and create new blocks. This method ensures that those with the most community trust and stake are responsible for the network's security.

- **Block Creation and Validation:** Once elected, Validators play a crucial role in processing transactions and creating new blocks. They ensure that all transactions within a block are valid according to the blockchain’s rules and then add these blocks to the blockchain.

- **Reward Distribution:** Validators and their delegators earn rewards in CORE tokens for their participation in securing the network. These rewards are distributed proportionally based on the amount of stake each delegator contributes, incentivizing both Validators and token holders to act in the network's best interest.

## Step by Step Process

1. **Staking CORE/BTC Tokens:** CORE token holders decide to participate in network security by staking their tokens. The minimum staking requirement is 1 CORE token or 0.01 BTC.

2. **Delegating to Validators:** Token holders delegate their staked CORE/BTC tokens to a chosen validator, assisting their hybrid score in the validator election process.

3. **Validator Election:** Validators with the highest hybrid score, which includes delegated CORE, are elected to the validator set for a given round.

4. **Producing Blocks:** Elected validators are responsible for producing blocks and validating transactions during their term, thereby earning rewards.

5. **Earning Rewards:** CORE and BTC stakers earn rewards from the validators to whom they delegated.

## Importance of DPoS in Satoshi Plus

- **Enhanced Network Security and Efficiency:** DPoS leverages the stake of numerous participants to secure the network, which reduces the risk of centralization inherent in traditional PoW systems. The delegation system also allows for more efficient processing of transactions and block creation, as only a few elected Validators need to reach consensus, speeding up the transaction validation process.

- **Decentralization and Democratization of Network Governance:** By enabling any token holder to participate in the consensus process, DPoS democratizes network governance. This inclusivity fosters a more resilient and decentralized network structure, as decisions are made by a broader base of stakeholders, reflecting a diverse range of community interests.

- **Scalability:** DPoS systems are typically more scalable than traditional PoW systems because they require less computational power and can process transactions faster. This is crucial for Core blockchain as it aims to support a growing ecosystem of decentralized applications without sacrificing performance.

- **Community Incentivization:** DPoS encourages community participation by rewarding stakeholders with CORE tokens. This not only aligns the incentives of Validators and token holders but also ensures that those who invest resources and trust into the network are compensated for their contributions.

- **Liquid Staked CORE:** CORE tokens can also be liquid staked, enabling stakers to use stCORE tokens in Core’s DeFi ecosystem.

- **Efficient Block Production:** The delegation process allows for an efficient and scalable model, as proven and capable validators are elected to secure the network.

#### **Conclusion**

In the Satoshi Plus consensus mechanism, DPoS plays a critical role by providing a balance to the energy-intensive DPoW component. Delegated Proof of Stake is a powerful mechanism that enhances the Core blockchain's security and efficiency. By allowing CORE and BTC token holders to stake and delegate their tokens, DPoS promotes broad participation and robust network security.
