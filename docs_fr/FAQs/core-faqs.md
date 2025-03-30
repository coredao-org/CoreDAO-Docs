---
sidebar_label: Core Chain FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Core Chain FAQs

---

### 1. Where can I find the codebase for Core Chain?

Core Chain advocates open source project building and hence we have all of our codebase available for community use. You can find Core Chain’s codebase and other developer tools on the [official GitHub account of Core Chain](https://github.com/coredao-org).

### 2. What are Core Chain’s official communication channels?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Discord:** [https://discord.com/invite/coredaoofficial](https://discord.com/invite/coredaoofficial)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) or [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

<!-- ### 3. How to query the current system parameters?
     -->

### 3. Which dApps are deployed on the Core Network?

Core Chain is designed to cater to builders, offering a robust platform where various decentralized applications (dApps) can be deployed and flourish. Supporting a diverse range of dApps, the Core ecosystem is specifically structured to encourage development and innovation, making it a favorable environment for creators looking to deploy cutting-edge applications in the blockchain space. For more details, you can check out our [ecosystem](https://coredao.org/explore/ecosystem) to explore who’s building what.

### 4. How to connect MetaMask to Core Network?

Follow our detailed guide on how to connect your MetaMask wallet to the Core [Testnet](https://rumeelhussainbnb.github.io/CoreDAODocs/docs/Dev-Guide/core-testnet-wallet-config) and [Mainnet](https://rumeelhussainbnb.github.io/CoreDAODocs/docs/Dev-Guide/core-mainnet-wallet-config).

### 5. What role does the CORE token play in securing the Core network?

The CORE token is pivotal in securing the Core network through its roles in staking, governance, and as a utility token. Users can stake CORE tokens to become validators, who are essential in block production and transaction validation, enhancing network security. The token's deflationary aspect, where a part of transaction fees and block rewards are burnt, aligns stakeholder incentives by potentially increasing its value and encouraging active participation

### 6. As a bitcoin staker, do I have to run a validator by myself?

No, as a Bitcoin staker on the Core network, you do not need to run a validator yourself. The system allows Bitcoin holders to participate in securing the network through non-custodial Bitcoin staking. This means you can stake your Bitcoin without giving up custody and without the need to directly engage in the validator processes, such as block production or transaction validation. This setup allows you to earn yield on your Bitcoin while contributing to the network's security in a more passive manner.

### 7. What are the conditions for slashing? What are the slashing fees incurred? Will all my staked tokens (CORE and BTC) get slashed?

On the Core Chain network, slashing and jailing are mechanisms to penalize validators for misconduct.

“Slashing” refers to cutting either a validator’s reward for mining blocks, or their staked CORE tokens. The severity of the slashing punishment is scaled up in proportion to the validator’s misbehavior.

- **Failing To Successfully Produce a Block During Its Designated Turn**
  - If a validator node fails to mine **50 blocks** in a row, the CORE token rewards the validator has accrued so far are slashed completely.
  - If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose 10% of the staker CORE deposit, and are jailed for three days, which means they aren’t eligible to be elected to the validator set
- **Penalty for Double Signing**
  - “Double signing” is the scenario of signing two different blocks at an equal block height. Validators caught double signing get their entire reward and CORE validator deposit slashed, and are thereafter barred from participating in mining blocks, i.e., jailed forever.

### 8. What consensus mechanism does the Core network use, and how does it prevent different attacks?

The Core network uses the Satoshi Plus consensus mechanism which combines Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) and Non-Custodial BTC Staking to secure the network against various attacks. This setup mitigates network attacks such as DDoS through node dispersion and randomized P2P communication. For consensus attacks like the 51% attack, it employs round-robin mining and a hybrid score system for validator election, making such attacks economically impractical. Additionally, Core Chain uses checkpointing to freeze and secure the blockchain's history periodically, thwarting long-range attacks. For more details, see the [Core Chain Security Overview](https://docs.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. What is the average transaction confirmation time of Core network?

The average transaction confirmation time on the Core network is **12 blocks**.

### 10. How much TPS can the Core network withstand?

The Core Chain is still evolving and stepping hard on the innovation gear, as of now Core can handle up to **~700** on mainnet with an artificially low gas limit. However, we look forward to scaling the network and making it efficient to handle much larger TPS counts.

<!-- ### 11. What is the address format of Core? Does it support multiple formats?
    

### 12. What are possible causes of transaction failure on the core network? -->

### 11. Where can I get the test CORE token from?

To help users get started and allow developers to quickly prototype their dApps, Core has released the public [Core Testnet Faucet](https://scan.test.btcs.network/faucet) to distribute Core testnet tokens, tCORE. Follow the detailed guide [here](https://rumeelhussainbnb.github.io/CoreDAODocs/docs/Dev-Guide/core-faucet), on how to obtain tCORE from the Core testnet faucet.

### 12. How can I contribute to the Core community?

You can contribute to the Core Chain Community through several different ways:

- **Contribute to our Official Documentation:** Send PR with your changes to GitHub repo of our official documentation and our team will review it accordingly. If deem correct, we will merge them into our official documentation.
- **[Core Chain Wishlist](https://github.com/coredao-org/core-community-contributions):** Build projects for the Core Chain ecosystem. The Core Foundation has laid out a list of project categories that builders can build and contribute to the growth of the Core ecosystem.
- **Builder Incentive Programs:** Core also offers several grants and builder programs for encouraging developement on the Core Chain. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition](https://ignition.coredao.org/) or the [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), you can jumpstart your building journey on the Web3 on the Core Chain.

### 13. Does Core offer any grants or builder programs?

Core isn't just about grants—it's a gateway to limitless opportunities. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition](https://ignition.coredao.org/) or the [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), you'll receive technical guidance, mentorship, and exposure to a vibrant community dedicated to innovating in the DeFi landscape.

### 14. How can I report a scam/rug pull?

To report a scam/rug pull you can provide a detailed report on our [Discord channel](https://discord.com/invite/coredaoofficial).
