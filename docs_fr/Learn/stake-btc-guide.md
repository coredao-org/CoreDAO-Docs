---
sidebar_label: Staking BTC sur Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de BTC

Ce guide technique est conçu pour vous guider à travers le processus de staking de vos Bitcoin (BTC) sur la blockchain Core afin de gagner des récompenses en tokens CORE. Avec le staking non-custodial de BTC, vous pouvez gagner un revenu passif en CORE tout en conservant la propriété de vos actifs en Bitcoin. Plongeons dans le fonctionnement du staking et comment vous pouvez commencer dès aujourd'hui.

## Prérequis

Les éléments suivants doivent être satisfaits avant de compléter ce guide:

1. **Portefeuille(s) Xverse et/ou Unisat:** Vous devez ajouter des portefeuille(s) [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\&authuser=1) et/ou [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) via une extension Chrome pour participer au processus de staking. (_Uniquement sur un ordinateur de bureau, les portefeuilles mobiles et physiques ne sont pas encore supportés_)

2. **Adresse de Portefeuille Core pour les Récompenses:** Préparez votre adresse de portefeuille Core où vous recevrez les récompenses en tokens CORE pour le staking de vos BTC. Si vous n'avez pas encore d'adresse Core, vous pouvez en créer une facilement en vous connectant à MetaMask.

**1. Ajouter le réseau Core à MetaMask via Core Explorer:**

- Allez sur [coredao.org](http://coredao.org) et faites défiler jusqu'en bas de la page

![native-staking-guide](../../../../static/img/native-staking/native-staking-1.avif)

- Cliquez sur le bouton ‘Add Core Network‘
- Approuvez dans MetaMask

![native-staking-guide](../../../../static/img/native-staking/native-staking-2.png)

2. Alternativement, vous pouvez également suivre ce guide : [Ajouter Core à MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce) pour des instructions plus détaillées afin d'entrer les informations du réseau manuellement.

## Avant de Commencer le Staking

Clarifions le mécanisme de staking afin que vous sachiez à quoi vous attendre avec le staking non-custodial de BTC.

1. **Minimum de 0,01 BTC + Frais de Gas:**

   - **Pourquoi c'est nécessaire:** Pour assurer une expérience de staking fluide, vous devez avoir un minimum de **0,01 BTC** disponible ainsi que les frais de gas nécessaires pour exécuter les transactions sur le réseau Bitcoin. Les frais de gas couvrent le coût du traitement des transactions sur la blockchain. De plus, nous recommandons d'avoir au moins **0,05 BTC** si vous staker pour moins **d'un mois**. Ce montant supplémentaire sert de marge de sécurité en cas de congestion du réseau, où les prix du gas pourraient dépasser les récompenses de staking gagnées.

2. **Comprendre les Différences d'Adresse de Staking**

   - **Ce qui se passe:** Vous pourriez remarquer que l'adresse de staking fournie diffère de votre adresse Bitcoin originale.
   - **Ce que cela signifie:** L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et la sécurité de vos actifs. Vos Bitcoin restent stockés en toute sécurité dans l'adresse de staking contrôlée par votre clé privée, sans être affectés par le staking. Nous travaillons activement avec des partenaires de portefeuilles pour afficher vos actifs stakés dans les portefeuilles en temps opportun.
   - Vous pouvez consulter vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, [Mempool.space](https://mempool.space/) est une option que nous recommandons. Nous travaillons activement pour rendre les actifs stakés visibles dans les portefeuilles.

3. **Considérations pour les Périodes de Verrouillage**

   - **Rappel important:** Une fois que vous avez verrouillé vos Bitcoin pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking.
   - **Choisir judicieusement:** Nous vous conseillons de sélectionner soigneusement votre période de verrouillage en fonction de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

   Ces rappels visent à vous apporter clarté et confiance avant de vous lancer dans votre aventure de staking non-custodial de BTC. Votre compréhension et préparation sont essentielles pour une expérience de staking réussie. Passons maintenant à un guide étape par étape pour staker vos Bitcoin sur la blockchain Core et gagner des récompenses en tokens Core.

## Fonctionnement du Staking Non-custodial de BTC

### Aperçu du Processus de Staking

Le staking non-custodial de BTC offre une méthode sécurisée et décentralisée pour que les détenteurs de Bitcoin puissent gagner des récompenses. En verrouillant vos Bitcoin sur le réseau d'origine via un mécanisme à durée déterminée, vous pouvez participer activement au mécanisme de consensus de la blockchain Core tout en stakant. Voici les étapes impliquées dans ce processus.

1. **Initier le Staking:** Commencez par accéder à la plateforme de staking en utilisant soit [l'interface en ligne de commande pour les utilisateurs techniques](https://github.com/coredao-org/btc-staking-tool), soit l'interface web frontend pour les utilisateurs généraux via [https://stake.coredao.org](https://stake.coredao.org)
2. **Staker des BTC avec un Verrouillage Temporel:** Stakez vos Bitcoin en envoyant une transaction sur le réseau Bitcoin avec un paramètre de verrouillage temporel, garantissant que vos BTC restent verrouillés jusqu'à la fin de la période spécifiée. La période de staking minimale est de **10 jours**.
3. **Voter pour des Validateurs:** Déléguez vos BTC stakés au validateur choisi sur la blockchain Core.
4. **Connecter le Portefeuille Core pour les Récompenses:** Vérifiez votre adresse Core dans le champ de retour, où vous recevrez les récompenses en tokens Core.
5. **Réclamer les Récompenses:** Les récompenses en tokens Core apparaîtront lorsque les utilisateurs connecteront leur portefeuille et peuvent être réclamées quotidiennement. Les récompenses en tokens Core apparaîtront sur le [site de staking](https://stake.coredao.org).
6. **Redeem BTC:** Once the staking lock time expires, the staked BTC will remain idle in the staking address until redeemed by the user.

## Non-Custodial BTC Staking Walkthrough

To begin staking your Bitcoin on the Core blockchain and earn Core token rewards, follow these steps:

### Connect Your Wallet

Connecting your wallet is the first step towards accessing the staking platform and initiating the staking process. This will enable you to interact with the Core blockchain and participate in Non-Custodial BTC Staking.

1. Visit [https://stake.coredao.org](https://stake.coredao.org)

2. Once on the website, locate and click on the "**Connect Wallet**" button.

![native-staking-guide](../../../../static/img/native-staking/native-staking-3.avif)

3. **Choose an available wallet**

   - If you do not yet have a wallet, refer to **[Core Wallet for Rewards](#prerequisites)** in the prerequisite section above.

4. **Choose a validator to delegate BTC**

Here, we will be selecting a validator that we’d like to delegate our BTC to. In the example shown, we will be choosing Validator 4, but you’re free to choose any active validator.

```
1. Click name of chosen validator to select
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-4.avif)

```
2. Hover over Delegate, and then select ‘BTC’ on the dropdown
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-5.avif)

### Connect BTC wallet

```
1. Upon selecting a validator to delegate BTC in the previous step, you will be prompted to connect a BTC wallet
```

:::info
In this example, we demonstrate using Unisat Wallet, but it's compatible with Xverse Wallet as well. Ensure you have either of these two installed.
:::

```
2. On the Connect wallet pop up screen, select one of the available wallets.
```

- For developers and more advanced users who are interested in using the Stake Tool, refer[ here.](https://github.com/coredao-org/btc-staking-tool?tab=readme-ov-file)

![native-staking-guide](../../../../static/img/native-staking/native-staking-6.png)

```
3. On the following screen, click **Connect**
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-7.avif)

### Delegate BTC

While initiating the delegation process, it's important to understand and specify several key parameters:

1. **Specifying the amount of BTC you’d like to delegate**

- The minimum amount to delegate is **0.01 BTC**
- In our example, we will be delegating **0.05 BTC** which satisfies this requirement

![native-staking-guide](../../../../static/img/native-staking/native-staking-8.avif)

2. **Setting the lock time** – this determines when your staked BTC will be unlocked and available for use again on your local device.

- Select inside lock time box to input values
- The default lock time is set to a month in advance. The minimum lock time is **10 days.**
- In our example, we’ve selected a date 10 days in advance (April 24)
- Click ‘**OK**’ to proceed

![native-staking-guide](../../../../static/img/native-staking/native-staking-9.avif)

3. Specifying the network priority speed for your transaction

![native-staking-guide](../../../../static/img/native-staking/native-staking-10.avif)

4. Finally, click ‘**Confirm Delegation**’ to **Delegate BTC**

![native-staking-guide](../../../../static/img/native-staking/native-staking-11.avif)

5. Before Signing the transaction in your wallet, verify the transaction outputs to make sure it includes an OP\_Return output.  OP\_Return output is where your redeem\_script is saved and is essentially for redeeming your staked BTC. There may be 2 or 3 outputs, but at least one of the outputs should always be OP\_Return. Abort the transaction if it doesn't include the OP\_Return output.

![native-staking-guide](../../../../static/img/native-staking/native-staking-12.avif)

6. Verify Transaction Submitted

![native-staking-guide](../../../../static/img/native-staking/native-staking-13.avif)

5. From any CORE screen, hover over your connected wallet in the top right corner click ‘**My Staking**’.

![native-staking-guide](../../../../static/img/native-staking/native-staking-14.png)

6. At the **Delegator** screen, look for the column **BTC(x)** and click.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-15.avif)

7. Verify your chosen validator is pending transaction confirmation.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-16.avif)

8. Verify your chosen validator says ‘**Rewarding**’ under '**Redeem** **Time**'.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-17.avif)

**Congratulations.** You have succesfully staked your BTC on the Core blockchain and will now actively earn CORE tokens from your delegated BTC. Through staking BTC and voting for validators, you actively contribute to the governance and security of the Core network, helping maintain its balance and decentralization.

We’re happy you’ve chosen to journey into BTCfi with Non-Custodial BTC Staking on Core!
