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

### Step 3: Analyze Decoded Information

The decoder will provide detailed information about your transaction:

- **Transaction State**: Shows the current status of your staking transaction (Pending, Confirming, Staked, Failed, Expired, Redeemed, or Missed)
- **Input/Output Addresses**: Shows the flow of BTC in your staking transaction
- **OP_RETURN Data**: Contains the encoded staking information including delegator and validator addresses
  - **Delegator address**: The CORE reward address of the staker on the Core chain.
  - **Validator address**: The address of the validator to whom the staker delegated their BTC.
- **LockTime**: [Unix timestamp](https://www.unixtimestamp.com/) representing the end date and time of your staking
- **PublicKeyHash**: Your public key hash for verification purposes

<p align="center">
![btc-staking-txn-decoder](../../static/img/btc-staking-txn-decoder/decoded-data.png)
</p>

## Common Issues and Solutions

### Transaction Not Confirmed

- **Issue**: Transaction is still pending in the mempool
- **Solution**: Wait for Bitcoin network confirmation (typically 1-6 blocks)

### Invalid OP_RETURN Format

- **Issue**: The OP_RETURN output doesn't match Core protocol requirements
- **Solution**: Make sure the OP_RETURN format is correct. For detailed guidance, refer to the [format specified here](https://docs.coredao.org/docs/stake-and-delegate/btc-staking/design#op_return-output)

### Invalid Validator Address

- **Issue**: The validator address is not active or doesn't exist
- **Solution**: Verify the validator address and ensure they're an active Core validator

## Benefits of Using the Decoder

- **Verifies Protocol Compliance**: Verifies whether the transaction meets all requirements and decodes the staking transaction details.
- **Provides Transparency**: Clear visibility into your staking transaction details

The BTC Staking Transaction Decoder helps users verify the details of their self-custodial BTC staking transactions and helps you to resolve issues when a BTC staking transaction fails to register with the Core network.
