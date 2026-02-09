---
sidebar_label: En Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de Nodos Completos en Core Testnet

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

### Especificaciones de Software para nodos completos en Core Testnet

Actualmente, **_solo_** se admiten ejecuciones en sistemas operativos **Mac OS X** y **Linux**.

### Especificaciones de hardware para nodos completos en Core Testnet

Para los nodos completos en **Core Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | CPU de 4 nucleos                                                                  |
| RAM                   | 8 gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

## Construir y Ejecutar un Nodo Completo en Core Testnet

1. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde el código base de la blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descarga el binario más reciente del nodo para Core Testnet desde el [repositorio de versiones](https://github.com/coredao-org/core-chain/releases/latest) en GitHub de Core. El binario del nodo incluye los archivos de configuración para testnet y mainnet; asegúrate de utilizar las configuraciones correspondientes a **testnet2**. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Tenga en cuenta que el método recomendado para sincronizar un nodo completo es sincronizar desde el _bloque génesis_.

3. Escribe el estado génesis localmente ejecutando el siguiente comando desde tu directorio del proyecto:

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

4. ¡Ahora que la configuración del nodo completo está completa, es momento de ejecutarlo!

Ejecuta el siguiente comando `geth` para iniciar el nodo completo:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5. Mientras el nodo completo esté en ejecución, puedes monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de log se encuentra, por defecto, en `/node/logs/core.log`, aunque puede cambiarse a otra ubicación si así se desea.