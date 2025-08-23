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

This validation process analyzes your BTC staking transaction and assists in identifying issues if the transaction did not succeed.

## Tool Functionality

This tool helps decode and validate BTC Staking transactions against protocol requirements by parsing the transaction's OP_RETURN output, making it easier for users to track the transaction status and identify potential issues.

This tool tracks the following transaction statuses:

- **Pending**: The transaction has not yet been included in a block.
- **Confirming**: The transaction is included in a block but has fewer than 6-block confirmations.
- **Staked**: The staking is active.
- **Failed**: Staking attempt failed.
- **Expired**: The staking period has ended, but rewards have not yet been claimed.
- **Redeemed**: The staking period has ended and rewards have been successfully claimed.
- **Missed**: The transaction was confirmed after the staking period had already ended, resulting in no staking rewards.

## How to Use the Transaction Decoder

### Step 1: Access the Decoder Tool

Navigate to the [BTC Staking Transaction Decoder](https://scan.coredao.org/btc-stake-txn-decoder) on Core Scan.

### Step 2: Enter Transaction Hash

1. Locate the transaction hash field on the decoder page
2. Copy your BTC staking transaction hash from your wallet or blockchain explorer
3. Paste the transaction hash into the input field
4. Click the `Decode` button to begin the analysis

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
