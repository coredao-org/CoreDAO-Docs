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

Actualmente, un nodo completo de Core **_sólo_** puede ejecutarse en **Mac OS X** y **Linux**.

### Especificaciones de hardware para nodos completos en Core Testnet

Para nodos completos en **Core testnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                                                                   |
| CPU                   | CPU 4 nucleos                                                                                                    |
| RAM                   | 8 gigabytes                                                                                                      |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 megas por segundo. |

## Construya y ejecute un nodo completo en Core Testnet

1\. Recomendamos utilizar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo desde el codebase de nuestra blockchain. Las instrucciones para crear el código fuente se pueden encontrar en él [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2\. Descargue el binario para nodo más reciente para Core Testnet desde el GitHub de Core [repositorio de lanzamientos](https://github.com/coredao-org/core-chain/releases/latest). El binario del nodo incluye los archivos de configuración de testnet relevantes. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). _Tenga en cuenta que el método recomendado para sincronizar el nodo en testnet es sincronizar desde el bloque génesis_.

3\. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

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

4\. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo!

Si planeas ejecutar un nodo normal, puedes introducir el siguiente comando de `geth` directamente:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo deseas.
