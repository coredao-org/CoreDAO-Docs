---
sidebar_label: RPC Providers
hide_table_of_contents: false
sidebar_position: 2
description: List of RPC Endpoints for Testnet and Mainnet
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# RPC Endpoints for Core Network

---

Remote Procedure Call (RPC) endpoints are vital for developers to connect directly with the blockchain, enabling data retrieval, transaction execution, and smart contract management. With both mainnet and testnet endpoints available, developers can test and deploy their applications seamlessly within the Core blockchain ecosystem.

## Official RPC Endpoints for Core Network

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}>
<TabItem value="testnet2">

### Core Testnet2 (1114 (0x45a))
:::info
Note: This is the latest and officially supported testnet for the Core blockchain. The previous testnet (chain ID 1115) is now deprecated and no longer maintained. Developers are strongly encouraged to transition to the new testnet (chain ID 1114) to ensure continued support and access to the latest features.
:::

- https://rpc.test2.btcs.network 
- https://rpcar.test2.btcs.network (For Archive Node)
- wss://rpc.test2.btcs.network/wsp (WebSocket Support)

</TabItem>

<TabItem value="mainnet">

### Core Mainnet (1116 (0x45c))

- wss://ws.coredao.org
- https://rpc.coredao.org
- https://rpcar.coredao.org (For Archive Node)

</TabItem>
</Tabs>


### Third Party RPC Endpoints for Core Mainnet

- **Ankr:** https://rpc.ankr.com/core
- **1RPC:** https://1rpc.io/core
- **INFSTONES:** https://core.public.infstones.com
- **IceCreamSwap:** https://rpc-core.icecreamswap.com
- **ZAN Node:** https://api.zan.top/core-mainnet
- **dRPC:** https://core.drpc.org | wss://core.drpc.org
