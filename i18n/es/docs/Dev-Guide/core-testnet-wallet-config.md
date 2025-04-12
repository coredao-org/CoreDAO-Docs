---
sidebar_label: Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Connect to Core Testnet

---

:::note
This is a detailed guideline for connecting to Core Testnet (1114) using the MetaMask wallet.
:::

### Software Prequisites

1. [MetaMask Wallet Browser Extension](https://metamask.io/)

### MetaMask Wallet Setup

We recommend using the [MetaMask web wallet](https://metamask.io/) to connect to Core Testnet. You'll need to install MetaMask and set up your account before you can use it to connect to Core Testnet. You can find MetaMask setup instructions here.

### Adding Core Testnet to MetaMask

There are multiple ways to add Core Testnet configurations to your MetaMask Wallet, we have listed the most trusted and testest ways below.

#### Adding Network Manually

Once you've set up your MetaMask wallet, you can use it to connect to Core Testnet by adding Core Testnet's chain details in MetaMask's network settings. Navigate to `Settings->Networks` in MetaMask and click the `Add Network` button. Input the following information:

- **Network Name:** Core Blockchain TestNet
- **New RPC URL:** https://rpc.test2.btcs.network
- **Chain ID:** 1114
- **Currency Symbol:** tCORE2
- **Block Explorer URL:** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Staking Website:** https://stake.test2.btcs.network/

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Adding the Core network via Chainlist.org

1. Go to chainlist.org and search for ‘_core blockchain_’, make sure to check the _Include Testnets_ option.

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

