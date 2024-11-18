---
sidebar_label: Preguntas frecuentes sobre apuestas de BTC sin custodia
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas de BTC sin custodia

---

### 1\. ¿Qué es la apuesta de Bitcoin sin custodia en la red central?

Core provides Bitcoin holders with a risk-free and transparent opportunity to lock up/stake their Bitcoin on the Bitcoin Network without giving up custody of their Bitcoin assets. In return, they can participate in the Core blockchain’s security through Satohi Plus and earn CORE rewards.

### 2\. ¿Cómo funciona el Stake de Bitcoin sin custodia?

With the non-custodial bitcoin staking, Core Chain's protocol incorporates bitcoin holders as the third part of the Satoshi Plus consensus. Core Chain's methodology for integrating Bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), a Bitcoin-native cryptographic feature that specifies a condition under which the transaction output cannot be spent until a particular point in time has passed. For more details on how Non-Custodial Bitcoin Staking works, refer [here](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.1i3v4ioboaxe).

### 3\. ¿Cuáles son las ventajas de la apuesta de Bitcoin sin custodia?

1. **Diseñado para titulares e instituciones a largo plazo:** Diseñado para aquellos que prefieren mantener sus bitcoins en la cadena de bloques segura de Bitcoin, el scking de Bitcoin sin custodia ofrece una manera de ganar recompensas durante un período de tenencia específico sin transacciones frecuentes.
2. **No New Trust Assumptions:** Users can stake their bitcoins directly on the Bitcoin blockchain, maintaining the high security and trust inherent in Bitcoin's robust infrastructure without transferring assets off-chain.
3. **Opportunity to Earn Passive Rewards:** Bitcoin stakers can earn CORE token rewards in exchange for contributing to the Core blockchain's consensus, enhancing the blockchain's functionality and security.
4. **Autocustodia y seguridad:** Bitcoin Stake es 100% seguro con autocustodia; Los usuarios ejecutan ellos mismos transacciones de participación en la red Bitcoin, asegurando que su Bitcoin no abandone la cadena de bloques.
5. **Uso de funciones criptográficas nativas:** La apuesta de Bitcoin en Core utiliza funciones criptográficas probadas en batalla de la red Bitcoin, lo que la hace más segura que las soluciones no nativas.
6. **Flexibility in Transaction Building:** Users can build their staking transactions using any preferred tool, significantly reducing the risk of supply chain attacks from third-party libraries.

### 4\. How does Non-Custodial Bitcoin staking maintain security and trust?

Core's Non-Custodial Bitcoin staking avoids introducing new trust assumptions by allowing users to stake their bitcoins without moving them off the Bitcoin blockchain. It leverages Bitcoin's established infrastructure's inherent security and trust, maintaining high security for staked assets.

### 5\. What is the role of Core in the process of Non-Custodial Bitcoin staking?

It is noted here that no assets are moved onto the Core blockchain or into any trusted third-party or smart contracts. Instead, users' assets remain locked on the Bitcoin network under the complete ownership of the user. From the Core’s perspective, only the relayers monitor the Bitcoin network for any Bitcoin staking transactions. Upon detection, these are picked, and only the valid ones are passed down to the consensus engine and accrual of staking rewards. With the Fusion Upgrade, the users would manually have to claim their staking rewards in the form of CORE tokens.

### 6\. What happens to my asset in the validator I delegated my Bitcoins to, or the Core blockchain go down?

Delegating Bitcoins for staking rewards through Core’s Non-Custodial Bitcoin does not require any kind of asset transfers or bridging onto the Core blockchain or to validators. Even if the validators or Core blockchain goes down, users' assets remain in their complete custody and can be redeemed after the timelock expires on the Bitcoin network.

### 7\. What are some challenges associated with Short Time Locks on Bitcoin?

CLTV timelock is a native feature of the Bitcoin network. A user can lock up any amount of Bitcoin for the desired time period through this feature. However, with shorter time lock periods (e.g., 10 minutes) due to network congestions and Bitcoin network block times, these transactions may not be processed quickly enough, leading to delays in redeeming the Bitcoin. Note that for a Bitcoin staking transaction to be valid, the [minimum requirement](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.mwjq55dgslw5) should be met.

### 8\. ¿Core Chain proporciona algún soporte de billetera de hardware para la participación sin custodia de Bitcoin?

Users should align with the following requirements for a Bitcoin staking transaction to be considered valid.

- Users must ensure that the transaction is sent to their address.
- Using the Bitcoin native timelock feature, specify the lock-up amount intended to be delegated to the validator on the Core blockchain as the transaction output.
- _Minimum_ _requirements exist_ for both **amount** and **duration**. Users should stake at least **0.01 Bitcoin** (excluding the transaction fees) for at least **10 days**.
- The transaction should also contain an op\_return output specifying
  - The address of the Core Validator the staker wants to delegate their Bitcoin to.
  - The address to which the staker would like their CORE token rewards to be sent.

### 9\. Why does the staking address provided differ from your original Bitcoin address?

La dirección de participación se deriva de la clave privada maestra de su billetera, lo que garantiza su control y seguridad sobre sus activos. Sus Bitcoins permanecen almacenados de forma segura en su billetera original, sin verse afectados por las apuestas. Si bien es posible que los activos apostados no sean visibles en algunas versiones de billetera, usted aún tiene la propiedad total.

You can view your staked funds by searching the staking address on any Bitcoin explorer like [Mempool](https://mempool.space/). We're actively working to make staked assets visible in all supported wallets, especially through command-line versions.

### 10\. Does Core provide hardware wallet support for Non-Custodial Bitcoin Staking?

Due to technical constraints, Non-Custodial Bitcoin Staking does not currently support hardware wallets. Nevertheless, we're constantly exploring ways to enhance compatibility with various wallet types, prioritizing security and convenience for our users.

### 11\. What are the important considerations for Locking Periods before staking your assets?

- \*\*Time Lock Expiration: \*\*When you lock your Bitcoin for staking, it's inaccessible until the staking period concludes.
- **Choosing wisely:** You should select your locking period thoughtfully, considering your investment objectives and risk tolerance. Comenzar con períodos de bloqueo más cortos puede ayudarle a familiarizarse con el proceso antes de comprometerse con duraciones más largas. The minimum lock period is **10 days**.
- **Staked Amount Verification:** Due to some technical complexities, it is possible that your staked asset is not visible in your wallet when checked through CLI. However, you can easily verify that you have complete ownership of your staked assets from the [Core's Official Staking Website](https://stake.coredao.org/). Also, delays from block time, the number of block confirmation requirements, and network congestion on the Bitcoin network might lead to delays in the confirmation of your transactions, making your assets not visible in your wallets.

### 12\. ¿Por qué mi activo apostado no es visible en mi billetera?

Due to technical complexities, it is possible that your staked asset is not visible in your wallet when checked through CLI. However, you can easily verify that you have complete ownership of your staked assets from the [Core's Official Staking Website](https://stake.coredao.org/). Also, delays from block time, the number of block confirmation requirements, and network congestion on the Bitcoin network might lead to delays in the confirmation of your transactions, making your assets not visible in your wallets.

### 13\. ¿Qué hacer si el botón "Canjear BTC" no funciona en el sitio web de apuestas?

[Halborn](https://www.halborn.com/), a SOC2 Type 1 compliant firm renowned for its smart contract security expertise and [trusted by leading blockchain platforms](https://www.halborn.com/about/who-trusts-us) like Ava Labs, Solana, and Polygon, as well as DeFi projects like Sushiswap, has thoroughly audited Core's protocol and non-custodial Bitcoin staking's security. You can review audit reports on Core Chain's protocol and non-custodial Bitcoin staking by leading firms [here](https://docs.coredao.org/docs/Learn/audit).

### 14\. What should you do if the _`Redeem BTC`_ button is not working on the staking website?

You can Redeem your BTC by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). If the button is not working, try clearing your browser cache and re-try. If you face further issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).
