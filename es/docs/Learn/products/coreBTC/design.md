---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de coreBTC

El coreBTC dentro de la blockchain Core representa una innovación significativa en el ámbito de la tecnología blockchain, enfocándose específicamente en mejorar la utilidad de Bitcoin dentro de las finanzas descentralizadas (DeFi). Esta representación sintética de Bitcoin en la blockchain Core permite una interacción fluida con aplicaciones DeFi mientras mantiene las propiedades críticas de Bitcoin.

## Componentes Clave y Sus Roles

**1. Lockers:**

- **Rol:** Los Lockers son responsables de mantener el Bitcoin real que respalda el coreBTC. Los usuarios envían su Bitcoin a la dirección de un Locker para iniciar el proceso de "envolver" el Bitcoin. Cualquier persona puede registrarse como Locker en Core al bloquear colaterales.
- **Seguridad:** Los Lockers deben proporcionar una cantidad significativa de colateral en tokens CORE para asegurar la seguridad del Bitcoin que mantienen. Este colateral puede ser liquidado para cubrir pérdidas en caso de mala conducta, proporcionando un fuerte desincentivo contra actividades fraudulentas.

\*\*2. \- Los activos particulares y la proporción de colateral requerida son parámetros de red determinados por Core DAO, y el colateral depositado por los Lockers significa que el Bitcoin bloqueado siempre debe estar respaldado por activos de mayor valor. Si hay un cambio en el precio de Bitcoin en relación con el valor del colateral, el Locker debe ajustar su colateral o enfrentarse a una posible liquidación.
\- El colateral puede ser reducido si los Lockers transfieren Bitcoin sin autorización o no devuelven el Bitcoin a tiempo cuando el coreBTC es quemado.
\- Los Lockers pueden desregistrarse y recuperar su colateral en cualquier momento, siempre y cuando no haya Bitcoin residual bloqueado y no haya solicitudes de desbloqueo pendientes. A cambio de los servicios prestados, los Lockers ganan pequeñas tarifas.

**3. Relayers:**

- **Rol:** Los Relayers supervisan la blockchain de Bitcoin para las transacciones de bloqueo dirigidas a los Lockers y validan estas transacciones. Juegan un papel crucial en verificar que el Bitcoin bloqueado corresponda con precisión al coreBTC acuñado en la blockchain Core.
- **Funcionalidad:** Al detectar una transacción de bloqueo válida, los Relayers envían pruebas a Core para acuñar la cantidad correspondiente de coreBTC, puenteando Bitcoin al ecosistema de la blockchain Core de manera segura.

**4. Contrato Inteligente de coreBTC:**

- **Rol:** El contrato inteligente de coreBTC en Core gestiona la acuñación y quema de los tokens coreBTC. Interactúa con Relayers y Lockers para incentivar que todas las operaciones cumplan con las reglas del protocolo.
- **Mecanismos de Seguridad:** El contrato inteligente incluye mecanismos para verificar las pruebas de transacciones enviadas por los Relayers, gestionar el colateral depositado por los Lockers y ejecutar los procesos de acuñación y canje de coreBTC.

**5. Liquidadores:**

- **Rol:** En caso de fluctuaciones de precio o mala conducta de un Locker, los Liquidadores son responsables de mantener la seguridad y el respaldo del coreBTC haciendo cumplir los requisitos de colateral.
- **Función:** Los Liquidadores pueden forzar la liquidación del colateral de un Locker si el valor del Bitcoin bloqueado cae o si el Locker no mantiene la proporción de colateral requerida. Esto ayuda a mantener la integridad y el respaldo del coreBTC.

**6. Guardianes:**

- **Rol:** La actividad de los Lockers es supervisada por los Guardianes, quienes verifican cualquier mala conducta y aplican penalizaciones (slashing) según corresponda.
- **Función:** Un Guardián puede activar el contrato inteligente de Core para reducir parte del colateral del Locker. En este caso, una porción del colateral del Locker, equivalente al valor del coreBTC quemado por el usuario, es transferida al usuario. Además, el Guardián recibe una recompensa con un porcentaje de este valor como compensación por su acción.

## Cómo Funciona coreBTC

coreBTC es un activo sintético innovador desarrollado dentro del ecosistema de la blockchain Core que permite utilizar Bitcoin de manera fluida en aplicaciones DeFi en la blockchain Core. El proceso comienza cuando un usuario bloquea su Bitcoin con un custodio designado conocido como **Locker**, quien mantiene el Bitcoin real y proporciona una cantidad significativa de colateral para asegurar la transacción. Este Bitcoin es entonces representado en Core como coreBTC, manteniendo un estricto **peg 1:1** para preservar la consistencia del valor entre el Bitcoin bloqueado y el coreBTC emitido.

Los Relayers juegan un papel crucial en la supervisión de estas transacciones de Bitcoin y su validación en Core. Una vez validada, la información de la transacción se envía al contrato inteligente de coreBTC, el cual acuña la cantidad equivalente de coreBTC y la acredita en la billetera del usuario. Este coreBTC puede ser utilizado en diversas plataformas DeFi dentro del ecosistema Core, permitiendo que los poseedores de Bitcoin participen en actividades de préstamo, endeudamiento, comercio y otras actividades financieras sin tener que gastar o arriesgar sus tenencias de Bitcoin originales.

El canje de coreBTC por el Bitcoin original implica que el usuario inicie un proceso de quema donde el coreBTC es destruido y el Bitcoin correspondiente es desbloqueado y devuelto desde el Locker a la dirección especificada por el usuario. Todo el sistema está protegido por rigurosos mecanismos de gestión de colateral y protocolos de liquidación, de modo que los Lockers mantengan suficiente colateral contra el Bitcoin que poseen. Además, existen mecanismos de penalización (slashing) para castigar cualquier actividad fraudulenta por parte de los Lockers, protegiendo la integridad y confiabilidad del coreBTC dentro del ecosistema Core. Este diseño no solo mejora la liquidez y utilidad de Bitcoin, sino que también mantiene sus propiedades fundamentales de descentralización y seguridad.

## Canje y Pegging de coreBTC

Bloquear Bitcoin y asociarlo a coreBTC son cruciales para mantener la integridad y confiabilidad del activo sintético:

- **Almacenamiento Seguro:** El Bitcoin bloqueado se almacena en direcciones controladas por los Lockers, quienes están incentivados a mantener la seguridad y transparencia debido a sus obligaciones de colateral.
- **Colateralización:** El colateral proporcionado por los Lockers respalda el proceso de pegging, de modo que por cada coreBTC en circulación, hay una cantidad equivalente de Bitcoin segura y controlada por un Locker.

La acuñación de coreBTC comienza cuando un usuario bloquea su Bitcoin en el sistema. El usuario envía Bitcoin a una dirección segura controlada por una entidad designada conocida como un Locker. Esta acción activa el proceso de acuñación en la blockchain Core.

- **Lockers:** Son nodos dentro de la red Core responsables de mantener el Bitcoin real. Cada Locker debe depositar una cantidad significativa de colateral, usualmente en tokens CORE, para cubrir posibles incumplimientos o actividades fraudulentas.
- **Relayers:** Después de que el Bitcoin es enviado a la dirección del Locker, los Relayers supervisan estas transacciones. Una vez que se confirma una transacción, los Relayers la validan y envían la prueba al contrato inteligente de coreBTC en la blockchain Core.
- **Ejecución del Contrato Inteligente:** Al recibir la prueba necesaria de los Relayers, el contrato inteligente de coreBTC llama al cliente liviano de Bitcoin para verificar la autenticidad y finalización de la transacción relevante de Bitcoin, y luego acuña una cantidad equivalente de coreBTC. Este coreBTC acuñado es entonces emitido a la billetera del usuario en la blockchain Core, reflejando un peg 1:1 con el Bitcoin bloqueado.

![pegging-in-coreBTC](../../../../static/img/coreBTC/pegin-corebtc.png)

## Acuñación y Pegging en coreBTC

El canje, o pegging out, implica revertir el proceso de acuñación:

- **Quemado de coreBTC:** Los usuarios inician el proceso de canje enviando una solicitud al contrato inteligente de coreBTC para quemar una cantidad especificada de coreBTC, indicando la dirección de Bitcoin donde desean recibir su Bitcoin.
- **Desbloqueo de Bitcoin:** Tras la quema exitosa de coreBTC, el contrato inteligente señala al Locker que libere la cantidad correspondiente de Bitcoin. El Locker luego envía este Bitcoin a la dirección especificada por el usuario, completando el proceso de pegging out. Una vez confirmada la transacción de Bitcoin, el Locker la transmite a Core donde es finalmente verificada por el cliente liviano de Bitcoin.

![pegging-out-coreBTC](../../../../static/img/coreBTC/pegout-corebtc.png)

## Proceso de Liquidación

El proceso de liquidación está diseñado para proteger el sistema de impagos y salvaguardar que el respaldo de coreBTC se mantenga seguro:

- **Monitoreo de Ratios de Colateral:** Los liquidadores monitorean continuamente el valor del Bitcoin mantenido por los Lockers en relación con el coreBTC emitido.
- **Activación de la Liquidación:** Si el valor de mercado del Bitcoin bloqueado cae significativamente, o si un Locker no mantiene la proporción de colateral requerida, los liquidadores pueden iniciar la venta del colateral del Locker para cubrir las pérdidas potenciales.
- **Mecanismo de Liquidación:** La liquidación se lleva a cabo a través de Core, donde el colateral insuficiente se vende para mantener el respaldo necesario para coreBTC. Durante el proceso, los liquidadores utilizan coreBTC para comprar los tokens CORE colateralizados a un precio con descuento, y el coreBTC se quema. Esto aumenta la proporción de colateral y restaura al Locker a una condición saludable. Cuando el coreBTC se quema, su suministro se reduce y se vuelve más escaso, liberando al Locker para que tome posesión de una cantidad de bitcoin subyacente equivalente al valor del coreBTC eliminado. El Locker luego se reajusta de acuerdo con los requisitos de colateral; si el usuario original que envió bitcoin a la dirección de ese Locker quiere recuperar su bitcoin, puede elegir cualquier Locker para obtenerlo. La redención de coreBTC por bitcoin ocurre a nivel sistémico, no es una relación entre un usuario y un Locker.

![liquidación](../../../../static/img/coreBTC/liquidation-process.png)

## Proceso de Slashing

En la blockchain de Core, el concepto de slashing es crucial para mantener la integridad y seguridad de las transacciones de coreBTC. El slashing es una medida punitiva utilizada para penalizar a los Lockers por mala conducta o por no adherirse a los protocolos establecidos. Existen dos escenarios principales en los que puede ocurrir el slashing, cada uno diseñado para proteger el sistema y a sus usuarios de posibles fraudes y malas prácticas:

### 1. **Movimiento No Autorizado de Bitcoin Bloqueado**

En este caso, el slashing ocurre si un Locker mueve Bitcoin bloqueado sin recibir una solicitud de quema correspondiente de un poseedor de coreBTC. Este escenario se considera una violación grave, ya que amenaza directamente la vinculación 1:1 y la confianza que los poseedores de coreBTC tienen en la capacidad del sistema para respaldar sus tokens con Bitcoin real.

- **Activación:** El proceso de slashing se activa cuando un Locker transfiere cualquier Bitcoin bloqueado a una dirección no autorizada o para cualquier propósito no autorizado que no corresponda a una solicitud legítima y verificada de redimir coreBTC.
- **Detección e Informe:** Esta mala conducta puede ser detectada a través de los sistemas de monitoreo de Core o por otros participantes en la red, conocidos como Guardianes, quienes observan e informan cualquier actividad sospechosa de los Lockers.
- **Consecuencia:** Una vez confirmada la transferencia no autorizada, se incauta una parte del colateral del Locker y se utiliza para compensar la discrepancia creada en el sistema. Esto no solo penaliza al Locker, sino que también ayuda a restablecer el equilibrio de coreBTC respaldados y en circulación, manteniendo la integridad del sistema.

![slashing](../../../../static/img/coreBTC/slashing-1.png)

### 2. **Fallo en Liberar Bitcoin al Redimir coreBTC**

Este escenario ocurre cuando un poseedor de coreBTC decide redimir sus tokens por el Bitcoin subyacente, pero el Locker responsable de liberar el Bitcoin no lo hace dentro del plazo designado.

- **Activación:** Un poseedor de coreBTC envía una transacción de quema, destruyendo efectivamente una cierta cantidad de coreBTC con la expectativa de recibir una cantidad equivalente de Bitcoin de un Locker. Si el Locker no procesa esta transacción y libera el Bitcoin como se requiere, se activa el slashing.
- **Detección y Respuesta:** Similar al primer caso, este fallo puede ser detectado por monitores de la red o reportado por usuarios. Al verificar que el Locker no ha cumplido con la solicitud de redención a tiempo, el sistema inicia un protocolo de slashing.
- **Consecuencia:** Una parte significativa del colateral del Locker es sometida a slashing como medida punitiva y compensatoria. El colateral slasheado se utiliza típicamente para certificar que el usuario reciba su Bitcoin, preservando la confianza en el sistema coreBTC y compensando las posibles pérdidas ocasionadas por el retraso o fallo.

![slashing](../../../../static/img/coreBTC/slashing-2.png)

## Conclusión

El diseño de coreBTC en Core presenta un marco robusto para integrar Bitcoin en aplicaciones DeFi mientras mantiene sus características fundamentales de seguridad y descentralización. A través de un sistema bien estructurado de acuñación, redención, liquidación y slashing, todo respaldado por estrictos requisitos de colateral, coreBTC permite que el valor de Bitcoin se aproveche de nuevas y novedosas formas sin comprometer la confianza y seguridad que lo definen.
