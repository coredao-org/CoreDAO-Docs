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
  - You may face some delays before your locked Bitcoin is displayed in your Bitcoin wallets. This delay primarily results from delays in transaction confirmation on the Bitcoin network, which can take several hours due to block time, the number of block confirmations required, and network congestion.
  - While we are actively working with wallet partners to support the timely display of your assets in your wallets, you can check your locked assets on the **MyStaking** page on Core’s staking website.
  - You can also view your staked funds by searching the staking address on a Bitcoin explorer, [Mempool.space](https://mempool.space/).

5. **Considerations for Locking Periods**
  - Once you lock your Bitcoin for staking, it's inaccessible until the staking period concludes. Considering your investment objectives and risk tolerance, you are advised to select your locking period thoughtfully. Starting with shorter locking periods can help you become familiar with the process before committing to longer durations.

## Step-By-Step Walkthrough of Dual Staking

Core’s Self-Custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn yield through Bitcoin staking. Users can stake their Bitcoin natively on the Bitcoin network through a time-bound mechanism and actively participate in the Core blockchain's Consensus mechanism while staking.

Dual staking is an enhancement to Core’s Self-custodial Bitcoin staking, allowing users to unlock higher yield tiers by staking Bitcoin and CORE simultaneously. Higher CORE:BTC staking ratios unlock higher yield tiers for Bitcoin staking. To take advantage of Dual Staking and earn higher reward rates for Bitcoin staking, follow the steps detailed below.

### Connecting Bitcoin and Core Wallets

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

18. Next to the **Summary** tab, you can find **Details** page, which shows staking details, including:

- **New Staked Bitcoin:** The amount of BTC you plan to stake and the current reward rate.
- **New Staked CORE:** The amount of CORE you plan to stake and the current reward rate.
- **Active Staked Bitcoin:** The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE:** The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalizing Dual Staking Transactions

19. Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

20. On the Stake CORE page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-12.png)
</p>

21. By clicking **Confirm**, you will get a notification from your connected Core wallet to complete the transaction.

22. Once you confirm the transaction, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click **My Staking** to see your staking records or **View on CoreScan** to review this transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

23. On the “Stake BTC” page, confirm the amount of Bitcoin to stake. Before finalizing the Bitcoin staking process, it's essential to understand and specify several key parameters:

- Specifying the amount of Bitcoin you’d like to delegate
  - The minimum amount to delegate is 0.01 Bitcoin if delegating through the official website.
  - In our example, we will be delegating 0.05 Bitcoin, which satisfies this requirement
- Setting the lock time determines when your staked Bitcoin will be unlocked and available again for redemption or re-delegation.
  - Select inside the lock time box to input values, or click on the calendar icon to select the date, and click ‘OK’ to proceed.
  - The default lock time is set to a month in advance.
- Specify the network priority speed for your transaction

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Finally, click ‘Confirm’ to complete the transaction.

**Confirm `OP_Return` Output**

25. Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an `OP_Return` output. The `OP_Return` output is where your `redeem_script` is saved and is essentially used to redeem your staked Bitcoin. There may be two or three outputs, but at least one should always be **OP_Return**. Abort the transaction if it doesn't include the `OP_Return` output.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Once you confirm the transition, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Verify Transaction Submission and Staking Records**

27. In the top right corner of the staking website, hover over your connected wallet and click **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Click on the respective CORE, BTC, and Hash tabs to view details on your staking and delegations.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. By staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, supporting its decentralization and stability. In addition, through Dual Staking, you help strengthen the connection between the Bitcoin and Core blockchain, aligning incentives and creating value across both ecosystems.
