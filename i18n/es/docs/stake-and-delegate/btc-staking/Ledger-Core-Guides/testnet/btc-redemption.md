---
sidebar_label: Redeeming Staked BTC
description: Guide to redeem timelock expired BTC from Ledger device
hide_table_of_contents: false
sidebar_position: 2
---

# Using Ledger Hardware Wallets to Redeem BTC Staked on Core

This user guide will walk you through the step-by-step process of redeeming your staked Bitcoin (BTC) on the Core Testnet using a Ledger hardware wallet.

:::note
Before you begin, ensure your Ledger device is updated and the Core Testnet app is installed. You must use the same primary BTC wallet address originally used for staking BTC. To learn how to stake BTC using Ledger on Core Testnet, refer to the official guide [here](./btc-staking.md).
:::

## Before You Begin: Important Reminders

To ensure a secure and seamless experience, please note the following key requirements:

1. Use Only Supported Ledger Devices: BTC staking, redemption, and redelegation on Core Testnet are supported only on specific supported Ledger hardware wallets with the latest firmware. Always update your device via Ledger Live before use.

2. Always Use the Ledger’s CoreDAO App: You must use the Ledger Core Testnet app (not the Ledger Bitcoin app) for both staking, redeeming, or redelegating BTC on Core Testnet. The Bitcoin app does not support redemption operations of staked BTC and may prevent successful redemption.

3. Staking BTC Only from the Primary BTC Wallet Address: Currently, BTC staking, redemption, and redelegation on Core Testnet through Ledger are supported only from the primary BTC address of the Ledger device. Secondary or derived addresses are not compatible.

## Supported Ledger Hardware Wallets

The following Ledger hardware devices currently support staking, redemption, and redelegation of BTC on the Core Testnet. For the best experience and compatibility, as a best practice, ensure your device is running the latest supported or available firmware.

| Ledger Device      | Firmware Version (_at the time of writing_) |
| ------------------ | -------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                          |
| **Ledger Nano X**  | 2.5.0                          |
| **Ledger Stax**    | 1.8.0                          |
| **Ledger Flex**    | 1.4.0                          |

:::note
The firmware versions listed above reflect the latest available version at the time of writing and are subject to change. Before staking, redeeming, or redelegating BTC on Core Testnet using your Ledger device, as a best practice, update to the latest or a supported version to ensure compatibility and security. Always check Ledger Live for the most current updates. Refer [here](https://support.ledger.com/article/8458939792669-zd) for more details on updating the Ledger drive firmware.
:::

## ## Prerequisites

Before you begin, make sure you have:

- A supported Ledger device with the latest/supported firmware.
- Ledger Live is installed and correctly set up on your computer.
- You have previously staked BTC on the Core Testnet using your Ledger device.
- If you're using Xverse Wallet, your Ledger device is already connected and added to it.
- The timelock period for your locked BTC has expired, making it eligible for redemption.

> ⚠️ **Note:** You will not be able to redeem or redelegate staked BTC until the designated timelock has expired.

## Steps to Redeem Expired Timelock BTC

After the timelock period for BTC has expired, users are eligible to redeem or redelegate their delegated Bitcoin assets. You must use the same Ledger wallet address used for staking BTC to redeem your BTC after the timelock expiry.

### Step #1: Connect Core Wallet to the Staking Website

1. Navigate to the [Core Testnet Staking Website](https://stake.test2.btcs.network/staking).

2. Connect your Core Testnet wallet to the Core Testnet Staking website. _Remember to use the same wallet that you had used at the time of staking BTC_.

3. Click on the "**Connect**" button in the top right corner of the website.

<p align="center" style={{zoom:"80%"}}>
![conenct-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. From the displayed wallet modal, select the wallet of your choice configured for use with Core Testnet.

### Step #2: Navigate to Testnet Staking Dashboard

1. Ensure your Ledger device is installed with the latest or supporting firmware and connected to your computer with Ledger’s primary Bitcoin (BTC) address.

2. On the Core Testnet Staking website, hover over your connected wallet in the top right corner and click "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![my-staking](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-1.png)
</p>

### Step #3: Navigate to Testnet BTC Staking Records

1. On the "**My Staking Dashboard**" page, select "**BTC**" records from the displayed tabs.

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-3.png)
</p>

2. This tab lists all the BTC staking records and the validators that you have previously delegated BTC to. Look for any ‘**Expired**’ records under ‘**Redeem Time**,’ and proceed to click ‘**Redeem**’ under ‘**Action**.’

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-1.png)
</p>

### Step #4: Verify BTC Staking and Redemption Details

1. On the displayed "**Redeem BTC**" modal, cross-check the **BTC staking address**, the **BTC Amount** that will be redeemed, and the **Receiving Bitcoin address**. To redeem the BTC, you **_must_** connect to the same Bitcoin address as the one initiating the Bitcoin staking transaction.

2. Set your **Receiving Bitcoin Address** to receive the unlocked BTC. This **must** be the same as the address that initiated the Bitcoin staking transaction and **must** be the Native Segwit address type.

3. Set your transaction speed priority, and click "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![verify-tx-details](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-12.png)
</p>

### Step #5: Sign the BTC Unlock Transaction on Ledger Device

1. Click "**Sign By Bitcoin Wallet**" to sign the BTC redemption transaction from your Ledger device.

<p align="center" style={{zoom:"40%"}}>
![sign-tx](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-13.png)
</p>

### Step#5: Connect Ledger Device for Redemption of Staked BTC

#### Option #1: Connecting the Ledger Device Directly to the Staking Website

1. To connect your Ledger device directly to the Core Testnet Staking website, click on "**Ledger**" under the "**Hardware Wallets**" section from the displayed wallet model. Ensure your Ledger device is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![conenct-ledger-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-2.png)
</p>

#### Option #2: Connecting Ledger Device Using Xverse Wallet

Alternatively, you can use Xverse Wallet to redeem BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "**Xverse**" under the "**Wallets Supporting Ledger**" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-3.png)
</p>

2. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![connect-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-8.png)
</p>

### Step#6: Review & Approve Transaction on Ledger Device

1. After connecting your Ledger device, ensure that the device is unlocked and the Ledger Core Testnet app is open. You will be prompted on the screen to approve the transaction.

<p align="center" style={{zoom:"60%"}}>
![prompt-tx-approval](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-7.png)
</p>

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-10.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledge**r" modal.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-11.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.

2. Always use the Ledger Core Testnet app, not the Ledger Bitcoin app, to redeem the staked BTC on the Core Testnet. The Bitcoin app lacks support for redemption/redelegation operations. Further, the Ledger Core Testnet app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![sign-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-redeem/btc-redeem-testnet.gif)
</p>

4. Once the transaction is approved on your Ledger device, the website will display a "Transaction Submitted" notification, confirming that your BTC redemption request has been successfully initiated.

<p align="center"  style={{zoom:"40%"}}>
![tx-submitted](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-14.png)
</p>

5. After the Bitcoin block of the redemption transaction is confirmed, verify that the redeemed BTC has returned to your receiving Bitcoin address. (This may take a few minutes). You can also view the transaction details on the BTC Explorer.

## Conclusion

By following this guide, you’ve successfully redeemed staked BTC on the Core Testnet using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Staking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core Testnet app, provides maximum transparency, confidence, and safety. Your successful redemption marks a secure and transparent interaction with Core’s decentralized infrastructure. You now have complete ownership of your reclaimed BTC.
