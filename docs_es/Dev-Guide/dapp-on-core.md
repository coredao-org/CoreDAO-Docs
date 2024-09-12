---
sidebar_label: Construya dApp en Core
hide_table_of_contents: false
sidebar_position: 2
description: Cree una dApp de Fullstack en Core Chain
---

# Construyendo dApp en Core

---

Las aplicaciones descentralizadas (dApps) utilizan una cadena de bloques o contratos inteligentes en cadena para almacenar y hacer referencia a datos, en lugar de depender de bases de datos centralizadas tradicionales. Una estructura de dApp simple y común generalmente consiste en una interfaz de usuario de React.js o Vue.js que utiliza Web3.js o Ethers.js para interactuar con contratos inteligentes implementados en una cadena de bloques compatible con EVM.

## ¿Qué estamos construyendo?

En este tutorial, desarrollaremos una dApp simple usando React.js y Ethers.js que almacena datos en un contrato inteligente en Core blockchain y los muestra a los usuarios. El código completo de la dApp está disponible en GitHub en el [dApp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master/01-Basic%20Full%20Stack%20Dapp%20on%20Core# building-a-dapp-on-core) repositorio.

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
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v10.2.4
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

![harhat-project-initialize](../../static/img/hardhat/dapp-tutorial-1.png)

:::note
Como usaremos Waffle para este proyecto y nos aseguraremos de seleccionar **No** para la opción "_¿Desea instalar las dependencias de este proyecto de muestra con npm (@nomicfoundation/hardhat-toolbox)? (Y/n)_"
:::

4. Una vez que se inicializa este proyecto, encontrará la siguiente estructura de proyecto:

```bash
dapp-tutorial.
|   .gitignore
|   hardhat-config.js   (HardHat configuration file.)
|   package-lock.json
|   package.json
|   README.md
|
+---contracts (Para Solidity Smart Contracts)
|       Lock.sol
|      
+---ignition (Scripts en versiones anteriores, esta carpeta contiene archivos de configuración que especifican cómo se deben implementar los contratos inteligentes.)
|   \---modules
|           Lock.js
|                
+---node_modules
|  
+---test (Para escribir y ejecutar pruebas)
|       Lock.js      
|      
```

5. Instale y configure MetaMask Chrome Extension para usar con Core Testnet. Consulte [aquí](./core-testnet-wallet-config.md) para obtener una guía detallada.

6. Cree un archivo secret.json en la carpeta raíz y almacene en él la clave privada de su billetera MetaMask. Consulte [aquí](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) para obtener detalles sobre cómo obtener la clave privada de la cuenta MetaMask.

```json
{"PrivateKey":"you private key, do not leak this file, do keep it absolutely safe"}
```

:::caution
No olvide agregar este archivo al archivo `.gitignore` en la carpeta raíz de su proyecto para no verificar accidentalmente sus claves privadas/frases secretas en un repositorio público. ¡Asegúrese de guardar este archivo en un lugar absolutamente seguro!
:::

7. Copie lo siguiente en su archivo `hardhat.config.js`

```js
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");


const { PrivateKey } = require('./secret.json');


module.exports = {
   defaultNetwork: 'testnet',


   networks: {
      hardhat: {
      },
      testnet: {
         url: 'https://rpc.test.btcs.network',
         accounts: [PrivateKey],
         chainId: 1115,
      }
   },
   solidity: {
      compilers: [
        {
           version: '0.8.19',
           settings: {
            evmVersion: 'paris',
            optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
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


pragma solidity >=0.7.0 <0.9.0;


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

1. **State Variable**:
   - `number`: A `uint256` variable that is used to store the value.

#### Contract Functions

1. **Store Function**:
   - `store(uint256 num) public`: A function that allows users to store a new value in the `number` variable. This function takes a single parameter, `num`, which is the value to be stored. The function updates the `number` variable with the provided value.
   - **Visibility**: The function is marked as `public`, meaning it can be called by any user or contract.
   - **State Change**: This function modifies the state of the contract by updating the `number` variable.

2. **Retrieve Function**:
   - `retrieve() public view returns (uint256)`: A function that returns the current value stored in the `number` variable. This function does not take any parameters and returns a `uint256` value.
   - **Visibility**: The function is marked as `public`, meaning it can be called by any user or contract.
   - **View**: The function is marked as `view`, indicating that it does not modify the state of the contract. It only reads the state.
   - **Return Value**: The function returns the value of the `number` variable.

## Compiling Smart Contract

1. To compile the `Storage` smart contract defined in the `Storage.sol`, from the root directory run the following command

```bash
npx hardhat compile
```

## Deploy and Interact with Smart Contract

1. Before deploying your smart contract on the Core Chain, it is best advised to first run a series of tests making sure that the smart contract is working as desired. Refer to the detailed guide [here](https://docs.coredao.org/developer/develop-on-core/building-on-core/using-hardhat#contract-testing) for more details.

2. Create a `scripts` folder in the root directory of your project. Inside this folder, create a file `deploy-and-call.js`; paste the following script into it.

```javascript
const hre = require("hardhat");


async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();


  await storage.deployed();
  console.log("Storage contract deployed to:", storage.address);


  console.log("call retrieve():", await storage.retrieve())


  console.log("call store(), set value to 100")
  const tx = await storage.store(100)
  await tx.wait()
 
  console.log("call retrieve() again:", await storage.retrieve())
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

3. Make sure your MetaMask wallet has tCORE test tokens for the Core Testnet. Refer [here](https://docs.coredao.org/developer/develop-on-core/using-core-testnet/connect-to-core-testnet#testnet-facuet-tcore-account-funding) for details on how to get tCORE tokens from Core Faucet.

4. Run the following command from the root directory of your project, to deploy your smart contract on the Core Chain.

```bash
npx hardhat run scripts/deploy-and-call.js
```

If successfully deployed, you will get the following output

```bash
>npx hardhat run scripts/deploy-and-call.js
Storage contract deployed to: 0x48F68BF4A1b1fE6589B9D0a5ad0dF0520582edA2
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

5. Make sure to save the Address of Storage Contract at which is deployed, as obtained above, this will be used for interacting with smart contract from the dApp's frontend.

🎉 Congratulations! You have successfully learned how to create, compile, and deploy a smart contract on the Core Chain Testnet using the Hardhat.

## Interacting with Smart Contract through Frontend

⚡ ️ Let's create a frontend interface for interacting with the smart contract.

### Setting up Frontend

1. Clone the `dApp-tutorial` repository from GitHub using the following command.

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
```

2. Navigate into the folder `01-Basic Full Stack Dapp on Core` in the cloned `dapp-tutorial` repo.

```bash
cd dapp-tutorial
cd "01-Basic Full Stack Dapp on Core"
```

3. Install all the dependencies, i.e., node modules.

```bash
npm install
```

4. To test if things are working fine, run the application by using the following command. This will serve application with hot reload feature at [http://localhost:5173](http://localhost:5173/)

```bash
npm run dev
```

### Key Implementations

The application's key blockchain logic is implemented in [App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx)

1. [App.tsx (Wallet)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L20): logic for connecting the application to MetaMask wallet.
2. [App.tsx (Store)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L58): logic to write data to the Storage smart contract.
3. [App.tsx (Retrieve)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L87): logic to read data from the Storage smart contract.

### Adding Smart Contract Details

1. Copy the `Storage.sol` file from the `contracts` folder in the root of your project and paste it into the `frontend/src/contracts` folder.
2. Copy the address of the Storage smart contract as obtained in the section [above](#deploy-and-interact-with-smart-contract).
3. Paste this into [Line 10 of App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L10).

```javascript
const contractAddress = '0x48F68BF4A1b1fE6589B9D0a5ad0dF0520582edA2'
```

4. Additionally, we'll need the ABI metadata to interact with the contract from our dApp. From the `artifacts/contracts` folder in the root of your project. Copy the `Storage.json` file and save it to the `/src/contracts` folder.

## Test Locally Using MetaMask

1. Run the command `npm run dev` from the root of the project to start the application. This will serve application with at [http://localhost:5173](http://localhost:5173/)

2. Make sure that your MetaMask wallet is correctly installed and switched to Core Testnet as described in our [Core Testnet user guide](./core-testnet-wallet-config.md). You'll also need to connect your MetaMask wallet to the local site.

![dapp-on-core](../../static/img/dapp/dapp-1.png)

3. Enter a number in the input field and click the **store** button to save it to the contract. A write action on the smart contract invokes the MetaMask wallet. Click the **Confirm** button to sign the transaction and wait for confirmation on the blockchain.

![dapp-on-core](../../static/img/dapp/dapp-2.avif)

4. After the transaction is confirmed on the blockchain, click the **retrieve** button to read the value from the smart contract. You will notice the value has been updated.

![dapp-on-core](../../static/img/dapp/dapp-3.avif)

🎉 Congratulations! You've just interacted with your newly-deployed contract using your dApp's front end! You can build on the codebase by deploying and interacting with different contracts, and by adding new UI components to the website for your users.
