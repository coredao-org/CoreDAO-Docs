---
sidebar_label: Récupération de BTC verrouillés expirés
description: Guide pour récupérer des BTC verrouillés expirés depuis un appareil Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour récupérer des BTC mis en jeu sur Core

Ce guide utilisateur vous guidera à travers le processus étape par étape pour récupérer vos Bitcoins (BTC) mis en jeu sur la blockchain Core en utilisant un portefeuille matériel Ledger.

:::note
Avant de commencer, assurez-vous que votre appareil Ledger est mis à jour et que l'application Ledger Core est installée. Vous devez utiliser la même adresse de portefeuille BTC principale qui a été utilisée à l'origine pour la mise en jeu de BTC. Pour apprendre comment miser des BTC avec Ledger, consultez le guide officiel [guide](./btc-staking.md).
:::

## Avant de commencer : Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

- **Utilisez uniquement les appareils Ledger pris en charge:** La mise en jeu, le rachat et la réaffectation de BTC sur Core sont pris en charge **uniquement** sur certains portefeuilles matériels Ledger spécifiques avec le dernier micrologiciel. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.
- **Utilisez toujours l'application Core de Ledger:** Vous devez utiliser l'application Core de Ledger (et non l'application Bitcoin de Ledger) pour la mise en jeu, le rachat ou la réaffectation de BTC. L'application Bitcoin ne prend pas en charge les opérations de rachat de BTC mis en jeu et peut empêcher un rachat réussi.
- **Mise en jeu de BTC uniquement depuis l'adresse de portefeuille BTC principale:** Actuellement, la mise en jeu, le rachat et la réaffectation de BTC sur Core via Ledger sont pris en charge **uniquement** depuis l'adresse BTC principale de l'appareil Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles.

## Supported Ledger Hardware Wallets

Les appareils matériels Ledger suivants prennent actuellement en charge la mise en jeu, le rachat et la réaffectation de BTC sur la blockchain Core. Pour une expérience et une compatibilité optimales, assurez-vous que votre appareil fonctionne avec le dernier micrologiciel disponible.

| Appareil Ledger    | Firmware Version (_at the time of writing_) |
| ------------------ | -------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                          |
| **Ledger Nano X**  | 2.5.0                          |
| **Ledger Stax**    | 1.8.0                          |
| **Ledger Flex**    | 1.4.0                          |

<br/>

:::note
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de mettre en jeu, de racheter ou de réaffecter des BTC sur Core en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours Ledger Live pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Vous avez précédemment mis en jeu des BTC sur la blockchain Core en utilisant votre appareil Ledger.
- Si vous utilisez le portefeuille Xverse, votre appareil Ledger est déjà connecté et ajouté à celui-ci.
- La période de verrouillage pour vos BTC verrouillés a expiré, les rendant éligibles au remboursement.

> ⚠️ **Remarque:** Vous ne pourrez pas rembourser ou redéléguer les BTC mis en jeu jusqu'à ce que le verrouillage temporaire désigné ait expiré.

## Étapes pour récupérer des BTC à verrouillage temporel expirés

Après l'expiration de la période de verrouillage temporaire pour les BTC mis en jeu, les utilisateurs sont éligibles pour rembourser ou redéléguer leurs actifs Bitcoin délégués. Vous devez utiliser la même adresse de portefeuille Ledger utilisée pour mettre en jeu des BTC pour redéléguer vos BTC après l'expiration du verrouillage temporaire.

### Étape #1: Connecter le portefeuille Core au site Web de staking

1. Connectez votre portefeuille Core Mainnet au site Web de staking. N'oubliez pas d'utiliser le même portefeuille que celui que vous aviez utilisé au moment de la mise en jeu des BTC. Cliquez sur le bouton "**Connect**" dans le coin supérieur droit du site Web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. From the displayed wallet modal, select the wallet of your choice configured for use with Core Mainnet.

### Step #2: Navigate to Staking Dashboard

1. Ensure your Ledger device is installed with the latest firmware and connected to your computer with  Ledger"s primary Bitcoin (BTC) address.
2. Navigate to the [Core Ledger BTC Staking Website](https://stake.coredao.org/staking).
3. On the website UI, hover over your connected wallet in the top right corner and click "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-1.png)
</p>

### Step #3: Navigate to BTC Staking Records

1. On the "**My Staking Dashboard**" page, select "**BTC**" records from the displayed tabs.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-2.png)
</p>

2. This tab lists all the BTC staking records and the validators that you have previously delegated BTC to. Look for any "**Expired**" records under "**Redeem Time**",  and proceed to click "Redeem" under "**Action**."

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-3.png)
</p>

### Step #4: Verify BTC Staking and Redemption Details

1. On the displayed "**Redeem BTC**" modal, cross-check the BTC staking address, the BTC Amount that will be redeemed, and the Receiving Bitcoin address. To redeem the BTC, you must connect to the same Bitcoin address as the one initiating the Bitcoin staking transaction.

2. Set your Receiving Bitcoin Address to receive the unlocked BTC. This does not need to be the same as the address that initiated the Bitcoin staking transaction. Set your transaction speed priority, and click "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-4.png)
</p>

### Step #5: Sign the BTC Unlock Transaction on Ledger Device

1. Click "**Sign By Bitcoin Wallet**" to sign the BTC redemption transaction from your Ledger device.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-5.png)
</p>

### Step#5: Connect Ledger Device for Redemption of Staked BTC

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redeem BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "Xverse" under the "Wallets Supporting Ledger" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

### Step#6: Review & Approve Transaction on Ledger Device

After connecting your Ledger device, ensure that the device is unlocked and the Ledger Core app is open. You will be prompted on the screen to approve the transaction.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-6.png)
</p>

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.
2. Always use the Ledger Core app, not the Ledger Bitcoin app, to redeem the staked BTC on the Core blockchain. The Bitcoin app lacks support for redemption/redelegation operations. Further, the Ledger Core app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Ledger-BTC-Redeem.gif)
</p>

3. Once the transaction is approved on your Ledger device, the website will display a "**Transaction Submitted**" notification, confirming that your BTC redemption request has been successfully initiated.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-7.png)
</p>

4. After the Bitcoin block of the redemption transaction is confirmed, verify that the redeemed BTC has returned to your receiving Bitcoin address. (This may take a few minutes). You can also view the transaction details on the BTC Explorer.

## Conclusion

By following this guide, you"ve successfully redeemed staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core"s Self-Custodial BTC Staking model and Ledger"s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redemption marks a secure and transparent interaction with Core"s decentralized infrastructure. You now have complete ownership of your reclaimed BTC.


