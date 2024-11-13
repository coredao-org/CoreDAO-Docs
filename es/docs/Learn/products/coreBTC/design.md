---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de coreBTC

CoreBTC dentro de Core blockchain representa una innovación significativa en el ámbito de la tecnología blockchain, centrándose específicamente en mejorar la utilidad de Bitcoin dentro de las finanzas descentralizadas (DeFi). Esta representación sintética de Bitcoin en la cadena de bloques Core permite una interacción perfecta con las aplicaciones DeFi manteniendo al mismo tiempo las propiedades críticas de Bitcoin.

## Componentes clave y sus funciones

**1. Casilleros.**

- **Rol:** Los casilleros son responsables de guardar el Bitcoin real que respalda el coreBTC. Los usuarios envían sus Bitcoin a la dirección de un Locker para iniciar el proceso de empaquetado. Cualquiera puede registrarse como Locker en Core bloqueando la garantía.
- **Seguridad:** Los casilleros deben proporcionar una cantidad significativa de garantía en tokens CORE para mantener la seguridad de los Bitcoin que poseen. Esta garantía puede liquidarse para cubrir pérdidas en caso de mala conducta, lo que supone un fuerte desincentivo contra las actividades fraudulentas.

**2. Colateral:**
\- Los activos particulares y el índice de garantía requerido son parámetros de red determinados por Core DAO, y la garantía depositada por Lockers significa que los bitcoins bloqueados siempre deben estar respaldados por activos de mayor valor. Si hay un cambio en el precio de bitcoin en relación con el valor de la garantía, Locker debe ajustar su garantía o enfrentar una posible liquidación.
\- La garantía puede reducirse si los Lockers transfieren bitcoins sin autorización o no devuelven bitcoins rápidamente cuando se quema coreBTC.
\- Los casilleros pueden darse de baja y recuperar su garantía en cualquier momento, siempre y cuando no tengan bitcoins residuales bloqueados y no tengan solicitudes de desbloqueo no cumplidas. A cambio de los servicios prestados, Lockers gana pequeñas tarifas.

**2. Retransmisores:**

- **Rol:** Los retransmisores monitorean la cadena de bloques de Bitcoin para bloquear transacciones dirigidas a Lockers y validar estas transacciones. Desempeñan un papel crucial a la hora de verificar que el Bitcoin bloqueado corresponda con precisión al coreBTC acuñado en la cadena de bloques Core.
- **Funcionalidad:** Al detectar una transacción de bloqueo válida, los Relayers envían pruebas al Core para acuñar la cantidad correspondiente de coreBTC, conectando Bitcoin con el ecosistema blockchain de Core de forma segura.

**3. Contrato inteligente coreBTC:**

- **Rol:** El contrato inteligente coreBTC en Core gestiona la acuñación y quema de tokens coreBTC. Interactúa con Relayers y Lockers para incentivar que todas las operaciones cumplan con las reglas del protocolo.
- **Mecanismos de seguridad:** El contrato inteligente incluye mecanismos para verificar las pruebas de transacciones enviadas por los Relayers, gestionar la garantía publicada por Lockers y ejecutar los procesos de acuñación y canje de coreBTC.

**4. Liquidadores:**

- **Función:** En caso de fluctuaciones de precios o mal comportamiento de Locker, los liquidadores son responsables de mantener la seguridad y el respaldo de coreBTC mediante el cumplimiento de los requisitos de garantía.
- **Función:** Los liquidadores pueden forzar la liquidación de la garantía de un Locker si el valor del Bitcoin bloqueado cae o si el Locker no logra mantener la proporción de garantía requerida. Esto ayuda a mantener la integridad y el respaldo de coreBTC.

\*\*5. Guardianes: \*\*

- **Rol:** La actividad de los Lockers es monitoreada por Guardianes, quienes verifican cualquier mal comportamiento y aplican cortes según corresponda.
- **Función:** Un Guardián puede activar un contrato inteligente central para reducir parte de la garantía del Locker. En este caso, una parte de la garantía del Locker, equivalente al valor del coreBTC quemado del usuario, se transfiere al usuario. Además, el Slasher es recompensado con un porcentaje de este valor colateral por su acción.

## Cómo funciona coreBTC

coreBTC es un activo sintético innovador desarrollado dentro del ecosistema blockchain Core que permite que Bitcoin se utilice sin problemas en aplicaciones de finanzas descentralizadas (DeFi) en la blockchain Core. El proceso comienza cuando un usuario bloquea su Bitcoin con un custodio designado conocido como **Locker**, que guarda el Bitcoin real y proporciona una cantidad significativa de garantía para asegurar la transacción. Este Bitcoin luego se representa en Core como coreBTC, manteniendo una estricta **vinculación 1:1** para mantener la coherencia del valor entre el Bitcoin bloqueado y el coreBTC emitido.

Los retransmisores desempeñan un papel crucial en el seguimiento de estas transacciones de Bitcoin y su validación en Core. Una vez validados, los detalles de la transacción se envían al contrato inteligente coreBTC, que genera una cantidad equivalente de coreBTC y la acredita en la billetera del usuario. Este coreBTC se puede utilizar en varias plataformas DeFi dentro del ecosistema Core, lo que permite a los titulares de Bitcoin participar en préstamos, empréstitos, transacciones y otras actividades financieras sin gastar ni arriesgar sus tenencias originales de Bitcoin.

El canje de coreBTC por el Bitcoin original implica que el usuario inicia un proceso de grabación en el que se destruye el coreBTC y el Bitcoin correspondiente se desbloquea y se devuelve desde el Locker a la dirección especificada por el usuario. Todo el sistema está protegido por rigurosos protocolos de liquidación y gestión de garantías, por lo que los Lockers mantienen suficientes garantías contra los Bitcoin que poseen. Además, existen mecanismos de reducción para penalizar cualquier actividad fraudulenta por parte de Lockers, protegiendo la integridad y confiabilidad de coreBTC dentro del ecosistema Core. Este diseño no sólo mejora la liquidez y la utilidad de Bitcoin, sino que también mantiene sus propiedades fundamentales de descentralización y seguridad.

## Acuñación y vinculación en coreBTC

Bloquear Bitcoin y vincularlo a coreBTC es crucial para mantener la integridad y confiabilidad del activo sintético:

- **Almacenamiento seguro:** Los Bitcoins bloqueados se almacenan en direcciones controladas por Lockers, quienes están incentivados a mantener la seguridad y la transparencia debido a sus obligaciones colaterales.
- **Colateralización:** La garantía proporcionada por Lockers respalda el proceso de vinculación, de modo que por cada coreBTC en circulación, hay una cantidad equivalente de Bitcoin mantenida de forma segura por un Locker.

La acuñación de coreBTC comienza cuando un usuario bloquea su Bitcoin en el sistema. El usuario envía Bitcoin a una dirección segura controlada por una entidad designada conocida como Locker. Esta acción desencadena el proceso de acuñación en la cadena de bloques Core.

- **Casilleros:** Estos son nodos dentro de la red central responsables de guardar el Bitcoin real. Cada Locker debe depositar una cantidad significativa de garantía, generalmente en tokens CORE, para cubrir posibles incumplimientos o actividades fraudulentas.
- **Relayers:** Después de que el Bitcoin se envía a la dirección del Locker, los Relayers monitorean estas transacciones. Una vez que se confirma una transacción, los retransmisores la validan y envían pruebas al contrato inteligente coreBTC en la cadena de bloques Core.
- **Ejecución de contrato inteligente:** Al recibir la prueba necesaria de Relayers, el contrato inteligente de coreBTC llama al Bitcoin Light Client para verificar la autenticidad y finalidad de la transacción de bitcoin correspondiente, y luego acuña una cantidad equivalente de coreBTC. Este coreBTC acuñado se emite luego a la billetera del usuario en la cadena de bloques Core, lo que refleja una vinculación 1:1 con el Bitcoin bloqueado.

![vinculación-en-coreBTC](../../../../static/img/coreBTC/pegin-corebtc.png)

## Redención y vinculación de coreBTC

La redención, o vinculación, implica revertir el proceso de acuñación:

- **Quema de coreBTC:** Los usuarios inician el proceso de canje enviando una solicitud al contrato inteligente de coreBTC para quemar una cantidad específica de coreBTC, indicando la dirección de Bitcoin donde desean recibir su Bitcoin.
- **Desbloqueo de Bitcoin:** Tras la quema exitosa del coreBTC, el contrato inteligente le indica al Locker que libere la cantidad correspondiente de Bitcoin. Luego, Locker envía este Bitcoin a la dirección especificada del usuario, completando el proceso de vinculación. Una vez confirmada la transacción de bitcoin, Locker la transmite al Core, donde finalmente es verificada por el Bitcoin Light Client.

Una vez confirmada la transacción de bitcoin, Locker la transmite al Core, donde finalmente es verificada por el Bitcoin Light Client.

## Proceso de Liquidación

El proceso de liquidación está diseñado para proteger el sistema contra incumplimientos y salvaguardar que el respaldo de coreBTC permanezca seguro:

- **Monitoreo de índices de garantía:** Los liquidadores monitorean continuamente el valor del Bitcoin en poder de Lockers en relación con el coreBTC emitido.
- **Activación de la liquidación:** Si el valor de mercado del Bitcoin bloqueado cae significativamente, o si un Locker no logra mantener el índice de garantía requerido, los liquidadores pueden iniciar la venta de la garantía del Locker para cubrir pérdidas potenciales.
- **Mecanismo de Liquidación:** La liquidación se lleva a cabo a través de Core, donde se vende la garantía insuficiente para mantener el respaldo necesario para coreBTC. Durante el proceso, los liquidadores utilizan coreBTC para comprar los tokens CORE garantizados a un precio con descuento y el coreBTC se quema. Esto aumenta el índice de garantía y restaura el casillero a una condición saludable. Cuando se quema el coreBTC, su suministro se reduce y se vuelve más escaso, lo que libera al Locker para tomar posesión de una cantidad del bitcoin subyacente equivalente al valor del coreBTC eliminado. Luego, el Locker se reequilibra de acuerdo con los requisitos de garantía; Si el usuario original que envió bitcoins a la dirección de ese Locker quiere recuperar sus bitcoins, puede elegir cualquier Locker para obtenerlos. El canje de coreBTC por bitcoin ocurre a nivel sistémico, no es una relación entre un usuario y un Locker.

![liquidación](../../../../static/img/coreBTC/liquidación-process.png)

## Proceso de corte

En la cadena de bloques Core, el concepto de reducción es crucial para mantener la integridad y seguridad de las transacciones de coreBTC. El corte es una medida punitiva que se utiliza para penalizar a los Lockers por mala conducta o incumplimiento de los protocolos establecidos. Hay dos escenarios principales en los que se pueden producir cortes, cada uno de ellos diseñado para proteger el sistema y a sus usuarios de posibles fraudes y malas prácticas:

### 1. **Movimiento no autorizado de Bitcoin bloqueado**

En este caso, se produce una reducción si un Locker mueve Bitcoin bloqueado sin recibir la correspondiente solicitud de grabación de un titular de coreBTC. Este escenario se considera una infracción grave, ya que amenaza directamente la vinculación 1:1 y la confianza que los titulares de coreBTC tienen en la capacidad del sistema para respaldar de forma segura sus tokens con Bitcoin real.

- **Activador:** El proceso de reducción se activa cuando un Locker transfiere cualquier Bitcoin bloqueado a una dirección no autorizada o para cualquier propósito no autorizado que no corresponda a una solicitud legítima y verificada para canjear coreBTC.
- **Detección e informes:** Esta mala conducta puede detectarse a través de los sistemas de monitoreo de Core o por otros participantes en la red, a menudo denominados Guardianes, quienes observan e informan cualquier actividad sospechosa de Locker.
- **Consecuencia:** Tras la confirmación de la transferencia no autorizada, una parte de la garantía del Locker se confisca y se utiliza para compensar la discrepancia creada en el sistema. Esto no solo penaliza al Locker sino que también ayuda a restablecer el equilibrio entre los coreBTC respaldados y circulantes, manteniendo la integridad del sistema.

![corte](../../../../static/img/coreBTC/slashing-1.png)

### 2. **No se pudo liberar Bitcoin tras el canje de coreBTC**

Este escenario ocurre cuando un titular de coreBTC decide canjear sus tokens por el Bitcoin subyacente, pero el Locker responsable de liberar el Bitcoin no lo hace dentro del plazo designado.

- **Desencadenante:** Un titular de coreBTC envía una transacción quemada, destruyendo efectivamente una cierta cantidad de coreBTC con la expectativa de recibir una cantidad equivalente de Bitcoin de un Locker. Si Locker no procesa esta transacción y libera el Bitcoin según sea necesario, se activa la reducción.
- **Detección y respuesta:** Similar al primer caso, esta falla puede ser detectada por los monitores de red o reportada por los usuarios. Al verificar que Locker no ha cumplido con la solicitud de canje a tiempo, el sistema inicia un protocolo de corte.
- **Consecuencia:** Una parte importante de la garantía del Locker se reduce drásticamente como medida punitiva y compensatoria. La garantía recortada se utiliza normalmente para certificar que el usuario recibe su Bitcoin, preservando la confianza en el sistema coreBTC y compensando cualquier pérdida potencial incurrida por el retraso o la falla.

![corte](../../../../static/img/coreBTC/slashing-2.png)

## Conclusión

El diseño de coreBTC en Core presenta un marco robusto para integrar Bitcoin en aplicaciones DeFi manteniendo sus características fundamentales de seguridad y descentralización. A través de un sistema bien estructurado de acuñación, canje, liquidación y reducción, todo respaldado por estrictos requisitos de garantía, coreBTC permite aprovechar el valor de Bitcoin de formas nuevas e innovadoras sin comprometer la confianza y la seguridad que lo definen.
