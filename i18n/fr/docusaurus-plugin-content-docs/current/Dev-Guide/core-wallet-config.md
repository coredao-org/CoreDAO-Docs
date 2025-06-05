---
sidebar_label: Ajout du réseau Core
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connexion au Testnet de Core

---

:::note
Ceci est un guide détaillé pour se connecter au Core Testnet/Mainnet  en utilisant le portefeuille MetaMask.
:::

### Prérequis Logiciels

1. [Extension de Navigateur MetaMask](https://metamask.io/)

### Configuration de MetaMask

Nous recommandons d'utiliser le [portefeuille web MetaMask](https://metamask.io/) pour se connecter au Testnet Core. Vous devrez installer MetaMask et configurer votre compte avant de l'utiliser pour vous connecter au Core Testnet/Mainnet Vous pouvez trouver les instructions pour la configuration de MetaMask ici.

### Ajout du réseau Core à MetaMask

Il existe plusieurs façons d'ajouter les configurations du  Core Testnet/Mainnet à votre portefeuille MetaMask, nous avons listé les méthodes les plus fiables et testées ci-dessous.

#### Ajouter le réseau manuellement

Une fois que vous avez configuré votre portefeuille MetaMask, vous pouvez l'utiliser pour vous connecter au Core en ajoutant les détails du reseau Core dans les paramètres de réseau de MetaMask. Naviguez vers `Paramètres -> Réseaux` dans MetaMask et cliquez sur le bouton `Ajouter un Réseau`. Entrez les informations suivantes :

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">

- **Nom du réseau :** Core Blockchain Testnet
- **Nouvelle URL RPC :** https://rpc.test2.btcs.network
- **ID de Chaîne:** 1114
- **Symbole de la devise :** tCORE2
- **URL de l'explorateur de blocs :** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Site de Staking :** https://stake.test2.btcs.network/

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../../../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)
</p>

</TabItem>
<TabItem value="testnet1">

- **Nom du réseau:** Core Blockchain Testnet
- **Nouvelle URL RPC:** https://rpc.test.btcs.network
- **ID de Chaîne:** 1115
- **Symbole de la devise:** tCORE
- **URL de l'explorateur de blocs:** https://scan.test.btcs.network
- **Faucet:** https://scan.test.btcs.network/faucet
- **Site web de staking :** https://stake.test.btcs.network/

</TabItem>

<TabItem value="mainnet">

- **Nom du réseau :** Core Blockchain Mainnet
- **Nouvelle URL RPC :** https://rpc.ankr.com/core
- **ID de Chaîne:** 1116
- **Symbole de la devise :** CORE
- **URL de l'explorateur de blocs :** https://scan.coredao.org
- **Site web de staking  :** https://stake.coredao.org/

</TabItem>

</Tabs>

### Ajouter le réseau Core via Chainlist.org

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">
1. Rendez-vous sur Chainlist.org et recherchez ‘_core blockchain_’. Assurez-vous de cocher l'option _Inclure les Testnets_.

2. Vérifiez bien que vous choisissez le bon réseau. Vérifiez les détails dans les captures d'écran ci-dessous — ID de la chaîne, devise, etc., pour vous assurer que vous ajoutez le bon réseau.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/testnet-wallet-config/chainlist_testnet2.png)
</p>

3. Cliquez sur _Connecter le Portefeuille_, puis choisissez MetaMask. Autorisez la connexion à MetaMask en confirmant les notifications.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Ajoutez Core Testnet2 en cliquant sur le bouton « Approuver ».

Le Testnet Core est maintenant ajouté à votre MetaMask.

</TabItem>

<TabItem value="testnet1">
1. Rendez-vous sur Chainlist.org et recherchez ‘_core blockchain_’. Assurez-vous de cocher l'option _Include Testnets_ option.

2. Vérifiez bien pour vous assurer de choisir le bon réseau Vérifiez les détails dans les captures d'écran ci-dessous — ID de la chaîne, devise, etc., pour vous assurer que vous ajoutez le bon réseau.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/testnet-wallet-config/chainlist_testnet1.png)
</p>

3. Cliquez sur _Connect Wallet_, puis choisissez MetaMask. Autorisez la connexion à MetaMask en confirmant les notifications.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Ajoutez Core Testnet2 en cliquant sur le bouton « Approuver ».

Le Core Testnet est maintenant ajouté à votre MetaMask.

</TabItem>

<TabItem value="mainnet">

1. Rendez-vous sur chainlist.org et recherchez ‘_core blockchain_’.

2. Vérifiez bien pour vous assurer de choisir le bon réseau Vérifiez les détails dans les captures d'écran ci-dessous — ID de la chaîne, devise, etc., pour vous assurer que vous ajoutez le bon réseau.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/miannet-wallet-config/chainlist_mainnet.png)
</p>

3. Cliquez sur _Connect Wallet_, puis choisissez MetaMask. Autorisez la connexion à MetaMask en confirmant les notifications.

<p align="center" style={{zoom:"40%"}}>
![chainlist-testnet-connect-metmask](../../../../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)
</p>

4. Ajoutez Core Mainnet en cliquant sur le bouton « Approuver ».

Le Core Mainnet est maintenant ajouté à votre MetaMask.

</TabItem>

</Tabs>

### Ajouter le réseau Core via le Core Explorer

<Tabs defaultValue="testnet2" values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet1', value: 'testnet1'},
{label: 'Mainnet', value: 'mainnet'},
]}>

<TabItem value="testnet2">
1. Rendez-vous sur `https://scan.test2.btcs.network/` et faites défiler la page jusqu'en bas

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../../../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Cliquez sur le bouton ‘_Add Core Network_’

3. Approuvez dans MetaMask

4. Après avoir suivi ces étapes, vous pourrez voir le réseau Core la prochaine fois que vous accéderez au sélecteur de réseau.

</TabItem>

<TabItem value="testnet1">
1. Rendez-vous sur https://scan.test.btcs.network/ et faites défiler la page jusqu'en bas

<p align="center" style={{zoom:"60%"}}>
![add-network-metamask](../../../../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)
</p>

2. Cliquez sur le bouton ‘_Add Core Network_’

3. Approuvez dans MetaMask

4. Après avoir suivi ces étapes, vous pourrez voir le réseau Core la prochaine fois que vous accéderez au sélecteur de réseau.

</TabItem>

<TabItem value="mainnet">

1. Rendez-vous sur https://scan.coredao.org/ et faites défiler la page jusqu'en bas

<p align="center" style={{zoom:"60%"}}>
![metmask-mainnet](../../../../../static/img/miannet-wallet-config/mainnet-wallet-config-9.webp)
</p>

2. Cliquez sur le bouton ‘_Add Core Network_’

3. Approuvez dans MetaMask

4. Après avoir suivi ces étapes, vous pourrez voir le réseau Core la prochaine fois que vous accéderez au sélecteur de réseau.

</TabItem>

</Tabs>

:::info

#### Dernier code de  Core Testnet (1114)

Le nouveau testnet de Core avec le `chainID 1114` est désormais en ligne et recommandée pour une utilisation. Il prend en charge le BTC Testnet4 pour le staking, contrairement à la version précédente (`chainID 1115`). L’ancien testnet sera bientôt déprécié et finira par être retiré. Passez donc au nouveau testnet pour bénéficier des dernières fonctionnalités.
:::
