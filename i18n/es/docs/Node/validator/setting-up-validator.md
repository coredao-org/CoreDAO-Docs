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

Actualmente, los sistemas operativos compatibles incluyen Mac OS X y Linux.

#### Requisitos de Hardware

<Tabs defaultValue="testnet2" values={[ {label: 'Testnet2', value: 'testnet2'}, {label: 'Testnet', value: 'testnet'}, {label: 'Mainnet', value: 'mainnet'}, ]}> Para nodos validador en **Core Blockchain Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
  <TabItem value="testnet">
Para nodos validador en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
  <TabItem value="mainnet">
Para nodos validador en **Core Blockchain Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
</Tabs>

### Clonar el Codebase de Core Blockchain

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo directamente desde el código base de Core blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash

```

#### Instalar Dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Ejecuta el siguiente comando para instalar las dependencias:

```bash

```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario `geth` estará ubicado en `./build/bin/geth`.

### Configuración del Nodo

Existen 2 métodos para configurar un nodo validador desde cero en la blockchain de Core:

- **Mediante Snapshot (Recomendado):** descargar el [snapshot más reciente de la blockchain de Core](https://github.com/coredao-org/core-snapshots) y sincronizar el nodo con base en este.
- **Desde Genesis (No Recomendado):** sincronizar toda la información de la blockchain de Core desde el [bloque génesis](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La sincronización desde el bloque génesis puede tomar una cantidad significativa de tiempo. Se recomienda configurar un nodo de Core utilizando el snapshot más reciente para acelerar el proceso.
:::

#### Pasos para Ejecutar un Nodo Validador Usando Snapshot

1. **Descargar los Binarios Precompilados Más Recientes:**
  Descarga los binarios más recientes del nodo desde el [repositorio oficial de versiones de Core](https://github.com/coredao-org/core-chain/releases/latest).

2. **Archivos de Génesis y Configuración:**
  Los binarios pre-build incluyen `genesis.json` y `config.toml` correspondientes a la red que deseas correr como validador. Asegúrate de que estos archivos estén correctamente ubicados en el directorio de configuración de tu nodo antes de continuar con la configuración.

3. **Inicializar Genesis:** Escribe el estado génesis localmente ejecutando el siguiente comando desde el directorio de tu proyecto. Asegúrate de que la ruta relativa al archivo `genesis.json` sea correcta. En este caso, `genesis.json` implica que el archivo `genesis.json` se encuentra en el mismo directorio, que debería ser el directorio root del nodo.

```bash

```

Deberías ver la siguiente salida:

```bash

```

4. **Descargar y Extraer el Snapshot Más Reciente**
  Descarga y extrae el snapshot más reciente de la blockchain de Core desde el [Core Snapshot Repository](https://github.com/coredao-org/core-snapshots).

5. **Generación de Consensus Key:** Configura la clave de consenso antes de ejecutar el nodo validador. Para crear una nueva consensus key, utiliza el siguiente comando, el cual creará una nueva cuenta y mostrará una dirección que será la dirección de tu validador (consensus address).

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

- **`mine`:** Habilita la minería/validación (producción de bloques) en la red. Es esencial para la operación del validador

- **`allow-insecure-unlock`:** Permite el proceso de desbloqueo sin medidas de seguridad adicionales (usar con precaución).

- **`cache 8000`:** Asigna una caché grande (8GB en este caso) para mejorar el rendimiento.

- **`networkid`:** Especifica el id de cadena de la red Core en la que deseas ejecutar el nodo validador (por ejemplo, 1114 para Core Testnet2)

#### Sincronización desde Genesis

Si prefieres sincronizar tu nodo validador desde el bloque génesis en lugar de usar un snapshot:

- Omite el Paso #4 ("Descargar y Extraer el Snapshot Más Reciente") en las instrucciones de configuración.

- Después de completar los Pasos 1 (Descargar Binarios), 2 (Archivos Genesis/Config) y 3 (Initializar Genesis), continúa generando tu consensus key con normalidad.

- Luego, inicia el nodo validador usando el siguiente comando:

  ```bash

  ```

**Nota:** Sincronizar desde genesis puede tomar mucho tiempo dependiendo de los recursos del sistema y la velocidad de la red.

## Monitor Logs

Una vez que tu nodo validador esté en ejecución, es importante monitorear los logs para asegurarte de que todo esté funcionando correctamente.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash

```

These logs typically show that the node is importing new chain segments on the blockchain indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This means the node is successfully receiving new blocks from the network and adding them to the local blockchain.

- **number:** The block number (e.g., `1,596,730` is the block number for that entry).

- **hash:** The unique identifier (hash) for the block, like a fingerprint of the block data (e.g., `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** The address of the miner who mined that block.

- **blocks:** The number of blocks imported (usually `1` in these logs).

- **txs:** The number of transactions in the block (e.g., `1` tx or `2` txs).

- **mgas:** The gas used in the transactions within the block. Gas is the computational work needed to execute transactions (e.g., `0.021` means 0.021 million gas).

- **elapsed:** The time it took to import the block, in milliseconds (e.g., `3.003ms`).

- **mgasps:** The speed at which gas is being processed (in million gas per second).

- **triedirty:** The amount of dirty memory used (in this case, around `869.67 KiB`), which indicates how much memory is being used to store block data temporarily.

- **Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are essential to synchronize the blockchain with the network.

- **peercount:** The current number of peers the node is connected to (e.g., `2`).

- **tried:** The number of peers the node has tried to connect with (e.g., `12`).

- **static:** The number of fixed/static peers the node is configured to connect to (e.g., `2`).

