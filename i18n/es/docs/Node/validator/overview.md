---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Validadores en la Red Core

---

En la blockchain de Core, los validadores son nodos esenciales responsables de mantener la seguridad, descentralización e integridad de la red. Validan transacciones, producen nuevos bloques y participan en la gobernanza mediante el consenso único de Core, Satoshi Plus, el cual combina: Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Staking de Bitcoin Autocustodiado para garantiza descentralización, seguridad y escalabilidad.

## Rol del Validador y Participación en el Consenso

Los validadores son responsables de mantener la salud y continuidad de la red. Al participar en el consenso, confirman la validez de las transacciones y contribuyen a la producción de bloques. El consenso Satoshi Plus selecciona validadores usando un sistema de hybrid scoring que considera el Bitcoin delegado, Tokens CORE y hash power de Bitcoin.

Los conjuntos de validadores se rotan periódicamente, y las elecciones de validadores ocurren por épocas, normalmente cada 24 horas (UTC+0), para seleccionar a los **27** validadores activos principales con base en sus puntuaciones híbridas. Los validadores inactivos restantes deben esperar a la siguiente ronda de elecciones para convertirse en validadores activos antes de poder participar en la producción de bloques.

## Economía de Recompensas

Los validadores reciben recompensas en tokens CORE por participar en el mecanismo de consenso de Core y por producir bloques. Las recompensas se distribuyen al final de cada ronda (aproximadamente cada 24 horas) y provienen de dos fuentes principales:

- **Recompensas Base:** Tokens CORE recién acuñados.
- **Comisiones por Transacción:** Comisiones recolectadas de las transacciones incluidas en cada bloque durante la ronda.

Cada validador puede establecer su propia **tasa de comisión**, que es la porción de recompensas que retiene antes de distribuir el resto a sus delegadores. Las comisiones se envían directamente a la dirección de comisión especificada por el validador al final de cada ronda.

Core **no implementa auto-bonding**. Los validadores no están obligados a hacer staking de CORE en sí mismos para participar. Solo ganan comisiones si otros participantes delegan en ellos. Si un validador hace staking en su propio validador, recibe recompensas como cualquier otro delegador regular, no como comisión.

Las recompensas base se distribuyen cuando se confirma el bloque final de la ronda. Actualmente, el **90%** del total de las recompensas base se asigna a los validadores, mientras que el **10%** restante se envía al `System Reward Contract`. Del 90% asignado a los validadores, cada validador recibe recompensas proporcionales al número de bloques que produce. A largo plazo, se espera que todos los validadores estables reciban participaciones aproximadamente iguales, ya que la producción de bloques se distribuye de manera uniforme.

Las comisiones por transacción siguen la misma lógica de distribución. El **90%** del total de las comisiones recolectadas durante la ronda se distribuye entre los validadores. Los validadores pueden aplicar su tasa de comisión sobre esta cantidad antes de distribuir las recompensas restantes a sus delegadores. El **10%** restante de las comisiones se deposita en el `System Reward Contract`.

Los validadores comparten las recompensas con los delegadores que hacen staking de CORE, delegan Bitcoin o contribuyen con poder de hash de Bitcoin. Aunque las tasas de comisión son flexibles, los validadores están incentivados a ofrecer tasas competitivas para atraer más delegaciones y fortalecer su hybrid score.

Las comisiones se pagan directamente a la dirección de comisión designada de cada validador al final de cada ronda.

> **Nota:** Las recompensas se liquidan **por ronda**, no por bloque. Cada ronda corresponde a un ciclo completo de elecciones de validadores (~24 horas, UTC+0).

<p align="center">
![validator-reward-distribution](../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

### Sample Reward Calculation

Supongamos que la recompensa base para una ronda es de **3000 CORE** y que un validador particular establece su tasa de comisión en **20%**. Estos tokens no van directamente al proponente. En cambio, se comparten entre validadores y delegadores. Estos **3000 CORE** se distribuirán según el stake de cada participante. Suponga que las comisiones generadas por todas las transacciones en todos los bloques de una ronda fueron **100 CORE**.

Supongamos que la recompensa base para una ronda es de **3,000 CORE** y que un validador establece una tasa de comisión del **20%**. Estos tokens no se pagan directamente al proponente, sino que se distribuyen proporcionalmente entre todos los validadores y sus delegadores. La recompensa base, 3000 CORE en este caso, se distribuirá según la participación de cada participante. Además, suponga que las comisiones por transacción recolectadas durante la ronda totalizan **100** CORE.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE


    System Reward Contract gets = 3,100 x 10% = 310 CORE  


    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE


    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE


    Total Reward the Validator gets = Commission = 558 CORE


    All the Delegators get = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

## Riesgos Potenciales y Penalizaciones para Validadores

Aunque los validadores en el ecosistema Core están incentivados mediante recompensas por bloque y comisiones por transacción, el rol también conlleva riesgos operativos y económicos. Se espera que los validadores mantengan el rendimiento, la disponibilidad y la integridad de la red. El incumplimiento de estas responsabilidades puede resultar en penalizaciones que afecten tanto su reputación como sus ingresos.

1. **Slashing:** Los validadores pueden estar sujetos a slashing si incurren en comportamientos maliciosos o negligentes, como la firma doble de bloques, períodos prolongados de inactividad o tiempo de inactividad, o la violación de las reglas de consenso. El slashing resulta en la pérdida permanente de una parte del CORE apostado por el validador, lo que impacta directamente sus activos financieros y su confiabilidad.

2. **Jailing:** Los validadores que consistentemente tienen un desempeño deficiente, se desconectan o incumplen las reglas del protocolo pueden ser penalizados mediante jailing. Un validador en jailing es temporalmente removido del conjunto activo de validadores, lo que los hace inelegibles para producir bloques o ganar recompensas. El jailing repetido también puede causar daños a largo plazo en la reputación dentro de la comunidad o incluso la expulsión de la red.

3. **Pérdida de Delegación:** Los delegadores pueden retirar su participación de validadores con bajo desempeño y reasignarla a validadores más confiables. Esto puede reducir significativamente la proporción de recompensas que recibe un validador.

4. **Bloqueo de Staking y Liquidez:** Los validadores deben bloquear **10,000 tokens CORE** como garantía para formar parte de la red de validadores de Core que participan en el consenso. Estos tokens están sujetos a períodos de bloqueo y no pueden ser retirados o transferidos durante ese tiempo. Esto introduce un riesgo de liquidez, especialmente durante condiciones de mercado volátiles o tiempos de inactividad imprevistos del validador.

5. **Riesgos Operativos y de Seguridad:** Los validadores deben mantener una infraestructura segura y de alta disponibilidad. Fallas en la seguridad del sistema, el tiempo de actividad o el rendimiento pueden resultar en bloques perdidos, slashing o jailing. Los validadores son responsables de monitorear sus sistemas, mantener el software actualizado y garantizar operaciones confiables las 24 horas del día.