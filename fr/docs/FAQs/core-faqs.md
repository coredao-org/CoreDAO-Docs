---
sidebar_label: FAQ sur la Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur la Core Chain

---

### 1. Où puis-je trouver le code source de Core ?

La Fondation Core encourage le développement de projets open source et, par conséquent, tous les dépôts de code de Core sont accessibles à la communauté. Vous pouvez trouver le code source de Core blockchain et d'autres outils pour développeurs sur le [compte GitHub officiel de Core](https://github.com/coredao-org).

### 2. Quels sont les canaux de communication officiels de Core Chain ?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Discord:** [https://discord.com/invite/coredaoofficial](https://discord.com/invite/coredaoofficial)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) ou [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

<!-- ### 3. How to query the current system parameters?
     -->

### 3. Quelles dApps sont déployées sur le réseau Core ?

Core est conçu pour les créateurs, offrant une plateforme robuste où les diverses applications décentralisées (dApps) peuvent être déployées et prospérer. Soutenant une large gamme de dApps, l'écosystème Core est spécifiquement structuré pour encourager le développement et l'innovation, en faisant un environnement favorable pour les créateurs cherchant à déployer des applications à la pointe de la technologie dans l'espace blockchain. Pour plus de détails, explorez notre [écosystème](https://coredao.org/explore/ecosystem) pour découvrir qui construit quoi.

### 4. Comment connecter MetaMask au réseau Core ?

Follow our detailed guide on how to connect your MetaMask wallet to the Core [Testnet](../Dev-Guide/core-testnet-wallet-config.md) and [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md).

### 5. Quel rôle joue le token CORE dans la sécurisation du réseau Core ?

Le token CORE est essentiel pour la sécurisation du réseau Core grâce à ses rôles dans le staking, la gouvernance, et en tant que token utilitaire. Les utilisateurs peuvent staker des tokens CORE pour devenir validateurs, indispensables à la production de blocs et à la validation des transactions, renforçant ainsi la sécurité du réseau. Son aspect déflationniste, où une partie des frais de transaction et des récompenses de blocs est brûlée, aligne les incitations des parties prenantes en augmentant potentiellement sa valeur et en encourageant la participation active

### 6. En tant que staker de bitcoin, dois-je gérer moi-même un validateur ?

Non, en tant que staker de bitcoin sur le réseau Core, vous n'avez pas besoin de gérer vous-même un validateur. Le système permet aux détenteurs de Bitcoin de participer à la sécurisation du réseau via le staking non-custodial de bitcoins. Cela signifie que vous pouvez staker vos bitcoins sans en céder la garde et sans avoir à vous engager directement dans les processus de validation, tels que la production de blocs ou la validation des transactions. Cette configuration vous permet de générer des rendements sur vos bitcoins tout en contribuant à la sécurité du réseau de manière plus passive.

### 7. Quelles sont les conditions pour le slashing ? Quels frais sont encourus ? Mes tokens stakés (CORE et BTC) seront-ils réduits ?

On the Core network, slashing and jailing are mechanisms to penalize validators for misconduct.

Slashing fait référence à la réduction des récompenses d'un validateur pour le minage de blocs ou de ses tokens CORE stakés. La gravité de la sanction est proportionnelle à la mauvaise conduite du validateur.

- **Échec de Production de Blocs Pendant Son Tour Désigné**
  - Si un nœud validateur ne parvient pas à miner **50 blocs** consécutifs, les récompenses en tokens CORE accumulées sont entièrement coupées.
  - Si un validateur échoue à miner **150 blocs consécutifs**, il renonce à sa part des récompenses quotidiennes en CORE, perd 10 % de son dépôt en CORE et est emprisonné pendant trois jours, ce qui signifie qu'il ne peut pas être élu au groupe de validateurs
- **Pénalité pour Double Signature**
  - La "double signature" correspond au fait de signer deux blocs différents au même niveau de bloc. Les validateurs pris en flagrant délit de double signature perdent toutes leurs récompenses ainsi que leur dépôt en CORE, et sont ensuite interdits de participer au minage, c'est-à-dire emprisonnés à vie.

### 8. Quel mécanisme de consensus utilise le réseau Core et comment prévient-il les attaques ?

Le réseau Core utilise le mécanisme de consensus Satoshi Plus, qui combine la Preuve de Travail Déléguée (DPoW), la Preuve d'Enjeu Déléguée (DPoS) et le staking non-custodial de BTC pour sécuriser le réseau contre diverses attaques. Ce système réduit les risques d'attaques comme les attaques DDoS grâce à la dispersion des nœuds et à la communication P2P aléatoire. Pour les attaques de consensus, telles que l'attaque des 51 %, il est utilisé un minage en tourniquet et un système hybride de score pour l'élection des validateurs, rendant ces attaques économiquement impraticables. Additionally, Core uses checkpointing to freeze and secure the blockchain's history periodically, thwarting long-range attacks. For more details, see the [Core Blockchain Security Overview](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. Quel est le temps moyen de confirmation des transactions sur le réseau Core ?

Le temps moyen de confirmation des transactions sur le réseau Core est de **12 blocs**.

### 10. Quelle capacité de traitement des transactions (TPS) peut supporter le réseau Core ?

Core blockchain is still evolving and stepping hard on the innovation gear, as of now Core can handle up to **~700** on mainnet with an artificially low gas limit. Cependant, nous prévoyons d'augmenter cette capacité et de rendre le réseau plus efficace pour gérer un volume de transactions bien plus élevé.

### 11. Where can I get the test CORE token from?

To help users get started and allow developers to quickly prototype their dApps, Core Testnet Faucets for both of its testnets, [Faucet for Core Testnet (1114)](https://scan.test2.btcs.network/faucet) and [Faucet for Core Testnet (1115)](https://scan.test.btcs.network/faucet), to distribute Core testnet tokens, tCORE. Follow the detailed guide [here](../Dev-Guide/core-faucet.md), on how to obtain tCORE or tCORE2 from the Core testnet faucet.

### 12. How can I contribute to the Core community?

You can contribute to the Core Community through several different ways:

- **Contribute to our Official Documentation:** Send PR with your changes to GitHub repo of our official documentation and our team will review it accordingly. If deem correct, we will merge them into our official documentation.
- **[Core Wishlist](https://github.com/coredao-org/core-community-contributions):** Build projects for the Core ecosystem. The Core Foundation has laid out a list of project categories that builders can build and contribute to the growth of the Core ecosystem.
- **Builder Incentive Programs:** Core also offers several grants and builder programs for encouraging developement on the Core blockchain. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project) or the [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), you can jumpstart your building journey on the Web3 on Core.
- **Core Commit Program:** Core Foundation offers a 3-month accelerator program for early stage projects to scale up. The [Core Commit Program](https://coredao.org/initiatives/commit-program) not only provides builders with resources and access to 1:1 mentorhsip from some of the biggest minds in the Web3 industry, it also provides them the opportunity of monthly perforamce based rewards and funding from Core Ventures and its network of 100+ VCs.

### 13. Core propose-t-elle des subventions ou des programmes pour les créateurs ?

Core isn't just about grants, it's a gateway to limitless opportunities. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram) or the [Core Commit Program](https://coredao.org/initiatives/commit-program), you'll receive technical guidance, mentorship, and exposure to a vibrant community dedicated to innovating in the DeFi landscape.

### 14. Comment puis-je signaler une arnaque ou un rug pull ?

Pour signaler une arnaque ou un rug pull, vous pouvez fournir un rapport détaillé sur notre [canal Discord](https://discord.com/invite/coredaoofficial).
