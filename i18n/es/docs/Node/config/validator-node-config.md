---
sidebar_label: Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Validador en Core

---

Los Validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

## Requisitos del Sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo Validador en la red Core.

### Software

- **Sistema Operativo:** Actualmente, un nodo Validador de Core es compatible _únicamente_ con sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un nodo Validador en Core participa en la producción de bloques y la validación de transacciones, asegurando la seguridad y el consenso de la red. Los validadores son elegidos en función de su hybrid score ( Bitcoin delegado, staking de CORE y staking de Bitcoin) y toman turnos en la producción de bloques. Desempeñan un papel crítico en mantener la integridad de la blockchain, obteniendo recompensas por asegurar la red. A continuación se presentan los requisitos de hardware para ejecutar Nodos Validadores en Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para los Nodos Validadores en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
| **RAM**            | 8 Gigabytes                                                                                             |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 10Mbps.                 |
```

  </TabItem>

  <TabItem value="mainnet">
Para los Nodos Validadores en **Core Mainnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
| **RAM**            | 32 Gigabytes                                                                                            |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 10Mbps.                 |
```

  </TabItem>
</Tabs>





