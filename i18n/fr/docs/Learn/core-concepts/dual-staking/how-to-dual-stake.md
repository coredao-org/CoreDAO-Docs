---
sidebar_label: Comment faire du double staking
hide_table_of_contents: false
sidebar_position: 2
---

# Comment faire du double staking

---

Il existe plusieurs façons de participer au staking double avec BTC et CORE, selon vos outils préférés et votre niveau d'expérience :

**Via le site Web officiel de Core**: Une interface conviviale pour la plupart des utilisateurs pour commencer le staking directement.

**Utilisation des outils CLI et des contrats intelligents** : Idéal pour les développeurs et les utilisateurs avancés qui préfèrent interagir directement avec le protocole. Les utilisateurs peuvent miser leur Bitcoin en utilisant l'outil CLI de staking BTC et miser CORE en interagissant directement avec les contrats intelligents de staking.

**Via des dépositaires de confiance** : Staker via des dépositaires institutionnels tels que BitGo, Copper ou Hex Trust pour une sécurité accrue et une commodité opérationnelle.

## Prérequis

Pour démarrer et pouvoir effectuer un double staking CORE et BTC via le site Web officiel de staking de Core, vous devez avoir les prérequis suivants :

**Extension de navigateur de portefeuille Bitcoin prise en charge** : Pour participer au processus de staking Bitcoin, vous devez installer les extensions de navigateur des portefeuilles Bitcoin pris en charge, tels que Xverse, Unisat et/ou OKX Wallet (référez-vous ici pour les derniers portefeuilles pris en charge). Vous devez utiliser la version bureau lorsque vous utilisez le site Web officiel de staking. Vous pouvez également staker directement en utilisant l'application mobile du portefeuille Element.

**Adresse de portefeuille Core pour les récompenses** : Préparez votre adresse de portefeuille Core pour staker CORE et recevoir des récompenses en tokens CORE pour le staking de Bitcoin. Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. Pour plus d'informations sur la configuration de MetaMask pour fonctionner avec le réseau Core, suivez le guide détaillé [ici.

## Considérations clés pour le double staking

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

**Montant minimum de Bitcoin \+ frais de gas :** Le montant minimum de Btc requis pour le staking sur Core dépend de la méthode choisie. Si vous utilisez l'interface utilisateur officielle du site, vous devez staker au moins 0,01 BTC (hors frais de transaction). Il n'y a aucune exigence minimale lors du staking via script. De plus, les utilisateurs doivent prendre en compte les frais de gas en Bitcoin nécessaires aux transactions. Pour un staking de moins d'un mois, il est recommandé de disposer d'au moins 0,05 BTC afin de couvrir une éventuelle congestion du réseau, qui pourrait augmenter les frais de gas au-delà des récompenses de staking perçues.

**Minimum de 1 CORE \+ Frais de Gaz :** Pour staker, vous devez avoir au moins 1 CORE. En plus du montant de staking, les utilisateurs doivent également prendre en compte les frais de gaz en tokens CORE pour le traitement des transactions.

**Comprendre les Différences dans les Adresses de Staking de Bitcoin :**:

L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.

**Délais pour que les Actifs Verrouillés Apparaissent dans votre Portefeuille Bitcoin :**:

Vous pouvez rencontrer des délais avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce délai résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.

Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page "MyStaking" sur le site de staking de Core.

Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space).

**Considérations pour les Périodes de Verrouillage**

Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer par des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Connexion des Portefeuilles Bitcoin et Core

1. Visitez [https://stake.coredao.org](https://stake.coredao.org) et cliquez sur **Stake Now** en haut à droite de l'en-tête.

2. Une fois sur l'onglet **Staking**, cliquez sur l'option **Connect** à côté de "BTC Staking Amount" pour connecter votre portefeuille Bitcoin. Cela devrait être le portefeuille contenant les actifs Bitcoin que vous souhaitez staker. Cliquez sur le portefeuille pris en charge de votre choix pour connecter votre portefeuille Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De même, cliquez sur l'option **Connect** à côté de **CORE Staking Amount** et sélectionnez le portefeuille Core pour staker du CORE et recevoir des récompenses de staking.

<p align="center" style={{zoom:"60%"}}>

![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-2.png
)</p>

## Spécifier le Montant de BTC à Staker

Entrez le montant de Bitcoin que vous souhaitez staker. Le montant minimum est de 0,01 BTC si l'utilisateur effectue le staking via l'interface utilisateur du site web. Cependant, aucune exigence minimale n'est imposée pour le staking Btc via le script de staking.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-3.png)
</p>

## Selecting a Core Validator for Bitcoin Delegation

Under **Delegate to Validator**, from the drop-down menu, select an active validator to whom you want to delegate your Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-4.png)
</p>

## Specifying the CORE Amount to Stake

Enter the amount of CORE you want to stake. The minimum amount is 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-5.png)
</p>

## Selecting a Core Validator for CORE Delegation

After specifying the amount of CORE to stake, choose the validator to whom you will delegate your CORE. Ensure that you select an active validator from the drop-down.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-6.png)
</p>

## Confirming CORE and BTC Staking Details

Verify that the staked CORE amount and selected Validator are correct and then press **Confirm**.

Similarly, verify that the staked Bitcoin amount and selected Validator are correct and then press **Confirm**.

## Verify Bitcoin Staking Address

Before proceeding to confirm your staking transaction. This verification feature allows users to independently verify their Bitcoin staking address, helping prevent blind signing and enhancing the security of the staking process.

To proceed with verification, click on the **Verify the Bitcoin Staking Address** button. This will navigate you to the external website.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

On the Verification Website UI, ensure that the fetched data is correct and then click on the **Submit** button.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)
</p>

The verification result will appear in the Verification Result section.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

Once verified, navigate back to [stake.coredao.org](https://stake.coredao.org) and continue by clicking on **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)
</p>

## Adjusting CORE:BTC Ratios for Higher Yields

On the right side of the Staking Calculator, there is a **Summary** tab that calculates the Total Staking Reward Rate and Projected Annual Rewards. These are estimated annual return numbers for staked Bitcoin and CORE. The reward rate may fluctuate daily based on the total and weighted amounts of delegations that validators receive. When set to the **Current** button, it displays only the real-time estimated staking reward rate. When set to the **Overall** button, it represents the average of two components: the rates from all validators based on previous staking records and the real-time estimated staking reward rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-7.png)
</p>

You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-8.png)
</p>

To get the maximum reward boost on your staked amount, under the **Dual Staking Tiers** section, adjust the Bitcoin Staked slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the "CORE Staked" slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the "Max Boost" button again to update the recommended Bitcoin amount in the "BTC Staked" bar.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-9.png)
</p>

Next to the Summary tab, you can find **Details** page, which shows staking details, including:

- **New Staked Bitcoin**: The amount of BTC you plan to stake and the current reward rate.
- **New Staked CORE**: The amount of CORE you plan to stake and the current reward rate.
- **Active Staked Bitcoin**: The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE**: The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

## Finalizing Dual Staking Transactions

Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

On the **Stake CORE** page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-12.png)
</p>

En cliquant sur **Confirm**, vous recevrez une notification de votre portefeuille Core connecté pour compléter la transaction.

Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on CoreScan** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

Sur la page "Stake BTC", confirmez le montant de Bitcoin à staker. Avant de finaliser le processus de staking de Bitcoin, il est important de comprendre et de spécifier plusieurs paramètres clés :

**Spécifier le montant de Bitcoin que vous souhaitez déléguer**

Le montant minimum à déléguer est de 0,01 Bitcoin, si la délégation se fait via l'interface officielle du site.
Dans notre exemple, nous déléguerons 0,05 Bitcoin, ce qui satisfait à cette exigence

**Setting the lock time determines when your staked Bitcoin will be unlocked and available again for redemption or re-delegation.**

Select inside the lock time box to input values, or click on the calendar icon to select the date, and click 'OK' to proceed.
The default lock time is set to a month in advance.

**Specify the network priority speed for your transaction**

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

Finally, click **Confirm** to complete the transaction.

## Confirm OP_Return Output

Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an OP_Return output. The OP_Return output is where your redeem_script is saved and is essentially used to redeem your staked Bitcoin. There may be two or three outputs, but at least one should always be OP_Return. **Abort the transaction if it doesn't include the OP_Return output.**

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

Once you confirm the transition, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Verify Transaction Submission and Staking Records

In the top right corner of the staking website, hover over your connected wallet and click **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Click on the respective **CORE**, **BTC**, and **Hash** tabs to view details on your staking and delegations.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Conclusion

You have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. By staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, supporting its decentralization and stability. In addition, through Dual Staking, you help strengthen the connection between the Bitcoin and Core blockchain, aligning incentives and creating value across both ecosystems.
