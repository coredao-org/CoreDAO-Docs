---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
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

1. Visita [https://stake.coredao.org](https://stake.coredao.org) y haz clic en \*\*Stake Now \*\* en la esquina superior derecha del encabezado.

2. Una vez en la pestaña Staking, haz clic en la opción **Connect** junto a BTC Staking Amount para conectar tu wallet de Bitcoin. Esta debe ser la wallet que contiene el Bitcoin que deseas poner en staking. Selecciona la wallet compatible de tu preferencia para conectar tu wallet de Bitcoin.

<p align="center" style={{zoom:"60%"}}></p>

3. De manera similar, haz clic en **Connect** junto a CORE Staking Amount y selecciona la wallet Core para hacer staking de CORE y recibir recompensas de staking.

<p align="center" style={{zoom:"60%"}}></p>

## Especificar la cantidad de BTC a poner en Staking

Ingresa la cantidad de Bitcoin que deseas poner en staking. El monto mínimo es 0.01 BTC si usas la interfaz web del sitio. Sin embargo, no hay un monto mínimo para stakear Bitcoin usando el script de staking.

<p align="center" style={{zoom:"70%"}}></p>

## Selección de un validador Core para la delegación de Bitcoin

En la sección **Delegate to Validator**, selecciona en el menú desplegable un validador activo al cual quieras delegar tu Bitcoin.

<p align="center" style={{zoom:"60%"}}></p>

## Especificar la cantidad de CORE a Stakear

Ingresa la cantidad de CORE que quieres poner en staking. El monto mínimo es 1 CORE.

<p align="center" style={{zoom:"60%"}}></p>

## Selección de un Validador de Core para la Delegación de CORE

Después de especificar la cantidad de CORE a poner en staking, elige el validador al que delegarás tu CORE. Asegúrate de seleccionar un validador activo desde el menú desplegable.

<p align="center" style={{zoom:"60%"}}></p>

## Confirmación de los Detalles de Staking de CORE y BTC

Verifica que la cantidad de CORE apostada y el validador seleccionado sean correctos, luego presiona **Confirm**.

De manera similar, verifica que la cantidad de Bitcoin en staking y el validador seleccionado sean correctos, luego presiona **Confirm**.

## Verificar la Dirección de Staking de Bitcoin

Antes de proceder con la confirmación de tu transacción de staking. Esta función permite a los usuarios verificar de forma independiente su dirección de staking, ayudando a evitar firmas a ciegas y mejorando la seguridad del proceso.

Para proceder con la verificación, haz clic en el botón **Verify the Bitcoin Staking Address**. Esto te redirigirá a un sitio web externo.

<p align="center" style={{zoom:"60%"}}></p>

En la interfaz del sitio de verificación, asegúrate de que los datos recuperados sean correctos y haz clic en **Submit**.

<p align="center" style={{zoom:"35%"}}></p>

El resultado de la verificación aparecerá en la sección Verification Result.

<p align="center" style={{zoom:"60%"}}></p>

Una vez verificado, regresa a [stake.coredao.org](https://stake.coredao.org) y continúa haciendo clic en **Approve Transaction**.

<p align="center"></p>

## Ajuste de la Proporción CORE:BTC para Obtener Mayores Rendimientos

En el lado derecho del Staking Calculator, hay una pestaña llamada **Summary** que calcula la Tasa Total de Recompensas por Staking y las Recompensas Anuales Proyectadas. Estos son valores estimados de rendimiento anual para el Bitcoin y CORE en staking. A tasa de recompensa puede fluctuar diariamente según las cantidades totales y ponderadas de delegaciones que reciben los validadores. Cuando el modo está en **Current**, muestra únicamente la tasa estimada de recompensa en tiempo real. Cuando está en **Overall**, representa el promedio de dos componentes: las tasas de todos los validadores basadas en registros anteriores de staking y la tasa estimada de recompensa en tiempo real.

<p align="center" style={{zoom:"60%"}}></p>

También puedes usar los deslizadores en la sección inferior para visualizar el efecto de la proporción de staking CORE:BTC en tu Tasa Total de Recompensa por Staking.

<p align="center" style={{zoom:"60%"}}></p>

Para obtener el máximo impulso de recompensas sobre tu cantidad apostada, en la sección **Dual Staking Tiers**, ajusta el deslizador de Bitcoin Staked a la cantidad de Bitcoin que deseas poner en staking y haz clic en el botón **Max Boost**. This will automatically set the corresponding CORE amount in the "CORE Staked" slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the "Max Boost" button again to update the recommended Bitcoin amount in the "BTC Staked" bar.

<p align="center"></p>

Next to the Summary tab, you can find **Details** page, which shows staking details, including:

- **New Staked Bitcoin**: The amount of BTC you plan to stake and the current reward rate.
- **New Staked CORE**: The amount of CORE you plan to stake and the current reward rate.
- **Active Staked Bitcoin**: The amount of BTC currently staked and the average earning reward rate across validators.
- **Active Staked CORE**: The amount of CORE currently staked and the average earning reward rate across validators.

<p align="center" style={{zoom:"70%"}}></p>

## Finalizing Dual Staking Transactions

Once you have specified the amount of BTC/CORE to stake and the validators for delegation, respectively, you can click on the **Proceed to Stake** button.

<p align="center" style={{zoom:"70%"}}></p>

On the **Stake CORE** page, confirm the amount of CORE to stake along with Bitcoin, and click the **Confirm** button.

<p align="center" style={{zoom:"70%"}}></p>

By clicking **Confirm**, you will get a notification from your connected Core wallet to complete the transaction.

Once you confirm the transaction, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click **My Staking** to see your staking records or **View on CoreScan** to review this transaction.

<p align="center"></p>

On the **Stake BTC** page, confirm the amount of Bitcoin to stake. Before finalizing the Bitcoin staking process, it's essential to understand and specify several key parameters:

**Specifying the amount of Bitcoin you'd like to delegate**

The minimum amount to delegate is 0.01 Bitcoin if delegating through the official website.
In our example, we will be delegating 0.05 Bitcoin, which satisfies this requirement

**Setting the lock time determines when your staked Bitcoin will be unlocked and available again for redemption or re-delegation.**

Select inside the lock time box to input values, or click on the calendar icon to select the date, and click 'OK' to proceed.
The default lock time is set to a month in advance.

**Specify the network priority speed for your transaction**

<p align="center" style={{zoom:"70%"}}></p>

Finally, click **Confirm** to complete the transaction.

## Confirm OP_Return Output

Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an OP_Return output. The OP_Return output is where your redeem_script is saved and is essentially used to redeem your staked Bitcoin. There may be two or three outputs, but at least one should always be OP_Return. **Abort the transaction if it doesn't include the OP_Return output.**

<p align="center"></p>

Once you confirm the transition, you will receive a **Transaction Submitted** notification on the top right of your screen. You could click on **My Staking** to see your staking records or **View on Bitcoin Explorer** to review this transaction.

<p align="center"></p>

## Verify Transaction Submission and Staking Records

In the top right corner of the staking website, hover over your connected wallet and click **My Staking**.

<p align="center"></p>

The **My Staking** page displays records of all your staking activities (CORE, BTC, Bitcoin hash power). Click on the respective **CORE**, **BTC**, and **Hash** tabs to view details on your staking and delegations.

<p align="center"></p>

## Conclusion

You have successfully staked your Bitcoin and CORE on the Core blockchain and will now actively earn CORE tokens as rewards. By staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, supporting its decentralization and stability. In addition, through Dual Staking, you help strengthen the connection between the Bitcoin and Core blockchain, aligning incentives and creating value across both ecosystems.
