---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo funciona el Dual Staking

---

Core opera bajo el **consenso Satoshi Plus**, integrando tres fuentes de delegación para asegurar la red:

- **Prueba de Trabajo Delegada (DPoW):** Los mineros de Bitcoin delegan el poder de hash a los validadores de Core.
- **Prueba de Participación Delegada (DPoS):** Los poseedores de tokens CORE delegan sus tokens a los validadores.
- **Staking de BTC Auto-Custodiado:** los holders de BTC hacen staking directamente en la red Bitcoin y delegan su participación a los validadores de Core.

**Dual Staking**, una mejora del **Staking de BTC Auto-Custodiado** de Core, permite a los participantes maximizar recompensas al hacer staking simultáneo tanto de **BTC como de CORE**. This strategy strengthens the Core network while unlocking higher Bitcoin staking yields based on predefined CORE staking thresholds

Al cumplir con ratios específicos de **staking de CORE a BTC**, los usuarios obtienen **recompensas de staking de Bitcoin incrementadas**, pagadas en CORE. Aunque el Dual Staking mejora los rendimientos del staking de BTC, no afecta directamente las recompensas del staking de CORE.

![image](../../static/img/dual-staking/dual-staking-tiers.png)

### Umbrales de Rendimiento Incrementado

Actualmente, las recompensas de Satoshi Plus se asignan a través de tres pools, uno para cada una de las tres entidades que participan en la elección de los validadores de Core, a saber: (1) Delegadores de poder de hash, (2) Stakers de Bitcoin, y (3) Stakers de CORE.

El Dual Staking no afecta estos pools de recompensas, pero permite que los stakers de Bitcoin que también hacen staking de tokens CORE ganen una mayor proporción de recompensas en el pool de Staking de Bitcoin. In this section, we provide a detailed explanation of the grading algorithm's operation with respect to dual staking.

#### 1. **Niveles de Rendimiento Incrementado**

Under Dual Staking, there are three boosted yield tiers for Bitcoin Staking based on the proportion of CORE staked relative to Bitcoin staked. Para los Solo-Stakers de solo Bitcoin, existe un cuarto nivel con la tasa más baja de staking de Bitcoin. Es importante señalar que la tasa de recompensa anual para el Staking de Bitcoin puede fluctuar significativamente, a menudo debido a los precios variables y otras dinámicas del mercado. Como resultado, los rendimientos incrementados reales pueden cambiar a diario según las condiciones del mercado.

- **P<sub>BASE</sub>** \= la tasa base de staking de BTC
- **P<sub>Nivel1</sub>** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 1
- **P<sub>Nivel2</sub>** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 2
- **P<sub>Nivel3</sub> (P<sub>MAX</sub>)** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 3

Efectivamente, las emisiones de CORE se distribuyen de manera proporcional según el TVL de BTC, ponderadas en función de su nivel de dual staking (CORE:BTC).

#### 2. **Umbrales de CORE en Staking y Ratios de Staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**

The deciding mechanism for a Bitcoin staker’s yield tier (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, or **P<sub>Level3</sub> (P<sub>MAX</sub>)**) is based on CORE tokens staked relative to Bitcoin staked, where **R** represents the `CORE:BTC` Ratio and **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. Los actuales ratios de staking CORE:BTC son los siguientes:

- Staking Ratio R1 \= 3,625 CORE per 1 BTC
- Staking Ratio R2 \= 10,875 CORE per 1 BTC
- Staking Ratio R3 \= 29,000 CORE per 1 BTC

Teniendo en cuenta estos ratios, los usuarios pueden calcular el umbral requerido para cada nivel como sigue:

- **Umbral CORE en staking para P<sub>Nivel1</sub>** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>1</sub>**)
- **Umbral CORE en staking para P<sub>Nivel2</sub>** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>2</sub>**)
- **Umbral CORE en staking para P<sub>Nivel3</sub> (P<sub>MAX</sub>)** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>3</sub>**)

:::note
El CORE en staking y/o el Bitcoin en staking pueden ser distribuidos entre múltiples validadores activos de Core.
:::

#### 3. **Determinación del nivel de rendimiento incrementado para cada (1) Bitcoin en staking**

- If staked CORE amount \< **R<sub>1</sub>**, the user is in tier **P<sub>BASE</sub>**
- Si **R<sub>1</sub>** \<= la cantidad de CORE en staking \< **R<sub>2</sub>**, el usuario entra en el nivel **P<sub>Level1</sub>**
- Si **R<sub>2</sub>** \<= la cantidad de CORE en staking \< **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level2</sub>**
- Si la cantidad de CORE en staking \>= **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level3</sub>** (**P<sub>MAX</sub>**)

:::note
Staking ratios and the number of levels are configurable and subject to change by governance vote.
:::

### Ejemplo

The following is a simple example explaining how to calculate the required CORE to stake, based on the parameters mentioned above, to unlock boosted yield tiers for Dual Staking.

Ahora, el usuario deberá hacer staking de CORE según los siguientes umbrales de CORE en staking para disfrutar de un mayor rendimiento en su BTC en staking con las variables mencionadas anteriormente:

- Staking Ratio **R<sub>1</sub>** \= 3,625
- Staking Ratio **R<sub>2</sub>** \= 10,875
- Staking Ratio **R<sub>3</sub>** \= 29,000
- Cantidad de BTC en staking \= 10 BTC

Los **Umbrales de CORE en Staking** con las variables mencionadas anteriormente son:

- Staked CORE Threshold for **P<sub>Level1</sub>** \= 10 \* 3,625 \= 36,250 staked CORE
- Staked CORE Threshold for **P<sub>Level2</sub>** \= 10 \* 10,875 \= 108,875 staked CORE
- Staked CORE Threshold for **P<sub>Level3</sub>** \= 10 \* 29,000 \= 290,000 staked CORE

Por lo tanto, el BTC en staking en este ejemplo disfrutará de un rendimiento de

- **P<sub>BASE</sub>** if the amount of staked CORE is below 36,250
- **P<sub>Level1</sub>** if the amount of staked CORE is above or equal to 36,250 but below 108,875
- **P<sub>Level2</sub>** if the amount of staked CORE is above or equal to 108,875 but below 290,000
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** if the amount of staked CORE is above or equal to 290,000

:::note
The multiplier on each boosted yield tier is dynamic and subject to change based on market supply and demand conditions.
:::

:::info
To activate your new dual-staking tier, follow these two steps. This applies to users who already have BTC staked in earlier rounds at 00:00 UTC and decide to stake additional CORE to advance to higher tiers. First, after staking CORE, wait until the following 00:00 UTC. Luego, reclama todas tus recompensas en cualquier momento después de las 00:00 UTC para restablecer el sistema de cálculo de niveles. Tu nuevo nivel se activará tan pronto como completes la reclamación. Ambos pasos son esenciales para asegurarte de que tu nuevo nivel entre en efecto.
:::

### Cómo calificar para las recompensas de Dual Staking

Para habilitar mayores rendimientos de Bitcoin a través de Dual Staking, los usuarios deben:

1. **Stake both BTC and CORE**, ensuring the CORE stake meets or exceeds the minimum Dual Staking threshold.
2. **Usa la misma cartera** tanto para hacer staking de CORE como para recibir las recompensas del staking de BTC.

This approach ensures seamless reward distribution while incentivizing deeper participation in the network.

### Consideraciones para Optimizar los Rendimientos

- Las puntuaciones híbridas de los validadores representan la suma total ponderada de las delegaciones en todos los validadores. En general, puntuaciones híbridas más altas se correlacionan con menores recompensas por hacer staking de BTC y CORE, aunque esta relación no es estrictamente lineal.
- Cuando se hace staking con una cantidad relativamente baja de activos que no altera significativamente la distribución del staking, se recomienda simplemente delegar el staking de BTC o CORE al validador que ofrezca la mayor recompensa.
- Cuando se hace staking con una cantidad relativamente grande de activos que puede alterar de manera significativa la distribución del staking, se recomienda diversificar el staking de BTC o CORE entre varios validadores para evitar la sobreconcentración y mantener recompensas altas.
  - Por ejemplo, diversificar tu staking entre 6 a 10 validadores con las recompensas más altas puede ayudar a reducir el impacto de puntuaciones híbridas elevadas y mantener rendimientos óptimos.
- Minimize the need to transfer and/or redelegate BTC staking to another validator to avoid losing rewards during the process.
- Evita los validadores con puntuaciones híbridas altas.
