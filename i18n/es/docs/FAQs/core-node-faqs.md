---
sidebar_label: Preguntas frecuentes sobre los nodos de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre los nodos de Core

---

### 1. What are the different types of nodes supported on the Core blockchain?

En la red Core, un nodo completo Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

Other than this, Core also supports

- **Nodo de archivo:** almacena todos los datos de la cadena de bloques de Core desde el bloque de génesis.
- **Snapshot nodes:** store snapshots to help other nodes fast-track syncing to the network.

### 2. ¿Cuáles son los beneficios de ejecutar un Core Node?

Running a Core Full Node offers several benefits, including enhanced network security and decentralization. Los operadores pueden verificar las transacciones de forma independiente y no dependen de terceros. Los validadores que utilizan nodos completos pueden participar en la producción y validación de bloques, obteniendo posibles recompensas. Los nodos configurados como servidores RPC brindan valiosos servicios de red. The setup requires adherence to specific hardware and bandwidth specifications, which vary depending on the node's function: full, validator, or RPC server.

### 3. ¿Qué es un nodo completo de Core? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Full?

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

**Requisitos de software:** Actualmente, un Core Full Node solo se puede ejecutar en Mac OS X y Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucles                                                                      |
| RAM                   | 8 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

**Core Mainnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucleos                                                                     |
| RAM                   | 32 Gigabytes                                                                      |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

### 4. What is a Core RPC node? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core RPC?

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 16 Gigybtes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

**Core Mainnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 16 CPU  nucleos                                                                                                                                                                                |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

For more details, refer to [RPC node configuration guide](../Node/config/rpc-node-config.md)

### 5. ¿Qué es un nodo validador central? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Validator?

Los validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

**Core Mainnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

For more details, refer to [Validator Node Configurations Guide](../Node/config/validator-node-config.md)

### 6. How do I set up a full node on the Core blockchain?

Refer to the detailed guide [here](../Node/config/full-node.md) for instructions on setting up and running a full node on the Core network.