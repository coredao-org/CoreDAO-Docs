---
sidebar_label: Nodo Archivo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Archivo en Core

---

Los nodos de archivo en la red Core desempeñan un papel crucial en el mantenimiento del estado histórico completo de la red. Estos nodos son versiones especializadas de nodos completos con capacidades mejoradas diseñadas para almacenar y brindar acceso al historial completo de todas las transacciones y estados desde el inicio del Core.

## Requisitos del sistema

There are several system requirements, both software and hardware, for setting up an Archive node on the Core network.

### Software

- **Operating System:** Currently, a Core Archive node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- **Network Connectivity:** Stable internet connection with low latency and high availability.
- **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes.

### Hardware

An Archive node on Core stores the entire blockchain history, ensuring data availability and integrity for network participants. Soporta la consulta de transacciones pasadas, la verificación de datos históricos y mejora el análisis de la blockchain. Aunque no son necesarios para el consenso, los nodos archivo juegan un papel crucial en el mantenimiento de la transparencia y en el apoyo a las aplicaciones descentralizadas. The following are the hardware requirements for running the Archive node on Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
For Archive Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>

  <TabItem value="mainnet">
    For Archive Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
</Tabs>

## Ejecución del nodo de archivo principal

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Download the latest node binary from [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet.

3. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

4. Now that the setup for the archive node is completed, let's start running it! Execute the following `geth` command to run the archive node:

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```

5. While the archive node is running, you can monitor its logs to ensure that everything is operating correctly. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.



