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

Actualmente, EVM de Core coincide con la versión **Shanghai** y no admite la implementación y verificación de contratos inteligentes de la versión **0.8.24^** con la configuración EVM predeterminada. To make sure that the lag in support for deployment and verification of smart contracts of version 0.8.24^ does not stagger the development of dapps on the Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version `0.8.24^` on Core.

### Configuración de EVM

To support running smart contracts with Solidity version **0.8.24^** on Core Mainnet (1116), Testnet2 (1114) and Testnet (1115), developers **_should_** choose the **Shanghai** EVM version and **not** the default EVM versions to compile and deploy the smart contracts.

#### Deployment Using Hardhat

- Please add `evmVersion: "shanghai"` in solidity compiler configurations.

![configuración-de-solidez-del-casco](../../static/img/solidity-support/configuración-del-casco-evm.png)

#### Deployment Using Remix IDE

- Please choose `shanghai` in compiler configurations.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Verificación de contrato

- Para simplificar el proceso de verificación, la versión EVM predeterminada para Core Scan está configurada en **Shanghai** para la versión de solidez **0.8.24^**.
- Los desarrolladores pueden seguir los mismos pasos para verificar sus contratos inteligentes con la versión 0.8.24^ que con las versiones anteriores. Consulte [aquí](./contract-verify.md) para obtener más detalles sobre la verificación de contratos en Core blockchain.

### Contratos inteligentes basados ​​en Solidity versión <0.8.24

- **Nota**: los contratos inteligentes con la versión solidity **\< 0.8.24** no se ven afectados y pueden funcionar como de costumbre.

