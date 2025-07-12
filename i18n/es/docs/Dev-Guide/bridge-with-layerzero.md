---
sidebar_label: Bridge de Tokens Usando LayerZero
hide_table_of_contents: false
sidebar_position: 2
---

# Puente entre tokens y núcleo con LayerZero (OFT V2)

![Core LayerZero OFT](https://github.com/user-attachments/assets/ac7382c0-6825-4fb8-91c2-5e022a2eca66)

Esta guía detalla el proceso para habilitar transferencias cross-chain de tokens ERC-20 en Core usando el protocolo Omnichain Fungible Token (OFT) V2 de LayerZero. Está diseñada tanto para desarrolladores principiantes como experimentados, proporcionando instrucciones paso a paso y referencias a recursos oficiales y al [repositorio de GitHub de CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide).

## Visión general

Esta documentación te guía a través del proceso de configuración de transferencias de tokens entre cadenas utilizando el protocolo OFT V2 de LayerZero. El enfoque principal está en habilitar transferencias de tokens ERC-20 entre el testnet/mainnet de Core y otras redes compatibles con EVM, como Base Sepolia y Optimism. Al seguir esta guía, aprenderás a:

- Configurar tu entorno de desarrollo para implementaciones entre cadenas.
- Desplegar y verificar contratos OFT en Core y redes externas.
- Configurar los endpoints de LayerZero y establecer remotos seguros y confiables.
- Ejecutar y rastrear transferencias cross-chain de tokens.
- Personalizar la configuración OFT según los requerimientos de tu propio token.

Para referencia, también puedes consultar el [repositorio de GitHub CoreDAO-LayerZero](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) para ejemplos de código y guías detalladas.

## Requisitos previos

- **Node.js v18+** y **npm**/**pnpm** instalados
- **Wallet MetaMask** con fondos en Core y las redes deseadas
- Familiaridad básica con Hardhat y Solidity

## Configuración del entorno

1. **Inicializa tu Proyecto**

  ```js
  npx create-lz-oapp@latest
  # Choose "OFT example" and "pnpm"
  cd your-project-name

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

````
Modify the OFT contract to be able to mint the tokens, Go to `contracts/MyOFT.sol` and update the below code

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/oft-evm/contracts/OFT.sol";

contract MyOFT is OFT {
   constructor(
    string memory _name,
    string memory _symbol,
    address _lzEndpoint,
    address _delegate
) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_delegate) {
    // Mint tokens to the deployer's address (msg.sender)
    _mint(msg.sender, 100_000 \* 10 \*\* 18);
    }
}
```
````

1. **Desplegar en la Red Core**

  ```bash
  npx hardhat lz:deploy
  # Select 'coredao-mainnet' or 'coredao-testnet'
  ```

2. **Verificar Despliegue (Opcional)**

  ```bash
  npx hardhat verify --network coredao-mainnet DEPLOYED_CONTRACT_ADDRESS
  ```

## Configuración de Conexiones Cross-Chain

1. **Crear la Configuración de Pathways de LayerZero**

  En `layerzero.config.ts`:

  ```typescript
  const pathways: TwoWayConfig[] = [
    [
      optimismContract, //Chain A contract
      coredaoContract, //Chain B contract
      [["LayerZero Labs"], []], // DVN configuration
      [1, 1], // [A to B confirmations, B to A confirmations]
      [EVM_ENFORCED_OPTIONS, EVM_ENFORCED_OPTIONS],
    ],
  ];
  ```

2. **Conectar las Conexiones**

  ```bash
  npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts
  ```

3. **Verificar Peers**

  ```bash
  npx hardhat lz:oapp:peers:get --oapp-config layerzero.config.ts
  ```

## Ejecución de Transferencias de Tokens Cross-Chain

Para enviar tokens entre cadenas usando la tecnología de LayerZero, necesitarás crear una tarea custom de Hardhat.

1. **Crear la Carpeta de Tareas**
  En la raíz de tu proyecto, crea una carpeta llamada **tasks** si aún no existe.

```shell
mkdir tasks
```

2. **Crear el Task File**
  Dentro del directorio tasks, crea un archivo llamado:

```bash
sendOFT.ts
```

3. **Agregar el Task Code**

Copia y pega la siguiente task de Hardhat en `sendOFT.ts`:

```javascript
import { ethers } from "ethers";
import { task } from "hardhat/config";

import {
  createGetHreByEid,
  createProviderFactory,
  getEidForNetworkName,
} from "@layerzerolabs/devtools-evm-hardhat";
import { Options } from "@layerzerolabs/lz-v2-utilities";

// Send tokens from a contract on one network to another
task("lz:oft:send", "Send tokens cross-chain using LayerZero technology")
  .addParam("contractA", "Contract address on network A")
  .addParam("recipientB", "Recipient address on network B")
  .addParam("networkA", "Name of the network A")
  .addParam("networkB", "Name of the network B")
  .addParam("amount", "Amount to transfer in token decimals")
  .addParam("privateKey", "Private key of the sender")
  .setAction(async (taskArgs, hre) => {
    const eidA = getEidForNetworkName(taskArgs.networkA);
    const eidB = getEidForNetworkName(taskArgs.networkB);
    const contractA = taskArgs.contractA;
    const recipientB = taskArgs.recipientB;

    const environmentFactory = createGetHreByEid();
    const providerFactory = createProviderFactory(environmentFactory);
    const provider = await providerFactory(eidA);
    const wallet = new ethers.Wallet(taskArgs.privateKey, provider);

    const oftContractFactory = await hre.ethers.getContractFactory(
      "MyOFT",
      wallet
    );
    const oft = oftContractFactory.attach(contractA);

    const decimals = await oft.decimals();
    const amount = hre.ethers.utils.parseUnits(taskArgs.amount, decimals);
    const options = Options.newOptions()
      .addExecutorLzReceiveOption(200000, 0)
      .toHex()
      .toString();
    const recipientAddressBytes32 = hre.ethers.utils.hexZeroPad(recipientB, 32);

    // Estimate the fee
    try {
      console.log("Attempting to call quoteSend with parameters:", {
        dstEid: eidB,
        to: recipientAddressBytes32,
        amountLD: amount,
        minAmountLD: amount.mul(98).div(100),
        extraOptions: options,
        composeMsg: "0x",
        oftCmd: "0x",
      });
      const nativeFee = (
        await oft.quoteSend(
          [
            eidB,
            recipientAddressBytes32,
            amount,
            amount.mul(98).div(100),
            options,
            "0x",
            "0x",
          ],
          false
        )
      )[0];
      console.log("Estimated native fee:", nativeFee.toString());

      // Overkill native fee to ensure sufficient gas
      const overkillNativeFee = nativeFee.mul(2);

      // Fetch the current gas price and nonce
      const gasPrice = await provider.getGasPrice();
      const nonce = await provider.getTransactionCount(wallet.address);

      // Prepare send parameters
      const sendParam = [
        eidB,
        recipientAddressBytes32,
        amount,
        amount.mul(98).div(100),
        options,
        "0x",
        "0x",
      ];
      const feeParam = [overkillNativeFee, 0];

      // Sending the tokens with increased gas price
      console.log(
        `Sending ${taskArgs.amount} token(s) from network ${taskArgs.networkA} to network ${taskArgs.networkB}`
      );
      const tx = await oft.send(sendParam, feeParam, wallet.address, {
        value: overkillNativeFee,
        gasPrice: gasPrice.mul(2),
        nonce,
        gasLimit: hre.ethers.utils.hexlify(7000000),
      });
      console.log("Transaction hash:", tx.hash);
      await tx.wait();
      console.log(
        `Tokens sent successfully to the recipient on the destination chain. View on LayerZero Scan: https://layerzeroscan.com/tx/${tx.hash}`
      );
    } catch (error) {
      console.error("Error during quoteSend or send operation:", error);
      if (error?.data) {
        console.error("Reverted with data:", error.data);
      }
    }
  });
```

4. **Ejecutar Transferencia Cross-chain**

  Vuelve a tu archivo `hardhat.config.ts` y descomenta: import './tasks/sendOFT

  Abre tu terminal en el directorio raíz de tu proyecto de trabajo y ejecuta el siguiente comando:

```shell
npx hardhat lz:oft:send --contract-a 0x… --recipient-b 0x… --network-a coredao-mainnet --network-b desired-network --amount 100 --private-key <PRIVATE_KEY>
```

5. **Rastrear Transferencias**

  Utiliza [LayerZero Scan Explorer](https://layerzeroscan.com) para monitorear transacciones cross-chain:

```
https://layerzeroscan.com/tx/TX_HASH
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
