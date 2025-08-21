---
sidebar_label: Redelegar BTC en Staking
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Usando Ledger Hardware Wallets para Redelegar BTC en Staking en Core

Esta guía te llevará paso a paso por el proceso de redelegar Bitcoins (BTC) en staking con timelock expirado hacia un nuevo validador de Core, utilizando una hardware wallet Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la Ledger Core app esté instalada. Debes usar la misma dirección principal de BTC wallet que utilizaste originalmente para el staking de BTC. Para aprender cómo hacer staking de BTC usando Ledger, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa únicamente dispositivos Ledger compatibles:** El staking, redención y redelegación de BTC en Core **solo** son compatibles con hardware wallets Ledger soportados que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usa siempre la Ledger Core App:** Debes utilizar la Ledger Core app (no la Ledger Bitcoin app) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no soporta operaciones de redención de BTC en staking y podría impedir una redención exitosa.
- **Staking de BTC únicamente desde la dirección principal de la BTC Wallet:** Actualmente, el staking, redención y redelegación de BTC en Core mediante Ledger **solo** es compatible desde la dirección principal de BTC del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Ledger Hardware Wallets Compatibles

Los siguientes Ledger hardware wallets son actualmente compatibles con el staking, redención y redelegación de BTC en la blockchain de Core. Para asegurar la mejor experiencia y compatibilidad, como buena práctica, verifica que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

> ⚠️ **Nota:** Las versiones de firmware listadas arriba reflejan la última versión disponible al momento de redactar y están sujetas a cambios. Antes de realizar staking, redención o redelegación de BTC en Core usando tu dispositivo Ledger, actualiza a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en Ledger Live las actualizaciones más actuales. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado correctamente en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core usando tu dispositivo Ledger.
- Si usas Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y añadido a ella.
- Que el período de timelock de tu BTC bloqueado haya expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que el timelock designado haya expirado.

## Pasos para Redelegar BTC con Timelock Expirado

Después de que el período de timelock de los BTC en staking haya expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redelegar después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web de Staking. Recuerda usar la misma wallet que utilizaste en el momento de hacer staking de BTC. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En el modal de wallets que aparece, selecciona la wallet de tu preferencia configurada para usar con Core.

### Paso #2: Navegar al Staking Dashboard

1. Asegúrate de que tu dispositivo Ledger tenga el firmware más reciente instalado y esté conectado a tu computadora con la dirección principal de Bitcoin (BTC) de Ledger.
2. Ve al [sitio web de Core BTC Staking] (https://stake.coredao.org/staking)
3. En el sitio de Staking, coloca el cursor sobre tu wallet conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-1.png)
</p>

### Paso #3: Navegar a BTC Staking Records

1. En la página “**My Staking Dashboard**”, selecciona la pestaña “BTC” de los registros mostrados.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-2.png)
</p>

2. Esta pestaña lista todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como “**Expired**” debajo de “**Redeem Time**”, y haz clic en “**Redelegate**” debajo de “**Action**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-3.png)
</p>

### Paso #4: Conectar el dispositivo Ledger para Redelegación

#### Opción #1: Conectar el dispositivo Ledger directamente al sitio web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio web de Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” del modal de wallets mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-1.png)
</p>

#### Opción #2: Conectar el dispositivo Ledger usando Xverse Wallet

Como alternativa, puedes usar Xverse Wallet para redelegar BTC directamente desde tu dispositivo Ledger. Para ello, primero debes agregar tu dispositivo Ledger a tu wallet Xverse como requisito previo. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando la wallet Xverse, haz clic en “**Xverse**” dentro de la sección “**Wallets Supporting Ledger**” del modal mostrado. Asegúrate de que tu dispositivo Ledger esté conectado, desbloqueado, y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-2.png)
</p>

### Paso #5: Especificar los detalles de la redelegación de BTC

1. En el modal mostrado de "**Redelegate BTC**", verifica la cantidad de BTC a redelegar, la Bitcoin Staking Address y la Reward Address en Core. Para redelegar BTC con timelock expirado, los usuarios deben conectarse a la misma dirección de Bitcoin que se utilizó al iniciar la transacción de BTC staking.
2. Configura el periodo de BTC timelock. Establecer el tiempo de bloqueo determina cuándo tu Bitcoin estará desbloqueado y disponible nuevamente para redención o redelegación. Ten en cuenta que el tiempo de bloqueo en la interfaz de usuario de la Staking Website se basa en la zona horaria local del usuario, la cual puede no coincidir con la zona horaria UTC del dispositivo Ledger.
3. Especifica la velocidad de prioridad de red para tu transacción.
4. Continúa haciendo clic en "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-4.png)
</p>

5. **Verificar BTC Staking Address (Opcional):** Utiliza la herramienta de verificación de BTC Staking Address para confirmar que la dirección de BTC staking mostrada coincida con tu dirección esperada antes de continuar.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-5.png)
</p>

6. **Procede a Approve Transaction:** Haz clic en "**Approve Transaction**" en el sitio web para continuar con la transacción.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-6.png)
</p>

### Paso #6: Revisar y Aprobar la Transacción de Redelegación de BTC

Se le pedirá al usuario que revise y apruebe la transacción desde su dispositivo Ledger.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-7.png)
</p>

#### Usando Xverse Wallet para Aprobar la Transacción

1. Si utilizas una wallet Xverse, revisa la transacción. Verifica los detalles y haz clic en "Confirm" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/Xverse-wallet-ui.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/xverse-wallet-ui-2.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar Transacción de BTC Staking en el Dispositivo Ledger

1. Firma la transacción con tu wallet de Ledger después de revisar los detalles de la transacción.
2. Siempre utiliza la Ledger Core app, no la Ledger Bitcoin app, para la redelegación de BTC con timelock expirado en la blockchain de Core. La aplicación de Bitcoin no soporta operaciones de redención ni redelegación. Además, la Ledger Core app soporta Clear Signing, que muestra todos los detalles de la transacción (como monto, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza transparencia total y permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. Para más detalles sobre Clear Signing, consulta aquí.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

3. Una vez que la transacción sea aprobada en tu dispositivo Ledger, el sitio web de staking mostrará una notificación "**Transaction Submitted**", confirmando que tu solicitud de redelegación de BTC se ha iniciado exitosamente.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-8.png)
</p>

4. Después de la aprobación de la transacción, los usuarios también pueden ver los detalles de la transacción en el BTC Explorer.

## Conclusión

Siguiendo esta guía, has redelegado exitosamente BTC en staking con timelock expirado en la blockchain de Core usando tu Ledger hardware wallet. La combinación del modelo Self-Custodial BTC Timelocking de Core y la seguridad líder de la industria de Ledger, potenciada por Clear Signing a través de la Ledger Core app, proporciona máxima transparencia, confianza y seguridad. Tu redelegación exitosa para staking de BTC significa que tus BTC continúan participando en el ecosistema descentralizado de Core sin salir nunca de tu custodia.


