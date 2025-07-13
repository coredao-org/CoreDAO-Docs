---
sidebar_label: Nodos de archivo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos de Archivo en Core

---

Los nodos de archivo en la red Core juegan un papel crucial en el mantenimiento del estado histórico completo de la red. Estos nodos son versiones especializadas de nodos completos, con capacidades mejoradas diseñadas para almacenar y proporcionar acceso a todo el historial de transacciones y estados desde el inicio de Core.

## Requisitos del Sistema

Existen varios requisitos de sistema, tanto de software como de hardware, para configurar un nodo de archivo en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un nodo de archivo de Core es compatible _únicamente_ con sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos.

### Hardware

Un Nodo Archivo en Core almacena todo el historial de la blockchain, garantizando la disponibilidad de los datos y la integridad para los participantes de la red. Permite consultar transacciones pasadas, verificar datos históricos y mejorar el análisis de la blockchain. Aunque no es obligatorio para el consenso, los nodos de archivo desempeñan un papel fundamental en el mantenimiento de la transparencia y el soporte a las aplicaciones descentralizadas. A continuación se detallan los requisitos de hardware para ejecutar un nodo de archivo en Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
Para los nodos de archivo en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 1 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>

  <TabItem value="mainnet">
Para los nodos de archivo en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | Solid State Drive (SSD) with a minimum capacity of 4 TB. SSDs are recommended due to their faster read and write speeds, which are crucial for managing large blockchain data and providing quick access to historical transactions.               |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 5Mbps                                |
```

  </TabItem>
</Tabs>

## Ejecución de un Nodo de Archivo de Core

1. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde el código base de la blockchain. Las instrucciones para compilar el código fuente se encuentran en el archivo [README](https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descarga el binario más reciente del nodo desde el [Repositorio de Releases de Core](https://github.com/coredao-org/core-chain/releases/latest) y la snapshot más reciente para nodo de archivo desde el [Repositorio de Snapshots de Core](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración correspondientes para mainnet y testnet.

3. Escribe el estado génesis localmente ejecutando el siguiente comando desde tu directorio de proyecto:

```bash
geth --datadir node init genesis.json
```

4. ¡Ahora que la configuración del nodo de archivo está completa, es momento de ejecutarlo! Ejecuta el siguiente comando `geth` para iniciar el nodo de archivo:

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```

5. Mientras el nodo de archivo esté en ejecución, puedes monitorear sus logs para asegurarte de que todo esté funcionando correctamente. El archivo de registro se encuentra, por defecto, en `./node/logs/core.log`, aunque puedes cambiar su ubicación si lo deseas.



