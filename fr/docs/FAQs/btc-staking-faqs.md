---
sidebar_label: FAQ sur le staking BTC non-custodial
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Staking de Bitcoin Non-Custodial

---

### 1. Qu'est-ce que le Staking de Bitcoin Non-Custodial sur le réseau Core ?

Core offre aux détenteurs de Bitcoin une opportunité sans risque et transparente de verrouiller/staker leurs Bitcoins sur le réseau Bitcoin sans renoncer à la garde de leurs actifs Bitcoin, afin de participer à la sécurité de la Core Chain et de gagner des récompenses CORE en retour.

### 2. Comment Fonctionne le Staking de Bitcoin Non-Custodial ?

Avec le staking non-custodial de bitcoins, le protocole de la Core Chain intègre les détenteurs de bitcoins en tant que troisième partie du consensus Satoshi Plus. La méthodologie de la Core Chain pour intégrer le staking de bitcoins repose sur le [verrouillage temporel CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). Le CLTV est une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de la transaction ne peut être dépensée qu'après un certain délai. Ce délai peut être défini en termes de date et heure spécifiques ou de hauteur de bloc. Plutôt que de céder la garde de leurs bitcoins à une tierce partie, les stakers sur la Core Chain n'ont qu'à placer leurs bitcoins dans des CLTV en tant que partie d'une transaction, et cette transaction peut être conçue pour restituer les fonds une fois le délai écoulé. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs Bitcoin dans leurs blocs délégués :

1. L'adresse du validateur Core auquel le staker souhaite déléguer ses bitcoins.
2. L'adresse à laquelle le staker souhaite que les récompenses en tokens CORE soient envoyées.

Les stakers de bitcoins gagnent des rendements sous forme de récompenses en tokens CORE sur leurs bitcoins inactifs. Le résultat final est que des milliards de dollars de valeur Bitcoin sous-utilisée deviendront productifs, rémunérant les stakers tout en élargissant l'utilité de Bitcoin.

### 3. Comment le staking de Bitcoin non-custodial maintient-il la sécurité et la confiance ?

En permettant aux utilisateurs de staker leurs bitcoins sans les déplacer de la blockchain Bitcoin, le staking de Bitcoin non-custodial évite l'introduction de nouvelles hypothèses de confiance. Il tire parti de la sécurité et de la confiance inhérentes à l'infrastructure établie du Bitcoin, garantissant une sécurité élevée pour les actifs stakés.

### 4. Quels sont les avantages du Staking de Bitcoin Non-Custodial ?

1. **Adapté aux détenteurs à long terme et aux institutions:** Conçu pour ceux qui préfèrent conserver leurs bitcoins sur la blockchain sécurisée de Bitcoin, le staking de Bitcoin non-custodial permet de gagner des récompenses pendant une période de détention spécifiée sans transactions fréquentes.

2. **Pas de nouvelles hypothèses de confiance :** Les utilisateurs peuvent staker leurs bitcoins directement sur la blockchain Bitcoin, maintenant la haute sécurité et la confiance inhérentes à l'infrastructure robuste de Bitcoin, sans avoir à transférer des actifs hors chaîne.

3. **Possibilité de gagner des récompenses passives :** Les stakers de Bitcoin peuvent gagner des récompenses en tokens CORE en échange de leur contribution au consensus de la Core Chain, améliorant ainsi la fonctionnalité et la sécurité de la blockchain.

4. **Autogestion et sécurité :** Le staking de Bitcoin est 100 % sécurisé avec autogestion ; les utilisateurs exécutent eux-mêmes les transactions de staking sur le réseau Bitcoin, garantissant que leurs Bitcoin ne quittent pas la blockchain.

5. **Utilisation des fonctionnalités cryptographiques natives :** Le staking de Bitcoin sur Core utilise des fonctionnalités cryptographiques éprouvées du réseau Bitcoin, ce qui le rend plus sûr que les solutions non natives.

6. **Flexibilité dans la construction des transactions :** Les utilisateurs ont la flexibilité de créer leurs transactions de staking en utilisant l'outil de leur choix, réduisant ainsi considérablement le risque d'attaques de la chaîne d'approvisionnement via des bibliothèques tierces.

### 6) Pourquoi l'adresse de staking fournie diffère-t-elle de votre adresse Bitcoin d'origine ?

Oui, les participants doivent staker un minimum de **0,01 Bitcoin pour au moins 10 jours**. Cette exigence minimale le rend accessible à un large éventail de détenteurs de bitcoins.

### 11. What to do if `Redeem BTC` button is not working on the staking website?

L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et votre sécurité sur vos actifs. Vos bitcoins restent stockés en toute sécurité dans votre portefeuille d'origine, sans être affectés par le staking. Bien que les actifs stakés puissent ne pas être visibles dans certaines versions de portefeuille, vous conservez l'entière propriété.

Vous pouvez visualiser vos fonds stakés en recherchant l'adresse de staking sur n'importe quel explorateur de Bitcoin comme [Mempool](https://mempool.space/). Nous travaillons activement pour rendre les actifs stakés visibles dans tous les portefeuilles pris en charge, notamment via les versions en ligne de commande.

### 7. La Core Chain prend-elle en charge les portefeuilles physique pour le staking de Bitcoin non-custodial ?

Actuellement, le Staking de Bitcoin Non-Custodial ne prend pas en charge les portefeuilles matériels en raison de contraintes techniques. Néanmoins, nous explorons constamment des moyens d'améliorer la compatibilité avec divers types de portefeuilles, en donnant la priorité à la sécurité et à la commodité des utilisateurs.

### 8. Quelles sont les considérations importantes à prendre en compte avant de verrouiller vos actifs pour le staking ?

- **Expiration du verrouillage temporel :** Lorsque vous verrouillez vos bitcoins pour le staking, ils ne sont pas accessibles avant la fin de la période de staking.
- **Choisir judicieusement :** Nous vous conseillons de choisir votre période de verrouillage en fonction de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.
- **Vérification des montants stakés :** Actuellement, en raison de certaines complexités techniques, il est possible que vos actifs stakés ne soient pas visibles dans votre portefeuille via la CLI, mais vous pouvez facilement vérifier que vous avez la pleine propriété de vos actifs stakés sur le [site Web de staking de Bitcoin non-custodial de la Core Chain](https://stake.coredao.org/).

### 9. Pourquoi mon actif staké n'est-il pas visible dans mon portefeuille ?

Actuellement, en raison de certaines complexités techniques, il est possible que votre actif staké ne soit pas visible dans votre portefeuille via la CLI, mais vous pouvez facilement vérifier que vous avez la pleine propriété de vos actifs stakés sur le [site Web de staking de Bitcoin non-custodial de la Core Chain](https://stake.coredao.org/).

### 10. Comment la sécurité du staking de Bitcoin non-custodial est-elle assurée ?

Le protocole de la Core Chain et la sécurité du staking de Bitcoin non-custodial ont été audités en profondeur par [Halborn](https://www.halborn.com/), une société conforme à la norme SOC2 Type 1, réputée pour son expertise en matière de sécurité des contrats intelligents et de [confiance par des plateformes blockchain](https://www.halborn.com/about/who-trusts-us) comme Ava Labs, Solana, et Polygon, ainsi que des projets DeFi comme Sushiswap. Consultez les rapports d'audit du protocole de la Core Chain et du staking de Bitcoin non-custodial par des entreprises de premier plan [ici](../Learn/audit.md).

### 11. What to do if `Redeem BTC` button is not working on the staking website?

You can Redeem your BTC back by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). If incase the button is not working try clearing your browser cache and re-try again. If you further face issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).
