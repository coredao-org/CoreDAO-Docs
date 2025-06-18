---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Recompensas del validador en el ecosistema central

---

El ecosistema Core está diseñado para incentivar la participación y asegurar el compromiso de su comunidad a través de un sistema de recompensas bien estructurado. Este sistema sustenta el mecanismo de consenso Satoshi Plus, garantizando la seguridad de la red, la participación de las partes interesadas y la alineación de intereses entre todos los participantes. El sistema de recompensas es fundamental para alentar a la comunidad a participar activamente en la minería, la participación y la gobernanza, mejorando así la salud general y el crecimiento del ecosistema.

## Recompensas del validador

- **Descripción:** Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. These rewards are critical for compensating validators for their efforts and operational costs.
- **Mecanismo:** Los validadores reciben una combinación de tarifas de transacción y nuevos tokens CORE acuñados a través de la política de inflación de blockchain. The amount of rewards a validator gets is proportional to their stake and the delegated hash power from miners. Hay dos categorías de recompensas del validador:
    1. **Recompensas base**, es decir, tokens CORE recién acuñados;
    2. **Tarifas cobradas por transacciones en cada bloque**;

Las recompensas básicas se calculan y distribuyen cuando se extrae el último bloque de una ronda. Currently, **90%** of the rewards are allocated to the validators, and **10%** of the rewards are distributed to the `System Reward Contract`. Of the 90% paid to validators, a percentage is taken as a commission by the validator before they distribute it to their delegates. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Validators share rewards with the entities that delegated to them – including CORE stakers, Bitcoin stakers, and PoW delegators – but they decide how much to give back by determining how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous to attract more stake and hash power.

Los validadores deben compartir recompensas con los delegados que apostaron CORE o les delegaron poder hash. Given the fact that each validator has an equal probability of producing blocks, all stable validators should get a similar portion of the rewards in the long run. La parte que los validadores se quedan para ellos (**comisiones**) se distribuirá directamente a sus direcciones de tarifas al final de cada ronda.

Después de que los validadores cobran sus tarifas, el protocolo utiliza esta función para determinar cómo se dividen las recompensas restantes entre los participantes CORE, los participantes BTC y los delegados de poder hash. La distribución de recompensas se calcula según la siguiente fórmula:

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
- $$R$$: Recompensas totales asignadas a todos los delegados.
- $$m$$: Proporción de recompensas asignadas al poder hash.
- $$k$$: Proporción de recompensas asignadas a la apuesta CORE.
- $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
- $$S$$: Puntuación híbrida del validador.

Per-unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

- Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
- Recompensa CORE por unidad: rSu = $$\frac{rS}{rSp}$$
- Recompensa BTC por unidad: $$rBu$$ de **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x multiplicador de rendimiento para el nivel<sub>n</sub>

Donde:

- $$rHu$$ son las recompensas del poder hash del validador por unidad;
- $$rSu$$ son las recompensas de apuesta de tokens CORE por unidad;
- $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e.g., f, g, h, etc.) that is determined by a user's staking data, as well as system dual staking settings. The settings are subject to change and can be configured through governance voting. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (BTC y CORE). For their part, delegators will try to optimize their rewards by choosing validators with lower amounts of delegated hash power and stake. To maximize their rewards, delegators will look for both validators who are generous in their payouts and also don’t already have a substantial amount of delegated CORE tokens or delegated Proof-of-Work (PoW). Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Since payouts are determined in part by the percentage of the total stake each delegator accounts for, they’ll be incentivized to seek out validators with small delegations. Furthermore, BTC staking rewards are influenced by dual staking tiers, encouraging greater network participation without prescribing specific strategies.

## Impact of Dual Staking on Bitcoin Staking Rewards

With the introduction of Dual Staking, Bitcoin Staking staking rewards are now tiered based on the amount of CORE staked relative to BTC. Bitcoin staking rewards are no longer evenly distributed across all participants. En cambio, se asignan dinámicamente en función de umbrales de apuesta dual, y los niveles más altos generalmente reciben una mayor proporción de las recompensas. This tiered structure introduces variability in Bitcoin staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

## Estrategia de distribución de recompensas

Core sigue los siguientes principios de distribución:
\* **Equidad:** El sistema de recompensas está diseñado para ser justo, garantizando que las contribuciones, ya sea en forma de participación, minería o participación en la gobernanza, sean reconocidas y recompensadas de manera equitativa.
\* **Transparencia:** Todos los aspectos de la distribución de recompensas son transparentes, lo que permite a los participantes comprender cómo se calculan y distribuyen las recompensas.
\* **Seguridad:** El mecanismo de distribución está protegido contra manipulación y abuso, utilizando salvaguardias criptográficas y basadas en contratos inteligentes para garantizar la integridad del proceso de recompensa.

## Prevención del mal comportamiento del validador

El comportamiento malicioso de los validadores se desincentiva mediante cortes y encarcelamientos. Los verificadores pueden presentar pruebas para que los validadores sean recortados o encarcelados si no cumplen con sus obligaciones. Las principales actividades que se pueden recortar son la indisponibilidad y la doble firma. Unavailability is reported by validators themselves in the consensus algorithm, and external verifiers report double signing. Consulte la guía detallada sobre [reducción y encarcelamiento] (../slashing/overview.md) para obtener más información.