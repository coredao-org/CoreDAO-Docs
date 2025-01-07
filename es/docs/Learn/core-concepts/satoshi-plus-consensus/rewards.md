---
sidebar_label: Recompensas
hide_table_of_contents: false
sidebar_position: 2
description: Recompensas en el ecosistema Core
---

# Recompensas en el ecosistema Core

---

El ecosistema Core está diseñado para incentivar la participación y asegurar el compromiso de su comunidad a través de un sistema de recompensas bien estructurado. Este sistema sustenta el mecanismo de consenso Satoshi Plus, garantizando la seguridad de la red, la participación de las partes interesadas y la alineación de intereses entre todos los participantes. El sistema de recompensas es fundamental para alentar a la comunidad a participar activamente en la minería, la participación y la gobernanza, mejorando así la salud general y el crecimiento del ecosistema.

## Tipos de recompensas

![rewards](../../../../static/img/validator/Reward-Distribution.png)

### 1. Recompensas mineras

- **Descripción:** Se otorgan recompensas mineras a los mineros de Bitcoin que contribuyen con su poder de hash para proteger la cadena de bloques Core. Este proceso amplía los esfuerzos de minería tradicionales en la cadena de bloques de Bitcoin para incluir soporte para la cadena de bloques Core, sin requerir que los mineros desvíen recursos de sus actividades de minería de Bitcoin.
- **Mecanismo:** Los mineros incluyen metadatos específicos en los bloques de Bitcoin que extraen, lo que indica su compatibilidad con Core blockchain. A cambio de su contribución, los mineros reciben tokens CORE como recompensas complementarias, además de sus recompensas habituales por la minería de Bitcoin.

### 2. Recompensas de apuesta

- **Descripción:** Las recompensas de apuesta se distribuyen a los poseedores de tokens de Bitcoin y CORE que apuestan y delegan sus tokens con validadores en la red Core. Esta participación no solo ayuda a proteger la red a través del componente de prueba de participación delegada (DPoS) del consenso Satoshi Plus, sino que también permite a los poseedores de tokens participar en la gobernanza de la red.
- **Mecanismo:** DPoS permite a los poseedores de tokens CORE y [Bitcoin](../../products/btc-stake/overview.md) votar y participar en la elección del validador establecido delegando sus tenencias a sus validadores preferidos. Para la apuesta de tokens Core, el requisito mínimo de apuesta es 1 token CORE, lo que permite a cualquier titular de CORE participar en la red Core. En lo que respecta a las apuestas de bitcoins, la configuración actual requiere un **requisito de apuesta mínima de 0,01 Bitcoin** que se puede ajustar mediante una votación de gobernanza. Los poseedores de tokens CORE y Bitcoin pueden delegar sus respectivos tokens a validadores de su elección a través del [sitio web de apuestas] oficial (https://stake.coredao.org/). Las recompensas obtenidas por los apostadores son proporcionales a la cantidad de Bitcoin/CORE apostada y la duración de la apuesta, lo que incentiva la tenencia y participación a largo plazo en el proceso de consenso.

### 3. Recompensas del validador

- **Descripción:** Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son fundamentales para compensar a los Validadores por sus esfuerzos y costos operativos.
- **Mecanismo:** Los validadores reciben una combinación de tarifas de transacción y nuevos tokens CORE acuñados a través de la política de inflación de blockchain. La cantidad de recompensas que recibe un Validador es proporcional a su participación y al poder de hash delegado por los mineros. Hay dos categorías de recompensas del validador:
  1. **Recompensas base**, es decir, tokens CORE recién acuñados;
  2. **Tarifas cobradas por transacciones en cada bloque**;

Las recompensas básicas se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, **90%** de las recompensas van a los validadores y **10%** de las recompensas van al "Contrato de recompensas del sistema". Del 90% pagado a los validadores, el validador toma un porcentaje como comisión antes de pagar a sus delegados. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Los validadores comparten recompensas con las entidades que les delegaron, incluidos los participantes de CORE, los participantes de bitcoin y los delegados de PoW, pero deciden cuánto devolver al decidir cuánto ellos (los validadores) eligen quedarse para sí mismos. Los validadores pueden recibir tanta o tan poca recompensa como quieran, aunque se les incentiva a ser generosos para atraer más participación y poder de hash.

Después de que los validadores cobran sus tarifas, el protocolo utiliza esta función para determinar cómo se dividen las recompensas restantes entre los participantes de CORE, los participantes de Bitcoin y los delegados de poder de hash. La distribución de recompensas se calcula según la siguiente fórmula:

### Delegadores de poder hash (mineros y grupos de minería)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

### CORE Stakers

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

### Bitcoin Stakers

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

donde:

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

## División de recompensa

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para el CORE y Bitcoin delegados. Por su parte, los delegados intentarán optimizar sus propias recompensas eligiendo validadores con menores cantidades de poder de hash delegado y participación. Para maximizar sus recompensas, los delegados buscarán validadores que sean generosos en sus pagos, pero que tampoco tengan una cantidad sustancial de tokens CORE delegados o PoW delegados. Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Dado que los pagos se determinan en parte en función del porcentaje de la participación total que representa cada delegador, se les incentivará a intentar encontrar validadores con delegaciones pequeñas.

### 4. Recompensas de retransmisor y verificador

En el ecosistema Core, las recompensas base se calculan y distribuyen cuando se extrae el último bloque de una ronda, con **90%** para los validadores y **10%** para el contrato de recompensas del sistema. El Contrato de Recompensa del Sistema acumula recompensas para remunerar a los retransmisores y verificadores. Tal como están las cosas, hay un límite de **10 millones** de tokens CORE en total en el contrato de recompensa del sistema. Cualquier recompensa que supere esta cantidad se quema.

Relayers are responsible for communicating the Bitcoin blocks and transaction data to the Core network. Obtienen una parte de las recompensas del sistema base y las tarifas de transacción por este trabajo de comunicaciones entre cadenas. Las recompensas del repetidor se distribuyen en lotes, cada 100 bloques de Bitcoin. Los retransmisores reclaman sus recompensas periódicamente.

Los verificadores en el ecosistema central son responsables de monitorear el comportamiento de los validadores e informarles si participan en doble firma u otra actividad maliciosa. Cuando tiene éxito, las recompensas se pagan inmediatamente desde el Contrato de recompensas del sistema, en la misma transacción.

## Conclusión

Las recompensas en el ecosistema Core juegan un papel crucial en el mantenimiento de la seguridad, vitalidad y descentralización de la red. Al alinear los incentivos de varios participantes a través de un sistema de recompensas integral y adaptable, Core garantiza un compromiso continuo y contribuye al crecimiento sostenido y la estabilidad de la plataforma. Este enfoque estructurado de incentivos es fundamental para el éxito de Core como plataforma líder en el panorama Bitcoin DeFi.
