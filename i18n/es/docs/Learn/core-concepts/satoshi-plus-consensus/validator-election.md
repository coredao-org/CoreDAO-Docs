---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Elección de Validadores en Core

---

## Descripción general

El consenso Satoshi Plus de Core obtiene apoyo para los validadores desde tres fuentes de delegación:

- **Delegated Proof of Work (DPoW)** de los mineros de Bitcoin
- **Staking de Bitcoin con autocustodia** de los holders de Bitcoin
- **Delegated Proof of Stake (DPoS)** de los holders del token CORE

Cada fuente contribuye al **hybrid score** de un validador, el cual determina su elección en el conjunto activo de validadores.

## Proceso de Elección

<p align="center">
![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)
</p>

### Delegación de Apoyo

Los validadores reciben apoyo desde tres fuentes:

- **Holders de Bitcoin:** Bloquean su Bitcoin usando CLTV e insertan metadatos del validador en el redeem script para votar por validadores.
- **Mineros de Bitcoin**: Delegan hash power incluyendo votos a validadores en el campo op_return de las transacciones coinbase de Bitcoin.
- **Holders de CORE**: Delegan tokens CORE directamente a los validadores preferidos.

Cada forma de delegación contribuye a la selección del validador y a su elegibilidad para recompensas.

### Cálculo del Puntaje Híbrido

Los validadores son clasificados por un **hybrid score** que combina las tres formas de apoyo:

$$
S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Donde, $$m + k + l = 1$$

- $$rHp$$: poder hash de Bitcoin delegado a un validador.
- $$tHp$$: potencia hash total en Core.
- $$rSp$$: Cantidad de tokens CORE apostados en un validador.
- $$tSp$$: Total de tokens CORE apostados en Core.
- $$rBp$$: Cantidad de tokens BTC apostados en un validador.
- $$tBp$$: Total de tokens BTC apostados en Core.
- $$m$$: Relación asignada al poder hash.
- $$k$$: Ratio asignado a la apuesta CORE.
- $$l$$: Ratio asignado a la participación en BTC.

This formula promotes proportional and fair influence across all delegation sources.

### 3. Validator Selection and Block Production

- The **top 29 validators** with the highest hybrid scores are elected every **round (1 day)**
- Validators produce blocks in a **round-robin** fashion, with each slot lasting **3 seconds**
- The **validator set is updated every 200 blocks** to promote consistency and prevent disruption from underperforming or penalized validators
- Core maintains liveness as long as fewer than **⅓ of validators are malicious**

## Flow Summary

The validator election cycle proceeds as follows:

1. **Delegation**: Miners, CORE stakers, and Bitcoin stakers delegate support
2. **Score Calculation**: Hybrid scores are computed using the defined formula
3. **Election**: Top 29 validators are selected based on scores
4. **Block Production**: Validators take turns producing blocks
5. **Rewards**: CORE tokens are earned by validators and distributed proportionally to delegators
6. **Cycle Repeats**: Validator set updates every 200 blocks
