---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conéctese a la red de prueba Core

---

:::note
Esta es una guía detallada para conectarse a Core (Testnet y Mainnet) utilizando la billetera MetaMask.
:::

### Software Prerequisites

1. [Extensión del navegador MetaMask Wallet](https://metamask.io/)

### Configuración de la billetera MetaMask

We recommend using the [MetaMask web wallet](https://metamask.io/) to connect to Core Testnet2. Debes tener instalada MetaMask y configurar una cuenta antes de que puedas conectarte a Core Testnet/Mainnet. Puede encontrar las instrucciones de configuración de MetaMask aquí.

### Agregando Core a MetaMask

There are multiple ways to add Core Testnet/Mainnet configurations to your MetaMask Wallet, we have listed the most trusted and testeed ways below.

#### Agregar red manualmente

Once you've set up your MetaMask wallet, you can use it to connect to Core blockchain by adding Core network details in MetaMask's network settings. Navegue hasta `Configuración->Redes` en MetaMask y haga clic en el botón `Agregar red`. Introduzca la siguiente información:



<TabItem value="testnet2">

- **Nombre de la red:** Core Blockchain TestNet
- **Nueva URL de RPC:** https://rpc.test2.btcs.network
- **ID de cadena:** 1114
- **Símbolo de moneda:** tCORE2
- **URL del Explorador de bloques:** https://scan.test2.btcs.network
- **Grifo:** https://scan.test2.btcs.network/faucet
- **Sitio web de apuestas:** https://stake.test2.btcs.network/

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)
</p>

</TabItem>

<TabItem value="mainnet">

- **Network Name:** Core Blockchain Mainnet
- **Nueva URL RPC:** https://rpc.ankr.com/core
- **ID de cadena:** 1116
- **Símbolo de Moneda:** CORE
- **URL del Explorador de Bloques:** https://scan.coredao.org
- **Web de Staking:** https://stake.coredao.org/

</TabItem>

</Tabs>

### Agregar la red Core a través de Chainlist.org



<TabItem value="testnet2">
1. Go to chainlist.org and search for _Core Blockchain_, make sure to check the _Include Testnets_ option.

2. Verifique dos veces para asegurarse de elegir la red correcta. Por favor, confirme los siguientes detalles en las capturas de pantalla adjuntas: ID de cadena, moneda, etc. Para garantizar la configuración correcta.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist_testnet2.png)
</p>

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask confirmando las notificaciones de MetaMask.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Add Core Testnet2 by clicking the `Approve` button.

El Core Testnet ahora está agregado a su MetaMask.

</TabItem>

<TabItem value="mainnet">

1. Go to chainlist.org and search for ‘_Core Blockchain_’.

2. Verifique dos veces para asegurarse de elegir la red correcta. Verifique los detalles en las siguientes instantáneas: ID de cadena, moneda, etc. para asegurarse de agregar la correcta.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/miannet-wallet-config/chainlist_mainnet.png)
</p>

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask al confirmar la notificación respectiva.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Agrega Core Mainnet al hacer clic en el botón de `Approve`.

Core Mainnet está ahora agregada a su MetaMask.

</TabItem>

</Tabs>

### Agregar la red Core a través de Core Explorer



<TabItem value="testnet2">
1. Vaya a https://scan.test2.btcs.network/ y desplácese hacia abajo en la página

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Haga clic en el botón ‘_Add Core Network_’

3. Approve the transaction in your MetaMask.

4. Después de realizar los pasos anteriores, podrás ver la red Core la próxima vez que accedas al selector de redes.

</TabItem>

<TabItem value="mainnet">

1. Vaya a https://scan.coredao.org/ y desplácese hacia abajo en la página

<p align="center" style={{zoom:"60%"}}>
![metmask-mainnet](../../static/img/miannet-wallet-config/mainnet-wallet-config-9.webp)
</p>

2. Haga clic en el botón ‘_Add Core Network_’

3. Aprueba en tu MetaMask

4. Después de realizar los pasos anteriores, podrás ver la red Core la próxima vez que accedas al selector de redes.

</TabItem>

</Tabs>

:::info

#### Última Testnet de Core (1114)

Core's latest testnet, Core Testnet2 with `chainID 1114`, is now live and the recommended testing environment for Core blockchain. A diferencia de la versión anterior (`ID de cadena: 1115`), esta soporta BTC Testnet4 para el staking. The old testnet, Core Testnet, is not deprecated and will no longer be maintained.
:::