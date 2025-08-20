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

2. Depuis le modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour être utilisé avec Core.

### Étape #2: Accédez au tableau de bord de staking

1. Assurez-vous que votre appareil Ledger est mis à jour avec le dernier firmware et connecté à votre ordinateur avec l'adresse Bitcoin (BTC) principale de Ledger.
2. Accédez au site [Core Ledger BTC Staking Website](https://stake.coredao.org/staking).
3. Sur le site Web de staking, survolez votre portefeuille connecté en haut à droite, puis cliquez sur **‘My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-1.png)
</p>

### Étape #3: Accédez aux enregistrements de staking BTC

1. Sur la page "**My Staking Dashboard**", sélectionnez les enregistrements "**BTC**" parmi les onglets affichés.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-2.png)
</p>

2. Cet onglet répertorie tous les enregistrements de staking BTC et les validateurs auxquels vous avez précédemment délégué vos BTC. Recherchez les enregistrements "**Expired**" sous "**Redeem Time**", puis cliquez sur "**Redelegate**" sous "**Action**."

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-3.png)
</p>

### Étape #4: Vérifier les détails de la mise en jeu et de la récupération de BTC

1. Sur le modal "**Redeem BTC**" affiché, vérifiez en croisant les informations l'adresse de mise en jeu de BTC, le montant de BTC qui sera récupéré et l'adresse Bitcoin de réception. Pour récupérer les Bitcoins, vous devez vous connecter à la même adresse de portefeuille Bitcoin que celle ayant initié la transaction de staking Bitcoin.

2. Définissez votre adresse de réception Bitcoin pour recevoir les BTC déverrouillés. Elle ne doit pas nécessairement être la même que celle ayant initié la transaction de staking Bitcoin. Définissez la priorité de vitesse de votre transaction, puis cliquez sur "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-4.png)
</p>

### Étape #5: Signez la transaction de déblocage de BTC sur l'appareil Ledger

1. Cliquez sur "**Sign By Bitcoin Wallet**" pour signer la transaction de récupération de BTC depuis votre appareil Ledger.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-5.png)
</p>

### Étape #5 : Connectez l'appareil Ledger pour la récupération des BTC mis en jeu

#### Option #1: Connexion de l'appareil Ledger directement au site Web de staking

1. Pour connecter votre appareil Ledger directement au site Web de staking, cliquez sur "**Ledger**" sous la section "**Hardware Wallets**" parmi les modèles de portefeuille affichés. Assurez-vous que votre appareil Ledger est connecté, déverrouillé et que l'application Ledger Core est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

#### Option #2: Connexion de l'appareil Ledger via le portefeuille Xverse

Vous pouvez également utiliser le portefeuille Xverse pour redéléguer des BTC directement depuis votre appareil Ledger. Pour ce faire, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Référez-vous au [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) pour connecter votre appareil Ledger à Xverse.

1. Pour connecter votre appareil Ledger en utilisant le portefeuille Xverse, cliquez sur "**Xverse**" sous la section "**Wallets Supporting Ledger**" parmi les modèles de portefeuille affichés. Assurez-vous que votre Ledger est connecté, déverrouillé et que l'application Ledger Core est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

### Étape #6: Examinez et approuvez la transaction sur l'appareil Ledger

Après avoir connecté votre appareil Ledger, assurez-vous que l'appareil est déverrouillé et que l'application Ledger Core est ouverte. Une invite s'affichera à l'écran pour vous demander d'approuver la transaction.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-6.png)
</p>

#### Utilisation du portefeuille Xverse

1. Si vous utilisez un portefeuille Xverse, examinez la transaction. Vérifiez les détails et cliquez sur "**Confirm**" sur la notification du portefeuille dans votre navigateur.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui.png)
</p>

2. Cliquez sur "**Connect**" sur la fenêtre modale "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Procédez pour confirmer et approuver la transaction sur votre appareil Ledger.

#### Approuver la transaction de staking BTC sur l'appareil Ledger

1. Signez la transaction avec votre portefeuille d'appareil Ledger après avoir examiné les détails de la transaction.
2. Utilisez toujours l'application Ledger Core, et non l'application Ledger Bitcoin, pour la réattribution de BTC verrouillés expirés sur la blockchain Core. The Bitcoin app lacks support for redemption/redelegation operations. Further, the Ledger Core app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

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


