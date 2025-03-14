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
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>
<TabItem value="testnet2">

### Core Blockchain Testnet2 (1114 (0x45a))
:::info
This is the latest testnet and is strongly recommended for use. The previous testnet version will be deprecated and eventually retired, so transitioning to this new testnet ensures continued support and access to the latest features.
:::

- https://rpc.test2.btcs.network


</TabItem>
<TabItem value="testnet1">

### Core Blockchain Testnet (1115 (0x45b))

:::danger
Testnet1 will be deprecated and eventually retired. Transitioning to Core Testnet2 is recommended for continued support and access to the latest features.
:::

- https://rpc.test.btcs.network

</TabItem>

<TabItem value="mainnet">

### Core Blockchain Mainnet (1116 (0x45c))

- wss://ws.coredao.org
- https://rpc.coredao.org
- https://rpcar.coredao.org (For Archive Node)

</TabItem>
</Tabs>


### Third Party RPC Endpoints for Core Blockchain Mainnet

- **Ankr:** https://rpc.ankr.com/core
- **1RPC:** https://1rpc.io/core
- **INFSTONES:** https://core.public.infstones.com
- **IceCreamSwap:** https://rpc-core.icecreamswap.com
- **ZAN Node:** https://api.zan.top/core-mainnet
- **dRPC:** https://core.drpc.org | wss://core.drpc.org
