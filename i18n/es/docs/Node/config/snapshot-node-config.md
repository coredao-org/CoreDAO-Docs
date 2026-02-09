---
sidebar_label: Nodo Snapshot
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Snapshot en Core

---

Las snapshots son esenciales para una red blockchain, ya que permiten que los nodos se sincronicen con el estado más reciente de la red lo más rápido posible. Antes de que los nodos puedan utilizarse, deben estar sincronizados con el estado actual de la red. Al iniciar desde una snapshot reciente, el proceso de sincronización es

## Requisitos del Sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo Snapshot en la red Core.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un nodo Snapshot en Core proporciona snapshots periódicas del estado de la blockchain, lo que permite una sincronización más rápida de los nodos y reduce los requisitos de almacenamiento. Estos nodos ayudan a que nuevos validadores y nodos RPC se pongan al día rápidamente con el estado más reciente de la blockchain sin necesidad de procesar todo el historial. Los nodos Snapshot mejoran la eficiencia y accesibilidad de la red. En la red Core, los nodos Snapshot también actúan como nodos de archivo, almacenando todos los datos históricos de la blockchain. A continuación se presentan las recomendaciones mínimas de hardware para ejecutar un nodo Snapshot en Core. Estas especificaciones están diseñadas para manejar procesos de prueba y validación, asegurando al mismo tiempo un almacenamiento y sincronización de datos eficientes.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los nodos Snapshot en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4TB                                                  |
| **CPU**            | 4 CPU cores                                                                                             |
| **RAM**            | 16 Gigabytes                                                                                            |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                    |
```

  </TabItem>
  <TabItem value="testnet">
     Para los Nodos Snapshot en **Core testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4TB                                                  |
| **CPU**            | 4 CPU cores                                                                                             |
| **RAM**            | 16 Gigabytes                                                                                            |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                    |
```

  </TabItem>
  <TabItem value="mainnet">
Para los Nodos Snapshot en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4TB                                                  |
| **CPU**            | 4 CPU cores                                                                                             |
| **RAM**            | 16 Gigabytes                                                                                            |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                    |
```

  </TabItem>
</Tabs>

## Snapshots de la Red Core

Puede obtener las snapshots más recientes desde [aquí](https://github.com/coredao-org/core-snapshots).

## Sincronización de Nodos Usando Snapshots en la Red Core

En la red Core, un nodo puede sincronizarse con el estado más reciente de varias formas. Este documento proporciona una guía paso a paso del proceso de sincronización de nodos en la red Core utilizando snapshots.

### Descargar Binarios Precompilados

Descargue los binarios precompilados desde la [página de lanzamientos de Core](https://github.com/coredao-org/core-chain/releases/latest) o siga las instrucciones a continuación

##### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

##### MacOs

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
```

### Descargue los archivos de configuración

Descarga de `genesis.json` y `config.toml` ejecutando los siguientes comandos:

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)


unzip mainnet.zip
```

### Configuración de Peers

- **Mainnet**: el archivo `config.toml` de la última versión viene configurado con la información sobre los nodos `Bootstrap nodes` y `Static Nodes`, como se muestra a continuación:

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

### Descargar snapshot

Descarga la snapshot más reciente de los datos de la cadena desde [aquí](https://github.com/coredao-org/core-snapshots).

### Iniciar el nodo

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Asegúrese de utilizar la versión de geth que descargó con wget arriba, y no su instalación local de geth, que podría ser la versión incorrecta.
:::

:::tip
It is recommended to run a fast node, which is a full node with the `--tries-verify-mode none` flag set, if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Monitorear el estado del nodo

Puede monitorear los registros para conocer el estado del nodo. De forma predeterminada, los registros se almacenan en `./node/logs/core.log`.

## Modo de Sincronización

Hay dos modos de sincronización para ejecutar un nodo completo: **snap** y **full** que se pueden especificar mediante el indicador **--syncmode**.

- El modo de sincronización **snap** se utiliza para la sincronización inicial, que descarga los últimos estados en lugar de ejecutar los bloques desde la génesis. Una vez completada la sincronización inicial, cambia automáticamente al modo full para continuar.

- El modo de sincronización **full** también se puede utilizar para realizar una sincronización inicial, que ejecutará todos los bloques desde su génesis. Pero **no se recomienda**, ya que la cantidad de datos históricos es demasiado grande. En su lugar, puede descargar una instantánea del [repositorio oficial](https://github.com/coredao-org/core-snapshots) e iniciar la sincronización completa desde la instantánea.

- Si no se proporciona la marca **--syncmode**, el modo de sincronización predeterminado dependerá del estado de la carpeta de datos. Será el modo **snap** si sincroniza desde génesis o el modo **full** si comienza desde una snapshot.