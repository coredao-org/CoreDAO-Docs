---
sidebar_label: Utilisation de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Déployer des contrats sur Core en utilisant Hardhat
---

# Utilisation de Hardhat

---

Hardhat est un environnement de développement populaire pour les blockchains compatibles avec l’EVM, comprenant plusieurs composants pour écrire, compiler, déboguer et déployer des contrats intelligents.

In this tutorial, learn how to compile, deploy and call smart contracts on Core Testnet using Hardhat. Obtenez le code source pour ce tutoriel [ici](https://github.com/coredao-org/hardhat-tutorial).

## Installation

Accédez à votre dossier de profil et suivez les étapes ci-dessous pour installer Hardhat (npm/node [v8.9.4 LTS ou une version ultérieure](https://nodejs.org/en/) est requise) :

1. `npm init --yes`
2. `npm install --save-dev hardhat`
3. `npm install --save-dev chai @nomiclabs/hardhat-waffle`

## Initialisation du projet

Après l'installation, vous pouvez initialiser Hardhat en exécutant la commande `npx hardhat` :

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

Une fois le projet initialisé, vous trouverez la structure suivante :

- `contracts`: pour les contrats intelligents Solidity.
- `scripts`: pour les scripts JavaScript/TypeScript pour l'interaction avec les contrats et autres utilitaires.
- `test`: pour écrire et exécuter les tests.
- `hardhat.config.js`: fichier de configuration Hardhat.

## Configurer Hardhat pour le Core Testnet

Copiez ce qui suit dans votre fichier `hardhat.config.js`:

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

## Rediger des contrats intelligents

Pour simplifier, utilisons le fichier `1_Storage.sol` que nous connaissons déjà du tutoriel Remix. Copiez le code ci-dessous dans un nouveau fichier appelé `Storage.sol` et enregistrez-le dans le dossier `contracts`.

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

## Compilation du contrat

Exécutez la commande suivante pour compiler le contrat :

`npx hardhat compile`

## Test du contrat

Créez un nouveau fichier appelé `storage-test.js` avec le code suivant et enregistrez-le dans le dossier `test` :

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

Pour tester notre contrat `Storage.sol` sur le réseau intégré de Hardhat, exécutez la commande suivante :

`npx hardhat test --network hardhat`

```javascript
$ npx hardhat test --network hardhat


  Storage
    Test store function
      ✔ should work properly
      ✔ should throw


  2 passing (1s)
```

## Déploiement et interaction avec le contrat

Hardhat facilite l'utilisation de la bibliothèque `ethers.js` pour déployer et interagir avec nos contrats intelligents. Créez un nouveau fichier appelé `deploy-and-call.js` dans le dossier scripts avec le code suivant :

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

Ce script fait plusieurs choses :

- Déploie notre contrat intelligent ;
- Affiche l'adresse du contrat déployé ;
- Appelle la fonction retrieve pour vérifier le nombre stocké ;
- Appelle la fonction store pour stocker un nouveau nombre ;
- Appelle de nouveau la fonction retrieve pour vérifier le nombre stocké;

Exécutez le script en utilisant la commande suivante :

`npx hardhat run scripts/deploy-and-call.js`

```javascript
$ npx hardhat run scripts/deploy-and-call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

Nous pouvons voir que le script déploie correctement le contrat, stocke un nombre et confirme que le nombre est bien stocké dans le contrat.

We can use[ Core Scan](https://scan.test2.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and called.

<p align="center">
![hardhat](../../static/img/hardhat/hardhat-1.avif)
</p>

## Lecture supplémentaire

Pour des instructions détaillées sur l'utilisation de Hardhat et des plugins comme `ethers.js`, veuillez visiter le [site officiel de Hardhat](https://hardhat.org/docs).
