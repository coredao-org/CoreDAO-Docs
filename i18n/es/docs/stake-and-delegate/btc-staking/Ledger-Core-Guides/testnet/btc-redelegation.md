---
sidebar_label: Redelegating Timelock Expired BTC
description: Guide to redelegate BTC from Ledger device on Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redelegar BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redelegar Bitcoins (BTC) en staking con timelock expirado hacia un nuevo validador de Core en la testnet de Core, utilizando una hardware wallet Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Ledger Core Testnet app esté instalada. Debes usar la misma dirección principal de BTC wallet que utilizaste originalmente para el staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger en Core Testnet, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

1. **Usa únicamente dispositivos Ledger compatibles:** El staking, redención y redelegación de BTC en Core Testnet solo son compatibles con hardware wallets Ledger soportados que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.

2. **Usa siempre la Ledger Core Testnet App:** Debes utilizar la Ledger Core Testnet app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC en Core Testnet. La aplicación de Bitcoin no admite operaciones de redemption o redelegation de BTC en staking, lo que puede impedir un redeem o redelegate exitoso.

3. **Redelegar BTC solo desde la Dirección Principal de BTC:** Actualmente, el BTC staking, redemption y redelegation en Core Testnet a través de Ledger son compatibles únicamente desde la dirección principal de BTC del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos de Ledger hardware actualmente admiten staking, redemption y redelegation de BTC para ganar recompensas en el Core Testnet. Para la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

:::note
Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de realizar staking, redención o redelegación de BTC en Core Testnet usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Revisa siempre **Ledger Live** para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la Core Testnet usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redelegación.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redelegar BTC con Timelock Expirado

Después de que el período de timelock de los BTC en staking haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redelegar después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Ve al [sitio web de Core Testnet Staking] (https://stake.test2.btcs.network/staking).

2. Conecta tu wallet de Core Testnet al sitio web de Core Testnet Staking. Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC.

3. Haz clic en el botón "Connect" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. En el modal de wallets que aparece, selecciona la wallet de tu preferencia configurada para usar con Core.

### Paso #2: Navegar al Testnet Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga el firmware más reciente instalado y esté conectado a tu computadora con la dirección principal de Bitcoin (BTC) de Ledger.

2. En el sitio de Core Testnet Staking, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-1.png)
</p>

### Paso #3: Navegar a BTC Staking Records

1. En la página "**My Staking Dashboard**", selecciona la pestaña "**BTC**" de los registros mostrados.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-3.png)
</p>

2. Esta pestaña lista todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como ‘**Expired**‘debajo de ‘**Redeem Time**‘, y haz clic en ‘**Redelegate**‘ debajo de ‘**Action**‘.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-2.png)
</p>

### Paso #4: Conectar el dispositivo Ledger para Redelegación

#### Opción #1: Conectar el dispositivo Ledger directamente al sitio web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio web de Core Testnet Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” del modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core Testnet app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-2.png)
</p>

#### Opción #2: Conectar el dispositivo Ledger usando Xverse Wallet

Alternatively, you can use Xverse Wallet to redelegate BTC directly from your Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "Xverse" under the "Wallets Supporting Ledger" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-3.png)
</p>

2. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-8.png)
</p>

### Step #5: Specify BTC Redelegation Details

1. On the displayed "**Restake BTC**" modal, cross-check the **BTC amount to redelegate**, the **Bitcoin Staking Address**, and the **Reward Address on Core Testnet**. To redelegate expired timelocked BTC, users **_must_** connect to the same Bitcoin address as the one initiating the BTC staking transaction.

2. **Set the BTC timelock period:** Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or redelegation. Note that the lock time on the Staking Website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.

3. **Setting Transaction Network Priority Speed:** Select the network priority speed for your transaction.

4. **Confirm Delegation:** Proceed by clicking "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-4.png)
</p>

5. **Verify BTC Staking Address (Optional):** Use the BTC Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-5.png)
</p>

6. **Proceed to Approve Transaction:** Click on "Approve Transaction" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-6.png)
</p>

### Step #6: Review & Approve BTC Redelegation Transaction

The user will be prompted to review and approve the transaction from their Ledger device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-7.png)
</p>

#### Using Xverse Wallet to Approve Transaction

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-10.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-11.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.

2. Always use the Ledger Core Tesnet app, not the Ledger Bitcoin app, for redelegation of expired timelocked BTC on the Core Testnet. The Bitcoin app lacks support for redemption and redelegation operations. Further, the Ledger Core Testnet app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

3. Once the transaction is approved on your Ledger device, the staking website will display a "Transaction Submitted" notification, confirming that your BTC redelegation request has been successfully initiated.

<p align="center">
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/btc-redelegation.gif)
</p>

3. After transaction approval, users can also view the transaction details on the BTC Explorer.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-12.png)
</p>

## Conclusion

By following this guide, you’ve successfully redelegated timelock-expired staked BTC on the Core Testnet using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core Testnet app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.
