---
sidebar_label: Directrices para contratos inteligentes
hide_table_of_contents: false
sidebar_position: 2
description: Directrices para el soporte de solidez para el desarrollo de contratos inteligentes en Core
---

# Directrices de desarrollo de contratos inteligentes para Core

---

Core evoluciona constantemente para mejorar la experiencia de los usuarios y desarrolladores. Este documento tiene como objetivo proporcionar instrucciones claras para los desarrolladores sobre las versiones compatibles de Solidity y las configuraciones necesarias para garantizar que sus contratos inteligentes se implementen correctamente y sean verificables en la red Core. Para mantener la coherencia y la compatibilidad, Core blockchain admite versiones de Solidity superiores a 0.8.19 utilizando **Paris** EVM. Cumplir con esta versión especificada y con las pautas de configuración es crucial para el perfecto funcionamiento de sus contratos. Las siguientes secciones detallarán las configuraciones recomendadas de Solidity, incluidas las opciones del compilador y los procedimientos de verificación, para ayudarlo a lograr una implementación de contrato segura y sin problemas en Core blockchain.

## Background

Por el momento, EVM de Core coincide con la versión **Paris** y _no admite_ la implementación y verificación de contratos inteligentes de la versión **0.8.20^** con la configuración EVM predeterminada. Core se está actualizando a la última versión de EVM y se prevé que finalice a principios del tercer trimestre de 2024.

## Configuraciones para implementar correctamente contratos inteligentes en Core

Para asegurarse de que el retraso en el soporte para la implementación y verificación de contratos inteligentes de la versión **0.8.20^** no afecte el desarrollo de dapps en el Core, a continuación se detallan las pautas para garantizar que los desarrolladores puedan implementar y verificar con éxito los contratos inteligentes. contratos de la versión 0.8.20^ en Core antes de la actualización de Core EVM.

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
- Los desarrolladores pueden seguir exactamente los mismos pasos para verificar sus contratos inteligentes con la versión 0.8.20^ que en las versiones anteriores; consulte [aquí](./contract-verify.md) para obtener más detalles sobre la verificación de contratos en Core blochain.

### Contratos inteligentes basados ​​en Solidity versión <0.8.20

- Tenga en cuenta que para los contratos inteligentes con versión de solidez **\< 0.8.20** _no_ se ven afectados por esto y pueden funcionar como de costumbre.
