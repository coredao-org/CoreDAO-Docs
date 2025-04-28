---
sidebar_label: RPC Providers
hide_table_of_contents: false
sidebar_position: 2
description: Liste des points de terminaison RPC pour Testnet et Mainnet
---

importer des onglets depuis « @theme/Tabs » ;
importer TabItem depuis « @theme/TabItem » ;

# Points de terminaison RPC pour le Core Network

---

Les points de terminaison d'appel de procédure à distance (RPC) sont essentiels pour que les développeurs se connectent directement à la blockchain, permettant la récupération de données, l'exécution de transactions et la gestion de contrats intelligents. Avec des points de terminaison mainnet et testnet disponibles, les développeurs peuvent tester et déployer leurs applications de manière transparente au sein de l'écosystème blockchain Core.

## Points de terminaison RPC officiels pour le Core Network

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

### Testnet2 de la Core Blockchain (1114 (0x45a))

:::info
Remarque : Il s’agit du testnet le plus récent et son utilisation est fortement recommandée. La version précédente sera progressivement dépréciée puis retirée, il est donc essentiel de migrer vers ce nouveau testnet pour continuer à bénéficier d’un support actif et accéder aux dernières fonctionnalités.
:::

- https://rpc.test2.btcs.network
- https://rpcar.test2.btcs.network (Pour le nœud archive)

</TabItem>
<TabItem value="testnet1">

### Testnet de la blockchain Core (1115 (0x45b))

:::caution
Testnet1 sera obsolète et éventuellement retiré. La transition vers Core Testnet2 est recommandée pour un support continu et un accès aux dernières fonctionnalités.
:::

- https://rpc.test.btcs.network

</TabItem>

<TabItem value="mainnet">

### Mainnet de la blockchain Core (1116 (0x45c))

- wss://ws.coredao.org
- https://rpc.coredao.org
- https://rpcar.coredao.org (Pour le nœud archive)

</TabItem>
</Tabs>

### Points de terminaison RPC tiers pour le Mainnet de la blockchain Core

- **Ankr:** https://rpc.ankr.com/core
- **1RPC:** https://1rpc.io/core
- **INFSTONES:** https://core.public.infstones.com
- **IceCreamSwap:** https://rpc-core.icecreamswap.com
- **ZAN Node:** https://api.zan.top/core-mainnet
- **dRPC:** https://core.drpc.org | wss://core.drpc.org
