---
sidebar_label: BTC Staking Transaction Decoder
hide_table_of_contents: false
sidebar_position: 2
---

# BTC Staking Transaction Decoder

The BTC Staking Transaction Decoder is a powerful tool available on [Core scan](https://scan.coredao.org/btc-stake-txn-decoder) that allows users to verify and validate their Bitcoin staking transactions. This tool is essential for ensuring that your staking transactions are properly formatted and will be processed by the Core network.

## Overview

The decoder tool performs comprehensive validation of BTC staking transactions by:

- **Transaction Confirmation Status**: Verifies that the transaction has been confirmed on the Bitcoin network
- **OP_RETURN Output Validation**: Ensures the transaction contains the correct OP_RETURN output format required by the Core protocol
- **Validator Address Verification**: Confirms that the target validator address is valid and active on the Core network
- **Protocol Compliance**: Validates that the transaction meets all Core staking protocol requirements

<p align="center">
![btc-staking-txn-decoder](../../static/img/btc-staking-txn-decoder/txn-decoder.png)
</p>

This validation process ensures that your BTC staking transaction will be properly processed by the Core network relayers and your stake will be successfully registered.

## How to Use the Transaction Decoder

### Step 1: Access the Decoder Tool

Navigate to the [BTC Staking Transaction Decoder](https://scan.coredao.org/btc-stake-txn-decoder) on Core scan.

### Step 2: Enter Transaction Hash

1. Locate the transaction hash field on the decoder page
2. Copy your BTC staking transaction hash from your wallet or blockchain explorer
3. Paste the transaction hash into the input field
4. Click the `Decode` button to begin the analysis

### Step 3: Analyze Decoded Information

The decoder will provide detailed information about your transaction:

- **State**: Indicates whether your stake is active, redeemed, or pending
- **Input/Output Addresses**: Shows the flow of BTC in your staking transaction
- **OP_RETURN Data**: Contains the encoded staking information including delegator and validator addresses
- **LockTime**: The timestamp when your staking period ends
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

1. **Prevents Failed Stakes**: Identify issues before they cause problems
2. **Verifies Protocol Compliance**: Ensure your transaction meets all requirements
3. **Provides Transparency**: Clear visibility into your staking transaction details

The BTC Staking Transaction Decoder helps users verify the details of their selft custodial BTC staking transactions, ensuring transparency and accuracy throughout the staking process.
