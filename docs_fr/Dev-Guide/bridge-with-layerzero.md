---
sidebar_label: Passerelle de Jetons vers Core avec LayerZero
hide_table_of_contents: false
sidebar_position: 2
---

# Passerelle de Jetons vers Core avec LayerZero

---&#x20;

Ce guide décrit les étapes pour transférer vos jetons ERC-20 vers Core en utilisant des Omnichain Fungible Tokens (OFT) via LayerZero. Le protocole LayerZero permet des communications inter-chaînes fluides, permettant à vos jetons de fonctionner sur plusieurs chaînes. Please refer to LayerZero for all the[ supported source blockchains](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids).

## Overview

Before proceeding, you should be aware of what omnichain fungible tokens and the LayerZero protocol are.&#x20

**Omnichain Fungible Token (OFT)**: Enables the creation of tokens native to multiple chains, simplifying token management and enhancing interoperability.

**LayerZero Protocol**: Serves as foundational technology for cross-chain interactions, providing a reliable method for different blockchains to communicate, ensuring secure and efficient transactions.

## Bridging Existing ERC-20 Tokens to Core

### Deploy LayerZero ProxyOFTV2 Contract on the Source Chain

First, **access the ProxyOFTV2 contract** by retrieving the `ProxyOFTV2` contract code from the[ official repository](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/ProxyOFTV2.sol).

Then\*\*, adjust the ProxyOFTV2 contract for the source blockchain\*\*, like this:

```
constructor(
        address _token,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Here's some context on what's present in this code snippet:

- **Token Contract Address** (`_token`): Provide the ERC-20 token contract address for a contract that's already been deployed on the source chain. If your token was USDC on Ethereum, for example, you’d use contract address [0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)
- **Shared Decimals** (`_sharedDecimals`): Set the number of decimal places for the token in the LayerZero environment. The shared decimals normalize the differences between data type across EVM and non-EVM chains. It is a good practice to use a smaller shared decimal point on all chains so that your token can have a larger balance.
  - If your token is deployed on non-EVM chains, it should be set as the lowest decimals across all chains.
  - If your tokens are only deployed on EVM chains and all have decimals larger than eight, this value should be set as `8`.
  - Please refer to this[ LayerZero doc](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2#what-should-i-set-as-shared-decimals) for more info.
- **LayerZero Endpoint Address for Source Chain** (`_lzEndpoint`): This endpoint address is required for the contract to interact with the LayerZero protocol. For example, Ethereum endpoint: 0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675.
- Please refer to the[ LayerZero documentation](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) for the endpoints for supported blockchains.

Finally, **deploy the `ProxyOFTV2` contract** to the chosen source blockchain.

### Deploy LayerZero OFTV2 Contract on Core Chain

First, **access the OFTV2 contract** by retrieving the `ProxyOFTV2` contract code from the[ official repository](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/OFTV2.sol).

\
Then, **prepare parameters for OFTV2 Contract deployment on Core Chain**, like so:

```
constructor(
        string memory _name,
        string memory _symbol,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Here's some context on what's happening in this code snippet:

- **Token Name** (`_name`): Specify your token name (e.g. USD Coin)
- **Token Symbol** (`_symbol`): Specify your token symbol (e.g. USDC)
- **Shared Decimals** (`_sharedDecimals`): Match the shared decimals in the `ProxyOFTV2` on the source chain.
- **LayerZero Endpoint Address for Core Chain** (`_lzEndpoint`): The endpoint address for Core Chain is `0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4`.
- Please refer to the[ LayerZero documentation](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) for endpoints of the supported blockchains.

Finally, **deploy the Contract on CoreDAO:** deploy this OFTV2 contract to the Core blockchain.

### Linking Contracts via Trusted Remotes

The term "trusted remote" comes from EVM-to-EVM messaging, and refers to the 40 bytes that identify the contract from which you will receive messages in your LayerZero User Application contract. The 40 bytes object is the packed bytes of the `remoteAddress` and the `localAddress`.

You can generate `TrustedRemote` using `ethers.js`:

```
// the trusted remote (or sometimes referred to as the path or pathData)
// is the packed 40 bytes object of the REMOTE + LOCAL user application contract addresses

let trustedRemote = hre.ethers.utils.solidityPack(
    ['address','address'],
    [remoteContract.address, localContract.address]
)
```

On the source blockchain, call the `ProxyOFTV2` contract's  `setTrustedRemoteAddress` function with the following parameters:

- `trustedRemote`: This is the 40 bytes generated by trusted remote in the previous step
- `localContract`: This is the source chain’s `ProxyOFTV2` contract address.
- `remoteContract`: This is the Core chain’s `OFTV2` contract address

On the Core blockchain, call the `OFTV2` contract's `setTrustedRemoteAddress` function with the following parameters:

- `trustedRemote`: This is the 40 bytes generated by trusted remote in the previous step.
- `localContract`: This is the Core chain’s `OFTV2` contract address.
- `remoteContract`: This is the source chain’s `ProxyOFTV2` contract address

For more info, please refer to the[ LayerZero guide for setting trusted remotes](https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes) to link your contracts across the two networks.

### Set Minimum Gas Limit for Each Chain

You'll need to set the minimum gas limit for each chain. It's advisable to use a 200k minimum for all EVM chains; the only major exception is Arbitrum, where the gas limit should be 2M. Here are the steps.

First, call `setMinDstGas` on the source chain (Core’s[ chainId is 153](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids)). Be sure to include the packet type ("0" means send, "1" means send and call) and the gas limit amount.

Then, call `setMinDstGas` on Core Chain with the[ chainId of the source chain](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids). Be sure to include the packet type ("0" meaning send, "1" meaning send and call) and the gas limit amount.

Finally, make sure that your `AdapterParams` gas limit is greater than `setMinDstGas`.

For more info, please refer to the[ LayerZero guide](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2).

### Transfer Tokens Cross-Chain

Here, we'll cover the basic steps involved in transferring tokens across chains.

First, ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

Then, clone the `oft-transfer-script` repository found [here](https://github.com/LayerZero-Labs/oft-transfer-script/tree/main).

With that done, navigate to the `hardhat` folder in the cloned repository and run `npm install` to install the required npm packages.

Next, create an `.env` file in the root directory of the repository and add the following variables:

- `RPC_ENDPOINT`: This should be the URL of your Ethereum JSON RPC endpoint.
- `PRIVATE_KEY`: The private key of the Ethereum address you intend to use with the script.&#x20

Here's a code snippet explaining how the `RPC_ENDPOINT` and `PRIVATE_KEY` should be configured:

```
RPC_ENDPOINT=<Your_RPC_Endpoint_URL> 
PRIVATE_KEY=<Your__Private_Key>
```

Finally, run the FT Token Transfer script. This script is designed to interact with the OFT smart contract to facilitate token transfers using `estimateFees()` and `sendFrom()`. Here's a little more context on what these methods accomplish:

- `estimateFees()`: This function provides an estimate of the fees required to send a certain amount of tokens.
- `sendFrom()`: This function allows you to send tokens from one address on the source blockchain to another on the destination.

Here's a code snippet showing how to transfer tokens with `sendFrom`:&#x20

```
npx hardhat sendFrom --qty 100000000000000 --network core
```

### Manual Transfers via Etherscan

If your `ProxyOFT` contract is registered on Etherscan, you can use the Etherscan user interface to transfer your ERC20 tokens manually by calling the `sendFrom()` function with the following parameters:

- `from`: This is the sender’s address on Ethereum.
- `dstChainId`: LayerZero’s unique chain ID for the receiving chain (we’ll use [chainId 153](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) for Core chain).
- `toAddress`: The intended recipient’s address on Core chain.
- `amount`: The number of tokens **in wei units.**
- `refundAddress`: This is the address where gas refunds will be sent if necessary. It's wise to use the sender’s address as the refund address.
- `zroAddress`: On Etherscan, the "zero address" is `0x0000000000000000000000000000000000000000`.
- `adapterParams`: 0x
- `nativeFee`: you can calculate the native fee by calling the `estimateSendFee` function on the same contract using the same `remoteChainId`, `toAddress`, `amount`, `useZro`, and `adapterParams` above.

## LayerZero Integration Checklist

Please refer to the[ checklist](https://layerzero.gitbook.io/docs/evm-guides/layerzero-integration-checklist) to prepare for a Mainnet deployment.
