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

Pour prendre en charge l’exécution de smart contracts avec Solidity version **0.8.24^**, les développeurs **_doivent_** choisir la version **Shanghai** de l’EVM, et **non** les versions EVM par défaut, afin de compiler et déployer leurs smart contracts.

#### Hardhat

- Veuillez ajouter `evmVersion`: "shanghai" dans les configurations du compilateur Solidity.

![hardhat-solidity-setting](../../static/img/solidity-support/hardhat-evm-setting.png)

#### Remix

- Veuillez sélectionner `shanghai` dans les configurations du compilateur.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Vérification des contrats

- Pour simplifier la vérification, la version EVM par défaut pour Core Scan est définie sur **Shanghai** pour les versions de Solidity **0.8.24^**.
- Les développeurs peuvent suivre les mêmes étapes de vérification que pour les versions antérieures pour leurs smart contracts en version 0.8.24^. Pour plus de détails sur la vérification des contrats sur la blockchain Core, reportez-vous à la documentation correspondante [ici](./contract-verify.md).

### Contrats intelligents basés sur des versions de Solidity < 0.8.24

- **Remarque :** Les smart contracts écrits avec une version de Solidity **\< 0.8.24** ne sont pas concernés par ces changements et continuent de fonctionner normalement.

