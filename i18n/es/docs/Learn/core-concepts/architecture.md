---
sidebar_label: Arquitectura
hide_table_of_contents: false
sidebar_position: 2
description: Un vistazo rápido a la arquitectura blockchain subyacente de Core
---

# Arquitectura de la cadena de Core

---

La arquitectura de Core se basa en **Satoshi Plus**, un mecanismo de consenso tripartito que integra **Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Staking de Bitcoin sin custodia**.

A través de Satoshi Plus, **los mineros o pools de minería de Bitcoin, los holders de CORE en staking y los stakers de Bitcoin** delegan recursos para elegir validadores que protegen la red Core. La selección de validadores se basa en el score híbrido, que considera:

- **Poder de hasheo delegado** de los mineros o pools de minería de Bitcoin
- **Tokens de CORE en staking delegado** de los takers de CORE
- **Bitcoin en staking delegado** de stakers de Bitcoin

### **El Primer Staking No Custodiado de Bitcoin y con Tasa Libre de Riesgo en Bitcoin**

El componente de Staking No Custodiado de Bitcoin de Satoshi Plus es **el primer mecanismo de staking no custodiado para Bitcoin**, permitiendo a los holders de Bitcoin obtener rendimiento nativo **sin modificar los supuestos de confianza de Bitcoin**. Esto establece efectivamente la **Tasa Libre de Riesgo de Bitcoin**, un hito revolucionario en la historia de Bitcoin.

### **Aprovechando la Seguridad de Bitcoin y Empoderando a los Mineros**

Actualmente, Satoshi Plus se beneficia de la seguridad del **\~75% de todo el poder de hash de minería en Bitcoin** a través de la delegación. Al involucrar a los mineros en las elecciones de validadores, se aprovecha la descentralización incomparable de Bitcoin mientras **se les ofrece recompensas adicionales**, abordando así la disminución a largo plazo de las recompensas por bloque de Bitcoin.

<p align="center">
![component-diagram](../../../static/img/Core-Architecture.png)
</p>

## **Blockchain de Core: Componentes, roles y flujos de trabajo**

#### **Roles clave**

- **Validadores**: Producen bloques y validan transacciones en la red Core. Cualquiera puede convertirse en validador registrándose y bloqueando un depósito reembolsable de CORE (fianza de validador).
- **Mineros de Bitcoin**: Aseguran Bitcoin mediante PoW y pueden delegar poder de hash a los validadores de Core incluyendo información de delegación en la transacción coinbase de un bloque, sin tener que comprometer la seguridad de Bitcoin.
- **Stakers de CORE**: Delegan tokens CORE a validadores para respaldar la seguridad de la red.
- **Stakers de Bitcoin**: Delegan Bitcoin a validadores en Core mediante staking no custodiado y generan rendimiento sin ceder la custodia de sus activos.
- **Relayers (Retransmisores)**: Son responsables de sincronizar los datos entre las redes Core y Bitcoin. Transmiten datos de bloques y transacciones de Bitcoin a Core. Cualquiera puede convertirse en relayer registrándose y bloqueando un depósito reembolsable de tokens CORE.
- **Verificadores**: Reportan comportamientos maliciosos en la red Core. Las verificaciones exitosas pueden activar el slashing (incautación) o jailing (bloqueo) de validadores y actores maliciosos, y los verificadores son compensados por esta actividad de monitoreo cuando se distribuyen las recompensas de bloque. Cualquiera puede actuar como verificador en la red Core.

#### **Consenso y Elección**

- **Elección de Validadores**: Cada **ronda (1 día)**, los **27 validadores** principales según su **puntaje híbrido** (PoW de mineros, DPoS de stakers de CORE y stakers de Bitcoin) son elegidos para formar parte del conjunto activo de validadores y asegurar la red. Cualquier validador en el conjunto actual de validadores que no haya sido bloqueado (jailed) o penalizado (slashed) se considera "activo" (live). Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.
- **Score Híbrido:** Cada nodo validador que busca formar parte del conjunto activo de validadores recibe un puntaje híbrido (hybrid score), calculado en función de tres tipos de delegación:
  poder de hasheo, CORE y Bitcoin. El conjunto activo de validadores está compuesto por los 27 validadores con las puntuaciones híbridas más altas.
- **Ronda:** Una ronda dura **un día**, durante la cual los **27 mejores validadores** (clasificados según su score hibrido) son elejidos para producir bloques. Al final de la ronda, **las recompensas son calculadas para esa ronda completa y distribuidas**, y el siguiente set de validadores es calculado.
- **Época (10 minutos o 200 slots)**: El estatus del validador es verificado constantemente para asegurar que nodos bloqueados (jailed) no participen en el consenso. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener las transacciones por segundo aproximadamente constante en una ronda determinada.
- **Slot (3 segundos)**: Cada ronda de 1 día se divide en slots y todos los validadores del conjunto de validadores se turnan para producir un bloque por slot al estilo round-robin.

#### **Recompensas y estabilidad**

- **Módulo de recompensas:** Las recompensas se distribuyen al final de cada ronda según el desempeño de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Las recompensas se distribuyen al **final de cada ronda**.
- Los validadores vivos se actualizan **cada 200 bloques** para mantener las transacciones por segundo estables.

## Prueba de trabajo delegada

Para participar en Satoshi Plus, los mineros y/o grupos de minería simplemente escriben dos datos adicionales en el campo \`op\_return\` mientras producen un nuevo bloque de Bitcoin:

1. La dirección del Validador de Core al que desean delegar su poder de hasheo.
2. La dirección en la cual el minero quiere recibir su recompensa en tokens CORE.

A cambio de participar en el proceso de consenso de Core al delegar poder de hasheo para votar por validadores, los mineros de Bitcoin reciben recompensas en tokens CORE adicionales a sus recompensas existentes por minería en la red Bitcoin. De esta manera, Satoshi Plus conecta la participación de los mineros de Bitcoin con la red de Core, mientras que la red de Bitcoin obtiene mineros mejor compensados (es decir, con mayores incentivos).

## Prueba de participación delegada

El proof of stake delegado (DPoS) es el método para involucrar a los holders principales de CORE en la seguridad del protocolo. Para participar en el consenso, cualquier holder de tokens CORE puede hacer staking de sus tokens CORE con validadores en la red de Core, votando así por esos validadores de la misma manera que un minero podría delegar su poder de hasheo para elegir un validador.\
De manera similar, así como los mineros reciben recompensas, los apostadores de tokens CORE también obtienen recompensas de tokens CORE por contribuir al consenso de Satoshi Plus. Una ventaja significativa de DPoS en comparación con los modelos estándar de Proof of Stake es que el primero permite que todos los holders de tokens participen por igual. Por el contrario, el último a veces solo permite a los grandes holders participar en el staking.

## Staking de Bitcoin sin custodia

La metodología de Satoshi Plus para integrar el staking de Bitcoin se centra en los absolute time locks, una característica criptográfica nativa de Bitcoin que bloquea los outputs de una transacción durante un período predefinido, durante el cual no pueden gastarse.\
En lugar de que los titulares cedan la custodia de Bitcoin a apuestas externas, los participantes con Satoshi Plus simplemente colocan sus Bitcoin en bloqueos de tiempo absoluto como parte de una transacción, y la transacción puede diseñarse para devolver el resultado una vez transcurrido el período de tiempo. Dentro de esa transacción, los participantes deben incluir un script que contenga la misma información que los mineros de Bitcoin incluyen en sus bloques delegados:

1. La dirección del Validador de Core al que el staker desea delegar su Bitcoin.
2. La dirección donde el staker desea recibir sus recompensas en tokens CORE.

Los stakers de Bitcoin obtienen un rendimiento sobre sus bitcoins, que de otro modo estarían inactivos, en forma de recompensas en tokens CORE durante el tiempo que establezcan el time-lock (y, por lo tanto, durante el tiempo que delegan sus bitcoins para votar por Validadores en Core). El resultado es que miles de millones de dólares en valor de Bitcoin infrautilizado se volverán productivos, remunerando a los stakers mientras amplían el alcance de la utilidad de Bitcoin.

## Elección del validador

La síntesis de DPoW, DPoS y el staking de Bitcoin sin custodia ocurre durante la elección del conjunto de validadores de Satoshi Plus. Los validadores que reciben la combinación más alta de poder de hash delegado, CORE apostado y Bitcoin apostado son elegidos para el conjunto de validadores. La combinación más alta está determinada por una puntuación híbrida, que equilibra los tres elementos.

## Recompensas

Las recompensas de Satoshi Plus se derivan de:

1. Las recompensas por bloque de CORE se distribuirán a lo largo de **81 años**
2. Tarifas de transacción pagadas en la red Core con tokens CORE.

Tras la producción exitosa de un bloque, los validadores reciben estas recompensas en tokens CORE. Dado que los validadores electos dependen completamente de sus delegadores, cuando reciben recompensas por bloques y tarifas por transacciones al producirlos, distribuyen la mayor parte de estas recompensas entre sus delegantes (mineros, stakers de CORE y stakers de Bitcoin).\
Las recompensas pagadas a los delegadores se asignan proporcionalmente a su poder de voto. Por lo tanto, el peso que tenga su voto en el cálculo del score híbrido determinará la proporción de recompensas que recibirán de los validadores.

## Corte y seguridad

En los sistemas tradicionales de Proof of Stake, los stakers corren el riesgo de ser slasheados si no mantienen un nodo seguro y confiable, se comportan de manera maliciosa o participan en actividades que comprometen la integridad de la red. En Satoshi Plus, esto sigue siendo cierto para los validadores. Los validadores deben cumplir un alto estándar, ya que su deber es adherirse honestamente al conjunto de reglas de Satoshi Plus. Por lo tanto, si no cumplen, enfrentan el slashing de sus recompensas acumuladas y/o del depósito bloqueado de tokens CORE, lo que resulta en una severa penalización económica y cero recompensas.

Aunque el slashing garantiza la máxima responsabilidad de los validadores, el diseño del mecanismo Satoshi Plus no está pensado para penalizar a los participantes por acciones fuera de su control. Por lo tanto, los mineros, los stakers de CORE y los stakers de Bitcoin no corren el riesgo de que sus activos delegados sean slasheados. Su incentivo para elegir a los mejores validadores radica en las recompensas que pueden obtener al seleccionar con diligencia. El riesgo de elegir a validadores equivocados es que no recibirán las recompensas que de otro modo recibirían. Esa penalización económica sirve como un incentivo eficaz y al mismo tiempo es justa para los stakers.

## Conclusión

La arquitectura de Core está diseñada para convertirla en la plataforma ideal para BTCfi. Satoshi Plus no solo amplía la protección de Bitcoin sino que también refuerza su modelo de seguridad al tiempo que introduce un rendimiento nativo para Bitcoin por primera vez. Este diseño integral asegura un ecosistema BTCfi de extremo a extremo, liberando todo el potencial del activo Bitcoin.
