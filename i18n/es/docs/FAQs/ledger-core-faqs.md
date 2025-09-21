---
sidebar_label: FAQs de Integración de Hardware Wallet
hide_table_of_contents: false
sidebar_position: 2
---

# FAQs de Integración de Hardware Wallet en Core

---

### 1. ¿Por qué mi Ledger wallet sigue creando nuevas direcciones?

Los dispositivos Ledger generan automáticamente una nueva dirección cada vez que los conectas. Este comportamiento puede ocasionar que las transacciones de redención fallen, ya que el proceso de redención requiere la dirección de staking original que fue utilizada para iniciar la transacción de BTC staking. Por lo tanto, se recomienda siempre registrar la dirección de Bitcoin que utilizaste para el staking.

### 2. ¿Cómo puedo encontrar mi dirección de staking original?

Existen múltiples formas de localizar tu dirección original de Bitcoin staking.

1. Navega a tus registros de BTC staking en el panel [My Staking](https://stake.coredao.org/my-staking#btc) en el [sitio web de Core Staking](https://stake.coredao.org/staking).

2. Copia el hash de la transacción de Bitcoin Staking. Al hacer clic en él, se te redirigirá a los detalles de la transacción en el [Mempool.Space Bitcoin Explorer](https://mempool.space/).

<p align="center" style={{zoom:"40%"}}>
![copt-tx-hash](../../static/img/ledger-core/staking-tx-copy.png)
</p>

3. Navega a [Core Scan Block Explorer](https://scan.coredao.org/). Desde el menú de navegación superior, haz clic en “**More**” y en el menú desplegable selecciona "[BTC Staking Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder)".

<p align="center" style={{zoom:"60%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder.png)
</p>

5. Pega el hash de la transacción de Bitcoin Staking que copiaste y haz clic en “**Decode**”.

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-2.png)
</p>

6. En la sección “**Decoded Results**”, el “**Input Address**” es la dirección BTC de staking que utilizaste para iniciar la transacción de staking. Ten en cuenta que esto **no es tu public key**, sino únicamente la dirección específica usada cuando se creó la transacción con timelock.

<p align="center" style={{zoom:"40%"}}>
![core-scan-explorer](../../static/img/ledger-core/btc-tx-decoder-3.png)
</p>

### 3. ¿Por qué falla mi transacción de redención?

Si introduces una nueva dirección de recepción en lugar de la **dirección de staking original**, la transacción de redención no se completará. Para poder redimir con éxito tu BTC con timelock expirado, asegúrate de que la “**BTC Receiving Address**” que proporciones durante la redención coincida con la **dirección original de Bitcoin staking**, es decir, la dirección que inició la transacción de staking. Puedes confirmar la dirección revisando los detalles de tu transacción en [mempool.space](https://mempool.space/) o utilizando el [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

### 4. ¿Es posible hacer staking y redención directamente con el dispositivo Ledger?

Sí, tanto el staking como la redención son posibles, siempre que uses la misma dirección BTC de recepción para la redención que usaste para el staking. Además, **_únicamente_** se admite el tipo de dirección Segwit Native Bitcoin Address.

### 5. Cuando conecto mi dispositivo Ledger, ¿por qué el balance mostrado en la UI es incorrecto?

Cuando conectas tu dispositivo Ledger a la UI, la plataforma solo muestra el balance de tu **dirección primaria de staking**. **No** lee tu balance total bajo tu public key de Ledger. Si tienes múltiples direcciones BTC, únicamente se obtiene y muestra el balance de la dirección Bitcoin primaria.

### 6. ¿Los usuarios ganan recompensas después de que finaliza el período de bloqueo si no redimen su BTC?

No, una vez que termina el período de bloqueo, las recompensas dejan de acumularse. Los usuarios pueden **redimir su BTC** manualmente o, si lo desean, re-delegar manualmente el BTC con timelock nuevamente para comenzar a generar recompensas otra vez.

### 7. ¿Por qué aparece “Transaction Error Occurred -- Ledger device: Invalid data received (0x6a80)” durante la redención?

<p align="center" style={{zoom:"60%"}}>
![redeem-error-image](../../static/img/ledger-core/redeem-tx-error.png)
</p>

Este error suele ocurrir al intentar redimir BTC después de que termina el período de staking. Significa que algo en tu configuración no cumple con los requisitos para una redención exitosa. A continuación se muestran las **causas conocidas** y cómo solucionarlas:

1. **App de Ledger incorrecta**

   - Asegúrate de estar usando la **Core app** en tu dispositivo Ledger, no Bitcoin, Ethereum u otra app.
   - Actualiza Ledger Live y el firmware de tu dispositivo a la última versión soportada. Después de actualizar, asegúate de restaurar todas tus cuentas.

2. **Dirección BTC de recepción incorrecta**

   - La “BTC Receiving Address” debe ser la **dirección de staking original** que usaste al hacer el staking de tu BTC por primera vez.

   - Usar una dirección nueva o distinta producirá este error.

   - **Cómo encontrar tu dirección original:** revisa tu historial de transacciones en Ledger Live, en un block explorer (como [mempool.space](https://mempool.space/)) o usando el [Core Bitcoin Tx Decoder](https://scan.coredao.org/btc-stake-txn-decoder).

3. **No es la dirección primaria de staking**

   - Si tienes múltiples cuentas BTC en tu wallet Ledger, el sistema solo detectará tu dirección **primaria de staking (la original)**.

   - Asegúrate de conectarte a la misma cuenta y dirección usada en el staking original.

4. **Ledger desincronizado o problemas de caché en el navegador**

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
