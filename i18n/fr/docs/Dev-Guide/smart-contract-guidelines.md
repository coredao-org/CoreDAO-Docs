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

Actuellement, l'EVM de Core correspond à la version **Shanghai** et ne prend pas en charge le déploiement et la vérification des contrats intelligents de la version **0.8.24^** avec les paramètres EVM par défaut. To make sure that the lag in support for deployment and verification of smart contracts of version 0.8.24^ does not stagger the development of dapps on the Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version `0.8.24^` on Core.

### Paramètres EVM

To support running smart contracts with Solidity version **0.8.24^** on Core Mainnet (1116), Testnet2 (1114) and Testnet (1115), developers **_should_** choose the **Shanghai** EVM version and **not** the default EVM versions to compile and deploy the smart contracts.

#### Deployment Using Hardhat

- Please add `evmVersion: "shanghai"` in solidity compiler configurations.

![hardhat-solidity-setting](../../static/img/solidity-support/hardhat-evm-setting.png)

#### Deployment Using Remix IDE

- Please choose `shanghai` in compiler configurations.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Vérification des contrats

- Pour simplifier la vérification, la version EVM par défaut pour Core Scan est définie sur **Shanghai** pour les versions de Solidity **0.8.24^**.
- Les développeurs peuvent suivre les mêmes étapes de vérification que pour les versions antérieures pour leurs smart contracts en version 0.8.24^. Pour plus de détails sur la vérification des contrats sur la blockchain Core, reportez-vous à la documentation correspondante [ici](./contract-verify.md).

### Contrats intelligents basés sur des versions de Solidity < 0.8.24

- **Remarque :** Les smart contracts écrits avec une version de Solidity **\< 0.8.24** ne sont pas concernés par ces changements et continuent de fonctionner normalement.

