---
sidebar_label: Guía de Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking en Core

Esta guía de usuario está diseñada para guiarte a través del proceso de Dual Staking en Core. El Staking No Custodial de Bitcoin de Core permite a los usuarios ganar rendimiento en CORE al apostar sus Bitcoins y delegarlos a validadores en Core. Dual Staking desbloquea niveles más altos de rendimiento al apostar Bitcoin y CORE simultáneamente para mejorar aún más la generación de rendimiento del staking de Bitcoin No Custodial. Vamos a profundizar en cómo funciona y cómo puedes comenzar a apostar hoy mismo.

## Requisitos Previos

Para poder apostar, debes tener los siguientes requisitos previos:

1. **Extensión de Navegador para Cartera de Bitcoin Compatible:** Para participar en el proceso de staking de BTC, debes instalar las extensiones de navegador de cualquiera de las carteras de Bitcoin compatibles, como [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=es), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), y/o [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (visita stake.coredao.org para las últimas carteras compatibles). Debes usar una versión de escritorio, ya que las carteras móviles y de hardware no son actualmente compatibles. También puedes apostar directamente usando la aplicación móvil de la cartera Element.
2. **Dirección de Cartera Core para Recompensas:** Prepara tu dirección de cartera Core para apostar CORE y recibir [recompensas de tokens CORE por apostar Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide#prerequisites) y CORE. Si no tienes una dirección de cartera Core, puedes crear una rápidamente conectándote a MetaMask. Para obtener más información sobre cómo configurar MetaMask para trabajar con la red Core, sigue la guía detallada [aquí](https://docs.coredao.org/docs/Dev-Guide/core-mainnet-wallet-config).

## Consideraciones clave para la apuesta dual

A continuación se detallan algunos puntos clave a tener en cuenta al apostar tu Bitcoin en Core.

1. \*_Cantidad mínima de Bitcoin + Comisión de Gas:_ La cantidad mínima de BTC requerida para hacer staking en Core depende del método elegido. Si se utiliza la [interfaz web del sitio oficial](https://stake.coredao.org/staking), los usuarios deben hacer staking de al menos 0.01 BTC (excluyendo las comisiones de transacción). No hay un requisito mínimo al hacer staking a través del script. Además, los usuarios deben tener en cuenta las comisiones de gas de Bitcoin requeridas para las transacciones. Si se hace staking por menos de un mes, se recomienda contar con al menos 0.05 BTC para cubrir posibles congestiones en la red, las cuales podrían aumentar las comisiones de gas por encima de las recompensas obtenidas por el staking.

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

El staking No Custodial de Bitcoin de Core introduce un método seguro y descentralizado para que los poseedores de Bitcoin ganen rendimiento a través del staking de Bitcoin. Los usuarios pueden apostar su Bitcoin de manera nativa en la red Bitcoin a través de un mecanismo basado en el tiempo y participar activamente en el mecanismo de Consenso de la blockchain de Core mientras realizan el staking.

Dual Staking es una mejora del staking No Custodial de BTC de Core, que permite a los usuarios desbloquear niveles más altos de rendimiento al apostar Bitcoin y CORE simultáneamente. Las mayores proporciones de staking CORE:BTC desbloquean niveles más altos de rendimiento para el staking de Bitcoin. Para aprovechar el Dual Staking y obtener tasas de recompensa más altas por el staking de BTC, sigue los pasos detallados a continuación.

### Conectando las Carteras de Bitcoin y Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Apostar Ahora** en la parte superior derecha del encabezado.
2. Una vez en la pestaña **Staking**, haz clic en la opción **Conectar** junto a "Monto de Staking de BTC" para conectar tu cartera de Bitcoin. Esta debe ser la cartera con los activos de Bitcoin que deseas apostar. Haz clic en la cartera compatible de tu elección para conectar tu cartera de Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De igual forma, haz clic en la opción **Conectar** junto a **Monto de Staking de CORE** y selecciona la cartera Core para apostar CORE y recibir recompensas por el staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-2.png)
</p>

## Especificando la Cantidad de BTC a Apostar

4. Ingresa la cantidad de Bitcoin que deseas apostar. La cantidad mínima es de 0.01 BTC si el usuario hace staking a través de la interfaz del sitio web. Sin embargo, no hay requisitos de cantidad mínima si se hace staking de BTC a través del script de staking.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-3.png)
</p>

### Seleccionando un Validador de Core para la Delegación de Bitcoin

5. Bajo **Delegar a Validador**, en el menú desplegable, selecciona un _**validador activo**_ al que deseas delegar tu Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-4.png)
</p>

### Especificando la Cantidad de CORE a Apostar

6. Ingresa la cantidad de CORE que deseas apostar. El monto mínimo es 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-5.png)
</p>

### Seleccionando un Validador de Core para la Delegación de CORE

7. Después de especificar la cantidad de CORE a apostar, elige el validador al que delegarás tu CORE. Asegúrate de seleccionar un validador activo del menú desplegable.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-6.png)
</p>

### Confirmando los detalles de staking de CORE y BTC

8. Verifica que la cantidad de CORE en staking y el Validador seleccionado sean correctos, y luego presiona _Confirm_.
9. De igual manera, verifica que la cantidad de BTC en staking y el Validador seleccionado sean correctos, y luego presiona _Confirm_.

### Verifica la Dirección de Staking de BTC

10. Antes de proceder a confirmar tu transacción de staking. Esta característica de verificación permite a los usuarios comprobar de forma independiente su dirección de staking de BTC, ayudando a prevenir firmas a ciegas y mejorando la seguridad del proceso de staking.

11. Para proceder con la verificación, haz clic en el botón **Verificar la Dirección de Staking de BTC**. Esto te llevará al sitio web externo.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

12. En la interfaz del sitio web de verificación, asegúrate de que los datos obtenidos sean correctos y luego haz clic en el botón _Submit_.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)
</p>

13. El resultado de la verificación aparecerá en la sección **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

14. Una vez verificado, regresa a stake.coredao.org y continúa al hacer clic en **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)
</p>

### Ajustando las Proporciones CORE:BTC para Mayores Rendimientos

15. En el lado derecho de la Calculadora de Staking, hay una pestaña **Resumen** que calcula la Tasa Total de Recompensas de Staking y las Recompensas Anuales Proyectadas. Estos son los números estimados de retorno anual para el Bitcoin y CORE apostados. La tasa de recompensa puede fluctuar diariamente según los montos totales y ponderados de las delegaciones que reciben los validadores. Cuando se establece en el botón **Actual**, solo muestra la tasa estimada en tiempo real de las recompensas por staking. Cuando se establece en el botón **General**, representa el promedio de dos componentes: las tasas de todos los validadores basadas en los registros anteriores de staking y la tasa estimada en tiempo real.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-7.png)
</p>

16. También puedes usar los controles deslizantes en la sección inferior para ver el efecto de la proporción de staking CORE:BTC en tu Tasa Total de Recompensas de Staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-8.png)
</p>

17. **Para obtener el máximo aumento de recompensas** en tu cantidad apostada, bajo la sección de **Tiers de Staking Doble**, ajusta el control deslizante de **BTC Apostados** a la cantidad de BTC que deseas apostar y haz clic en el botón **Max Boost**. Esto ajustará automáticamente la cantidad correspondiente de CORE en el control deslizante de “CORE Apostados” para desbloquear el aumento máximo. También puedes ajustar manualmente la cantidad de CORE apostados y luego hacer clic nuevamente en el botón “Max Boost” para actualizar la cantidad recomendada de BTC en la barra de “BTC Apostados”.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-9.png)
</p>

18. Junto a la pestaña **Resumen**, puedes encontrar la página **Detalles**, que muestra detalles del staking, incluidos:

- **Nuevo BTC Apostado:** La cantidad de BTC que planeas apostar y la tasa de recompensas actual.
- **Nuevo CORE Apostado:** La cantidad de CORE que planeas apostar y la tasa de recompensas actual.
- **BTC Apostado Activo:** La cantidad de BTC actualmente apostado y la tasa de recompensas promedio entre los validadores.
- **CORE Apostado Activo:** La cantidad de CORE actualmente apostado y la tasa de recompensas promedio entre los validadores.

<p align="center" style={{zoom:"70%"}}>
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalizando las Transacciones de Staking Doble

19. Una vez que hayas especificado la cantidad de BTC/CORE para apostar y los validadores para delegar, puedes hacer clic en el botón **Proceder a Apostar**.

<p align="center" style={{zoom:"70%"}}>
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

20. En la página de Apostar CORE, confirma la cantidad de CORE que deseas apostar junto con el BTC, y haz clic en el botón **Confirmar**.

<p align="center" style={{zoom:"70%"}}>
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-12.png)
</p> 

21. Al hacer clic en **Confirmar**, recibirás una notificación de tu billetera Core conectada para completar la transacción.

22. Una vez que confirmes la transición, recibirás una notificación de **Transacción Enviada** en la parte superior derecha de tu pantalla. Puedes hacer clic en **Mi Staking** para ver tus registros de staking o en **Ver en CoreScan** para revisar esta transacción.

<p align="center">
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

23. En la página de “Apostar BTC”, confirma la cantidad de Bitcoin que deseas apostar. Antes de finalizar el proceso de staking de Bitcoin, es importante entender y especificar varios parámetros clave:

- Especificar la cantidad de Bitcoin que deseas delegar
   - La cantidad mínima para hacer staking es de 0.01 Bitcoin, si se hace a través de la interfaz oficial del sitio web.
   - En nuestro ejemplo, delegaremos 0.05 Bitcoin, lo que cumple con este requisito
- Establecer el tiempo de bloqueo determina cuándo tu Bitcoin apostado será desbloqueado y estará disponible nuevamente para su redención o re-delegación.
   - Selecciona dentro del cuadro de tiempo de bloqueo para ingresar valores, o haz clic en el ícono del calendario para seleccionar la fecha y haz clic en ‘OK’ para proceder.
   - El tiempo de bloqueo predeterminado se establece con un mes de anticipación.
- Especificar la velocidad de prioridad de la red para tu transacción.

<p align="center" style={{zoom:"70%"}}>
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Finalmente, haz clic en ‘Confirmar’ para completar la transacción.

**Confirmar Salida OP\_Return**

25. Antes de firmar la transacción en tu billetera, verifica las salidas de la transacción para asegurarte de que incluyan una salida `OP_Return`. La salida `OP_Return` es donde se guarda tu `redeem_script` y se utiliza esencialmente para redimir tu Bitcoin apostado. Puede haber dos o tres salidas, pero al menos una debe ser siempre **OP_Return**. Abortas la transacción si no incluye la salida OP\_Return.

<p align="center">
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Una vez que confirmes la transición, recibirás una notificación de **Transacción Enviada** en la parte superior derecha de tu pantalla. Puedes hacer clic en **Mi Staking** para ver tus registros de staking o en **Ver en BTC Explorer** para revisar esta transacción.

<p align="center">
![doble participación en el núcleo](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Verificar Envío de Transacción y Registros de Staking**

27. En la parte superior derecha del sitio web de staking, pasa el cursor sobre tu billetera conectada y haz clic en **Mi Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. La página **Mi participación** muestra registros de todas sus actividades de participación (CORE, BTC, hash). Haz clic en las respectivas pestañas de CORE, BTC y Hash para ver detalles sobre tu staking y delegaciones.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Felicidades**\! Has apostado exitosamente tu Bitcoin y CORE en la blockchain de Core y ahora ganarás tokens CORE como recompensas. Al apostar Bitcoin y votar por los validadores, contribuyes activamente a la gobernanza y seguridad de la red Core, apoyando su descentralización y estabilidad. Además, a través del Staking Doble, ayudas a fortalecer la conexión entre las blockchains de Bitcoin y Core, alineando incentivos y creando valor en ambos ecosistemas.