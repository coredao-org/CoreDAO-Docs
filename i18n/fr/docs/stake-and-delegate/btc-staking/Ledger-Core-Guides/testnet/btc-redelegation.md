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

4. À partir du modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour une utilisation avec Core.

### Étape #2: Accédez au tableau de bord de staking Testnet

1. Assurez-vous que votre appareil Ledger est mis à jour avec le dernier firmware et connecté à votre ordinateur avec l'adresse Bitcoin (BTC) principale de Ledger.

2. Sur le site Web de mise en jeu du réseau de test Core, survolez votre portefeuille connecté dans le coin supérieur droit et cliquez sur "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-1.png)
</p>

### Étape #3: Accédez aux enregistrements de staking BTC

1. Sur la page "**My Staking Dashboard**", sélectionnez les enregistrements "**BTC**" parmi les onglets affichés.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-3.png)
</p>

2. Cet onglet répertorie tous les enregistrements de staking BTC et les validateurs auxquels vous avez précédemment délégué vos BTC. Recherchez les enregistrements "**Expired**" sous "**Redeem Time**", puis cliquez sur "**Redelegate**" sous "**Action**’.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-2.png)
</p>

### Étape #4: Connecter l'appareil Ledger pour la ré délégation

#### Option #1: Connecter l'appareil Ledger directement au site Web de mise en jeu

1. Pour connecter votre appareil Ledger directement au site Web de mise en jeu du réseau de test Core, cliquez sur "**Ledger**" sous la section "**Hardware Wallets**" du modèle de portefeuille affiché. Assurez-vous que votre appareil Ledger est connecté, déverrouillé et que l'application Ledger Core Testnet est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-2.png)

</p>

#### Option #2: Connexion de l'appareil Ledger via le portefeuille Xverse

Vous pouvez également utiliser le portefeuille Xverse pour redéléguer des BTC directement depuis votre appareil Ledger. Pour y parvenir, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Référez-vous au [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) pour connecter votre appareil Ledger à Xverse.

1. Pour connecter votre appareil Ledger en utilisant le portefeuille Xverse, cliquez sur "**Xverse**" sous la section "**Wallets Supporting Ledger**" parmi les modèles de portefeuille affichés. Assurez-vous que votre Ledger est connecté, déverrouillé et que l'application Ledger Core Testnet est ouverte sur votre appareil.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-3.png)
</p>

2. Déverrouillez votre appareil Ledger et confirmez la connexion via l'extension de portefeuille Xverse.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-8.png)
</p>

### Étape #5: Spécifier les détails de réattribution de BTC

1. Sur le modal "**Restake BTC**"affiché, vérifiez attentivement le montant de **BTC amount to redelegate**, **Bitcoin Staking Address** et **Reward Address on Core Testnet**. Pour réattribuer des BTC verrouillés dans le temps expirés, les utilisateurs doivent **_must_** se connecter à la même adresse Bitcoin que celle qui a initié la transaction de staking de BTC.

2. **Définir la période de verrouillage temporel des BTC:** La définition de la durée de verrouillage détermine quand vos Bitcoins seront débloqués et de nouveau disponibles pour un rachat ou une ré délégation. Notez que la durée de verrouillage sur l'interface utilisateur du site Web de staking est basée sur le fuseau horaire local de l'utilisateur, qui peut ne pas correspondre au fuseau horaire UTC de l'appareil Ledger.

3. **Définition de la vitesse de priorité du réseau pour la transaction:** Sélectionnez la vitesse de priorité du réseau pour votre transaction.

4. **Confirmer la délégation:** Procédez en cliquant sur "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-4.png)
</p>

5. **Vérification de l'adresse de staking BTC (facultatif):** Utilisez l'outil de vérification d'adresse de staking BTC pour confirmer que l'adresse de staking BTC affichée correspond à l'adresse attendue avant de procéder.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-5.png)
</p>

6. **Procédez à l'approbation de la transaction:** Cliquez sur "**Approve Transaction**" sur le site Web pour poursuivre la transaction.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-6.png)
</p>

### Étape #6: Réviser et approuver la transaction de réattribution de BTC

L'utilisateur sera invité à examiner et à approuver la transaction depuis son appareil Ledger.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-7.png)
</p>

#### Utilisation du portefeuille Xverse pour approuver la transaction

1. Si vous utilisez un portefeuille Xverse, examinez la transaction. Vérifiez les détails et cliquez sur "**Confirm**"sur la notification de portefeuille dans votre navigateur.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-10.png)
</p>

2. Cliquez sur "**Connect**" sur la fenêtre modale "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-11.png)
</p>

3. Procédez pour confirmer et approuver la transaction sur votre appareil Ledger.

#### Approuver la transaction de staking BTC sur l'appareil Ledger

1. Signez la transaction avec votre portefeuille d'appareil Ledger après avoir examiné les détails de la transaction.

2. Utilisez toujours l'application Ledger Core Testnet., et non l'application Ledger Bitcoin, pour la réattribution de BTC verrouillés expirés sur la Core Testnet. L'application Bitcoin ne prend pas en charge les opérations de rachat et de ré délégation. En outre, l'application Ledger Core Testnet prend en charge la signature claire, qui affiche tous les détails de transaction (tels que le montant, les adresses et les frais) directement sur l'écran de votre appareil Ledger. Cela garantit une transparence totale et vous permet de vérifier et d'approuver la transaction, protégeant ainsi vos actifs contre des actions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

3. Une fois la transaction approuvée sur votre appareil Ledger, le site Web de staking affichera une notification "**Transaction soumise**" , confirmant que votre demande de redélégation de BTC a été lancée avec succès.

<p align="center">
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/btc-redelegation.gif)
</p>

3. Après approbation de la transaction, les utilisateurs peuvent également consulter les détails de la transaction sur le BTC Explorer.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-12.png)
</p>

## FAQs

Avez-vous d'autres questions? Consultez la section [FAQs](../../../../FAQs/ledger-core-faqs.md) pour trouver des réponses aux problèmes courants, des solutions de dépannage et des bonnes pratiques.

## Conclusion

En suivant ce guide, vous avez réussi à ré déléguer des BTC mis en jeu avec verrouillage temporel expiré sur le réseau de test Core en utilisant votre portefeuille matériel Ledger. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core Testnet app, provides maximum transparency, confidence, and safety. Votre ré délégation réussie pour la mise en jeu de BTC signifie que vos BTC continuent à participer à l'écosystème décentralisé de Core sans jamais quitter votre garde.
