---
sidebar_label: On Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Running Core Full Nodes on Core Testnet
---

A Core full node stores the entire history of the Core blockchain, enabling anyone to verify the state of any account. A Core full node can take many forms:

* **Normal full node**: for private use.
* **Validator full node**: acts as a validator on Core, validating blocks and transactions.
* **RPC full node**: provides RPC services and responds to HTTP requests.

:::note
This document provides a detailed guideline on running Normal Full Nodes on the Core network.
:::

## System Requirements

There are several system requirements for setting up a Full Node on Core.

### Software Specifications for Full Nodes on Core Testnet

Currently, a Core Full Node can **_only_** run on **Mac OS X** and **Linux**.

### Hardware Specifications for Full Nodes on Core Testnet

For full nodes on **Core testnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| Storage        | 1 TB of free disk space                                                                                 |
| CPU            | 4 CPU cores                                                                                             |
| RAM            | 8 gigabytes                                                                                             |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5 megabytes per second.                  |


## Build and Run Full Node on Core Testnet

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your full node, running your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the latest node binary for Core Testnet from Core Chain GitHub [releases repo](https://github.com/coredao-org/core-chain/releases/latest). The node binary includes the relevant testnet configuration files. Download the latest snapshot for testnet from [here](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). _Note that the recommended method for syncing testnet node is to sync from genesis block_. 

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

4\. Our full node is ready, let's start running it!

If you plan to run a normal node, you can just run the following `geth` command directly:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. As our full node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.
