---
sidebar_label: Directives pour les contrats intelligents
hide_table_of_contents: false
sidebar_position: 2
description: Directives pour la prise en charge de Solidity pour le développement de contrats intelligents sur Core
---

# Directives pour le développement de smart contracts sur Core

---

La blockchain Core évolue en permanence pour offrir une meilleure expérience aux utilisateurs et aux développeurs. Ce document fournit des instructions claires pour les développeurs concernant les versions de Solidity prises en charge et les paramètres nécessaires afin que vos smart contracts soient correctement déployés et vérifiables sur le réseau Core. Pour maintenir la cohérence et la compatibilité, la blockchain Core prend en charge les versions de Solidity supérieures à **0.8.24** en utilisant la version EVM **Shanghai**. Le respect des directives de version et de configuration spécifiées est crucial pour garantir le bon fonctionnement de vos contrats. Les sections suivantes détaillent les paramètres Solidity recommandés, y compris les options du compilateur et les procédures de vérification, afin de vous aider à déployer vos contrats de manière fluide et sécurisée sur la blockchain Core.

## Configurations recommandées pour le déploiement de smart contracts sur Core

Currently, Core's EVM matches version **Shanghai** and does not support the verification of smart contracts deployed with Solidity version **0.8.24^** with default EVM settings for popular IDEs. To make sure that the lag in support for deployment and verification of smart contracts of version `0.8.24^` does not stagger the development of dapps on Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version `0.8.24^` on Core.

### Paramètres EVM

To support running smart contracts with Solidity version **0.8.24^** on Core Mainnet (1116) and Testnet2 (1114), developers **_should_** choose the **Shanghai** EVM version and **not** the default EVM versions to compile and deploy the smart contracts.

However, for Core legacy Testnet (1115), the supported `evmVersion` _**should**_ be set to **Paris**.

#### Deployment Using Hardhat

- For Core Mainnet and Testnet2, please add `evmVersion: "shanghai"` in solidity compiler configurations.

```
solidity: {
       compilers: [
         {
            version: '0.8.26',
            settings: {
               evmVersion: 'shanghai',
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
       ],
    },
```

- For Core Legacy Testnet (chainID: 1115), please add `evmVersion: "paris"` in solidity compiler configurations.

```
solidity: {
       compilers: [
         {
            version: '0.8.26',
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
```

#### Deployment Using Remix IDE

- For Core Mainnet and Testnet2, please choose `shanghai` in compiler configurations.

<img width="277" alt="image" src="https://github.com/user-attachments/assets/a528a516-8dfe-44bf-a0fc-34814f284cca" />

- For Core Legacy Testnet1 (chainID: 1115), please choose `paris` in compiler configurations.

<img width="278" alt="image" src="https://github.com/user-attachments/assets/6042382c-2daa-471d-9723-c7a6ce0b3253" />

### Vérification des contrats

- Pour simplifier la vérification, la version EVM par défaut pour Core Scan est définie sur **Shanghai** pour les versions de Solidity **0.8.24^**.
- Les développeurs peuvent suivre les mêmes étapes de vérification que pour les versions antérieures pour leurs smart contracts en version 0.8.24^. Pour plus de détails sur la vérification des contrats sur la blockchain Core, reportez-vous à la documentation correspondante [ici](./contract-verify.md).
- To verify the smart contracts deployed on the Core Legacy Testnet (1115), set the `EVM Version to target` in the **Misc Settings** on the contract verification page to `paris`.

<img width="710" alt="image" src="https://github.com/user-attachments/assets/8f2b61f2-72c2-4607-8f64-9e1d1c19960b" />

### Contrats intelligents basés sur des versions de Solidity < 0.8.24

- **Remarque :** Les smart contracts écrits avec une version de Solidity **\< 0.8.24** ne sont pas concernés par ces changements et continuent de fonctionner normalement.

