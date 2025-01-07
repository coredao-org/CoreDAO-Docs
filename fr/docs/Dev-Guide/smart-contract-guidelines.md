---
sidebar_label: Directives pour les contrats intelligents
hide_table_of_contents: false
sidebar_position: 2
description: Guidelines for Solidity Support for Developing Smart Contracts on Core
---

# Smart Contract Development Guidelines for Core

---

Core is constantly evolving for better user and developer experience. This document aims to provide clear instructions for developers on the supported Solidity versions and the necessary settings to ensure your smart contracts are correctly deployed and verifiable on the Core network. To maintain consistency and compatibility, Core blockchain supports Solidity versions higher than 0.8.19 using the **Paris** EVM. Le respect des directives de version et de configuration spécifiées est crucial pour garantir le bon fonctionnement de vos contrats. The following sections will detail the recommended Solidity settings, including compiler options and verification procedures, to help you achieve a smooth and secure contract deployment on Core blockchain.

## Contexte

Actuellement, l'EVM de Core correspond à la version **Paris** et _ne prend pas en charge_ le déploiement et la vérification des contrats intelligents de la version **0.8.20^** avec les paramètres EVM par défaut. Core est en train de se mettre à jour vers la dernière version de l'EVM, avec une finalisation prévue pour le _début du troisième trimestre 2024_.

## Configurations pour déployer correctement des contrats intelligents sur Core

To make sure that the lag in support for deployment and verification of smart contracts of version **0.8.20^** does not stagger the developement of dapps on the Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version 0.8.20^ on Core before the Core EVM upgrade.

### Paramètres EVM

Pour exécuter des contrats intelligents avec la version 0.8.20^ de Solidity, les développeurs _ne doivent pas utiliser les paramètres EVM par défaut_ pour compiler les contrats intelligents. Au lieu de cela, ils doivent _choisir la version la plus récente avant Shanghai_, à savoir **Paris**.

#### Hardhat

- Veuillez ajouter `evmVersion`: "paris" dans les configurations du compilateur Solidity.

![hardhat-solidity-setting](../../static/img/solidity-support/evm-setting.jpg)

#### Remix

- Veuillez sélectionner `paris` dans les configurations du compilateur.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Vérification des contrats

- Afin de simplifier le processus de vérification, Core Scan a modifié la version EVM par défaut de la plateforme pour **Paris** pour les contrats Solidity version **0.8.20^**.
- Developers can take the exact same steps to verify their smart contracts with version 0.8.20^ as of the older versions, refer [here](./contract-verify.md) for more details on contract verification on Core blochain.

### Contrats intelligents basés sur des versions de Solidity < 0.8.20

- Notez que les contrats intelligents avec des versions de Solidity **\< 0.8.20** ne sont pas affectés par cela et peuvent fonctionner comme d'habitude.
