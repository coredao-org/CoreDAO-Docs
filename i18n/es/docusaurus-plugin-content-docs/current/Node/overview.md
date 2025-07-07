---
sidebar_label: Tipos de nodos
hide_table_of_contents: false
sidebar_position: 2
---

# Nodos en el ecosistema central

---

En el ecosistema Core, la solidez, la seguridad y la descentralización de la red están respaldadas por los nodos operados por los participantes de la comunidad. Estos nodos facilitan diversas funciones, desde la validación de transacciones hasta la propagación de bloques, garantizando la salud y eficiencia generales de la red.

Según tus objetivos, existen varias configuraciones posibles de nodo en la red Core. Si aún no has iniciado ningún nodo en la red Core, por favor revisa la documentación antes de proceder con diferentes configuraciones.

- **Si quieres participar en la gobernanza de la red Core**

    - [**Inicia un Nodo Validador**](./config/validator-node-config.md)

- **Si quieres ejecutar un nodo en la red Core para uso privado**
    - [**Inicia un nodo completo normal**](./config/full-node.md)

- **Si deseas enviar transacciones o consultar la cadena directamente desde tu propio nodo de la blockchain Core**

    - [**Iniciar un nodo RPC**](./config/rpc-node-config.md)

- **Si deseas solicitar datos históricos de la cadena desde el bloque génesis**

    - [**Iniciar un nodo de arhivo**](./config/archive-node-config.md)

- **Si desea ayudar a los operadores de nodos a sincronizarse rápidamente con la red**

    - [**Iniciar un nodo de snapshot**](./config/snapshot-node-config.md)

## Tipos de nodos en la red Core

1. **Nodos Completos Normales:**
    - **Rol:** Los Nodos Completos Normales mantienen una copia completa y en tiempo real del libro mayor de la blockchain, validan transacciones y apoyan la red retransmitiendo datos de bloques y transacciones. Son útiles para uso privado.

    - **Requisitos:** Operar un Nodo Completo requiere recursos computacionales y de almacenamiento significativos para manejar todos los datos de la blockchain y el tráfico continuo de la red.

2. **Validadores:**
    - **Rol:** Los Validadores son fundamentales para la seguridad de la red, ya que producen bloques y validan transacciones dentro del marco de consenso de la blockchain Core. Esencialmente, son nodos completos ejecutándose en modo validador.
    - **Requisitos:** los validadores deben hacer stake de un mínimo de 10,000 tokens CORE para participar, alineando sus incentivos financieros con el rendimiento y la seguridad de la red.
    - **Incentivos:** Los Validadores ganan recompensas en tokens CORE por su papel activo en el mantenimiento y la seguridad de las operaciones de la red.

3. **Nodos RPC:**
    - **Rol:** Los nodos RPC proporcionan una interfaz de programación de aplicaciones (API) para que los desarrolladores y aplicaciones externas interactúen con la cadena de bloques, facilitando consultas y transacciones.
    - **Importancia:** Son esenciales para el desarrollo y operación de aplicaciones descentralizadas (DApps) y para el acceso externo a los datos de blockchain.

4. **Nodos de archivo:**
    - **Rol:**Los nodos archive almacenan toda la historia de la blockchain, incluyendo todos los estados y transacciones desde el bloque génesis, proporcionando un recurso valioso para consultas históricas profundas.
    - **Requisitos:** Estos nodos requieren una gran capacidad de almacenamiento, ya que mantienen todos los estados actuales y vencidos de la cadena de bloques, lo que los hace consumir muchos recursos.
    - **Uso:** Los nodos archive son esenciales para desarrolladores que requieren acceso a todos los datos históricos de la blockchain para análisis, auditorías y consultas avanzadas.

5. **Nodo snapshot:**
    - **Función:** Los nodos snapshot mantienen capturas de la blockchain en varios intervalos. Estas capturas de estado guardan el estado de la blockchain en una altura de bloque específica, proporcionando un punto de restauración para nodos Full o nuevos nodos.
    - **Beneficios:** Proporcionan un medio para una rápida sincronización y recuperación de otros nodos en la red, mejorando la resiliencia y escalabilidad de la infraestructura de la red.

## Importancia de cada tipo de nodo

- **Validadores** garantizan la validez de las transacciones y el consenso de la red.
- Los **nodos completos** y los **nodos de archivo** proporcionan redundancia e integridad de datos.
- Los **Nodos RPC** permiten el desarrollo de aplicaciones y la interacción con la cadena de bloques.
- **Nodos snapshot** facilitan a escalar la red eficientemente y a sincronizar los nodos más rápido.

## Conclusión

Las diversas funciones de los nodos en el ecosistema Core garantizan colectivamente que la cadena de bloques sea segura, eficiente, accesible y robusta. Los validadores, los nodos completos y los nodos de archivo forman la columna vertebral de la seguridad y la integridad de los datos de la red. Al mismo tiempo, los nodos RPC y los nodos snapshot brindan flexibilidad, accesibilidad y escalabilidad. Esta arquitectura de nodo multifacética admite una amplia gama de operaciones, desde el procesamiento de transacciones hasta interacciones complejas de dApps y análisis de datos históricos.