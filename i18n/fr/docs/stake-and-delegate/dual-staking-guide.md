---
sidebar_label: Guide sur le Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking sur Core

Ce guide utilisateur est conçu pour vous accompagner à travers le processus de Dual Staking sur Core. Le Staking de Bitcoin Non-Custodial de Core permet aux utilisateurs de gagner des rendements en CORE en stakant leurs Bitcoins et en les déléguant à des validateurs sur Core. Dual Staking unlocks higher yield tiers by staking Bitcoin and CORE to further enhance yield generation from Self-Custodial Bitcoin staking. Let's dive into how it works and learn how to start staking today.

## Démarrer avec le staking double

There are several ways to participate in Dual Staking with Bitcoin and CORE, depending on your preferred tools and experience level:

- Via le [site Web officiel de Core](https://stake.coredao.org/staking) : Une interface conviviale pour la plupart des utilisateurs pour commencer le staking directement.

- Utilisation des outils CLI et des contrats intelligents : Idéal pour les développeurs et les utilisateurs avancés qui préfèrent interagir directement avec le protocole. Users can stake their Bitcoin using the [BTC Staking CLI Tool](https://github.com/coredao-org/btc-staking-tool) and stake CORE by interacting directly with the [staking smart contracts](https://github.com/coredao-org/core-genesis-contract?tab=readme-ov-file#list-of-contracts).

- Via des dépositaires de confiance : Staker via des dépositaires institutionnels tels que BitGo, Copper ou Hex Trust pour une sécurité accrue et une commodité opérationnelle.

## Prérequis

To get started and be able to dual stake CORE and Bitcoin via Core's [official staking website](https://stake.coredao.org/staking), you must have the following prerequisites:

1. **Supported Bitcoin Wallet Browser Extension:** To participate in the Bitcoin staking process, you must install browser extensions of any supported Bitcoin wallets, like Xverse, Unisat, and/or OKX Wallet (refer here for the latest supported wallets). You must use the desktop version when using the official staking website. Vous pouvez également staker directement en utilisant l'application mobile Element wallet.
2. Adresse de portefeuille Core pour les récompenses : Préparez votre adresse de portefeuille Core pour staker CORE et recevoir [des récompenses en tokens CORE pour le staking de Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide#prerequisites). Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. For more information on configuring MetaMask to work with the Core network, follow the detailed guide [here](https://docs.coredao.org/docs/Dev-Guide/core-mainnet-wallet-config.md).

## Considérations Clés pour le Dual Staking

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

1. **Minimum Bitcoin Amount \+ Gas Fee:** The minimum Bitcoin required for staking on Core depends on the chosen method. Si vous utilisez [l'interface utilisateur officielle du site](https://stake.coredao.org/staking), vous devez staker au moins 0,01 BTC (hors frais de transaction). En revanche, il n'y a aucune exigence minimale lors du staking via script. De plus, les utilisateurs doivent prendre en compte les frais de gas en Bitcoin nécessaires aux transactions. Pour un staking de moins d'un mois, il est recommandé de disposer d'au moins 0,05 BTC afin de couvrir une éventuelle congestion du réseau, qui pourrait augmenter les frais de gas au-delà des récompenses de staking perçues.

2. **Minimum de 1 CORE \+ Frais de Gaz :** Pour staker, vous devez avoir au moins 1 CORE. En plus du montant de staking, les utilisateurs doivent également tenir compte des frais de gaz en tokens CORE pour le traitement des transactions.

3. **Comprendre les Différences dans les Adresses de Staking de Bitcoin :**
  - L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.

4. **Délais pour que les Actifs Verrouillés Apparaissent dans votre Portefeuille Bitcoin :**
  - Vous pouvez rencontrer des délais avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce délai résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.
  - Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page **MyStaking** sur le site de staking de Core.
  - Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space/).

5. **Considérations pour les Périodes de Verrouillage**
  - Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer par des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Guide Pas à Pas du Dual Staking

Le staking de Bitcoin Non-Custodial de Core introduit une méthode sécurisée et décentralisée pour que les détenteurs de Bitcoin gagnent des rendements grâce au staking de Bitcoin. Les utilisateurs peuvent staker leur Bitcoin nativement sur le réseau Bitcoin via un mécanisme lié au temps et participer activement au mécanisme de consensus de la blockchain Core pendant le staking.

Dual staking is an enhancement to Core’s Self-custodial Bitcoin staking, allowing users to unlock higher yield tiers by staking Bitcoin and CORE simultaneously. Higher CORE:BTC staking ratios unlock higher yield tiers for Bitcoin staking. To take advantage of Dual Staking and earn higher reward rates for Bitcoin staking, follow the steps detailed below.

### Connexion des Portefeuilles Bitcoin et Core

1. Visitez [https://stake.coredao.org](https://stake.coredao.org/) et cliquez sur **Stake Now** en haut à droite de l'en-tête.
2. Une fois sur l'onglet **Staking**, cliquez sur l'option **Connect** à côté de "BTC Staking Amount" pour connecter votre portefeuille Bitcoin. Cela devrait être le portefeuille contenant les actifs Bitcoin que vous souhaitez staker. Cliquez sur le portefeuille pris en charge de votre choix pour connecter votre portefeuille Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De même, cliquez sur l'option **Connect** à côté de **CORE Staking Amount** et sélectionnez le portefeuille Core pour staker du CORE et recevoir des récompenses de staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-2.png)
</p>

## Spécifier le Montant de BTC à Staker

4. Entrez le montant de Bitcoin que vous souhaitez staker. The minimum amount is 0.01 BTC if a user is staking through the website UI. However, there are no minimum amount requirements for staking Bitcoin through the staking script.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-3.png)
</p>

### Sélection d'un Validateur Core pour la Délégation de Bitcoin

5. Under **Delegate to Validator**, from the drop-down menu, select an **_active validator_** to whom you want to delegate your Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-4.png)
</p>

### Spécifier le Montant de CORE à Staker

6. Entrez le montant de CORE que vous souhaitez staker. Le montant minimum est de 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-5.png)
</p>

### Sélection d'un Validateur Core pour la Délégation de CORE

7. Après avoir spécifié le montant de CORE à staker, choisissez le validateur auquel vous allez déléguer votre CORE. Ensure that you select an active validator from the drop-down.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-6.png)
</p>

### Confirmation des détails de staking CORE et BTC

8. Verify that the staked CORE amount and selected Validator are correct and then press _Confirm_.
9. Similarly, verify that the staked Bitcoin amount and selected Validator are correct and then press _Confirm_.

### Verify Bitcoin Staking Address

10. Avant de procéder à la confirmation de votre transaction de staking. This verification feature allows users to independently verify their Bitcoin staking address, helping prevent blind signing and enhancing the security of the staking process.

11. To proceed with verification, click on the **Verify the Bitcoin Staking Address** button. Cela vous redirigera vers le site Web externe.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

12. Sur l'interface utilisateur du site Web de vérification, assurez-vous que les données récupérées sont correctes, puis cliquez sur le bouton _Submit_.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/external-verification-UI.png)
</p>

13. Le résultat de la vérification apparaîtra dans la section **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

14. Une fois vérifié, revenez sur (lien non disponible) et continuez en cliquant sur **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../static/img/btc-staking/approve-tx.png)
</p>

### Ajustement des Ratios CORE:BTC pour des Rendements Plus Élevés

15. Sur le côté droit du Calculateur de Staking, il y a un onglet **Summary** qui calcule le Taux de Récompense Total et les Récompenses Annuelles Prévues. Ce sont des estimations de retour annuel pour le Bitcoin et le CORE stakés. Le taux de récompense peut fluctuer quotidiennement en fonction des montants totaux et pondérés des délégations que les validateurs reçoivent. Lorsque l'option **Current** est sélectionnée, elle affiche uniquement le taux de récompense de staking estimé en temps réel. Lorsque l'option **Overall** est sélectionnée, elle représente la moyenne de deux composants : les taux de tous les validateurs basés sur les enregistrements de staking précédents et le taux de récompense de staking estimé en temps réel.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-7.png)
</p>

16. You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-8.png)
</p>

17. To get the maximum reward boost on your staked amount, under the Dual Staking Tiers section, adjust the **Bitcoin Staked** slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the “CORE Staked” slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the “Max Boost” button again to update the recommended Bitcoin amount in the “BTC Staked” bar.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-9.png)
</p>

18. À côté de l'onglet **Summary**, vous pouvez trouver la page **Details**, qui affiche les détails du staking, y compris :

- **New Staked Bitcoin:** The amount of BTC you plan to stake and the current reward rate.
- **New Staked CORE :** Le montant de CORE que vous prévoyez de staker et le taux de récompense actuel.
- **Active Staked Bitcoin:** The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE:** The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalisation des Transactions de Dual Staking

19. Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-11.png)
</p>

20. On the Stake CORE page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-12.png)
</p>

21. En cliquant sur **Confirm**, vous recevrez une notification de votre portefeuille Core connecté pour compléter la transaction.

22. Once you confirm the transaction, you will receive a **Transaction Submitted** notification on the top right of your screen. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on CoreScan** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-13.png)
</p>

23. Sur la page "Stake BTC", confirmez le montant de Bitcoin à staker. Before finalizing the Bitcoin staking process, it's essential to understand and specify several key parameters:

- Spécifier le montant de Bitcoin que vous souhaitez déléguer
  - The minimum amount to delegate is 0.01 Bitcoin if delegating through the official website.
  - Dans notre exemple, nous déléguerons 0,05 Bitcoin, ce qui satisfait à cette exigence
- Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et à nouveau disponible pour le rachat ou la redélégation.
  - Select inside the lock time box to input values, or click on the calendar icon to select the date, and click ‘OK’ to proceed.
  - Le temps de verrouillage par défaut est fixé à un mois à l'avance.
- Spécifier la priorité du réseau pour votre transaction

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Enfin, cliquez sur ‘Confirm‘ pour compléter la transaction.

**Confirm `OP_Return` Output**

25. Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an `OP_Return` output. La sortie `OP_Return` est l'endroit où votre `redeem_script` est enregistré et est essentiellement utilisé pour récupérer votre Bitcoin staké. Il peut y avoir deux ou trois sorties, mais au moins une doit toujours être **OP_Return**. Abort the transaction if it doesn't include the `OP_Return` output.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-16.png)
</p>

**Vérifier la Soumission de la Transaction et les Enregistrements de Staking**

27. Dans le coin supérieur droit du site de staking, survolez votre portefeuille connecté et cliquez sur **My Staking**.

<p align="center">
![btc-staking-on-core](../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Cliquez sur les onglets respectifs CORE, BTC, et Hash pour voir les détails de votre staking et de vos délégations.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-16.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. En stakant du Bitcoin et en votant pour des validateurs, vous contribuez activement à la gouvernance et à la sécurité du réseau Core, soutenant sa décentralisation et sa stabilité. De plus, grâce au Dual Staking, vous aidez à renforcer la connexion entre la blockchain Bitcoin et Core, alignant les incitations et créant de la valeur à travers les deux écosystèmes.
