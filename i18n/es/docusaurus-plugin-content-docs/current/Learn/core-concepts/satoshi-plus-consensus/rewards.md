---
sidebar_label: Recompensas
hide_table_of_contents: false
sidebar_position: 2
description: Recompensas en el ecosistema Core
---

# Recompensas en el ecosistema Core

---

The Core network is designed to incentivize participation and secure commitment from its community through a well-structured rewards system. This system underpins Satoshi Plus consensus, upholding network security, stakeholder engagement, and alignment of interests among all participants. El sistema de recompensas es fundamental para alentar a la comunidad a participar activamente en la minería, la participación y la gobernanza, mejorando así la salud general y el crecimiento del ecosistema.

## Tipos de recompensas

<p align="center">
![rewards](../../../../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p> 

### 1. Recompensas mineras

- **Descripción:** Se otorgan recompensas mineras a los mineros de Bitcoin que contribuyen con su poder de hash para proteger la cadena de bloques Core. This process extends the traditional mining efforts on the Bitcoin blockchain to include support for the Core blockchain, without requiring miners to divert resources from their Bitcoin mining activities.
- **Mecanismo:** Los mineros incluyen metadatos específicos en los bloques de Bitcoin que extraen, lo que indica su compatibilidad con Core blockchain. A cambio de su contribución, los mineros reciben tokens CORE como recompensas complementarias, además de sus recompensas habituales por la minería de Bitcoin.

### 2. Recompensas de apuesta

- **Description:** Staking rewards are distributed to Bitcoin and CORE token holders who stake and delegate their tokens to Core validators.
- **Mechanism:**  Staking allows holders of both CORE tokens and [Bitcoin](../../products/btc-staking/overview.md) to participate in the election of the active validator set by delegating their holdings to their preferred validators. Para el staking de tokens CORE, el requisito mínimo es de **1 CORE**, permitiendo que cualquier holder de CORE participe en el staking dentro de la red Core. En el lado del staking de Bitcoin, la configuración actual **no impone requisitos mínimos de BTC** cuando se usa el script para staking. Sin embargo, el staking a través de la interfaz web oficial requiere un **mínimo de 0.01 BTC** (excluyendo comisiones por transacción). Los poseedores de tokens CORE y Bitcoin pueden delegar sus respectivos tokens a validadores de su elección a través del [sitio web de staking](https://stake.coredao.org/staking) oficial. The rewards earned by stakers are proportional to the amount of Bitcoin/CORE staked, incentivizing long-term holding and participation in the consensus process.

### 3. Recompensas del validador

- **Description:** Validators earn rewards for their role in processing transactions, producing new blocks, and maintaining the blockchain's integrity. These rewards are critical for compensating validators for their efforts and operational costs.
- **Mechanism:** Validators receive a combination of CORE block rewards and gas fees. Hay dos categorías de recompensas del validador:
    1. **Block rewards**, i.e. newly minted CORE tokens;
    2. **Tarifas cobradas por transacciones en cada bloque**;

Block rewards are calculated and distributed when the last block of a round is mined. Actualmente, **90%** de las recompensas van a los validadores y **10%** de las recompensas van al "Contrato de recompensas del sistema". Del 90% pagado a los validadores, el validador toma un porcentaje como comisión antes de pagar a sus delegados. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Validators share rewards with the entities that delegated to them – including CORE stakers, Bitcoin stakers, and Bitcoin miners – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous in order to attract more delegators.

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

- $$rH$$: Recompensas atribuidas al poder de hash delegado (DPoW).
- $$rS$$: Recompensas atribuidas a la participación CORE (DPoS).
- $$rB$$: Recompensas atribuidas a la apuesta de BTC.
- $$R$$: Recompensas totales asignadas a todos los delegados.
- $$m$$: Proporción de recompensas asignadas al poder hash.
- $$m$$: Proporción de recompensas asignadas al poder hash.
- $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
- $$S$$: Puntuación híbrida del validador.

Los cálculos de recompensa por unidad determinan las recompensas distribuidas por cada unidad apostada de poder hash, CORE o BTC:

- **Recompensa por unidad de poder de hasheo:** $$rHu$$ =  $$\frac{rH}{rHp}$$
- **Recompensa por unidad de CORE:** $$rSu$$ = $$\frac{rS}{rSp}$$
- **Recompensa por unidad de BTC:** $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicador de Dividendos por Nivel <sub>n</sub>

Donde:

- $$rHu$$ son las recompensas del poder hash del validador por unidad;
- $$rSu$$ son las recompensas de apuesta de tokens CORE por unidad;
- $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
- **Multiplicadores de rendimiento:** Cada nivel de rendimiento aumentado tiene un multiplicador específico (e, f, g, h,..., etc.) que está determinado por los datos de staking del usuario, así como por la configuración de staking dual del sistema. Las configuraciones están sujetas a cambios y se pueden configurar mediante votación de gobernanza. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

#### Impacto de la doble apuesta en las recompensas BTC

With the introduction of Dual Staking, Bitcoin staking rewards are now tiered based on the amount of CORE staked relative to Bitcoin. Bitcoin rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on Dual Staking thresholds, with higher tiers generally receiving a greater proportion of the rewards.

#### División de recompensa

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para el CORE y Bitcoin delegados. Por su parte, los delegados intentarán optimizar sus propias recompensas eligiendo validadores con menores cantidades de poder de hash delegado y participación. Para maximizar sus recompensas, los delegados buscarán validadores que sean generosos en sus pagos, pero que tampoco tengan una cantidad sustancial de tokens CORE delegados o PoW delegados. Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Dado que los pagos se determinan en parte en función del porcentaje de la participación total que representa cada delegador, se les incentivará a intentar encontrar validadores con delegaciones pequeñas.

### 4. Recompensas de retransmisor y verificador

En el ecosistema Core, las recompensas base se calculan y distribuyen cuando se extrae el último bloque de una ronda, con **90%** para los validadores y **10%** para el contrato de recompensas del sistema. El Contrato de Recompensa del Sistema acumula recompensas para remunerar a los retransmisores y verificadores. Tal como están las cosas, hay un límite de **10 millones** de tokens CORE en total en el contrato de recompensa del sistema. Cualquier recompensa que supere esta cantidad se quema.

Los retransmisores son responsables de comunicar los bloques de Bitcoin y los datos de las transacciones a la red Core. Obtienen una parte de las recompensas del sistema base y las tarifas de transacción por este trabajo de comunicaciones entre cadenas. Las recompensas del repetidor se distribuyen en lotes, cada 100 bloques de Bitcoin. Los retransmisores reclaman sus recompensas periódicamente.

Los verificadores en el ecosistema central son responsables de monitorear el comportamiento de los validadores e informarles si participan en doble firma u otra actividad maliciosa. Cuando tiene éxito, las recompensas se pagan inmediatamente desde el Contrato de recompensas del sistema, en la misma transacción.

## Conclusión

Rewards in Satoshi Plus play a crucial role in maintaining the security, vitality, and decentralization of the network. Al alinear los incentivos de varios participantes a través de un sistema de recompensas integral y adaptable, Core garantiza un compromiso continuo y contribuye al crecimiento sostenido y la estabilidad de la plataforma.