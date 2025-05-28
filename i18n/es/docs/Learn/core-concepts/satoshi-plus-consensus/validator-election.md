---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Proceso de elección de validadores en la red Core

---

## Descripción general

El proceso de elección de validadores en el mecanismo de consenso Satoshi Plus de Core es donde se sintetizan la prueba de trabajo delegada, el proof of stake delegado y el staking de Bitcoin sin custodia. Los mineros/grupos de minería de Bitcoin, los participantes de CORE y los participantes de Bitcoin contribuyen a la elección de validadores a través de un sistema de puntuación híbrido.

Los validadores desempeñan un papel vital en la producción de bloques y la validación de transacciones en la red Core. El proceso de elección determina qué validadores formarán parte del conjunto activo de validadores en cada ronda, ayudando a seleccionar a los más confiables y respaldados para mantener la integridad de la red.

## Proceso paso a paso

1. **Delegación de Recursos:**
 - **Bitcoin Miners:** delegan su hash power a validadores de Core incluyendo información específica en el campo `op_return`de la transacción coinbase.
 - **CORE Token Stakers:** los poseedores de tokens CORE delegan sus tokens a los validadores de Core que prefieren.
 - **Bitcoin Stakers:** los poseedores de Bitcoin bloquean su Bitcoin usando CLTV con timelocks absolutos y delegan sus activos a sus validadores preferidos en Core.

2. **Cálculo de puntuación híbrida:**
 - La puntuación híbrida para cada validador se calcula en función de la cantidad de poder de hash delegado de los mineros de Bitcoin, la cantidad de tokens CORE apostados y la cantidad de Bitcoin apostados.
 - La fórmula de puntuación híbrida equilibra estos tres componentes para producir una puntuación que refleje el apoyo general de un validador.

3. **Elección de Validadores:**
 - En cada ronda, que dura un día, los validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores.
 - Los **27** validadores con las puntuaciones más altas son elegidos para formar parte del conjunto de validadores activos para esa ronda.

4. **Responsabilidades del validador:**
 - Los validadores elegidos son responsables de producir bloques y validar transacciones durante toda la ronda.
 - Trabajan en forma de turnos, tomándose turnos para producir bloques durante cada ranura, y cada ranura dura tres segundos.

5. **Actualización del conjunto de validadores:**
 - El conjunto de validadores se actualiza cada **200 bloques** para garantizar la estabilidad y el rendimiento. Si algún validador es encarcelado o cortado, otros continúan produciendo bloques sin interrupción.
 - Al final de cada ronda, las recompensas acumuladas se calculan y distribuyen, y se determina un nuevo conjunto de validadores en función de las puntuaciones híbridas actualizadas.

6. **Distribución de recompensas:**
 - Los validadores y sus delegadores obtienen recompensas en tokens CORE cuando los validadores elegidos producen bloques de manera confiable y aseguran la blockchain de Core.
 - Estas recompensas incentivan la participación continua y el desempeño diligente de los validadores.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de stake y poder de hasheo:

1. **Delegación de estaca:**
 - Los holders de CORE delegan sus tokens a validadores de Core como parte del proceso de staking. De manera similar, los holders de Bitcoin hacen staking de sus tokens mediante timelocks sobre Bitcoin y los delegan también a validadores de Core. La influencia de una delegación en la elección del validador es proporcional a la cantidad en staking.

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
 - Después de la elección, todos los validadores se clasifican aproximadamente según su puntuación híbrida y se turnan para producir bloques **en forma circular** antes de que el proceso comience de nuevo desde el principio. El número actual de validadores es **27**, y se espera que el número de validadores aumente con el tiempo a medida que crece la red. Es más, este mecanismo proporciona seguridad adicional a través de una mayor eficiencia y tolerancia para una gran cantidad de jugadores bizantinos. Core es seguro siempre que no más de $1 \más de 3$ de los validadores sean maliciosos.

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

 En cuanto al BTC staking, las recompensas por unidad se subdividen aún más según los niveles de rendimiento de Dual Staking de los delegadores. Suponiendo que existen 4 niveles de rendimiento incrementado (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>MAX</sub>) con multiplicadores de rendimiento de Dual Staking (e, f, g, and h). La recompensa por unidad por apostar BTC se calculará de la siguiente manera

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

<p align="center">
![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)
</p>

Este diagrama de flujo ilustra el proceso cíclico de la elección del validador y sus responsabilidades actuales dentro de Satoshi Plus. Resalta cómo las delegaciones de stake y hash power influyen directamente en la elección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y gestionada de manera eficiente.
