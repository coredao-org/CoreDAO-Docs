---
sidebar_label: Qu'est-ce que Core DAO
hide_table_of_contents: false
sidebar_position: 2
---

# Core : Débloquer le Bitcoin DeFi

---

Core est une blockchain Layer-1 haute performance compatible EVM, conçue pour être la plate-forme de contrats intelligents complémentaire et hyper-scalable de Bitcoin.

La principale innovation de Core est son mécanisme de consensus novateur, **Satoshi Plus**, qui unit la Preuve de Travail Déléguée (DPoW), la Preuve d’Enjeu Déléguée (DPoS) et le Staking de Bitcoin Non-custodial.

**Preuve de Travail Déléguée**

Grâce à cette combinaison, la blockchain Core incorpore les mineurs de Bitcoin dans la sécurité des contrats intelligents "Turing-complet", libérant la fonctionnalité et l'utilité de ces mineurs au-delà de la simple maintenance du registre de Bitcoin, et leur offrant un revenu supplémentaire sous forme de récompenses en tokens CORE. Les mineurs peuvent ajouter des métadonnées aux nouveaux blocs minés qui incluent des votes pour les validateurs Core, leur offrant un revenu supplémentaire purement additif sous forme de récompenses en jetons CORE. Cette relation symbiotique renforce le Bitcoin sans consommer de l'espace de bloc de Bitcoin ni affecter le rôle principal des mineurs en tant que défenseurs du réseau Bitcoin.

**Staking Non-Custodial de Bitcoin**

Les détenteurs de Bitcoin utilisent la fonctionnalité native de Bitcoin, Check Lock Time Verify (CLTV), pour verrouiller leurs Bitcoin pendant une période spécifiée. En échange du verrouillage temporaire de leur Bitcoin, les détenteurs de Bitcoin gagnent le droit de participer à l'élection des validateurs Core. Dans le cadre du verrouillage temporel, les détenteurs incluent des métadonnées pour déléguer à leur validateur choisi et spécifier leurs adresses de récompense tout en maintenant la garde complète de leurs actifs. Cette approche innovante permet aux détenteurs de Bitcoin de participer au mécanisme de consensus de Core sans transférer leurs Bitcoin, introduire des risques de slashing ou dépendre de ponts inter-chaînes. Ce mécanisme transforme le Bitcoin d'une réserve de valeur statique en un actif productif qui génère des rendements tout en préservant ses propriétés de sécurité fondamentales.

**Preuve d’enjeu déléguée** Dpos

Aux côtés des stakeurs Bitcoin, les détenteurs de jetons CORE peuvent déléguer leurs jetons CORE aux validateurs pour participer au consensus et gagner des récompenses. Le staking de jetons CORE est également le seul moyen pour les stakeurs Bitcoin de gagner des niveaux de rendement plus élevés.

<p align="center">![core-products](../../../static/img/What-Is-Core.png)</p>

## Caractéristiques Clés de la blockchain Core

Principales caractéristiques distinctives de Core:

- **Rendement Bitcoin sans confiance :** Core permet aux détenteurs de Bitcoin de gagner des rendements sur leurs Bitcoin sans abandonner la garde, en utilisant la fonction CLTV native de Bitcoin pour verrouiller les actifs tout en maintenant un contrôle total. Cette approche élimine le risque de contrepartie et les vulnérabilités des contrats intelligents généralement associées aux stratégies de rendement Bitcoin, transformant le Bitcoin d'une réserve de valeur statique en un actif productif.
- **Intégration de sécurité de staking Bitcoin :** Le mécanisme de consensus de Core exploite le Bitcoin en tant qu'actif de staking, tirant parti de la cryptomonnaie la plus précieuse pour son modèle de sécurité. By enabling Bitcoin holders to timelock their assets for validator selection, Core gains security while simultaneously unlocking additional Bitcoin utility.
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