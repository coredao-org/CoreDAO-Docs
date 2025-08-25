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

Actualmente, la EVM de Core coincide con la versión Shanghai y no admite la verificación de contratos inteligentes implementados con Solidity versión 0.8.24 o superior con la configuración EVM predeterminada para los IDE populares. Para asegurarse de que el retraso en el soporte para la implementación y verificación de contratos inteligentes de la versión `0.8.24^` no afecte el desarrollo de dapps en el Core, a continuación se detallan pautas para garantizar que los desarrolladores puedan implementar y verificar con éxito los contratos inteligentes de la versión `0.8.24^` en Core.

### Configuración de EVM

Para admitir la ejecución de contratos inteligentes con la versión **0.8.24^** de Solidity en Core Mainnet (1116) and Testnet2 (1114), los desarrolladores **_deberían_** elegir la versión EVM **Shanghai** y **no** las versiones EVM predeterminadas para compilar y desplegar los contratos inteligentes.

#### Despliegue usando Hardhat

- Para Core Mainnet y Testnet2, agrega \`evmVersion: "shanghai" en las configuraciones del compilador de Solidity.

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

- Se recomienda encarecidamente no usar Core Testnet1 (chainID: 1115) ya que ahora está obsoleto y no se mantiene.

#### Despliegue usando Remix IDE

- Para Core Mainnet y Testnet2, elige `shanghai` en las configuraciones del compilador.

<p align="center">
<img width="277" alt="image" src="https://github.com/user-attachments/assets/a528a516-8dfe-44bf-a0fc-34814f284cca" />
</p>

### Verificación de contrato

- Para simplificar el proceso de verificación, la versión EVM predeterminada para Core Scan está configurada en **Shanghai** para la versión de solidez **0.8.24^**.
- Los desarrolladores pueden seguir los mismos pasos para verificar sus contratos inteligentes con la versión `0.8.24^` como en las versiones anteriores. Consulte [aquí](./contract-verify.md) para obtener más detalles sobre la verificación de contratos en Core blockchain.

### Contratos inteligentes basados ​​en Solidity versión <0.8.24

- **Nota**: los contratos inteligentes con la versión solidity **\< 0.8.24** no se ven afectados y pueden funcionar como de costumbre.
