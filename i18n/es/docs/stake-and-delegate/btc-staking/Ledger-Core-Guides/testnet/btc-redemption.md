---
sidebar_label: Redención de BTC Apostados
description: Guía para redimir BTC con timelock expirado desde un dispositivo Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redimir BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redimir tu Bitcoin (BTC) en staking en la blockchain de Core Testnet usando un Ledger hardware wallet.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Core Testnet app esté instalada. Debes usar la misma dirección principal de BTC wallet que se utilizó originalmente para hacer staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger en Core Testnet, consulta la guía oficial [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

1. Usa únicamente dispositivos Ledger compatibles: El staking, redención y redelegación de BTC en Core Testnet solo son compatibles con hardware wallets Ledger soportados que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.

2. Usa siempre la Ledger CoreDAO App: Debes utilizar la Ledger Core Testnet app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC en Core Testnet. La aplicación de Bitcoin no soporta operaciones de redención de BTC en staking y podría impedir una redención exitosa.

3. Staking de BTC solo desde la Dirección Primaria de BTC:\*\* Actualmente, el staking, la redención y la redelegación de BTC en Core Testnet a través de Ledger están soportados solo desde la dirección primaria de BTC del dispositivo Ledger. Direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos Ledger hardware son actualmente compatibles con el staking, redención y redelegación de BTC en la Core Testnet. Para la mejor experiencia y compatibilidad, como buena práctica, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente soportado o disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

:::note
Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core Testnet usando tu dispositivo Ledger, como buena práctica, actualiza a la versión más reciente o a una soportada para garantizar compatibilidad y seguridad. Revisa siempre Ledger Live para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## ## Prerequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente o soportado.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la Core Testnet usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redimir BTC con Timelock Expirado

Después de que el período de timelock de los BTC haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redimir después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Ve al [sitio web de Core Testnet Staking] (https://stake.test2.btcs.network/staking).

2. Conecta tu wallet de Core Testnet al sitio web de Core Testnet Staking. _Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC_.

3. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![conenct-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Testnet.

### Paso #2: Navegar al Testnet Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga instalado el firmware más reciente o soportado y esté conectado a tu computadora con la dirección principal de Bitcoin (BTC) de Ledger.

2. En el sitio de Core Testnet Staking, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![my-staking](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-1.png)
</p>

### Paso #3: Navegar a los Registros de BTC Staking en Testnet

1. En la página "**My Staking Dashboard**", selecciona la pestaña "**BTC**" de los registros mostrados.

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-3.png)
</p>

2. Esta pestaña lista todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como ‘**Expired**’ bajo la columna ‘**Redeem Time**’, y procede a hacer clic en ‘**Redeem**’ en la columna ‘**Action**’.

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-1.png)
</p>

### Paso #4: Verificar los detalles de BTC Staking y Redención

1. En la ventana emergente "**Redeem BTC**", verifica la **BTC staking address**, la **BTC Amount** que será redimida y la **Receiving Bitcoin address**. Para redimir los BTC, **_debes_** conectarte a la misma dirección de Bitcoin que se utilizó al iniciar la transacción de Bitcoin staking.

2. Configura tu **Receiving Bitcoin Address** para recibir los BTC desbloqueados. Esta dirección no necesita ser la misma que la utilizada para iniciar la transacción de staking. Establece la prioridad de velocidad de la transacción y haz clic en "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![verify-tx-details](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-12.png)
</p>

### Paso #5: Firmar la transacción de desbloqueo de BTC en el dispositivo Ledger

1. Haz clic en "**Sign By Bitcoin Wallet**" para firmar la transacción de redención de BTC desde tu dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![sign-tx](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-13.png)
</p>

### Paso #5: Conectar el dispositivo Ledger para la redención de BTC en staking

#### Opción #1: Conectar el dispositivo Ledger directamente al sitio web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio web de Core Testnet Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” del modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core Testnet app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![conenct-ledger-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-2.png)
</p>

#### Opción #2: Conectar el dispositivo Ledger usando Xverse Wallet

Alternativamente, puedes usar Xverse Wallet para redimir BTC directamente desde tu dispositivo Ledger. Para lograr esto, primero se debe agregar el dispositivo Ledger a la wallet de Xverse como requisito previo. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando la wallet Xverse, haz clic en “**Xverse**” dentro de la sección “**Wallets Supporting Ledger**” del modal mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado, y que la Ledger Core Testnet app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-3.png)
</p>

2. Desbloquea tu dispositivo Ledger y confirma la conexión mediante la extensión de wallet de Xverse.

<p align="center" style={{zoom:"60%"}}>
![connect-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-8.png)
</p>

### Paso #6: Revisar y Aprobar la Transacción en el Dispositivo Ledger

1. Después de conectar tu dispositivo Ledger, asegúrate de que el dispositivo esté desbloqueado y que la Ledger Core Testnet app esté abierta. Se te solicitará en la pantalla que apruebes la transacción.

<p align="center" style={{zoom:"60%"}}>
![prompt-tx-approval](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-7.png)
</p>

#### Usando Xverse Wallet

1. Si utilizas una wallet Xverse, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-10.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-11.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar Transacción de BTC Staking en el Dispositivo Ledger

1. Firma la transacción con tu wallet de Ledger después de revisar los detalles de la transacción.

2. Siempre utiliza la Ledger Core Testnet app, no la Ledger Bitcoin app, para redimir los BTC en staking en la Core Testnet. La app de Bitcoin no soporta operaciones de redención/redelegación. Además, la Ledger Core Tesnet app soporta Clear Signing, que muestra todos los detalles de la transacción (como monto, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza transparencia total y permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![sign-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-redeem/btc-redeem-testnet.gif)
</p>

4. Una vez que la transacción sea aprobada en tu dispositivo Ledger, el sitio web mostrará una notificación de "Transaction Submitted", confirmando que tu solicitud de redención de BTC ha sido iniciada exitosamente.

<p align="center"  style={{zoom:"40%"}}>
![tx-submitted](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-14.png)
</p>

5. Después de que se confirme el bloque de Bitcoin de la transacción de redención, verifica que los BTC redimidos hayan regresado a tu Receiving Bitcoin Address. (Esto puede tardar unos minutos). También puedes ver los detalles de la transacción en el BTC Explorer.

## Conclusión

Siguiendo esta guía, has redimido exitosamente BTC en staking en el Core Testnet usando tu Ledger hardware wallet. La combinación del modelo de Self-Custodial BTC Staking de Core y la seguridad líder en la industria de Ledger, mejorada por Clear Signing a través de la aplicación Ledger Core Testnet, proporciona la máxima transparencia, confianza y seguridad. Tu redención exitosa marca una interacción segura y transparente con la infraestructura descentralizada de Core. Ahora tienes propiedad total de tus BTC recuperados.
