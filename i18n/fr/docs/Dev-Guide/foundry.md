---
sidebar_label: En utilisant Foundry
hide_table_of_contents: false
sidebar_position: 2
description: Déployer des contrats sur Core en utilisant Foundry
---

# En utilisant Foundry

---

Foundry is a fast, efficient, and extensible toolkit for EVM development written in Rust. This guide will walk you through the process of installing Foundry, setting up your project, writing and testing Solidity code, and deploying and verifying your contracts on Core blockchain.

## 1. Installation de Foundry

Avant de commencer à utiliser Foundry, vous devez l'installer sur votre système. The process is relatively straightforward and can be completed in a few simple steps. Foundry uses `forge` as its primary tool for interacting with Solidity contracts.

### Étape 1 : Installer Foundry

Vous pouvez installer Foundry en exécutant la commande suivante sur un système basé sur Unix (macOS, Linux) :

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Cela téléchargera et installera Foundry. Il comprend les outils suivants :

- `forge` : l'interface de ligne de commande pour compiler, tester et déployer des contrats Solidity.
- `cast` : un outil permettant d'interagir avec les contrats intelligents et de visualiser les données de la blockchain.
- `anvil` : un nœud local utilisé pour les tests.

Une fois installé, assurez-vous que le binaire se trouve dans le PATH de votre système. Pour vérifier l’installation, exécutez :

```bash
forge --version
```

Vous devriez voir la version de Foundry qui a été installée.

### Étape 2 : Mettre à jour Foundry

Foundry is actively developed, so it's essential to keep your installation up to date. Vous pouvez mettre à jour Foundry avec la commande suivante :

```bash
foundryup
```

Cela garantit que vous disposez de la dernière version de Foundry installée.

## 2. Configuration de votre projet

### Étape 1 : Créer un nouveau projet Foundry

Pour créer un nouveau projet avec Foundry, vous pouvez utiliser la commande `forge init` :

```bash
forge init my-blockchain-project
```

This will generate a new directory structure with all the necessary files to start writing Solidity contracts and tests.

Voici à quoi ressemblera la structure de dossiers générée :

```
my-blockchain-project/
│
├── lib/                       # External dependencies (if any)
├── script/
│   └── Script.s.sol           # Default deploy script file
|
├── src/
│   └── Counter.sol            # Default contract file
|
├── test/                      # Test files
│   └── Counter.t.sol          # Default test file
│
├── foundry.toml               # Configuration file for foundry
└── README.md                  # Project documentation
```

### Étape 2 : Comprendre la structure des dossiers

- **src** : Contient vos contrats Solidity.
- **script** : contient votre script de déploiement.
- **lib** : contient toutes les bibliothèques ou dépendances externes.
- **test** : Contient des fichiers de test pour valider vos contrats.
- **foundry.toml** : Le fichier de configuration pour Foundry. Il comprend les paramètres du compilateur, les configurations réseau et bien plus encore.
- **README.md** : Un fichier markdown pour documenter votre projet.

### Étape 3 : Mettre à jour la version de Solidity et EVM

Mettez à jour le fichier « foundry.toml » avec les versions Solidity et EVM appropriées.

Assurez-vous que vous utilisez la version Solidity « 0.8.24 » et définissez la version EVM sur « Shanghai ». If you're using an **older testnet**, set the **EVM version to Paris**, note that Core Testnet (1115) is now deprecated and no longer maintained.

```bash
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
evm_version = "shanghai"
solc_version = "0.8.24"
```

## 3. Rédaction d'un contrat de solidité

Maintenant que votre projet est configuré, écrivons un contrat Solidity simple.

### Étape 1 : Créer un contrat simple

Accédez au répertoire « src » et créez un nouveau contrat Solidity. Commençons par utiliser un contre-contrat simple.

Créez un fichier appelé « Counter.sol » dans le dossier « src » :

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract Counter {
    uint256 public count;


    constructor() {
        count = 0;
    }


    function increment() public {
        count += 1;
    }


    function decrement() public {
        count -= 1;
    }


    function getCount() public view returns (uint256) {
        return count;
    }
}
```

Dans ce contrat :

- La variable d'état « count » garde une trace de la valeur du comptage.
- Les fonctions « incrément » et « décrément » augmentent ou diminuent le compteur.
- La fonction `getCount` renvoie le nombre actuel.

## 4. Test du contrat Solidity

Foundry facilite l'écriture de tests pour vos contrats. Le cadre de test utilise Solidity lui-même, ce qui facilite l'écriture de tests parallèlement à vos contrats.

### Étape 1 : Créer un fichier de test

Accédez au répertoire « test » et créez un fichier de test appelé « Counter.t.sol » :

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


import "forge-std/Test.sol";
import "../src/Counter.sol";


contract CounterTest is Test {
    Counter counter;


    function setUp() public {
        counter = new Counter();
    }


    function testInitialCount() public {
        assertEq(counter.getCount(), 0);
    }


    function testIncrement() public {
        counter.increment();
        assertEq(counter.getCount(), 1);
    }


    function testDecrement() public {
        counter.increment();
        counter.decrement();
        assertEq(counter.getCount(), 0);
    }
}
```

### Explication:

- `setUp()` : cette fonction s'exécute avant chaque test et est utilisée pour initialiser votre contrat.
- Fonctions de test : `testInitialCount`, `testIncrement` et `testDecrement` sont des cas de test individuels pour vérifier la fonctionnalité du contrat.

### Étape 2 : Exécuter les tests

Exécutez le script en utilisant la commande suivante :

```bash
forge test
```

Foundry compilera le contrat, exécutera les tests et vous fournira un résumé des résultats.

Vous devriez voir un résultat similaire à ce qui suit :

```bash
[⠊] Compiling...
[⠔] Compiling 1 files with Solc 0.8.28
[⠒] Solc 0.8.28 finished in 491.38ms
Compiler run successful!


Ran 3 tests for test/Counter.t.sol:CounterTest
[PASS] testDecrement() (gas: 22192)
[PASS] testIncrement() (gas: 32003)
[PASS] testInitialCount() (gas: 10943)
Suite result: ok. 3 passed; 0 failed; 0 skipped; finished in 5.38ms (3.86ms CPU time)


Ran 1 test suite in 148.37ms (5.38ms CPU time): 3 tests passed, 0 failed, 0 skipped (3 total tests)
```

## 5. Déploiement du contrat

Une fois que vous avez écrit et testé votre contrat Solidity, vous pouvez le déployer sur Core Testnet/Mainnet.

### Étape 1 : Configuration du déploiement

Pour déployer votre contrat, vous devrez configurer un script de déploiement. Create a file `Counter.s.sol` under the script folder and paste the following code.

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


import {Script, console} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";


contract CounterScript is Script {
    Counter public counter;


    function setUp() public {}


    function run() public {
        vm.startBroadcast();


        counter = new Counter();


        vm.stopBroadcast();
    }
}
```

#### Creating and Loading Environment Variables

Create an `.env file` and add the following details

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

Assurez-vous de remplacer « YOUR_API_KEY » et « YOUR_PRIVATE_KEY » par les valeurs réelles.

Maintenant que vous avez créé le fichier `.env` file\` ci-dessus, exécutez la commande suivante pour charger les variables d'environnement dans la session de ligne de commande en cours :

```bash
source .env
```

### Étape 2 : Déployer le contrat

To deploy the contract to the Core Testnet, use the `forge create`

```bash
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Counter.sol:Counter  --broadcast
```

Or use the `forge script` command

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY  --broadcast
```

Après avoir exécuté la commande, Foundry compilera et déploiera votre contrat sur le réseau spécifié. It will return the address of the deployed contract.

```bash
[⠊] Compiling...
No files changed, compilation skipped
Deployer: 0x1b984521b42D3B9aCFCf37565Ab865f318b1Cd92
Deployed to: 0xc1C2466cBBa0f8E1FDb7f5E68e232190c745A6Ae
Transaction hash: 0x9ce3604ef36d526cd0cad75a23b6f4bfc9558cb8ee26caa825acf2ad914784b2
```

## 6. Vérification du contrat

Foundry has a built-in feature to verify contracts on Core automatically. Vous pouvez vérifier votre contrat en utilisant la commande « forge verify-contract » :

```bash
forge verify-contract 0xContract_Address Counter  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Foundry will handle the verification process. You can use [Core Scan](https://scan.test2.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and verified.

## Lectures complémentaires

Pour des instructions détaillées sur l'utilisation de Foundry, veuillez visiter le [site Web officiel de Foundry](https://book.getfoundry.sh/).
