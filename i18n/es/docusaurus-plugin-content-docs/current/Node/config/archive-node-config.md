---
sidebar_label: Nodo Archivo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Archivo en Core

---

Los nodos de archivo en la red Core desempeñan un papel crucial en el mantenimiento del estado histórico completo de la red. Estos nodos son versiones especializadas de nodos completos con capacidades mejoradas diseñadas para almacenar y brindar acceso al historial completo de todas las transacciones y estados desde el inicio del Core.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo de archivo en la red central.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Archivo de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).

- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad

- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un Nodo Archivo en Core almacena todo el historial de la blockchain, garantizando la disponibilidad de los datos y la integridad para los participantes de la red. Soporta la consulta de transacciones pasadas, la verificación de datos históricos y mejora el análisis de la blockchain. Aunque no son necesarios para el consenso, los nodos archivo juegan un papel crucial en el mantenimiento de la transparencia y en el apoyo a las aplicaciones descentralizadas. A continuación se presentan los requisitos de hardware para ejecutar un Nodo Archivo en Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
Para los Nodos Archivo en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos        | Detalles                                                                                                 |  
|-------------------|----------------------------------------------------------------------------------------------------------|
| **Almacenamiento**| Unidad de Estado Sólido (SSD) con una capacidad mínima de 1TB. Se recomiendan los SSD debido a sus velocidades de lectura y escritura más rápidas, lo cual es crucial para gestionar grandes cantidades de datos de la blockchain y proporcionar acceso rápido a las transacciones históricas.|
| **CPU**           | CPU  de 8 núcleos                                                                                        |
| **RAM**           | 32 Gigabytes                                                                                             |
| **Internet**      | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps.                      |
```

  </TabItem>
  <TabItem value="testnet">
    Para los Nodos Archivo en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos        | Detalles                                                                                                 |  
|-------------------|----------------------------------------------------------------------------------------------------------|
| **Almacenamiento**| Unidad de Estado Sólido (SSD) con una capacidad mínima de 2TB. Se recomiendan los SSD debido a sus velocidades de lectura y escritura más rápidas, lo cual es crucial para gestionar grandes cantidades de datos de la blockchain y proporcionar acceso rápido a las transacciones históricas.|
| **CPU**           | CPU  de 8 núcleos                                                                                        |
| **RAM**           | 32 Gigabytes                                                                                             |
| **Internet**      | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps.                      |
```

  </TabItem>
  <TabItem value="mainnet">
    Para los Nodos Archivo en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos        | Detalles                                                                                                 |  
|-------------------|----------------------------------------------------------------------------------------------------------|
| **Almacenamiento**| Unidad de Estado Sólido (SSD) con una capacidad mínima de 4TB. Se recomiendan los SSD debido a sus velocidades de lectura y escritura más rápidas, lo cual es crucial para gestionar grandes cantidades de datos de la blockchain y proporcionar acceso rápido a las transacciones históricas.|
| **CPU**           | CPU  de 8 núcleos                                                                                        |
| **RAM**           | 32 Gigabytes                                                                                             |
| **Internet**      | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps.                      |
```

  </TabItem>
</Tabs>

## Ejecución del nodo de archivo principal

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, ejecutando su nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario de nodo más reciente desde el GitHub del [repositorio de lanzamientos de Core](https://github.com/coredao-org/core-chain/releases/latest) y la última versión para el nodo de archivo desde el [Repositorio de Snapshots de Core](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet.

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

4\. Nuestro nodo completo/de archivo está listo, ¡comencemos a ejecutarlo! Puedes ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo de archivogeth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full 
```

5\. A medida que se ejecuta nuestro nodo de archivo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
