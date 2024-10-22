---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking
---
Over [1 trillion dollars'](https://www.coingecko.com/en/coins/bitcoin) worth of Bitcoin has remained idle, yielding no native yield for over its lifetime. Since Bitcoin is a Proof of Work blockchain, its holders do not get the yield benefits native to Proof of Stake chains. Nevertheless, Core has delivered Proof of Stake benefits to the definitive Proof of Work blockchain. Non-Custodial Bitcoin Staking substantially adds to Core’s security model while also unlocking Bitcoin-native yield for the first time in history. This innovative approach allows Bitcoin holders to participate in and earn from Satoshi Plus without giving up custody of their Bitcoin, thereby integrating Bitcoin's economic power with Core's advanced blockchain functionalities.

## Overview

Non-Custodial Bitcoin Staking enables Bitcoin holders to earn CORE tokens by simply locking up their Bitcoin on the Bitcoin blockchain, thereby never giving up custody of their private keys to any third party, external smart contract, or MPC wallet. In locking up their Bitcoin on the Bitcoin blockchain, Bitcoin stakers contribute to the election of Core validators, thereby enhancing and decentralizing the security of Satoshi Plus. 

## Empowering Bitcoin Holders and Strengthening Core
#### _The Dual Benefits of Non-Custodial Bitcoin Staking_

1. **Benefits for Bitcoin Holders from Non-Custodial Bitcoin Staking**
    - **Maintaining Assets on Bitcoin:** By Non-Custodial Bitcoin Staking, Bitcoin holders have the unique opportunity to keep their assets securely on the Bitcoin network. This is significant because it allows them to retain their investment in what is widely regarded as the most decentralized and secure blockchain, often referred to as digital gold. In essence, they can continue to hold their Bitcoin, enjoying the security and reputation it offers, without needing to transfer their assets elsewhere.
    - **Earning Core Tokens as Rewards:** Participating in Non-Custodial Bitcoin Staking offers an additional incentive: earning Core tokens. This is a way for Bitcoin holders to not only retain their Bitcoin assets but also to receive additional rewards in the form of Core tokens.
    - **Social Responsibility in Decentralization:** By staking their Bitcoin, holders contribute to the decentralization of the Core blockchain. This is a form of social responsibility, as their participation helps in maintaining a diverse and distributed network, which is fundamental to the ethos of blockchain technology.
2. **Core's Rationale Behind Offering Non-Custodial Bitcoin Staking**
    - **Enhancing Decentralization and Security:** Core blockchain is offering Non-Custodial Bitcoin Staking as a strategic move to enhance its decentralization and security. By incorporating Bitcoin, which has a robust and well-established network, into its consensus mechanism, Core can leverage the decentralization and security features of Bitcoin.


## Advantages of Non-Custodial Bitcoin Staking

1. **No New Trust Assumptions:** Users can stake their bitcoins without moving it off the Bitcoin blockchain, thereby maintaining the high security and trust that comes with Bitcoin's robust infrastructure.
2. **Self custody and 100% secure:** Users only need to send themselves the staking transaction on the Bitcoin network and the Bitcoin assets DO NOT need to leave the Bitcoin network at all.
3. **The Bitcoin Risk-Free Rate:** By introducing zero new trust assumptions, Core’s Bitcoin staking unlocks riskless yield for Bitcoin holders. 
4. **Bitcoin-Nativity:** By using Bitcoin’s native absolute time locks, Bitcoin stakers retain full custody of their Bitcoin.
5. **Yield Generation:** This mechanism transforms Bitcoin into a yield-bearing asset, providing stakers with CORE token rewards and enhancing the utility of their holdings.
6. **Network Integration:** Non-Custodial Bitcoin Staking integrates Bitcoin holders into Core’s consensus mechanism, contributing to the network’s security and decentralization.
7. **Core Emission:** The reward system helps align cross-chain incentives. The reward pool comes from a shared consensus reward system that integrates the contributions of both Bitcoin miners and CORE token stakers, thereby optimizing the reward distribution for all participants. Additionally, the rewards are sustainable over the long-term, and will be distributed over a period of **81** years.


## How Non-Custodial Bitcoin Staking Works

With the non-custodial bitcoin staking, Core incorporates bitcoin holders as the third part of Satoshi Plus consensus. Core's methodology for integrating bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). CLTV timelock are Bitcoin-native cryptographic feature that specify a condition under which the transaction output cannot be spent until a certain point in time has passed. This time can be defined in terms of a specific date and time or by block height. Rather than holders giving up custody of their bitcoins to external staking, stakers on Core merely need to place their bitcoins in CLTV timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Within that transaction, stakers must include a script containing the same information that Bitcoin miners include in their delegated blocks: 

1. The address of the Core Validator the staker wants to delegate their bitcoin to.
2. The address that the staker would like their CORE token rewards to be sent to.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards, for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core network). The end result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while also expanding the scope of Bitcoin's utility. 

### Guidelines for Staking/Redeeming Bitcoin

When staking or redeeming your Bitcoin, please follow these guidelines to ensure smooth transactions:
1. **Avoid Low Gas Fees:** 
    * We recommend avoiding gas fees lower than the current market rate. 
    * Using a gas fee that is too low, especially during periods of network congestion, may result in your Bitcoin transaction taking an extended amount of time (potentially days) to be confirmed.
2. **Handling Low Gas Fee Situations:** 
    * If your Bitcoin transaction is delayed due to a low gas fee, consider using a transaction accelerator to speed up the process. 
    * There are several third-party services available; for example, the free viaBTC transaction accelerator (which can be accessed [here](https://www.viabtc.com/tools/txaccelerator)). 
    * Please research and choose a service that best fits your needs.

By following these recommendations, you can ensure a more efficient staking and redemption process for your Bitcoin.

### Requirements for Eligibility

Core welcomes Bitcoin holders to stake their Bitcoin on the Bitcoin network. By voting for a Core validator during your Bitcoin staking transaction, you play a pivotal role in Core's decentralization, earning CORE tokens as recurring rewards.

* There are _minimal requirements_ on both **amount** and **duration** to make the staking eligible on Core.
    * A user should at least stake **0.01 Bitcoin** (less transaction fees) for at least **10 days**. 

### Transaction Work Flow

![btc-staking-flow](../../../../static/img/btc-staking/btc-staking-flow.png)

Core's implementation of Bitcoin native staking is completely non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking. Users are required to perform only the following steps:

* Send a Bitcoin transaction to their own address, and lock up the output whose amount is intended to stake on Core blockchain by using the Bitcoin native timelock feature. Besides, the transaction should also contain an `op_return` output in which users can designate the Core validator address to stake to and a `reward address` to receive CORE rewards. For details to compose such a staking transaction, please refer to the [transaction design](design.md).

* (_Optional_) After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit to the Core blockchain. This step is optional, if users compose the transaction in a standard format as suggested by Core (defined in the [transaction design](design.md)). The Core infrastructure will detect the staking transaction and submit it to Core blockchain for users.

* When the timelock expires, users can spend the UTXO using the corresponding redeem script. It is easy for them to build the redeem script from the original staking transaction.

## Step by Step Process

1. **Locking Bitcoin:** Bitcoin holders initiate the staking process by locking their Bitcoin in an absolute time lock on the Bitcoin blockchain.

2. **Including Delegation Information:** Within the locking transaction, stakers include:

3. **Core Validator Address:** The address of the Core Validator to delegate their Bitcoin to.

4. **CORE Token Reward Address:** The address where they want their CORE token rewards sent.

5. **Delegating Bitcoin:** This action delegates the staker’s Bitcoin to the chosen Core validator for a specified period, during which the Bitcoin cannot be spent.

6. **Validator Election:** Core uses the delegated Bitcoin to help elect validators. Validators with higher delegated Bitcoin have a better chance of being elected to the validator set.

7. **Earning Rewards:** Bitcoin stakers earn CORE token rewards for the duration of the lock period, based on the validator's performance and the amount of Bitcoin staked.

8. **Unlocking Bitcoin:**  After the timelock expires, the staked Bitcoin remains in the staker’s address but stays locked. To regain access and be able to spend their BTC, the staker must redeem it after the timelock period ends.


## Conclusion

Non-Custodial Bitcoin Staking transforms the Bitcoin asset from a passive Store of Value into an active, yield-bearing, and security-providing asset. Bitcoin staking allows Bitcoin holders to earn the Bitcoin Risk-Free Rate while also contributing to the security of a smart contract platform designed to unlock more Bitcoin asset use-cases. 
