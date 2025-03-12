---
sidebar_label: Prueba de trabajo delegada
hide_table_of_contents: false
sidebar_position: 2
description: Aprovechando DPoW en Satoshi Plus
---

# Prueba de trabajo delegada (DPoW) en el mecanismo de consenso Satoshi Plus

---

## Descripción general

La prueba de trabajo delegada (DPoW) es un elemento crucial del mecanismo de consenso Satoshi Plus de Core. Este sistema aprovecha la sólida seguridad de la minería de Bitcoin, integrándola en la cadena de bloques Core para mejorar la seguridad e incentivar la participación sin costos adicionales. A continuación se ofrece una descripción detallada de cómo funciona DPoW y su importancia.

DPoW permite a los mineros de Bitcoin obtener una recompensa de segundo bloque además de sus recompensas de Bitcoin mientras protegen la cadena de bloques Core, creando una relación simbiótica que beneficia a ambas redes.

![dpow-core-architechture](../../../../static/img/staoshi-plus/dpow.jpg)

## Cómo funciona DPoW en Satoshi Plus

En la red Bitcoin, los mineros de Bitcoin generan poder hash para proteger la red Bitcoin, validar transacciones y ganar recompensas de Bitcoin. Para igualar sus recompensas con el tiempo, los mineros de Bitcoin a menudo aportan su poder de hash a los grupos de minería, que utilizan el poder de hash agregado para aumentar las posibilidades generales del grupo de extraer un bloque de Bitcoin y recibir Bitcoin a cambio. DPoW integra la minería de Bitcoin directamente en el protocolo de seguridad del Core a través de un sistema de delegación. Aquí hay un desglose paso a paso de su funcionamiento:

1. **Integración minera**: los mineros de Bitcoin continúan con sus actividades mineras estándar, pero con el paso adicional de señalar su apoyo a Core blockchain. Esto se logra incluyendo una transacción especial en los bloques de Bitcoin que extraen, que especifica el Core Validator que desean admitir.

2. **Metadatos en bloques de Bitcoin**: en el bloque de Bitcoin minado, los mineros agregan metadatos en el campo `op_return`. Estos metadatos incluyen la dirección del Core Validator y la dirección para recibir recompensas de tokens CORE, delegando efectivamente una parte de su poder de hash a la red Core.

3. **Soporte de validador**: al incluir esta información, los mineros delegan su poder computacional a los validadores en Core. Estos validadores utilizan el poder delegado para participar en la versión de validación y creación de bloques de la cadena de bloques central.

4. **Retransmisores**: Los retransmisores son responsables de monitorear la red Bitcoin y transmitir bloques y datos de transacciones a la red Core. Dentro de la red central, un cliente ligero BTC integrado en la cadena procesa los datos entrantes de los retransmisores y reenvía la información de delegación (incluido el poder hash y la participación sin custodia) al "Centro de delegación". El Centro de Delegación sirve como componente central responsable de gestionar y supervisar las delegaciones dentro de la red Central.  Durante una ronda de 1 día, la red Core calcula el DPoW para cada validador contando el número de bloques que los mineros delegaron a cada validador _una semana antes_. Si la ronda ocurre un jueves, por ejemplo, Core tabulará el poder de hash delegado a cada validador contando los bloques del _último_ jueves.

5. **Mecanismo de recompensa**: a cambio de su contribución, los mineros reciben recompensas adicionales en forma de tokens CORE, además de las recompensas habituales de la minería de Bitcoin. Este sistema de doble recompensa incentiva a los mineros a participar en el proceso DPoW sin necesidad de desviar recursos de la minería de Bitcoin.

## Proceso paso a paso

1. **Extracción de bloques de Bitcoin:** Los mineros de Bitcoin continúan con su función principal de extraer bloques en la red de Bitcoin mediante Prueba de trabajo (PoW).

2. **Incluyendo información de delegación:** Los mineros agregan dos datos adicionales en el campo op_return de la transacción de coinbase:

- **Dirección del validador principal:** La dirección del validador principal al que delegar el poder hash.
- **Dirección de recompensa del token CORE:** La dirección a la que el minero desea que se le envíen las recompensas del token CORE.

3. **Delegar poder de hash:** Esta acción delega el poder de hash del minero al validador central elegido, reutilizando el trabajo existente sin incurrir en costos adicionales.

4. **Elección del validador:** Los validadores con mayor poder de hash delegado tienen una mayor probabilidad de ser elegidos para el conjunto de validadores.

5. **Recompensas del validador:** Los validadores obtienen recompensas por procesar bloques, reciben una pequeña comisión y pasan recompensas a sus delegados, incluido cualquier minero de Bitcoin o grupo de minería que les haya delegado poder de hash.

6. **Obtención de recompensas:** Los mineros o los grupos de minería reciben recompensas en tokens CORE además de sus recompensas de Bitcoin, lo que brinda incentivos adicionales.

## Importancia de DPoW en Satoshi Plus

- **Seguridad mejorada:** Al integrar el PoW de Bitcoin, Core se beneficia de la incomparable infraestructura de seguridad de Bitcoin, lo que hace que la red Core sea más resistente.

- **Mayores incentivos:** Los mineros de Bitcoin obtienen un flujo de ingresos adicional a través de recompensas de tokens CORE, lo que mejora su rentabilidad general sin costos de energía adicionales.

- **Relación simbiótica:** Este sistema promueve beneficios mutuos para las redes Bitcoin y Core, fomentando un entorno cooperativo que fortalece el ecosistema blockchain.

- **Eficiencia de recursos**: DPoW permite a los mineros maximizar la utilidad de sus recursos computacionales existentes. Al respaldar la seguridad del ecosistema Core mientras realizan sus operaciones regulares de minería de Bitcoin, los mineros pueden contribuir a dos redes simultáneamente sin gasto de energía adicional.

#### **Conclusión**

DPoW es una innovación crítica dentro del mecanismo de consenso Satoshi Plus, extiende los incentivos de los mineros de la red Bitcoin para alinearse con el mecanismo de consenso Satoshi Plus de Core. Core recibe la participación de los mineros de Bitcoin en su seguridad, y Bitcoin recibe mineros mejor remunerados. El resultado es un conjunto de mineros que está más incentivado a proteger tanto Bitcoin como Core.

