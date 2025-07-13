---
sidebar_label: Nodo Completo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Completos en Core

---

Un nodo completo de Core almacena todo el historial de la blockchain de Core, lo que permite a cualquier persona verificar el estado de cualquier cuenta. Un nodo completo en Core puede adoptar distintas formas:

- **Nodo completo normal**: para uso privado.
- **Nodo validador completo**: actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: proporciona servicios RPC y responde a solicitudes HTTP.

A continuación se presentan los pasos detallados para ejecutar **Nodos Completos Normales** en la red Core.

## Requisitos del Sistema

Existen varios requisitos para configurar un nodo completo en Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Validador de Core es compatible _únicamente_ con sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un nodo completo en Core realiza varias tareas que demandan recursos, como almacenar datos de la blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder a solicitudes de la red, según su configuración. A diferencia de los validadores, los nodos completos no producen bloques, ellos ayudan a propagar transacciones y bloques a través de la red. Cumplen un papel crucial en el mantenimiento de la integridad de los datos y el soporte de un entorno trustless. Para ejecutar Nodos Completos en Core, se recomiendan las siguientes especificaciones mínimas de hardware:

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos completos en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms |
    | **CPU**            | 4 CPU cores                                                                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                  |

  </TabItem>

  <TabItem value="mainnet">
Para los Nodos Completos en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms  |
    | **CPU**            | 4 CPU cores                                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 5 Mbps                                   |

  </TabItem>
</Tabs>

## Construir y Ejecutar un Nodo Completo en Core

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

1. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde el código base de la blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descarga el binario más reciente del nodo para Core Testnet desde el [repositorio de versiones](https://github.com/coredao-org/core-chain/releases/latest) en GitHub de Core. El binario del nodo incluye los archivos de configuración para testnet; asegúrate de utilizar las configuraciones correspondientes a **testnet2**. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Tenga en cuenta que el método recomendado para sincronizar los nodos en testnet es sincronizar desde el bloque génesis.

3. Escribe el estado génesis localmente ejecutando el siguiente comando desde tu directorio de proyecto:

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

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Corre el siguiente comando para iniciar el nodo completo directamente:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

  5\. Mientras nuestro nodo completo se ejecuta, podemos monitorear sus logs para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra, por defecto, en `/node/logs/core.log`, aunque puede cambiarse a otra ubicación si se desea.

   </TabItem>

 <TabItem value="mainnet">

1. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde el código base de la blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descargue el binario del nodo desde la [página de lanzamientos] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración correspondientes para mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3. Escribe el estado génesis localmente ejecutando el siguiente comando desde tu directorio de proyecto:

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

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Corre el siguiente comando para iniciar el nodo completo directamente:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

5. Mientras el nodo completo esté en ejecución, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de log se encuentra, por defecto, en `/node/logs/core.log`, aunque puede cambiarse a otra ubicación si así se desea.
    </TabItem>

</Tabs>