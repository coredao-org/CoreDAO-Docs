---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Core: Liberando el DeFi de Bitcoin

---

Core es una blockchain Layer-1 de alto rendimiento, EVM-compatible, diseñada para ser la plataforma de contratos inteligentes complementaria e hiperescalable de Bitcoin. Aprovechando los timelocks nativos de Bitcoin CLTV, el poder de hash de Bitcoin y las capacidades modernas de contratos inteligentes, Core desbloquea a Bitcoin como protector principal y activo central dentro de un ecosistema de aplicaciones descentralizadas en pleno crecimiento.

La principal innovación de Core es su novedoso mecanismo de consenso, **Satoshi Plus**, que combina Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Staking de Bitcoin Autocustodiado.



La blockchain Core incorpora a los mineros de Bitcoin en la seguridad de contratos inteligentes Turing-complete, desbloqueando nuevas funcionalidades y utilidades para los mineros más allá del simple mantenimiento del ledger de Bitcoin. Los mineros pueden adjuntar metadatos a los bloques recién minados que incluyan votos para validadores de Core, lo que les permite obtener ingresos adicionales en forma de recompensas en tokens CORE. Esta relación simbiótica trabaja para fortalecer Bitcoin sin consumir espacio de bloque de Bitcoin ni restar valor al papel principal de los mineros como defensores de la red Bitcoin.

**Staking de Bitcoin Autocustodiado**

Los holders de Bitcoin aprovechan la funcionalidad nativa de Check Lock Time Verify (CLTV) de Bitcoin para hacer un timelock de su Bitcoin durante un periodo específico. A cambio de hacer timelock, los holders de Bitcoin obtienen el derecho a participar en la elección de validadores de Core. En el timelock, los usuarios incluyen metadatos que delegan su voto a un validador elegido, además de especificar direcciones de recompensa, manteniendo completamente la custodia de sus activos. Este enfoque innovador permite a los holders de Bitcoin participar en el mecanismo de consenso de Core sin transferir su Bitcoin, sin riesgos de slashing y sin depender de bridges cross-chain. Este mecanismo convierte a Bitcoin en un activo productivo que genera rendimiento, al mismo tiempo que conserva sus propiedades fundamentales de seguridad.

**Delegated Proof of Stake**

Junto con los stakers de Bitcoin, los holders de tokens CORE pueden delegar sus tokens CORE a validadores para participar en el consenso y ganar recompensas. El staking de tokens CORE es el único medio para que los stakers de Bitcoin accedan a niveles más altos de rendimiento.

<p align="center">
![core-products](../../../static/img/What-Is-Core.png)
</p>

## Características Clave de la Core Blockchain

Algunas de las características distintivas de Core:

- **Trustless Bitcoin Yield:** Core permite que los holders de Bitcoin obtengan rendimiento sobre su Bitcoin sin renunciar a la custodia, utilizando la función nativa CLTV de Bitcoin para hacer timelock sus activos mientras mantienen el control total. Este enfoque elimina el riesgo de contraparte y las vulnerabilidades de contratos inteligentes que suelen estar asociadas con estrategias de rendimiento en Bitcoin, transformando a Bitcoin de un almacén de valor estático en un activo productivo.
- **Bitcoin Staking Security Integration:** Core's consensus mechanism harnesses Bitcoin as a staking asset, leveraging the most valuable cryptocurrency for its security model. By enabling Bitcoin holders to timelock their assets for validator selection, Core gains security while simultaneously unlocking additional Bitcoin utility.
- **Miner Security Integration:** Core incorporates Bitcoin miners in securing smart contracts, extending their utility beyond the Bitcoin ledger.
- **Dual Staking** Higher Bitcoin staking yields are reserved for stakers most aligned with the Core network, as expressed by their staked CORE tokens relative to staked Bitcoin. By tying increased Bitcoin yields to CORE staking, this mechanism creates powerful economic alignment between Bitcoin and CORE holders, contributing to the long-term growth and security of the Core blockchain
- **EVM Execution Environment:** Core adaptes Ethereum Virtual Machine (EVM) for smart contract execution making it EVM-compatible, similar to [BNB Smart Chain's implementation](https://github.com/bnb-chain/bsc) of Geth.
- **High-Performance:** Core delivers high-throughput transaction processing with optimized consensus, enabling scalable decentralized applications that require speed and responsiveness.
- **stCORE:** Core's liquid staking token, stCORE, enhances the utility of CORE tokens while simplifying the staking process. By allowing CORE holders to participate in network consensus through validator delegation without locking their assets, stCORE maximizes asset potential with greater flexibility and efficiency while enabling holders to earn rewards and contribute to network security.
- **lstBTC _(Coming Soon)_:** Issued by Maple Finance and secured by institutional-grade custodians, lstBTC tokenizes Dual Staking, turning yield-bearing timelocked Bitcoin into a liquid token that can be traded and utilized as collateral.

## Problems Addressed by the Core blockchain

Core blockchain addresses several key problems and issues in the Bitcoin and broader blockchain space through its unique approach and technology. These include:

- **Bitcoin's Lack of Native Yield:** Bitcoin does not have native yield, but it does have native timelocking through the CLTV op_code. Core leverages this existing feature to enable yield generation without bridging or lending risks. When Bitcoin holders timelock their Bitcoin, they can participate in Core validator election to earn yield, creating a secure yield pathway for Bitcoin holders.

- **Bitcoin Capital Inefficiency:** Bitcoin typically generates negative carry due to custody costs without producing income, resulting in capital inefficiency for holders. Core addresses this problem by enabling Bitcoin to generate yield through timelock mechanisms and liquid staking options, transforming static holdings into productive assets​.

- **Bitcoin Security Limitations:** Core extends Bitcoin's security capabilities beyond securing just the Bitcoin ledger, enabling Bitcoin's hashrate and value to secure a complete smart contract ecosystem without requiring modifications to the Bitcoin protocol or detracting from Bitcoin's primary security function​.

- **Limited Bitcoin Utility:** Core addresses Bitcoin's usability constraints on its native blockchain—where transactions can be slow and expensive—by providing an EVM-compatible environment powered by Bitcoin.

- **Bitcoin Miner Security Budget:** Bitcoin miners face a diminishing block reward schedule with halvings every four years, creating sustainability concerns for the security budget. Core provides an additional revenue stream to Bitcoin miners who choose to participate in Satoshi Plus consensus, supplementing their income without requiring any changes to their primary Bitcoin mining operations or compromising Bitcoin's security model.

- **Token Alignment:** The CORE token is the exclusive key unlocking higher Bitcoin staking rates, thereby aligning incentives between Bitcoin and CORE stakers. CORE, the native token of the Core blockchain, is used for paying gas fees, participating in governance, and staking. Additionally, CORE has a total supply of **2.1 billion** tokens, and a block rewards distribution schedule over **81 years**.