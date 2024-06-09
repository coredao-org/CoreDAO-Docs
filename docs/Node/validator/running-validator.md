---
sidebar_label: Running Validator Nodes
hide_table_of_contents: false
sidebar_position: 2
---

# Running Validator Nodes
---

## System Requirements

There are several system requirements for setting up a Validator Node on the Core network. Please refer [here](../config/validator-node-config.md) and ensure you have tha required hardware and software requirements before running a validator node. Furthermore, make sure to register your validator node correctly by referring to detailed guideline [here](./validator-register.md). 

## Build and Run

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your validator node, i.e., running your validator node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

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

4\. Our validator node is ready, let's start running it!

If you plan to run a validator node, you'll need to set up the consensus key before running the node. Make sure to keep your keystore saved.

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
echo {your-password} > password.txt
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000
```

5\. As our validator node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.
