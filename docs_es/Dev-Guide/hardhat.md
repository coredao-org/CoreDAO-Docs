---
sidebar_label: Usando Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core Chain usando Hardhat
---

# Usando Hardhat

---

Hardhat es un entorno de desarrollo popular para cadenas de bloques compatibles con EVM, que consta de múltiples componentes para escribir, compilar, depurar e implementar contratos inteligentes.

En este tutorial, aprenda cómo compilar, implementar y llamar contratos inteligentes en Core TestNet usando HardHatcheck. Obtenga el código base para este tutorial desde [aquí](https://github.com/coredao-org/hardhat-tutorial).

## Instalacion

Navegue a su carpeta de perfil y siga los pasos a continuación para instalar HardHat (se requiere npm/node [v8.9.4 LTS o posterior] (https://nodejs.org/en/)):

1. `npm init --yes`
2. `npm install --save-dev hardhat`
3. `npm install --save-dev chai @nomiclabs/hardhat-waffle`

## Inicialización del proyecto

Después de la instalación, podemos inicializar HardHat ejecutando el comando `npx hardhat`:

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

Una vez que se inicializa este proyecto, encontrará la siguiente estructura de proyecto:

- `contracts`: para contratos inteligentes de Solidity.
- `scripts`: para scripts JavaScript/TypeScript para interacción de contratos y otras utilidades.
- `test`: para escribir y ejecutar pruebas.
- `hardhat.config.js`: archivo de configuración de HardHat.

## Configurar HardHat para Core Testnet

Copie lo siguiente en su archivo `hardhat.config.js`:

```javascript
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
            version: '0.8.9',
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

**Asegúrese de que su contrato inteligente siga las [Pautas de soporte de solidez de Core Chain](./smart-contract-guidelines.md)**. Para ello, asegúrese de que el parámetro `evmVersion` esté establecido en `paris` bajo el configuración del compilador de solidez en el archivo `hardhat.config.js`.

> Tenga en cuenta que debemos pasar claves privadas/mnemónicos para el Proveedor. Puede crear un `secret.json` para almacenarlos. No olvide agregar este archivo al `.gitignore` de su proyecto para no registrar accidentalmente sus claves privadas en un repositorio público. ¡Y asegúrese de guardar este archivo en un lugar absolutamente seguro!

## Escribir contratos inteligentes

En aras de la simplicidad, usemos el archivo `1_Storage.sol` con el que ya estamos familiarizados en el tutorial de Remix. Copie el siguiente código en un nuevo archivo llamado `Storage.sol` y guárdelo en la carpeta `contracts`.

```solidity
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

## Compilación de contratos

Ejecute el siguiente comando para compilar el contrato:

`npx hardhat compile`

## Pruebas de contrato

Cree un nuevo archivo llamado `storage-test.js` que contenga el siguiente código y guárdelo en la carpeta `test`:

```javascript
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Storage", function () {
    let storage;

    beforeEach(async function(){
        Storage = await ethers.getContractFactory("Storage");
        [operator] = await ethers.getSigners();
        storage = await Storage.connect(operator).deploy();
        await storage.deployed()
        expect(await storage.retrieve()).to.equal(0n);
    })
    describe("Test store function", function(){
        it("should work properly", async function(){
            let tx = await storage.store(100);
            await tx.wait();
            expect(await storage.retrieve()).to.equal(100n);
        })
        it("should throw", async function(){
            await expect(
                storage.store(-1)
            ).to.be.throws
        })
    })
})
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

## Implementación e interacción del contrato

HardHat facilita el uso de la biblioteca `ethers.js` para implementar e interactuar con nuestros contratos inteligentes. Cree un nuevo archivo llamado `deploy-and-call.js` en la carpeta `scripts` que contiene el siguiente código:

```javascript
// Requerimos explícitamente el Hardhat Runtime Environment aquí. esto es opcional
// pero útil para ejecutar el script de forma independiente a través del `nodo <script>`.
//
// También puedes ejecutar un script con `npx hardhat run <script>`. Si haces eso, casco
// compilará sus contratos, agregará los miembros del Hardhat Runtime Environment al
// alcance global y ejecute el script.
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

// Recomendamos este patrón para poder usar async/await en todas partes
// y manejar adecuadamente los errores.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Este script hace algunas cosas:

- Implementa nuestro contrato inteligente;
- Imprime la dirección del contrato implementado;
- Llama a la función de recuperación para verificar el número almacenado;
- Llama a la función de almacenamiento para almacenar un nuevo número;
- Llama a la función de recuperación para verificar nuevamente el número almacenado;

Ejecutemos el script ejecutando el siguiente comando:

`npx hardhat run scripts/deploy-and-call.js`

```javascript
$ npx hardhat run scripts/call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

Podemos ver que el script implementó correctamente el contrato, almacenó un número y confirmó que el número ahora está almacenado en el contrato.

Podemos usar [Core Scan](https://scan.test.btcs.network/) para buscar la dirección del contrato y verificar que el contrato se implementó y llamó correctamente.

![hardhat](../../static/img/hardhat/hardhat-1.avif)

## Lectura adicional

Para obtener instrucciones detalladas sobre el uso de HardHat y complementos como `ethers.js`, visite el [sitio web oficial de HardHat](https://hardhat.org/docs).
