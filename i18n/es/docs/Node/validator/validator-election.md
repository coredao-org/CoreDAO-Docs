---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Proceso de elección del validador en la red central

---

## Descripción general

Los validadores son una parte crucial de la red Core. In addition to handling transaction validation and block production, the validator election process is where all the components — i.e., DPoW, DPoS, and Self-Custodial Bitcoin Staking — of the Satoshi Plus consensus come together. The Validator election process is a central feature of the Satoshi Plus consensus mechanism employed by the Core blockchain. Este proceso garantiza la integridad, seguridad y eficiencia de la cadena de bloques mediante la elección de Validadores responsables de validar las transacciones y crear nuevos bloques.

## Importancia de la elección del validador

- **Seguridad e integridad**: los validadores mantienen la integridad de la cadena de bloques, lo que hace que un proceso de elección sólido sea crucial para garantizar que solo los nodos más confiables administren el libro mayor de la cadena de bloques.

- **Descentralización**: El proceso de elección permite a los mineros y participantes participar en la selección del Validador, promoviendo la descentralización y evitando la concentración del control.

- **Alineación de incentivos**: se incentiva a las partes interesadas a apoyar a validadores eficaces, alineando intereses en toda la red. Los validadores y sus partidarios (mineros y apostadores) reciben recompensas, lo que garantiza la responsabilidad y la participación continua.

- **Eficiencia y escalabilidad**: Los validadores competentes mejoran la capacidad de manejo de transacciones de la red, crucial para el rendimiento y la escalabilidad.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de participación y poder de hash:

1. **Delegación de Stake:** Los holdersde tokens CORE y BTC hacen stake y delegan sus tokens a los candidatos a Validador. Esta delegación es una forma de votación, donde el peso de cada voto corresponde al número de tokens apostados.

2. **Delegación de Hash Power:** Los mineros de Bitcoin delegan una porción de su poder de hash especificando sus Validadores preferidos en los bloques de Bitcoin que minan. Este proceso integra el poder minero de Bitcoin en el mecanismo de seguridad de Core.

3. **Selección de Validadores:** Los Validadores son seleccionados en función del apoyo total que reciben, calculado combinando los tokens en stake (BTC y CORE) y el poder de hash de Bitcoin delegado.

4. **Formación del Conjunto de Validadores**: Se forma un conjunto de Validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de participación y las asignaciones de poder hash. There are two steps involved in the validator election.

  1. Las puntuaciones híbridas se calculan para todos los validadores de la red con la siguiente ecuación. La puntuación híbrida para cada validador se calcula según la siguiente fórmula:

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

2. At the end of each round, validators are ranked in order of their hybrid score, and the top **27** validators with the highest hybrid scores are selected for the validator set in the next round.
  Dejando de lado los detalles matemáticos, se trata esencialmente de un procedimiento de votación bicameral ponderado. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and self-custodial Bitcoin stakers can vote for a validator through the delegation of their tokens. This includes delegated Proof-of-Work (PoW), delegated Proof-of-Stake (PoS), and Self-Custodial Bitcoin Staking, which are weighted to determine the hybrid score.

Este es el "núcleo" de Core blockchain, el mecanismo mediante el cual la red aprovecha la seguridad y descentralización de la red Bitcoin y la escalabilidad y componibilidad de cadenas PoS como Ethereum. Allowing Bitcoin miners and Bitcoin stakers to vote on validators enables Core to leverage Bitcoin’s legendary robustness. Because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Block Production**: After the election, all validators are sorted roughly in order of their hybrid score, and they take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning.
  By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability; the number of validators is expected to rise to **34 by Q2 2025**. En el segundo trimestre de 2024, Core ya amplió su conjunto de validadores activos de **21** a **27**. Furthermore, this mechanism offers enhanced security through improved efficiency and a tolerance for a large number of Byzantine players. Core es seguro siempre que no más de $1 \más de 3$ de los validadores sean maliciosos.

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

    - $$rH$$: Recompensas atribuidas al poder de hash delegado (DPoW).
    - $$rS$$: Recompensas atribuidas a la participación CORE (DPoS).
    - $$rB$$: Recompensas atribuidas a la apuesta de BTC.
    - $$rB$$: Recompensas atribuidas a la apuesta de Btc.
    - $$m$$: Proporción de recompensas asignadas al poder hash.
    - $$k$$: Proporción de recompensas asignadas a la apuesta CORE.
    - $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
    - $$S$$: Puntuación híbrida del validador.

    Per-unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

    - Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
    - Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
    - Recompensa BTC por unidad: $$rBu$$ de **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x multiplicador de rendimiento para el nivel<sub>n</sub>

    Donde:

    - $$rHu$$ son las recompensas del poder hash del validador por unidad;
    - $$rHu$$ son las recompensas del poder hash del validador por unidad;
    - $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for a delegator with PN BTC yield level
    - **Multiplicadores de rendimiento:** Cada nivel de rendimiento aumentado tiene un multiplicador específico (e,f,g,h, ..., etc.) que está determinado por los datos de apuesta del usuario, así como por la configuración de apuesta dual del sistema. The settings are subject to change and can be configured through governance voting. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

#### Impacto de la doble apuesta en las recompensas BTC

Con la introducción del Dual Stake, las recompensas de BTC ahora se escalonan según la cantidad de CORE apostado en relación con BTC. Las recompensas BTC ya no se distribuyen uniformemente entre todos los participantes. En cambio, se asignan dinámicamente en función de umbrales de apuesta dual, y los niveles más altos generalmente reciben una mayor proporción de las recompensas. Esta estructura escalonada introduce variabilidad en los rendimientos de las apuestas de BTC, alineando los incentivos en todo el ecosistema Core y manteniendo la proporcionalidad en la distribución de recompensas.

### Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

<p align="center">
  ![validator-election-flow](../../../static/img/validator/Validator-Election-Workflow.png)
</p>

Este diagrama de flujo ilustra la naturaleza cíclica de la elección del validador y sus responsabilidades actuales dentro del mecanismo de consenso de Satoshi Plus. Enfatiza cómo la delegación de stake y poder de hasheo influyen directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.