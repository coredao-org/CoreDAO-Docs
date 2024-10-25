---
sidebar_label: Staking Bitcoin on Core
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking

This technical guide is designed to walk you through the process of staking your Bitcoin on the Core blockchain to earn CORE token rewards. With Non-Custodial Bitcoin Staking, you can earn passive yield in CORE while retaining ownership of your Bitcoin assets. Profundicemos en cómo funciona y cómo puedes empezar a apostar hoy.

## Requisitos previos

Se debe cumplir lo siguiente antes para poder completar esta guía:

1. **Xverse y/o Unisat Wallet(s):** Deberá agregar a [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\&authuser =1) y/o billetera(s) [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) a través de la extensión del navegador Chrome, para participar en el proceso de participación. (_Debe utilizar una computadora de escritorio; las billeteras móviles y de hardware no son compatibles en este momento_)

2. **Core Wallet Address for Rewards:** Prepare your Core wallet address where you will receive Core token rewards for staking your Bitcoin. Si no tiene una dirección de billetera Core, puede crear una fácilmente conectándose a MetaMask.

**1. Agregar la red Core a MetaMask a través de Core Explorer:**

- Vaya a [coredao.org](http://coredao.org) y desplácese hasta el final de la página

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-1.avif)

- Haga clic en el botón "Agregar Core Network"
- Aprobar en tu MetaMask

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-2.png)

2. Alternativamente, puede usar esta guía: [Agregar Core a MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce) para obtener una guía paso a paso más detallada para completar manualmente la información de la red.

## Antes de comenzar a apostar

Let's clarify the staking mechanism, so you know what to expect going into Non-Custodial Bitcoin Staking.

1. **Minimum of 0.01 Bitcoin + Gas Fee**

   - **Why is this necessary:** To create a smooth staking experience, you need to have a minimum of **0.01 Bitcoin** available along with the necessary gas fee required for executing transactions on the Bitcoin network. Las tarifas del gas cubren el costo de procesar transacciones en blockchain. Additionally, we recommend having at least **0.05 Bitcoin** if staking for less than **1 month**. Este colchón tiene en cuenta la posible congestión de la red, donde los precios de las transacciones del gas pueden exceder la recompensa de apuesta obtenida.

2. **Comprensión de las diferencias en las direcciones de apuesta**

   - **Qué está pasando:** Es posible que notes que la dirección de participación proporcionada difiere de tu dirección de Bitcoin original.
   - **What it means:** The staking address is derived from your wallet's master private key, upholding your control and security over your assets. Su Bitcoin permanece almacenado de forma segura en la dirección de apuesta controlada por su clave privada, sin verse afectado por la apuesta. Estamos trabajando activamente con socios de billetera para respaldar esta visualización de sus activos de manera oportuna.
   - Puede ver sus fondos apostados buscando la dirección de depósito en un explorador de Bitcoin. [Mempool.space](https://mempool.space/) es una opción que recomendamos. Estamos trabajando activamente para que los activos apostados sean visibles en la billetera.

3. **Consideraciones para los períodos de bloqueo**

   - **Recordatorio importante:** Una vez que bloquees tu Bitcoin para apostar, será inaccesible hasta que concluya el período de apuesta.
   - **Elegir sabiamente:** Le recomendamos seleccionar cuidadosamente su período de bloqueo, teniendo en cuenta sus objetivos de inversión y tolerancia al riesgo. Comenzar con períodos de bloqueo más cortos puede ayudarle a familiarizarse con el proceso antes de comprometerse con duraciones más largas.

   These prompts aim to provide clarity and confidence as you embark on your Non-Custodial Bitcoin Staking journey. Su comprensión y preparación son clave para una experiencia de apuesta exitosa. Ahora, vamos a guiarlo a través del proceso paso a paso para apostar su Bitcoin en la cadena de bloques Core y obtener recompensas de tokens Core.

## How Non-custodial Bitcoin Staking Works

### Descripción general del proceso de apuesta

Non-Custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn rewards. Al bloquear su Bitcoin dentro de la red original a través de un mecanismo de duración determinada, puede participar activamente en el mecanismo de consenso de la cadena de bloques central mientras realiza apuestas. Estos son los pasos involucrados en este proceso.

1. **Initiate Staking:** Start by accessing the staking platform using either the [command line interface for technical users](https://github.com/coredao-org/btc-staking-tool) or the web-based frontend for general users [https://stake.coredao.org](https://stake.coredao.org)
2. **Stake Bitcoin with Time-Lock:** Stake your Bitcoin by sending a transaction on the Bitcoin network with a time-lock parameter, so that your Bitcoin remains locked until the specified period ends. El período mínimo de apuesta es de **10 días**.
3. **Vote for Validators:** Delegate your staked Bitcoin to the chosen validator on the Core blockchain.
4. **Connect a Core wallet for rewards:** Verify your Core address in the return field, where you'll receive Core token rewards.
5. **Reclamación de recompensas:** Las recompensas de tokens principales aparecerán cuando los usuarios conecten su billetera y se podrán reclamar diariamente. Core token rewards will appear on the [staking site](http://stake.coredao.org/).
6. **Redeem Bitcoin:** Once the staking lock time expires, the staked Bitcoin will remain idle in the staking address until redeemed by the user.

## Non-Custodial Bitcoin Staking Walkthrough

To begin staking your Bitcoin on the Core blockchain and earn staking rewards in the form of CORE tokens, follow the steps detailed below to stake Bitcoin through Core's official [staking website](http://stake.coredao.org/).

### Conecte su billetera

Conectar su billetera es el primer paso para acceder a la plataforma de apuestas e iniciar el proceso de apuestas. This will enable you to interact with the Core blockchain and participate in Non-Custodial Bitcoin Staking.

1. Visite [https://stake.coredao.org](https://stake.coredao.org)

2. Una vez en el sitio web, ubique y haga clic en el botón "**Connect Wallet**".

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-3.avif)

3. **Elija una billetera disponible**

   - Si aún no tiene una billetera, consulte **[Core Wallet for Rewards](#prerequisitos)** en la sección de requisitos previos anterior.

4. **Choose a validator to delegate Bitcoin**

Here, we will be selecting a validator that we’d like to delegate our Bitcoin to. En el ejemplo que se muestra, elegiremos el Validador 4, pero usted es libre de elegir cualquier validador activo.

```
1. Haga clic en el nombre del validador elegido para seleccionar
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-4.avif)

```
2. Pase el cursor sobre Delegado y luego seleccione "BTC" en el menú desplegable
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-5.avif)

### Connect Bitcoin wallet

```
1. Upon selecting a validator to delegate Bitcoin in the previous step, you will be prompted to connect a Bitcoin wallet
```

:::info
En este ejemplo, demostramos el uso de Unisat Wallet, pero también es compatible con Xverse Wallet. Make sure you have either of these two installed.
:::

```
2. En la pantalla emergente Connect wallet, seleccione una de las billeteras disponibles.
```

- Para desarrolladores y usuarios más avanzados que estén interesados ​​en utilizar la herramienta Stake, consulte [aquí](https://github.com/coredao-org/btc-s Taking-tool?tab=readme-ov-file)

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-6.png)

```
3. En la siguiente pantalla, haga clic en **Conectar**
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-7.avif)

### Delegate Bitcoin

Al iniciar el proceso de delegación, es importante comprender y especificar varios parámetros clave:

1. **Specifying the amount of Bitcoin you’d like to delegate**

- The minimum amount to delegate is **0.01 Bitcoin**
- In our example, we will be delegating **0.05 Bitcoin** which satisfies this requirement

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-8.avif)

2. **Setting the lock time** – this determines when your staked Bitcoin will be unlocked and available for use again on your local device.

- Seleccione el cuadro de tiempo de bloqueo interno para ingresar valores
- El tiempo de bloqueo predeterminado se establece con un mes de anticipación. El tiempo mínimo de bloqueo es **10 días.**
- En nuestro ejemplo, hemos seleccionado una fecha con 10 días de antelación (24 de abril)
- Haga clic en '**Aceptar**' para continuar

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-9.avif)

3. Especificación de la velocidad de prioridad de la red para su transacción

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-10.avif)

4. Finally, click ‘**Confirm Delegation**’ to **Delegate Bitcoin**

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-11.avif)

5. Antes de firmar la transacción en su billetera, verifique los resultados de la transacción para asegurarse de que incluya un resultado OP\_Return.  OP\_Return output is where your redeem\_script is saved and is essentially for redeeming your staked Bitcoin. Puede haber 2 o 3 salidas, pero al menos una de las salidas siempre debe ser OP\_Return. Cancele la transacción si no incluye la salida OP\_Return.

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-12.avif)

6. Verificar transacción enviada

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-13.avif)

5. Desde cualquier pantalla CORE, coloque el cursor sobre su billetera conectada en la esquina superior derecha y haga clic en "**Mi apuesta**".

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-14.png)

6. En la pantalla **Delegador**, busque la columna **BTC(x)** y haga clic.

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-15.avif)

7. Verifique que el validador elegido esté pendiente de confirmación de la transacción.

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-16.avif)

8. Verifique que el validador elegido diga "**Recompensa**" en "**Canjear** **Tiempo**".

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-17.avif)

**Congratulations.** You have succesfully staked your Bitcoin on the Core blockchain and will now actively earn CORE tokens from your delegated Bitcoin. Through staking Bitcoin and voting for validators, you actively contribute to the governance and security of the Core network, helping maintain its balance and decentralization.
