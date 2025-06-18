---
sidebar_label: Verificación de Contrato
hide_table_of_contents: false
sidebar_position: 2
description: Aprende cómo verificar un contrato inteligente usando Core Scan
---

# Verificación de Contrato

---

En el interés de la transparencia, nosotros recomendamos verificar todos los contratos en [Core Scan](https://scan.coredao.org/). Si bien existen varias formas de lograr la verificación del contrato, recomendamos utilizar la herramienta de verificación oficial de Core, [Core Scan](https://scan.coredao.org/), para una confiabilidad óptima. Este documento lo guía a través de los métodos más utilizados para la verificación de contratos: la herramienta web Core Scan, la API REST de Core y el complemento Hardhat Verification.

:::note
Asegúrese de que su contrato inteligente siga las [Pautas de soporte de Solidity de Core Chain] (./smart-contract-guidelines.md). Para cumplir con estas directrices, configure el parámetro `evmVersion` a `paris` en los ajustes del compilador de Solidity.
:::

## Verificación web mediante Core Scan

Web verification is the most commonly used method for smart contract verification. After deploying your smart contract onto the Core blockchain, you can use its source code to verify it on the Core Scan.

1. Navigate to the Core Scan website.

- [For Core mainnet](https://scan.coredao.org/)
- [For Core Testnet2](https://scan.test.btcs.network)

2. Busque el contrato por dirección en Core Scan. Simplemente pegue la dirección del contrato en la barra de búsqueda del sitio web.
3. Después de ubicar el contrato, seleccione la pestaña **Contrato** y haga clic en **Verificar y publicar**_._

<p align="center"></p>

4. Complete la información de verificación requerida en la página, específicamente:

- Dirección del contrato;
- Compiler type: For simple contracts, select the `Single File` compiler type. For more complex contracts, such as contracts with external imports, choose the `Standard Json` compiler type.
- Versión del compilador;
- Tipo de licencia de código abierto;

<p align="center">
![verify-core-scan](../../static/img/contract-verification/contract-verify-2.avif)
</p>

5. On the next page, please fill in the Solidity source code for the contract.

Los parámetros del constructor deben tener el formato de bytes codificados en ABI. Si su contrato tiene parámetros de constructor, le recomendamos agregarlos en el campo "Argumentos del constructor", aunque no es obligatorio. Remix y otras herramientas pueden generarlos por usted.

Si habilitó la optimización durante la compilación del contrato, seleccione "Sí" para el campo "Optimización".

<p align="center">
![verify-contract](../../static/img/contract-verification/contract-verify-3.avif)
</p>

6. Haga clic en **Verificar y publicar** para finalizar el proceso.

<p align="center">
![verify-contract](../../static/img/contract-verification/contract-verify-4.avif)
</p>

Ahora su contrato verificado en Core Scan debería verse así:

<p align="center">
![verify-contract](../../static/img/contract-verification/contract-verify-5.avif)
</p>

## Verificación API

Puede encontrar la guía sobre el uso de Core API para verificar contratos [aquí](https://docs.coredao.org/docs/api/api-documents/contracts). Please note that to make API calls, you must register on Core Scan and generate an API key.

Si estás familiarizado con la API de Etherscan, ¡estás de suerte! Las llamadas API en Core son 100% compatibles con la API de Etherscan. You just need to replace the API key and endpoint URL, and everything should work correctly.

## Hardhat Verification

Hardhat verification is the most convenient way for developers to verify smart contracts. Para obtener más información sobre la verificación de Hardhat, consulte la guía oficial de verificación de Hardhat que se encuentra [aquí](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify).

Please note that you’ll need to add Core networks as custom chains, as seen below in a sample Hardhat config:

```javascript
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const { PrivateKey } = require("./secret.json");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");


module.exports = {
  defaultNetwork: "testnet",


  networks: {
    hardhat: {},
    testnet: {
      url: "https://rpc.test2.btcs.network",
      accounts: [PrivateKey],
      chainId: 1114,
    },
    mainnet: {
      url: "https://rpc.coredao.org",
      accounts: [PrivateKey],
      chainId: 1116,
    },
  },
  etherscan: {
    apiKey: {
      testnet: "api key",
      mainnet: "api key",
    },
    customChains: [
      {
        network: "testnet",
        chainId: 1114,
        urls: {
          apiURL: "https://api.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network/",
        },
      },
      {
        network: "mainnet",
        chainId: 1116,
        urls: {
          apiURL: "https://openapi.coredao.org/api",
          browserURL: "https://scan.coredao.org/",
        },
      },
    ],
  },


  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
```

## Verificación con Foundry

Update the `foundry.toml` file to specify the Solidity version and EVM version for your project.

```bash
[profile.default]
solidity_version = "0.8.24"  # Specify the Solidity version
evm_version = "shanghai" #Specify the EVM version (For older testnet, use Paris as EVM version)
```

Create an `.env` file to store sensitive information such as your private key, RPC URL, and API keys. This helps keep your credentials secure and allows you to reference them in your code easily.

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

**Importante:** Nunca hagas commit de este archivo `.env` al control de versiones (ej. GitHub) para evitar exponer información sensible. Si estás usando git, agrega el archivo `.env` a tu `.gitignore`.

Ahora que has creado el archivo `.env`, ejecuta el siguiente comando para cargar las variables de entorno en la sesión actual de la línea de comandos:

```bash
source .env
```

Ejecute el siguiente comando para verificar su contrato inteligente

```bash
forge verify-contract 0xContract_Address ContractName  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Reemplace `0xContract_Address` y `ContractName` con la dirección real de su contrato y su nombre correspondiente.

Foundry will handle the verification process; you can use [Core Scan](https://scan.test2.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and verified.

## Limitaciones conocidas

- Currently, Core only supports solidity compiler versions up to 0.8.24.
- Las bibliotecas no son compatibles con las verificaciones API.
- If you run into issues verifying very large (1000+ lines) single-file contracts, we recommend switching to `Standard JSON` format for verification.