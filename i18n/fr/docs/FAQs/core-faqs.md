---
sidebar_label: FAQ sur la Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur Core

---

### 1. Where can I find the codebase for the Core blockchain?

The Core Foundation advocates open-source project building, and hence all of Core's codebases are available for community use. Vous pouvez trouver le code source de Core blockchain et d'autres outils pour développeurs sur le [compte GitHub officiel de Core](https://github.com/coredao-org).

### 2. Quels sont les canaux de communication officiels ?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Discord:** [https://discord.com/invite/coredaoofficial](https://discord.com/invite/coredaoofficial)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) ou [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

### 3. Which dApps are deployed on the Core Network?

Core is designed to cater to builders, offering a robust platform where various decentralized applications (dApps) can be deployed and flourish. Supporting a diverse range of dApps, the Core ecosystem is specifically structured to encourage development and innovation, making it a favorable environment for creators looking to deploy cutting-edge applications in the blockchain space. For more details, you can check out our [ecosystem](https://coredao.org/explore/ecosystem) to explore who’s building what.

### 4. How to connect MetaMask to the Core Network?

Follow our detailed guide on how to connect your MetaMask wallet to the Core [Testnets](../Dev-Guide/core-wallet-config.md) and [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md).

### 5. What role does the CORE token play in securing the Core network?

The CORE token plays a pivotal role in securing the Core network through its functions in staking, governance, and as a utility token. Users can stake CORE tokens to become validators, who play a crucial role in block production and transaction validation, thereby enhancing network security. The token's deflationary aspect, where a portion of transaction fees and block rewards is burned, aligns stakeholder incentives by potentially increasing its value and encouraging active participation.

### 6. As a Bitcoin staker, do I need to run a validator myself?

No, as a Bitcoin staker on the Core network, you do not need to run a validator yourself. The system allows Bitcoin holders to participate in securing the network through Self-Custodial Bitcoin Staking. This means you can stake your Bitcoin without relinquishing custody and without needing to directly participate in the validator processes, such as block production or transaction validation. This setup allows you to earn a yield on your Bitcoin while contributing to the network's security in a more passive manner.

### 7. What are the conditions for slashing? What are the slashing fees incurred? Will all my staked tokens (CORE and BTC) get slashed?

On the Core network, slashing and jailing are mechanisms to penalize validators for misconduct.

"Slashing" refers to cutting either a validator’s reward for mining blocks or their staked CORE tokens. The severity of the slashing punishment is scaled up in proportion to the validator’s misbehavior.

- **Failing to Successfully Produce a Block During Its Designated Turn**
    - If a validator node fails to mine **50 blocks** in a row, the CORE token rewards the validator has accrued so far are slashed completely.
    - If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose 10% of the staker CORE deposit, and are jailed for three days, which means they aren’t eligible to be elected to the validator set
- **Penalty for Double Signing**
    - “Double signing” is the scenario of signing two different blocks at an equal block height. Validators caught double signing receive their entire reward and have their CORE validator deposit slashed; they are thereafter barred from participating in mining blocks, effectively being jailed forever.

### 8. What consensus mechanism does the Core network use, and how does it prevent different attacks?

The Core network uses the Satoshi Plus consensus mechanism, which combines Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Self-Custodial Bitcoin Staking to secure the network against various attacks. This setup mitigates network attacks, such as DDoS, through node dispersion and randomized peer-to-peer (P2P) communication. For consensus attacks like the 51% attack, it employs round-robin mining and a hybrid score system for validator election, making such attacks economically impractical. Additionally, Core utilizes checkpointing to periodically freeze and secure the blockchain's history, thereby thwarting long-range attacks. For more details, see the [Core Blockchain Security Overview](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. What is the average transaction confirmation time of the Core network?

The average transaction confirmation time on the Core network is **12 blocks**.

### 10. How much TPS can the Core network withstand?

The Core blockchain is still evolving and stepping hard on the innovation gear. As of now, Core can handle up to **~700** transactions on the mainnet with an artificially low gas limit. However, we look forward to scaling the network and making it efficient enough to handle much larger transaction processing rates (TPS counts).

### 11. Where can I get the test CORE tokens from?

To help users get started and allow developers to quickly prototype their dApps, Core provides testnet faucets for [Core Testnet2 (1114)](https://scan.test2.btcs.network/faucet), for distribution of testnet tokens, tCORE2. Follow the detailed guide [here](../Dev-Guide/core-faucet.md), on how to obtain tCORE2 from the Core Testnet faucet.

### 12. Comment puis-je contribuer à la communauté Core ?

You can contribute to the Core Community in several different ways:

- **Contribute to Our Official Documentation:** Send a pull request with your changes to the GitHub repository of our official documentation, and our team will review them accordingly. If deemed correct, we will merge them into our official documentation.
- **[Liste de souhaits Core](https://github.com/coredao-org/core-community-contributions) :** Créez des projets pour l'écosystème Core. The Core Foundation has outlined a list of project categories that builders can contribute to, fostering the growth of the Core ecosystem.
- **Builder Incentive Programs:** Core also offers several grants and builder programs for encouraging development on the Core blockchain. Que ce soit via les [subventions de la Core Foundation](https://coredaofoundation.org/fund-your-project), ou le [programme d'incitation pour les créateurs Core Ignition](https://coredao.org/initiatives/incentiveprogram), vous pouvez démarrer votre aventure de création dans le Web3 sur la Core Chain.
- **Core Commit Program:** The Core Foundation offers a 3-month accelerator program designed to scale up early-stage projects. The [Core Commit Program](https://coredao.org/initiatives/commit-program) not only provides builders with resources and access to one-on-one mentorship from some of the biggest minds in the Web3 industry, but it also offers them the opportunity for monthly performance-based rewards and funding from Core Ventures and its network of over 100 VCs.

### 13. Core propose-t-elle des subventions ou des programmes pour les créateurs ?

Core ne se limite pas aux subventions, c'est une porte vers des opportunités infinies. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), or the [Core Commit Program](https://coredao.org/initiatives/commit-program), you'll receive technical guidance, mentorship, and exposure to a vibrant community dedicated to innovating in the DeFi landscape.

### 14. How can I report a scam or rug pull?

To report a scam/rug pull, you can provide a detailed report on our [Discord channel](https://discord.com/invite/coredaoofficial).