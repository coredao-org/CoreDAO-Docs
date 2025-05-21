---
sidebar_label: Nœud RPC (Nœud d'appel de procédure à distance)
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nœuds RPC sur Core

---

Les nœuds RPC (Remote Procedure Call) sur le réseau Core jouent un rôle essentiel en facilitant l'interaction entre les applications externes et la blockchain Core. Ils servent d'interface à travers laquelle les développeurs et les utilisateurs peuvent interroger et interagir avec la blockchain, ce qui les rend indispensables pour le bon fonctionnement des applications décentralisées (DApps) et d'autres services basés sur la blockchain.

## Requis Systèmes

Plusieurs exigences, à la fois logicielles et matérielles, sont nécessaires pour configurer un nœud RPC sur le réseau Core.

### Logiciel

- **Système d'exploitation:** Actuellement, un nœud d'archivage Core est compatible uniquement avec les systèmes d'exploitation macOS ou Linux (Ubuntu 20.04 ou ultérieur).
- **Connectivité réseau:** Connexion Internet stable avec une faible latence et une haute disponibilité.
- **Configuration du pare-feu:** Pour garantir que votre nœud RPC puisse communiquer avec des applications externes et d'autres nœuds, vous devez autoriser le trafic HTTP entrant sur le port 8575, qui est le port par défaut pour la communication RPC. Vous pouvez ajuster ce paramètre dans le fichier config.toml si vous préférez utiliser un port différent. Assurez-vous que vos paramètres de pare-feu sont correctement configurés pour autoriser le trafic sur ce port.

### Matériel

Un nœud RPC sur Core agit comme une passerelle pour les applications, les développeurs et les utilisateurs afin d'interagir avec la blockchain. Il traite les requêtes, soumet des transactions et récupère des données de blockchain en temps réel via des appels de procédure à distance (RPC). Ces nœuds sont essentiels pour les dApps, les portefeuilles et les plateformes d'analyse afin d'accéder de manière transparente au réseau Core. Voici les exigences matérielles pour un nœud RPC sur Core

<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet2', value: 'testnet2'},
    {label: 'Testnet', value: 'testnet'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For RPC Nodes on **Core Blockchain Testnet2**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes   |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
  <TabItem value="testnet">
    For RPC Nodes on **Core Blockchain Testnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes   |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
  <TabItem value="mainnet">
    For RPC Nodes on **Core Blockchain Mainnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms.  |
    | **CPU**            | 8 CPU cores |
    | **RAM**            | 16 Gigabytes  |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 50 megabytes per second.                 |
  </TabItem>
</Tabs>


## Exécution d'un Nœud RPC

### Activation du Port HTTP Entrant

Si vous exécutez un nœud RPC, vous devez activer les règles entrantes `HTTP` sur le port **8575** dans les paramètres du pare-feu. Le port **8575** est défini comme port par défaut. Vous pouvez modifier les configurations dans `config.toml`.

### Compilation et Exécution

1. Nous recommandons d'utiliser le dépôt GitHub [core-chain](https://github.com/coredao-org/core-chain) pour compiler et exécuter directement votre nœud RPC complet à partir du code source de la blockchain. Les instructions pour compiler le code source se trouvent dans le fichier [README](https://github.com/coredao-org/core-chain#building-the-source) du répertoire.

2. Téléchargez le binaire du nœud depuis la [page des sorties](https://github.com/coredao-org/core-chain/releases) du répertoire core-chain. Le binaire inclut les fichiers de configuration pertinents pour le mainnet et le testnet. Il s'agit de la [version la plus récente](https://github.com/coredao-org/core-chain/releases/latest).

3. Exécutez la commande suivante à partir de votre répertoire de projet pour initialiser l'état genesis :

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

4. Votre nœud RPC complet est prêt, lançons-le !

Si vous envisagez d'exécuter un nœud RPC, vous pouvez simplement exécuter la commande `geth` suivante :

```bash
## start a RPC node
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5. Pendant que votre nœud RPC complet fonctionne, vous pouvez surveiller ses journaux pour vous assurer que tout fonctionne correctement. Le fichier de journal se trouve par défaut à `./node/logs/core.log`, mais vous pouvez le changer vers un autre emplacement si nécessaire.
