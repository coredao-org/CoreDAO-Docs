---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
description: Conozca el proceso de elección del validador Satoshi Plus
---

# Elección del validador

---

## Descripción general

El proceso de elección del validador en el mecanismo de consenso Satoshi Plus de Core es donde se sintetizan la prueba de trabajo delegada, la prueba de participación delegada y la participación de Bitcoin sin custodia. Los mineros/grupos de minería de Bitcoin, los participantes de CORE y los participantes de Bitcoin contribuyen a la elección de validadores a través de un sistema de puntuación híbrido.

Los validadores desempeñan un papel vital en la producción de bloques y la validación de transacciones en la red Core. El proceso de elección determina qué validadores formarán parte del conjunto de validadores activos para cada ronda, lo que garantiza que se elijan los validadores más confiables y mejor respaldados para mantener la integridad de la red.

## Proceso paso a paso

1. **Delegación de Recursos:**
   - **Mineros de Bitcoin:** Los mineros de Bitcoin delegan su poder de hash a los validadores principales al incluir información específica en el campo op_return de la transacción de coinbase.
   - **CORE Token Stakers:** Los poseedores de tokens CORE delegan sus tokens apostados a sus validadores preferidos.
   - **Bitcoin Stakers:** Los poseedores de Bitcoin bloquean su Bitcoin en bloqueos de tiempo absoluto y delegan su Bitcoin a los validadores elegidos.

2. **Cálculo de puntuación híbrida:**
   - La puntuación híbrida para cada validador se calcula en función de la cantidad de poder de hash delegado de los mineros de Bitcoin, la cantidad de tokens CORE apostados y la cantidad de Bitcoin apostados.
   - La fórmula equilibra estos tres componentes para producir una puntuación que refleje el apoyo y la confiabilidad generales del validador.

3. **Election of Validators:**
   - En cada ronda, que dura un día, los validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores.
   - Los 23 validadores con las puntuaciones más altas son elegidos para formar parte del conjunto de validadores activos para esa ronda.

4. **Validator Responsibilities:**
   - Los validadores elegidos son responsables de producir bloques y validar transacciones durante toda la ronda.
   - Trabajan en forma de turnos, tomándose turnos para producir bloques durante cada ranura, y cada ranura dura tres segundos.

5. **Updating the Validator Set:**
   - El conjunto de validadores se actualiza cada 200 bloques para garantizar la estabilidad y el rendimiento. Si algún validador es encarcelado o cortado, otros continúan produciendo bloques sin interrupción.
   - Al final de cada ronda, las recompensas acumuladas se calculan y distribuyen, y se determina un nuevo conjunto de validadores en función de las puntuaciones híbridas actualizadas.

6. **Rewards Distribution:**
   - Los validadores y sus delegados obtienen recompensas de tokens CORE en función de su desempeño y la cantidad de recursos que se les delegan.
   - Estas recompensas incentivan la participación continua y el desempeño diligente de los validadores.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de participación y poder de hash:

1. **Delegación de estaca:**
   - Los poseedores de CORE y Bitcoin apuestan y delegan sus tokens a candidatos validadores. Esta delegación es una forma de votación, donde el peso de cada voto corresponde al número de tokens apostados.

2. **Delegación de poder hash:**
   - Los mineros de Bitcoin delegan una parte de su poder de hash especificando sus validadores preferidos en los bloques de Bitcoin que extraen. Este proceso integra el poder minero de Bitcoin en el mecanismo de seguridad de Core.

3. **Selección del validador:**
   - Los validadores se seleccionan en función del apoyo total que reciben, calculado combinando tokens apostados (CORE y Bitcoin) y poder de hash delegado. La ecuación detrás de la puntuación híbrida es:

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

4. **Producción de bloques:**
   - Después de la elección, todos los validadores se clasifican aproximadamente según su puntuación híbrida y se turnan para producir bloques **en forma circular** antes de que el proceso comience de nuevo desde el principio. El número actual de validadores es **23**_, y se espera que el número de validadores aumente con el tiempo a medida que crece la red. Es más, este mecanismo proporciona seguridad adicional a través de una mayor eficiencia y tolerancia para una gran cantidad de jugadores bizantinos. Core es seguro siempre que no más de $1 \más de 3$ de los validadores sean maliciosos.

5. **Distribución de recompensas:**

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

     - $rH$ son las recompensas recibidas por el validador debido al poder hash delegado en él (DPoW)
     - $rS$ son las recompensas recibidas por el validador debido al CORE que se le ha delegado (DPoS)
     - $rB$ son recompensas del validador atribuidas a la apuesta de Bitcoin
     - $$R$$: Total rewards allocated to all delegators of the validaotr.
     - $$m$$: Proportion of rewards allocated to hash power.
     - $$k$$: Proportion of rewards allocated to CORE staking.
     - $$l$$: Proportion of rewards allocated to BTC staking.
     - $$S$$: Hybrid score of the validator.

     Para completar, aquí hay otras tres proporciones de interés:

     $$
        rHu = \frac{rH}{rHp}
     $$

     $$
        rSu = \frac{rS}{rSp}
     $$

   As for BTC staking, the rewards per unit are further subdivided based on the delegators’ dual staking yield tiers. Assuming that there are 4 boosted yield levels (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>MAX</sub>) with dual staking yield multipliers (e, f, g, and h). The reward per unit for BTC staking will be calculated as follows

   - Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp} * $$ Yield Multiplier for Level<sub>n</sub>
     - $$rBu$$ of P<sub>BASE</sub>  = $$\frac{rB}{rBp} * e$$
     - $$rBu$$ of P<sub>1</sub>  = $$\frac{rB}{rBp} * f$$
     - $$rBu$$ of P<sub>2</sub>  = $$\frac{rB}{rBp} * g$$
     - $$rBu$$ of P<sub>Max</sub>  = $$\frac{rB}{rBp} * h$$

   donde:

   - $rHu$ son las recompensas del poder hash del validador por unidad;
   - $rSu$ son las recompensas de apuesta de tokens CORE por unidad;
   - $rBu$ son las recompensas de apuesta de Bitcoin por unidad;
   - $rBu$ of P<sub>BASE</sub> is the BTC staking rewards per unit for P<sub>BASE</sub> delegator
   - $rBu$ of P<sub>Level<sub>1</sub></sub> is the BTC staking rewards per unit for P<sub>Level1</sub> delegator
   - $rBu$ of P<sub>Level<sub>2</sub></sub> is the BTC staking rewards per unit for P<sub>Level2</sub> delegator
   - $rBu$ of P<sub>MAX</sub> is the BTC staking rewards per unit for P<sub>MAX</sub> delegator;
   - **Yield Multipliers:** Each reward tier has a specific multiplier (e,f,g,h, ..., etc) that is multiplied to rewards earned per unit of BTC staked.

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (Bitcoin y CORE).

## Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

Este diagrama de flujo ilustra el proceso cíclico de la elección del validador y sus responsabilidades actuales dentro de Satoshi Plus. Enfatiza cómo las delegaciones de poder de hash y participación influyen directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.
