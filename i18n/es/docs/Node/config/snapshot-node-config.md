---
sidebar_label: Nodo Snapshot
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Snapshot en Core

---

Los snapshots son esenciales para que una red asegure que los nodos puedan sincronizarse con el estado más reciente de la red lo más rápido posible. Antes de que los nodos puedan ser utilizados, deben sincronizarse con el estado actual de la red. Al iniciarse desde un snapshot reciente, el proceso de sincronización es considerablemente más rápido

## Requerimientos del Systema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un Nodo de Snapshot en la red Core.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un nodo Snapshot en Core proporciona instantáneas periódicas del estado de la blockchain, lo que permite una sincronización más rápida de los nodos y reduce los requerimientos de almacenamiento. Estos nodos ayudan a que nuevos validadores y nodos RPC se pongan al día rápidamente con el estado más reciente de la blockchain sin tener que procesar toda la historia. Los nodos snapshot mejoran la eficiencia y accesibilidad de la red. En la red Core, los nodos Snapshot también actúan como nodos archivo, almacenando todos los datos de la blockchain. A continuación se presentan las especificaciones mínimas de hardware recomendadas para ejecutar un nodo Snapshot en Core. Estas especificaciones están diseñadas para manejar los procesos de prueba y validación, garantizando al mismo tiempo un almacenamiento de datos eficiente y una sincronización rápida.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para nodos Snapshot en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 megabytes por segundo.
```

  </TabItem>
  <TabItem value="testnet">
    Para nodos Snapshot en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                |
```

  </TabItem>
  <TabItem value="mainnet">
Para nodos Snapshot en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisito | Detalles                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento** | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB                                      |
| **CPU**            | CPU de 4 núcleos                                                                                    |
| **RAM**            | 16 Gigabytes                                                                                        |
| **Internet**       | Una conexión a internet de banda ancha con velocidades de descarga y carga de 5 Mbps                |
```

  </TabItem>
</Tabs>

## Instantáneas de la red central

Puede obtener las instantáneas más recientes desde [aquí](https://github.com/coredao-org/core-snapshots).

## Sincronización de nodos mediante instantáneas en la red central

En la red Core, un nodo puede sincronizarse con el estado más reciente de varias maneras. Este documento proporciona una guía paso a paso del proceso de sincronización de nodos en la red Core utilizando snapshots.

### Descargar binarios precompilados

Descarga los binarios precompilados desde la página [Core Releases Page](https://github.com/coredao-org/core-chain/releases/latest) o sigue las instrucciones a continuación

##### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

##### MacOs

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

### Descargue los archivos de configuración

Descarga los archivos `genesis.json` y `config.toml` ejecutando los siguientes comandos:

```bash
```

### Configuración de pares

- **Mainnet**: El archivo `config.toml` incluido en la última versión viene configurado con la información sobre los `nodos Bootstrap` y los `nodos Static`, como se muestra a continuación:

```yaml
```

### Descargar instantánea

Descarga la instantánea de datos de la cadena más reciente desde [aquí](https://github.com/coredao-org/core-snapshots).

### Iniciar el nodo

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Asegúrate de usar la versión de geth que descargaste con wget anteriormente y no tu instalación local de geth, la cual podría ser una versión incorrecta.
:::

:::tip
It is recommended to run a fast node, which is a full node with the `--tries-verify-mode none` flag set, if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Monitorear el estado del nodo

Puede monitorear los registros para conocer el estado del nodo. Por defecto, los logs se almacenan en `./node/logs/core.log`.

## Modo de sincronización

Existen dos modos de sincronización para ejecutar un nodo completo: **snap** y **full**, los cuales se pueden especificar mediante la bandera **--syncmode**.

- El modo **snap** sync se utiliza para la sincronización inicial. Este modo descarga los estados más recientes en lugar de ejecutar los bloques desde el bloque génesis. Una vez completada la sincronización inicial, el nodo cambiará automáticamente al modo full.

- El modo **full** sync también puede utilizarse para la sincronización inicial, pero ejecutará todos los bloques desde el bloque génesis. Pero **no se recomienda**, ya que la cantidad de datos históricos es demasiado grande. En su lugar, se sugiere descargar una snapshot desde el [repositorio oficial](https://github.com/coredao-org/core-snapshots) e iniciar una sincronización completa desde dicha snapshot.

- Si no se proporciona la marca **--syncmode**, el modo de sincronización predeterminado dependerá del estado de la carpeta de datos. Será el modo **instantáneo** si sincroniza desde génesis o el modo **completo** si comienza desde una instantánea.