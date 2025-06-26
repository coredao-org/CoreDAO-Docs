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

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo Archive en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un nodo Archive de Core es compatible _únicamente_ con sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o versiones posteriores).
- **Conectividad de Red:** Conexión a Internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos.

### Hardware

Un nodo Archive en Core almacena todo el historial de la blockchain, garantizando la disponibilidad e integridad de los datos para los participantes de la red. Soporta la consulta de transacciones pasadas, la verificación de datos históricos y mejora el análisis de la blockchain. Aunque no son necesarios para el consenso, los nodos archivo juegan un papel crucial en el mantenimiento de la transparencia y en el apoyo a las aplicaciones descentralizadas. A continuación, se presentan los requisitos mínimos de hardware recomendados para ejecutar un nodo Archive en Core:

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
Para nodos Archive en Core Testnet2, se recomiendan las siguientes especificaciones mínimas de hardware:

```
```

  </TabItem>

  <TabItem value="mainnet">
Para nodos Archive en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
```

  </TabItem>
</Tabs>

## Ejecución del nodo de archivo principal

1. Se recomienda utilizar el repositorio [core-chain](https://github.com/coredao-org/core-chain) en GitHub para compilar y ejecutar el nodo completo directamente desde el código fuente de la blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descarga el último binario del nodo desde el [Core's Releases Repository](https://github.com/coredao-org/core-chain/releases/latest) y el último snapshot para nodos Archive desde el [Core's Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet.

3. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

4. Una vez completada la configuración del nodo Archive, ¡es hora de ejecutarlo! Ejecuta el siguiente comando `geth` para ponerlo en marcha:

```bash
```

5. Mientras el nodo Archive esté ejecutándose, puedes supervisar los logs para asegurarte de que todo esté funcionando correctamente: El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.



