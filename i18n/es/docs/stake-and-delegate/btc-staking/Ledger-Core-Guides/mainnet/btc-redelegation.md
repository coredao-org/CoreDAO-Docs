---
sidebar_label: Redelegar BTC en Staking
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Carteras Hardware Ledger para Redelegar BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redelegar Bitcoin (BTC) bloqueado por tiempo y ya expirado hacia un nuevo validador de Core utilizando una cartera hardware Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y de que la aplicación Ledger Core esté instalada. Debes usar la misma dirección principal de BTC que utilizaste originalmente para hacer staking. Para aprender cómo hacer staking de BTC con Ledger, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin inconvenientes, ten en cuenta los siguientes requisitos clave:

- **Usar solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core son compatibles **únicamente** con determinados dispositivos Ledger hardware wallets que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usar siempre la aplicación Ledger Core:** Debes utilizar la aplicación Ledger Core (no la aplicación Ledger Bitcoin) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.
- **Hacer staking de BTC solo desde la dirección principal de BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core a través de Ledger **solo** son compatibles con la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora.

## Carteras Hardware Ledger Compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con las operaciones de staking, redención y redelegación de BTC en la blockchain de Core. Para garantizar la mejor experiencia y compatibilidad, como buena práctica asegúrate de que tu dispositivo ejecute la versión más reciente del firmware disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

> ⚠️ **Nota**: Las versiones de firmware listadas anteriormente reflejan la última versión disponible al momento de la redacción y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core utilizando tu dispositivo Ledger, actualízalo a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en Ledger Live las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y correctamente configurado en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core utilizando tu dispositivo Ledger.
- Si estás usando Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y agregado a ella.
- El período de timelock de tu BTC bloqueado ha expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que haya expirado el timelock designado.

## Pasos para Redelegar BTC con Timelock Expirado

Una vez que el período de timelock del BTC en staking ha expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes utilizar la misma dirección de cartera Ledger que usaste originalmente para hacer staking de BTC a fin de redelegar tus BTC tras la expiración del timelock.

### Paso #1: Conectar Core Wallet al Sitio de Staking

1. Conecta tu cartera de Core Mainnet al sitio web de Staking. Recuerda usar la misma cartera que utilizaste al momento de hacer staking de BTC. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En la ventana emergente de selección de carteras, elige la cartera de tu preferencia que tengas configurada para usar con Core.

### Paso #2: Ir al Panel de Staking

1. Asegúrate de que tu dispositivo Ledger tenga instalado el firmware más reciente y esté conectado a tu computadora utilizando la dirección primaria de Bitcoin (BTC) de Ledger.
2. Navega al [sitio web de Core BTC Staking](https://stake.coredao.org/staking)
3. En el sitio de Staking, pasa el cursor sobre tu cartera conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-1.png)
</p>

### Paso #3: Ir al Registro de BTC Staking

1. En la página del “**My Staking Dashboard**”, selecciona la pestaña de “BTC” para ver los registros correspondientes.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-2.png)
</p>

2. En esta pestaña se listan todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como “**Expired**” bajo la columna “**Redeem Time**”, haz clic en “**Redelegate**” dentro de la columna “**Action**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-3.png)
</p>

### Paso #4: Conectar el Dispositivo Ledger para Redelegación

#### Opción #1: Conectar el Dispositivo Ledger Directamente al Sitio Web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio de Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” en la ventana emergente de selección de carteras. Asegúrate de que tu Ledger esté conectado, desbloqueado y con la aplicación Ledger Core abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-1.png)
</p>

#### Opción #2: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, puedes usar Xverse Wallet para redelegar BTC directamente desde tu dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando Xverse Wallet, haz clic en "**Xverse**" en la sección "**Wallets Supporting Ledger**" desde el modal de wallets mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-2.png)
</p>

### Step #5: Especificar los detalles de la Redelegación de BTC

1. En el modal "**Redelegate BTC**" mostrado, verifica el monto de BTC a redelegar, la Bitcoin Staking Address, y la Reward Address en Core. Para redelegar BTC bloqueados por timelock y ya expirados, los usuarios deben conectarse a la misma dirección de Bitcoin que usaron para iniciar la transacción de BTC staking.
2. Configura el BTC timelock period. Establecer el tiempo de bloqueo determina cuándo tu Bitcoin se desbloqueará y estará disponible nuevamente para redención o redelegación. Ten en cuenta que el tiempo de bloqueo mostrado en la UI del Staking Website está basado en la zona horaria local del usuario, lo cual puede no coincidir con la zona horaria UTC de tu dispositivo Ledger.
3. Especifica la prioridad de red (network priority speed) para tu transacción.
4. Continúa haciendo clic en "**Confirm Delegation**".

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

## FAQs

Have more questions? Check out the [FAQs](../../../../FAQs/ledger-core-faqs.md) section for answers to common issues, troubleshooting, and best practices.

## Conclusion

By following this guide, you’ve successfully redelegated timelock expired staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core’s Self-Custodial BTC Timelocking model and Ledger’s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redelegation for staking BTC means your BTC continues to participate in Core’s decentralized ecosystem without ever leaving your custody.


