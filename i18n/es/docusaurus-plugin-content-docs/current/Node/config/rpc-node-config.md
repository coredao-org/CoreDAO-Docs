---
sidebar_label: Nodo RPC
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos RPC en Core

---

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo RPC en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Archivo de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Para asegurar que tu Nodo RPC pueda comunicarse con aplicaciones externas y otros nodos, debes permitir el tráfico HTTP entrante en el puerto 8575, que es el puerto predeterminado para la comunicación RPC. Puedes ajustar esta configuración en el archivo config.toml si prefieres usar un puerto diferente. Asegúrate de que la configuración de tu firewall esté correctamente ajustada para permitir tráfico en este puerto.

### Hardware

Un nodo RPC en Core actúa como una puerta de enlace para que aplicaciones, desarrolladores y usuarios interactúen con la blockchain. Procesa consultas, envía transacciones y recupera datos en tiempo real de la blockchain mediante Llamadas a Procedimientos Remotos (RPC). Estos nodos son esenciales para que las dApps, carteras y plataformas de análisis accedan sin problemas a la red de Core. A continuación se presentan los requisitos de hardware para ejecutar un Nodo RPC en Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos RPC en **Core Blockchain Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), tipo gp3, 8k IOPS, 250 MB/s de rendimiento, latencia de lectura menor a 1 ms.  |
| **CPU**            | CPU de 8 núcleos |
| **RAM**            | 16 Gigabytes   |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de descarga y carga de 50 megabytes por segundo.   |
```

  </TabItem>
  <TabItem value="testnet">
    Para los nodos RPC en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), tipo gp3, 8k IOPS, 250 MB/s de rendimiento, latencia de lectura menor a 1 ms.  |
| **CPU**            | CPU de 8 núcleos |
| **RAM**            | 16 Gigabytes   |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de descarga y carga de 50 megabytes por segundo.   |
```

  </TabItem>
  <TabItem value="mainnet">
    Para los nodos RPC en **Core Blockchain Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), tipo gp3, 8k IOPS, 250 MB/s de rendimiento, latencia de lectura menor a 1 ms.  |
| **CPU**            | CPU de 8 núcleos |
| **RAM**            | 16 Gigabytes   |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de descarga y carga de 50 megabytes por segundo.   |
```

  </TabItem>
</Tabs>

## Ejecutando el nodo RPC

### Habilitar el puerto de entrada HTTP

Si está ejecutando un nodo RPC, debe habilitar las reglas de entrada "HTTP" en el puerto **8575** en la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puede cambiar las configuraciones en `config.toml`.

### Construir y ejecutar

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo RPC, ejecutando su nodo completo RPC directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario para nodo desde la [página de lanzamientos de Core](https://github.com/coredao-org/core-chain/releases) del repositorio core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión](https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash
NFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
INFO [07-18|14:57:20.724] Writing custom genesis block 
INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
INFO [07-18|14:57:20.729] Writing custom genesis block 
INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
```

4\. Nuestro nodo completo RPC está listo, ¡comencemos a ejecutarlo!

Si planea ejecutar un nodo RPC, puede ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo RPC
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. A medida que se ejecuta nuestro nodo completo RPC, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
