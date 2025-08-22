---
sidebar_label: Staking de Bitcoin sur Core
description: Guide pour jalonner des BTC depuis un appareil Ledger sur le réseau Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour récupérer des BTC mis en jeu sur Core

Ce guide utilisateur vous guide à travers le processus de mise en jeu de BTC pour gagner des récompenses CORE sur la blockchain Core en utilisant un portefeuille matériel Ledger. En suivant les étapes ci-dessous, vous pouvez participer au staking Bitcoin auto-custodial de Core tout en gardant le contrôle total de vos actifs.

## Avant de commencer: Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

1. **Utilisez uniquement des appareils Ledger pris en charge:** Le staking de Bitcoin, le remboursement et la réattribution sur Core ne sont pris en charge que sur des portefeuilles matériels Ledger spécifiques avec le dernier micrologiciel. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.

2. **Utilisez toujours l'application Core de Ledger:** Vous devez utiliser l'application Core de Ledger, et non l'application Bitcoin standard, lors du staking ou du remboursement de BTC sur Core. Miser des BTC avec l'application Bitcoin peut entraîner l'impossibilité de récupérer vos BTC, ce qui pourrait entraîner une perte permanente d'actifs.

3. **Mettez en jeu des BTC uniquement à partir de l'adresse du portefeuille BTC principal:** Le staking de BTC n'est actuellement pris en charge qu'à partir de l'adresse de votre portefeuille BTC principal Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles.

## Portefeuilles matériels Ledger pris en charge

Les appareils matériels Ledger suivants prennent actuellement en charge la mise en jeu, le rachat et la réaffectation de BTC sur la blockchain Core Testnet. Pour une expérience et une compatibilité optimales, assurez-vous que votre appareil fonctionne avec le dernier micrologiciel disponible.

| Appareil Ledger    | Version du firmware (_au moment de la rédaction_) |
| ------------------ | -------------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                                |
| **Ledger Nano X**  | 2.5.0                                |
| **Ledger Stax**    | 1.8.0                                |
| **Ledger Flex**    | 1.4.0                                |

<br/>

:::important
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de mettre en jeu, de racheter ou de réaffecter des Btc sur Core Testnet en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours Ledger Live pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

 - Un appareil Ledger pris en charge avec le dernier micrologiciel.
 - Ledger Live est installé et correctement configuré sur votre ordinateur.
 - Si vous utilisez le portefeuille Xverse, votre appareil Ledger est ajouté au portefeuille Xverse.
 - Assurez-vous d'avoir suffisamment de Bitcoin Testnet4 BTC (minimum 0,01 BTC) disponibles sur votre appareil Ledger pour la mise en jeu et pour couvrir les frais de transaction.

## Configuration de l'appareil Ledger

Avant de mettre en jeu des BTC sur le réseau de test Core, il est recommandé de s'assurer que votre portefeuille matériel Ledger est mis à jour avec le dernier firmware compatible et configuré pour fonctionner avec le réseau de Core Testnet.

### Étape 1: Mettre à jour votre appareil Ledger

Assurez-vous que votre appareil Ledger est mis à jour et prêt à l'emploi.

1. Ouvrez **Ledger Live** sur votre ordinateur.
2. Connectez et déverrouillez votre appareil Ledger.
3. Accédez à **My Ledger** dans la barre latérale.
4. Si vous y êtes invité, autorisez l'accès à **Ledger Manager** sur votre appareil.
5. Installez toutes les mises à jour du micrologiciel disponibles pour votre appareil.

#### Configuration de Ledger Live pour le réseau de test

L'application Core Testnet n'est pas installée par défaut sur le Ledger Live Manager. Pour installer et afficher l'application Core Testnet, vous devez activer le "**Developer Mode**" et activer et modifier "**My Ledger Provider**" sur votre appareil Ledger.

##### Activer le mode développeur sur votre appareil Ledger

1. Connectez votre appareil matériel Ledger et déverrouillez-le.

2. Ouvrez l'application Ledger Live et naviguez vers "**Settings**" (situé dans le coin supérieur droit).

3. Naviguez vers le menu "**Experimental Features**", activez le "**Developer Mode**" et "**My Ledger Provider**" sur **4**. Cela affichera les applications de développement et de testnet dans le gestionnaire.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app-1.png)
</p>

#### Installation de l'application Ledger Core Testnet

1. Avec votre appareil connecté à votre ordinateur, ouvrez l'application Ledger Live et accédez à "**My Ledger**".

2. Sous le "**App Catalog**" recherchez "**Core**".

3. Installez l'application "**Core Testnet**". Utilisez _uniquement_ l'application Core Testnet pour miser des Bitcoins sur le réseau de Core Testnet.

<p align="center" style={{zoom:"80%"}}>    
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app.png)
</p>

:::note
Pour miser des BTC sur le réseau de test Core avec un appareil Ledger, les utilisateurs doivent utiliser uniquement l'application Core Testnet. Contrairement à l'application Bitcoin, qui repose sur la signature aveugle, l'application Core prend en charge la signature claire, permettant aux utilisateurs de visualiser et de vérifier pleinement les détails des transactions avant de les signer et de les approuver. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::#### Setup Bitcoin Testnet AccountTo set up a Bitcoin account address that contains the Bitcoin Testnet4 BTC tokens for staking, follow the steps below:1) Install Bitcoin Testnet and the Bitcoin app on your Ledger device.
2) With your device connected to the computer, in the Ledger Live app, navigate to the "**Accounts**" tab and click "**Add Account**".<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>3) Search testnet and select Bitcoin Testnet (BTC). Click on Continue<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>4) Approve the Bitcoin Test app on your hardware wallet device.
5) On the next screen, choose the address format (Native SegWit / SegWit).
6) Click on the **Add Account** button.<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>7) You have successfully added a Bitcoin account on the Bitcoin testnet app.<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>For more details on setting up your first Bitcoin Account on a Ledger device, refer [here](https://support.ledger.com/article/115005195945-zd).#### Get Bitcoin Testnet4 BTC Tokens1) Go to the Receive tab on Ledger Live.<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>2) Select Bitcoin testnet account you want to use and click on "Continue".<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>3) Copy the Bitcoin Testnet account address.<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>4) Use the Bitcoin Testnet4 faucets to receive testnet Bitcoin tokens.<br/>:::note
Always use the Core Testnet app for staking, redeeming, or redelegating Bitcoin on Core Testnet. The standard Bitcoin app does not support redemption operations on Core and may result in permanent loss of access to your staked BTC. Unlike the Ledger Bitcoin app, which uses blind signing where transaction details are obscured from the user, the Ledger Core Testnet app enables Clear Signing. Clear Signing displays all transaction information (e.g., amount, validator, fees, addresses) directly on your Ledger device screen, giving you complete visibility. This enables you to verify what you’re signing confidently and protects you from unintended or malicious transactions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

#### Setup Bitcoin Testnet Account

To set up a Bitcoin account address that contains the Bitcoin Testnet4 BTC tokens for staking, follow the steps below:

1. Install Bitcoin Testnet and the Bitcoin app on your Ledger device.
2. With your device connected to the computer, in the Ledger Live app, navigate to the "**Accounts**" tab and click "**Add Account**".

<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>

3. Search testnet and select Bitcoin Testnet (BTC). Cliquez sur "Continue"

<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>

4. Approuvez l'application Bitcoin Test sur votre appareil de portefeuille matériel.
5. Sur l'écran suivant, choisissez le format d'adresse (Native SegWit / SegWit).
6. Cliquez sur le bouton **Add Account**.

<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>

7. Vous avez ajouté avec succès un compte Bitcoin sur l'application Bitcoin testnet.

<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>

Pour plus de détails sur la configuration de votre premier compte Bitcoin sur un appareil Ledger, cliquez [here](https://support.ledger.com/article/115005195945-zd).

#### Obtenir des jetons Bitcoin Testnet4 BTC

1. Allez dans l'onglet "Receive" sur Ledger Live.

<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>

2. Sélectionnez le compte Bitcoin testnet que vous souhaitez utiliser et cliquez sur "Continue".

<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>

3. Copiez l'adresse du compte Bitcoin Testnet.

<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>

4. Utilisez les faucets Bitcoin Testnet4 pour recevoir des jetons Bitcoin de testnet.

<br/>

:::notez
Utilisez toujours l'application Core Testnet pour miser, échanger ou réaffecter des Bitcoins sur Core Testnet. L'application Bitcoin standard ne prend pas en charge les opérations de remboursement sur Core et peut entraîner une perte permanente d'accès à vos BTC verrouillés dans le temps. Contrairement à l'application Ledger Bitcoin, qui utilise une signature aveugle où les détails de la transaction sont masqués à l'utilisateur, l'application Ledger Core Testnet permet la signature claire. La signature claire affiche toutes les informations de transaction (par exemple, montant, validateur, frais, adresses) directement sur l'écran de votre appareil Ledger, vous offrant une visibilité totale. Cela vous permet de vérifier en toute confiance ce que vous signez et vous protège contre les transactions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

## Mise en jeu de BTC sur Core avec Ledger

Avec votre appareil Ledger connecté et l'application Core Testnet installée, vous pouvez miser des BTC en toute sécurité directement depuis votre portefeuille matériel.

> ⚠️ **Remarque:** Un minimum de 0,01 BTC est requis pour participer à la mise en jeu de Bitcoin sur le réseau principal Core Testnet, ainsi que suffisamment de BTC pour couvrir les frais de transaction.

1. Sur votre appareil Ledger, ouvrez l'application CoreDAO avant de poursuivre.

<p align="center" style={{zoom:"120%"}}>
![core-app-ready](../../../../../static/img/ledger-core/testnet/btc-staking/core-app-ready.png)
</p>

2. Accédez au site [Core Testnet Staking Website](https://stake.test2.btcs.network/staking).

### Connecter le portefeuille Core au site Web de staking

1. Connectez votre portefeuille Core Testnet au site Web de staking. Ceci sera utilisé comme adresse de récompense CORE.

2. Cliquez sur le bouton "**Connect**" dans le coin supérieur droit du site Web.

<p align="center" style={{zoom:"80%"}}>
![connect-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

3. Depuis le modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour être utilisé avec Core Testnet.

### Connecter le portefeuille matériel Ledger à un site Web

Before connecting your Ledger device to the website, it's important to ensure you are using your primary Bitcoin (BTC) account for staking BTC on Core Testnet. Consultez le [official guide from Ledger](https://support.ledger.com/article/115005195945-zd)un compte Bitcoin (BTC) sur votre appareil, si vous ne l'avez pas déjà fait.

#### Option de mise en jeu un : Connecter le portefeuille Ledger directement

1. Sur le site [Core Testnet Bitcoin Staking Website](https://stake.test2.btcs.network/staking), cliquez sur "**Connect**" à côté du montant de staking BTC. Assurez-vous que le compte principal est connecté à votre Ledger Live, car seul ce compte est pris en charge pour la mise en jeu de BTC.

<p align="center" style={{zoom:"50%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. Dans la fenêtre modale du portefeuille affichée, sous "**Hardware Wallet**" cliquez sur "**Ledger**". Assurez-vous que votre appareil est déverrouillé et que l'application Core Testnet est ouverte.

<p align="center" style={{zoom:"60%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-17.png)
</p>

#### Option de staking deux: Connexion de l'appareil Ledger en utilisant le portefeuille Xverse

Les utilisateurs peuvent également utiliser Xverse pour miser des Bitcoins depuis leur appareil Ledger. Pour y parvenir, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. On the Core Bitcoin Staking page, click on "**Connect**" next to BTC Stake Amount. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" style={{zoom:"50%"}}>    
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. From the displayed wallet modal, click on "**Xverse**" under "**Wallets Supporting Ledger**". Make sure your Ledger device is unlocked.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-18.png)
</p>

3. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-19.png)
</p>

4. If requested to switch to "**Bitcoin Testnet4**" accept the notification.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-20.png)
</p>

> ⚠️ **Note:** Only the primary Bitcoin account on the Ledger device is supported to stake BTC; ensure it is the same account connected to the Xverse wallet and used for staking purposes.

### Specify & Confirm BTC Staking Details

1. **Specify BTC Staking & Delegation Details:** Once both Core and Bitcoin wallets are connected, specify the amount of BTC to stake. Select the desired Core validator to delegate your Bitcoin to. To proceed with BTC staking, set the tCORE2 Staking Amount as zero. Click the "Proceed to Stake" button.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-9.png)
</p>

2. **Skip tCORE2 Staking Details:** Users can skip this step and click directly on "Stake BTC" to proceed with staking only Bitcoin by verifying Bitcoin staking details.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-10.png)
</p>

3. **Confirm BTC Staking Details:** Confirm the amount to stake BTC. Before finalizing the Bitcoin staking transaction, it's essential to understand and specify several key parameters:
    - Confirm the amount of BTC you’d like to timelock. The minimum amount to stake is 0.01 BTC.
    - Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or re-delegation.
    - The lock time on the website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.
    - Specify the network priority speed for your transaction.

<p align="center" style={{zoom:"80%"}}>  
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-11.png)
</p>

4. **Verify Bitcoin Staking Address (Optional)**: Use the Bitcoin Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

5. **Proceed to Approve Transaction:** Click on "**Approve Transaction**" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-12.png)
</p>

6. The approval will be directed to the connected wallet.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-13.png)
</p>

### Review and Approve Transaction on Ledger Device

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-14.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-15.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Ensure your device is unlocked and the Core Testnet app is open. Review and approve the BTC staking transaction on your Ledger device. Verify the staking details, including the amount of BTC, the validator and delegator addresses, and the transaction fees. Approve by signing the transaction.

<p align="center" style={{zoom:"60%"}}> 
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

2. Once approved on your Ledger device, the "**Transaction Submitted**" notification will appear on the Core BTC Staking website.

<p align="center">
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/btc-staking.gif)
</p>

3. Cliquez sur "**View on BTC Explorer**" pour afficher les détails de votre transaction de staking BTC sur BTC Explorer.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-16.png)
</p>

> ⚠️ **Notez:** pour être éligible à recevoir des récompenses, il est nécessaire de compléter un cycle complet de staking (00:00:00 - 23:59:29 UTC).

## Conclusion

Félicitations ! Vous avez réussi à miser des Bitcoins en utilisant votre portefeuille matériel Ledger sur le réseau de test Core via le staking Bitcoin auto-géré de Core. En suivant ce guide, vous avez connecté votre appareil Ledger en toute sécurité, installé et utilisé l'application Ledger Core Testnet, et réalisé vos transactions de staking BTC avec confiance. Vous faites désormais partie de l'écosystème Core où sécurité, contrôle et rendement vont de pair!
