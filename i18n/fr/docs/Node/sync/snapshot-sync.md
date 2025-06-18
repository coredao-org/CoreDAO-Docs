---
sidebar_label: Synchronisation des nœuds Core
hide_table_of_contents: false
sidebar_position: 2
---

# Synchronisation des nœuds Core

---

On the Core network, you can sync your node to the latest state of the Core blockchain in several ways. Ce document vous guide à travers le processus de synchronisation des nœuds sur le réseau Core.

## Synchronisation à partir d'un snapshot (recommandé)

Téléchargez les binaires pré-compilés à partir de la [page de publication](https://github.com/coredao-org/core-chain/releases/latest) ou suivez les instructions ci-dessous

#### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

#### MacOS

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
```

### Téléchargement des Fichiers de Configuration

Download `genesis.json` and `config.toml` by:

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)
unzip mainnet.zip
```

### Configuration des Pairs

- **Mainnet**: the `config.toml` file from the latest release ships configured with the information about the `Bootstrap Nodes` and `Static Nodes` as shown below:

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

Surveillez le fichier de log à partir de `/node/logs/core.log` par défaut.

## Synchronisation depuis le bloc Genesis (non recommandé)

:::note
Note that the recommended method for syncing the testnet node is to sync from the genesis block, as currently the snapshot is not available. You can download the latest binary for testnet from [here](https://github.com/coredao-org/core-chain/releases).
:::

Write the genesis state locally by executing the following command from your node directory.

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

After the configuration of full node is completed, you can start running it!

To run a full node, run the following `geth` command:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

## Mode de Synchronisation

There are two sync modes for running a full node: **snap** and **full**, which can be specified by the flag **--syncmode**.

- The **snap** sync mode is used for initial sync, which downloads the latest states rather than executing the blocks from the genesis. Once the initial sync is complete, it will automatically switch to full sync.

- The **full** sync mode can also be used for an initial sync, which will execute all blocks since the genesis block. **Il n'est pas recommandé**, car la quantité de données historiques est trop volumineuse. Instead, you can download a snapshot from the [official repo](https://github.com/coredao-org/core-snapshots) and start a full sync from the snapshot.

- Si l'option **--syncmode** n'est pas fournie, le mode de synchronisation par défaut dépendra de l'état du dossier de données. It will be **snap** mode if you sync from the genesis or **full** mode if you start from a snapshot.