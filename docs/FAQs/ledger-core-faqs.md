---
sidebar_label: Hardware Wallet Integration FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Hardware Wallet Integration on Core FAQs
---

### 1. Why does my Ledger wallet keep creating new addresses?

Ledger devices automatically generate a new address each time you connect them. This behavior can cause redemption transactions to fail because the redemption process requires the original staking address that was used to initiate the BTC staking transaction. Therefore, it is recommended always to record the Bitcoin address you used for staking.

### 2. How can I find my original BTC staking address?

There are multiple ways to locate your original Bitcoin staking address. The most easiest workaround to find the original BTC staking address is using the BTC Staking Tx Decoder by Core, the steps are as follows:

1.  Navigate to your BTC staking records on the [My Staking](https://stake.coredao.org/my-staking#btc) dashboard on the [Core Staking Website](https://stake.coredao.org/staking).

2.  Copy the Bitcoin Staking Transaction hash. Clicking on it will navigate the user to transaction details on the [Mempool.Space Bitcoin Explorer](https://mempool.space/).

<p align="center" style={{zoom:"40%"}}>
![copt-tx-hash](../../static/img/ledger-core/staking-tx-copy.png)
</p>

3.  Navigate to [Core Scan Block Explorer](https://scan.coredao.org/). From the top navigation menu, click "**More**" and from the drop-down menu select "[BTC Staking Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder)".

<p align="center" style={{zoom:"60%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder.png)
</p>

5.  Paste the copied Bitcoin Staking transaction hash and click "**Decode**".

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-2.png)
</p>

6.  Under the "**Decoded Results**" section, "**Input Address**" is the BTC staking address you have used for initiating the staking transaction. Note that this is **not your public key**, just the specific address used when the timelock transaction was created.

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-3.png)
</p>

**Note:** If the user wants to redeem re-delegated BTC assets, then the they will have to use the original BTC address that was the initiator of the staking transaction, i.e., the first transaction in the chain of transactions for the currently locked asset.

### 3. Why does my redemption transaction fail?

If you input a new receiving address instead of the **original staking address**, the redemption transaction will not complete. To successfully redeem your timelock expired BTC ensure that the "**BTC Receiving Address**" you provide during redemption matches the **original Bitcoin staking address**, the address that initiated the staking transaction. You can confirm the address by checking your transaction details on the [mempool.space](https://mempool.space/) or using the [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

### 4. Is staking and redemption possible directly with the Ledger device?

Yes, both staking and redemption are possible, provided you use the same BTC receiving address for redemption as you used for staking. Also, the **_only_** Segwit Native Bitcoin Address type is supported.

### 5. When I connect my ledger device, why is the balance shown incorrect on the UI?

When you connect your Ledger device to UI, the platform only shows the balance of your **primary staking address**. It does **not** read your
total balance under your Ledger public key. If you have multiple BTC addresses, only the balance in the primary Bitcoin addresses is fetched
and displayed.

### 6. Do users earn rewards after the lock period ends if they don't redeem their BTC?

No, once the lock period ends, rewards stop accruing. Users can either **redeem their BTC** manually or if desired, re-delegate manually to
timelock BTC again and start accruing rewards.

### 7. Why do I see "Transaction Error Occurred -- Ledger device: Invalid data received (0x6a80)" during redemption?

<p align="center" style={{zoom:"60%"}}>
![redeem-error-image](../../static/img/ledger-core/redeem-tx-error.png)
</p>

This error typically happens when redeeming BTC after the staking period ends. It means that something in your setup doesn't match the
requirements for a successful redemption. Below are the **known causes** and how to fix them:

1.  **Incorrect Ledger App**

    -   Make sure you are using the **Core app** on your Ledger device, not Bitcoin, Ethereum, or any other app.
    -   Update Ledger Live and your device firmware to the latest/supported version. Make sure to restore all your accounts after updating.

2.  **Wrong BTC Receiving Address Used**

    -   The "BTC Receiving Address" must be the **original staking address** you used when you first staked your BTC.

    -   Using a new or different address will result in this error.

    -   **How to find your original address:** Check your transaction history in Ledger Live, on a block explorer (like [mempool.space](https://mempool.space/)) or using the [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

3.  **Not the Primary Staking Address**

    -   If you have multiple BTC accounts under your Ledger wallet, the system will only detect your **primary (original)** staking address.

    -   Be sure to connect to the same account and address used during the original staking.

4.  **Unsynced Ledger or Browser Cache Issues**

    -   Refresh the staking site and reconnect your Ledger.

    -   Clear your browser cache or try using a different browser.

### 8. How do you set up a Bitcoin address on a Ledger device using Ledger Live?

1.  In Ledger Live, click "**My ledger"** tab and connect your Ledger drive

2.  Search and install the Bitcoin app on your Ledger device.

3.  Navigate to the **Accounts** tab and click **Add Account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-1.png)
</p>

4.  Search "**Bitcoin**" and select "**Bitcoin (BTC)**". Press continue.

<p align="center" style={{zoom:"32%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-2.png)
</p>

5.  Approve the connection for Ledger Live on the Bitcoin app through your Ledger device. 

6. Select the **Native Segwit** account type.

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-3.png)
</p>

7.  You have successfully added a Bitcoin account to your ledger device using the Bitcoin app. For more details on setting up your first Bitcoin Account on a Ledger device, refer [here](https://support.ledger.com/article/115005195945-zd).

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-4.png)
</p>

### 9. How do you set up a Bitcoin address on a Ledger device using Xverse Wallet?

1.  Connect your Ledger device to the Ledger Live application on your computer. Click on the Account title on the Xverse wallet.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-5.png)
</p>

2.  Click on the **Add hardware wallet account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-6.png)
</p>

3.  Select **Connect Ledger** from the listed devices.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-7.png)
</p>

4.  Navigate through the setup wizard for setting up the account. Click **Get Started**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-8.png)
</p>

5.  From the **Select Asset** model, select the **Bitcoin, Runes & Oridnals** option. Click Continue.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-9.png)
</p>

6.  Proceed by selecting **I am using Ledger Live with this device**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-10.png)
</p>

7.  Acknowledge the Risk Notification.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-11.png)
</p>

8.  Make sure your device is unlocked and the Bitcoin app is open. Click **Connect**. Select your device from the device list.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-12.png)
</p>

9. Choose to add a Bitcoin wallet by clicking on **Add new account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-13.png)
</p>

10. User will be prompted to confirm the Ordinals address on their Ledger device.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-14.png)
</p>

11. Continue on the ledger device to confirm the address

<p align="center" style={{zoom:"90%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-15.png)
</p>

12. User will be prompted to verify the Bitcoin receiving address on their Ledger device.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-16.png)
</p>

13. Continue on the ledger device to confirm the address

<p align="center" style={{zoom:"80%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-17.png)
</p>

14. Once confirmed, the user will be prompted for successful set of wallets

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-18.png)
</p>

15. Specify the wallet name that you want the account to appear on Xverse.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-19.png)
</p>

16. Click "Confirm" to proceed. The ledger device's Bitcoin address is now added to your Xverse wallet by the name you specified in the
previous step. Note this name is just for Xverse and will not be reflected in Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-20.png)
</p>

### 10. I have multiple Bitcoin addresses on my Ledger device. How to identify the primary account?

1.  Connect your Ledger device to the Ledger Live application on your computer. Navigate to the "**Accounts**" tab.

2.  By default, the accounts are listed in the order of creation.

4.  Alternatively, from the listed accounts, click on the Bitcoin account.

5.  Click on the "**Settings**" icon in the top right corner of the account details page.

6.  Click "**Advanced**" on the "**Edit Account**" modal.

7.  If the "**Index**" value is set to 0, the account is your primary account.

<p align="center" style={{zoom:"40%"}}>
![identify-bitcoin-primary-address](../../static/img/ledger-core/bitcoin-address-identificaiton.png)
</p>


### 11. Can we use any other wallet other than Xverse to set up a Bitcoin address on Ledger devices for staking Bitcoin on Core?

Currently, only Bitcoin addresses generated through Ledger Live and Xverse Wallet have been thoroughly tested and verified for compatibility. Addresses created using other wallets have not yet been tested, and functionality cannot be guaranteed. Users choosing to
proceed with untested wallets should do so at their own risk.
