---
sidebar_label: Bridging Tokens Using LayerZero
hide_table_of_contents: false
sidebar_position: 2
---

# Bridging Tokens to Core With LayerZero (OFT V2)

![Core LayerZero OFT](https://github.com/user-attachments/assets/ac7382c0-6825-4fb8-91c2-5e022a2eca66)

This guide details the process of enabling cross-chain ERC-20 token transfers on Core using LayerZero's Omnichain Fungible Token (OFT) V2 protocol. It is designed for both beginners and experienced developers, providing step-by-step instructions and references to official resources and the [CoreDAO-LayerZero GitHub repository](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide).

## Overview

This documentation walks you through the process of setting up cross-chain token transfers using LayerZero's OFT V2 protocol. The main focus is on enabling ERC-20 token transfers between Core testnet/mainnet and other EVM-compatible networks such as Base Sepolia and Optimism. By following this guide, you will learn to:

- Set up and configure your development environment for cross-chain deployments.
- Deploy and verify OFT contracts on Core and external networks.
- Configure LayerZero endpoints and establish secure, trusted remotes.
- Execute and track cross-chain token transfers.
- Customize the OFT setup for your own token requirements.

For reference, you can also consult the [CoreDAO-LayerZero GitHub repository](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) for code samples and detailed walkthroughs.

## Prerequisites

- **Node.js v18+** and **npm**/**pnpm** installed
- **MetaMask Wallet** with funds in Core and desired networks
- Basic familiarity with Hardhat and Solidity

## Environment Setup

1. **Initialize Your Project**

   ```js
   npx create-lz-oapp@latest
   # Choose "OFT example" and "pnpm"
   cd your-project-name

   ```

2. **Configure Networks**

   Update `hardhat.config.ts` with Core and other EVM network settings:

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

## Deploying OFT Contracts

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

1. **Deploy to Core Network**

   ```bash
   npx hardhat lz:deploy
   # Select 'coredao-mainnet' or 'coredao-testnet'
   ```

2. **Verify Deployment (Optional)**

   ```bash
   npx hardhat verify --network coredao-mainnet DEPLOYED_CONTRACT_ADDRESS
   ```

## Configuring Cross-Chain Connections

1. **Create LayerZero Pathways Configuration**

   In `layerzero.config.ts`:

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

2. **Wire the Connections**

   ```bash
   npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts
   ```

3. **Verify Peers**

   ```bash
   npx hardhat lz:oapp:peers:get --oapp-config layerzero.config.ts
   ```

## Executing Cross-Chain Token Transfers

To send tokens cross-chain between your contracts using LayerZero technology, you’ll need to create a custom Hardhat task.

1. **Create the Task Folder**
   In your project root, create a folder named **tasks** if it doesn't already exist.

```shell
mkdir tasks
```

2. **Create the Task File**
   Inside the tasks directory, create a file named:

```bash
sendOFT.ts
```

3. **Add the Task Code**

Copy and paste the following Hardhat task into `sendOFT.ts`:

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

4. **Execute Cross chain Transfer**

   Go back to your `hardhat.config.ts` file, and uncomment: import './tasks/sendOFT

   Open your terminal in the root of your working directory, and run the following command:

```shell
npx hardhat lz:oft:send --contract-a 0x… --recipient-b 0x… --network-a coredao-mainnet --network-b desired-network --amount 100 --private-key <PRIVATE_KEY>
```

5. **Track Transfers**

   Use [LayerZero Scan Explorer](https://layerzeroscan.com) to monitor cross-chain transactions:

```
https://layerzeroscan.com/tx/TX_HASH
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
