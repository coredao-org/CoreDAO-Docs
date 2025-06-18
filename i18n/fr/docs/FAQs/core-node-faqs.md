---
sidebar_label: FAQ sur les Nœuds Core
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur les Nœuds Core

---

### 1. What are the different types of nodes supported on the Core blockchain?

Sur le réseau Core, un nœud complet Core stocke l'historique complet de la blockchain Core, permettant à quiconque de vérifier l'état de n'importe quel compte. Un nœud complet Core peut prendre plusieurs formes :

- **Nœud complet normal :** pour un usage privé.
- **Nœud complet de validateur :** agit en tant que validateur sur Core, validant les blocs et transactions.
- **Nœud complet RPC :** fournit des services RPC et répond aux requêtes HTTP.

Other than this, Core also supports

- **Nœud archive :** stocke toutes les données de la blockchain Core depuis le bloc de genèse.
- **Snapshot nodes:** store snapshots to help other nodes fast-track syncing to the network.

### 2. Quels sont les avantages de gérer un nœud Core ?

Running a Core Full Node offers several benefits, including enhanced network security and decentralization. Les opérateurs peuvent vérifier les transactions de manière indépendante et ne dépendent pas de tiers. Les validateurs utilisant des nœuds complets peuvent participer à la production de blocs et à la validation, ce qui leur permet de potentiellement gagner des récompenses. Les nœuds configurés en tant que serveurs RPC fournissent des services précieux au réseau. The setup requires adherence to specific hardware and bandwidth specifications, which vary depending on the node's function: full, validator, or RPC server.

### 3. Qu'est-ce qu'un nœud complet Core ? Quelles sont les exigences matérielles/logiciels pour exécuter un nœud complet Core ?

Un nœud complet Core stocke l'historique complet de la blockchain Core, permettant à quiconque de vérifier l'état de n'importe quel compte. Un nœud complet Core peut prendre plusieurs formes :

- **Nœud complet normal :** pour un usage privé.
- **Nœud complet de validateur :** agit en tant que validateur sur Core, validant les blocs et transactions.
- **Nœud complet RPC :** fournit des services RPC et répond aux requêtes HTTP.

**Exigences logicielles :** Actuellement, un nœud complet Core ne peut fonctionner que sur Mac OS X et Linux

**Core Testnet Full Node Hardware Specifications**

| **Requis**       | **Détails**                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace disque libre                                                    |
| CPU              | 4 cœurs CPU                                                                   |
| RAM              | 8 Go                                                                          |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

**Core Mainnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace disque libre                                                    |
| CPU              | 4 cœurs CPU                                                                   |
| RAM              | 32 Go                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 5 Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

### 4. What is a Core RPC node? Quelles sont les exigences matérielles/logiciels pour exécuter un nœud RPC Core ?

Les nœuds RPC (Remote Procedure Call) sur le réseau Core jouent un rôle essentiel en facilitant l'interaction entre les applications externes et la blockchain Core. Ils servent d'interface à travers laquelle les développeurs et les utilisateurs peuvent interroger et interagir avec la blockchain, ce qui les rend indispensables pour le bon fonctionnement des applications décentralisées (DApps) et d'autres services basés sur la blockchain.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 8 cœurs CPU                                                                                                                                  |
| RAM              | 16 Go                                                                                                                                        |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 50 Mbps                                                               |

**Core Mainnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 16 cœurs CPU                                                                                                                                 |
| RAM              | 32 Go                                                                                                                                        |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 50 Mbps                                                               |

For more details, refer to [RPC node configuration guide](../Node/config/rpc-node-config.md)

### 5. Qu'est-ce qu'un nœud validateur Core ? Quelles sont les exigences matérielles/logiciels pour exécuter un nœud validateur Core ?

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de la blockchain Core.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 4 cœurs CPU                                                                                                                                  |
| RAM              | 8 Go                                                                                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

**Core Mainnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 8 cœurs CPU                                                                                                                                  |
| RAM              | 32 Go                                                                                                                                        |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

For more details, refer to [Validator Node Configurations Guide](../Node/config/validator-node-config.md)

### 6. How do I set up a full node on the Core blockchain?

Refer to the detailed guide [here](../Node/config/full-node.md) for instructions on setting up and running a full node on the Core network.