---
sidebar_label: Nœud de validation (Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nœuds de validation sur Core

---

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de Core.

## Requis Systèmes

Il existe plusieurs exigences système, à la fois logicielles et matérielles, pour configurer un nœud de validateur sur le réseau Core.

### Logiciel

- **Système d'exploitation:** Actuellement, un nœud d'archivage Core est compatible uniquement avec les systèmes d'exploitation macOS ou Linux (Ubuntu 20.04 ou ultérieur).
- **Connectivité réseau:** Connexion Internet stable avec une faible latence et une haute disponibilité.
- **Configuration du pare-feu:** Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nœuds.

### Hardware Requiremets

Un nœud de validation sur Core participe à la production de blocs et à la validation des transactions, assurant ainsi la sécurité et le consensus du réseau. Les validateurs sont élus en fonction de leur score hybride (puissance de hachage Bitcoin déléguée, staking CORE et staking Bitcoin) et prennent tour à tour la production de blocs. Ils jouent un rôle essentiel dans le maintien de l'intégrité de la blockchain et gagnent des récompenses pour sécuriser le réseau. Voici les exigences matérielles pour exécuter des nœuds de validation sur Core.

<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet2', value: 'testnet2'},
    {label: 'Testnet', value: 'testnet'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For Validator Nodes on **Core Testnet2**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |

  </TabItem>
  <TabItem value="testnet">
    For Validator Nodes on **Core Testnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
  <TabItem value="mainnet">
   For Validator Nodes on **Core Mainnet**, following minimum hardware specifications are recommended:

    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
</Tabs>
