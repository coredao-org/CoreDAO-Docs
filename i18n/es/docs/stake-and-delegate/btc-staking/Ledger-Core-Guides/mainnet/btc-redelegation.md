---
sidebar_label: Redelegar BTC en Staking
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redelegar BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redelegar Bitcoins (BTC) en staking con timelock expirado hacia un nuevo validador de Core, utilizando una hardware wallet Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Ledger Core app esté instalada. Debes usar la misma dirección principal de BTC wallet que utilizaste originalmente para el staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa únicamente dispositivos Ledger compatibles:** El staking, redención y redelegación de BTC en Core **solo** son compatibles con hardware wallets Ledger soportados que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usa siempre la Ledger Core App:** Debes utilizar la Ledger Core app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no soporta operaciones de redención de BTC en staking y podría impedir una redención exitosa.
- **Staking de BTC únicamente desde la dirección principal de la BTC Wallet:** Actualmente, el staking, redención y redelegación de BTC en Core mediante Ledger **solo** es compatible desde la dirección principal de BTC del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Compatibles

Los siguientes Ledger hardware wallets son actualmente compatibles con el staking, redención y redelegación de BTC en la blockchain de Core. Para asegurar la mejor experiencia y compatibilidad, como buena práctica, verifica que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

> ⚠️ **Nota:** Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de realizar staking, redención o redelegación de BTC en Core usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en Ledger Live las actualizaciones más actuales. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redelegar BTC con Timelock Expirado

Después de que el período de timelock de los BTC en staking haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redelegar después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web de Staking. Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

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

## Conclusion

By following this guide, you’ve successfully redelegated timelock expired staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.


