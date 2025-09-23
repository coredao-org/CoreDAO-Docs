---
sidebar_label: Redimir BTC con Timelock Expirado
description: Guía para redimir BTC con timelock expirado desde un dispositivo Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Redimir BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redimir tu Bitcoin (BTC) en staking en la blockchain de Core utilizando un dispositivo Ledger.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la aplicación Core esté instalada. Debes usar la misma dirección principal de BTC que se utilizó originalmente para hacer staking de BTC. Para aprender cómo hacer staking de BTC con Ledger, consulta la [guía](./btc-staking.md) oficial para staking de BTC con dispositivo Ledger.
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core son compatibles únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usar siempre la aplicación Ledger Core:** Debes utilizar la aplicación Ledger Core (no la aplicación Ledger Bitcoin) tanto para hacer staking, redimir o redelegar BTC. La aplicación Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.
- **Staking de BTC solo desde la dirección principal del wallet BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core mediante Ledger **solo** son compatibles desde la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Supported Ledger Hardware Wallets

The following Ledger hardware devices currently support staking, redemption, and redelegation of BTC on the Core blockchain. For the best experience and compatibility, as a best practice ensure your device is running the latest available firmware.

| Ledger Device      | Firmware Version (_at the time of writing_) |
| ------------------ | -------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                          |
| **Ledger Nano X**  | 2.5.0                          |
| **Ledger Stax**    | 1.8.0                          |
| **Ledger Flex**    | 1.4.0                          |

<br/>

:::note
The firmware versions listed above reflect the latest available version at the time of writing and are subject to change. Before staking, redeeming, or redelegating BTC on Core using your Ledger device, update to the latest version to ensure compatibility and security. Always check Ledger Live for the most current updates. Refer [here](https://support.ledger.com/article/8458939792669-zd) for more details on updating the Ledger drive firmware.
:::

## Prerequisites

Before you begin, make sure you have:

- A supported Ledger device with the latest firmware.
- Ledger Live is installed and correctly set up on your computer.
- You have previously staked BTC on the Core blockchain using your Ledger device.
- If you're using Xverse Wallet, your Ledger device is already connected and added to it.
- The timelock period for your locked BTC has expired, making it eligible for redemption.

> ⚠️ **Note:** You will not be able to redeem or redelegate staked BTC until the designated timelock has expired.

## Steps to Redeem Expired Timelock BTC

After the timelock period for BTC has expired, users are eligible to redeem or redelegate their delegated Bitcoin assets. You must use the same Ledger wallet Bitcoin address used for staking BTC to redeem your BTC after the timelock expiry.

### Step #1: Connect Core Wallet to the Staking Website

1. Connect your Core Mainnet wallet to the Core BTC Staking website. Remember to use the same Bitoin address and wallet that you had used at the time of staking BTC. Click on the "**Connect**" button in the top right corner of the website.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. From the displayed wallet modal, select the wallet of your choice configured for use with Core Mainnet.

### Step #2: Navigate to Staking Dashboard

1. Ensure your Ledger device is installed with the latest firmware and connected to your computer with Ledger's primary Bitcoin (BTC) address.
2. Navigate to the [Core Ledger BTC Staking Website](https://stake.coredao.org/staking).
3. On the website UI, hover over your connected wallet in the top right corner and click "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-1.png)
</p>

### Step #3: Navigate to BTC Staking Records

1. On the "**My Staking Dashboard**" page, select "**BTC**" records from the displayed tabs.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-2.png)
</p>

2. This tab lists all the BTC staking records and the validators that you have previously delegated BTC to. Look for any "**Expired**" records under "**Redeem Time**",  and proceed to click "Redeem" under "**Action**."

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-3.png)
</p>

### Step #4: Verify BTC Staking and Redemption Details

1. On the displayed "**Redeem BTC**" modal, cross-check the BTC staking address, the BTC Amount that will be redeemed, and the Receiving Bitcoin address. To redeem the BTC, you must connect to the same Bitcoin address as the one initiating the Bitcoin staking transaction.

2. Set your Receiving Bitcoin Address to receive the unlocked BTC. This **must** be the same as the address that initiated the Bitcoin staking transaction and **must** be the Native Segwit address type.

3. Set your transaction speed priority, and click "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-4.png)
</p>

### Step #5: Sign the BTC Unlock Transaction on Ledger Device

1. Click "**Sign By Bitcoin Wallet**" to sign the BTC redemption transaction from your Ledger device.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-5.png)
</p>

### Step#5: Connect Ledger Device for Redemption of Staked BTC

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redeem BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "Xverse" under the "Wallets Supporting Ledger" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

### Step#6: Review & Approve Transaction on Ledger Device

After connecting your Ledger device, ensure that the device is unlocked and the Ledger Core app is open. You will be prompted on the screen to approve the transaction.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-6.png)
</p>

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.
2. Always use the Ledger Core app, not the Ledger Bitcoin app, to redeem the staked BTC on the Core blockchain. The Bitcoin app lacks support for redemption/redelegation operations. Further, the Ledger Core app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Ledger-BTC-Redeem.gif)
</p>

3. Once the transaction is approved on your Ledger device, the website will display a "**Transaction Submitted**" notification, confirming that your BTC redemption request has been successfully initiated.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-7.png)
</p>

4. After the Bitcoin block of the redemption transaction is confirmed, verify that the redeemed BTC has returned to your receiving Bitcoin address. (This may take a few minutes). You can also view the transaction details on the BTC Explorer.

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

By following this guide, you"ve successfully redeemed staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core"s Self-Custodial BTC Staking model and Ledger"s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redemption marks a secure and transparent interaction with Core"s decentralized infrastructure. You now have complete ownership of your reclaimed BTC.


