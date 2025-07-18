---
sidebar_label: Nœud de validation (Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node de validation sur Core

---

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de Core.

## Requis Systèmes

Il existe plusieurs exigences système, à la fois logicielles et matérielles, pour configurer un nœud de validateur sur le réseau Core.

### Logiciel

- **Système d'exploitation:** Actuellement, un nœud de validation Core est compatible uniquement avec les systèmes d'exploitation **macOS** ou **Linux** (Ubuntu 20.04 ou ultérieur).
- Connectivité réseau : Connexion Internet stable avec une faible latence et une haute disponibilité.
- Configuration du pare-feu : Ouvrez les ports nécessaires pour permettre la communication avec le réseau et les autres nodes.

### Matériel

Un nœud de validation sur Core participe à la production de blocs et à la validation des transactions, assurant ainsi la sécurité et le consensus du réseau. Les validateurs sont élus en fonction de leur score hybride (puissance de hachage Bitcoin déléguée, staking CORE et staking Bitcoin) et prennent tour à tour la production de blocs. Ils jouent un rôle essentiel dans le maintien de l'intégrité de la blockchain et gagnent des récompenses pour sécuriser le réseau. Voici les exigences matérielles pour exécuter des nodes de validation sur Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Pour les nodes complets sur **Core Testnet2**, les spécifications matérielles minimales recommandées sont :

```
| Exigences.   | Détails                                                                                                |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Un minimum de 4 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                                        |
| **RAM**            | 8 Gigabytes                                                                                             |
| **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10Mbps.                |
```

  </TabItem>

  <TabItem value="mainnet">
Pour les nodes Rpc sur le **Core Mainnet**, les spécifications matérielles minimales recommandées sont:

```
| Exigences.   | Détails                                                                                                |  
|----------------|---------------------------------------------------------------------------------------------------------|
| **Stockage**       | 1 To d'espace disque libre, disque SSD (Solid-State Drive).(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| **CPU**            | Un minimum de 8 cœurs de processeur est recommandé. Les processeurs multi-cœurs permettent au nœud de gérer efficacement les opérations simultanées telles que la validation des transactions et la vérification des blocs.                                                                                        |
| **RAM**            | 32 Gigabytes                                                                                             |
| **Vitesse Internet.** | Une connexion Internet à large bande avec des vitesses de téléversement/téléchargement de 10Mbps.                |
```

  </TabItem>
</Tabs>





