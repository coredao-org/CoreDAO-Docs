---
sidebar_label: FAQ sur le staking BTC non-custodial
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Staking de Bitcoin Non-Custodial

---

### 1. Qu'est-ce que le Staking de Bitcoin Non-Custodial sur le réseau Core ?

Core provides Bitcoin holders with a risk-free and transparent opportunity to lock up or stake their Bitcoin on the Bitcoin Network without relinquishing custody of their Bitcoin assets. In return, they can participate in the Core blockchain’s security through Satoshi Plus and earn CORE rewards.

### 2. Comment Fonctionne le Staking de Bitcoin Non-Custodial ?

Grâce au staking de Bitcoin non custodial, le protocole de Core intègre les détenteurs de Bitcoin à son mécanisme de consensus, Satoshi Plus. La méthodologie de Core pour intégrer le staking de Bitcoin se concentre sur le [timelock CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de la transaction ne peut pas être dépensée avant qu'un certain temps ne soit écoulé. For more details on how Self-Custodial Bitcoin Staking works, refer [here](../stake-and-delegate/btc-staking/btc-staking-working.md).

### 3. Quels sont les avantages du Staking de Bitcoin Non-Custodial ?

1. **Tailored for Long-Term Holders and Institutions:** Designed for those who prefer to keep their bitcoins on the secure Bitcoin blockchain, Self-Custodial Bitcoin Staking offers a way to earn rewards during a specified holding period without requiring frequent transactions.
2. **Aucune nouvelle hypothèse de confiance :** Les utilisateurs peuvent staker leurs bitcoins directement sur la blockchain Bitcoin, maintenant la haute sécurité et la confiance inhérentes à l'infrastructure robuste de Bitcoin sans transférer les actifs hors chaîne.
3. **Possibilité de gagner des récompenses passives :** Les stakers de Bitcoin peuvent gagner des récompenses en tokens CORE en échange de leur contribution au consensus de la blockchain Core, améliorant ainsi la fonctionnalité et la sécurité de la blockchain.
4. **Self-Custody and Security:** Bitcoin Staking is 100% secure with self-custody; users execute staking transactions themselves on the Bitcoin network, ensuring their Bitcoin remains on the blockchain.
5. **Utilisation des fonctionnalités cryptographiques natives :** Le staking de Bitcoin sur Core utilise des fonctionnalités cryptographiques éprouvées du réseau Bitcoin, ce qui le rend plus sûr que les solutions non natives.
6. **Flexibilité dans la création des transactions :** Les utilisateurs peuvent construire leurs transactions de staking en utilisant l'outil de leur choix, réduisant ainsi considérablement le risque d'attaques de la chaîne d'approvisionnement via des bibliothèques tierces.

### 4) Comment le staking de Bitcoin Non-Custodial maintient-il la sécurité et la confiance ?

Core's Self-Custodial Bitcoin staking eliminates the need to introduce new trust assumptions by enabling users to stake their bitcoins without transferring them off the Bitcoin blockchain. Il exploite la sécurité et la confiance inhérentes à l'infrastructure établie de Bitcoin, maintenant une haute sécurité pour les actifs stakés.

### 5. Quel est le rôle de Core dans le processus de staking de Bitcoin Non-Custodial ?

Il est noté ici qu'aucun actif n'est déplacé vers la blockchain Core ou vers un tiers de confiance ou des contrats intelligents. Au lieu de cela, les actifs des utilisateurs restent verrouillés sur le réseau Bitcoin sous la propriété complète de l'utilisateur. Du point de vue de Core, seuls les relayeurs surveillent le réseau Bitcoin pour toute transaction de staking de Bitcoin. Upon detection, these are selected, and only the valid ones are passed down to the consensus engine for the accrual of staking rewards. With the Fusion Upgrade, users would have to manually claim their staking rewards in the form of CORE tokens.

### 6. What happens to my asset in the validator I delegated my Bitcoins to, or the Core blockchain goes down?

Déléguer des bitcoins pour des récompenses de staking via le staking de Bitcoin Non-Custodial de Core ne nécessite aucun type de transfert d'actifs ou de pontage (bridging) vers la blockchain Core ou vers des validateurs. Even if the validators or the Core blockchain go down, users' assets remain in their complete custody and can be redeemed after the timelock expires on the Bitcoin network.

### 7. Quels sont les défis associés aux courts délais de verrouillage sur Bitcoin ?

Le timelock CLTV est une fonctionnalité native du réseau Bitcoin. A user can lock up any amount of Bitcoin for the desired period through this feature. However, with shorter time lock periods (e.g., 10 minutes) due to network congestion and Bitcoin network block times, these transactions may not be processed quickly enough, leading to delays in redeeming the Bitcoin. Notez que pour qu’une transaction de staking de Bitcoin soit valide, les exigences minimales doivent être respectées.

### 8. Y a-t-il des exigences spécifiques pour participer au Staking de Bitcoin Non-Custodial ?

Users must meet the following requirements for a Bitcoin staking transaction to be considered valid.

- Les utilisateurs doivent s'assurer que la transaction est envoyée à leur propre adresse.

- En utilisant la fonctionnalité native de timelock de Bitcoin, spécifiez le montant à verrouiller destiné à être délégué au validateur sur la blockchain Core comme sortie de la transaction.

- When using the staking script, there is **no** minimum Bitcoin requirement for staking. Cependant, en utilisant [l'interface utilisateur officielle du site de staking](https://stake.coredao.org/staking), les utilisateurs doivent staker au moins **0,01 BTC** (hors frais de transaction).

- La durée minimale de staking dépend de la méthode utilisée. The official website UI requires a 5-day minimum, while staking through the script has no lockup requirement.

- The transaction should also contain an `op_return` output specifying
  - L'adresse du validateur Core auquel le staker souhaite déléguer son Bitcoin.
  - L'adresse à laquelle le staker souhaite que ses récompenses en tokens CORE soient envoyées.

### 9. Pourquoi l'adresse de staking fournie diffère-t-elle de votre adresse Bitcoin d'origine ?

L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et votre sécurité sur vos actifs. Your Bitcoins remain safely stored in your original wallet, unaffected by the staking process. Bien que les actifs stakés puissent ne pas être visibles dans certaines versions de portefeuille, vous conservez l'entière propriété.

You can view your staked funds by searching for the staking address on any Bitcoin explorer, such as [Mempool](https://mempool.space/). We're actively working to make staked assets visible in all supported wallets, primarily through command-line versions.

### 10. Est-ce que Core fournit un support de portefeuille matériel pour le staking Bitcoin auto-custodial ?

En raison de contraintes techniques, le Staking de Bitcoin Non-Custodial ne prend pas actuellement en charge les portefeuilles matériels. Nevertheless, we continually explore ways to enhance compatibility with various wallet types, prioritizing both security and convenience for our users.

### 11. Quelles sont les considérations importantes pour les Périodes de Verrouillage avant de staker vos actifs ?

- **Expiration du délai de verrouillage :** Lorsque vous verrouillez votre Bitcoin pour le staking, il est inaccessible jusqu'à la fin de la période de staking.
- **Choosing wisely:** Select your locking period thoughtfully, considering your investment objectives and risk tolerance. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.
- **Staked Amount Verification:** Due to technical complexities, it is possible that your staked asset may not be visible in your wallet when checked through the CLI. Cependant, vous pouvez facilement vérifier que vous avez la propriété complète de vos actifs stakés depuis le [Site Officiel de Staking de Core](https://stake.coredao.org/). Additionally, delays due to block time, the number of block confirmation requirements, and network congestion on the Bitcoin network may lead to delays in transaction confirmation, making your assets not visible in your wallets.

### 12. Pourquoi mon actif staké n'est-il pas visible dans mon portefeuille ?

Due to technical complexities, it is possible that your staked asset is not visible in your wallet when checked through the CLI. Cependant, vous pouvez facilement vérifier que vous avez la propriété complète de vos actifs stakés depuis le [Site Officiel de Staking de Core](https://stake.coredao.org/). Additionally, delays due to block time, the number of block confirmation requirements, and network congestion on the Bitcoin network may lead to delays in transaction confirmation, making your assets not visible in your wallets.

### 13. Comment la sécurité du staking de Bitcoin non-custodial est-elle assurée ?

[Halborn](https://www.halborn.com/), une entreprise conforme à la norme SOC2 Type 1, renommée pour son expertise en sécurité des contrats intelligents et [de confiance par des plateformes blockchain de premier plan](https://www.halborn.com/about/who-trusts-us) comme Ava Labs, Solana et Polygon, ainsi que des projets DeFi comme Sushiswap, a minutieusement audité le protocole de Core et la sécurité du staking de Bitcoin non-custodial. Vous pouvez consulter les rapports d'audit sur le protocole de Core Chain et le staking de Bitcoin non-custodial par des entreprises leaders [ici](https://docs.coredao.org/docs/Learn/audit).

### 14. Que devriez-vous faire si le bouton _`Redeem BTC`_ ne fonctionne pas sur le site de staking ?

You can Redeem your Bitcoin by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). Si le bouton ne fonctionne pas, essayez de vider le cache de votre navigateur et réessayez. If you encounter further issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).