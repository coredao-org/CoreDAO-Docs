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
- **Hybrid Score:** Every validator node seeking to become part of the active validator set is given a hybrid score, which is calculated based on three delegations: hashpower, CORE, and Bitcoin. The active validator set currently comprises the top 27 validators with the highest hybrid scores.
- **Round:** A round lasts **one day**, during which the **top 27 validators** (ranked by hybrid score) are elected to produce blocks. At the end of the round, **rewards are calculated for that complete round and distributed**, and the next validator set is selected.
- **Epoch (10 min or 200 slots)**: Periodic validator status checks ensure jailed nodes don’t participate in consensus. The validator status is checked once per epoch (rather than continuously) to keep TPS roughly constant in a given round.
- **Slot (3 sec)**: Each 1-day round is divided into slots, and all validators in the validator set take turns producing one block per slot in a round-robin fashion.

#### **Rewards & Stability**

- **Módulo de recompensas:** Las recompensas se distribuyen al final de cada ronda según el desempeño de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Rewards are distributed at the **end of each round**.
- Live validators are updated **every 200 blocks** to maintain stable TPS.

## Prueba de trabajo delegada

To participate in Satoshi Plus, Bitcoin miners and/or mining pools simply write two additional pieces of information in the \`op\_return\` field as they produce a new Bitcoin block:

1. The address of the Core Validator to whom they want to delegate their hash power.
2. The address to which the miner would like to receive the CORE token rewards.

In exchange for participating in Core’s consensus process by delegating their hash power to vote for validators, Bitcoin miners receive supplemental CORE token rewards in addition to their existing mining rewards from the Bitcoin network. In this way, Satoshi Plus bridges Bitcoin miner participation to the Core network, while the Bitcoin network gets better compensated (i.e. more highly incentivized) miners.

## Prueba de participación delegada

Delegated Proof of Stake (DPoS) is the method of involving CORE token holders in the security of the protocol. To participate in consensus, any CORE token holder can stake their CORE tokens with validators on the Core network, thus voting for those validators in the same way that a miner might delegate its hash power to elect a validator.\
De manera similar, así como los mineros reciben recompensas, los apostadores de tokens CORE también obtienen recompensas de tokens CORE por contribuir al consenso de Satoshi Plus. One significant advantage of DPoS compared to standard Proof of Stake models is that the former allows all token holders to participate equally. In contrast, the latter sometimes only allows large holders to stake.

## Staking de Bitcoin sin custodia

Satoshi Plus’s methodology for integrating Bitcoin staking centers on absolute time locks, a Bitcoin-native cryptographic feature that locks up the outputs of a transaction for a pre-defined period of time, during which they can’t be spent.\
En lugar de que los titulares cedan la custodia de Bitcoin a apuestas externas, los participantes con Satoshi Plus simplemente colocan sus Bitcoin en bloqueos de tiempo absoluto como parte de una transacción, y la transacción puede diseñarse para devolver el resultado una vez transcurrido el período de tiempo. Dentro de esa transacción, los participantes deben incluir un script que contenga la misma información que los mineros de Bitcoin incluyen en sus bloques delegados:

1. The address of the Core Validator the staker wants to delegate their Bitcoin to.
2. The address to which the staker would like to receive their CORE token rewards.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core). The result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while expanding the scope of Bitcoin’s utility.

## Elección del validador

The synthesis of DPoW, DPoS, and Non-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set. Los validadores que reciben la combinación más alta de poder de hash delegado, CORE apostado y Bitcoin apostado son elegidos para el conjunto de validadores. La combinación más alta está determinada por una puntuación híbrida, que equilibra los tres elementos.

## Recompensas

Las recompensas de Satoshi Plus se derivan de:

1. CORE block rewards to be paid out over **81 years**
2. Transaction fees paid over the Core network in CORE tokens.

Following successful block production, validators earn these CORE token rewards. Since elected validators are entirely dependent upon their delegators, when they receive block rewards and transaction fees for producing blocks, they pay most of their rewards back to their delegating miners, CORE stakers, and Bitcoin stakers.\
Rewards paid out to delegators are allocated proportionally to their voting power. So, whatever weight their vote carries in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Corte y seguridad

In traditional Proof of Stake systems, stakers risk being slashed if they fail to maintain a secure and reliable node, behave maliciously, or engage in activities that compromise the network’s integrity. En Satoshi Plus, esto sigue siendo cierto para los validadores. Validators are held to a high standard because their duty is to adhere honestly to the ruleset of Satoshi Plus. Thus, if they fail to perform, they face the slashing of their accumulated rewards and/or locked up CORE token deposit, resulting in a severe economic penalty and zero rewards.

While slashing keeps validators maximally accountable, the Satoshi Plus mechanism’s design is not meant to penalize participants for actions they don’t control. Therefore, miners, CORE stakers, and Bitcoin stakers have no risk of their delegated assets being slashed. Su incentivo para elegir a los mejores validadores radica en las recompensas que pueden obtener al seleccionar con diligencia. Their risk for choosing the wrong validators is that they won’t receive the rewards they would otherwise receive. That economic penalty serves as an effective incentive while being fair to stakers.

## Conclusión

La arquitectura de Core está diseñada para convertirla en la plataforma ideal para BTCfi. Satoshi Plus extends Bitcoin’s protection and reinforces its security model while introducing native yield for Bitcoin for the first time. Este diseño integral asegura un ecosistema BTCfi de extremo a extremo, liberando todo el potencial del activo Bitcoin.
