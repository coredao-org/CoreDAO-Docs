---
sidebar_label: Nodo Completo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Completos en Core

---

Un nodo completo de Core almacena todo el historial de la blockchain de Core, permitiendo que cualquiera verifique el estado de cualquier cuenta. Un nodo completo en Core puede tomar distintas formas:

- **Nodo completo normal**: Para uso privado.
- **Nodo completo validador**: Actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

A continuación se describen los pasos detallados para ejecutar **nodos completos normales** en la red Core.

## Requisitos del Sistema

Existen varios requisitos de sistema para configurar un nodo completo en Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Validador de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un Nodo Completo en Core realiza varias tareas que demandan recursos, como almacenar datos de la blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder a solicitudes de la red, según su configuración. A diferencia de los validadores, los nodos completos no producen bloques, en vez de eso, ayudan a propagar transacciones y bloques a través de la red. Cumplen un papel crucial en el mantenimiento de la integridad de los datos y el soporte de un entorno trustless. Para ejecutar Nodos Completos en Core, se recomiendan las siguientes especificaciones mínimas de hardware:

<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet', value: 'testnet2'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For Full Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms |
    | **CPU**            | 4 CPU cores                                                                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                  |


  </TabItem>

  <TabItem value="mainnet">
    For Full Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms  |
    | **CPU**            | 4 CPU cores                                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                   |
  </TabItem>
</Tabs>

## Construya y ejecute un nodo completo en Core

<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet', value: 'testnet2'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
 1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


 2. Download the latest node binary for Core Testnet from Core's GitHub [releases repo](https://github.com/coredao-org/core-chain/releases/latest). The node binary includes the testnet configuration files, make sure to use **testnet2** configurations. Download the latest snapshot for testnet from [here](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Note that the recommended method for syncing testnet nodes is to sync from the genesis block.


3. Write the genesis state locally by executing the following command from your project directory:


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


4. Our full node is ready, let's start running it! Run the following command to start the full node  directly:


    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```


    5\. As our full node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.
 </TabItem>

 <TabItem value="mainnet">

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


2. Download the node binary from the[ releases page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).


3. Write the genesis state locally by executing the following command from your project directory:


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


4. Our full node is ready, let's start running it! Run the following command to start the full node  directly:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

5. While the full node is running, we can monitor its logs to ensure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.
  </TabItem>
</Tabs>