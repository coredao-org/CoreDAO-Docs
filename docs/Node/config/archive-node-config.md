---
sidebar_label: Archive Node
hide_table_of_contents: false
sidebar_position: 2
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Archive Nodes on Core
---


Archive nodes in the Core network play a crucial role in maintaining the complete historical state of the network. These nodes are specialized versions of full nodes with enhanced capabilities tailored to storing and providing access to the entire history of all transactions and states since the inception of the Core.  


## System Requirements

There are several system requirements, both software and hardware, for setting up an Archive node on the Core network.


### Software

* **Operating System:** Currently, a Core Archive node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
* **Network Connectivity:** Stable internet connection with low latency and high availability.
* **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes.

### Hardware

An Archive node on Core stores the entire blockchain history, ensuring data availability and integrity for network participants. It supports querying past transactions, verifying historical data, and enhancing blockchain analytics. While not required for consensus, archive nodes play a crucial role in maintaining transparency and supporting decentralized applications. The following are the hardware requirements for running the Archive node on Core.


<Tabs
  defaultValue="testnetTwo"
  values={[
    {label: 'Testnet2', value: 'testnetTwo'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnetTwo">
    For Archive Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
    | **CPU**            | 8 Core CPU                                                                                          |
    | **RAM**            | 32 Gigabytes                                                                                        |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
  </TabItem>

  <TabItem value="mainnet">
    For Archive Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
    | **CPU**            | 8 Core CPU                                                                                          |
    | **RAM**            | 32 Gigabytes                                                                                        |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
  </TabItem>
</Tabs>




## Running Core Archive Node
1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


2. Download the latest node binary from [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). The node binary includes the relevant mainnet and testnet configuration files.


3. Write the genesis state locally by executing the following command from your project directory:


```bash
geth --datadir node init genesis.json
```


4. Now that the setup for the archive node is completed, let's start running it! Execute the following `geth` command to run the archive node:


```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```


5. While the archive node is running, you can monitor its logs to ensure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.



