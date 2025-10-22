---
sidebar_label: Hacer Staking de BTC con Core
description: Guía para hacer staking de BTC desde un dispositivo Ledger en Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Hardware Wallets Ledger para BTC Staking en Core

Esta guía de usuario te lleva paso a paso por el proceso de hacer stake de BTC para ganar recompensas en CORE dentro de la blockchain de Core usando un hardware wallet Ledger. Siguiendo los pasos a continuación, puedes participar en el modelo de Self-Custodial Bitcoin Staking de Core mientras mantienes el control total de tus activos.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y fluida, ten en cuenta los siguientes requisitos clave:

1. **Usa solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de Bitcoin en Core es compatible únicamente con ciertos Ledger hardware wallets que cuenten con el firmware más reciente. Siempre actualiza tu dispositivo a través de Ledger Live antes de continuar.

2. **Usa siempre la aplicación Core de Ledger:** Debes usar la aplicación Core Testnet de Ledger, no la aplicación estándar de Bitcoin, al hacer staking o redimir BTC en Core Testnet. Hacer staking de BTC con la aplicación de Bitcoin puede provocar la imposibilidad de redimir tus BTC, lo que resultaría en la pérdida permanente de los activos.

3. **Haz staking de BTC solo desde la dirección principal de la billetera BTC:** Actualmente, el staking de BTC es compatible únicamente desde la dirección principal de la billetera BTC de tu dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por el momento.

4. **Solo se admite el tipo de dirección Bitcoin Native SegWit:** Actualmente, solo las direcciones Bitcoin Native SegWit son compatibles para el staking de BTC a través de dispositivos Ledger.

## Dispositivos Ledger de hardware compatibles

Los siguientes dispositivos de hardware de Ledger actualmente admiten el staking, redención y redelegación de BTC en Core Testnet. Para una mejor experiencia y compatibilidad, asegúrate de que tu dispositivo esté ejecutando la versión de firmware más reciente disponible.

| Dispositivo Ledger | Versión de firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::important
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de redactar y están sujetas a cambios. Antes de hacer staking, redimir o redelegar Bitcoin en Core Testnet usando tu dispositivo Ledger, como mejor práctica, actualiza siempre a la última versión compatible para garantizar compatibilidad y seguridad. Siempre verifica en Ledger Live las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y configurado en tu computadora.
- Una dirección BTC en tu dispositivo Ledger, la cual puedes obtener a través de Ledger Live o de la billetera Xverse.
  - Las direcciones BTC creadas en billeteras distintas a Xverse o Ledger Live no han sido probadas — úsalas bajo tu propio riesgo.
  - Para Xverse Wallet, agrega tu dispositivo Ledger a la billetera Xverse.
- Bitcoin Testnet4 BTC suficiente (mínimo 0.01 BTC) disponible en tu dispositivo Ledger para el staking y para cubrir las comisiones de transacción.

## Actualizar tu dispositivo Ledger

Antes de hacer staking de BTC en Core Testnet, como mejor práctica, asegúrate de que tu hardware wallet Ledger esté actualizado con el firmware más reciente o compatible, y que esté configurado y listo para usarse con Core Testnet.

### Actualizar tu dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de **Ledger Manager** en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo.

#### Configuración de Ledger Live para Testnet

La aplicación Core Testnet no está instalada por defecto en Ledger Live Manager. Para instalar y visualizar la aplicación Core Testnet, debes habilitar el "**Developer Mode**" y cambiar la opción "**My Ledger Provider**" en tu dispositivo Ledger.

##### Habilitar el Developer Mode en tu dispositivo Ledger

1. Conecta tu dispositivo Ledger y desbloquéalo.

2. Abre la aplicación Ledger Live y navega a **Settings** (ubicada en la parte superior derecha).

3. Ve al menú "**Experimental Features**", habilita "**Developer Mode**," y establece **My Ledger Provider** en **4**. Esto mostrará las aplicaciones de desarrollo y testnet en el manager.

<p align="center" style={{zoom:"80%"}}>
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app-1.png)
</p>

##### Instalación de la aplicación Ledger Core Testnet

1. Con tu dispositivo conectado, abre Ledger Live y navega a "**My Ledger**".

2. En el "**App Catalog**", busca "**Core**".

3. Instala la aplicación "**Core Testnet**". Usa _únicamente_ la aplicación Core Testnet para hacer staking de Bitcoin en Core Testnet.

<p align="center" style={{zoom:"80%"}}>    
![img](../../../../../static/img/ledger-core/testnet/install-coredao-testnet-app.png)
</p>

:::note
Para hacer staking de BTC en Core Testnet con un dispositivo Ledger, los usuarios deben usar únicamente la aplicación Core Testnet. A diferencia de la aplicación de Bitcoin, que depende de blind signing, la aplicación Core soporta Clear Signing, lo que permite a los usuarios visualizar y verificar completamente los detalles de la transacción antes de firmarla y aprobarla. Para más información sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::#### Configuración de la cuenta de Bitcoin TestnetActualmente, el staking desde un dispositivo Ledger solo es compatible a través de la cuenta principal de Bitcoin en el dispositivo Ledger.
Si tienes un dispositivo Ledger nuevo, la primera cuenta de Bitcoin que configures será la cuenta principal. Consulta aquí los pasos detallados para configurar la dirección de Bitcoin en el dispositivo Ledger usando Ledger Live.
Si ya tienes varias cuentas de Bitcoin configuradas en tu dispositivo Ledger, consulta aquí las instrucciones para identificar la cuenta principal.⚠️ Aviso: Actualmente, solo las direcciones de Bitcoin generadas mediante Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas con otras wallets aún no han sido probadas y no se puede garantizar su funcionamiento. Los usuarios que decidan proceder con wallets no probadas lo harán bajo su propio riesgo.##### Configuración de la dirección de Bitcoin usando Ledger LivePara configurar una dirección de cuenta Bitcoin que contenga los tokens Bitcoin Testnet4 BTC para staking, sigue los pasos a continuación:1) Instala Bitcoin Testnet y la aplicación de Bitcoin en tu dispositivo Ledger.
2) Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live, navega a la pestaña "**Accounts**" y haz clic en "**Add Account**".<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>3) Busca testnet y selecciona Bitcoin Testnet (BTC). Click on Continue<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>4) Aprueba la aplicación de Bitcoin Test en tu dispositivo Ledger.
5) En la siguiente pantalla, elige el formato de dirección (Native SegWit). Ten en cuenta que únicamente el tipo de dirección Bitcoin Native SegWit es compatible para hacer staking de BTC en Core usando dispositivos Ledger.
6) Haz clic en el botón **Add Account**.<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>7) Has añadido correctamente una cuenta de Bitcoin en la aplicación de Bitcoin testnet.<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta [aquí](https://support.ledger.com/article/115005195945-zd).#### Obtener tokens Bitcoin Testnet4 BTC1) Ve a la pestaña Receive en Ledger Live.<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>2) Selecciona la cuenta de Bitcoin Testnet que deseas usar y haz clic en "Continue".<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>3) Copia la dirección de la cuenta de Bitcoin Testnet.<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>4) Utiliza los faucets de Bitcoin Testnet4 para recibir tokens de prueba de Bitcoin.<br/>:::note
Usa siempre la aplicación Core Testnet para hacer staking, redimir o redelegar Bitcoin en Core Testnet. La aplicación estándar de Bitcoin no soporta operaciones de redención en Core y puede resultar en la pérdida permanente de acceso a tu BTC en staking. A diferencia de la aplicación de Bitcoin de Ledger, que utiliza blind signing donde los detalles de la transacción se ocultan al usuario, la aplicación Ledger Core Testnet permite Clear Signing. Con Clear Signing, todos los detalles de la transacción (ej. monto, validador, comisiones, direcciones) se muestran directamente en la pantalla de tu dispositivo Ledger, dándote visibilidad total. Esto te permite verificar con confianza lo que estás firmando y te protege contra transacciones no deseadas o maliciosas. Para más información sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

#### Configurar Cuenta de Bitcoin Testnet

Actualmente, el staking desde un dispositivo Ledger solo es compatible mediante la cuenta principal de Bitcoin en el dispositivo Ledger.
Si tienes un dispositivo Ledger nuevo, la primera cuenta de Bitcoin que configures será la cuenta principal. Consulta aquí los pasos detallados para configurar la dirección de Bitcoin en el dispositivo Ledger usando Ledger Live.
Si ya tienes varias cuentas de Bitcoin configuradas en tu dispositivo Ledger, consulta aquí las instrucciones para identificar la cuenta principal.

⚠️ Aviso: Actualmente, solo las direcciones de Bitcoin generadas mediante Ledger Live y Xverse Wallet han sido probadas y verificadas para garantizar compatibilidad. Las direcciones creadas con otras wallets aún no han sido probadas y no se puede garantizar su funcionamiento. Los usuarios que decidan proceder con wallets no probadas lo harán bajo su propio riesgo.

##### Configuración de una Dirección de Bitcoin usando Ledger Live

Para configurar una dirección de cuenta de Bitcoin que contenga tokens de Bitcoin Testnet4 BTC para staking, sigue los pasos a continuación:

1. Instala Bitcoin Testnet y la aplicación de Bitcoin en tu dispositivo Ledger.
2. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live, navega a la pestaña "**Accounts**" y haz clic en "**Add Account**".

<p align="center" style={{zoom:"40%"}}>    
![Add-Account](../../../../../static/img/ledger-core/testnet/btc-staking/UI-1.png)
</p>

3. Busca testnet y selecciona Bitcoin Testnet (BTC). Haz clic en Continue

<p align="center" style={{zoom:"50%"}}>
![Add-Account-2](../../../../../static/img/ledger-core/testnet/btc-staking/UI-2.png)
</p>

4. Aprueba la aplicación de Bitcoin Test en tu dispositivo Ledger.
5. En la siguiente pantalla, elige el formato de dirección (Native SegWit). Ten en cuenta que únicamente el tipo de dirección Bitcoin Native SegWit es compatible para hacer staking de BTC en Core usando dispositivos Ledger.
6. Haz clic en el botón **Add Account**.

<p align="center" style={{zoom:"50%"}}>
![Add Accounts 3](../../../../../static/img/ledger-core/testnet/btc-staking/UI-3.png)
</p>

7. Has añadido correctamente una cuenta de Bitcoin en la aplicación de Bitcoin testnet.

<p align="center" style={{zoom:"65%"}}>
![Account Added Successfully](../../../../../static/img/ledger-core/testnet/btc-staking/UI-4.png)
</p>

Para más detalles sobre cómo configurar tu primera cuenta de Bitcoin en un dispositivo Ledger, consulta [aquí](https://support.ledger.com/article/115005195945-zd).

#### Obtener Tokens de Bitcoin Testnet4 BTC

1. Ve a la pestaña Receive en Ledger Live.

<p align="center" style={{zoom:"40%"}}>
![Receive tab](../../../../../static/img/ledger-core/testnet/btc-staking/UI-5.png)
</p>

2. Selecciona la cuenta de Bitcoin Testnet que deseas usar y haz clic en "Continue".

<p align="center" style={{zoom:"60%"}}>
![Receive Tab - Select Bitcoin Testnet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-6.png)
</p>

3. Copia la dirección de la cuenta de Bitcoin Testnet.

<p align="center" style={{zoom:"60%"}}>
![Copy BTC Testnet Address](../../../../../static/img/ledger-core/testnet/btc-staking/UI-7.png)
</p>

4. Utiliza los faucets de Bitcoin Testnet4 para recibir tokens de Bitcoin de prueba.

<br/>

:::note
Usa siempre la aplicación Core Testnet para hacer staking, redimir o redelegar Bitcoin en Core Testnet. La aplicación estándar de Bitcoin no soporta operaciones de redención en Core y puede resultar en la pérdida permanente de acceso a tu BTC en staking. A diferencia de la aplicación de Bitcoin de Ledger, que utiliza blind signing donde los detalles de la transacción se ocultan al usuario, la aplicación Ledger Core Testnet permite Clear Signing. Con Clear Signing, todos los detalles de la transacción (ej. monto, validador, comisiones, direcciones) se muestran directamente en la pantalla de tu dispositivo Ledger, dándote visibilidad total. Esto te permite verificar con confianza lo que estás firmando y te protege contra transacciones no deseadas o maliciosas. Para más información sobre Clear Signing, consulta [aquí](https://www.ledger.com/academy/topics/ledgersolutions/what-is-clear-signing).
:::

## Staking de BTC en Core con Ledger

Con tu dispositivo Ledger conectado y la aplicación Core Testnet instalada, puedes hacer staking de BTC de manera segura directamente desde tu hardware wallet.

> ⚠️ **Nota:** Se requiere un mínimo de 0.01 BTC para participar en el staking de Bitcoin en Core Testnet, además de suficiente testnet BTC para cubrir las comisiones de transacción.

1. En tu dispositivo Ledger, abre la aplicación CoreDAO antes de continuar.

<p align="center" style={{zoom:"120%"}}>
![core-app-ready](../../../../../static/img/ledger-core/testnet/btc-staking/core-app-ready.png)
</p>

2. Ve al [sitio web de Core Testnet Staking](https://stake.test2.btcs.network/staking).

### Conectar la Core Wallet al Sitio de Staking

1. Conecta tu wallet de Core Testnet al sitio web de Staking de Core. Esta será usada como dirección de recompensas en CORE.

2. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![connect-core-wallet](../../../../../static/img/ledger-core/testnet/connect-core-wallet.png)
</p>

3. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Testnet.

### Conectar Ledger Hardware Wallet al sitio web

Antes de conectar tu dispositivo Ledger al sitio web, es importante asegurarte de que estás usando tu cuenta principal de Bitcoin (BTC) para hacer staking de BTC en Core Testnet. Si aún no la has configurado, consulta la [guía oficial de Ledger](https://support.ledger.com/article/115005195945-zd) para establecer una cuenta de Bitcoin (BTC) en tu dispositivo.

#### Opción de Staking Uno: Conectar Ledger Wallet Directamente

1. En el [sitio web de Core Testnet Bitcoin Staking](https://stake.test2.btcs.network/staking), haz clic en "**Connect**" junto a BTC Staking Amount. Recuerda, solo la cuenta primaria está soportada para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a tu Ledger Live.

<p align="center" style={{zoom:"50%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. En la ventana emergente de wallets que aparecerá, dentro de "**Hardware Wallet**", haz clic en "**Ledger**". Asegúrate de que tu Ledger esté conectado, desbloqueado y con la aplicación Core Testnet abierta.

<p align="center" style={{zoom:"60%"}}>
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-17.png)
</p>

#### Opción de Staking Dos: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, los usuarios también pueden usar Xverse para hacer staking de Bitcoin desde su dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. En la página de Core Bitcoin Staking, haz clic en "**Connect**" junto a BTC Stake Amount. Recuerda, solo la cuenta primaria está soportada para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a tu Ledger Live.

<p align="center" style={{zoom:"50%"}}>    
![connect-ledger-device](../../../../../static/img/ledger-core/testnet/btc-staking/UI-8.png)
</p>

2. En el modal de wallets que se despliega, haz clic en "**Xverse**" bajo "**Wallets Supporting Ledger**". Asegúrate de que tu dispositivo Ledger esté desbloqueado.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-18.png)
</p>

3. Desbloquea tu dispositivo Ledger y confirma la conexión a través de la extensión de Xverse Wallet.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-19.png)
</p>

4. Si se te solicita cambiar a "**Bitcoin Testnet4**", acepta la notificación.

<p align="center" style={{zoom:"60%"}}>
![conenct-xverse-wallet](../../../../../static/img/ledger-core/testnet/btc-staking/UI-20.png)
</p>

> ⚠️ **Nota:** Solo la cuenta primaria de Bitcoin en el dispositivo Ledger es compatible para hacer staking de BTC; asegúrate de que sea la misma cuenta conectada a la wallet de Xverse y utilizada para fines de staking.

### Especificar y Confirmar Detalles del Staking de BTC

1. **Especificar detalles de Staking y Delegación de BTC:** Una vez que ambas wallets, Core y Bitcoin, estén conectadas, especifica la cantidad de BTC a hacer staking. Selecciona el validador de Core deseado al cual delegar tu Bitcoin. Para proceder con el staking de BTC, establece el monto de tCORE2 Staking en cero. Haz clic en el botón "Proceed to Stake".

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-9.png)
</p>

2. **Omitir detalles de Staking con tCORE2:** Los usuarios pueden omitir este paso y hacer clic directamente en "Stake BTC" para continuar con el staking únicamente de Bitcoin verificando los detalles de Bitcoin staking.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-10.png)
</p>

3. **Confirmar Detalles de BTC Staking:** Confirma la cantidad de BTC a stakear. Antes de finalizar la transacción de Bitcoin staking, es esencial comprender y especificar varios parámetros clave:
   - Confirma la cantidad de BTC que deseas hacer timelock. La cantidad mínima para hacer staking es 0.01 BTC.
   - Configurar el lock time determina cuándo tu Bitcoin será desbloqueado y estará disponible nuevamente para redención o re-delegación.
   - El lock time en la UI del sitio web se basa en la zona horaria local del usuario, la cual puede no coincidir con la zona horaria UTC del dispositivo Ledger.
   - Especifica la prioridad de la red para tu transacción.

<p align="center" style={{zoom:"80%"}}>  
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-11.png)
</p>

4. **Verificar la dirección de BTC para Staking (Opcional)**: Usa la herramienta de verificación de Bitcoin Staking Address para confirmar que la dirección de staking de BTC mostrada coincide con la dirección esperada antes de continuar.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

5. **Proceder a aprobar la transacción:** Haz clic en "**Approve Transaction**" en el sitio web para continuar con la transacción.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-12.png)
</p>

6. La aprobación será dirigida a la wallet conectada.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-details](../../../../../static/img/ledger-core/testnet/btc-staking/UI-13.png)
</p>

### Revisar y Aprobar la Transacción en el Dispositivo Ledger

#### Usando Xverse Wallet

1. Si usas una Xverse wallet, revisa la transacción. Verifica los detalles y haz clic en "**Confirm**" en la notificación de la wallet en tu navegador.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-14.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"60%"}}>
![approve-tx-xverse](../../../../../static/img/ledger-core/testnet/btc-staking/UI-15.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la Transacción de Staking de BTC en el Dispositivo Ledger

1. Asegúrate de que tu dispositivo esté desbloqueado y que la app Core Testnet esté abierta. Revisa y aprueba la transacción de BTC staking en tu dispositivo Ledger. Verifica los detalles del staking, incluyendo la cantidad de BTC, las direcciones del validator y delegator, así como las comisiones de transacción. Aprueba firmando la transacción.

<p align="center" style={{zoom:"60%"}}> 
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-21.png)
</p>

2. Una vez aprobada en tu dispositivo Ledger, aparecerá la notificación "**Transaction Submitted**" en el sitio web de Core BTC Staking.

<p align="center">
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/btc-staking.gif)
</p>

3. Haz clic en "**View on BTC Explorer**" para ver los detalles de tu transacción de BTC staking en el BTC Explorer.

<p align="center" style={{zoom:"60%"}}>
![approve-tx-on-ledger](../../../../../static/img/ledger-core/testnet/btc-staking/UI-16.png)
</p>

> ⚠️ **Nota:** Para ser elegible para recibir recompensas, debes completar una ronda completa de staking dentro del rango (00:00:00 - 23:59:29 UTC).

## Preguntas Frecuentes

¿Tienes más preguntas? Consulta la sección de [FAQs](../../../../FAQs/ledger-core-faqs.md) para obtener respuestas a problemas comunes, soluciones y mejores prácticas.

## Conclusión

¡Felicidades! Has hecho exitosamente Bitcoin staking usando tu Ledger hardware wallet en Core Testnet a través del modelo de Self-Custodial Bitcoin Staking. Siguiendo esta guía, conectaste de forma segura tu dispositivo Ledger, instalaste y utilizaste la aplicación Ledger Core Testnet, y completaste tus transacciones de BTC staking con confianza. ¡Ahora formas parte del ecosistema de Core, donde la seguridad, el control y el rendimiento van de la mano!
