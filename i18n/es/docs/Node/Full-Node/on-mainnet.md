---
sidebar_label: En Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de Nodos Completos en Core Mainnet

---

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal**: para uso privado.
- **Nodo completo validador**: actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

:::note
Este documento proporciona una guía detallada para ejecutar Nodos Completos Normales en la red Core.
:::

## Requisitos del Sistema

Existen varios requisitos de sistema para configurar un Nodo Completo en Core.

### Especificaciones de software para Nodos Completos en Core Mainnet

- Actualmente, un Nodo Completo de Core **_sólo_** puede ejecutarse en **Mac OS X** y **Linux**.

### Especificaciones de Hardware para Nodos Completos en Core Mainnet

Los nodos Core realizan varias tareas que demandan muchos recursos, incluyendo almacenar datos de la blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder a solicitudes de la red, según su configuración. Para nodos completos en **Core Mainnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                           |
| --------------------- | ---------------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                                     |
| CPU                   | CPU de 4 nucleos                                                                   |
| RAM                   | 32 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps |

## Construir y Ejecutar un Nodo Completo en Core Mainnet

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde el código base de la blockchain. Las instrucciones para crear el código fuente se pueden encontrar en él [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2\. Descargue el binario del nodo desde la [página de lanzamientos](https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario incluye los archivos de configuración relevantes tanto para mainnet como para testnet. Esta es la [última versión](https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

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

4\. ¡Ahora que la configuración del nodo completo está completa, es momento de ejecutarlo!

Ejecuta el siguiente comando `geth` para iniciar el nodo completo:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. Mientras nuestro nodo completo se ejecuta, podemos monitorear sus logs para asegurarnos de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo deseas.