---
sidebar_label: Smart Contract Guidelines
hide_table_of_contents: false
sidebar_position: 2
description: Guidelines for Solidity Support for Developing Smart Contracts on Core
---

# Guidelines for Smart Contract Development on Core

---

Core blockchain is always improving to provide a better experience for both users and developers. This guide outlines the supported Solidity versions and configuration settings needed for successful smart contract deployment and verification on the Core network.

Core blockchain supports Solidity versions higher than 0.8.24 using the **Shanghai** EVM version. It is important to follow these guidelines to ensure your smart contracts work smoothly on the Core network.

## Recommended Configurations for Deploying Smart Contracts on Core

Currently, Core's EVM matches the Shanghai version and does not support the deployment or verification of smart contracts with Solidity version **0.8.24^** using default EVM settings. follow these guidelines to deploy and verify contracts with Solidity version 0.8.24^.

### EVM Settings

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
 
### Contract Verification

- To simplify the verification process, the default EVM version for Core Scan is set to **Shanghai** for solidity version **0.8.24^**.
- Developers can take the same steps to verify their smart contracts with version 0.8.24^ as of the older versions. Refer [here](./contract-verify.md) for more details on contract verification on Core blockchain.
- To verify the smart contracts deployed on the Core Legacy Testnet (1115), set the `EVM Version to target` in the **Misc Settings** on the contract verification page to `paris`.

<img width="710" alt="image" src="https://github.com/user-attachments/assets/8f2b61f2-72c2-4607-8f64-9e1d1c19960b" />

### Smart Contracts Based on Solidity version < 0.8.24

- **Note**: smart contracts with solidity version **\< 0.8.24** are unaffected and can operate as usual.

- The legacy testnet (testnet1) supports the Paris EVM version and does not support newer versions like Shanghai and Cancun
