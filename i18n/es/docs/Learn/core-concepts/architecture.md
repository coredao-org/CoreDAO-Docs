---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Arquitectura de la Blockchain de Core

---

La arquitectura de Core está construida en torno a **Satoshi Plus**, un mecanismo de consenso tripartito que integra Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Self-Custodial Bitcoin Staking.

A través de Satoshi Plus, **los mineros o pools de minería de Bitcoin, los holders de CORE en staking y los stakers de Bitcoin** delegan recursos para elegir validadores que protegen la red Core. La selección de validadores se basa en el score híbrido, que considera:

- **Poder de hasheo delegado** de los mineros o pools de minería de Bitcoin
- **Tokens de CORE en staking delegado** de los takers de CORE
- **Bitcoin en staking delegado** de stakers de Bitcoin

### **El primer Mecanismo de Staking Auto-Custodiado en Bitcoin**

El componente de Self-Custodial Bitcoin Staking de Satoshi Plus es **el primer mecanismo activo de staking auto-custiodado en Bitcoin** que permite a los holders obtener rendimientos sin custodia, sin introducir nuevas suposiciones de confianza.

### **Aprovechando la Seguridad de Bitcoin y Empoderando a los Mineros**

Actualmente, Satoshi Plus se beneficia de la seguridad del **\~75% de todo el poder de hash de minería en Bitcoin** a través de la delegación. Al involucrar a los mineros en las elecciones de validadores, aprovecha la descentralización inigualable de Bitcoin y, al mismo tiempo, ofrece recompensas adicionales a los mineros, abordando el descenso a largo plazo de las recompensas por bloque en Bitcoin.

<p align="center">
![component-diagram](../../../static/img/Core-Architecture.png)
</p>

## **Blockchain de Core: Componentes, roles y flujos de trabajo**

#### **Roles clave**

- **Validadores**: Producen bloques y validan transacciones en la red Core. Los validators deben registrarse y bloquear un depósito reembolsable en CORE como garantía de validador.
- **Bitcoin Miners:** Aseguran Bitcoin mediante Proof of Work y pueden delegar poder de hash a los validators de Core incluyendo información de delegación en la transacción coinbase de un bloque.
- **CORE Stakers:** Delegan tokens CORE a los validators como parte del proceso de elección de validadores para apoyar la seguridad de la red.
- **Bitcoin Stakers:** Delegan Bitcoin bloqueado mediante timelock a los validators en Core a través del Self-Custodial Bitcoin Staking, ganando rendimiento sin renunciar a la custodia de sus activos.
- **Relayers:** Responsables de sincronizar los datos entre las redes de Core y Bitcoin. Transmiten datos de bloques y transacciones de Bitcoin a Core. Cualquiera puede convertirse en relayer registrándose y bloqueando un depósito reembolsable de tokens CORE.
- **Verificadores**: Reportan comportamientos maliciosos en la red Core. Las verificaciones exitosas pueden desencadenar el slashing o jailing de validators y actores maliciosos. Los verifiers son compensados por esta labor de monitoreo cuando se reparten las recompensas por bloque. Cualquier persona puede actuar como verifier en la red de Core.

#### **Consenso y Elección**

- **Validator Election:** En cada **ronda (1 día)**, los **27 validadores** principales según el **hybrid score** (basado en DPoW de los mineros, DPoS de los CORE stakers y Bitcoin bloqueado por los holders de Bitcoin) son elegidos para formar parte del conjunto activo de validadores y asegurar la red. Cualquier validador en el conjunto actual de validadores que no haya sido bloqueado (jailed) o penalizado (slashed) se considera "activo" (live). Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.
- **Score Híbrido:** Cada nodo validador que busca formar parte del conjunto activo de validadores recibe un puntaje híbrido (hybrid score), calculado en función de tres tipos de delegación:
  poder de hasheo, CORE y Bitcoin. El conjunto activo de validadores está compuesto por los 27 validadores con las puntuaciones híbridas más altas.
- **Ronda:** Una ronda dura **un día**, durante la cual los **27 mejores validadores** (clasificados según su score hibrido) son elejidos para producir bloques. Al final de cada ronda, se **calculan y distribuyen las recompensas**, y se selecciona el siguiente conjunto de validadores.
- **Época (10 minutos o 200 slots)**: El estatus del validador es verificado constantemente para asegurar que nodos bloqueados (jailed) no participen en el consenso. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener las transacciones por segundo aproximadamente constante en una ronda determinada.
- **Slot (3 segundos)**: Cada ronda de 1 día se divide en slots y todos los validadores del conjunto de validadores se turnan para producir un bloque por slot al estilo round-robin.

#### **Recompensas y estabilidad**

- **Reward Module:** Las recompensas se distribuyen al final de cada round en función del rendimiento de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Las recompensas se distribuyen al **final de cada ronda**.
- Los validadores vivos se actualizan **cada 200 bloques** para mantener las transacciones por segundo estables.

## Prueba de trabajo delegada

Para participar en Satoshi Plus, los mineros y/o grupos de minería simplemente escriben dos datos adicionales en el campo \`op\_return\` mientras producen un nuevo bloque de Bitcoin:

1. La dirección del Validador de Core al que desean delegar su poder de hasheo.
2. La dirección en la cual el minero quiere recibir su recompensa en tokens CORE.

A cambio de participar en el proceso de consenso de Core mediante la delegación de su poder de hash para ayudar a elegir validadores, los mineros de Bitcoin reciben recompensas adicionales en tokens de CORE, además de sus recompensas habituales por minería en la red de Bitcoin. De este modo, Satoshi Plus incorpora la participación de los mineros de Bitcoin en la red de Core, mientras que la red de Bitcoin recibe mineros mejor compensados (es decir, con mayores incentivos).

## Prueba de participación delegada

El proof of stake delegado (DPoS) es el método para involucrar a los holders principales de CORE en la seguridad del protocolo. Para participar en el consenso, cualquier holder de CORE puede hacer staking de sus tokens con los validadores en la red de Core, ayudando así a elegir a esos validadores, de forma similar a como un minero delega su poder de hash para apoyar la elección de un validador.\
De manera análoga, así como los mineros reciben recompensas, los stakers de CORE también obtienen recompensas en tokens CORE por contribuir al consenso de Satoshi Plus. Una ventaja significativa de DPoS en comparación con los modelos estándar de Proof of Stake es que el primero permite que todos los holders de tokens participen por igual. Por el contrario, el último a veces solo permite a los grandes holders participar en el staking.

## Self-Custodial Bitcoin Staking

La metodología de Satoshi Plus para integrar el staking de Bitcoin se basa en timelocks absolutos utilizando la función nativa de Bitcoin CLTV (CheckLockTimeVerify), una característica criptográfica que bloquea los outputs de una transacción durante un período de tiempo predefinido, durante el cual no pueden ser gastados.
Rather than holders giving up custody of Bitcoin to external staking, stakers with Satoshi Plus merely place their Bitcoin in absolute timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Dentro de esa transacción, los participantes deben incluir un script que contenga la misma información que los mineros de Bitcoin incluyen en sus bloques delegados:

1. La dirección del Validador de Core al que el staker desea delegar su Bitcoin.
2. La dirección donde el staker desea recibir sus recompensas en tokens CORE.

Bitcoin stakers earn yield on their otherwise passive bitcoin in the form of CORE token rewards for however long they set the timelock (and thus for however long they delegate their bitcoin to vote for validators on Core).

## Elección del validador

The synthesis of DPoW, DPoS, and Self-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set. Los validadores que reciben la combinación más alta de poder de hash delegado, CORE apostado y Bitcoin apostado son elegidos para el conjunto de validadores. La combinación más alta está determinada por una puntuación híbrida, que equilibra los tres elementos.

## Recompensas

Las recompensas de Satoshi Plus se derivan de:

1. CORE block rewards being paid out over **81 years**
2. Transaction fees paid on the Core network in CORE tokens.

Tras la producción exitosa de un bloque, los validadores reciben estas recompensas en tokens CORE. Dado que los validadores electos dependen completamente de sus delegadores, cuando reciben recompensas por bloques y tarifas por transacciones al producirlos, distribuyen la mayor parte de estas recompensas entre sus delegantes (mineros, stakers de CORE y stakers de Bitcoin).\
Rewards paid out to delegators are allocated proportionally to their delegation power. So, whatever weight their delegation carries in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Corte y seguridad

En los sistemas tradicionales de Proof of Stake, los stakers corren el riesgo de ser slasheados si no mantienen un nodo seguro y confiable, se comportan de manera maliciosa o participan en actividades que comprometen la integridad de la red. En Satoshi Plus, esto sigue siendo cierto para los validadores. Los validadores deben cumplir un alto estándar, ya que su deber es adherirse honestamente al conjunto de reglas de Satoshi Plus. Thus, if they fail to perform, they face the slashing of their accumulated rewards and locked up CORE token deposit, resulting in a severe economic penalty and zero rewards.

While slashing keeps validators maximally accountable, Satoshi Plus' design is not meant to penalize participants for actions they don’t control. Por lo tanto, los mineros, los stakers de CORE y los stakers de Bitcoin no corren el riesgo de que sus activos delegados sean slasheados. Su incentivo para elegir a los mejores validadores radica en las recompensas que pueden obtener al seleccionar con diligencia. El riesgo de elegir a validadores equivocados es que no recibirán las recompensas que de otro modo recibirían. Esa penalización económica sirve como un incentivo eficaz y al mismo tiempo es justa para los stakers.

## Conclusión

La arquitectura de Core está diseñada para convertirla en la plataforma ideal para BTCfi. Satoshi Plus extends Bitcoin’s protection and reinforces its security model, while also introducing trustless yield to the Bitcoin asset. Este diseño integral asegura un ecosistema BTCfi de extremo a extremo, liberando todo el potencial del activo Bitcoin.
