---
sidebar_label: Tokens ERC-20
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 sur Core
---

# Tokens ERC20

---

## Qu'est-ce que l'ERC-20?

ERC-20 est une norme pour les jetons fongibles sur la blockchain Ethereum. Contrairement aux jetons ERC-721, qui sont non butins et uniques, les jetons ERC-20 sont identiques les uns aux autres et peuvent être échangés ou échangés en quantités égales. Ils sont le type de jeton le plus commun pour les projets impliquant des crypto-monnaies, des actifs numériques et des applications décentralisées (DAPP).

## Prérequis

Avant de commencer, vous aurez besoin:

- \*\* Metamask \*\* ou tout portefeuille EVM.
- Une compréhension de base de \*\* Solidity \*\* (bien que nous vous guiderons tout au long du processus).
- Accès à \*\* remix ide \*\*: [https://remix.ethereum.org] (https://remix.ethereum.org)

## Étape 1: Utilisez l'assistant Openzeppelin pour générer votre contrat ERC-20

### Pourquoi utiliser l'assistant OpenZeppelin Wizard?

Openzeppelin fournit des modèles de contrat intelligents sécurisés et vérifiés. L'assistant OpenZeppelin est un excellent outil qui simplifie le processus de création de jetons ERC-20, garantissant que votre contrat suit les meilleures pratiques.

1. \*\* Allez à l'assistant d'Openzeppelin \*\*: ouvrez le [Openzeppelin Wizard] (https://wizard.openzeppelin.com/) dans votre navigateur.
2. \*\* SELECT ERC-20 \*\*: Dans la liste des modèles de contrat disponibles, sélectionnez \*\* ERC-20 \*\*.
3. \*\* Personnalisez votre contrat \*\*:

   - \*\* Nom du jeton \*\*: Entrez le nom de votre jeton (par exemple, `mytoken`).
   - \*\* Symbole de jeton \*\*: Entrez le symbole de votre jeton (par exemple, `mtk`).
   - \*\* Alimentation initiale \*\*: Définissez une alimentation initiale pour votre jeton (par exemple, `1000000` jetons ). Il s'agit du nombre de jetons qui seront créés lors du déploiement.

<p align="center">![Openzepplin_Wizard-ERC721](../../static/img/dev_tutorials/ERC20_Wizard.png)</p>

Facultativement, vous pouvez inclure des fonctionnalités supplémentaires telles que **minting** and **pausing** Si nécessaire pour votre cas d'utilisation.

4. \*\* Copiez le code \*\*: Une fois que vous avez configuré votre contrat, cliquez sur le bouton \*\* Copy \*\* pour obtenir le code de solidité. Vous pouvez soit le copier dans votre presse-papiers, soit l'ouvrir directement dans REMIX IDE.

## Étape 2: Configurez le remix IDE

Remix IDE est une plate-forme en ligne pour le développement de la solidité, ce qui le rend parfait pour les débutants et les tests rapides.

1. \*\* Allez à Remix ide \*\*: ouvrir [remix ide] (https://remix.ethereum.org) dans votre navigateur.
2. \*\* Créez un nouveau fichier de solidité \*\*:

   - Dans Remix, créez un nouveau fichier en naviguant vers le répertoire \*\* Contrats \*\* et en cliquant sur le bouton \*\* + \*\*.
   - Collez le code contractuel ERC-20 que vous avez copié à partir de l'assistant d'Openzeppelin dans le fichier nouvellement créé.

<p align="center">![Remix_ERC20_Contract](../../static/img/dev_tutorials/Remix_ERC20.png)</p>
3. ** Installez les contrats Openzeppelin **: 
- Si vous utilisez le **Solidity compiler** intégré de Remix **, il va automatiquement récupérer les contrats OpenZeppelin pour vous.
   - If you're using Hardhat, you'll need to manually install OpenZeppelin contracts by running `npm install @openzeppelin/contracts`.

## Step 3: Compile the Contract in Remix

1. **Compile Your Contract**:
   - In Remix IDE, go to the **Solidity Compiler** tab (the one with the Solidity logo).
   - Select the compiler version that matches your contract (for example, `0.8.24`).
   - Click **Compile** to compile your contract.

<p align="center">
![Remix_ERC20_Compile](../../static/img/dev_tutorials/Remix_ERC20_Compile.png)
</p>

2. **Fix Any Errors**: If there are any errors in the code, Remix will highlight them. Correct any issues and recompile.

## Step 4: Deploy the Contract on a Test Network

1. **Connect Remix to MetaMask**:

   - Go to the **Deploy & Run Transactions** tab in Remix.
   - Under **Environment**, select **Injected Web3**. This will connect Remix to your MetaMask wallet.

<p align="center">
![ERC20_ConnectMetamask](../../static/img/dev_tutorials/ERC20_ConnectMetamask.png)
</p>

Ensure that your MetaMask is connected to a **Core testnet**

2. **Deploy Your Contract**:
   - In the **Deploy** section, select the **ERC-20 contract** (e.g., `MyToken`).
   - Please paste the `recipient address` for the tokens to be minted in Premint, as well as the `owner address` (note that in this case, both addresses are the same).
   - Click on **Deploy**. You’ll be prompted to confirm the transaction in MetaMask.
   - Once the contract is deployed, you’ll see the contract’s address in Remix.

<p align="center">
![ERC20_Deploy](../../static/img/dev_tutorials/ERC20_Deploy.png)
</p>

## Step 5: Interact with Your Contract

Now that your contract is deployed, you can interact with it directly from Remix.

1. **Check Balance**:

   - Under **Deployed Contracts**, you'll see your deployed contract.
   - Expand the contract’s interface to interact with functions like `balanceOf`, `mint` (if you included minting functionality).
   - Paste the recipient address and click on `balanceOf` to check the recipient's balance.

<p align="center">
![ERC20_Balance](../../static/img/dev_tutorials/ERC20_Balance.png)
</p>

1. **Mint Tokens**:

   - Call the `mint` function to create new tokens. Provide the recipient address and the number of tokens to mint.
   - Confirm the transaction in MetaMask.

2. **Transfer Tokens**:
   - You can also use the **transfer** function to send tokens from one address to another.
   - Provide the recipient's address and the amount of tokens you want to send.
   - Confirm the transaction in MetaMask.

## Step 6: Manage Your Tokens

You can add additional functions to your contract, such as:

- **Burning Tokens**: A function to burn (destroy) tokens.

- **Roles**: Roles allow you to assign different permissions to addresses, such as minting or burning tokens, ensuring secure and controlled actions within the contract.

- **Upgradability** : Enables you to upgrade the contract logic after deployment without losing data, ensuring flexibility for future improvements

Vous trouverez plus d'informations sur l'implémentation ERC-20 d'OpenZeppelin [ici](https://docs.openzeppelin.com/contracts/4.x/erc20).

## References:

- [ERC-20 Token Standard (Ethereum.org)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [OpenZeppelin ERC-20 Implementation Documentation](https://docs.openzeppelin.com/contracts/4.x/erc20)
