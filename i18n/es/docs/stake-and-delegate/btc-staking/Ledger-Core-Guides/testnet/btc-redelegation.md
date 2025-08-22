---
sidebar_label: Redelegando BTC con Timelock Expirado
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redelegar BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redelegar Bitcoins (BTC) en staking con timelock expirado hacia un nuevo validador de Core en la testnet de Core, utilizando una hardware wallet Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Ledger Core Testnet app esté instalada. Debes usar la misma dirección principal de BTC wallet que utilizaste originalmente para el staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger en Core Testnet, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

1. **Usa únicamente dispositivos Ledger compatibles:** El staking, redención y redelegación de BTC en Core Testnet solo son compatibles con hardware wallets Ledger soportados que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.

2. **Usa siempre la Ledger Core Testnet App:** Debes utilizar la Ledger Core Testnet app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC en Core Testnet. La aplicación de Bitcoin no admite operaciones de redemption o redelegation de BTC en staking, lo que puede impedir un redeem o redelegate exitoso.

3. **Redelegar BTC solo desde la Dirección Principal de BTC:** Actualmente, el BTC staking, redemption y redelegation en Core Testnet a través de Ledger son compatibles únicamente desde la dirección principal de BTC del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos de Ledger hardware actualmente admiten staking, redemption y redelegation de BTC para ganar recompensas en el Core Testnet. Para la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

:::note
Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de realizar staking, redención o redelegación de BTC en Core Testnet usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Revisa siempre **Ledger Live** para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la Core Testnet usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redelegación.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redelegar BTC con Timelock Expirado

Después de que el período de timelock de los BTC en staking haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redelegar después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Ve al [sitio web de Core Testnet Staking] (https://stake.test2.btcs.network/staking).

2. Conecta tu wallet de Core Testnet al sitio web de Core Testnet Staking. Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC.

3. Haz clic en el botón "Connect" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

4. En el modal de wallets que aparece, selecciona la wallet de tu preferencia configurada para usar con Core.

### Paso #2: Navegar al Testnet Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga el firmware más reciente instalado y esté conectado a tu computadora con la dirección principal de Bitcoin (BTC) de Ledger.

2. En el sitio de Core Testnet Staking, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-1.png)
</p>

### Paso #3: Navegar a BTC Staking Records

1. En la página "**My Staking Dashboard**", selecciona la pestaña "**BTC**" de los registros mostrados.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-3.png)
</p>

2. Esta pestaña lista todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como ‘**Expired**‘debajo de ‘**Redeem Time**‘, y haz clic en ‘**Redelegate**‘ debajo de ‘**Action**‘.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/my-staking-2.png)
</p>

### Paso #4: Conectar el dispositivo Ledger para Redelegación

#### Opción #1: Conectar el dispositivo Ledger directamente al sitio web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio web de Core Testnet Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” del modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core Testnet app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-2.png)
</p>

#### Opción #2: Conectar el dispositivo Ledger usando Xverse Wallet

Como alternativa, puedes usar Xverse Wallet para redelegar BTC directamente desde tu dispositivo Ledger. Para lograr esto, primero se debe agregar el dispositivo Ledger a la wallet de Xverse como requisito previo. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando la wallet de Xverse, haz clic en "Xverse" en la sección "Wallets Supporting Ledger" del modal de wallet mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado, y que la Ledger Core Testnet app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-3.png)
</p>

2. Desbloquea tu dispositivo Ledger y confirma la conexión mediante la extensión de wallet de Xverse.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-8.png)
</p>

### Paso #5: Especificar los detalles de la redelegación de BTC

1. En el modal mostrado de "**Restake BTC**", verifica la **cantidad de BTC a redelegar**, la **Bitcoin Staking Address** y la **Reward Address en Core Testnet**. Para redelegar BTC con timelock expirado, los usuarios **_deben_** conectarse a la misma dirección de Bitcoin que se utilizó al iniciar la transacción de BTC staking.

2. **Configura el BTC timelock period:** Establecer el lock time determina cuándo tu Bitcoin se desbloqueará y volverá a estar disponible para redemption o redelegation. Ten en cuenta que el tiempo de bloqueo en la interfaz de usuario de la Staking Website se basa en la zona horaria local del usuario, la cual puede no coincidir con la zona horaria UTC del dispositivo Ledger.

3. **Establecer la Velocidad de Prioridad de la Red de la Transacción:** Seleccione la velocidad de prioridad de red para su transacción.

4. **Confirmar Delegación:** Proceda haciendo clic en "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-4.png)
</p>

5. **Verificar BTC Staking Address (Opcional):** Utiliza la herramienta de verificación de BTC Staking Address para confirmar que la dirección de BTC staking mostrada coincida con tu dirección esperada antes de continuar.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-5.png)
</p>

6. **Procede a Approve Transaction:** Haz clic en "Approve Transaction" en el sitio web para continuar con la transacción.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-6.png)
</p>

### Paso #6: Revisar y Aprobar la Transacción de Redelegación de BTC

Se le pedirá al usuario que revise y apruebe la transacción desde su dispositivo Ledger.

<p align="center" style={{zoom:"60%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-7.png)
</p>

#### Usando Xverse Wallet para Aprobar la Transacción

1. Si estás usando Xverse Wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-10.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-11.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la transacción de BTC Staking en el dispositivo Ledger

1. Firma la transacción con tu wallet de Ledger después de revisar los detalles de la transacción.

2. Siempre utiliza la Ledger Tesnet Core app, no la Ledger Bitcoin app, para la redelegación de BTC con timelock expirado en la Core Tesnet. La aplicación de Bitcoin no soporta operaciones de redención ni redelegación. Además, la Ledger Core Tesnet app soporta Clear Signing, que muestra todos los detalles de la transacción (como monto, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza transparencia total y permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

3. Una vez que la transacción sea aprobada en tu dispositivo Ledger, el sitio web de staking mostrará una notificación "Transaction Submitted", confirmando que tu solicitud de redelegación de BTC se ha iniciado exitosamente.

<p align="center">
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/btc-redelegation.gif)
</p>

3. Después de la aprobación de la transacción, los usuarios también pueden ver los detalles de la transacción en el BTC Explorer.

<p align="center" style={{zoom:"40%"}}>
![img](../../../../../static/img/ledger-core/testnet/btc-redelegate/UI-12.png)
</p>

## Conclusión

Siguiendo esta guía, has redelegado exitosamente BTC en staking con timelock expirado en la blockchain de Core Testnet usando tu Ledger hardware wallet. La combinación del modelo Self-Custodial BTC Timelocking de Core y la seguridad líder de la industria de Ledger, potenciada por Clear Signing a través de la Ledger Core Testnet app, proporciona máxima transparencia, confianza y seguridad. Tu redelegación exitosa para staking de BTC significa que tus BTC continúan participando en el ecosistema descentralizado de Core sin salir nunca de tu custodia.
