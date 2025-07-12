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

En la imagen siguiente, verá que puede elegir diferentes versiones del compilador Solidity. Recomendamos usar versiones más nuevas y estables de Solidity, como la `v0.8.24`. También puedes elegir si habilitar la compilación automática o ocultar las advertencias.

<p align="center">
![remix-ide](../../static/img/remix/remix-2.avif)
</p>

Puede elegir diferentes entornos en Remix, como se muestra en la imagen a continuación. Un entorno es simplemente la red blockchain con la que trabajará. Hay máquinas virtuales (VM) integradas, así como proveedores que le permiten conectarse a VM externas.

Para conectarse a Core Testnet, elija `Proveedor inyectado - MetaMask`. Asegúrate de que tu wallet MetaMask esté [configurada para Core Testnet2](./core-wallet-config.md) usando la configuración de la cadena de testnet, y verifica que tu cuenta tenga fondos en tCORE2. Consulta [aquí](https://scan.test2.btcs.network/faucet) el faucet de Core Testnet (1114).

<p align="center">
![remix-ide](../../static/img/remix/remix-3.avif)
</p>

Se le pedirá que se conecte a MetaMask. Una vez conectado, Remix muestra la dirección conectada y la cantidad de CORE que contiene la dirección, como se ve a continuación:

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-4.avif)
</p>

## Compilación e implementación de contratos inteligentes

- **Asegúrate de que tu smart contract cumpla con las [Directrices de Soporte de Solidity para la blockchain Core](./smart-contract-guidelines.md)**.

- Remix viene con varios contratos preestablecidos predeterminados cargados en el espacio de trabajo predeterminado, como se muestra a continuación. Para este tutorial, usaremos el contrato `1_Storage.sol` precargado. Este contrato implementa una base de datos simple que nos permite almacenar un número único usando la función `store()` y recuperarlo usando la función `retrieve()`.

<p align="center">
![remix-ide](../../static/img/remix/remix-5.avif)
</p>

- Desde el menú de la izquierda, navega a `SOLIDITY COMPILER`, ve a `Advanced Configurations` y selecciona `shanghai` en el desplegable de `EVM Version`.

<p align="center" style={{zoom:"60%"}}>
![evm-version](../../static/img/solidity-support/remix-setting.png)
</p>

:::note
Si estás usando Core Testnet1, asegúrate de que la versión de EVM esté configurada a `paris`.
:::

- Luego seleccione el botón azul **Compilar** para compilar su contrato inteligente.

- Luego cambia a `DEPLOY & RUN TRANSACTIONS` desde el menú del panel izquierdo y selecciona el botón **Deploy**, marcado en rojo abajo.

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

Una vez que tu contrato esté desplegado, puedes usar Remix para interactuar con él de forma rápida e intuitiva.

Ubique el contrato recién implementado en la sección "Contratos implementados" ubicada en la parte inferior izquierda. Probemos nuestro contrato ingresando "100" en el campo de entrada de la función "almacenar" y seleccionando el botón naranja **almacenar**.

<p align="center">
![remix-ide](../../static/img/remix/remix-9.avif)
</p>

MetaMask te pedirá firmar y enviar la transacción nuevamente.

<p align="center" style={{zoom:"40%"}}>
![remix-ide](../../static/img/remix/remix-10.png)
</p>

Después de almacenar con éxito `100` en nuestro contrato inteligente, podemos usar la función `retrieve` para leer el valor. Haz clic en el botón **Retrieve** para ver el valor, y deberías ver el número `100` retornado, como se muestra en el recuadro azul abajo.

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