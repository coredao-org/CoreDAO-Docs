---
sidebar_label: Sécurité
hide_table_of_contents: false
sidebar_position: 2
description: Learn about Core's Security Model
---

# Core Security

---

## Aperçu

Core, as a Bitcoin-aligned EVM blockchain, leverages the Satoshi Plus consensus mechanism to uphold an optimal blend of security, decentralization, and scalability. Cette approche tire parti des caractéristiques de sécurité intrinsèques du Bitcoin tout en permettant une fonctionnalité robuste des contrats intelligents et une intégration à la DeFi, faisant de cette plateforme une pionnière dans l'espace blockchain.

## Éléments de sécurité

### 1. Preuve de Travail Déléguée (DPoW) et Preuve d’Enjeu Déléguée (DPoS)

Core incorporates these two powerful mechanisms to form a balanced and secure blockchain environment. The DPoW extends the proven security model of Bitcoin by allowing miners to delegate hashing power to Core, thereby benefiting from Bitcoin’s immense hash rate and security pedigree. On the other hand, DPoS enables both BTC (through non-custodial staking) and CORE token holders to stake their assets with validators on the Core network, promoting decentralized network governance and additional security layers.

### 2. Sécurité des Validateurs

Validators are central to maintaining the integrity and security of the Core blockchain. They are selected based on the combined weight of staked tokens (CORE and BTC) and delegated hash power, so that only the most supported and trusted nodes handle the consensus process. Ce système de double soutien atténue les risques de centralisation et de brèches de sécurité.

### 3. Sécurité via l'incitation

Le mécanisme Satoshi Plus incite à la fois les mineurs et les stakers (CORE et BTC) en leur fournissant des récompenses sous forme de tokens CORE, alignant ainsi leurs intérêts avec la longévité et l'intégrité du réseau. Cette incitation économique aide à maintenir un niveau de participation robuste, crucial pour maintenir un réseau sécurisé et décentralisé.

## Protocoles et Implémentations de Sécurité

1. **Robust Transaction Validation**
   Core validators are responsible for verifying transactions and creating new blocks. The unique combination of DPoW, DPoS, and Non-Custodial BTC Staking involves many stakeholders and significant capital in the election of validators, thus heavily incentivizing the election of trustworthy validators and the honest participation of those validators.

2. **Network Resilience Against Attacks**
   The integration of Bitcoin’s hash power with CORE and BTC staking makes Core exceptionally resilient against various types of attacks. Le coût élevé d'une attaque sur un tel système hybride, combiné au consensus distribué obtenu via des mécanismes délégués, améliore significativement la sécurité du réseau.

3. **Upgradability and Flexibility**
   Unlike traditional blockchains that rely solely on a single form of consensus, Core’s hybrid model allows for adaptability and upgradability. This flexibility is designed to enable the network to evolve in response to emerging security threats or advancements in blockchain technology.

## Attack Vectors and Security Measures in the Core Ecosystem

Core employs a robust security architecture to mitigate potential threats, integrating both technological safeguards and economic incentives within the Satoshi Plus consensus mechanism. Voici une vue d'ensemble des mesures de mitigation pour chaque vecteur d'attaque potentiel.

### Attaques de Double Dépense

- **Description:** La double dépense implique qu'un attaquant tente de dépenser la même monnaie numérique deux fois.
- **Mesures d'atténuation réalisées par:**
  - **Intégration de PoW et PoS:** L'utilisation du réseau de minage du Bitcoin pour son composant PoW ajoute une puissance de hachage significative, ce qui rend la réécriture de la blockchain coûteuse et impraticable. Le composant PoS exige que les validateurs aient des intérêts en jeu, rendant les activités malveillantes financièrement dommageables pour l'attaquant lui-même.
  - **Validation Améliorée des Transactions:** Chaque transaction est validée à la fois par les mineurs et les stakers, fournissant des couches de vérification supplémentaires contre les incohérences ou les fraudes.

### Attaques à 51 %

- **Description:** Ces attaques se produisent lorsqu'une entité unique contrôle plus de la moitié de la puissance de calcul ou de la capacité de staking du réseau.
- **Mesures d'atténuation réalisées par:**
  - **Decentralized Validator Base:** By requiring validators to be backed by substantial staking and hashing contributions, the system assigns a broad distribution of control, diluting the power any single miner or group might have.
  - **Désincitations Économiques:** Le coût associé à l'acquisition des ressources suffisantes pour contrôler plus de la moitié des aspects de minage et de staking du réseau rend de telles attaques économiquement désavantageuses.

### Attaques Sybil

- **Description:** Un attaquant crée de nombreuses fausses identités pour obtenir une influence disproportionnée sur le réseau.
- **Mesures d'atténuation réalisées par:**
  - **Barrières Économiques:** Les exigences de staking et de minage introduisent des barrières financières significatives à l'entrée, décourageant la prolifération d'identités fausses, car chacune doit être soutenue par des ressources réelles substantielles.
  - **Identity Verification via Staking and Mining:** Validators are known entities that must continuously prove their commitment through ongoing mining and staking, so only genuine participants control the network.

### Attaques à Longue Portée

- **Description:** Les attaquants tentent de revenir à un état antérieur de la blockchain en construisant une chaîne alternative à partir d'un point passé.
- **Mesures d'atténuation réalisées par:**
  - **Checkpointing:** Core implements periodic checkpointing where the state of the blockchain at certain intervals is solidified, preventing reversion past these points.
  - **Mécanisme de Finalité:** La blockchain utilise des mécanismes qui confèrent la finalité aux blocs après un certain nombre de confirmations, rendant impossible l'altération de l'histoire de la chaîne au-delà de ces blocs confirmés.

### Alignement des Incitations Économiques

- **Description:** All network participants are economically incentivized to act in the network's best interest.
- **Mesures d'atténuation réalisées par:**
  - **Distribution des Récompenses:** Les mineurs, stakers, et validateurs reçoivent des récompenses qui sont en corrélation avec leur contribution à la sécurité du réseau, alignant leurs incitations économiques avec la santé et la sécurité globales de la blockchain.
  - **Pénalités pour Comportement Malhonnête:** Les validateurs et les mineurs risquent de perdre leurs stakes ou leur potentiel futur gain s'ils sont trouvés coupables d'actes malveillants, ajoutant une couche de dissuasion financière contre les comportements répréhensibles.

### Attaques de Gouvernance

- **Description:** Celles-ci impliquent l'exploitation du mécanisme de gouvernance pour faire passer des propositions défavorables ou malveillantes.
- **Mesures d'atténuation réalisées par:**
  - **Exigences de Consensus Large:** Les propositions nécessitent un large consensus parmi un ensemble diversifié de parties prenantes, minimisant le risque qu'un petit groupe concentré puisse affecter unilatéralement les changements.
  - **Transparent Proposal and Voting Process:** All governance actions are recorded transparently on the blockchain, fascilitating traceability and accountability.

### Vulnérabilités des Contrats Intelligents

- **Description:** Les vulnérabilités dans le code des contrats intelligents peuvent être exploitées pour réaliser des vols ou manipuler des services.
- **Mesures d'atténuation réalisées par:**
  - **Audits de Code et Revues de Sécurité:** Des audits réguliers et approfondis du code des contrats intelligents par des firmes de sécurité indépendantes aident à identifier et rectifier les vulnérabilités potentielles.
  - **Bug Bounty Programs:** Encouraging the community and security researchers to find and report bugs, so that many potential exploits are caught early by offering rewards for their discovery.

## Conclusion

Core's security strategy is deeply integrated with its unique consensus mechanism, Satoshi Plus, which leverages the strengths of both Bitcoin's mining capabilities and the staking mechanisms prevalent in modern blockchains. Furthermore, Core's security strategy is multi-faceted, addressing potential vulnerabilities through technical safeguards, economic incentives, and community-driven processes. Cette approche complète renforce non seulement la résilience du réseau contre les attaques, mais elle favorise également un écosystème robuste où les parties prenantes sont motivées à maintenir et protéger l'intégrité du réseau. As Core continues to develop and integrate new features, its foundational focus on security remains a critical component in its design and operation, so that it remains a secure and trustworthy platform for users and developers alike.
