---
sidebar_label: Tokens ERC-721
hide_table_of_contents: false
sidebar_position: 2
description: ERC-721 sur Core
---

# ERC-721 Tokens

---

## Qu'est-ce que l'ERC-721?

ERC-721 est une norme pour les jetons non fongibles (NFT). Contrairement aux jetons ERC-20, qui sont fongibles, les jetons ERC-721 sont uniques et se distinguent les uns des autres. Cela les rend parfaits pour des cas d'utilisation tels que l'art numérique, les objets de collection, les objets de jeu, etc.

## Prérequis

Avant de commencer, vous aurez besoin:

- \*\* Metamask \*\* ou tout portefeuille EVM.
- Une compréhension de base de \*\* Solidity \*\* (bien que nous vous guiderons tout au long du processus).
- Accès à \*\*Remix IDE \*\*: [https://remix.ethereum.org] (https://remix.ethereum.org)

## Étape 1: Utilisez l'assistant OpenZeppelin Wizard pour générer votre contrat ERC-721

### Pourquoi utiliser l'assistant OpenZeppelin Wizard?

Openzeppelin fournit des modèles de contrat intelligents sécurisés et vérifiés. L'**OpenZeppelin Wizard** est un excellent outil qui vous permet de générer des contrats intelligents ERC-721 en quelques clics, vous assurant ainsi de suivre les meilleures pratiques.

1. \*\* Allez à l'assistant d'OpenZeppelin's Wizard \*\*: ouvrez le [Openzeppelin Wizard] (https://wizard.openzeppelin.com/#erc721) dans votre navigateur.

2. **Sélectionnez ERC-721** :

- From the different contract templates listed, select **ERC-721**.

3. **Personnalisez votre contrat** :

- \*\* Nom du jeton \*\*: Entrez le nom de votre jeton (par exemple, e.g., \`MyNFT).
- \*\* Symbole de jeton \*\*: Entrez le symbole de votre jeton (par exemple, \`MNFT).
- **Mint Function** : Ajoutez une fonction de frappe pour permettre la création de nouveaux jetons.
- **Metadata URI** : vous pouvez définir des métadonnées à l'aide d'un URI, qui pointera vers les informations sur vos NFT (par exemple, IPFS ou un serveur centralisé).

<p align="center">
![OpenZeppelin_Wizard-ERC-721](../../static/img/dev_tutorials/ERC721_Wizard.png)
</p>

4. **Copiez le code**

Après avoir configuré votre contrat, cliquez sur le bouton **Copy** pour obtenir le code Solidity, ou vous pouvez l'ouvrir directement dans Remix IDE

## Étape 2: Configurez le remix IDE

Remix est un IDE en ligne pour le développement Solidity qui vous permet d'écrire, de déployer et de gérer des contrats intelligents sur la blockchain Ethereum Il est parfait pour les débutants et pour des tests rapides.

1. \*\* Allez à Remix ide \*\*: ouvrir [remix ide] (https://remix.ethereum.org/) dans votre navigateur.

2. \*\* Créez un nouveau fichier de solidité \*\*:

- Dans Remix, créez un nouveau fichier en naviguant vers le répertoire \*\* Contrats \*\* et en cliquant sur le bouton \*\* + \*\*.
- Collez le code contractuel ERC-721 que vous avez copié à partir de l'assistant OpenZeppelin’s Wizard dans le fichier nouvellement créé.

<p align="center">
![Remix-ERC-721](../../static/img/dev_tutorials/ERC721_Contract.png)
</p>
3. **Installer les contrats OpenZeppelin** :

- Remix fournit un moyen d'importer directement les contrats OpenZeppelin Cela se fait en ajoutant l’instruction d’importation suivante en haut de votre contrat :

```javascript
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
```

Si vous utilisez le plugin « Solidity compiler » de Remix, il récupérera automatiquement les contrats OpenZeppelin pour vous. Cependant, si vous utilisez Hardhat, vous devrez installer manuellement les contrats OpenZeppelin.

## Étape 3: Compiler le contrat dans Remix

**Compile Your Contract:**

- Dans REMIX IDE, accédez à l'onglet du  **Solidity Compiler** \*\* (celui avec le logo Solidity).
- Sélectionnez la version du compilateur qui correspond à votre contrat (par exemple, \`0.8.24).
- Cliquez sur **Compile** pour compiler votre contrat.
- Corriger toutes les erreurs\*\*: S'il y a des erreurs dans le code, Remix les mettra en surbrillance. Corrigez tous les ereurs et recompilez.

<p align="center">
![Remix-ERC-721-Compile](../../static/img/dev_tutorials/ERC721_Compile.png)
</p>

## Étape 4: Déployez le contrat sur leTest Network

### Connectez Remix à MetaMask

- Accédez à l'onglet **Deploy & Run Transactions** dans Remix.
- Sous \*\* Environment \*\*, sélectionnez **Injected Web3** Cela connectera Remix à votre portefeuille Metamask.

<p align="center">
![Remix-ERC-721-InjectedProvider](../../static/img/dev_tutorials/Remix_InjectedProvider.png)
</p>

- Make sure your MetaMask is connected to a Core Testnet2.

### **Déployez votre contrat** :

- Accédez à la section Deploy
- Sélectionnez le **contrat NFT** que vous souhaitez déployer (`MyNFT`).
- Assurez-vous que le compte est connecté au bon réseau de test.
- Collez l'adresse du propriétaire dans l'onglet déploiement (puisque le contrat est propriétaire).
- Cliquez sur **Deploy** Vous serez invité à confirmer la transaction dans MetaMask.

<p align="center">
![Remix-ERC-721-Deployment](../../static/img/dev_tutorials/ERC721_Deployment.png)
</p>

Une fois le contrat déployé, vous verrez l’adresse du contrat dans Remix.

## Étape 5 : Interagissez avec votre contrat

Maintenant que votre contrat est déployé, vous pouvez interagir avec lui directement depuis Remix.

**Mint a New NFT:**

- Sous **Deployed Contracts**, vous verrez votre contrat déployé.
- Développez l’interface du contrat pour interagir avec des fonctions telles que safeMint.
- Utiliser la fonction **safeMint** pour créer de nouveaux NFT. Vous devrez fournir « l’adresse du destinataire » et « l’ID du jeton » comme arguments.
- Confirmer la transaction dans MetaMask

<p align="center">
![Remix-ERC-721-Mint](../../static/img/dev_tutorials/ERC721_Mint.png)
</p>

\*\* Visualisez votre NFT \*\*

- Après avoir créé votre NFT, vous pouvez le visualiser dans un portefeuille prenant en charge les jetons ERC-721 comme MetaMask.

## Étape 6 : Gérer vos NFT

Vous pouvez ajouter des fonctions supplémentaires à votre contrat, telles que :

**Burning Tokens**: A function to burn (destroy) NFTs.
Pour une personnalisation supplémentaire, vous pouvez vous référer à la documentation ERC-721 d'OpenZeppelin et ajouter de nouvelles fonctionnalités à votre contrat.

For more information on OpenZeppelin ERC-721 implementation, please read[ ERC-721](https://docs.openzeppelin.com/contracts/4.x/erc721).

#### Références

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-721/](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
- [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
