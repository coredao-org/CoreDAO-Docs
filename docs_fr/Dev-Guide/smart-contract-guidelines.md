---
sidebar_label: Smart Contract Guidelines
hide_table_of_contents: false
sidebar_position: 2
description: Guidelines for Solidity Support for Developing Smart Contracts on Core Chain
---

# Smart Contract Development Guidelines on Core Chain

---

Core Chain is constantly evolving for better user and developer experience. This document aims to provide clear instructions for developers on the supported Solidity versions and the necessary settings to ensure your smart contracts are correctly deployed and verifiable on the Core Chain network. To maintain consistency and compatibility, Core Chain supports Solidity versions higher than 0.8.19 using the **Paris** EVM. Adhering to this specified version and configuration guidelines is crucial for the seamless functioning of your contracts. The following sections will detail the recommended Solidity settings, including compiler options and verification procedures, to help you achieve a smooth and secure contract deployment on Core Chain.

## Background

At the moment, Core's EVM matches version **Paris** and _does not support_ the deployment and verification of smart contracts of version **0.8.20^** with default EVM settings. Core is upgrading to the latest version of EVM and is projected to finish by _early of Q3 2024_.

## Configurations to Correctly Deploy Smart Contracts on Core

To make sure that the lag in support for deployment and verification of smart contracts of version **0.8.20^** does not stagger the developement of dapps on the Core Chain, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version 0.8.20^ on Core before the Core EVM upgrade.

### EVM Settings

In order to support running smart contracts with Solidity version 0.8.20^, Developers should _not use the default EVM settings_ to compile the smart contracts. Instead, they need to _pick the most recent version before Shanghai_, which is **Paris**.

#### Hardhat

- Please add `evmVersion: "paris"` in solidity comppiler configurations.

![hardhat-solidity-setting](../../static/img/solidity-support/evm-setting.jpg)

#### Remix

- Please choose `paris` in Compiler configuration.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Contract Verification

- In order to make the verification process easier, Core scan has changed the platform default EVM version to **Paris** for solidity version **0.8.20^**.
- Developers can take the exact same steps to verify their smart contracts with version 0.8.20^ as of the older versions, refer [here](./contract-verify.md) for more details on contract verification on Core Chain.

### Smart Contracts Based on Solidity version < 0.8.20

- Note that for smart contracts with solidity version **\< 0.8.20** are _not_ affected by this and can operate as usual.
