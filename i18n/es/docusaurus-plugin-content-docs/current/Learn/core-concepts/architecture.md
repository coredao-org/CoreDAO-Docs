---
sidebar_label: Arquitectura
hide_table_of_contents: false
sidebar_position: 2
description: Un vistazo rápido a la arquitectura blockchain subyacente de Core
---

# Arquitectura de la cadena de Core

---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS), and Self-Custodial Bitcoin Staking**.

A través de Satoshi Plus, **los mineros o pools de minería de Bitcoin, los holders de CORE en staking y los stakers de Bitcoin** delegan recursos para elegir validadores que protegen la red Core. La selección de validadores se basa en el score híbrido, que considera:

- **Poder de hasheo delegado** de los mineros o pools de minería de Bitcoin
- **Tokens de CORE en staking delegado** de los takers de CORE
- **Bitcoin en staking delegado** de stakers de Bitcoin

### **The First Self-Custodial Bitcoin Staking Mechanism**

Satoshi Plus's Self-Custodial Bitcoin Staking component is **the first live self-custodial Bitcoin staking mechanism**, allowing Bitcoin holders to earn trustless yield **without introducing new trust assumptions**.

### **Aprovechando la Seguridad de Bitcoin y Empoderando a los Mineros**

Actualmente, Satoshi Plus se beneficia de la seguridad del **\~75% de todo el poder de hash de minería en Bitcoin** a través de la delegación. By involving miners in validator elections, it leverages Bitcoin’s unmatched decentralization while offering miners supplemental rewards, addressing the long-term decline in Bitcoin block rewards.

<p align="center">
![component-diagram](../../../../../../static/img/Core-Architecture.png)
</p>

## **Blockchain de Core: Componentes, roles y flujos de trabajo**

#### **Roles clave**

- **Validadores**: Producen bloques y validan transacciones en la red Core. Validator must register and lock a refundable CORE validator bond deposit.
- **Bitcoin Miners**: Secure Bitcoin via Proof of Work and can delegate hash power to Core validators by including delegation information in the coinbase transaction of a block.
- **CORE Stakers**: Delegate CORE tokens to validators as part of the validator election to support network security.
- **Bitcoin Stakers**: Delegate timelocked Bitcoin to validators on Core through Self-Custodial Bitcoin staking and earn yield without relinquishing custody of their assets.
- **Relayers**: Responsible for synchronizing the data between the Core and Bitcoin network. Transmiten datos de bloques y transacciones de Bitcoin a Core. Cualquiera puede convertirse en relayer registrándose y bloqueando un depósito reembolsable de tokens CORE.
- **Verificadores**: Reportan comportamientos maliciosos en la red Core. Successful verification flags can trigger the slashing or jailing of validators and bad actors. Verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a Verifier on the Core network.

#### **Consenso y Elección**

- **Validator Election**: Every **round (1 day)**, the top **27 validators** by **hybrid score** (based on DPoW from miners, DPoS from CORE stakers, and staked Bitcoin from Bitcoin holders) are elected to become part of the active validator set and secure the network. Cualquier validador en el conjunto actual de validadores que no haya sido bloqueado (jailed) o penalizado (slashed) se considera "activo" (live). Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.
- **Score Híbrido:** Cada nodo validador que busca formar parte del conjunto activo de validadores recibe un puntaje híbrido (hybrid score), calculado en función de tres tipos de delegación:
  poder de hasheo, CORE y Bitcoin. El conjunto activo de validadores está compuesto por los 27 validadores con las puntuaciones híbridas más altas.
- **Ronda:** Una ronda dura **un día**, durante la cual los **27 mejores validadores** (clasificados según su score hibrido) son elejidos para producir bloques. At the end of each round, **rewards are calculated and distributed**, and the next validator set is selected.
- **Época (10 minutos o 200 slots)**: El estatus del validador es verificado constantemente para asegurar que nodos bloqueados (jailed) no participen en el consenso. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener las transacciones por segundo aproximadamente constante en una ronda determinada.
- **Slot (3 segundos)**: Cada ronda de 1 día se divide en slots y todos los validadores del conjunto de validadores se turnan para producir un bloque por slot al estilo round-robin.

#### **Recompensas y estabilidad**

- **Reward Module:** Rewards are distributed at the end of each round based on validator performance. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Las recompensas se distribuyen al **final de cada ronda**.
- Los validadores vivos se actualizan **cada 200 bloques** para mantener las transacciones por segundo estables.

## Prueba de trabajo delegada

Para participar en Satoshi Plus, los mineros y/o grupos de minería simplemente escriben dos datos adicionales en el campo `op_return` mientras producen un nuevo bloque de Bitcoin:

1. La dirección del Validador de Core al que desean delegar su poder de hasheo.
2. La dirección en la cual el minero quiere recibir su recompensa en tokens CORE.

In exchange for participating in Core’s consensus process by delegating their hash power to help elect validators, Bitcoin miners receive supplemental CORE token rewards in addition to their existing mining rewards from the Bitcoin network. In this way, Satoshi Plus brings Bitcoin miner participation to the Core network, while the Bitcoin network receives better compensated (i.e. more highly incentivized) miners.

## Prueba de participación delegada

El proof of stake delegado (DPoS) es el método para involucrar a los holders principales de CORE en la seguridad del protocolo. To participate in consensus, any CORE token holder can stake their CORE tokens with validators on the Core network, thus helping elect those validators in the same way that a miner might delegate its hash power to help elect a validator.

Similarly, just as miners receive rewards, CORE token stakers also earn CORE token rewards for contributing to Satoshi Plus consensus. Una ventaja significativa de DPoS en comparación con los modelos estándar de Proof of Stake es que el primero permite que todos los holders de tokens participen por igual. Por el contrario, el último a veces solo permite a los grandes holders participar en el staking.

## Self-Custodial Bitcoin Staking

Satoshi Plus's methodology for integrating Bitcoin staking centers on absolute timelocks using Bitcoin's native CLTV (`CheckLockTimeVerify`) function, a cryptographic feature that locks up the outputs of a transaction for a pre-defined period of time, during which they can't be spent.

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

Tras la producción exitosa de un bloque, los validadores reciben estas recompensas en tokens CORE. Dado que los validadores electos dependen completamente de sus delegadores, cuando reciben recompensas por bloques y tarifas por transacciones al producirlos, distribuyen la mayor parte de estas recompensas entre sus delegantes (mineros, stakers de CORE y stakers de Bitcoin).

Rewards paid out to delegators are allocated proportionally to their delegation power. So, whatever weight their delegation carries in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Corte y seguridad

En los sistemas tradicionales de Proof of Stake, los stakers corren el riesgo de ser slasheados si no mantienen un nodo seguro y confiable, se comportan de manera maliciosa o participan en actividades que comprometen la integridad de la red. En Satoshi Plus, esto sigue siendo cierto para los validadores. Los validadores deben cumplir un alto estándar, ya que su deber es adherirse honestamente al conjunto de reglas de Satoshi Plus. Thus, if they fail to perform, they face the slashing of their accumulated rewards and locked up CORE token deposit, resulting in a severe economic penalty and zero rewards.

While slashing keeps validators maximally accountable, Satoshi Plus' design is not meant to penalize participants for actions they don’t control. Por lo tanto, los mineros, los stakers de CORE y los stakers de Bitcoin no corren el riesgo de que sus activos delegados sean slasheados. Su incentivo para elegir a los mejores validadores radica en las recompensas que pueden obtener al seleccionar con diligencia. El riesgo de elegir a validadores equivocados es que no recibirán las recompensas que de otro modo recibirían. Esa penalización económica sirve como un incentivo eficaz y al mismo tiempo es justa para los stakers.

## Conclusión

La arquitectura de Core está diseñada para convertirla en la plataforma ideal para BTCfi. Satoshi Plus extends Bitcoin’s protection and reinforces its security model, while also introducing trustless yield to the Bitcoin asset. Este diseño integral asegura un ecosistema BTCfi de extremo a extremo, liberando todo el potencial del activo Bitcoin.
