---
sidebar_label: Configuración de red
hide_table_of_contents: false
sidebar_position: 2
---

# Configuraciones de red de Core

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
:::info
This is the latest testnet and is strongly recommended for use. La versión anterior de la testnet quedará obsoleta y eventualmente se retirará, por lo que la transición a esta nueva testnet garantiza el soporte continuo y acceso a las funciones más recientes.
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
<TabItem value="testnet1">
:::caution
La Testnet1 quedará obsoleta y eventualmente será retirada. Se recomienda trasladarse a la Core Testnet2 para soporte continuo y acceso a las características más recientes.
:::

| **Parámetro**                     | **Valor**                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **RPC URL**                       | https://rpc.test.btcs.network         |
| **ID de cadena**                  | 1115 (0x45b)                                                                       |
| **Símbolo de Moneda**             | tCORE                                                                                                 |
| **URL del Explorador de Bloques** | https://scan.test.btcs.network        |
| **Faucet**                        | https://scan.test.btcs.network/faucet |
| **Sitio web de Staking**          | https://stake.test.btcs.network/      |

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
