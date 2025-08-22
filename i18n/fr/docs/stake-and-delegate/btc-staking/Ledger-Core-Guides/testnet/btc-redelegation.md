---
sidebar_label: La ré délégation de BTC avec expiration de verrouillage temporel
description: Guide pour réaffecter des BTC depuis un appareil Ledger sur le réseau Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour réaffecter des BTC mis en jeu sur Core

Ce guide utilisateur vous guidera à travers le processus étape par étape de réaffectation de Bitcoin (BTC) verrouillé dans le temps et expiré, mis en jeu, à un nouveau validateur Core Testnet en utilisant un portefeuille matériel Ledger, en réinitialisant une nouvelle transaction de mise en jeu de BTC.

:::note
Avant de commencer, assurez-vous que votre appareil Ledger est mis à jour et que l'application Ledger CoreTestnet est installée. Vous devez utiliser la même adresse de portefeuille BTC principale qui a été utilisée à l'origine pour la mise en jeu de BTC. Pour apprendre comment mettre en jeu des BTC en utilisant Ledger, référez-vous au guide détaillé [here](./btc-staking.md).
:::

## Avant de commencer : Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

1. **Utilisez uniquement des appareils Ledger pris en charge:** La mise en jeu, le rachat et la ré délégation de BTC sur le réseau de Core Testnet sont pris en charge uniquement sur des appareils matériels Ledger spécifiques avec le dernier firmware. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.

2. **Utilisez toujours l'application Ledger Core Testnet:** Vous devez utiliser l'application Ledger Core Testnet (et non l'application Ledger Bitcoin) pour la mise en jeu, le rachat ou la ré délégation de BTC sur le réseau de test Core. L'application Bitcoin ne prend pas en charge les opérations de rachat ou de ré délégation des BTC mis en jeu et peut empêcher le rachat ou la ré délégation réussie.

3. **Ré déléguez des BTC uniquement à partir de l'adresse du portefeuille BTC principal:** Actuellement, la mise en jeu, le rachat et la ré délégation de BTC sur le réseau de test Core via Ledger sont pris en charge uniquement à partir de l'adresse BTC principale de l'appareil Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles.

## Portefeuilles matériels Ledger pris en charge

Les appareils matériels Ledger suivants prennent actuellement en charge la mise en jeu, le rachat et la réaffectation de BTC sur la Core Testnet. Pour une expérience et une compatibilité optimales, assurez-vous que votre appareil fonctionne avec le dernier micrologiciel disponible.

| Appareil Ledger    | Version du firmware (_au moment de la rédaction_) |
| ------------------ | -------------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                                |
| **Ledger Nano X**  | 2.5.0                                |
| **Ledger Stax**    | 1.8.0                                |
| **Ledger Flex**    | 1.4.0                                |

:::note
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de mettre en jeu, de racheter ou de réaffecter des BTC sur Core en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours **Ledger Live** pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Vous avez déjà mis en jeu des BTC sur le réseau de test Core en utilisant votre appareil Ledger.
- Si vous utilisez le portefeuille Xverse, votre appareil Ledger est déjà connecté et ajouté à celui-ci.
- La période de verrouillage pour vos BTC verrouillés a expiré, les rendant éligibles à la ré délégation.

> ⚠️ **Remarque:** Vous ne pourrez pas rembourser ou redéléguer les BTC mis en jeu jusqu'à ce que le verrouillage temporaire désigné ait expiré.

## Étapes pour redéléguer les BTC avec verrouillage temporaire expiré

Après l'expiration de la période de verrouillage temporaire pour les BTC mis en jeu, les utilisateurs sont éligibles pour rembourser ou redéléguer leurs actifs Bitcoin délégués. Vous devez utiliser la même adresse de portefeuille Ledger utilisée pour mettre en jeu des BTC pour redéléguer vos BTC après l'expiration du verrouillage temporaire.

### Étape #1: Connecter le portefeuille Core au site Web de staking

1. Accédez au site [Core Testnet Staking Website](https://stake.test2.btcs.network/staking).

2. Connectez votre portefeuille Core Testnet au site Web de staking. N'oubliez pas d'utiliser le même portefeuille que celui que vous aviez utilisé au moment de la mise en jeu des BTC.

3. Cliquez sur le bouton "**Connect**" dans le coin supérieur droit du site Web.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. From the displayed wallet modal, select the wallet of your choice configured for use with Core.

### Step #2: Navigate to Testnet Staking Dashboard

1. Ensure your Ledger device is installed with the latest firmware and connected to your computer with Ledger’s primary Bitcoin (BTC) address.

2. On the Core Testnet Staking website, hover over your connected wallet in the top right corner, and click "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-1.png)
</p>

### Step #3: Navigate to BTC Staking Records

1. On the "**My Staking Dashboard**" page, select "**BTC**" records from the displayed tabs.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-3.png)
</p>

2. This tab lists all the BTC staking records and the validators that you have previously delegated your BTC to. Look for any ‘**Expired**’ records under ‘**Redeem Time**’, and proceed to click ‘**Redelegate**’ under ‘**Action**’.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-2.png)
</p>

### Step #4: Connect Ledger Device for Redelegation

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Core Testnet Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-2.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redelegate BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "Xverse" under the "Wallets Supporting Ledger" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-3.png)
</p>

2. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-8.png)
</p>

### Step #5: Specify BTC Redelegation Details

1. On the displayed "**Restake BTC**" modal, cross-check the **BTC amount to redelegate**, the **Bitcoin Staking Address**, and the **Reward Address on Core Testnet**. To redelegate expired timelocked BTC, users **_must_** connect to the same Bitcoin address as the one initiating the BTC staking transaction.

2. **Set the BTC timelock period:** Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or redelegation. Note that the lock time on the Staking Website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.

3. **Setting Transaction Network Priority Speed:** Select the network priority speed for your transaction.

4. **Confirm Delegation:** Proceed by clicking "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-4.png)
</p>

5. **Verify BTC Staking Address (Optional):** Use the BTC Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-5.png)
</p>

6. **Proceed to Approve Transaction:** Click on "Approve Transaction" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-6.png)
</p>

### Step #6: Review & Approve BTC Redelegation Transaction

The user will be prompted to review and approve the transaction from their Ledger device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-7.png)
</p>

#### Using Xverse Wallet to Approve Transaction

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-10.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-11.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.

2. Always use the Ledger Core Tesnet app, not the Ledger Bitcoin app, for redelegation of expired timelocked BTC on the Core Testnet. L'application Bitcoin ne prend pas en charge les opérations de rachat et de ré délégation. En outre, l'application Ledger Core Testnet prend en charge la signature claire, qui affiche tous les détails de transaction (tels que le montant, les adresses et les frais) directement sur l'écran de votre appareil Ledger. Cela garantit une transparence totale et vous permet de vérifier et d'approuver la transaction, protégeant ainsi vos actifs contre des actions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

3. Une fois la transaction approuvée sur votre appareil Ledger, le site Web de staking affichera une notification "**Transaction soumise**" , confirmant que votre demande de redélégation de BTC a été lancée avec succès.

<p align="center">
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/btc-redelegation.gif)
</p>

3. Après approbation de la transaction, les utilisateurs peuvent également consulter les détails de la transaction sur le BTC Explorer.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-12.png)
</p>

## Conclusion

By following this guide, you’ve successfully redelegated timelock-expired staked BTC on the Core Testnet using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core Testnet app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.
