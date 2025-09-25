---
sidebar_label: Hacer Staking de BTC con Core
description: Guía para hacer staking de BTC desde un dispositivo Ledger en Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Hardware Wallets Ledger para BTC Staking en Core

Esta guía de usuario te lleva paso a paso por el proceso de hacer stake de BTC para ganar recompensas en CORE dentro de la blockchain de Core usando un hardware wallet Ledger. Siguiendo los pasos a continuación, puedes participar en el modelo de Self-Custodial Bitcoin Staking de Core mientras mantienes el control total de tus activos.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

1. **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de Bitcoin en Core es compatible únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Siempre actualiza tu dispositivo a través de Ledger Live antes de continuar.

2. **Usa siempre la aplicación Core de Ledger:** Debes usar la aplicación Core Testnet de Ledger, no la aplicación estándar de Bitcoin, al hacer staking o redimir BTC en Core Testnet. Hacer staking de BTC con la aplicación de Bitcoin puede provocar la imposibilidad de redimir tus BTC, lo que resultaría en la pérdida permanente de los activos.

3. **Haz staking de BTC solo desde la dirección principal de la billetera BTC:** Actualmente, el staking de BTC es compatible únicamente desde la dirección principal de la billetera BTC de tu dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por el momento.

4. **Solo se admite el tipo de dirección Bitcoin Native SegWit:** Actualmente, solo las direcciones Bitcoin Native SegWit son compatibles para el staking de BTC a través de dispositivos Ledger.

## Dispositivos Ledger de hardware compatibles

Los siguientes dispositivos de hardware de Ledger actualmente admiten el staking, redención y redelegación de BTC en Core Testnet. Para una mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando la versión de firmware más reciente disponible.

| Dispositivo Ledger | Versión de firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::important
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de redactar y están sujetas a cambios. Antes de hacer staking, redimir o redelegar Bitcoin en Core Testnet usando tu dispositivo Ledger, como mejor práctica, actualiza siempre a la última versión compatible para garantizar compatibilidad y seguridad. Siempre verifica en Ledger Live las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y configurado en tu computadora.
- Una dirección BTC en tu dispositivo Ledger, la cual puedes obtener a través de Ledger Live o de la billetera Xverse.
  - Las direcciones BTC creadas en billeteras distintas a Xverse o Ledger Live no han sido probadas — úsalas bajo tu propio riesgo.
  - Para Xverse Wallet, agrega tu dispositivo Ledger a la billetera Xverse.
- Bitcoin Testnet4 BTC suficiente (mínimo 0.01 BTC) disponible en tu dispositivo Ledger para el staking y para cubrir las comisiones de transacción.

## Actualizar tu dispositivo Ledger

Antes de hacer staking de BTC en Core Testnet, como mejor práctica, asegúrate de que tu hardware wallet Ledger esté actualizado con el firmware más reciente o compatible, y que esté configurado y listo para usarse con Core Testnet.

### Actualizar tu dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de **Ledger Manager** en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo.

#### Configuración de Ledger Live para Testnet

La aplicación Core Testnet no está instalada por defecto en Ledger Live Manager. Para instalar y visualizar la aplicación Core Testnet, debes habilitar el "**Developer Mode**" y cambiar la opción "**My Ledger Provider**" en tu dispositivo Ledger.

##### Habilitar el Developer Mode en tu dispositivo Ledger

1. Conecta tu dispositivo Ledger y desbloquéalo.

2. Abre la aplicación Ledger Live y navega a **Settings** (ubicada en la parte superior derecha).

3. Ve al menú "**Experimental Features**", habilita "**Developer Mode**," y establece **My Ledger Provider** en **4**. Esto mostrará las aplicaciones de desarrollo y testnet en el manager.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app-1.png)
</p>

##### Instalación de la aplicación Ledger Core Testnet

1. Con tu dispositivo conectado, abre Ledger Live y navega a "**My Ledger**".

2. En el "**App Catalog**", busca "**Core**".

3. Instala la aplicación "**Core Testnet**". Usa _únicamente_ la aplicación Core Testnet para hacer staking de Bitcoin en Core Testnet.

<p align="center" style={{zoom:"80%"}}>    
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app.png)
</p>

:::note
Para hacer staking de BTC en Core Testnet con un dispositivo Ledger, los usuarios deben usar únicamente la aplicación Core Testnet. A diferencia de la aplicación de Bitcoin, que depende de blind signing, la aplicación Core soporta Clear Signing, lo que permite a los usuarios visualizar y verificar completamente los detalles de la transacción antes de firmarla y aprobarla. Para más información sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::#### Configuración de la cuenta de Bitcoin TestnetActualmente, el staking desde un dispositivo Ledger solo es compatible a través de la cuenta principal de Bitcoin en el dispositivo Ledger.
Si tienes un dispositivo Ledger nuevo, la primera cuenta de Bitcoin que configures será la cuenta principal. Consulta aquí los pasos detallados para configurar la dirección de Bitcoin en el dispositivo Ledger usando Ledger Live.
Si ya tienes varias cuentas de Bitcoin configuradas en tu dispositivo Ledger, consulta aquí las instrucciones para identificar la cuenta principal.⚠️ Aviso: Actualmente, solo las direcciones de Bitcoin generadas mediante Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas con otras wallets aún no han sido probadas y no se puede garantizar su funcionamiento. Los usuarios que decidan proceder con wallets no probadas lo harán bajo su propio riesgo.##### Configuración de la dirección de Bitcoin usando Ledger LivePara configurar una dirección de cuenta Bitcoin que contenga los tokens Bitcoin Testnet4 BTC para staking, sigue los pasos a continuación:1) Instala Bitcoin Testnet y la aplicación de Bitcoin en tu dispositivo Ledger.
2) Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live, navega a la pestaña "**Accounts**" y haz clic en "**Add Account**".<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>3) Busca testnet y selecciona Bitcoin Testnet (BTC). Click on Continue<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>4) Aprueba la aplicación de Bitcoin Test en tu dispositivo Ledger.
5) En la siguiente pantalla, elige el formato de dirección (Native SegWit). Ten en cuenta que únicamente el tipo de dirección Bitcoin Native SegWit es compatible para hacer staking de BTC en Core usando dispositivos Ledger.
6) Haz clic en el botón **Add Account**.<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>7) Has añadido correctamente una cuenta de Bitcoin en la aplicación de Bitcoin testnet.<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta [aquí](https://support.ledger.com/article/115005195945-zd).#### Obtener tokens Bitcoin Testnet4 BTC1) Ve a la pestaña Receive en Ledger Live.<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>2) Selecciona la cuenta de Bitcoin Testnet que deseas usar y haz clic en "Continue".<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>3) Copia la dirección de la cuenta de Bitcoin Testnet.<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>4) Utiliza los faucets de Bitcoin Testnet4 para recibir tokens de prueba de Bitcoin.<br/>:::note
Usa siempre la aplicación Core Testnet para hacer staking, redimir o redelegar Bitcoin en Core Testnet. La aplicación estándar de Bitcoin no soporta operaciones de redención en Core y puede resultar en la pérdida permanente de acceso a tu BTC en staking. A diferencia de la aplicación de Bitcoin de Ledger, que utiliza blind signing donde los detalles de la transacción se ocultan al usuario, la aplicación Ledger Core Testnet permite Clear Signing. Con Clear Signing, todos los detalles de la transacción (ej. monto, validador, comisiones, direcciones) se muestran directamente en la pantalla de tu dispositivo Ledger, dándote visibilidad total. Esto te permite verificar con confianza lo que estás firmando y te protege contra transacciones no deseadas o maliciosas. Para más información sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

#### Configurar Cuenta de Bitcoin Testnet

Actualmente, el staking desde un dispositivo Ledger solo es compatible mediante la cuenta principal de Bitcoin en el dispositivo Ledger.
Si tienes un dispositivo Ledger nuevo, la primera cuenta de Bitcoin que configures será la cuenta principal. Consulta aquí los pasos detallados para configurar la dirección de Bitcoin en el dispositivo Ledger usando Ledger Live.
Si ya tienes varias cuentas de Bitcoin configuradas en tu dispositivo Ledger, consulta aquí las instrucciones para identificar la cuenta principal.

⚠️ Aviso: Actualmente, solo las direcciones de Bitcoin generadas mediante Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas con otras wallets aún no han sido probadas y no se puede garantizar su funcionamiento. Los usuarios que decidan proceder con wallets no probadas lo harán bajo su propio riesgo.

##### Configuración de una Dirección de Bitcoin usando Ledger Live

Para configurar una dirección de cuenta de Bitcoin que contenga tokens de Bitcoin Testnet4 BTC para staking, sigue los pasos a continuación:

1. Instala Bitcoin Testnet y la aplicación de Bitcoin en tu dispositivo Ledger.
2. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live, navega a la pestaña "**Accounts**" y haz clic en "**Add Account**".

<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>

3. Busca testnet y selecciona Bitcoin Testnet (BTC). Haz clic en Continue

<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>

4. Aprueba la aplicación de Bitcoin Test en tu dispositivo Ledger.
5. En la siguiente pantalla, elige el formato de dirección (Native SegWit). Ten en cuenta que únicamente el tipo de dirección Bitcoin Native SegWit es compatible para hacer staking de BTC en Core usando dispositivos Ledger.
6. Haz clic en el botón **Add Account**.

<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>

7. Has añadido correctamente una cuenta de Bitcoin en la aplicación de Bitcoin testnet.

<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>

Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta [aquí](https://support.ledger.com/article/115005195945-zd).

#### Get Bitcoin Testnet4 BTC Tokens

1. Go to the Receive tab on Ledger Live.

<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>

2. Select Bitcoin testnet account you want to use and click on "Continue".

<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>

3. Copy the Bitcoin Testnet account address.

<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>

4. Utiliza los faucets de Bitcoin Testnet4 para recibir tokens de Bitcoin de prueba.

<br/>

:::note
Always use the Core Testnet app for staking, redeeming, or redelegating Bitcoin on Core Testnet. The standard Bitcoin app does not support redemption operations on Core and may result in permanent loss of access to your staked BTC. Unlike the Ledger Bitcoin app, which uses blind signing where transaction details are obscured from the user, the Ledger Core Testnet app enables Clear Signing. Clear Signing displays all transaction information (e.g., amount, validator, fees, addresses) directly on your Ledger device screen, giving you complete visibility. This enables you to verify what you’re signing confidently and protects you from unintended or malicious transactions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

## Staking BTC on Core with Ledger

With your Ledger device connected and the Core Testnet app installed, you can securely stake BTC directly from your hardware wallet.

> ⚠️ **Note:** A minimum of 0.01 BTC is required to participate in Bitcoin staking on Core Testnet, along with sufficient testnet BTC to cover transaction fees.

1. On your Ledger device, open the CoreDAO app before proceeding.

<p align="center" style={{zoom:"120%"}}>
![core-app-ready](../../../../../static/img/ledger-core/testnet/btc-staking/core-app-ready.png)
</p>

2. Navigate to the [Core Testnet Staking Website](https://stake.test2.btcs.network/staking).

### Connect Core Wallet to the Staking Website

1. Connect your Core Testnet wallet to the Core Staking website. This will be used as the CORE reward address.

2. Click on the "**Connect**" button in the top right corner of the website.

<p align="center" style={{zoom:"80%"}}>
![connect-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

3. From the displayed wallet modal, select the wallet of your choice configured for use with Core Testnet.

### Connect Ledger Hardware Wallet to Website

Before connecting your Ledger device to the website, it's important to ensure you are using your primary Bitcoin (BTC) account for staking BTC on Core Testnet. Refer to the [official guide from Ledger](https://support.ledger.com/article/115005195945-zd) to set up a Bitcoin (BTC) account on your device, if you haven't already.

#### Staking Option One: Connect Ledger Wallet Directly

1. On the [Core Testnet Bitcoin Staking website](https://stake.test2.btcs.network/staking), click on "**Connect**" next to BTC Staking Amount. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" style={{zoom:"50%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. From the displayed wallet modal, under "**Hardware Wallet**," click on "**Ledger**". Ensure your Ledger is connected, unlocked, and the Core Testnet app is open.

<p align="center" style={{zoom:"60%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-17.png)
</p>

#### Staking Option Two: Connecting Ledger Device Using Xverse Wallet

Alternatively, users can also use Xverse to stake Bitcoin from their Ledger device. To achieve this, users must first add their Ledger device to their Xverse wallet as a prerequisite. Refer to the [official guide by Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) to connect your Ledger device with Xverse.

1. On the Core Bitcoin Staking page, click on "**Connect**" next to BTC Stake Amount. Remember, only the primary account is supported for staking BTC; ensure it is the same account connected to your Ledger Live.

<p align="center" style={{zoom:"50%"}}>    
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. From the displayed wallet modal, click on "**Xverse**" under "**Wallets Supporting Ledger**". Make sure your Ledger device is unlocked.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-18.png)
</p>

3. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-19.png)
</p>

4. If requested to switch to "**Bitcoin Testnet4**" accept the notification.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-20.png)
</p>

> ⚠️ **Note:** Only the primary Bitcoin account on the Ledger device is supported to stake BTC; ensure it is the same account connected to the Xverse wallet and used for staking purposes.

### Specify & Confirm BTC Staking Details

1. **Specify BTC Staking & Delegation Details:** Once both Core and Bitcoin wallets are connected, specify the amount of BTC to stake. Select the desired Core validator to delegate your Bitcoin to. To proceed with BTC staking, set the tCORE2 Staking Amount as zero. Click the "Proceed to Stake" button.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-9.png)
</p>

2. **Skip tCORE2 Staking Details:** Users can skip this step and click directly on "Stake BTC" to proceed with staking only Bitcoin by verifying Bitcoin staking details.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-10.png)
</p>

3. **Confirm BTC Staking Details:** Confirm the amount to stake BTC. Before finalizing the Bitcoin staking transaction, it's essential to understand and specify several key parameters:
   - Confirm the amount of BTC you’d like to timelock. The minimum amount to stake is 0.01 BTC.
   - Setting the lock time determines when your Bitcoin will be unlocked and available again for redemption or re-delegation.
   - The lock time on the website UI is based on the user’s local timezone, which may not align with the Ledger device’s UTC timezone.
   - Specify the network priority speed for your transaction.

<p align="center" style={{zoom:"80%"}}>  
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-11.png)
</p>

4. **Verify Bitcoin Staking Address (Optional)**: Use the Bitcoin Staking Address verification tool to confirm that the displayed BTC staking address matches your expected address before proceeding.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

5. **Proceed to Approve Transaction:** Click on "**Approve Transaction**" on the website to proceed with the transaction.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-12.png)
</p>

6. The approval will be directed to the connected wallet.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-13.png)
</p>

### Review and Approve Transaction on Ledger Device

#### Using Xverse Wallet

1. If using an Xverse wallet, review the transaction. Verify details and click "**Confirm**" on the wallet notification on your browser.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-14.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-15.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Ensure your device is unlocked and the Core Testnet app is open. Review and approve the BTC staking transaction on your Ledger device. Verify the staking details, including the amount of BTC, the validator and delegator addresses, and the transaction fees. Approve by signing the transaction.

<p align="center" style={{zoom:"60%"}}> 
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

2. Once approved on your Ledger device, the "**Transaction Submitted**" notification will appear on the Core BTC Staking website.

<p align="center">
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/btc-staking.gif)
</p>

3. Click on "**View on BTC Explorer**" to view details of your BTC staking transaction on the BTC Explorer.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-16.png)
</p>

> ⚠️ **Note:** To be eligible to earn rewards, you must complete a full staking round on (00:00:00 - 23:59:29 UTC).

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

Congratulations! You’ve successfully staked Bitcoin using your Ledger hardware wallet on the Core Testnet through Core’s Self-Custodial Bitcoin Staking. By following this guide, you securely connected your Ledger device, installed and used the Ledger Core Testnet app, and completed your BTC staking transactions with confidence. You’re now part of the Core ecosystem where security, control, and yield go hand in hand!
