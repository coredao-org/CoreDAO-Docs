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

**Dual Staking**, una mejora del **Staking de BTC Auto-Custodiado** de Core, permite a los participantes maximizar recompensas al hacer staking simultáneo tanto de **BTC como de CORE**. Esta estrategia fortalece la red Core al mismo tiempo que desbloquea mayores rendimientos por staking de Bitcoin basados en umbrales predefinidos de staking de CORE

Al cumplir con ratios específicos de **staking de CORE a BTC**, los usuarios obtienen **recompensas de staking de Bitcoin incrementadas**, pagadas en CORE. Aunque el Dual Staking mejora los rendimientos del staking de BTC, no afecta directamente las recompensas del staking de CORE.



### Umbrales de Rendimiento Incrementado

Actualmente, las recompensas de Satoshi Plus se asignan a través de tres pools, uno para cada una de las tres entidades que participan en la elección de los validadores de Core, a saber: (1) Delegadores de poder de hash, (2) Stakers de Bitcoin, y (3) Stakers de CORE.

El Dual Staking no afecta estos pools de recompensas, pero permite que los stakers de Bitcoin que también hacen staking de tokens CORE ganen una mayor proporción de recompensas en el pool de Staking de Bitcoin. En esta sección, se proporciona una explicación detallada del funcionamiento del algoritmo de clasificación con respecto al dual staking.

#### 1. **Niveles de Rendimiento Incrementado**

En el esquema de Dual Staking, existen tres niveles de rendimiento incrementado para el staking de Bitcoin, basados en la proporción de CORE en staking en relación con el Bitcoin en staking. Para los Solo-Stakers de solo Bitcoin, existe un cuarto nivel con la tasa más baja de staking de Bitcoin. Es importante señalar que la tasa de recompensa anual para el Staking de Bitcoin puede fluctuar significativamente, a menudo debido a los precios variables y otras dinámicas del mercado. Como resultado, los rendimientos incrementados reales pueden cambiar a diario según las condiciones del mercado.

- **P<sub>BASE</sub>** \= la tasa base de staking de BTC
- **P<sub>Nivel1</sub>** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 1
- **P<sub>Nivel2</sub>** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 2
- **P<sub>Nivel3</sub> (P<sub>MAX</sub>)** \= la tasa base de staking de BTC \+ Rendimiento incrementado de Nivel 3

Efectivamente, las emisiones de CORE se distribuyen de manera proporcional según el TVL de BTC, ponderadas en función de su nivel de dual staking (CORE:BTC).

#### 2. **Umbrales de CORE en Staking y Ratios de Staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**

El mecanismo que determina el nivel de rendimiento de un staker de Bitcoin (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, o **P<sub>Level3</sub> (P<sub>MAX</sub>)**)se basa en la cantidad de tokens CORE en staking en relación con el Bitcoin en staking, donde R representa la proporción CORE:BTC y se ycumple que **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. Los actuales ratios de staking CORE:BTC son los siguientes:

- Proporción de Staking R1 \= 3,625 CORE por 1 BTC
- Staking Ratio R2 \= 10,875 CORE per 1 BTC
- Proporción de Staking R3 \= 29,000 CORE por 1 BTC

Teniendo en cuenta estos ratios, los usuarios pueden calcular el umbral requerido para cada nivel como sigue:

- **Umbral CORE en staking para P<sub>Nivel1</sub>** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>1</sub>**)
- **Umbral CORE en staking para P<sub>Nivel2</sub>** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>2</sub>**)
- **Umbral CORE en staking para P<sub>Nivel3</sub> (P<sub>MAX</sub>)** \= Cantidad en staking de BTC \* Ratio de staking (**R<sub>3</sub>**)

:::note
El CORE en staking y/o el Bitcoin en staking pueden ser distribuidos entre múltiples validadores activos de Core.
:::

#### 3. **Determinación del nivel de rendimiento incrementado para cada (1) Bitcoin en staking**

- Si la cantidad de CORE en staking es menor que \< **R<sub>1</sub>**, el usuario se encuentra en el nivel **P<sub>BASE</sub>**
- Si **R<sub>1</sub>** \<= la cantidad de CORE en staking \< **R<sub>2</sub>**, el usuario entra en el nivel **P<sub>Level1</sub>**
- Si **R<sub>2</sub>** \<= la cantidad de CORE en staking \< **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level2</sub>**
- Si la cantidad de CORE en staking \>= **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level3</sub>** (**P<sub>MAX</sub>**)

:::note
Las proporciones de staking y el número de niveles son configurables y están sujetas a cambios mediante votación de gobernanza.
:::

### Ejemplo

A continuación se muestra un ejemplo sencillo que explica cómo calcular la cantidad requerida de CORE para hacer staking, en función de los parámetros mencionados anteriormente, con el fin de desbloquear los niveles de rendimiento incrementado del esquema de Dual Staking.

Ahora, el usuario deberá hacer staking de CORE según los siguientes umbrales de CORE en staking para disfrutar de un mayor rendimiento en su BTC en staking con las variables mencionadas anteriormente:

- Proporción de Staking **R<sub>1</sub>** \= 3,625
- Proporción de Staking **R<sub>2</sub>** \= 10,875
- Proporción de Staking **R<sub>3</sub>** \= 29,000
- Cantidad de BTC en staking \= 10 BTC

Los **Umbrales de CORE en Staking** con las variables mencionadas anteriormente son:

- Umbral de CORE en staking para**P<sub>Level1</sub>** \= 10 \* 3,625 \= 36,250 CORE en staking
- Umbral de CORE en staking para **P<sub>Level2</sub>** \= 10 \* 10,875 \= 108,875 CORE en staking
- Umbral de CORE en staking para **P<sub>Level3</sub>** \= 10 \* 29,000 \= 290,000 CORE en staking

Por lo tanto, el BTC en staking en este ejemplo disfrutará de un rendimiento de

- **P<sub>BASE</sub>** si la cantidad de CORE en staking es inferior a 36,250
- **P<sub>Level1</sub>** si la cantidad de CORE en staking es mayor o igual a 36,250 pero menor que 108,875
- **P<sub>Level2</sub>** si la cantidad de CORE en staking es mayor o igual a 108,875 pero menor que 290,000
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** si la cantidad de CORE en staking es mayor o igual a 290,000

:::note
El multiplicador de cada nivel de rendimiento potenciado es dinámico y está sujeto a cambios según las condiciones de oferta y demanda del mercado.
:::

:::info
Para activar tu nuevo nivel de dual staking, sigue estos dos pasos. Esto aplica a los usuarios que ya tienen BTC en staking en rondas anteriores a las 00:00 UTC y deciden hacer staking adicional de CORE para ascender a niveles superiores. Primero, después de hacer staking de CORE, espera hasta las 00:00 UTC del día siguiente. Luego, reclama todas tus recompensas en cualquier momento después de las 00:00 UTC para restablecer el sistema de cálculo de niveles. Tu nuevo nivel se activará tan pronto como completes la reclamación. Ambos pasos son esenciales para asegurarte de que tu nuevo nivel entre en efecto.
:::

### Cómo calificar para las recompensas de Dual Staking

Para habilitar mayores rendimientos de Bitcoin a través de Dual Staking, los usuarios deben:

1. **Haz staking tanto de BTC como de CORE**, asegurándote de que la cantidad de CORE en staking cumpla o supere el umbral mínimo de Dual Staking.
2. **Usa la misma cartera** tanto para hacer staking de CORE como para recibir las recompensas del staking de BTC.

Este enfoque garantiza una distribución fluida de recompensas y fomenta una participación más profunda en la red.

### Consideraciones para Optimizar los Rendimientos

- Las puntuaciones híbridas de los validadores representan la suma total ponderada de las delegaciones en todos los validadores. En general, puntuaciones híbridas más altas se correlacionan con menores recompensas por hacer staking de BTC y CORE, aunque esta relación no es estrictamente lineal.
- Cuando se hace staking con una cantidad relativamente baja de activos que no altera significativamente la distribución del staking, se recomienda simplemente delegar el staking de BTC o CORE al validador que ofrezca la mayor recompensa.
- Cuando se hace staking con una cantidad relativamente grande de activos que puede alterar de manera significativa la distribución del staking, se recomienda diversificar el staking de BTC o CORE entre varios validadores para evitar la sobreconcentración y mantener recompensas altas.
  - Por ejemplo, diversificar tu staking entre 6 a 10 validadores con las recompensas más altas puede ayudar a reducir el impacto de puntuaciones híbridas elevadas y mantener rendimientos óptimos.
- Minimiza la necesidad de transferir y/o redelegar el staking de BTC a otro validador para evitar la pérdida de recompensas durante el proceso.
- Evita los validadores con puntuaciones híbridas altas.
