---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Dual Staking en Core

Esta guía de usuario está diseñada para guiarte a través del proceso de Dual Staking en Core. El Staking Autocustodiado de Bitcoin de Core permite a los usuarios obtener rendimiento en CORE al hacer staking con sus Bitcoins y delegarlos a validadores en Core. Dual Staking unlocks higher yield tiers by staking Bitcoin and CORE to further enhance yield generation from Self-Custodial Bitcoin staking. Let's dive into how it works and learn how to start staking today.

## Comenzando con el Staking Dual

There are several ways to participate in Dual Staking with Bitcoin and CORE, depending on your preferred tools and experience level:

- **A través del [sitio web oficial de Core](https://stake.coredao.org/staking):** Una interfaz fácil de usar para que la mayoría de los usuarios comiencen a hacer staking directamente.

- **Usando herramientas CLI y contratos inteligentes:** Ideal para desarrolladores y usuarios avanzados que prefieren interactuar directamente con el protocolo. Users can stake their Bitcoin using the [BTC Staking CLI Tool](https://github.com/coredao-org/btc-staking-tool) and stake CORE by interacting directly with the [staking smart contracts](https://github.com/coredao-org/core-genesis-contract?tab=readme-ov-file#list-of-contracts).

- **A través de custodios de confianza:** Haz staking mediante custodios de nivel institucional como BitGo, Copper o Hex Trust para mayor seguridad y conveniencia operativa.

## Requisitos Previos

To get started and be able to dual stake CORE and Bitcoin via Core's [official staking website](https://stake.coredao.org/staking), you must have the following prerequisites:

1. **Supported Bitcoin Wallet Browser Extension:** To participate in the Bitcoin staking process, you must install browser extensions of any supported Bitcoin wallets, like [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), and/or [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (refer [here](https://stake.coredao.org) for the latest supported wallets). You must use the desktop version when using the official staking website. También puedes hacer staking directamente usando la aplicación móvil de [Element Wallet](https://www.elementwallet.com/).
2. **Core Wallet Address for Rewards:** Prepare your Core wallet address to stake CORE and receive [CORE token rewards for staking Bitcoin](../stake-and-delegate/btc-staking/stake-btc-guide.md#prerequisites). Si no tienes una dirección de cartera Core, puedes crear una rápidamente conectándote a MetaMask. For more information on configuring MetaMask to work with the Core network, follow the detailed guide [here](../Dev-Guide/core-wallet-config.md).

## Consideraciones clave para la apuesta dual

A continuación se detallan algunos puntos clave a tener en cuenta al apostar tu Bitcoin en Core.

1. **Minimum Bitcoin Amount \+ Gas Fee:** The minimum Bitcoin required for staking on Core depends on the chosen method. Si se utiliza la [interfaz web del sitio oficial](https://stake.coredao.org/staking), los usuarios deben hacer staking de al menos 0.01 BTC (excluyendo las comisiones de transacción). No hay un requisito mínimo al hacer staking a través del script. Además, los usuarios deben tener en cuenta las comisiones de gas de Bitcoin requeridas para las transacciones. Si se hace staking por menos de un mes, se recomienda contar con al menos 0.05 BTC para cubrir posibles congestiones en la red, las cuales podrían aumentar las comisiones de gas por encima de las recompensas obtenidas por el staking.

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

Dual staking is an enhancement to Core’s Self-custodial Bitcoin staking, allowing users to unlock higher yield tiers by staking Bitcoin and CORE simultaneously. Higher CORE:BTC staking ratios unlock higher yield tiers for Bitcoin staking. To take advantage of Dual Staking and earn higher reward rates for Bitcoin staking, follow the steps detailed below.

### Conectando las Carteras de Bitcoin y Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Apostar Ahora** en la parte superior derecha del encabezado.
2. Una vez en la pestaña **Staking**, haz clic en la opción **Conectar** junto a "Monto de Staking de BTC" para conectar tu cartera de Bitcoin. Esta debe ser la cartera con los activos de Bitcoin que deseas apostar. Haz clic en la cartera compatible de tu elección para conectar tu cartera de Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De igual forma, haz clic en la opción **Conectar** junto a **Monto de Staking de CORE** y selecciona la cartera Core para apostar CORE y recibir recompensas por el staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-2.png)
</p>

## Especificando la Cantidad de BTC a Apostar

4. Ingresa la cantidad de Bitcoin que deseas apostar. The minimum amount is 0.01 BTC if a user is staking through the website UI. However, there are no minimum amount requirements for staking Bitcoin through the staking script.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-3.png)
</p>

### Seleccionando un Validador de Core para la Delegación de Bitcoin

5. Under **Delegate to Validator**, from the drop-down menu, select an **_active validator_** to whom you want to delegate your Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-4.png)
</p>

### Especificando la Cantidad de CORE a Apostar

6. Ingresa la cantidad de CORE que deseas apostar. El monto mínimo es 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-5.png)
</p>

### Seleccionando un Validador de Core para la Delegación de CORE

7. Después de especificar la cantidad de CORE a apostar, elige el validador al que delegarás tu CORE. Ensure that you select an active validator from the drop-down.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-6.png)
</p>

### Confirmando los detalles de staking de CORE y BTC

8. Verify that the staked CORE amount and selected Validator are correct and then press _Confirm_.
9. Similarly, verify that the staked Bitcoin amount and selected Validator are correct and then press _Confirm_.

### Verify Bitcoin Staking Address

10. Antes de proceder a confirmar tu transacción de staking. This verification feature allows users to independently verify their Bitcoin staking address, helping prevent blind signing and enhancing the security of the staking process.

11. To proceed with verification, click on the **Verify the Bitcoin Staking Address** button. Esto te llevará al sitio web externo.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

12. En la interfaz del sitio web de verificación, asegúrate de que los datos obtenidos sean correctos y luego haz clic en el botón _Submit_.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/external-verification-UI.png)
</p>

13. El resultado de la verificación aparecerá en la sección **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

14. Una vez verificado, regresa a stake.coredao.org y continúa al hacer clic en **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../static/img/btc-staking/approve-tx.png)
</p>

### Ajustando las Proporciones CORE:BTC para Mayores Rendimientos

15. En el lado derecho de la Calculadora de Staking, hay una pestaña **Resumen** que calcula la Tasa Total de Recompensas de Staking y las Recompensas Anuales Proyectadas. Estos son los números estimados de retorno anual para el Bitcoin y CORE apostados. La tasa de recompensa puede fluctuar diariamente según los montos totales y ponderados de las delegaciones que reciben los validadores. Cuando se establece en el botón **Actual**, solo muestra la tasa estimada en tiempo real de las recompensas por staking. Cuando se establece en el botón **General**, representa el promedio de dos componentes: las tasas de todos los validadores basadas en los registros anteriores de staking y la tasa estimada en tiempo real.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-7.png)
</p>

16. You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-8.png)
</p>

17. To get the maximum reward boost on your staked amount, under the Dual Staking Tiers section, adjust the **Bitcoin Staked** slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the “CORE Staked” slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the “Max Boost” button again to update the recommended Bitcoin amount in the “BTC Staked” bar.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-9.png)
</p>

18. Junto a la pestaña **Resumen**, puedes encontrar la página **Detalles**, que muestra detalles del staking, incluidos:

- **New Staked Bitcoin:** The amount of BTC you plan to stake and the current reward rate.
- **Nuevo CORE Apostado:** La cantidad de CORE que planeas apostar y la tasa de recompensas actual.
- **Active Staked Bitcoin:** The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE:** The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalizando las Transacciones de Staking Doble

19. Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-11.png)
</p>

20. On the Stake CORE page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-12.png)
</p>

21. Al hacer clic en **Confirmar**, recibirás una notificación de tu billetera Core conectada para completar la transacción.

22. Once you confirm the transaction, you will receive a **Transaction Submitted** notification on the top right of your screen. Puedes hacer clic en **Mi Staking** para ver tus registros de staking o en **Ver en CoreScan** para revisar esta transacción.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-13.png)
</p>

23. En la página de “Apostar BTC”, confirma la cantidad de Bitcoin que deseas apostar. Before finalizing the Bitcoin staking process, it's essential to understand and specify several key parameters:

- Especificar la cantidad de Bitcoin que deseas delegar
  - The minimum amount to delegate is 0.01 Bitcoin if delegating through the official website.
  - En nuestro ejemplo, delegaremos 0.05 Bitcoin, lo que cumple con este requisito
- Establecer el tiempo de bloqueo determina cuándo tu Bitcoin apostado será desbloqueado y estará disponible nuevamente para su redención o re-delegación.
  - Select inside the lock time box to input values, or click on the calendar icon to select the date, and click ‘OK’ to proceed.
  - El tiempo de bloqueo predeterminado se establece con un mes de anticipación.
- Especificar la velocidad de prioridad de la red para tu transacción.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Finalmente, haz clic en ‘Confirmar’ para completar la transacción.

**Confirm `OP_Return` Output**

25. Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an `OP_Return` output. La salida `OP_Return` es donde se guarda tu `redeem_script` y se utiliza esencialmente para redimir tu Bitcoin apostado. Puede haber dos o tres salidas, pero al menos una debe ser siempre **OP_Return**. Abort the transaction if it doesn't include the `OP_Return` output.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Una vez que confirmes la transición, recibirás una notificación de **Transacción Enviada** en la parte superior derecha de tu pantalla. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-16.png)
</p>

**Verificar Envío de Transacción y Registros de Staking**

27. En la parte superior derecha del sitio web de staking, pasa el cursor sobre tu billetera conectada y haz clic en **Mi Staking**.

<p align="center">
![btc-staking-on-core](../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Haz clic en las respectivas pestañas de CORE, BTC y Hash para ver detalles sobre tu staking y delegaciones.

<p align="center">
![dual-staking-on-core](../../static/img/dual-staking/dual-staking-16.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. Al apostar Bitcoin y votar por los validadores, contribuyes activamente a la gobernanza y seguridad de la red Core, apoyando su descentralización y estabilidad. Además, a través del Staking Doble, ayudas a fortalecer la conexión entre las blockchains de Bitcoin y Core, alineando incentivos y creando valor en ambos ecosistemas.
