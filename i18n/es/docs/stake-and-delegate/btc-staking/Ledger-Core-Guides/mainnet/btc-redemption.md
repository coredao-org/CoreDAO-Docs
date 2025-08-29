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

Después de que el período de timelock de los BTC haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. You must use the same Ledger wallet Bitcoin address used for staking BTC to redeem your BTC after the timelock expiry.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web de Core BTC Staking. Remember to use the same Bitoin address and wallet that you had used at the time of staking BTC. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En el modal de wallets que aparece, selecciona la wallet de tu preferencia configurada para usar con Core Mainnet.

### Paso #2: Navegar al Staking Dashboard

1. Ensure your Ledger device is installed with the latest firmware and connected to your computer with Ledger's primary Bitcoin (BTC) address.
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

2. Configura tu Receiving Bitcoin Address para recibir los BTC desbloqueados. This **must** be the same as the address that initiated the Bitcoin staking transaction and **must** be the Native Segwit address type.

3. Set your transaction speed priority, and click "**Create Transaction**".

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

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la transacción de BTC Staking en el dispositivo Ledger

1. Firma la transacción con tu wallet de Ledger después de revisar los detalles de la transacción.
2. Siempre utiliza la Ledger Core app, no la Ledger Bitcoin app, para redimir los BTC en staking en la blockchain de Core. La app de Bitcoin no soporta operaciones de redención/redelegación. Además, la Ledger Core app soporta Clear Signing, que muestra todos los detalles de la transacción (como monto, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza transparencia total y permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Ledger-BTC-Redeem.gif)
</p>

3. Una vez que la transacción sea aprobada en tu dispositivo Ledger, el sitio web mostrará una notificación de "**Transaction Submitted**", confirmando que tu solicitud de redención de BTC ha sido iniciada exitosamente.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-7.png)
</p>

4. Después de que se confirme el bloque de Bitcoin de la transacción de redención, verifica que los BTC redimidos hayan regresado a tu Receiving Bitcoin Address. (Esto puede tardar unos minutos). También puedes ver los detalles de la transacción en el BTC Explorer.

## Conclusión

Siguiendo esta guía, has redimido exitosamente los BTC en staking en la blockchain de Core utilizando tu Ledger hardware wallet. La combinación del modelo de BTC Staking Self-Custodial de Core y la seguridad líder en la industria de Ledger, potenciada por Clear Signing a través de la Ledger Core app, proporciona máxima transparencia, confianza y seguridad. Tu redención exitosa marca una interacción segura y transparente con la infraestructura descentralizada de Core. Ahora tienes propiedad total de tus BTC recuperados.


