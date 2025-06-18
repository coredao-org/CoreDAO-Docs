---
sidebar_label: Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Conectarse a Core Testnet

---

:::note
Esta es una guía detallada para conectarse a Core Testnet (1114) utilizando la billetera MetaMask.
:::

### Requisitos previos de software

1. [La extensión para el navegador de MetaMask Wallet](https://metamask.io/)

### Configuración de la billetera MetaMask

Recomendamos utilizar la [billetera web MetaMask](https://metamask.io/) para conectarse a Core Testnet. Deberá instalar MetaMask y configurar su cuenta antes de poder usarla para conectarse a Core Testnet. Puede encontrar las instrucciones de configuración de MetaMask aquí.

### Agregar Core Testnet a MetaMask

There are multiple ways to add Core Testnet2 configurations to your MetaMask wallet, we have listed the most trusted and testest ways below.

#### Agregar red manualmente

Once you've set up your MetaMask wallet, you can use it to connect to Core Testnet by adding Core Testnet2 network details in MetaMask's network settings. Navegue hasta `Configuración->Redes` (`Settings->Networks`) en MetaMask y haga clic en el botón `Agregar red` (`Add Network`). Introduzca la siguiente información:

- **Nombre de la red:** Core Blockchain TestNet
- **Nueva URL de RPC:** https://rpc.test2.btcs.network
- **ID de cadena:** 1114
- **Símbolo de moneda:** tCORE2
- **URL del Explorador de bloques:** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Web de Staking:** https://stake.test2.btcs.network/

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Agregar la red Core a través de Chainlist.org

1. Go to https://chainlist.org and search for _Core Blockchain_, make sure to check the _Include Testnets_ option.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Verifique dos veces para asegurarse de elegir la red correcta. Verifique los detalles en las siguientes capturas: ID de cadena, moneda, etc. para asegurarse de agregar la correcta.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask confirmando las notificaciones de MetaMask.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Switch to the Core Testnet by clicking the _‘Switch Network’_ button.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

El Core Testnet ahora está agregado a su MetaMask.

#### Agregar red a través de Core Testnet Explorer

Si usa la extensión de MetaMask en Chrome, puede usar un atajo rápido para agregar Core Testnet a MetaMask. Visite [Core Testnet Explorer](https://scan.test.btcs.network/), desplácese hacia abajo y seleccione el botón `Add Core Network`. Esto abrirá una ventana emergente con toda la información de red necesaria cargada; solo necesita confirmar y aprobar.

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### Nueva Testnet

Core's latest testnet Core Testnet2 with `chainID 1114` is now live and the recommended testing environment for Core blockchain. A diferencia de la versión anterior (`ID de cadena: 1115`), esta soporta BTC Testnet4 para el staking. The old testnet, Core Testnet, is not deprecated and will no longer be maintained.

#### Actualizaciones de cambio de marca

`Satoshi Chain/BTCs` ha sido rebautizada como `Core/CORE`, respectivamente. Si agregó la Testnet antes del cambio de marca, deberá actualizar manualmente el nombre de la red y el símbolo de moneda en la configuración de MetaMask; de lo contrario, no podrá utilizar la versión actual de Core Testnet. Vaya a `Configuración->Red` y seleccione `Core Testnet` para abrir la configuración de red. Actualice el nombre de la red y el símbolo de moneda a los valores indicados en la [sección anterior](#adding-network-manualmente) y haga clic en el botón Guardar. ¡Listo!
:::

### Funding Wallet with tCORE2 Tokens

To help users get started and allow developers to quickly prototype their dApps, Core has released the public [Core Testnet Faucet](https://scan.test2.btcs.network/faucet) to distribute Core Testnet tokens, **tCORE2**. Follow the detailed [guide](./core-faucet.md) to fund your metamask account with tCORE2 tokens.

### Sending tCORE2 Tokens

You can use MetaMask wallet to send tCORE2 to other addresses.

1. Navigate to MetaMask wallet, make sure you are conencted to Core Testnet2
2. Haga clic en el botón `Enviar`

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Enter the amount of tCORE2 tokens you want to send and the address whom you want to send the tCORE2 tokens make sure its a Core Testnet2 Address. Then click _Continue_ and confirm the transaction.

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-2.png)

