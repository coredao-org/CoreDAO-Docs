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

En la imagen siguiente, verá que puede elegir diferentes versiones del compilador Solidity. Recomendamos utilizar las versiones más nuevas y estables de Solidity, como la v0.8.7. También puede elegir si desea habilitar la compilación automática u ocultar las advertencias.

<p align="center">
![remix-ide](../../static/img/remix/remix-2.avif)
</p>

Puede elegir diferentes entornos en Remix, como se muestra en la imagen a continuación. Un entorno es simplemente la red blockchain con la que trabajará. Hay máquinas virtuales (VM) integradas, así como proveedores que le permiten conectarse a VM externas.

Para conectarse a Core Testnet, elija `Proveedor inyectado - MetaMask`. Make sure your MetaMask wallet is [configured for Core Tesnet](./core-wallet-config.md) using the testnet chain settings, and verify that your account is funded from the appropriate faucet based ont eh Core testnet your are connectede to. Consulte [aquí](https://scan.test.btcs.network/faucet) para Core Testnet (1115) y [aquí](https://scan.test2.btcs.network/faucet) para Core Testnet (1114).\`.

<p align="center">
![remix-ide](../../static/img/remix/remix-3.avif)
</p>

Se le pedirá que se conecte a MetaMask. Una vez conectado, Remix muestra la dirección conectada y la cantidad de CORE que contiene la dirección, como se ve a continuación:

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-4.avif)
</p>

## Compilación e implementación de contratos inteligentes

- **Asegúrese de que su contrato inteligente siga las [Pautas de soporte de solidez para Core Blockchain](./smart-contract-guidelines.md)**.

- Remix viene con varios contratos preestablecidos predeterminados cargados en el espacio de trabajo predeterminado, como se muestra a continuación. Para este tutorial, usaremos el contrato `1_Storage.sol` precargado. Este contrato implementa una base de datos simple que nos permite almacenar un número mediante la función `store()` y verlo mediante la función `retrieve()`.

<p align="center">
![remix-ide](../../static/img/remix/remix-5.avif)
</p>

- From the menu on the left, navigate to the `SOLIDITY COMPILER`, navigate to `Advance Configurations` and select `shanghai` from the `EVM Version` dropdown.

<p align="center" style={{zoom:"60%"}}>
![evm-version](../../static/img/solidity-support/remix-setting.png)
</p>

:::note
If you're using Testnet1, ensure that the EVM version is set to Paris
:::

- Luego seleccione el botón azul **Compilar** para compilar su contrato inteligente.

- Luego cambie a `Implementar y ejecutar transacciones` en el mismo menú de la izquierda y seleccione el botón **Implementar**, resaltado en rojo a continuación.

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

Una vez implementado su contrato, puede usar Remix para interactuar con él de manera rápida e intuitiva.

Ubique el contrato recién implementado en la sección "Contratos implementados" ubicada en la parte inferior izquierda. Probemos nuestro contrato ingresando "100" en el campo de entrada de la función "almacenar" y seleccionando el botón naranja **almacenar**.

<p align="center">
![remix-ide](../../static/img/remix/remix-9.avif)
</p>

MetaMask nos volverá a pedir que firmemos y enviemos la transacción.

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-10.png)
</p>

After successfully storing `100` in our smart contract, we can use the `retrieve` function to read the value. Haga clic en el botón **recuperar** para ver el valor y deberíamos ver el número "100" devuelto, como se muestra a continuación en el cuadro azul.

Es posible que hayas notado que MetaMask no aparecía para la llamada a la función `recuperar`; Esto se debe a que las _transacciones_ solo son necesarias para las interacciones de contratos inteligentes que requieren gas, y la lectura de datos de un contrato inteligente no requiere gas.

<p align="center">
![remix-ide](../../static/img/remix/remix-11.avif)
</p>

## Core Scan

Let's use [Core Scan](https://scan.test2.btcs.network/) to check on our deployed contract.

- **Copy the contract address** from Remix and use it as the input for a search on Core Scan.
- Debería encontrar el contrato inteligente junto con información relevante, además de una lista de todas las interacciones históricas del contrato que incluye nuestra transacción de implementación y nuestra transacción de "tienda".

<p align="center">
![remix-ide](../../static/img/remix/remix-12.avif)
</p>