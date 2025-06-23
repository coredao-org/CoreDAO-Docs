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

Currently, the supported operating system platforms include **macOS** and **Linux**.

#### Exigences matérielles

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Validator nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

    | Exigences.   | Détails                                                                                                |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 4 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                                        |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                |

  </TabItem>

  <TabItem value="mainnet">
   For Validator nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

    | Exigences   | Détails                                                                                                   |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    |**Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Un minimum de 8 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10 mégaoctets par seconde.                  |

  </TabItem>
</Tabs>

### Cloner le code de base de la Core Blockchain

It is recommended to use the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your validator node directly, i.e., running your validator node from the Core blockchain codebase. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Install Dependencies

After cloning the repo, the next step is to install all the necessary dependencies for building the geth (Go Ethereum) binary. Exécutez la commande suivante pour installer les dépendances:

```bash
make geth
```

Cela téléchargera et installera les dépendances nécessaires et construira le binaire 'geth'. Le binaire `geth` sera situé à `./build/bin/geth`.

### Configuration du nœud

There are two approaches to set up a validator node from scratch on the Core blockchain:

- **By Snapshot (Recommend):** téléchargez le dernier instantané de la Core blockchain (https://github.com/coredao-org/core-snapshots)et synchronisez le nœud en fonction de celui-ci.
- **From Genesis (Not Recommended):** Sync the entire Core blockchain data from the [genesis block](https://github.com/coredao-org/core-chain/releases/latest).

:::tip
La synchronisation à partir du bloc Genesis peut prendre un temps considérable. Il est recommandé de configurer un nœud Core en utilisant le dernier instantané pour accélérer le processus.
:::

#### Étapes pour exécuter un nœud validateur en utilisant un 'Snapshot'

1. **Téléchargez les derniers binaires pré-construits:** Téléchargez les derniers binaires de nœud à partir du référentiel officiel des versions de Core (https://github.com/coredao-org/core-chain/releases/latest).

2. **Genesis and Configuration Files:** The pre-build binaries contain `genesis.json` and `config.toml` for the respective network you want to run the validator node. Assurez-vous que ces fichiers sont correctement placés dans le répertoire de configuration de votre nœud avant de poursuivre la configuration.

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

5. **Génération de la clé de consensus:** Configurez la clé de consensus avant d'exécuter le nœud validateur. To create a new consensus key, use the following command, which will create a new account and output an address that will be your validator's address (consensus address).

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

- **`mine`:** Enables mining and validating (producing blocks) on the network. Essentiel pour le fonctionnement du validateur

- **`allow-insecure-unlock`:** Enables the unlock process without additional security measures (use with caution).

- **`cache 8000`:** Alloue un grand cache (8 Go dans ce cas) pour améliorer les performances.

- **`networkid`:** Specify the Core network chain ID you intend to run the validator node (e.g., 1114 for Core Tesnet2)

#### Synchronisation depuis la Genesis

Si vous préférez synchroniser votre nœud validateur à partir du bloc de genèse plutôt que d'utiliser un instantané(snapshot):

- Ignorez l'étape #4 ("Télécharger et extraire le dernier instantané") dans les instructions de configuration.

- After completing Steps 1 (Download Binaries), 2 (Genesis/Config Files), and 3 (Initialize Genesis), continue to generate your consensus key as usual.

- Ensuite, démarrez le nœud validateur en utilisant la commande ci-dessous:

  ```bash
  geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 8000 --networkid {core-network-id}
  ```

⚠️ **Note:** Syncing from genesis can take a lot of time, depending on system resources and network speed.

## Surveiller les journaux

Once your validator node is up and running, it’s essential to monitor the logs to ensure everything is operating smoothly.

Les journaux sont généralement stockés dans `./node/logs/core.log`, mais peuvent être configurés pour être enregistrés à un autre emplacement si nécessaire. Vous pouvez afficher et suivre les journaux en temps réel en utilisant la commande suivante:

```bash
# Tail the logs in real-time
# This will display the most recent log entries and update the log display continuously.

tail -f ./node/logs/core.log
```

These logs typically show that the node is importing new chain segments on the blockchain, indicating that it’s correctly receiving and processing blocks.

- **Imported new chain segment:** This indicates that the node is successfully receiving new blocks from the network and adding them to its local blockchain.

- **number:** Le numéro de bloc (par exemple,`1,596,730`est le numéro de bloc pour cette entrée).

- **hash:** L'identifiant unique (hash) du bloc, tel qu'une empreinte digitale des données du bloc (par exemple, 0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c).

- **miner:** L'adresse du mineur qui a extrait ce bloc.

- **blocks:** Le nombre de blocs importés (généralement `1` dans ces journaux).

- **txs:** Le nombre de transactions dans le bloc (par exemple, `1` tx or `2` txs).

- **mgas:** La quantité de gaz utilisée dans les transactions au sein du bloc. Gas refers to the computational work required to execute transactions (e.g., `0.021` means 0.021 million gas units).

- **elapsed:** Le temps nécessaire pour importer le bloc, en millisecondes (e.g., `3.003ms`).

- **mgasps:** La vitesse à laquelle le gaz est traité (en millions de gaz par seconde).

- **triedirty:** La quantité de mémoire "sale" utilisée (dans ce cas, environ `869.67 KiB`), qui indique la quantité de mémoire utilisée temporairement pour stocker les données de bloc.

- **Looking for peers:** Ce message signifie que le nœud est en train de rechercher d'autres nœuds pour se connecter. Peer-to-peer connections are crucial for synchronizing the blockchain with the network.

- **peercount:** Le nombre actuel de pairs auxquels le nœud est connecté (e.g., `2`).

- **tried:** Le nombre de peers que le nœud a tenté de se connecter (e.g., `12`).

- **static:** Le nombre de pairs fixes/statiques que le nœud est configuré pour se connecter (e.g., `2`).