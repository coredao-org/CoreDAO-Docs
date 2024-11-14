---
sidebar_label: Vue d'Ensemble des Nœuds Fonctionnant sur Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# Nœuds sur le l'Écosystème Core Chain

---

Dans l'écosystème Core Chain, la robustesse, la sécurité et la décentralisation du réseau sont maintenues par les nœuds opérés par les participants de la communauté. Ces nœuds remplissent diverses fonctions, allant de la validation des transactions à la propagation des blocs, assurant ainsi la santé et l'efficacité globales du réseau. Selon vos objectifs, différentes configurations de nœuds sont possibles sur le réseau Core. Si vous n'avez pas encore démarré le nœud Core Chain, veuillez consulter la documentation pour [Exécuter un Nœud Validateur Local](./validator/running-validator.md) avant de passer aux différentes configurations.

- Participer à la gouvernance du réseau Core :

  - [Démarrer un nœud validateur](./config/validator-node-config.md)

- Exploiter un nœud Core Chain pour un usage privé :
  - [Démarrer un nœud complet normal](./Full-Node/on-mainnet.md)

- Envoyer des transactions ou interroger directement la chaîne Core Chain :

  - [Démarrer un nœud RPC](./config/rpc-node-config.md)

- Interroger les données historiques depuis le bloc genesis :

  - [Démarrer un nœud d'archive](./config/archive-node-config.md)

- Aider les opérateurs de nœuds à se synchroniser rapidement avec le réseau :

  - [Démarrer un nœud de snapshot](./config/snapshot-node-config.md)

## Types de Nœuds sur le Réseau Core Chain

1. **Validateurs:**
   - **Rôle :** Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du mécanisme de consensus de Core Chain.
   - **Requis:** Les validateurs doivent staker un minimum de **10 000 tokens CORE** pour participer, alignant ainsi leurs incitations financières avec les performances et la sécurité du réseau.
   - **Incitation :** Les validateurs gagnent des récompenses en tokens CORE pour leur rôle actif dans la maintenance et la sécurisation des opérations du réseau.

2. **Nœuds Complets Normaux :**
   - **Rôle :** Les nœuds complets maintiennent une copie en temps réel du registre de la blockchain, valident les transactions et soutiennent le réseau en relayant les données des blocs et des transactions. Ils sont principalement utiles pour un usage privé.
   - **Requis :** L'exploitation d'un nœud complet nécessite des ressources informatiques et de stockage importantes pour gérer les données complètes de la blockchain et le trafic réseau continu.

3. **Nœuds RPC :**
   - **Rôle :** Les nœuds RPC fournissent une interface de programmation d'application (API) permettant aux développeurs et aux applications externes d'interagir avec la blockchain, facilitant ainsi les requêtes et les transactions.
     **Importance :** Ils sont essentiels pour le développement et le fonctionnement des applications décentralisées (DApps) et pour l'accès externe aux données de la blockchain.

4. **Nœuds d'Archive :**
   - **Rôle :** Les nœuds d'archive stockent l'intégralité de l'historique de la blockchain, y compris tous les états et transactions depuis le bloc genesis, fournissant une ressource précieuse pour les requêtes historiques approfondies.
   - **Requis :** Exigences : Ces nœuds nécessitent une capacité de stockage importante, car ils conservent tous les états expirés et actuels de la blockchain, les rendant très gourmands en ressources.
   - **Utilisation :** Les nœuds d'archive sont essentiels pour les développeurs ayant besoin d'accéder à toutes les données historiques de la blockchain pour des analyses, des audits et des requêtes avancées.

5. **Nœuds de Snapshot :**
   - **Rôle :** Les nœuds de snapshot maintiennent des copies des instantanés de la blockchain à différents intervalles. Ces snapshots incluent l'état de la blockchain à une hauteur de bloc donnée, offrant un point de restauration pour les nœuds complets ou les nouveaux nœuds.
   - **Bénéfices :** Ils permettent une synchronisation rapide et la récupération d'autres nœuds dans le réseau, améliorant ainsi la résilience et la scalabilité de l'infrastructure du réseau.

## Importance de Chaque Type de Nœud

- Les **validateurs** garantissent la validité des transactions et le consensus du réseau.
- Les **nœuds complets** et les **nœuds d'archive** assurent la redondance et l'intégrité des données.
- Les **nœuds RPC** permettent le développement d'applications et l'interaction avec la blockchain.
- Les **nœuds de snapshot** contribuent à l'évolutivité et à la synchronisation rapide du réseau.

## Conclusion

Les différents types de nœuds dans l'écosystème Core Chain assurent collectivement que la blockchain est sécurisée, efficace, accessible et robuste. Les validateurs, nœuds complets et nœuds d'archive forment la colonne vertébrale de la sécurité et de l'intégrité des données du réseau. En même temps, les nœuds RPC et de snapshot offrent flexibilité, accessibilité et scalabilité. Cette architecture de nœuds multifonctionnelle prend en charge une large gamme d'opérations, allant du traitement des transactions aux interactions complexes avec les applications décentralisées (dApp) et à l'analyse des données historiques.
