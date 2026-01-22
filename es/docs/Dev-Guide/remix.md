---
sidebar_label: Usando Remix
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core Chain usando Remix IDE
---

# Usando Remix

---

Remix es un potente entorno de desarrollo integrado (IDE) en línea para que los desarrolladores creen, prueben, implementen y administren contratos inteligentes. En este tutorial, usaremos [Remix IDE](https://remix.ethereum.org/) para implementar un contrato en Core Testnet.

## Conexión de Remix a Core Testnet

Navegue hasta [Remix IDE](https://remix.ethereum.org/) y verá un diseño similar al siguiente:

![remix-ide](../../static/img/remix/remix-1.avif)

En la imagen siguiente, verá que puede elegir diferentes versiones del compilador Solidity. Recomendamos utilizar las versiones más nuevas y estables de Solidity, como la v0.8.7. También puede elegir si desea habilitar la compilación automática u ocultar las advertencias.

![remix-ide](../../static/img/remix/remix-2.avif)

Puede elegir diferentes entornos en Remix, como se muestra en la imagen a continuación. Un entorno es simplemente la red blockchain con la que trabajará. Hay máquinas virtuales (VM) integradas, así como proveedores que le permiten conectarse a VM externas.

Para conectarse a Core Testnet, elija `Proveedor inyectado - MetaMask`. Asegúrese de que su billetera MetaMask esté [configurada para Core Tesnet] (./core-testnet-wallet-config.md) usando la configuración de la cadena testnet y verifique que su cuenta reciba fondos del [grifo] (https://scan. test.btcs.network/faucet).

![remix-ide](../../static/img/remix/remix-3.avif)

Se le pedirá que se conecte a MetaMask. Una vez conectado, Remix muestra la dirección conectada y la cantidad de CORE que contiene la dirección, como se ve a continuación:

![remix-ide](../../static/img/remix/remix-4.avif)

## Compilación e implementación de contratos inteligentes

- **Asegúrese de que su contrato inteligente siga las [Pautas de soporte de solidez de Core Chain](./smart-contract-guidelines.md)**.

- Remix viene con varios contratos preestablecidos predeterminados cargados en el espacio de trabajo predeterminado, como se muestra a continuación. Para este tutorial, usaremos el contrato `1_Storage.sol` precargado. Este contrato implementa una base de datos simple que nos permite almacenar un número mediante la función `store()` y verlo mediante la función `retrieve()`.

![remix-ide](../../static/img/remix/remix-5.avif)

- En el menú de la izquierda, navegue hasta "COMPILADOR DE SOLIDEZ", navegue hasta "Configuraciones avanzadas" y seleccione "París" en el menú desplegable "Versión EVM".

![evm-version](../../static/img/remix/remix-13.png)

- Luego seleccione el botón azul **Compilar** para compilar su contrato inteligente.

- Luego cambie a `Implementar y ejecutar transacciones` en el mismo menú de la izquierda y seleccione el botón **Implementar**, resaltado en rojo a continuación.

![remix-ide](../../static/img/remix/remix-6.avif)

- Después de seleccionar el botón **Implementar**, MetaMask abrirá una ventana emergente que le pedirá que firme y luego envíe la transacción de implementación en Core Testnet, como se ve a continuación.

![remix-ide](../../static/img/remix/remix-7.png)

- Una vez que el contrato se haya implementado correctamente, debería recibir un mensaje en la consola.

![remix-ide](../../static/img/remix/remix-8.avif)

## Interacción de contrato inteligente

Una vez implementado su contrato, puede usar Remix para interactuar con él de manera rápida e intuitiva.

Ubique el contrato recién implementado en la sección "Contratos implementados" ubicada en la parte inferior izquierda. Probemos nuestro contrato ingresando "100" en el campo de entrada de la función "almacenar" y seleccionando el botón naranja **almacenar**.

![remix-ide](../../static/img/remix/remix-9.avif)

MetaMask nos volverá a pedir que firmemos y enviemos la transacción.

![remix-ide](../../static/img/remix/remix-10.png)

Después de almacenar con éxito "100" en nuestro contrato inteligente, podemos usar la función "recuperar" para leer el valor. Haga clic en el botón **recuperar** para ver el valor y deberíamos ver el número "100" devuelto, como se muestra a continuación en el cuadro azul.

Es posible que hayas notado que MetaMask no aparecía para la llamada a la función `recuperar`; Esto se debe a que las _transacciones_ solo son necesarias para las interacciones de contratos inteligentes que requieren gas, y la lectura de datos de un contrato inteligente no requiere gas.

![remix-ide](../../static/img/remix/remix-11.avif)

## Core Scan

Usemos [Core Scan](https://scan.test.btcs.network/) para verificar nuestro contrato implementado. Copie la dirección del contrato de Remix y úsela como entrada para una búsqueda en Core Scan. Debería encontrar el contrato inteligente junto con información relevante, además de una lista de todas las interacciones históricas del contrato que incluye nuestra transacción de implementación y nuestra transacción de "tienda".

![remix-ide](../../static/img/remix/remix-12.avif)
