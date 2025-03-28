---
sidebar_label: Network Configuration
hide_table_of_contents: false
sidebar_position: 2
---

# Core Network Configurations

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>
<TabItem value="testnet2">
:::info
This is the latest testnet and is strongly recommended for use. The previous testnet version will be deprecated and eventually retired, so transitioning to this new testnet ensures continued support and access to the latest features.
:::

| **Parameter**          | **Value**                              |
| ---------------------- | -------------------------------------- |
| **RPC URL**            | https://rpc.test2.btcs.network         |
| **Chain ID**           | 1114 (0x45a)                           |
| **Currency Symbol**    | tCORE2                                 |
| **Block Explorer URL** | https://scan.test2.btcs.network        |
| **Faucet**             | https://scan.test2.btcs.network/faucet |
| **Staking Website**    | https://stake.test2.btcs.network/      |

</TabItem>
<TabItem value="testnet1">
:::caution
Testnet1 will be deprecated and eventually retired. Transitioning to Core Testnet2 is recommended for continued support and access to the latest features.
:::

| **Parameter**          | **Value**                             |
| ---------------------- | ------------------------------------- |
| **RPC URL**            | https://rpc.test.btcs.network         |
| **Chain ID**           | 1115 (0x45b)                          |
| **Currency Symbol**    | tCORE                                 |
| **Block Explorer URL** | https://scan.test.btcs.network        |
| **Faucet**             | https://scan.test.btcs.network/faucet |
| **Staking Website**    | https://stake.test.btcs.network/      |

</TabItem>

<TabItem value="mainnet">

| **Parameter**          | **Value**                  |
| ---------------------- | -------------------------- |
| **RPC URL**            | https://rpc.coredao.org/   |
| **Chain ID**           | 1116 (0x45c)               |
| **Currency Symbol**    | CORE                       |
| **Block Explorer URL** | https://scan.coredao.org   |
| **Staking Website**    | https://stake.coredao.org/ |

To import Core Mainnet chain details to MetaMask, refer to our guide on [adding Core to MetaMask](https://medium.com/@core_dao/add-core-to-metamask-7b1dd90041ce).

</TabItem>
</Tabs>
