---
sidebar_label: FAQs de Integración de Hardware Wallet
hide_table_of_contents: false
sidebar_position: 2
---

# FAQs de Integración de Hardware Wallet en Core

---

### 1. ¿Por qué mi Ledger wallet sigue creando nuevas direcciones?

Los dispositivos Ledger generan automáticamente una nueva dirección cada vez que los conectas. Este comportamiento puede ocasionar que las transacciones de redención fallen, ya que el proceso de redención requiere la dirección de staking original que fue utilizada para iniciar la transacción de BTC staking. Por lo tanto, se recomienda siempre registrar la dirección de Bitcoin que utilizaste para el staking.

### 2. How can I find my original BTC staking address?

There are multiple ways to locate your original Bitcoin staking address. The most easiest workaround to find the original BTC staking address is using the BTC Staking Tx Decoder by Core, the steps are as follows:

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

**Note:** If the user wants to redeem re-delegated BTC assets, then the they will have to use the original BTC address that was the initiator of the staking transaction, i.e., the first transaction in the chain of transactions for the currently locked asset.

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

   - Refresca el sitio de staking y vuelve a conectar tu Ledger.

   - Borra la caché de tu navegador o prueba con un navegador diferente.

### 8) ¿Cómo configurar una dirección de Bitcoin en un dispositivo Ledger usando Ledger Live?

1. En Ledger Live, haz clic en la pestaña “**My Ledger**” y conecta tu dispositivo Ledger

2. Busca e instala la Bitcoin app en tu dispositivo Ledger.

3. Navega a la pestaña **Accounts** y haz clic en **Add Account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-1.png)
</p>

4. Busca “**Bitcoin**” y selecciona “**Bitcoin (BTC)**”. Presiona Continue.

<p align="center" style={{zoom:"32%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-2.png)
</p>

5. Aprueba la conexión de Ledger Live con la Bitcoin app en tu dispositivo Ledger.

6. Selecciona el tipo de cuenta **Native SegWit**.

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-3.png)
</p>

7. Has agregado exitosamente una cuenta de Bitcoin a tu dispositivo Ledger usando la Bitcoin app. Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta [aquí](https://support.ledger.com/article/115005195945-zd).

<p align="center" style={{zoom:"60%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-4.png)
</p>

### 9. ¿Cómo configurar una dirección de Bitcoin en un dispositivo Ledger usando Xverse Wallet?

1. Conecta tu dispositivo Ledger a la aplicación Ledger Live en tu computadora. Haz clic en el título de Account en la wallet de Xverse.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-5.png)
</p>

2. Haz clic en **Add hardware wallet account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-6.png)
</p>

3. Selecciona **Connect Ledger** de la lista de dispositivos.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-7.png)
</p>

4. Avanza a través del asistente de configuración de cuenta. Haz clic en **Get Started**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-8.png)
</p>

5. Desde el modelo **Select Asset**, selecciona la opción **Bitcoin, Runes & Oridnals**. Haz clic en Continue.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-9.png)
</p>

6. Procede seleccionando **I am using Ledger Live with this device**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-10.png)
</p>

7. Reconoce la Risk Notification.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-11.png)
</p>

8. Asegúrate de que tu dispositivo esté desbloqueado y la Bitcoin app esté abierta. Haz clic en **Connect**. Selecciona tu dispositivo de la lista.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-12.png)
</p>

9. Elige añadir una wallet de Bitcoin haciendo clic en **Add new account**.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-13.png)
</p>

10. El usuario será solicitado para confirmar la Ordinals address en su dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-14.png)
</p>

11. Continúa en el dispositivo Ledger para confirmar la dirección

<p align="center" style={{zoom:"90%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-15.png)
</p>

12. El usuario será solicitado para verificar la Bitcoin receiving address en su dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-16.png)
</p>

13. Continúa en el dispositivo Ledger para confirmar la dirección

<p align="center" style={{zoom:"80%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-17.png)
</p>

14. Una vez confirmada, al usuario se le notificará la configuración exitosa de las wallets

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-18.png)
</p>

15. Especifica el nombre de la wallet con el que quieres que la cuenta aparezca en Xverse.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-19.png)
</p>

16. Haz clic en "Confirm" para continuar. La dirección de Bitcoin de tu dispositivo Ledger ahora está agregada a tu wallet Xverse bajo el nombre especificado en el paso anterior. Nota: este nombre es solo para Xverse y no se reflejará en Ledger.

<p align="center" style={{zoom:"40%"}}>
![setup-ledger-live-bitcoin-address](../../static/img/ledger-core/Xverse_screenshots/xverse-add-account-20.png)
</p>

### 10. Tengo múltiples direcciones de Bitcoin en mi dispositivo Ledger. ¿Cómo identificar la cuenta primaria?

1. Conecta tu dispositivo Ledger a la aplicación Ledger Live en tu computadora. Navega a la pestaña **Accounts**.

2. Por defecto, las cuentas se listan en el orden en que fueron creadas.

3. Alternativamente, desde la lista de cuentas, haz clic en la cuenta de Bitcoin.

4. Haz clic en el ícono de "**Settings**" en la parte superior derecha de la página de detalles de la cuenta.

5. En el modal de "**Edit Account**", haz clic en "**Advanced**".

6. Si el valor de "**Index**" está configurado en 0, esa cuenta es tu cuenta primaria.

<p align="center" style={{zoom:"40%"}}>
![identify-bitcoin-primary-address](../../static/img/ledger-core/bitcoin-address-identificaiton.png)
</p>

### 11. ¿Podemos usar otra wallet distinta de Xverse para configurar una dirección de Bitcoin en dispositivos Ledger para hacer staking de Bitcoin en Core?

Actualmente, solo las direcciones de Bitcoin generadas a través de Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas con otras wallets aún no han sido testeadas, y por lo tanto no se puede garantizar su funcionamiento. Los usuarios que decidan proceder con wallets no probadas deben hacerlo bajo su propio riesgo.
