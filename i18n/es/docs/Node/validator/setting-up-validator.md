---
sidebar_label: Configurar Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuración de Nodos Validador en Core

---

Esta guía te lleva paso a paso por el proceso de configuración de un nodo validador en la red Core. Cubre la instalación de dependencias del sistema, la compilación del software del nodo Core, la inicialización con datos de snapshot y el inicio de tu nodo validador.

### Requisitos del Sistema para Nodo Validador

Antes de comenzar, asegúrate de que tu sistema cumpla con las especificaciones de hardware y software requeridas.

#### Sistemas Operativos Compatibles

Actualmente, los sistemas operativos compatibles incluyen **macOS** y **Linux**.

#### Requisitos de Hardware

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos validador en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>

  <TabItem value="mainnet">
Para los nodos Validadores en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>
</Tabs>

### Clona el repositorio de Core Blockchain

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo directamente desde el código base de Core blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Instala las Dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Ejecuta el siguiente comando para instalar las dependencias:

```bash
make geth
```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario de `geth` se ubicará en `./build/bin/geth`.

### Configuración del Nodo

Hay dos formas de configurar un nodo validador desde cero en la blockchain de Core:

- **Mediante Snapshot (Recomendado):** descarga el [snapshot más reciente de la blockchain de Core](https://github.com/coredao-org/core-snapshots) y sincroniza el nodo a partir de él.
- **Desde Genesis (No Recomendado):** sincronizar toda la información de la blockchain de Core desde el [bloque génesis](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La sincronización desde el bloque génesis puede tomar una cantidad significativa de tiempo. Se recomienda configurar un nodo de Core utilizando el snapshot más reciente para acelerar el proceso.
:::

#### Pasos para ejecutar un nodo validador usando un snapshot

1. **Download the Latest Pre-Build Binaries:** Descarga los últimos binarios del nodo desde el [repositorio oficial de Core Releases](https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** Los binarios precompilados contienen los archivos `genesis.json` y `config.toml` correspondientes a la red en la que deseas ejecutar el nodo validador. Asegúrate de que estos archivos estén correctamente ubicados en el directorio de configuración de tu nodo antes de continuar con la configuración.

3. **Inicializa Genesis:** Escribe el estado génesis localmente ejecutando el siguiente comando desde el directorio de tu proyecto. Asegúrate de que la ruta relativa al archivo `genesis.json` sea correcta. En este caso, `genesis.json` significa que el archivo `genesis.json` está ubicado en el mismo directorio, que debería ser el directorio raíz de tu nodo.

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

4. **Descargar y extraer el snapshot más reciente:** Descarga y extrae el snapshot más reciente de la blockchain de Core desde el [repositorio oficial de snapshots de Core](https://github.com/coredao-org/core-snapshots).

5. **Generar la clave de consenso:** Configura la clave de consenso antes de ejecutar el nodo validador. Para crear una nueva clave de consenso, usa el siguiente comando. Este comando creará una nueva cuenta y mostrará una dirección que será la dirección de tu validador (dirección de consenso).

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
```

Se te pedirá que ingreses una contraseña. Esta contraseña es esencial para desbloquear tu validador, así que guárdala de forma segura. Puedes guardar tu contraseña en un archivo de texto ejecutando el siguiente comando:

```bash
echo {your-password} > password.txt
```

Asegúrate de seguir estas consideraciones clave:
\* **Asegura tu Keystore y Contraseña:** Guarda de manera segura tu archivo keystore y la contraseña, ya que los necesitarás más adelante.
\* **Haz una Copia de Seguridad de tu Clave:** Perder el acceso a esta clave significa perder el control sobre tu nodo validador.

6. **Inicia el nodo validador:**

Usa el siguiente comando para iniciar el nodo validador.

```bash
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000  --networkid {core-chain-id}
```

Desglosemos las opciones usadas en este comando:

- **`config ./config.toml`:** Especifica el archivo de configuración para el nodo. Asegúrate de tener la configuración correcta en `config.toml` para tu entorno.

- **`datadir ./node`:** Indica el directorio de datos para el nodo.

- **`unlock {your-validator-address}`:** Desbloquea la cuenta de validador utilizando la dirección generada en el paso anterior.

- **`miner.etherbase {your-validator-address}`:** Especifica la dirección que recibirá las recompensas y recompensas por bloque. Típicamente, esta sería la dirección de tu validador.

- **`password password.txt`:** La contraseña para desbloquear la cuenta de tu validador (asegúrate de mantener este archivo seguro).

- **`mine`:** Habilita la minería/validación (producción de bloques) en la red. Es esencial para la operación del validador

- **`allow-insecure-unlock`:** Permite el proceso de desbloqueo sin medidas de seguridad adicionales (usar con precaución).

- **`cache 8000`:** Asigna una gran caché (8GB en este caso) para mejorar el rendimiento.

- **`networkid`:** Especifica el ID de cadena de la red Core en la que deseas ejecutar el nodo validador (por ejemplo, 1114 para Core Testnet2)

#### Sincronización desde Génesis

Si prefieres sincronizar tu nodo validador desde el bloque génesis en lugar de usar una snapshot:

- Omite el Paso #4 ("Descargar y extraer la última instantánea") en las instrucciones de configuración.

- Después de completar los Pasos 1 (Descargar Binarios), 2 (Archivos Genesis/Config) y 3 (Initializar Genesis), continúa generando tu consensus key como de costumbre.

- Luego, inicia el nodo validador usando el siguiente comando:

  ```bash
  geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 8000 --networkid {core-network-id}
  ```

⚠️ **Nota:** Sincronizar desde genesis puede tomar mucho tiempo, dependiendo de los recursos del sistema y la velocidad de la red.

## Monitoreo de Logs

Una vez que tu nodo validador esté activo y funcionando, es esencial monitorear los logs para asegurarte de que todo opere sin problemas.

Los registros generalmente se almacenan por defecto en `./node/logs/core.log`, pero se pueden cambiar a otra ubicación si se desea. Puedes ver y seguir los logs en tiempo real usando el siguiente comando:

```bash
# Tail the logs in real-time
# This will display the most recent log entries and update the log display continuously.

tail -f ./node/logs/core.log
```

Estos logs normalmente muestran que el nodo está importando nuevos segmentos de la cadena en la blockchain, lo que indica que está recibiendo y procesando bloques correctamente.

- **Imported new chain segment:** Esto indica que el nodo está recibiendo nuevos bloques desde la red y agregándolos a la blockchain local exitosamente.

- **número:** El número de bloque (ej: `1,596,730` es el número de bloque para esa entrada).

- **hash:** El identificador único (hash) para el bloque, como una huella digital de los datos del bloque (ej: `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** La dirección del minero que minó ese bloque.

- **bloques:** El número de bloques importados (generalmente es `1` en estos registros).

- **txs:** El número de transacciones en el bloque (ej: `1` tx o `2` txs).

- **mgas:** El gas usado en la transacción dentro del bloque. El gas se refiere al trabajo computacional requerido para ejecutar las transacciones (por ejemplo, `0.021` significa 0.021 millones de unidades de gas).

- **elapsed:** El tiempo que tardó en importar el bloque, en milisegundos (ej: `3.003ms`).

- **mgasps:** La velocidad a la cual el gas está siendo procesado (en millones de gas por segundo).

- **triedirty:** La cantidad de memoria sucia utilizada (en este caso, alrededor de `869.67 KiB`), que indica cuánta memoria se está utilizando para almacenar temporalmente los datos del bloque.

- **Looking for peers:** Este mensaje significa que el nodo está buscando otros nodos con los que conectarse. Las conexiones peer-to-peer son cruciales para sincronizar la blockchain con la red.

- **peercount:** El número actual de nodos a los que está conectado el nodo (ej: `2`).

- **tried:** El número de nodos con los que el nodo ha intentado conectarse (ej: `12`).

- **static:** El número de nodos fijos/estáticos a los que el nodo está configurado para conectarse (ej: `2`).