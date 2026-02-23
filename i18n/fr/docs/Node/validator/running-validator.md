---
sidebar_label: Exécution d'un nœud de validation
hide_table_of_contents: false
sidebar_position: 2
---

# Exécution de nœuds de validation sur Core

---

Ce guide vous guidera à travers la configuration d'un nœud de validation Core. Le guide couvre toutes les étapes essentielles, notamment l'installation des dépendances, la construction du logiciel de nœud Core et son lancement avec succès.

### Requis Systèmes

Il y a plusieurs exigences systèmes pour configurer un nœud validateur sur le réseau Core. Veuillez vous référer [ici](../config/validator-node-config.md) et vous assurer que vous avez les exigences matérielles et logicielles nécessaires avant de lancer un nœud validateur. En outre, assurez-vous d'enregistrer correctement votre nœud validateur en consultant les lignes directives détaillées [ici](./validator-register.md).

### Mettez à jour votre système

Commencez par mettre à jour votre système pour vous assurer que tous les paquets sont à jour. Exécutez les commandes suivantes :

```bash
sudo apt update
sudo apt upgrade -y
```

### Installer les dépendances requises

- Pour construire la base de code requise pour Core Validator, vous aurez besoin de Git, GCC, Go et d'autres outils. Installez-les avec la commande suivante :

```bash
sudo apt install -y git gcc make curl lz4 golang unzip
```

- Vérifiez les installations : Exécutez la commande suivante pour vérifier les informations de version pour GCC et Go.

```bash
gcc --version
go version
```

- Vous devriez voir les informations de version pour GCC et Go.

```bash
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
go version go1.22.2 linux/amd64
```

### Cloner le référentiel Core

Il est recommandé d'utiliser le référentiel GitHub [core-chain](https://github.com/coredao-org/core-chain) pour construire et exécuter directement votre nœud de validation, c'est-à-dire exécuter votre nœud de validation directement à partir de la base de code de la blockchain Core. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

```bash
git clone https://github.com/coredao-org/core-chain
cd core-chain
```

#### Installer les dépendances

Après avoir cloné le dépôt, l'étape suivante consiste à installer toutes les dépendances nécessaires pour construire le binaire geth (Go Ethereum). Exécutez la commande suivante pour installer les dépendances :

```bash
make geth
```

Cela téléchargera et installera les dépendances nécessaires et construira le binaire geth. Vous devriez voir une sortie similaire à ceci :

```bash
>>> /usr/lib/go-1.22/bin/go build -ldflags "-X github.com/ethereum/go-ethereum/internal/version.gitCommit=afb8bd3ffe652e90a59af26db119bd988a03dd8f -X github.com/ethereum/go-ethereum/internal/version.gitDate=20250120 ..." -o /home/harystyles/core-chain/build/bin/geth ./cmd/geth
Done building.
Run "./build/bin/geth" to launch geth.
```

### Téléchargez et extrayez l'instantané de la blockchain

Pour des performances optimales et une synchronisation plus rapide, il est recommandé d'utiliser la méthode de synchronisation par instantané (snapshot sync). Cette approche permet aux nœuds de démarrer à partir d'un état complètement synchronisé, réduisant considérablement le temps nécessaire pour devenir opérationnel. Contrairement à la synchronisation complète depuis le bloc Genesis, qui est un processus long, la synchronisation par instantané permet une configuration plus efficace et rationalisée.

#### Obtenir les derniers instantanés

Vous pouvez obtenir les derniers instantanés à partir du référentiel d'instantanés Core officiel ([Core Snapshot Repository]https://github.com/coredao-org/core-snapshots).

#### Créer un répertoire de données

Maintenant, créez un répertoire où résideront les données de votre nœud si elles ne sont pas créées par défaut.

```bash
# Create the node directory
mkdir -p ./node
```

#### Décompresser et extraire l'instantané

Utilisez la commande lz4 pour décompresser et la commande tar pour extraire l'instantané dans le répertoire ./node. Cela va peupler le répertoire avec les données de blockchain nécessaires (chaindata).

### Initialisation du bloc Genesis

L'étape suivante pour configurer votre nœud consiste à initialiser le bloc Genesis pour le réseau Core. Le fichier 'genesis.json' définit le premier bloc de la blockchain, représentant l'état initial du réseau. Une initialisation correcte garantit que votre nœud démarre avec l'état de base correct, en accord avec le protocole du réseau Core.

#### Obtention des fichiers Genesis et de configuration

Vous pouvez trouver les fichiers genesis.json et config.toml requis dans les binaires du nœud disponibles sur la page officielle des Versions de Core.(https://github.com/coredao-org/core-chain/releases/latest). Assurez-vous que ces fichiers sont correctement placés dans le répertoire de configuration de votre nœud avant de poursuivre la configuration.

#### Initialisation du bloc Genesis

Pour initialiser votre nœud avec le bloc Genesis, exécutez la commande suivante. Cette commande définit l'état initial de la blockchain dans le répertoire de votre nœud.

```bash
# Initialize the node with the genesis block
geth --datadir node init genesis.json
```

:::info
Assurez-vous que le chemin vers le fichier genesis.json est correct. Dans ce cas, genesis.json signifie que le fichier genesis.json est situé dans le même répertoire, qui devrait être le répertoire racine (core-chain) de votre nœud.
:::

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

### Démarrer le nœud de validation

Une fois la configuration terminée, il est temps de démarrer le nœud de validation !

#### Option 1 : Démarrer le nœud complet avec des options

```bash
./build/bin/geth --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

Cette commande effectue les actions suivantes :

- datadir ./node : Indique au nœud où stocker ses données de blockchain.

- cache 8000 : Alloue 8 Go de RAM pour aider le nœud à fonctionner plus efficacement.

- rpc.allow-unprotected-txs : Permet au nœud d'envoyer des transactions non protégées (nécessaire pour les actions de validation).

- networkid 1116 : Spécifie le réseau que le nœud doit rejoindre. 1114 for Core Testnet2, 1115 for Core Tesnet and 1116 for Core Mainnet.

Utiliser des nœuds de bootstrap
Si votre nœud a du mal à trouver des pairs, configurer des nœuds de bootstrap peut aider à établir des connexions initiales avec d'autres nœuds du réseau. Cela facilite la synchronisation et la participation au réseau. Ce Fichier de configuration a des paramètres prédéfinis

#### Option 2 : Démarrer le nœud avec le fichier de configuration

```bash
./build/bin/geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --networkid 1116
```

Cette commande utilise un fichier de configuration (config.toml) qui aide le nœud à se connecter plus facilement aux pairs.

#### Option 3 : Démarrer le nœud avec la clé de consensus

Si vous prévoyez d'exécuter un nœud validateur, vous devez configurer la clé de consensus avant de démarrer le nœud. Assurez-vous de sauvegarder votre keystore.

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
echo {your-password} > password.txt
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000
```

:::info
A bootstrap node is essentially a "helper" node used to kickstart your connection to the network, especially when your node is struggling to find peers. When you first start your node, it needs to connect with other nodes to sync up and start participating in the blockchain. This process is called peer discovery.

Sans nœuds de bootstrap, votre nœud pourrait ne pas être en mesure de trouver des pairs, surtout s'il est nouveau et n'a aucune connexion établie. Les nœuds de bootstrap fournissent une liste de pairs connus auxquels votre nœud peut se connecter initialement. Une fois connecté à ces pairs, il peut ensuite découvrir d'autres pairs automatiquement.
:::

## Surveiller les journaux

Une fois que votre nœud de validation est opérationnel, il est important de surveiller les journaux pour garantir que tout fonctionne correctement.

Les journaux sont généralement stockés dans ./node/logs/core.log, mais peuvent être configurés pour être enregistrés à un autre emplacement si nécessaire. Vous pouvez afficher et suivre les journaux en temps réel en utilisant la commande suivante :

```bash
# Tail the logs in real-time
# This will show you the most recent log entries and continuously update the log display.

tail -f ./node/logs/core.log
```

Ces journaux indiquent généralement que le nœud importe de nouveaux segments de chaîne sur la blockchain, ce qui signifie qu'il reçoit et traite correctement les blocs.

- Importé un nouveau segment de chaîne :" signifie "Le nœud importe avec succès de nouveaux blocs du réseau et les ajoute à la blockchain locale.

- « numéro : » Le numéro de bloc (par exemple, 1 596 730 est le numéro de bloc pour cette entrée).

- « hash : » L'identifiant unique (hash) du bloc, tel qu'une empreinte digitale des données du bloc (par exemple, 0x5ae70389ed2fe40543cb9f695701bf13c9d174c5dc293720bdd6e294930ccc2c).

- « mineur : » L'adresse du mineur qui a extrait ce bloc.

- « blocs : » Le nombre de blocs importés (généralement 1 dans ces journaux).

- « txs : » Le nombre de transactions dans le bloc (par exemple, 1 tx ou 2 txs).

- « mgas : » La quantité de gaz utilisée dans les transactions au sein du bloc. Le gaz est le travail de calcul nécessaire pour exécuter les transactions.
  Par exemple, 0.021 représente 0.0021million unités de gaz.

- « temps écoulé : » Le temps nécessaire pour importer le bloc, en millisecondes (par exemple, 3,003 ms).

- « mgasps : » La vitesse à laquelle le gaz est traité (en millions de gaz par seconde).

- « triedirty : » La quantité de mémoire "sale" utilisée (dans ce cas, environ `869.67 KiB`), qui indique la quantité de mémoire utilisée temporairement pour stocker les données de bloc.

**Looking for peers:** Ce message signifie que le nœud est en train de rechercher d'autres nœuds pour se connecter. Les connexions pair à pair permettent de synchroniser la blockchain avec le réseau, en échangeant des informations et des données entre les nœuds.

- « Nombre de pairs : » Le nombre actuel de pairs auxquels le nœud est connecté (par exemple, 2).

- « Essais : » Le nombre de pairs que le nœud a tenté de se connecter (par exemple, 12).

- « Statiques : » Le nombre de pairs fixes/statiques que le nœud est configuré pour se connecter (par exemple, 2).

Configurer un nœud validateur est nécessaire pour participer au consensus et à la création de blocs. Les validateurs sont chargés de produire de nouveaux blocs sur la blockchain Core en validant les transactions et en les ajoutant à la blockchain.