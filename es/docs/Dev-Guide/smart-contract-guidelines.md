---
sidebar_label: Directrices para contratos inteligentes
hide_table_of_contents: false
sidebar_position: 2
description: Guidelines for Solidity Support for Developing Smart Contracts on Core
---

# Smart Contract Development Guidelines for Core

---

Core is constantly evolving for better user and developer experience. This document aims to provide clear instructions for developers on the supported Solidity versions and the necessary settings to ensure your smart contracts are correctly deployed and verifiable on the Core network. To maintain consistency and compatibility, Core blockchain supports Solidity versions higher than 0.8.19 using the **Paris** EVM. Cumplir con esta versión especificada y con las pautas de configuración es crucial para el perfecto funcionamiento de sus contratos. The following sections will detail the recommended Solidity settings, including compiler options and verification procedures, to help you achieve a smooth and secure contract deployment on Core blockchain.

## Background

Por el momento, EVM de Core coincide con la versión **Paris** y _no admite_ la implementación y verificación de contratos inteligentes de la versión **0.8.20^** con la configuración EVM predeterminada. Core se está actualizando a la última versión de EVM y se prevé que finalice a principios del tercer trimestre de 2024.

## Configuraciones para implementar correctamente contratos inteligentes en Core

To make sure that the lag in support for deployment and verification of smart contracts of version **0.8.20^** does not stagger the developement of dapps on the Core, following are the guidelines to ensure that developers can successfully deploy and verify smart contracts of version 0.8.20^ on Core before the Core EVM upgrade.

### Configuración de EVM

Para admitir la ejecución de contratos inteligentes con Solidity versión 0.8.20^, los desarrolladores _no deben usar la configuración EVM predeterminada_ para compilar los contratos inteligentes. En su lugar, deben _elegir la versión más reciente antes de Shanghai_, que es **París**.

#### Hardhat

- Agregue `evmVersion: "paris"` en las configuraciones del compilador de solidez.

![hardhat-solidity-setting](../../static/img/solidity-support/evm-setting.jpg)

#### Remix

- Elija `paris` en la configuración del compilador.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Verificación de contrato

- Para facilitar el proceso de verificación, Core Scan ha cambiado la versión EVM predeterminada de la plataforma a **Paris** para la versión de solidez **0.8.20^**.
- Developers can take the exact same steps to verify their smart contracts with version 0.8.20^ as of the older versions, refer [here](./contract-verify.md) for more details on contract verification on Core blochain.

### Contratos inteligentes basados ​​en Solidity versión <0.8.20

- Tenga en cuenta que para los contratos inteligentes con versión de solidez **\< 0.8.20** _no_ se ven afectados por esto y pueden funcionar como de costumbre.
