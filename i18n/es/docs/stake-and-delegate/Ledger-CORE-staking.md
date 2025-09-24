---
sidebar_label: Uso de Ledger Hardware Wallet
description: Guía para hacer staking de CORE usando Ledger Hardware Wallet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Ledger Hardware Wallets para Staking de CORE

---

Esta guía de usuario te explica el proceso para hacer staking de CORE y obtener recompensas en la blockchain de Core utilizando un Ledger hardware wallet. Siguiendo los pasos a continuación, podrás participar en el mecanismo de consenso Satoshi Plus de Core mediante el staking y delegación de CORE.

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin problemas, ten en cuenta los siguientes requisitos clave:

1. **Usar Solo Dispositivos Ledger Soportados:** El staking de CORE solo es compatible con dispositivos Ledger específicos que tengan el firmware más reciente/compatible. Como buena práctica, actualiza tu dispositivo mediante Ledger Live antes de continuar.

2. **Siempre Usar la App Ethereum de Ledger:** _Debes_ usar la app Ethereum de Ledger para hacer staking de tokens CORE en Core usando tu dispositivo Ledger.

## Ledger Hardware Wallets Soportados

Los siguientes dispositivos Ledger actualmente soportan staking de CORE directamente en la blockchain de Core. Para la mejor experiencia y compatibilidad, asegúrate de que tu dispositivo tenga el firmware más reciente o compatible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

:::note
Las versiones de firmware listadas arriba reflejan las más recientes disponibles al momento de escribir este documento y están sujetas a cambios. Antes de hacer staking de CORE usando tu dispositivo Ledger, actualízalo a la última versión para garantizar compatibilidad y seguridad. Revisa siempre Ledger Live para obtener las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.
:::

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- Un dispositivo Ledger con el firmware más reciente.
- Ledger Live instalado y configurado en tu computadora.
- Tu dispositivo Ledger agregado a tu EVM Wallet que desees usar (por ejemplo, MetaMask)
- Tokens CORE suficientes (mínimo 1 CORE) disponibles en tu dispositivo Ledger para staking, incluyendo tokens adicionales para cubrir las tarifas de transacción.

## Configuración del Dispositivo Ledger

Antes de hacer staking de CORE, asegúrate de que tu Ledger hardware wallet esté completamente actualizada y lista para usarse con la blockchain de Core.

### Paso 1: Actualizar tu Dispositivo Ledger

Asegúrate de que tu dispositivo Ledger esté actualizado y listo para usarse.

1. Abre **Ledger Live** en tu computadora.
2. Conecta y desbloquea tu dispositivo Ledger.
3. Navega a **My Ledger** en la barra lateral.
4. Si se solicita, permite el acceso de **Ledger Manager** en tu dispositivo.
5. Instala cualquier actualización de firmware disponible para tu dispositivo, si ya tienes la última versión soportada, puedes omitir este paso.

### Paso 2: Instalar la aplicación Ethereum en Ledger

Sigue los pasos a continuación para instalar la aplicación Ethereum en tu dispositivo.

1. Con tu dispositivo conectado a la computadora, abre la aplicación Ledger Live y navega a "**My Ledger**".

2. En el "**App Catalog**", busca "**Ethereum**".

3. Instala la aplicación "**Ethereum**". Usa _únicamente_ la aplicación Ethereum de Ledger para hacer staking de CORE en Core Mainnet. Para más detalles, consulta la [guía oficial](https://support.ledger.com/article/360009576554-zd) de Ledger sobre cómo instalar la aplicación Ethereum en tu dispositivo.

<p align="center">
![install-ethereum-app](../../static/img/ledger-core/CORE-Staking/UI-1.png)
</p> 

### Paso 3: Habilitar Blind Signing en la aplicación Ethereum de Ledger

Antes de hacer staking de CORE, los usuarios deben habilitar blind signing en la configuración de la aplicación Ethereum en su dispositivo Ledger. Consulta la [guía oficial](https://support.ledger.com/article/4405481324433-zd) de Ledger
para más detalles.

<p align="center">
![enable-blind-signing](../../static/img/ledger-core/CORE-Staking/UI-2.png)
</p>

### Paso 4: Agregar el dispositivo Ledger a tu EVM Wallet

Antes de continuar con el staking de CORE usando Ledger, es importante agregar tu dispositivo Ledger a la EVM Wallet (por ejemplo, MetaMask, etc.) que vayas a usar para conectar tu Ledger y realizar el staking de CORE.

En esta guía, se utilizó la billetera MetaMask configurada con Core Mainnet. Consulta la [guía oficial](https://support.ledger.com/article/4404366864657-zd) de Ledger para obtener más detalles sobre cómo agregar tu dispositivo Ledger a la billetera MetaMask.

## Staking de CORE usando el dispositivo Ledger

Con tu dispositivo Ledger conectado a tu computadora y la aplicación Ethereum instalada en Ledger, puedes hacer staking de CORE de manera segura directamente desde tu hardware wallet.

:::info
Se requiere un mínimo de **1 CORE** para participar en el staking de tokens CORE en Core Mainnet, además de contar con tokens suficientes para cubrir las comisiones de transacción.
:::

1. En tu dispositivo Ledger, abre la aplicación Ethereum antes de continuar.

<p align="center">
![application-ready](../../static/img/ledger-core/CORE-Staking/UI-3.png)
</p>

2. Navegar al [sitio web de Core Staking](https://stake.coredao.org/staking).

### Conectar Core Wallet al sitio web de Staking

1. Conecta tu wallet de Core Mainnet al sitio web. Asegúrate de que sea la misma wallet que conectaste con tu dispositivo Ledger, ya que se usará como la wallet para hacer staking de CORE.

2. Haz clic en el botón "**Connect Wallet**" en la esquina superior derecha del sitio web.

<p align="center">
![connect-core-wallet](../../static/img/ledger-core/CORE-Staking/connect-core-wallet.png)
</p>

3. En el modal de wallets mostrado, selecciona la wallet de tu preferencia configurada para usarse con Core Mainnet.

### Especificar y Confirmar Detalles de Staking

1. En la [página](https://stake.coredao.org/staking), de Core Staking, con tu EVM wallet conectada al sitio de staking, especifica la cantidad de CORE a hacer stake. Haz clic en "**Proceed to Stake**".

<p align="center" style={{zoom:"60%"}}>
![specify-core-amount](../../static/img/ledger-core/CORE-Staking/UI-4.png)
</p> 

2. Confirma la cantidad de CORE a hacer stake y el validador al que delegarás tu stake para participar en el mecanismo de consenso de Core y ganar recompensas de staking. Haz clic en "**Confirm**" para continuar.

<p align="center" style={{zoom:"60%"}}>
![confirm-staking-details](../../static/img/ledger-core/CORE-Staking/UI-5.png)
</p>   

3. El usuario verá un modal indicándole que apruebe la transacción en su EVM wallet conectada.

<p align="center" style={{zoom:"60%"}}>
![confirm-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-6.png)
</p>  

4. Aprueba la transacción en la notificación de tu EVM wallet conectada.

<p align="center" style={{zoom:"70%"}}>
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-7.png)
</p>

### Aprobar Transacción en el Dispositivo Ledger

1. Aprueba la transacción de staking en tu dispositivo Ledger.

<p align="center">
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/CORE-Staking-Ledger.gif)
</p>

2. Una vez aprobada en tu dispositivo Ledger, aparecerá la notificación "Transaction Submitted" en el sitio web de Core Staking.

<p align="center" style={{zoom:"80%"}}>
![approve-staking-tx](../../static/img/ledger-core/CORE-Staking/UI-8.png)
</p>

3. Haz clic en "**View on Core Scan**" para ver los detalles de tu transacción de staking de CORE en el explorador de bloques Core Scan.

:::note
Para ser elegible para recibir recompensas, debes completar un ciclo completo de staking en el intervalo (00:00:00 - 23:59:29 UTC).
:::

## Preguntas Frecuentes

¿Tienes más preguntas? Consulta la sección de [FAQs](../../../../FAQs/ledger-core-faqs.md) para obtener respuestas a problemas comunes, soluciones y mejores prácticas.

## Conclusión

¡Felicidades! Has realizado con éxito el staking de CORE usando tu Ledger hardware wallet en la Core Mainnet. Al seguir esta guía, conectaste de forma segura tu dispositivo Ledger, instalaste y usaste la aplicación Ledger Ethereum, para hacer staking de CORE directamente desde tu hardware wallet y así ganar recompensas de staking.
