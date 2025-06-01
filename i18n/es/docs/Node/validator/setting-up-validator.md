---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---



# Configuración de Nodos Validadores en Core

---

Esta guía te guía paso a paso en el proceso de configurar un nodo validador en la Red de Core. Cubre la instalación de las dependencias del sistema, la compilación del software del nodo Core, la inicialización con snapshot data y el inicio de tu nodo validador.

### Requisitos del Sistema para Nodo Validador

Antes de comenzar, asegúrate de que tu sistema cumpla con las especificaciones de hardware y software requeridas.

#### Sistemas Operativos Compatibles

Actualmente, los sistemas operativos compatibles incluyen Mac OS X y Linux.

#### Hardware Requirements

<Tabs defaultValue="testnet2" values={[ {label: 'Testnet2', value: 'testnet2'}, {label: 'Testnet', value: 'testnet'}, {label: 'Mainnet', value: 'mainnet'}, ]}> Para nodos validador en **Core Blockchain Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
  <TabItem value="testnet">
Para nodos validador en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
  <TabItem value="mainnet">
Para nodos validador en **Core Blockchain Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
</Tabs>

### Clonar el Codebase de Core Blockchain

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo directamente desde el código base de Core blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash

```

#### Instalar Dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Ejecuta el siguiente comando para instalar las dependencias:

```bash

```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario `geth` estará ubicado en `./build/bin/geth`.

### Configuración del Nodo

Existen 2 métodos para configurar un nodo validador desde cero en la blockchain de Core:

- **Mediante Snapshot (Recomendado):** descargar el [snapshot más reciente de la blockchain de Core](https://github.com/coredao-org/core-snapshots) y sincronizar el nodo con base en este.
- **From Genesis (Not Recommend):** sync the whole Core blockchain data from the [genesis block](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
Syncing from the genesis block can take a significant amount of time. It is recommended to set up a Core node using the latest snapshot to speed up the process.
:::

#### Steps to Running Validator Node Using Snapshot

1. **Download the Latest Pre-Build Binaries:** Download the latest node binaries from the official [Core Releases Repository](https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** The pre-build binaries contains `genesis.json` and `config.toml` for the respective network you want to run the validator node. Ensure these files are correctly placed in your node’s configuration directory before proceeding with further setup.

3. **Initialize Genesis:** Write the genesis state locally by executing the following command from your project directory. Ensure that the relative path to the `genesis.json` file is correct. In this case, `genesis.json` means that the `genesis.json` file is located in the same directory, which should be in the root directory of your node.

```bash

```

You should see the following output:

```bash

```

4. **Download & Extract the Latest Snapshot:** Download and extract the latest Core blockchain snapshot from the official [Core Snapshot Repository](https://github.com/coredao-org/core-snapshots).

5. **Generating Consensus Key:** Set up the consensus key before running the validator node. To create a new consensus key, use the following command, which will create a new account and output an address which will be your validator's address (consensus address).

```bash

```

You'll be prompted to enter a password. This password is essential for unlocking your validator, so store it securely. You can save your password in a text file by running the following command:

```bash

```

Make sure to follow these key considerations:
\* **Secure Your Keystore & Password:** Store your keystore file and password safely, as you’ll need them later.
\* **Backup Your Key:** Losing access to this key means losing control over your validator node.

6. **Start the Validator Node:**

Use the following command to start the validator node.

```bash

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

  ```

⚠️ **Note:** Syncing from genesis can take a lot of time depending on system resources and network speed.

## Monitor Logs

Once your validator node is up and running, it’s important to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash

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

