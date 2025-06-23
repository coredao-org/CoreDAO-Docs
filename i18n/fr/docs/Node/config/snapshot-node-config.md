---
sidebar_label: Nœud de snapshot
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Nœuds de snapshot sur Core

---

Snapshots are essential for a network to ensure that nodes can sync up to the latest state of the network as quickly as possible. Before nodes can be used, they must synchronize with the current state of the network. By starting from a recent snapshot, the syncing process is

## Requis Systèmes

There are several system requirements, both software and hardware, for setting up a Snapshot node on the Core network.

### Logiciel

- **Operating System:** Currently, _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later)are supported.
- Connectivité réseau : Connexion Internet stable avec une faible latence et une haute disponibilité.
- Configuration du pare-feu : Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nœuds.

### Matériel

A Snapshot node on Core provides periodic blockchain state snapshots, enabling faster node synchronization and reducing storage requirements. These nodes help new validators and RPC nodes quickly catch up with the latest blockchain state without needing to process the entire history. Les nœuds de snapshot améliorent l'efficacité et l'accessibilité du réseau. On the Core network, Snapshot nodes also act as the archive nodes, storing the entire blockchain data. The following are the minimum hardware recommendations for running Snapshot node on Core. Ces spécifications sont conçues pour gérer les processus de test et de validation tout en garantissant un stockage et une synchronisation efficaces des données.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Snapshot Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
Exigences	Détails
Stockage	Disque SSD avec une capacité minimale de 4 To
Processeur	4 cœurs de processeur
Mémoire RAM	16 gigaoctets
Débit Internet	Connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 5 Mbps.
```

  </TabItem>
  <TabItem value="testnet">
    For Snapshot Nodes on **Core testnet2**, following minimum hardware specifications are recommended:

```
Exigences	Détails
Stockage	Disque SSD avec une capacité minimale de 4 To
Processeur	4 cœurs de processeur
Mémoire RAM	16 gigaoctets
Débit Internet	Connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 5 Mbps
```

  </TabItem>
  <TabItem value="mainnet">
    For Snapshot Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
Exigences	Détails
Stockage	Disque SSD avec une capacité minimale de 4 To
Processeur	4 cœurs de processeur
Mémoire RAM	16 gigaoctets
Débit Internet	Connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 5 Mbps
```

  </TabItem>
</Tabs>

## Snapshots du réseau Core

Vous pouvez obtenir les derniers snapshots à partir de [ce lien](https://github.com/coredao-org/core-snapshots).

## Synchronisation des Nœuds en Utilisant des Snapshots sur le Réseau Core

On the Core network, a node can be synced to the latest state in several ways. This document provides a step-by-step walkthrough of the node syncing process on the Core network using snapshots.

### Téléchargement des Binaries Précompilés

Download the pre-build binaries from the official [Core Releases Page](https://github.com/coredao-org/core-chain/releases/latest) or follow the instructions below

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

Download `genesis.json` and `config.toml` by running the following commands:

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)


unzip mainnet.zip
```

### Configuration des Pairs

- **Mainnet**: the `config.toml` file from the latest release ships configured with the information about the `Bootstrap nodes` and `Static nodes` as shown below:

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

Download the latest chain data snapshot from [here](https://github.com/coredao-org/core-snapshots).

### Démarrer le Nœud

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Ensure you use the version of geth you downloaded with wget above, and not your local installation of geth, which may be an incorrect version.
:::

:::tip
It is recommended to run a fast node, which is a full node with the `--tries-verify-mode none` flag set, if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Surveiller l'État du Nœud

Vous pouvez surveiller les logs pour vérifier l'état du nœud. By default, the logs are stored at `./node/logs/core.log`.

## Mode de Synchronisation

There are two sync modes for running a full node: **snap** and **full**, which can be specified by the flag **--syncmode**.

- The **snap** sync mode is used for initial sync, which downloads the latest states rather than executing the blocks from the genesis. Once the initial sync is complete, it will automatically switch to full sync.

- The **full** sync mode can also be used for an initial sync, which will execute all blocks since the genesis block. **Il n'est pas recommandé**, car la quantité de données historiques est trop volumineuse. Instead, you can download a snapshot from the [official repo](https://github.com/coredao-org/core-snapshots) and start a full sync from the snapshot.

- Si l'option **--syncmode** n'est pas fournie, le mode de synchronisation par défaut dépendra de l'état du dossier de données. Cela sera en mode **snap** si vous synchronisez à partir du genesis, ou en mode **full** si vous démarrez à partir d'un snapshot.