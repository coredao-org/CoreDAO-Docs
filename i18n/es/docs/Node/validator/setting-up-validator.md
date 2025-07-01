---
sidebar_label: Configuración de Nodos Validadores
hide_table_of_contents: false
sidebar_position: 2
---



# Configuración de Nodos Validadores en Core

---

Esta guía te guía paso a paso en el proceso de configurar un nodo validador en la Red de Core. Cubre la instalación de las dependencias del sistema, la compilación del software del nodo Core, la inicialización con snapshot data y el inicio de tu nodo validador.

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
Para nodos validadores en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>

  <TabItem value="mainnet">
Para nodos Validadores en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

    

  </TabItem>
</Tabs>

### Clonar el Codebase de Core Blockchain

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo validador directamente desde la base de código de la blockchain de Core. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

```bash

```

#### Instalar Dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Ejecuta el siguiente comando para instalar las dependencias:

```bash

```

Esto descargará e instalará las dependencias necesarias y compilará el binario de `geth`. El binario `geth` estará ubicado en `./build/bin/geth`.

### Configuración del Nodo

Existen dos métodos para configurar un nodo validador desde cero en la blockchain de Core:

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

- **`mine`:** Habilita la minería y validación (producción de bloques) en la red. Es esencial para la operación del validador

- **`allow-insecure-unlock`:** Habilita el proceso de desbloqueo sin medidas de seguridad adicionales (usar con precaución).

- **`cache 8000`:** Asigna una caché grande (8GB en este caso) para mejorar el rendimiento.

- **`networkid`:** Especifica el ID de cadena de la red Core en la que deseas ejecutar el nodo validador (por ejemplo, 1114 para Core Testnet2)

#### Sincronización desde Genesis

Si prefieres sincronizar tu nodo validador desde el bloque génesis en lugar de usar un snapshot:

- Omite el Paso #4 ("Descargar y Extraer el Snapshot Más Reciente") en las instrucciones de configuración.

- Después de completar los Pasos 1 (Descargar Binarios), 2 (Archivos Genesis/Config) y 3 (Initializar Genesis), continúa generando tu consensus key con normalidad.

- Luego, inicia el nodo validador usando el siguiente comando:

  ```bash

  ```

**Nota:** Sincronizar desde genesis puede tomar mucho tiempo, dependiendo de los recursos del sistema y la velocidad de la red.

## Monitor Logs

Una vez que tu nodo validador esté en ejecución, es esencial monitorear los logs para asegurarte de que todo esté funcionando correctamente.

Los logs se almacenan por defecto en `./node/logs/core.log`, pero pueden redirigirse a otra ubicación si se desea. Puedes ver y seguir los logs en tiempo real utilizando el siguiente comando:

```bash

```

Estos logs normalmente muestran que el nodo está importando nuevos segmentos de cadena en la blockchain, lo que indica que está recibiendo y procesando bloques correctamente.

- **Imported new chain segment:** Esto indica que el nodo está recibiendo nuevos bloques desde la red y agregándolos a la blockchain local exitosamente.

- **number:** El número de bloque (por ejemplo, `1,596,730` es el número de bloque para esa entrada).

- **hash:** El identificador único (hash) del bloque, como una huella digital de los datos del bloque (por ejemplo, 0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c).

- **miner:** La dirección del minero que minó ese bloque.

- **blocks:** El número de bloques importados (usualmente `1` en estos logs).

- **txs:** El número de transacciones en el bloque (por ejemplo, `1` tx o `2` txs).

- **mgas:** El gas utilizado en las transacciones dentro del bloque. Gas se refiere al trabajo computacional requerido para ejecutar transacciones (por ejemplo, `0.021` significa 0.021 millones de unidades de gas).

- **elapsed:** El tiempo que tomó importar el bloque, en milisegundos (por ejemplo, `3.003ms`).

- **mgasps:** La velocidad a la que se está procesando el gas (en millones de gas por segundo).

- **triedirty:** La cantidad de memoria "sucia" utilizada (en este caso, alrededor de`869.67 KiB`), lo cual indica cuánta memoria se está utilizando para almacenar temporalmente los datos del bloque.

- **Looking for peers:** Este mensaje significa que el nodo está buscando otros nodos con los que conectarse. Las conexiones peer-to-peer son cruciales para sincronizar la blockchain con la red.

- **peercount:** El número actual de peers a los que el nodo está conectado (por ejemplo, `2`).

- **tried:** El número de peers con los que el nodo ha intentado conectarse (por ejemplo, `12`).

- **static:** El número de peers fijos/estáticos con los que el nodo está configurado para conectarse (por ejemplo, `2`).