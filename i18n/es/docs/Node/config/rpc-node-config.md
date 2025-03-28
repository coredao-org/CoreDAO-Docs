---
sidebar_label: RPC Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RPC Nodes on Core

---

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo RPC en la red Core.

### Software

- **Operating System:** Currently, a Core Archive Node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- **Network Connectivity:** Stable internet connection with low latency and high availability.
- **Firewall Configuration:** To ensure your RPC Node can communicate with external applications and other nodes, you need to allow inbound HTTP traffic on port 8575, which is the default port for RPC communication. You can adjust this setting in the config.toml file if you prefer using a different port. Make sure that your firewall settings are properly configured to allow traffic on this port.

### Hardware

An RPC Node on Core acts as a gateway for applications, developers, and users to interact with the blockchain. It processes queries, submits transactions, and retrieves real-time blockchain data via Remote Procedure Calls (RPC). These nodes are essential for dApps, wallets, and analytics platforms to seamlessly access Core’s network. Following are the hardware requirements for RPC Node on Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For RPC Nodes on **Core Blockchain Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes   |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
```

  </TabItem>
  <TabItem value="testnet">
    For RPC Nodes on **Core Blockchain Testnet**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes   |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
```

  </TabItem>
  <TabItem value="mainnet">
    For RPC Nodes on **Core Blockchain Mainnet**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes  |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
```

  </TabItem>
</Tabs>

## Ejecutando el nodo RPC

### Habilitar el puerto de entrada HTTP

Si está ejecutando un nodo RPC, debe habilitar las reglas de entrada "HTTP" en el puerto **8575** en la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puede cambiar las configuraciones en `config.toml`.

### Construir y ejecutar

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo RPC, ejecutando su nodo completo RPC directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the node binary from the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash
NFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
INFO [07-18|14:57:20.724] Writing custom genesis block 
INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
INFO [07-18|14:57:20.729] Writing custom genesis block 
INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
```

4\. Nuestro nodo completo RPC está listo, ¡comencemos a ejecutarlo!

Si planea ejecutar un nodo RPC, puede ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo RPC
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. A medida que se ejecuta nuestro nodo completo RPC, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
