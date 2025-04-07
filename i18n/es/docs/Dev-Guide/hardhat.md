---
sidebar_label: Uso de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core usando Hardhat
---

# Uso de Hardhat

---

Hardhat es un entorno de desarrollo popular para blockchains compatibles con EVM, compuesto por varios componentes para escribir, compilar, depurar y desplegar contratos inteligentes.

In this tutorial, learn how to compile, deploy and call smart contracts on Core Testnet using Hardhat. Obtén el código base para este tutorial desde [aquí](https://github.com/coredao-org/hardhat-tutorial).

## Instalación

Dirígete a la carpeta de tu perfil y sigue los pasos a continuación para instalar Hardhat (se requiere npm/node [v8.9.4 LTS o posterior](https://nodejs.org/en/)):

1. `npm init --yes`
2. `npm install --save-dev hardhat`
3. `npm install --save-dev chai @nomiclabs/hardhat-waffle`

## Inicialización del Proyecto

Después de la instalación, inicializa Hardhat ejecutando el comando `npx hardhat`:

```javascript
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.10.1 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

Una vez inicializado, la estructura del proyecto será la siguiente:

- `contracts`:  para los contratos inteligentes en Solidity.
- `scripts`:para scripts en JavaScript/TypeScript para interactuar con los contratos.
- `test`: para escribir y ejecutar pruebas.
- `hardhat.config.js`: archivo de configuración de Hardhat.

## Configurar Hardhat para Core Testnet

Copia lo siguiente en tu archivo hardhat.config.js:

```javascript
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
        version: "0.8.22",
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

**Make sure that your smart contract follows the [Solidity Support Guidelines for Core Blockchain](./smart-contract-guidelines.md)**, to do so ensure that the `evmVersion` parameter is set to `shanghai` under the solidity compiler settings in the `hardhat.config.js` file.

If you are using **testnet1**, `evmVersion` parameter should be set to `Paris`.

:::note
Please note that you'll need to provide your private keys or mnemonic for the provider. You can store them in a `secret.json` file. Be sure to add this file to your project's `.gitignore` to prevent accidentally committing your private keys to a public repository. Additionally, keep this file in a secure location to protect your sensitive information!
:::

## Escribir Contratos Inteligentes

Usaremos el contrato `1_Storage.sol` para este ejemplo. Crea un archivo llamado `Storage.sol` y guárdalo en la carpeta `contracts` con el siguiente código:

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

## Compilación de Contratos

Ejecuta el siguiente comando para compilar el contrato:

`npx hardhat compile`

## Pruebas de Contratos

Crea un nuevo archivo llamado `storage-test.js` con el siguiente código y guárdalo en la carpeta `test`:

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage", function () {
  let storage;

  beforeEach(async function () {
    Storage = await ethers.getContractFactory("Storage");
    [operator] = await ethers.getSigners();
    storage = await Storage.connect(operator).deploy();
    await storage.deployed();
    expect(await storage.retrieve()).to.equal(0n);
  });
  describe("Test store function", function () {
    it("should work properly", async function () {
      let tx = await storage.store(100);
      await tx.wait();
      expect(await storage.retrieve()).to.equal(100n);
    });
    it("should throw", async function () {
      await expect(storage.store(-1)).to.be.throws;
    });
  });
});
```

Para probar nuestro contrato `Storage.sol` en la red HardHat incorporada, ejecute el siguiente comando:

`npx hardhat test --network hardhat`

```javascript
$ npx hardhat test --network hardhat


  Storage
    Test store function
      ✔ should work properly
      ✔ should throw


  2 passing (1s)
```

## Implementación y interacción del contrato

HardHat facilita el uso de la biblioteca `ethers.js` para implementar e interactuar con nuestros contratos inteligentes. Cree un nuevo archivo llamado `deploy-and-call.js` en la carpeta `scripts` que contenga el siguiente código:

```javascript
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
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

Este script realiza varias acciones:

- Implementa nuestro contrato inteligente;
- Imprime la dirección del contrato desplegado;
- Llama a la función `retrieve` para verificar el número almacenado;
- Llama a la función `store` para almacenar un nuevo número;
- Llama a la función `retrieve` nuevamente para verificar el número almacenado;

Ejecutemos el script ejecutando el siguiente comando:

`npx hardhat run scripts/deploy-and-call.js`

```javascript
$ npx hardhat run scripts/deploy-and-call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

Podemos ver que el script implementó correctamente el contrato, almacenó un número y confirmó que el número ahora está almacenado en el contrato.

We can use[ Core Scan](https://scan.test2.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and called.

<p align="center">
![hardhat](../../static/img/hardhat/hardhat-1.avif)
</p>

## Lectura adicional

Para obtener instrucciones detalladas sobre cómo usar HardHat y complementos como `ethers.js`, visita [el sitio web oficial de HardHat](https://hardhat.org/docs).
