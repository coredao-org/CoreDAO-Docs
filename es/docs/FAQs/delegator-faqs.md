---
sidebar_label: Preguntas frecuentes del delegado
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes del delegado

---

### 1. ¿Qué es un delegado en la cadena de bloques Core?

En el ecosistema Core, la delegación es un mecanismo fundamental que permite a los mineros de BTC y a los poseedores de tokens BTC y CORE participar activamente en la seguridad y gobernanza de la red sin ser ellos mismos validadores. Este proceso implica que los delegados confíen su poder operativo y de voto a los validadores, quienes luego utilizan los recursos delegados (poder hash de BTC, BTC y CORE) para participar en el proceso de consenso y las decisiones de gobernanza de la red.

### 2. ¿Cuáles son los diferentes tipos de delegaciones que se pueden realizar en Core gracias al Mecanismo de Consenso Satoshi Plus?

1. **Delegación BTC/CORE a validadores:** Este tipo de delegación permite a los poseedores de tokens BTC y CORE apoyar a validadores específicos apostando y delegándoles sus tokens. A cambio, los validadores utilizan el poder agregado para proteger la red, validar transacciones y producir bloques. Los delegados comparten las recompensas obtenidas por los validadores elegidos, reciben una parte de las tarifas de transacción y bloquean las recompensas en proporción a su apuesta.
2. **Delegación de poder hash de los mineros de BTC:** Los mineros de Bitcoin pueden delegar una parte de su poder hash computacional a validadores en la red central. Esta forma única de delegación aprovecha la seguridad y el trabajo que ya se está realizando en la red Bitcoin para mejorar la seguridad de Core blockchain.

### 5) ¿Cuáles son los beneficios de delegar tokens BTC o CORE?

Al delegar CORE a los validadores, los titulares de CORE pueden ayudar a proteger la red y compartir las recompensas del sistema. Consulte la [guía] detallada (../stake-and-delegate/delegating-core) en CORE Delegation para obtener más detalles.

<!-- ### 4. What are the minimum staking period requirements for BTC and BTC Hash Power delegation?
For BTC and BTC hash power delegation the minimum requirement is that of **10** days, i.e., you cannot un-delegate your stake prior to **10** days. Technically, (\`CLTV timestamp - transaction confirmation timestamp > 10 days\`). -->

### 4. ¿Existe alguna tarifa asociada con la delegación de tokens BTC o CORE o poder hash?

Este tipo de delegación permite a los poseedores de tokens BTC y CORE apoyar a validadores específicos delegándoles sus tokens. A cambio, los validadores utilizan el poder agregado para proteger la red, validar transacciones y producir bloques. Los delegados comparten las recompensas obtenidas por los validadores elegidos, reciben una parte de las tarifas de transacción y bloquean las recompensas en proporción a su apuesta.

### 9. ¿Cómo se delega el poder hash en Core netowrk?

Al delegar el poder de hash a los validadores, los mineros de BTC pueden ayudar a proteger la red y participar en las recompensas del sistema. Consulte la [guía] detallada (../stake-and-delegate/delegating-hash) sobre delegación de poder hash para obtener más detalles.

### 6. ¿Cómo puede un delegado maximizar sus recompensas?

Para maximizar sus recompensas, los delegados buscarán validadores que sean generosos en sus pagos, pero que tampoco tengan una cantidad sustancial de tokens CORE delegados o PoW delegados. Cuanto menos haya apostado un validador determinado, mayor será la contribución del delegador. Si un delegador agrega un token CORE a un validador que solo tiene un token, representa el 50% de la delegación total de ese validador. Si delega a un validador con 99 tokens CORE, son solo el 1% de la delegación total de ese validador. Dado que los pagos se determinan en parte en función del porcentaje de la participación total que representa cada delegador, se les incentivará a intentar encontrar validadores con delegaciones pequeñas.

### 7. ¿Puedes cambiar tu validador una vez que hayas delegado?

- **Hash Power:** el hash se delega por separado en cada bloque BTC minado; y una vez delegado no se podrá realizar más transferencia.

- **Delegación BTC:** los usuarios bloquean su BTC y designan un validador para apostar en Core. Pueden transferir su participación en BTC a otros validadores en Core, pero perderán las recompensas del día de actuación.

- **Delegación CORE:** los usuarios pueden transferirse a otros validadores y aún recibirán las recompensas del día de actuación.

### 8. ¿Cuánto tiempo lleva comenzar a ganar recompensas después de delegar el poder hash de BTC, CORE o Bitcoin?

Aparte de la tarifa de transacción/cargos de gas, Core no cobra ninguna tarifa adicional por la delegación de poder de hash BTC, tokens BTC o CORE.

### 10. ¿Cuándo se pagan las recompensas?

- **Delegadores de poder de hash de BTC:** La cadena de bloques Core utiliza registros de bloques de la red Bitcoin de hace siete días para cálculos de puntuación híbrida. Además, después de elegir un validador, las recompensas de apuesta se distribuyen el segundo día de la ronda de cambio. Por lo tanto, después de delegar su poder de hash, los mineros/grupos de minería utilizarán su poder de hash en el cálculo de la elección del Validador N+7 días después y tendrán recompensas reclamables N+8 días después.

- **Delegantes CORE/BTC:** después de delegar su CORE/BTC, los activos de los delegados se utilizarán en el cálculo de la elección del Validador para la siguiente ronda y tendrán recompensas reclamables una ronda más tarde.

### 12. ¿Cómo pueden los delegados reclamar sus recompensas?

Consulte la guía detallada [aquí](../stake-and-delegate/delegating-core#claiming-rewards) sobre Cómo reclamar recompensas obtenidas mediante apuestas de BTC y CORE. En caso de delegación de BTC Hash Power, consulte [aquí](../stake-and-delegate/delegating-hash#implementation).

### 11. ¿Qué pasa si un validador deja de funcionar o es penalizado?

Las recompensas se pagan al final de cada ronda de consenso en la cadena de bloques Core.

### 13. ¿Qué sucede si un validador deja de funcionar o es penalizado?

El mal desempeño o la mala conducta de los validadores pueden resultar en sanciones como reducción de lo que está en juego y encarcelamiento. Tenga en cuenta que los delegados no perderán sus activos apostados; las sanciones a los validadores solo afectarán las recompensas diarias del delegador.
