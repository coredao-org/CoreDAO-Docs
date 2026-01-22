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

Ensuite, appelez `setMinDstGas` sur la chaîne Core avec l'[ID de la chaîne source](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids). Assurez-vous d'inclure le type de paquet ("0" signifiant envoyer, "1" signifiant envoyer et appeler) et le montant de la limite de gas.

Enfin, assurez-vous que la limite de gas des `AdapterParams` est supérieure à celle définie dans `setMinDstGas`.

Pour plus d'informations, veuillez consulter le guide [LayerZero](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2).

### Transférer des tokens entre chaînes

Nous allons maintenant couvrir les étapes de base pour transférer des tokens entre différentes chaînes.

Tout d'abord, assurez-vous que [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) soient installés.

Ensuite, clonez le dépôt du script de transfert `oft-transfer-script` trouvé [ici](https://github.com/LayerZero-Labs/oft-transfer-script/tree/main).

Une fois cela fait, accédez au dossier `hardhat` dans le dépôt cloné et exécutez `npm install` pour installer les packages npm requis.

Ensuite, créez un fichier `.env` dans le répertoire racine du dépôt et ajoutez les variables suivantes :

- `RPC_ENDPOINT`: Il s'agit de l'URL de votre point de terminaison JSON RPC Ethereum.
- `PRIVATE_KEY`: La clé privée de l'adresse Ethereum que vous souhaitez utiliser avec le script.

Voici un extrait de code expliquant comment configurer les variables `RPC_ENDPOINT` et `PRIVATE_KEY` :

```
RPC_ENDPOINT=<Your_RPC_Endpoint_URL> 
PRIVATE_KEY=<Your__Private_Key>
```

Enfin, exécutez le script de transfert de tokens FT. Ce script est conçu pour interagir avec le contrat intelligent OFT afin de faciliter les transferts de tokens en utilisant `estimateFees()` et `sendFrom()`. Voici un peu plus de contexte sur ce que ces méthodes accomplissent :

- `estimateFees()`: Cette fonction fournit une estimation des frais nécessaires pour envoyer un certain montant de tokens.
- `sendFrom()`: Cette fonction vous permet d'envoyer des tokens d'une adresse sur la blockchain source à une autre sur la destination.

Voici un extrait de code montrant comment transférer des tokens avec `sendFrom` :

```
npx hardhat sendFrom --qty 100000000000000 --network core
```

### Transferts Manuels via Etherscan

Si votre contrat `ProxyOFT` est enregistré sur Etherscan, vous pouvez utiliser l'interface utilisateur d'Etherscan pour transférer manuellement vos tokens ERC20 en appelant la fonction `sendFrom()` avec les paramètres suivants :

- `from`: Il s'agit de l'adresse de l'expéditeur sur Ethereum.
- `dstChainId`: L'ID de chaîne unique de LayerZero pour la chaîne de réception (nous utiliserons l'[ID de chaîne 153](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) pour la chaîne Core).
- `toAddress`: L'adresse du destinataire sur la chaîne Core.
- `amount`: Le nombre de tokens **en unités wei.**
- `refundAddress`: Il s'agit de l'adresse où les remboursements de gas seront envoyés si nécessaire. Il est conseillé d'utiliser l'adresse de l'expéditeur comme adresse de remboursement.
- `zroAddress`: Sur Etherscan, "l'adresse zero" est `0x0000000000000000000000000000000000000000`.
- `adapterParams`: 0x
- `nativeFee`: Vous pouvez calculer les frais natifs en appelant la fonction `estimateSendFee` sur le même contrat en utilisant le même `remoteChainId`, `toAddress`, `amount`, `useZro`, et `adapterParams` ci-dessus.

## Checklist d'Intégration LayerZero

Veuillez vous référer à la [checklist](https://layerzero.gitbook.io/docs/evm-guides/layerzero-integration-checklist) pour vous préparer à un déploiement sur le Mainnet.
