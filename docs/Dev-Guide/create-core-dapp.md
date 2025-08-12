---
sidebar_label: Full Stake dApp Toolkit
hide_table_of_contents: false
sidebar_position: 2
description: CLI tool to bootstrap a full-stack Web3 DApp on Core
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Full-Stack Starter Kit for Building dApps on Core

---

### `create-core-dapp`: Full Stake dApp Toolkit

`create-core-dapp` is a CLI tool to bootstrap a fully functional full-stack Web3 DApp on [Core](https://www.npmjs.com/package/create-core-dapp). It comes pre-configured with:

- **Hardhat** for smart contract development
- **Core Testnet & Mainnet** RPC setup
- **Next.js** frontend
- **RainbowKit + Wagmi** for wallet integration
- Ethers.js support

## Prerequisites

Before you begin, make sure you have the following installed:

| Tool              | Version (Recommended) |
| ----------------- | --------------------- |
| Node.js           | `>=20.x`              |
| npm / yarn / pnpm | Any supported version |
| Git               | Latest                |

## Getting Started

### 1. Install the CLI globally (optional)

```bash
npm install -g create-core-dapp
```

or use **npx** (no need to install):

```bash
npx create-core-dapp@latest
```

### 2. Bootstrap a New Project

Run the CLI to scaffold a new project:

```bash
npx create-core-dapp my-core-dapp
```

Once the installation is complete, navigate into your project:

```bash
cd my-core-dapp
```

## Project Structure

Here's the layout of the generated project:

```
my-core-dapp/
├── artifacts/         # Hardhat compiled contract artifacts
├── cache/             # Hardhat cache
├── contracts/         # Smart contracts
├── scripts/           # Hardhat deployment scripts
├── src/
│   ├── abi/           # Auto-synced ABIsfor frontend usage
│   ├── pages/         # Next.js pages
│   ├── styles/        # CSS styles
│   └── wagmi.ts       # Wallet configuration
├── test/              # Test files
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── hardhat.config.js  # Hardhat configuration
```

## Writing Smart Contracts

Navigate to the `contracts/` directory to create your own smart contracts.

Example: `contracts/Greeter.sol`

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Greeter {
string public greeting;

    constructor(string memory _greet) {
        greeting = _greet;
    }

    function setGreeting(string memory _greet) public {
        greeting = _greet;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

}
```

## Compile & Test Contracts

Compile your contracts:

```bash
npx hardhat compile
```

Run tests (optional):

```bash
npx hardhat test
```

## Configure Core Network

Inside `hardhat.config.js`, you'll find pre-configured Core Testnet and Mainnet RPC URLs:

```js
networks: {
    core_mainnet: {
      url: "https://rpc.coredao.org/",
      accounts: [process.env.PRIVATEKEY],
      chainId: 1116,
    },
    core_testnet2: {
      url: "https://rpc.test2.btcs.network",
      accounts: [process.env.PRIVATEKEY],
      chainId: 1114,
    },
}
```

## Environment Variables

Make sure to set up your environment variables in the `.env` file:

```env
PRIVATE_KEY=your_private_key_here
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

:::note
Get your WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com/)
::: 

## Deploy Contracts

Place your deployment scripts inside the `scripts/` directory (e.g., deploy.js).Ensure your wallet's private key is added to the .env file, and that the wallet has sufficient funds on the target network.

```bash
npx hardhat run scripts/deploy.js --network <network_name>
```

> **Note**: Replace `<network_name>` with the network you want to deploy to (e.g., core_testnet2)

Example `scripts/deploy.js`:

```js
const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello Core!");

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Wallet Setup

The project comes pre-configured with RainbowKit and Wagmi for seamless wallet integration. The wallet configuration is located in `src/wagmi.ts`:

```typescript
// src/wagmi.ts
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { coreDao, coreTestnet2 } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Core Quickstart",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [coreDao, coreTestnet2],
  ssr: true,
});
```

## Run the Frontend

After setting up your contracts and installing dependencies, you can start the Next.js frontend development server:

<Tabs>
<TabItem value="npm" label="npm" default>

```bash
npm run dev
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn dev
```

</TabItem>
</Tabs>

This will start the application at [http://localhost:3000](http://localhost:3000) by default.

### Making Changes

- **Pages**: Edit files in `src/pages/` directory
- **Styles**: Modify `src/styles/` for custom styling
- **Components**: Create reusable components in `src/components/`
- **Wallet Config**: Update `src/wagmi.ts` for wallet customization
- **Smart Contracts**: Modify contracts in `contracts/` directory

## ABI Usage

After compiling your smart contracts with Hardhat, the ABI (Application Binary Interface) will be automatically copied to the `src/abi` directory by a custom Hardhat task.

### Using ABIs in Your Frontend

Import the ABI in your component using a default import:

```typescript
// Example usage in a React component
import YourContractABI from '../abi/YourContract.json';
import { useReadContract } from 'wagmi';

export function YourComponent() {
  const { data } = useReadContract({
    address: 'YOUR_CONTRACT_ADDRESS',
    abi: YourContractABI,
    functionName: 'yourFunction',
  });

  return (
    // Your component JSX
  );
}
```

### TypeScript Configuration

If you encounter a TypeScript error when importing JSON files, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

### Keeping ABIs Updated

- ABIs in `src/abi` are updated automatically when you recompile contracts
- Run `npx hardhat compile` to regenerate ABIs after contract changes
- The Hardhat task ensures your frontend always has the latest contract interfaces

## Further Resources

- [Create core dapp NPM Package](https://www.npmjs.com/package/create-core-dapp)
- [Deploying dApps on Core Using Hardhat](https://docs.coredao.org/docs/Dev-Guide/hardhat)
- [NextJs and Rainbow Kit Core template](https://github.com/coredao-org/Core-NextJs-Rainbowkit)
