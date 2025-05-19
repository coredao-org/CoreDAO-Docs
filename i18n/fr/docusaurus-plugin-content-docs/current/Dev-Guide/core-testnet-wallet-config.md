---
sidebar_label: Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Se connecter au Core Tesnet

---

:::note
Ceci est un guide détaillé pour se connecter au Testnet de Core (1114)  en utilisant le portefeuille MetaMask.
:::

### Prérequis Logiciels

1. [Extension de Navigateur MetaMask](https://metamask.io/)

### Configuration du portefeuille MetaMask

Nous recommandons l'utilisation du [portefeuille web MetaMask](https://metamask.io/) pour se connecter au  Core Testnet. Vous devrez installer MetaMask et configurer votre compte avant de l'utiliser pour vous connecter au Core Testnet. Vous pouvez trouver les instructions pour la configuration de MetaMask ici.

### Ajout du réseau Core Testnet à MetaMask

Il existe plusieurs façons d'ajouter les configurations du Core Testnet à votre portefeuille MetaMask, nous avons listé les méthodes les plus fiables et testées ci-dessous.

#### Ajouter le réseau manuellement {#adding-network-manually}

Une fois que vous avez configuré votre portefeuille MetaMask, vous pouvez l'utiliser pour vous connecter au Core Testnet en ajoutant les détails de la chaîne Core Testnet dans les paramètres de réseau de MetaMask. Naviguez vers `Paramètres -> Réseaux` dans MetaMask et cliquez sur le bouton \`Ajouter un Réseau'. Entrez les informations suivantes :

- **Nom du réseau :** Core Blockchain Testnet
- **Nouvelle URL RPC :** https://rpc.test2.btcs.network
- **ID de Chaîne:** 1114
- **Symbole de la devise :** tCORE2
- **URL de l'explorateur de blocs :** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Site web de staking  :** https://stake.test2.btcs.network/


![add-network-metamask](../.././../../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Ajouter le réseau Core via Chainlist.org

1. Rendez-vous sur Chainlist.org et recherchez ‘_core blockchain_’. Assurez-vous de cocher l'option _Include Testnets_ option.

![chainlist-testnet-connect-metmask](../.././../../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Vérifiez bien pour vous assurer de choisir le bon réseau Vérifiez les détails dans les captures d'écran ci-dessous — ID de la chaîne, devise, etc., pour vous assurer que vous ajoutez le bon réseau.

![chainlist-testnet-connect-metmask](../.././../../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Cliquez sur _Connecter le Portefeuille_, puis choisissez MetaMask. Autorisez la connexion à MetaMask en confirmant les notifications.

![chainlist-testnet-connect-metmask](../.././../../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Cliquez sur le bouton _‘Changer de Réseau_‘ pour basculer vets le Core Testnet sur MetaMask.

![chainlist-testnet-connect-metmask](../.././../../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

Le Core Testnet est maintenant ajouté à votre MetaMask.

#### Ajout du Réseau via Core Testnet Explorer

Si vous utilisez l'extension MetaMask pour Chrome, vous pouvez ajouter rapidement le Core Testnet à MetaMask. Visitez le [Core Testnet Explorer](https://scan.test.btcs.network/), faites défiler vers le bas et sélectionnez le bouton \`Add Core Network\`\`. Une fenêtre contextuelle s'ouvrira avec toutes les informations nécessaires sur le réseau – vous n'avez qu'à confirmer et approuver.

![add-network-metamask](../.././../../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### Nouveau Testnet

Le nouveau testnet de Core avec le `chainID 1114` est désormais en ligne et recommandé pour l'utilisation. Il prend en charge le BTC Testnet4 pour le staking, contrairement à la version précédente (`chainID 1115`). L’ancien testnet sera bientôt déprécié et finira par être retiré. Passez donc au nouveau testnet pour bénéficier des dernières fonctionnalités.

#### Mises à Jour de la marque

La `Satoshi Chain/BTCs` a été rebaptisée `Core/CORE`, respectivement. Si vous avez ajouté le Testnet avant le changement, vous devrez mettre à jour manuellement le Nom du Réseau et le Symbole de la Monnaie dans les paramètres de MetaMask ; sinon, vous ne pourrez pas utiliser la version actuelle du Core Testnet. Allez dans `Paramètres -> Réseau', et sélectionnez `Core Testnet\` pour ouvrir les paramètres du réseau. Mettez à jour le Nom du Réseau et le Symbole de la Monnaie avec les valeurs indiquées dans la [section ci-dessus](#adding-network-manually) et cliquez sur le bouton Sauvegarder. Vous êtes prêt à partir !
:::

### Alimentation du Portefeuille avec des jetons tCORE

Pour aider les utilisateurs à démarrer et permettre aux développeurs de rapidement mettre en place leurs dApps, Core a mis en place le [Faucet public Core Testnet](https://scan.test.btcs.network/faucet) pour distribuer des jetons Core testnet, **tCORE**. Suivez le [guide](./core-faucet.md) détaillé pour alimenter votre compte MetaMask avec des jetons tCORE.

### L'Envoi jetons tCORE

Vous pouvez utiliser MetaMask pour envoyer des tCORE à d'autres adresses.

1. Accédez à votre portefeuille MetaMask, assurez-vous que vous êtes connecté au Core Testnet
2. Cliquez sur le bouton `Envoyer`

![send-metmask](../.././../../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Entrez le montant de jetons tCORE que vous souhaitez envoyer et l'adresse à laquelle vous souhaitez envoyer les jetons tCORE (assurez-vous qu'il s'agisse d'une adresse du Core Testnet). Cliquez ensuite sur Suivant et confirmez la transaction.

![send-metmask](../.././../../../static/img/testnet-wallet-config/send-tcore-2.png)

