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

There are several system requirements, both software and hardware, for setting up a Validator node on the Core network.

### Software

- **Operating System:** Currently, a Core Validator node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

A Validator node on Core participates in block production and transaction validation, ensuring network security and consensus. Los validadores son elegidos en función de su puntaje híbrido (poder de hash de Bitcoin delegado, staking de CORE y staking de Bitcoin) y se turnan para producir bloques. Juegan un papel fundamental en mantener la integridad de la blockchain y ganan recompensas por asegurar la red. The following are the hardware requirements for running Validator Nodes on Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Validator Nodes on **Core testnet2**, following minimum hardware specifications are recommended:

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
   For Validator Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

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





