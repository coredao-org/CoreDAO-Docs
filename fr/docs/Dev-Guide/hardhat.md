---
sidebar_label: Utilisation de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Déployer des contrats sur Core en utilisant Hardhat
---

# Utilisation de Hardhat

---

Hardhat est un environnement de développement populaire pour les blockchains compatibles avec l’EVM, comprenant plusieurs composants pour écrire, compiler, déboguer et déployer des contrats intelligents.

Dans ce tutoriel, apprenez à compiler, déployer et appeler des contrats intelligents sur Core TestNet en utilisant Hardhat. Obtenez le code source pour ce tutoriel [ici](https://github.com/coredao-org/hardhat-tutorial).

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

**Assurez-vous que votre contrat intelligent suit les [directives de support Solidity pour Core Blockchain](./smart-contract-guidelines.md)**. Pour cela, vérifiez que le paramètre `evmVersion` est défini sur `paris` dans les paramètres du compilateur Solidity dans le fichier `hardhat.config.js`.

> Remarque : Nous devons fournir des clés privées/mnémotechniques pour le fournisseur. Vous pouvez créer un fichier `secret.json` pour les stocker. N'oubliez pas d'ajouter ce fichier au `.gitignore` de votre projet afin de ne pas accidentellement publier vos clés privées dans un dépôt public. Assurez-vous de conserver ce fichier dans un endroit absolument sécurisé !

## Rediger des contrats intelligents

Pour simplifier, utilisons le fichier `1_Storage.sol` que nous connaissons déjà du tutoriel Remix. Copiez le code ci-dessous dans un nouveau fichier appelé `Storage.sol` et enregistrez-le dans le dossier `contracts`.

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

## Compilation du contrat

Exécutez la commande suivante pour compiler le contrat :

`npx hardhat compile`

## Test du contrat

Créez un nouveau fichier appelé `storage-test.js` avec le code suivant et enregistrez-le dans le dossier `test` :

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
// Nous importons explicitement l'environnement d'exécution de Hardhat ici. Cela est optionnel
// mais utile pour exécuter le script de manière autonome via `node <script>`.
//
// Vous pouvez également exécuter un script avec `npx hardhat run <script>`. Dans ce cas, Hardhat
// compilera vos contrats, ajoutera les membres de l'environnement d'exécution de Hardhat
// au scope global, et exécutera le script.
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

// Nous recommandons ce modèle pour pouvoir utiliser async/await partout
// et gérer correctement les erreurs
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
$ npx hardhat run scripts/call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

Nous pouvons voir que le script déploie correctement le contrat, stocke un nombre et confirme que le nombre est bien stocké dans le contrat.

Vous pouvez utiliser [Core Scan](https://scan.test.btcs.network/) pour rechercher l'adresse du contrat et vérifier que le contrat a été déployé et appelé avec succès.

![hardhat](../../static/img/hardhat/hardhat-1.avif)

## Lecture supplémentaire

Pour des instructions détaillées sur l'utilisation de Hardhat et des plugins comme `ethers.js`, veuillez visiter le [site officiel de Hardhat](https://hardhat.org/docs).
