---
sidebar_label: Nœud RPC (Nœud d'appel de procédure à distance)
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Nœuds RPC sur Core

---

Les nœuds RPC (Remote Procedure Call) sur le réseau Core jouent un rôle essentiel en facilitant l'interaction entre les applications externes et la blockchain Core. Ils servent d'interface à travers laquelle les développeurs et les utilisateurs peuvent interroger et interagir avec la blockchain, ce qui les rend indispensables pour le bon fonctionnement des applications décentralisées (DApps) et d'autres services basés sur la blockchain.

## Requis Systèmes

There are several system requirements, both software and hardware, for setting up an RPC node on the Core network.

### Logiciel

- **Operating System:** Currently, _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later) are supported.
- Connectivité réseau : Connexion Internet stable avec une faible latence et une haute disponibilité.
- **Firewall Configuration:** To ensure your RPC node can communicate with external applications and other nodes, you need to allow inbound HTTP traffic on port 8575, which is the default port for RPC communication. You can adjust this setting in the `config.toml` file if you prefer using a different port. Make sure that your firewall settings are correctly configured to allow traffic on this port.

### Matériel

RPC Nodes on Core act as a gateway for applications, developers, and users to interact with the blockchain. Il traite les requêtes, soumet des transactions et récupère des données de blockchain en temps réel via des appels de procédure à distance (RPC). These nodes are essential for dApps, wallets, and analytics platforms to access Core’s network seamlessly. The following are the hardware requirements for the RPC node on Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For RPC Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 8 CPU cores |
| **RAM**            | 16 Gigabytes   |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps               |
```

  </TabItem>

  <TabItem value="mainnet">
    For RPC Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
| **CPU**            | 16 CPU cores |
| **RAM**            | 32 Gigabytes  |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 50Mbps                 |
```

  </TabItem>
</Tabs>

## Exécution d'un Nœud RPC

### Activation du Port HTTP Entrant

Si vous exécutez un nœud RPC, vous devez activer les règles entrantes `HTTP` sur le port **8575** dans les paramètres du pare-feu. Le port **8575** est défini comme port par défaut. Vous pouvez modifier les configurations dans `config.toml`.

### Compilation et Exécution

1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to build and run your RPC full node directly from our blockchain codebase. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2\. Téléchargez le binaire du nœud depuis la [page des sorties](https://github.com/coredao-org/core-chain/releases) du répertoire core-chain. Le binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet. Il s'agit de la [version la plus récente](https://github.com/coredao-org/core-chain/releases/latest).

3\. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

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

4\. Now that the RPC node setup is complete, its time to run it.

To run an RPC node, execute the following `geth` command:

```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. While the RPC full node is running, you can monitor its logs to make sure that everything is operating correctly. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.