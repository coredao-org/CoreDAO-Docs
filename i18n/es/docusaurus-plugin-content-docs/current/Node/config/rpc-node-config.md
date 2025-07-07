---
sidebar_label: Nodo RPC
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos RPC en Core

---

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo RPC en la red Core.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Para asegurar que tu Nodo RPC pueda comunicarse con aplicaciones externas y otros nodos, debes permitir el tráfico HTTP entrante en el puerto 8575, que es el puerto predeterminado para la comunicación RPC. Puedes ajustar esta configuración en el archivo `config.toml` si prefieres usar un puerto diferente. Asegúrate de que la configuración de tu firewall esté correctamente ajustada para permitir tráfico en este puerto.

### Hardware

Los nodos RPC en Core actúan como una puerta de enlace para que las aplicaciones, desarrolladores y usuarios interactúen con la blockchain. Procesa consultas, envía transacciones y recupera datos en tiempo real de la blockchain mediante Llamadas a Procedimientos Remotos (RPC). Estos nodos son esenciales para que las dApps, wallets y plataformas de analítica accedan a la red de Core sin fricciones. A continuación, se indican los requisitos de hardware para un nodo RPC en Core.


<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet', value: 'testnet2'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For RPC Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes   |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps               |
  </TabItem>

  <TabItem value="mainnet">
    For RPC Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 16 CPU cores |
    | **RAM**            | 32 Gigabytes  |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps                 |
  </TabItem>
</Tabs>

## Ejecutando el nodo RPC

### Habilitar el puerto de entrada HTTP

Si está ejecutando un nodo RPC, debe habilitar las reglas de entrada "HTTP" en el puerto **8575** en la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puede cambiar las configuraciones en `config.toml`.

### Construir y ejecutar


1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your RPC full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


2\. Download the node binary from the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).


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


4\. Now that the RPC node setup is complete, its time to run it. 


To run an RPC node, execute the following `geth` command:


```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. While the RPC full node is running, you can monitor its logs to make sure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.