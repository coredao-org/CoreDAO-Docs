---
sidebar_label: Delegated Proof of Work
hide_table_of_contents: false
sidebar_position: 2
description: Leveraging DPoW in Satoshi Plus
---

# Delegated Proof of Work (DPoW)
---

## Overview

Delegated Proof of Work (DPoW) is a crucial element of Core's Satoshi Plus consensus mechanism. This system leverages the robust security of Bitcoin mining, integrating it into the Core blockchain to enhance security and incentivize participation without additional costs. Here’s a detailed look at how DPoW operates and its significance.

DPoW enables Bitcoin miners to earn a second block reward on top of their Bitcoin rewards while securing the Core blockchain, creating a symbiotic relationship that benefits both networks. 

![dpow-core-architechture](../../../../static/img/staoshi-plus/dpow.jpg)

## Step by Step Process

1. **Mining Bitcoin Blocks:** Bitcoin miners continue their primary role of mining blocks on the Bitcoin network using Proof of Work (PoW).

2. **Including Delegation Information:** Miners add two additional pieces of information in the op_return field of the coinbase transaction:
  * **Core Validator Address:** The address of the Core Validator to delegate hash power to.
  * **CORE Token Reward Address:** The address where the miner wants their CORE token rewards sent.

3. **Delegating Hash Power:** This action delegates the miner's hash power to the chosen Core Validator, repurposing existing work without incurring additional costs.

4. **Validator Election:** Validators with higher delegated hash power have a greater chance of being elected to the validator set.

5. **Validator Rewards:** Validators earn rewards for processing blocks, take a small commission, and pass rewards to their delegators, including any Bitcoin miners or mining pools who delegated hash power to them.

6. **Earning Rewards:** Miners or mining pools receive CORE token rewards in addition to their Bitcoin rewards, providing extra incentives.

## Benefits

* **Enhanced Security:** By integrating Bitcoin’s PoW, Core benefits from Bitcoin’s unmatched security infrastructure, making the Core network more resilient.

* **Increased Incentives:** Bitcoin miners gain an additional revenue stream through CORE token rewards, enhancing their overall profitability without additional energy costs.

* **Symbiotic Relationship:** This system promotes mutual benefits for both the Bitcoin and Core networks, fostering a cooperative environment that strengthens the blockchain ecosystem.

## Conclusion

Delegated Proof of Work extends the incentives of the Bitcoin network’s miners to align with Core’s Satoshi Plus consensus mechanism. Core receives Bitcoin miner participation in its security, and Bitcoin receives more highly compensated miners. The result is a miner set that is more heavily incentivized to secure both Bitcoin and Core. 
