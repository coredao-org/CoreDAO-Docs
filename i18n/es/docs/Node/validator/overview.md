---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---

# Validadores en la red Core

---

En la blockchain de Core, los validadores son nodos fundamentales responsables de mantener la seguridad, descentralización e integridad de la red. Estos nodos validan transacciones, producen nuevos bloques y participan en la gobernanza mediante el exclusivo consenso Satoshi Plus de Core, el cual combina Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Self-Custodial Bitcoin Staking para garantizar la descentralización, seguridad y escalabilidad.

## Rol del Validador y Participación en el Consenso

Los validadores son responsables de mantener la salud y continuidad de la red. Al participar en el consenso, confirman la validez de las transacciones y contribuyen a la producción de bloques. El consenso Satoshi Plus selecciona validadores con base en un sistema de puntuación híbrido que considera el Bitcoin delegado, Tokens CORE y hash power de Bitcoin.

Los conjuntos de validadores se rotan periódicamente, y las elecciones de validadores ocurren por epochs, típicamente cada 24 horas (UTC+0), para seleccionar a los **27** validadores activos principales según sus hybrid scores. Los validadores inactivos deben esperar hasta la siguiente round de elecciones para convertirse en validadores activos antes de poder participar en la producción de bloques.

## Economía de Recompensas

Los validadores reciben recompensas en tokens CORE por participar en el mecanismo de consenso de Core y por producir bloques. Las recompensas se distribuyen al final de cada round (aproximadamente cada 24 horas) y provienen de dos fuentes principales:

- **Recompensas base:** Nuevos tokens CORE minteados.
- **Fees por transacción:** Las fees se recaudan de las transacciones incluidas en cada bloque durante la round.

Cada validador puede establecer su propia **tasa de comisión**, que representa la porción de las recompensas que retienen antes de distribuir el resto entre sus delegadores. Estas comisiones se envían directamente a la dirección de fees especificada por el validador al final de cada round.

Core **no implementa auto-vinculación**. Los validadores no están obligados a hacer staking de CORE en sí mismos para participar. Solo ganan comisiones si otros participantes les delegan. Si un validador hace staking en su propio validador, recibe recompensas como cualquier otro delegador —no como comisión.

Las recompensas base se distribuyen cuando se confirma el bloque final de la ronda. Actualmente, el **90%** del total de las recompensas base se asigna a los validadores, mientras que el **10 %** restante se envía al contrato `System Reward Contract`. Del 90 % asignado a los validadores, cada uno recibe recompensas proporcionales al número de bloques que produce. A largo plazo, se espera que todos los validadores estables reciban aproximadamente partes iguales, ya que la producción de bloques se distribuye de manera uniforme.

Las fees por transacción siguen la misma lógica de distribución. El **90%** del total de las fees recaudadas durante la ronda se distribuye entre los validadores. Los validadores pueden aplicar su tasa de comisión a esta cantidad antes de repartir las recompensas restantes entre sus delegadores. El **10%** restante de las fees se deposita en el `System Reward Contract`.

Los validadores comparten recompensas con los delegadores que hicieron staking de CORE, delegaron BTC o contribuyeron con hash power. While commission rates are flexible, validators are incentivized to offer competitive rates in order to attract more delegation and strengthen their hybrid score.

Commission fees are paid directly to each validator’s designated fee address at the end of every round.

> **Note:** Rewards are settled **per round**, not per block. Each round corresponds to a full validator election cycle (~24 hours, UTC+0).

<p align="center">
![validator-reward-distribution](../../../static/img/validator/Rewards-In-Core-Ecosystem.png) 
</p>

### Sample Reward Calculation

Let us assume that the base reward for a round is **3000 CORE** and that a certain validator sets its commission rate to **20%**. These tokens do not go directly to the proposer. Instead, they are shared among validators and delegators. These **3000 CORE** will be distributed according to each participant's stake. Assume that the fees generated from all transactions in all the blocks in a round was **100 CORE**.

Assume that the base reward for a round is **3,000 CORE**, and a validator sets a **20%** commission rate. These tokens are not paid directly to the proposer but are distributed among all validators and their delegators proportionally. The base reward, 3000 CORE in this case, will be distributed according to each participant's stake. Also, assume that transaction fees collected during the round total **100** CORE.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE

    System Reward Contract gets = 3,100 x 10% = 310 CORE  

    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE

    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE

    Total Reward Validator gets = Commission = 558 CORE

    All Delegators gets = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

## Potential Risks and Penalties for Validators

While validators in the Core ecosystem are incentivized through block rewards and transaction fees, the role also carries operational and economic risks. Validators are expected to maintain performance, uptime, and network integrity. Failure to do so may result in penalties that impact both reputation and earnings.

1. **Slashing:** Validators may be subject to slashing if they engage in malicious or negligent behavior, such as: double signing blocks, extended downtime or inactivity, violating consensus rules, etc. Slashing results in a portion of the validator's staked CORE being permanently forfeited, directly impacting financial holdings and trustworthiness.

2. **Jailing:** Validators that consistently underperform, go offline, or breach protocol rules may be jailed. A jailed validator is temporarily removed from the active validator set, making them ineligible to produce blocks or earn rewards. Repeated jailing can also lead to long-term reputation damage within the community or removal from the network.

3. **Loss of Delegation:** Delegators may withdraw their stake from underperforming validators and reallocate it to more reliable ones. This can significantly reduce a validator’s reward share.

4. **Stake Lock-up and Liquidity:** Validators are required to lock **10,000 CORE tokens** as collateral to become part of Core network of validators participating in consensus. These tokens are subject to lock-up periods and cannot be withdrawn or transferred during that time. This introduces liquidity risk, especially during volatile market conditions or unforeseen validator downtime.

5. **Operational and Security Risks:** Validators must maintain secure, high-availability infrastructure. Failures in system security, uptime, or performance may result in missed blocks, slashing, or jailing. Validators are responsible for monitoring their systems, maintaining software updates, and ensuring reliable operations around the clock.