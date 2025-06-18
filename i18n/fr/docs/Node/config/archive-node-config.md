---
sidebar_label: Nœud d'archivage
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Nœuds d'archivage sur Core

---

Les nœuds d'archive dans le réseau Core jouent un rôle crucial en conservant l'état historique complet du réseau. Ces nœuds sont des versions spécialisées des nœuds complets, avec des capacités améliorées, conçues pour stocker et fournir un accès à l'historique entier de toutes les transactions et états depuis le début de Core.

## Requis Systèmes

There are several system requirements, both software and hardware, for setting up an Archive node on the Core network.

### Logiciel

- **Operating System:** Currently, a Core Archive node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- **Network Connectivity:** Stable internet connection with low latency and high availability.
- **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes.

### Matériel

An Archive node on Core stores the entire blockchain history, ensuring data availability and integrity for network participants. Il prend en charge l'interrogation des transactions passées, la vérification des données historiques et l'amélioration de l'analyse de la blockchain. Bien que non requis pour le consensus, les nœuds d'archivage jouent un rôle crucial dans le maintien de la transparence et le soutien des applications décentralisées. The following are the hardware requirements for running the Archive node on Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
For Archive Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>

  <TabItem value="mainnet">
    For Archive Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
</Tabs>

## Exécution d'un Nœud d'Archive Core

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2. Download the latest node binary from [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). Le nœud binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet.

3. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

```bash
geth --datadir node init genesis.json
```

4. Now that the setup for the archive node is completed, let's start running it! Execute the following `geth` command to run the archive node:

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```

5. While the archive node is running, you can monitor its logs to ensure that everything is operating correctly. Par défaut, le fichier de journal se trouve à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si vous le souhaitez.



