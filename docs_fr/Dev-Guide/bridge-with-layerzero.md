---
sidebar_label: Passerelle de Jetons vers Core avec LayerZero
hide_table_of_contents: false
sidebar_position: 2
---

# Passerelle de Jetons vers Core avec LayerZero

---&#x20;

Ce guide décrit les étapes pour transférer vos jetons ERC-20 vers Core en utilisant des Omnichain Fungible Tokens (OFT) via LayerZero. Le protocole LayerZero permet des communications inter-chaînes fluides, permettant à vos jetons de fonctionner sur plusieurs chaînes. Veuillez vous référer à LayerZero pour toutes les [blockchains sources supportées](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids).

## Vue d'ensemble

Avant de commencer, il est important de comprendre ce que sont les omnichain fungible tokens et le protocole LayerZero.

**Omnichain Fungible Token (OFT) :** Permet la création de jetons natifs sur plusieurs chaînes, simplifiant ainsi la gestion des jetons et améliorant l'interopérabilité.

**Protocole LayerZero :** Sert de technologie de base pour les interactions inter-chaînes, assurant une communication sécurisée et efficace entre les différentes blockchains.

## Passerelle des jetons ERC-20 existants vers Core

### Déployer le contrat ProxyOFTV2 LayerZero sur la Chaîne Source

Premièrement, **accédez au contrat ProxyOFTV2** en récupérant le code du contrat `ProxyOFTV2` à partir du [repertoire officiel](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/ProxyOFTV2.sol).

Ensuite, **ajustez le contrat ProxyOFTV2 pour la blockchain source** comme suit :

```
constructor(
        address _token,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Voici quelques explications concernant ce snippet de code :

- **Adresse du contrat de jeton (`_token`) :** Indiquez l'adresse du contrat ERC-20 qui a déjà été déployé sur la chaîne source. Par exemple, si votre jeton est USDC sur Ethereum, vous utiliserez l'adresse du contrat [0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)
- **Décimales partagées (`_sharedDecimals`) :** Définissez le nombre de décimales pour le jeton dans l'environnement LayerZero. Les décimales partagées normalisent les différences entre les chaînes EVM et non-EVM. Il est recommandé d'utiliser un nombre de décimales partagées plus petit sur toutes les chaînes afin que votre jeton puisse avoir un solde plus élevé.
  - Si votre jeton est déployé sur des chaînes non-EVM, il doit être configuré avec le nombre de décimales le plus bas parmi toutes les chaînes.
  - Si vos jetons sont uniquement déployés sur des chaînes EVM et que tous ont plus de huit décimales, cette valeur doit être définie à `8`.
  - Veuillez consulter la [documentation de LayerZero](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2#what-should-i-set-as-shared-decimals) pour plus d'informations.
- **Adresse de l'Endpoint LayerZero pour la chaîne source** (`_lzEndpoint`) : Cette adresse d'endpoint est requise pour que le contrat puisse interagir avec le protocole LayerZero. Par exemple, l'endpoint Ethereum : 0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675.
- Veuillez vous référer à la [documentation de LayerZero](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) pour les endpoints des blockchains supportées.

Enfin, **déployez le contrat `ProxyOFTV2`** sur la blockchain source choisie.

### Déployer le Contrat LayerZero OFTV2 sur la Core Chain

Tout d'abord, **accédez au contrat OFTV2** en récupérant le code du contrat `ProxyOFTV2` à partir du [repertoire officiel](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft/v2/OFTV2.sol).

\
Ensuite, **préparez les paramètres pour le déploiement du contrat OFTV2 sur la Core Chain**, comme ceci :

```
constructor(
        string memory _name,
        string memory _symbol,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Voici quelques explications sur ce qui se passe dans cet extrait de code :

- **Nom du jeton** (`_name`) : Spécifiez le nom de votre jeton (par exemple, USD Coin)
- **Symbole du jeton** (`_symbol`) : Spécifiez le symbole de votre jeton (par exemple, USDC)
- **Décimales partagées** (`_sharedDecimals`) : Assurez-vous que les décimales partagées correspondent à celles définies dans le `ProxyOFTV2` sur la chaîne source.
- **Adresse de l'Endpoint LayerZero pour la Core Chain** (`_lzEndpoint`) : L'adresse de l'endpoint pour la Core Chain est `0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4`.
- Veuillez consulter la [documentation de LayerZero](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) pour obtenir les endpoints des blockchains supportées.

Enfin, **déployez le contrat sur CoreDAO :** déployez ce contrat OFTV2 sur la blockchain Core.

### Liaison des contrats via Trusted Remotes

Le terme "trusted remote" provient de la messagerie EVM-à-EVM et fait référence aux 40 octets qui identifient le contrat à partir duquel vous recevrez des messages dans votre contrat d'application utilisateur LayerZero. L'objet de 40 octets est le résultat du regroupement des adresses `remoteAddress` et `localAddress`.

Vous pouvez générer un `TrustedRemote` en utilisant `ethers.js` :

```
// le trusted remote (ou parfois appelé chemin ou pathData)
// est l'objet de 40 octets regroupé des adresses des contrats REMOTE + LOCAL de l'application utilisateur

let trustedRemote = hre.ethers.utils.solidityPack(
    ['address','address'],
    [remoteContract.address, localContract.address]
)
```

Sur la blockchain source, appelez la fonction `setTrustedRemoteAddress` du contrat `ProxyOFTV2` avec les paramètres suivants :

- `trustedRemote` : Ce sont les 40 octets générés par le trusted remote à l'étape précédente
- `localContract` : Il s'agit de l'adresse du contrat `ProxyOFTV2` sur la chaîne source.
- `remoteContract` : Il s'agit de l'adresse du contrat `OFTV2` sur la chaîne Core

Sur la blockchain Core, appelez la fonction `setTrustedRemoteAddress` du contrat `OFTV2` avec les paramètres suivants :

- `trustedRemote` : Ce sont les 40 octets générés par le trusted remote à l'étape précédente.
- `localContract` : Il s'agit de l'adresse du contrat `OFTV2` sur la chaîne Core.
- `remoteContract` : Il s'agit de l'adresse du contrat `ProxyOFTV2` sur la chaîne source

Pour plus d'informations, veuillez consulter le [guide LayerZero pour la configuration des trusted remotes](https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes) afin de lier vos contrats entre les deux réseaux.

### Définir la limite minimale de gas pour chaque chaîne

Vous devrez définir la limite minimale de gas pour chaque chaîne. Il est recommandé d'utiliser une limite minimale de 200k pour toutes les chaînes EVM ; la seule exception notable est Arbitrum, où la limite de gas doit être fixée à 2M. Voici les étapes à suivre.

Tout d'abord, appelez `setMinDstGas` sur la chaîne source (l'[Id de chaîne de Core est 153](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids)). Assurez-vous d'inclure le type de paquet ("0" signifie envoyer, "1" signifie envoyer et appeler) et le montant de la limite de gas.

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
