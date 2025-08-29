---
sidebar_label: Staking de Bitcoin sur Core
description: Guide de l'utilisateur pour miser des BTC depuis un appareil Ledger sur Core
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour récupérer des BTC mis en jeu sur Core

---

Ce guide utilisateur vous guide à travers le processus de mise en jeu de BTC pour gagner des récompenses CORE sur la blockchain Core en utilisant un portefeuille matériel Ledger. En suivant les étapes ci-dessous, vous pouvez participer au staking Bitcoin auto-custodial de Core tout en gardant le contrôle total de vos actifs.

## Avant de commencer : Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

- **Utilisez uniquement des appareils Ledger pris en charge:** Le staking de Bitcoin, le remboursement et la réattribution sur Core ne sont pris en charge que sur des portefeuilles matériels Ledger spécifiques avec le dernier micrologiciel. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.
- **Mettez en jeu des BTC uniquement à partir de l'adresse du portefeuille BTC principal:** Le staking de BTC n'est actuellement pris en charge qu'à partir de l'adresse de votre portefeuille BTC principal Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles. Please refer to our [FAQs](../../../../FAQs/ledger-core-faqs.md) for instructions on how to create a new address or identify your primary address.
- **Only Native SegWit Bitcoin Addresses are Supported:** Currently, only Native SegWit Bitcoin addresses are supported for BTC staking via Ledger hardware.

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
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Before timelocking, redeeming, or redelegating Bitcoin on Core using your Ledger device, ensure you update to the latest version to maintain compatibility and security. Always check **Ledger Live** for the most current updates. Refer [here](https://support.ledger.com/article/8458939792669-zd) for more details on updating the Ledger device firmware.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- You need to have a BTC address on your Ledger device, which can be acquired through either Ledger Live or the Xverse wallet.
  - BTC addresses created via wallets other than Xverse and Ledger Live have not been tested - use at your own risk.
  - For Xverse Wallet, add your Ledger device to the Xverse Wallet.
- Des BTC suffisants (minimum 0,01 BTC) disponibles sur votre appareil Ledger pour le staking.

## Setting up Ledger Device

Avant de miser des BTC sur Core, assurez-vous que votre portefeuille matériel Ledger est entièrement mis à jour et prêt à être utilisé avec la blockchain Core.

### Étape 1: Mettre à jour votre appareil Ledger

Assurez-vous que votre appareil Ledger est mis à jour et prêt à l'emploi.

1. Ouvrez **Ledger Live** sur votre ordinateur.
2. Connectez et déverrouillez votre appareil Ledger.
3. Accédez à **My Ledger** dans la barre latérale.
4. Si vous y êtes invité, autorisez l'accès à Ledger Manager sur votre appareil.
5. Installez toutes les mises à jour du micrologiciel disponibles pour votre appareil.

### Étape 2 : Installation de l'application Ledger Core

Suivez les étapes ci-dessous pour installer l'application Core sur votre appareil.

1. Avec votre appareil connecté à votre ordinateur, ouvrez l'application Ledger Live et accédez à "**My Ledger**".
2. Sous le "**App Catalog**" recherchez "**Core**".
3. Installez l'application "**Core**". Utilisez uniquement l'application Core pour le staking, le remboursement et la réattribution du Bitcoin verrouillé sur le réseau principal Core.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/install-coredao-app.png)
</p>

:::info
Utilisez toujours l'application Core pour staker, rembourser ou réattribuer du Bitcoin sur le réseau principal Core. L'application Bitcoin standard ne prend pas en charge les opérations de remboursement sur Core et peut entraîner une perte permanente d'accès à vos BTC verrouillés dans le temps. Contrairement à l'application Ledger Bitcoin, qui utilise une signature aveugle où les détails de la transaction sont masqués à l'utilisateur, l'application Ledger Core permet la signature claire.
Clear Signing displays all transaction information (e.g., amount, validator, fees, and addresses) directly on your Ledger device screen, providing you with complete visibility. Cela vous permet de vérifier en toute confiance ce que vous signez et vous protège contre les transactions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

### Step#3: Setting up Bitcoin Address on Ledger Device

Currently, staking from a Ledger device is only supported via the primary Bitcoin account on the Ledger device.

- If you have a new Ledger device, the first Bitcoin account you set up is the primary account. Refer [here](../../../../FAQs/ledger-core-faqs#8-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-ledger-live) for detailed steps on setting up the Bitcoin Address on your Ledger device using Ledger Live.
- If you already have multiple Bitcoin accounts set up on your ledger device, refer [here](../../../../FAQs/ledger-core-faqs#9-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-xverse-wallet) for instructions on identifying the primary account.

> ⚠️ **Disclaimer:** _Currently, only Bitcoin addresses generated through Ledger Live and Xverse Wallet have been thoroughly tested and verified for compatibility. Addresses created using other wallets have not yet been tested, and functionality cannot be guaranteed. Users choosing to proceed with untested wallets should do so at their own risk._

## Mise en jeu de BTC sur Core avec Ledger

Avec votre appareil Ledger connecté et l'application Core installée, vous pouvez miser des BTC en toute sécurité directement depuis votre portefeuille matériel.

> ⚠️ **Remarque:** Un minimum de 0,01 BTC est requis pour participer à la mise en jeu de Bitcoin sur le réseau principal Core, ainsi que suffisamment de BTC pour couvrir les frais de transaction. Pour plus de détails sur la configuration de votre premier compte Bitcoin sur un appareil Ledger, référez-vous ici.

1. Sur votre appareil Ledger, ouvrez l'application Core **Core app** avant de continuer.

<p align="center">
![ready-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/coredao-app-ready.png)
</p>

2. Navigate to the [Core BTC Staking Website](https://stake.coredao.org/staking).

### Connecter le portefeuille Core au site Web de staking

1. Connectez votre portefeuille Core Mainnet au site Web de staking. Ceci sera utilisé comme adresse de récompense CORE.

2. Cliquez sur le bouton "**Connect**" dans le coin supérieur droit du site Web. Depuis le modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour être utilisé avec Core.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

### Connecter le portefeuille matériel Ledger à un site Web

Before connecting your Ledger device to the website, ensure you are using your Ledger device’s primary Bitcoin (BTC) account for staking BTC on Core. Refer to the [official guide from Ledger](https://support.ledger.com/article/115005195945-zd) to set up a Bitcoin (BTC) account on your device, if you haven't already done so.

#### Option de mise en jeu un : Connecter le portefeuille Ledger directement

1. Sur le site [Core Bitcoin Staking Website](https://stake.coredao.org/staking), cliquez sur "**Connect**" à côté du montant de staking BTC. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" >
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. Dans la fenêtre modale du portefeuille affichée, sous "**Hardware Wallet**" cliquez sur "**Ledger**". Assurez-vous que votre appareil est déverrouillé et que l'application Core est ouverte. Note that only the Bitcoin Native SegWit type addresses are supported for BTC staking on Core with Ledger.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-1.png)
</p>

#### Option #2: Connexion de l'appareil Ledger via le portefeuille Xverse

Les utilisateurs peuvent également utiliser Xverse pour miser des Bitcoins depuis leur appareil Ledger. Pour ce faire, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Référez-vous au [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) pour connecter votre appareil Ledger à Xverse.

1. Sur le site [Core Bitcoin Staking Website](https://stake.coredao.org/staking), cliquez sur "**Connect**" à côté du montant de staking BTC. Assurez-vous que le compte principal est connecté à votre Ledger Live, car seul ce compte est pris en charge pour la mise en jeu de BTC.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. Dans la fenêtre modale du portefeuille affichée, cliquez sur "**Xverse**" sous "**Wallets Supporting Ledger**". Assurez-vous que votre appareil Ledger est déverrouillé.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-2.png)
</p>

3. Déverrouillez votre appareil Ledger et confirmez la connexion via l'extension de portefeuille Xverse.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-3.png)
</p>

> ⚠️ **Remarque:** Seul le compte Bitcoin principal sur l'appareil Ledger est pris en charge pour miser des BTC. Assurez-vous qu'il s'agit du même compte connecté au portefeuille Xverse et utilisé à des fins de staking.

### Spécifiez et confirmez les détails de mise en jeu de BTC

1. **Spécifiez les détails de mise en jeu et de délégation de BTC :** Une fois que les portefeuilles Core et Bitcoin sont connectés, spécifiez le montant de BTC à miser. Sélectionnez le validateur Core souhaité pour déléguer vos Bitcoins. Pour procéder à la mise en jeu de BTC, spécifiez le montant de mise en jeu CORE comme étant zéro. Cliquez sur le bouton "**Proceed to Stake**" .

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-3.png)
</p>

2. **Ignorer les détails du staking CORE:** Les utilisateurs peuvent ignorer cette étape et cliquer directement sur "Staker BTC" pour procéder au staking de Bitcoin uniquement en vérifiant les détails du staking Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-4.png)
</p>

3. **Confirm BTC Staking Details:** Verify the amount of BTC to be staked. Before finalizing, specify key parameters:
   - Confirm the BTC amount you'd like to stake (minimum 0.01 BTC).
   - Set the lock time to determine when your Bitcoin will be unlocked. Please note that the website's user interface displays the lock time based on the user's local time, which may differ from the time zone of the Ledger device, which is UTC.
   - Spécifiez la vitesse de priorité du réseau pour votre transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-5.png)
</p>

4. **Vérification de l'adresse de staking BTC (facultatif):** Utilisez l'outil de vérification d'adresse de staking BTC pour confirmer que l'adresse de staking BTC affichée correspond à l'adresse attendue avant de procéder.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-6.png)
</p>

5. **Procédez à l'approbation de la transaction:** Cliquez sur "**Approve Transaction**" sur le site Web pour poursuivre la transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-7.png)
</p>

### Examinez et approuvez la transaction sur l'appareil Ledger

#### Utilisation du portefeuille Xverse

1. Si vous utilisez un portefeuille Xverse, examinez la transaction. Vérifiez les détails et cliquez sur "**Confirm**"sur la notification de portefeuille dans votre navigateur.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

2. Cliquez sur "**Connect**" sur la fenêtre modale "**Connect Your Ledger**".

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

3. Procédez pour confirmer et approuver la transaction sur votre appareil Ledger.

#### Approuver la transaction de staking BTC sur l'appareil Ledger

1. Assurez-vous que votre appareil est déverrouillé et que l'application Core est ouverte. Examinez et approuvez la transaction de staking BTC sur votre appareil Ledger. Vérifiez les détails de la transaction de staking BTC sur votre Ledger et appuyez sur les boutons pour approuver. Approuvez en signant la transaction.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

2. Une fois approuvée sur votre appareil Ledger, la notification "**Transaction Submitted**" apparaîtra sur le site Web de staking Core BTC.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-8.png)
</p>

3. Cliquez sur "**View on BTC Explorer**" pour afficher les détails de votre transaction de staking BTC sur l'explorateur BTC.

> ⚠️ \*\*Aussi, pour être éligible à recevoir des récompenses, il est nécessaire de compléter un cycle complet de staking (00:00:00 - 23:59:29 UTC).

## Conclusion

Félicitations ! You've successfully staked Bitcoin on Core using your Ledger hardware wallet, leveraging its security and Core's self-custodial model for complete asset control and transparent signing via the Core app. Welcome to the Core ecosystem, where security, control, and yield are paramount!
