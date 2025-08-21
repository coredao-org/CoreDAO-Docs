---
sidebar_label: Staking BTC con Core
description: Guía de usuario para hacer staking de BTC desde un dispositivo Ledger en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Staking de BTC con Core

---

Esta guía de usuario te guía a través del proceso de hacer staking de BTC para ganar recompensas en CORE en la blockchain de Core usando un Ledger hardware wallet. Siguiendo los pasos a continuación, podrás participar en el Self-Custodial Bitcoin Staking de Core mientras mantienes el control total de tus activos.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

 - **Usa solo dispositivos Ledger compatibles:** El staking, redención y redelegación de Bitcoin en Core solo es compatible con ciertos Ledger hardware wallets con el firmware más reciente. Actualiza siempre tu dispositivo a través de Ledger Live antes de continuar.
 - **Usa siempre la Core App de Ledger:** Debes usar la Core app de Ledger, no la aplicación estándar de Bitcoin, cuando hagas staking o redimas BTC en Core. Hacer staking de BTC con la aplicación estándar de Bitcoin puede provocar la imposibilidad de redimir tu BTC, lo que resultaría en la pérdida permanente de tus activos.
 - **Haz staking de BTC solo desde la dirección principal de la BTC Wallet:** Actualmente, el staking de BTC es compatible únicamente desde la dirección principal de la BTC Wallet en tu dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con el staking, redención y redelegación de BTC en la blockchain de Core. Para la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de escribir este documento y están sujetas a cambios. Antes de realizar el timelock, el redeem o la redelegation de Bitcoin en Core usando tu dispositivo Ledger, actualízalo a la última versión para garantizar compatibilidad y seguridad. Revisa siempre **Ledger Live** para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

 - Un dispositivo Ledger con el firmware más reciente.
 - Ledger Live instalado y configurado en tu computadora.
 - Si usas Xverse Wallet, tu dispositivo Ledger debe estar agregado a la Xverse Wallet.
 - Suficiente BTC (mínimo 0.01 BTC) disponible en tu dispositivo Ledger para hacer staking.

## Configuración del Dispositivo Ledger

Antes de hacer staking de BTC en Core, asegúrate de que tu hardware wallet Ledger esté completamente actualizado y lista para usarse con la blockchain de Core.

### Paso 1: Actualizar tu Dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de Ledger Manager en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo.

### Paso 2: Instalación de la aplicación Ledger Core

Sigue los pasos a continuación para instalar la aplicación Core en tu dispositivo.

1. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live y navega a "**My Ledger**".
2. En el "**App Catalog**", busca "**Core**".
3. Instala la aplicación "**Core**". Usa únicamente la aplicación Core para staking, redeem y redelegation de Bitcoin bloqueado en Core Mainnet.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/install-coredao-app.png)
</p>

:::info
Usa siempre la aplicación Core para hacer staking, redeeming o redelegating de Bitcoin en Core Mainnet. The standard Bitcoin app does not support redemption operations on Core and may result in permanent loss of access to your timelocked BTC. Unlike the Ledger Bitcoin app, which uses blind signing where transaction details are obscured from the user, the Ledger Core app enables Clear Signing. Clear Signing displays all transaction information (e.g., amount, validator, fees, addresses) directly on your Ledger device screen, giving you complete visibility. This enables you to verify what you’re signing confidently and protects you from unintended or malicious transactions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

## Staking BTC on Core with Ledger

With your Ledger device connected and the Core app installed, you can securely stake BTC directly from your hardware wallet.

> ⚠️ **Note:** A minimum of 0.01 BTC is required to participate in Bitcoin staking on Core Mainnet, along with sufficient BTC to cover transaction fees. For more details on setting up your first Bitcoin Account on a Ledger device, refer here.

1. On your Ledger device, open the **Core app** before proceeding.

<p align="center">
![ready-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/coredao-app-ready.png)
</p>

2. Navigate to the [Core BTC Staking Website](https://stake.coredao.org/staking).

### Connect Core Wallet to the Staking Website

1. Connect your Core Mainnet wallet to the website. This will be used as the CORE reward address.
2. Click on the "**Connect**" button in the top right corner of the website.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

3. From the displayed wallet modal, select the wallet of your choice configured for use with Core Mainnet.

### Connect Ledger Hardware Wallet to Website

Before connecting your Ledger device to the website, it's important to ensure you are using your primary Bitcoin (BTC) account for staking BTC on Core. Refer to the [official guide from Ledger](https://support.ledger.com/article/115005195945-zd) to set up a Bitcoin (BTC) account on your device, if you haven't already.

#### Staking Option One: Connect Ledger Wallet Directly

1. On the [Core Bitcoin Staking Website](https://stake.coredao.org/staking), click on "**Connect**" next to BTC Stake Amount. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" >
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. From the displayed wallet modal, under "**Hardware Wallet**", click on "**Ledger**". Ensure your Ledger is connected, unlocked, and the Core app is open.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-1.png)
</p>

#### Staking Option Two: Connecting Ledger Device Using Xverse Wallet

Alternatively, users can also use Xverse to stake Bitcoin from their Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. On the [Core Bitcoin Staking page](https://stake.coredao.org/staking), click on "**Connect**" next to BTC Stake Amount. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. From the displayed wallet modal,  click on "**Xverse**" under "**Wallets Supporting Ledger**". Make sure your Ledger device is unlocked.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-2.png)
</p>

3. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-3.png)
</p>

> ⚠️ **Note:** Only the primary Bitcoin account on the Ledger device is supported to stake BTC; ensure it is the same account connected to the Xverse wallet and used for staking purposes.

### Specify & Confirm BTC Staking Details

1. **Specify BTC Staking & Delegation Details:** Once both Core and Bitcoin wallets are connected, specify the amount of BTC to stake. Select the desired Core validator to delegate your Bitcoin to. To proceed with BTC staking, specify the CORE Staking Amount as zero. Click the "**Proceed to Stake**" button.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-3.png)
</p>

2. **Skip CORE Staking Details:** Users can skip this step and click directly on "Stake BTC" to proceed with staking only Bitcoin by verifying Bitcoin staking details.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-4.png)
</p>

3. **Confirm BTC Staking Details:** Confirm the amount to stake BTC. Before finalizing the Bitcoin staking transaction, it's essential to understand and specify several key parameters:
    - Confirm the amount of BTC you’d like to stake. The **minimum amount to stake is 0.01 BTC**.
    - Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or re-delegation.
    - The lock time on the website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.
    - Specify the network priority speed for your transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-5.png)
</p>

4. **Verify Bitcoin Staking Address (Optional):** Use the Bitcoin Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-6.png)
</p>

5. **Proceed to Approve Transaction:** Click on "Approve Transaction" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-7.png)
</p>

### Review and Approve Transaction on Ledger Device

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Ensure your device is unlocked and the Core app is open. Review and approve the BTC staking transaction on your Ledger device. Verify the staking details, including the amount of BTC, the validator and delegator addresses, and the transaction fees. Approve by signing the transaction.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

2. Once approved on your Ledger device, the "**Transaction Submitted**" notification will appear on the Core BTC Staking website.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-8.png)
</p>

3. Click on "**View on BTC Explorer**" to view details of your BTC staking transaction on the BTC Explorer.

> ⚠️ **Note:** To be eligible to earn rewards, you must complete a full staking round (00:00:00 - 23:59:29 UTC).

## Conclusion

Congratulations! You’ve successfully staked Bitcoin using your Ledger hardware wallet on the Core through Core’s Self-Custodial Bitcoin Staking. By following this guide, you securely connected your Ledger device, installed and used the Ledger Core app, and completed your BTC staking transactions with confidence.
Leveraging Ledger’s industry-leading security along with Core’s Self-Custodial Bitcoin Staking model ensures that your assets remain completely under your control. Using the Core app also enables Clear Signing, providing complete transparency into what you're signing, giving you peace of mind and a safer experience.
You’re now part of the Core ecosystem where security, control, and yield go hand in hand!
