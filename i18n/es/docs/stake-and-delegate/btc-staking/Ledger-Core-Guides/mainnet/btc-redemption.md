---
sidebar_label: Redimir BTC con Timelock Expirado
description: Guía para redimir BTC con timelock expirado desde un dispositivo Ledger
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Redimir BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redimir tu Bitcoin (BTC) en staking en la blockchain de Core utilizando un dispositivo Ledger.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y que la aplicación Core esté instalada. Debes usar la misma dirección principal de BTC que se utilizó originalmente para hacer staking de BTC. Para aprender cómo hacer staking de BTC con Ledger, consulta la [guía](./btc-staking.md) oficial para staking de BTC con dispositivo Ledger.
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

- **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core son compatibles únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usar siempre la aplicación Ledger Core:** Debes utilizar la aplicación Ledger Core (no la aplicación Ledger Bitcoin) tanto para hacer staking, redimir o redelegar BTC. La aplicación Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.
- **Staking de BTC solo desde la dirección principal del wallet BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core mediante Ledger **solo** son compatibles desde la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles.

## Carteras Hardware Ledger Compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con las operaciones de staking, redención y redelegación de BTC en la blockchain de Core. Para garantizar la mejor experiencia y compatibilidad, como buena práctica asegúrate de que tu dispositivo ejecute la versión más reciente del firmware disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan la versión más reciente disponible al momento de escribir este documento y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core utilizando tu dispositivo Ledger, actualízalo a la versión más reciente para garantizar compatibilidad y seguridad. Revisa siempre Ledger Live para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y correctamente configurado en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core utilizando tu dispositivo Ledger.
- Si estás usando Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y agregado a ella.
- El período de timelock de tu BTC bloqueado ha expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que haya expirado el timelock designado.

## Pasos para Redimir BTC con Timelock Expirado

Una vez que el período de timelock del BTC ha expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes usar la misma dirección de wallet de Ledger que utilizaste para hacer staking de BTC al momento de redimir después de la expiración del timelock.

### Paso #1: Conectar Core Wallet al Sitio de Staking

1. Conecta tu Core Mainnet wallet al sitio web de Core BTC Staking. Recuerda usar la misma dirección de Bitcoin y el mismo wallet que utilizaste al momento de hacer staking de BTC. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Mainnet.

### Paso #2: Ir al Panel de Staking

1. Asegúrate de que tu dispositivo Ledger tenga instalado el firmware más reciente y esté conectado a tu computadora utilizando la dirección primaria de Bitcoin (BTC) de Ledger.
2. Ve al [Navega al sitio web de Core Ledger BTC Staking] (https://stake.coredao.org/staking).
3. En la interfaz del sitio, pasa el cursor sobre tu cartera conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-1.png)
</p>

### Paso #3: Ir al Registro de BTC Staking

1. En la página del “**My Staking Dashboard**”, selecciona la pestaña de “**BTC**” para ver los registros correspondientes.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-2.png)
</p>

2. En esta pestaña se listan todos los registros de staking de BTC y los validadores a los que previamente delegaste BTC. Busca cualquier registro marcado como “**Expired**” bajo la columna “**Redeem Time**”, haz clic en “Redeem” dentro de la columna “**Action**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-3.png)
</p>

### Paso #4: Verificar detalles de Staking y Redención de BTC

1. En el modal mostrado de "**Redeem BTC**", verifica la dirección de BTC staking, el monto de BTC que será redimido y la Receiving Bitcoin address. Para redimir el BTC, debes conectarte a la misma dirección de Bitcoin que utilizaste para iniciar la transacción de staking.

2. Configura tu dirección de recepción de Bitcoin para recibir el BTC desbloqueado. Esta **debe** ser la misma dirección que inició la transacción de staking de Bitcoin y debe ser del tipo Native Segwit. Refer to the [FAQ section](https://docs.coredao.org/docs/FAQs/ledger-core-faqs#2-how-can-i-find-my-original-staking-address), to know how to find the original BTC addreess that initiated the staking transaction.

3. Establece la prioridad de velocidad de la transacción y haz clic en "**Create Transaction**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-4.png)
</p>

### Paso #5: Firmar la transacción de desbloqueo de BTC en el dispositivo Ledger

1. Haz clic en "**Sign By Bitcoin Wallet**" para firmar la transacción de redención de BTC desde tu dispositivo Ledger.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-5.png)
</p>

### Paso #5: Conectar el dispositivo Ledger para la redención del BTC en staking

#### Opción #1: Conectar el Dispositivo Ledger Directamente al Sitio Web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio de Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” en la ventana emergente de selección de carteras. Asegúrate de que tu Ledger esté conectado, desbloqueado y con la aplicación Ledger Core abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

#### Opción #2: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, puedes usar Xverse Wallet para redimir BTC directamente desde tu dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando Xverse Wallet, haz clic en "Xverse" en la sección "Wallets Supporting Ledger" desde el modal de wallets mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/wallet-connect-1.png)
</p>

### Paso#6: Revisar y aprobar la transacción en el dispositivo Ledger

Después de conectar tu dispositivo Ledger, asegúrate de que esté desbloqueado y que la aplicación Ledger Core esté abierta. En la pantalla se te pedirá que apruebes la transacción.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-6.png)
</p>

#### Usando Xverse Wallet

1. Si usas una Xverse wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Xverse-wallet-ui-2.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la Transacción de Staking de BTC en el Dispositivo Ledger

1. Firma la transacción con el wallet de tu dispositivo Ledger después de revisar los detalles de la transacción.
2. Siempre usa la aplicación Ledger Core, no la aplicación Ledger Bitcoin, para redimir el BTC en staking en la blockchain de Core. La aplicación Bitcoin no admite operaciones de redención/redelegación. Además, la Ledger Core app admite Clear Signing, lo que muestra todos los detalles de la transacción (como montos, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza total transparencia y te permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. For more details on Clear Signing, refer [here](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/Ledger-BTC-Redeem.gif)
</p>

3. Una vez que la transacción haya sido aprobada en tu dispositivo Ledger, el sitio web mostrará una notificación "**Transaction Submitted**", confirmando que tu solicitud de redención de BTC se ha iniciado exitosamente.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redemption/UI-7.png)
</p>

4. Después de que se confirme el bloque de Bitcoin de la transacción de redención, verifica que el BTC redimido haya regresado a tu Receiving Bitcoin Address. (Esto puede tardar algunos minutos). También puedes ver los detalles de la transacción en el BTC Explorer.

## Preguntas Frecuentes

¿Tienes más preguntas? Consulta la sección [FAQs](../../../../FAQs/ledger-core-faqs.md) para encontrar respuestas a problemas comunes, guías de solución y mejores prácticas.

## Conclusión

Siguiendo esta guía, has redimido con éxito tu BTC en staking en la blockchain de Core usando tu hardware wallet Ledger. La combinación del modelo Self-Custodial BTC Staking de Core y la seguridad líder en la industria de Ledger, mejorada con Clear Signing mediante la Ledger Core app, proporciona la máxima transparencia, confianza y seguridad. Tu redención exitosa marca una interacción segura y transparente con la infraestructura descentralizada de Core. Ahora tienes propiedad completa de tu BTC recuperado.


