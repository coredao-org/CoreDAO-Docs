---
sidebar_label: How It Works
hide_table_of_contents: false
sidebar_position: 2
---

# How Non-Custodial Bitcoin Staking Works {#how-non-custodial-bitcoin-staking-works}

Non-Custodial Bitcoin Staking is one of the three fundamental components of Core’s Satoshi Plus consensus. This feature integrates Bitcoin holders into Core’s ecosystem, enhancing network security while enabling Bitcoin to become a yield-generating asset.

Bitcoin stakers earn yield as staking rewards in the form of CORE tokens on their otherwise passive Bitcoin for however long they set the time lock (i.e., delegate their Bitcoin to validators on the Core network). Core’s Non-Custodial Bitcoin Staking results in billions of dollars in underutilized Bitcoin value becoming productive, remunerating stakers while expanding the scope of Bitcoin's utility.

Unlike traditional staking mechanisms that require users to transfer custody of their assets, Core's approach leverages [CheckLockTimeVerify (CLTV)](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) timelock, a Bitcoin-native cryptographic function. This ensures Bitcoin remains securely in users’ wallets while still being staked on the Core network.

## How CLTV Timelock Works

CLTV timelock is a Bitcoin-native cryptographic feature that specifies a condition under which the transaction output cannot be spent until a specific point in time has passed. This time can be defined as a specific date and time or by block height. CLTV acts as a time-locked vault, restricting access to staked Bitcoin until a predetermined time elapses. When a user initiates a CLTV transaction:

- The BTC remains locked for a specific duration.
- Once the timelock expires, the BTC is automatically returned to the user.
- Users earn staking rewards in CORE tokens for the locked duration.

Unlike custodial staking models that involve third parties, Core’s staking model allows users to retain full control over their Bitcoin while participating in the security of the network and earn rewards for it.

### How Bitcoin Staking Works on Core

#### 1. Creating a CLTV Staking Transaction

To participate, Bitcoin holders must initiate a **qualified CLTV transaction** on the Bitcoin network. To ensure that transactions are valid and to be picked as a delegation for validators on the Core network, stakers must include a script containing the following information:

- **Validator Delegation Address:** The Core validator the staker is delegating their Bitcoin to.
- **Reward Address:** The address where the staker wants to receive CORE rewards.

#### 2. Role of Core Relayers

**Relayers** in the Core ecosystem continuously **monitor the Bitcoin network** for valid Bitcoin staking transactions for Core validators. When a CLTV transaction is detected, the relayers:

- Verify the transaction details.
- Forward the information to Core’s **Consensus Engine** for processing.
- Core’s **Consensus Engine** is then responsible for rewarding the stakers accordingly.

### Security & Risk Considerations

- **No Custodial Risk:** Core’s mechanism does **not** move BTC off-chain or transfer it to third-party smart contracts.
- **Bitcoin Remains in the User’s Wallet:** Users **always** retain full control over their staked BTC.
- **No Protocol-Level Risk:** Staking only involves locking BTC via a Bitcoin-native function, ensuring safety and decentralization.

### Requirements for Bitcoin Staking

#### General Requirements

To ensure a BTC staking transaction is **valid and detected** by Core’s relayers, users must:

1. **Use CLTV Timelock:** The BTC must be locked using a **Bitcoin-native timelock transaction** specifying the delegation details,as the transaction output.
2. **Include an `OP_RETURN` Output:** The transaction must contain:
 - **Core Validator Address** (to delegate their staked Bitcoin).
 - **CORE Reward Address** (to receive staking rewards).

#### Minimum Staking Requirements

| Method             | Minimum BTC Staked       | Minimum Lockup Duration |
| ------------------ | ------------------------ | ----------------------- |
| **Official UI**    | 0.01 BTC | 5 Days                  |
| **Staking Script** | No Minimum               | No Lockup Requirement   |

### Transaction Workflow

Core's implementation of Bitcoin staking is completely native and non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking.

<p align="center">
![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

Core's Non-Custodial BTC Staking operations are conducted on two separate blockchains—Bitcoin and Core. The following table identifies what happens in each blockchain for Bitcoin holders to earn staking rewards successfully through non-custodial Bitcoin staking. It's important to note that Core's Non-Custodial Bitcoin Staking does not introduce any additional risks or trust assumptions. Beyond monitoring and verifying Bitcoin staking transactions and accrual and claiming rewards, all operations—including asset locking, redemption, and asset management—remain securely on the Bitcoin network.

| **Step**                                       | **Bitcoin Network**                                                                                                                                                                                                                                | **Core Network**                                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **1. Initiate Staking**        | User crafts a **CLTV timelock** transaction, locking BTC for a chosen duration, and specifying delegation details in `OP_RETURN`.                                                                                                  | Relayers monitor Bitcoin transactions for valid staking activity.         |
| **2. Broadcast Transaction**   | User sends the **CLTV transaction** on the Bitcoin network.                                                                                                                                                                        | Relayers track and validate the transaction.                              |
| **3. Locking Period Begins**   | BTC is locked in the user's wallet on the Bitcoin network. Once confirmed (which can take hours due to block time, confirmations, and congestion), the locked assets appear in staking records. | Relayers register the locked BTC and update Core’s staking records.       |
| **4. Relayer Detection**       | Relayers detect the staking transaction on Bitcoin.                                                                                                                                                                                | They verify and forward it to Core’s Consensus Engine.                    |
| **5. Staking Rewards Accrual** | BTC remains locked, but rewards accumulate on Core.                                                                                                                                                                                | CORE token rewards accrue during staking; users must claim them manually. |
| **6. Unlocking Bitcoin**       | After the timelock expires, the user **must** send a Redeem script to regain access to their locked BTC.                                                                                                                           | Relayers update the staking records to reflect BTC unlocking.             |

**Important:** Users can also **redelegate** BTC directly without first redeeming it.\
_**(_Optional_)**_ After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit it to the Core blockchain. This step is optional if users compose the transaction in a standard format, as suggested by Core. Relayers from the Core infrastructure will detect the staking transaction and submit it to the Core blockchain for users.

#### Step-by-Step Staking Process

1. **Locking Bitcoin**
 - The user creates a **CLTV timelock transaction** on the Bitcoin network.
 - Minimum lock duration depends on the staking method. The official website UI requires a 5-day minimum, while the script has no lockup requirement.

2. **Delegating to a Core Validator**
 - The staking transaction must include:
  - **Core Validator Address** (for delegation of BTC).
  - **CORE Reward Address** (for receiving CORE rewards).

3. **Bitcoin Lock Period Begins**
 - The BTC is locked for the selected duration.
 - It remains **securely on the Bitcoin network** without moving off-chain.

4. **Validator Selection & Rewards Accrual**
 - Core uses the staked BTC to calculate the validator’s hybrid score.
 - Higher delegated BTC increases validator election chances.
 - Stakers earn **CORE token rewards** based on delegation duration.

5. **Redeeming Bitcoin After Staking Ends**
 - Once the timelock expires, BTC **remains in the user’s address but stays locked**.
 - The user must send a **Redeem script** explicitly after the timelock period ends to regain access and be able to spend their BTC.
 - Alternatively, users can **redelegate directly** without redemption.

### Timeline for Non-Custodial Bitcoin Staking

Here’s an overview of the timeline for placing a Bitcoin staking order and when rewards take effect:

1. **Staking Order Placement:** Once a staking order is placed, it typically takes 6 Bitcoin blocks (roughly 60 minutes) for the Bitcoin transaction to be transferred to the Core blockchain.
2. **Staking Reward Activation:** After the Bitcoin transaction transfer is completed, it takes one round (~24 hours, based on UTC+0 time) for the staking reward to become effective.
3. **Staking Data Accessibility:** After the staking becomes effective, staking data will be available via the Staking API.

#### **Example: Bitcoin Staking Transaction with 2-day Duration**

- Assume a staking order is placed at 6:00 AM UTC+0 today.
- The transaction will go through 6 Bitcoin blocks on the same day.
- The staking will become effective at 00:00 AM UTC+0 on the second day.
- After the staking goes effective, the staking data is then accessible.

#### **Example: Bitcoin Staking Transaction with 3-day Duration**

- Assume a staking order is placed at 11:30 PM UTC+0.
- The transaction will go through 6 Bitcoin blocks on the next day.
- The staking will become effective at 12:00 AM UTC+0 on the third day.
- After the staking goes effective, the staking data is then accessible.

### Guidelines for Staking/Redeeming Bitcoin

Please follow these guidelines to ensure smooth transactions when staking or redeeming your Bitcoin. Following these recommendations can ensure a more efficient staking and redemption process for your Bitcoin.

1. **Avoid Low Gas Fees**
 - Transactions with **low gas fees** may experience long confirmation times.
 - Use a **competitive network fee** to ensure timely processing.
 - Using a gas fee that is too low, especially during periods of network congestion, may result in your Bitcoin transaction taking an extended amount of time (potentially days) to be confirmed.

2. **Handling Stuck Transactions**

- If your Bitcoin transaction is delayed due to a low gas fee, consider using a **Bitcoin transaction accelerator**.
- Free acceleration services, such as [viaBTC](https://www.viabtc.com/tools/txaccelerator), can help speed up confirmations.
- It is recommended to research and choose a service that best fits your needs.

## Conclusion

Core’s **Non-Custodial Bitcoin Staking** transforms Bitcoin from a passive store of value into a productive asset—**securely and without custodial risk**. By leveraging Bitcoin-native staking, BTC holders can contribute to Core’s security, earn CORE rewards, and maximize asset utility while keeping full control over their Bitcoin.

For a detailed guide on staking transaction design, refer [here](design.md).