---
sidebar_label: Usando Remix
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core utilizando Remix IDE
---

# Usando Remix

---

Remix es un potente entorno de desarrollo integrado (IDE) en línea para que los desarrolladores creen, prueben, implementen y administren contratos inteligentes. En este tutorial, usaremos [Remix IDE](https://remix.ethereum.org/) para implementar un contrato en Core Testnet.

## Conexión de Remix a Core Testnet

Navegue hasta [Remix IDE](https://remix.ethereum.org/) y verá un diseño similar al siguiente:

<p align="center">
![remix-ide](../../static/img/remix/remix-1.avif)
</p>

En la imagen siguiente, verá que puede elegir diferentes versiones del compilador Solidity. We recommend using the newer, more stable versions of Solidity, such as `v0.8.24`. You can also choose whether to enable auto-compilation or hide warnings.

<p align="center">
![remix-ide](../../static/img/remix/remix-2.avif)
</p>

Puede elegir diferentes entornos en Remix, como se muestra en la imagen a continuación. Un entorno es simplemente la red blockchain con la que trabajará. Hay máquinas virtuales (VM) integradas, así como proveedores que le permiten conectarse a VM externas.

Para conectarse a Core Testnet, elija `Proveedor inyectado - MetaMask`. Make sure your MetaMask wallet is [configured for Core Testnet2](./core-wallet-config.md) using the testnet chain settings, and verify that your account is funded with tCORE2. Refer [here](https://scan.test2.btcs.network/faucet) for Core Testnet (1114) faucet.

<p align="center">
![remix-ide](../../static/img/remix/remix-3.avif)
</p>

Se le pedirá que se conecte a MetaMask. Una vez conectado, Remix muestra la dirección conectada y la cantidad de CORE que contiene la dirección, como se ve a continuación:

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-4.avif)
</p>

## Compilación e implementación de contratos inteligentes

- **Make sure that your smart contract follows the [Solidity Support Guidelines for Core blockchain](./smart-contract-guidelines.md)**.

- Remix viene con varios contratos preestablecidos predeterminados cargados en el espacio de trabajo predeterminado, como se muestra a continuación. Para este tutorial, usaremos el contrato `1_Storage.sol` precargado. This contract implements a simple database that allows us to store a single number using the `store()` function and retrieve it using the `retrieve()` function.

<p align="center">
![remix-ide](../../static/img/remix/remix-5.avif)
</p>

- From the menu on the left, navigate to the `SOLIDITY COMPILER`, navigate to `Advanced Configurations` and select `shanghai` from the `EVM Version` dropdown.

<p align="center" style={{zoom:"60%"}}>
![evm-version](../../static/img/solidity-support/remix-setting.png)
</p>

:::note
If you're using Core Testnet1, ensure that the EVM version is set to `paris`.
:::

- Luego seleccione el botón azul **Compilar** para compilar su contrato inteligente.

- Then switch to the `DEPLOY & RUN TRANSACTIONS` from the left panel menu and select the **Deploy** button, outlined in red below.

<p align="center">
![remix-ide](../../static/img/remix/remix-6.avif)
</p>

- Después de seleccionar el botón **Implementar**, MetaMask abrirá una ventana emergente que le pedirá que firme y luego envíe la transacción de implementación en Core Testnet, como se ve a continuación.

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-7.png)
</p>

- Una vez que el contrato se haya implementado correctamente, debería recibir un mensaje en la consola.

<p align="center">
![remix-ide](../../static/img/remix/remix-8.avif)
</p>

## Interacción de contrato inteligente

Once your contract is deployed, you can use Remix to interact with it quickly and intuitively.

Ubique el contrato recién implementado en la sección "Contratos implementados" ubicada en la parte inferior izquierda. Probemos nuestro contrato ingresando "100" en el campo de entrada de la función "almacenar" y seleccionando el botón naranja **almacenar**.

<p align="center">
![remix-ide](../../static/img/remix/remix-9.avif)
</p>

MetaMask will prompt us to sign and send the transaction again.

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-10.png)
</p>

Después de almacenar con éxito `100` en nuestro contrato inteligente, podemos usar la función `retrieve` para leer el valor. Click the **Retrieve** button to view the value, and we should see the number `100` returned, as shown in the blue box below.

Es posible que hayas notado que MetaMask no aparecía para la llamada a la función `recuperar`; Esto se debe a que las _transacciones_ solo son necesarias para las interacciones de contratos inteligentes que requieren gas, y la lectura de datos de un contrato inteligente no requiere gas.

<p align="center">
![remix-ide](../../static/img/remix/remix-11.avif)
</p>

## Core Scan

Usemos [Core Scan](https://scan.test2.btcs.network/) para verificar nuestro contrato implementado.

- **Copie la dirección del contrato** de Remix y úsela como entrada para una búsqueda en Core Scan.
- Debería encontrar el contrato inteligente junto con información relevante, además de una lista de todas las interacciones históricas del contrato que incluye nuestra transacción de implementación y nuestra transacción de "tienda".

<p align="center">
![remix-ide](../../static/img/remix/remix-12.avif)
</p>