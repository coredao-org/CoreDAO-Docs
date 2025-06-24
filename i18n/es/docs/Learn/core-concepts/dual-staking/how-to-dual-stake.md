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

1. Visit [https://stake.coredao.org](https://stake.coredao.org) and click **Stake Now** on the top right of the header.

2. Once on the Staking tab, click the **Connect** option next to "BTC Staking Amount" to connect your Bitcoin wallet. This should be the wallet with the Bitcoin assets you want to stake. Click on the supported wallet of your choice to connect your Bitcoin wallet.

<p align="center" style={{zoom:"60%"}}></p>

3. Likewise, click the **Connect** option next to CORE Staking Amount and select the Core wallet to stake CORE and receive staking rewards.

<p align="center" style={{zoom:"60%"}}></p>

## Specifying the BTC Amount to Stake

Enter the amount of Bitcoin you want to stake. The minimum amount is 0.01 BTC if a user is staking through the website UI. However, there are no minimum amount requirements for staking Bitcoin through the staking script.

<p align="center" style={{zoom:"70%"}}></p>

## Selecting a Core Validator for Bitcoin Delegation

Under **Delegate to Validator**, from the drop-down menu, select an active validator to whom you want to delegate your Bitcoin.

<p align="center" style={{zoom:"60%"}}></p>

## Specifying the CORE Amount to Stake

Enter the amount of CORE you want to stake. The minimum amount is 1 CORE.

<p align="center" style={{zoom:"60%"}}></p>

## Selecting a Core Validator for CORE Delegation

After specifying the amount of CORE to stake, choose the validator to whom you will delegate your CORE. Ensure that you select an active validator from the drop-down.

<p align="center" style={{zoom:"60%"}}></p>

## Confirming CORE and BTC Staking Details

Verify that the staked CORE amount and selected Validator are correct and then press **Confirm**.

Similarly, verify that the staked Bitcoin amount and selected Validator are correct and then press **Confirm**.

## Verify Bitcoin Staking Address

Before proceeding to confirm your staking transaction. This verification feature allows users to independently verify their Bitcoin staking address, helping prevent blind signing and enhancing the security of the staking process.

To proceed with verification, click on the **Verify the Bitcoin Staking Address** button. This will navigate you to the external website.

<p align="center" style={{zoom:"60%"}}></p>

On the Verification Website UI, ensure that the fetched data is correct and then click on the **Submit** button.

<p align="center" style={{zoom:"35%"}}></p>

The verification result will appear in the Verification Result section.

<p align="center" style={{zoom:"60%"}}></p>

Once verified, navigate back to [stake.coredao.org](https://stake.coredao.org) and continue by clicking on **Approve Transaction**.

<p align="center"></p>

## Adjusting CORE:BTC Ratios for Higher Yields

On the right side of the Staking Calculator, there is a **Summary** tab that calculates the Total Staking Reward Rate and Projected Annual Rewards. These are estimated annual return numbers for staked Bitcoin and CORE. The reward rate may fluctuate daily based on the total and weighted amounts of delegations that validators receive. When set to the **Current** button, it displays only the real-time estimated staking reward rate. When set to the **Overall** button, it represents the average of two components: the rates from all validators based on previous staking records and the real-time estimated staking reward rate.

<p align="center" style={{zoom:"60%"}}></p>

You can also use the sliders in the section below to see the effect of CORE:BTC staking ratio on your Total Staking Reward Rate.

<p align="center" style={{zoom:"60%"}}></p>

To get the maximum reward boost on your staked amount, under the **Dual Staking Tiers** section, adjust the Bitcoin Staked slider to the amount of Bitcoin you want to stake and click the **Max Boost** button. This will automatically set the corresponding CORE amount in the "CORE Staked" slider to unlock maximum boost. You can also manually adjust the CORE staked and then click the "Max Boost" button again to update the recommended Bitcoin amount in the "BTC Staked" bar.

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
