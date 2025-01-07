---
sidebar_label: Configuration des Nœuds d'Archive
hide_table_of_contents: false
sidebar_position: 2
---

# Configuration des Nœuds d'Archive

---

Les nœuds d'archive dans le réseau Core jouent un rôle crucial en conservant l'état historique complet du réseau. These nodes are specialized versions of full nodes with enhanced capabilities tailored to storing and providing access to the entire history of all transactions and states since the inception of the Core.

## Requis Systèmes

Plusieurs exigences, à la fois logicielles et matérielles, sont nécessaires pour configurer un nœud d'archive sur le réseau Core.

### Logiciel

- Actuellement, un nœud d'archive Core ne peut fonctionner que sur **Mac OS X** ou les systèmes d'exploitation **Linux**.

### Matériel

Les nœuds Core effectuent plusieurs tâches nécessitant beaucoup de ressources, comme le stockage des données de la blockchain, la vérification des blocs ou des transactions, la communication avec les nœuds pairs et la réponse aux demandes réseau. Chaque type de nœud Core a des exigences matérielles spécifiques en fonction de ses besoins.

#### Spécifications Matérielles pour les Nœuds d'Archive du Testnet

Pour les nœuds d'archive sur le Testnet de la Core Blockchain, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | Disque SSD avec une capacité minimale de 4 To                                 |
| CPU              | Processeur à 8 cœurs                                                          |
| RAM              | 32 Go                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

#### Spécifications Matérielles pour les Nœuds d'Archive du Mainnet

Pour les nœuds d'archive sur le **Mainnet de la Core Blockchain**, nous recommandons les spécifications matérielles minimales suivantes :

| Requis           | Détails                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | Disque SSD avec une capacité minimale de 4 To                                 |
| CPU              | Processeur à 8 cœurs                                                          |
| RAM              | 32 Go                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

## Exécution d'un Nœud d'Archive Core

1\. Nous recommandons d'utiliser le dépôt GitHub [core-chain](https://github.com/coredao-org/core-chain) pour compiler et exécuter directement votre nœud complet à partir de notre code source de blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2\. Download the latest node binary for from Core's GitHub [releases repo](https://github.com/coredao-org/core-chain/releases/latest) and the latest snapshot for archive node from Core's [Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). Le nœud binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet.

3\. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

```bash
geth --datadir node init genesis.json
```

4\. Votre nœud complet/archivé est prêt! Vous pouvez démarrer votre nœud en exécutant simplement la commande `geth` suivante :

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full 
```

5\. Pendant que votre nœud d'archive fonctionne, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Par défaut, le fichier de journal se trouve à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si vous le souhaitez.
