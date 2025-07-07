---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Validadores en la red Core

---

En la blockchain de Core, los validadores son nodos fundamentales responsables de mantener la seguridad, descentralización e integridad de la red. Estos nodos validan transacciones, producen nuevos bloques y participan en la gobernanza mediante el exclusivo consenso Satoshi Plus de Core, el cual combina Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Self-Custodial Bitcoin Staking para garantizar la descentralización, seguridad y escalabilidad.

## Rol del Validador y Participación en el Consenso

Los validadores son responsables de mantener la salud y continuidad de la red. Al participar en el consenso, confirman la validez de las transacciones y contribuyen a la producción de bloques. El consenso Satoshi Plus selecciona validadores con base en un sistema de puntuación híbrido que considera el Bitcoin delegado, Tokens CORE y hash power de Bitcoin.

Los conjuntos de validadores se rotan periódicamente, y las elecciones de validadores ocurren por epochs, típicamente cada 24 horas (UTC+0), para seleccionar a los **27** validadores activos principales según sus hybrid scores. Los validadores inactivos deben esperar hasta la siguiente round de elecciones para convertirse en validadores activos antes de poder participar en la producción de bloques.

## Economía de Recompensas

Los validadores reciben recompensas en tokens CORE por participar en el mecanismo de consenso de Core y por producir bloques. Las recompensas se distribuyen al final de cada round (aproximadamente cada 24 horas) y provienen de dos fuentes principales:

- **Recompensas base:** Nuevos tokens CORE minteados.
- **Fees por transacción:** Las fees se recaudan de las transacciones incluidas en cada bloque durante la round.

Cada validador puede establecer su propia **tasa de comisión**, que es la porción de recompensas que retiene antes de distribuir el resto a sus delegadores. Estas comisiones se envían directamente a la dirección de fees especificada por el validador al final de cada round.

Core **no implementa auto-vinculación**. Los validadores no están obligados a hacer staking de CORE en sí mismos para participar. Solo ganan comisiones si otros participantes les delegan. Si un validador hace staking en su propio validador, recibe recompensas como cualquier otro delegador, no como comisión.

Las recompensas base se distribuyen cuando se confirma el bloque final de la ronda. Actualmente, el **90%** del total de las recompensas base se asigna a los validadores, mientras que el **10 %** restante se envía al contrato `System Reward Contract`. Del 90 % asignado a los validadores, cada uno recibe recompensas proporcionales al número de bloques que produce. A largo plazo, se espera que todos los validadores estables reciban aproximadamente partes iguales, ya que la producción de bloques se distribuye de manera uniforme.

Las fees por transacción siguen la misma lógica de distribución. El **90%** del total de las fees recaudadas durante la ronda se distribuye entre los validadores. Los validadores pueden aplicar su tasa de comisión a esta cantidad antes de repartir las recompensas restantes entre sus delegadores. El **10%** restante de las fees se deposita en el `System Reward Contract`.

Los validadores comparten recompensas con los delegadores que hicen staking de CORE, delegan BTC o contribuyen con hash power. Aunque las tasas de comisión son flexibles, los validadores están incentivados a ofrecer tasas competitivas para atraer más delegación y fortalecer su hybrid score.

Las fees de comisión se pagan directamente a la dirección de fees designada por cada validador al final de cada round.

:::note
Las recompensas se liquidan **por round**, no por bloque. Cada round corresponde a un ciclo completo de elecciones de validadores (~24 horas, UTC+0).
:::

<p align="center">
![validator-reward-distribution](../../../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

### Ejemplo de Cálculo de Recompensas

Supongamos que la recompensa base para una ronda es de **3000 CORE** y que un validador en particular establece una tasa de comisión del **20%**. Estos tokens no se pagan directamente al proponente. Sino que se distribuyen entre todos los validadores y sus delegadores de forma proporcional al stake de cada uno. En este caso, los **3,000 CORE** de recompensa base se distribuirán según la participación de cada actor en el staking. Asumamos que las fees generadas por todas las transacciones en todos los bloques durante la ronda fueron de **100 CORE**.

Supongamos que la recompensa base para una ronda es de **3,000 CORE** y que un determinado validador establece su tasa de comisión en **20 %**. Estos tokens no se pagan directamente al proponente, sino que se distribuyen proporcionalmente entre los validadores y sus delegadores. La recompensa base, 3,000 CORE en este caso, se distribuirán de acuerdo con el stake de cada participante. Supongamos también que las fees generadas durante una ronda fueron de **100** CORE.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE


    System Reward Contract gets = 3,100 x 10% = 310 CORE  


    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE


    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE


    Total Reward the Validator gets = Commission = 558 CORE


    All the Delegators get = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

## Riesgos Potenciales y Penalizaciones para Validadores

Aunque los validadores en el ecosistema de Core son incentivados mediante recompensas por bloques y fees por transacción, el rol también conlleva riesgos operativos y económicos. Se espera que los validadores mantengan un buen rendimiento, disponibilidad y la integridad de la red. El incumplimiento de estas expectativas puede dar lugar a penalizaciones que afectan tanto su reputación como sus ingresos.

1. **Slashing:** los validadores pueden estar sujetos a slashing si incurren en comportamientos maliciosos o negligentes, como la doble firma de bloques, periodos prolongados de inactividad o desconexión, violaciones de las reglas de consenso, entre otros. El slashing implica la pérdida permanente de una parte del CORE apostado por el validador, lo que afecta directamente sus fondos y su confiabilidad.

2. **Jailing:** Los validadores que consistentemente tienen bajo rendimiento, se desconectan o violan las reglas del protocolo pueden ser penalizados siendo jaileados. Un validador enjaulado es retirado temporalmente del conjunto activo de validadores, quedando inhabilitado para producir bloques o recibir recompensas. La reincidencia en el jailing también puede provocar daños a largo plazo en su reputación dentro de la comunidad o su remoción de la red.

3. **Pérdida de Delegaciones:** los delegadores pueden retirar su participación de validadores con bajo rendimiento y reasignarla a otros más confiables. Esto puede reducir significativamente la parte de recompensas que recibe un validador.

4. **Bloqueo de Stake y Liquidez:** Se requiere que los validadores bloqueen **10,000 CORE** como colateral para formar parte de la red de validadores que participan en el consenso de Core. Estos tokens están sujetos a periodos de bloqueo y no pueden ser retirados ni transferidos durante ese tiempo. Esto introduce un riesgo de liquidez, especialmente en condiciones de mercado volátiles o durante interrupciones inesperadas en el funcionamiento del validador.

5. **Riesgos Operativos y de Seguridad:** los validadores deben mantener una infraestructura segura y con alta disponibilidad. Las fallas en la seguridad del sistema, el tiempo de actividad o el rendimiento pueden derivar en bloques perdidos, slashing o jailing. Los validadores son responsables de monitorear sus sistemas, mantener actualizaciones de software y asegurar operaciones confiables las 24 horas del día.