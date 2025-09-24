---
sidebar_label: Redelegating Timelock Expired BTC
description: Guide to redelegate BTC from Ledger device on Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Redirigir BTC Staked en Core

Esta guía del usuario te llevará paso a paso por el proceso de redelegar Bitcoin (BTC) timelocked expirado a un nuevo Core validator en Core Testnet usando un Ledger hardware wallet, re-iniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la app Ledger Core Testnet esté instalada. Debes usar la misma dirección principal de BTC que utilizaste originalmente para hacer staking. Para aprender cómo hacer staking de BTC usando Ledger en Core Testnet, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

1. **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core Testnet son compatibles únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.

2. **Usa Siempre la App Core Testnet de Ledger:** Debes usar la app Ledger Core Testnet (no la app Ledger Bitcoin) para staking, redención o redelegación de BTC en Core Testnet. La app Bitcoin no soporta operaciones de redención o redelegación de BTC staked y puede impedir que estas operaciones se completen exitosamente.

3. **Redelegar BTC Solo desde la Dirección Principal de BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core Testnet usando Ledger solo se soportan desde la primary BTC address del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Hardware Wallets Ledger compatibles

Los siguientes dispositivos Ledger actualmente soportan staking, redención y redelegación de BTC para ganar recompensas en Core Testnet. Para obtener la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando la versión más reciente de firmware disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

:::note
Las versiones de firmware listadas arriba reflejan la versión más reciente disponible al momento de escribir este documento y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core Testnet usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en **Ledger Live** las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerequisitos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y correctamente configurado en tu computadora.
- Haber realizado staking de BTC en Core Testnet previamente usando tu dispositivo Ledger.
- Si estás usando Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y agregado a ella.
- Que el período de timelock de tus BTC bloqueados haya expirado, haciéndolos elegibles para redelegación.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que haya expirado el timelock designado.

## Pasos para Redelegar BTC con Timelock Expirado

Una vez que el período de timelock del BTC en staking ha expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes utilizar la misma dirección de cartera Ledger que usaste originalmente para hacer staking de BTC a fin de redelegar tus BTC tras la expiración del timelock.

### Paso #1: Conectar Core Wallet al Sitio de Staking

1. Ve al [sitio web de Core Testnet Staking] (https://stake.test2.btcs.network/staking).

2. Conecta tu Core Testnet wallet al sitio de Staking de Core Testnet. Recuerda usar la misma wallet que utilizaste al hacer el staking de BTC.

3. Haz clic en el botón "Connect" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. En la ventana emergente de selección de carteras, elige la cartera de tu preferencia que tengas configurada para usar con Core.

### Paso #2: Navegar al Testnet Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga instalado el firmware más reciente y esté conectado a tu computadora utilizando la dirección primaria de Bitcoin (BTC) de Ledger.

2. En el sitio de Core Testnet Staking, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-1.png)
</p>

### Paso #3: Ir al Registro de BTC Staking

1. En la página del “**My Staking Dashboard**”, selecciona la pestaña de “**BTC**” para ver los registros correspondientes.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-3.png)
</p>

2. En esta pestaña se listan todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como ‘**Expired**’ bajo ‘**Redeem Time**’, y haz clic en ‘**Redelegate**’ debajo de ‘**Action**’.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-2.png)
</p>

### Paso #4: Conectar el Dispositivo Ledger para Redelegación

#### Opción #1: Conectar el Dispositivo Ledger Directamente al Sitio Web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio de Core Testnet Staking, haz clic en "**Ledger**" bajo la sección "**Hardware Wallets**" del modal de wallet mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado, y que la app Ledger Core Testnet esté abierta en el dispositivo.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-2.png)
</p>

#### Opción #2: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, puedes usar Xverse Wallet para redelegar BTC directamente desde tu dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. To connect your Ledger device using the Xverse wallet, click on "Xverse" under the "Wallets Supporting Ledger" section from the displayed wallet model. Ensure your Ledger is connected, unlocked, and the Ledger Core Testnet app is open on your device.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-3.png)
</p>

2. Unlock your Ledger device and confirm the connection via the Xverse wallet extension.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-8.png)
</p>

### Step #5: Especificar los detalles de la Redelegación de BTC

1. En el modal "**Restake BTC**" mostrado, verifica el **monto de BTC a redelegar**, la **Bitcoin Staking Address,** y la **Reward Address en Core Testnet**. Para redelegar BTC cuya timelock haya expirado, los usuarios **_deben_** conectarse a la misma dirección de Bitcoin que se utilizó para iniciar la transacción de staking de BTC.

2. **Establecer el periodo de timelock de BTC:** Configurar el tiempo de bloqueo determina cuándo tu Bitcoin estará desbloqueado y disponible nuevamente para redemption o redelegation. Ten en cuenta que el tiempo de bloqueo en la UI del sitio de Staking se basa en la zona horaria local del usuario, que puede no coincidir con la zona UTC del dispositivo Ledger.

3. **Configurar la velocidad de prioridad de la transacción:** Selecciona la velocidad de red deseada para tu transacción.

4. **Confirmar delegación:** Procede haciendo clic en "**Confirm Delegation**".

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

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

By following this guide, you’ve successfully redelegated timelock-expired staked BTC on the Core Testnet using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core Testnet app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.
