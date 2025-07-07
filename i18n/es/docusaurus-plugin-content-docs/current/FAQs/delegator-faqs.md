---
sidebar_label: Preguntas frecuentes del Delegador
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes del delegado

---

### 1. ¿Qué es un delegado en la cadena de bloques Core?

En el ecosistema Core, la delegación es un mecanismo fundamental que permite a los mineros de Bitcoin y a los poseedores de tokens Bitcoin y CORE participar activamente en la seguridad y gobernanza de la red sin necesidad de ser validadores ellos mismos. Este proceso implica que los delegadores confían su poder de voto y operativo a los validadores, quienes utilizan los recursos delegados (poder de hash de Bitcoin, Bitcoin y CORE) para participar en el proceso de consenso de la red y en las decisiones de gobernanza.

### 2. ¿Cuáles son los diferentes tipos de delegaciones que se pueden realizar en Core gracias al Mecanismo de Consenso Satoshi Plus?

1. **Delegación de Bitcoin/CORE a Validadores:** Este tipo de delegación permite a los poseedores de Bitcoin y tokens CORE apoyar a validadores específicos mediante el staking y la delegación de sus tokens hacia ellos. A cambio, los validadores utilizan el poder agregado para proteger la red, validar transacciones y producir bloques. Los delegados comparten las recompensas obtenidas por los validadores elegidos, reciben una parte de las tarifas de transacción y bloquean las recompensas en proporción a su apuesta.
2. **Delegación de Poder de Hash de Mineros de Bitcoin:** Los mineros de Bitcoin pueden delegar una parte de su poder computacional de hash a validadores en la red Core. Esta forma única de delegación aprovecha la seguridad y el trabajo que ya se realiza en la red Bitcoin para reforzar la seguridad de la blockchain Core.

### 3. ¿Cuáles son los beneficios de delegar tokens BTC o CORE?

Al delegar CORE a los validadores, los titulares de CORE pueden ayudar a proteger la red y compartir las recompensas del sistema. Por favor, consulta la [guía](../stake-and-delegate/CORE-staking.md) detallada sobre Delegación de CORE para más información.

### 4.4 ¿Cuáles son los beneficios de delegar Bitcoin o tokens CORE?

Este tipo de delegación permite a los holders de Bitcoin y tokens CORE apoyar a validadores específicos delegando sus tokens a ellos. A cambio, los validadores utilizan el poder agregado para asegurar la red, validar transacciones y producir bloques. Los delegadores comparten las recompensas obtenidas por los validadores que eligieron, recibiendo una parte proporcional de las comisiones de transacción y recompensas por bloque de acuerdo con su participación.

### 5. ¿Cómo se delega poder de hash en la red Core?

Al delegar poder de hash a los validadores, los mineros de Bitcoin pueden ayudar a asegurar la red y compartir las recompensas del sistema. Por favor, consulta la [guía](../stake-and-delegate/delegating-hash.md) detallada sobre la delegación de poder de hash para más información.

### 6. ¿Cómo puede un delegador maximizar sus recompensas?

Para maximizar sus recompensas, los delegadores buscarán validadores que sean generosos en sus pagos y que no tengan ya una cantidad sustancial de tokens CORE delegados o de Proof-of-Work (PoW) delegada. Cuanto menor sea la cantidad apostada por un validador, mayor será la contribución relativa de un delegador. Si un delegador añade un token CORE a un validador que solo tiene uno, representa el 50% de la delegación total de ese validador. Si delega en un validador con 99 tokens CORE, solo representa el 1% de la delegación total. Dado que los pagos se determinan en parte por el porcentaje de participación total de cada delegador, estarán incentivados a encontrar validadores con delegaciones pequeñas.

### 7. ¿Puedes cambiar de validador una vez que has delegado?

- **Poder de Hash:** el poder de hash se delega por separado en cada bloque de Bitcoin minado, y una vez delegado, no se puede transferir nuevamente.

- **Delegación de Bitcoin:** los usuarios bloquean su Bitcoin y designan un validador para hacer staking en Core. Pueden transferir su participación en Bitcoin a otros validadores en Core, pero perderán las recompensas del día actual.

- **Delegación de CORE:** los usuarios pueden transferir sus tokens a otros validadores y aún recibirán las recompensas del día actual.

### 8. ¿Hay comisiones asociadas con delegar Bitcoin, tokens CORE o poder de hash?

Excepto por la tarifa de transacción y los cargos por gas, Core no cobra comisiones adicionales por delegar poder de hash de Bitcoin, Bitcoin o tokens CORE.

### 9. ¿Cuánto tiempo tarda en comenzar a generar recompensas después de delegar Bitcoin, CORE o poder de hash de Bitcoin?

- **Delegadores de poder de hash de Bitcoin:**
  La blockchain de Core utiliza los registros de bloques de la red de Bitcoin de hace siete días para los cálculos del hybrid score. Además, una vez que un validador es elegido, las recompensas de staking se distribuyen el segundo día del nuevo turno. Por lo tanto, después de delegar su poder de hash, los mineros y pools de minería verán su poder de hash utilizado en el cálculo de elección de validadores N+7 días después, y recibirán recompensas reclamables N+8 días después.

- **Delegadores de CORE/Bitcoin:** Después de delegar sus CORE o Bitcoin, los delegadores verán sus activos utilizados en el cálculo de elección de validadores en el siguiente round. Las recompensas reclamables estarán disponibles una ronda después.

### 10. ¿Cómo pueden los delegados reclamar sus recompensas?
Consulta la guía detallada [aquí](../stake-and-delegate/CORE-staking.md) sobre cómo reclamar las recompensas obtenidas a través del staking de Bitcoin y CORE. En el caso de la delegación de poder de hash de Bitcoin, consulta [aquí](../stake-and-delegate/delegating-hash.md).

### 11. ¿Qué pasa si un validador deja de funcionar o es penalizado?

Las recompensas se pagan al final de cada ronda de consenso en la blockchain de Core.

### 12. ¿Qué sucede si un validador deja de funcionar o es penalizado?

El mal desempeño o la mala conducta de los validadores pueden resultar en sanciones como reducción de lo que está en juego y encarcelamiento. Ten en cuenta que los delegadores no perderán sus activos en staking; las penalizaciones a los validadores solo afectarán las recompensas diarias del delegador.