---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Recompensas del validador en el ecosistema central

---

El ecosistema Core está diseñado para incentivar la participación y asegurar el compromiso de su comunidad a través de un sistema de recompensas bien estructurado. Este sistema sustenta el mecanismo de consenso Satoshi Plus, garantizando la seguridad de la red, la participación de las partes interesadas y la alineación de intereses entre todos los participantes. El sistema de recompensas es fundamental para alentar a la comunidad a participar activamente en la minería, la participación y la gobernanza, mejorando así la salud general y el crecimiento del ecosistema.

## Recompensas del validador

- **Descripción:** Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son esenciales para compensar a los Validadores por sus esfuerzos y costos operativos.
- **Mecanismo:** Los validadores reciben una combinación de tarifas de transacción y nuevos tokens CORE acuñados a través de la política de inflación de blockchain. La cantidad de recompensas que recibe un Validador es proporcional a su participación y al poder de hash delegado por los mineros. Hay dos categorías de recompensas del validador:
    1. **Recompensas base**, es decir, tokens CORE recién acuñados;
    2. **Tarifas cobradas por transacciones en cada bloque**;

Las recompensas básicas se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, el **90%** de las recompensas se asigna a los validadores, y el **10%** restante se asigna al `System Reward Contract`. Del 90 % que se paga a los validadores, un porcentaje es tomado como comisión por el validador antes de distribuir el resto a sus delegadores. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

Los validadores comparten recompensas con las entidades que les delegaron, incluidos los participantes de CORE, los participantes de bitcoin y los delegados de PoW, pero deciden cuánto devolver al decidir cuánto ellos (los validadores) eligen quedarse para sí mismos. Los validadores pueden quedarse con tanto o tan poco de la recompensa como deseen, aunque están incentivados a ser generosos para atraer más participación en staking y poder de hash.

Los validadores deben compartir recompensas con los delegados que apostaron CORE o les delegaron poder hash. Dado que cada validador tiene una probabilidad igual de producir bloques, todos los validadores estables deberían recibir una porción similar de las recompensas a largo plazo. La parte que los validadores se quedan para ellos (**comisiones**) se distribuirá directamente a sus direcciones de tarifas al final de cada ronda.

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

Los cálculos de recompensa por unidad determinan las recompensas distribuidas por cada unidad en stake de poder de hash, CORE o BTC:

- Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
- Recompensa CORE por unidad: rSu = $$\frac{rS}{rSp}$$
- Recompensa BTC por unidad: $$rBu$$ de **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x multiplicador de rendimiento para el nivel<sub>n</sub>

Donde:

- $$rHu$$ son las recompensas del poder hash del validador por unidad;
- $$rSu$$ son las recompensas de apuesta de tokens CORE por unidad;
- $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
- **Multiplicadores de Rendimiento:** Cada nivel de rendimiento mejorado tiene un multiplicador específico (por ejemplo, f, g, h, etc.) que se determina a partir de los datos de staking del usuario, así como de la configuración del sistema de dual staking. Estas configuraciones están sujetas a cambios y pueden ajustarse mediante votación de gobernanza. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (BTC y CORE). Por su parte, los delegadores intentarán optimizar sus recompensas eligiendo validadores con menores cantidades de poder de hash delegado y stake. Para maximizar sus recompensas, los delegadores buscarán validadores que sean generosos en sus pagos y que no tengan ya una cantidad sustancial de tokens CORE delegados o de Proof-of-Work (PoW) delegada. Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Dado que los pagos se determinan en parte por el porcentaje de participación total de cada delegador, estarán incentivados a encontrar validadores con delegaciones pequeñas. Además, las recompensas de apuesta de BTC están influenciadas por niveles de apuesta duales, lo que fomenta una mayor participación en la red sin prescribir estrategias específicas.

## Impacto del Dual Staking en las recompensas de Bitcoin Staking

Con la introducción del Dual Staking, las recompensas por staking de Bitcoin ahora están escalonadas según la cantidad de CORE en stake en relación con BTC. Las recompensas por staking de Bitcoin ya no se distribuyen de forma uniforme entre todos los participantes. En cambio, se asignan dinámicamente en función de umbrales de apuesta dual, y los niveles más altos generalmente reciben una mayor proporción de las recompensas. Esta estructura escalonada introduce variabilidad en los rendimientos del staking de Bitcoin, alineando los incentivos en todo el ecosistema de Core, al tiempo que mantiene la proporcionalidad en la distribución de recompensas.

## Estrategia de distribución de recompensas

Core sigue los siguientes principios de distribución:
\* **Equidad:** El sistema de recompensas está diseñado para ser justo, garantizando que las contribuciones, ya sea en forma de participación, minería o participación en la gobernanza, sean reconocidas y recompensadas de manera equitativa.
\* **Transparencia:** Todos los aspectos de la distribución de recompensas son transparentes, lo que permite a los participantes comprender cómo se calculan y distribuyen las recompensas.
\* **Seguridad:** El mecanismo de distribución está protegido contra manipulación y abuso, utilizando salvaguardias criptográficas y basadas en contratos inteligentes para garantizar la integridad del proceso de recompensa.

## Prevención del mal comportamiento del validador

El comportamiento malicioso de los validadores se desincentiva mediante cortes y encarcelamientos. Los verificadores pueden presentar pruebas para que los validadores sean recortados o encarcelados si no cumplen con sus obligaciones. Las principales actividades que se pueden recortar son la indisponibilidad y la doble firma. La indisponibilidad es reportada por los propios validadores dentro del algoritmo de consenso, mientras que el double signing es reportado por verificadores externos. Consulte la guía detallada sobre [reducción y encarcelamiento] (../slashing/overview.md) para obtener más información.