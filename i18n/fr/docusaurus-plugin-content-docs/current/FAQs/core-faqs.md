---
sidebar_label: FAQ sur la Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur Core

---

### 1. Où puis-je trouver le code source de Core ?

La Fondation Core encourage le développement de projets open source et, par conséquent, tous les dépôts de code de Core sont accessibles à la communauté. Vous pouvez trouver le code source de Core blockchain et d'autres outils pour développeurs sur le [compte GitHub officiel de Core](https://github.com/coredao-org).

### 2. Quels sont les canaux de communication officiels ?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Discord:** [https://discord.com/invite/coredaoofficial](https://discord.com/invite/coredaoofficial)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) ou [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

<!-- ### 3. How to query the current system parameters?
     -->

### 3. Quelles dApps sont déployées sur le réseau Core ?

Core est conçu pour les créateurs, offrant une plateforme robuste où les diverses applications décentralisées (dApps) peuvent être déployées et prospérer. Soutenant une large gamme de dApps, l'écosystème Core est spécifiquement structuré pour encourager le développement et l'innovation, en faisant un environnement favorable pour les créateurs cherchant à déployer des applications à la pointe de la technologie dans l'espace blockchain. Pour plus de détails, explorez notre [écosystème](https://coredao.org/explore/ecosystem) pour découvrir qui construit quoi.

### 4. Comment connecter MetaMask au réseau Core ?

Suivez notre guide détaillé pour connecter votre portefeuille MetaMask au [Testnet](../Dev-Guide/core-wallet-config.md)et [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md) de Core.

### 5. Quel rôle joue le token CORE dans la sécurisation du réseau Core ?

Le token CORE est essentiel pour la sécurisation du réseau Core grâce à ses rôles dans le staking, la gouvernance, et en tant que token utilitaire. Les utilisateurs peuvent staker des tokens CORE pour devenir validateurs, indispensables à la production de blocs et à la validation des transactions, renforçant ainsi la sécurité du réseau. Son aspect déflationniste, où une partie des frais de transaction et des récompenses de blocs est brûlée, aligne les incitations des parties prenantes en augmentant potentiellement sa valeur et en encourageant la participation active

### 6. En tant que staker de bitcoin, dois-je gérer moi-même un validateur ?

Non, en tant que staker de bitcoin sur le réseau Core, vous n'avez pas besoin de gérer vous-même un validateur. Le système permet aux détenteurs de Bitcoin de participer à la sécurisation du réseau via le staking non-custodial de bitcoins. Cela signifie que vous pouvez staker vos bitcoins sans en céder la garde et sans avoir à vous engager directement dans les processus de validation, tels que la production de blocs ou la validation des transactions. Cette configuration vous permet de générer des rendements sur vos bitcoins tout en contribuant à la sécurité du réseau de manière plus passive.

### 7. Quelles sont les conditions pour le slashing ? Quels frais sont encourus ? Mes tokens stakés (CORE et BTC) seront-ils réduits ?

Sur le réseau Core, le slashing et l'emprisonnement sont des mécanismes pour pénaliser les validateurs en cas de mauvaise conduite.

Slashing fait référence à la réduction des récompenses d'un validateur pour le minage de blocs ou de ses tokens CORE stakés. La gravité de la sanction est proportionnelle à la mauvaise conduite du validateur.

- **Échec de Production de Blocs Pendant Son Tour Désigné**
    - Si un nœud validateur ne parvient pas à miner **50 blocs** consécutifs, les récompenses en tokens CORE accumulées sont entièrement coupées.
    - Si un validateur échoue à miner **150 blocs consécutifs**, il renonce à sa part des récompenses quotidiennes en CORE, perd 10 % de son dépôt en CORE et est emprisonné pendant trois jours, ce qui signifie qu'il ne peut pas être élu au groupe de validateurs
- **Pénalité pour Double Signature**
    - La "double signature" correspond au fait de signer deux blocs différents au même niveau de bloc. Les validateurs pris en flagrant délit de double signature perdent toutes leurs récompenses ainsi que leur dépôt en CORE, et sont ensuite interdits de participer au minage, c'est-à-dire emprisonnés à vie.

### 8. Quel mécanisme de consensus utilise le réseau Core et comment prévient-il les attaques ?

Le réseau Core utilise le mécanisme de consensus Satoshi Plus, qui combine la Preuve de Travail Déléguée (DPoW), la Preuve d'Enjeu Déléguée (DPoS) et le staking non-custodial de BTC pour sécuriser le réseau contre diverses attaques. Ce système réduit les risques d'attaques comme les attaques DDoS grâce à la dispersion des nœuds et à la communication P2P aléatoire. Pour les attaques de consensus, telles que l'attaque des 51 %, il est utilisé un minage en tourniquet et un système hybride de score pour l'élection des validateurs, rendant ces attaques économiquement impraticables. De plus, Core utilise le checkpointing pour geler et sécuriser périodiquement l'historique de la blockchain, empêchant les attaques à longue portée. Pour plus de détails, voir la [Vue d'Ensemble de la Sécurité sur la blockchain Core](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. Quel est le temps moyen de confirmation des transactions sur le réseau Core ?

Le temps moyen de confirmation des transactions sur le réseau Core est de **12 blocs**.

### 10. Quelle capacité de traitement des transactions (TPS) peut supporter le réseau Core ?

Core blockchain est toujours en évolution et mise fortement sur l'innovation. Actuellement, Core peut gérer **~700** sur le mainnet avec une limite de gas artificiellement basse. Cependant, nous prévoyons d'augmenter cette capacité et de rendre le réseau plus efficace pour gérer un volume de transactions bien plus élevé.

### 11. Où puis-je obtenir des tokens de test CORE ?

Pour aider les utilisateurs à démarrer et permettre aux développeurs de prototyper rapidement leurs dApps, Core met à disposition des faucets sur ses deux testnet, [le Faucet Core Testnet (1114)](https://scan.test2.btcs.network/faucet) afin de distribuer des tokens de test, tCORE2. Suivez le guide détaillé [ici](../Dev-Guide/core-faucet.md) pour obtenir des tCORE2 ou des tCORE2 à partir du faucet du testnet.

### 12. Comment puis-je contribuer à la communauté Core ?

Vous pouvez contribuer à la communauté Core de plusieurs manières :

- **Contribuer à notre documentation officielle :** Envoyez une PR avec vos modifications sur le dépôt GitHub de notre documentation officielle. Notre équipe les examinera et, si elles sont correctes, elles seront intégrées.
- **[Liste de souhaits Core](https://github.com/coredao-org/core-community-contributions) :** Créez des projets pour l'écosystème Core. La Core Foundation a dressé une liste de catégories de projets que les créateurs peuvent développer pour contribuer à la croissance de l'écosystème Core.
- **Programmes d'incitation pour les créateurs :** Core propose également plusieurs subventions et programmes pour encourager le développement sur la blockchain Core. Que ce soit via les [subventions de la Core Foundation](https://coredaofoundation.org/fund-your-project), ou le [programme d'incitation pour les créateurs Core Ignition](https://coredao.org/initiatives/incentiveprogram), vous pouvez démarrer votre aventure de création dans le Web3 sur la Core Chain.
- **Programme d’engagement de Core :** La Core Foundation offre un programme d’accélération de 3 mois pour les projets en phase initiale. Le [Programme d'egagement de Core](https://coredao.org/initiatives/commit-program) fournit non seulement des ressources et un mentorat personnalisé 1:1 avec les plus grands experts du Web3, mais il offre aussi la possibilité de bénéficier de récompenses mensuelles basées sur les performances et d’un financement de la part de Core Ventures et de son réseau de plus de 100 VCs.

### 13. Core propose-t-elle des subventions ou des programmes pour les créateurs ?

Core ne se limite pas aux subventions, c'est une porte vers des opportunités infinies. Que ce soit via les [Subventions de la Core Foundation](https://coredaofoundation.org/fund-your-project), [le Programme d'Incitation pour les Créateurs Core Ignition](https://coredao.org/initiatives/incentiveprogram), ou le [Programme d’Engagement de Core](https://coredao.org/initiatives/commit-program), vous recevrez une orientation technique, un mentorat et serez exposé à une communauté dynamique dédiée à l'innovation dans l'écosystème DeFi.

### 14. Comment puis-je signaler une arnaque ou un rug pull ?

Pour signaler une arnaque ou un rug pull, vous pouvez fournir un rapport détaillé sur notre [canal Discord](https://discord.com/invite/coredaoofficial).
