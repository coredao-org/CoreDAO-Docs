---
sidebar_label: Configuración de red
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuraciones de red de Core

---

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
:::info
Note: This is the latest and officially supported testnet for the Core blockchain. The previous testnet (chain ID 1115) is now deprecated and no longer maintained. Developers are strongly encouraged to transition to the new testnet (chain ID 1114) to ensure continued support and access to the latest features.
:::

| **Parámetro**                     | **Valor**                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **RPC URL**                       | https://rpc.test2.btcs.network         |
| **ID de cadena**                  | 1114 (0x45a)                                                                        |
| **Símbolo de Moneda**             | tCORE2                                                                                                 |
| **URL del Explorador de Bloques** | https://scan.test2.btcs.network        |
| **Faucet**                        | https://scan.test2.btcs.network/faucet |
| **Sitio web de Staking**          | https://stake.test2.btcs.network/      |

</TabItem>

<TabItem value="mainnet">

| **Parámetro**                     | **Valor**                                                                  |
| --------------------------------- | -------------------------------------------------------------------------- |
| **RPC URL**                       | https://rpc.coredao.org/   |
| **ID de cadena**                  | 1116 (0x45c)                                            |
| **Símbolo de Moneda**             | CORE                                                                       |
| **URL del Explorador de Bloques** | https://scan.coredao.org   |
| **Sitio web de Staking**          | https://stake.coredao.org/ |

Para importar detalles de la cadena Core Mainnet a MetaMask, consulte nuestra guía sobre [agregar Core a MetaMask](https://medium.com/@core_dao/add-core-to-metamask-7b1dd90041ce).

</TabItem>
</Tabs>
