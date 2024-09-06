---
sidebar_label: Verificación de Contrato
hide_table_of_contents: false
sidebar_position: 2
---

# Verificación de Contrato

---

En el interés de la transparencia, nosotros recomendamos verificar todos los contratos en [Core Scan](https://scan.coredao.org/). Let’s check out a few of the common methods for verifying contracts, via the web, API, and Hardhat.

:::note
Make sure that your smart contract follows the [Solidity Support Guidelines by Core Chain](./smart-contract-guidelines.md), to do so ensure that the `evmVersion` parameter is set to `paris` under the solidity compiler settings.
:::

## Web Verification via Core Scan

Web verification is the most commonly used smart contract verification strategy. After deploying your smart contract to Core, you can use its source code to verify it on Core Scan.

1. Search for the contract by address on [Core Scan](https://scan.test.btcs.network).
2. After locating the contract, select the **Contract** tab and click **Verify and Publish**_._

![verify-core-scan](../../static/img/contract-verification/contract-verify-1.avif)

3\. Fill in the required verification information on the page, specifically:

- Contract address;
- Compiler type: for simple contracts, select the `Single File` compiler type. For more complex contracts, such as contracts with external imports, select the `Standard Json` compiler type;
- Compiler version;
- Open-source license type;

![verify-core-scan](../../static/img/contract-verification/contract-verify-2.avif)

4\. On the next page, fill in the contract's Solidity source code.

If your contract has constructor parameters, we recommend adding them in the `Constructor Arguments` field, although it’s not mandatory. The constructor parameters should be formatted as ABI-encoded bytes. Remix and other tools can generate these for you.

If you enabled optimization during contract compilation, select "Yes" for the `Optimization` field.

![verify-contract](../../static/img/contract-verification/contract-verify-3.avif)

5\. Click on **Verify and Publish** to finish the process.

![verify-contract](../../static/img/contract-verification/contract-verify-4.avif)

Now your verified contract on Core Scan should look like this:

![verify-contract](../../static/img/contract-verification/contract-verify-5.avif)

## API Verification

You can find the guide to using the Core API to verify contracts [here](https://docs.coredao.org/docs/api/api-documents/contracts). Please note that to make API calls you must register on Core Scan and generate an API key.

If you're familiar with the Etherscan API, you're in luck! The API calls on Core are 100% compatible with the Etherscan API. You just need to replace the API key and endpoint URL and everything should work properly.

## HardHat Verification

HardHat verification is the most convenient way for developers to verify smart contracts. For more information on Hardhat verification, refer to the official Hardhat verification guide located [here](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify).

Please note that you’ll need to add Core networks as custom chains, as seen below in a sample HardHat config:

```javascript
/**
* @type import('hardhat/config').HardhatUserConfig
*/


const { PrivateKey } = require('./secret.json');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  defaultNetwork: 'testnet',

  networks: {
     hardhat: {
     },
     testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [PrivateKey],
        chainId: 1115,
     },
     mainnet: {
       url: 'https://rpc.coredao.org',
       accounts: [PrivateKey],
       chainId: 1116,
    },
  },
  etherscan: {
   apiKey: {
     testnet: "api key",
     mainnet: "api key"
   },
   customChains: [
     {
       network: "testnet",
       chainId: 1115,
       urls: {
         apiURL: "https://api.test.btcs.network/api",
         browserURL: "https://scan.test.btcs.network/"
       }
     },
     {
       network: "mainnet",
       chainId: 1116,
       urls: {
         apiURL: "https://openapi.coredao.org/api",
         browserURL: "https://scan.coredao.org/"
       }
     }
   ]
 },
 
  solidity: {
     compilers: [
       {
          version: '0.8.9',
          settings: {
             optimizer: {
                enabled: false,
                runs: 200,
             },
          },
       }
     ],
  },
  paths: {
     sources: './contracts',
     cache: './cache',
     artifacts: './artifacts',
  },
  mocha: {
     timeout: 20000,
  },
};

```

## Known Limitations

- Currently Core only supports solc compiler versions up to 0.8.19.
- Libraries are not supported using API verifications.
- If you run into issues verifying very large (1000+ lines) single file contracts, we recommend switching to `Standard JSON` format for verification.
