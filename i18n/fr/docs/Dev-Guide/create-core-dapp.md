---
sidebar_label: Boîte à outils pour dApp Full Stack
hide_table_of_contents: false
sidebar_position: 2
description: Outil CLI pour amorcer une dApp Web3 full-stack sur Core
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Full-Stack Starter Kit for Building dApps on Core

---

### `create-core-dapp`: Boîte à outils pour dApp Full Stack

`create-core-dapp` est un outil CLI pour amorcer une DApp Web3 Full Stack entièrement fonctionnelle sur [Core](https://www.npmjs.com/package/create-core-dapp). It comes pre-configured with:

- **Hardhat** pour le développement de contrats intelligents
- **Core Testnet & Mainnet** RPC setup
- **Next.js** frontend
- **RainbowKit + Wagmi** pour l'intégration de portefeuille
- Ethers.js support

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés:

| Outil                   | Version (recommandée) |
| ----------------------- | ---------------------------------------- |
| Node.js | `>=20.x`                                 |
| npm / yarn / pnpm       | Toute version prise en charge            |
| Git                     | Plus récent                              |

## Commencer

### 1. Installer la CLI globalement (facultatif)

```bash
npm install -g create-core-dapp
```

ou utilisez **npx** (pas besoin d'installer):

```bash
npx create-core-dapp@latest
```

### 2. Initialiser un Nouveau Projet

Exécutez la CLI pour créer un nouveau projet:

```bash
npx create-core-dapp my-core-dapp
```

Une fois l'installation terminée, accédez à votre projet:

```bash
cd my-core-dapp
```

## Structure du projet

Voici la structure du projet généré:

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

## Rediger des contrats intelligents

Accédez au répertoire `contracts/` pour créer vos propres contrats intelligents.

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

## Compiler et tester les contrats

Compilez vos contrats:

```bash
npx hardhat compile
```

Exécutez les tests (facultatif):

```bash
npx hardhat test
```

## Configurer le Core Network

Dans `hardhat.config.js`, vous trouverez des URL RPC pré-configurées pour Core Testnet et Mainnet:

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
