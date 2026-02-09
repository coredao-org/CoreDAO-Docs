---
sidebar_label: Preguntas frecuentes sobre los nodos de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre los nodos de Core

---

### 1. ¿Cuáles son los diferentes tipos de nodos soportados en la blockchain de Core?

En la red Core, un nodo completo Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

Además de esto, Core también soporta

- **Nodo de archivo:** almacena todos los datos de la cadena de bloques de Core desde el bloque de génesis.
- **Nodos Snapshot:** almacenan snapshots para ayudar a otros nodos a acelerar la sincronización con la red.

### 2. ¿Cuáles son los beneficios de ejecutar un Core Node?

Correr un Nodo Completo de Core ofrece varios beneficios, incluyendo una mayor seguridad de la red y descentralización. Los operadores pueden verificar las transacciones de forma independiente y no dependen de terceros. Los validadores que utilizan nodos completos pueden participar en la producción y validación de bloques, obteniendo posibles recompensas. Los nodos configurados como servidores RPC brindan valiosos servicios de red. La configuración requiere cumplir con especificaciones específicas de hardware y ancho de banda, las cuales varían dependiendo de la función del nodo: completo, validador o servidor RPC.

### 3. ¿Qué es un nodo completo de Core? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Full?

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal:** para uso privado.
- **Nodo completo del validador:** actúa como validador en el Core, validando bloques y transacciones.
- **Nodo completo RPC:** proporciona servicios RPC y responde a solicitudes HTTP.

**Requisitos de software:** Actualmente, un Core Full Node solo se puede ejecutar en Mac OS X y Linux.

**Especificaciones de Hardware para Nodo Completo en Core Testnet**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucles                                                                      |
| RAM                   | 8 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

Para más detalles, consulte la [Guía de Configuración de Nodo Completo](../Node/config/full-node.md)

**Especificaciones de Hardware para Nodo Completo en Core Mainnet**

| **Requisitos**        | **Detalles**                                                                      |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco                                                    |
| CPU                   | 4 CPU nucleos                                                                     |
| RAM                   | 32 Gigabytes                                                                      |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

Para más detalles, consulte la [Guía de Configuración de Nodo Completo](../Node/config/full-node.md)

### 4. ¿Qué es un nodo RPC de Core? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core RPC?

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

**Requisitos de Software:** Actualmente, un Nodo Completo de Core solo puede ejecutarse en macOS X y Linux.

**Especificaciones de Hardware para Nodo Completo en Core Testnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 16 Gigybtes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

**Especificaciones de Hardware para Nodo Completo en Core Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 16 CPU  nucleos                                                                                                                                                                                |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 50Mbps                                                                                                             |

Para más detalles, consulte la [guía de configuración del nodo RPC](../Node/config/rpc-node-config.md)

### 5. ¿Qué es un nodo validador central? ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo Core Validator?

Los validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

**Requisitos de software:** Actualmente, un Nodo Completo de Core solo puede ejecutarse en macOS X y Linux.

**Especificaciones de hardware para Nodo Completo en Core Testnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

**Especificaciones de hardware para Nodo Completo en Core Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 8 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

Para más detalles, consulte la [Guía de Configuración de Nodo Validator](../Node/config/validator-node-config.md)

### 6. ¿Cómo configuro un nodo completo en la blockchain de Core?

Consulte la guía detallada [aquí](../Node/config/full-node.md) para instrucciones sobre cómo configurar y ejecutar un nodo completo en la red Core.