---
sidebar_label: Preguntas frecuentes sobre los nodos de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre los nodos de Core

---

### 1. ¿Cuáles son los diferentes tipos de nodos admitidos en la cadena de bloques Core?

En la red Core, un nodo completo Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

Aparte de este Core también es compatible

- **Nodo de archivo:** almacena todos los datos de la cadena de bloques de Core desde el bloque de génesis.
- **Nodos de instantáneas:** almacena instantáneas para ayudar a otros nodos a acelerar la sincronización con la red.

### 2. ¿Cuáles son los beneficios de ejecutar un Core Node?

Ejecutar un Core Full Node ofrece múltiples beneficios, como mejorar la seguridad y la descentralización de la red. Los operadores pueden verificar las transacciones de forma independiente y no dependen de terceros. Los validadores que utilizan nodos completos pueden participar en la producción y validación de bloques, obteniendo posibles recompensas. Los nodos configurados como servidores RPC brindan valiosos servicios de red. La configuración requiere el cumplimiento de especificaciones específicas de hardware y ancho de banda, que varían según la función del nodo: básico, validador o servidor RPC.

### 3. ¿Qué es un nodo completo de Core? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Full?

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

**Requisitos de software:** Actualmente, un Core Full Node solo se puede ejecutar en Mac OS X y Linux.

**Especificaciones de hardware del nodo completo de Testnet**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucles                                                                      |
| RAM                   | 8 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

For more details, refer to [Full Node Confgiurations Guide](../Node/config/full-node.md)

**Especificaciones de hardware del nodo completo de Mainnet**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucleos                                                                     |
| RAM                   | 32 Gigabytes                                                                      |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

For more details, refer to [Full Node Confgiurations Guide](../Node/config/full-node.md)

### 4. ¿Qué es un nodo RPC de Core? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core RPC?

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

**Requisitos de software:** Actualmente, un Core Full Node solo puede ejecutarse en Mac OS X y Linux.

**Especificaciones de hardware del nodo completo de Testnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 16 Gigybtes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

**Especificaciones de hardware del nodo completo de Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 16 CPU  nucleos                                                                                                                                                                                |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

Para obtener más detalles, consulte la [Guía de configuración de nodos RPC] (../Node/config/rpc-node-config.md)

### 5. ¿Qué es un nodo validador central? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Validator?

Validators are crucial for securing the network by producing blocks and validating transactions within the Core blockchain's Satoshi Plus consensus framework.

**Requisitos de software:** Actualmente, un Core Full Node solo puede ejecutarse en Mac OS X y Linux.

**Especificaciones de hardware del nodo completo de Testnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

**Especificaciones de hardware del nodo completo de Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

Para obtener más detalles, consulte la [Guía de configuración del nodo validador] (../Node/config/validator-node-config.md)

### 6. ¿Cómo configuro un nodo completo en Core blockchain?

Refer to the detailed guide [here](../Node/config/full-node.md) on how to set up and run a full node on the Core network.
