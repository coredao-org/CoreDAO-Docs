---
sidebar_label: Setup Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Setting Up Validator Nodes on Core
---

This guide walks you through the process of setting up a validator node on the Core Network. It covers installing system dependencies, building the Core node software, initializing with snapshot data, and starting your validator node.


### System Requirements for Validator Node

Before you begin, please ensure your system meets the required hardware and software specifications. Note, validator nodes on the Core network are essentially full nodes running in validator mode.

#### Supported OS Platforms
Currently, the supported OS platforms include Mac OS X, Linux, and Windows.

#### Hardware Requirements
<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet2', value: 'testnet2'},
    {label: 'Testnet', value: 'testnet'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For Validator Nodes on **Core Blockchain Testnet2**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>
  <TabItem value="testnet">
    For Validator Nodes on **Core Blockchain Testnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
  <TabItem value="mainnet">
   For Validator Nodes on **Core Blockchain Mainnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
</Tabs>


### Clone the Core Blockchain Codebase

It is recommend to use the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your validator node, i.e., running your validator node directly from Core blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Install Depedencies

After cloning the repo, next step is to install all the necessary dependencies for building the geth (Go Ethereum) binary. Run the following command to install dependencies:

```bash
make geth
```
This will download and install the necessary dependencies and build the `geth` binary. 

### Setting up the Full Node 

There are 2 approaches to setup a full node from scratch on the Core blockchain:

* **By Snapshot (Recommend):** download the latest Core blockchain snapshot and sync the node based on it.
* **From Genesis (Not Recommend):** sync the whole Core blockchain data from the genesis block.

:::tip
Syncing from the genesis block can take a significant amount of time. It is recommended to set up a Core full node using the latest snapshot to speed up the process.
:::

#### Using the Snapshot (Recommended)

1. **Download the Latest Pre-Build Binaries:** Download the latest node binaries from the official [Core Releases Repository](https://github.com/coredao-org/core-chain/releases/lates).


2. **Genesis and Configuration Files:** The pre-build binaries contains `genesis.json` and `config.toml` for the respective network you want to run the validator node. Ensure these files are correctly placed in your node’s configuration directory before proceeding with further setup.

3. **Initialize Genesis Block:** Write the genesis state locally by executing the following command from your project directory. Ensure that the relative path to the `genesis.json` file is correct. In this case, `genesis.json` means that the `genesis.json` file is located in the same directory, which should be in the root directory of your node.

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

4. **Download Latest Snapshot:** Get the latest Core blockchain snapshot from [here](https://github.com/coredao-org/core-snapshots).

5. **Generating Consensus Key:** Set up the consensus key before running the validator node. To create a new consensus key, use the following command, which will create a new account and output an address which will be your validator's address (consensus address).

```bash
./build/bin/geth account new --datadir ./node
```

Make sure to follow these key considerations:
    * **Secure Your Keystore & Password:** Store your keystore file and password safely, as you’ll need them later.
    * **Backup Your Key:** Losing access to this key means losing control over your validator node.

You'll be prompted to enter a password. This password is essential for unlocking your validator, so store it securely. You can save your password in a text file by running the following command:

```bash
echo {your-password} > password.txt
```

6. **Start the Validator Node:**

```bash
./build/bin/geth --config ./testnet2/config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt --mine --allow-insecure-unlock --cache 8000 --networkid 1114
```

Let’s break down the flags used in this command:

- **`config ./config.toml`:** Specifies the configuration file for the node. Make sure you have the correct settings in `config.toml` for your environment.

- **`datadir ./node`:** Indicates the data directory for the node.

- **`unlock {your-validator-address}`:** Unlocks the validator account using the address generated in the previous step.

- **`miner.etherbase {your-validator-address}`:** Specifies the address to receive rewards and block rewards. Typically, this would be your validator's address.

- **`password password.txt`:** The password to unlock your validator account (ensure this file is kept secure).

- **`mine`:** Starts the mining process (block validation).

- **`allow-insecure-unlock`:** Allows the unlock process without additional security measures (use cautiously).

- **`cache 8000`:** Allocates a large cache (8GB in this case) to improve performance.

<!-- ```bash
## pls replace <datadir> with your local path to datadir.
./geth --config ./config.toml --datadir <datadir>  --cache 8000
```

```bash
./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```


### Start the Validator Node

Once the set up is completed, it’s time to start the validator node! 

#### Option 1: Start the Full Node with Options

```bash
./build/bin/geth --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

This command does the following:

- **`datadir ./node`:** Tells the node where to store its blockchain data.

- **`cache 8000`:** Allocates 8 GB of RAM to help the node run more efficiently.

- **`rpc.allow-unprotected-txs`:** Allows the node to send unprotected transactions (needed for validator actions).

- **`networkid 1116`:** Specifies which network the node should join. 1114 for Core Testnet2, 1115 for Core Tesnet and 1116 for Core Mainnet.

However, if you're having trouble finding peers (meaning the node can’t connect to other nodes), you can use the configuration file to help it start with bootstrap nodes. This file has some predefined settings to make the process easier.

#### Option 2: Start the Node with the Configuration File

```bash
./build/bin/geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

This command uses a configuration file (`config.toml`) that helps the node connect to peers more easily.

#### Option 3: Start the Node with the Consensus Key
If you plan to run a validator node, you'll need to set up the consensus key before running the node. Make sure to keep your keystore saved.

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
echo {your-password} > password.txt
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000
```

:::info
A bootstrap node is essentially a "helper" node used to kickstart your connection to the network, especially when your node is struggling to find peers. When you first start your node, it needs to connect with other nodes to sync up and start participating in the blockchain. This process is called peer discovery.

Without bootstrap nodes, your node might not be able to find any peers, especially if it's new and doesn't have any connections yet. Bootstrap nodes provide a list of known peers that your node can connect to initially. Once it connects to these peers, it can then start discovering other peers on its own.
::: -->

## Monitor Logs

Once your validator node is up and running, it’s important to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash
# Tail the logs in real-time
# This will show you the most recent log entries and continuously update the log display.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain indicating that it’s correctly receiving and processing blocks.

* **Imported new chain segment:** This means the node is successfully receiving new blocks from the network and adding them to the local blockchain.

* **number:** The block number (e.g., `1,596,730` is the block number for that entry).

* **hash:** The unique identifier (hash) for the block, like a fingerprint of the block data (e.g., `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

* **miner:** The address of the miner who mined that block.

* **blocks:** The number of blocks imported (usually `1` in these logs).

* **txs:** The number of transactions in the block (e.g., `1` tx or `2` txs).

* **mgas:** The gas used in the transactions within the block. Gas is the computational work needed to execute transactions (e.g., `0.021` means 0.021 million gas).

* **elapsed:** The time it took to import the block, in milliseconds (e.g., `3.003ms`).

* **mgasps:** The speed at which gas is being processed (in million gas per second).

* **triedirty:** The amount of dirty memory used (in this case, around `869.67 KiB`), which indicates how much memory is being used to store block data temporarily.

* **Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are essential to synchronize the blockchain with the network.

* **peercount:** The current number of peers the node is connected to (e.g., `2`).

* **tried:** The number of peers the node has tried to connect with (e.g., `12`).

* **static:** The number of fixed/static peers the node is configured to connect to (e.g., `2`).

