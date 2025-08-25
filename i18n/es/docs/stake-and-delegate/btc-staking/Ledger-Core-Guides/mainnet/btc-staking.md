---
sidebar_label: Staking BTC con Core
description: Guía de usuario para hacer staking de BTC desde un dispositivo Ledger en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Staking de BTC con Core

---

Esta guía de usuario te guía a través del proceso de hacer staking de BTC para ganar recompensas en CORE en la blockchain de Core usando un Ledger hardware wallet. Siguiendo los pasos a continuación, podrás participar en el Self-Custodial Bitcoin Staking de Core mientras mantienes el control total de tus activos.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

 - **Usa solo dispositivos Ledger compatibles:** El staking, redención y redelegación de Bitcoin en Core solo es compatible con ciertos Ledger hardware wallets con el firmware más reciente. Actualiza siempre tu dispositivo a través de Ledger Live antes de continuar.
 - **Usa siempre la Core App de Ledger:** Debes usar la Core app de Ledger, no la aplicación estándar de Bitcoin, cuando hagas staking o redimas BTC en Core. Hacer staking de BTC con la aplicación estándar de Bitcoin puede provocar la imposibilidad de redimir tu BTC, lo que resultaría en la pérdida permanente de tus activos.
 - **Haz staking de BTC solo desde la dirección principal de la BTC Wallet:** Actualmente, el staking de BTC es compatible únicamente desde la dirección principal de la BTC Wallet en tu dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con el staking, redención y redelegación de BTC en la blockchain de Core. Para la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando el firmware más reciente disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de escribir este documento y están sujetas a cambios. Antes de realizar el timelock, el redeem o la redelegation de Bitcoin en Core usando tu dispositivo Ledger, actualízalo a la última versión para garantizar compatibilidad y seguridad. Revisa siempre **Ledger Live** para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

 - Un dispositivo Ledger con el firmware más reciente.
 - Ledger Live instalado y configurado en tu computadora.
 - Si usas Xverse Wallet, tu dispositivo Ledger debe estar agregado a la Xverse Wallet.
 - Suficiente BTC (mínimo 0.01 BTC) disponible en tu dispositivo Ledger para hacer staking.

## Configuración del Dispositivo Ledger

Antes de hacer staking de BTC en Core, asegúrate de que tu hardware wallet Ledger esté completamente actualizado y lista para usarse con la blockchain de Core.

### Paso 1: Actualizar tu Dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de Ledger Manager en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo.

### Paso 2: Instalación de la aplicación Ledger Core

Sigue los pasos a continuación para instalar la aplicación Core en tu dispositivo.

1. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live y navega a "**My Ledger**".
2. En el "**App Catalog**", busca "**Core**".
3. Instala la aplicación "**Core**". Usa únicamente la aplicación Core para staking, redeem y redelegation de Bitcoin bloqueado en Core Mainnet.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/install-coredao-app.png)
</p>

:::info
Usa siempre la aplicación Core para hacer staking, redeeming o redelegating de Bitcoin en Core Mainnet. La aplicación estándar de Bitcoin no soporta operaciones de redeem en Core y puede ocasionar la pérdida permanente de acceso a tu BTC bloqueado en timelock. A diferencia de la aplicación Ledger Bitcoin, que utiliza blind signing en la cual los detalles de la transacción están ocultos para el usuario, la aplicación Ledger Core habilita Clear Signing. Clear Signing muestra toda la información de la transacción (por ejemplo: monto, validador, comisiones, direcciones) directamente en la pantalla de tu dispositivo Ledger, dándote completa visibilidad. Esto te permite verificar con confianza lo que estás firmando y te protege de transacciones no intencionadas o maliciosas. Para más detalles sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

## Staking BTC en Core con Ledger

Con tu dispositivo Ledger conectado y la aplicación Core instalada, puedes hacer staking de BTC directamente desde tu hardware wallet de manera segura.

> ⚠️**Nota:** Se requiere un mínimo de 0.01 BTC para participar en el staking de Bitcoin en Core Mainnet, además de BTC suficiente para cubrir las comisiones de transacción. Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta aquí.

1. En tu dispositivo Ledger, abre la **aplicación Core** antes de continuar.

<p align="center">
![ready-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/coredao-app-ready.png)
</p>

2. Ve al [sitio web de Core BTC Staking] (https://stake.coredao.org/staking).

### Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web. Esta será usada como dirección de recompensas en CORE.
2. Haz clic en el botón "**Connect**" en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

3. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Mainnet.

### Conectar Ledger Hardware Wallet al sitio web

Antes de conectar tu dispositivo Ledger al sitio web, es importante asegurarte de que estás usando tu cuenta principal de Bitcoin (BTC) para hacer staking de BTC en Core. Si aún no la has configurado, consulta la [guía oficial de Ledger](https://support.ledger.com/article/115005195945-zd) para establecer una cuenta de Bitcoin (BTC) en tu dispositivo.

#### Opción de Staking Uno: Conectar Ledger Wallet Directamente

1. En el [sitio web de Core Bitcoin Staking](https://stake.coredao.org/staking), haz clic en "**Connect**" junto a BTC Stake Amount. Recuerda, solo la cuenta primaria está soportada para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a tu Ledger Live.

<p align="center" >
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. En la ventana modal de wallet que se muestra, bajo "**Hardware Wallet**", haz clic en "**Ledger**". Asegúrate de que tu Ledger esté conectado, desbloqueado y con la aplicación Core abierta.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-1.png)
</p>

#### Opción de Staking Dos: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, los usuarios también pueden usar Xverse para hacer staking de Bitcoin desde su dispositivo Ledger. Para lograr esto, primero se debe agregar el dispositivo Ledger a la wallet de Xverse como requisito previo. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu Ledger con Xverse.

1. En la [página de Core Bitcoin Staking](https://stake.coredao.org/staking), haz clic en "**Connect**" junto a BTC Stake Amount. Recuerda, solo la cuenta primaria está soportada para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a tu Ledger Live.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-2.png)
</p>

2. Desde la ventana modal de wallet que se muestra, haz clic en "**Xverse**" bajo "**Wallets Supporting Ledger**". Asegúrate de que tu dispositivo Ledger esté desbloqueado.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-2.png)
</p>

3. Desbloquea tu dispositivo Ledger y confirma la conexión mediante la extensión de wallet de Xverse.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/mainnet/btc-staking/wallet-connect-3.png)
</p>

> ⚠️ **Nota:** Solo la cuenta primaria de Bitcoin en el dispositivo Ledger es compatible para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a la wallet de Xverse y utilizada para fines de staking.

### Especificar y Confirmar Detalles de BTC Staking

1. **Especificar Detalles de BTC Staking y Delegación:** Una vez que ambas wallets, Core y Bitcoin, estén conectadas, especifica la cantidad de BTC a hacer staking. Selecciona el validador de Core deseado al cual delegar tu Bitcoin. Para continuar con el staking de BTC, especifica el CORE Staking Amount como cero. Haz clic en el botón "**Proceed to Stake**".

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-3.png)
</p>

2. **Omitir Detalles de CORE Staking:** Los usuarios pueden omitir este paso y hacer clic directamente en "Stake BTC" para continuar con el staking únicamente de Bitcoin verificando los detalles de Bitcoin staking.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-4.png)
</p>

3. **Confirmar Detalles de BTC Staking:** Confirma la cantidad de BTC a stakear. Antes de finalizar la transacción de Bitcoin staking, es esencial comprender y especificar varios parámetros clave:
    - Confirma la cantidad de BTC que deseas stakear. La **cantidad mínima para hacer staking es 0.01 BTC**.
    - Configurar el lock time determina cuándo tu Bitcoin será desbloqueado y estará disponible nuevamente para redención o re-delegación.
    - El lock time en la UI del sitio web se basa en la zona horaria local del usuario, la cual puede no coincidir con la zona horaria UTC del dispositivo Ledger.
    - Especifica la velocidad de prioridad de red para tu transacción.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-5.png)
</p>

4. **Verificar Bitcoin Staking Address (Opcional):** Utiliza la herramienta de verificación de BTC Staking Address para confirmar que la dirección de BTC staking mostrada coincida con tu dirección esperada antes de continuar.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-6.png)
</p>

5. **Procede a Approve Transaction:** Haz clic en "Approve Transaction" en el sitio web para continuar con la transacción.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-6.png)
</p>

### Revisar y Aprobar la Transacción en el Dispositivo Ledger

#### Usando Xverse Wallet

1. Si estás usando Xverse Wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/Xverse-wallet-ui.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la transacción de BTC Staking en el dispositivo Ledger

1. Asegúrate de que tu dispositivo esté desbloqueado y que la aplicación Core esté abierta. Revisa y aprueba la transacción de BTC staking en tu dispositivo Ledger. Verifica los detalles del staking, incluyendo la cantidad de BTC, las direcciones del validator y delegator, así como las comisiones de transacción. Aprueba firmando la transacción.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

2. Una vez aprobada en tu dispositivo Ledger, aparecerá la notificación "**Transaction Submitted**" en el sitio web de Core BTC Staking.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/UI-8.png)
</p>

3. Haz clic en "**View on BTC Explorer**" para ver los detalles de tu transacción de BTC staking en el BTC Explorer.

> ⚠️ **Nota:** Para ser elegible para recibir recompensas, debes completar una ronda completa de staking (00:00:00 - 23:59:29 UTC).

## Conclusión

¡Felicidades! Has hecho exitosamente Bitcoin staking usando tu Ledger hardware wallet en Core a través del modelo de Self-Custodial Bitcoin Staking. Siguiendo esta guía, conectaste de forma segura tu dispositivo Ledger, instalaste y utilizaste la aplicación Ledger Core, y completaste tus transacciones de BTC staking con confianza.
Al aprovechar la seguridad líder de la industria de Ledger junto con el modelo de Self-Custodial Bitcoin Staking de Core, aseguras que tus activos permanezcan completamente bajo tu control. El uso de la aplicación Core también habilita Clear Signing, lo que proporciona total transparencia sobre lo que estás firmando, dándote tranquilidad y una experiencia más segura.
¡Ahora formas parte del ecosistema de Core, donde la seguridad, el control y el rendimiento van de la mano!
