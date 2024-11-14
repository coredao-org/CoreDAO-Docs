---
sidebar_label: Staking Bitcoin on Core
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking

This technical guide is designed to walk you through the process of staking your Bitcoin on the Core blockchain to earn CORE token rewards. With Non-Custodial Bitcoin Staking, you can earn passive yield in CORE while retaining ownership of your Bitcoin assets. Plongeons dans le fonctionnement du staking et comment vous pouvez commencer dès aujourd'hui.

## Prérequis

Les éléments suivants doivent être satisfaits avant de compléter ce guide:

1. **Portefeuille(s) Xverse et/ou Unisat:** Vous devez ajouter des portefeuille(s) [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\\&authuser=1) et/ou [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) via une extension Chrome pour participer au processus de staking. (_Uniquement sur un ordinateur de bureau, les portefeuilles mobiles et physiques ne sont pas encore supportés_)

2. **Core Wallet Address for Rewards:** Prepare your Core wallet address where you will receive Core token rewards for staking your Bitcoin. Si vous n'avez pas encore d'adresse Core, vous pouvez en créer une facilement en vous connectant à MetaMask.

**1. Ajouter le réseau Core à MetaMask via Core Explorer:**

- Allez sur [coredao.org](http://coredao.org) et faites défiler jusqu'en bas de la page

![native-staking-guide](../../../../static/img/native-staking/native-staking-1.avif)

- Cliquez sur le bouton ‘Add Core Network‘
- Approuvez dans MetaMask

![native-staking-guide](../../../../static/img/native-staking/native-staking-2.png)

2. Alternativement, vous pouvez également suivre ce guide : [Ajouter Core à MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce) pour des instructions plus détaillées afin d'entrer les informations du réseau manuellement.

## Avant de Commencer le Staking

Let's clarify the staking mechanism, so you know what to expect going into Non-Custodial Bitcoin Staking.

1. **Minimum of 0.01 Bitcoin + Gas Fee**

   - **Why is this necessary:** To create a smooth staking experience, you need to have a minimum of **0.01 Bitcoin** available along with the necessary gas fee required for executing transactions on the Bitcoin network. Les frais de gas couvrent le coût du traitement des transactions sur la blockchain. Additionally, we recommend having at least **0.05 Bitcoin** if staking for less than **1 month**. Ce montant supplémentaire sert de marge de sécurité en cas de congestion du réseau, où les prix du gas pourraient dépasser les récompenses de staking gagnées.

2. **Comprendre les Différences d'Adresse de Staking**

   - **Ce qui se passe:** Vous pourriez remarquer que l'adresse de staking fournie diffère de votre adresse Bitcoin originale.
   - **What it means:** The staking address is derived from your wallet's master private key, upholding your control and security over your assets. Vos Bitcoin restent stockés en toute sécurité dans l'adresse de staking contrôlée par votre clé privée, sans être affectés par le staking. Nous travaillons activement avec des partenaires de portefeuilles pour afficher vos actifs stakés dans les portefeuilles en temps opportun.
   - Vous pouvez consulter vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, [Mempool.space](https://mempool.space/) est une option que nous recommandons. Nous travaillons activement pour rendre les actifs stakés visibles dans les portefeuilles.

3. **Considérations pour les Périodes de Verrouillage**

   - **Rappel important:** Une fois que vous avez verrouillé vos Bitcoin pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking.
   - **Choisir judicieusement:** Nous vous conseillons de sélectionner soigneusement votre période de verrouillage en fonction de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

   These prompts aim to provide clarity and confidence as you embark on your Non-Custodial Bitcoin Staking journey. Votre compréhension et préparation sont essentielles pour une expérience de staking réussie. Passons maintenant à un guide étape par étape pour staker vos Bitcoin sur la blockchain Core et gagner des récompenses en tokens Core.

## How Non-custodial Bitcoin Staking Works

### Aperçu du Processus de Staking

Non-Custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn rewards. En verrouillant vos Bitcoin sur le réseau d'origine via un mécanisme à durée déterminée, vous pouvez participer activement au mécanisme de consensus de la blockchain Core tout en stakant. Voici les étapes impliquées dans ce processus.

1. **Initiate Staking:** Start by accessing the staking platform using either the [command line interface for technical users](https://github.com/coredao-org/btc-staking-tool) or the web-based frontend for general users [https://stake.coredao.org](https://stake.coredao.org)
2. **Stake Bitcoin with Time-Lock:** Stake your Bitcoin by sending a transaction on the Bitcoin network with a time-lock parameter, so that your Bitcoin remains locked until the specified period ends. La période de staking minimale est de **10 jours**.
3. **Vote for Validators:** Delegate your staked Bitcoin to the chosen validator on the Core blockchain.
4. **Connect a Core wallet for rewards:** Verify your Core address in the return field, where you'll receive Core token rewards.
5. **Réclamer les Récompenses:** Les récompenses en tokens Core apparaîtront lorsque les utilisateurs connecteront leur portefeuille et peuvent être réclamées quotidiennement. Core token rewards will appear on the [staking site](http://stake.coredao.org/).
6. **Redeem Bitcoin:** Once the staking lock time expires, the staked Bitcoin will remain idle in the staking address until redeemed by the user.

## Non-Custodial Bitcoin Staking Walkthrough

To begin staking your Bitcoin on the Core blockchain and earn staking rewards in the form of CORE tokens, follow the steps detailed below to stake Bitcoin through Core's official [staking website](http://stake.coredao.org/).

### Connecter Votre Portefeuille

La connexion de votre portefeuille est la première étape pour accéder à la plateforme de staking et initier le processus. This will enable you to interact with the Core blockchain and participate in Non-Custodial Bitcoin Staking.

1. Visitez [https://stake.coredao.org](https://stake.coredao.org)

2. Une fois sur le site, localisez et cliquez sur le bouton "**Connecter le Portefeuille**".

![native-staking-guide](../../../../static/img/native-staking/native-staking-3.avif)

3. **Choisissez un portefeuille disponible**

   - Si vous n'avez pas encore de portefeuille, consultez la section **[Portefeuille Core pour Récompenses](#prerequisites)** dans les prérequis ci-dessus.

4. **Choose a validator to delegate Bitcoin**

Here, we will be selecting a validator that we’d like to delegate our Bitcoin to. Dans l'exemple donné, nous choisirons le Validateur 4, mais vous êtes libre de choisir n'importe quel validateur actif.

```
1. Cliquez sur le nom du validateur choisi pour le sélectionner
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-4.avif)

```
2. Survolez Déléguer, puis sélectionnez ‘BTC‘ dans le menu déroulant
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-5.avif)

### Connect Bitcoin wallet

```
1. Upon selecting a validator to delegate Bitcoin in the previous step, you will be prompted to connect a Bitcoin wallet
```

:::info
Dans cet exemple, nous utilisons le portefeuille Unisat, mais il est également compatible avec le portefeuille Xverse. Make sure you have either of these two installed.
:::

```
2. Sur l'écran contextuel de connexion de portefeuille, sélectionnez un portefeuille disponible.
```

- Pour les développeurs et utilisateurs avancés intéressés par l'utilisation de l'Outil de Staking, veuillez vous référer [ici.](https://github.com/coredao-org/btc-staking-tool?tab=readme-ov-file)

![native-staking-guide](../../../../static/img/native-staking/native-staking-6.png)

```
3. Sur l'écran suivant, cliquez sur **Connecter**
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-7.avif)

### Delegate Bitcoin

Lors de l'initiation du processus de délégation, il est important de comprendre et de spécifier plusieurs paramètres clés:

1. **Specifying the amount of Bitcoin you’d like to delegate**

- The minimum amount to delegate is **0.01 Bitcoin**
- In our example, we will be delegating **0.05 Bitcoin** which satisfies this requirement

![native-staking-guide](../../../../static/img/native-staking/native-staking-8.avif)

2. **Setting the lock time** – this determines when your staked Bitcoin will be unlocked and available for use again on your local device.

- Sélectionnez l'intérieur de la boîte de temps de verrouillage pour saisir les valeurs
- Le temps de verrouillage par défaut est fixé à un mois à l'avance. Le temps de verrouillage minimum est de **10 jours.**
- Dans notre exemple, nous avons sélectionné une date 10 jours à l'avance (24 avril)
- Cliquez sur ‘**OK**’ pour continuer

![native-staking-guide](../../../../static/img/native-staking/native-staking-9.avif)

3. Spécifier la priorité du réseau pour votre transaction

![native-staking-guide](../../../../static/img/native-staking/native-staking-10.avif)

4. Finally, click ‘**Confirm Delegation**’ to **Delegate Bitcoin**

![native-staking-guide](../../../../static/img/native-staking/native-staking-11.avif)

5. Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de transaction pour vous assurer qu'elles incluent une sortie OP\_Return.  OP\_Return output is where your redeem\_script is saved and is essentially for redeeming your staked Bitcoin. Il peut y avoir 2 ou 3 sorties, mais au moins une doit toujours être OP\_Return. Annulez la transaction si elle n'inclut pas la sortie OP\_Return.

![native-staking-guide](../../../../static/img/native-staking/native-staking-12.avif)

6. Vérifier la Soumission de la Transaction

![native-staking-guide](../../../../static/img/native-staking/native-staking-13.avif)

5. Depuis n'importe quel écran CORE, survolez votre portefeuille connecté dans le coin supérieur droit et cliquez sur ‘**Mes Stakings**’.

![native-staking-guide](../../../../static/img/native-staking/native-staking-14.png)

6. Sur l'écran du **Délégateur**, recherchez la colonne **BTC(x)** et cliquez.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-15.avif)

7. Vérifiez que le validateur choisi est en attente de confirmation de la transaction.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-16.avif)

8. Vérifiez que votre validateur choisi indique **Récompense en cours** sous **Temps** de **Récupération**.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-17.avif)

**Congratulations.** You have succesfully staked your Bitcoin on the Core blockchain and will now actively earn CORE tokens from your delegated Bitcoin. Through staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, helping maintain its balance and decentralization.
