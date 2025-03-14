---
sidebar_label: Running a Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

# Running Validator Nodes on Core
---

This guide will walk you through setting up a Core Validator Node. The guide covers all the essential steps, including installing dependencies, building the Core node software, and launching it successfully.

### System Requirements

There are several system requirements for setting up a Validator Node on the Core network. Please refer [here](../config/validator-node-config.md) and ensure you have tha required hardware and software requirements before running a validator node. Furthermore, make sure to register your validator node correctly by referring to detailed guideline [here](./validator-register.md). 

### Update Your System
Start by updating your system to ensure all the packages are up-to-date. Run the following commands:

```bash
sudo apt update
sudo apt upgrade -y
```

### Install Required Dependencies
* To build the required codebase for Core Validator, you'll need Git, GCC, Go, and other tools. Install these with the following command:

```bash
sudo apt install -y git gcc make curl lz4 golang unzip
```

* Verify the installations: Run the following command to check the version information for both GCC and Go.

```bash
gcc --version
go version
```

* You should see version information for both GCC and Go.

```bash
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
go version go1.22.2 linux/amd64
```

### Clone the Core Respository 

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

This will download and install the necessary dependencies and build the geth binary. You should see output similar to this:

```bash
>>> /usr/lib/go-1.22/bin/go build -ldflags "-X github.com/ethereum/go-ethereum/internal/version.gitCommit=afb8bd3ffe652e90a59af26db119bd988a03dd8f -X github.com/ethereum/go-ethereum/internal/version.gitDate=20250120 ..." -o /home/harystyles/core-chain/build/bin/geth ./cmd/geth
Done building.
Run "./build/bin/geth" to launch geth.
```

### Download and Extract the Blockchain Snapshot
For optimal performance and faster synchronization, it is _recommended_ to use the snapshot sync method. This approach allows nodes to start from a fully synced state, significantly reducing the time required to become operational. Unlike full sync from the genesis block, which is time-consuming process, snapshot sync enables a more efficient and streamlined setup.

#### Getting the Latest Snapshots
You can obtain the latest snapshots from the official [Core Snapshot Repository](https://github.com/coredao-org/core-snapshots). 

#### Create Data Directory

Now, create a directory where your node data will reside if it is not created by default.

```bash
# Create the node directory
mkdir -p ./node
```

#### Decompress and Extract the Snapshot

Use `lz4` command to decompress and `tar` command to extract the snapshot into the `./node` directory. This will populate the directory with the necessary blockchain data (chaindata).

###  Initializing the Genesis Block
The next step in setting up your node is to initialize the genesis block for the Core Network. The `genesis.json` file defines the first block of the blockchain, representing the initial state of the network. Proper initialization ensures that your node starts with the correct base state, aligning with the Core Network’s protocol.

#### Obtaining the Genesis and Configuration Files
You can find the required `genesis.json` and `config.toml` in the node binaries available on the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases/latest). Ensure these files are correctly placed in your node’s configuration directory before proceeding with further setup.

#### Initialize Genesis Block

To initialize your node with the genesis block, run the following command. This command sets the initial state of the blockchain in your node directory.

```bash
# Initialize the node with the genesis block
geth --datadir node init genesis.json
```

:::info
Ensure that the path to the `genesis.json` file is correct. In this case, `genesis.json` means that the `genesis.json` file is located in the same directory, which should be in the root directory (core-chain) of your node.
:::

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
:::

## Monitor Logs

Once your Validator Node is up and running, it’s important to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

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

**Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are essential to synchronize the blockchain with the network.

* **peercount:** The current number of peers the node is connected to (e.g., `2`).

* **tried:** The number of peers the node has tried to connect with (e.g., `12`).

* **static:** The number of fixed/static peers the node is configured to connect to (e.g., `2`).

To participate in consensus and block creation, you need to set up a validator node. Validators are responsible for producing new blocks on the Core blockchain by validating transactions and adding them to the blockchain.