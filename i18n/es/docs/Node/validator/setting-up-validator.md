---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---



# Configuración de Nodos Validadores en Core

---

Esta guía te guía paso a paso en el proceso de configurar un nodo validador en la Red de Core. Cubre la instalación de las dependencias del sistema, la compilación del software del nodo Core, la inicialización con snapshot data y el inicio de tu nodo validador.

### Requisitos del Sistema para Nodo Validador

Antes de comenzar, asegúrate de que tu sistema cumpla con las especificaciones de hardware y software requeridas.

#### Sistemas Operativos Compatibles

Currently, the supported operating system platforms include **macOS** and **Linux**.

#### Requisitos de Hardware

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Validator nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

    

  </TabItem>

  <TabItem value="mainnet">
   For Validator nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

    

  </TabItem>
</Tabs>

### Clonar el Codebase de Core Blockchain

It is recommended to use the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your validator node directly, i.e., running your validator node from the Core blockchain codebase. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash

```

#### Install Dependencies

After cloning the repo, the next step is to install all the necessary dependencies for building the geth (Go Ethereum) binary. Ejecuta el siguiente comando para instalar las dependencias:

```bash

```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario `geth` estará ubicado en `./build/bin/geth`.

### Configuración del Nodo

There are two approaches to set up a validator node from scratch on the Core blockchain:

- **Mediante Snapshot (Recomendado):** descargar el [snapshot más reciente de la blockchain de Core](https://github.com/coredao-org/core-snapshots) y sincronizar el nodo con base en este.
- **From Genesis (Not Recommended):** Sync the entire Core blockchain data from the [genesis block](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La sincronización desde el bloque génesis puede tomar una cantidad significativa de tiempo. Se recomienda configurar un nodo de Core utilizando el snapshot más reciente para acelerar el proceso.
:::

#### Pasos para Ejecutar un Nodo Validador Usando Snapshot

1. **Descargar los Binarios Precompilados Más Recientes:**
  Descarga los binarios más recientes del nodo desde el [repositorio oficial de versiones de Core](https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** The pre-build binaries contain `genesis.json` and `config.toml` for the respective network you want to run the validator node. Asegúrate de que estos archivos estén correctamente ubicados en el directorio de configuración de tu nodo antes de continuar con la configuración.

3. **Inicializar Genesis:** Escribe el estado génesis localmente ejecutando el siguiente comando desde el directorio de tu proyecto. Asegúrate de que la ruta relativa al archivo `genesis.json` sea correcta. En este caso, `genesis.json` implica que el archivo `genesis.json` se encuentra en el mismo directorio, que debería ser el directorio root del nodo.

```bash

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

4. **Descargar y Extraer el Snapshot Más Reciente**
  Descarga y extrae el snapshot más reciente de la blockchain de Core desde el [Core Snapshot Repository](https://github.com/coredao-org/core-snapshots).

5. **Generación de Consensus Key:** Configura la clave de consenso antes de ejecutar el nodo validador. To create a new consensus key, use the following command, which will create a new account and output an address that will be your validator's address (consensus address).

```bash

```

Se te pedirá que ingreses una contraseña. Esta contraseña es esencial para desbloquear tu validador, así que guárdala de forma segura. Puedes guardar tu contraseña en un archivo de texto ejecutando el siguiente comando:

```bash

```

Asegúrate de seguir estas consideraciones clave:
**Asegura tu archivo keystore y tu contraseña:** Guarda de forma segura tu archivo keystore y tu contraseña, ya que los necesitarás más adelante.
**Haz una copia de seguridad de tu clave:** Perder el acceso a esta clave significa perder el control sobre tu nodo validador.

6. **Iniciar el nodo validador:**

Utiliza el siguiente comando para iniciar el nodo validador.

```bash

```

Desglosemos las banderas utilizadas en este comando:

- **`config ./config.toml`:** Especifica el archivo de configuración del nodo. Asegúrate de que tengas la configuración correcta en `config.toml` para tu entorno.

- **`datadir ./node`:** Indica el directorio de datos del nodo.

- **`unlock {your-validator-address}`:** Desbloquea la cuenta del validador utilizando la dirección generada en el paso anterior.

- **`miner.etherbase {your-validator-address}`:** Especifica la dirección que recibirá las recompensas y recompensas por bloque. Normalmente, esta sería la dirección de tu validador.

- **`password password.txt`:** La contraseña para desbloquear tu cuenta de validador (asegúrate de que este archivo se mantenga seguro).

- **`mine`:** Enables mining and validating (producing blocks) on the network. Es esencial para la operación del validador

- **`allow-insecure-unlock`:** Enables the unlock process without additional security measures (use with caution).

- **`cache 8000`:** Asigna una caché grande (8GB en este caso) para mejorar el rendimiento.

- **`networkid`:** Specify the Core network chain ID you intend to run the validator node (e.g., 1114 for Core Tesnet2)

#### Sincronización desde Genesis

Si prefieres sincronizar tu nodo validador desde el bloque génesis en lugar de usar un snapshot:

- Omite el Paso #4 ("Descargar y Extraer el Snapshot Más Reciente") en las instrucciones de configuración.

- After completing Steps 1 (Download Binaries), 2 (Genesis/Config Files), and 3 (Initialize Genesis), continue to generate your consensus key as usual.

- Luego, inicia el nodo validador usando el siguiente comando:

  ```bash

  ```

⚠️ **Note:** Syncing from genesis can take a lot of time, depending on system resources and network speed.

## Monitor Logs

Once your validator node is up and running, it’s essential to monitor the logs to ensure everything is operating smoothly.

Los logs se almacenan por defecto en `./node/logs/core.log`, pero pueden redirigirse a otra ubicación si se desea. Puedes ver y seguir los logs en tiempo real utilizando el siguiente comando:

```bash
# Tail the logs in real-time
# This will display the most recent log entries and update the log display continuously.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain, indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This indicates that the node is successfully receiving new blocks from the network and adding them to its local blockchain.

- **number:** El número de bloque (por ejemplo, `1,596,730` es el número de bloque para esa entrada).

- **hash:** El identificador único (hash) del bloque, como una huella digital de los datos del bloque (por ejemplo, 0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c).

- **miner:** La dirección del minero que minó ese bloque.

- **blocks:** El número de bloques importados (usualmente `1` en estos logs).

- **txs:** El número de transacciones en el bloque (por ejemplo, `1` tx o `2` txs).

- **mgas:** El gas utilizado en las transacciones dentro del bloque. Gas refers to the computational work required to execute transactions (e.g., `0.021` means 0.021 million gas units).

- **elapsed:** El tiempo que tomó importar el bloque, en milisegundos (por ejemplo, `3.003ms`).

- **mgasps:** La velocidad a la que se está procesando el gas (en millones de gas por segundo).

- **triedirty:** La cantidad de memoria "sucia" utilizada (en este caso, alrededor de`869.67 KiB`), lo cual indica cuánta memoria se está utilizando para almacenar temporalmente los datos del bloque.

- **Looking for peers:** Este mensaje significa que el nodo está buscando otros nodos con los que conectarse. Peer-to-peer connections are crucial for synchronizing the blockchain with the network.

- **peercount:** El número actual de peers a los que el nodo está conectado (por ejemplo, `2`).

- **tried:** El número de peers con los que el nodo ha intentado conectarse (por ejemplo, `12`).

- **static:** El número de peers fijos/estáticos con los que el nodo está configurado para conectarse (por ejemplo, `2`).