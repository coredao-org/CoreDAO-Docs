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

There are several system requirements, both software and hardware, for setting up an RPC node on the Core network.

### Software

- **Operating System:** Currently, _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later) are supported.
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Firewall Configuration:** To ensure your RPC node can communicate with external applications and other nodes, you need to allow inbound HTTP traffic on port 8575, which is the default port for RPC communication. You can adjust this setting in the `config.toml` file if you prefer using a different port. Make sure that your firewall settings are correctly configured to allow traffic on this port.

### Hardware

RPC Nodes on Core act as a gateway for applications, developers, and users to interact with the blockchain. Procesa consultas, envía transacciones y recupera datos en tiempo real de la blockchain mediante Llamadas a Procedimientos Remotos (RPC). These nodes are essential for dApps, wallets, and analytics platforms to access Core’s network seamlessly. The following are the hardware requirements for the RPC node on Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For RPC Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes   |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps               |
```

  </TabItem>

  <TabItem value="mainnet">
    For RPC Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 16 CPU cores |
| **RAM**            | 32 Gigabytes  |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps                 |
```

  </TabItem>
</Tabs>

## Ejecutando el nodo RPC

### Habilitar el puerto de entrada HTTP

Si está ejecutando un nodo RPC, debe habilitar las reglas de entrada "HTTP" en el puerto **8575** en la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puede cambiar las configuraciones en `config.toml`.

### Construir y ejecutar

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your RPC full node directly from our blockchain codebase. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario para nodo desde la [página de lanzamientos de Core] (https://github.com/coredao-org/core-chain/releases) del repositorio core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

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
## iniciar un nodo RPC
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. While the RPC full node is running, you can monitor its logs to make sure that everything is operating correctly. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.