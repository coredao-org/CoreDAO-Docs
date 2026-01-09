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
- **Mettez en jeu des BTC uniquement à partir de l'adresse du portefeuille BTC principal:** Le staking de BTC n'est actuellement pris en charge qu'à partir de l'adresse de votre portefeuille BTC principal Ledger. Les adresses secondaires ou dérivées ne sont pas compatibles. Veuillez consulter notre [FAQs](../../../../FAQs/ledger-core-faqs.md) pour obtenir des instructions sur la façon de créer une nouvelle adresse ou identifier votre adresse principale.
- **Seules les adresses Bitcoin Native SegWit sont prises en charge:** Actuellement, seules les adresses Bitcoin Native SegWit sont prises en charge pour le staking de BTC via le matériel Ledger.

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
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de verrouiller dans le temps, de racheter ou de redéléguer Bitcoin sur Core en utilisant votre appareil Ledger, assurez-vous de mettre à jour vers la dernière version pour maintenir la compatibilité et la sécurité. Vérifiez toujours **Ledger Live** pour les mises à jour les plus récentes. Consultez [ici](https://support.ledger.com/article/8458939792669-zd) pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Vous devez avoir une adresse BTC sur votre appareil Ledger, qui peut être obtenue via Ledger Live ou le portefeuille Xverse.
  - Les adresses BTC créées via des portefeuilles autres que Xverse et Ledger Live n'ont pas été testées - utilisez-les à vos propres risques.
  - Pour le portefeuille Xverse, ajoutez votre appareil Ledger au portefeuille Xverse.
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
La signature claire affiche toutes les informations de transaction (par exemple, montant, validateur, frais et adresses) directement sur l'écran de votre appareil Ledger, vous offrant une visibilité complète. Cela vous permet de vérifier en toute confiance ce que vous signez et vous protège contre les transactions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

### Étape #3: Configuration de l'adresse Bitcoin sur l'appareil Ledger

Actuellement, le staking depuis un appareil Ledger n'est pris en charge que via le compte Bitcoin principal sur l'appareil Ledger.

- Si vous avez un nouvel appareil Ledger, le premier compte Bitcoin que vous configurez est le compte principal. Consultez [ici](../../../../FAQs/ledger-core-faqs#8-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-ledger-live) pour les étapes détaillées sur la configuration de l'adresse Bitcoin sur votre appareil Ledger à l'aide de Ledger Live.
- Si vous avez déjà plusieurs comptes Bitcoin configurés sur votre appareil Ledger, consultez [ici](../../../../FAQs/ledger-core-faqs#9-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-xverse-wallet) pour les instructions sur l'identification du compte principal.

> ⚠️ \*\* Avertissement:\*\* Actuellement, seules les adresses Bitcoin générées via Ledger Live et le portefeuille Xverse ont été minutieusement testées et vérifiées pour la compatibilité. Les adresses créées à l'aide d'autres portefeuilles n'ont pas encore été testées et leur fonctionnalité ne peut pas être garantie. Les utilisateurs qui choisissent de procéder avec des portefeuilles non testés doivent le faire à leurs propres risques

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

Avant de connecter votre appareil Ledger au site Web, assurez-vous d'utiliser le compte Bitcoin (BTC) principal de votre appareil Ledger pour miser du BTC sur Core. Consultez le [guide officiel de Ledger](https://support.ledger.com/article/115005195945-zd) pour configurer un compte Bitcoin (BTC) sur votre appareil, si vous ne l'avez pas déjà fait.

#### Option de mise en jeu un : Connecter le portefeuille Ledger directement

1. Sur le site [Core Bitcoin Staking Website](https://stake.coredao.org/staking), cliquez sur "**Connect**" à côté du montant de staking BTC. Assurez-vous que le compte principal est le même compte connecté à votre Ledger Live, car seul le compte principal est pris en charge pour la mise en jeu de BTC.

<p align="center" >
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. Dans la fenêtre modale du portefeuille affichée, sous "**Hardware Wallet**" cliquez sur "**Ledger**". Assurez-vous que votre appareil est déverrouillé et que l'application Core est ouverte. Seules les adresses de type Bitcoin Native SegWit sont prises en charge pour la mise en jeu de BTC sur Core avec Ledger.

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

3. **Confirmer les détails de la mise en jeu de BTC:** Vérifiez le montant de BTC à mettre en jeu. Avant de finaliser, spécifiez les paramètres clés:
   - Confirmez le montant de BTC que vous souhaitez miser (minimum 0,01 BTC).
   - Définissez la durée de verrouillage pour déterminer quand vos Bitcoins seront débloqués. Veuillez noter que l'interface utilisateur du site Web affiche la durée de verrouillage en fonction de l'heure locale de l'utilisateur, qui peut différer du fuseau horaire de l'appareil Ledger, qui est UTC.
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

## FAQs

Avez-vous d'autres questions? Consultez la section [FAQs](../../../../FAQs/ledger-core-faqs.md) pour trouver des réponses aux problèmes courants, des solutions de dépannage et des bonnes pratiques.

## Conclusion

Félicitations ! Vous avez mis en jeu des Bitcoins sur Core avec succès en utilisant votre portefeuille matériel Ledger, en tirant parti de sa sécurité et du modèle de garde auto-administré de Core pour un contrôle total des actifs et une signature transparente via l'application Core. Bienvenue dans l'écosystème Core, où la sécurité, le contrôle et le rendement sont primordiaux!
