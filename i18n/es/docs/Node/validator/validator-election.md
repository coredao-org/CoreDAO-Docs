---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
---

# Proceso de Elección de Validadores en la Red Core

---

## Visión general

Los validadores son una parte fundamental de la red Core. Además de encargarse de la validación de transacciones y la producción de bloques, el proceso de elección de validadores es donde convergen todos los componentes del consenso Satoshi Plus —es decir, DPoW, DPoS y el Self-Custodial Bitcoin Staking. Este proceso es una característica central del mecanismo de consenso Satoshi Plus utilizado por la blockchain de Core. Garantiza la integridad, seguridad y eficiencia de la red mediante la elección de validadores responsables de validar transacciones y crear nuevos bloques.

## Importancia de la Elección de Validadores

- **Seguridad e Integridad**: Los validadores mantienen la integridad de la blockchain, por lo que un proceso de elección robusto es esencial para asegurar que solo los nodos más confiables gestionen el libro mayor de la red.

- **Descentralización**: El proceso de elección permite que mineros y stakers participen en la selección de validadores, promoviendo la descentralización y evitando la concentración de poder.

- **Alineación de Incentivos**: Los participantes están incentivados a apoyar validadores efectivos, alineando los intereses en toda la red. Los validadores y sus partidarios (mineros y stakers) reciben recompensas, lo que asegura responsabilidad y participación continua.

- **Eficiencia y Escalabilidad**: Validadores competentes mejoran la capacidad de manejo de transacciones de la red, lo cual es crucial para el rendimiento y la escalabilidad.

## Flujo del Proceso de Elección de Validadores

El proceso de elección de validadores en Satoshi Plus involucra pasos clave, respaldados por ecuaciones específicas que cuantifican las contribuciones tanto de stake como de poder de hash:

1. **Delegación de Stake**: Los poseedores de tokens CORE y BTC hacen staking y delegan sus tokens a los candidatos a validador. Esta delegación funciona como una forma de votación, donde el peso de cada voto corresponde a la cantidad de tokens apostados.

2. **Delegación de Poder de Hash**: Los mineros de Bitcoin delegan una porción de su poder de hash al especificar sus Validadores preferidos en los bloques de Bitcoin que minan. Este proceso integra el poder de minería de Bitcoin en el mecanismo de seguridad de Core.

3. **Selección de Validadores**: Los validadores son seleccionados en función del respaldo total que reciben, calculado al combinar los tokens apostados (BTC y CORE) y el poder de hash de Bitcoin delegado.

4. **Formación del Conjunto de Validadores**: Se forma un conjunto de validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de stake y las asignaciones de poder de hash. Hay dos pasos involucrados en la elección de validadores.

  1. Los hybrid scores se calculan para todos los validadores de la red con la siguiente ecuación. El hybrid score para de cada validador se determina con la siguiente fórmula:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Donde, $$m + k + l = 1$$

- $$rHp$$: Bitcoin hash power delegated to a validator.
- $$tHp$$: Total hash power on Core.
- $$rSp$$: Amount of CORE tokens staked to a validator.
- $$tSp$$: Total CORE tokens staked on Core.
- $$rBp$$: Amount of BTC tokens staked to a validator.
- $$tBp$$: Total BTC tokens staked on Core.
- $$m$$: Ratio assigned to hash power.
- $$k$$: Ratio assigned to CORE staking.
- $$l$$: Ratio assigned to BTC staking.

2. At the end of each round, validators are ranked in order of their hybrid score, and the top **27** validators with the highest hybrid scores are selected for the validator set in the next round.
  Leaving aside the mathematical details, this is essentially a weighted, bicameral voting procedure. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and self-custodial Bitcoin stakers can vote for a validator through the delegation of their tokens. This includes delegated Proof-of-Work (PoW), delegated Proof-of-Stake (PoS), and Self-Custodial Bitcoin Staking, which are weighted to determine the hybrid score.

This is the “core” of the Core blockchain, the mechanism by which the network leverages the security and decentralization of the Bitcoin network and the scalability and composability of PoS chains like Ethereum. Allowing Bitcoin miners and Bitcoin stakers to vote on validators enables Core to leverage Bitcoin’s legendary robustness. Because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Block Production**: After the election, all validators are sorted roughly in order of their hybrid score, and they take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning.
  By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability; the number of validators is expected to rise to **34 by Q2 2025**. In Q2 2024, Core has already expanded its active validator set from **21** to **27**. Furthermore, this mechanism offers enhanced security through improved efficiency and a tolerance for a large number of Byzantine players. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

6. **Reward Distribution**:
  - Rewards are distributed based on contributions to network security, using the following formula:

    $$
       rH = \frac{\frac{rHp}{tHp} * m} {S} * R
    $$

    $$
       rS = \frac{\frac{rSp}{tSp} * k} {S} * R
    $$

    $$
       rB = \frac{\frac{rBp}{tBp} * l} {S} * R
    $$

    Where:

    - $$rH$$: Rewards attributed to delegated hash power (DPoW).
    - $$rS$$: Rewards attributed to CORE staking (DPoS).
    - $$rB$$: Rewards attributed to BTC staking.
    - $$R$$: Total rewards allocated to all delegators.
    - $$m$$: Proportion of rewards allocated to hash power.
    - $$k$$: Proportion of rewards allocated to CORE staking.
    - $$l$$: Proportion of rewards allocated to BTC staking.
    - $$S$$: Hybrid score of the validator.

    Per-unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

    - Per unit hash power reward: $$rHu$$ =  $$\frac{rH}{rHp}$$
    - Per unit CORE reward: rSu = $$\frac{rS}{rSp}$$
    - Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

    Where:

    - $$rHu$$ is the validator hash power rewards per unit;
    - $$rSu$$ is the CORE token staking rewards per unit;
    - $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for a delegator with PN BTC yield level
    - **Yield Multipliers:** Each boosted yield level has a specific multiplier (e,f,g,h, ..., etc) that is determined by a user's staking data as well as system dual staking settings. The settings are subject to change and can be configured through governance voting. These calculations ensure proportional rewards are distributed based on individual contributions to a validator’s delegation pool.

#### Impact of Dual Staking on BTC Rewards

With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

### Flow Diagram of the Validator Election Process

The following diagram visually represents the Validator election process in Satoshi Plus:

<p align="center">
  ![validator-election-flow](../../../static/img/validator/Validator-Election-Workflow.png)
</p>

This flowchart illustrates the cyclical nature of the validator election and their ongoing responsibilities within the Satoshi Plus consensus mechanism. It emphasizes how stake and hash power delegation directly influence validator selection, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.