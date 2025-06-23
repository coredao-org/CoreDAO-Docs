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

- **Operating System:** Currently, _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later)are supported.
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
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)


unzip mainnet.zip
```

### Configuración de pares

- **Mainnet**: the `config.toml` file from the latest release ships configured with the information about the `Bootstrap nodes` and `Static nodes` as shown below:

```yaml
BootstrapNodes =
["enode://6334cdde2728b17486e4930c29e85128694faf118c23f559c7502e1cb42dd90a54f785c80c6a493d7d6f5ed23f3c9cf75e0392b024e45f7eadc81a84544a45ff@seed4.coredao.org:0?discport=35022",
"enode://20b605d5ee978c22bfb9ed208a40f2876d3dfafb1c60a6427c4db28e516520ee610cbc2a1c0ee05dd08578a041dc9070d92cf888422ed0869d0666b5103292b4@seed2.coredao.org:0?discport=35022",
"enode://04ffc724b82e2c52df47e2439a30ca4c0f7aca5ce270f6c6bcdf539581ce2ae4965afd5c5fe19106cd528ed6f379c68687a41310054ee751a73880b2c73e85d8@seed3.coredao.org:0?discport=35022",
"enode://e9a218f70debcb6a423d68f287c972c717606a70bfed278c2f7a876493d37bc535b05127abddeeca21941fc61497a6ca13387466c75a070050862ca6da11b0ca@seed1.coredao.org:0?discport=35022"]


StaticNodes =
["enode://8c60a7445dfff047051aa686d621e8ff3fad4623ebd60aea3b8a9b5285945ff0bb05540cc215bcb0ae3fb07b6c368605ddeebeb23b282ffb2ae777d8a73155ec@18.230.84.232:35021",
"enode://af5bb3eb4278885d98dfdb994a283cd1eafec7f3cf53b13325a484a71e02613a2d724314a2d5bf2ea3b33adb0d1ad7d1c5b9e23c8d2959453a55bde5f02c762f@35.72.191.164:35021",
"enode://40811f3281241c68555179e40654971ec01b1849899e296c0852e5dfed70f3d17f776e90dced50e94cc71699e2b010eec58047ce91d07fa7a3520220cf3ce22b@13.39.140.139:35021",
"enode://ee253be3c7c2ccdd4611d16975733ceb2f41f61a04672756fa4850a0b85419ca5e07ceb5a6f1ac43318b136c8995b9160e6de0c6b4bc2c9325797c11275888e6@18.221.135.3:35021",
"enode://71f4b875a8cec01fe9f01974a682ef846ab8cbe0c23518b2a94e38eef0db829488502122b19c94d595521364bc4550639b58c0332d3942447dfd65707fc80bc0@13.214.98.126:35021"]
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