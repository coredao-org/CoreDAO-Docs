---
sidebar_label: Staking Bitcoin en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking de Bitcoin No Custodial

This user guide is designed to walk you through staking your Bitcoin on the Core blockchain to earn CORE token rewards. With Non-Custodial Bitcoin Staking, you can earn passive yield in CORE while retaining complete ownership of your Bitcoin assets. Vamos a profundizar en cómo funciona y cómo puedes comenzar a hacer staking hoy.

## Requisitos Previos

To be able to stake, you must have the following prerequisites:

1. **Supported Bitcoin Wallet Browser Extension:** To participate in the BTC staking process, you must install browser extensions of any supported Bitcoin wallets, like [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), and/or [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (visit stake.coredao.org for the latest supported wallets). You must use a desktop version, as mobile and hardware wallets are not currently supported. You can also stake directly using the Element wallet mobile application as well.
2. **Core Wallet Address for Rewards:** Prepare your Core wallet address to receive CORE token rewards for staking Bitcoin. If you do not have a Core wallet address, you can quickly create one by connecting to MetaMask. For more information on configuring MetaMask to work with the Core network, follow the detailed guide [here](https://docs.coredao.org/docs/Dev-Guide/core-mainnet-wallet-config).

## **Key Considerations For BTC Staking**

The following are some key points that users should be careful about when staking their Bitcoin on Core.

1. **Minimum of 0.01 Bitcoin \+ Gas Fee:** To successfully stake your Bitcoin on Core, you need a minimum of 0.01 Bitcoin. In addition to the staking amount, users should consider the necessary gas fees in Bitcoin for executing transactions on the Bitcoin network. If you plan to stake for less than a month, having at least 0.05 Bitcoin is advisable. This extra amount helps cover potential network congestion, which can lead to higher gas prices than the rewards earned from staking.
2. **Understanding the Differences in Bitcoin Staking Addresses:**
   - The staking address in your Bitcoin wallet's transaction prompt may differ from your original Bitcoin address. This is because the Bitcoin staking address is derived from your Bitcoin wallet's master private key, ensuring control and security over your assets. Your Bitcoin remains safe in the Bitcoin staking address, unaffected by staking.
3. **Delays in Locked Assets to Appear in your Bitcoin Wallet:**
   - You may face some delays before your locked Bitcoin is displayed in your Bitcoin wallets. This delay primarily results from delays in transaction confirmation on the Bitcoin network, which can take several hours due to block time, the number of block confirmations required, and network congestion.
   - While we are actively working with wallet partners to support the timely display of your assets in your wallets, you can check your locked assets on the ”MyStaking” page on Core’s staking website.
   - You can also view your staked funds by searching the staking address on a Bitcoin explorer, [Mempool.space](https://mempool.space/).
4. **Consideraciones para los Períodos de Bloqueo**
   - Once you lock your Bitcoin for staking, it's inaccessible until the staking period concludes. Considering your investment objectives and risk tolerance, you are advised to select your locking period thoughtfully. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte a períodos más largos.

## Workflow of Non-Custodial BTC Staking

Non-custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn staking rewards. By locking your Bitcoin natively on the Bitcoin network through a time-bound mechanism, you can actively participate in the Core blockchain's Consensus mechanism while staking. Aquí están los pasos involucrados en este proceso.

1. **Initiate Staking:** Start by accessing either the [CLI-based BTC Staking Tool](https://github.com/coredao-org/btc-staking-tool) (for technical users) or the [web-based staking platform](https://stake.coredao.org/) (for general users).
2. **Stake Bitcoin with Time-Lock:** You stake your Bitcoin by sending a transaction on the Bitcoin network with a time-lock parameter, and your Bitcoin remains locked until the specified period ends. Ensure you follow the requirements for a transaction to be valid and eligible; refer [here](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.mwjq55dgslw5) for more details.
   1. The minimum staking period is 10 days.
   2. Include the Core Validator Address to delegate your assets.
   3. Include the Core wallet address for rewards.
3. **Vote for Validators:** By including the address of the Core Validators in your transaction, you can delegate your staked Bitcoin to the chosen validator on the Core blockchain.
4. **Connect a Core wallet for rewards:** In the return field, verify your Core wallet address; you'll receive CORE token rewards at this address.
5. **Claiming Rewards:** Accrued CORE token rewards will also appear on the [staking site](http://stake.coredao.org/). CORE token rewards will appear when users connect their wallets, and can be claimed daily.
6. **Redimir Bitcoin:** Una vez que expire el tiempo de bloqueo del staking, el Bitcoin bloqueado permanecerá inactivo en la dirección de staking hasta que sea redimido por el usuario.

## Guía Paso a Paso para el Staking de Bitcoin No Custodial

Para comenzar a hacer staking de tu Bitcoin en la blockchain de Core y ganar recompensas de staking en tokens CORE, sigue los pasos detallados a continuación para hacer staking de Bitcoin a través del [sitio web oficial de staking](http://stake.coredao.org/) de Core.

### Conectar la Cartera de Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Validators** en el encabezado superior.

2. Haz clic en **Connect Wallet** en la esquina superior derecha del encabezado para conectar tu cartera de Core. De la lista de carteras soportadas, elige la cartera de Core que desees. Para esta guía, hemos usado Metamask.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-1.png)
</p>

3. Confirma la notificación de la cartera para permitir la conexión con el sitio web de staking.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-2.png)
</p>

### Seleccionar un Validador de Core para Delegar Bitcoin

4. Una vez en la página de **Validators**, desplázate hacia abajo para ver la lista de Validadores de Core y elige el Validador al que deseas delegar tus Bitcoins. Asegúrate de elegir validadores activos.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-3.png)
</p>

5. Al hacer clic en el nombre del validador deseado, serás dirigido a la página de **Detalles del Validador**. Esta página muestra detalles sobre los registros de staking/delegación para el validador seleccionado.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-4.png)
</p>

6. Haz clic en el botón **Stake**, luego selecciona **BTC**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-5.png)
</p>

7. Para conectar tu cartera de Bitcoin, haz clic en la cartera soportada de tu elección. Para esta guía, seleccionamos Unisat.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-6.png)
</p>

8. Una vez que tu cartera de Bitcoin esté conectada, es importante entender y especificar varios parámetros clave:

- Especifica la cantidad de Bitcoin que deseas delegar. La cantidad mínima para delegar es **0.01 Bitcoin**.
- Configurar el tiempo de bloqueo determina cuándo tu Bitcoin apostado será desbloqueado y estará disponible nuevamente para su redención o redelegación.
  - Puedes ingresar valores seleccionando dentro del cuadro de tiempo de bloqueo o haciendo clic en el ícono del calendario para seleccionar la fecha y luego hacer clic en "OK" para continuar.
  - El tiempo de bloqueo predeterminado está configurado para un mes en adelante. El tiempo de bloqueo mínimo es **10 días**.
- Especifica la velocidad de prioridad de la red para tu transacción.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-7.png)
</p>

9. Ten en cuenta que la **Dirección de Recompensa en la Cadena de Core** se extrae de la cartera de Core conectada. Debes conectar la cartera de Core con la misma dirección en la que deseas recibir las recompensas de staking en tokens CORE.
10. Haz clic en **Confirmar** para completar la transacción.

### Confirmar Salida OP\_Return

11. Antes de firmar la transacción en tu cartera, verifica las salidas de la transacción para asegurarte de que incluyan una salida OP\_Return. La salida OP\_Return es donde se guarda tu redeem\_script y se usa esencialmente para redimir tu Bitcoin apostado. Puede haber dos o tres salidas, pero al menos una debe ser siempre OP\_Return. Aborta la transacción si no incluye la salida OP\_Return.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

12. Una vez que confirmes la transición, recibirás una notificación de **Transacción Enviada**. Puedes verificar tu transacción haciendo clic en **Ver en BTC Explore**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/native-staking-13.avif)
</p>

### Ver Registros de Staking

13. En la esquina superior derecha del sitio web de staking, pasa el cursor sobre tu cartera conectada y haz clic en **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

14. La página **My Staking** muestra los registros de todos tus stakings (CORE, BTC y hash). Haz clic en la pestaña **BTC Records** para ver detalles de tus delegaciones de BTC.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-9.png)
</p>

**¡Felicidades!** Has apostado con éxito tu Bitcoin en la blockchain de Core y ahora ganarás activamente tokens CORE por tu Bitcoin delegado. Al hacer staking de Bitcoin y votar por validadores en Core, contribuyes activamente a la gobernanza y seguridad de la red Core, apoyando su descentralización y estabilidad.
