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
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

### Core Testnet2 (1114 (0x45a))

:::info
Nota: Esta es la testnet más reciente y oficialmente compatible para la blockchain de Core. The previous testnet (chain ID 1115) is now comissioned and no longer available for use. Developers are strongly encouraged to use the new testnet (chain ID 1114) to ensure continued support and access to the latest features.
:::

- https://rpc.test2.btcs.network
- https://rpcar.test2.btcs.network (Para Archive Node)
- wss://rpc.test2.btcs.network/wsp (WebSocket Support)

</TabItem>

<TabItem value="mainnet">

### Core Mainnet (1116 (0x45c))

- wss://ws.coredao.org
- https://rpc.coredao.org
- https://rpcar.coredao.org (For Archive Node)

</TabItem>
</Tabs>

### Endpoints RPC de terceros para Core Mainnet

- **Ankr:** https://rpc.ankr.com/core
- **1RPC:** https://1rpc.io/core
- **IceCreamSwap:** https://rpc-core.icecreamswap.com
- **ZAN Node:** https://api.zan.top/core-mainnet
- **dRPC:** https://core.drpc.org | wss://core.drpc.org
