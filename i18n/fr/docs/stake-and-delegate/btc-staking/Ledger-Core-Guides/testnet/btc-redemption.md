---
sidebar_label: Réattribution de BTC jalonné
description: Guide pour récupérer des BTC verrouillés expirés depuis un appareil Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour récupérer des BTC mis en jeu sur Core

Ce guide utilisateur vous guidera à travers le processus étape par étape pour récupérer vos Bitcoins (BTC) mis en jeu sur la blockchain Core Testnet en utilisant un portefeuille matériel Ledger.

:::note
Avant de commencer, assurez-vous que votre appareil Ledger est mis à jour et que l'application Ledger CoreTestnet est installée. Vous devez utiliser la même adresse de portefeuille BTC principale qui a été utilisée à l'origine pour la mise en jeu de BTC. Pour apprendre comment mettre en jeu des BTC en utilisant Ledger, référez-vous au guide détaillé [here](./btc-staking.md).
:::

## Avant de commencer : Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

1. Utilisez uniquement des appareils Ledger pris en charge: La mise en jeu, le rachat et la ré délégation de BTC sur le réseau de Core Testnet sont pris en charge uniquement sur des appareils matériels Ledger spécifiques avec le dernier firmware. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.

2. Utilisez toujours l'application CoreDAO de Ledger : Vous devez utiliser l'application Ledger Core Testnet (et non l'application Ledger Bitcoin) pour le staking, le rachat ou la réattribution de BTC sur Core Testnet. L'application Bitcoin ne prend pas en charge les opérations de rachat de BTC mis en jeu et peut empêcher un rachat réussi.

3. Mise en staking de BTC uniquement à partir de l'adresse du portefeuille BTC principal : Actuellement, la mise en staking, le rachat et la réattribution de BTC sur Core Testnet via Ledger sont uniquement pris en charge à partir de l'adresse BTC principale de l'appareil Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles.

## Portefeuilles matériels Ledger pris en charge

Les appareils matériels Ledger suivants prennent actuellement en charge la mise en jeu, le rachat et la réaffectation de BTC sur la blockchain Core Testnet. Pour une expérience et une compatibilité optimales, assurez-vous que votre appareil fonctionne avec le dernier micrologiciel disponible.

| Appareil Ledger    | Version du firmware (_au moment de la rédaction_) |
| ------------------ | -------------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                                |
| **Ledger Nano X**  | 2.5.0                                |
| **Ledger Stax**    | 1.8.0                                |
| **Ledger Flex**    | 1.4.0                                |

:::note
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de mettre en jeu, de racheter ou de réaffecter des Btc sur Core Testnet en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours Ledger Live pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## ## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Vous avez déjà mis en jeu des BTC sur le réseau de test Core en utilisant votre appareil Ledger.
- Si vous utilisez le portefeuille Xverse, votre appareil Ledger est déjà connecté et ajouté à celui-ci.
- La période de verrouillage de vos BTC bloqués a expiré, ce qui les rend éligibles au rachat.

> ⚠️ **Remarque:** Vous ne pourrez pas rembourser ou redéléguer les BTC mis en jeu jusqu'à ce que le verrouillage temporaire désigné ait expiré.

## Étapes pour récupérer des BTC à verrouillage temporel expirés

Après l'expiration de la période de verrouillage temporaire pour les BTC mis en jeu, les utilisateurs sont éligibles pour rembourser ou redéléguer leurs actifs Bitcoin délégués. Vous devez utiliser la même adresse de portefeuille Ledger utilisée pour la mise en staking de BTC pour racheter vos BTC après l'expiration du verrouillage.

### Étape #1: Connecter le portefeuille Core au site Web de staking

1. Accédez au site [Core Testnet Staking Website](https://stake.test2.btcs.network/staking).

2. Connectez votre portefeuille Core Testnet au site Web de staking. _N'oubliez pas d'utiliser le même portefeuille que celui que vous aviez utilisé au moment de la mise en jeu des BTC_.

3. Cliquez sur le bouton "**Connect**" dans le coin supérieur droit du site Web.

<p align="center" style={{zoom:"80%"}}>
![conenct-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. Dans la fenêtre modale du portefeuille affichée, sélectionnez le portefeuille de votre choix configuré pour une utilisation avec Core Testnet.

### Étape #2: Accédez au tableau de bord de staking Testnet

1. Assurez-vous que votre appareil Ledger est mis à jour avec le dernier firmware et connecté à votre ordinateur avec l'adresse Bitcoin (BTC) principale de Ledger.

2. Sur le site Web de mise en jeu du réseau de test Core, survolez votre portefeuille connecté dans le coin supérieur droit et cliquez sur "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![my-staking](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-1.png)
</p>

### Étape #3: Accédez aux enregistrements de staking BTC

1. Sur la page "**My Staking Dashboard**", sélectionnez les enregistrements "**BTC**" parmi les onglets affichés.

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-3.png)
</p>

2. Cet onglet répertorie tous les enregistrements de staking BTC et les validateurs auxquels vous avez précédemment délégué vos BTC. Recherchez les enregistrements "**Expired**" sous "**Redeem Time**", puis cliquez sur ‘**Redeem**’ sous "**Action**.’

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-1.png)
</p>

### Étape #4: Vérifier les détails de la mise en jeu et de la récupération de BTC

1. Sur la fenêtre modale "**Redeem BTC**" affichée, vérifiez attentivement **l'adresse de staking BTC**, le **montant de BTC** qui sera racheté et **l'adresse Bitcoin de réception**. Pour récupérer les Bitcoins, vous **_devez_** vous connecter à la même adresse de portefeuille Bitcoin que celle ayant initié la transaction de staking Bitcoin.

2. Définissez votre **adresse de réception Bitcoin** pour recevoir les BTC déverrouillés. Elle ne doit pas nécessairement être la même que celle ayant initié la transaction de staking Bitcoin. Définissez la priorité de vitesse de votre transaction, puis cliquez sur "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![verify-tx-details](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-12.png)
</p>

### Étape #5: Signez la transaction de déblocage de BTC sur l'appareil Ledger

1. Cliquez sur "**Sign By Bitcoin Wallet**" pour signer la transaction de récupération de BTC depuis votre appareil Ledger.

<p align="center" style={{zoom:"40%"}}>
![sign-tx](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-13.png)
</p>

### Step#5: Connect Ledger Device for Redemption of Staked BTC

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Core Testnet Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![conenct-ledger-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-2.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redeem BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "**Xverse**" under the "**Wallets Supporting Ledger**" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-3.png)
</p>

2. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![connect-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-8.png)
</p>

### Step#6: Review & Approve Transaction on Ledger Device

1. After connecting your Ledger device, ensure that the device is unlocked and the Ledger Core Testnet app is open. You will be prompted on the screen to approve the transaction.

<p align="center" style={{zoom:"60%"}}>
![prompt-tx-approval](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-7.png)
</p>

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-10.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledge**r" modal.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-11.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.

2. Always use the Ledger Core Testnet app, not the Ledger Bitcoin app, to redeem the staked BTC on the Core Testnet. The Bitcoin app lacks support for redemption/redelegation operations. En outre, l'application Ledger Core Testnet prend en charge la signature claire, qui affiche tous les détails de transaction (tels que le montant, les adresses et les frais) directement sur l'écran de votre appareil Ledger. Cela garantit une transparence totale et vous permet de vérifier et d'approuver la transaction, protégeant ainsi vos actifs contre des actions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-redeem/btc-redeem-testnet.gif)
</p>

4. Une fois la transaction approuvée sur votre appareil Ledger, le site Web de staking affichera une notification "**Transaction Submitted**", confirmant que votre demande de redélégation de BTC a été lancée avec succès.

<p align="center"  style={{zoom:"40%"}}>
![tx-submitted](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-14.png)
</p>

5. Après confirmation du bloc Bitcoin de la transaction de récupération, vérifiez que les BTC récupérés sont retournés à votre adresse Bitcoin de réception. (Cela peut prendre quelques minutes). Vous pouvez également consulter les détails de la transaction sur l'explorateur de blockchain BTC (BTC Explorer).

## Conclusion

En suivant ce guide, vous avez réussi à récupérer des BTC mis en jeu sur la blockchain Core en utilisant votre portefeuille matériel Ledger. La combinaison du modèle de staking BTC auto-custodial de Core et de la sécurité de pointe de Ledger, renforcée par la signature claire via l'application Ledger Core Testnet, offre une transparence, une confiance et une sécurité maximales. Votre récupération réussie marque une interaction sécurisée et transparente avec l'infrastructure décentralisée de Core. Vous avez désormais la pleine propriété de vos BTC récupérés.
