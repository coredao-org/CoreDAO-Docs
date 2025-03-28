---
sidebar_label: RPC Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# RPC Nodes on Core
---

RPC (Remote Procedure Call) nodes on the Core network play a crucial role in facilitating interaction between external applications and the Core blockchain. They serve as the interface through which developers and users can query and interact with the blockchain, making them essential for the functioning of decentralized applications (DApps) and other blockchain services. 

## System Requirements

There are several system requirements, both software and hardware, for setting up a RPC node on the Core network.

### Software

* **Operating System:** Currently, a Core Archive Node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
* **Network Connectivity:** Stable internet connection with low latency and high availability.
* **Firewall Configuration:** To ensure your RPC Node can communicate with external applications and other nodes, you need to allow inbound HTTP traffic on port 8575, which is the default port for RPC communication. You can adjust this setting in the config.toml file if you prefer using a different port. Make sure that your firewall settings are properly configured to allow traffic on this port.

### Hardware

An RPC Node on Core acts as a gateway for applications, developers, and users to interact with the blockchain. It processes queries, submits transactions, and retrieves real-time blockchain data via Remote Procedure Calls (RPC). These nodes are essential for dApps, wallets, and analytics platforms to seamlessly access Core’s network. Following are the hardware requirements for RPC Node on Core.

<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet2', value: 'testnet2'},
    {label: 'Testnet', value: 'testnet'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For RPC Nodes on **Core Blockchain Testnet2**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes   |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
  <TabItem value="testnet">
    For RPC Nodes on **Core Blockchain Testnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes   |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
  <TabItem value="mainnet">
    For RPC Nodes on **Core Blockchain Mainnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes  |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
</Tabs>

## Running RPC Node

### Enabling HTTP Inbound Port

If you are running an RPC node, you need to enable `HTTP` inbound rules on port **8575** in the firewall settings. Port **8575** is set as the default port. You can change the configurations in `config.toml`.

### Build and Run

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your RPC full node, running your RPC full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the node binary from the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).

3\. Write the genesis state locally by executing the following command from your project directory:

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

4\. Our RPC full node is ready, let's start running it!

If you plan to run a RPC node, you can just run the following `geth` command directly:

```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. As our RPC full node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.
