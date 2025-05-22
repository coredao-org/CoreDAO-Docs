---
sidebar_label: Exécution d'un Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Exécution de nœuds de validation sur Core

---

Ce guide vous guide à travers le processus de configuration d'un nœud validateur sur le réseau Core. Il couvre l'installation des dépendances système, la construction du logiciel de nœud Core, l'initialisation avec des données de snapshot et le démarrage de votre nœud validateur.

### Exigences système pour le Validator Node

Avant de commencer, assurez-vous que votre système répond aux spécifications matérielles et logicielles requises.

#### Plateformes de système d'exploitation prises en charge

. Actuellement, les plateformes de système d'exploitation prises en charge incluent Mac OS X et Linux.

#### Exigences matérielles

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Testnet', value: 'testnet'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Pour les nœuds de validation sur le réseau de test **Core Blockchain Testnet2**, les spécifications matérielles minimales suivantes sont recommandées :

    | Exigences.   | Détails                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 4 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                                        |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                |

  </TabItem>
  <TabItem value="testnet">
Pour les nœuds de validation sur le **Core Blockchain Testnet**, les spécifications matérielles minimales suivantes sont recommandées :

    |Exigences   | Détails                                                                                                  |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**          | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 4 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                     |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                   |

  </TabItem>
  <TabItem value="mainnet">
Pour les nœuds de validation sur **Core Blockchain Mainnet**, les spécifications matérielles minimales suivantes sont recommandées:

    | Exigences   | Détails                                                                                                   |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    |**Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 8 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                  |

  </TabItem>
</Tabs>

### Cloner le code de base de la Core Blockchain

Il est recommandé d'utiliser le référentiel GitHub [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud de validation, c'est-à-dire exécuter votre nœud de validation directement à partir de la base de code de la blockchain Core. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Installer les dépendances

Après avoir cloné le dépôt, l'étape suivante consiste à installer toutes les dépendances nécessaires pour construire le binaire geth (Go Ethereum). Exécutez la commande suivante pour installer les dépendances:

```bash
make geth
```

Cela téléchargera et installera les dépendances nécessaires et construira le binaire 'geth'. Le binaire `geth` sera situé à `./build/bin/geth`.

### Configuration du nœud

Il existe 2 approches pour configurer un nœud validateur à partir de zéro sur la Core blockchain:

- **By Snapshot (Recommend):** téléchargez le dernier instantané de la Core blockchain (https://github.com/coredao-org/core-snapshots)et synchronisez le nœud en fonction de celui-ci.
- **From Genesis (Not Recommend):** synchronisez l'ensemble des données de la Core blockchain à partir du [bloc Genesis] (https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La synchronisation à partir du bloc Genesis peut prendre un temps considérable. Il est recommandé de configurer un nœud Core en utilisant le dernier instantané pour accélérer le processus.
:::

#### Étapes pour exécuter un nœud validateur en utilisant un 'Snapshot'

1. **Téléchargez les derniers binaires pré-construits:** Téléchargez les derniers binaires de nœud à partir du référentiel officiel des versions de Core (https://github.com/coredao-org/core-chain/releases/latest).

2. **Fichiers de Genesis et de configuration:** Les binaires pré-construits contiennent `genesis.json` et `config.toml` pour le réseau respectif sur lequel vous souhaitez exécuter le nœud validateur. Assurez-vous que ces fichiers sont correctement placés dans le répertoire de configuration de votre nœud avant de poursuivre la configuration.

3. **Initialiser Genesis:** Écrivez l'état de genesis localement en exécutant la commande suivante à partir de votre répertoire de projet. Assurez-vous que le chemin vers le fichier `genesis.json` est correct. Dans ce cas, `genesis.json` signifie que le fichier `genesis.json` est situé dans le même répertoire, qui devrait être le répertoire racine (core-chain) de votre nœud.

```bash
geth --datadir node init genesis.json
```

Vous devriez voir le message suivant:

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

4. **Download & Extract the Latest Snapshot:** Téléchargez et extrayez le dernier instantané de la blockchain Core à partir du référentiel officiel des instantanés de Core.[Core Snapshot Repository] (https://github.com/coredao-org/core-snapshots).

5. **Génération de la clé de consensus:** Configurez la clé de consensus avant d'exécuter le nœud validateur. Pour créer une nouvelle clé de consensus, utilisez la commande suivante, qui créera un nouveau compte et affichera une adresse qui sera l'adresse de votre validateur (adresse de consensus).

```bash
#générer la clé de consensus et entrer le mot de passe
geth account new --datadir ./node
```

Vous serez invité à entrer un mot de passe. Ce mot de passe est crucial pour déverrouiller votre validateur, alors stockez-le de manière sécurisée. Vous pouvez enregistrer votre mot de passe dans un fichier texte en exécutant la commande suivante:

```bash
echo {your-password} > password.txt
```

Assurez-vous de prendre en compte les éléments clés suivants:
\* **Sécurisez votre Keystore et mot de passe:**  Stockez votre fichier keystore et votre mot de passe de manière sécurisée, car vous en aurez besoin plus tard.
**Sauvegardez votre clé:** Perdre l'accès à cette clé signifie perdre le contrôle de votre nœud validateur.

6. **Démarrer le Validator Node:**

Utilisez cette commande. Use the following command to start the validator node.

```bash
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000  --networkid {core-chain-id}
```

Analysons les 'flags' utilisés dans cette commande:

- **`config ./config.toml`:** Spécifie le fichier de configuration pour le nœud. Assurez-vous que les paramètres dans le fichier `config.toml` sont correctement configurés pour votre environnement spécifique.

- **`datadir ./node`:** Indique le répertoire de données pour le nœud.

- **`unlock {your-validator-address}`:** Déverrouille le compte validateur en utilisant l'adresse générée à l'étape précédente.

- **`miner.etherbase {your-validator-address}`:** Spécifie l'adresse qui recevra les récompenses de minage et les récompenses de bloc. Il s'agit généralement de l'adresse de votre validateur.

- **`password password.txt`:** Le mot de passe pour déverrouiller votre compte de validateur (assurez-vous que ce fichier est conservé de manière sécurisée).

- **`mine`:** Active l'exploitation minière/la validation (production de blocs) sur le réseau. Essentiel pour le fonctionnement du validateur

- **`allow-insecure-unlock`:** Autorise le processus de déverrouillage sans mesures de sécurité supplémentaires (à utiliser avec prudence).

- **`cache 8000`:** Alloue un grand cache (8 Go dans ce cas) pour améliorer les performances.

- **`networkid`:** Spécifiez l'Id de chaîne du réseau Core que vous avez l'intention d'exécuter pour le nœud validateur (par exemple, 1114 pour Core Testnet2)

#### Synchronisation depuis la Genesis

If you prefer to sync your validator node from the genesis block instead of using a snapshot:

- Skip Step #4 ("Download and extract the latest snapshot") in the setup instructions.

- After completing Steps 1 (Download Binaries), 2 (Genesis/Config Files), and 3 (Initialize Genesis), continue to generate your consensus key as normal.

- Then start the validator node using the command below:

  ```bash
  geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 8000 --networkid {core-network-id}
  ```

⚠️ **Note:** Syncing from genesis can take a lot of time depending on system resources and network speed.

## Monitor Logs

Once your validator node is up and running, it’s important to monitor the logs to ensure everything is operating smoothly.

The logs are typically stored by default in `./node/logs/core.log`, but can be changed to another location if desired. You can view and follow the logs in real-time using the following command:

```bash
# Tail the logs in real-time
# This will show you the most recent log entries and continuously update the log display.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This means the node is successfully receiving new blocks from the network and adding them to the local blockchain.

- **number:** The block number (e.g., `1,596,730` is the block number for that entry).

- **hash:** The unique identifier (hash) for the block, like a fingerprint of the block data (e.g., `0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c`).

- **miner:** The address of the miner who mined that block.

- **blocks:** The number of blocks imported (usually `1` in these logs).

- **txs:** The number of transactions in the block (e.g., `1` tx or `2` txs).

- **mgas:** The gas used in the transactions within the block. Gas is the computational work needed to execute transactions (e.g., `0.021` means 0.021 million gas).

- **elapsed:** The time it took to import the block, in milliseconds (e.g., `3.003ms`).

- **mgasps:** The speed at which gas is being processed (in million gas per second).

- **triedirty:** The amount of dirty memory used (in this case, around `869.67 KiB`), which indicates how much memory is being used to store block data temporarily.

- **Looking for peers:** This message means the node is searching for other nodes to connect with. Peer-to-peer connections are essential to synchronize the blockchain with the network.

- **peercount:** The current number of peers the node is connected to (e.g., `2`).

- **tried:** The number of peers the node has tried to connect with (e.g., `12`).

- **static:** Le nombre de pairs fixes/statiques que le nœud est configuré pour se connecter (e.g., `2`).

