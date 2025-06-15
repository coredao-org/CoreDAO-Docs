---
sidebar_label: Proveedores de RPC
hide_table_of_contents: false
sidebar_position: 2
description: Lista de endpoints RPC para Testnet y Mainnet
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Endpoints RPC para Core Network

---

Los endpoints de Llamadas a Procedimiento Remoto (RPC) son vitales para que los desarrolladores se conecten directamente con la blockchain, permitiendo la recuperación de datos, la ejecución de transacciones y la gestión de contratos inteligentes. Con endpoints disponibles tanto para mainnet como para testnet, los desarrolladores pueden probar y desplegar sus aplicaciones sin problemas dentro del ecosistema de la blockchain Core.

## Endpoints RPC para la red de Core

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

### Core Testnet2 (1114 (0x45a))

:::info
Nota: Esta es la última red de prueba y se recomienda encarecidamente su uso. La versión anterior de la testnet quedará obsoleta y eventualmente se retirará, por lo que la transición a esta nueva testnet garantiza el soporte continuo y acceso a las funciones más recientes.
:::

- https://rpc.test2.btcs.network
- https://rpcar.test2.btcs.network (Para Archive Node)

</TabItem>


<TabItem value="mainnet">

### Core Blockchain Mainnet (1116 (0x45c))

- wss://ws.coredao.org
- https://rpc.coredao.org
- https://rpcar.coredao.org (For Archive Node)

</TabItem>
</Tabs>

### Endpoints RPC de terceros para Core Blockchain Mainnet

- **Ankr:** https://rpc.ankr.com/core
- **1RPC:** https://1rpc.io/core
- **INFSTONES:** https://core.public.infstones.com
- **IceCreamSwap:** https://rpc-core.icecreamswap.com
- **ZAN Node:** https://api.zan.top/core-mainnet
- **dRPC:** https://core.drpc.org | wss://core.drpc.org
