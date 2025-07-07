---
sidebar_label: Arquitectura
hide_table_of_contents: false
sidebar_position: 2
description: Un vistazo rápido a la arquitectura blockchain subyacente de Core
---

# Arquitectura de la Blockchain de Core

---

La arquitectura de Core se basa en **Satoshi Plus**, un mecanismo de consenso tripartito que integra **Delegated Proof of Work (DPoW), Self-Custodial Bitcoin Staking y Delegated Proof of Stake (DPoS)**.

A través de Satoshi Plus, **los mineros y pools de minería de Bitcoin, los stakers de Bitcoin y los stakers del token CORE** delegan recursos para elegir a los validadores que aseguran la red de Core. La selección de validadores se basa en el score híbrido, que considera:

- **Poder de hasheo delegado** de los mineros o pools de minería de Bitcoin
- **Bitcoin delegado/stakeado** por los holders de Bitcoin
- **Tokens CORE delegados/stakeados** por los holders de CORE

## Satoshi Plus Consensus: Componentes Principales

<p align="center">
![component-diagram](../../../../../../static/img/Core-Architecture.png)
</p>

## Roles Clave

- **Validadores**: Producen bloques y validan transacciones en la red Core. Los validadores deben registrarse y bloquear un depósito reembolsable en CORE como garantía de validador.
- **Bitcoin Miners:** Aseguran Bitcoin mediante Proof of Work y pueden delegar poder de hash a los validators de Core incluyendo información de delegación en la transacción coinbase de un bloque.
- **CORE Stakers:** Delegan tokens CORE a los validators como parte del proceso de elección de validadores para apoyar la seguridad de la red.
- **Bitcoin Stakers:** Delegan Bitcoin bloqueado mediante timelock a los validators en Core a través del Self-Custodial Bitcoin Staking, ganando rendimiento sin renunciar a la custodia de sus activos.
- **Relayers**: Responsables de sincronizar los datos entre las redes de Core y Bitcoin. Transmiten datos de bloques y transacciones de Bitcoin a Core. Cualquiera puede convertirse en relayer registrándose y bloqueando un depósito reembolsable de tokens CORE.
- **Verifiers**: Reportan comportamientos maliciosos en la red de Core. Las verificaciones exitosas pueden desencadenar el slashing o jailing de validators y actores maliciosos. Los verifiers son compensados por esta labor de monitoreo cuando se reparten las recompensas por bloque. Cualquier persona puede actuar como verifier en la red de Core.

## Consenso y Elección

- **Elección de Validadores**: En cada **round (1 día)**, los **29 validadores principales** según el **hybrid score** (basado en DPoW de mineros, DPoS de holders de CORE y Bitcoin bloqueado por holders de BTC) son elegidos para formar parte del conjunto activo de validadores y asegurar la red. Cualquier validador dentro del conjunto actual que no haya sido jailed o slashed se considera “live”. Para garantizar un TPS más estable, los validadores en vivo se actualizan cada 200 bloques, lo que significa que si algún validador es encarcelado o recortado, los demás pueden continuar extrayendo bloques como de costumbre.
- **Score Híbrido:** Cada nodo validador que busca formar parte del conjunto activo de validadores recibe un puntaje híbrido (hybrid score), calculado en función de tres tipos de delegación:
  poder de hasheo, CORE y Bitcoin. El conjunto activo de validadores actualmente está compuesto por los 29 validadores con loshybrid scores más altos.
- **Round:** Un round dura **un día**, durante el cual los **29 validadores principales** (según el hybrid score) son elegidos para producir bloques. Al final de cada ronda, se **calculan y distribuyen las recompensas**, y se selecciona el siguiente conjunto de validadores.
- **Epoch (10 minutos o 200 slots)**: Se realizan verificaciones periódicas del estado de los validadores para garantizar que los nodos jailed no participen en el consenso. El estado del validador se verifica una vez por época (en lugar de continuamente) para mantener las transacciones por segundo aproximadamente constante en una ronda determinada.
- **Slot (3 segundos)**: Cada ronda de 1 día se divide en slots y todos los validadores del conjunto de validadores se turnan para producir un bloque por slot al estilo round-robin.

## Recompensas y Estabilidad

- **Reward Module:** Las recompensas se distribuyen al final de cada round en función del rendimiento de los validadores. El módulo de recompensas calcula y distribuye estas recompensas en consecuencia.
- Las recompensas se distribuyen al **final de cada ronda**.
- Los validadores vivos se actualizan **cada 200 bloques** para mantener las transacciones por segundo estables.
