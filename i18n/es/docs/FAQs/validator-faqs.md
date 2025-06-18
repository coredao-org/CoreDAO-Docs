---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre el validador Core

---

### 3. ¿Qué es un Validador en el ecosistema Core?

En el ecosistema Core, "validador" se refiere a nodos o participantes en la red blockchain que son responsables de verificar, validar y agregar nuevas transacciones a la cadena de bloques. Validators play a crucial role in maintaining and securing the network.

### 5. ¿Cómo se recompensa a los validadores en el ecosistema Core Chain?

- 1. To register as a validator on Core, you must be running a full node in validator mode. Por favor, lea las [guías sobre los requisitos de nodos validadores](../Node/config/validator-node-config.md) y la [configuración de nodos validadores](../Node/validator/setting-up-validator.md)para obtener información sobre cómo configurarlo.
  2. Once that’s finished, the easiest way to register a new validator is by using one of our staking websites:
    1. [Mainnet stake website](https://stake.coredao.org)
    2. [Testnet stake website](https://stake.test2.btcs.network)
  3. Conecte su billetera seleccionando **Conectar billetera** en la parte superior derecha.
  4. Una vez conectado, el botón **registrarse** debería aparecer en la parte superior derecha. Al seleccionar **registrarse** se abre el siguiente formulario de entrada:

![register-validator](../../static/img/validator/register/validator-register-1.png)

Proporcione información para cada uno de los campos del formulario:

- **Dirección de consenso**: la dirección del validador que configuró cuando inicializó su nodo completo del validador.
- **Dirección de comisión**: la dirección utilizada para cobrar las comisiones.
- **Commission**: Revenue is split between the validator and its delegators, with the commission determining the percentage of delegator revenue allocated to the validator as compensation.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. On testnet, the minimum amount is **10,000 tCORE2**. Whereas, on the mainnet, the minimum amount is **10,000 CORE**.
  1. Once you've entered the required information, select **Register** to complete the registration process as a validator.
  2. A quick way to check that you've successfully registered your full node as a validator is to open the log file and search for the error message "**unauthorized validator**". Este error ocurre cuando este nodo está registrado como validador pero aún no ha sido elegido para el conjunto de validadores.

![validator-logs](../../static/img/validator/register/validator-register-2.avif)

### 4. ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo de validación en Core?

Los validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

**Core Mainnet Full Node Hardware Specifications**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | CPU 8 nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

### 7. What is the minimum amount of CORE tokens required to stake to become a validator?

On the Core network, validators are required to stake a certain minimum amount of CORE tokens, which are locked up for the duration that a validator node provides its services. On testnet, the minimum amount is **10,000 tCORE2**. Whereas, on the mainnet, the minimum amount is **10,000 CORE**.

### 6. ¿Cómo se recompensa a los validadores en el ecosistema Core?

Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son fundamentales para compensar a los Validadores por sus esfuerzos y costos operativos. The Core validators operate in a round-robin manner, and each active validator receives nearly the same amount of rewards every round. Hay dos categorías de recompensas del validador:

1. **Recompensas básicas**; es decir, tokens CORE recién acuñados;
2. **Tarifas cobradas por transacciones en cada bloque**;

Tanto las recompensas básicas como las tarifas de transacción se calculan y distribuyen cuando se extrae el último bloque de una ronda. Currently, **90%** of the rewards are allocated to the validators, and **10%** of the rewards are allocated to the System Reward Contract. Of the 90% paid to validators, some percentage is taken as a commission by the validator before they pay out to their delegates. The portion validators' keep for themselves (commission fees) will be distributed directly to their fee addresses at the end of each round. Validators are required to share rewards with the delegators who staked Bitcoin, CORE, or delegated Bitcoin hash power to them. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

### 11. ¿Con qué frecuencia los validadores deben estar en línea?

Cycle time for Core to distribute rewards is currently set to **1 day**. Each day, **27** validators with the highest hybrid scores are elected to the validator set, thereby becoming responsible for producing blocks on the Core network for the entire round. At the end of each round, the accumulated rewards for that round are calculated and distributed.

### 9. ¿Qué es la reducción y cuáles son las diferentes tarifas de reducción que se cobran en Core Chain?

A continuación se ofrece una descripción general condensada de los posibles riesgos y sanciones para los validadores en el ecosistema Core:

1. **Riesgos de reducción:** Los validadores enfrentan recortes por acciones como la doble firma o el incumplimiento de sus funciones, lo que resulta en la pérdida de una parte de sus tokens CORE apostados.
2. **Stake Lock-up and Liquidity Risk:** Validators must lock up CORE tokens as collateral, which cannot be accessed during the lock-up period, thereby posing a liquidity risk during market volatility.
3. **Encarcelamiento de validadores:** Los validadores con bajo rendimiento o que violen el protocolo pueden eliminarse temporalmente del conjunto de validadores, impidiéndoles participar en el consenso y obtener recompensas.
4. **Pérdida de delegación:** Si los validadores se desempeñan mal o son penalizados con frecuencia, los delegados pueden retirar su apoyo, lo que reduce significativamente el potencial de ganancias del validador.
5. **Operational and Security Risks:** Validators must maintain secure and efficient operations around the clock. Operational failures or security breaches can result in significant financial and reputational damage.

### 8) ¿Cómo funciona el proceso de elección del validador en el ecosistema Core?

El proceso de elección del Validador en Satoshi Plus en la red Core implica varios pasos clave, integrando elementos de Prueba de Trabajo (PoW) y Prueba de Participación (PoS):

1. **Stake Delegation**: Holders of CORE and Bitcoin tokens delegate their tokens to validator candidates, influencing the election with their staked tokens.
2. **Delegación de poder hash**: los mineros de Bitcoin contribuyen a la selección del validador asignando una parte de su poder hash, especificado en los bloques de Bitcoin que extraen.
3. **Validator Selection and Scoring**: Validators are chosen based on a hybrid score combining delegated hash power from Bitcoin and staked tokens (CORE and Bitcoin). El híbrido para cada validador se calcula en base a:

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Donde,

- rHp y tHp representan el poder hash delegado a un validador y el poder hash total, respectivamente.
- rSp y tSp representan los tokens CORE apostados para un validador y el total de tokens CORE apostados, respectivamente.
- rBp and tBp are the Bitcoin tokens delegated to a validator and total staked Bitcoin tokens, respectively.
- m and n are dynamic factors adjusting the weights of hash power and the voting power of Bitcoin versus CORE tokens.

4. **Formación del conjunto de validadores**: Los **23** validadores principales, según las puntuaciones híbridas, se seleccionan para la siguiente ronda.

### 9) What is slashing, and what are the different slashing fees charged on the Core blockchain?

La "recorte" es una sanción que se aplica a los validadores en una red blockchain por mala conducta o incumplimiento de sus funciones. En la red Core, la reducción puede afectar tanto a las recompensas potenciales como a las apuestas depositadas.

- **Reducción de recompensas**: si un validador no extrae **50** bloques consecutivos durante su turno, todas las recompensas de tokens CORE acumuladas hasta ese momento se pierden. The impact is more significant if the failure occurs later in the round, as more rewards would have been accumulated by then.
- **Deposit Slashing and Jailing**: Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **three-day jailing**, during which they cannot be elected to the validator set.
- **Permanent Ban for Double Signing**: Double signing, i.e., signing two different blocks at the same height, results in severe consequences, including the slashing of all rewards, the entire validator deposit, and a permanent ban from the network, effectively rendering the validator permanently ineligible.

### 10. ¿Cuándo encarcelan a los validadores? ¿Cuál es la duración?

There are two scenarios in which validators can be jailed.

1. Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **three-day jail term**, during which they cannot be elected to the validator set.
2. Double signing can result in the slashing of all rewards, the entire validator deposit, and a permanent ban from the network, i.e., being jailed forever.

### 11) ¿Con qué frecuencia los validadores deben estar en línea?

En general, se espera que los validadores estén en línea y participen activamente casi continuamente.