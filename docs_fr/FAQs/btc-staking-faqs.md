---
sidebar_label: FAQ sur le staking BTC non-custodial
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking FAQs

---

### 1. What is Non-Custodial Bitcoin Staking on the Core network?

Core provides Bitcoin holders with a risk free and transparent opportunity to lock up/stake their Bitcoin on the Bitcoin Network without giving up custody of their Bitcoin assets, in order to participate in Core Chain’s security and earn CORE rewards in return.

### 2. How does Non-Custodial Bitcoin Staking work?

Avec le staking non-custodial de bitcoins, le protocole de la Core Chain intègre les détenteurs de bitcoins en tant que troisième partie du consensus Satoshi Plus. La méthodologie de la Core Chain pour intégrer le staking de bitcoins repose sur le [verrouillage temporel CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). Le CLTV est une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de la transaction ne peut être dépensée qu'après un certain délai. Ce délai peut être défini en termes de date et heure spécifiques ou de hauteur de bloc. Plutôt que de céder la garde de leurs bitcoins à une tierce partie, les stakers sur la Core Chain n'ont qu'à placer leurs bitcoins dans des CLTV en tant que partie d'une transaction, et cette transaction peut être conçue pour restituer les fonds une fois le délai écoulé. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs Bitcoin dans leurs blocs délégués :

1. L'adresse du validateur Core auquel le staker souhaite déléguer ses bitcoins.
2. L'adresse à laquelle le staker souhaite que les récompenses en tokens CORE soient envoyées.

Les stakers de bitcoins gagnent des rendements sous forme de récompenses en tokens CORE sur leurs bitcoins inactifs. Le résultat final est que des milliards de dollars de valeur Bitcoin sous-utilisée deviendront productifs, rémunérant les stakers tout en élargissant l'utilité de Bitcoin.

### 3. How does non-custodial Bitcoin staking maintain security and trust?

By allowing users to stake their bitcoins without moving them off the Bitcoin blockchain, non-custodial Bitcoin staking avoids introducing new trust assumptions. Il tire parti de la sécurité et de la confiance inhérentes à l'infrastructure établie du Bitcoin, garantissant une sécurité élevée pour les actifs stakés.

### 4. What are the advantages of Non-Custodial Bitcoin Staking?

1. **Tailored for Long-Term Holders and Institutions:** Designed for those who prefer keeping their bitcoins on the secure Bitcoin blockchain, non-custodial Bitcoin staking offers a way to earn rewards during a specified holding period without frequent transactions.

2. **Pas de nouvelles hypothèses de confiance :** Les utilisateurs peuvent staker leurs bitcoins directement sur la blockchain Bitcoin, maintenant la haute sécurité et la confiance inhérentes à l'infrastructure robuste de Bitcoin, sans avoir à transférer des actifs hors chaîne.

3. **Opportunity to Earn Passive Rewards:** Bitcoin stakers can earn CORE token rewards in exchange for their contributions to the Core Chain's consensus, enhancing the blockchain's functionality and security.

4. **Self-Custody and Security:** Bitcoin Staking is 100% secure with self-custody; users execute staking transactions themselves on the Bitcoin network, ensuring their Bitcoin does not leave the blockchain.

5. **Use of Native Cryptographic Features:** Bitcoin staking on Core utilizes battle-tested cryptographic features of the Bitcoin network, making it safer than non-native solutions.

6. **Flexibilité dans la construction des transactions :** Les utilisateurs ont la flexibilité de créer leurs transactions de staking en utilisant l'outil de leur choix, réduisant ainsi considérablement le risque d'attaques de la chaîne d'approvisionnement via des bibliothèques tierces.

### 5) Are there any specific requirements to participate in Non-Custodial Bitcoin Staking?

Yes, participants must stake a minimum of **0.01 Bitcoin for at least 10 days**. Cette exigence minimale le rend accessible à un large éventail de détenteurs de bitcoins.

### 6. Pourquoi l'adresse de staking fournie diffère-t-elle de votre adresse Bitcoin d'origine ?

L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et votre sécurité sur vos actifs. Vos bitcoins restent stockés en toute sécurité dans votre portefeuille d'origine, sans être affectés par le staking. Bien que les actifs stakés puissent ne pas être visibles dans certaines versions de portefeuille, vous conservez l'entière propriété.

You can view your staked funds by searching the staking address on the any Bitcoin explorer like [Mempool](https://mempool.space/). Nous travaillons activement pour rendre les actifs stakés visibles dans tous les portefeuilles pris en charge, notamment via les versions en ligne de commande.

### 7. Does Core Chain provide any hardware wallet support for Non-Custodial Bitcoin Staking?

At present, Non-Custodial Bitcoin Staking does not support hardware wallets due to technical constraints. Néanmoins, nous explorons constamment des moyens d'améliorer la compatibilité avec divers types de portefeuilles, en donnant la priorité à la sécurité et à la commodité des utilisateurs.

### 8. Quelles sont les considérations importantes à prendre en compte avant de verrouiller vos actifs pour le staking ?

- **Expiration du verrouillage temporel :** Lorsque vous verrouillez vos bitcoins pour le staking, ils ne sont pas accessibles avant la fin de la période de staking.
- **Choisir judicieusement :** Nous vous conseillons de choisir votre période de verrouillage en fonction de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.
- **Staked Amount Verification:** currently due to some technical complexities it is possible that your staked asset is not visible in your wallet when checked through CLI, however, you can easily verify that you have the complete ownership of your staked assets from the [Core Chain Non-Custodial Bitcoin Staking Website](https://stake.coredao.org/).

### 9. Pourquoi mon actif staké n'est-il pas visible dans mon portefeuille ?

Currently due to some technical complexities it is possible that your staked asset is not visible in your wallet when checked through CLI, however, you can easily verify that you have the complete ownership of your staked assets from the [Core Chain Non-Custodial Bitcoin Staking Website](https://stake.coredao.org/).

### 10. How is the security of non-custodial Bitcoin staking ensured?

Core Chain's protocol and non-custodial Bitcoin staking’s security have been thoroughly audited by [Halborn](https://www.halborn.com/), a SOC2 Type 1 compliant firm renowned for its smart contract security expertise and [trusted by leading blockchain platforms](https://www.halborn.com/about/who-trusts-us) like Ava Labs, Solana, and Polygon, as well as DeFi projects like Sushiswap. Review Audit Reports of Core Chain's protocol and non-custodial Bitcoin staking by leading firms [here](../Learn/audit.md).
