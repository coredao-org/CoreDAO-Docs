---
sidebar_label: Preguntas frecuentes sobre validadores en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre el validador Core

---

### 1. ¿Qué es un Validador en el ecosistema Core?

En el ecosistema Core, "validador" se refiere a nodos o participantes en la red blockchain que son responsables de verificar, validar y agregar nuevas transacciones a la cadena de bloques. Los validadores desempeñan un papel crucial en el mantenimiento y la seguridad de la red.

### 5. ¿Cómo se recompensa a los validadores en el ecosistema Core Chain?

- 1. Para registrarte como validador en Core, debes estar ejecutando un nodo completo en modo validador. Por favor, lea las [guías sobre los requisitos de nodos validadores](../Node/config/validator-node-config.md) y la [configuración de nodos validadores](../Node/validator/setting-up-validator.md)para obtener información sobre cómo configurarlo.
  2. Una vez finalizado ese paso, la forma más sencilla de registrar un nuevo validador es utilizando uno de nuestros sitios web de staking:
    1. [Mainnet stake website](https://stake.coredao.org)
    2. [Sitio de staking para Testnet](https://stake.test2.btcs.network)
  3. Conecte su billetera seleccionando **Conectar billetera** en la parte superior derecha.
  4. Una vez conectado, el botón **registrarse** debería aparecer en la parte superior derecha. Al seleccionar **registrarse** se abre el siguiente formulario de entrada:

![register-validator](../../static/img/validator/register/validator-register-1.png)

Proporcione información para cada uno de los campos del formulario:

- **Dirección de consenso**: la dirección del validador que configuró cuando inicializó su nodo completo del validador.
- **Dirección de comisión**: la dirección utilizada para cobrar las comisiones.
- **Comisión**: Los ingresos se dividen entre el validador y sus delegadores. La comisión determina el porcentaje de los ingresos de los delegadores que se asigna al validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. En Testnet, la cantidad mínima es **10,000 tCORE2**. En Mainnet, la cantidad mínima es **10,000 CORE**.
  1. Una vez que hayas ingresado la información requerida, selecciona **Register** para completar el proceso de registro como validador.
  2. Una forma rápida de verificar que has registrado correctamente tu nodo completo como validador es abrir el archivo de logs y buscar el mensaje de error "**unauthorized validator**". Este error ocurre cuando este nodo está registrado como validador pero aún no ha sido elegido para el conjunto de validadores.

![validator-logs](../../static/img/validator/register/validator-register-2.avif)

### 4. ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo de validación en Core?

Los validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

**Requisitos de Software:** Actualmente, un nodo completo de Core solo puede ejecutarse en macOS X y Linux.

**Especificaciones de Hardware para Nodo Completo de Core**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

**Especificaciones de hardware del nodo completo de Core Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | CPU 8 nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

Para más detalles, consulta la [Guía de configuración de nodos completos](../Node/config/full-node.md)

### 7. ¿Cuál es la cantidad mínima de tokens CORE requerida para hacer staking y convertirse en validador?

En la red Core, se requiere que los validadores hagan staking de una cantidad mínima de tokens CORE, los cuales se bloquean durante el período en el que el nodo validador presta sus servicios. En la testnet, la cantidad mínima es de **10,000 tCORE2**. En la mainnet, la cantidad mínima es de **10,000 CORE**.

### 6. ¿Cómo se recompensa a los validadores en el ecosistema Core?

Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son fundamentales para compensar a los Validadores por sus esfuerzos y costos operativos. Los validadores de Core operan mediante un sistema round-robin, y cada validador activo recibe aproximadamente la misma cantidad de recompensas en cada ronda. Hay dos categorías de recompensas del validador:

1. **Recompensas básicas**; es decir, tokens CORE recién acuñados;
2. **Tarifas cobradas por transacciones en cada bloque**;

Tanto las recompensas básicas como las tarifas de transacción se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, el **90%** de las recompensas se asigna a los validadores, y el **10%** restante se asigna al Contrato de Recompensas del Sistema. Del 90 % que se paga a los validadores, un porcentaje es tomado como comisión por el validador antes de distribuir el resto a sus delegadores. La parte que los validadores retienen para sí mismos (comisiones) se distribuye directamente a sus direcciones de tarifas al final de cada ronda. Los validadores están obligados a compartir las recompensas con los delegadores que hayan hecho staking de Bitcoin, CORE o que hayan delegado potencia de hash de Bitcoin. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

### 11. ¿Con qué frecuencia los validadores deben estar en línea?

El tiempo de ciclo para la distribución de recompensas en Core está actualmente establecido en **1 día**. Cada día, **27** validadores con las puntuaciones híbridas más altas son elegidos para formar el conjunto de validadores, y son responsables de producir bloques en la red Core durante toda la ronda. Al final de cada ronda, se calculan y distribuyen las recompensas acumuladas de esa ronda.

### 9. ¿Qué es la reducción y cuáles son las diferentes tarifas de reducción que se cobran en Core Chain?

A continuación se ofrece una descripción general condensada de los posibles riesgos y sanciones para los validadores en el ecosistema Core:

1. **Riesgos de reducción:** Los validadores enfrentan recortes por acciones como la doble firma o el incumplimiento de sus funciones, lo que resulta en la pérdida de una parte de sus tokens CORE apostados.
2. **Bloqueo de staking y riesgo de liquidez:** los validadores deben bloquear tokens CORE como garantía, los cuales no pueden ser accedidos durante el periodo de bloqueo, lo que representa un riesgo de liquidez durante períodos de volatilidad del mercado.
3. **Encarcelamiento de validadores:** Los validadores con bajo rendimiento o que violen el protocolo pueden eliminarse temporalmente del conjunto de validadores, impidiéndoles participar en el consenso y obtener recompensas.
4. **Pérdida de delegación:** Si los validadores se desempeñan mal o son penalizados con frecuencia, los delegados pueden retirar su apoyo, lo que reduce significativamente el potencial de ganancias del validador.
5. **Riesgos operativos y de seguridad:** Los validadores deben mantener operaciones seguras y eficientes las 24 horas del día. Las fallas operativas o las brechas de seguridad pueden resultar en pérdidas financieras significativas y daños a su reputación.

### 8) ¿Cómo funciona el proceso de elección del validador en el ecosistema Core?

El proceso de elección del Validador en Satoshi Plus en la red Core implica varios pasos clave, integrando elementos de Prueba de Trabajo (PoW) y Prueba de Participación (PoS):

1. **Delegación de staking:** Los poseedores de tokens CORE y Bitcoin delegan sus tokens a candidatos a validador, influenciando la elección mediante su participación en staking.
2. **Delegación de poder hash**: los mineros de Bitcoin contribuyen a la selección del validador asignando una parte de su poder hash, especificado en los bloques de Bitcoin que extraen.
3. **Selección y puntuación de validadores:** Los validadores son seleccionados con base en hybrid score que combina la potencia de hash delegada desde Bitcoin y los tokens en staking (CORE y Bitcoin). El híbrido para cada validador se calcula en base a:

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Donde,

- rHp y tHp representan el poder hash delegado a un validador y el poder hash total, respectivamente.
- rSp y tSp representan los tokens CORE apostados para un validador y el total de tokens CORE apostados, respectivamente.
- rBp y tBp representan, respectivamente, los tokens de Bitcoin delegados a un validador y el total de tokens de Bitcoin en staking.
- m y n son factores dinámicos que ajustan los pesos de la potencia de hash y el poder de voto de los tokens Bitcoin frente a los tokens CORE.

4. **Formación del conjunto de validadores**: Los **23** validadores principales, según las puntuaciones híbridas, se seleccionan para la siguiente ronda.

### 9) ¿Qué es el slashing y cuáles son las diferentes penalizaciones por slashing en la blockchain de Core?

La "recorte" es una sanción que se aplica a los validadores en una red blockchain por mala conducta o incumplimiento de sus funciones. En la red Core, la reducción puede afectar tanto a las recompensas potenciales como a las apuestas depositadas.

- **Reducción de recompensas**: si un validador no extrae **50** bloques consecutivos durante su turno, todas las recompensas de tokens CORE acumuladas hasta ese momento se pierden. El impacto es más significativo si la falla ocurre hacia el final de la ronda, ya que se habrán acumulado más recompensas para ese momento.
- **Slashing del depósito y Jailing:** No minar **150** bloques consecutivos resulta en la pérdida del **10%** del depósito del validador y un período de **jailing de tres días**, durante el cual no pueden ser elegidos para formar parte del conjunto de validadores.
- **Ban permanente por Double Signing:** El double signing, es decir, firmar dos bloques distintos en la misma altura de bloque, conlleva consecuencias severas, incluyendo el slashing de todas las recompensas, la pérdida total del depósito del validador y un ban permanente de la red, lo que efectivamente vuelve al validador permanentemente inelegible.

### 10. ¿Cuándo encarcelan a los validadores? ¿Cuál es la duración?

Existen dos escenarios en los cuales los validadores pueden ser jailed.

1. No minar **150** bloques consecutivos resulta en la pérdida del **10%** del depósito del validador y un **período de jailing de tres días**, durante el cual no pueden ser elegidos como validadores.
2. El double signing puede resultar en el slashing de todas las recompensas, la pérdida total del depósito del validador y una prohibición permanente de la red, es decir, ser jailed para siempre.

### 11) ¿Con qué frecuencia los validadores deben estar en línea?

En general, se espera que los validadores estén en línea y participen activamente casi continuamente.