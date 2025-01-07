---
sidebar_label: Recompensas
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Rewards in the Core Ecosystem

---

The Core ecosystem is designed to incentivize participation and secure commitment from its community through a well-structured rewards system. Este sistema sustenta el mecanismo de consenso Satoshi Plus, garantizando la seguridad de la red, la participación de las partes interesadas y la alineación de intereses entre todos los participantes. El sistema de recompensas es fundamental para alentar a la comunidad a participar activamente en la minería, la participación y la gobernanza, mejorando así la salud general y el crecimiento del ecosistema.

## Recompensas del validador

- **Descripción:** Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son fundamentales para compensar a los Validadores por sus esfuerzos y costos operativos.
- **Mecanismo:** Los validadores reciben una combinación de tarifas de transacción y nuevos tokens CORE acuñados a través de la política de inflación de blockchain. La cantidad de recompensas que recibe un Validador es proporcional a su participación y al poder de hash delegado por los mineros. Hay dos categorías de recompensas del validador:
  1. **Recompensas base**, es decir, tokens CORE recién acuñados;
  2. **Tarifas cobradas por transacciones en cada bloque**;

Las recompensas básicas se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, **90%** de las recompensas van a los validadores y **10%** de las recompensas van al "Contrato de recompensas del sistema". Del 90% pagado a los validadores, el validador toma un porcentaje como comisión antes de pagar a sus delegados. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Los validadores comparten recompensas con las entidades que les delegaron, incluidos los participantes de CORE, los participantes de bitcoin y los delegados de PoW, pero deciden cuánto devolver al decidir cuánto ellos (los validadores) eligen quedarse para sí mismos. Los validadores pueden recibir tanta o tan poca recompensa como quieran, aunque se les incentiva a ser generosos para atraer más participación y poder de hash.

Los validadores deben compartir recompensas con los delegados que apostaron CORE o les delegaron poder hash. Dado que cada validador tiene la misma probabilidad de producir bloques, todos los validadores estables deberían obtener una porción similar de las recompensas a largo plazo. La parte que los validadores se quedan para ellos (**comisiones**) se distribuirá directamente a sus direcciones de tarifas al final de cada ronda.

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

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (BTC y CORE). Por su parte, los delegados intentarán optimizar sus propias recompensas eligiendo validadores con menores cantidades de poder de hash delegado y participación. Para maximizar sus recompensas, los delegados buscarán validadores que sean generosos en sus pagos, pero que tampoco tengan una cantidad sustancial de tokens CORE delegados o PoW delegados. Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Dado que los pagos se determinan en parte en función del porcentaje de la participación total que representa cada delegador, se les incentivará a intentar encontrar validadores con delegaciones pequeñas. Furhtermore, BTC staking rewards are influenced by dual staking tiers, encouraging greater network participation without prescribing specific strategies.

## Impact of Dual Staking on BTC Rewards

With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

## Estrategia de distribución de recompensas

Core follows the following distribution Principles:
\* **Fairness:** The rewards system is designed to be fair, ensuring that contributions, whether in the form of staking, mining, or governance participation, are equitably recognized and rewarded.
\* **Transparencia:** Todos los aspectos de la distribución de recompensas son transparentes, lo que permite a los participantes comprender cómo se calculan y distribuyen las recompensas.
\* **Seguridad:** El mecanismo de distribución está protegido contra manipulación y abuso, utilizando salvaguardias criptográficas y basadas en contratos inteligentes para garantizar la integridad del proceso de recompensa.

## Prevención del mal comportamiento del validador

El comportamiento malicioso de los validadores se desincentiva mediante cortes y encarcelamientos. Los verificadores pueden presentar pruebas para que los validadores sean recortados o encarcelados si no cumplen con sus obligaciones. Las principales actividades que se pueden recortar son la indisponibilidad y la doble firma. Los propios validadores informan de la indisponibilidad en el algoritmo de consenso, y los verificadores externos informan de la doble firma. Consulte la guía detallada sobre [reducción y encarcelamiento] (../slashing/overview.md) para obtener más información.
