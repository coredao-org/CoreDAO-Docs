---
sidebar_label: Réattribution de BTC jalonné
description: Guide pour réaffecter des BTC depuis un appareil Ledger sur le réseau Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Utiliser les portefeuilles matériels Ledger pour réaffecter des BTC mis en jeu sur Core

Ce guide utilisateur vous guidera à travers le processus étape par étape de réaffectation de Bitcoin (BTC) verrouillé dans le temps et expiré, mis en jeu, à un nouveau validateur Core en utilisant un portefeuille matériel Ledger, en réinitialisant une nouvelle transaction de mise en jeu de BTC.

:::note
Avant de commencer, assurez-vous que votre appareil Ledger est mis à jour et que l'application Ledger Core est installée. Vous devez utiliser la même adresse de portefeuille BTC principale qui a été utilisée à l'origine pour la mise en jeu de BTC. Pour apprendre comment mettre en jeu des BTC en utilisant Ledger, référez-vous au guide détaillé [here](./btc-staking.md).
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

> **⚠️ Note:** Les versions de micrologiciel mentionnées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de mettre en jeu, de racheter ou de réaffecter des BTC sur Core en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours Ledger Live pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Vous avez précédemment mis en jeu des BTC sur la blockchain Core en utilisant votre appareil Ledger.
- Si vous utilisez le portefeuille Xverse, votre appareil Ledger est déjà connecté et ajouté à celui-ci.
- La période de verrouillage pour vos BTC verrouillés a expiré, les rendant éligibles au remboursement.

> **⚠️ Remarque:** Vous ne pourrez pas rembourser ou redéléguer les BTC mis en jeu jusqu'à ce que le verrouillage temporaire désigné ait expiré.

## Étapes pour redéléguer les BTC avec verrouillage temporaire expiré

Après l'expiration de la période de verrouillage temporaire pour les BTC mis en jeu, les utilisateurs sont éligibles pour rembourser ou redéléguer leurs actifs Bitcoin délégués. Vous devez utiliser la même adresse de portefeuille Ledger utilisée pour mettre en jeu des BTC pour redéléguer vos BTC après l'expiration du verrouillage temporaire.

### Étape #1: Connecter le portefeuille Core au site Web de staking

1. Connectez votre portefeuille Core Mainnet au site Web de staking. N'oubliez pas d'utiliser le même portefeuille que celui que vous aviez utilisé au moment de la mise en jeu des BTC. Cliquez sur le bouton « Connecter » dans le coin supérieur droit du site Web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. Depuis le modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour être utilisé avec Core.

### Étape #2: Accédez au tableau de bord de staking

1. Assurez-vous que votre appareil Ledger est mis à jour avec le dernier firmware et connecté à votre ordinateur avec l'adresse Bitcoin (BTC) principale de Ledger.
2. Accédez au site [Core BTC Staking Website](https://stake.coredao.org/staking)
3. Sur le site Web de staking, survolez votre portefeuille connecté en haut à droite, puis cliquez sur **‘My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-1.png)
</p>

### Étape #3: Accédez aux enregistrements de staking BTC

1. Sur la page "**My Staking Dashboard**", sélectionnez les enregistrements « BTC » parmi les onglets affichés.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-2.png)
</p>

2. Cet onglet répertorie tous les enregistrements de staking BTC et les validateurs auxquels vous avez précédemment délégué vos BTC. Recherchez les enregistrements "**Expired**" sous "**Redeem Time**", puis cliquez sur "**Redelegate**" sous "**Action**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-3.png)
</p>

### Étape #4 : Connectez l'appareil Ledger pour la redélégation

#### Option #1: Connexion de l'appareil Ledger directement au site Web de staking

1. Pour connecter votre appareil Ledger directement au site Web de staking, cliquez sur "**Ledger**" sous la section "**Hardware Wallets**" parmi les modèles de portefeuille affichés. Assurez-vous que votre appareil Ledger est connecté, déverrouillé et que l'application Ledger Core est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-1.png)
</p>

#### Option #2: Connexion de l'appareil Ledger via le portefeuille Xverse

Vous pouvez également utiliser le portefeuille Xverse pour redéléguer des BTC directement depuis votre appareil Ledger. Pour ce faire, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Référez-vous au [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) pour connecter votre appareil Ledger à Xverse.

1. Pour connecter votre appareil Ledger en utilisant le portefeuille Xverse, cliquez sur "**Xverse**" sous la section "**Wallets Supporting Ledger**" parmi les modèles de portefeuille affichés. Assurez-vous que votre Ledger est connecté, déverrouillé et que l'application Ledger Core est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-2.png)
</p>

### Étape #5: Spécifier les détails de réattribution de BTC

1. Sur le modal "**Redelegate BTC**" affiché, vérifiez attentivement le montant de BTC à réattribuer, l'adresse de staking Bitcoin et l'adresse de récompense sur Core. Pour réattribuer des BTC verrouillés dans le temps expirés, les utilisateurs doivent se connecter à la même adresse Bitcoin que celle qui a initié la transaction de staking de BTC.
2. Définissez la période de verrouillage temporel des BTC. Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et disponible à nouveau pour la récupération ou la redélégation. Notez que la durée de verrouillage sur l'interface utilisateur du site Web de staking est basée sur le fuseau horaire local de l'utilisateur, qui peut ne pas correspondre au fuseau horaire UTC de l'appareil Ledger.
3. Spécifiez la vitesse de priorité du réseau pour votre transaction.
4. Procédez en cliquant sur "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-4.png)
</p>

5. **Vérification de l'adresse de staking BTC (facultatif):** Utilisez l'outil de vérification d'adresse de staking BTC pour confirmer que l'adresse de staking BTC affichée correspond à l'adresse attendue avant de procéder.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-5.png)
</p>

6. **Procédez à l'approbation de la transaction:** Cliquez sur "**Approve Transaction**" sur le site Web pour poursuivre la transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-6.png)
</p>

### Étape #6: Réviser et approuver la transaction de réattribution de BTC

L'utilisateur sera invité à examiner et à approuver la transaction depuis son appareil Ledger.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-7.png)
</p>

#### Utilisation du portefeuille Xverse pour approuver la transaction

1. Si vous utilisez un portefeuille Xverse, examinez la transaction. Vérifiez les détails et cliquez sur « Confirmer » sur la notification du portefeuille dans votre navigateur.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/Xverse-wallet-ui.png)
</p>

2. Cliquez sur "**Connect**" sur la fenêtre modale "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/xverse-wallet-ui-2.png)
</p>

3. Procédez pour confirmer et approuver la transaction sur votre appareil Ledger.

#### Approuver la transaction de staking BTC sur l'appareil Ledger

1. Signez la transaction avec votre portefeuille d'appareil Ledger après avoir examiné les détails de la transaction.
2. Utilisez toujours l'application Ledger Core, et non l'application Ledger Bitcoin, pour la réattribution de BTC verrouillés expirés sur la blockchain Core. L'application Bitcoin manque de prise en charge pour les opérations de remboursement et de redélégation. De plus, l'application Ledger Core prend en charge Clear Signing, qui affiche tous les détails de transaction (tels que le montant, les adresses et les frais) directement sur l'écran de votre appareil Ledger. Cela garantit une transparence totale et vous permet de vérifier et d'approuver la transaction, protégeant ainsi vos actifs contre des actions non intentionnelles ou malveillantes. Pour plus de détails sur Clear Signing, référez-vous ici.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

3. Une fois la transaction approuvée sur votre appareil Ledger, le site Web de staking affichera une notification "**Transaction soumise**" , confirmant que votre demande de redélégation de BTC a été lancée avec succès.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-8.png)
</p>

4. Après l'approbation de la transaction, les utilisateurs peuvent également consulter les détails de la transaction sur le BTC Explorer.

## Conclusion

En suivant ce guide, vous avez réussi à redéléguer les BTC mis en staking avec verrouillage temporel expiré sur la blockchain Core en utilisant votre portefeuille matériel Ledger. La combinaison du modèle de verrouillage temporel auto-custodial de Core pour BTC et de la sécurité leader de l'industrie de Ledger, renforcée par Clear Signing via l'application Ledger Core, offre une transparence, une confiance et une sécurité maximales. Votre redélégation réussie pour le staking de BTC signifie que vos BTC continuent à participer à l'écosystème décentralisé de Core sans jamais quitter votre garde.


