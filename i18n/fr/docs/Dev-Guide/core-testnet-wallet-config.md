---
sidebar_label: Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Se connecter au Core Tesnet

---

:::note
Ceci est un guide détaillé pour se connecter au Testnet de Core (1114)  en utilisant le portefeuille MetaMask.
:::

### Prérequis Logiciels

1. [Extension de Navigateur MetaMask](https://metamask.io/)

### Configuration du portefeuille MetaMask

Nous recommandons l'utilisation du [portefeuille web MetaMask](https://metamask.io/) pour se connecter au  Core Testnet. Vous devrez installer MetaMask et configurer votre compte avant de l'utiliser pour vous connecter au Core Testnet. Vous pouvez trouver les instructions pour la configuration de MetaMask ici.

### Ajout du réseau Core Testnet à MetaMask

There are multiple ways to add Core Testnet2 configurations to your MetaMask wallet, we have listed the most trusted and testest ways below.

#### Ajouter le réseau manuellement

Once you've set up your MetaMask wallet, you can use it to connect to Core Testnet by adding Core Testnet2 network details in MetaMask's network settings. Naviguez vers `Paramètres -> Réseaux` dans MetaMask et cliquez sur le bouton \`Ajouter un Réseau'. Entrez les informations suivantes :

- **Nom du réseau :** Core Blockchain Testnet
- **Nouvelle URL RPC :** https://rpc.test2.btcs.network
- **ID de Chaîne:** 1114
- **Symbole de la devise :** tCORE2
- **URL de l'explorateur de blocs :** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Site web de staking  :** https://stake.test2.btcs.network/

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Ajouter le réseau Core via Chainlist.org

1. Go to https://chainlist.org and search for _Core Blockchain_, make sure to check the _Include Testnets_ option.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Vérifiez bien pour vous assurer de choisir le bon réseau Vérifiez les détails dans les captures d'écran ci-dessous — ID de la chaîne, devise, etc., pour vous assurer que vous ajoutez le bon réseau.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Cliquez sur _Connecter le Portefeuille_, puis choisissez MetaMask. Autorisez la connexion à MetaMask en confirmant les notifications.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Switch to the Core Testnet by clicking the _‘Switch Network’_ button.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

Le Core Testnet est maintenant ajouté à votre MetaMask.

#### Ajout du Réseau via Core Testnet Explorer

Si vous utilisez l'extension MetaMask pour Chrome, vous pouvez ajouter rapidement le Core Testnet à MetaMask. Visitez le [Core Testnet Explorer](https://scan.test.btcs.network/), faites défiler vers le bas et sélectionnez le bouton \`Add Core Network\`\`. Une fenêtre contextuelle s'ouvrira avec toutes les informations nécessaires sur le réseau – vous n'avez qu'à confirmer et approuver.

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### Nouveau Testnet

Core's latest testnet Core Testnet2 with `chainID 1114` is now live and the recommended testing environment for Core blockchain. Il prend en charge le BTC Testnet4 pour le staking, contrairement à la version précédente (`chainID 1115`). The old testnet, Core Testnet, is not deprecated and will no longer be maintained.

#### Mises à Jour de la marque

La `Satoshi Chain/BTCs` a été rebaptisée `Core/CORE`, respectivement. Si vous avez ajouté le Testnet avant le changement, vous devrez mettre à jour manuellement le Nom du Réseau et le Symbole de la Monnaie dans les paramètres de MetaMask ; sinon, vous ne pourrez pas utiliser la version actuelle du Core Testnet. Allez dans `Paramètres -> Réseau', et sélectionnez `Core Testnet\` pour ouvrir les paramètres du réseau. Mettez à jour le Nom du Réseau et le Symbole de la Monnaie avec les valeurs indiquées dans la [section ci-dessus](#adding-network-manually) et cliquez sur le bouton Sauvegarder. Vous êtes prêt à partir !
:::

### Funding Wallet with tCORE2 Tokens

To help users get started and allow developers to quickly prototype their dApps, Core has released the public [Core Testnet Faucet](https://scan.test2.btcs.network/faucet) to distribute Core Testnet tokens, **tCORE2**. Follow the detailed [guide](./core-faucet.md) to fund your metamask account with tCORE2 tokens.

### Sending tCORE2 Tokens

You can use MetaMask wallet to send tCORE2 to other addresses.

1. Navigate to MetaMask wallet, make sure you are conencted to Core Testnet2
2. Cliquez sur le bouton `Envoyer`

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Enter the amount of tCORE2 tokens you want to send and the address whom you want to send the tCORE2 tokens make sure its a Core Testnet2 Address. Then click _Continue_ and confirm the transaction.

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-2.png)

