---
sidebar_label: Preguntas frecuentes sobre validadores en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre el validador Core

---

### 3. ¿Qué es un Validador en el ecosistema Core?

En el ecosistema Core, "validador" se refiere a nodos o participantes en la red blockchain que son responsables de verificar, validar y agregar nuevas transacciones a la cadena de bloques. Los validadores desempeñan un papel fundamental en el mantenimiento y la seguridad de la red.

### 5. ¿Cómo se recompensa a los validadores en el ecosistema Core Chain?

- 1. Para registrarse como validador en Core, debe ejecutar un nodo completo en modo validador. Lea las guías sobre [configurar nodos de validación](../Node/config/validator-node-config) y [ejecutar nodos de validación](../Node/validator/running-validator) para obtener información sobre cómo configurar esto. .
  2. Una vez terminado, la forma más sencilla de registrar un nuevo validador es utilizando uno de nuestros sitios web de apuestas:
    1. [Mainnet stake website](https://stake.coredao.org)
    2. [Testnet stake website](https://stake.test.btcs.network)
  3. Conecte su billetera seleccionando **Conectar billetera** en la parte superior derecha.
  4. Una vez conectado, el botón **registrarse** debería aparecer en la parte superior derecha. Al seleccionar **registrarse** se abre el siguiente formulario de entrada:

![register-validator](../../static/img/validator/register/validator-register-1.avif)

Proporcione información para cada uno de los campos del formulario:

- **Dirección de consenso**: la dirección del validador que configuró cuando inicializó su nodo completo del validador.
- **Dirección de comisión**: la dirección utilizada para cobrar las comisiones.
- **Comisión**: los ingresos se dividen entre el validador y sus delegados, y la comisión determina qué porcentaje de los ingresos del delegador toma el validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. En testnet, la cantidad mínima es **10,000 tCORE**. Mientras que en la red principal la cantidad mínima es **10,000 CORE**.
  1. Una vez que haya ingresado la información requerida, seleccione **registrarse** para registrarse como validador.
  2. Una forma rápida de comprobar que ha registrado correctamente su nodo completo como validador es abrir el archivo de registro y buscar el mensaje de error "**validador no autorizado**r". Este error ocurre cuando este nodo está registrado como validador pero aún no ha sido elegido para el conjunto de validadores.

![validator-logs](../../static/img/validator/register/validator-register-2.avif)

### 4. ¿Cuáles son los requisitos de hardware/software para ejecutar un nodo de validación en Core?

Los validadores son cruciales para proteger la red mediante la producción de bloques y la validación de transacciones dentro del marco de consenso Satoshi Plus de Core.

**Requisitos de software:** Actualmente, un Core Full Node solo puede ejecutarse en Mac OS X y Linux.

**Especificaciones de hardware del nodo completo de Testnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | 4 CPU nucleos                                                                                                                                                                                  |
| RAM                   | 8 Gigabytes                                                                                                                                                                                    |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

#### **Especificaciones de hardware del nodo completo de Mainnet**

| **Requisitos**        | **Detalles**                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento        | 1 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms. |
| CPU                   | CPU 8 nucleos                                                                                                                                                                                  |
| RAM                   | 32 Gigabytes                                                                                                                                                                                   |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 10Mbps                                                                                                             |

For more details, refer to [Full Node Confgiurations Guide](../Node/config/full-node.md)

### 7. ¿Cuáles son los riesgos/penalizaciones que implica ser validador?

En la red Core, los validadores deben apostar una cierta cantidad mínima de tokens CORE que quedan bloqueados mientras un nodo de validación brinda sus servicios. En testnet, la cantidad mínima es **10,000 tCORE**. Mientras que en la red principal la cantidad mínima es **10,000 CORE**.

### 6. ¿Cómo se recompensa a los validadores en el ecosistema Core?

Los validadores obtienen recompensas por su papel en el procesamiento de transacciones, la creación de nuevos bloques y el mantenimiento de la integridad de la cadena de bloques. Estas recompensas son fundamentales para compensar a los Validadores por sus esfuerzos y costos operativos. Los validadores de TCore se ejecutan en forma de turnos y cada validador activo recibe casi la misma cantidad de recompensas en cada ronda. Hay dos categorías de recompensas del validador:

1\. **Recompensas básicas**; es decir, tokens CORE recién acuñados;

2\. **Tarifas cobradas por transacciones en cada bloque**;

Tanto las recompensas básicas como las tarifas de transacción se calculan y distribuyen cuando se extrae el último bloque de una ronda. Actualmente, **90%** de las recompensas van a los validadores y **10%** de las recompensas van al Contrato de recompensas del sistema. Del 90% pagado a los validadores, el validador toma un porcentaje como comisión antes de pagar a sus delegados. La parte que los validadores se quedan para ellos (comisiones) se distribuirá directamente a sus direcciones de tarifas al final de cada ronda. Los validadores deben compartir recompensas con los delegados que apostaron BTC, CORE o les delegaron poder de hash. Cada validador tiene la misma probabilidad de producir bloques, por lo que, a largo plazo, todos los validadores estables deberían obtener una porción similar de la recompensa.

### 11. ¿Con qué frecuencia los validadores deben estar en línea?

El tiempo de ciclo para que Core distribuya recompensas actualmente está establecido en **1 día**. Cada día, **23** validadores con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores, convirtiéndose así en responsables de producir bloques en la red Core durante toda la ronda. En el último bloque de cada ronda, se calculan y distribuyen las recompensas acumuladas de la ronda.

### 9. ¿Qué es la reducción y cuáles son las diferentes tarifas de reducción que se cobran en Core Chain?

A continuación se ofrece una descripción general condensada de los posibles riesgos y sanciones para los validadores en el ecosistema Core:

1. **Riesgos de reducción:** Los validadores enfrentan recortes por acciones como la doble firma o el incumplimiento de sus funciones, lo que resulta en la pérdida de una parte de sus tokens CORE apostados.
2. **Bloqueo de participación y riesgo de liquidez:** Los validadores deben bloquear los tokens CORE como garantía, a los que no se puede acceder durante los períodos de bloqueo, lo que representa un riesgo de liquidez durante la volatilidad del mercado.
3. **Encarcelamiento de validadores:** Los validadores con bajo rendimiento o que violen el protocolo pueden eliminarse temporalmente del conjunto de validadores, impidiéndoles participar en el consenso y obtener recompensas.
4. **Pérdida de delegación:** Si los validadores se desempeñan mal o son penalizados con frecuencia, los delegados pueden retirar su apoyo, lo que reduce significativamente el potencial de ganancias del validador.
5. **Riesgos operativos y de seguridad:** Los validadores deben mantener operaciones seguras y eficientes las 24 horas del día. Los fallos operativos o las violaciones de seguridad pueden provocar daños financieros y de reputación.

### 8) ¿Cómo funciona el proceso de elección del validador en el ecosistema Core?

El proceso de elección del Validador en Satoshi Plus en la red Core implica varios pasos clave, integrando elementos de Prueba de Trabajo (PoW) y Prueba de Participación (PoS):

1. **Delegación de participación**: los poseedores de tokens CORE y BTC delegan sus tokens a candidatos validadores, influyendo en la elección con sus tokens apostados.
2. **Delegación de poder hash**: los mineros de Bitcoin contribuyen a la selección del validador asignando una parte de su poder hash, especificado en los bloques de Bitcoin que extraen.
3. **Selección y puntuación del validador**: los validadores se eligen en función de una puntuación híbrida que combina el poder de hash delegado de Bitcoin y los tokens apostados (CORE y BTC). El híbrido para cada validador se calcula en base a:

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Donde,

- rHp y tHp representan el poder hash delegado a un validador y el poder hash total, respectivamente.
- rSp y tSp representan los tokens CORE apostados para un validador y el total de tokens CORE apostados, respectivamente.
- rBp y tBp son los tokens BTC delegados a un validador y el total de tokens BTC apostados, respectivamente.
- myn son factores dinámicos que ajustan los pesos del poder de hash y el poder de voto de BTC frente a los tokens CORE.

4. **Formación del conjunto de validadores**: Los **23** validadores principales, según las puntuaciones híbridas, se seleccionan para la siguiente ronda.

### 9) ¿Qué es la reducción y cuáles son las diferentes tarifas de reducción que se cobran en Core blockchain?

La "recorte" es una sanción que se aplica a los validadores en una red blockchain por mala conducta o incumplimiento de sus funciones. En la red Core, la reducción puede afectar tanto a las recompensas potenciales como a las apuestas depositadas.

- **Reducción de recompensas**: si un validador no extrae **50** bloques consecutivos durante su turno, todas las recompensas de tokens CORE acumuladas hasta ese momento se pierden. El impacto es más significativo si el fallo ocurre más adelante en la ronda, ya que se habrían acumulado más recompensas.
- **Reducción de depósitos y encarcelamiento**: si no se extraen **150** bloques consecutivos, se perderá el **10%** del depósito del validador y un **encarcelamiento de tres días**, durante los cuales no pueden ser elegidos para el conjunto de validadores.
- **Prohibición permanente por firma doble**: La firma doble, es decir, firmar dos bloques diferentes a la misma altura, tiene consecuencias graves que incluyen la reducción de todas las recompensas, el depósito completo del validador y una prohibición permanente de la red, es decir, obtener encarcelado para siempre.

### 10. ¿Cuándo encarcelan a los validadores? ¿Cuál es la duración?

Hay dos escenarios en los que los validadores pueden ser encarcelados.

1. Si no se extraen **150** bloques consecutivos, se perderá el **10%** del depósito del validador y un **encarcelamiento de tres días**, durante los cuales no podrán ser elegidos para el conjunto de validadores.
2. La doble firma puede provocar la reducción de todas las recompensas, el depósito completo del validador y una prohibición permanente de la red, es decir, ser encarcelado para siempre.

### 11) ¿Con qué frecuencia los validadores deben estar en línea?

En general, se espera que los validadores estén en línea y participen activamente casi continuamente.

