---
sidebar_label: Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Validadores en Core

---

Los validadores son cruciales para proteger la red al producir bloques y validar transacciones dentro del marco de consenso Satoshi Plus del Core. honorarios).

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un Nodo Validador en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Validador de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un nodo validador en Core participa en la producción de bloques y la validación de transacciones, asegurando la seguridad y el consenso de la red. Los validadores son elegidos en función de su puntaje híbrido (poder de hash de Bitcoin delegado, staking de CORE y staking de Bitcoin) y se turnan para producir bloques. Juegan un papel fundamental en mantener la integridad de la blockchain y ganan recompensas por asegurar la red. A continuación se presentan los requisitos de hardware para ejecutar Nodos Validadores en Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los Nodos Validadores en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos | Detalles                                                                                                    |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento **        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, 250MB/S de rendimiento, latencia de lectura <1ms. |
| **CPU**            | Se recomienda un mínimo de 4 núcleos de CPU. Los procesadores de múltiples núcleos permiten que el nodo maneje operaciones simultáneas, como la validación de transacciones y la verificación de bloques, de manera eficiente.                                                                                          |
| **RAM**            | 8 Gigabytes                                                                                         |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de carga y descarga de 10 megabytes por segundo.   |
```

  </TabItem>
  <TabItem value="testnet">
    Para los Nodos Validadores en **Core Blockchain Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos | Detalles                                                                                                    |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento **        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, 250MB/S de rendimiento, latencia de lectura <1ms. |
| **CPU**            | Se recomienda un mínimo de 4 núcleos de CPU. Los procesadores de múltiples núcleos permiten que el nodo maneje operaciones simultáneas, como la validación de transacciones y la verificación de bloques, de manera eficiente.                                                                                          |
| **RAM**            | 8 Gigabytes                                                                                         |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de carga y descarga de 10 megabytes por segundo.   |
```

  </TabItem>
  <TabItem value="mainnet">
    Para los Nodos Validadores en **Core Blockchain Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requisitos | Detalles                                                                                                    |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Almacenamiento **        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, 250MB/S de rendimiento, latencia de lectura <1ms. |
| **CPU**            | Se recomienda un mínimo de 4 núcleos de CPU. Los procesadores de múltiples núcleos permiten que el nodo maneje operaciones simultáneas, como la validación de transacciones y la verificación de bloques, de manera eficiente.                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                         |
| **Internet** | Una conexión a Internet de banda ancha con velocidades de carga y descarga de 10 megabytes por segundo.   |
```

  </TabItem>
</Tabs>
