---
sidebar_label: Nodo Snapshot
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Snapshot en Core

---

Snapshots are essential for a network to ensure that nodes can sync up to the latest state of the network as quickly as possible. Before nodes can be used, they must synchronize with the current state of the network. By starting from a recent snapshot, the syncing process is

## Requerimientos del Systema

There are several system requirements, both software and hardware, for setting up a Snapshot node on the Core network.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

A Snapshot node on Core provides periodic blockchain state snapshots, enabling faster node synchronization and reducing storage requirements. These nodes help new validators and RPC nodes quickly catch up with the latest blockchain state without needing to process the entire history. Los nodos snapshot mejoran la eficiencia y accesibilidad de la red. On the Core network, Snapshot nodes also act as the archive nodes, storing the entire blockchain data. The following are the minimum hardware recommendations for running Snapshot node on Core. Estas especificaciones están diseñadas para manejar los procesos de prueba y validación, garantizando al mismo tiempo un almacenamiento de datos eficiente y una sincronización rápida.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Snapshot Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 megabytes por segundo.
```

  </TabItem>
  <TabItem value="testnet">
    For Snapshot Nodes on **Core testnet2**, following minimum hardware specifications are recommended:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                |
```

  </TabItem>
  <TabItem value="mainnet">
    For Snapshot Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                |
```

  </TabItem>
</Tabs>

## Instantáneas de la red central

Puede obtener las instantáneas más recientes desde [aquí](https://github.com/coredao-org/core-snapshots).

## Sincronización de nodos mediante instantáneas en la red central

On the Core network, a node can be synced to the latest state in several ways. This document provides a step-by-step walkthrough of the node syncing process on the Core network using snapshots.

### Descargar binarios precompilados

Download the pre-build binaries from the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases/latest) or follow the instructions below

##### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

##### MacOs

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

### Descargue los archivos de configuración

Download `genesis.json` and `config.toml` by running the following commands:

```bash
```

### Configuración de pares

- **Mainnet**: the `config.toml` file from the latest release ships configured with the information about the `Bootstrap nodes` and `Static nodes` as shown below:

```yaml
```

### Descargar instantánea

Download the latest chain data snapshot from [here](https://github.com/coredao-org/core-snapshots).

### Iniciar el nodo

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Ensure you use the version of geth you downloaded with wget above, and not your local installation of geth, which may be an incorrect version.
:::

:::tip
It is recommended to run a fast node, which is a full node with the `--tries-verify-mode none` flag set, if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Monitorear el estado del nodo

Puede monitorear los registros para conocer el estado del nodo. By default, the logs are stored at `./node/logs/core.log`.

## Modo de sincronización

There are two sync modes for running a full node: **snap** and **full**, which can be specified by the flag **--syncmode**.

- The **snap** sync mode is used for initial sync, which downloads the latest states rather than executing the blocks from the genesis. Once the initial sync is complete, it will automatically switch to full sync.

- The **full** sync mode can also be used for an initial sync, which will execute all blocks since the genesis block. Pero **no se recomienda**, ya que la cantidad de datos históricos es demasiado grande. Instead, you can download a snapshot from the [official repo](https://github.com/coredao-org/core-snapshots) and start a full sync from the snapshot.

- Si no se proporciona la marca **--syncmode**, el modo de sincronización predeterminado dependerá del estado de la carpeta de datos. Será el modo **instantáneo** si sincroniza desde génesis o el modo **completo** si comienza desde una instantánea.