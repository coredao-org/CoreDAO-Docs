---
sidebar_label: Redimir BTC en Staking
description: Guía para redimir BTC con timelock expirado desde un dispositivo Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Redimir BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redimir tu Bitcoin (BTC) en staking en la Core Testnet utilizando un dispositivo Ledger.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la aplicación Core Testnet esté instalada. Debes usar la misma dirección principal de BTC que se utilizó originalmente para hacer staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger en la Core Testnet, consulta la guía oficial [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

1. Usa solo dispositivos Ledger compatibles: El staking, la redención y la redelegación de BTC en Core Testnet son compatibles únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.

2. Siempre usa la aplicación CoreDAO en Ledger: Debes usar la Ledger Core Testnet app (no la Ledger Bitcoin app) tanto para staking como para redimir o redelegar BTC en la Core Testnet. La aplicación Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.

3. Staking de BTC solo desde la dirección principal del wallet BTC: Actualmente, el staking, la redención y la redelegación de BTC en la Core Testnet mediante Ledger solo son compatibles desde la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Dispositivos Ledger Compatibles

Los siguientes dispositivos Ledger hardware son actualmente compatibles con el staking, la redención y la redelegación de BTC en la Core Testnet. Para una mejor experiencia y compatibilidad, como mejor práctica, asegúrate de que tu dispositivo esté ejecutando la versión más reciente o soportada del firmware.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

:::note
Las versiones de firmware listadas arriba reflejan la versión más reciente disponible al momento de escribir este documento y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core Testnet usando tu dispositivo Ledger, como mejor práctica, actualiza a la versión más reciente o soportada para garantizar compatibilidad y seguridad. Revisa siempre Ledger Live para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## ## Prerequisitos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente/comptatible.
- Ledger Live instalado y correctamente configurado en tu computadora.
- Haber realizado staking de BTC en Core Testnet previamente usando tu dispositivo Ledger.
- Si estás usando Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y agregado a ella.
- El período de timelock de tu BTC bloqueado ha expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que haya expirado el timelock designado.

## Pasos para Redimir BTC con Timelock Expirado

Una vez que el período de timelock del BTC ha expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redimir después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al Sitio de Staking

1. Ve al [sitio web de Core Testnet Staking](https://stake.test2.btcs.network/staking).

2. Conecta tu Core Testnet wallet al sitio de Staking de Core Testnet. _Recuerda usar la misma wallet que utilizaste al hacer el staking de BTC_.

3. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![conenct-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Testnet.

### Paso #2: Navegar al Testnet Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga el firmware más reciente o soportado e esté conectado a tu computadora con la dirección Bitcoin (BTC) primaria de Ledger.

2. En el sitio de Staking de Core Testnet, pasa el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![my-staking](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-1.png)
</p>

### Paso #3: Navegar a los Registros de BTC en Staking en Testnet

1. En la página del “**My Staking Dashboard**”, selecciona la pestaña de “**BTC**” para ver los registros correspondientes.

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-3.png)
</p>

2. En esta pestaña se listan todos los registros de staking de BTC y los validadores a los que previamente delegaste BTC. Busca cualquier registro marcado como ‘**Expired**’ bajo ‘**Redeem Time**,’ y haz clic en ‘**Redeem**’ debajo de ‘**Action**.’

<p align="center" style={{zoom:"80%"}}>
![my-staking-records](../../../../../static/img/ledger-core/testnet/btc-redeem/my-staking-1.png)
</p>

### Paso #4: Verificar detalles de Staking y Redención de BTC

1. En el modal “**Redeem BTC**” que aparece, revisa cuidadosamente la **dirección de staking de BTC**, el **monto de BTC** que será redimido y la **dirección receptora de Bitcoin**. Para redimir el BTC, debes conectarte con la **_misma_** dirección de Bitcoin que inició la transacción de staking.

2. Configura tu **Dirección de recepción de Bitcoin**" para recibir el BTC desbloqueado. Esta debe ser la **misma** dirección que inició la transacción de staking de Bitcoin y **debe** ser del tipo Native Segwit.

3. Establece la prioridad de velocidad de la transacción y haz clic en "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![verify-tx-details](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-12.png)
</p>

### Paso #5: Firmar la transacción de desbloqueo de BTC en el dispositivo Ledger

1. Haz clic en "**Sign By Bitcoin Wallet**" para firmar la transacción de redención de BTC desde tu dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![sign-tx](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-13.png)
</p>

### Paso #5: Conectar el dispositivo Ledger para la redención del BTC en staking

#### Opción #1: Conectar el Dispositivo Ledger Directamente al Sitio Web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio de Core Testnet Staking, haz clic en "**Ledger**" bajo la sección "**Hardware Wallets**" del modal de wallet mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado, y que la app Ledger Core Testnet esté abierta en el dispositivo.

<p align="center" style={{zoom:"60%"}}>
![conenct-ledger-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-2.png)
</p>

#### Opción #2: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, puedes usar Xverse Wallet para redimir BTC directamente desde tu dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando Xverse Wallet, haz clic en "**Xverse**" en la sección "**Wallets Supporting Ledger**" desde el modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la app Ledger Core Testnet esté abierta en el dispositivo.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-3.png)
</p>

2. Desbloquea tu dispositivo Ledger y confirma la conexión a través de la extensión de Xverse Wallet.

<p align="center" style={{zoom:"60%"}}>
![connect-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-8.png)
</p>

### Paso#6: Revisar y aprobar la transacción en el dispositivo Ledger

1. Después de conectar tu dispositivo Ledger, asegúrate de que esté desbloqueado y que la aplicación Ledger Core Testnet esté abierta. En la pantalla se te pedirá que apruebes la transacción.

<p align="center" style={{zoom:"60%"}}>
![prompt-tx-approval](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-7.png)
</p>

#### Usando Xverse Wallet

1. Si usas un Xverse Wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-10.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![approve-tx-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-11.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la Transacción de Staking de BTC en el Dispositivo Ledger

1. Firma la transacción con el wallet de tu dispositivo Ledger después de revisar los detalles de la transacción.

2. Usa siempre la aplicación Ledger Core Testnet, no la aplicación Ledger Bitcoin, para redimir el BTC en staking en el Core Testnet. La aplicación Bitcoin no admite operaciones de redención/redelegación. Además, la aplicación Ledger Core Testnet admite Clear Signing, que muestra todos los detalles de la transacción (como monto, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza total transparencia y te permite verificar y aprobar la transacción, protegiendo así tus activos de acciones no deseadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![sign-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-redeem/btc-redeem-testnet.gif)
</p>

4. Una vez que la transacción sea aprobada en tu dispositivo Ledger, el sitio web mostrará una notificación de "Transacción Enviada", confirmando que tu solicitud de redención de BTC se ha iniciado correctamente.

<p align="center"  style={{zoom:"40%"}}>
![tx-submitted](../../../../../static/img/ledger-core/testnet/btc-redeem/UI-14.png)
</p>

5. Después de que el bloque de Bitcoin con la transacción de redención sea confirmado, verifica que el BTC redimido haya regresado a tu dirección de recepción de Bitcoin. (Esto puede tardar unos minutos). También puedes consultar los detalles de la transacción en el BTC Explorer.

## Preguntas Frecuentes

¿Tienes más preguntas? Consulta la sección de [FAQs](../../../../FAQs/ledger-core-faqs.md) para obtener respuestas a problemas comunes, soluciones y mejores prácticas.

## Conclusión

Al seguir esta guía, has redimido exitosamente BTC en staking en el Core Testnet utilizando tu billetera hardware Ledger. La combinación del modelo de BTC Staking Auto-Custodiado de Core y la seguridad líder en la industria de Ledger, mejorada con Clear Signing a través de la aplicación Ledger Core Testnet, ofrece la máxima transparencia, confianza y seguridad. Tu redención exitosa marca una interacción segura y transparente con la infraestructura descentralizada de Core. Ahora tienes propiedad completa de tu BTC recuperado.
