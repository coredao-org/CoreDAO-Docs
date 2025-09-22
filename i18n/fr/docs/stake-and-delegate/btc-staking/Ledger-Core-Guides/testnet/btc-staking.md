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

4. **Type d'adresse Bitcoin Native Segwit uniquement pris en charge:** Actuellement, seules les adresses Bitcoin Native SegWit sont prises en charge pour la mise en jeu de BTC via le matériel Ledger.

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
- Vous devez avoir une adresse BTC sur votre appareil Ledger, qui peut être obtenue via Ledger Live ou le portefeuille Xverse.
  - Les adresses BTC créées via des portefeuilles autres que Xverse et Ledger Live n'ont pas été testées - utilisez-les à vos propres risques.
  - Pour le portefeuille Xverse, ajoutez votre appareil Ledger au portefeuille Xverse.
- Assurez-vous d'avoir suffisamment de Bitcoin Testnet4 BTC (minimum 0,01 BTC) disponibles sur votre appareil Ledger pour la mise en jeu et pour couvrir les frais de transaction.

## Configuration de l'appareil Ledger

Avant de mettre en jeu des BTC sur le réseau de test Core, il est recommandé de s'assurer que votre portefeuille matériel Ledger est mis à jour avec le dernier firmware compatible et configuré pour fonctionner avec le réseau de Core Testnet.

### Mettez à jour votre appareil Ledger

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

##### Installation de l'application Ledger Core Testnet

1. Avec votre appareil connecté à votre ordinateur, ouvrez l'application Ledger Live et accédez à "**My Ledger**".

2. Sous le "**App Catalog**" recherchez "**Core**".

3. Installez l'application "**Core Testnet**". Utilisez _uniquement_ l'application Core Testnet pour miser des Bitcoins sur le réseau de Core Testnet.

<p align="center" style={{zoom:"80%"}}>    
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app.png)
</p>

:::note
Pour miser des BTC sur le réseau de test Core avec un appareil Ledger, les utilisateurs doivent utiliser uniquement l'application Core Testnet. Contrairement à l'application Bitcoin, qui repose sur la signature aveugle, l'application Core prend en charge la signature claire, permettant aux utilisateurs de visualiser et de vérifier pleinement les détails des transactions avant de les signer et de les approuver. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::#### Configurer un compte Bitcoin TestnetActuellement, la mise en jeu à partir d'un appareil Ledger n'est prise en charge que via le compte Bitcoin principal sur l'appareil Ledger.
Si vous avez un nouvel appareil Ledger, le premier compte Bitcoin que vous configurez est le compte principal. Référez-vous ici pour des étapes détaillées sur la configuration de l'adresse Bitcoin sur l'appareil Ledger en utilisant Ledger Live.
Si vous avez déjà plusieurs comptes Bitcoin configurés sur votre appareil Ledger, référez-vous ici pour des instructions sur la façon d'identifier le compte principal.⚠️ Avis de non-responsabilité : Actuellement, seules les adresses Bitcoin générées via Ledger Live et le portefeuille Xverse ont été minutieusement testées et vérifiées pour la compatibilité. Les adresses créées à l'aide d'autres portefeuilles n'ont pas encore été testées et leur fonctionnalité ne peut pas être garantie. Les utilisateurs qui choisissent de procéder avec des portefeuilles non testés le font à leurs propres risques.##### Pour configurer une adresse de compte Bitcoin qui contient les jetons Bitcoin Testnet4 BTC pour la mise en jeu, suivez les étapes ci-dessous:1) Install Bitcoin Testnet and the Bitcoin app on your Ledger device.
2) Avec votre appareil connecté à l'ordinateur, dans l'application Ledger Live, naviguez vers l'onglet "**Accounts**" et cliquez sur "**Add Account**".<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>3) Recherchez "testnet" et sélectionnez Bitcoin Testnet (BTC). Click on Continue<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>4) Approuvez l'application Bitcoin Test sur votre appareil de portefeuille matériel.
5) Sur l'écran suivant, choisissez le format d'adresse (Native SegWit). Notez que seul le type d'adresse Bitcoin Native Segwit est pris en charge pour la mise en jeu de BTC sur Core en utilisant les portefeuilles matériels Ledger.
6) Cliquez sur le bouton **Add Account**.<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>7) Vous avez ajouté avec succès un compte Bitcoin sur l'application Bitcoin testnet.<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>pour plus de détails sur la configuration de votre premier compte Bitcoin sur un appareil Ledger.refer [here](https://support.ledger.com/article/115005195945-zd).#### Obtenir des jetons Bitcoin Testnet4 BTC.1) Allez dans l'onglet "Receive" sur Ledger Live.<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>2) Sélectionnez le compte Bitcoin testnet que vous souhaitez utiliser et cliquez sur "Continue".<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>3) Copiez l'adresse du compte Bitcoin Testnet.<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>4) Utilisez les faucets Bitcoin Testnet4 pour recevoir des jetons Bitcoin de testnet.<br/>:::notez
Utilisez toujours l'application Core Testnet pour miser, échanger ou réaffecter des Bitcoins sur Core Testnet. L'application Bitcoin standard ne prend pas en charge les opérations de remboursement sur Core et peut entraîner une perte permanente d'accès à vos BTC verrouillés dans le temps. Contrairement à l'application Ledger Bitcoin, qui utilise une signature aveugle où les détails de la transaction sont masqués à l'utilisateur, l'application Ledger Core Testnet permet la signature claire. La signature claire affiche toutes les informations de transaction (par exemple, montant, validateur, frais, adresses) directement sur l'écran de votre appareil Ledger, vous offrant une visibilité totale. Cela vous permet de vérifier en toute confiance ce que vous signez et vous protège contre les transactions non intentionnelles ou malveillantes. Pour plus de détails sur la signature claire, référez [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

#### Configurer un compte Bitcoin Testnet

Actuellement, la mise en jeu à partir d'un appareil Ledger n'est prise en charge que via le compte Bitcoin principal sur l'appareil Ledger.
Si vous avez un nouvel appareil Ledger, le premier compte Bitcoin que vous configurez est le compte principal. Référez-vous ici pour des étapes détaillées sur la configuration de l'adresse Bitcoin sur l'appareil Ledger en utilisant Ledger Live.
Si vous avez déjà plusieurs comptes Bitcoin configurés sur votre appareil Ledger, référez-vous ici pour des instructions sur la façon d'identifier le compte principal.

⚠️ Avis de non-responsabilité : Actuellement, seules les adresses Bitcoin générées via Ledger Live et Xverse Wallet ont été testées et vérifiées de manière approfondie pour la compatibilité. Les adresses créées à l'aide d'autres portefeuilles n'ont pas encore été testées et la fonctionnalité ne peut pas être garantie. Les utilisateurs qui choisissent de procéder avec des portefeuilles non testés le font à leurs propres risques.

##### Configurer l'adresse Bitcoin en utilisant Ledger Live

Pour configurer une adresse de compte Bitcoin contenant des jetons Bitcoin Testnet4 BTC pour le staking, suivez les étapes ci-dessous:

1. Install Bitcoin Testnet and the Bitcoin app on your Ledger device.
2. Avec votre appareil connecté à l'ordinateur, dans l'application Ledger Live, naviguez vers l'onglet "**Accounts**" et cliquez sur "**Add Account**".

<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>

3. Recherchez "testnet" et sélectionnez Bitcoin Testnet (BTC). Cliquez sur "Continue"

<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>

4. Approuvez l'application Bitcoin Test sur votre appareil de portefeuille matériel.
5. Sur l'écran suivant, choisissez le format d'adresse (Native SegWit). Notez que seul le type d'adresse Bitcoin Native Segwit est pris en charge pour le staking de BTC sur Core en utilisant les portefeuilles matériels Ledger.
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

Les utilisateurs peuvent également utiliser Xverse pour miser des Bitcoins depuis leur appareil Ledger. Pour y parvenir, les utilisateurs doivent d'abord ajouter leur appareil Ledger à leur portefeuille Xverse comme prérequis. Référez-vous au [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) pour connecter votre appareil Ledger à Xverse.

1. Sur le site Core Bitcoin Staking Website, cliquez sur "**Connect**" à côté du montant de staking BTC. Seul le compte principal est pris en charge pour le staking de BTC ; assurez-vous qu'il s'agit du même compte connecté à votre Ledger Live.

<p align="center" style={{zoom:"50%"}}>    
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. Dans la fenêtre modale du portefeuille affichée, cliquez sur "**Xverse**" sous "**Wallets Supporting Ledger**". Assurez-vous que votre appareil Ledger est déverrouillé.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-18.png)
</p>

3. Déverrouillez votre appareil Ledger et confirmez la connexion via l'extension de portefeuille Xverse.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-19.png)
</p>

4. Si vous êtes invité à basculer vers "**Bitcoin Testnet4**", acceptez la notification.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-20.png)
</p>

> ⚠️ **Remarque:** Seul le compte Bitcoin principal sur l'appareil Ledger est pris en charge pour miser des BTC. Assurez-vous qu'il s'agit du même compte connecté au portefeuille Xverse et utilisé à des fins de staking.

### Spécifiez et confirmez les détails de mise en jeu de BTC

1. **Spécifiez les détails de mise en jeu et de délégation de BTC :** Une fois que les portefeuilles Core et Bitcoin sont connectés, spécifiez le montant de BTC à miser. Sélectionnez le validateur Core souhaité pour déléguer vos Bitcoins. Pour procéder à la mise en jeu de BTC, spécifiez le montant de mise en jeu tCORE2 comme étant zéro. Cliquez sur le bouton "**Proceed to Stake**" .

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-9.png)
</p>

2. **Ignorer les détails du staking tCORE2:** Les utilisateurs peuvent ignorer cette étape et cliquer directement sur "Staker BTC" pour procéder au staking de Bitcoin uniquement en vérifiant les détails du staking Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-10.png)
</p>

3. **Confirmer les détails du staking BTC:** Confirmez le montant de BTC à staker. Avant de finaliser le processus de staking de Bitcoin, il est important de comprendre et de spécifier plusieurs paramètres clés :
   - Confirmez le montant de BTC que vous souhaitez verrouiller dans le cadre d'un timelock. Le montant minimum à déléguer est de 0,01 BTC.
   - La définition de la durée de verrouillage détermine quand vos Bitcoins seront déverrouillés et à nouveau disponibles pour le rachat ou la réattribution.
   - Notez que la durée de verrouillage sur l'interface utilisateur du site Web de staking est basée sur le fuseau horaire local de l'utilisateur, qui peut ne pas correspondre au fuseau horaire UTC de l'appareil Ledger.
   - Spécifiez la vitesse de priorité du réseau pour votre transaction.

<p align="center" style={{zoom:"80%"}}>  
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-11.png)
</p>

4. **Vérification de l'adresse de staking BTC (facultatif):** Utilisez l'outil de vérification d'adresse de staking BTC pour confirmer que l'adresse de staking BTC affichée correspond à l'adresse attendue avant de procéder.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

5. **Procédez à l'approbation de la transaction:** Cliquez sur "**Approve Transaction**" sur le site Web pour poursuivre la transaction.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-12.png)
</p>

6. L'approbation sera dirigée vers le portefeuille connecté.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-13.png)
</p>

### Examinez et approuvez la transaction sur l'appareil Ledger

#### Utilisation du portefeuille Xverse

1. Si vous utilisez un portefeuille Xverse, examinez la transaction. .Vérifiez les détails et cliquez sur "**Confirm**"sur la notification de portefeuille dans votre navigateur.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-14.png)
</p>

2. Cliquez sur "**Connect**" sur la fenêtre modale "**Connect Your Ledger**".

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-15.png)
</p>

3. Procédez pour confirmer et approuver la transaction sur votre appareil Ledger.

#### Approuver la transaction de staking BTC sur l'appareil Ledger

1. Assurez-vous que votre appareil est déverrouillé et que l'application Core Testnet est ouverte. Examinez et approuvez la transaction de staking BTC sur votre appareil Ledger. Vérifiez les détails du staking, notamment le montant de BTC, les adresses du validateur et du délégant, ainsi que les frais de transaction. Approuvez en signant la transaction.

<p align="center" style={{zoom:"60%"}}> 
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

2. Une fois approuvée sur votre appareil Ledger, la notification "**Transaction Submitted**" apparaîtra sur le site Web de staking Core BTC.

<p align="center">
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/btc-staking.gif)
</p>

3. Cliquez sur "**View on BTC Explorer**" pour afficher les détails de votre transaction de staking BTC sur BTC Explorer.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-16.png)
</p>

> ⚠️ **Notez:** pour être éligible à recevoir des récompenses, il est nécessaire de compléter un cycle complet de staking (00:00:00 - 23:59:29 UTC).

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

Félicitations ! Vous avez réussi à miser des Bitcoins en utilisant votre portefeuille matériel Ledger sur le réseau de test Core via le staking Bitcoin auto-géré de Core. En suivant ce guide, vous avez connecté votre appareil Ledger en toute sécurité, installé et utilisé l'application Ledger Core Testnet, et réalisé vos transactions de staking BTC avec confiance. Vous faites désormais partie de l'écosystème Core où sécurité, contrôle et rendement vont de pair!
