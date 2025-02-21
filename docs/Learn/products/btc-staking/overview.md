---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---
# Non-Custodial Bitcoin Staking
Over [1.5 trillion dollars'](https://www.coingecko.com/en/coins/bitcoin) worth of Bitcoin has remained idle, yielding no native yield for over its lifetime. Since Bitcoin is a Proof-of-Work blockchain, its holders do not get the yield benefits native to Proof-of-Stake chains. Nevertheless, Core has delivered Proof-of-Stake benefits to the definitive Proof-of-Work blockchain. **Non-Custodial Bitcoin Staking** substantially enhances Core’s security model while unlocking Bitcoin-native yield for the first time. This innovative approach allows Bitcoin holders to participate in and earn from Satoshi Plus without giving up custody of their Bitcoin, thereby integrating Bitcoin's economic power with Core's advanced blockchain functionalities.

## **Overview**

Core’s Non-Custodial Bitcoin Staking allows Bitcoin holders to earn CORE tokens without giving up control of their private keys or transferring their Bitcoin to a third party, external smart contract, or multi-party computation (MPC) wallet. Non-Custodial Bitcoin Staking lets Bitcoin holders securely lock their Bitcoin natively on the Bitcoin network. At the same time, the stakers can actively contribute to the validator election on the Core network, strengthening its security and decentralization through the Satoshi Plus consensus mechanism. This approach ensures that Bitcoin remains under the user’s control while enabling them to support network security and earn rewards.

## **Rationale Behind Core’s Non-Custodial Bitcoin Staking**

Core blockchain offers Non-Custodial Bitcoin Staking as a strategic move to enhance its decentralization and security. By incorporating Bitcoin, which has a robust and well-established network, into its consensus mechanism, Core can leverage Bitcoin's decentralization and security features. Through the Non-Custodial Bitcoin Staking, Core leverages Bitcoin security and provides the first-ever non-custodial Bitcoin native yield generation opportunities to the Bitcoin community. Participating in Non-Custodial Bitcoin Staking offers an additional incentive: earning CORE tokens. This is a way for Bitcoin holders to retain complete custody of their Bitcoin assets without transferring them elsewhere and receive additional rewards in CORE tokens.

## **Advantages of Non-Custodial Bitcoin Staking**

1. **No risk to principal BTC:** Users can stake their bitcoins without involving any new trust assumptions, slashing, or protocol risks. Their principal BTC remains under their custody and on the Bitcoin blockchain, leveraging the high security and trust already provided by Bitcoin's robust infrastructure.  
2. **Self-custody and 100% secure:** Users only need to send themselves the staking transaction on the Bitcoin network, and the Bitcoin assets _DO NOT_ need to leave the Bitcoin network.  
3. **The Bitcoin Risk-Free Rate:** By introducing zero new trust assumptions, Core’s Bitcoin staking unlocks riskless yield for Bitcoin holders.  
4. **Bitcoin-Nativity:** Using Bitcoin’s native absolute time locks, Bitcoin stakers retain full custody of their Bitcoin.  
5. **Sustainable Yield:** This mechanism transforms Bitcoin into a yield-bearing asset, whereby stakers can earn a portion of Core’s fixed emissions and gas fees in CORE tokens for securing the Core network.   
6. **Network Integration:** Non-Custodial Bitcoin Staking integrates Bitcoin holders into Core’s consensus mechanism, contributing to the network’s security and decentralization.

## **How Non-Custodial Bitcoin Staking Works** {#how-non-custodial-bitcoin-staking-works}

Non-custodial Bitcoin Staking is one of the three fundamentals of Core’s Satoshi Plus consensus mechanism. Through this feature, Core incorporates Bitcoin holders into its ecosystem for security and to enable them to turn Bitcoin into a yield-generating asset.

Core's methodology for integrating Bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). CLTV timelock is a Bitcoin-native cryptographic feature that specifies a condition under which the transaction output cannot be spent until a specific point in time has passed. This time can be defined as a specific date and time or by block height. 

Imagine CLTV as a **time-locked vault**: when you "lock" your Bitcoin, it’s securely held and inaccessible until the designated time elapses, at which point the Bitcoin is returned to you. This feature enables Core’s staking mechanism to work without requiring users to relinquish control of their Bitcoin. Instead, Bitcoin holders can support Core’s network and earn rewards while retaining custody of their assets.

Rather than holders giving up custody of their Bitcoins to third parties or external smart contracts, Bitcoin stakers need to initiate a qualified CLTV transaction on the Bitcoin network, and the transaction can be designed to return the output after a fixed time period has elapsed. CLTV is a Bitcoin-native feature, and users can use it to lock any amount of their assets at/for any time. However, specific prerequisites should be met to ensure that transactions are valid and to be picked as a delegation for validators on the Core network. Within the CLTV transaction, stakers must include a script containing the following information:

1. The address of the Core Validator the staker wants to delegate their Bitcoin to.  
2. The address to which the staker would like their CORE token rewards to be sent.

The **Relayers** are a key component of the Core ecosystem that monitors the Bitcoin network for Bitcoin staking and unstaking transactions. Once the valid CLTV transactions containing information for Bitcoin delegation to validators on Core are sent over the Bitcoin network, the Relayers pick up these transactions and forward them to the Core consensus engine.

It is essential to be clear that Core’s non-custodial Bitcoin staking mechanism introduces no protocol or principal risks to the user’s delegated Bitcoin. Users transact on the Bitcoin network to delegate their assets to Core validators via Bitcoin’s CLTV; their assets remain on the Bitcoin network under their control. The assets are not moved off-chain or to any third-party or smart contracts. On the other side, relayers from the Core network are responsible for monitoring the Bitcoin network, picking up Bitcoin staking transactions, verifying them, and forwarding the valid transactions to the Core consensus mechanism, which is responsible for rewarding the stakers accordingly.  

Bitcoin stakers earn yield as staking rewards in the form of CORE tokens on their otherwise passive Bitcoin for however long they set the time lock (i.e., delegate their Bitcoin to validators on the Core network). Core’s Non-Custodial Bitcoin Staking results in billions of dollars in underutilized Bitcoin value becoming productive, remunerating stakers while expanding the scope of Bitcoin's utility.

### **Requirements for Bitcoin Staking**  

* For a Bitcoin staking transaction to be considered valid and picked up by the Relayers, users must ensure that the transaction is sent to their address and, using the Bitcoin native timelock feature, specify the lock-up amount intended to be delegated to the validator on the Core blockchain, as the transaction output.   
* The transaction should also contain an `op_return` output specifying   
  * The address of the Core Validator the staker wants to delegate their Bitcoin to.  
  * The address to which the staker would like their CORE token rewards to be sent.  
* Minimum requirements on staked BTC amount depends on the chosen method. If using the official website UI, users must stake at least 0.01 BTC (excluding transaction fees). There is no minimum requirement when staking via the script.
* Minimum staking duration depends on the method. The official website UI requires a 5-day minimum, while the script has no lockup requirement.

### **Transaction Workflow**

Core's implementation of Bitcoin staking is completely native and non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking. 

![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow.png)

Note that Non-Custodial BTC Staking operations are conducted on two separate blockchains—Bitcoin and Core. The following table identifies what happens in each blockchain for Bitcoin holders to earn staking rewards successfully through non-custodial Bitcoin staking. It's important to note that Core's Non-Custodial Bitcoin Staking does not introduce any additional risks or trust assumptions. Beyond monitoring and verifying Bitcoin staking transactions and accrual and claiming rewards, all operations—including asset locking, redemption, and asset management—remain securely on the Bitcoin network.

| Step\#  | Bitcoin Network | Core Network |
| :---- | :---- | :---- |
| Step\#1 | User craft a CLTV Timelock transaction with a timelock period of their choice and OP\_RETURN containing Core Validator Address the user wants to delegate their Bitcoin to. CORE reward address for receiving the staking rewards in the form of CORE. For details on how to compose such a staking transaction, please refer to the [transaction design](https://docs.coredao.org/docs/Learn/products/btc-staking/design). | Relayers monitor the Bitcoin network for valid CLTV transactions for non-custodial Bitcoin staking. |
| Step\#2 | The user sends the crafted transaction to themselves on the Bitcoin network. |  |
| Step\#3 | The Bitcoins are locked on the Bitcoin network for the specified time period. Once the transaction is confirmed on the Bitcoin network, which can take several hours due to block time, number of block confirmations required, and network congestion, the locked assets will appear in the staking records.  (*Optional*) After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit it to the Core blockchain. This step is optional if users compose the transaction in a standard format, as suggested by Core. Relayers from the Core infrastructure will detect the staking transaction and submit it to the Core blockchain for users. |  |
| Step\#4 |  | Relayers pickup the valid transactions and forward them to the Core Consensus Engine |
| Step\#5 |  | The rewards for BTC staking are accrued, and users have to claim them manually. |
| Step\#6 | Once the time lock expires, users **must** send out a Redeem script to retrieve their locked Bitcoin assets. Users can also choose to delegate directly again rather than redeem and then delegate. |  |

## **Step-by-Step Process**

1. **Locking Bitcoin:** Bitcoin holders initiate the staking process by locking their Bitcoin in an absolute time lock on the Bitcoin blockchain. Minimum staking duration depends on the method. The official website UI requires a 5-day minimum, while the script has no lockup requirement. 
2. **Including Delegation Information:** Within the locking transaction, stakers include:  
   1. **Core Validator Address:** The address of the Core Validator to which to delegate their Bitcoin.  
   2. **CORE Token Reward Address:** The address where they want their CORE token rewards sent.  
3. **Delegating Bitcoin:** This action delegates the staker’s Bitcoin to the chosen Core validator for a specified period, during which the Bitcoin cannot be spent.  
4. **Validator Election:** Core uses the delegated Bitcoin to determine the hybrid score for the validator election. Validators with higher delegated Bitcoin have a better chance of being elected to the validator set.  
5. **Earning Rewards:** Bitcoin stakers earn CORE token rewards for the lock period based on the validator's performance and the amount of Bitcoin staked.  
6. **Unlocking Bitcoin:** After the timelock expires, the staked Bitcoin remains in the staker’s address but stays locked. To regain access and be able to spend their BTC, the staker must redeem it explicitly after the timelock period ends.

### **Guidelines for Staking/Redeeming Bitcoin**

Please follow these guidelines to ensure smooth transactions when staking or redeeming your Bitcoin. Following these recommendations can ensure a more efficient staking and redemption process for your Bitcoin.

1. **Avoid Low Gas Fees:**  
   * We recommend avoiding gas fees that are lower than the current market rate.  
   * Using a gas fee that is too low, especially during periods of network congestion, may result in your Bitcoin transaction taking an extended amount of time (potentially days) to be confirmed.  
2. **Handling Low Gas Fee Situations:**  
   * If your Bitcoin transaction is delayed due to a low gas fee, consider using a transaction accelerator to speed up the process.  
   * Several third-party services are available, such as the free viaBTC transaction accelerator (accessible [here](https://www.viabtc.com/tools/txaccelerator)).  
   * Please research and choose a service that best fits your needs.

## **Conclusion**

Non-Custodial Bitcoin Staking transforms the Bitcoin asset from a passive Store of Value into an active, yield-bearing, and security-providing asset. Bitcoin staking allows Bitcoin holders to earn the Bitcoin Risk-Free Rate while contributing to the security of a smart contract platform designed to unlock more Bitcoin asset use cases.