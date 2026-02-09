---
sidebar_label: Ejecución de un Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de Nodos Validadores en Core

---

Esta guía te llevará paso a paso para configurar un Nodo Validador de Core. La guía cubre todos los pasos esenciales, incluyendo la instalación de dependencias, la compilación del software del nodo de Core y su lanzamiento exitoso.

### Requisitos del Sistema

Existen varios requisitos del sistema para configurar un nodo validador en la red central. Consulte [aquí](../config/validator-node-config.md) y asegúrese de tener los requisitos de hardware y software necesarios antes de ejecutar un nodo validador. Además, asegúrese de registrar su nodo validador correctamente consultando la guía detallada [aquí](./validator-register.md).

### Actualiza tu sistema

Comienza actualizando tu sistema para asegurarte de que todos los paquetes estén actualizados. Corre los siguientes comandos:

```bash
sudo apt update
sudo apt upgrade -y
```

### Instala las dependencias requeridas

- Para compilar la base de código necesaria para un Validador de Core, necesitarás Git, GCC, Go y otras herramientas. Instálalos con el siguiente comando:

```bash
sudo apt install -y git gcc make curl lz4 golang unzip
```

- Verifica las instalaciones: Ejecuta el siguiente comando para comprobar la información de versión tanto de GCC como de Go.

```bash
gcc --version
go version
```

- Deberías de ver la información sobre la versión tanto de GCC como de Go.

```bash
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
go version go1.22.2 linux/amd64
```

### gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0&#xA;go version go1.22.2 linux/amd64

Se recomienda utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar directamente tu nodo validador, es decir, ejecutar tu nodo validador directamente desde la base de código de la blockchain de Core. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Instala las dependencias

Después de clonar el repositorio, el siguiente paso es instalar todas las dependencias necesarias para compilar el binario de geth (Go Ethereum). Corre el siguiente comando para instalar las dependencias:

```bash
make geth
```

Esto va a descargar e instalar todas las dependencias necesarias y construirá el binario de geth. Deberías de ver una salida similar a esta:

```bash
>>> /usr/lib/go-1.22/bin/go build -ldflags "-X github.com/ethereum/go-ethereum/internal/version.gitCommit=afb8bd3ffe652e90a59af26db119bd988a03dd8f -X github.com/ethereum/go-ethereum/internal/version.gitDate=20250120 ..." -o /home/harystyles/core-chain/build/bin/geth ./cmd/geth
Done building.
Run "./build/bin/geth" to launch geth.
```

### Descarga y extrae el snapshot de la blockchain

Para un rendimiento óptimo y una sincronización más rápida, se _recomienda_ utilizar el método de sincronización por snapshot. Este enfoque permite que los nodos comiencen desde un estado completamente sincronizado, lo que reduce significativamente el tiempo necesario para estar operativos. A diferencia de la sincronización completa desde el bloque génesis, que es un proceso que consume mucho tiempo, la sincronización mediante snapshot permite una configuración más eficiente y simplificada.

#### Obteniendo los snapshots más recientes

Puedes obtener los últimos Snapshots desde el [Repositorio oficial de Snapshots de Core](https://github.com/coredao-org/core-snapshots).

#### Crear un directorio de datos

Ahora, crea un directorio donde residirán los datos de tu nodo, si no se crea de forma predeterminada.

```bash
# Crea el directorio del nodo
mkdir -p ./node
```

#### Descomprime y extrae el Snapshot

Usa el comando `lz4` para descomprimir y el comando `tar` para extraer el snapshot en el directorio `./node`. Esto llenará el directorio con los datos necesarios de la cadena de bloques (chaindata).

### Inicializando el bloque génesis

El siguiente paso para configurar tu nodo es inicializar el bloque génesis para la red Core. El archivo `genesis.json` define el primer bloque de la cadena de bloques, representando el estado inicial de la red. Una inicialización adecuada garantiza que tu nodo comience con el estado base correcto, alineándose con el protocolo de la Red Core.

#### Obteniendo la génesis y los archivos de configuración

Puedes encontrar los archivos necesarios `genesis.json` y `config.toml` en los binarios de nodo disponibles en la [página oficial de lanzamientos de Core](https://github.com/coredao-org/core-chain/releases/latest). Asegúrate de que estos archivos estén correctamente ubicados en el directorio de configuración de tu nodo antes de continuar con la configuración.

#### Inicializa el bloque génesis

Para inicializar tu nodo con el bloque génesis, corre el siguiente comando. Este comando establece el estado inicial de la blockchain en el directorio de tu nodo.

```bash
# Inicializar el nodo con el bloque génesis 
geth --datadir node init genesis.json
```

:::info
Asegúrate de que la ruta al archivo `genesis.json` sea correcta. En este caso, `genesis.json` significa que el archivo `genesis.json` está ubicado en el mismo directorio, el cual debe estar en el directorio raíz (core-chain) de tu nodo.
:::

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

### Inicia el nodo validador

Una vez que la configuración esté completada, ¡es hora de iniciar el nodo validador!

#### Opción 1: Inicia el nodo completo sin opciones

```bash
./build/bin/geth --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

Este comando hace lo siguiente:

- **`datadir ./node`:** Le dice al nodo en dónde guardar los datos de la blockchain.

- **`cache 8000`:** Reserva 8 GB de RAM para ayudar al nodo a correr de forma más eficiente.

- **`rpc.allow-unprotected-txs`:** Le permite al nodo enviar transacciones no protegidas (necesarias para acciones de validador).

- **`networkid 1116`:** Especifica la red a la que el nodo se debe unir. 1114 para Core Testnet2, 1115 para Core Tesnet y 1116 para Core Mainnet.

Sin embargo, si tienes problemas para encontrar pares (es decir, si el nodo no puede conectarse a otros nodos), puedes usar el archivo de configuración para ayudar a que inicie con nodos bootstrap. Este archivo tiene algunas configuraciones predeterminadas para hacer el proyecto más sencillo.

#### Opción 2: Inicia el nodo con el archivo de configuración

```bash
./build/bin/geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

Este comando usa un archivo de configuración (`config.toml`) que ayuda al nodo a conectarse a pares más fácilmente.

#### Opción 3: Inicia el nodo con la "Llave de Consenso"

Si planea ejecutar un nodo de validación, deberá configurar la clave de consenso antes de ejecutar el nodo. Asegúrese de mantener guardado su almacén de claves.

```bash
# generar la clave de consenso e ingresar la contraseña
cuenta geth nueva --datadir ./node
echo {tu-contraseña} > contraseña.txt
# iniciar un nodo validador
geth --config ./config.toml --datadir ./node -unlock {su-dirección-validador} --miner.etherbase {su-dirección-validador} --password contraseña.txt --mine --allow-insecure -desbloquear --cache 8000
```

:::info
A bootstrap node is essentially a "helper" node used to kickstart your connection to the network, especially when your node is struggling to find peers. When you first start your node, it needs to connect with other nodes to sync up and start participating in the blockchain. This process is called peer discovery.

Sin nodos bootstrap, tu nodo podría no ser capaz de encontrar pares, especialmente si es nuevo y aún no tiene conexiones. Los nodos bootstrap proporcionan una lista de pares conocidos a los que tu nodo puede conectarse inicialmente. Una vez que se conecta a estos pares, el nodo puede comenzar a descubrir otros pares por sí mismo.
:::

## Registros de monitoreo

Una vez que tu nodo validador esté en funcionamiento, es importante monitorear los registros para asegurarte de que todo esté funcionando sin problemas.

Los registros generalmente se almacenan en `./node/logs/core.log`, pero se pueden cambiar a otra ubicación si se desea. Puedes ver y seguir los registros en tiempo real utilizando el siguiente comando:

```bash
# Muestra los registros en tiempo real
# Esto te mostrará las entradas de registro más recientes y actualizará continuamente la visualización de los registros.

tail -f ./node/logs/core.log
```

Estos registros típicamente muestran que el nodo está importando nuevos segmentos de cadena en la blockchain, lo que indica que está recibiendo y procesando bloques correctamente.

- **Segmento de cadena importado nuevo:** Esto significa que el nodo está recibiendo con éxito nuevos bloques de la red y agregándolos a la blockchain local.

- **número:** El número de bloque (ej: `1,596,730` es el número de bloque para esa entrada).

- **hash:** El identificador único (hash) para el bloque, como una huella digital de los datos del bloque (ej: `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** La dirección del minero que minó ese bloque.

- **bloques:** El número de bloques importados (generalmente es `1` en estos registros).

- **txs:** El número de transacciones en el bloque (ej: `1` tx o `2` txs).

- **mgas:** El gas usado en la transacción dentro del bloque. El gas es el trabajo computacional necesario para ejecutar transacciones (ej; `0.021` significa 0.021 millones de gas).

- **elapsed:** El tiempo que tardó en importar el bloque, en milisegundos (ej: `3.003ms`).

- **mgasps:** La velocidad a la cual el gas está siendo procesado (en millones de gas por segundo).

- **triedirty:** La cantidad de memoria sucia utilizada (en este caso, alrededor de `869.67 KiB`), que indica cuánta memoria se está utilizando para almacenar temporalmente los datos del bloque.

**Looking for peers:** Este mensaje significa que el nodo está buscando otros nodos con los que conectarse. Las conexiones peer-to-peer son esenciales para sincronizar la blockchain con la red.

- **peercount:** El número actual de nodos a los que está conectado el nodo (ej: `2`).

- **tried:** El número de nodos con los que el nodo ha intentado conectarse (ej: `12`).

- **static:** El número de nodos fijos/estáticos a los que el nodo está configurado para conectarse (ej: `2`).

Para participar en el consenso y la creación de bloques, necesitas configurar un nodo validador. Los validadores son responsables de producir nuevos bloques en la blockchain de Core validando las transacciones y agregándolas a la cadena de bloques.