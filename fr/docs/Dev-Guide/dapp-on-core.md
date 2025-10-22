---
sidebar_label: Construire une dApp sur Core
hide_table_of_contents: false
sidebar_position: 2
description: Construire une dApp Full Stack sur Core
---

# Construire une dApp sur Core

---

Les applications décentralisées (dApps) utilisent une blockchain ou des contrats intelligents on-chain pour stocker et référencer des données, plutôt que de s'appuyer sur des bases de données centralisées traditionnelles. Une structure de dApp commune et simple se compose généralement d'un front-end en React.js ou Vue.js utilisant Web3.js ou Ethers.js pour interagir avec les contrats intelligents déployés sur une blockchain compatible EVM.

## Ce que Nous Allons Construire

Dans ce tutoriel, nous développerons une dApp simple utilisant React.js et Ethers.js qui stocke des données dans un contrat intelligent sur la blockchain Core et les affiche aux utilisateurs. Le code complet de la dApp est disponible sur GitHub dans le répertoire [dApp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master/01-Basic%20Full%20Stack%20Dapp%20on%20Core#building-a-dapp-on-core).

## Objectifs d'Apprentissage

Ce tutoriel vous aidera à acquérir les connaissances suivantes :

- Connectivité du portefeuille MetaMask au Core Testnet ;
- Développement et déploiement de contrats intelligents sur Core Testnet ;
- Intégration front-end avec le contrat intelligent en utilisant la bibliothèque Ethers.js ;
- Lecture des données d'un contrat intelligent ;
- Écriture des données dans un contrat intelligent;

## Prérequis Logiciels

- [Git](https://git-scm.com/) v2.44.0
- [Node.js](https://nodejs.org/en) v20.11.1
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v10.2.4
- [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) v10.2.4
- [Extension Web Wallet MetaMask](https://metamask.io/download/)

## Configuration de l'Environnement de Développement

1. Créez un nouveau répertoire pour le projet et accédez-y

```bash
mkdir dapp-tutorial
cd dapp-tutorial
```

2. Installez [Hardhat](https://hardhat.org/) et [Waffle](https://getwaffle.io/)

```bash
npm init --yes
npm install --save-dev hardhat
npm install --save-dev chai @nomiclabs/hardhat-waffle
```

3. Initialisez le projet Hardhat en exécutant la commande suivante

```bash
npx hardhat
```

![harhat-project-initialize](../../static/img/hardhat/dapp-tutorial-1.png)

:::note
Comme nous utiliserons Waffle pour ce projet, assurez-vous de sélectionner **Non** pour l'option "_Voulez-vous installer les dépendances de ce projet d'exemple avec npm (@nomicfoundation/hardhat-toolbox)? (Y/n)_"
:::

4. Une fois le projet initialisé, vous trouverez la structure du projet suivante :

```bash
dapp-tutorial.
|   .gitignore
|   hardhat-config.js   (HardHat configuration file.)
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

5. Installez et configurez l'extension MetaMask pour Chrome pour l'utiliser avec Core Testnet. Consultez le guide détaillé [ici](./core-testnet-wallet-config.md).

6. Créez un fichier secret.json dans le dossier racine et stockez la clé privée de votre portefeuille MetaMask dedans. Consultez [ici](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) pour des détails sur la façon d'obtenir la clé privée du compte MetaMask.

```json
{"PrivateKey":"votre clé privée, ne divulguez pas ce fichier, gardez-le absolument en sécurité"}
```

:::caution
N'oubliez pas d'ajouter ce fichier au fichier `.gitignore` dans le dossier racine de votre projet afin de ne pas vérifier accidentellement vos clés privées/phases secrètes dans un dépôt public. Assurez-vous de garder ce fichier en lieu sûr !
:::

7. Copiez ce qui suit dans votre fichier `hardhat.config.js`

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

## Écriture du Contrat Intelligent

1. Accédez au dossier `contracts` dans le répertoire racine de votre projet.
2. Supprimez le fichier `Lock.sol` ; créez un nouveau fichier `Storage.sol` et collez le contenu suivant dedans.

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

### Explication

Le contrat `Storage` est un exemple simple qui démontre comment stocker et récupérer une valeur à l'aide d'un contrat intelligent Solidity. Il se compose d'une variable d'état pour contenir la valeur et de deux fonctions pour mettre à jour et lire cette valeur. La fonction `store` permet à tout utilisateur de définir la valeur, tandis que la fonction `retrieve` permet à tout utilisateur de lire la valeur actuelle. Ce contrat est utile pour comprendre les bases des variables d'état et de la visibilité des fonctions en Solidity. Ce contrat intelligent Solidity, nommé `Storage`, est un contrat simple permettant de stocker et de récupérer une seule valeur `uint256`. Voici une description détaillée de ses composants et fonctionnalités :

#### Composants du contrat

1. **Variable d'état :**
   - `number` : Une variable `uint256` utilisée pour stocker la valeur.

#### Fonctions du contrat

1. **Fonction Store :**
   - `store(uint256 num) public`: Permet aux utilisateurs de stocker une nouvelle valeur dans la variable `number`. Cette fonction prend un paramètre, `num`, qui est la valeur à stocker. La variable `number` est mise à jour avec la valeur fournie.
   - **Visibilité**: La fonction est publique, ce qui signifie qu'elle peut être appelée par tout utilisateur ou contrat.
   - **Changement d'état**: Cette fonction modifie l'état du contrat en mettant à jour la variable `number`.

2. **Fonction Retrieve :**
   - `retrieve() public view returns (uint256)`: Retourne la valeur actuelle stockée dans la variable `number`. Cette fonction ne prend aucun paramètre et retourne une valeur `uint256`.
   - **Visibilité**: La fonction est note comme `publique`, ce qui signifie qu'elle peut être appelée par tout utilisateur ou contrat.
   - **View**: La fonction est marquée comme `view`, ce qui indique qu'elle ne modifie pas l'état du contrat. Elle se contente de lire l'état.
   - **Valeur retournée :** La fonction retourne la valeur de la variable `number`.

## Compilation du contrat intelligent

1. Pour compiler le contrat `Storage` défini dans `Storage.sol`, exécutez la commande suivante depuis le répertoire racine

```bash
npx hardhat compile
```

## Déploiement et interaction avec le contrat intelligent

1. Avant de déployer votre contrat intelligent sur Core, il est recommandé de d'abord effectuer une série de tests pour s'assurer que le contrat fonctionne comme prévu. Reportez-vous au guide détaillé [ici](https://docs.coredao.org/docs/Dev-Guide/hardhat#contract-testing) pour plus de détails.

2. Créez un dossier `scripts` dans le répertoire racine de votre projet. À l'intérieur de ce dossier, créez un fichier `deploy-and-call.js` et collez le script suivant.

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

3. Assurez-vous que votre portefeuille MetaMask dispose de jetons tCORE ou tCORE2 pour le Core Testnet. Référez-vous [ici](https://docs.coredao.org/docs/Dev-Guide/core-testnet-wallet-config) pour obtenir des jetons tCORE ou tCORE2 depuis Core Faucet.

4. Exécutez la commande suivante depuis le répertoire racine de votre projet pour déployer votre contrat intelligent sur la blockchain Core.

```bash
npx hardhat run scripts/deploy-and-call.js
```

Si le déploiement est réussi, vous obtiendrez la sortie suivante

```bash
>npx hardhat run scripts/deploy-and-call.js
Storage contract deployed to: 0x48F68BF4A1b1fE6589B9D0a5ad0dF0520582edA2
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

5. Assurez-vous de sauvegarder l'adresse du contrat Storage obtenue ci-dessus, car elle sera utilisée pour interagir avec le contrat intelligent depuis l'interface frontend de votre dApp.

🎉 Félicitations ! Vous avez appris à créer, compiler et déployer un contrat intelligent sur le Core Testnet en utilisant Hardhat.

## Interaction avec le contrat intelligent via l'interface frontend

⚡ Créons une interface frontend pour interagir avec le contrat intelligent.

### Configuration du frontend

1. Clonez le répertoire `dApp-tutorial` depuis GitHub en utilisant la commande suivante.

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
```

2. Accédez au dossier `01-Basic Full Stack Dapp on Core ` dans le répertoire `dapp-tutorial` cloné.

```bash
cd dapp-tutorial
cd "01-Basic Full Stack Dapp on Core"
```

3. Installez toutes les dépendances, c'est-à-dire les modules node.

```bash
npm install
```

4. Pour tester si tout fonctionne correctement, exécutez l'application en utilisant la commande suivante. Cela servira l'application avec une fonctionnalité de rechargement à chaud à l'adresse [http://localhost:5173](http://localhost:5173/)

```bash
npm run dev
```

### Implémentations clés

La clé logique blockchain de l'application est implémentée dans [App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx)

1. [App.tsx (Wallet)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L20): Logique pour connecter l'application au portefeuille MetaMask.
2. [App.tsx (Store)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L58): Logique pour écrire des données dans le contrat intelligent Storage.
3. [App.tsx (Retrieve)](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L87): Logique pour lire des données depuis le contrat intelligent Storage.

### Ajout des détails du contrat intelligent

1. Copiez le fichier `Storage.sol` depuis le dossier `contracts` à la racine de votre projet et collez-le dans le dossier `frontend/src/contracts`.
2. Copiez l'adresse du contrat intelligent Storage obtenue dans la section [ci-dessus](#deploy-and-interact-with-smart-contract).
3. Collez-la à la [ligne 10 de App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/01-Simple%20Storage%20Full%20Stack%20Dapp/src/components/App.tsx#L10).

```javascript
const contractAddress = '0x48F68BF4A1b1fE6589B9D0a5ad0dF0520582edA2'
```

4. De plus, nous aurons besoin des métadonnées ABI pour interagir avec le contrat depuis notre dApp. Depuis le dossier `artifacts/contracts` à la racine de votre projet. Depuis le dossier `artifacts/contracts` à la racine de votre projet, copiez le fichier `Storage.json` et enregistrez-le dans le dossier `/src/contracts`.

## Test local avec MetaMask

1. Exécutez la commande `npm run dev` depuis la racine du projet pour démarrer l'application. Cela servira l'application à l'adresse [http://localhost:5173](http://localhost:5173/)

2. Assurez-vous que votre portefeuille MetaMask est correctement installé et switché sur le Core Testnet comme décrit dans notre [guide utilisateur du Core Testnet](./core-testnet-wallet-config.md). Vous devrez également connecter votre portefeuille MetaMask au site local.

![dapp-on-core](../../static/img/dapp/dapp-1.png)

3. Entrez un nombre dans le champ de saisie et cliquez sur le bouton **store** pour l'enregistrer dans le contrat. Une action d'écriture sur le contrat intelligent appelle le portefeuille MetaMask. Cliquez sur le bouton **Confirm** pour signer la transaction et attendez la confirmation sur la blockchain.

![dapp-on-core](../../static/img/dapp/dapp-2.avif)

4. Après que la transaction soit confirmée sur la blockchain, cliquez sur le bouton **retrieve** pour lire la valeur depuis le contrat intelligent. Vous remarquerez que la valeur a été mise à jour.

![dapp-on-core](../../static/img/dapp/dapp-3.avif)

🎉 Félicitations ! Vous avez interagi avec votre contrat nouvellement déployé via l'interface frontend de votre dApp ! Vous pouvez développer la base de code en déployant et en interagissant avec différents contrats, et en ajoutant de nouveaux composants UI au site Web pour vos utilisateurs.
