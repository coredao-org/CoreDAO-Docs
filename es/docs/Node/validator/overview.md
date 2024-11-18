---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Descripción general de los validadores

---

En el ecosistema Core Chain, los validadores son participantes cruciales que mantienen la integridad, seguridad y continuidad de la cadena de bloques. Son responsables de procesar transacciones, crear nuevos bloques y participar en el proceso de consenso. Este papel es fundamental para garantizar que la cadena central funcione de manera eficiente y permanezca descentralizada.

## ¿Quiénes son los validadores en la red de Core?

En el ecosistema Core Chain, los validadores desempeñan un papel crucial en el mantenimiento de la integridad y seguridad de la cadena de bloques al producir y validar nuevos bloques. Estos validadores participan en el mecanismo de consenso Satoshi Plus, que combina elementos de Prueba de trabajo delegada (PoW) y Prueba de participación delegada (DPoS). Los validadores se seleccionan en función de un sistema de puntuación híbrido que tiene en cuenta los tokens BTC y CORE apostados a su favor y el poder de hash de Bitcoin que se les delega. Este método único garantiza que el conjunto de validadores represente una combinación equilibrada de los intereses de las partes interesadas y el poder minero, lo que mejora la seguridad y la descentralización de la red. Las elecciones de validadores ocurren en ciclos conocidos como épocas, y cada nuevo conjunto de validadores se elige para administrar las operaciones y la gobernanza de la cadena de bloques de manera efectiva.

## Ciencias económicas

Las recompensas del validador provienen de **Recompensas base**, es decir, tokens CORE recién acuñados;
2. **Recompensas base**, es decir, tokens CORE recién Minteados; **Tarifas cobradas por transacciones en cada bloque**;

Las recompensas básicas se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, **90%** de las recompensas van a los validadores y **10%** de las recompensas van al "Contrato de recompensas del sistema". Del **90%** pagado a los validadores, el validador toma un porcentaje como comisión antes de pagar a sus delegados. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Similar es el caso con las tarifas de transacción cobradas de cada bloque en una ronda, no se dirige completamente al validador, sino que se calcula de manera similar a las recompensas base, es decir, el 90% de las tarifas acumuladas se paga a los validadores, se toma un porcentaje. Mientras que el 10% se deposita en el Contrato de Recompensa del Sistema.

Los validadores comparten recompensas con las entidades que les delegaron, incluidos los participantes de CORE, los participantes de bitcoin y los delegados de PoW, pero deciden cuánto devolver al decidir cuánto ellos (los validadores) eligen quedarse para sí mismos. Los validadores pueden recibir tanta o tan poca recompensa como quieran, aunque se les incentiva a ser generosos para atraer más participación y poder de hash.

Los validadores deben compartir recompensas con los delegados que apostaron CORE o les delegaron poder hash. Dado que cada validador tiene la misma probabilidad de producir bloques, todos los validadores estables deberían obtener una porción similar de las recompensas a largo plazo. La parte que los validadores se quedan para ellos (comisiones) se distribuirá directamente a sus direcciones de tarifas al final de cada ronda.

**_Tenga en cuenta que la liquidación de recompensas se realiza diariamente, es decir, una ronda, en lugar de por bloque._**

![distribución-de-recompensas-validador](../../../static/img/validator/Reward-Distribution.png)

Supongamos que la recompensa base para una ronda es **3000 CORE** y que un determinado validador establece su tasa de comisión en **20%**. Estos tokens no van directamente al proponente. En cambio, se comparten entre validadores y delegados. Estos **3000 CORE** se repartirán según la apuesta de cada participante. Supongamos que las tarifas generadas por todas las transacciones en todos los bloques de una ronda fueron **100 CORE**.

```maths
Recompensa total acumulada = Recompensa base + Tarifas de transacción = 3000 + 100 = 3100 CORE

    El contrato de recompensa del sistema obtiene = 3100 x 10 % = 310 CORE  

    Recompensa del validador acumulada = (recompensa base + tarifas de transacción) x 90 % = 3100 x 90 % = 2790 CORE

    Comisión = (Recompensa base + Tarifas de transacción) x 20% = 2790 x 20% = 558 CORE

    El validador de recompensa total obtiene = comisión = 558 CORE

    Todos los delegados obtienen = Recompensa de validador acumulada - Comisión = 2790 - 558 = 2232 CORE
```

:::note
En el ecosistema Core, las recompensas se distribuyen a cada validador, de esa recompensa los validadores deben quedarse con un porcentaje en forma de comisión y distribuir el resto a sus delegados. Cada validador puede establecer su propia tasa de comisión. Sin embargo, no existe un CORE autoadherido. El validador solo recibe comisiones si no quiere apostar por su propio validador.
:::

## Riesgos potenciales y sanciones para los validadores

En el ecosistema Core Chain, los validadores desempeñan un papel crucial en el mantenimiento de la integridad y seguridad de la red. Si bien esta función viene acompañada de incentivos como obtener recompensas por la validación de bloques, también implica ciertos riesgos y posibles sanciones si los validadores no desempeñan sus funciones adecuadamente o participan en actividades maliciosas. A continuación se ofrece una descripción detallada de los riesgos y sanciones potenciales para los validadores en el ecosistema de Core Chain:

1. **Riesgos de reducción:** Los validadores en muchos sistemas basados ​​en DPoS, incluido Core Chain, enfrentan el riesgo de reducción si actúan de manera maliciosa o negligente. Esto podría implicar una doble firma, tiempo de inactividad (no estar en línea y realizar tareas de validación) o cualquier acción que comprometa la seguridad de la red. La reducción implica la destrucción o eliminación de una parte de los tokens CORE apostados, lo que afecta directamente las tenencias financieras del validador.

2. **Bloqueo de participación y riesgo de liquidez:** Los validadores deben bloquear una cantidad significativa de tokens CORE como garantía para participar en el proceso de validación. Esta participación está sujeta a períodos de bloqueo durante los cuales no se puede acceder a los fondos, lo que plantea un riesgo de liquidez, especialmente si las condiciones del mercado cambian drásticamente.

3. **Encarcelamiento de validadores:** Los validadores que consistentemente tengan un desempeño inferior o violen los protocolos de red pueden ser "encarcelados". Este término se refiere a eliminarlos temporalmente del conjunto de validadores, impidiéndoles participar en el consenso y obtener recompensas. Esto no sólo afecta sus ingresos sino que también puede empañar su reputación dentro de la comunidad.

4. **Pérdida de delegación:** Los validadores dependen de las delegaciones de los poseedores de tokens CORE para aumentar su influencia y potencial de ganancias. El mal desempeño o las altas tasas de penalización pueden llevar a los delegados a retirar su apoyo y reasignar sus participaciones a validadores más confiables, lo que lleva a una disminución significativa de las ganancias potenciales.

5. **Riesgos operativos y de seguridad:** La ejecución de un nodo validador requiere competencia técnica. Los validadores deben asegurarse de que sus sistemas sean seguros y funcionen de manera eficiente las 24 horas del día, los 7 días de la semana. No gestionar estos riesgos operativos puede provocar la omisión de bloqueos o violaciones de seguridad, lo que podría provocar pérdidas financieras o daños a la reputación.
