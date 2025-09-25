---
sidebar_label: Chainlink CCIP Guide
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chainlink CCIP Cross-Chain Token Deployment on Core

---

This guide walks you through deploying cross-chain tokens using **Chainlink CCIP** on the **Core** (Testnet or Mainnet). It adapts the official Chainlink Hardhat tutorial for Core-specific configurations.

> Based on: [Chainlink CCIP EVM Tutorial (Burn & Mint from EOA)](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial)

## What is Chainlink CCIP?

**Chainlink CCIP (Cross-Chain Interoperability Protocol)** enables secure token and data transfers across different blockchains using a unified interface.

### Key Features

- Secure cross-chain messaging and token transfers
- Programmable token logic
- Decentralized infrastructure via Chainlink nodes
- Built-in rate limiting and failover protections

[Read more about CCIP →](https://docs.chain.link/ccip)

## Core Blockchain CCIP Network Details

Use the tabs below to toggle between **Testnet** and **Mainnet** configurations:

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">

| Parameter                 | Value                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Chain Name**            | Core Testnet                                                                                                             |
| **Chain ID**              | 1114                                                                                                                     |
| **Chain Selector**        | `4264732132125536123`                                                                                                    |
| **Router**                | [0xded0EE188Fe8F1706D9049e29C82081A5ebEcb2F](https://scan.test2.btcs.network/0xded0EE188Fe8F1706D9049e29C82081A5ebEcb2F) |
| **RMN Proxy**             | [0xF39a1260F4E3345D810e1b8aA569200e1D27A998](https://scan.test2.btcs.network/0xF39a1260F4E3345D810e1b8aA569200e1D27A998) |
| **Token Admin Registry**  | [0x2c99403fDB26F654c410D81264033faE289fa7Ea](https://scan.test2.btcs.network/0x2c99403fDB26F654c410D81264033faE289fa7Ea) |
| **Registry Module Owner** | [0xfaE626f209B036B03D18d4f16ad3D599f90AF22c](https://scan.test2.btcs.network/0xfaE626f209B036B03D18d4f16ad3D599f90AF22c) |
| **RPC URL**               | https://rpc.test2.btcs.network                           |

Fee Tokens

| Token      | Address                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| **LINK**   | [0x6C475841d1D7871940E93579E5DBaE01634e17aA](https://scan.test2.btcs.network/0x6C475841d1D7871940E93579E5DBaE01634e17aA)   |
| **WCORE**  | [0x7Ce54aE289e480cbDfd32e531F75947CFA3d1aC3d](https://scan.test2.btcs.network/0x7Ce54aE289e480cbDfd32e531F75947CFA3d1aC3d) |
| **tCORE2** | Native Gas Token                                                                                                           |

:::note
Refer to the [CCIP Directory for Core](https://docs.chain.link/ccip/directory/testnet/chain/core-testnet) for latest data.
:::

</TabItem>

<TabItem value="mainnet">

| Parameter                 | Value                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Chain Name**            | Core Mainnet                                                                                                              |
| **Chain ID**              | 1116                                                                                                                      |
| **Chain Selector**        | `1224752112135636129`                                                                                                     |
| **Router**                | [0x3902228D6A3d2Dc44731fD9d45FeE6a61c722D0b](https://scan.coredao.org/address/0x3902228D6A3d2Dc44731fD9d45FeE6a61c722D0b) |
| **RMN Proxy**             | [0x1e9B034c67B6eA4cB819aA8BE4E84cff2d5417fb](https://scan.coredao.org/address/0x1e9B034c67B6eA4cB819aA8BE4E84cff2d5417fb) |
| **Token Admin Registry**  | [0x4D2B43c60f3e476Ee94637C4e3be844FC9a70012](https://scan.coredao.org/address/0x4D2B43c60f3e476Ee94637C4e3be844FC9a70012) |
| **Registry Module Owner** | [0x6d10fF9a987d3C05e373cCbcb17f38287318c50e](https://scan.coredao.org/address/0x6d10fF9a987d3C05e373cCbcb17f38287318c50e) |
| **RPC URL**               | https://rpc.coredao.org                                                   |

Fee Tokens

| Token     | Address                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| **LINK**  | [0x3902228D6A3d2Dc44731fD9d45FeE6a61c722D0b](https://scan.coredao.org/address/0x3902228D6A3d2Dc44731fD9d45FeE6a61c722D0b) |
| **WCORE** | [0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f](https://scan.coredao.org/address/0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f) |
| **CORE**  | Native Gas Token                                                                                                          |

:::note
Refer to the [CCIP Directory for Core](https://docs.chain.link/ccip/directory/mainnet/chain/core-mainnet) for latest data.
:::

</TabItem>
</Tabs>

## Project Configuration for Core Blockchain

To integrate **Core Testnet/Mainnet** with the official Chainlink Hardhat setup, follow these steps:

### Prerequisites

- **Node.js**: Version 18 or higher
- **Git**: For cloning the repository

### 1. Clone and Setup

```bash
git clone https://github.com/smartcontractkit/smart-contract-examples.git
cd smart-contract-examples/ccip/cct/hardhat
```

### 2. Install Dependencies

```bash
npm install
npm run compile
```

### 3. Environment Variables Setup

Set an encryption password for your environment variables:

```bash
npx env-enc set-pw
```

Set up a `.env.enc` file with the necessary variables for Core Testnet. Use the following command to add the variables:

```bash
npx env-enc set
```

**Required Environment Variables:**

```
 CORETESTNET_RPC_URL= "https://rpc.test2.btcs.network"
 PRIVATE_KEY= Your wallet private key 
 CORESCAN_TESTNET_API_KEY= CoreScan API key for contract verification
```

:::info
**Security Note**: Never commit your `.env.enc` file or private keys to version control.
:::

### 4. `config.json`

Update your `ccip/cct/hardhat/config/config.json` to include Core network configurations:

```jsonc
"coreTestnet2": {
  "chainId": 1114,
  "chainSelector": "4264732132125536123",
  "router": "0xded0EE188Fe8F1706D9049e29C82081A5ebEcb2F",
  "rmnProxy": "0xF39a1260F4E3345D810e1b8aA569200e1D27A998",
  "tokenAdminRegistry": "0x2c99403fDB26F654c410D81264033faE289fa7Ea",
  "registryModuleOwnerCustom": "0xfaE626f209B036B03D18d4f16ad3D599f90AF22c",
  "link": "0x6C475841d1D7871940E93579E5DBaE01634e17aA",
  "confirmations": 1,
  "nativeCurrencySymbol": "CORE",
  "chainType": "evm"
}
```

For **Core Mainnet**, add a similar configuration with the appropriate [mainnet](https://docs.chain.link/ccip/directory/mainnet/chain/core-mainnet) values.

### 5. `network.ts`

Update your `config/network.ts` file with the following Core network configurations:

#### 5.1 Network Configurations

Add these entries alongside the existing network configurations:

**Core Testnet Configuration:**

```ts
[EVMChains.coreTestnet2]: {
  ...configData.coreTestnet2,
  url: process.env.CORE_TESTNET2_RPC_URL || "https://rpc.test2.btcs.network",
  chainType: "evm" as const,
  gasPrice: undefined,
  nonce: undefined,
  accounts,
},
```

**Core Mainnet Configuration:**

```ts
[EVMChains.coreMainnet]: {
  ...configData.coreMainnet,
  url: process.env.CORE_MAINNET_RPC_URL || "https://rpc.coredao.org",
  chainType: "evm" as const,
  gasPrice: undefined,
  nonce: undefined,
  accounts,
},
```

#### 5.2 Etherscan API Keys

Add CoreScan API key support for contract verification:

```ts
[EVMChains.coreTestnet2]: process.env.CORESCAN_TESTNET_API_KEY || "UNSET",
[EVMChains.coreMainnet]: process.env.CORESCAN_MAINNET_API_KEY || "UNSET",
```

#### 5.3 Custom Chain Configuration

Add Core network configurations to your custom chains array:

```ts
{
  network: EVMChains.coreTestnet2,
  chainId: configData.coreTestnet2.chainId,
  urls: {
    apiURL: "https://api.test2.btcs.network/api",
    browserURL: "https://scan.test2.btcs.network/",
  },
},
{
  network: EVMChains.coreMainnet,
  chainId: configData.coreMainnet.chainId,
  urls: {
    apiURL: "https://openapi.coredao.org/api",
    browserURL: "https://scan.coredao.org",
  },
},
```

:::info
**Note**: All these configurations should be added to your existing `config/network.ts` file alongside the other supported networks.
:::

### 6. `types.ts`

Add the Core chain identifiers to your existing `EVMChains` enum. Simply append these two entries to the existing enum:

```ts
export enum EVMChains {
  avalancheFuji = "avalancheFuji",
  arbitrumSepolia = "arbitrumSepolia",
  sepolia = "sepolia",
  baseSepolia = "baseSepolia",
  polygonAmoy = "polygonAmoy",
  // Add these Core network entries:
  coreTestnet2 = "coreTestnet2",
  coreMainnet = "coreMainnet"
}
```

:::info
**Note**: Just append `coreTestnet2` and `coreMainnet` to your existing `EVMChains` enum. No need to modify the existing entries.
:::

## Deployment

Once all configurations are updated:

1. Follow the [official Chainlink CCIP tutorial](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial).
2. Use `coreTestnet2` or `coreMainnet` as your selected network when deploying tokens.
3. Be sure to fund your LINK and native token balances.

You're now ready to build and deploy cross-chain tokens on the Core Blockchain using Chainlink CCIP.

## Resources

- [Chainlink CCIP Overview](https://docs.chain.link/ccip)
- [CCIP Directory for Core Testnet](https://docs.chain.link/ccip/directory/testnet/chain/core-testnet)
- [CCIP Directory for Core Mainnet](https://docs.chain.link/ccip/directory/mainnet/chain/core-mainnet)
- [Chainlink Hardhat Examples Repo](https://github.com/smartcontractkit/smart-contract-examples/tree/main/ccip/cct/hardhat)
- [Chainlink CCIP EVM Tutorial](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial)



