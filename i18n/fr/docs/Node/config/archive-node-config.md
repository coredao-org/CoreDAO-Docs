---
sidebar_label: Nœud d'archivage
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Nœuds d'archivage sur Core

---

Les nœuds d'archive dans le réseau Core jouent un rôle crucial en conservant l'état historique complet du réseau. Ces nœuds sont des versions spécialisées des nœuds complets, avec des capacités améliorées, conçues pour stocker et fournir un accès à l'historique entier de toutes les transactions et états depuis le début de Core.

## Requis Systèmes

Plusieurs exigences, à la fois logicielles et matérielles, sont nécessaires pour configurer un nœud d'archive sur le réseau Core.

### Logiciel

- **Système d'exploitation:** Actuellement, un nœud d'archivage Core est compatible uniquement avec les systèmes d'exploitation **macOS** ou **Linux** (Ubuntu 20.04 ou ultérieur).
- **Connectivité réseau:** Connexion Internet stable avec une faible latence et une haute disponibilité.
- **Configuration du pare-feu:** Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nœuds.

### Matériel

Un nœud d'archivage sur Core stocke l'historique complet de la blockchain, garantissant la disponibilité et l'intégrité des données pour les participants du réseau. Il prend en charge l'interrogation des transactions passées, la vérification des données historiques et l'amélioration de l'analyse de la blockchain. Bien que non requis pour le consensus, les nœuds d'archivage jouent un rôle crucial dans le maintien de la transparence et le soutien des applications décentralisées. Voici les exigences matérielles pour exécuter un nœud d'archivage sur Core.

<Tabs
defaultValue="testnetTwo"
values={[
{label: 'Testnet2', value: 'testnetTwo'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnetTwo">
Pour les nœuds d'archivage sur **Core Testnet2**, les spécifications matérielles minimales recommandées sont :

```
| Exigences   | Détails                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Stockage**        | Disque à état solide (SSD) avec une capacité minimale de 1 To. Les SSD sont recommandés en raison de leurs vitesses de lecture et d'écriture plus rapides, essentielles pour gérer les grandes quantités de données de la blockchain et fournir un accès rapide aux transactions historiques.           |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Vitesse Internet** | Une connexion Internet haut débit avec des vitesses de téléversement/téléchargement de 5Mbps                                |
```

  </TabItem>

  <TabItem value="mainnet">
    Pour les nœuds d'archivage sur **Core Mainnet**, les spécifications matérielles minimales recommandées sont :

```
| Exigences   | Détails                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Stockage**        | Disque à état solide (SSD) avec une capacité minimale de 4 To. Les SSD sont recommandés en raison de leurs vitesses de lecture et d'écriture plus rapides, essentielles pour gérer les grandes quantités de données de la blockchain et fournir un accès rapide aux transactions historiques.           |
| **CPU**            | 8 Core CPU                                                                                          |
| **RAM**            | 32 Gigabytes                                                                                        |
| **Vitesse Internet** | Une connexion Internet haut débit avec des vitesses de téléversement/téléchargement de 5Mbps                                |
```

  </TabItem>
</Tabs>

## Exécution d'un Nœud d'Archive Core

1. Nous recommandons d'utiliser le dépôt GitHub de [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud complet à partir du code source de notre blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2. Téléchargez la dernière version binaire du nœud à partir du répertoire de [sortie](https://github.com/coredao-org/core-chain/releases/latest) de Core sur GitHub, ainsi que le dernier snapshot pour le nœud d'archive depuis le Core [Snapshot Répertoire](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). Le nœud binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet.

3. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

```bash
geth --datadir node init genesis.json
```

4. Maintenant que la configuration du nœud d'archivage est terminée, lançons-le ! Exécutez la commande `geth` suivante pour lancer le nœud d'archivage :

```bash
## start an archive node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full
```

5. Pendant que votre nœud d'archive fonctionne, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Par défaut, le fichier de journal se trouve à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si vous le souhaitez.



