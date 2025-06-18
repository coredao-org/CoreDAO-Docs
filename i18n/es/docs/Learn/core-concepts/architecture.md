---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Arquitectura de la Blockchain de Core

---

Core's architecture is built around **Satoshi Plus**, a tripartite consensus mechanism that integrates **Delegated Proof of Work (DPoW), Self-Custodial Bitcoin Staking, and Delegated Proof of Stake (DPoS)**.

Through Satoshi Plus, **Bitcoin miners/mining pools, Bitcoin stakers, and CORE token stakers** delegate resources to elect validators who secure the Core network. La selección de validadores se basa en el score híbrido, que considera:

- **Poder de hasheo delegado** de los mineros o pools de minería de Bitcoin
- **Delegated/staked Bitcoin** from Bitcoin holders
- **Delegated/staked CORE tokens** from CORE token holders

## Satoshi Plus Consensus: Major Components

<p align="center">
![component-diagram](../../../static/img/Core-Architecture.png)
</p>

## Key Roles

- **Validadores**: Producen bloques y validan transacciones en la red Core. Validators must register and lock a refundable CORE validator bond deposit.
- **Bitcoin Miners:** Aseguran Bitcoin mediante Proof of Work y pueden delegar poder de hash a los validators de Core incluyendo información de delegación en la transacción coinbase de un bloque.
- **CORE Stakers:** Delegan tokens CORE a los validators como parte del proceso de elección de validadores para apoyar la seguridad de la red.
- **Bitcoin Stakers:** Delegan Bitcoin bloqueado mediante timelock a los validators en Core a través del Self-Custodial Bitcoin Staking, ganando rendimiento sin renunciar a la custodia de sus activos.
- **Relayers**: Responsible for synchronizing the data between the Core and Bitcoin networks. Transmiten datos de bloques y transacciones de Bitcoin a Core. Cualquiera puede convertirse en relayer registrándose y bloqueando un depósito reembolsable de tokens CORE.
- **Verifiers**: Report malicious behavior on the Core network. Las verificaciones exitosas pueden desencadenar el slashing o jailing de validators y actores maliciosos. Los verifiers son compensados por esta labor de monitoreo cuando se reparten las recompensas por bloque. Cualquier persona puede actuar como verifier en la red de Core.

## Consensus & Election

- **Validator Election**: Every **round (1 day)**, the top **29 validators** by **hybrid score** (based on DPoW from miners, DPoS from CORE holders, and staked Bitcoin from Bitcoin holders) are elected to become part of the active validator set and secure the network. Any validator in the current validator set that hasn't been jailed or slashed is considered "live". Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.
- **Score Híbrido:** Cada nodo validador que busca formar parte del conjunto activo de validadores recibe un puntaje híbrido (hybrid score), calculado en función de tres tipos de delegación:
  poder de hasheo, CORE y Bitcoin. The active validator set currently comprises the top 29 validators with the highest hybrid scores.
- **Round:** A round lasts **one day**, during which the **top 29 validators** (ranked by hybrid score) are elected to produce blocks. Al final de cada ronda, se **calculan y distribuyen las recompensas**, y se selecciona el siguiente conjunto de validadores.
- **Epoch (10 min or 200 slots)**: Periodic validator status checks ensure jailed nodes don't participate in consensus. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener las transacciones por segundo aproximadamente constante en una ronda determinada.
- **Slot (3 segundos)**: Cada ronda de 1 día se divide en slots y todos los validadores del conjunto de validadores se turnan para producir un bloque por slot al estilo round-robin.

## Rewards & Stability

- **Reward Module:** Las recompensas se distribuyen al final de cada round en función del rendimiento de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Las recompensas se distribuyen al **final de cada ronda**.
- Los validadores vivos se actualizan **cada 200 bloques** para mantener las transacciones por segundo estables.
