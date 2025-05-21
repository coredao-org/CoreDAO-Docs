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

Actuellement, l'EVM de Core correspond à la version **Shanghai** et ne prend pas en charge le déploiement et la vérification des contrats intelligents de la version **0.8.24^** avec les paramètres EVM par défaut. Afin que le retard dans la prise en charge du déploiement et de la vérification des contrats intelligents de la version 0.8.24^ ne freine pas le développement des dApps sur Core, voici les directives à suivre pour s'assurer que les développeurs peuvent déployer et vérifier avec succès les contrats intelligents de la version 0.8.24^ sur Core.

### Paramètres EVM

Pour prendre en charge l’exécution de smart contracts avec Solidity version \*\*0.8.24^\*\*Core Mainnet (1116) and Testnet2 (1114), les développeurs **_doivent_** choisir la version **Shanghai** de l’EVM, et **non** les versions EVM par défaut, afin de compiler et déployer leurs smart contracts.

Cependant, pour Core Legacy Testnet (1115), la version `evmVersion` prise en charge _**devrait**_ être définie sur **Paris**.

#### Déploiement à l'aide de « Hardhat »

- Pour Core Mainnet et Testnet2, veuillez ajouter `evmVersion: "shanghai"` dans les configurations du compilateur Solidity.

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

- Pour Core Legacy Testnet (chainID : 1115), veuillez ajouter `evmVersion : "paris"` dans les configurations du compilateur Solidity.

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

#### Déploiement à l'aide de Remix IDE

- Pour Core Mainnet et Testnet2, veuillez choisir « shanghai » dans les configurations du compilateur.

<p align="center">
<img width="277" alt="image" src="https://github.com/user-attachments/assets/a528a516-8dfe-44bf-a0fc-34814f284cca" />
</p>

- Pour Core Legacy Testnet1 (chainID : 1115), veuillez choisir « paris » dans les configurations du compilateur.

<p align="center">
<img width="278" alt="image" src="https://github.com/user-attachments/assets/6042382c-2daa-471d-9723-c7a6ce0b3253" />
</p>

### Vérification des contrats

- Pour simplifier la vérification, la version EVM par défaut pour Core Scan est définie sur **Shanghai** pour les versions de Solidity **0.8.24^**.
- Les développeurs peuvent suivre les mêmes étapes de vérification que pour les versions antérieures pour leurs smart contracts en version 0.8.24^. Pour plus de détails sur la vérification des contrats sur la blockchain Core, reportez-vous à la documentation correspondante [ici](./contract-verify.md).
- Pour vérifier les contrats intelligents déployés sur le Core Legacy Testnet (1115), définissez la « Version EVM pour cible » dans les **Misc Settings** sur la page de vérification du contrat sur « paris ».

<p align="center">
<img width="710" alt="image" src="https://github.com/user-attachments/assets/8f2b61f2-72c2-4607-8f64-9e1d1c19960b" />
</p>

### Contrats intelligents basés sur des versions de Solidity < 0.8.24

- **Remarque :** Les smart contracts écrits avec une version de Solidity **\< 0.8.24** ne sont pas concernés par ces changements et continuent de fonctionner normalement.
