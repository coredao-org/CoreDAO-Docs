---
sidebar_label: Vérification de Contrats
hide_table_of_contents: false
sidebar_position: 2
description: Apprenez à vérifier un contrat intelligent à l'aide de Core Scan
---

# Vérification de Contrats

---

Dans un souci de transparence, il est recommandé de vérifier tous les contrats sur [Core Scan](https://scan.coredao.org/). Bien qu'il existe plusieurs façons d'effectuer la vérification de contrats, nous recommandons d'utiliser l'outil de vérification officiel de Core, [Core Scan](https://scan.coredao.org/), pour une fiabilité optimale. Voici un aperçu des méthodes les plus courantes pour vérifier les contrats via le web, l'API et Hardhat.

:::note
Assurez-vous que votre contrat intelligent suit les [Solidity Support Guidelines de Core Chain](./smart-contract-guidelines.md). Pour ce faire, assurez-vous que le paramètre `evmVersion` est défini sur `paris` dans les paramètres du compilateur Solidity.
:::

## Vérification Web via Core Scan

La vérification Web est la stratégie de vérification de contrat intelligent la plus utilisée. Après avoir déployé votre contrat intelligent sur Core, vous pouvez utiliser son code source pour le vérifier sur Core Scan.

1. Accédez au site web de Core Scan.

- [Pour le Core Mainnet](https://scan.coredao.org/)
- [Pour le Core Testnet2](https://scan.test.btcs.network)
- [Pour le Core Legacy Testnet](https://scan.test.btcs.network)

2. Recherchez le contrat par adresse sur Core Scan. Il suffit de coller l'adresse du contrat dans la barre de recherche du site web.
3. Une fois le contrat localisé, sélectionnez l'onglet **Contract** et cliquez sur **Verify and Publish**_._

<p align="center">![verify-core-scan](../../static/img/contract-verification/contract-verify-1.avif)</p>

4\. Remplissez les informations de vérification requises, notamment :

- L'adresse du contrat;
- Le type de compilateur : pour les contrats simples, sélectionnez `Single File`. Pour les contrats plus complexes avec des imports externes, sélectionnez `Standard Json`;
- La version du compilateur;
- Le type de licence open-source;

<p align="center">![verify-core-scan](../../static/img/contract-verification/contract-verify-2.avif)</p>

5\. Sur la page suivante, remplissez le code source du contrat en Solidity.

Si votre contrat a des paramètres de constructeur, il est recommandé de les ajouter dans le champ `Constructor Arguments`, bien que cela ne soit pas obligatoire. Ces paramètres doivent être formatés en bytes encodés en ABI. Remix et d'autres outils peuvent générer ces paramètres pour vous.

Si vous avez activé l'optimisation lors de la compilation du contrat, sélectionnez "Oui" pour le champ `Optimization`.

<p align="center">![verify-contract](../../static/img/contract-verification/contract-verify-3.avif) </p>

6\. Cliquez sur **Verify and Publish** pour terminer le processus.

<p align="center">![verify-contract](../../static/img/contract-verification/contract-verify-4.avif) </p>

Votre contrat vérifié sur Core Scan devrait maintenant être publié et accessible:

<p align="center">![verify-contract](../../static/img/contract-verification/contract-verify-5.avif) </p>

## Vérification via API

Vous pouvez trouver un guide pour utiliser l'API de Core afin de vérifier des contrats [ici](https://docs.coredao.org/docs/api/api-documents/contracts). Il est important de noter que pour effectuer des appels API, vous devez vous inscrire sur Core Scan et générer une clé API.

Si vous êtes déjà familier avec l'API d'Etherscan, cela devrait être simple ! Les appels API sur Core sont 100 % compatibles avec l'API d'Etherscan. Il vous suffit de remplacer la clé API et l'URL de l'endpoint et tout devrait fonctionner normalement.

## Vérification avec HardHat

La vérification via HardHat est le moyen le plus pratique pour les développeurs de vérifier des contrats intelligents. Pour plus d'informations, vous pouvez consulter le guide officiel de vérification de Hardhat [ici](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify).

Veuillez noter qu'il est nécessaire d'ajouter les réseaux Core en tant que chaînes personnalisées dans le fichier de configuration de HardHat. Voici un exemple de configuration pour HardHat :

```javascript
/**
* @type import('hardhat/config').HardhatUserConfig
*/


const { PrivateKey } = require('./secret.json');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  defaultNetwork: 'testnet',

  networks: {
     hardhat: {
     },
     testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [PrivateKey],
        chainId: 1115,
     },
     mainnet: {
       url: 'https://rpc.coredao.org',
       accounts: [PrivateKey],
       chainId: 1116,
    },
  },
  etherscan: {
   apiKey: {
     testnet: "api key",
     mainnet: "api key"
   },
   customChains: [
     {
       network: "testnet",
       chainId: 1115,
       urls: {
         apiURL: "https://api.test.btcs.network/api",
         browserURL: "https://scan.test.btcs.network/"
       }
     },
     {
       network: "mainnet",
       chainId: 1116,
       urls: {
         apiURL: "https://openapi.coredao.org/api",
         browserURL: "https://scan.coredao.org/"
       }
     }
   ]
 },
 
  solidity: {
     compilers: [
       {
          version: '0.8.9',
          settings: {
             optimizer: {
                enabled: false,
                runs: 200,
             },
          },
       }
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

## Vérification de Contrats

mettez à jour le fichier `foundry.toml` pour spécifier la version Solidity et la version EVM pour votre projet.

```bash
[profile.default]
solidity_version = "0.8.0"  # Specify the Solidity version
evm_version = "shanghai" #Specify the EVM version (For older testnet, use Paris as EVM version)
```

créez un fichier `.env` pour stocker des informations sensibles telles que votre clé privée, votre URL RPC et vos clés API. Cela permet de sécuriser vos informations d’identification et de les référencer facilement dans votre code.

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

**Important :** Ne soumettez jamais ce fichier « .env » au contrôle de version (par exemple, GitHub) pour éviter d'exposer vos informations sensibles. Si vous utilisez git, ajoutez le fichier `.env` à votre `.gitignore`.

Maintenant que vous avez créé le fichier `.env` ci-dessus, exécutez la commande suivante pour charger les variables d'environnement dans la session de ligne de commande en cours :

```bash
source .env
```

Exécutez la commande ci-dessous pour vérifier votre contrat intelligent

```bash
forge verify-contract 0xContract_Address ContractName  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Replace `0xContract_Address` and `ContractName` with your actual contract address and the contract Name.

Foundry gérera le processus de vérification, vous pouvez utiliser [ Core Scan](https://scan.test2.btcs.network/) pour rechercher l'adresse du contrat afin de vérifier que le contrat a été déployé et vérifié avec succès.

## Limitations Connues

- Actuellement, Core ne prend en charge que les versions du compilateur Solidity jusqu'à 0.8.24
- Les bibliothèques ne sont pas prises en charge avec la vérification via l'API.
- Si vous avez des soucis à vérifier des contrats très volumineux (1000+ lignes) en un seul fichier, il est recommandé d'utiliser le format `Standard JSON` pour la vérification.
