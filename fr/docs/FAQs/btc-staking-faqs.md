---
sidebar_label: Non-Custodial BTC Staking FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking FAQs

---

### 1. What is Non-Custodial Bitcoin Staking on the Core network?

Core provides Bitcoin holders with a risk free and transparent opportunity to lock up/stake their Bitcoin on the Bitcoin Network without giving up custody of their Bitcoin assets, in order to participate in Core Chain’s security and earn CORE rewards in return.

### 2. How does Non-Custodial Bitcoin Staking work?

With the non-custodial bitcoin staking, Core Chain's protocol incorporate bitcoin holders as the third part of Satoshi Plus consensus. Core Chain's methodology for integrating bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). CLTV timelock are Bitcoin-native cryptographic feature that specify a condition under which the transaction output cannot be spent until a certain point in time has passed. This time can be defined in terms of a specific date and time or by block height. Rather than holders giving up custody of their bitcoins to external staking, stakers on Core Chain merely need to place their bitcoins in CLTV timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Within that transaction, stakers must include a script containing the same information that Bitcoin miners include in their delegated blocks:

1. The address of the Core Validator the staker wants to delegate their bitcoin to.
2. The address that the staker would like their CORE token rewards to be sent to.

Bitcoin stakers earn yields on their otherwise passive bitcoin in the form of CORE token rewards. The end result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while also expanding the scope of Bitcoin's utility.

### 3. How does non-custodial Bitcoin staking maintain security and trust?

By allowing users to stake their bitcoins without moving them off the Bitcoin blockchain, non-custodial Bitcoin staking avoids introducing new trust assumptions. It leverages the inherent security and trust of Bitcoin’s established infrastructure, maintaining high security for staked assets.

### 4. What are the advantages of Non-Custodial Bitcoin Staking?

1. **Tailored for Long-Term Holders and Institutions:** Designed for those who prefer keeping their bitcoins on the secure Bitcoin blockchain, non-custodial Bitcoin staking offers a way to earn rewards during a specified holding period without frequent transactions.

2. **No New Trust Assumptions:** Users can stake their bitcoins directly on the Bitcoin blockchain, maintaining the high security and trust inherent in Bitcoin's robust infrastructure without the need to transfer assets off-chain.

3. **Opportunity to Earn Passive Rewards:** Bitcoin stakers can earn CORE token rewards in exchange for their contributions to the Core Chain's consensus, enhancing the blockchain's functionality and security.

4. **Self-Custody and Security:** Bitcoin Staking is 100% secure with self-custody; users execute staking transactions themselves on the Bitcoin network, ensuring their Bitcoin does not leave the blockchain.

5. **Use of Native Cryptographic Features:** Bitcoin staking on Core utilizes battle-tested cryptographic features of the Bitcoin network, making it safer than non-native solutions.

6. **Flexibility in Transaction Building:** Users have the flexibility to build their staking transactions using any preferred tool, significantly reducing the risk of supply chain attacks from third-party libraries.

### 5) Are there any specific requirements to participate in Non-Custodial Bitcoin Staking?

Yes, participants must stake a minimum of **0.01 Bitcoin for at least 10 days**. This minimal requirement makes it accessible for a wide range of Bitcoin holders.

### 6. Why is that the staking address provided differs from your original Bitcoin address?

The staking address is derived from your wallet's master private key, ensuring your control and security over your assets. Your Bitcoins remain safely stored in your original wallet, unaffected by staking. While staked assets may not be visible in some wallet versions, you still have complete ownership.

You can view your staked funds by searching the staking address on the any Bitcoin explorer like [Mempool](https://mempool.space/). We're actively working to make staked assets visible in all supported wallets especially through command line versions.

### 7. Does Core Chain provide any hardware wallet support for Non-Custodial Bitcoin Staking?

At present, Non-Custodial Bitcoin Staking does not support hardware wallets due to technical constraints. Nevertheless, we're constantly exploring ways to enhance compatibility with various wallet types, prioritizing both security and convenience for our users.

### 8. What are the important considerations for Locking Periods to keep in mind before staking your assets?

- **Time Lock Expiration:** When you lock your Bitcoin for staking, it's inaccessible until the staking period concludes.
- **Choosing wisely:** We advise selecting your locking period thoughtfully, taking into account your investment objectives and risk tolerance. Starting with shorter locking periods can help you become familiar with the process before committing to longer durations.
- **Staked Amount Verification:** currently due to some technical complexities it is possible that your staked asset is not visible in your wallet when checked through CLI, however, you can easily verify that you have the complete ownership of your staked assets from the [Core Chain Non-Custodial Bitcoin Staking Website](https://stake.coredao.org/).

### 9. Why is my staked asset not visible in my wallet?

Currently due to some technical complexities it is possible that your staked asset is not visible in your wallet when checked through CLI, however, you can easily verify that you have the complete ownership of your staked assets from the [Core Chain Non-Custodial Bitcoin Staking Website](https://stake.coredao.org/).

### 10. How is the security of non-custodial Bitcoin staking ensured?

Core Chain's protocol and non-custodial Bitcoin staking’s security have been thoroughly audited by [Halborn](https://www.halborn.com/), a SOC2 Type 1 compliant firm renowned for its smart contract security expertise and [trusted by leading blockchain platforms](https://www.halborn.com/about/who-trusts-us) like Ava Labs, Solana, and Polygon, as well as DeFi projects like Sushiswap. Review Audit Reports of Core Chain's protocol and non-custodial Bitcoin staking by leading firms [here](../Learn/audit.md).

### 11. What to do if `Redeem BTC` button is not working on the staking website?

You can Redeem your BTC back by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). If incase the button is not working try clearing your browser cache and re-try again. If you further face issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).
