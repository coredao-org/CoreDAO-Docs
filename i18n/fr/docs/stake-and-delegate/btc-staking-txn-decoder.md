---
sidebar_label: Décodeur de transaction de mise en jeu BTC
hide_table_of_contents: false
sidebar_position: 2
---

# Décodeur de transaction de mise en jeu BTC

Le décodeur de transaction de mise en jeu BTC est un outil puissant disponible sur [Core Scan](https://scan.coredao.org/btc-stake-txn-decoder) qui permet aux utilisateurs de vérifier et de valider leurs transactions de mise en jeu de Bitcoin. Cet outil aide à diagnostiquer les problèmes potentiels de formatage avec vos transactions de mise en jeu après qu'elles ont été soumises au réseau Core

## Aperçu

L'outil de décodage effectue une validation complète des transactions de mise en jeu de BTC en :

- **État de confirmation de la transaction :** Vérifie que la transaction a été confirmée sur le réseau Bitcoin
- **Validation de la sortie OP_RETURN :** Vérifie que la transaction contient le format de sortie OP_RETURN correct exigé par le protocole Core
- **Vérification de l'adresse du validateur :** Confirme que l'adresse du validateur cible est valide et active sur le réseau Core
- **Conformité au protocole :** Valide que la transaction répond à toutes les exigences du protocole de mise en jeu Core

<p align="center">
![btc-staking-txn-decoder](../../static/img/btc-staking-txn-decoder/txn-decoder.png)
</p>

Ce processus de validation analyse votre transaction de mise en jeu de BTC et aide à identifier les problèmes si la transaction n'a pas abouti.

## Fonctionnalité de l'outil

Cet outil aide à décoder et à valider les transactions de mise en jeu de BTC par rapport aux exigences du protocole en analysant la sortie OP_RETURN de la transaction, ce qui permet aux utilisateurs de suivre plus facilement l'état de la transaction et d'identifier les problèmes potentiels.

Cet outil suit les statuts de transaction suivants :

- **En attente :** La transaction n'a pas encore été incluse dans un bloc.
- **En cours de confirmation :** La transaction est incluse dans un bloc mais a moins de 6 confirmations de bloc.
- **Mise en jeu active :** La mise en jeu est active.
- **Échec :** La tentative de mise en jeu a échoué.
- **Expiré :** La période de mise en jeu est terminée, mais les récompenses n'ont pas encore été récupérées.
- **Récupéré :** La période de mise en jeu est terminée et les récompenses ont été récupérées avec succès.
- **Manquée :** La transaction a été confirmée après la fin de la période de mise en jeu, ce qui entraîne l'absence de récompenses de mise en jeu.

## Comment utiliser le décodeur de transactions

### Étape 1 : Accéder à l'outil de décodage

Pour naviguer vers le [BTC Staking Transaction Decoder](https://scan.coredao.org/btc-stake-txn-decoder) sur Core Scan.

### Étape 2 : Saisir le hachage de transaction

1. Localisez le champ de hachage de transaction sur la page du décodeur
2. Copiez le hachage de transaction de mise en jeu BTC depuis votre portefeuille ou explorateur de blockchain
3. Collez le hachage de transaction dans le champ de saisie
4. Cliquez sur le bouton `Decode` pour lancer l'analyse

### Étape 3: Analyser les informations décodées

Le décodeur fournira des informations détaillées sur votre transaction:

- **État de la transaction :** Affiche l'état actuel de votre transaction de mise en jeu (En attente, En cours de confirmation, Mise en jeu réussie, Échec, Expirée, Rachetée ou Manquée)
- **Adresses d'entrée/sortie :** Affiche le flux de BTC dans votre transaction de mise en jeu
- **Données OP_RETURN :** Contient les informations de mise en jeu encodées, notamment les adresses du délégant et du validateur
  - **Adresse du délégant :** L'adresse de récompense CORE du stakeur sur la chaîne Core.
  - **Adresse du validateur :** L'adresse du validateur à qui le stakeur a délégué ses BTC.
- **Temps de verrouillage :** [Unix timestamp](https://www.unixtimestamp.com/) représentant la date et l'heure de fin de votre mise en jeu
- **Hachage de clé publique :** Votre hachage de clé publique à des fins de vérification

<p align="center">
![btc-staking-txn-decoder](../../static/img/btc-staking-txn-decoder/decoded-data.png)
</p>

## Common Issues and Solutions

### Transaction non confirmée

- **Problème :** La transaction est toujours en attente dans le mempool
- **Solution :** Attendre la confirmation du réseau Bitcoin (généralement 1 à 6 blocs)

### Format OP_RETURN invalide

- **Problème :** La sortie OP_RETURN ne correspond pas aux exigences du protocole Core
- **Solution :** Assurez-vous que le format OP_RETURN est correct. Pour des conseils détaillés, référez-vous [format specified here](https://docs.coredao.org/docs/stake-and-delegate/btc-staking/design#op_return-output)

### Adresse de validateur invalide

- **Problème :** L'adresse du validateur n'est pas active ou n'existe pas
- **Solution :** Vérifiez l'adresse du validateur et assurez-vous qu'il s'agit d'un validateur Core actif

## Avantages de l'utilisation du décodeur

- **Vérifie la conformité au protocole :** Vérifie si la transaction répond à toutes les exigences et décode les détails de la transaction de staking.
- **Fournit de la transparence :** Une visibilité claire sur les détails de votre transaction de staking

Le décodeur de transactions de staking BTC aide les utilisateurs à vérifier les détails de leurs transactions de staking BTC en auto-garde et à résoudre les problèmes d'enregistrement sur le Core network.
