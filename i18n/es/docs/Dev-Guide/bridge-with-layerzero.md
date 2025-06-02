---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Puente entre tokens y núcleo con LayerZero (OFT V2)

![Core LayerZero OFT](https://github.com/user-attachments/assets/ac7382c0-6825-4fb8-91c2-5e022a2eca66)

Esta guía detalla el proceso para habilitar transferencias de tokens ERC-20 entre cadenas en Core Blockchain utilizando el protocolo Omnichain Fungible Token (OFT) V2 de LayerZero. Está diseñada tanto para desarrolladores principiantes como experimentados, proporcionando instrucciones paso a paso y referencias a recursos oficiales y al [repositorio de GitHub de CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide).

## Visión general

Esta documentación te guía a través del proceso de configuración de transferencias de tokens entre cadenas utilizando el protocolo OFT V2 de LayerZero. El enfoque principal es habilitar transferencias de tokens ERC-20 entre Core Testnet/Mainnet y otras redes compatibles con EVM como Base Sepolia y Optimism. Al seguir esta guía, aprenderás a:

- Configurar tu entorno de desarrollo para implementaciones entre cadenas.
- Desplegar y verificar contratos OFT en Core y redes externas.
- Configurar los endpoints de LayerZero y establecer remotos seguros y confiables.
- Ejecutar y rastrear transferencias cross-chain de tokens.
- Personalizar la configuración OFT según los requerimientos de tu propio token.

Para referencia, también puedes consultar el [repositorio de GitHub CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) para ejemplos de código y guías detalladas.

## Requisitos previos

- **Node.js v18+** y **npm**/**pnpm** instalados
- **Wallet Metamask** con fondos en Core y las redes deseadas
- Familiaridad básica con Hardhat y Solidity

## Configuración del entorno

1. **Inicializa tu Proyecto**

  ```js
  ```

2. **Configurar Redes**

  Actualiza `hardhat.config.ts`con la configuración de Core y otras redes EVM:

  ```typescript
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

To send tokens cross-chain between your contracts using LayerZero technology, you’ll need to create a custom Hardhat task.

1. **Create the Task Folder**
  In your project root, create a folder named **tasks** if it doesn't already exist.

```shell
```

2. **Create the Task File**
  Inside the tasks directory, create a file named:

```bash
```

3. **Add the Task Code**

Copy and paste the following Hardhat task into `sendOFT.ts`:

```javascript
```

4. **Execute Cross chain Transfer**

  Go back to your `hardhat.config.ts` file, and uncomment: import './tasks/sendOFT

  Open your terminal in the root of your working directory, and run the following command:

```shell
```

5. **Track Transfers**

  Use [LayerZero Scan Explorer](https://layerzeroscan.com) to monitor cross-chain transactions:

```
```

## Customization & Advanced Configuration

- **Token Supply**: Add minting logic to the constructor for custom supply.
- **Transfer Fees**: Adjust `quoteSend` parameters for fee management.
- **Security**: Modify DVN thresholds and trusted remote settings in config.
- **Multi-Chain Support**: Add new network entries in your Hardhat and LayerZero configs.

For further customization and advanced configuration, refer to [LayerZero’s official documentation](https://docs.layerzero.network/v2/developers/evm/oft/quickstart).

## Resources

- [CoreDAO-LayerZero GitHub Guide](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide)
- [LayerZero OFT Quickstart](https://docs.layerzero.network/v2/developers/evm/oft/quickstart)
- [LayerZero Scan Explorer](https://layerzeroscan.com)

By following this guide, you’ll be able to set up seamless cross-chain token transfers between Core and other EVM networks. For more in-depth examples and support, visit the [official GitHub repository](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) and LayerZero documentation.
