---
sidebar_label: Sur le Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Exécution des nodes complets Core sur le Testnet de Core

---

Un nœud complet Core stocke l'intégralité de l'historique de la blockchain Core, permettant à quiconque de vérifier l'état de n'importe quel compte. Un nœud complet Core peut prendre plusieurs formes :

- **Nœud complet normal :** pour une utilisation privée.
- **Nœud complet de validateur :** agit en tant que validateur sur Core, validant les blocs et transactions.
- **Nœud complet RPC :** fournit des services RPC et répond aux requêtes HTTP.

:::note
Ce document fournit des lignes directrices détaillées sur l'exécution des nodes complets normaux sur le réseau Core.
:::

## Configuration système requise pour les nodes complets sur le réseau Core

Il existe plusieurs exigences système pour configurer un nœud complet sur Core.

### Spécifications logicielles pour les nodes complets sur le Testnet de Core

Actuellement, **seulement** l'exécution sur **Mac OS** X et **Linux** est prise en charge.

### Spécifications matérielles pour les nodes complets sur le Testnet de Core

Pour les nodes complets sur **Core Testnet**, les spécifications matérielles minimales recommandées sont :

| Requis           | Détails                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace disque libre                                                    |
| CPU              | 4 cœurs CPU                                                                   |
| RAM              | 8 go                                                                          |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

## Construction et exécution d'un nœud complet sur le Testnet de Core

1. Nous recommandons d'utiliser le [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud complet à partir du code source de notre blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2. Téléchargez la dernière version binaire du nœud pour le Testnet de Core à partir du [repertoire de sortie](https://github.com/coredao-org/core-chain/releases/latest) GitHub de Core. Le binaire du nœud inclut les fichiers de configuration du testnet. Assurez-vous d'utiliser les configurations de **testnet2**. Téléchargez le dernier snapshot pour le testnet [ici](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Notez que la méthode recommandée pour synchroniser un nœud testnet est de démarrer à partir du bloc genesis_.

3. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

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

4. Maintenant que la configuration du nœud d'archivage est terminée, lançons-le !

Exécutez la commande `geth` suivante pour lancer le nœud complet:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5. Pendant que le nœud complet est en cours d'exécution, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.