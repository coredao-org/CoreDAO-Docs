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

Actualmente, EVM de Core coincide con la versión **Shanghai** y no admite la implementación y verificación de contratos inteligentes de la versión **0.8.24^** con la configuración EVM predeterminada. Para asegurarse de que el retraso en el soporte para la implementación y verificación de contratos inteligentes de la versión 0.8.24^ no haga tambalearse el desarrollo de dapps en el Core, las siguientes son las pautas para garantizar que los desarrolladores puedan implementar y verificar con éxito los contratos inteligentes de la versión 0.8.24^ en el Núcleo.

### Configuración de EVM

Para admitir la ejecución de contratos inteligentes con la versión **0.8.24^** de Solidity, los desarrolladores **_deberían_** elegir la versión EVM **Shanghai** y **no** las versiones EVM predeterminadas para compilar e implementar los contratos inteligentes.

#### Hardhat

- Agregue `evmVersion: "shanghai"` en las configuraciones del compilador de solidez.

![configuración-de-solidez-del-casco](../../static/img/solidity-support/configuración-del-casco-evm.png)

#### Remix

- Elija `shanghai` en la configuración del compilador.

![remix-solidity-setting](../../static/img/solidity-support/remix-setting.png)

### Verificación de contrato

- Para simplificar el proceso de verificación, la versión EVM predeterminada para Core Scan está configurada en **Shanghai** para la versión de solidez **0.8.24^**.
- Los desarrolladores pueden seguir los mismos pasos para verificar sus contratos inteligentes con la versión 0.8.24^ que con las versiones anteriores. Consulte [aquí](./contract-verify.md) para obtener más detalles sobre la verificación de contratos en Core blockchain.

### Contratos inteligentes basados ​​en Solidity versión <0.8.24

- **Nota**: los contratos inteligentes con la versión solidity **\< 0.8.24** no se ven afectados y pueden funcionar como de costumbre.
