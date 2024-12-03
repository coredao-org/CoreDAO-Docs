---
sidebar_label: Red de prueba de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Conéctese a la red de prueba de Core

---

:::note
Esta es una guía detallada para conectarse a Core Testnet utilizando la billetera MetaMask.
:::

### Requisitos previos del software

1. [Extensión del navegador MetaMask Wallet](https://metamask.io/)

### Configuración de la billetera MetaMask

Recomendamos utilizar la [billetera web MetaMask](https://metamask.io/) para conectarse a Core Testnet. Deberá instalar MetaMask y configurar su cuenta antes de poder usarla para conectarse a Core Testnet. Puede encontrar las instrucciones de configuración de MetaMask aquí.

### Agregar Core Testnet a MetaMask

Hay varias formas de agregar configuraciones de Core Testnet a su MetaMask Wallet; a continuación, enumeramos las formas más confiables y de prueba.

#### Agregar red manualmente

Una vez que haya configurado su billetera MetaMask, puede usarla para conectarse a Core Testnet agregando los detalles de la cadena de Core Testnet en la configuración de red de MetaMask. Navegue hasta `Configuración->Redes` en MetaMask y haga clic en el botón `Agregar red`. Introduzca la siguiente información:

- **Nombre de la red:** Core Blockchain TestNet
- **Nueva URL de RPC:** https://rpc.test.btcs.network
- **Chain ID:** 1115
- **Símbolo de moneda:** tCORE
- **Chain ID:** 1115

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Agregar la red Core a través de Chainlist.org

1. Vaya a chainlist.org y busque '_core blockchain_', asegúrese de marcar la opción _Incluir Testnets_.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Verifique dos veces para asegurarse de elegir la red correcta. Verifique los detalles en las siguientes instantáneas: ID de cadena, moneda, etc. para asegurarse de agregar la correcta.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask confirmando las notificaciones de MetaMask.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Cambie a Core testnet haciendo clic en el botón _'Cambiar red'_.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

El Core Testnet ahora está agregado a su MetaMask.

#### Agregar red a través de Core Testnet Explorer

Si usa la extensión Chrome MetaMask, puede usar un atajo rápido para agregar Core Testnet a MetaMask. Visite [Core Testnet Explorer] (https://scan.test.btcs.network/), desplácese hacia abajo y seleccione el botón "Agregar red central". Esto abrirá una ventana emergente con toda la información de red necesaria cargada; solo necesita confirmar y aprobar.

![agregar-metamask-de-red](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### Actualizaciones de cambio de marca

Satoshi Chain/BTC ha sido rebautizado como “Core Chain/CORE”, respectivamente. Si agregó Testnet antes del cambio de marca, deberá actualizar manualmente el nombre de la red y el símbolo de moneda en la configuración de MetaMask; de lo contrario, no podrá utilizar la versión actual de Core Testnet. Vaya a `Configuración->Red` y seleccione `Core Testnet` para abrir la configuración de red. Actualice el nombre de la red y el símbolo de moneda a los valores indicados en la [sección anterior] (#adding-network-manualmente) y haga clic en el botón Guardar. Listo!
:::

### Monedero de financiación con tokens tCORE

Para ayudar a los usuarios a comenzar y permitir a los desarrolladores crear rápidamente prototipos de sus dApps, Core ha lanzado el [Core Testnet Faucet] público (https://scan.test.btcs.network/faucet) para distribuir tokens de Core testnet, **tCORE** . Siga la [guía] detallada (./core-faucet.md) para financiar su cuenta de metamask con tokens tCORE.

### Envío de tokens tCORE

Puede utilizar MetaMask para enviar tCORE a otras direcciones.

1. Navegue a la billetera metamask, asegúrese de estar conectado a Core Testnet
2. Haga clic en el botón `Enviar`

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Ingrese la cantidad de tokens tCORE que desea enviar y la dirección a la que desea enviar los tokens tCORE; asegúrese de que sea una dirección Core Testnet. Luego haga clic en siguiente y confirme la transacción.

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-2.png)
