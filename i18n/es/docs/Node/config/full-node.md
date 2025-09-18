---
sidebar_label: Full Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Full Nodes on Core

---

A Core full node  stores the entire history of the Core blockchain, enabling anyone to verify the state of any account. A Core full node  can take many forms:

- **Normal full node**: for private use.
- **Validator full node**: acts as a validator on Core, validating blocks and transactions.
- **RPC full node**: provides RPC services and responds to HTTP requests.

Following are the detailed steps to running **Normal Full Nodes** on the Core network.

## System Requirements

There are several system requirements for setting up a full node  on Core.

### Software

- **Operating System:** Currently, a Core Validator Node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- **Network Connectivity:** Stable internet connection with low latency and high availability
- **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes

### Hardware

A full node  on Core performs several resource-intensive tasks, which can include storing blockchain data, verifying blocks or transactions, communicating with peer nodes, and responding to network requests, depending on its configuration. Unlike validators, full nodes do not produce blocks; instead, they help propagate transactions and blocks across the network. They play a crucial role in maintaining data integrity and supporting a trustless environment. For running Full Nodes on Core, the following are the recommended minimum hardware specifications:

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Full Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

    ```
    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms |
    | **CPU**            | 4 CPU cores                                                                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                  |
    ```

  </TabItem>

  <TabItem value="mainnet">
    For Full Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

    ```
    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms  |
    | **CPU**            | 4 CPU cores                                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                   |
    ```

  </TabItem>
</Tabs>

## Build and Run Full Node on Core

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2. Download the latest node binary for Core Testnet from Core's GitHub [releases repo](https://github.com/coredao-org/core-chain/releases/latest). The node binary includes the testnet configuration files, make sure to use **testnet2** configurations. Download the latest snapshot for testnet from [here](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Note that the recommended method for syncing testnet nodes is to sync from the genesis block.

3. Write the genesis state locally by executing the following command from your project directory:

    ```bash
    geth --datadir node init genesis.json
    ```

   You should see the following output:

    ```bash
    INFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
    INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
    INFO [07-18|14:57:20.724] Writing custom genesis block
    INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
    INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
    INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
    INFO [07-18|14:57:20.729] Writing custom genesis block
    INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
    INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
    ```

4. Our full node is ready, let's start running it! Run the following command to start the full node  directly:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

   5\. As our full node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.

    </TabItem>

 <TabItem value="mainnet">

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2. Download the node binary from the[ releases page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).

3. Write the genesis state locally by executing the following command from your project directory:

    ```bash
    geth --datadir node init genesis.json
    ```

   You should see the following output:

    ```bash
    INFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
    INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
    INFO [07-18|14:57:20.724] Writing custom genesis block
    INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
    INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
    INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
    INFO [07-18|14:57:20.729] Writing custom genesis block
    INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
    INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
    ```

4. Our full node is ready, let's start running it! Run the following command to start the full node  directly:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

5. While the full node is running, we can monitor its logs to ensure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.
     </TabItem>

</Tabs>