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
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
:::info
Remarque : Il s'agit du dernier testnet officiellement pris en charge pour la blockchain Core. L'ancienne version du testnet, avec (chain ID 1115), est obsolète et n'est plus maintenue. Les développeurs sont fortement encouragés à passer au nouveau testnet (ID de chaîne 1114) pour garantir un support continu et l'accès aux dernières fonctionnalités.
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
