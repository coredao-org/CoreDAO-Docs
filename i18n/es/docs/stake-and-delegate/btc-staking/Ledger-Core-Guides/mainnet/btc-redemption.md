---
sidebar_label: Redención de BTC con Timelock Expirado
description: Guía para redimir BTC con timelock expirado desde un dispositivo Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redimir BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redimir tu Bitcoin (BTC) en staking en la blockchain de Core usando un Ledger hardware wallet.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Ledger Core app esté instalada. Debes usar la misma dirección principal de BTC wallet que se utilizó originalmente para hacer staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger, consulta la [guía](./btc-staking.md) oficial de BTC staking con Ledger.
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa únicamente dispositivos Ledger compatibles:** El staking, redención y redelegación de BTC en Core **solo** son compatibles con hardware wallets Ledger soportados que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usa siempre la Ledger Core App:** Debes utilizar la Ledger Core app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no soporta operaciones de redención de BTC en staking y podría impedir una redención exitosa.
- **Staking de BTC únicamente desde la dirección principal de la BTC Wallet:** Actualmente, el staking, redención y redelegación de BTC en Core mediante Ledger **solo** es compatible desde la dirección principal de BTC del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con el staking, redención y redelegación de BTC en la blockchain de Core. Para garantizar la mejor experiencia y compatibilidad, como buena práctica, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de realizar staking, redención o redelegación de BTC en Core usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en Ledger Live las actualizaciones más actuales. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redimir BTC con Timelock Expirado

Después de que el período de timelock de los BTC haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redimir después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web de Core BTC Staking. Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En el modal de wallets que aparece, selecciona la wallet de tu preferencia configurada para usar con Core Mainnet.

### Paso #2: Navegar al Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga el firmware más reciente instalado y esté conectado a tu computadora con la dirección principal de Bitcoin (BTC) de Ledger.
2. Ve al [sitio web de Core Ledger BTC Staking] (https://stake.coredao.org/staking).
3. En la UI del sitio web, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en "**My Staking**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-1.png)
</p>

### Paso #3: Navegar a BTC Staking Records

1. En la página "**My Staking Dashboard**", selecciona la pestaña "**BTC**" de los registros mostrados.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-2.png)
</p>

2. Esta pestaña lista todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como "**Expired**" en la columna "**Redeem Time**", y haz clic en "Redeem" en la columna "**Action**".

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-3.png)
</p>

### Paso #4: Verificar los detalles de BTC Staking y Redención

1. En el modal mostrado "**Redeem BTC**", verifica la BTC staking address, la cantidad de BTC que será redimida y la Receiving Bitcoin address. Para redimir los BTC, debes conectarte a la misma dirección de Bitcoin que se utilizó al iniciar la transacción de Bitcoin staking.

2. Configura tu Receiving Bitcoin Address para recibir los BTC desbloqueados. Esta dirección no necesita ser la misma que la utilizada para iniciar la transacción de staking. Establece la prioridad de velocidad de la transacción y haz clic en "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-4.png)
</p>

### Paso #5: Firmar la transacción de desbloqueo de BTC en el dispositivo Ledger

1. Haz clic en "**Sign By Bitcoin Wallet**" para firmar la transacción de redención de BTC desde tu dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-5.png)
</p>

### Paso #5: Conectar el dispositivo Ledger para la redención de BTC en staking

#### Opción #1: Conectar el dispositivo Ledger directamente al sitio web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio web de Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” del modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

#### Opción #2: Conectar el dispositivo Ledger usando Xverse Wallet

Alternativamente, puedes usar Xverse Wallet para redimir BTC directamente desde tu dispositivo Ledger. Para ello, primero debes agregar tu dispositivo Ledger a tu wallet Xverse como requisito previo. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando la wallet de Xverse, haz clic en "Xverse" en la sección "Wallets Supporting Ledger" del modal de wallet mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

### Paso #6: Revisar y Aprobar la Transacción en el Dispositivo Ledger

Después de conectar tu dispositivo Ledger, asegúrate de que el dispositivo esté desbloqueado y que la Ledger Core app esté abierta. Se te solicitará en la pantalla que apruebes la transacción.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-6.png)
</p>

#### Usando Xverse Wallet

1. Si estás usando Xverse Wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui.png)
</p>

2. Click "**Connect**" on the "**Connect Your Ledger**" modal.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Proceed to confirm and approve the transaction on your Ledger device.

#### Approve BTC Staking Transaction on the Ledger Device

1. Sign the transaction with your Ledger device wallet after reviewing the transaction details.
2. Always use the Ledger Core app, not the Ledger Bitcoin app, to redeem the staked BTC on the Core blockchain. The Bitcoin app lacks support for redemption/redelegation operations. Further, the Ledger Core app supports Clear Signing, which displays all transaction details (such as amount, addresses, and fees) directly on your Ledger device screen. This ensures full transparency and allows you to verify and approve the transaction, thereby safeguarding your assets from unintended or malicious actions. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Ledger-BTC-Redeem.gif)
</p>

3. Once the transaction is approved on your Ledger device, the website will display a "**Transaction Submitted**" notification, confirming that your BTC redemption request has been successfully initiated.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-7.png)
</p>

4. After the Bitcoin block of the redemption transaction is confirmed, verify that the redeemed BTC has returned to your receiving Bitcoin address. (This may take a few minutes). You can also view the transaction details on the BTC Explorer.

## Conclusion

By following this guide, you"ve successfully redeemed staked BTC on the Core blockchain using your Ledger hardware wallet. The combination of Core"s Self-Custodial BTC Staking model and Ledger"s industry-leading security, enhanced by Clear Signing via the Ledger Core app, provides maximum transparency, confidence, and safety. Your successful redemption marks a secure and transparent interaction with Core"s decentralized infrastructure. You now have complete ownership of your reclaimed BTC.


