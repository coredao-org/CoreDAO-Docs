---
sidebar_label: Archive Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Archive Nodes on Core

---

Los nodos de archivo en la red Core desempeñan un papel crucial en el mantenimiento del estado histórico completo de la red. Estos nodos son versiones especializadas de nodos completos con capacidades mejoradas diseñadas para almacenar y brindar acceso al historial completo de todas las transacciones y estados desde el inicio del Core.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo de archivo en la red central.

### Software

- **Operating System:** Currently, a Core Archive Node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).

- **Network Connectivity:** Stable internet connection with low latency and high availability

- **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes

### Hardware

An Archive Node on Core stores the entire blockchain history, ensuring data availability and integrity for network participants. It supports querying past transactions, verifying historical data, and enhancing blockchain analytics. While not required for consensus, archive nodes play a crucial role in maintaining transparency and supporting decentralized applications. Following are the hardware requirements for running Archieve Node on Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
For Archive Nodes on **Core Blockchain Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1TB. SSDs are recommended because of their faster read and write speeds, which are critical for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
  <TabItem value="testnet">
    For Archive Nodes on **Core Blockchain Testnet**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 2TB. SSDs are recommended because of their faster read and write speeds, which are critical for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
  <TabItem value="mainnet">
    For Archive Nodes on **Core Blockchain Mainnet**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4TB. SSDs are recommended because of their faster read and write speeds, which are critical for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
</Tabs>

## Ejecución del nodo de archivo principal

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, ejecutando su nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the latest node binary for from [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet.

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

4\. Nuestro nodo completo/de archivo está listo, ¡comencemos a ejecutarlo! Puedes ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo de archivogeth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full 
```

5\. A medida que se ejecuta nuestro nodo de archivo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
