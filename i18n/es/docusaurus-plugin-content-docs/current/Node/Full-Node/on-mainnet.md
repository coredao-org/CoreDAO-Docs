---
sidebar_label: En la Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de nodos completos de Core en Core Mainnet

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

### Especificaciones de software para nodos completos en Core Mainnet

- Actualmente, un nodo completo de Core **_sólo_** puede ejecutarse en **Mac OS X** y **Linux**.

### Especificaciones de hardware para nodos completos en Core Mainnet

Los nodos de Core realizan varias tareas que consumen muchos recursos, incluyendo almacenar datos de blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder solicitudes de red, según su configuración. Para nodos completos en **Core mainnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                           |
| --------------------- | ---------------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                                     |
| CPU                   | CPU 4 nucleos                                                                      |
| RAM                   | 32 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps |

## Construya y ejecute un nodo completo en Core Mainnet


1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).


2\. Download the node binary from the[ releases page](https://github.com/coredao-org/core-chain/releases) of the core-chain repository. The node binary includes the relevant mainnet and testnet configuration files. This is the [latest version](https://github.com/coredao-org/core-chain/releases/latest).


3\. Write the genesis state locally by executing the following command from your project directory:


```bash
geth --datadir node init genesis.json
```


You should see the following output:


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

4\. Now that the full node configuration is completed, let's start running it!

Execute the following `geth` command to run the fun node:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. As our full node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.