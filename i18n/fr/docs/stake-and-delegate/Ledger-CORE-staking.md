---
sidebar_label: Utilisation d'un portefeuille matériel Ledger
description: Guide pour miser CORE en utilisant un portefeuille matériel Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Utilisation des portefeuilles matériels Ledger pour la mise en jeu de CORE

---

Ce guide utilisateur vous guide à travers le processus de mise en jeu de CORE pour gagner des récompenses de staking sur la blockchain Core en utilisant un portefeuille matériel Ledger. En suivant les étapes ci-dessous, vous pouvez participer au mécanisme de consensus Satoshi Plus de Core en misant et en déléguant CORE.

## Avant de commencer : Rappels importants

Pour garantir une expérience sécurisée et fluide, veuillez noter les exigences clés suivantes:

1. **Utilisez uniquement des appareils Ledger pris en charge:** La mise en jeu de CORE n'est prise en charge que sur certains portefeuilles matériels Ledger dotés du micrologiciel le plus récent ou compatible. Mettez toujours à jour votre appareil via Ledger Live avant utilisation.

2. \*\* Utilisez toujours l'application Ethereum de Ledger:\*\* Vous devez utiliser l'application Ethereum de Ledger pour miser des jetons CORE sur Core en utilisant un appareil Ledger.

## Portefeuilles matériels Ledger pris en charge

Les appareils matériels Ledger suivants prennent actuellement en charge la mise en jeu de CORE directement sur la blockchain Core. Pour une expérience optimale et une compatibilité maximale, assurez-vous que votre appareil fonctionne avec le micrologiciel le plus récent disponible ou pris en charge.

| Appareil Ledger    | Version du firmware (_au moment de la rédaction_) |
| ------------------ | -------------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                                |
| **Ledger Nano X**  | 2.5.0                                |
| **Ledger Stax**    | 1.8.0                                |
| **Ledger Flex**    | 1.4.0                                |

<br/>

:::note
Les versions du micrologiciel indiquées ci-dessus reflètent la dernière version disponible au moment de la rédaction et sont susceptibles d'être modifiées. Avant de miser CORE en utilisant votre appareil Ledger, mettez-le à jour vers la dernière version pour garantir la compatibilité et la sécurité. Vérifiez toujours Ledger Live pour les mises à jour les plus récentes. Refer [here](https://support.ledger.com/article/8458939792669-zd) Pour plus de détails sur la mise à jour du micrologiciel de l'appareil Ledger.
:::

## Prérequis

Avant de commencer, assurez-vous d'avoir:

- Un appareil Ledger pris en charge avec le dernier micrologiciel.
- Ledger Live est installé et correctement configuré sur votre ordinateur.
- Votre appareil Ledger est ajouté à votre portefeuille EVM que vous souhaitez utiliser (par exemple, MetaMask)
- Des jetons CORE suffisants (minimum 1 CORE) disponibles sur votre appareil Ledger pour la mise en jeu, y compris des jetons pour couvrir les frais de transaction.

## Setting up Ledger Device

Avant de miser CORE, assurez-vous que votre portefeuille matériel Ledger est entièrement mis à jour et prêt à être utilisé avec la blockchain Core.

### Étape 1: Mettre à jour votre appareil Ledger

Assurez-vous que votre appareil Ledger est mis à jour et prêt à l'emploi.

1. Ouvrez **Ledger Live** sur votre ordinateur.
2. Connectez et déverrouillez votre appareil Ledger.
3. Accédez à **My Ledger** dans la barre latérale.
4. Si vous y êtes invité, autorisez l'accès au **Ledger Manager** sur votre appareil.
5. Installez les mises à jour de micrologiciel disponibles pour votre appareil, ignorez si votre appareil dispose du micrologiciel pris en charge le plus récent.

### Étape 2 : Installation de l'application Ledger Ethereum

Suivez les étapes ci-dessous pour installer l'application Ledger Ethereum sur votre appareil.

1. Avec votre appareil connecté à votre ordinateur, ouvrez l'application Ledger Live et accédez à "**My Ledger**".

2. Sous le "**App Catalog**" recherchez "**Ethereum**".

3. Installez l'application "**Ethereum**". Utilisez _uniquement_ l'application Ledger Ethereum pour miser CORE en utilisant Ledger sur le réseau Core Mainnet. Pour plus de détails,[official guide](https://support.ledger.com/article/360009576554-zd) de Ledger pour installer l'application Ethereum sur votre appareil.

<p align="center">
![install-ethereum-app](../../static/img/ledger-core/CORE-Staking/UI-1.png)
</p> 

### Étape 3: Activer la signature aveugle sur l'application Ledger Ethereum

Remarque: avant de miser CORE, les utilisateurs doivent activer la signature aveugle dans les paramètres de l'application Ethereum sur l'appareil Ledger. Refer to the [official guide](https://support.ledger.com/article/4405481324433-zd) from Ledger for more details.

<p align="center">
![enable-blind-signing](../../static/img/ledger-core/CORE-Staking/UI-2.png)
</p>

### Étape 4: Ajouter l'appareil Ledger à votre portefeuille EVM

Avant de procéder à la mise en jeu de CORE en utilisant Ledger, il est important d'ajouter votre appareil Ledger au portefeuille EVM (par exemple, MetaMask, etc.) que vous utiliserez pour connecter votre Ledger pour miser CORE.

Pour ce guide, le portefeuille MetaMask configuré avec Core Mainnet a été utilisé. Reportez-vous au guide [official guide](https://support.ledger.com/article/4404366864657-zd) de Ledger pour les détails sur la façon d'ajouter votre appareil Ledger au portefeuille MetaMask.

## Mise en jeu de CORE à l'aide d'un appareil Ledger

Avec votre appareil Ledger connecté à votre ordinateur et l'application Ledger Ethereum installée, vous pouvez miser CORE en toute sécurité directement depuis votre portefeuille matériel.

:::info
Un minimum de **1 CORE** est requis pour participer à la mise en jeu de tokens CORE sur Core Mainnet, ainsi que des tokens CORE suffisants pour couvrir les frais de transaction.
:::

1. Sur votre appareil Ledger, ouvrez l'application Ledger Ethereum avant de poursuivre.

<p align="center">
![application-ready](../../static/img/ledger-core/CORE-Staking/UI-3.png)
</p>

2. Accédez au site [Core Staking Websit](https://stake.coredao.org/staking).

### Connectez le portefeuille Core au site Web de mise en jeu

1. Connectez votre portefeuille Core Mainnet au site Web. Assurez-vous qu'il s'agit du même portefeuille que celui que vous connectez à votre appareil Ledger, car celui-ci sera utilisé comme portefeuille pour la mise en jeu de CORE.

2. Cliquez sur le bouton "**Connect Wallet**" dans le coin supérieur droit du site Web.

<p align="center">
![connect-core-wallet](../../static/img/ledger-core/CORE-Staking/connect-core-wallet.png)
</p>

3. Depuis le modal de portefeuille affiché, sélectionnez le portefeuille de votre choix configuré pour être utilisé avec Core.

### Spécifiez et confirmez les détails de la mise en jeu

1. Sur la page de mise en jeu de [page](https://stake.coredao.org/staking), avec votre portefeuille EVM connecté au site Web de mise en jeu, spécifiez le montant de CORE à miser. Cliquez sur le bouton "**Proceed to Stake**".

<p align="center" style={{zoom:"60%"}}>
![specify-core-amount](../../static/img/ledger-core/CORE-Staking/UI-4.png)
</p> 

2. Confirmez le montant de CORE à miser et le validateur auquel déléguer votre mise pour participer au mécanisme de consensus de Core et gagner des récompenses de mise. Cliquez sur "**Confirm**" pour continuer.

<p align="center" style={{zoom:"60%"}}>
![confirm-staking-details](../../static/img/ledger-core/CORE-Staking/UI-5.png)
</p>   

3. L'utilisateur verra une fenêtre modale lui demandant d'approuver la transaction sur son portefeuille EVM connecté.

<p align="center" style={{zoom:"60%"}}>
![confirm-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-6.png)
</p>  

4. Approuvez la transaction sur la notification de votre portefeuille EVM connecté.

<p align="center" style={{zoom:"70%"}}>
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-7.png)
</p>

### Examinez et approuvez la transaction sur l'appareil Ledger

1. Approuver la transaction de staking Btc sur l'appareil Ledger.

<p align="center">
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/CORE-Staking-Ledger.gif)
</p>

2. Une fois approuvée sur votre appareil Ledger, la notification "Transaction Submitted" apparaîtra sur le site Web de mise en jeu de Core.

<p align="center" style={{zoom:"80%"}}>
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-8.png)
</p>

3. Cliquez sur "**View on Core Scan**" pour afficher les détails de votre transaction de mise en jeu de CORE sur l'explorateur de blocs Core Scan.

:::note
Pour être éligible aux récompenses, vous devez terminer un cycle de mise en jeu complet (00:00:00 - 23:59:29 UTC).
:::

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

Félicitations ! Vous avez mis en jeu avec succès des CORE en utilisant votre portefeuille matériel Ledger sur le réseau Core Mainnet. En suivant ce guide, vous avez connecté votre appareil Ledger en toute sécurité, installé et utilisé l'application Ledger Ethereum pour miser des CORE directement à partir de votre portefeuille matériel et gagner des récompenses de mise.
