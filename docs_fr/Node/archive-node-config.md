---
sidebar_label: Configuration des Nœuds d'Archive
hide_table_of_contents: false
sidebar_position: 2
---

# Configuration des Nœuds d'Archive

---

Les nœuds d'archive dans le réseau Core jouent un rôle crucial en conservant l'état historique complet du réseau. Ces nœuds sont des versions spécialisées des nœuds complets, avec des capacités améliorées, conçues pour stocker et fournir un accès à l'historique entier de toutes les transactions et états depuis le début de la Core Chain.

## Requis Systèmes

Plusieurs exigences, à la fois logicielles et matérielles, sont nécessaires pour configurer un nœud d'archive sur le réseau Core.

### Software

- Currently, a Core archive node can only run on **Mac OS X** or on the **Linux** operating systems.

### Hardware

Core nodes perform several resource-intensive tasks, which can include storing blockchain data, verifying blocks or transactions, communicating with peer nodes, and answering network requests, depending on their configuration. Each type of Core node has specific hardware requirements based on their expected needs.

#### Testnet Archive Node Hardware Specifications

For Archive Nodes on **Core Blockchain Testnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| Storage        | Solid State Drive (SSD) with a minimum capacity of 4TB |
| CPU            | 8 Core CPU                                                                |
| RAM            | 32 Gigabytes                                                              |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps      |

#### Mainnet Archive Node Hardware Specifications

For Archive Nodes on **Core Blockchain Mainnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| Storage        | Solid State Drive (SSD) with a minimum capacity of 4TB |
| CPU            | 8 Core CPU                                                                |
| RAM            | 32 Gigabytes                                                              |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps      |

## Running Core Archive Node

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your full node, running your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the latest node binary for from Core Chain GitHub [releases repo](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from Core's [Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). The node binary includes the relevant mainnet and testnet configuration files.

3\. Write the genesis state locally by executing the following command from your project directory:

```bash
geth --datadir node init genesis.json
```

4\. Our full/archive node is ready, let's start running it! You can just run the following `geth` command directly:

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full 
```

5\. As our archive node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.
