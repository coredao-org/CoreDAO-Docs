---
sidebar_label: Directrices para contratos inteligentes
hide_table_of_contents: false
sidebar_position: 2
description: Directrices para el soporte de solidez para el desarrollo de contratos inteligentes en Core
---

# Directrices para el desarrollo de contratos inteligentes en Core

---

Core blockchain evoluciona constantemente para brindar una mejor experiencia de usuario y desarrollador. Este documento proporciona instrucciones claras para los desarrolladores sobre las versiones compatibles de Solidity y las configuraciones necesarias para garantizar que sus contratos inteligentes se implementen correctamente y sean verificables en la red Core. Para mantener la coherencia y la compatibilidad, Core blockchain admite versiones de Solidity superiores a **0.8.24** utilizando la versión **Shanghai** EVM. Cumplir con esta versión especificada y con las pautas de configuración es crucial para el perfecto funcionamiento de sus contratos. Para mantener la coherencia y la compatibilidad, Core blockchain admite versiones de Solidity superiores a **0.8.24** utilizando la versión **Shanghai** Evm.

## Configuraciones recomendadas para implementar contratos inteligentes en Core

Currently, Core's EVM matches version **Shanghai** and does not support the verification of smart contracts deployed with Solidity version **0.8.24^** with default EVM settings for popular IDEs. To make sure that the lag in support for deployment and verification of smart contracts of version `0.8.24^` does not stagger the development of dapps on Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version `0.8.24^` on Core.

### Configuración de EVM

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

### Verificación de contrato

- Para simplificar el proceso de verificación, la versión EVM predeterminada para Core Scan está configurada en **Shanghai** para la versión de solidez **0.8.24^**.
- Los desarrolladores pueden seguir los mismos pasos para verificar sus contratos inteligentes con la versión 0.8.24^ que con las versiones anteriores. Consulte [aquí](./contract-verify.md) para obtener más detalles sobre la verificación de contratos en Core blockchain.
- To verify the smart contracts deployed on the Core Legacy Testnet (1115), set the `EVM Version to target` in the **Misc Settings** on the contract verification page to `paris`.

<img width="710" alt="image" src="https://github.com/user-attachments/assets/8f2b61f2-72c2-4607-8f64-9e1d1c19960b" />

### Contratos inteligentes basados ​​en Solidity versión <0.8.24

- **Nota**: los contratos inteligentes con la versión solidity **\< 0.8.24** no se ven afectados y pueden funcionar como de costumbre.

