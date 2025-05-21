---
sidebar_label: Exécution d'un Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Exécution de nœuds de validation sur Core

---

Ce guide vous guide à travers le processus de configuration d'un nœud validateur sur le réseau Core. Il couvre l'installation des dépendances système, la construction du logiciel de nœud Core, l'initialisation avec des données de snapshot et le démarrage de votre nœud validateur.

### Exigences système pour le Validator Node

Avant de commencer, assurez-vous que votre système répond aux spécifications matérielles et logicielles requises.

#### Plateformes de système d'exploitation prises en charge

. Actuellement, les plateformes de système d'exploitation prises en charge incluent Mac OS X et Linux.

#### Exigences matérielles

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Pour les nœuds de validation sur le réseau de test **Core Blockchain Testnet2**, les spécifications matérielles minimales suivantes sont recommandées :

    | Exigences.   | Détails                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 4 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                                        |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                |

  </TabItem>
  <TabItem value="testnet">
Pour les nœuds de validation sur le **Core Blockchain Testnet**, les spécifications matérielles minimales suivantes sont recommandées :

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

This will download and install the necessary dependencies and build the `geth` binary. The `geth` binary will be located at `./build/bin/geth`.

### Setting up the Node

There are 2 approaches to setup a validator node from scratch on the Core blockchain:

- **By Snapshot (Recommend):** download the [latest Core blockchain snapshot](https://github.com/coredao-org/core-snapshots) and sync the node based on it.
- **From Genesis (Not Recommend):** sync the whole Core blockchain data from the [genesis block](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
Syncing from the genesis block can take a significant amount of time. It is recommended to set up a Core node using the latest snapshot to speed up the process.
:::

#### Steps to Running Validator Node Using Snapshot

1. **Download the Latest Pre-Build Binaries:** Download the latest node binaries from the official [Core Releases Repository](https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** The pre-build binaries contains `genesis.json` and `config.toml` for the respective network you want to run the validator node. Ensure these files are correctly placed in your node’s configuration directory before proceeding with further setup.

3. **Initialize Genesis:** Write the genesis state locally by executing the following command from your project directory. Ensure that the relative path to the `genesis.json` file is correct. In this case, `genesis.json` means that the `genesis.json` file is located in the same directory, which should be in the root directory of your node.

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

4. **Download & Extract the Latest Snapshot:** Download and extract the latest Core blockchain snapshot from the official [Core Snapshot Repository](https://github.com/coredao-org/core-snapshots).

5. **Generating Consensus Key:** Set up the consensus key before running the validator node. To create a new consensus key, use the following command, which will create a new account and output an address which will be your validator's address (consensus address).

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
```

You'll be prompted to enter a password. This password is essential for unlocking your validator, so store it securely. You can save your password in a text file by running the following command:

```bash
echo {your-password} > password.txt
```

Make sure to follow these key considerations:
\* **Secure Your Keystore & Password:** Store your keystore file and password safely, as you’ll need them later.
\* **Backup Your Key:** Losing access to this key means losing control over your validator node.

6. **Start the Validator Node:**

Use the following command to start the validator node.

```bash
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000  --networkid {core-chain-id}
```

Let’s break down the flags used in this command:

- **`config ./config.toml`:** Specifies the configuration file for the node. Make sure you have the correct settings in `config.toml` for your environment.

- **`datadir ./node`:** Indicates the data directory for the node.

- **`unlock {your-validator-address}`:** Unlocks the validator account using the address generated in the previous step.

- **`miner.etherbase {your-validator-address}`:** Specifies the address to receive rewards and block rewards. Typically, this would be your validator's address.

- **`password password.txt`:** The password to unlock your validator account (ensure this file is kept secure).

- **`mine`:** Enables mining/validating (producing blocks) on the network. Essential for validator operation

- **`allow-insecure-unlock`:** Allows the unlock process without additional security measures (use cautiously).

- **`cache 8000`:** Allocates a large cache (8GB in this case) to improve performance.

- **`networkid`:** Specify the Core network chain id you intend to run the validator node (e.g., 1114 for Core Tesnet2)

#### Syncing from Genesis

If you prefer to sync your validator node from the genesis block instead of using a snapshot:

- Skip Step #4 ("Download and extract the latest snapshot") in the setup instructions.

- After completing Steps 1 (Download Binaries), 2 (Genesis/Config Files), and 3 (Initialize Genesis), continue to generate your consensus key as normal.

- Then start the validator node using the command below:

  ```bash
  geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 8000 --networkid {core-network-id}
  ```

⚠️ **Note:** Syncing from genesis can take a lot of time depending on system resources and network speed.

## Monitor Logs

Once your validator node is up and running, it’s important to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash
# Tail the logs in real-time
# This will show you the most recent log entries and continuously update the log display.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This means the node is successfully receiving new blocks from the network and adding them to the local blockchain.

- **number:** The block number (e.g., `1,596,730` is the block number for that entry).

- **hash:** The unique identifier (hash) for the block, like a fingerprint of the block data (e.g., `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** The address of the miner who mined that block.

- **blocks:** The number of blocks imported (usually `1` in these logs).

- **txs:** The number of transactions in the block (e.g., `1` tx or `2` txs).

- **mgas:** The gas used in the transactions within the block. Gas is the computational work needed to execute transactions (e.g., `0.021` means 0.021 million gas).

- **elapsed:** The time it took to import the block, in milliseconds (e.g., `3.003ms`).

- **mgasps:** The speed at which gas is being processed (in million gas per second).

- **triedirty:** The amount of dirty memory used (in this case, around `869.67 KiB`), which indicates how much memory is being used to store block data temporarily.

- **Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are essential to synchronize the blockchain with the network.

- **peercount:** The current number of peers the node is connected to (e.g., `2`).

- **tried:** The number of peers the node has tried to connect with (e.g., `12`).

- **static:** The number of fixed/static peers the node is configured to connect to (e.g., `2`).

