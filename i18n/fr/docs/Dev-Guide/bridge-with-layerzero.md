---
sidebar_label: Pontage de Jetons vers Core avec LayerZero
hide_table_of_contents: false
sidebar_position: 2
---

# Passerelle de Jetons vers Core avec LayerZero (OFT V2)

![Core LayerZero OFT](https://github.com/user-attachments/assets/ac7382c0-6825-4fb8-91c2-5e022a2eca66)

Ce guide détaille le processus d'activation des transferts de jetons ERC-20 inter-chaînes sur Core en utilisant le protocole Omnichain Fungible Token (OFT) V2 de LayerZero. Il est conçu à la fois pour les débutants et les développeurs expérimentés, offrant des instructions étape par étape et des références aux ressources officielles et à la documentation pertinente[CoreDAO-LayerZero GitHub repository](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide).

## Aperçu

Cette documentation vous guide à travers le processus de configuration des transferts de jetons inter-chaînes en utilisant le protocole OFT V2 de LayerZero. L'objectif principal est de permettre les transferts de jetons ERC-20 entre le testnet/mainnet Core et d'autres réseaux compatibles EVM, tels que Base Sepolia et Optimism. En suivant ce guide, vous apprendrez à:

- Configurer et configurer votre environnement de développement pour les déploiements inter-chaînes.
- Déployer et vérifier les contrats OFT sur Core et les réseaux externes.
- Configurer les points de terminaison LayerZero et établir des distants sécurisés et fiables.
- Exécuter et suivre les transferts de jetons inter-chaînes.
- Personnaliser la configuration OFT pour répondre aux besoins spécifiques de votre jeton.

Pour référence, vous pouvez également consulter la [CoreDAO-LayerZero GitHub repository](https://github.com/coredao-org/LZ-OFT-V2-Core-Guide) pour des exemples de code et des guides détaillés.

## Prérequis

- **Node.js v18+** and **npm**/**pnpm** installed
- **MetaMask Wallet** avec des fonds sur Core et les réseaux ciblés
- Connaissances de base de Hardhat et Solidity

## Configuration de l'environnement

1. **Initialiser votre projet**

  ```js
  npx create-lz-oapp@latest
  # Choose "OFT example" and "pnpm"
  cd your-project-name

  ```

2. **Configurer les réseaux**

  Mettez à jour `hardhat.config.ts` avec les paramètres de Core et d'autres réseaux EVM :

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

## Déploiement du contrat OFT

````
Modifiez le contrat OFT pour permettre la création de jetons. Allez dans `contracts/MyOFT.sol` et mettez à jour le code comme suit 

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

1. **Déployer sur le réseau Core**

  ```bash
  npx hardhat lz:deploy
  # Select 'coredao-mainnet' or 'coredao-testnet'
  ```

2. **Vérifier le déploiement (facultatif)**

  ```bash
  npx hardhat verify --network coredao-mainnet DEPLOYED_CONTRACT_ADDRESS
  ```

## Configuration des connexions inter-chaînes

1. **Créer une configuration de chemins LayerZero**

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

2. **Câbler les connexions**

  ```bash
  npx hardhat lz:oapp:wire --oapp-config layerzero.config.ts
  ```

3. **Verify Peers(Vérifier les pairs)**

  ```bash
  npx hardhat lz:oapp:peers:get --oapp-config layerzero.config.ts
  ```

## Exécuter des transferts de jetons inter-chaînes

Pour envoyer des jetons inter-chaînes entre vos contrats en utilisant la technologie LayerZero, vous devrez créer une tâche Hardhat personnalisée.

1. **Créez le dossier des tâches**
  Dans la racine de votre projet, créez un dossier nommé **tasks** s'il n'existe pas déjà.

```shell
mkdir tasks
```

2. **Créez le fichier de tâche**
  Dans le répertoire des tâches, créez un fichier nommé:

```bash
sendOFT.ts
```

3. **Ajoutez le code de la tâche**

Collez la tâche Hardhat suivante dans le fichier `sendOFT.ts`:

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

4. **Exécutez le transfert inter-chaînes**

  Retournez à votre fichier `hardhat.config.ts` et décommentez : import './tasks/sendOFT

  Ouvrez votre terminal dans la racine de votre répertoire de travail et exécutez la commande suivante :

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
