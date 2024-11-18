---
sidebar_label: Prueba de participación delegada
hide_table_of_contents: false
sidebar_position: 2
description: Leveraging DPoS in Satoshi Plus
---

# Prueba de participación delegada (DPoS)

---

## Descripción general

La prueba de participación delegada (DPoS) es un componente fundamental del mecanismo de consenso Satoshi Plus empleado por Core blockchain. Este modelo de consenso está diseñado para complementar la solidez de la prueba de trabajo delegada (DPoW) con un sistema de participación flexible, democrático y escalable. DPoS no sólo mejora la seguridad de la red sino que también promueve la participación de la comunidad en la gobernanza, convirtiéndolo en un aspecto esencial del funcionamiento de blockchain.
DPoS permite a los poseedores de tokens CORE y [Bitcoin](../../products/btc-stake/overview.md) votar y participar en la elección del conjunto de validadores delegando sus tenencias a sus validadores preferidos. Debido a que solo existe un requisito mínimo de participación muy pequeño de 1 token CORE, todos los poseedores de CORE pueden contribuir a la gobernanza de la red Core. En lo que respecta a las apuestas de bitcoin, la configuración actual requiere un **requisito de apuesta mínima de 0,01 BTC** (pero esto se puede ajustar en el futuro mediante una votación de gobernanza). Los poseedores de tokens CORE y BTC pueden delegar sus respectivos tokens a validadores de su elección a través del [sitio web de apuestas] oficial (https://stake.coredao.org/). En esta sección cubrimos en profundidad el funcionamiento y la importancia de DPoS en el funcionamiento de Satoshi Plus.

## Cómo funciona DPoS en Satoshi Plus

DPoS opera permitiendo a los poseedores de tokens CORE participar activamente en el consenso de la red apostando sus tokens con Validadores. Este proceso implica varios pasos clave:

- **Tokens de apuesta:** Core permite tipos de tokens que se pueden apostar, su token nativo CORE y BTC. Los poseedores de tokens CORE pueden apostar sus tokens en la plataforma Core bloqueándolos en un contrato inteligente asociado con un Validador que elijan respaldar. Los tokens apostados representan un voto de confianza en la capacidad del Validador para mantener la integridad y seguridad de la red. De manera similar, los titulares de BTC pueden apostar su BTC en la red Core a través de [apuesta sin custodia] (../../products/btc-stake/overview.md) de manera segura y sin confianza sin tener que renunciar a la custodia de su activos. Esto se logra mediante bloqueos de tiempo absolutos que garantizan que Bitcoin permanezca bajo el control del titular mientras participa en la apuesta. Luego pueden delegar su BTC apostado a cualquier validador en la red Core y ganar recompensas en forma de tokens CORE a cambio de su delegación.

- **Elección del validador:** Los validadores se eligen en función de la participación total (BTC y CORE) que les delegan los poseedores de tokens. Cuantos más tokens apostados tenga un Validador, mayores serán sus posibilidades de ser seleccionado para validar transacciones y crear nuevos bloques. Este método garantiza que aquellos con mayor confianza y participación de la comunidad sean responsables de la seguridad de la red.

- **Creación y validación de bloques:** Una vez elegidos, los validadores desempeñan un papel crucial en el procesamiento de transacciones y la creación de nuevos bloques. Se aseguran de que todas las transacciones dentro de un bloque sean válidas de acuerdo con las reglas de la cadena de bloques y luego agregan estos bloques a la cadena de bloques.

- **Distribución de recompensas:** Los validadores y sus delegados obtienen recompensas en tokens CORE por su participación en la protección de la red. Estas recompensas se distribuyen proporcionalmente en función de la cantidad de participación que aporta cada delegado, lo que incentiva tanto a los validadores como a los poseedores de tokens a actuar en el mejor interés de la red.

## Proceso paso a paso

1. **Apostar tokens CORE/BTC:** Los poseedores de tokens CORE deciden participar en la seguridad de la red apostando sus tokens. El requisito mínimo de apuesta es 1 token CORE o 0,01 BTC.

2. **Delegar a los validadores:** Los titulares de tokens delegan sus tokens CORE/BTC apostados a un validador elegido, lo que ayuda a su puntuación híbrida en el proceso de elección del validador.

3. **Elección de validador:** Los validadores con la puntuación híbrida más alta, que incluye CORE delegado, son elegidos para el conjunto de validadores para una ronda determinada.

4. **Producción de bloques:** Los validadores elegidos son responsables de producir bloques y validar transacciones durante su vigencia, obteniendo así recompensas.

5. **Obtención de recompensas:** Los participantes de CORE y BTC obtienen recompensas de los validadores en quienes delegaron.

## Importancia de DPoS en Satoshi Plusstakers obtienen recompensas de los validadores en quienes delegaron.

- **Seguridad y eficiencia de red mejoradas:** DPoS aprovecha la participación de numerosos participantes para proteger la red, lo que reduce el riesgo de centralización inherente a los sistemas PoW tradicionales. El sistema de delegación también permite un procesamiento más eficiente de transacciones y creación de bloques, ya que solo unos pocos validadores elegidos necesitan llegar a un consenso, lo que acelera el proceso de validación de transacciones.

- **Descentralización y democratización de la gobernanza de la red:** Al permitir que cualquier poseedor de tokens participe en el proceso de consenso, DPoS democratiza la gobernanza de la red. Esta inclusión fomenta una estructura de red más resiliente y descentralizada, ya que las decisiones las toma una base más amplia de partes interesadas, lo que refleja una gama diversa de intereses comunitarios.

- **Escalabilidad:** Los sistemas DPoS suelen ser más escalables que los sistemas PoW tradicionales porque requieren menos potencia computacional y pueden procesar transacciones más rápido. Esto es crucial para Core blockchain, ya que su objetivo es respaldar un ecosistema en crecimiento de aplicaciones descentralizadas sin sacrificar el rendimiento.

- **Incentivación comunitaria:** DPoS fomenta la participación de la comunidad recompensando a las partes interesadas con tokens CORE. Esto no solo alinea los incentivos de los validadores y los poseedores de tokens, sino que también garantiza que quienes invierten recursos y confían en la red sean compensados ​​por sus contribuciones.

- **CORE con apuestas líquidas:** Los tokens CORE también se pueden apostar con líquidos, lo que permite a los apostadores usar tokens stCORE en el ecosistema DeFi de Core.

- **Producción de bloques eficiente:** El proceso de delegación permite un modelo eficiente y escalable, ya que se eligen validadores probados y capaces para proteger la red.

#### **Conclusión**

En el mecanismo de consenso Satoshi Plus, DPoS desempeña un papel fundamental al proporcionar un equilibrio al componente DPoW que consume mucha energía. La prueba de participación delegada es un mecanismo poderoso que mejora la seguridad y eficiencia de la cadena de bloques central. Al permitir a los poseedores de tokens CORE y BTC apostar y delegar sus tokens, DPoS promueve una amplia participación y una sólida seguridad de la red.
