---
sidebar_label: Configuration des Nœuds Snapshot
hide_table_of_contents: false
sidebar_position: 2
---

# Configuration des Nœuds Snapshot

---

Les snapshots sont essentiels pour qu'un réseau garantisse que les nœuds puissent se synchroniser avec l'état actuel du réseau aussi rapidement que possible. Avant que les nœuds puissent être utilisés, ils doivent se synchroniser avec l'état actuel du réseau, et en commençant à partir d'un snapshot récent, ces nœuds peuvent accélérer une grande partie du processus de synchronisation.

## Requis Systèmes

Il y a plusieurs requis systèmes, à la fois logicielles et matérielles, pour configurer un nœud snapshot sur le réseau Core.

### Logiciel

- Actuellement, un nœud snapshot Core ne peut fonctionner que sur **Mac OS X** ou les systèmes d'exploitation **Linux**.

### Matériel

Sur le réseau Core, les nœuds snapshot fonctionnent également comme des nœuds d'archive, stockant l'intégralité des données de la blockchain.

#### Spécifications Matérielles pour les Nœuds Snapshot du Testnet

Pour les nœuds snapshot sur le Testnet de la blockchain Core, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | Disque SSD avec une capacité minimale de 4 To                                 |
| CPU              | 4 cœurs CPU                                                                   |
| RAM              | 16 Go                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

#### Spécifications Matérielles pour les Nœuds Snapshot du Mainnet

Pour les nœuds snapshot sur le **Mainnet de la blockchain Core**, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | Disque SSD avec une capacité minimale de 4 To                                 |
| CPU              | 4 cœurs CPU                                                                   |
| RAM              | 16 Go                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

## Snapshots de Core Chain

Vous pouvez obtenir les derniers snapshots à partir de [ce lien](https://github.com/coredao-org/core-snapshots).

## Synchronisation des Nœuds en Utilisant des Snapshots sur le Réseau Core Chain

Sur le réseau Core Chain, vous pouvez synchroniser votre nœud avec l'état actuel de plusieurs façons. Ce document vous guide à travers le processus de synchronisation des nœuds en utilisant des snapshots.

### Téléchargement des Binaries Précompilés

Téléchargez les binaries précompilés à partir de la [page des sorties](https://github.com/coredao-org/core-chain/releases/latest) ou suivez les instructions ci-dessous

##### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

##### MacOS

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
```

### Téléchargement des Fichiers de Configuration

Téléchargez genesis.json et config.toml :

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)
unzip mainnet.zip
```

### Configuration des Pairs

- **Mainnet**: Le fichier config.toml de la dernière sortie contient les informations suivantes sur les `Bootstrap Nodes` et `Static Nodes` :

```yaml
BootstrapNodes = 
["enode://6334cdde2728b17486e4930c29e85128694faf118c23f559c7502e1cb42dd90a54f785c80c6a493d7d6f5ed23f3c9cf75e0392b024e45f7eadc81a84544a45ff@seed4.coredao.org:0?discport=35022",
"enode://20b605d5ee978c22bfb9ed208a40f2876d3dfafb1c60a6427c4db28e516520ee610cbc2a1c0ee05dd08578a041dc9070d92cf888422ed0869d0666b5103292b4@seed2.coredao.org:0?discport=35022",
"enode://04ffc724b82e2c52df47e2439a30ca4c0f7aca5ce270f6c6bcdf539581ce2ae4965afd5c5fe19106cd528ed6f379c68687a41310054ee751a73880b2c73e85d8@seed3.coredao.org:0?discport=35022",
"enode://e9a218f70debcb6a423d68f287c972c717606a70bfed278c2f7a876493d37bc535b05127abddeeca21941fc61497a6ca13387466c75a070050862ca6da11b0ca@seed1.coredao.org:0?discport=35022"]

StaticNodes = 
["enode://8c60a7445dfff047051aa686d621e8ff3fad4623ebd60aea3b8a9b5285945ff0bb05540cc215bcb0ae3fb07b6c368605ddeebeb23b282ffb2ae777d8a73155ec@18.230.84.232:35021",
"enode://af5bb3eb4278885d98dfdb994a283cd1eafec7f3cf53b13325a484a71e02613a2d724314a2d5bf2ea3b33adb0d1ad7d1c5b9e23c8d2959453a55bde5f02c762f@35.72.191.164:35021",
"enode://40811f3281241c68555179e40654971ec01b1849899e296c0852e5dfed70f3d17f776e90dced50e94cc71699e2b010eec58047ce91d07fa7a3520220cf3ce22b@13.39.140.139:35021",
"enode://ee253be3c7c2ccdd4611d16975733ceb2f41f61a04672756fa4850a0b85419ca5e07ceb5a6f1ac43318b136c8995b9160e6de0c6b4bc2c9325797c11275888e6@18.221.135.3:35021",
"enode://71f4b875a8cec01fe9f01974a682ef846ab8cbe0c23518b2a94e38eef0db829488502122b19c94d595521364bc4550639b58c0332d3942447dfd65707fc80bc0@13.214.98.126:35021"]
```

### Téléchargement des Snapshots

Téléchargez le dernier snapshot de chaindata à partir d'[ici](https://github.com/coredao-org/core-snapshots).

### Démarrer le Nœud

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Assurez-vous d'utiliser la version de geth que vous avez téléchargée avec wget ci-dessus, et non votre installation locale de geth, qui pourrait être une mauvaise version.
:::

:::tip
It is recommended to run a fast node, which is a full node with the flag --tries-verify-mode none set if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Surveiller l'État du Nœud

Vous pouvez surveiller les logs pour vérifier l'état du nœud. Par défaut, les logs sont enregistrés dans `./node/logs/core.log`.

## Mode de Synchronisation

Il existe deux modes de synchronisation pour exécuter un nœud complet : **snap** et **full**, que vous pouvez spécifier avec l'option **--syncmode**.

- **Snap sync mode** : Utilisé pour la synchronisation initiale, il télécharge les derniers états plutôt que d'exécuter les blocs depuis le genesis. Une fois la synchronisation initiale terminée, il passera automatiquement en mode full.

- **Full sync mode :** Ce mode exécute tous les blocs depuis le genesis. **Il n'est pas recommandé**, car la quantité de données historiques est trop volumineuse. Il est préférable de télécharger un snapshot a partir du [repertoire officiel](https://github.com/coredao-org/core-snapshots) et de démarrer la synchronisation complète à partir de celui-ci.

- Si l'option **--syncmode** n'est pas fournie, le mode de synchronisation par défaut dépendra de l'état du dossier de données. Cela sera en mode **snap** si vous synchronisez à partir du genesis, ou en mode **full** si vous démarrez à partir d'un snapshot.
  2
