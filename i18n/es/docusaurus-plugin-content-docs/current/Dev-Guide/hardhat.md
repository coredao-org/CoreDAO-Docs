---
sidebar_label: Uso de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core usando Hardhat
---

# Uso de Hardhat

---

Hardhat es un entorno de desarrollo popular para blockchains compatibles con EVM, compuesto por varios componentes para escribir, compilar, depurar y desplegar contratos inteligentes.

En este tutorial, aprende cómo compilar, desplegar y llamar contratos inteligentes en Core Testnet usando Hardhat. Obtén el código base para este tutorial desde [aquí](https://github.com/coredao-org/hardhat-tutorial).

## Instalación

Navega a tu carpeta de perfil y sigue los pasos a continuación para instalar Hardhat (se requiere npm/node v8.9.4) [LTS o superior](https://nodejs.org/en/):

1. `npm init --yes`
2. `npm install --save-dev hardhat`
3. `npm install --save-dev chai @nomiclabs/hardhat-waffle`

## Inicialización del Proyecto

Después de la instalación, podemos inicializar Hardhat ejecutando el comando `npx hardhat`:

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
- `hardhat.config.js`: Archivo de configuración de Hardhat.

## Configura Hardhat para Core Testnet

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

**Asegúrate de que tu contrato inteligente siga las [Directrices de Soporte de Solidity para la blockchain Core](./smart-contract-guidelines.md)**; para ello, verifica que el parámetro `evmVersion` esté configurado como `shanghai` dentro de los ajustes del compilador solidity en el archivo `hardhat.config.js`.

Si estás usando **Core Testnet1**, el parámetro `evmVersion` debe estar configurado como `paris`.

:::note
Deberás proporcionar tus claves privadas o frase mnemónica para el proveedor. Puedes almacenarlos en un archivo `secret.json`. Asegúrate de agregar este archivo al `.gitignore` de tu proyecto para evitar subir accidentalmente tus claves privadas a un repositorio público. Adicionalmente, ¡guarda este archivo en una ubicación segura para proteger tu información confidencial!
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

Para probar nuestro contrato `Storage.sol` en la red incorporada de Hardhat, ejecuta el siguiente comando:

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

Hardhat facilita el uso de la biblioteca `ethers.js` para desplegar e interactuar con nuestros smart contracts. Cree un nuevo archivo llamado `deploy-and-call.js` en la carpeta `scripts` que contenga el siguiente código:

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

Podemos usar[ Core Scan](https://scan.test2.btcs.network/) para buscar la dirección del contrato y verificar que fue desplegado y llamado exitosamente.

<p align="center">
![hardhat](../../../../../static/img/hardhat/hardhat-1.avif)
</p>

## Lectura adicional

Para instrucciones detalladas sobre el uso de Hardhat y plugins como `ethers.js`, por favor visita el [sitio oficial de Hardhat](https://hardhat.org/docs).
