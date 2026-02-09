---
sidebar_label: Nodos RPC
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos RPC en Core

---

Los nodos RPC (Remote Procedure Call) en la red Core juegan un papel crucial al facilitar la interacción entre aplicaciones externas y la blockchain de Core. Funcionan como la interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la blockchain, siendo esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios basados en blockchain.

## Requisitos del Sistema

Existen varios requisitos de sistema, tanto de software como de hardware, para configurar un nodo RPC en la red Core.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Para asegurar que tu nodo RPC pueda comunicarse con aplicaciones externas y otros nodos, debes permitir el tráfico HTTP entrante en el puerto 8575, que es el puerto predeterminado para la comunicación RPC. Puedes ajustar esta configuración en el archivo `config.toml` si prefieres usar un puerto diferente. Asegúrate de que la configuración de tu firewall esté correctamente ajustada para permitir tráfico en este puerto.

### Hardware

Los nodos RPC en Core actúan como puerta de enlace para que aplicaciones, desarrolladores y usuarios interactúen con la blockchain. Procesan consultas, envían transacciones y recuperan datos en tiempo real mediante llamadas a procedimientos remotos (RPC). Estos nodos son esenciales para que dApps, wallets y plataformas de análisis accedan sin problemas a la red de Core. A continuación se presentan los requisitos de hardware para un nodo RPC en Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos RPC en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes   |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps               |
```

  </TabItem>

  <TabItem value="mainnet">
Para los Nodos RPC en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 16 CPU cores |
| **RAM**            | 32 Gigabytes  |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps                 |
```

  </TabItem>
</Tabs>

## Ejecución de Nodo RPC

### Habilitar el Puerto HTTP de Entrada

Si estás ejecutando un nodo RPC, debes habilitar las reglas de entrada `HTTP` en el puerto **8575** dentro de la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puedes modificar esta configuración en el archivo `config.toml` si deseas usar un puerto diferente.

### Compilar y Ejecutar

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo RPC directamente desde el código base de la blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2\. Descargue el binario del nodo desde la [página oficial de lanzamientos de Core] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración correspondientes para mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escribe el estado génesis localmente ejecutando el siguiente comando desde tu directorio del proyecto:

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

4\. Ahora que la configuración del nodo RPC está completa, es momento de ejecutarlo.

Para ejecutar un nodo RPC, ejecuta el siguiente comando `geth`:

```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. Mientras el nodo completo RPC esté en ejecución, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra, por defecto, en `./node/logs/core.log`, aunque puedes cambiar su ubicación si lo deseas.