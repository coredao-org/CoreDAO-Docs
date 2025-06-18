---
sidebar_label: Configuration du Réseau
hide_table_of_contents: false
sidebar_position: 2
---

importer des onglets depuis « @theme/Tabs » ;
importer TabItem depuis « @theme/TabItem » ;

# Configurations du réseau Core

---

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
:::info
This is the latest testnet and is strongly recommended for use as the official testing environment for Core blockchain. The previous testnet version, chainID 1115, is deprecated and is no longer maintained. Transitioning to Core Testnet2 ensures continued support and access to the latest features.
:::

| **Parameter**                | **Value**                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| **RPC URL**                  | https://rpc.test2.btcs.network         |
| **ID de Chaîne**             | 1114 (0x45a)                                                                        |
| **Symbole de la devise**     | tCORE2                                                                                                 |
| **Explorateur de blocs**     | https://scan.test2.btcs.network        |
| **Faucet**                   | https://scan.test2.btcs.network/faucet |
| **Site Web de Staking Core** | https://stake.test2.btcs.network/      |

</TabItem>

<TabItem value="mainnet">

| **Paramètre**                | **Valeur**                                                                 |
| ---------------------------- | -------------------------------------------------------------------------- |
| **RPC URL**                  | https://rpc.coredao.org/   |
| **ID de Chaîne**             | 1116 (0x45c)                                            |
| **Symbole de la devise**     | CORE                                                                       |
| **Explorateur de blocs**     | https://scan.coredao.org   |
| **Site Web de Staking Core** | https://stake.coredao.org/ |

Pour importer les détails de la chaîne Mainnet de Core dans MetaMask, référez-vous à notre guide sur [l'ajout de Core à MetaMask](https://medium.com/@core_dao/add-core-to-metamask-7b1dd90041ce).

</TabItem>
</Tabs>
