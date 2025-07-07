---
sidebar_label: Nœud complet
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Les nodes complets (Full Nodes) sur Core

---

Un nœud complet Core stocke l'intégralité de l'historique de la blockchain Core, permettant à quiconque de vérifier l'état de n'importe quel compte. Un nœud complet Core peut prendre plusieurs formes:

- **Nœud complet normal :** pour une utilisation privée.
- **Nœud complet de validateur :** agit en tant que validateur sur Core, validant les blocs et transactions.
- **Nœud complet RPC :** fournit des services RPC et répond aux requêtes HTTP.

Voici les étapes détaillées pour exécuter des **nodes complets normaux** sur le réseau Core.

## Requis Systèmes

Il existe plusieurs exigences système pour configurer un nœud complet sur Core.

### Logiciel

- **Système d'exploitation:** Actuellement, un nœud de validation Core est compatible uniquement avec les systèmes d'exploitation macOS ou Linux (Ubuntu 20.04 ou ultérieur).
- **Connectivité réseau:** Connexion Internet stable avec une faible latence et une haute disponibilité
- **Configuration du pare-feu:** Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nodes

### Matériel

Les nodes Core effectuent plusieurs tâches nécessitant beaucoup de ressources, comme le stockage des données de la blockchain, la vérification des blocs ou des transactions, la communication avec les nodes pairs et la réponse aux demandes réseau. Contrairement aux validateurs, les nodes complets ne produisent pas de blocs, mais aident à propager les transactions et les blocs à travers le réseau. Ils jouent un rôle crucial dans le maintien de l'intégrité des données et dans le soutien d'un environnement sans confiance. Pour exécuter des nodes complets sur Core, les spécifications matérielles minimales recommandées sont les suivantes :

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Pour les nodes complets sur **Core Testnet2**, les spécifications matérielles minimales recommandées sont :

    | Exigences   | Détails                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**        | 1 To d'espace disque libre, disque SSD, gp3, 8 000 IOPS, débit de 250 Mo/s, latence de lecture \< 1 ms.|
    | **CPU**            | 4 CPU cores                                                                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Vitesse Internet** | Une connexion Internet haut débit avec des vitesses de téléversement/téléchargement de 5 Mbps.
                                     |

  </TabItem>

  <TabItem value="mainnet">
    Pour les nodes d'archivage sur **Core Mainnet**, les spécifications matérielles minimales recommandées sont :

    | Exigences   | Détails                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**        | 1 To d'espace disque libre, disque SSD, gp3, 8 000 IOPS, débit de 250 Mo/s, latence de lecture \< 1 ms|
    | **CPU**            | 4 CPU cores                                                                    |
    | **RAM**            | 32 Gigabytes                                                                                             |
    | **Vitesse Internet** | Une connexion Internet haut débit avec des vitesses de téléversement/téléchargement de 5 Mbps.
                                     |

  </TabItem>
</Tabs>

## Construire et exécuter un nœud complet sur Core

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> 

<TabItem value="testnet2">

  1. Nous recommandons d'utiliser le dépôt GitHub de [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud complet à partir du code source de notre blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

  2. Téléchargez la dernière version binaire du nœud pour le Testnet de Core à partir du [repertoire de sortie](https://github.com/coredao-org/core-chain/releases/latest) GitHub de Core. Le binaire du nœud inclut les fichiers de configuration du testnet. Assurez-vous d'utiliser les configurations de **testnet2**. Téléchargez le dernier snapshot pour le testnet [ici](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Notez que la méthode recommandée pour synchroniser un nœud testnet est de démarrer à partir du bloc genesis.

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

  4. Notre nœud complet est prêt, lançons-le ! Exécutez la commande suivante pour démarrer le nœud complet directement :

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

  5. Pendant que notre nœud complet fonctionne, nous pouvons surveiller ses journaux pour nous assurer que tout fonctionne correctement. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.

</TabItem>

<TabItem value="mainnet">

  1. Nous recommandons d'utiliser le dépôt GitHub de [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud complet à partir du code source de notre blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

  2. Téléchargez le binaire du nœud depuis la [page des sorties](https://github.com/coredao-org/core-chain/releases) du répertoire core-chain. Le nœud binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet. Il s'agit de la [version la plus récente](https://github.com/coredao-org/core-chain/releases/latest).

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

  4. Notre nœud complet est prêt, lançons-le ! Exécutez la commande suivante pour démarrer le nœud complet directement:

      ```bash
      ## start a full node
      geth --config ./config.toml --datadir ./node  --cache 8000
      ```

  5. Pendant que votre nœud d'archive fonctionne, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.
</TabItem>

</Tabs>