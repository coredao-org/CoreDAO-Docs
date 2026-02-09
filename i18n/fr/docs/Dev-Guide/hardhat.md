---
sidebar_label: Utilisation de Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Déployer des contrats sur Core en utilisant Hardhat
---

# Utilisation de Hardhat

---

Hardhat est un environnement de développement populaire pour les blockchains compatibles avec l’EVM, comprenant plusieurs composants pour écrire, compiler, déboguer et déployer des contrats intelligents.

Dans ce tutoriel, vous apprendrez comment compiler, déployer et appeler des contrats intelligents sur le Core Testnet en utilisant Hardhat. We'll use the pre-configured [Hardhat starter kit](https://github.com/coredao-org/hardhat-tutorial) that includes all necessary dependencies and configurations for Core blockchain development.

### Pré‑requis

Avant de commencer, assurez‑vous d'avoir :

- Node.js [v18.0.0 or later](https://nodejs.org/en/) installer
- Git installé sur votre machine
- A Core Testnet wallet with some test tokens (get them from the [Core Faucet](https://scan.test2.btcs.network/faucet))

### Cloner le Starter Kit

Cloner le dépôt du kit de démarrage Hardhat:

```bash
git clone https://github.com/coredao-org/hardhat-tutorial.git
cd hardhat-tutorial
npm install
```

## Structure du projet

Après avoir cloné et installé les dépendances, vous trouverez la structure de projet suivante dans le starter kit:

```
hardhat-tutorial/
├── contracts/           # Solidity smart contracts
│   └── Storage.sol     # Example storage contract
├── scripts/            # Deployment and interaction scripts
│   └── deploy.js       # Example deployment script
├── test/               # Test files
│   └── Storage.test.js # Example test file
├── hardhat.config.js   # Hardhat configuration
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

Le starter kit est pré‑configuré avec:

- **contracts/**: Contient des exemples de contrats intelligents Solidity
- **scripts/**: Contient des scripts de déploiement et d’interaction
- **test/**: Contient des fichiers de test utilisant des modèles de test modernes
- **hardhat.config.js**: Pré‑configuré pour les réseaux blockchain Core

## Comprendre la configuration Hardhat

Le starter kit est livré avec un fichier `hardhat.config.js` pré‑configuré et optimisé pour le développement sur la blockchain Core. Examinons les composants clés de cette configuration moderne Hardhat v2 :

```javascript
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Import the Hardhat Toolbox - includes all essential plugins
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  // Solidity compiler configuration
  solidity: {
    version: "0.8.24", // Recommended Solidity version for Core
    settings: {
      evmVersion: "shanghai", // Required for Core blockchain compatibility
      optimizer: {
        enabled: true,        // Enable optimizer for gas efficiency - Optional
        runs: 200,           // Optimize for 200 function calls
      },
    },
  },
  // Network configurations for different environments
  networks: {
    // Local development network
    hardhat: {},
    
    // Core Mainnet configuration
    core_mainnet: {
      url: "https://rpc.coredao.org/",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1116,
    },
    
    // Core Testnet configuration
    core_testnet2: {
      url: "https://rpc.test2.btcs.network",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1114,
    },
  },
  // Contract verification configuration
  etherscan: {
    apiKey: {
      core_testnet2: process.env.CORE_TEST2_SCAN_KEY,
      core_mainnet: process.env.CORE_MAIN_SCAN_KEY,
    },
    customChains: [
      {
        network: "core_testnet2",
        chainId: 1114,
        urls: {
          apiURL: "https://api.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network/",
        },
      },
      {
        network: "core_mainnet",
        chainId: 1116,
        urls: {
          apiURL: "https://openapi.coredao.org/api",
          browserURL: "https://scan.coredao.org/",
        },
      },
    ],
  },
  
  // Test configuration
  mocha: {
    timeout: 20000, // 20 second timeout for tests
  },
};
```

### Configuration des variables d'environnement

Créez un fichier `.env` à la racine du projet et ajoutez :

```bash
# Your wallet private key (without 0x prefix)
PRIVATE_KEY=your_private_key_here

# Core Scan API keys for contract verification (optional)
CORE_TEST2_SCAN_KEY=your_testnet_scan_api_key
CORE_MAIN_SCAN_KEY=your_mainnet_scan_api_key
```

**Important**: Assurez‑vous que votre contrat intelligent respecte les [Solidity Support Guidelines for Core blockchain](./smart-contract-guidelines.md). Le paramètre `evmVersion: "shanghai"` dans la configuration garantit la compatibilité avec la blockchain Core.

:::note
Ne jamais coder en dur les clés privées dans vos scripts. Utilisez toujours des variables d'environnement et évitez de committer les fichiers .env dans le contrôle de version (ajoutez .env à .gitignore)
:::

## Rediger des contrats intelligents

Pour simplifier, utilisons le fichier `1_Storage.sol` que nous connaissons déjà du tutoriel Remix. Copiez le code ci-dessous dans un nouveau fichier appelé `Storage.sol` et enregistrez-le dans le dossier `contracts`.

```javascript
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

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

    await storage.waitForDeployment();
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

  await storage.waitForDeployment();
  console.log("Storage contract deployed to:", storage.target);

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

`npx hardhat run scripts/deploy-and-call.js --network core_testnet2`

```javascript
$ npx hardhat run scripts/deploy-and-call.js --network core_testnet2
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): 0n
call store(), set value to 100
call retrieve() again: 100n
```

Nous pouvons voir que le script déploie correctement le contrat, stocke un nombre et confirme que le nombre est bien stocké dans le contrat.

Nous pouvons utiliser [ Core Scan](https://scan.test2.btcs.network/) pour rechercher l'adresse du contrat afin de vérifier que le contrat a été déployé et appelé avec succès.

<p align="center">![hardhat](../../static/img/hardhat/hardhat-1.avif)</p>

## Lecture supplémentaire

Pour des instructions détaillées sur l'utilisation de Hardhat et des plugins comme `ethers.js`, veuillez visiter le [site officiel de Hardhat](https://hardhat.org/docs).
