---
sidebar_label: "Types de nodes: Il existe différents types de nodes"
hide_table_of_contents: false
sidebar_position: 2
---

# Node sur le l'Écosystème Core

---

Dans l'écosystème Core, la robustesse, la sécurité et la décentralisation du réseau sont maintenues par les nodes opérés par les participants de la communauté. Ces nodes remplissent diverses fonctions, allant de la validation des transactions à la propagation des blocs, assurant ainsi la santé et l'efficacité globales du réseau.

Selon vos objectifs, différentes configurations de nodes sont possibles sur le réseau Core. Si vous n'avez pas encore démarré de nœud sur le réseau Core, veuillez consulter la documentation avant de procéder avec différentes configurations.

- **Participer à la gouvernance du réseau Core**

    - [\*\*Démarrer un nœud validateur](./config/validator-node-config.md)

- **Si vous voulez faire tourner un nœud Core pour votre usage personnel:**
    - [\*\*Démarrer un nœud complet normal](./config/full-node.md)

- **Si vous voulez envoyer des transactions ou interroger directement la chaîne depuis votre propre nœud blockchain Core**

    - [\*\*Démarrer un nœud RPC](./config/rpc-node-config.md)

- **Interroger les données historiques depuis le bloc genesis**

    - [\*\*Démarrer un nœud d'archive](./config/archive-node-config.md)

- **Aider les opérateurs de nodes à se synchroniser rapidement avec le réseau**

    - [\*\*Démarrer un nœud de snapshot](./config/snapshot-node-config.md)

## Types de Node sur le Réseau Core

1. **Normal Full Nodes:**
    - **Role:** Les nodes complets maintiennent une copie en temps réel du registre de la blockchain, valident les transactions et soutiennent le réseau en relayant les données des blocs et des transactions. Ils sont principalement utiles pour un usage privé.

    - **Requis :** L'exploitation d'un nœud complet nécessite des ressources informatiques et de stockage importantes pour gérer les données complètes de la blockchain et le trafic réseau continu.

2. **Validators:**
    - **Role:** Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du mécanisme de consensus de la Core blockchain. Ce sont essentiellement des nodes complets fonctionnant en mode validateur.
    - **Requis:** Les validateurs doivent staker un minimum de **10 000 jetons CORE** pour participer, alignant ainsi leurs incitations financières avec les performances et la sécurité du réseau.
    - **Incentives:** Les validateurs gagnent des récompenses en jetons CORE pour leur rôle actif dans la maintenance et la sécurisation des opérations du réseau.

3. **Node RPC :**
    - **Rôle :** Les nodes RPC fournissent une interface de programmation d'application (API) permettant aux développeurs et aux applications externes d'interagir avec la blockchain, facilitant ainsi les requêtes et les transactions.
    - **Importance :** Ils sont essentiels pour le développement et le fonctionnement des applications décentralisées (DApps) et pour l'accès externe aux données de la blockchain.

4. **Node d'Archive :**
    - **Rôle:** Les nodes d'archive stockent l'intégralité de l'historique de la blockchain, y compris tous les états et transactions depuis le bloc genesis, fournissant une ressource précieuse pour les requêtes historiques approfondies.
    - **Requis :** Exigences : Ces nodes nécessitent une capacité de stockage importante, car ils conservent tous les états expirés et actuels de la blockchain, les rendant très gourmands en ressources.
    - **Utilisation :** Les nodes d'archive sont essentiels pour les développeurs ayant besoin d'accéder à toutes les données historiques de la blockchain pour des analyses, des audits et des requêtes avancées.

5. **Node de Snapshot :**
    - **Rôle :** Les nodes de snapshot maintiennent des copies des instantanés de la blockchain à différents intervalles. Ces snapshots incluent l'état de la blockchain à une hauteur de bloc donnée, offrant un point de restauration pour les nodes complets ou les nouveaux nodes.
    - **Bénéfices :** Ils permettent une synchronisation rapide et la récupération d'autres nodes dans le réseau, améliorant ainsi la résilience et la scalabilité de l'infrastructure du réseau.

## Importance de Chaque Type de Nœud

- Les **validateurs** garantissent la validité des transactions et le consensus du réseau.
- Les **nodes complets** et les **nodes d'archive** assurent la redondance et l'intégrité des données.
- Les **nodes RPC** permettent le développement d'applications et l'interaction avec la blockchain.
- Les **nodes de snapshot** contribuent à l'évolutivité et à la synchronisation rapide du réseau.

## Conclusion

Les différents types de nodes dans l'écosystème Core assurent collectivement que la blockchain est sécurisée, efficace, accessible et robuste. Les validateurs, nodes complets et nodes d'archive forment la colonne vertébrale de la sécurité et de l'intégrité des données du réseau. En même temps, les nodes RPC et de snapshot offrent flexibilité, accessibilité et scalabilité. Cette architecture de nodes multifonctionnelle prend en charge une large gamme d'opérations, allant du traitement des transactions aux interactions complexes avec les applications décentralisées (dApp) et à l'analyse des données historiques.