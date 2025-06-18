---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Puente entre tokens y núcleo con LayerZero (OFT V2)

![Core LayerZero OFT](https://github.com/user-attachments/assets/ac7382c0-6825-4fb8-91c2-5e022a2eca66)

This guide details the process of enabling cross-chain ERC-20 token transfers on Core using LayerZero's Omnichain Fungible Token (OFT) V2 protocol. Está diseñada tanto para desarrolladores principiantes como experimentados, proporcionando instrucciones paso a paso y referencias a recursos oficiales y al [repositorio de GitHub de CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide).

## Visión general

Esta documentación te guía a través del proceso de configuración de transferencias de tokens entre cadenas utilizando el protocolo OFT V2 de LayerZero. The main focus is on enabling ERC-20 token transfers between Core testnet/mainnet and other EVM-compatible networks such as Base Sepolia and Optimism. Al seguir esta guía, aprenderás a:

- Configurar tu entorno de desarrollo para implementaciones entre cadenas.
- Desplegar y verificar contratos OFT en Core y redes externas.
- Configurar los endpoints de LayerZero y establecer remotos seguros y confiables.
- Ejecutar y rastrear transferencias cross-chain de tokens.
- Personalizar la configuración OFT según los requerimientos de tu propio token.

Para referencia, también puedes consultar el [repositorio de GitHub CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) para ejemplos de código y guías detalladas.

## Requisitos previos

- **Node.js v18+** y **npm**/**pnpm** instalados
- **MetaMask Wallet** with funds in Core and desired networks
- Familiaridad básica con Hardhat y Solidity

## Configuración del entorno

1. **Inicializa tu Proyecto**

  ```js
  ```

2. **Configurar Redes**

  Actualiza `hardhat.config.ts`con la configuración de Core y otras redes EVM:

  ```typescript
  // Example for CoreDAO
  'coredao-mainnet': {
    eid: EndpointId.COREDAO_V2_MAINNET,
    url: process.env.RPC_URL_COREDAO || 'https://rpc.coredao.org',
    accounts: [process.env.PRIVATE_KEY]
  },
  'coredao-testnet': {
    eid: EndpointId.COREDAO_V2_TESTNET,
    url: process.env.RPC_URL_COREDAO_TESTNET || 'https://rpc.test2.btcs.network',
    accounts: [process.env.PRIVATE_KEY]
  },
  ```

## Despliegue de Contratos OFT

```
```

1. **Desplegar en la Red Core**

  ```bash
  ```

2. **Verificar Despliegue (Opcional)**

  ```bash
  ```

## Configuración de Conexiones Cross-Chain

1. **Crear la Configuración de Pathways de LayerZero**

  En `layerzero.config.ts`:

  ```typescript
  ```

2. **Conectar las Conexiones**

  ```bash
  ```

3. **Verificar Peers**

  ```bash
  ```

## Ejecución de Transferencias de Tokens Cross-Chain

Para enviar tokens entre cadenas usando la tecnología de LayerZero, necesitarás crear una tarea custom de Hardhat.

1. **Crear la Carpeta de Tareas**
  En la raíz de tu proyecto, crea una carpeta llamada **tasks** si aún no existe.

```shell
```

2. **Crear el Task File**
  Dentro del directorio tasks, crea un archivo llamado:

```bash
```

3. **Agregar el Task Code**

Copia y pega la siguiente task de Hardhat en `sendOFT.ts`:

```javascript
```

4. **Ejecutar Transferencia Cross-chain**

  Vuelve a tu archivo `hardhat.config.ts` y descomenta: import './tasks/sendOFT

  Abre tu terminal en el directorio raíz de tu proyecto de trabajo y ejecuta el siguiente comando:

```shell
```

5. **Rastrear Transferencias**

  Utiliza [LayerZero Scan Explorer](https://layerzeroscan.com) para monitorear transacciones cross-chain:

```
```

## Personalización y Configuración Avanzada

- **Token Supply**: Agrega lógica de minting al constructor para un suministro personalizado.
- **Transfer Fees**: Ajusta los parámetros de `quoteSend` para la gestión de tarifas.
- **Security**: Modifica los umbrales de DVN y la configuración de remotos confiables en el archivo de configuración.
- **Multi-Chain Support**: Agrega nuevas entradas de red en tus configuraciones de Hardhat y LayerZero.

Para más personalización y configuración avanzada, consulta la [documentación oficial de LayerZero](https://docs.layerzero.network/v2/developers/evm/oft/quickstart).

## Recursos

- [Guía de CoreDAO-LayerZero en GitHub](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide)
- [Inicio Rápido de LayerZero OFT](https://docs.layerzero.network/v2/developers/evm/oft/quickstart)
- [LayerZero Scan Explorer](https://layerzeroscan.com)

Siguiendo esta guía, podrás configurar transferencias de tokens entre cadenas de forma fluida entre Core y otras redes EVM. Para obtener ejemplos más detallados y soporte, visita el [repositorio oficial en GitHub](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) y la documentación de LayerZero.
