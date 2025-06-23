---
sidebar_label: FAQ sur la Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur Core

---

### 1. Où puis-je trouver le code source de Core blockchain?

La Fondation Core encourage le développement de projets open source et, par conséquent, tous les dépôts de code de Core sont accessibles à la communauté. Vous pouvez trouver le code source de Core blockchain et d'autres outils pour développeurs sur le [compte GitHub officiel de Core](https://github.com/coredao-org).

### 2. Quels sont les canaux de communication officiels ?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Discord:** [https://discord.com/invite/coredaoofficial](https://discord.com/invite/coredaoofficial)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) ou [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

### 3. Quelles dApps sont déployées sur le réseau Core ?

Core est conçu pour les créateurs, offrant une plateforme robuste où les diverses applications décentralisées (dApps) peuvent être déployées et prospérer. Soutenant une large gamme de dApps, l'écosystème Core est spécifiquement structuré pour encourager le développement et l'innovation, en faisant un environnement favorable pour les créateurs cherchant à déployer des applications à la pointe de la technologie dans l'espace blockchain. Pour plus de détails, explorez notre [écosystème](https://coredao.org/explore/ecosystem) pour découvrir qui construit quoi.

### 4. Comment connecter MetaMask au réseau Core ?

Suivez notre guide détaillé pour connecter votre portefeuille MetaMask au [Testnet](../Dev-Guide/core-wallet-config.md)et [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md) de Core.

### 5. Quel rôle joue le token CORE dans la sécurisation du réseau Core ?

Le token CORE est essentiel pour la sécurisation du réseau Core grâce à ses rôles dans le staking, la gouvernance, et en tant que token utilitaire. Les utilisateurs peuvent staker des tokens CORE pour devenir validateurs, indispensables à la production de blocs et à la validation des transactions, renforçant ainsi la sécurité du réseau. Son aspect déflationniste, où une partie des frais de transaction et des récompenses de blocs est brûlée, aligne les incitations des parties prenantes en augmentant potentiellement sa valeur et en encourageant la participation active.

### 6. En tant que staker de bitcoin, dois-je gérer moi-même un validateur ?

Non, en tant que staker de bitcoin sur le réseau Core, vous n'avez pas besoin de gérer vous-même un validateur. Le système permet aux détenteurs de Bitcoin de participer à la sécurisation du réseau via le staking non-custodial de bitcoins. Cela signifie que vous pouvez staker vos bitcoins sans en céder la garde et sans avoir à vous engager directement dans les processus de validation, tels que la production de blocs ou la validation des transactions. Cette configuration vous permet de générer des rendements sur vos bitcoins tout en contribuant à la sécurité du réseau de manière plus passive.

### 7. Quelles sont les conditions pour le slashing ? Quels frais sont encourus ? Mes tokens stakés (CORE et BTC) seront-ils réduits ?

Sur le réseau Core, le slashing et l'emprisonnement sont des mécanismes pour pénaliser les validateurs en cas de mauvaise conduite.

Slashing fait référence à la réduction des récompenses d'un validateur pour le minage de blocs ou de ses tokens CORE stakés. La gravité de la pénalité de slashing est proportionnelle à la gravité du comportement fautif du validateur.

- **Échec de Production de Blocs Pendant Son Tour Désigné**
    - Si un nœud validateur échoue à miner **50 blocks** d'affilée, les récompenses en jetons CORE que le validateur a accumulées jusqu'à présent sont complètement réduites à zéro.
    - Si un validateur échoue à miner **150 blocs consécutifs**, il renonce à sa part des récompenses quotidiennes en CORE, perd 10 % de son dépôt en CORE et est emprisonné pendant trois jours, ce qui signifie qu'il ne peut pas être élu au groupe de validateurs
- **Pénalité pour Double Signature**
    - La "double signature" correspond au fait de signer deux blocs différents au même niveau de bloc. Les validateurs pris en flagrant délit de double signature perdent toutes leurs récompenses ainsi que leur dépôt en CORE, et sont ensuite interdits de participer au minage, c'est-à-dire emprisonnés à vie.

### 8. Quel mécanisme de consensus utilise le réseau Core et comment prévient-il les attaques ?

Le réseau Core utilise le mécanisme de consensus Satoshi Plus, qui combine la Preuve de Travail Déléguée (DPoW), la Preuve d'Enjeu Déléguée (DPoS) et le staking non-custodial de BTC pour sécuriser le réseau contre diverses attaques. Ce système réduit les risques d'attaques comme les attaques DDoS grâce à la dispersion des nœuds et à la communication P2P aléatoire. Pour les attaques de consensus, telles que l'attaque des 51 %, il est utilisé un minage en tourniquet et un système hybride de score pour l'élection des validateurs, rendant ces attaques économiquement impraticables. De plus, Core utilise le checkpointing pour geler et sécuriser périodiquement l'historique de la blockchain, empêchant les attaques à longue portée. Pour plus de détails, voir la [Vue d'Ensemble de la Sécurité sur la blockchain Core](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. Quel est le temps moyen de confirmation des transactions sur le réseau Core ?

Le temps moyen de confirmation des transactions sur le réseau Core est de **12 blocs**.

### 10. Quelle capacité de traitement des transactions (TPS) peut supporter le réseau Core ?

La blockchain Core continue d'évoluer et d'innover à un rythme accéléré. À l'heure actuelle, Core peut gérer jusqu'à environ **~700** transactions sur le mainnet avec une limite de gaz artificiellement basse. Cependant, nous prévoyons d'augmenter cette capacité et de rendre le réseau plus efficace pour gérer un volume de transactions bien plus élevé).

### 11. Où puis-je obtenir des jetons de test CORE ?

Pour aider les utilisateurs à démarrer et permettre aux développeurs de prototyper rapidement leurs dApps, Core fournit des robinets de testnet pour Core Testnet2 (1114)(https://scan.test2.btcs.network/faucet), pour la distribution de jetons de testnet, tCORE2. Suivez le guide détaillé [ici](../Dev-Guide/core-faucet.md) pour obtenir des tCORE2 à partir du faucet du testnet.

### 12. Comment puis-je contribuer à la communauté Core ?

Vous pouvez contribuer à la communauté Core de plusieurs manières :

- **Contribute to Our Official Documentation:** Send a pull request with your changes to the GitHub repository of our official documentation, and our team will review them accordingly. If deemed correct, we will merge them into our official documentation.
- **[Liste de souhaits Core](https://github.com/coredao-org/core-community-contributions) :** Créez des projets pour l'écosystème Core. The Core Foundation has outlined a list of project categories that builders can contribute to, fostering the growth of the Core ecosystem.
- **Builder Incentive Programs:** Core also offers builder support and incentive programs for encouraging development on the Core blockchain. Whether through [Core Starter Program](https://coredaofoundation.org/fund-your-project) or [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), you can jumpstart your building journey on the Web3 on Core.
- **Core Commit Program:** The Core Foundation offers a 3-month accelerator program designed to scale up early-stage projects. The [Core Commit Program](https://coredao.org/initiatives/commit-program) not only provides builders with resources and access to one-on-one mentorship from some of the biggest minds in the Web3 industry, but it also offers them the opportunity for monthly performance-based rewards and funding from Core Ventures and its network of over 100 VCs.

### 13. Does Core offer any builder support and incentive programs?

Core ne se limite pas aux subventions, c'est une porte vers des opportunités infinies. Whether through [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), [Core Starter Program](https://coredaofoundation.org/fund-your-project), and the [Core Commit Program](https://coredao.org/initiatives/commit-program), you'll receive technical guidance, mentorship, and exposure to a vibrant community dedicated to innovating in the DeFi landscape.

### 14. How can I report a scam or rug pull?

To report a scam/rug pull, you can provide a detailed report on our [Discord channel](https://discord.com/invite/coredaoofficial).