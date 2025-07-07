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

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo Archive en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un nodo Archive de Core es compatible _únicamente_ con sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o versiones posteriores).
- **Conectividad de Red:** Conexión a Internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos.

### Hardware

Un nodo Archive en Core almacena todo el historial de la blockchain, garantizando la disponibilidad e integridad de los datos para los participantes de la red. Soporta la consulta de transacciones pasadas, la verificación de datos históricos y mejora el análisis de la blockchain. Aunque no son necesarios para el consenso, los nodos archivo juegan un papel crucial en el mantenimiento de la transparencia y en el apoyo a las aplicaciones descentralizadas. A continuación, se presentan los requisitos mínimos de hardware recomendados para ejecutar un nodo Archive en Core:

<Tabs
  defaultValue="testnetTwo"
  values={[
    {label: 'Testnet2', value: 'testnetTwo'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnetTwo">
    For Archive Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
    | **CPU**            | 8 Core CPU                                                                                          |
    | **RAM**            | 32 Gigabytes                                                                                        |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
  </TabItem>

  <TabItem value="mainnet">
    For Archive Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
    | **CPU**            | 8 Core CPU                                                                                          |
    | **RAM**            | 32 Gigabytes                                                                                        |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
  </TabItem>
</Tabs>

## Running Core Archive Node
1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


2. Download the latest node binary from [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). The node binary includes the relevant mainnet and testnet configuration files.


3. Write the genesis state locally by executing the following command from your project directory:


```bash
geth --datadir node init genesis.json
```


4. Now that the setup for the archive node is completed, let's start running it! Execute the following `geth` command to run the archive node:


```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```


5. While the archive node is running, you can monitor its logs to ensure that everything is operating correctly. The log file is located at `./node/logs/core.log` by default, but can be changed to another location if desired.





