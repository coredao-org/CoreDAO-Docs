---
sidebar_label: Staking Bitcoin con Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking de Bitcoin Auto-Custodiado

Esta guía de usuario está diseñada para guiarte paso a paso en el proceso de hacer staking con tus Bitcoin en la blockchain de Core para ganar recompensas en tokens CORE.

## Requisitos Previos

Para poder hacer staking, debes tener los siguientes requisitos previos:

1. **Extensión de Navegador de una Wallet de Bitcoin Compatible:**
  Para participar en el proceso de staking de BTC, debes instalar extensiones de navegador de alguna de las wallets de Bitcoin compatibles, como [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), y/o [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge). Visita https://stake.coredao.org para consultar la lista actualizada de wallets compatibles. Debes usar la versión de escritorio, ya que las wallets móviles y hardware wallets no están actualmente soportadas. También puedes hacer staking directamente usando la aplicación móvil [Element Wallet](https://www.elementwallet.com/).
2. **Dirección de Wallet de Core para Recompensas:**
  Prepara tu dirección de wallet de Core para recibir las recompensas en tokens CORE por hacer staking de Bitcoin. Si aún no tienes una dirección de wallet de Core, puedes crear una rápidamente conectándote con MetaMask. Para más información sobre cómo configurar MetaMask para que funcione con la red de Core, sigue la guía detallada disponible [aquí](../../Dev-Guide/core-wallet-config.md).

## **Consideraciones Clave para el Staking de BTC**

A continuación, se presentan algunos puntos clave que los usuarios deben tener en cuenta al hacer staking de sus Bitcoin con Core.

1. **Cantidad Mínima de Bitcoin \+ Tarifa de Gas**:
  La cantidad mínima de BTC requerida para hacer staking con Core depende del método elegido. Si utilizas la interfaz oficial del sitio web, debes hacer staking con al menos 0.01 BTC (excluyendo las tarifas de transacción). No hay un requisito mínimo cuando se hace staking mediante script. Además, los usuarios deben considerar las tarifas de gas de la red Bitcoin necesarias para las transacciones. Si planeas hacer staking por menos de un mes, se recomienda tener al menos 0.05 BTC para cubrir posibles congestiones de red, que podrían aumentar las tarifas de gas por encima de las recompensas de staking obtenidas.
2. **Duración Mínima del Staking:**
  La duración mínima del staking también depende del método utilizado. La interfaz web oficial requiere un mínimo de 5 días, mientras que el staking mediante script no tiene requisito de bloqueo.
3. **Comprendiendo las Diferencias en las Direcciones de Staking de Bitcoin:**
  - La dirección de staking que aparece en la solicitud de transacción de tu cartera de Bitcoin puede diferir de tu dirección original de Bitcoin. Esto se debe a que la dirección de staking de Bitcoin se deriva de la clave privada maestra de tu cartera de Bitcoin, lo cual garantiza el control y la seguridad sobre tus activos. Tu Bitcoin permanece seguro en la dirección de staking, sin verse afectado por el proceso de staking.
4. **Retrasos en la Visualización de Activos Bloqueados en tu Wallet de Bitcoin:**
  - Puede que experimentes ciertos retrasos antes de que tu Bitcoin bloqueado se muestre en tus carteras. Este retraso se debe principalmente a demoras en la confirmación de transacciones en la red de Bitcoin, que pueden tardar varias horas debido al tiempo de bloque, el número de confirmaciones necesarias, y la congestión de la red.
  - Aunque estamos trabajando activamente con socios de wallets para facilitar la visualización puntual de tus activos, puedes ver tus activos bloqueados en la página “MyStaking” del sitio web de staking de Core.
  - También puedes ver tus fondos en staking buscando la dirección de staking en un explorador de Bitcoin como [Mempool.space](https://mempool.space/).
5. **Consideraciones sobre los Períodos de Bloqueo**
  - Una vez que bloqueas tu Bitcoin para hacer staking, este se vuelve inaccesible hasta que finalice el período de bloqueo. Teniendo en cuenta tus objetivos de inversión y tolerancia al riesgo, se recomienda seleccionar cuidadosamente el período de bloqueo. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte a duraciones más largas.
6. **Tipos de Direcciones de Bitcoin Compatibles**

  - El staking de BTC en Core es compatible con los siguientes formatos de direcciones de Bitcoin:

    | Tipo de Dirección                         | Prefijo | Ejemplo (hipotético)    |
    | ----------------------------------------- | ------- | ------------------------------------------ |
    | Legacy (P2PKH)         | 1       | 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY         |
    | Nested SegWit (P2SH)   | 3       | 3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6         |
    | Native SegWit (Bech32) | bc1     | bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080 |
    | Taproot (P2TR)         | bc1p    | bc1p5cyxnuxmeuwuvkwfem96lkw4rfd4x0dc9kwljz |

:::info
Ensure your BTC wallet uses one of the supported formats above when participating in Core’s Self-Custodial BTC staking. Always double-check your wallet address before staking.
:::

## Workflow of Self-Custodial BTC Staking

Self-custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn staking rewards. By locking your Bitcoin natively on the Bitcoin network through a time-bound mechanism, you can actively participate in the Core blockchain's consensus mechanism while staking. Here are the steps involved in this process.

1. **Initiate Staking:** Start by accessing either the [CLI-based BTC Staking Tool](https://github.com/coredao-org/btc-staking-tool) (for technical users) or the [web-based staking platform](https://stake.coredao.org/) (for general users).
2. **Stake Bitcoin with Time-Lock:** You stake your Bitcoin by sending a transaction on the Bitcoin network with a time-lock parameter, and your Bitcoin remains locked until the specified period ends. Ensure you follow the requirements for a transaction to be valid and eligible; refer [here](../btc-staking/design.md) for more details.
  1. **Minimum staking duration depends on the method choosen for staking.** The official website UI requires a 5-day minimum, while the script has no lockup requirement. Therefore, make sure to thoughtfully select your lockup periods.
  2. Include the Core Validator Address to delegate your assets.
  3. Include the Core wallet address for rewards.
3. **Vote for Validators:** By including the address of the Core Validators in your transaction, you can delegate your staked Bitcoin to the chosen validator on the Core blockchain.
4. **Connect a Core wallet for rewards:** In the return field, verify your Core wallet address; you'll receive CORE token rewards at this address.
5. **Claiming Rewards:** Accrued CORE token rewards will also appear on the [staking site](http://stake.coredao.org/). CORE token rewards will appear when users connect their wallets, and can be claimed daily. Also, to be eligible to earn rewards, it is required to complete a full staking round (00:00:00 - 23:59:29 UTC).
6. **Redeem Bitcoin:** Once the staking lock time expires, the staked Bitcoin will remain idle in the staking address until redeemed by the user.

## Self-Custodial Bitcoin Staking Walkthrough

To begin staking your Bitcoin on the Core blockchain and earn staking rewards in CORE tokens, follow the steps detailed below to stake Bitcoin through Core's official [staking website](http://stake.coredao.org/).

### Connect Core Wallet

1. Visit [https://stake.coredao.org](https://stake.coredao.org/) and click on **Validators** on the top header.

2. Click **Connect Wallet** in the top right corner of the header to connect your Core wallet. From the supported list of wallets, choose your desired Core wallet. For this walkthrough, we have used MetaMask.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-1.png)
</p>

3. Confirm the wallet notification to allow to connect to the staking website.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-2.png)
</p>

### Selecting a Core Validator for Bitcoin Delegation

4. Once on the **Validators** page, scroll down to view the list of Core Validators and choose the Validator to whom you wish to delegate your Bitcoins. Please ensure to choose active validators.

<p align="center" >
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-3.png)
</p>

5. By clicking on the name of the desired validator, you will be directed to the **Validator Details** page. This page displays details about the staking/delegation records for the selected validator.

<p align="center">
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-4.png)
</p>

6. Click on the **Stake** button, then select **BTC**

<p align="center"  style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-5.png)
</p>

7. To connect your Bitcoin wallet, click on the supported wallet of your choice. For this walkthrough, we selected Unisat.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-6.png)
</p>

8. Once your Bitcoin wallet is connected, it's important to understand and specify several key parameters:

- Specifying the amount of Bitcoin you’d like to delegate
  - The minimum amount to delegate is 0.01 Bitcoin, if delegating through the official website UI.
  - In our example, we will be delegating 0.05 Bitcoin, which satisfies this requirement
- Setting the lock time determines when your staked Bitcoin will be unlocked and available again for redemption or re-delegation.
  - Select inside the lock time box to input values, or click on the calendar icon to select the date and click ‘OK’ to proceed.
  - The default lock time is set to a month in advance.
- Specify the network priority speed for your transaction

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-7.png)
</p>

9. Note that the **Reward Address on Core** is pulled from the connected Core wallet. You should connect the Core wallet with the same address on which you want to receive staking rewards in CORE tokens.
10. Click **Confirm** to complete the transaction.

:::note
Note: For BTC staking, transferring the staking validator will interrupt staking, resulting in the loss of rewards for that day.
:::

### Confirm OP_Return Output

11. Before signing the transaction in your wallet, verify the transaction outputs to ensure they include an OP_Return output. The OP_Return output is where your redeem_script is saved and is essentially used to redeem your staked Bitcoin. There may be two or three outputs, but at least one should always be OP_Return. Abort the transaction if it doesn't include the OP_Return output.

<p align="center" style={{zoom:"80%"}}>
![dual-staking-on-core](../../../static/img/dual-staking/dual-staking-15.png)
</p>

12. Once you confirm the transaction, you will receive a **Transaction Submitted** notification. You can verify your transaction by clicking **View on BTC Explore**.

<p align="center" >
![btc-staking-on-core](../../../static/img/native-staking/native-staking-13.avif)
</p>

### Verify BTC Staking Address

13. Before proceeding to confirm your staking transaction. This verification feature allows users to independently verify their BTC staking address, helping prevent blind signing and enhance the security of the staking process.

14. To proceed with verification, click on the **Verify the BTC Staking Address** button. This will navigate you to the external website.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

15. On the Verification Website UI, ensure that the fetched data is correct and then click on the _Submit_ button.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/external-verification-UI.png)
</p>

16. The verification result will appear in the **Verification Result** section.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

17. Once verified, navigate back to stake.coredao.org and continue by clicking on **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../static/img/btc-staking/approve-tx.png)
</p>

### Viewing Staking Records

18. In the top right corner of the staking website, hover over your connected wallet and click **My Staking**.

<p align="center">
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

19. The **My Staking** page displays records of all your staking (CORE, BTC, and hash). Click on the **BTC Records** tab to show details of your BTC delegations.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-9.png)
</p>

**Congratulations,** you have successfully staked your Bitcoin on the Core blockchain and will now actively earn CORE tokens from your delegated Bitcoin. Through staking Bitcoin and helping to elect validators on Core, you actively contribute to the security of the Core network, supporting its decentralization and stability.
