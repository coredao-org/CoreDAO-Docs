---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Dual Staking en Core

Esta guía de usuario está diseñada para guiarte a través del proceso de Dual Staking en Core. El Staking Autocustodiado de Bitcoin de Core permite a los usuarios obtener rendimiento en CORE al hacer staking con sus Bitcoins y delegarlos a validadores en Core. El Dual Staking desbloquea niveles de rendimiento más altos al hacer staking tanto de Bitcoin como de CORE, lo que mejora aún más la generación de rendimiento del Staking Autocustodiado de Bitcoin. Vamos a profundizar en cómo funciona y aprender cómo empezar a hacer staking hoy mismo.

## Comenzando con el Staking Dual

Existen varias formas de participar en el Dual Staking con Bitcoin y CORE, según tus herramientas preferidas y tu nivel de experiencia:

- **A través del [sitio web oficial de Core](https://stake.coredao.org/staking):** Una interfaz fácil de usar para que la mayoría de los usuarios comiencen a hacer staking directamente.

- **Usando herramientas CLI y contratos inteligentes:** Ideal para desarrolladores y usuarios avanzados que prefieren interactuar directamente con el protocolo. Los usuarios pueden hacer staking de su Bitcoin utilizando la [herramienta CLI para staking de BTC](https://github.com/coredao-org/btc-staking-tool) y hacer staking de CORE interactuando directamente con los [contratos inteligentes de staking](https://github.com/coredao-org/core-genesis-contract?tab=readme-ov-file#list-of-contracts).

- **A través de custodios de confianza:** Haz staking mediante custodios de nivel institucional como BitGo, Copper o Hex Trust para mayor seguridad y conveniencia operativa.

## Requisitos Previos

Para comenzar y poder hacer staking dual de CORE y Bitcoin a través del [sitio web oficial de staking de Core](https://stake.coredao.org/staking), debes cumplir con los siguientes requisitos:

1. **Extensión de navegador de una billetera de Bitcoin compatible:** Para participar en el proceso de staking de Bitcoin, debes instalar extensiones de navegador de alguna de las billeteras de Bitcoin compatibles, como [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) y/o [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (consulta [aquí](https://stake.coredao.org) para ver las billeteras compatibles más recientes). Debes usar la versión de escritorio al utilizar el sitio web oficial de staking. También puedes hacer staking directamente usando la aplicación móvil de [Element Wallet](https://www.elementwallet.com/).
2. **Dirección de billetera Core para recompensas:** Prepara tu dirección de billetera de Core para hacer staking de CORE y recibir [recompensas en tokens CORE por hacer staking de Bitcoin](../stake-and-delegate/btc-staking/stake-btc-guide.md#prerequisites). Si no tienes una dirección de cartera Core, puedes crear una rápidamente conectándote a MetaMask. Para obtener más información sobre cómo configurar MetaMask para que funcione con la red Core, sigue la guía detallada [aquí](../Dev-Guide/core-wallet-config.md).

## Consideraciones clave para la apuesta dual

A continuación se detallan algunos puntos clave a tener en cuenta al apostar tu Bitcoin en Core.

1. **Cantidad mínima de Bitcoin \+ Gas Fee:** La cantidad mínima de Bitcoin requerida para hacer staking en Core depende del método elegido. Si se utiliza la [interfaz web del sitio oficial](https://stake.coredao.org/staking), los usuarios deben hacer staking de al menos 0.01 BTC (excluyendo las comisiones de transacción). No hay un requisito mínimo al hacer staking a través del script. Además, los usuarios deben tener en cuenta las comisiones de gas de Bitcoin requeridas para las transacciones. Si se hace staking por menos de un mes, se recomienda contar con al menos 0.05 BTC para cubrir posibles congestiones en la red, las cuales podrían aumentar las comisiones de gas por encima de las recompensas obtenidas por el staking.

2. **Mínimo de 1 CORE + Tarifa de Gas:** Para apostar, debes tener al menos 1 CORE. Además del monto del staking, los usuarios también deben tener en cuenta las tarifas de gas en tokens CORE para el procesamiento de transacciones.

3. **Entender las Diferencias en las Direcciones de Staking de Bitcoin:**
  - La dirección de staking en el mensaje de transacción de tu cartera de Bitcoin puede diferir de tu dirección original de Bitcoin. Esto se debe a que la dirección de staking de Bitcoin se deriva de la clave privada maestra de tu cartera de Bitcoin, asegurando el control y la seguridad de tus activos. Tu Bitcoin permanece seguro en la dirección de staking de Bitcoin, sin verse afectado por el staking.

4. **Retrasos en la Aparición de los Activos Bloqueados en tu Cartera de Bitcoin:**
  - Puedes enfrentar algunos retrasos antes de que tus Bitcoins bloqueados aparezcan en tus carteras de Bitcoin. Este retraso se debe principalmente a la confirmación de transacciones en la red Bitcoin, lo que puede llevar varias horas debido al tiempo de bloque, el número de confirmaciones de bloques necesarias y la congestión de la red.
  - Aunque estamos trabajando activamente con socios de carteras para soportar la visualización oportuna de tus activos en tus carteras, puedes verificar tus activos bloqueados en la página **MyStaking** en el sitio web de staking de Core.
  - También puedes ver tus fondos apostados buscando la dirección de staking en un explorador de Bitcoin, como [Mempool.space](https://mempool.space/).

5. **Consideraciones para los Períodos de Bloqueo**
  - Una vez que bloqueas tu Bitcoin para el staking, no será accesible hasta que termine el período de staking. Considerando tus objetivos de inversión y tolerancia al riesgo, se recomienda seleccionar tu período de bloqueo de manera reflexiva. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte a períodos más largos.

## Tutorial paso a paso sobre el doble stake

El staking de Bitcoin auto-custodiado en Core introduce un método seguro y descentralizado para que los holders de Bitcoin generen rendimiento mediante el staking de Bitcoin. Los usuarios pueden apostar su Bitcoin de manera nativa en la red Bitcoin a través de un mecanismo basado en el tiempo y participar activamente en el mecanismo de Consenso de la blockchain de Core mientras realizan el staking.

El Dual Staking es una mejora al staking auto-custodiado de Bitcoin de Core, que permite a los usuarios desbloquear niveles de rendimiento más altos al hacer staking de Bitcoin y CORE simultáneamente. Las mayores proporciones de staking CORE:BTC desbloquean niveles más altos de rendimiento para el staking de Bitcoin. Para aprovechar el Dual Staking y obtener tasas de recompensa más altas por el staking de Bitcoin, sigue los pasos detallados a continuación.

### Conectando las Carteras de Bitcoin y Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Apostar Ahora** en la parte superior derecha del encabezado.
2. Una vez en la pestaña **Staking**, haz clic en la opción **Conectar** junto a "Monto de Staking de BTC" para conectar tu cartera de Bitcoin. Esta debe ser la cartera con los activos de Bitcoin que deseas apostar. Haz clic en la cartera compatible de tu elección para conectar tu cartera de Bitcoin.

<p align="center" style={{zoom:"60%"}}></p>

3. De igual forma, haz clic en la opción **Conectar** junto a **Monto de Staking de CORE** y selecciona la cartera Core para apostar CORE y recibir recompensas por el staking.

<p align="center" style={{zoom:"60%"}}></p>

## Especificando la Cantidad de BTC a Apostar

4. Ingresa la cantidad de Bitcoin que deseas apostar. El monto mínimo es 0.01 BTC si usas la interfaz web del sitio. Sin embargo, no hay un monto mínimo para stakear Bitcoin usando el script de staking.

<p align="center" style={{zoom:"70%"}}></p>

### Seleccionando un Validador de Core para la Delegación de Bitcoin

5. Bajo **Delegar a Validador**, en el menú desplegable, selecciona un _**validador activo**_ al que deseas delegar tu Bitcoin.

<p align="center" style={{zoom:"60%"}}></p>

### Especificando la Cantidad de CORE a Apostar

6. Ingresa la cantidad de CORE que deseas apostar. El monto mínimo es 1 CORE.

<p align="center" style={{zoom:"60%"}}></p>

### Seleccionando un Validador de Core para la Delegación de CORE

7. Después de especificar la cantidad de CORE a apostar, elige el validador al que delegarás tu CORE. Asegúrate de seleccionar un validador activo desde el menú desplegable.

<p align="center" style={{zoom:"60%"}}></p>

### Confirmando los detalles de staking de CORE y BTC

8. Verifica que la cantidad de CORE apostada y el validador seleccionado sean correctos, luego presiona _Confirm_.
9. De manera similar, verifica que la cantidad de Bitcoin en staking y el validador seleccionado sean correctos, luego presiona _Confirm_.

### Verificar la Dirección de Staking de Bitcoin

10. Antes de proceder a confirmar tu transacción de staking. Esta función permite a los usuarios verificar de forma independiente su dirección de staking, ayudando a evitar firmas a ciegas y mejorando la seguridad del proceso.

11. Para proceder con la verificación, haz clic en el botón **Verificar la Dirección de Staking de Bitcoin**. Esto te llevará al sitio web externo.

<p align="center" style={{zoom:"60%"}}></p>

12. En la interfaz del sitio web de verificación, asegúrate de que los datos obtenidos sean correctos y luego haz clic en el botón _Submit_.

<p align="center" style={{zoom:"35%"}}></p>

13. El resultado de la verificación aparecerá en la sección **Verification Result**.

<p align="center" style={{zoom:"60%"}}></p>

14. Una vez verificado, regresa a stake.coredao.org y continúa al hacer clic en **Approve Transaction**.

<p align="center"></p>

### Ajustando las Proporciones CORE:BTC para Mayores Rendimientos

15. En el lado derecho de la Calculadora de Staking, hay una pestaña **Resumen** que calcula la Tasa Total de Recompensas de Staking y las Recompensas Anuales Proyectadas. Estos son los números estimados de retorno anual para el Bitcoin y CORE apostados. La tasa de recompensa puede fluctuar diariamente según los montos totales y ponderados de las delegaciones que reciben los validadores. Cuando se establece en el botón **Actual**, solo muestra la tasa estimada en tiempo real de las recompensas por staking. Cuando se establece en el botón **General**, representa el promedio de dos componentes: las tasas de todos los validadores basadas en los registros anteriores de staking y la tasa estimada en tiempo real.

<p align="center" style={{zoom:"60%"}}></p>

16. También puedes usar los controles deslizantes en la sección inferior para ver el efecto de la proporción de staking CORE:BTC en tu Tasa Total de Recompensa por Staking.

<p align="center" style={{zoom:"60%"}}></p>

17. Para obtener el máximo aumento de recompensa sobre tu monto en staking, en la sección de Dual Staking Tiers, ajusta el control deslizante de Bitcoin Staked a la cantidad de Bitcoin que deseas poner en staking y haz clic en el botón **Max Boost**. Esto establecerá automáticamente la cantidad correspondiente de CORE en el control deslizante "CORE Staked" para desbloquear el aumento máximo. También puedes ajustar manualmente el CORE en staking y luego hacer clic nuevamente en el botón "Max Boost" para actualizar la cantidad recomendada de Bitcoin en la barra "BTC Staked".

<p align="center"></p>

18. Junto a la pestaña **Resumen**, puedes encontrar la página **Detalles**, que muestra detalles del staking, incluidos:

- **New Staked Bitcoin:** La cantidad de BTC que planeas apostar y la tasa de recompensa actual.
- **Nuevo CORE Apostado:** La cantidad de CORE que planeas apostar y la tasa de recompensas actual.
- **Active Staked Bitcoin:** La cantidad de BTC actualmente en staking y la tasa promedio de recompensa ganada a través de los validadores.
- **Active Staked CORE:** La cantidad de CORE actualmente en staking y la tasa promedio de recompensa ganada a través de los validadores.

<p align="center" style={{zoom:"70%"}}></p>

### Finalizando las Transacciones de Staking Doble

19. Una vez que hayas especificado la cantidad de BTC/CORE a hacer staking y los validadores a los que deseas delegar, respectivamente, puedes hacer clic en el botón \*\*Proceed to Stake \*\*.

<p align="center" style={{zoom:"70%"}}></p>

20. En la página Stake CORE, confirma la cantidad de CORE a hacer staking junto con Bitcoin y haz clic en el botón **Confirm**.

<p align="center" style={{zoom:"70%"}}></p>

21. Al hacer clic en **Confirmar**, recibirás una notificación de tu billetera Core conectada para completar la transacción.

22. Una vez que confirmes la transacción, recibirás una notificación **Transaction Submitted** en la esquina superior derecha de tu pantalla. Puedes hacer clic en **Mi Staking** para ver tus registros de staking o en **Ver en CoreScan** para revisar esta transacción.

<p align="center"></p>

23. En la página de “Apostar BTC”, confirma la cantidad de Bitcoin que deseas apostar. Antes de finalizar el proceso de staking de Bitcoin, es esencial comprender y especificar varios parámetros clave:

- Especificar la cantidad de Bitcoin que deseas delegar
  - La cantidad mínima para delegar es 0.01 Bitcoin si lo haces a través del sitio web oficial.
  - En nuestro ejemplo, delegaremos 0.05 Bitcoin, lo que cumple con este requisito
- Establecer el tiempo de bloqueo determina cuándo tu Bitcoin apostado será desbloqueado y estará disponible nuevamente para su redención o re-delegación.
  - Selecciona dentro del cuadro de tiempo de bloqueo para ingresar valores, o haz clic en el ícono del calendario para seleccionar la fecha, y luego haz clic en ‘OK’ para continuar.
  - El tiempo de bloqueo predeterminado se establece con un mes de anticipación.
- Especificar la velocidad de prioridad de la red para tu transacción.

<p align="center" style={{zoom:"70%"}}></p>

24. Finalmente, haz clic en ‘Confirmar’ para completar la transacción.

**Confirmar salida `OP_Return`**

25. Antes de firmar la transacción en tu billetera, verifica que las salidas de la transacción incluyan una salida `OP_Return`. La salida `OP_Return` es donde se guarda tu `redeem_script` y se utiliza esencialmente para redimir tu Bitcoin apostado. Puede haber dos o tres salidas, pero al menos una debe ser siempre **OP_Return**. Cancela la transacción si no incluye una salida `OP_Return`.

<p align="center"></p>

26. Una vez que confirmes la transición, recibirás una notificación de **Transacción Enviada** en la parte superior derecha de tu pantalla. Puedes hacer clic en **My Staking** para ver tus registros de staking o en **View on Bitcoin Explorer** para revisar esta transacción.

<p align="center"></p>

**Verificar Envío de Transacción y Registros de Staking**

27. En la parte superior derecha del sitio web de staking, pasa el cursor sobre tu billetera conectada y haz clic en **Mi Staking**.

<p align="center"></p>

28. La página **My Staking** muestra los registros de todas tus actividades de staking (CORE, BTC, hash power de Bitcoin). Haz clic en las respectivas pestañas de CORE, BTC y Hash para ver detalles sobre tu staking y delegaciones.

<p align="center"></p>

**Felicidades,** has puesto exitosamente en staking tu Bitcoin y CORE en la blockchain de Core y ahora ganarás tokens CORE como recompensas. Al apostar Bitcoin y votar por los validadores, contribuyes activamente a la gobernanza y seguridad de la red Core, apoyando su descentralización y estabilidad. Además, a través del Staking Doble, ayudas a fortalecer la conexión entre las blockchains de Bitcoin y Core, alineando incentivos y creando valor en ambos ecosistemas.
