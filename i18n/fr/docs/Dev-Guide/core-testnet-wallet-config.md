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

Nous recommandons l'utilisation du [portefeuille web MetaMask](https://metamask.io/) pour se connecter au Testnet Core. Vous devrez installer MetaMask et configurer votre compte avant de l'utiliser pour vous connecter au Core Testnet. Vous pouvez trouver les instructions pour la configuration de MetaMask ici.

### Ajout du réseau Core Testnet à MetaMask

Il existe plusieurs façons d'ajouter les configurations du  Core Testnet à votre portefeuille MetaMask, nous avons listé les méthodes les plus fiables et testées ci-dessous.

#### Ajouter le réseau manuellement

Une fois que vous avez configuré votre portefeuille MetaMask, vous pouvez l'utiliser pour vous connecter au Core Testnet en ajoutant les détails de la chaîne Core Testnet dans les paramètres de réseau de MetaMask. Naviguez vers `Paramètres -> Réseaux` dans MetaMask et cliquez sur le bouton \`Ajouter un Réseau'. Entrez les informations suivantes :

- **Nom du réseau :** Core Blockchain Testnet
- **Nouvelle URL RPC :** https://rpc.test2.btcs.network
- **ID de Chaîne:** 1114
- **Symbole de la devise :** tCORE2
- **URL de l'explorateur de blocs :** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Site web de staking  :** https://stake.test2.btcs.network/

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Ajouter le réseau Core via Chainlist.org

1. Rendez-vous sur Chainlist.org et recherchez ‘_core blockchain_’. Assurez-vous de cocher l'option _Include Testnets_ option.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Double check to make sure to choose the right network. Please check the details in the below snapshots — Chain ID, Currency etc. to ensure you will add the correct one.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Click on _Connect Wallet_ and then choose MetaMask. Allow to connect to MetaMask wallet by confirming the MetaMask notifications.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Switch to the Core testnet by clicking the _‘Switch Network’_ button.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

The Core Testnet is now added to your MetaMask.

#### Adding Network via Core Testnet Explorer

If you using the Chrome MetaMask extension, you can use a quick shortcut to add Core Testnet to MetaMask. Visit [Core Testnet Explorer](https://scan.test.btcs.network/), scroll down to the bottom, and select the `Add Core Network` button. This will open a pop-up with all necessary network information loaded - you just need to confirm and approve.

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### New Testnet

Core's new testnet with `chainID 1114` is now live and recommended for use. It supports BTC Testnet4 for staking, unlike the previous version (`chainID 1115`). The old testnet will soon be deprecated and eventually retired, so switch to the new testnet to access the latest features.

#### Rebrand Updates

`Satoshi Chain/BTCs` have been rebranded to `Core/CORE`, respectively. If you added the Testnet before the rebranding, you'll need to update Network Name and Currency Symbol in the MetaMask settings manually; otherwise, you won't be able to use the current version of Core Testnet. Go to `Settings->Network`, and select `Core Testnet` to open up the network settings. Update Network Name and Currency Symbol to the values stated in the [above section](#adding-network-manually) and click the Save button. You're good to go!
:::

### Funding Wallet with tCORE Tokens

To help users get started and allow developers to quickly prototype their dApps, Core has released the public [Core Testnet Faucet](https://scan.test.btcs.network/faucet) to distribute Core testnet tokens, **tCORE**. Follow the detailed [guide](./core-faucet.md) to fund your metamask account with tCORE tokens.

### Sending tCORE Tokens

You can use MetaMask to send tCORE to other addresses.

1. Navigate to metamask wallet, make sure you are conencted to Core Testnet
2. Click on the `Send` button

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Enter the amount of tCORE tokens you want to send and the address whom you want to send the tCORE tokens make sure its a Core Testnet Address. Then click next and confirm the transaction.

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-2.png)

