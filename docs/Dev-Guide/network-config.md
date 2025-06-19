---
sidebar_label: Network Configuration
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Core Network Configurations

---


<Tabs defaultValue="testnet2" values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}>
<TabItem value="testnet2">
:::info
This is the latest testnet and is strongly recommended for use as the official testing environment for Core blockchain. The previous testnet version, chainID 1115, is deprecated and is no longer maintained. Transitioning to Core Testnet2 ensures continued support and access to the latest features.
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
