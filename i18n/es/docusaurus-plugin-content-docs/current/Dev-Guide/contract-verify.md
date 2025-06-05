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
Asegúrese de que su contrato inteligente siga las [Pautas de soporte de Solidity de Core Chain](./smart-contract-guidelines.md). Para cumplir con estas directrices, configure el parámetro `evmVersion` a `paris` en los ajustes del compilador de Solidity.
:::

## Verificación web mediante Core Scan

La verificación web es la estrategia de verificación de contratos inteligentes más utilizada. Después de implementar su contrato inteligente en Core, puede usar su código fuente para verificarlo en Core Scan.

1. Vaya al sitio web de Core Scan.

- [Para Core Mainnet](https://scan.coredao.org/)
- [Para Core Testnet2](https://scan.test.btcs.network)
- [Para Core Legacy Testnet](https://scan.test.btcs.network)

2. Busque el contrato por dirección en Core Scan. Simplemente pegue la dirección del contrato en la barra de búsqueda del sitio web.
3. Después de ubicar el contrato, seleccione la pestaña **Contrato** y haga clic en **Verificar y publicar**_._

<p align="center">
![verify-core-scan](../../../../../static/img/contract-verification/contract-verify-1.avif)
</p>

4\. Complete la información de verificación requerida en la página, específicamente:

- Dirección del contrato;
- Tipo de compilador: para contratos simples, seleccione el tipo de compilador "Archivo único". Para contratos más complejos, como contratos con importaciones externas, seleccione el tipo de compilador "Standard Json";
- Versión del compilador;
- Tipo de licencia de código abierto;

<p align="center">
![verify-core-scan](../../../../../static/img/contract-verification/contract-verify-2.avif)
</p>

5\. En la página siguiente, complete el código fuente de Solidity del contrato.

Los parámetros del constructor deben tener el formato de bytes codificados en ABI. Si su contrato tiene parámetros de constructor, le recomendamos agregarlos en el campo "Argumentos del constructor", aunque no es obligatorio. Remix y otras herramientas pueden generarlos por usted.

Si habilitó la optimización durante la compilación del contrato, seleccione "Sí" para el campo "Optimización".

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-3.avif)
</p>

5\. Haga clic en **Verificar y publicar** para finalizar el proceso.

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-4.avif)
</p>

Ahora su contrato verificado en Core Scan debería verse así:

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-5.avif)
</p>

## Verificación API

Puede encontrar la guía sobre el uso de Core API para verificar contratos [aquí](https://docs.coredao.org/docs/api/api-documents/contracts). Tenga en cuenta que para realizar llamadas API debe registrarse en Core Scan y generar una clave API.

Si estás familiarizado con la API de Etherscan, ¡estás de suerte! Las llamadas API en Core son 100% compatibles con la API de Etherscan. Solo necesita reemplazar la clave API y la URL del punto final y todo debería funcionar correctamente.

## Verificación de Hardhat

La verificación Hardhat es la forma más conveniente para que los desarrolladores verifiquen contratos inteligentes. Para obtener más información sobre la verificación de Hardhat, consulte la guía oficial de verificación de Hardhat que se encuentra [aquí](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify).

Tenga en cuenta que deberá agregar redes Core como cadenas personalizadas, como se ve a continuación en una configuración de ejemplo de Hardhat:

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

actualiza el archivo `foundry.toml` para especificar la versión de Solidity y la versión de la EVM para tu proyecto.

```bash
[profile.default]
solidity_version = "0.8.0"  # Especifica la versión de Solidity
evm_version = "shanghai" # Especifica la version de la EVM (Para testnets antiguas, usar Paris como versión de la EVM)
```

cree un archivo .env para almacenar información sensible como su clave privada, URL RPC y claves de API. Esto ayuda a mantener tus credenciales seguras y permite referenciarlas fácilmente en tu código.

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL = "https://api.test2.btcs.network/api"
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

Foundry gestionará el proceso de verificación. Puedes utilizar [Core Scan](https://scan.test2.btcs.network/) para buscar la dirección del contrato y confirmar que fue desplegado y verificado correctamente.

## Limitaciones conocidas

- Actualmente Core solamente soporta versiones del compilador de Solidity hasta 0.8.24.
- Las bibliotecas no son compatibles con las verificaciones API.
- Si tiene problemas al verificar contratos de un solo archivo muy grandes (más de 1000 líneas), le recomendamos cambiar al formato "JSON estándar" para la verificación.
