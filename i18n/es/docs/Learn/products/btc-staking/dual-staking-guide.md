---
sidebar_label: Guía de Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking en Core

Esta guía está diseñada para explicarte el proceso de Dual Staking en Core. El Stakingd Auto-custodial de Bitcoin de Core permite a los usuarios ganar rendimiento en CORE al hacer staking de sus Bitcoins y delegarlos a validadores en Core. El Dual Staking desbloquea niveles de rendimiento más altos al hacer staking tanto de Bitcoin como de CORE, lo que mejora aún más la generación de rendimiento del Staking Autocustodiado de Bitcoin. Vamos a profundizar en cómo funciona y aprender cómo empezar a hacer staking hoy mismo.

## Comenzando con Dual Staking

Existen varias formas de participar en Dual Staking con Bitcoin y CORE, dependiendo de tus herramientas preferidas y nivel de experiencia:

- **A través del [sitio web oficial de Core](https://stake.coredao.org/staking):** Una interfaz amigable para que la mayoría de los usuarios puedan comenzar a stakear directamente.

- **Usando herramientas CLI y Smart Contracts:** Ideal para desarrolladores y usuarios avanzados que prefieren interactuar directamente con el protocolo. Los usuarios pueden stakear su Bitcoin usando la [BTC Staking CLI Tool](https://github.com/coredao-org/btc-staking-tool) y stakear CORE interactuando directamente con los [staking smart contracts](https://github.com/coredao-org/core-genesis-contract?tab=readme-ov-file#list-of-contracts).

- **A través de Custodios Confiables:** Realiza staking mediante custodios de nivel institucional como BitGo, Copper o Hex Trust para mayor seguridad y conveniencia operativa.

## Prerrequisitos

Para comenzar y poder realizar Dual Staking de CORE y Bitcoin a través del [sitio web oficial de staking](https://stake.coredao.org/staking) de Core, debes cumplir con los siguientes prerrequisitos:

1. **Extensión de navegador para Bitcoin Wallet compatible:** Para participar en el proceso de staking de Bitcoin, debes instalar extensiones de navegador de alguna de las wallets de Bitcoin compatibles, como [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) y/o [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (consulta [aquí](https://stake.coredao.org) para ver las billeteras compatibles más recientes). Debes usar la versión de escritorio al utilizar el sitio web oficial de staking. También puedes hacer staking directamente usando la aplicación móvil de [Element Wallet](https://www.elementwallet.com/).
2. **Dirección de Wallet de Core para Recompensas:** Prepara tu dirección de wallet de Core para hacer staking de CORE y recibir [recompensas de tokens CORE por staking de Bitcoin](../../../stake-and-delegate/btc-staking/stake-btc-guide.md#prerequisites). Si no tienes una dirección de wallet de Core, puedes crear una rápidamente conectándote a MetaMask. Para más información sobre cómo configurar MetaMask para trabajar con la red Core, sigue la guía detallada [aquí](../../../Dev-Guide/core-wallet-config.md).

## Consideraciones Clave para Dual Staking

A continuación se presentan algunos puntos importantes que los usuarios deben tener en cuenta al stakear sus Bitcoins en Core.

1. **Cantidad mínima de Bitcoin \+ Tarifa de Gas:** La cantidad mínima de Bitcoin requerida para hacer staking en Core depende del método elegido. Si se utiliza la [interfaz web del sitio oficial](https://stake.coredao.org/staking), los usuarios deben hacer staking de al menos 0.01 BTC (excluyendo las comisiones de transacción). No hay un requisito mínimo cuando se hace staking mediante script. Además, los usuarios deben considerar las tarifas de gas de la red Bitcoin necesarias para las transacciones. Si planeas hacer staking por menos de un mes, se recomienda tener al menos 0.05 BTC para cubrir posibles congestiones de red, que podrían aumentar las tarifas de gas por encima de las recompensas de staking obtenidas.

2. **Mínimo de 1 CORE \+ Tarifa de gas:** Para hacer staking, debes tener al menos 1 CORE. Además del monto en staking, los usuarios deben considerar las tarifas de gas en tokens CORE necesarias para procesar las transacciones.

3. **Comprender las diferencias en las Direcciones de Staking de Bitcoin:**
  - La dirección de staking que aparece en la solicitud de transacción de tu wallet de Bitcoin puede diferir de tu dirección original de Bitcoin. Esto se debe a que la dirección de staking de Bitcoin se deriva de la clave privada maestra de tu cartera de Bitcoin, lo cual garantiza el control y la seguridad sobre tus activos. Tu Bitcoin permanece seguro en la dirección de staking, sin verse afectado por el proceso de staking.

4. **Retrasos en la Visualización de Activos Bloqueados en tu Wallet de Bitcoin:**
  - Es posible que experimentes algunos retrasos antes de que tu Bitcoin bloqueado se muestre en tus wallets de Bitcoin. Este retraso se debe principalmente a demoras en la confirmación de transacciones en la red de Bitcoin, que pueden tardar varias horas debido al tiempo de bloque, el número de confirmaciones necesarias, y la congestión de la red.
  - Si bien estamos trabajando activamente con nuestros socios de wallets para que tus activos se muestren a tiempo en tus wallets, puedes consultar tus activos bloqueados en la página **MyStaking** del sitio web de staking de Core.
  - También puedes ver tus fondos en staking buscando la dirección de staking en un explorador de Bitcoin, como [Mempool.space](https://mempool.space/).

5. **Consideraciones sobre los Períodos de Bloqueo**
  - Una vez que bloqueas tu Bitcoin para staking, este queda inaccesible hasta que finalice el período de staking. Teniendo en cuenta tus objetivos de inversión y tolerancia al riesgo, se recomienda elegir el período de bloqueo con cuidado. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte a duraciones más largas.

## Guía paso a paso para Dual Staking

El staking de Bitcoin Auto-custodial de Core introduce un método seguro y descentralizado para que los poseedores de Bitcoin ganen rendimiento a través del staking de Bitcoin. Los usuarios pueden hacer staking de su Bitcoin de forma nativa en la red de Bitcoin mediante un mecanismo con tiempo de bloqueo, y participar activamente en el mecanismo de consenso de la blockchain de Core mientras hacen staking.

El Dual Staking es una mejora del Staking de Bitcoin Auto-custodial de Core, que permite a los usuarios desbloquear niveles de rendimiento superiores al hacer staking de Bitcoin y CORE simultáneamente. Cuanto mayor sea la proporción de CORE:BTC en staking, mayores serán los niveles de rendimiento desbloqueados para el staking de Bitcoin. Para aprovechar el Dual Staking y obtener tasas de recompensa más altas por tu Bitcoin en staking, sigue los pasos que se detallan a continuación.

### Conectando Wallets de Bitcoin y Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Stake Now** en la parte superior derecha del encabezado.
2. Una vez en la pestaña de **Staking**, haz clic en la opción **Connect** junto a “BTC Staking Amount” para conectar tu wallet de Bitcoin. Esta debe ser la wallet que contiene los activos de Bitcoin que deseas poner en staking. Selecciona la wallet compatible de tu preferencia para conectar tu wallet de Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De la misma manera, haz clic en la opción **Connect** junto a **CORE Staking Amount** y selecciona la wallet de Core para hacer staking de CORE y recibir recompensas por staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-2.png)
</p>

## Especificar la Cantidad de BTC a Hacer Staking

4. Ingresa la cantidad de Bitcoin que deseas poner en staking. La cantidad mínima es 0.01 BTC si el usuario realiza el staking a través de la interfaz web del sitio. Sin embargo, no hay requisitos de cantidad mínima si se realiza el staking de Bitcoin mediante el script de staking.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-3.png)
</p>

### Seleccionar un Validador de Core para la Delegación de Bitcoin

5. En la sección **Delegate to Validator**, selecciona un **_validador activo_** desde el menú desplegable al que deseas delegar tu Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-4.png)
</p>

### Especificar la Cantidad de CORE a Hacer Staking

6. Ingresa la cantidad de CORE que deseas poner en staking. La cantidad mínima es 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-5.png)
</p>

### Seleccionar un Validador de Core para la Delegación de CORE

7. Después de especificar la cantidad de CORE a hacer staking, elige el validador al que delegarás tu CORE. Asegúrate de seleccionar un validador activo desde el menú desplegable.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-6.png)
</p>

### Confirmar los Detalles de Staking de CORE y BTC

8. Verifica que la cantidad de CORE ingresada y el validador seleccionado sean correctos, luego haz clic en _Confirmar_.
9. De igual forma, asegúrate de que la cantidad de Bitcoin ingresada y el validador elegido sean correctos y haz clic en _Confirmar_.

### Verificar la Dirección de Staking de Bitcoin

10. Antes de proceder con la confirmación de tu transacción de staking. Esta función de verificación permite a los usuarios comprobar de forma independiente su dirección de staking de Bitcoin, lo que ayuda a evitar la firma a ciegas y mejora la seguridad del proceso de staking.

11. Para continuar con la verificación, haz clic en el botón **Verify the Bitcoin Staking Address**. Esto te redirigirá a un sitio web externo.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

12. En la interfaz del sitio web de verificación, asegúrate de que los datos recuperados sean correctos y luego haz clic en el botón _Submit_.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)
</p>

13. El resultado de la verificación aparecerá en la sección **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

14. Una vez verificado, regresa a stake.coredao.org y continúa haciendo clic en **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)
</p>

### Ajuste de la Proporción CORE:BTC para Obtener Mayores Rendimientos

15. On the right side of the Staking Calculator, there is a **Summary** tab that calculates the Total Staking Reward Rate and Projected Annual Rewards. These are estimated annual return numbers for staked Bitcoin and CORE. The reward rate may fluctuate daily based on the total and weighted amounts of delegations that validators receive. When set to the **Current** button, it displays only the real-time estimated staking reward rate. When set to the **Overall** button, it represents the average of two components: the rates from all validators based on previous staking records and the real-time estimated staking reward rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-7.png)
</p>

16. You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-8.png)
</p>

17. To get the maximum reward boost on your staked amount, under the Dual Staking Tiers section, adjust the **Bitcoin Staked** slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the “CORE Staked” slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the “Max Boost” button again to update the recommended Bitcoin amount in the “BTC Staked” bar.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-9.png)
</p>

18. Next to the **Summary** tab, you can find **Details** page, which shows staking details, including:

- **New Staked Bitcoin:** The amount of BTC you plan to stake and the current reward rate.
- **New Staked CORE:** The amount of CORE you plan to stake and the current reward rate.
- **Active Staked Bitcoin:** The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE:** The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-10.png)
</p>

### Finalizing Dual Staking Transactions

19. Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-11.png)
</p>

20. On the Stake CORE page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-12.png)
</p>

21. By clicking **Confirm**, you will get a notification from your connected Core wallet to complete the transaction.

22. Once you confirm the transaction, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click **My Staking** to see your staking records or **View on CoreScan** to review this transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-13.png)
</p>

23. On the “Stake BTC” page, confirm the amount of Bitcoin to stake. Before finalizing the Bitcoin staking process, it's essential to understand and specify several key parameters:

- Specifying the amount of Bitcoin you’d like to delegate
  - The minimum amount to delegate is 0.01 Bitcoin if delegating through the official website.
  - In our example, we will be delegating 0.05 Bitcoin, which satisfies this requirement
- Setting the lock time determines when your staked Bitcoin will be unlocked and available again for redemption or re-delegation.
  - Select inside the lock time box to input values, or click on the calendar icon to select the date, and click ‘OK’ to proceed.
  - The default lock time is set to a month in advance.
- Specify the network priority speed for your transaction

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-14.png)
</p>

24. Finally, click ‘Confirm’ to complete the transaction.

**Confirm `OP_Return` Output**

25. Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an `OP_Return` output. The `OP_Return` output is where your `redeem_script` is saved and is essentially used to redeem your staked Bitcoin. There may be two or three outputs, but at least one should always be **OP_Return**. Abort the transaction if it doesn't include the `OP_Return` output.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

26. Once you confirm the transition, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Verify Transaction Submission and Staking Records**

27. In the top right corner of the staking website, hover over your connected wallet and click **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

28. The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Click on the respective CORE, BTC, and Hash tabs to view details on your staking and delegations.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-16.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. By staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, supporting its decentralization and stability. In addition, through Dual Staking, you help strengthen the connection between the Bitcoin and Core blockchain, aligning incentives and creating value across both ecosystems.
