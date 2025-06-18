---
sidebar_label: Utilisation de Remix
hide_table_of_contents: false
sidebar_position: 2
description: Déployer des contrats sur Core en utilisant l'IDE Remix
---

# Utilisation de Remix

---

Remix est un environnement de développement intégré (IDE) en ligne puissant permettant aux développeurs de construire, tester, déployer et gérer des contrats intelligents. Dans ce tutoriel, nous allons utiliser l'[IDE Remix](https://remix.ethereum.org/) pour déployer un contrat sur le Testnet de Core.

## Connexion de Remix au Testnet de Core

Accédez à l'[IDE Remix](https://remix.ethereum.org/), et vous verrez une interface similaire à celle ci-dessous :

<p align="center">![remix-ide](../../static/img/remix/remix-1.avif)</p>

Dans l'image ci-dessous, vous pouvez choisir différentes versions du compilateur Solidity. We recommend using the newer, more stable versions of Solidity, such as `v0.8.24`. You can also choose whether to enable auto-compilation or hide warnings.

<p align="center">![remix-ide](../../static/img/remix/remix-2.avif)</p>

Vous pouvez choisir différents environnements sur Remix, comme illustré dans l'image ci-dessous. Un environnement est simplement le réseau blockchain avec lequel vous allez travailler. Il existe des machines virtuelles (VMs) intégrées, ainsi que des fournisseurs qui vous permettent de vous connecter à des VMs externes.

Pour vous connecter au Testnet de Core, choisissez `Injected Provider - MetaMask`. Make sure your MetaMask wallet is [configured for Core Testnet2](./core-wallet-config.md) using the testnet chain settings, and verify that your account is funded with tCORE2. Refer [here](https://scan.test2.btcs.network/faucet) for Core Testnet (1114) faucet.

<p align="center">![remix-ide](../../static/img/remix/remix-3.avif)</p>

Il vous sera demandé de vous connecter à MetaMask. Une fois connecté, Remix affiche l'adresse connectée et le montant de CORE détenu par l'adresse, comme illustré ci-dessous :

<p align="center" style={{zoom:"40%"}}>![remix-ide](../../static/img/remix/remix-4.avif)</p>

## Compilation et déploiement du contrat intelligent

- **Make sure that your smart contract follows the [Solidity Support Guidelines for Core blockchain](./smart-contract-guidelines.md)**.

- Remix propose plusieurs contrats prédéfinis chargés par défaut dans l'espace de travail, comme illustré ci-dessous. Pour ce tutoriel, utilisons le contrat préchargé `1_Storage.sol`. This contract implements a simple database that allows us to store a single number using the `store()` function and retrieve it using the `retrieve()` function.

<p align="center">![remix-ide](../../static/img/remix/remix-5.avif)</p>

- From the menu on the left, navigate to the `SOLIDITY COMPILER`, navigate to `Advanced Configurations` and select `shanghai` from the `EVM Version` dropdown.

<p align="center" style={{zoom:"60%"}}>![evm-version](../../static/img/solidity-support/remix-setting.png)</p>

:::note
If you're using Core Testnet1, ensure that the EVM version is set to `paris`.
:::

- Cliquez ensuite sur le bouton bleu **Compile** pour compiler votre contrat intelligent.

- Then switch to the `DEPLOY & RUN TRANSACTIONS` from the left panel menu and select the **Deploy** button, outlined in red below.

<p align="center">![remix-ide](../../static/img/remix/remix-6.avif)</p>

- Après avoir sélectionné le bouton **Deploy**, MetaMask ouvrira une fenêtre contextuelle vous demandant de signer et d'envoyer la transaction de déploiement sur le Testnet de Core, comme illustré ci-dessous.

<p align="center" style={{zoom:"40%"}}>![remix-ide](../../static/img/remix/remix-7.png)</p>

- Une fois que le contrat est déployé avec succès, un message de confirmation apparaîtra dans la console.

<p align="center">![remix-ide](../../static/img/remix/remix-8.avif)</p>

## Interaction avec le contrat intelligent

Once your contract is deployed, you can use Remix to interact with it quickly and intuitively.

Trouvez le nouveau contrat déployé dans la section `Deployed Contracts` située en bas à gauche. Testons notre contrat en entrant `100` dans le champ de saisie de la fonction `store` et en sélectionnant le bouton orange **store**.

<p align="center">![remix-ide](../../static/img/remix/remix-9.avif)</p>

MetaMask will prompt us to sign and send the transaction again.

<p align="center" style={{zoom:"40%"}}>![remix-ide](../../static/img/remix/remix-10.png)</p>

Après avoir réussi à stocker `100` élément dans notre contrat intelligent, nous pouvons utiliser la fonction `retrieve` pour lire la valeur. Click the **Retrieve** button to view the value, and we should see the number `100` returned, as shown in the blue box below.

Vous aurez peut-être remarqué que MetaMask ne s'est pas affiché pour l'appel à la fonction `retrieve` ; cela s'explique par le fait que les _transactions_ ne sont nécessaires que pour les interactions avec les contrats intelligents qui nécessitent du gas, et la lecture des données d'un contrat intelligent ne nécessite pas de gas.

<p align="center">![remix-ide](../../static/img/remix/remix-11.avif)</p>

## Core Scan

Utilisons [Core Scan](https://scan.test2.btcs.network/) pour vérifier notre contrat déployé.

- \*\*Copiez l'adresse du contrat depuis Remix et utilisez-la comme entrée pour une recherche sur Core Scan.
- Vous devriez trouver le contrat intelligent ainsi que des informations pertinentes, et une liste de toutes les interactions historiques avec le contrat, y compris notre transaction de déploiement et notre transaction `store`.

<p align="center">![remix-ide](../../static/img/remix/remix-12.avif)</p>