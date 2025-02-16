---
sidebar_label: Uso de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Implementar contratos en Core usando Hardhat
---

# Uso de Hardhat

---

Hardhat es un entorno de desarrollo popular para blockchains compatibles con EVM, compuesto por varios componentes para escribir, compilar, depurar y desplegar contratos inteligentes.

En este tutorial, aprenderás cómo compilar, desplegar y llamar a contratos inteligentes en Core Testnet usando Hardhat. Obtén el código base para este tutorial desde [aquí](https://github.com/coredao-org/hardhat-tutorial).

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

👷 Bienvenido a Hardhat v2.10.1 👷‍

? ¿Qué quieres hacer? … 
❯ Crear un proyecto en JavaScript
  Crear un proyecto en TypeScript
  Crear un hardhat.config.js vacío
  Salir

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

**Asegúrese de que su contrato inteligente siga las [Pautas de soporte de solidez para Core Blockchain](./smart-contract-guidelines.md)**; para ello, asegúrese de que el parámetro `evmVersion` esté establecido en `paris` bajo el configuración del compilador de solidez en el archivo `hardhat.config.js`.

> Nota: Necesitamos pasar claves privadas/mnemónicos al proveedor. Puedes crear un archivo `secret.json` para almacenarlos. No olvides agregar este archivo a `.gitignore` para no subir accidentalmente tus claves privadas a un repositorio público. ¡Asegúrate de mantener este archivo en un lugar absolutamente seguro!

## Escribir Contratos Inteligentes

Usaremos el contrato `1_Storage.sol` para este ejemplo. Crea un archivo llamado `Storage.sol` y guárdalo en la carpeta `contracts` con el siguiente código:

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

## Compilación de Contratos

Ejecuta el siguiente comando para compilar el contrato:

`npx hardhat compile`

## Pruebas de Contratos

Crea un nuevo archivo llamado `storage-test.js` con el siguiente código y guárdalo en la carpeta `test`:

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

## Implementación y interacción del contrato

HardHat facilita el uso de la biblioteca `ethers.js` para implementar e interactuar con nuestros contratos inteligentes. Cree un nuevo archivo llamado `deploy-and-call.js` en la carpeta `scripts` que contenga el siguiente código:

```javascript
// Requerimos el entorno de ejecución de Hardhat explícitamente aquí. Esto es opcional
// pero útil para ejecutar el script de manera independiente a través de `node <script>`.
//
// También puede ejecutar un script con `npx hardhat run <script>`. Si lo hace, Hardhat
// compilará sus contratos, agregará los miembros del entorno de ejecución de Hardhat al
// alcance global y ejecutará el script.
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

Este script realiza varias acciones:

- Implementa nuestro contrato inteligente;
- Imprime la dirección del contrato desplegado;
- Llama a la función `retrieve` para verificar el número almacenado;
- Llama a la función `store` para almacenar un nuevo número;
- Llama a la función `retrieve` nuevamente para verificar el número almacenado;

Ejecutemos el script ejecutando el siguiente comando:

`npx hardhat run scripts/deploy-and-call.js`

```javascript
npx hardhat run scripts/call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

Podemos ver que el script implementó correctamente el contrato, almacenó un número y confirmó que el número ahora está almacenado en el contrato.

Podemos usar [Core Scan](https://scan.test.btcs.network/) para buscar la dirección del contrato y verificar que el contrato fue desplegado y llamado con éxito.

![hardhat](../../static/img/hardhat/hardhat-1.avif)

## Lectura adicional

Para obtener instrucciones detalladas sobre cómo usar HardHat y complementos como `ethers.js`, visita [el sitio web oficial de HardHat](https://hardhat.org/docs).
