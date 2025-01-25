---
sidebar_label: Smart Contract Guidelines
hide_table_of_contents: false
sidebar_position: 2
description: Guidelines for Solidity Support for Developing Smart Contracts on Core
---

# Guidelines for Smart Contract Development on Core 
---

Core blockchain is constantly evolving to provide a better user and developer experience. This document provides clear instructions for developers on the supported Solidity versions and the necessary settings to ensure your smart contracts are correctly deployed and verifiable on the Core network. To maintain consistency and compatibility, Core blockchain supports Solidity versions higher than **0.8.24** using the **Shanghai** EVM version. Adhering to this specified version and configuration guidelines is crucial for the seamless functioning of your contracts. The following sections will detail the recommended Solidity settings, including compiler options and verification procedures, to help you achieve a smooth and secure contract deployment on the Core blockchain.

## Recommended Configurations for Deploying Smart Contracts on Core 

Currently, Core's EVM matches version **Shanghai** and does not support the deployment and verification of smart contracts of version **0.8.24^** with default EVM settings. To make sure that the lag in support for deployment and verification of smart contracts of version 0.8.24^ does not stagger the development of dapps on the Core, the following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version 0.8.24^ on Core.

### EVM Settings

To support running smart contracts with Solidity version **0.8.24^**, developers **_should_** choose the **Shanghai** EVM version and **not** the default EVM versions to compile and deploy the smart contracts.

#### Hardhat

* Please add `evmVersion: "shanghai"` in solidity comppiler configurations.

![hardhat-solidity-setting](../../static/img/solidity-support/hardhat-evm-setting.png)
 

#### Remix

* Please choose `shanghai` in Compiler configuration.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)
 
### Contract Verification

* To simplify the verification process, the default EVM version for Core Scan is set to **Shanghai** for solidity version **0.8.24^**.
* Developers can take the same steps to verify their smart contracts with version 0.8.24^ as of the older versions. Refer [here](./contract-verify.md) for more details on contract verification on Core blockchain.

### Smart Contracts Based on Solidity version < 0.8.24

* **Note**: smart contracts with solidity version **\< 0.8.24** are unaffected and can operate as usual.

