---
sidebar_label: Configuration des Nœuds RPC
hide_table_of_contents: false
sidebar_position: 2
---

# Configuration des Nœuds RPC

---

Les nœuds RPC (Remote Procedure Call) sur le réseau Core jouent un rôle essentiel en facilitant l'interaction entre les applications externes et la blockchain Core. Ils servent d'interface à travers laquelle les développeurs et les utilisateurs peuvent interroger et interagir avec la blockchain, ce qui les rend indispensables pour le bon fonctionnement des applications décentralisées (DApps) et d'autres services basés sur la blockchain.

## Requis Systèmes

Plusieurs exigences, à la fois logicielles et matérielles, sont nécessaires pour configurer un nœud RPC sur le réseau Core.

### Logiciel

- Actuellement, un nœud d'archive Core ne peut fonctionner que sur **Mac OS X** ou les systèmes d'exploitation **Linux**.

### Matériel

Les nœuds Core effectuent plusieurs tâches nécessitant beaucoup de ressources, comme le stockage des données de la blockchain, la vérification des blocs ou des transactions, la communication avec les nœuds pairs et la réponse aux demandes réseau. Chaque type de nœud Core a des exigences matérielles spécifiques en fonction de ses besoins.

#### Spécifications Matérielles pour les Nœuds RPC du Testnet

Pour les nœuds RPC sur le **Testnet de la blockchain Core**, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 8 cœurs CPU                                                                                                         |
| RAM              | 16 go                                                                                                               |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 50 Mbps.                     |

#### Spécifications Matérielles pour les Nœuds RPC du Mainnet

Pour les nœuds RPC sur le **Mainnet de la blockchain Core**, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 16 cœurs CPU                                                                                                        |
| RAM              | 32 go                                                                                                               |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 50 Mbps.                     |

## Exécution d'un Nœud RPC

### Activation du Port HTTP Entrant

Si vous exécutez un nœud RPC, vous devez activer les règles entrantes `HTTP` sur le port **8575** dans les paramètres du pare-feu. Le port **8575** est défini comme port par défaut. Vous pouvez modifier les configurations dans `config.toml`.

### Compilation et Exécution

1\. Nous recommandons d'utiliser le dépôt GitHub [core-chain](https://github.com/coredao-org/core-chain) pour compiler et exécuter directement votre nœud RPC complet à partir du code source de la blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2\. Téléchargez le binaire du nœud depuis la [page des sorties](https://github.com/coredao-org/core-chain/releases) du répertoire core-chain. Le binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet. Il s'agit de la [version la plus récente](https://github.com/coredao-org/core-chain/releases/latest).

3\. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

```bash
geth --datadir node init genesis.json
```

Vous devriez voir le message suivant :

```bash
INFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
INFO [07-18|14:57:20.724] Writing custom genesis block 
INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
INFO [07-18|14:57:20.729] Writing custom genesis block 
INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
```

4\. Votre nœud RPC complet est prêt, lançons-le !

Si vous envisagez d'exécuter un nœud RPC, vous pouvez simplement exécuter la commande `geth` suivante :

```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. Pendant que votre nœud RPC complet fonctionne, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.
