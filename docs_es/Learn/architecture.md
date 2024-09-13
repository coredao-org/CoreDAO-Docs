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

## Apuesta de Bitcoin sin custodia

La metodología de Satoshi Plus para integrar la participación de bitcoin se centra en bloqueos de tiempo absoluto, una característica criptográfica nativa de Bitcoin que bloquea los resultados de una transacción durante un período de tiempo predefinido, durante el cual no se pueden gastar. En lugar de que los titulares cedan la custodia de Bitcoin a apuestas externas, los participantes con Satoshi Plus simplemente colocan sus Bitcoin en bloqueos de tiempo absoluto como parte de una transacción, y la transacción puede diseñarse para devolver el resultado una vez transcurrido el período de tiempo. Dentro de esa transacción, los participantes deben incluir un script que contenga la misma información que los mineros de Bitcoin incluyen en sus bloques delegados:

1. La dirección del Core Validator al que el apostador quiere delegar su bitcoin.
2. The address that the staker would like their CORE token rewards to be sent to.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards, for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core). The end result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while also expanding the scope of Bitcoin’s utility.

## Validator Election

The synthesis of Delegated Proof of Work, Delegated Proof of Stake, and Non-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set.

The validators who receive the highest combination of delegated hash power, staked CORE, and staked Bitcoin are elected to the validator set. The highest combination is determined by a hybrid score, which balances the three elements.

## Rewards

Satoshi Plus rewards are derived from:

1. CORE block rewards to be paid out over an 81 year period
2. Transaction fees paid in CORE tokens. Following successful block production, validators earn these CORE token rewards

Since elected validators are entirely dependent upon their delegators, when they receive block rewards and transaction fees for producing blocks, they pay the majority of their rewards back to their delegating miners, CORE stakers, and Bitcoin stakers.

Rewards paid out to delegators are allocated proportional to their voting power. So, whatever weight their vote carried in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Slashing and Security

In traditional Proof of Stake systems, stakers run the risk of being slashed if they fail to maintain a secure and reliable node, behave maliciously, or engage in activities that compromise the network’s integrity. In Satoshi Plus, this remains true for validators. Validators are held to a high standard, because their entire duty is to honestly adhere to the ruleset of Satoshi Plus. Thus, if they fail to perform, their locked up CORE token deposit is slashed, resulting in a serious economic penalty in addition to accruing zero rewards.

While slashing keeps validators maximally accountable, Satoshi Plus’ design is not meant to penalize participants for actions they don’t control. Therefore, miners, CORE stakers, and Bitcoin stakers have no risk of their staked or delegated assets/power being slashed. Their incentive to choose the best validators lies in the rewards they can accrue from selecting diligently. Their risk for choosing the wrong validators is that they won’t receive rewards that they otherwise would receive. That economic penalty serves as an effective incentive while also being fair to stakers.

## Other Workflow Details

1. **Block Production and Round Robin:** Validators take turns producing blocks in a round-robin manner. Each round is divided into slots, with a length currently set to 3 seconds.
2. **Reward Module:** Rewards are distributed at the end of each round based on validators' performance. The Reward Module calculates and distributes these rewards accordingly.
3. **Epochs and Validator Quorum Updates:** Epochs, set to 200 slots (or 10 minutes), are the cycle lengths for checking each validator's status. Jailed validators are excluded from the quorum to keep the Transaction Per Second (TPS) rate stable throughout the round.

## Other Core Infrastructure

### Core-Native Wrapped Bitcoin (coreBTC)

coreBTC is a Core-native bridged Bitcoin asset maintaining a 1:1 peg with Bitcoin, using over-collateralized Lockers for secure and trust-minimized minting and redemption. This design enables Bitcoin participation in Core’s DeFi activities and smart contracts without involving centralized custody. While coreBTC is not essential for Satoshi Plus or engaging with Core DeFi, it does permit Bitcoin holders a trust-minimized and Core-native way to port their assets to the Core blockchain.

### HTLC Atomic Swaps

Hashed TimeLock Contracts (HTLCs) enable the trustless, peer-to-peer exchange of tokens between Core and other blockchains, including (and especially) Bitcoin.

### Future Enhancements

- **Dual Staking:** Higher Bitcoin staking rates are to be enabled for stakers of both Bitcoin and CORE tokens.
- **Fee Market Development:** Core may adopt local fee markets to make Bitcoin transactions more predictable and economical, thus supporting Bitcoin's use as a viable means of payment.
- **HTLC Improvements:** Enhancements to the atomic swap process, including the introduction of liquidity pools and order book supplements, are being designed to facilitate more efficient trading and liquidity management.

## Conclusion

Core’s architecture is designed to make it the ideal platform for BTCfi. Satoshi Plus not only extends Bitcoin’s protection but also reinforces its security model while introducing native yield for Bitcoin for the first time. This comprehensive design secures an end-to-end BTCfi ecosystem, unlocking the full potential of the Bitcoin asset.
