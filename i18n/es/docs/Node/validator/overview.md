---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Validadores en la Red Core

---

En la blockchain de Core, los validadores son nodos esenciales responsables de mantener la seguridad, descentralización e integridad de la red. Validan transacciones, producen nuevos bloques y participan en la gobernanza mediante el consenso único de Core, Satoshi Plus, el cual combina: Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Staking de Bitcoin Autocustodiado para garantiza descentralización, seguridad y escalabilidad.

## Rol del Validador y Participación en el Consenso

Los validadores son responsables de mantener la salud y continuidad de la red. Al participar en el consenso, confirman la validez de las transacciones y contribuyen a la producción de bloques. The Satoshi Plus consensus selects validators based on a hybrid scoring system that considers delegated Bitcoin, CORE tokens, and Bitcoin hash power.

Validator sets are rotated periodically, and validator elections occur in epochs, typically every 24 hours (UTC+0), to select the top **27** active validators based on their hybrid scores. The remaining inactive validators must wait for the next round of elections to become active validators before they can participate in block production.

## Reward Economics

Validators receive rewards in CORE tokens for participating in Core’s consensus mechanism and producing blocks. Rewards are distributed at the end of each round (approximately every 24 hours) and consist of two primary sources:

- **Base rewards:** Newly minted CORE tokens.
- **Transaction fees:** Fees collected from transactions included in each block during the round.

Each validator can set its own **commission rate**, the portion of rewards it retains before distributing the remainder to its delegators. Commission fees are distributed directly to the validator’s specified fee address at the end of each round.

Core does **not implement self-bonding**. Validators are not required to stake CORE on themselves to participate. They only earn commissions if other participants delegate to them. If a validator stakes on their validator, they receive rewards like any regular delegator, not as commission.

Base rewards are distributed when the final block of the round is confirmed. Currently, **90%** of total base rewards are allocated to validators, while the remaining **10%** is sent to the `System Reward Contract`. Of the 90% allocated to validators, each validator receives rewards proportional to the number of blocks they produce. In the long term, all stable validators are expected to receive approximately equal shares, since block production is uniformly distributed.

Transaction fees follow the same distribution logic. **90%** of total transaction fees collected during the round are distributed to validators. Validators may apply their commission rate to this amount before distributing the remaining rewards to their delegators. The remaining **10%** of fees is deposited into the `System Reward Contract`.

Validators share rewards with delegators who stake CORE, delegate Bitcoin, or contribute Bitcoin hash power. While commission rates are flexible, validators are incentivized to offer competitive rates to attract more delegation and strengthen their hybrid score.

Commission fees are paid directly to each validator’s designated fee address at the end of every round.

> **Note:** Rewards are settled **per round**, not per block. Each round corresponds to a full validator election cycle (~24 hours, UTC+0).

<p align="center">
![validator-reward-distribution](../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

### Sample Reward Calculation

Let us assume that the base reward for a round is **3000 CORE** and that a particular validator sets its commission rate to **20%**. These tokens do not go directly to the proposer. Instead, they are shared among validators and delegators. These **3000 CORE** will be distributed according to each participant's stake. Assume that the fees generated from all transactions in all the blocks in a round were **100 CORE**.

Assume that the base reward for a round is **3,000 CORE**, and a validator sets a **20%** commission rate. These tokens are not paid directly to the proposer but are distributed proportionally among all validators and their delegators. The base reward, 3000 CORE in this case, will be distributed according to each participant's stake. Also, assume that transaction fees collected during the round total **100** CORE.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE


    System Reward Contract gets = 3,100 x 10% = 310 CORE  


    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE


    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE


    Total Reward the Validator gets = Commission = 558 CORE


    All the Delegators get = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

## Potential Risks and Penalties for Validators

While validators in the Core ecosystem are incentivized through block rewards and transaction fees, the role also carries operational and economic risks. Validators are expected to maintain performance, uptime, and network integrity. Failure to do so may result in penalties that impact both reputation and earnings.

1. **Slashing:** Validators may be subject to slashing if they engage in malicious or negligent behavior, such as double signing blocks, extended downtime or inactivity, or violating consensus rules. Slashing results in a portion of the validator's staked CORE being permanently forfeited, which directly impacts their financial holdings and trustworthiness.

2. **Jailing:** Validators that consistently underperform, go offline, or breach protocol rules may be penalized by being jailed. A jailed validator is temporarily removed from the active validator set, making them ineligible to produce blocks or earn rewards. Repeated jailing can also lead to long-term damage to one's reputation within the community or removal from the network.

3. **Loss of Delegation:** Delegators may withdraw their stake from underperforming validators and reallocate it to more reliable ones. This can significantly reduce a validator’s share of the reward.

4. **Stake Lock-up and Liquidity:** Validators are required to lock **10,000 CORE tokens** as collateral to become part of the Core network of validators participating in consensus. These tokens are subject to lock-up periods and cannot be withdrawn or transferred during that time. This introduces liquidity risk, especially during volatile market conditions or unforeseen validator downtime.

5. **Operational and Security Risks:** Validators must maintain a secure, high-availability infrastructure. Failures in system security, uptime, or performance may result in missed blocks, slashing, or jailing. Validators are responsible for monitoring their systems, maintaining software updates, and ensuring reliable operations around the clock.