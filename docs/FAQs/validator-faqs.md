---
sidebar_label: Core Validator FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Core Validator FAQs
---
### 1. What is a Validator in the Core ecosystem?

In the Core ecosystem, "validator" refers to nodes or participants in the blockchain network that are responsible for verifying, validating, and adding new transactions to the blockchain. Validators play a critical role in the maintenance and security of the network.

### 2. How to Become a Validator?

- 1. To register as a validator on Core you must be running a full node in validator mode. Please read the guides on [validator nodes requirements](../Node/config/validator-node-config) and [setting up validator nodes](../Node/validator/setting-up-validator) for information on how to set this up.
  2. Once that’s finished, the easiest way to register a new validator is using one of our staking websites:
        1. [Mainnet stake website](https://stake.coredao.org)
        2. [Testnet stake website](https://stake.test.btcs.network)
  3. Connect your wallet by selecting **Connect Wallet** in the top right.
  4. Once connected, the **register** button should appear on the top right. Selecting **register** opens the following input form:

![register-validator](../../static/img/validator/register/validator-register-1.avif)

Provide information for each of the form's fields:

- **Consensus address**: the validator address you set when you initialized your validator full node.
- **Fee address**: the address used to collect commission fees.
- **Commission**: revenue is split between the validator and its delegators, with the commission determining what percentage of delegator revenue is taken by the validator as compensation.
- **Total deposit**: the refundable CORE deposit locked up while performing validator services. On testnet, the minimum amount is **10,000 tCORE**. Whereas, on the mainnet the minimum amount is **10,000 CORE**.
    1. Once you've entered the required information, select **register** to register as a validator.
    2. A quick way to check that you've successfully registered your full node as a validator is to open the log file and search for the error message "**unauthorized validato**r". This error occurs when this node is registered as a validator but not yet elected to the validator set.

![validator-logs](../../static/img/validator/register/validator-register-2.avif)

### 3. What are the Hardware/Software Requirements for running a validator node on Core?

Validators are crucial for securing the network by producing blocks and validating transactions within the Core blockchain’s Satoshi Plus consensus framework.

**Software Requirements:** Currently, a Core Full Node can only run on Mac OS X and Linux.

**Testnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 4 CPU cores |
| RAM | 8 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 10Mbps |

#### **Mainnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 8 CPU cores |
| RAM | 32 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 10Mbps |

For more details, refer to [Full Node Confgiurations Guide](../Node/config/full-node.md)

### 4. What is the minimum amount of CORE tokens required to stake for becoming a validator?

On the Core network, validators are required to stake a certain minimum amount of CORE tokens that gets locked up for the duration a validator node provides its services. On testnet, the minimum amount is **10,000 tCORE**. Whereas, on the mainnet the minimum amount is **10,000 CORE**.

### 5. How are validators rewarded in the Core ecosystem?

Validators earn rewards for their role in processing transactions, creating new blocks, and maintaining the blockchain's integrity. These rewards are critical for compensating Validators for their efforts and operational costs. TCore validators run in a round robin manner and each active validator receives almost the same amount of rewards every round. There are two categories of validator rewards:

1\. **Base rewards**; i.e. newly minted CORE tokens;

2\. **Fees collected from transactions in each block**;

Both Base rewards and Transaction fees are calculated and distributed when the last block of a round is mined. Currently, **90%** of the rewards go to the validators and **10%** of the rewards go to the System Reward Contract. Of the 90% paid to validators, some percentage is taken as a commission by the validator before they pay out their delegates. The portion validators keep for themselves (commission fees) will be distributed directly to their fee addresses at the end of each round. Validators are required to share rewards with the delegators who staked BTC, CORE or delegated hash power to them. Each validator has an equal probability of producing blocks, so in the long run, all stable validators should get a similar portion of the reward.

### 6. When are rewards paid out?

Cycle time for Core to distribute rewards currently set to **1 day**. Each day, **27** validators with the highest hybrid scores are elected to the validator set, thereby becoming responsible for producing blocks on the Core network for the entirety of the round. At the last block of each round, the accumulated rewards for the round are calculated and distributed.

### 7. What are the risks/penalties involved in being a validator?

Here's a condensed overview of the potential risks and penalties for validators in the Core ecosystem:

1. **Slashing Risks:** Validators face slashing for actions like double signing or failing to perform their duties, resulting in a loss of a portion of their staked CORE tokens.
2. **Stake Lock-up and Liquidity Risk:** Validators must lock up CORE tokens as collateral, which cannot be accessed during lock-up periods, posing a liquidity risk during market volatility.
3. **Jailing of Validators:** Underperforming or protocol-violating validators can be temporarily removed from the validator set, preventing them from participating in consensus and earning rewards.
4. **Loss of Delegation:** If validators perform poorly or are frequently penalized, delegators may withdraw their support, significantly reducing the validator's earning potential.
5. **Operational and Security Risks:** Validators need to maintain secure, efficient operations around the clock. Operational failures or security breaches can lead to financial and reputational damage.

### 8. How does the validator election process work in the Core ecosystem?

The Validator election process in Satoshi Plus on the Core network involves several key steps, integrating both Proof of Work (PoW) and Proof of Stake (PoS) elements:

1. **Stake Delegation**: Holders of CORE and BTC tokens delegate their tokens to validator candidates, influencing the election with their staked tokens.
2. **Hash Power Delegation**: Bitcoin miners contribute to validator selection by allocating a portion of their hash power, specified in the Bitcoin blocks they mine.
3. **Validator Selection and Scoring**: Validators are chosen based on a hybrid score combining delegated hash power from Bitcoin and staked tokens (CORE and BTC). The hybrid for each validator is calculated based on:

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Where,

- rHp and tHp represent the hash power delegated to a validator and the total hash power, respectively.
- rSp and tSp represent the CORE tokens staked for a validator and total staked CORE tokens, respectively.
- rBp and tBp are the BTC tokens delegated to a validator and total staked BTC tokens, respectively.
- m and n are dynamic factors adjusting the weights of hash power and the voting power of BTC versus CORE tokens.

4. **Validator Set Formation**: The top **27** validators, based on hybrid scores, are selected for the next round.

### 9. What is slashing, and what are the different slashing fees charged on Core blockchain?

"Slashing" is a penalty applied to validators in a blockchain network for misconduct or failures in their duties. In the Core network, slashing can affect both potential rewards and deposited stakes.

- **Rewards Slashing**: If a validator fails to mine **50** consecutive blocks during their turn, all CORE token rewards accrued up to that point are lost. The impact is more significant if the failure occurs later in the round, as more rewards would have been accumulated.
- **Deposit Slashing and Jailing**: Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **jailing of three days**, during which they cannot be elected to the validator set.
- **Permanent Ban for Double Signing**: Double signing, i.e., signing two different blocks at the same height, leads to severe consequences including slashing of all rewards, the entire validator deposit, and a permanent ban from the network, i.e., getting jailed forever.


### 10. When do validators get jailed? What is the duration?

There are two scenarios where validators can get jailed.

1. Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **jailing of three days**, during which they cannot be elected to the validator set.
2. Double signing can lead to slashing of all rewards, the entire validator deposit, and a permanent ban from the network, i.e., getting jailed forever.

### 11. How frequently do Validators need to be online?

Validators are generally expected to be online and actively participating almost continuously.

