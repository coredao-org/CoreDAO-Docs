---
sidebar_label: FAQ sur le staking BTC non-custodial
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Staking de Bitcoin Non-Custodial

---

### 1\. Qu'est-ce que le Staking de Bitcoin Non-Custodial sur le réseau Core ?

Core provides Bitcoin holders with a risk-free and transparent opportunity to lock up/stake their Bitcoin on the Bitcoin Network without giving up custody of their Bitcoin assets. In return, they can participate in the Core blockchain’s security through Satohi Plus and earn CORE rewards.

### 2\. Comment Fonctionne le Staking de Bitcoin Non-Custodial ?

With the non-custodial bitcoin staking, Core Chain's protocol incorporates bitcoin holders as the third part of the Satoshi Plus consensus. Core Chain's methodology for integrating Bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), a Bitcoin-native cryptographic feature that specifies a condition under which the transaction output cannot be spent until a particular point in time has passed. For more details on how Non-Custodial Bitcoin Staking works, refer [here](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.1i3v4ioboaxe).

### 3\. Quels sont les avantages du Staking de Bitcoin Non-Custodial ?

1. **Adapté aux détenteurs à long terme et aux institutions:** Conçu pour ceux qui préfèrent conserver leurs bitcoins sur la blockchain sécurisée de Bitcoin, le staking de Bitcoin non-custodial permet de gagner des récompenses pendant une période de détention spécifiée sans transactions fréquentes.
2. **No New Trust Assumptions:** Users can stake their bitcoins directly on the Bitcoin blockchain, maintaining the high security and trust inherent in Bitcoin's robust infrastructure without transferring assets off-chain.
3. **Opportunity to Earn Passive Rewards:** Bitcoin stakers can earn CORE token rewards in exchange for contributing to the Core blockchain's consensus, enhancing the blockchain's functionality and security.
4. **Autogestion et sécurité :** Le staking de Bitcoin est 100 % sécurisé avec autogestion ; les utilisateurs exécutent eux-mêmes les transactions de staking sur le réseau Bitcoin, garantissant que leurs Bitcoin ne quittent pas la blockchain.
5. **Utilisation des fonctionnalités cryptographiques natives :** Le staking de Bitcoin sur Core utilise des fonctionnalités cryptographiques éprouvées du réseau Bitcoin, ce qui le rend plus sûr que les solutions non natives.
6. **Flexibility in Transaction Building:** Users can build their staking transactions using any preferred tool, significantly reducing the risk of supply chain attacks from third-party libraries.

### 4\. How does Non-Custodial Bitcoin staking maintain security and trust?

Core's Non-Custodial Bitcoin staking avoids introducing new trust assumptions by allowing users to stake their bitcoins without moving them off the Bitcoin blockchain. It leverages Bitcoin's established infrastructure's inherent security and trust, maintaining high security for staked assets.

### 5\. What is the role of Core in the process of Non-Custodial Bitcoin staking?

It is noted here that no assets are moved onto the Core blockchain or into any trusted third-party or smart contracts. Instead, users' assets remain locked on the Bitcoin network under the complete ownership of the user. From the Core’s perspective, only the relayers monitor the Bitcoin network for any Bitcoin staking transactions. Upon detection, these are picked, and only the valid ones are passed down to the consensus engine and accrual of staking rewards. With the Fusion Upgrade, the users would manually have to claim their staking rewards in the form of CORE tokens.

### 6\. What happens to my asset in the validator I delegated my Bitcoins to, or the Core blockchain go down?

Delegating Bitcoins for staking rewards through Core’s Non-Custodial Bitcoin does not require any kind of asset transfers or bridging onto the Core blockchain or to validators. Even if the validators or Core blockchain goes down, users' assets remain in their complete custody and can be redeemed after the timelock expires on the Bitcoin network.

### 7\. What are some challenges associated with Short Time Locks on Bitcoin?

CLTV timelock is a native feature of the Bitcoin network. A user can lock up any amount of Bitcoin for the desired time period through this feature. However, with shorter time lock periods (e.g., 10 minutes) due to network congestions and Bitcoin network block times, these transactions may not be processed quickly enough, leading to delays in redeeming the Bitcoin. Note that for a Bitcoin staking transaction to be valid, the [minimum requirement](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.mwjq55dgslw5) should be met.

### 8\. Pourquoi l'adresse de staking fournie diffère-t-elle de votre adresse Bitcoin d'origine ?

Users should align with the following requirements for a Bitcoin staking transaction to be considered valid.

- Users must ensure that the transaction is sent to their address.
- Using the Bitcoin native timelock feature, specify the lock-up amount intended to be delegated to the validator on the Core blockchain as the transaction output.
- _Minimum_ _requirements exist_ for both **amount** and **duration**. Users should stake at least **0.01 Bitcoin** (excluding the transaction fees) for at least **10 days**.
- The transaction should also contain an op\_return output specifying
  - The address of the Core Validator the staker wants to delegate their Bitcoin to.
  - The address to which the staker would like their CORE token rewards to be sent.

### 9\. Why does the staking address provided differ from your original Bitcoin address?

L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et votre sécurité sur vos actifs. Vos bitcoins restent stockés en toute sécurité dans votre portefeuille d'origine, sans être affectés par le staking. Bien que les actifs stakés puissent ne pas être visibles dans certaines versions de portefeuille, vous conservez l'entière propriété.

You can view your staked funds by searching the staking address on any Bitcoin explorer like [Mempool](https://mempool.space/). We're actively working to make staked assets visible in all supported wallets, especially through command-line versions.

### 10\. Does Core provide hardware wallet support for Non-Custodial Bitcoin Staking?

Due to technical constraints, Non-Custodial Bitcoin Staking does not currently support hardware wallets. Nevertheless, we're constantly exploring ways to enhance compatibility with various wallet types, prioritizing security and convenience for our users.

### 11\. What are the important considerations for Locking Periods before staking your assets?

- \*\*Time Lock Expiration: \*\*When you lock your Bitcoin for staking, it's inaccessible until the staking period concludes.
- **Choosing wisely:** You should select your locking period thoughtfully, considering your investment objectives and risk tolerance. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues. The minimum lock period is **10 days**.
- **Staked Amount Verification:** Due to some technical complexities, it is possible that your staked asset is not visible in your wallet when checked through CLI. However, you can easily verify that you have complete ownership of your staked assets from the [Core's Official Staking Website](https://stake.coredao.org/). Also, delays from block time, the number of block confirmation requirements, and network congestion on the Bitcoin network might lead to delays in the confirmation of your transactions, making your assets not visible in your wallets.

### 12\. Pourquoi mon actif staké n'est-il pas visible dans mon portefeuille ?

Due to technical complexities, it is possible that your staked asset is not visible in your wallet when checked through CLI. However, you can easily verify that you have complete ownership of your staked assets from the [Core's Official Staking Website](https://stake.coredao.org/). Also, delays from block time, the number of block confirmation requirements, and network congestion on the Bitcoin network might lead to delays in the confirmation of your transactions, making your assets not visible in your wallets.

### 13\. Comment la sécurité du staking de Bitcoin non-custodial est-elle assurée ?

[Halborn](https://www.halborn.com/), a SOC2 Type 1 compliant firm renowned for its smart contract security expertise and [trusted by leading blockchain platforms](https://www.halborn.com/about/who-trusts-us) like Ava Labs, Solana, and Polygon, as well as DeFi projects like Sushiswap, has thoroughly audited Core's protocol and non-custodial Bitcoin staking's security. You can review audit reports on Core Chain's protocol and non-custodial Bitcoin staking by leading firms [here](https://docs.coredao.org/docs/Learn/audit).

### 14\. What should you do if the _`Redeem BTC`_ button is not working on the staking website?

You can Redeem your BTC by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). If the button is not working, try clearing your browser cache and re-try. If you face further issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).
