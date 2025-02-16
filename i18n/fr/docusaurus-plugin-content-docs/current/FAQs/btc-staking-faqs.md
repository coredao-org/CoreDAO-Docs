---
sidebar_label: FAQ sur le staking BTC non-custodial
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Staking de Bitcoin Non-Custodial

---

### 1\. Qu'est-ce que le Staking de Bitcoin Non-Custodial sur le réseau Core ?

Core offre aux détenteurs de Bitcoin une opportunité sans risque et transparente de verrouiller/staker leurs Bitcoins sur le réseau Bitcoin sans renoncer à la garde de leurs actifs Bitcoin. En retour, ils peuvent participer à la sécurité de la blockchain Core via Satoshi Plus et gagner des récompenses en CORE.

### 2\. Comment Fonctionne le Staking de Bitcoin Non-Custodial ?

Grâce au staking de Bitcoin non custodial, le protocole de Core intègre les détenteurs de Bitcoin à son mécanisme de consensus, Satoshi Plus. La méthodologie de Core pour intégrer le staking de Bitcoin se concentre sur le [timelock CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de la transaction ne peut pas être dépensée avant qu'un certain temps ne soit écoulé. Pour plus de détails sur le fonctionnement du Staking de Bitcoin Non-Custodial, référez-vous [ici](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.1i3v4ioboaxe).

### 3\. Quels sont les avantages du Staking de Bitcoin Non-Custodial ?

1. **Adapté aux détenteurs à long terme et aux institutions:** Conçu pour ceux qui préfèrent conserver leurs bitcoins sur la blockchain sécurisée de Bitcoin, le staking de Bitcoin non-custodial permet de gagner des récompenses pendant une période de détention spécifiée sans transactions fréquentes.
2. **Aucune nouvelle hypothèse de confiance :** Les utilisateurs peuvent staker leurs bitcoins directement sur la blockchain Bitcoin, maintenant la haute sécurité et la confiance inhérentes à l'infrastructure robuste de Bitcoin sans transférer les actifs hors chaîne.
3. **Possibilité de gagner des récompenses passives :** Les stakers de Bitcoin peuvent gagner des récompenses en tokens CORE en échange de leur contribution au consensus de la blockchain Core, améliorant ainsi la fonctionnalité et la sécurité de la blockchain.
4. **Autogestion et sécurité :** Le staking de Bitcoin est 100 % sécurisé avec autogestion ; les utilisateurs exécutent eux-mêmes les transactions de staking sur le réseau Bitcoin, garantissant que leurs Bitcoin ne quittent pas la blockchain.
5. **Utilisation des fonctionnalités cryptographiques natives :** Le staking de Bitcoin sur Core utilise des fonctionnalités cryptographiques éprouvées du réseau Bitcoin, ce qui le rend plus sûr que les solutions non natives.
6. **Flexibilité dans la création des transactions :** Les utilisateurs peuvent construire leurs transactions de staking en utilisant l'outil de leur choix, réduisant ainsi considérablement le risque d'attaques de la chaîne d'approvisionnement via des bibliothèques tierces.

### 4\. Comment le staking de Bitcoin Non-Custodial maintient-il la sécurité et la confiance ?

Le staking de Bitcoin Non-Custodial de Core évite d'introduire de nouvelles hypothèses de confiance en permettant aux utilisateurs de staker leurs bitcoins sans les déplacer de la blockchain Bitcoin. Il exploite la sécurité et la confiance inhérentes à l'infrastructure établie de Bitcoin, maintenant une haute sécurité pour les actifs stakés.

### 5\. Quel est le rôle de Core dans le processus de staking de Bitcoin Non-Custodial ?

Il est noté ici qu'aucun actif n'est déplacé vers la blockchain Core ou vers un tiers de confiance ou des smart contrats. Au lieu de cela, les actifs des utilisateurs restent verrouillés sur le réseau Bitcoin sous la propriété complète de l'utilisateur. Du point de vue de Core, seuls les relayeurs surveillent le réseau Bitcoin pour toute transaction de staking de Bitcoin. Lors de la détection, celles-ci sont récupérées, et seules les transactions valides sont transmises au moteur de consensus et à l'accumulation des récompenses de staking. Avec la mise à niveau Fusion, les utilisateurs devront manuellement réclamer leurs récompenses de staking sous forme de tokens CORE.

### 6\. Que se passe-t-il pour mon actif si le validateur auquel j'ai délégué mes bitcoins ou la blockchain Core tombe en panne ?

Déléguer des bitcoins pour des récompenses de staking via le staking de Bitcoin Non-Custodial de Core ne nécessite aucun type de transfert d'actifs ou de pontage (bridging) vers la blockchain Core ou vers des validateurs. Même si les validateurs ou la blockchain Core tombent en panne, les actifs des utilisateurs restent sous leur entière garde et peuvent être récupérés après l'expiration du timelock sur le réseau Bitcoin.

### 7\. Quels sont les défis associés aux courts délais de verrouillage sur Bitcoin ?

Le timelock CLTV est une fonctionnalité native du réseau Bitcoin. Un utilisateur peut verrouiller n'importe quel montant de bitcoins pour la période désirée grâce à cette fonctionnalité. Cependant, avec des périodes de verrouillage plus courtes (par exemple, 10 minutes) en raison des congestions du réseau et des temps de bloc du réseau Bitcoin, ces transactions peuvent ne pas être traitées assez rapidement, entraînant des retards dans le rachat du Bitcoin. Notez que pour qu’une transaction de staking de Bitcoin soit valide, les exigences minimales doivent être respectées.

### 8\. Y a-t-il des exigences spécifiques pour participer au Staking de Bitcoin Non-Custodial ?

Les utilisateurs doivent se conformer aux exigences suivantes pour qu'une transaction de staking de Bitcoin soit considérée comme valide.

- Les utilisateurs doivent s'assurer que la transaction est envoyée à leur propre adresse.
- En utilisant la fonctionnalité native de timelock de Bitcoin, spécifiez le montant à verrouiller destiné à être délégué au validateur sur la blockchain Core comme sortie de la transaction.
- **_Des exigences minimales existent_** pour le **montant** de BTC pouvant être mis en staking. Les utilisateurs doivent staker au moins **0,01 Bitcoin** (hors frais de transaction).
- La transaction doit également contenir une sortie op\_return spécifiant
  - L'adresse du validateur Core auquel le staker souhaite déléguer son Bitcoin.
  - L'adresse à laquelle le staker souhaite que ses récompenses en tokens CORE soient envoyées.

### 9\. Pourquoi l'adresse de staking fournie diffère-t-elle de votre adresse Bitcoin d'origine ?

L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et votre sécurité sur vos actifs. Vos bitcoins restent stockés en toute sécurité dans votre portefeuille d'origine, sans être affectés par le staking. Bien que les actifs stakés puissent ne pas être visibles dans certaines versions de portefeuille, vous conservez l'entière propriété.

Vous pouvez voir vos fonds stakés en recherchant l'adresse de staking sur n'importe quel explorateur Bitcoin comme [Mempool](https://mempool.space/). Nous travaillons activement pour rendre les actifs stakés visibles dans tous les portefeuilles pris en charge, en particulier via les versions en ligne de commande.

### 10\. Core propose-t-il une prise en charge des portefeuilles matériels pour le Staking de Bitcoin Non-Custodial ?

En raison de contraintes techniques, le Staking de Bitcoin Non-Custodial ne prend pas actuellement en charge les portefeuilles matériels. Néanmoins, nous explorons constamment des moyens d'améliorer la compatibilité avec divers types de portefeuilles, en donnant la priorité à la sécurité et à la commodité pour nos utilisateurs.

### 11\. Quelles sont les considérations importantes pour les Périodes de Verrouillage avant de staker vos actifs ?

- **Expiration du délai de verrouillage :** Lorsque vous verrouillez votre Bitcoin pour le staking, il est inaccessible jusqu'à la fin de la période de staking.
- **Choisir judicieusement :** Vous devriez sélectionner votre période de verrouillage de manière réfléchie, en tenant compte de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.
- **Vérification du montant staké :** En raison de certaines complexités techniques, il est possible que votre actif staké ne soit pas visible dans votre portefeuille lorsque vous le vérifiez via l'interface en ligne de commande. Cependant, vous pouvez facilement vérifier que vous avez la propriété complète de vos actifs stakés depuis le [Site Officiel de Staking de Core](https://stake.coredao.org/). De plus, les délais dus au temps de bloc, au nombre de confirmations de blocs requises et à la congestion du réseau sur le réseau Bitcoin peuvent entraîner des retards dans la confirmation de vos transactions, rendant vos actifs invisibles dans vos portefeuilles.

### 12\. Pourquoi mon actif staké n'est-il pas visible dans mon portefeuille ?

En raison de complexités techniques, il est possible que votre actif staké ne soit pas visible dans votre portefeuille lorsque vous le vérifiez via l'interface en ligne de commande. Cependant, vous pouvez facilement vérifier que vous avez la propriété complète de vos actifs stakés depuis le [Site Officiel de Staking de Core](https://stake.coredao.org/). De plus, les délais dus au temps de bloc, au nombre de confirmations de blocs requises et à la congestion du réseau sur le réseau Bitcoin peuvent entraîner des retards dans la confirmation de vos transactions, rendant vos actifs invisibles dans vos portefeuilles.

### 13\. Comment la sécurité du staking de Bitcoin non-custodial est-elle assurée ?

[Halborn](https://www.halborn.com/), une entreprise conforme à la norme SOC2 Type 1, renommée pour son expertise en sécurité des smart contrats et [de confiance par des plateformes blockchain de premier plan](https://www.halborn.com/about/who-trusts-us) comme Ava Labs, Solana et Polygon, ainsi que des projets DeFi comme Sushiswap, a minutieusement audité le protocole de Core et la sécurité du staking de Bitcoin non-custodial. Vous pouvez consulter les rapports d'audit sur le protocole de Core et le staking de Bitcoin non-custodial par des entreprises leaders [ici](https://docs.coredao.org/docs/Learn/audit).

### 14\. Que devriez-vous faire si le bouton _`Redeem BTC`_ ne fonctionne pas sur le site de staking ?

Vous pouvez récupérer vos BTC en cliquant sur le bouton `Redeem` sur le [Site officiel de Staking de Core](https://stake.coredao.org/). Si le bouton ne fonctionne pas, essayez de vider le cache de votre navigateur et réessayez. Si vous rencontrez toujours des problèmes, veuillez contacter le [Forum des développeurs de Core](https://forum.coredao.org/).
