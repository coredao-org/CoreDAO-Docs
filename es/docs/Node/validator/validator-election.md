---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Election Process on the Core Network

---

## Descripción general

Los validadores son una parte crucial de la red Core. Además del hecho de que manejan la validación de transacciones y la producción de bloques, el proceso de elección del validador es donde se unen todos los componentes, es decir, DPoW, DPoS y Bitcoin sin custodia, del consenso de Satoshi Plus. The Validator election process is a central feature of the Satoshi Plus consensus mechanism employed by Core blockchain. Este proceso garantiza la integridad, seguridad y eficiencia de la cadena de bloques mediante la elección de Validadores responsables de validar las transacciones y crear nuevos bloques.

## Importancia de la elección del validador

- **Seguridad e integridad**: los validadores mantienen la integridad de la cadena de bloques, lo que hace que un proceso de elección sólido sea crucial para garantizar que solo los nodos más confiables administren el libro mayor de la cadena de bloques.

- **Descentralización**: El proceso de elección permite a los mineros y participantes participar en la selección del Validador, promoviendo la descentralización y evitando la concentración del control.

- **Alineación de incentivos**: se incentiva a las partes interesadas a apoyar a validadores eficaces, alineando intereses en toda la red. Los validadores y sus partidarios (mineros y apostadores) reciben recompensas, lo que garantiza la responsabilidad y la participación continua.

- **Eficiencia y escalabilidad**: Los validadores competentes mejoran la capacidad de manejo de transacciones de la red, crucial para el rendimiento y la escalabilidad.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de participación y poder de hash:

1. **Delegación de estaca**:
   - Los poseedores de tokens CORE y BTC apuestan y delegan sus tokens a candidatos a Validador. Esta delegación es una forma de votación, donde el peso de cada voto corresponde al número de tokens apostados.

2. **Delegación de poder hash**:
   - Los mineros de Bitcoin delegan una parte de su poder de hash especificando sus validadores preferidos en los bloques de Bitcoin que extraen. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Selección del validador**:
   - Los validadores se seleccionan en función del apoyo total que reciben, calculado combinando tokens apostados (BTC y CORE) y poder de hash de Bitcoin delegado.

4. **Formación del conjunto de validadores**:
   Se forma un conjunto de Validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de participación y las asignaciones de poder hash. Hay dos pasos involucrados en la elección del validador.

5. Las puntuaciones híbridas se calculan para todos los validadores de la red con la siguiente ecuación. La puntuación híbrida para cada validador se calcula según la siguiente fórmula:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Where, $$m + k + l = 1$$

- $$rHp$$: Bitcoin hash power delegated to a validator.
- $$tHp$$: Total hash power on Core.
- $$rSp$$: Amount of CORE tokens staked to a validator.
- $$tSp$$: Total CORE tokens staked on Core.
- $$rBp$$: Amount of BTC tokens staked to a validator.
- $$tBp$$: Total BTC tokens staked on Core.
- $$m$$: Ratio assigned to hash power.
- $$k$$: Ratio assigned to CORE staking.
- $$l$$: Ratio assigned to BTC staking.

2. Al final de cada ronda, los validadores se clasifican según su puntuación híbrida y los **23** validadores con las puntuaciones híbridas más altas se seleccionan para el conjunto de validadores de la siguiente ronda.

Dejando de lado los detalles matemáticos, se trata esencialmente de un procedimiento de votación bicameral ponderado. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the delegation of their tokens. This delegated PoW, delegated PoS, and Non-Custodial BTC Staking are weighted to determine the hybrid score.

Este es el "núcleo" de Core blockchain, el mecanismo mediante el cual la red aprovecha la seguridad y descentralización de la red Bitcoin y la escalabilidad y componibilidad de cadenas PoS como Ethereum. Letting Bitcoin miners and bitcoin stakers vote on validators allows Core to avail itself of Bitcoin’s legendary robustness; and because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Producción de bloques**:
   - Después de la elección, todos los validadores se clasifican aproximadamente según su puntuación híbrida y se turnan para producir bloques **en forma circular** antes de que el proceso comience de nuevo desde el principio. By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability, but the number of validators is expected to increase to **34 validators by Q2 2025**. In Q2 2024, Core has already expanded its active validator set from **21** to **27**. Es más, este mecanismo proporciona seguridad adicional a través de una mayor eficiencia y tolerancia para una gran cantidad de jugadores bizantinos. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

6. **Distribución de recompensas**:
   - Las recompensas se distribuyen en función de las contribuciones a la seguridad de la red, utilizando la siguiente fórmula:

     $$
        rH = \frac{\frac{rHp}{tHp} * m} {S} * R
     $$

     $$
        rS = \frac{\frac{rSp}{tSp} * k} {S} * R
     $$

     $$
        rB = \frac{\frac{rBp}{tBp} * l} {S} * R
     $$

     Donde:

     - $$rH$$: Rewards attributed to delegated hash power (DPoW).
     - $$rS$$: Rewards attributed to CORE staking (DPoS).
     - $$rB$$: Rewards attributed to BTC staking.
     - $$R$$: Total rewards allocated to all delegators.
     - $$m$$: Proportion of rewards allocated to hash power.
     - $$k$$: Proportion of rewards allocated to CORE staking.
     - $$l$$: Proportion of rewards allocated to BTC staking.
     - $$S$$: Hybrid score of the validator.

     Per unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

     - Per unit hash power reward: $$rHu$$ =  $$\frac{rH}{rHp}$$
     - Per unit CORE reward: rSu = $$\frac{rS}{rSp}$$
     - Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

     Donde:

     - $$rHu$$ is the validator hash power rewards per unit;
     - $$rSu$$ is the CORE token staking rewards per unit;
     - $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for delegator with PN BTC yield level
     - **Yield Multipliers:** Each boosted yield level has a specific multiplier (e,f,g,h, ..., etc) that is determined by a user's staking data as well as system dual staking settings. The settings are subject to change and are configurable through governance voting. These calculations ensure proportional rewards are distributed based on individual contributions to a validator’s delegation pool.

#### Impact of Dual Staking on BTC Rewards

With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

### Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

![flujo-de-elección-validador](../../../static/img/staoshi-plus/flujo-elección-validador.png)

Este diagrama de flujo ilustra la naturaleza cíclica de la elección del validador y sus responsabilidades actuales dentro del mecanismo de consenso de Satoshi Plus. Enfatiza cómo la delegación de participación y poder de hash influye directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.
