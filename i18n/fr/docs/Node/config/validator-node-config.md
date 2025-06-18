---
sidebar_label: Nœud de validation (Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Nœuds de validation sur Core

---

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de Core.

## Requis Systèmes

There are several system requirements, both software and hardware, for setting up a Validator node on the Core network.

### Logiciel

- **Operating System:** Currently, a Core Validator node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
- Connectivité réseau : Connexion Internet stable avec une faible latence et une haute disponibilité.
- Configuration du pare-feu : Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nœuds.

### Matériel

A Validator node on Core participates in block production and transaction validation, ensuring network security and consensus. Les validateurs sont élus en fonction de leur score hybride (puissance de hachage Bitcoin déléguée, staking CORE et staking Bitcoin) et prennent tour à tour la production de blocs. Ils jouent un rôle essentiel dans le maintien de l'intégrité de la blockchain et gagnent des récompenses pour sécuriser le réseau. The following are the hardware requirements for running Validator Nodes on Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet2', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
For Validator Nodes on **Core testnet2**, following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
| **RAM**            | 8 Gigabytes                                                                                             |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 10Mbps.                 |
```

  </TabItem>

  <TabItem value="mainnet">
   For Validator Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:

```
| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
| **RAM**            | 32 Gigabytes                                                                                            |
| **Internet Speed** | A broadband Internet connection with upload/download speeds of 10Mbps.                 |
```

  </TabItem>
</Tabs>





