---
sidebar_label: "Types de nœuds: Il existe différents types de nœuds"
hide_table_of_contents: false
sidebar_position: 2
---

# Nœuds sur le l'Écosystème Core

---

Dans l'écosystème Core, la robustesse, la sécurité et la décentralisation du réseau sont maintenues par les nœuds opérés par les participants de la communauté. Ces nœuds remplissent diverses fonctions, allant de la validation des transactions à la propagation des blocs, assurant ainsi la santé et l'efficacité globales du réseau.

Depending on your goals, various node configurations are possible on the Core network. If you haven't already started any node on the Core network yet, please review the documentation before proceeding with different configurations.

- **If you want to be part of the governance of the Core Network**

    - [\*\*Démarrer un nœud validateur](./config/validator-node-config.md)

- **If you want to run a node on the Core network for private use**
    - [\*\*Démarrer un nœud complet normal](./config/full-node.md)

- **Si vous voulez envoyer des transactions ou interroger directement la chaîne depuis votre propre nœud blockchain Core**

    - [\*\*Démarrer un nœud RPC](./config/rpc-node-config.md)

- **Interroger les données historiques depuis le bloc genesis**

    - [\*\*Démarrer un nœud d'archive](./config/archive-node-config.md)

- **Aider les opérateurs de nœuds à se synchroniser rapidement avec le réseau**

    - [\*\*Démarrer un nœud de snapshot](./config/snapshot-node-config.md)

## Types de Nœuds sur le Réseau Core

1. **Normal Full Nodes:**
    - **Role:** Les nœuds complets maintiennent une copie en temps réel du registre de la blockchain, valident les transactions et soutiennent le réseau en relayant les données des blocs et des transactions. These are useful for private use.

    - **Requis :** L'exploitation d'un nœud complet nécessite des ressources informatiques et de stockage importantes pour gérer les données complètes de la blockchain et le trafic réseau continu.

2. **Validators:**
    - **Role:** Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du mécanisme de consensus de la Core blockchain. Ce sont essentiellement des nœuds complets fonctionnant en mode validateur.
    - **Requirements:** Validators must stake a minimum of **10,000 CORE tokens** to participate, aligning their financial incentives with the network's performance and security.
    - **Incentives:** Les validateurs gagnent des récompenses en jetons CORE pour leur rôle actif dans la maintenance et la sécurisation des opérations du réseau.

3. **Nœuds RPC :**
    - **Rôle :** Les nœuds RPC fournissent une interface de programmation d'application (API) permettant aux développeurs et aux applications externes d'interagir avec la blockchain, facilitant ainsi les requêtes et les transactions.
    - **Importance :** Ils sont essentiels pour le développement et le fonctionnement des applications décentralisées (DApps) et pour l'accès externe aux données de la blockchain.

4. **Nœuds d'Archive :**
    - **Role:** Archive Nodes store the entire history of the blockchain, including all states and transactions since the genesis block, providing a valuable resource for deep historical queries.
    - **Requis :** Exigences : Ces nœuds nécessitent une capacité de stockage importante, car ils conservent tous les états expirés et actuels de la blockchain, les rendant très gourmands en ressources.
    - **Usage:** Archive Nodes are essential for developers who require access to all historical blockchain data for analysis, audits, and advanced blockchain querying.

5. **Nœuds de Snapshot :**
    - **Rôle :** Les nœuds de snapshot maintiennent des copies des instantanés de la blockchain à différents intervalles. These snapshots capture the state of the blockchain at a specific block height, providing a restore point for Full Nodes or new nodes.
    - **Bénéfices :** Ils permettent une synchronisation rapide et la récupération d'autres nœuds dans le réseau, améliorant ainsi la résilience et la scalabilité de l'infrastructure du réseau.

## Importance de Chaque Type de Nœud

- Les **validateurs** garantissent la validité des transactions et le consensus du réseau.
- Les **nœuds complets** et les **nœuds d'archive** assurent la redondance et l'intégrité des données.
- Les **nœuds RPC** permettent le développement d'applications et l'interaction avec la blockchain.
- **Snapshot Nodes** facilitate efficient network scaling and expedite node synchronization.

## Conclusion

Les différents types de nœuds dans l'écosystème Core assurent collectivement que la blockchain est sécurisée, efficace, accessible et robuste. Validators, Full Nodes, and Archive nodes form the backbone of the network's security and data integrity. At the same time, RPC nodes and Snapshot nodes provide flexibility, accessibility, and scalability. Cette architecture de nœuds multifonctionnelle prend en charge une large gamme d'opérations, allant du traitement des transactions aux interactions complexes avec les applications décentralisées (dApp) et à l'analyse des données historiques.