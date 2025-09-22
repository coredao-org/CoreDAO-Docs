---
sidebar_label: Sincronización de nodos Core
hide_table_of_contents: false
sidebar_position: 2
---

# Sincronización de nodos Core

---

En la red Core, puede sincronizar su nodo con el último estado de Core Chain de varias maneras. En este documento, lo guiamos a través del proceso de sincronización de nodos en la red Core.

## Sincronizar desde instantánea (recomendado)

Descargue los binarios precompilados desde la [página de lanzamiento] (https://github.com/coredao-org/core-chain/releases/latest) o siga las instrucciones a continuación

#### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

#### MacOs

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
```

### Descargue los archivos de configuración

Descargue genesis.json y config.toml mediante:

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)
unzip mainnet.zip
```

### Configuración de pares

- **Red principal**: el archivo config.toml de la última versión se entrega configurado con la información sobre los `Nodos Bootstrap` y los `Nodos estáticos` como se muestra a continuación:

```yaml
BootstrapNodes = 
["enode://6334cdde2728b17486e4930c29e85128694faf118c23f559c7502e1cb42dd90a54f785c80c6a493d7d6f5ed23f3c9cf75e0392b024e45f7eadc81a84544a45ff@seed4.coredao.org:0?discport=35022",
"enode://20b605d5ee978c22bfb9ed208a40f2876d3dfafb1c60a6427c4db28e516520ee610cbc2a1c0ee05dd08578a041dc9070d92cf888422ed0869d0666b5103292b4@seed2.coredao.org:0?discport=35022",
"enode://04ffc724b82e2c52df47e2439a30ca4c0f7aca5ce270f6c6bcdf539581ce2ae4965afd5c5fe19106cd528ed6f379c68687a41310054ee751a73880b2c73e85d8@seed3.coredao.org:0?discport=35022",
"enode://e9a218f70debcb6a423d68f287c972c717606a70bfed278c2f7a876493d37bc535b05127abddeeca21941fc61497a6ca13387466c75a070050862ca6da11b0ca@seed1.coredao.org:0?discport=35022"]

StaticNodes = 
["enode://8c60a7445dfff047051aa686d621e8ff3fad4623ebd60aea3b8a9b5285945ff0bb05540cc215bcb0ae3fb07b6c368605ddeebeb23b282ffb2ae777d8a73155ec@18.230.84.232:35021",
"enode://af5bb3eb4278885d98dfdb994a283cd1eafec7f3cf53b13325a484a71e02613a2d724314a2d5bf2ea3b33adb0d1ad7d1c5b9e23c8d2959453a55bde5f02c762f@35.72.191.164:35021",
"enode://40811f3281241c68555179e40654971ec01b1849899e296c0852e5dfed70f3d17f776e90dced50e94cc71699e2b010eec58047ce91d07fa7a3520220cf3ce22b@13.39.140.139:35021",
"enode://ee253be3c7c2ccdd4611d16975733ceb2f41f61a04672756fa4850a0b85419ca5e07ceb5a6f1ac43318b136c8995b9160e6de0c6b4bc2c9325797c11275888e6@18.221.135.3:35021",
"enode://71f4b875a8cec01fe9f01974a682ef846ab8cbe0c23518b2a94e38eef0db829488502122b19c94d595521364bc4550639b58c0332d3942447dfd65707fc80bc0@13.214.98.126:35021"]
```

### Descargar instantánea

Descargue la última instantánea de Chaindata desde [aquí](https://github.com/coredao-org/core-snapshots).

### Iniciar el nodo

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Asegúrese de utilizar la versión de geth que descargó con wget arriba, y no su instalación local de geth, que podría ser la versión incorrecta.
:::

:::tip
It is recommended to run a fast node, which is a full node with the flag --tries-verify-mode none set if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Monitorear el estado del nodo

Puede monitorear el registro desde `/node/logs/core.log` de forma predeterminada.

## Sincronización desde Genesis Block (no recomendado)

:::note
Tenga en cuenta que el método recomendado para sincronizar el nodo testnet es sincronizar desde el bloque génesis, ya que actualmente la instantánea no está disponible. Puede descargar el binario más reciente para testnet desde [aquí](https://github.com/coredao-org/core-chain/releases).
:::

Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su nodo

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

Nuestro nodo completo está listo, ¡comencemos a ejecutarlo!

Si planea ejecutar un nodo normal, puede ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo completo
geth --config ./config.toml --datadir ./node  --cache 8000
```

## Modo de sincronización

There are two sync modes for running a full node: **snap** and **full** which can be specified by flag **--syncmode**.

- El modo de sincronización **snap** se utiliza para la sincronización inicial, que descargará los últimos estados en lugar de ejecutar los bloques desde la génesis. Cuando finalice la sincronización inicial, cambiará automáticamente a sincronización completa.

- El modo de sincronización **completa** también se puede utilizar para realizar una sincronización inicial, que ejecutará todos los bloques desde su génesis. Pero **no se recomienda**, ya que la cantidad de datos históricos es demasiado grande. En su lugar, puede descargar una instantánea del [repositorio oficial](https://github.com/coredao-org/core-snapshots) e iniciar la sincronización completa desde la instantánea.

- Si no se proporciona la marca **--syncmode**, el modo de sincronización predeterminado dependerá del estado de la carpeta de datos. Será el modo **instantáneo** si sincroniza desde génesis o el modo **completo** si comienza desde una instantánea.
