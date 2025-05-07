---
sidebar_label: Delegated Proof of Work
hide_table_of_contents: false
sidebar_position: 2
description: Leveraging DPoW in Satoshi Plus
---

# Delegated Proof of Work (DPoW)
---

## Overview

Delegated Proof of Work (DPoW) is a cornerstone of Satoshi Plus consensus. This system leverages Bitcoin's established mining infrastructure, integrating it with the Core blockchain to strengthen security without requiring additional computational work.

DPoW creates a mutually beneficial relationship where Bitcoin miners can earn supplemental CORE rewards while maintaining their primary Bitcoin mining operations. By including validator selection metadata in newly mined Bitcoin blocks, miners extend their influence to the Core network without compromising their Bitcoin security role.

<p align="center">
![dpow-core-architechture](../../../../static/img/staoshi-plus/DPoW.png)
</p>

## How DPoW Works in Satoshi Plus

On the Bitcoin network, miners generate hash power to mine blocks,secure the network, and earn Bitcoin rewards. To stabilize rewards over time, miners often contribute to mining pools, which aggregate hash power to increase chances of mining blocks. DPoW integrates Bitcoin mining into Core's security protocol through a delegation system.

1. **Mining Integration**: Bitcoin miners continue their standard mining activities while signaling support for the Core blockchain by including specific information in the Bitcoin blocks they mine, indicating their preferred Core validator.

2. **Metadata in Bitcoin Blocks**: In the mined Bitcoin block, miners add metadata in the `op_return` field containing the Core validator address and the address for receiving CORE token rewards, effectively delegating their mining influence to the Core network.

3. **Validator Support**: By including this information, miners delegate their computational power to validators on Core. Proportions of delegated hash power are critical to Core's validator election, directly influencing which validators are elected to produce blocks and secure the network.

4. **Relayers**: Relayers monitor the Bitcoin network and transmit block and transaction data to Core. An on-chain embedded BTC light client processes this data and forwards delegation information to the "Delegation Hub," which manages all delegations within Core. During each one-day round, Core calculates DPoW for validators based on miner delegations from one week prior.

5. **Reward Mechanism**: Miners receive CORE tokens in addition to their regular Bitcoin rewards, creating a dual-reward system that incentivizes participation without diverting resources from Bitcoin mining.


## Step by Step Process

1. **Mining Bitcoin Blocks:** Bitcoin miners continue their primary role of mining blocks on the Bitcoin network using Proof of Work (PoW).

2. **Including Delegation Information:** Miners add two additional pieces of information in the `op_return` field of the coinbase transaction:
  * **Core Validator Address:** The address of the Core Validator to delegate hash power to.
  * **CORE Token Reward Address:** The address where the miner wants their CORE token rewards sent.

3. **Delegating Hash Power:** This action delegates the miner's hash power to the chosen Core validator, repurposing existing work without incurring additional costs.

4. **Validator Election:** Validators with higher delegated hash power have a greater chance of being elected to the validator set.

5. **Validator Rewards:** Validators earn rewards for processing blocks, take a small commission, and pass rewards to their delegators, including any Bitcoin miners or mining pools who delegated hash power to them.

6. **Earning Rewards:** Miners or mining pools receive CORE token rewards in addition to their Bitcoin rewards, providing extra incentives.


## Importance of DPoW in Satoshi Plus

* **Enhanced Security:** By integrating Bitcoin’s PoW, Core benefits from Bitcoin’s unmatched security infrastructure, making the Core network more resilient.

* **Miner Support:** Bitcoin miners gain an additional revenue stream through CORE token rewards, enhancing their overall profitability without additional energy costs.

* **Symbiotic Relationship:** This system promotes mutual benefits for both the Bitcoin and Core networks, fostering a cooperative environment that strengthens the blockchain ecosystem.

#### **Conclusion**

DPoW is a critical component within Satoshi Plus consensus. It extends the incentives of Bitcoin miners to align with Core's consensus mechanism. Core receives Bitcoin miner participation in its security, and Bitcoin receives more highly compensated miners. The result is a miner set that is more heavily incentivized to secure both Bitcoin and Core.