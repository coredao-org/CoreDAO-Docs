---
sidebar_label: Configuration du Réseau
hide_table_of_contents: false
sidebar_position: 2
---

# Configurations du réseau Core

---

importer des onglets depuis « @theme/Tabs » ;
importer TabItem depuis « @theme/TabItem » ;

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
::: info
Il s'agit du testnet le plus récent et son utilisation est fortement recommandé. La version précédente sera progressivement dépréciée puis retirée, il est donc essentiel de migrer vers ce nouveau testnet pour continuer à bénéficier d’un support actif et accéder aux dernières fonctionnalités.
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
<TabItem value="testnet1">
:::Testnet1 sera obsolète et éventuellement retiré. La transition vers Core Testnet2 est recommandée pour un support continu et un accès aux dernières fonctionnalités.
:::

| **Paramètre**                | **Valeur**                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| **RPC URL**                  | https://rpc.test.btcs.network         |
| **ID de Chaîne**             | 1115 (0x45b)                                                                       |
| **Symbole de la devise**     | tCORE                                                                                                 |
| **Explorateur de blocs**     | https://scan.test.btcs.network        |
| **Faucet**                   | https://scan.test.btcs.network/faucet |
| **Site Web de Staking Core** | https://stake.test.btcs.network/      |

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
