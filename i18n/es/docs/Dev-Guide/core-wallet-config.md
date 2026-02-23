---
sidebar_label: Agregar Core Network
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conectarse a Core Testnet

---

:::note
Esta es una guía detallada para conectarse a Core Testnet/Mainnet usando la wallet MetaMask.
:::

### Requisitos de Software

1. [Extensión de navegador MetaMask Wallet](https://metamask.io/)

### Configuración de MetaMask Wallet

Recomendamos usar la [wallet web de MetaMask](https://metamask.io/) para conectarse a Core Testnet2. Necesitarás instalar MetaMask y configurar tu cuenta antes de poder usarla para conectarte a Core Testnet/Mainnet. Puedes encontrar las instrucciones de configuración de MetaMask aquí.

### Agregar Core a MetaMask

Existen varias formas de agregar las configuraciones de Core Testnet/Mainnet a tu wallet MetaMask; a continuación listamos las maneras más confiables y comprobadas.

#### Agregar red manualmente

Una vez que hayas configurado tu walllet MetaMask, puedes usarla para conectarte a la blockchain Core añadiendo los detalles de la red Core en la configuración de redes de MetaMask. Navegue hasta `Settings->Networks` en MetaMask y haga clic en el botón `Add Network`. Introduzca la siguiente información:

<Tabs defaultValue="testnet2" values={[ {label: 'Testnet', value: 'testnet2'}, {label: 'Mainnet', value: 'mainnet'}, ]}>

<TabItem value="testnet2">

- **Nombre de la Red:** Core Blockchain TestNet
- **Nuevo RPC URL:** https://rpc.test2.btcs.network
- **Chain ID:** 1114
- **Símbolo de moneda:** tCORE2
- **URL del Explorador de Bloques:** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Sitio Web de Staking:** https://stake.test2.btcs.network/

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)
</p>

</TabItem>

<TabItem value="mainnet">

- **Nombre de la red:** Core Blockchain Mainnet
- **Nuevo RPC URL:** https://rpc.ankr.com/core
- **Chain ID:** 1116
- **Símbolo de moneda:** CORE
- **URL del explorador de bloques:** https://scan.coredao.org
- **Sitio web de staking:** https://stake.coredao.org/

</TabItem>

</Tabs>

### Agregar la red Core vía Chainlist.org

<Tabs defaultValue="testnet2" values={[ {label: 'Testnet', value: 'testnet2'}, {label: 'Mainnet', value: 'mainnet'}, ]}>

<TabItem value="testnet2">
1. Ve a chainlist.org y busca _Core Blockchain_, asegúrate de marcar la opción _Include Testnets_.

2. Verifique dos veces para asegurarse de elegir la red correcta. Revisa los detalles en las snapshots anteriores — Chain ID, moneda, etc. Para asegurarte de agregar la red adecuada.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist_testnet2.png)
</p>

3. Haz clic en _Connect Wallet_ y luego elige MetaMask. Permite la conexión a la wallet MetaMask confirmando las notificaciones que aparecerán.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Agrega Core Testnet2 haciendo clic en el botón `Approve`.

El Core Testnet ahora está agregado a tu MetaMask.

</TabItem>

<TabItem value="mainnet">

1. Ve a chainlist.org y busca ‘_Core Blockchain_’.

2. Verifique dos veces para asegurarse de elegir la red correcta. Revisa los detalles en las capturas de pantalla a continuación — Chain ID, moneda, etc. — para asegurarte de agregar la red adecuada.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/miannet-wallet-config/chainlist_mainnet.png)
</p>

3. Haz clic en _Connect Wallet_ y luego elige MetaMask. Permite la conexión a la wallet MetaMask confirmando las notificaciones de MetaMask.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Agrega Core Mainnet al hacer clic en el botón de `Approve`.

La Core Mainnet ahora está agregado a tu MetaMask.

</TabItem>

</Tabs>

### Agregar la red Core a través del Core Explorer

<Tabs defaultValue="testnet2" values={[ {label: 'Testnet', value: 'testnet2'}, {label: 'Mainnet', value: 'mainnet'}, ]}>

<TabItem value="testnet2">
1. Ve a https://scan.test2.btcs.network/ y desplázate hasta la parte inferior de la página

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Haz clic en el botón ‘_Agregar Core Network_’

3. Aprueba la transacción en tu MetaMask.

4. Después de realizar los pasos anteriores, podrás ver la red Core la próxima vez que accedas al selector de redes.

</TabItem>

<TabItem value="mainnet">

1. Ve a https://scan.coredao.org/ y desplázate hasta la parte inferior de la página

<p align="center" style={{zoom:"60%"}}>
![metmask-mainnet](../../static/img/miannet-wallet-config/mainnet-wallet-config-9.webp)
</p>

2. Haz clic en el botón ‘_Agregar Core Network_’

3. Aprueba la transacción en tu MetaMask

4. Después de realizar los pasos anteriores, podrás ver la red Core la próxima vez que accedas al selector de redes.

</TabItem>

</Tabs>

:::info

#### Último Core Testnet (1114)

El testnet más reciente de Core, Core Testnet2 con `chainID 1114`, ya está en funcionamiento y es el entorno de pruebas recomendado para la blockchain de Core. Soporta BTC Testnet4 para staking, a diferencia de la versión anterior (`chainID 1115`). La testnet anterior, Core Testnet, está ahora obsoleta y ya no se mantiene.
:::