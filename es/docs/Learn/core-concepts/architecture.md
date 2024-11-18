---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Un vistazo rápido a la arquitectura blockchain subyacente de Core
---

# Arquitectura de la cadena de Core

---

La arquitectura de Core blockchain se centra en su consenso Satoshi Plus, un mecanismo tripartito que combina prueba de trabajo delegada, prueba de participación delegada y participación de Bitcoin sin custodia. Además de la seguridad de Satoshi Plus, la infraestructura de Core también incluye un activo Bitcoin puenteado de confianza minimizada en coreBTC, transacciones Core `<>` de Bitcoin peer-to-peer sin confianza con intercambios atómicos HTLC y más.

A través de Satoshi Plus, los mineros/grupos de minería de Bitcoin, los apostadores de tokens CORE y los apostadores de Bitcoin eligen validadores para asegurar Core. Los validadores son elegidos por estas tres partes sobre la base de una puntuación híbrida, que calcula la recepción de cada validador del poder de hash delegado, los tokens CORE delegados/apostados y el Bitcoin delegado/apostado de los mineros/grupos de minería de Bitcoin, los apostadores de tokens CORE y los apostadores de Bitcoin. respectivamente.

El componente de apuesta de Bitcoin sin custodia de Satoshi Plus es el primer mecanismo de apuesta de Bitcoin en vivo, que desbloquea el rendimiento nativo de Bitcoin por primera vez en su historia. Sin introducir nuevos supuestos de confianza en la tenencia de Bitcoin, la participación de Bitcoin a través de Satoshi Plus establece la tasa libre de riesgo de Bitcoin.

Además, Satoshi Plus se beneficia actualmente de la seguridad de aproximadamente el 55 % de todos los esfuerzos de minería de Bitcoin, lo que se manifiesta en el poder de hash delegado. Al involucrar a los mineros y los grupos de minería en el proceso de elección del validador, Satoshi Plus se beneficia de la incomparable descentralización de Bitcoin y al mismo tiempo proporciona a los mineros recompensas suplementarias sin costo adicional, una propuesta valiosa a medida que las recompensas en bloque de Bitcoin continúan disminuyendo.

![diagrama-componente](../../../static/img/staoshi-plus/component-diagram.jpg)

## Componentes, funciones y flujos de trabajo principales

- **Validadores:** Los validadores son responsables de producir bloques y validar transacciones en la red Core. Cualquiera puede convertirse en validador de Core registrándose en la red y bloqueando un depósito de token CORE reembolsable.

- **Elección del validador:** El conjunto de validadores se determina mediante elección, y los validadores se eligen en función de su puntuación híbrida para cada ronda. Cualquier validador en el conjunto de validadores actual que no haya sido encarcelado o recortado se considera "vivo". Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.

- **Puntuación híbrida:** Cada nodo validador que busca formar parte del conjunto de validadores recibe una puntuación híbrida, que se calcula en función de tres factores: el DPoW de los mineros de Bitcoin, el DPoS de los titulares de CORE y los titulares de bitcoins que delegan bitcoins a sus validadores preferidos. El conjunto de validadores está compuesto actualmente por los 23 validadores con las puntuaciones híbridas más altas.

- **Mineros de Bitcoin:** Los mineros de Bitcoin protegen la red Bitcoin a través de PoW y pueden delegar su PoW a un validador central al incluir cierta información en la transacción de coinbase de un bloque mientras está en proceso de minado. Esta delegación no es destructiva, lo que significa que están reorientando su trabajo existente, sin elegir entre proteger Bitcoin y proteger Core.

- **CORE Stakers:** Todos los poseedores de tokens CORE nativos de Core pueden garantizar la seguridad de la red delegando sus tenencias de tokens a un validador.

- **Bitcoin Stakers:** La tercera parte del consenso de Satoshi Plus es la participación sin custodia de Bitcoin, que permite a cualquier titular de bitcoin obtener rendimiento apostando sus tokens de bitcoin sin renunciar a la custodia.

- **Retransmisores:** Los retransmisores transmiten encabezados de bloques de Bitcoin a la red central. Cualquiera puede convertirse en retransmisor registrándose y bloqueando un depósito de token CORE reembolsable.

- **Verificadores:** Los verificadores son responsables de informar comportamientos maliciosos en la red. Las marcas de verificación exitosas pueden resultar en una reducción drástica de las recompensas o la participación de un validador malicioso, o encarcelarlo directamente, y los verificadores son compensados ​​por esta actividad de monitoreo cuando se otorgan recompensas en bloque. Cualquiera puede actuar como verificador en la red Core.

- **Ronda:** Una ronda es el período de tiempo durante el cual la red Core actualiza el conjunto de validadores y distribuye recompensas. Actualmente, una ronda dura un día. En cada ronda (es decir, todos los días), todos los validadores reciben una puntuación híbrida y los 23 validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores. Luego, el conjunto de validadores se vuelve responsable de producir bloques en la red Core durante la totalidad de esa ronda. Cuando se ha producido el último bloque de cada ronda, se calculan y distribuyen las recompensas acumuladas para la ronda completa, y también se determina el validador establecido para la siguiente ronda.

- **Espacio:** Cada ronda de 1 día se divide en espacios, y todos los validadores en el conjunto de validadores se turnan para producir un bloque por espacio, en forma de turnos. Actualmente, la duración del espacio está establecida en tres segundos. En cada ranura, un validador honesto produce un bloqueo o no lo hace (si hay problemas de red, ataques de eclipse, etc.).

- **Epoca:** Una época es el lapso de tiempo durante el cual el sistema verifica el estado de cada validador para excluir a los validadores encarcelados de participar en actividades de consenso. Actualmente, una época se establece en 200 espacios, que son 600 segundos o 10 minutos. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener el TPS aproximadamente constante en una ronda determinada.

## Prueba de trabajo delegada

Para participar en Satoshi Plus, los mineros y/o grupos de minería simplemente escriben dos datos adicionales en el campo `op_return` mientras producen un nuevo bloque de Bitcoin:

1. La dirección del Core Validator al que el minero quiere delegar su poder hash.
2. La dirección a la que el minero desea que se envíen sus recompensas de tokens CORE.

A cambio de participar en el proceso de consenso delegando su poder de hash para votar por los Validadores, los mineros reciben recompensas de tokens CORE adicionales además de sus recompensas de bitcoins existentes. En resumen, Satoshi Plus recibe la participación de los mineros de Bitcoin y Bitcoin recibe mineros mejor remunerados (es decir, más incentivados).

## Prueba de participación delegada

La prueba de participación delegada es el método para involucrar a los usuarios principales en la seguridad del protocolo. Para participar en el consenso, cualquier poseedor de tokens CORE puede apostar sus tokens CORE con Validadores Core, votando así por esos Validadores de la misma manera que un minero podría delegar su poder de hash para elegir un validador.

De manera similar, así como los mineros reciben recompensas, los apostadores de tokens CORE también obtienen recompensas de tokens CORE por contribuir al consenso de Satoshi Plus. Una ventaja significativa de la Prueba de participación delegada en comparación con los modelos de Prueba de participación estándar es que el primero permite que todos los poseedores de tokens participen por igual, mientras que el segundo a veces solo permite que los grandes poseedores participen.

## Non-Custodial Bitcoin Staking

La metodología de Satoshi Plus para integrar la participación de bitcoin se centra en bloqueos de tiempo absoluto, una característica criptográfica nativa de Bitcoin que bloquea los resultados de una transacción durante un período de tiempo predefinido, durante el cual no se pueden gastar. En lugar de que los titulares cedan la custodia de Bitcoin a apuestas externas, los participantes con Satoshi Plus simplemente colocan sus Bitcoin en bloqueos de tiempo absoluto como parte de una transacción, y la transacción puede diseñarse para devolver el resultado una vez transcurrido el período de tiempo. Dentro de esa transacción, los participantes deben incluir un script que contenga la misma información que los mineros de Bitcoin incluyen en sus bloques delegados:

1. La dirección del Core Validator al que el apostador quiere delegar su bitcoin.
2. La dirección a la que el apostador desea que se envíen sus recompensas de tokens CORE.

Los apostadores de Bitcoin obtienen un rendimiento de su bitcoin, que de otro modo sería pasivo, en forma de recompensas de tokens CORE, durante el tiempo que establezcan el bloqueo de tiempo (y, por lo tanto, durante el tiempo que deleguen su bitcoin para votar por los Validadores en Core). El resultado final es que miles de millones de dólares en valor de Bitcoin subutilizado se volverán productivos, remunerando a los interesados ​​y al mismo tiempo ampliando el alcance de la utilidad de Bitcoin.

## Elección del validador

La síntesis de la prueba de trabajo delegada, la prueba de participación delegada y la participación de Bitcoin sin custodia se produce durante la elección del conjunto de validadores Satoshi Plus.

Los validadores que reciben la combinación más alta de poder de hash delegado, CORE apostado y Bitcoin apostado son elegidos para el conjunto de validadores. La combinación más alta está determinada por una puntuación híbrida, que equilibra los tres elementos.

## Recompensas

Las recompensas de Satoshi Plus se derivan de:

1. Las recompensas del bloque CORE se pagarán durante un período de 81 años
2. Tarifas de transacción pagadas en tokens CORE. Luego de una producción exitosa de bloques, los validadores obtienen estas recompensas de tokens CORE

Dado que los validadores electos dependen completamente de sus delegados, cuando reciben recompensas de bloque y tarifas de transacción por producir bloques, pagan la mayoría de sus recompensas a los mineros que delegan, a los participantes de CORE y a los participantes de Bitcoin.

Las recompensas pagadas a los delegados se asignan proporcionalmente a su poder de voto. Entonces, cualquier peso que tenga su voto en el cálculo de la puntuación híbrida es la proporción de recompensas que recibirán de los validadores.

## Corte y seguridad

En los sistemas tradicionales de Prueba de participación, los participantes corren el riesgo de ser eliminados si no logran mantener un nodo seguro y confiable, se comportan de manera maliciosa o participan en actividades que comprometan la integridad de la red. En Satoshi Plus, esto sigue siendo cierto para los validadores. Los validadores deben cumplir con altos estándares porque todo su deber es cumplir honestamente con el conjunto de reglas de Satoshi Plus. Por lo tanto, si no cumplen, su depósito de token CORE bloqueado se reduce drásticamente, lo que resulta en una penalización económica grave además de no acumular recompensas.

Si bien la reducción mantiene a los validadores con la máxima responsabilidad, el diseño de Satoshi Plus no pretende penalizar a los participantes por acciones que no controlan. Por lo tanto, los mineros, los apostadores de CORE y los apostadores de Bitcoin no tienen riesgo de que sus activos/poderes apostados o delegados sean recortados. Su incentivo para elegir a los mejores validadores radica en las recompensas que pueden obtener al seleccionar con diligencia. El riesgo de elegir los validadores equivocados es que no recibirán las recompensas que de otro modo recibirían. Esa penalización económica sirve como un incentivo eficaz y al mismo tiempo es justa para los interesados.

## Otros detalles del flujo de trabajo

1. **Producción de bloques y round robin:** Los validadores se turnan para producir bloques en forma round robin. Cada ronda se divide en espacios, con una duración actualmente establecida en 3 segundos.
2. **Módulo de recompensas:** Las recompensas se distribuyen al final de cada ronda según el desempeño de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
3. **Épocas y actualizaciones del quórum de validadores:** Las épocas, configuradas en 200 espacios (o 10 minutos), son la duración del ciclo para verificar el estado de cada validador. Los validadores encarcelados están excluidos del quórum para mantener estable la tasa de transacciones por segundo (TPS) durante toda la ronda.

## Otra infraestructura Core

### Bitcoin envuelto en nativo de core (coreBTC)

coreBTC es un activo de Bitcoin con puente nativo del núcleo que mantiene una vinculación 1:1 con Bitcoin, utilizando Lockers con exceso de garantías para una acuñación y canje seguros y con confianza minimizada. Este diseño permite la participación de Bitcoin en las actividades DeFi y contratos inteligentes de Core sin involucrar una custodia centralizada. Si bien coreBTC no es esencial para Satoshi Plus o para interactuar con Core DeFi, sí permite a los titulares de Bitcoin una forma nativa de Core y minimizada de confianza para transferir sus activos a la cadena de bloques Core.

### HTLC Atomic Swaps

Los contratos Hashed TimeLock (HTLC) permiten el intercambio de tokens entre pares y sin confianza entre Core y otras cadenas de bloques, incluido (y especialmente) Bitcoin.

### Mejoras futuras

- **Apuesta dual:** Se habilitarán tasas de apuesta de Bitcoin más altas para los apostadores de tokens Bitcoin y CORE.
- **Desarrollo del mercado de tarifas:** Core puede adoptar mercados de tarifas locales para hacer que las transacciones de Bitcoin sean más predecibles y económicas, respaldando así el uso de Bitcoin como medio de pago viable.
- **Mejoras de HTML:** Se están diseñando mejoras en el proceso de intercambio atómico, incluida la introducción de fondos de liquidez y suplementos del libro de órdenes, para facilitar una gestión de liquidez y negociación más eficiente.

## Conclusión

La arquitectura de Core está diseñada para convertirla en la plataforma ideal para BTCfi. Satoshi Plus no sólo amplía la protección de Bitcoin sino que también refuerza su modelo de seguridad al tiempo que introduce un rendimiento nativo para Bitcoin por primera vez. Este diseño integral asegura un ecosistema BTCfi de extremo a extremo, liberando todo el potencial del activo Bitcoin.
