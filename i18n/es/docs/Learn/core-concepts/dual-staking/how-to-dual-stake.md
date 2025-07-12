---
sidebar_label: Cómo hacer Dual Stake
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo hacer Dual Stake

---

Existen varias formas de participar en el Dual Staking con Bitcoin y CORE, según tus herramientas preferidas y tu nivel de experiencia:

**A través del sitio web oficial de Core**: una interfaz fácil de usar, ideal para la mayoría de los usuarios que desean comenzar a hacer staking directamente.

**Usando herramientas CLI y Smart Contracts:** ideal para desarrolladores y usuarios avanzados que prefieren interactuar directamente con el protocolo. Los usuarios pueden hacer staking de su Bitcoin utilizando la herramienta BTC Staking CLI Tool y hacer staking de CORE interactuando directamente con los smart contracts de staking.

**A través de Custodios Confiables:** realiza staking mediante custodios de nivel institucional como BitGo, Copper o Hex Trust, lo que brinda mayor seguridad y conveniencia operativa.

## Requisitos Previos

Para comenzar y poder hacer dual staking de CORE y Bitcoin mediante el sitio web oficial de staking de Core, debes contar con los siguientes requisitos:

**Extensión de navegador de una wallet de Bitcoin compatible:** Para participar en el proceso de staking de Bitcoin, debes instalar extensiones de navegador de alguna de las wallets compatibles, como Xverse, Unisat y/o OKX Wallet (consulta aquí la lista actualizada de wallets compatibles). Debes usar la versión de escritorio al utilizar el sitio web oficial de staking. También puedes hacer staking directamente desde la aplicación móvil de Element Wallet.

**Dirección de wallet de Core para recompensas:** Prepara tu dirección de wallet de Core para hacer staking de CORE y recibir recompensas en tokens CORE por el staking de Bitcoin. Si aún no tienes una dirección de wallet de Core, puedes crear una fácilmente conectándote con MetaMask. Para más información sobre cómo configurar MetaMask para que funcione con la red Core, sigue la guía detallada aquí.

## Consideraciones clave para el Dual Staking

A continuación se presentan algunos puntos importantes que los usuarios deben tener en cuenta al hacer staking de Bitcoin en Core.

**Cantidad mínima de Bitcoin + Gas Fee:** La cantidad mínima de Bitcoin requerida para hacer staking en Core depende del método elegido. Si utilizas la interfaz web oficial, debes hacer staking de al menos 0.01 BTC (sin contar las fees de transacción). Si haces staking mediante scripts, no hay requisito mínimo. Además, los ussuarios deben considerar las gas fees en la red de Bitcoin para completar las transacciones. Si planeas hacer staking por menos de un mes, se recomienda tener al menos 0.05 BTC para cubrir una posible congestión de red, ya que esta puede aumentar los costos de gas más allá de las recompensas generadas.

**Mínimo de 1 CORE + Gas Fee:** Para hacer staking de CORE, necesitas tener al menos 1 CORE. Además del monto que se desea stakear, los usuarios deben considerar las comisiones de gas en tokens CORE necesarias para procesar las transacciones en la red.

**Entendiendo las diferencias en las direcciones de Staking de Bitcoin**:

La dirección de staking que aparece en el mensaje de transacción de tu wallet de Bitcoin puede diferir de tu dirección original de Bitcoin. Esto se debe a que la dirección de staking de Bitcoin se deriva de la clave privada maestra de tu wallet de Bitcoin, lo cual garantiza el control y la seguridad sobre tus activos. Tu Bitcoin permanece seguro en la dirección de staking de Bitcoin, sin verse afectado por el proceso de staking.

**Retrasos en la visualización de activos bloqueados en tu Wallet de Bitcoin**:

Es posible que experimentes retrasos antes de que tu Bitcoin bloqueado se muestre en tus wallets de Bitcoin. Este retraso se debe principalmente a la confirmación de transacciones en la red de Bitcoin, la cual puede tardar varias horas debido al tiempo entre bloques, la cantidad de confirmaciones requeridas y la congestión de la red.

Estamos trabajando activamente con socios de wallets para soportar la visualización oportuna de tus activos en los monederos. Mientras tanto, puedes ver tus activos bloqueados en la página MyStaking del sitio web oficial de staking de Core.

También puedes ver tus fondos staked buscando tu dirección de staking en un explorador de Bitcoin como [mempool.space](https://mempool.space).

**Consideraciones sobre los Periodos de Bloqueo**

Una vez que bloqueas tu Bitcoin para staking, estos no estarán accesibles hasta que finalice el periodo de bloqueo. Por ello, según tus objetivos de inversión y tolerancia al riesgo, se recomienda elegir cuidadosamente el periodo de bloqueo. Comenzar con periodos cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte con bloqueos de mayor duración.

## Conectando las wallets de Bitcoin y Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org) y haz clic en **Stake Now** en la esquina superior derecha del encabezado.

2. Una vez en la pestaña Staking, haz clic en la opción **Connect** junto a BTC Staking Amount para conectar tu wallet de Bitcoin. Esta debe ser la wallet que contiene el Bitcoin que deseas poner en staking. Selecciona la wallet compatible de tu preferencia para conectar tu wallet de Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De manera similar, haz clic en **Connect** junto a CORE Staking Amount y selecciona la wallet Core para hacer staking de CORE y recibir recompensas de staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-2.png)
</p>

## Especificar la cantidad de BTC a poner en Staking

Ingresa la cantidad de Bitcoin que deseas poner en staking. El monto mínimo es 0.01 BTC si usas la interfaz web del sitio. Sin embargo, no hay un monto mínimo para stakear Bitcoin usando el script de staking.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-3.png)
</p>

## Selección de un validador Core para la delegación de Bitcoin

En la sección **Delegate to Validator**, selecciona en el menú desplegable un validador activo al cual quieras delegar tu Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-4.png)
</p>

## Especificar la cantidad de CORE a Stakear

Ingresa la cantidad de CORE que quieres poner en staking. El monto mínimo es 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-5.png)
</p>

## Selección de un Validador de Core para la Delegación de CORE

Después de especificar la cantidad de CORE a poner en staking, elige el validador al que delegarás tu CORE. Asegúrate de seleccionar un validador activo desde el menú desplegable.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-6.png)
</p>

## Confirmación de los Detalles de Staking de CORE y BTC

Verifica que la cantidad de CORE apostada y el validador seleccionado sean correctos, luego presiona **Confirm**.

De manera similar, verifica que la cantidad de Bitcoin en staking y el validador seleccionado sean correctos, luego presiona **Confirm**.

## Verificar la Dirección de Staking de Bitcoin

Antes de proceder con la confirmación de tu transacción de staking. Esta función permite a los usuarios verificar de forma independiente su dirección de staking, ayudando a evitar firmas a ciegas y mejorando la seguridad del proceso.

Para proceder con la verificación, haz clic en el botón **Verify the Bitcoin Staking Address**. Esto te redirigirá a un sitio web externo.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)</p>

En la interfaz del sitio de verificación, asegúrate de que los datos recuperados sean correctos y haz clic en **Submit**.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)
</p>

El resultado de la verificación aparecerá en la sección Verification Result.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

Una vez verificado, regresa a [stake.coredao.org](https://stake.coredao.org) y continúa haciendo clic en **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)
</p>

## Ajuste de la Proporción CORE:BTC para Obtener Mayores Rendimientos

En el lado derecho del Staking Calculator, hay una pestaña llamada **Summary** que calcula la Tasa Total de Recompensas por Staking y las Recompensas Anuales Proyectadas. Estos son valores estimados de rendimiento anual para el Bitcoin y CORE en staking. A tasa de recompensa puede fluctuar diariamente según las cantidades totales y ponderadas de delegaciones que reciben los validadores. Cuando el modo está en **Current**, muestra únicamente la tasa estimada de recompensa en tiempo real. Cuando está en **Overall**, representa el promedio de dos componentes: las tasas de todos los validadores basadas en registros anteriores de staking y la tasa estimada de recompensa en tiempo real.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-7.png)
</p>

También puedes usar los deslizadores en la sección inferior para visualizar el efecto de la proporción de staking CORE:BTC en tu Tasa Total de Recompensa por Staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-8.png)
</p>

Para obtener el máximo impulso de recompensas sobre tu cantidad apostada, en la sección **Dual Staking Tiers**, ajusta el deslizador de Bitcoin Staked a la cantidad de Bitcoin que deseas poner en staking y haz clic en el botón **Max Boost**. Esto ajustará automáticamente la cantidad correspondiente en el deslizador "CORE Staked" para desbloquear el boost máximo. También puedes ajustar manualmente la cantidad de CORE en staking y luego hacer clic nuevamente en "Max Boost" para actualizar la cantidad recomendada de Bitcoin en la barra "BTC Staked".

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-9.png)
</p>

Junto a la pestaña Summary, puedes encontrar la página **Details**, que muestra información detallada sobre el staking, incluyendo:

- **New Staked Bitcoin**: La cantidad de BTC que planeas apostar y la tasa de recompensa actual.
- **New Staked CORE**: La cantidad de CORE que planeas poner en staking y la tasa de recompensa actual.
- **Active Staked Bitcoin**: La cantidad de BTC actualmente en staking y la tasa promedio de recompensa ganada a través de los validadores.
- **Active Staked CORE**: La cantidad de CORE actualmente en staking y la tasa promedio de recompensa ganada a través de los validadores.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

## Finalización de Transacciones de Dual Staking

Una vez que hayas especificado la cantidad de BTC/CORE a hacer staking y los validadores a los que deseas delegar, respectivamente, puedes hacer clic en el botón **Proceed to Stake**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

En la página **Stake CORE**, confirma la cantidad de CORE a hacer  staking junto con Bitcoin y haz clic en el botón **Confirm**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-12.png)
</p>

Al hacer clic en **Confirm**, recibirás una notificación desde tu wallet Core conectada para completar la transacción.

Una vez que confirmes la transacción, recibirás una notificación **Transaction Submitted** en la esquina superior derecha de tu pantalla. Puedes hacer clic en **My Staking** para ver tus registros de staking o en **View on CoreScan** para revisar esta transacción.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

En la página **Stake BTC**, confirma la cantidad de Bitcoin que deseas poner en staking. Antes de finalizar el proceso de staking de Bitcoin, es esencial comprender y especificar varios parámetros clave:

**Especificar la cantidad de Bitcoin que deseas delegar**

La cantidad mínima para delegar es 0.01 Bitcoin si lo haces a través del sitio web oficial.
En nuestro ejemplo, delegaremos 0.05 Bitcoin, lo cual cumple con este requisito

**Establecer el tiempo de bloqueo determina cuándo tu Bitcoin en staking será desbloqueado y estará disponible nuevamente para redención o re-delegación.**

Haz clic dentro del cuadro de bloqueo para introducir valores manualmente o selecciona una fecha usando el ícono del calendario, y luego haz clic en 'OK' para continuar.
El tiempo de bloqueo por defecto está fijado a un mes en el futuro.

**Especificar la prioridad de velocidad en la red para tu transacción**

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

Finalmente, haz clic en **Confirm** para completar la transacción.

## Confirmar la Salida OP_Return

Antes de firmar la transacción en tu wallet, verifica las salidas de la transacción para asegurarte de que incluyan una salida OP_Return. La salida OP_Return es donde se guarda tu redeem_script y es esencial para redimir tu Bitcoin en staking. Puede haber dos o tres salidas en total, pero al menos una siempre debe ser OP_Return. **Cancela la transacción si no incluye una salida OP_Return.**

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

Una vez que confirmes la transacción, recibirás una notificación **Transaction Submitted** en la esquina superior derecha de tu pantalla. Puedes hacer clic en **My Staking** para ver tus registros de staking o en **View on Bitcoin Explorer** para revisar esta transacción.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Verificar la Envío de Transacción y Registros de Staking

En la esquina superior derecha del sitio web de staking, coloca el cursor sobre tu wallet conectada y haz clic en **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

La página **My Staking** muestra los registros de todas tus actividades de staking (CORE, BTC, hash power de Bitcoin). Haz clic en las pestañas respectivas **CORE**, **BTC** y **Hash** para ver los detalles sobre tu staking y delegaciones.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Conclusión

Has puesto en staking exitosamente tu Bitcoin y CORE en la blockchain de Core y ahora comenzarás a ganar tokens CORE como recompensas. Al hacer staking de Bitcoin y votar por validadores, contribuyes activamente a la gobernanza y seguridad de la red Core, apoyando su descentralización y estabilidad. Además, mediante el Dual Staking, ayudas a fortalecer la conexión entre las blockchains de Bitcoin y Core, alineando incentivos y generando valor a lo largo de ambos ecosistemas.
