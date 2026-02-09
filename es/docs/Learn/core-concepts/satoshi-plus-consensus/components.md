---
sidebar_label: Componentes principales
hide_table_of_contents: false
sidebar_position: 2
description: Conozca los componentes principales del mecanismo Satoshi Plus
---

# Mecanismo de consenso Satoshi Plus

---

El mecanismo de consenso Satoshi Plus representa una innovación revolucionaria en la tecnología blockchain, diseñada específicamente para que la plataforma Core combine sinérgicamente los sólidos atributos de seguridad de Bitcoin con la flexibilidad y escalabilidad de los contratos inteligentes. Este modelo de consenso híbrido combina la prueba de trabajo delegada (DPoW), la prueba de participación delegada (DPoS) y la participación sin custodia de Bitcoin, lo que permite a los mineros de Bitcoin participar directamente en la gobernanza y la seguridad de una plataforma de contrato inteligente descentralizada sin incurrir en costos adicionales. Al aprovechar la infraestructura minera de Bitcoin establecida, Satoshi Plus no solo fomenta un protocolo de seguridad de doble capa, sino que también mejora las estructuras de incentivos en ambos ecosistemas, asegurando una alineación equilibrada de intereses entre todas las partes interesadas involucradas en Core blockchain.

![satoshi-plus](https://github.com/user-attachments/assets/8e90becb-71c2-4798-813c-27bcf6e1badb)

## Componentes principales del mecanismo Satoshi Plus

El mecanismo de consenso Satoshi Plus, diseñado para Core blockchain, integra ingeniosamente características de Prueba de Trabajo Delegada (DPoW), Prueba de Participación Delegada (DPoS) y Participación No Custodial de Bitcoin. Este sistema híbrido está diseñado para aprovechar las fortalezas de la infraestructura minera existente de Bitcoin y al mismo tiempo incorpora la flexibilidad de los mecanismos de participación que prevalecen en muchas cadenas de bloques modernas. A continuación se detallan los distintos componentes, sus funciones y cómo interoperan para mantener la seguridad y la eficiencia de la red. A continuación se muestra un diagrama que ilustra cómo los diferentes componentes principales del mecanismo de consenso Satoshiu plus encajan para proporcionar un ecosistema seguro y sólido.

![component-diagram](../../../../static/img/staoshi-plus/component-diagram.jpg)

### 2. **Prueba de participación delegada (DPoS)**

**Descripción:**
DPoW amplía el sistema tradicional de prueba de trabajo (PoW) utilizado por Bitcoin para incluir funciones de delegación. Esto permite a los mineros de Bitcoin participar en el mecanismo de consenso de Core blockchain sin alterar significativamente sus operaciones mineras existentes.

**Cómo funciona:**

- **Participación de los mineros:** Los mineros de Bitcoin contribuyen a la seguridad de Core blockchain al asignar una parte de su poder computacional a la red. Esto se facilita a través de una implementación única donde los mineros incluyen metadatos específicos (como la dirección de un Core Validator y el destino de sus recompensas de tokens CORE) en el campo "op_return" de un bloque de Bitcoin.
- **Flujo de trabajo:** Cuando un minero extrae un nuevo bloque de Bitcoin, agrega esta información adicional para indicar su soporte para un Core Validator en particular. Este poder de hash delegado ayuda a proteger la cadena de bloques Core y, a cambio, los mineros obtienen tokens CORE adicionales, que son complementarios a sus recompensas habituales de minería de Bitcoin.
  - **Mineros de Bitcoin**: los mineros de Bitcoin protegen la red Bitcoin a través de PoW y pueden delegar su PoW a un validador central al incluir cierta información en la transacción de coinbase de un bloque mientras está en proceso de minado. Esta delegación no es destructiva, lo que significa que están reorientando su trabajo existente, sin elegir entre proteger Bitcoin y proteger Core.

  - **Relayers** - Relayers transmit Bitcoin blocks and transaction data to the Core network. Cualquiera puede convertirse en retransmisor registrándose y bloqueando un depósito de token CORE reembolsable.

### 4. **Validadores**

**Descripción:**
DPoS permite a los poseedores de tokens Bitcoin y CORE participar en la gobernanza de la red apostando sus tokens con Validadores. Este modelo promueve un proceso de consenso más democrático y escalable en comparación con el PoW tradicional.

**Cómo funciona:**

- **Apuesta y votación:** Los poseedores de tokens apuestan sus tokens CORE con Validadores, votando efectivamente para que participen en el proceso de consenso. Cuantos más tokens se apuesten con un Validador, mayor será su influencia en la validación de transacciones y la creación de nuevos bloques.
- **Flujo de trabajo:** Los participantes delegan sus tokens a los validadores a través de un proceso de participación seguro en la plataforma Core. A cambio, reciben recompensas por apostar en forma de tokens CORE. Los tokens apostados contribuyen a los procesos generales de seguridad y toma de decisiones de la red.
  - **Bitcoin Stakers**: la tercera parte del consenso de Satoshi Plus es la participación sin custodia de Bitcoin, que permite a cualquier titular de bitcoin obtener rendimiento apostando sus tokens de bitcoin sin renunciar a la custodia.
  - **CORE Stakers**: todos los poseedores de tokens CORE nativos de Core Chain pueden garantizar la seguridad de la red delegando sus tenencias de tokens a un validador.

### 3. **Apuesta de Bitcoin sin custodia**

**Descripción:**
El tercer componente más importante del mecanismo de consenso de Satoshi Plush es el **Stake de Bitcoin sin custodia**. Esta característica permite a los titulares de Bitcoin participar en la gobernanza de la red apostando su Bitcoin de forma nativa en Bitcoin y luego delegándolos a sus validadores deseados en la red Core. Este modelo promueve un proceso de consenso más democrático y escalable en comparación con el PoW tradicional.

**Cómo funciona:**

- **Apuesta y votación:** Los poseedores de Bitcoin apuestan sus activos en la red Bitcoin y también los delegan a sus Validadores deseados en la cadena de bloques central, votando efectivamente para que participen en el proceso de consenso. Cuanto más Bitcoin se apueste con un Validador, mayor será su influencia en la validación de transacciones y la creación de nuevos bloques.
- **Flujo de trabajo:** Los participantes delegan sus Bitcoin a los validadores a través de un proceso de participación seguro en la plataforma Core. A cambio, reciben recompensas por apostar en forma de tokens CORE. Los tokens apostados contribuyen a los procesos generales de seguridad y toma de decisiones de la red.

### 5. **Alineación de incentivos**

**Descripción:**
Los validadores son fundamentales para el funcionamiento del mecanismo Satoshi Plus. Realizan funciones críticas de red, incluida la producción de bloques, la validación de transacciones y el logro de consenso. Cualquiera puede convertirse en validador de Core registrándose en la red y bloqueando un depósito de token CORE reembolsable.

**Cómo funciona:**

- **Producción de bloques:** Los validadores son responsables de crear nuevos bloques en la cadena de bloques Core. Agregan transacciones en bloques, las ejecutan y luego agregan estos bloques a la cadena de bloques.
- **Flujo de trabajo:** Los validadores se eligen para producir bloques en función de su participación total delegada (tanto de DPoW como de DPoS). El proceso de selección considera la cantidad de poder de hash y participación simbólica que se les delega, lo que garantiza que aquellos con mayor apoyo de la comunidad tengan una mayor probabilidad de ser seleccionados para crear bloques.
  - **Elección de validador**: el conjunto de validadores se determina mediante elección, y los validadores se eligen en función de su puntuación híbrida para cada ronda. Cualquier validador en el conjunto de validadores actual que no haya sido encarcelado o recortado se considera "_vivo_". Para garantizar un TPS más estable, los validadores en vivo se actualizan cada **200** bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre. Core utiliza su mecanismo de elección de validador para clasificar a los **23** validadores principales en función de puntuaciones híbridas, creando el conjunto de validadores para un período de consenso de **200** espacios, conocido como época. Cada espacio presenta una oportunidad para crear un bloque y dura **3** segundos. Como tal, cada época dura **600** segundos, o **10** minutos, y le da al validador hasta **10** oportunidades de crear un bloque una vez aceptado para una época.

  - **Puntuación híbrida**: cada nodo de validación que busca formar parte del conjunto de validadores recibe una puntuación híbrida, que se calcula en función de tres factores: el DPoW de los mineros de Bitcoin, el DPoS de los titulares de CORE y los titulares de bitcoins que delegan bitcoins a sus validadores preferidos. El conjunto de validadores se compone de los **23** validadores con las puntuaciones híbridas más altas.

  - **Verificadores**: los verificadores son responsables de informar comportamientos maliciosos en la red. Las marcas de verificación exitosas pueden resultar en una reducción drástica de las recompensas o la participación de un validador malicioso, o encarcelarlo directamente, y los verificadores son compensados ​​por esta actividad de monitoreo cuando se otorgan recompensas en bloque. Cualquiera puede actuar como verificador en la red Core.

  - **Ronda**: una ronda es el período de tiempo durante el cual la red central actualiza el conjunto de validadores y distribuye recompensas. Actualmente, una ronda dura un día. En cada ronda (es decir, todos los días), todos los validadores reciben una puntuación híbrida y los **23** validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores. Luego, el conjunto de validadores se vuelve responsable de producir bloques en la red Core durante la totalidad de esa ronda. Cuando se ha producido el último bloque de cada ronda, se calculan y distribuyen las recompensas acumuladas para la ronda completa, y también se determina el validador establecido para la siguiente ronda.

  - **Ranura**: cada ronda de **1 día** se divide en ranuras y todos los validadores del conjunto de validadores se turnan para producir un bloque por ranura, en forma de turnos. Actualmente, la duración del espacio está establecida en tres segundos. En cada ranura, un validador honesto produce un bloqueo o no lo hace (si hay problemas de red, ataques de eclipse, etc.).

  - **Época**: una época es el lapso de tiempo durante el cual el sistema verifica el estado de cada validador para excluir a los validadores encarcelados de participar en actividades de consenso. Actualmente, una época está configurada en **200** espacios, que son **600** segundos o **10** minutos. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener el TPS aproximadamente constante en una ronda determinada.

### 6. **Seguridad de red y simbiosis**

**Descripción:**
Un aspecto crítico de Satoshi Plus es la alineación de incentivos entre mineros, participantes y validadores. Esto garantiza que todas las partes estén motivadas para actuar en el mejor interés de la red.

**Cómo funciona:**

- **Distribución de recompensas:** Tanto los mineros como los apostadores reciben recompensas en tokens CORE, alineando sus intereses con la salud de la red. Este sistema de doble recompensa fomenta la participación y el apoyo continuos a la red.
- **Flujo de trabajo:** Las recompensas se calculan en función de varios factores, incluida la cantidad de potencia computacional o tokens aportados, y se distribuyen automáticamente mediante el protocolo Core blockchain. Esto incentiva la participación continua y honesta en la red.

### 6. **Seguridad de red y simbiosis**

**Descripción:**
Satoshi Plus mejora la seguridad de las redes Bitcoin y Core al crear una relación simbiótica donde las mejoras de seguridad en una benefician a la otra.

**Cómo funciona:**

- **Modelo de seguridad compartida:** Al permitir que los mineros de Bitcoin participen en los mecanismos de seguridad de Core, el sistema aprovecha el inmenso poder de hash de Bitcoin, mejorando la seguridad de la cadena de bloques Core sin requerir recursos adicionales significativos.
- **Flujo de trabajo:** A medida que los mineros y los participantes contribuyen a la seguridad de Core Chain, ambas redes se benefician. Los mineros utilizan sus configuraciones existentes para respaldar la cadena de bloques Core, y los participantes proporcionan capas de seguridad adicionales a través de la delegación de tokens, creando una red sólida y resistente.

En resumen, el mecanismo de consenso de Satoshi Plus integra hábilmente estos componentes en un sistema cohesivo que se beneficia de la seguridad y descentralización del proceso de minería de Bitcoin y de la agilidad y capacidades de gobernanza de los modelos de participación modernos, fomentando un entorno blockchain seguro, eficiente y escalable.
