---
sidebar_label: Redelegar BTC en Staking
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Carteras Hardware Ledger para Redelegar BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redelegar Bitcoin (BTC) bloqueado por tiempo y ya expirado hacia un nuevo validador de Core utilizando una cartera hardware Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y de que la aplicación Ledger Core esté instalada. Debes usar la misma dirección principal de BTC que utilizaste originalmente para hacer staking. Para aprender cómo hacer staking de BTC con Ledger, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin inconvenientes, ten en cuenta los siguientes requisitos clave:

- **Usar solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core son compatibles **únicamente** con determinados dispositivos Ledger hardware wallets que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usar siempre la aplicación Ledger Core:** Debes utilizar la aplicación Ledger Core (no la aplicación Ledger Bitcoin) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.
- **Hacer staking de BTC solo desde la dirección principal de BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core a través de Ledger **solo** son compatibles con la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora.

## Carteras Hardware Ledger Compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con las operaciones de staking, redención y redelegación de BTC en la blockchain de Core. For the best experience and compatibility, as a best practice ensure your device is running the latest available firmware.

| Ledger Device      | Firmware Version (_at the time of writing_) |
| ------------------ | -------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                          |
| **Ledger Nano X**  | 2.5.0                          |
| **Ledger Stax**    | 1.8.0                          |
| **Ledger Flex**    | 1.4.0                          |

<br/>

> ⚠️ **Note:** The firmware versions listed above reflect the latest available version at the time of writing and are subject to change. Before staking, redeeming, or redelegating BTC on Core using your Ledger device, update to the latest version to ensure compatibility and security. Always check Ledger Live for the most current updates. Refer [here](https://support.ledger.com/article/8458939792669-zd) for more details on updating the Ledger drive firmware.

## Prerequisites

Before you begin, make sure you have:

- A supported Ledger device with the latest firmware.
- Ledger Live is installed and correctly set up on your computer.
- You have previously staked BTC on the Core blockchain using your Ledger device.
- If you're using Xverse Wallet, your Ledger device is already connected and added to it.
- The timelock period for your locked BTC has expired, making it eligible for redemption.

> ⚠️ **Note:** You will not be able to redeem or redelegate staked BTC until the designated timelock has expired.

## Steps to Redelegate Timelock Expired BTC

After the timelock period for staked BTC has expired, users are eligible to redeem or redelegate their delegated Bitcoin assets. You must use the same Ledger wallet address used for staking BTC to redelegate your BTC after the timelock expiry.

### Step #1: Connect Core Wallet to the Staking Website

1. Connect your Core Mainnet wallet to the Staking website. Remember to use the same wallet that you had used at the time of staking BTC. Click on the "**Connect**" button in the top right corner of the website.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. From the displayed wallet modal, select the wallet of your choice configured for use with Core.

### Step #2: Navigate to Staking Dashboard

1. Ensure your Ledger device is installed with the latest firmware and connected to your computer with Ledger’s primary Bitcoin (BTC) address.
2. Navigate to the [Core BTC Staking Website](https://stake.coredao.org/staking)
3. On the Staking website, hover over your connected wallet in the top right corner, and click "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-1.png)
</p>

### Step #3: Navigate to BTC Staking Records

1. On the "**My Staking Dashboard**" page, select "BTC" records from the displayed tabs.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-2.png)
</p>

2. This tab lists all the BTC staking records and the validators that you have previously delegated your BTC to. Look for any "**Expired**" records under "**Redeem Time**", and proceed to click "**Redelegate**" under "**Action**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-3.png)
</p>

### Step #4: Connect Ledger Device for Redelegation

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-1.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redelegate BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "**Xverse**" under the "**Wallets Supporting Ledger**" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-2.png)
</p>

### Step #5: Specify BTC Redelegation Details

1. On the displayed "**Redelegate BTC**" modal, cross-check the BTC amount to redelegate, the Bitcoin Staking Address, and the Reward Address on Core. To redelegate expired timelocked BTC, users must connect to the same Bitcoin address as the one initiating the BTC staking transaction.
2. Set the BTC timelock period. Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or redelegation. Note that the lock time on the Staking Website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.
3. Specify the network priority speed for your transaction.
4. Proceed by clicking "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-4.png)
</p>

5. **Verify BTC Staking Address (Optional):** Use the BTC Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-5.png)
</p>

6. **Proceed to Approve Transaction:** Click on "**Approve Transaction**" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-6.png)
</p>

### Step #6: Review & Approve BTC Redelegation Transaction

The user will be prompted to review and approve the transaction from their Ledger device.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-7.png)
</p>

#### Using Xverse Wallet to Approve Transaction

1. If using an Xverse wallet, review the transaction. Verify details and click "Confirm" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/Xverse-wallet-ui.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/xverse-wallet-ui-2.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.
2. Always use the Ledger Core app, not the Ledger Bitcoin app, for redelegation of expired timelocked BTC on the Core blockchain. The Bitcoin app lacks support for redemption and redelegation operations. Further, the Ledger Core app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer here.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

3. Once the transaction is approved on your Ledger device, the staking website will display a "**Transaction Submitted**" notification, confirming that your BTC redelegation request has been successfully initiated.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-8.png)
</p>

4. After transaction approval, users can also view the transaction details on the BTC Explorer.

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

By following this guide, you’ve successfully redelegated timelock expired staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.


