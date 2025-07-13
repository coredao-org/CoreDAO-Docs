---
sidebar_label: Configurar Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuración de Nodos Validador en Core

---

Esta guía te lleva paso a paso por el proceso de configuración de un nodo validador en la red Core. Cubre la instalación de dependencias del sistema, la compilación del software del nodo Core, la inicialización con datos de snapshot y el inicio de tu nodo validador.

### Requisitos del Sistema para Nodo Validador

Antes de comenzar, asegúrate de que tu sistema cumpla con las especificaciones de hardware y software requeridas.

#### Sistemas Operativos Compatibles

Actualmente, los sistemas operativos compatibles incluyen **macOS** y **Linux**.

#### Requisitos de Hardware

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos validador en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>

  <TabItem value="mainnet">
Para los nodos Validadores en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>
</Tabs>

### Clona el repositorio de Core Blockchain

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo directamente desde el código base de Core blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Instala las Dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Ejecuta el siguiente comando para instalar las dependencias:

```bash
make geth
```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario de `geth` se ubicará en `./build/bin/geth`.

### Configuración del Nodo

Hay dos formas de configurar un nodo validador desde cero en la blockchain de Core:

- **Mediante Snapshot (Recomendado):** descarga el [snapshot más reciente de la blockchain de Core](https://github.com/coredao-org/core-snapshots) y sincroniza el nodo a partir de él.
- **Desde Genesis (No Recomendado):** sincronizar toda la información de la blockchain de Core desde el [bloque génesis](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La sincronización desde el bloque génesis puede tomar una cantidad significativa de tiempo. Se recomienda configurar un nodo de Core utilizando el snapshot más reciente para acelerar el proceso.
:::

#### Pasos para ejecutar un nodo validador usando un snapshot

1. **Download the Latest Pre-Build Binaries:** Descarga los últimos binarios del nodo desde el [repositorio oficial de Core Releases](https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** Los binarios precompilados contienen los archivos `genesis.json` y `config.toml` correspondientes a la red en la que deseas ejecutar el nodo validador. Asegúrate de que estos archivos estén correctamente ubicados en el directorio de configuración de tu nodo antes de continuar con la configuración.

3. **Inicializa Genesis:** Escribe el estado génesis localmente ejecutando el siguiente comando desde el directorio de tu proyecto. Asegúrate de que la ruta relativa al archivo `genesis.json` sea correcta. En este caso, `genesis.json` significa que el archivo `genesis.json` está ubicado en el mismo directorio, que debería ser el directorio raíz de tu nodo.

```bash
geth --datadir node init genesis.json
```

Deberías ver la siguiente salida:

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

4. **Descargar y extraer el snapshot más reciente:** Descarga y extrae el snapshot más reciente de la blockchain de Core desde el [repositorio oficial de snapshots de Core](https://github.com/coredao-org/core-snapshots).

5. **Generar la clave de consenso:** Configura la clave de consenso antes de ejecutar el nodo validador. Para crear una nueva clave de consenso, usa el siguiente comando. Este comando creará una nueva cuenta y mostrará una dirección que será la dirección de tu validador (dirección de consenso).

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

- **`mine`:** Enables mining and validating (producing blocks) on the network. Essential for validator operation

- **`allow-insecure-unlock`:** Enables the unlock process without additional security measures (use with caution).

- **`cache 8000`:** Allocates a large cache (8GB in this case) to improve performance.

- **`networkid`:** Specify the Core network chain ID you intend to run the validator node (e.g., 1114 for Core Tesnet2)

#### Syncing from Genesis

If you prefer to sync your validator node from the genesis block instead of using a snapshot:

- Skip Step #4 ("Download and extract the latest snapshot") in the setup instructions.

- After completing Steps 1 (Download Binaries), 2 (Genesis/Config Files), and 3 (Initialize Genesis), continue to generate your consensus key as usual.

- Then start the validator node using the command below:

  ```bash
  geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 8000 --networkid {core-network-id}
  ```

⚠️ **Note:** Syncing from genesis can take a lot of time, depending on system resources and network speed.

## Monitor Logs

Once your validator node is up and running, it’s essential to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash
# Tail the logs in real-time
# This will display the most recent log entries and update the log display continuously.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain, indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This indicates that the node is successfully receiving new blocks from the network and adding them to its local blockchain.

- **number:** The block number (e.g., `1,596,730` is the block number for that entry).

- **hash:** The unique identifier (hash) for the block, like a fingerprint of the block data (e.g., `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** The address of the miner who mined that block.

- **blocks:** The number of blocks imported (usually `1` in these logs).

- **txs:** The number of transactions in the block (e.g., `1` tx or `2` txs).

- **mgas:** The gas used in the transactions within the block. Gas refers to the computational work required to execute transactions (e.g., `0.021` means 0.021 million gas units).

- **elapsed:** The time it took to import the block, in milliseconds (e.g., `3.003ms`).

- **mgasps:** The speed at which gas is being processed (in million gas per second).

- **triedirty:** The amount of dirty memory used (in this case, around `869.67 KiB`), which indicates how much memory is being used to store block data temporarily.

- **Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are crucial for synchronizing the blockchain with the network.

- **peercount:** The current number of peers the node is connected to (e.g., `2`).

- **tried:** The number of peers the node has tried to connect with (e.g., `12`).

- **static:** The number of fixed/static peers the node is configured to connect to (e.g., `2`).