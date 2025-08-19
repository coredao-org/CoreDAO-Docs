---
sidebar_label: Kit de herramientas Full Stack para dApps
hide_table_of_contents: false
sidebar_position: 2
description: Herramienta CLI para inicializar una DApp Web3 Full Stack en Core
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kit de inicio Full-Stack para construir dApps en Core

---

### `create-core-dapp`: Kit de herramientas Full Stack para dApp

`create-core-dapp` es una herramienta CLI para inicializar una DApp Web3 Full Stack completamente funcional en [Core](https://www.npmjs.com/package/create-core-dapp). Viene preconfigurada con:

- **Hardhat** para desarrollo de smart contracts
- Configuración de **Core Testnet & Mainnet** RPC
- **Next.js** para el frontend
- **RainbowKit + Wagmi** para integración de wallets
- Soporte para Ethers.js

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

| Herramienta             | Versión (Recomendada) |
| ----------------------- | ---------------------------------------- |
| Node.js | `>=20.x`                                 |
| npm / yarn / pnpm       | Cualquier versión soportada              |
| Git                     | Última versión                           |

## Cómo Empezar

### 1. Instalar la CLI globalmente (opcional)

```bash
npm install -g create-core-dapp
```

o usa **npx** (no es necesario instalar):

```bash
npx create-core-dapp@latest
```

### 2. Inicializar un nuevo proyecto

Ejecuta la CLI para generar la estructura de un nuevo proyecto:

```bash
npx create-core-dapp my-core-dapp
```

Una vez completada la instalación, navega dentro de tu proyecto:

```bash
cd my-core-dapp
```

## Estructura del proyecto

Aquí está la organización del proyecto generado:

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

## Escribiendo Smart Contracts

Navega al directorio `contracts/` para crear tus propios smart contracts.

Ejemplo: `contracts/Greeter.sol`

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

## Compilar y Probar Contratos

Compila tus contratos:

```bash
npx hardhat compile
```

Ejecuta las pruebas (opcional):

```bash
npx hardhat test
```

## Configurar la Red de Core

Dentro de `hardhat.config.js`, encontrarás las URLs RPC de Core Testnet y Mainnet preconfiguradas:

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

## Variables de Entorno

Asegúrate de configurar tus variables de entorno en el archivo `.env`:

```env
PRIVATE_KEY=your_private_key_here
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

:::note
Obtén tu WalletConnect Project ID desde [cloud.walletconnect.com](https://cloud.walletconnect.com/)
:::

## Desplegar Contratos

Coloca tus scripts de despliegue dentro del directorio `scripts/` (por ejemplo, deploy.js).Asegúrate de que la private key de tu wallet esté añadida en el archivo .env, y que la wallet tenga fondos suficientes en la red objetivo.

```bash
npx hardhat run scripts/deploy.js --network <network_name>
```

> **Nota**: Reemplaza `<network_name>` con la red a la que quieras desplegar (por ejemplo, core_testnet2)

Ejemplo: `scripts/deploy.js`:

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

## Configuración de Wallet

El proyecto viene preconfigurado con RainbowKit y Wagmi para una integración de wallets sin fricciones. La configuración de la wallet se encuentra en `src/wagmi.ts`:

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

## Ejecutar el Frontend

Después de configurar tus contracts e instalar las dependencias, puedes iniciar el servidor de desarrollo de frontend con Next.js:

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

Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000) por defecto.

### Realizando Cambios

- **Pages**: Edita los archivos en el directorio `src/pages/`
- **Styles**: Modifica `src/styles/` para estilos personalizados
- **Components**: Crea componentes reutilizables en `src/components/`
- **Wallet Config**: Actualiza `src/wagmi.ts` para personalizar la wallet
- **Smart Contracts**: Modifica los contratos en el directorio `contracts/`

## Uso de ABI

Después de compilar tus smart contracts con Hardhat, el ABI (Application Binary Interface) se copiará automáticamente al directorio `src/abi` mediante una tarea personalizada de Hardhat.

### Uso de ABIs en tu Frontend

Importa el ABI en tu componente usando una importación por defecto:

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

### Configuración de TypeScript

Si encuentras un error de TypeScript al importar archivos JSON, asegúrate de que tu `tsconfig.json` incluya:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

### Manteniendo los ABIs Actualizados

- Los ABIs en `src/abi` se actualizan automáticamente cuando recompilas los contracts
- Ejecuta `npx hardhat compile` compile para regenerar los ABIs después de realizar cambios en los contracts
- La tarea de Hardhat asegura que tu frontend siempre tenga las interfaces de contract más recientes

## Recursos Adicionales

- [Crear paquete NPM de core dapp](https://www.npmjs.com/package/create-core-dapp)
- [Desplegando dApps en Core usando Hardhat](https://docs.coredao.org/docs/Dev-Guide/hardhat)
- [Plantilla de Core de NextJs y Rainbow Kit](https://github.com/coredao-org/Core-NextJs-Rainbowkit)
