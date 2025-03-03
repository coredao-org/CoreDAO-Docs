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

3. **Elección de Validadores:**
   - En cada ronda, que dura un día, los validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores.
   - Los 23 validadores con las puntuaciones más altas son elegidos para formar parte del conjunto de validadores activos para esa ronda.

4. **Responsabilidades del validador:**
   - Los validadores elegidos son responsables de producir bloques y validar transacciones durante toda la ronda.
   - Trabajan en forma de turnos, tomándose turnos para producir bloques durante cada ranura, y cada ranura dura tres segundos.

5. **Actualización del conjunto de validadores:**
   - El conjunto de validadores se actualiza cada 200 bloques para garantizar la estabilidad y el rendimiento. Si algún validador es encarcelado o cortado, otros continúan produciendo bloques sin interrupción.
   - Al final de cada ronda, las recompensas acumuladas se calculan y distribuyen, y se determina un nuevo conjunto de validadores en función de las puntuaciones híbridas actualizadas.

6. **Distribución de recompensas:**
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

4. **Producción de bloques:**
   - Después de la elección, todos los validadores se clasifican aproximadamente según su puntuación híbrida y se turnan para producir bloques **en forma circular** antes de que el proceso comience de nuevo desde el principio. El número actual de validadores es **27**_, y se espera que el número de validadores aumente con el tiempo a medida que crece la red. Es más, este mecanismo proporciona seguridad adicional a través de una mayor eficiencia y tolerancia para una gran cantidad de jugadores bizantinos. Core es seguro siempre que no más de $1 \más de 3$ de los validadores sean maliciosos.

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
     - $$R$$: Recompensas totales asignadas a todos los delegados del validaotr.
     - $$m$$: Proporción de recompensas asignadas al poder hash.
     - $$k$$: Proporción de recompensas asignadas a la apuesta CORE.
     - $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
     - $$S$$: Puntuación híbrida del validador.

     Para completar, aquí hay otras tres proporciones de interés:

     $$
        rHu = \frac{rH}{rHp}
     $$

     $$
        rSu = \frac{rS}{rSp}
     $$

   En cuanto a la apuesta de BTC, las recompensas por unidad se subdividen según los niveles de rendimiento de apuesta dual de los delegados. Suponiendo que hay 4 niveles de rendimiento aumentados (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub> y P<sub>MAX</sub>) con multiplicadores de rendimiento de doble apuesta (e, f, g y h). La recompensa por unidad por apostar BTC se calculará de la siguiente manera

   - Recompensa BTC por unidad: $$rBu$$ de **P<sub>n</sub>** = $$\frac{rB}{rBp} * $$ Multiplicador de rendimiento para el nivel<sub>n</sub>
     - $$rBu$$ de P<sub>BASE</sub> = $$\frac{rB}{rBp} * e$$
     - $$rBu$$ de P<sub>1</sub> = $$\frac{rB}{rBp} * f$$
     - $$rBu$$ de P<sub>2</sub> = $$\frac{rB}{rBp} * g$$
     - $$rBu$$ de P<sub>Máx</sub> = $$\frac{rB}{rBp} * h$$

   donde:

   - $rHu$ son las recompensas del poder hash del validador por unidad;
   - $rSu$ son las recompensas de apuesta de tokens CORE por unidad;
   - $rBu$ son las recompensas de apuesta de Bitcoin por unidad;
   - $rBu$ de P<sub>BASE</sub> son las recompensas de apuesta de BTC por unidad para el delegador de P<sub>BASE</sub>
   - $rBu$ de P<sub>Nivel<sub>1</sub></sub> son las recompensas de apuesta de BTC por unidad para el delegador de P<sub>Nivel1</sub>
   - $rBu$ de P<sub>Nivel<sub>2</sub></sub> son las recompensas de apuesta de BTC por unidad para el delegador de P<sub>Nivel2</sub>
   - $rBu$ de P<sub>MAX</sub> son las recompensas de apuesta de BTC por unidad para el delegador de P<sub>MAX</sub>;
   - **Multiplicadores de rendimiento:** Cada nivel de recompensa tiene un multiplicador específico (e,f,g,h, ..., etc.) que se multiplica por las recompensas obtenidas por unidad de BTC apostada.

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (Bitcoin y CORE).

## Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

![validator-election-flow](../../../../../../../static/img/staoshi-plus/validator-election-flow.png)

Este diagrama de flujo ilustra el proceso cíclico de la elección del validador y sus responsabilidades actuales dentro de Satoshi Plus. Enfatiza cómo las delegaciones de poder de hash y participación influyen directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.
