---
sidebar_label: Tokens ERC-20
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 sur Core
---

# Jetons ERC-20

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

<p align="center">
![Openzepplin_Wizard-ERC721](../../static/img/dev_tutorials/ERC20_Wizard.png)
</p>

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
   - Si vous utilisez HardHat, vous devrez installer manuellement les contrats Openzeppelin en exécutant `NPM install @ openzeppelin / contracts`.

## Étape 3: Compiler le contrat dans Remix

1. **Compile Your Contract**:
   - Dans REMIX IDE, accédez à l'onglet du  **Solidity Compiler** \*\* (celui avec le logo Solidity).
   - Sélectionnez la version du compilateur qui correspond à votre contrat (par exemple, `0.8.24`).
   - Cliquez sur **Compile** pour compiler votre contrat.

<p align="center">![Remix_ERC20_Contract](../../static/img/dev_tutorials/Remix_ERC20_Compile.png)</p>

2. **Fix Any Errors**: S'il y a des erreurs dans le code, Remix les mettra en surbrillance. Corrigez tous les ereurs et recompilez.

## Étape 4: Déployez le contrat sur un réseau de test

1. **Connect Remix to MetaMask**:

   - Accédez à l'onglet **Deploy & Run Transactions** dans Remix.
   - Sous \*\* Environment \*\*, sélectionnez **Injected Web3** Cela connectera Remix à votre portefeuille Metamask.

<p align="center">![ERC20_ConnectMetamask](../../static/img/dev_tutorials/ERC20_ConnectMetamask.png)</p>

Assurez-vous que votre métamask est connecté à **Core testnet2**.

2. **Déployez votre contrat** :
   - Dans la section **Deploy**, sélectionnez le **ERC-20 contract** (par exemple, « MyToken »).
   - Veuillez coller l'« adresse du destinataire » des jetons à frapper dans Premint, ainsi que l'« adresse du propriétaire » (notez que dans ce cas, les deux adresses sont identiques).
   - Cliquez sur **Deploy** Vous serez invité à confirmer la transaction dans MetaMask.
   - Une fois le contrat déployé, vous verrez l’adresse du contrat dans Remix.

<p align="center">![ERC20_Deploy](../../static/img/dev_tutorials/ERC20_Deploy.png)</p>

## Étape 5 : Interagissez avec votre contrat

Maintenant que votre contrat est déployé, vous pouvez interagir avec lui directement depuis Remix.

1. **Vérifier le solde**:

   - Sous **Deployed Contracts**, vous verrez votre contrat déployé.
   - Développez l’interface du contrat pour interagir avec des fonctions telles que « balanceOf », « mint » (si vous avez inclus la fonctionnalité de frappe).
   - Collez l'adresse du destinataire et cliquez sur « balanceOf » pour vérifier le solde du destinataire.

<p align="center">
![ERC20_Balance](../../static/img/dev_tutorials/ERC20_Balance.png)</p>

1. **creer des jetons**:

   - Utiliser la fonction « mint » pour créer de nouveaux jetons. Fournissez l'adresse du destinataire et le nombre de jetons à frapper.
   - Confirmez la transaction dans MetaMask.

2. **Transferer des jetons** :
   - Vous pouvez également utiliser la fonction **transfer** pour envoyer des jetons d'une adresse à une autre.
   - Indiquez l'adresse du destinataire et le montant de jetons que vous souhaitez envoyer.
   - Confirmer la transaction dans MetaMask

## Étape 6 : Gérez vos jetons

Vous pouvez ajouter des fonctions supplémentaires à votre contrat, telles que :

- **Burning Tokens** : Une fonction pour brûler (détruire) des jetons.

- **Rôles** : Les rôles vous permettent d'attribuer différentes autorisations aux adresses, telles que la frappe ou la gravure de jetons, garantissant des actions sécurisées et contrôlées dans le cadre du contrat.

- **Upgradability** : vous permet de mettre à niveau la logique du contrat après le déploiement sans perdre de données, garantissant ainsi la flexibilité pour les améliorations futures

Vous trouverez plus d'informations sur l'implémentation ERC-20 d'OpenZeppelin [ici](https://docs.openzeppelin.com/contracts/4.x/erc20).

## Références :

- [ERC-20 Token Standard (Ethereum.org)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [OpenZeppelin ERC-20 Implementation Documentation](https://docs.openzeppelin.com/contracts/4.x/erc20)