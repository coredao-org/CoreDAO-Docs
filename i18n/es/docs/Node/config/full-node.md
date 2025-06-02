---
sidebar_label: Nodo Completo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Completos en Core

Un nodo completo de Core almacena el historial completo de la cadena de bloques de Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo de Core puede adoptar muchas formas:

- **Nodo completo normal**: para uso privado.
- **Nodo completo validador**: actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

A continuación se detallan los pasos para ejecutar **Nodos Completos Normales** en la red Core.

## Requisitos del sistema

Existen varios requisitos de sistema para configurar un nodo completo en Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Validador de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un Nodo Completo en Core realiza varias tareas que demandan recursos, como almacenar datos de la blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder a solicitudes de la red, según su configuración. A diferencia de los validadores, los nodos completos no producen bloques, pero ayudan a propagar transacciones y bloques a través de la red. Cumplen un papel crucial en el mantenimiento de la integridad de los datos y el soporte de un entorno trustless (sin necesidad de confianza). Cumplen un papel crucial en el mantenimiento de la integridad de los datos y el soporte de un entorno trustless (sin necesidad de confianza):

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para Nodos Completos en **Core Blockchain Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requisitos | Detalles                                                                                                    |
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Almacenamiento **        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, 250MB/S de rendimiento, latencia de lectura <1ms. |
    | **CPU**            | Se recomienda un mínimo de 4 núcleos de CPU.                                                        |
    | **RAM**            | 8 Gigabytes                                                                                        |
    | **Internet** | Una conexión a Internet de banda ancha con velocidades de carga y descarga de 10 megabytes por segundo.   |

  </TabItem>
  <TabItem value="testnet">
    Para Nodos Completos en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requisito | Detalles                                                                                                     |
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Almacenamiento** | 1 TB de espacio libre en disco                                                  |
    | **CPU**            | CPU de 4 núcleos                                                                                    |
    | **RAM**            | 8 Gigabytes                                                                                         |
    | **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                |

  </TabItem>
  <TabItem value="mainnet">
    Para Nodos Completos en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requisitos     | Detalles                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Almacenamiento** | 1 TB de espacio libre en disco                                                                          |
    | **CPU**            | CPU de 4 núcleos                                                                                        |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                    |

  </TabItem>
</Tabs>

## Construya y ejecute un nodo completo en Core

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">

1. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, ejecutando su nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descargue el binario para nodo más reciente para Core Testnet desde GitHub de Core [repositorio de lanzamientos] (https://github.com/coredao-org/core-chain/releases/latest). El binario para el nodo incluye los archivos de configuración de testnet relevantes. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). _Tenga en cuenta que el método recomendado para sincronizar el nodo testnet es sincronizar desde el bloque génesis_.

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

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

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Corre el siguiente comando para iniciar el nodo completo directamente:

   ```bash
   ## start a full node
   geth --config ./config.toml --datadir ./node  --cache 8000
   ```

 5\. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.

  </TabItem>

 <TabItem value="testnet">
1. Recomendamos utilizar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, directamente desde el codebase de nuestra blockchain. Las instrucciones para construir el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descargue el binario para nodo más reciente para Core Testnet desde el GitHub de Core [repositorio de lanzamientos] (https://github.com/coredao-org/core-chain/releases/latest). El binario para el nodo incluye los archivos de configuración de testnet relevantes. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). _Tenga en cuenta que el método recomendado para sincronizar el nodo testnet es sincronizar desde el bloque génesis_.

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

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

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Corre el siguiente comando para iniciar el nodo completo directamente:

   ```bash
   ## start a full node
   geth --config ./config.toml --datadir ./node  --cache 8000
   ```

5. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.

  </TabItem>
 <TabItem value="mainnet">
1. Recomendamos utilizar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, directamente desde el codebase de nuestra blockchain. Las instrucciones para construir el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descargue el binario del nodo desde la [página de lanzamientos] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

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

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Corre el siguiente comando para iniciar el nodo completo directamente:

   ```bash
   ## start a full node
   geth --config ./config.toml --datadir ./node  --cache 8000
   ```

5. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
   </TabItem>

</Tabs>


