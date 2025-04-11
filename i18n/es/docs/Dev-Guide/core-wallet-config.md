---
sidebar_label: Agregar la Red de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Conéctese a la red de prueba Core

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
Esta es una guía detallada para conectarse a Core (Testnet y Mainnet) utilizando la billetera MetaMask.
:::

### Requisitos previos del software

1. [Extensión del navegador MetaMask Wallet](https://metamask.io/)

### Configuración de la billetera MetaMask

Recomendamos utilizar la [billetera web MetaMask](https://metamask.io/) para conectarse a Core Testnet. Debes tener instalada MetaMask y configurar una cuenta antes de que puedas conectarte a Core Testnet/Mainnet. Puede encontrar las instrucciones de configuración de MetaMask aquí.

### Agregando Core a MetaMask

Existen múltiples formas de añadir las redes de Core (Testnet y Mainnet) a MetaMask. A continuación hemos listado los métodos más confiables y verificados.

#### Agregar red manualmente

Una vez que haya configurado su billetera MetaMask, puede usarla para conectarse a Core agregando los detalles de la cadena a la configuración de red en MetaMask. Navegue hasta `Configuración->Redes` en MetaMask y haga clic en el botón `Agregar red`. Introduzca la siguiente información:

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

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
<TabItem value="testnet1">

- **Nombre de la Red:** Core Blockchain TestNet
- **Nueva URL RPC:** https://rpc.test.btcs.network
- **ID de cadena:** 1115
- **Símbolo de Moneda:** tCORE
- **URL del Explorador de Bloques:** https://scan.test.btcs.network
- **Faucet:** https://scan.test.btcs.network/faucet
- **Web de Staking:** https://stake.test.btcs.network/

</TabItem>

<TabItem value="mainnet">

- **Nombre de la Red:** Core Blockchain
- **Nueva URL RPC:** https://rpc.ankr.com/core
- **ID de cadena:** 1116
- **Símbolo de Moneda:** CORE
- **URL del Explorador de Bloques:** https://scan.coredao.org
- **Web de Staking:** https://stake.coredao.org/

</TabItem>

</Tabs>

### Agregar la red Core a través de Chainlist.org

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">
1. Vaya a chainlist.org y busque '_core blockchain_', asegúrese de marcar la opción _Incluir Testnets_.

2. Verifique dos veces para asegurarse de elegir la red correcta. Por favor, confirme los siguientes detalles en las capturas de pantalla adjuntas: ID de cadena, moneda, etc. Para garantizar la configuración correcta.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist_testnet2.png)
</p>

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask confirmando las notificaciones de MetaMask.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Agrega Core testnet2 al hacer clic en el botón de `Approve`.

El Core Testnet ahora está agregado a su MetaMask.

</TabItem>

<TabItem value="testnet1">
1. Visita chainlist.org y busca ‘_core blockchain_’, asegúrate de marcar la opción _Include Testnets_.

2. Verifique dos veces para asegurarse de elegir la red correcta. Verifique los detalles en las siguientes instantáneas: ID de cadena, moneda, etc. para asegurarse de agregar la correcta.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist_testnet1.png)
</p>

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask al confirmar la notificación respectiva.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Agrega Core testnet2 al hacer clic en el botón de `Approve`.

Core Testnet está ahora agregada a su MetaMask.

</TabItem>

<TabItem value="mainnet">

1. Vaya a chainlist.org y busque ‘_core blockchain_’.

2. Verifique dos veces para asegurarse de elegir la red correcta. Por favor, confirme los siguientes detalles en las capturas de pantalla adjuntas: ID de cadena, moneda, etc. Para garantizar la configuración correcta.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/miannet-wallet-config/chainlist_mainnet.png)
</p>

3. Click on _Connect Wallet_ and then choose MetaMask. Allow to connect to MetaMask wallet by confirming the MetaMask notifications.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Add Core Mainnet by clicking the `Approve` button.

The Core Mainnet is now added to your MetaMask.

</TabItem>

</Tabs>

### Adding the Core network via the Core Explorer

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">
1. Go to https://scan.test2.btcs.network/ and scroll all the way down on the page

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Click the ‘_Add Core Network_’ button

3. Approve in your MetaMask

4. After performing the above steps, you will be able to see Core network the next time you access the network selector.

</TabItem>

<TabItem value="testnet1">
1. Go to https://scan.test.btcs.network/ and scroll all the way down on the page

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Click the ‘_Add Core Network_’ button

3. Approve in your MetaMask

4. After performing the above steps, you will be able to see Core network the next time you access the network selector.

</TabItem>

<TabItem value="mainnet">

1. Go to https://scan.coredao.org/ and scroll all the way down on the page

<p align="center" style={{zoom:"60%"}}>
![metmask-mainnet](../../static/img/miannet-wallet-config/mainnet-wallet-config-9.webp)
</p>

2. Click the ‘_Add Core Network_’ button

3. Approve in your MetaMask

4. After performing the above steps, you will be able to see Core network the next time you access the network selector.

</TabItem>

</Tabs>

:::info

#### Latest Core Testnet (1114)

La nueva red de prueba de Core con `chainID 1114` ya está disponible y se recomienda su uso. It supports BTC Testnet4 for staking, unlike the previous version (`chainID 1115`). La antigua testnet pronto quedará obsoleta y eventualmente se retirará, así que cambie a la nueva testnet para acceder a las funciones más recientes.
:::

<!-- :::note

#### Rebrand Updates

`Satoshi Chain/BTCs` have been rebranded to `Core/CORE`, respectively. If you added the Testnet before the rebranding, you'll need to update Network Name and Currency Symbol in the MetaMask settings manually; otherwise, you won't be able to use the current version of Core Testnet. Go to `Settings->Network`, and select `Core Testnet` to open up the network settings. Update Network Name and Currency Symbol to the values stated in the [above section](#adding-network-manually) and click the Save button. You're good to go!
::: -->