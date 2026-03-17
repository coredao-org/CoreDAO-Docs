---
sidebar_label: Vérification de Contrats
hide_table_of_contents: false
sidebar_position: 2
---

# Vérification de Contrats

---

Dans un souci de transparence, il est recommandé de vérifier tous les contrats sur [Core Scan](https://scan.coredao.org/). Voici un aperçu des méthodes les plus courantes pour vérifier les contrats via le web, l'API et Hardhat.

:::note
Assurez-vous que votre contrat intelligent suit les [Solidity Support Guidelines de Core Chain](./smart-contract-guidelines.md). Pour ce faire, assurez-vous que le paramètre `evmVersion` est défini sur `paris` dans les paramètres du compilateur Solidity.
:::

## Vérification Web via Core Scan

La vérification Web est la stratégie de vérification de contrat intelligent la plus utilisée. Après avoir déployé votre contrat intelligent sur Core, vous pouvez utiliser son code source pour le vérifier sur Core Scan.

1. Recherchez le contrat par adresse sur [Core Scan](https://scan.test.btcs.network).
2. Une fois le contrat localisé, sélectionnez l'onglet **Contract** et cliquez sur **Verify and Publish**_._

![verify-core-scan](../../static/img/contract-verification/contract-verify-1.avif)

3\. Remplissez les informations de vérification requises, notamment :

- L'adresse du contrat;
- Le type de compilateur : pour les contrats simples, sélectionnez `Single File`. Pour les contrats plus complexes avec des imports externes, sélectionnez `Standard Json`;
- La version du compilateur;
- Le type de licence open-source;

![verify-core-scan](../../static/img/contract-verification/contract-verify-2.avif)

4\. Sur la page suivante, remplissez le code source du contrat en Solidity.

Si votre contrat a des paramètres de constructeur, il est recommandé de les ajouter dans le champ `Constructor Arguments`, bien que cela ne soit pas obligatoire. Ces paramètres doivent être formatés en bytes encodés en ABI. Remix et d'autres outils peuvent générer ces paramètres pour vous.

Si vous avez activé l'optimisation lors de la compilation du contrat, sélectionnez "Oui" pour le champ `Optimization`.

![verify-contract](../../static/img/contract-verification/contract-verify-3.avif)

5\. Cliquez sur **Verify and Publish** pour terminer le processus.

![verify-contract](../../static/img/contract-verification/contract-verify-4.avif)

Votre contrat vérifié sur Core Scan devrait maintenant être publié et accessible:

![verify-contract](../../static/img/contract-verification/contract-verify-5.avif)

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

## Limitations Connues

- Core prend actuellement en charge les versions du compilateur solc jusqu'à la version 0.8.19.
- Les bibliothèques ne sont pas prises en charge avec la vérification via l'API.
- Si vous avez des soucis à vérifier des contrats très volumineux (1000+ lignes) en un seul fichier, il est recommandé d'utiliser le format `Standard JSON` pour la vérification.
