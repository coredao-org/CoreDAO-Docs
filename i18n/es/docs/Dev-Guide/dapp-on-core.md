---
sidebar_label: Construya dApp en Core
hide_table_of_contents: false
sidebar_position: 2
description: Cree una dApp de pila completa en Core
---

# Construyendo dApp en Core

---

Las aplicaciones descentralizadas (dApps) utilizan una cadena de bloques o contratos inteligentes en cadena para almacenar y hacer referencia a datos, en lugar de depender de bases de datos centralizadas tradicionales. Una estructura de dApp simple y común generalmente consiste en una interfaz de usuario de React.js o Vue.js que utiliza Web3.js o Ethers.js para interactuar con contratos inteligentes implementados en una cadena de bloques compatible con EVM.

## ¿Qué estamos construyendo?

En este tutorial, desarrollaremos una dApp simple usando React.js y Ethers.js que almacena datos en un contrato inteligente en Core blockchain y los muestra a los usuarios. El código completo de la dApp está disponible en GitHub en el repositorio [dApp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master/01-Simple%20Storage%20Full%20Stack%20Dapp).

## Conclusiones del aprendizaje

Este tutorial le ayudará a adquirir conocimientos sobre los siguientes puntos de aprendizaje:

- Conectividad de MetaMask Wallet a Core Testnet;
- Desarrollo e implementación de contratos inteligentes en Core Testnet;
- Integración front-end con el contrato inteligente utilizando la biblioteca Ethers.js;
- Leer datos de un contrato inteligente;
- Escribir datos en un contrato inteligente;

## Requisitos previos del software

- [Git](https://git-scm.com/) v2.44.0
- [Node.js](https://nodejs.org/en) v20.11.1
- [Node.js](https://nodejs.org/en) v20.11.1
- [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) v10.2.4
- [MetaMask Web Wallet Extension](https://metamask.io/download/)

## Configurar el entorno de desarrollo

1. Cree un nuevo directorio para el proyecto y navegue hasta él.

```bash
mkdir dapp-tutorial
cd dapp-tutorial
```

2. Install [Hardhat](https://hardhat.org/) and [Waffle](https://getwaffle.io/)

```bash
npm init --yes
npm install --save-dev hardhat
npm install --save-dev chai @nomiclabs/hardhat-waffle
```

3. Inicialice el proyecto Hardhat ejecutando el siguiente comando

```bash
npx hardhat
```

<p align="center">
![harhat-project-initialize](../../static/img/hardhat/dapp-tutorial-1.png)
</p>

:::note
Como usaremos Waffle para este proyecto y nos aseguraremos de seleccionar **No** para la opción "_¿Desea instalar las dependencias de este proyecto de muestra con npm (@nomicfoundation/hardhat-toolbox)? (Y/n)_"
:::

4. Una vez que se inicializa este proyecto, encontrará la siguiente estructura de proyecto:

```bash
dapp-tutorial.
|   .gitignore
|   hardhat-config.js   (Hardhat configuration file.)
|   package-lock.json
|   package.json
|   README.md
|
+---contracts (For Solidity Smart Contracts)
|       Lock.sol
|
+---ignition (Scripts in previous versions, this folder contains configuration files that specify how smart contracts should be deployed)
|   \---modules
|           Lock.js
|
+---node_modules
|
+---test (For writing and Running Tests)
|       Lock.js
|
```

5. Instale y configure MetaMask Chrome Extension para usar con Core Testnet. Consulte [aquí](./core-wallet-config.md) para obtener una guía detallada.

6. Cree un archivo secret.json en la carpeta raíz y almacene en él la clave privada de su billetera MetaMask. Consulte [aquí](https://support.metamask.io/configure/accounts/how-to-export-an-accounts-private-key/) para obtener detalles sobre cómo obtener la clave privada de la cuenta de MetaMask.

```json
{
  "PrivateKey": "you private key, do not leak this file, do keep it absolutely safe"
}
```

:::caution
No olvide agregar este archivo al archivo `.gitignore` en la carpeta raíz de su proyecto para no verificar accidentalmente sus claves privadas/frases secretas en un repositorio público. ¡Asegúrese de guardar este archivo en un lugar absolutamente seguro!
:::

7. Copie lo siguiente en su archivo `hardhat.config.js`

```js
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const { PrivateKey } = require("./secret.json");

module.exports = {
  defaultNetwork: "testnet",

  networks: {
    hardhat: {},
    testnet: {
      url: "https://rpc.test2.btcs.network",
      accounts: [PrivateKey],
      chainId: 1114,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
```

## Redacción de contratos inteligentes

1. Navegue a la carpeta `contratos` en el directorio raíz de su proyecto.
2. Elimine el archivo `Lock.sol`; cree un nuevo archivo `Storage.sol` y pegue el siguiente contenido en él.

```javascript
// SPDX-License-Identifier: GPL-3.0


pragma solidity >=0.8.0 <0.8.24;


/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {


    uint256 number;


    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }


    /**
     * @dev Return value
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
```

### Explicación

El contrato de "Almacenamiento" es un ejemplo simple que demuestra cómo almacenar y recuperar un valor usando un contrato inteligente de Solidity. Consiste en una variable de estado para contener el valor y dos funciones para actualizar y leer este valor. La función "almacenar" permite a cualquier usuario establecer el valor, mientras que la función "recuperar" permite a cualquier usuario leer el valor actual. Este contrato puede resultar útil para comprender los conceptos básicos de las variables de estado y la visibilidad de funciones en Solidity. Este contrato inteligente de Solidity, denominado "Almacenamiento", es un contrato simple que permite almacenar y recuperar un único valor "uint256". Aquí hay un desglose detallado de sus componentes y funcionalidad:

#### Componentes del contrato

1. **Variable de estado**:
  - `number`: una variable `uint256` que se utiliza para almacenar el valor.

#### Funciones del contrato

1. **Función de tienda**:

  - `store(uint256 num) public`: una función que permite a los usuarios almacenar un nuevo valor en la variable `number`. Esta función toma un solo parámetro, "num", que es el valor que se almacenará. La función actualiza la variable `número` con el valor proporcionado.
  - **Visibilidad**: la función está marcada como "pública", lo que significa que cualquier usuario o contrato puede llamarla.
  - **Cambio de estado**: Esta función modifica el estado del contrato actualizando la variable `número`.

2. **Función de recuperación**:
  - `retrieve() public view return (uint256)`: una función que devuelve el valor actual almacenado en la variable `number`. Esta función no toma ningún parámetro y devuelve un valor `uint256`.
  - **Visibilidad**: la función está marcada como "pública", lo que significa que cualquier usuario o contrato puede llamarla.
  - **Ver**: La función está marcada como `ver`, lo que indica que no modifica el estado del contrato. Sólo lee el estado.
  - **Valor de retorno**: La función devuelve el valor de la variable "número".

## Compilación de contrato inteligente

1. Para compilar el contrato inteligente `Storage` definido en `Storage.sol`, desde el directorio raíz ejecute el siguiente comando

```bash
npx hardhat compile
```

## Implementar e interactuar con contratos inteligentes

1. Antes de implementar su contrato inteligente en Core, es mejor ejecutar primero una serie de pruebas para asegurarse de que el contrato inteligente esté funcionando como se desea. Consulte la guía detallada [aquí](https://docs.coredao.org/docs/Dev-Guide/hardhat#contract-testing) para obtener más detalles.

2. Cree una carpeta `scripts` en el directorio raíz de su proyecto. Dentro de esta carpeta, cree un archivo `deploy-and-call.js`; pegue el siguiente script en él.

```javascript
const hre = require("hardhat");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  await storage.deployed();
  console.log("Storage contract deployed to:", storage.address);

  console.log("call retrieve():", await storage.retrieve());

  console.log("call store(), set value to 100");
  const tx = await storage.store(100);
  await tx.wait();

  console.log("call retrieve() again:", await storage.retrieve());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

3. Asegúrate de que tu wallet MetaMask tenga tokens de prueba tCORE2 para Core Testnet. Consulta [aquí](./core-wallet-config.md) para más detalles sobre cómo obtener tokens tCORE2 desde el Core Faucet.

4. Ejecute el siguiente comando desde el directorio raíz de su proyecto para implementar su contrato inteligente en la cadena de bloques Core.

```bash
npx hardhat run scripts/deploy-and-call.js
```

Si se implementa correctamente, obtendrá el siguiente resultado

```bash
npx hardhat run scripts/deploy-and-call.js
```

5. Asegúrese de guardar la dirección del contrato de almacenamiento en el que se implementa, como se obtuvo anteriormente, esto se usará para interactuar con el contrato inteligente desde la interfaz de la dApp.

🎉¡Felicitaciones! Ha aprendido con éxito cómo crear, compilar e implementar un contrato inteligente en Core Testnet utilizando Hardhat.

## Interactuar con Smart Contract a través del Frontend

Creemos una interfaz frontal para interactuar con el contrato inteligente.

### Configurando la interfaz

1. Clona el repositorio `dApp-tutorial` de GitHub usando el siguiente comando.

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
```

2. Navegue a la carpeta `01-Basic Full Stack Dapp on Core` en el repositorio clonado `dapp-tutorial`.

```bash
cd dapp-tutorial
cd "01-Basic Full Stack Dapp on Core"
```

3. Instale todas las dependencias, es decir, módulos de nodo.

```bash
npm install
```

4. Para probar si todo funciona bien, ejecute la aplicación usando el siguiente comando. Esto servirá la aplicación con función de recarga en caliente en [http://localhost:5173]

```bash
npm run dev
```

### Implementaciones clave

La lógica clave de blockchain de la aplicación se implementa en [App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/ aplicación.tsx)

1. [App.tsx (Cartera)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L20): lógica para conectar la aplicación a la billetera MetaMask.
2. [App.tsx (Tienda)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L58): lógica para escribir datos en el contrato inteligente de almacenamiento.
3. [App.tsx (Recuperar)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L87): lógica para leer datos del contrato inteligente de almacenamiento.

### Agregar detalles de contrato inteligente

1. Copie el archivo `Storage.sol` de la carpeta `contracts` en la raíz de su proyecto y péguelo en la carpeta `frontend/src/contracts`.
2. Copie la dirección del contrato inteligente de almacenamiento obtenida en la sección [arriba](#deploy-and-interact-with-smart-contract).
3. Pegue esto en la [Línea 10 de App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L10).

```javascript
const contractAddress = "0x48F68BF4A1b1fE6589B9D0a5ad0dF0520582edA2";
```

4. Además, necesitaremos los metadatos de ABI para interactuar con el contrato desde nuestra dApp. Desde la carpeta `artifacts/contracts` en la raíz de su proyecto. Copie el archivo `Storage.json` y guárdelo en la carpeta `/src/contracts`.

## Pruebe localmente usando MetaMask

1. Ejecute el comando `npm run dev` desde la raíz del proyecto para iniciar la aplicación. Esto servirá para la aplicación en [http://localhost:5173](http://localhost:5173/)

2. Asegúrese de que su billetera MetaMask esté correctamente instalada y cambiada a Core Testnet como se describe en nuestra [guía del usuario de Core Testnet] (./core-wallet-config.md). También deberá conectar su billetera MetaMask al sitio local.

<p align="center">
![dapp-on-core](../../static/img/dapp/dapp-1.png)
</p>

3. Ingrese un número en el campo de entrada y haga clic en el botón **almacenar** para guardarlo en el contrato. Una acción de escritura en el contrato inteligente invoca la billetera MetaMask. Haga clic en el botón **Confirmar** para firmar la transacción y espere la confirmación en la cadena de bloques.

<p align="center">
![dapp-on-core](../../static/img/dapp/dapp-2.avif)
</p>

4. Una vez confirmada la transacción en la cadena de bloques, haga clic en el botón **recuperar** para leer el valor del contrato inteligente. Notarás que el valor se ha actualizado.

<p align="center">
![dapp-on-core](../../static/img/dapp/dapp-3.avif)
</p>

🎉 ¡Felicidades! ¡Acaba de interactuar con su contrato recién implementado utilizando la interfaz de su dApp! Puede aprovechar el código base implementando e interactuando con diferentes contratos y agregando nuevos componentes de interfaz de usuario al sitio web para sus usuarios.
