---
sidebar_label: RPC Node Configuration
hide_table_of_contents: false
sidebar_position: 2
---

# RPC Node Configuration

---

RPC (Remote Procedure Call) nodes on the Core network play a crucial role in facilitating interaction between external applications and the Core blockchain. They serve as the interface through which developers and users can query and interact with the blockchain, making them essential for the functioning of decentralized applications (DApps) and other blockchain services.

## System Requirements

There are several system requirements, both software and hardware, for setting up a RPC node on the Core network.

### Software

- Currently, a Core RPc Node can only run on **Mac OS X** or on the **Linux** operating systems.

### Hardware

Core nodes perform several resource-intensive tasks, which can include storing blockchain data, verifying blocks or transactions, communicating with peer nodes, and answering network requests, depending on their configuration. Each type of Core node has specific hardware requirements based on their expected needs.

#### Testnet RPC Node Hardware Specifications

For RPC Nodes on **Core Blockchain Testnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storage        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU            | 8 CPU cores                                                                                                                                                          |
| RAM            | 16 gigabytes                                                                                                                                                         |
| Internet Speed | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                                                              |

#### Mainnet RPC Node Hardware Specifications

For Sanpshot Nodes on **Core Blockchain Mainnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storage        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU            | 16 CPU cores                                                                                                                                                         |
| RAM            | 32 gigabytes                                                                                                                                                         |
| Internet Speed | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                                                              |

## Running RPC Node

### Enabling HTTP Inbound Port

If you are running an RPC node, you need to enable `HTTP` inbound rules on port **8575** in the firewall settings. Port **8575** is set as the default port. You can change the configurations in `config.toml`.

### Build and Run

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your RPC full node, running your RPC full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the node binary from the [releases page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).

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
