---
sidebar_label: Guide sur le Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking sur Core

Ce guide utilisateur est conçu pour vous accompagner à travers le processus de Dual Staking sur Core. Le Staking de Bitcoin Non-Custodial de Core permet aux utilisateurs de gagner des rendements en CORE en stakant leurs Bitcoins et en les déléguant à des validateurs sur Core. Le Dual Staking débloque des niveaux de rendement plus élevés en stakant simultanément du Bitcoin et du CORE pour améliorer davantage la génération de rendement du staking de Bitcoin Non-Custodial. Plongeons dans le fonctionnement et voyons comment vous pouvez commencer à staker dès aujourd'hui.

## Démarrer avec le staking double

Il existe plusieurs façons de participer au staking double avec BTC et CORE, selon vos outils préférés et votre niveau d'expérience:

- \*\* Via le [site Web officiel de Core](https://stake.coredao.org/staking):\*\* Une interface conviviale pour la plupart des utilisateurs pour commencer le staking directement.

- **Utilisation des outils CLI et des contrats intelligents:** Idéal pour les développeurs et les utilisateurs avancés qui préfèrent interagir directement avec le protocole. Les utilisateurs peuvent staker leurs BTC en utilisant l'[outil CLI de staking BTC](https://github.com/coredao-org/btc-staking-tool) et staker CORE en interagissant directement avec les [contrats intelligents de staking](https://github.com/coredao-org/core-genesis-contract?tab=readme-ov-file#list-of-contracts).

- **Via des dépositaires de confiance:** Staker via des dépositaires institutionnels tels que BitGo, Copper ou Hex Trust pour une sécurité accrue et une commodité opérationnelle.

## Prérequis

Pour démarrer et pouvoir effectuer un double staking CORE et BTC via le [official staking website](https://stake.coredao.org/staking), vous devez avoir les prérequis suivants:

1. **Extension de navigateur de portefeuille Bitcoin pris en charge:** Pour participer au processus de staking BTC, vous devez installer les extensions de navigateur de portefeuilles Bitcoin pris en charge, comme [Xverse].(https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), and/or [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (refer [here](https://stake.coredao.org) pour les derniers portefeuilles pris en charge). Vous devez utiliser la version bureau lorsque vous utilisez le site Web officiel de staking. Vous pouvez également staker directement en utilisant l'application mobile [Element wallet](https://www.elementwallet.com/).
2. **Adresse de portefeuille Core pour les récompenses :** Préparez votre adresse de portefeuille Core pour staker CORE et recevoir [CORE token rewards for staking Bitcoin](../../../stake-and-delegate/btc-staking/stake-btc-guide.md#prerequisites). Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. Pour plus d'informations sur la configuration de MetaMask pour fonctionner avec le réseau Core, suivez le guide détaillé [ici](../../../Dev-Guide/core-wallet-config.md).

## Considérations clés pour le double staking

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

1. **Montant minimum de Bitcoin \+ frais de gas :** Le montant minimum de Btc requis pour le staking sur Core dépend de la méthode choisie. Si vous utilisez [l'interface utilisateur officielle du site](https://stake.coredao.org/staking), vous devez staker au moins 0,01 BTC (hors frais de transaction). Il n'y a aucune exigence minimale lors du staking via script. De plus, les utilisateurs doivent prendre en compte les frais de gas en Bitcoin nécessaires aux transactions. Pour un staking de moins d'un mois, il est recommandé de disposer d'au moins 0,05 BTC afin de couvrir une éventuelle congestion du réseau, qui pourrait augmenter les frais de gas au-delà des récompenses de staking perçues.

2. **Minimum de 1 CORE \+ Frais de Gaz:** Pour staker, vous devez avoir au moins 1 CORE. En plus du montant de staking, les utilisateurs doivent également prendre en compte les frais de gaz en tokens CORE pour le traitement des transactions.

3. **Comprendre les Différences dans les Adresses de Staking de Bitcoin:**
  - L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.

4. **Retards dans l'apparition des actifs bloqués dans votre portefeuille Bitcoin:**
  - Vous pouvez rencontrer des retards avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce retard résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.
  - Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page **MyStaking** sur le site de staking de Core.
  - Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space/).

5. **Considérations pour les Périodes de Verrouillage**
  - Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer par des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Guide Pas à Pas du Dual Staking

Le staking de Bitcoin Non-Custodial de Core introduit une méthode sécurisée et décentralisée pour que les détenteurs de Bitcoin gagnent des rendements grâce au staking de Bitcoin. Les utilisateurs peuvent staker leur Bitcoin nativement sur le réseau Bitcoin via un mécanisme lié au temps et participer activement au mécanisme de consensus de la blockchain Core pendant le staking.

Le Dual Staking est une amélioration du staking de BTC Non-custodial de Core, permettant aux utilisateurs de débloquer des niveaux de rendement plus élevés en stakant simultanément du Bitcoin et du CORE. Des ratios de staking CORE:BTC plus élevés débloquent des niveaux de rendement plus élevés pour le staking de Bitcoin. Pour profiter du Dual Staking et gagner des taux de récompense plus élevés pour le staking de Btc, suivez les étapes détaillées ci-dessous.

### Connexion des Portefeuilles Bitcoin et Core

1. Visit [https://stake.coredao.org](https://stake.coredao.org/) and click **Stake Now** on the top right of the header.
2. Once on the **Staking** tab, click the **Connect** option next to “BTC Staking Amount” to connect your Bitcoin wallet. This should be the wallet with the Bitcoin assets you want to stake. Click on the supported wallet of your choice to connect your Bitcoin wallet.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. Likewise, click the **Connect** option next to **CORE Staking Amount** and select the Core wallet to stake CORE and receive staking rewards.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-2.png)
</p>

## Specifying the BTC Amount to Stake

4. Enter the amount of Bitcoin you want to stake. The minimum amount is 0.01 BTC if a user is staking through the website UI. However, there are no minimum amount requirements for staking Bitcoin through the staking script.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-3.png)
</p>

### Selecting a Core Validator for Bitcoin Delegation

5. Under **Delegate to Validator**, from the drop-down menu, select an **_active validator_** to whom you want to delegate your Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-4.png)
</p>

### Specifying the CORE Amount to Stake

6. Enter the amount of CORE you want to stake. The minimum amount is 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-5.png)
</p>

### Selecting a Core Validator for CORE Delegation

7. After specifying the amount of CORE to stake, choose the validator to whom you will delegate your CORE. Ensure that you select an active validator from the drop-down.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-6.png)
</p>

### Confirming CORE and BTC Staking Details

8. Verify that the staked CORE amount and selected Validator are correct and then press _Confirm_.
9. Similarly, verify that the staked Bitcoin amount and selected Validator are correct and then press _Confirm_.

### Verify Bitcoin Staking Address

10. Before proceeding to confirm your staking transaction. This verification feature allows users to independently verify their Bitcoin staking address, helping prevent blind signing and enhancing the security of the staking process.

11. To proceed with verification, click on the **Verify the Bitcoin Staking Address** button. This will navigate you to the external website.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

12. On the Verification Website UI, ensure that the fetched data is correct and then click on the _Submit_ button.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)
</p>

13. The verification result will appear in the **Verification Result** section.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

14. Once verified, navigate back to stake.coredao.org and continue by clicking on **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)
</p>

### Adjusting CORE:BTC Ratios for Higher Yields

15. On the right side of the Staking Calculator, there is a **Summary** tab that calculates the Total Staking Reward Rate and Projected Annual Rewards. These are estimated annual return numbers for staked Bitcoin and CORE. The reward rate may fluctuate daily based on the total and weighted amounts of delegations that validators receive. When set to the **Current** button, it displays only the real-time estimated staking reward rate. When set to the **Overall** button, it represents the average of two components: the rates from all validators based on previous staking records and the real-time estimated staking reward rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-7.png)
</p>

16. You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-8.png)
</p>

17. To get the maximum reward boost on your staked amount, under the Dual Staking Tiers section, adjust the **Bitcoin Staked** slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the “CORE Staked” slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the “Max Boost” button again to update the recommended Bitcoin amount in the “BTC Staked” bar.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-9.png)
</p>

18. À côté de l'onglet **Summary**, vous pouvez trouver la page **Details**, qui affiche les détails du staking, y compris:

- **New Staked BTC:** Le montant de BTC que vous prévoyez de staker et le taux de récompense actuel.
- **New Staked CORE:** Le montant de CORE que vous prévoyez de staker et le taux de récompense actuel.
- .
- **Active Staked CORE:** Le montant de CORE actuellement staké et le taux de récompense moyen gagné auprès des validateurs.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalisation des Transactions de Dual Staking

19. Une fois que vous avez spécifié le montant de BTC/CORE à staker et les validateurs pour la délégation respectivement, vous pouvez cliquer sur le bouton **Proceed to Stake**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

20. Sur la page Stake CORE, confirmez le montant de CORE à staker avec Bitcoin, puis cliquez sur le bouton **Confirm**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-12.png)
</p>

21. En cliquant sur **Confirm**, vous recevrez une notification de votre portefeuille Core connecté pour compléter la transaction.

22. Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on CoreScan** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

23. Sur la page "Stake BTC", confirmez le montant de Bitcoin à staker. Avant de finaliser le processus de staking de Bitcoin, il est important de comprendre et de spécifier plusieurs paramètres clés :

- Spécifier le montant de Bitcoin que vous souhaitez déléguer
  - Le montant minimum à déléguer est de 0,01 Bitcoin, si la délégation se fait via l'interface officielle du site.
  - Dans notre exemple, nous déléguerons 0,05 Bitcoin, ce qui satisfait à cette exigence
- Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et disponible à nouveau pour la récupération ou la redélégation.
  - Sélectionnez à l'intérieur de la boîte de temps de verrouillage pour entrer des valeurs, ou cliquez sur l'icône du calendrier pour sélectionner la date et cliquez sur ’OK’ pour continuer.
  - Le temps de verrouillage par défaut est fixé à un mois à l'avance.
- Spécifier la priorité du réseau pour votre transaction

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Enfin, cliquez sur ‘Confirm’ pour compléter la transaction.

**Confirmer la Sortie `OP_Return`**

25. Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de la transaction pour vous assurer qu'elles incluent une sortie `OP_Return`. La sortie `OP_Return` est l'endroit où votre `redeem_script` est enregistré et est essentiellement utilisé pour récupérer votre Bitcoin staké. Il peut y avoir deux ou trois sorties, mais au moins une doit toujours être **OP_Return**. Abandonnez la transaction si elle n'inclut pas la sortie `OP_Return`.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on Btc Explorer** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Vérifier la Soumission de la Transaction et les Enregistrements de Staking**

27. Dans le coin supérieur droit du site de staking, survolez votre portefeuille connecté et cliquez sur **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Click on the respective CORE, BTC, and Hash tabs to view details on your staking and delegations.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. By staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, supporting its decentralization and stability. In addition, through Dual Staking, you help strengthen the connection between the Bitcoin and Core blockchain, aligning incentives and creating value across both ecosystems.
