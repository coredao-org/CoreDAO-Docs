---
sidebar_label: Staking de Bitcoin con Core
description: Guía de usuario para hacer stake de BTC desde un dispositivo Ledger en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Hardware Wallets Ledger para BTC Staking en Core

---

Esta guía de usuario te lleva paso a paso por el proceso de hacer stake de BTC para ganar recompensas en CORE dentro de la blockchain de Core usando un hardware wallet Ledger. Siguiendo los pasos a continuación, puedes participar en el modelo de Self-Custodial Bitcoin Staking de Core mientras mantienes el control total de tus activos.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de Bitcoin en Core es compatible únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Siempre actualiza tu dispositivo a través de Ledger Live antes de continuar.
- **Haz stake de BTC únicamente desde la dirección principal de tu BTC Wallet:** Actualmente, el staking de BTC solo es compatible con la dirección principal de tu BTC Wallet en Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora. Consulta nuestras [FAQs](../../../../FAQs/ledger-core-faqs.md) para instrucciones sobre cómo crear una nueva dirección o identificar tu dirección principal.
- **Solo se admiten direcciones Bitcoin Native SegWit:** Actualmente, únicamente las direcciones Bitcoin Native SegWit son compatibles para hacer staking de BTC a través de Ledger hardware.

## Hardware Wallets Ledger compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con las operaciones de staking, redención y redelegación de BTC en la blockchain de Core. Para obtener la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando la versión más reciente de firmware disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de escribir este documento y están sujetas a cambios. Antes de timelocking, redimir o redelegar Bitcoin en Core usando tu dispositivo Ledger, asegúrate de actualizarlo a la última versión para mantener la compatibilidad y seguridad. Verifica siempre en **Ledger Live** las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y configurado en tu computadora.
- Necesitas tener una dirección BTC en tu dispositivo Ledger, la cual puedes obtener a través de Ledger Live o la Xverse wallet.
  - Las direcciones BTC creadas mediante wallets distintas a Xverse y Ledger Live no han sido probadas – úsalas bajo tu propio riesgo.
  - Para Xverse Wallet, añade tu dispositivo Ledger a la Xverse Wallet.
- Asegúrate de tener suficiente BTC (mínimo 0.01 BTC) disponible en tu dispositivo Ledger para realizar staking.

## Configuración del Dispositivo Ledger

Antes de hacer staking de BTC en Core, asegúrate de que tu Ledger hardware wallet esté completamente actualizada y lista para usarse con la blockchain de Core.

### Paso 1: Actualizar tu Dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de Ledger Manager en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo.

### Paso 2: Instalar la aplicación Core en Ledger

Sigue los pasos a continuación para instalar la aplicación Core en tu dispositivo.

1. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live y navega a "**My Ledger**".
2. En el "**App Catalog**", busca "**Core**".
3. Instala la aplicación **Core**. Usa únicamente la aplicación Core para staking, redención y redelegación de Bitcoin bloqueado en Core Mainnet.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/install-coredao-app.png)
</p>

:::info
Usa siempre la aplicación Core para hacer staking, redimir o redelegar Bitcoin en Core Mainnet. La aplicación estándar de Bitcoin no es compatible con las operaciones de redención en Core y podría resultar en una pérdida permanente de acceso a tu timelocked BTC. A diferencia de la aplicación Ledger Bitcoin, que utiliza blind signing en la cual los detalles de la transacción están ocultos para el usuario, la aplicación Ledger Core habilita Clear Signing.
Clear Signing muestra toda la información de la transacción (por ejemplo: monto, validador, comisiones y direcciones) directamente en la pantalla de tu dispositivo Ledger, brindándote completa visibilidad. Esto te permite verificar con confianza lo que estás firmando y te protege de transacciones no intencionadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

### Paso 3: Configuración de la Dirección de Bitcoin en el Dispositivo Ledger

Actualmente, el staking desde un dispositivo Ledger solo es compatible mediante la cuenta principal de Bitcoin en el dispositivo Ledger.

- Si tienes un dispositivo Ledger nuevo, la primera cuenta de Bitcoin que configures será la cuenta principal. Consulta [aquí](../../../../FAQs/ledger-core-faqs#8-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-ledger-live) los pasos detallados para configurar la dirección de Bitcoin en tu dispositivo Ledger usando Ledger Live.
- Si ya tienes múltiples cuentas de Bitcoin configuradas en tu dispositivo ledger, consulta [aquí](../../../../FAQs/ledger-core-faqs#9-how-do-you-set-up-a-bitcoin-address-on-a-ledger-device-using-xverse-wallet) las instrucciones para identificar la cuenta principal.

> ⚠️ **Disclaimer:** _Actualmente, solo las direcciones de Bitcoin generadas a través de Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas usando otras wallets no han sido probadas, y su funcionalidad no puede garantizarse. Los usuarios que elijan usar wallets no probadas lo hacen bajo su propio riesgo._

## Staking BTC en Core con Ledger

Con tu dispositivo Ledger conectado y la aplicación Core instalada, puedes hacer staking de BTC de manera segura directamente desde tu hardware wallet.

> ⚠️**Nota:** Se requiere un mínimo de 0.01 BTC para participar en el staking de Bitcoin en Core, además de BTC suficiente para cubrir las comisiones de transacción. Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta aquí.

1. En tu dispositivo Ledger, abre la **Core app** antes de continuar.

<p align="center">
![ready-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/coredao-app-ready.png)
</p>

2. Navega al [sitio web de Core BTC Staking](https://stake.coredao.org/staking).

### Conectar la Core Wallet al Sitio de Staking

1. Conecta tu wallet de Core Mainnet al sitio web. Esta será usada como dirección de recompensas en CORE.

2. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Mainnet.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

### Conectar Ledger Hardware Wallet al sitio web

Antes de conectar tu dispositivo Ledger al sitio web, asegúrate de estar usando la cuenta principal de Bitcoin (BTC) de tu dispositivo Ledger para hacer staking de BTC en Core. Consulta la [guía oficial de Ledger](https://support.ledger.com/article/115005195945-zd) para configurar una cuenta de Bitcoin (BTC) en tu dispositivo si aún no lo has hecho.

#### Opción de Staking Uno: Conectar Ledger Wallet Directamente

1. En el [sitio web de Core Bitcoin Staking](https://stake.coredao.org/staking), haz clic en "**Connect**" junto a BTC Stake Amount. Recuerda, solo la cuenta primaria está soportada para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a tu Ledger Live.

<p align="center" >
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. From the displayed wallet modal, under "**Hardware Wallet**", click on "**Ledger**". Ensure your Ledger is connected, unlocked, and the Core app is open. Note that only the Bitcoin Native SegWit type addresses are supported for BTC staking on Core with Ledger.

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

3. **Confirm BTC Staking Details:** Verify the amount of BTC to be staked. Before finalizing, specify key parameters:
   - Confirm the BTC amount you'd like to stake (minimum 0.01 BTC).
   - Set the lock time to determine when your Bitcoin will be unlocked. Please note that the website's user interface displays the lock time based on the user's local time, which may differ from the time zone of the Ledger device, which is UTC.
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

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

Congratulations! You've successfully staked Bitcoin on Core using your Ledger hardware wallet, leveraging its security and Core's self-custodial model for complete asset control and transparent signing via the Core app. Welcome to the Core ecosystem, where security, control, and yield are paramount!
