---
sidebar_label: Guide Chainlink CCIP
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Déploiement de jetons croisés Chainlink CCIP sur Core

---

Ce guide vous guide à travers le déploiement de jetons croisés en utilisant **Chainlink CCIP** sur **Core** (Testnet ou Mainnet). Il adapte le tutoriel officiel Chainlink Hardhat pour des configurations spécifiques à Core.

> Basé sur: [Chainlink CCIP EVM Tutorial (Burn & Mint from EOA)](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial)

## Qu'est-ce que Chainlink CCIP?

**Chainlink CCIP (Cross-Chain Interoperability Protocol)** permet des transferts sécurisés de jetons et de données entre différentes blockchains en utilisant une interface unifiée.

### Caractéristiques clés

- Messagerie et transferts de jetons sécurisés entre chaînes (ou inter-chaînes)
- Logique de jeton programmable
- Infrastructure décentralisée via les nœuds Chainlink
- Limitation de débit intégrée et protections de basculement

[Read more about CCIP →](https://docs.chain.link/ccip)

## Détails du réseau Core Blockchain CCIP

Utilisez les onglets ci-dessous pour basculer entre les configurations **Testnet** et **Mainnet**:

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

## Configuration du projet pour la Core Blockchain

Pour intégrer **Core Testnet/Mainnet** avec la configuration officielle de Chainlink Hardhat, suivez ces étapes:

### Prérequis

- **Node.js**: Version 18 ou supérieure
- **Git**: Nécessaire pour cloner le référentiel

### 1. Cloner et configurer

```bash
git clone https://github.com/smartcontractkit/smart-contract-examples.git
cd smart-contract-examples/ccip/cct/hardhat
```

### 2. Installation des dépendances

```bash
npm install
npm run compile
```

### 3. Configuration des variables d'environnement

Définissez un mot de passe de chiffrement pour vos variables d'environnement:

```bash
npx env-enc set-pw
```

Configurez un fichier `.env.enc` avec les variables nécessaires pour Core Testnet. Utilisez la commande suivante pour ajouter les variables:

```bash
npx env-enc set
```

**Variables d'environnement requises:**

```
 CORETESTNET_RPC_URL= "https://rpc.test2.btcs.network"
 PRIVATE_KEY= Your wallet private key 
 CORESCAN_TESTNET_API_KEY= CoreScan API key for contract verification
```

:::info
**Note de sécurité**: Ne jamais committer le fichier `.env.enc` ou les clés privées dans le contrôle de version.
:::

### 4. `config.json`

Mettez à jour votre fichier `ccip/cct/hardhat/config/config.json` pour inclure les configurations de réseau Core:

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

Pour **Core Mainnet**, ajoutez une configuration similaire avec les valeurs appropriées [mainnet](https://docs.chain.link/ccip/directory/mainnet/chain/core-mainnet).

### 5. `network.ts`

Mettez à jour votre fichier `config/network.ts` avec les configurations de réseau Core suivantes:

#### 5.1 Configurations de réseau

Ajoutez ces entrées aux côtés des configurations de réseau existantes:

**Configuration du réseau Core Testnet:**

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

**Configuration du réseau Core Mainnet:**

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

#### 5.2 Etherscan API Key

Ajoutez la prise en charge de la clé API CoreScan pour la vérification des contrats:

```ts
[EVMChains.coreTestnet2]: process.env.CORESCAN_TESTNET_API_KEY || "UNSET",
[EVMChains.coreMainnet]: process.env.CORESCAN_MAINNET_API_KEY || "UNSET",
```

#### 5.3 Configuration de chaîne personnalisée

Ajoutez les configurations de Core network à votre tableau de chaînes personnalisées:

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
**Remarque**: Toutes ces configurations doivent être ajoutées à votre fichier `config/network.ts` existant, aux côtés des autres réseaux pris en charge.
:::

### 6. `types.ts`

Ajoutez les identificateurs de Core chain à votre énumération `EVMChains` existante. Ajoutez simplement ces deux entrées à l'enum existante:

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
**Remarque**: Ajoutez simplement `coreTestnet2` et `coreMainnet` à votre énumération `EVMChains` existante. Pas besoin de modifier les entrées existantes.
:::

## Déploiement

Une fois que toutes les configurations sont mises à jour:

1. Follow the [official Chainlink CCIP tutorial](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial).
2. Utilisez `coreTestnet2` ou `coreMainnet` comme réseau sélectionné lors du déploiement de jetons.
3. Assurez-vous de financer vos soldes de jetons LINK et de jetons natifs.

Vous êtes maintenant prêt à créer et déployer des jetons cross-chain sur la blockchain Core en utilisant Chainlink CCIP.

## Ressources

- [Chainlink CCIP Overview](https://docs.chain.link/ccip)
- [CCIP Directory for Core Testnet](https://docs.chain.link/ccip/directory/testnet/chain/core-testnet)
- [CCIP Directory for Core Mainnet](https://docs.chain.link/ccip/directory/mainnet/chain/core-mainnet)
- [Chainlink Hardhat Examples Repo](https://github.com/smartcontractkit/smart-contract-examples/tree/main/ccip/cct/hardhat)
- [Chainlink CCIP EVM Tutorial](https://docs.chain.link/ccip/tutorials/evm/cross-chain-tokens/register-from-eoa-burn-mint-hardhat#tutorial)



