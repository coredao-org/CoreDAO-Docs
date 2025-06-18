---
sidebar_label: En Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de nodos completos de Core en Core Testnet

---

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal**: para uso privado.
- **Nodo completo validador**: actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

:::note
Este documento proporciona una guía detallada sobre cómo ejecutar nodos completos normales en la red Core.
:::

## Requisitos del sistema

Existen varios requisitos de sistema para configurar un nodo completo en Core.

### Especificaciones de software para nodos completos en Core Testnet

Currently, **_only_** run on **Mac OS X** and **Linux** are supported.

### Especificaciones de hardware para nodos completos en Core Testnet

For full nodes on **Core Testnet**, following minimum hardware specifications are recommended:

| Requisitos            | Detalles                                                             |
| --------------------- | -------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                       |
| CPU                   | CPU 4 nucleos                                                        |
| RAM                   | 8 gigabytes                                                          |
| Velocidad de Internet | A broadband Internet connection with upload/download speeds of 5Mbps |

## Construya y ejecute un nodo completo en Core Testnet

1. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Las instrucciones para crear el código fuente se pueden encontrar en él [README] (https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descargue el binario para nodo más reciente para Core Testnet desde el GitHub de Core [repositorio de lanzamientos] (https://github.com/coredao-org/core-chain/releases/latest). The node binary includes the testnet and mainnet configuration files, amke sure to use the **testnet2** configuration files. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Note that the recommended method for syncing a full node is to sync from the _genesis block_.

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

4. Now that the full node configuration is completed, let's start running it!

Execute the following `geth` command to run the fun node:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5. While the full node is running, you can monitor its logs to ensure that everything is operating correctly. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo deseas.