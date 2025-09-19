---
sidebar_label: Intégration de portefeuille matériel FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Intégration de portefeuille matériel FAQs

---

### 1. Pourquoi mon portefeuille Ledger crée-t-il de nouvelles adresses?

Les appareils Ledger génèrent automatiquement une nouvelle adresse chaque fois que vous les connectez. Ce comportement peut entraîner l'échec des transactions de remboursement parce que le processus de remboursement nécessite l'adresse de staking originale qui a été utilisée pour initier la transaction de staking BTC. Il est donc recommandé de toujours enregistrer l'adresse Bitcoin que vous avez utilisée pour le staking.

### 2. Comment puis-je trouver mon adresse de staking originale?

Il existe plusieurs façons de localiser votre adresse de staking Bitcoin originale.

1. Accédez à vos enregistrements de [My Staking](https://stake.coredao.org/my-staking#btc) sur le tableau de bord [Core Staking Website](https://stake.coredao.org/staking).

2. Copiez le hash de transaction de staking Bitcoin. Cliquer dessus naviguera l'utilisateur vers les détails de la transaction sur le Mempool [Mempool.Space Bitcoin Explorer](https://mempool.space/).

<p align="center" style={{zoom:"40%"}}>
![copt-tx-hash](../../static/img/ledger-core/staking-tx-copy.png)
</p>

3. Accédez à [Core Scan Block Explorer](https://scan.coredao.org/). Dans le menu de navigation supérieur, cliquez sur "**More**" et dans le menu déroulant, sélectionnez "[BTC Staking Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder)".

<p align="center" style={{zoom:"60%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder.png)
</p>

5. Collez le hash de transaction de staking Bitcoin copié et cliquez sur "**Decode**".

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-2.png)
</p>

6. Sous la section "**Decoded Results**", "**Input Address**" est l'adresse de staking BTC que vous avez utilisée pour initier la transaction de staking. Notez que ceci n'est **not your public key**, mais juste l'adresse spécifique utilisée lors de la création de la transaction à verrouillage temporel.

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-3.png)
</p>

### 3. Pourquoi ma transaction de remboursement échoue-t-elle?

Si vous entrez une nouvelle adresse de réception au lieu de **original staking address**, la transaction de remboursement ne sera pas effectuée. Pour réussir à racheter vos BTC à verrouillage temporel expiré, assurez-vous que "**BTC Receiving Address**" que vous fournissez lors du rachat correspond à **original Bitcoin staking address**, l'adresse qui a initié la transaction de staking. Vous pouvez confirmer l'adresse en vérifiant les détails de votre transaction sur [mempool.space](https://mempool.space/) or using the [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

### 4. Est-ce que le staking et le rachat sont possibles directement avec l'appareil Ledger?

Oui, le staking et le rachat sont tous deux possibles, à condition d'utiliser la même adresse de réception BTC pour le rachat que celle utilisée pour le staking. De plus, **_only_** le type d'adresse Bitcoin Segwit Native est pris en charge.

### 5. Lorsque je connecte mon appareil Ledger, pourquoi le solde affiché est-il incorrect sur l'interface utilisateur?

Lorsque vous connectez votre appareil Ledger à l'interface utilisateur, la plateforme affiche uniquement le solde de votre **primary staking address**. Elle ne lit **pas** votre
solde total sous votre clé publique Ledger. Si vous avez plusieurs adresses BTC, seul le solde de l'adresse Bitcoin principale est récupéré
et affiché.

### 6. Les utilisateurs gagnent-ils des récompenses après la fin de la période de blocage s'ils ne rachètent pas leurs BTC?

Non, une fois que la période de blocage se termine, les récompenses cessent de s'accumuler. Les utilisateurs peuvent soit **redeem their BTC** manuellement, soit, s'ils le souhaitent, les re-déléguer manuellement pour bloquer à nouveau les BTC et recommencer à accumuler des récompenses.

### 7. Pourquoi vois-je "Erreur de transaction - Appareil Ledger : Données invalides reçues (0x6a80)" lors du rachat?

<p align="center" style={{zoom:"60%"}}>
![redeem-error-image](../../static/img/ledger-core/redeem-tx-error.png)
</p>

Cette erreur se produit généralement lors du rachat de BTC après la fin de la période de staking. Cela signifie que quelque chose dans votre configuration ne correspond pas aux exigences pour un rachat réussi. Voici les **causes connues** et comment les résoudre:

1. **Application Ledger incorrecte**

   - Assurez-vous d'utiliser **l'application Core** sur votre appareil Ledger, et non pas Bitcoin, Ethereum ou toute autre application.
   - Mettez à jour Ledger Live et le firmware de votre appareil vers la dernière version prise en charge. Assurez-vous de restaurer tous vos comptes après la mise à jour.

2. **Adresse de réception BTC incorrecte utilisée**

   - "L'adresse de réception BTC" doit être **l'adresse de staking d'origine** que vous avez utilisée lors du staking initial de vos BTC.

   - Utiliser une nouvelle adresse ou une adresse différente entraînera cette erreur.

   - **Comment trouver votre adresse d'origine:** Vérifiez votre historique de transactions dans Ledger Live, sur un explorateur de blocs (like [mempool.space](https://mempool.space/)) or using the [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

3. **Not the Primary Staking Address**

   - If you have multiple BTC accounts under your Ledger wallet, the system will only detect your **primary (original)** staking address.

   - Be sure to connect to the same account and address used during the original staking.

4. **Unsynced Ledger or Browser Cache Issues**

   - Refresh the staking site and reconnect your Ledger.

   - Clear your browser cache or try using a different browser.

### 8) How do you set up a Bitcoin address on a Ledger device using Ledger Live?

1. In Ledger Live, click "**My ledger"** tab and connect your Ledger drive

2. Search and install the Bitcoin app on your Ledger device.

3. Navigate to the **Accounts** tab and click **Add Account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-1.png)
</p>

4. Search "**Bitcoin**" and select "**Bitcoin (BTC)**". Press continue.

<p align="center" style={{zoom:"32%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-2.png)
</p>

5. Approve the connection for Ledger Live on the Bitcoin app through your Ledger device.

6. Select the **Native Segwit** account type.

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-3.png)
</p>

7. You have successfully added a Bitcoin account to your ledger device using the Bitcoin app. For more details on setting up your first Bitcoin Account on a Ledger device, refer [here](https://support.ledger.com/article/115005195945-zd).

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-4.png)
</p>

### 9. How do you set up a Bitcoin address on a Ledger device using Xverse Wallet?

1. Connect your Ledger device to the Ledger Live application on your computer. Click on the Account title on the Xverse wallet.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-5.png)
</p>

2. Click on the **Add hardware wallet account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-6.png)
</p>

3. Select **Connect Ledger** from the listed devices.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-7.png)
</p>

4. Navigate through the setup wizard for setting up the account. Click **Get Started**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-8.png)
</p>

5. From the **Select Asset** model, select the **Bitcoin, Runes & Oridnals** option. Click Continue.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-9.png)
</p>

6. Proceed by selecting **I am using Ledger Live with this device**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-10.png)
</p>

7. Acknowledge the Risk Notification.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-11.png)
</p>

8. Make sure your device is unlocked and the Bitcoin app is open. Click **Connect**. Select your device from the device list.

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

12. L'utilisateur sera invité à vérifier l'adresse de réception Bitcoin sur son appareil Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-16.png)
</p>

13. Continue on the ledger device to confirm the address

<p align="center" style={{zoom:"80%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-17.png)
</p>

14. Une fois confirmée, l'utilisateur sera invité à valider un ensemble de portefeuilles réussi

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-18.png)
</p>

15. Spécifiez le nom du portefeuille que vous souhaitez voir apparaître sur Xverse pour le compte.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-19.png)
</p>

16. Cliquez sur "Confirm" pour continuer. L'adresse Bitcoin de votre appareil Ledger est maintenant ajoutée à votre portefeuille Xverse sous le nom que vous avez spécifié à l'étape précédente. Notez que ce nom est uniquement pour Xverse et ne sera pas reflété dans Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-20.png)
</p>

### 10. Vous avez plusieurs adresses Bitcoin sur votre appareil Ledger. How to identify the primary account?

1. Connect your Ledger device to the Ledger Live application on your computer. Navigate to the "**Accounts**" tab.

2. By default, the accounts are listed in the order of creation.

3. Alternatively, from the listed accounts, click on the Bitcoin account.

4. Click on the "**Settings**" icon in the top right corner of the account details page.

5. Click "**Advanced**" on the "**Edit Account**" modal.

6. If the "**Index**" value is set to 0, the account is your primary account.

<p align="center" style={{zoom:"40%"}}>
![identify-bitcoin-primary-address](../../static/img/ledger-core/bitcoin-address-identificaiton.png)
</p>

### 11. Can we use any other wallet other than Xverse to set up a Bitcoin address on Ledger devices for staking Bitcoin on Core?

Currently, only Bitcoin addresses generated through Ledger Live and Xverse Wallet have been thoroughly tested and verified for compatibility. Addresses created using other wallets have not yet been tested, and functionality cannot be guaranteed. Users choosing to
proceed with untested wallets should do so at their own risk.
