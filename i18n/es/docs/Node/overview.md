---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Nodos en el ecosistema central

---

En el ecosistema Core, la solidez, la seguridad y la descentralización de la red están respaldadas por los nodos operados por los participantes de la comunidad. Estos nodos facilitan diversas funciones, desde la validación de transacciones hasta la propagación de bloques, garantizando la salud y eficiencia generales de la red.

Depending on your goals, various node configurations are possible on the Core network. If you haven't already started any node on the Core network yet, please review the documentation before proceeding with different configurations.

- **If you want to be part of the governance of the Core Network**

    - [**Inicia un Nodo Validador**](./config/validator-node-config.md)

- **If you want to run a node on the Core network for private use**
    - [**Inicia un nodo completo normal**](./config/full-node.md)

- **Si deseas enviar transacciones o consultar la cadena directamente desde tu propio nodo de la blockchain Core**

    - [**Iniciar un nodo RPC**](./config/rpc-node-config.md)

- **Si deseas solicitar datos históricos de la cadena desde el bloque génesis**

    - [**Iniciar un nodo de arhivo**](./config/archive-node-config.md)

- **Si desea ayudar a los operadores de nodos a sincronizarse rápidamente con la red**

    - [\*\*Iniciar un nodo de snapshot](./config/snapshot-node-config.md)

## Tipos de nodos en la red Core

1. **Nodos Completos Normales:**
    - **Rol:** Los Nodos Completos Normales mantienen una copia completa y en tiempo real del libro mayor de la blockchain, validan transacciones y apoyan la red retransmitiendo datos de bloques y transacciones. These are useful for private use.

    - **Requisitos:** Operar un Nodo Completo requiere recursos computacionales y de almacenamiento significativos para manejar todos los datos de la blockchain y el tráfico continuo de la red.

2. **Validadores:**
    - **Rol:** Los Validadores son fundamentales para la seguridad de la red, ya que producen bloques y validan transacciones dentro del marco de consenso de la blockchain Core. Esencialmente, son nodos completos ejecutándose en modo validador.
    - **Requirements:** Validators must stake a minimum of **10,000 CORE tokens** to participate, aligning their financial incentives with the network's performance and security.
    - **Incentivos:** Los Validadores ganan recompensas en tokens CORE por su papel activo en el mantenimiento y la seguridad de las operaciones de la red.

3. **Nodos RPC:**
    - **Rol:** Los nodos RPC proporcionan una interfaz de programación de aplicaciones (API) para que los desarrolladores y aplicaciones externas interactúen con la cadena de bloques, facilitando consultas y transacciones.
    - **Importancia:** Son esenciales para el desarrollo y operación de aplicaciones descentralizadas (DApps) y para el acceso externo a los datos de blockchain.

4. **Nodos de archivo:**
    - **Role:** Archive Nodes store the entire history of the blockchain, including all states and transactions since the genesis block, providing a valuable resource for deep historical queries.
    - **Requisitos:** Estos nodos requieren una gran capacidad de almacenamiento, ya que mantienen todos los estados actuales y vencidos de la cadena de bloques, lo que los hace consumir muchos recursos.
    - **Usage:** Archive Nodes are essential for developers who require access to all historical blockchain data for analysis, audits, and advanced blockchain querying.

5. **Nodo snapshot:**
    - **Función:** Los nodos snapshot mantienen capturas de la blockchain en varios intervalos. These snapshots capture the state of the blockchain at a specific block height, providing a restore point for Full Nodes or new nodes.
    - **Beneficios:** Proporcionan un medio para una rápida sincronización y recuperación de otros nodos en la red, mejorando la resiliencia y escalabilidad de la infraestructura de la red.

## Importancia de cada tipo de nodo

- **Validadores** garantizan la validez de las transacciones y el consenso de la red.
- Los **nodos completos** y los **nodos de archivo** proporcionan redundancia e integridad de datos.
- Los **Nodos RPC** permiten el desarrollo de aplicaciones y la interacción con la cadena de bloques.
- **Snapshot Nodes** facilitate efficient network scaling and expedite node synchronization.

## Conclusión

Las diversas funciones de los nodos en el ecosistema Core garantizan colectivamente que la cadena de bloques sea segura, eficiente, accesible y robusta. Validators, Full Nodes, and Archive nodes form the backbone of the network's security and data integrity. At the same time, RPC nodes and Snapshot nodes provide flexibility, accessibility, and scalability. Esta arquitectura de nodo multifacética admite una amplia gama de operaciones, desde el procesamiento de transacciones hasta interacciones complejas de dApps y análisis de datos históricos.