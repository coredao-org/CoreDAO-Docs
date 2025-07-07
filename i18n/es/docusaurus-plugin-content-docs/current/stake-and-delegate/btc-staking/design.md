---
sidebar_label: Transaction Design
hide_table_of_contents: false
sidebar_position: 2
---

# Self-Custodial Bitcoin Staking Design
---

## Background

The methodology for integrating Bitcoin staking centers on Bitcoin's native [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) `OP_CODE`. CLTV is a Bitcoin script operation that restricts transaction outputs from being spent until a specified absolute time or block height is reached. By creating a transaction with a CLTV script, Bitcoin holders can make their coins temporarily unspendable while including metadata that allows Core to recognize their participation in consensus. This mechanism leverages Bitcoin's existing scripting capabilities without requiring any modification to the Bitcoin protocol.

<p align="center">
![btc-staking-tx-design](../../../../../../static/img/btc-staking/tx-design/staking-tx-design.png)
</p>

### Requirements for Transaction Validity {#requirements-for-transaction-validity}

* To create a valid timelock transaction that Core relayers will recognize, users must:
    * Create a Bitcoin transaction where the output is sent to their own address using Bitcoin's native CLTV timelock feature
    * Specify the amount of Bitcoin they wish to timelock for delegation to a Core validator
    * Include an `OP_RETURN` output containing two critical pieces of information:
        * The address of the Core validator they wish to support
        * The Core address where they want to receive CORE token rewards
* Minimum Requirements:
    * Amount: When using the [official staking interface](https://stake.coredao.org/staking), a minimum of 0.01 BTC must be timelocked (excluding transaction fees)
    * Duration: The minimum timelock period is 24 hours, though the Core staking interface defaults to a recommended minimum of 5 days for optimal participation
    * Technical implementation: There are no minimum requirements when creating timelock transactions manually, though the same parameters are recommended for effective participation

### Transaction Workflow

Self-Custodial Bitcoin Staking operations are conducted on two separate blockchains: Bitcoin and Core. The following flowchart illustrates the workflow for Bitcoin holders to earn staking rewards through Core’s Self-Custodial Bitcoin Staking. 

<p align="center">
![btc-staking-flow](../../../../../../static/img/btc-staking/btc-staking-workflow.png)
</p>


## Transaction Structure

### Staking transaction

A Bitcoin staking transaction should have two/three outputs, which are

- `P2SH/P2WSH` type output, with time-lock enabled redeem script
- `OP_RETURN` type output, with Core staking information
- (_Optional_) Change address

Note that there are **no** restrictions on inputs.

<p align="center">
![btc-staking-tx-output](../../../../../../static/img/btc-staking/tx-design/staking-flow.png)
</p>

### Withdrawal transaction

The locked UTXO (Bitcoins) can be spent using the redeem script when the time-lock ends.

<p align="center">
![btc-staking-withdrawal-tx](../../../../../../static/img/btc-staking/tx-design/withdrawal-flow.png)
</p>

## Script Design

### P2SH/P2WSH Output

* Core supports both `P2SH` and `P2WSH` outputs for Bitcoin staking.

* The construction of `P2SH` type output is as follows

    * `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

* The construction of `P2WSH` type output is as follows

    * `OP_0 <SHA256(RedeemScript)>`

### Redeem Script

The `RedeemScript`  should start with a CLTV time lock. Here are a few common types.

* When using a public key `<CLTV timelock> OP_CLTV OP_DROP <pubKey> OP_CHECKSIG` and the corresponding unlocking script in the withdrawal transaction is `<sig> <RedeemScript>`

* When using a public key hash (most recommended) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` and the corresponding unlocking script in the withdrawal transaction is `<sig> <pubKey> <RedeemScript>` 

* When using multi-signature address `<CLTV timelock> OP_CLTV OP_DROP M <pubKey1> <pubKey2> ... <pubKeyN> N OP_CHECKMULTISIG` and the corresponding unlocking script in the withdrawal transaction is `OP_0 <sig1> ... <sigM> <RedeemScript>` The amount and duration of Bitcoin locked in this output will be used for the calculation of validator election and reward distribution on Core.

:::note 
To be eligible for Self-Custodial BTC Staking on Core, minimum staking requirements depend on the chosen method. If using the [official website interface](https://stake.coredao.org/staking), users must stake at least **0.01 BTC** (excluding transaction fees). There is **no** minimum requirement when staking via the script. Also, the minimum staking duration depends on the method. The official website UI requires a 5-day minimum, while staking through script has no lockup requirement.
:::

## OP_RETURN Output

The `OP_RETURN` output should contain all staking information in order and be composed in the following format:

- **`OP_RETURN`:** identifier `0x6a`
- **`LENGTH`:** which represents the total byte length after the `OP_RETURN` opcode. _Note that all data has to be pushed with its appropriate size byte(s)_.
- **`Satoshi Plus Identifier`:** (**SAT+**) 4 bytes
- **`Version`:** (**0x01**) 1 byte
- **`Chain ID`:** (1114 for Core Testnet2 and 1116 for Core Mainnet) 2 bytes
- **`Delegator`:** The Core address to receive rewards, 20 bytes
- **`Validator`:** The Core validator address to stake to, 20 bytes
- **`Fee`:** Fee for relayer, 1 byte, range [0,255], measured in CORE
- **`RedeemScript`:** used for redeeming staked BTC after timelock expires.
- (_Optional_) **`Timelock`:** 4 bytes

> **Note:** RedeemScript should be included. Also, if the Timelock is included, Little Endian is required first.


#### Key Points 
- Any bytes that can translate to a number should use `OP_number` (`{0}` should use `OP_0` instead of `0x0100`, `{16}` should use `OP_16` instead of `0x0110`)
- Any bytes with lengths smaller than `0x4c (76)`  are  pushed with 1 byte equal to the size `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Any bytes bigger than or equal to `0x4c` is pushed by using `0x4c` (ie. `OP_PUSHDATA`) followed by the length followed by the data `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Any bytes with length bigger than `255` uses `0x4d` (`OP_PUSHDATA2`)
- Any bytes with length bigger than `65535` (`0xffff`) uses `0x4e` (`OP_PUSHDATA4`)

Either RedeemScript or Timelock must be available. This allows relayers to obtain the `RedeemScript` and submit transactions on Core. If a `RedeemScript` is provided, relayer will use it directly. Otherwise, relayer will construct the redeem script based on the timelock and the information in the transaction inputs. You can find more information about the relayer role in the [below section](#role-of-relayers). 

## Role of Relayers

In a strict sense, the Self-Custodial Bitcoin Staking process consists of two steps

1. Stake on the Bitcoin network
2. Submit the confirmed Bitcoin staking transaction to Core

To make the entire process more convenient, Core introduces the role of relayers. Relayers can help users submit transactions to the Core network after confirmation of the staking transaction on the Bitcoin network. Since verifying the transaction on the Core network with the embedded Bitcoin light client is necessary, relayers need to obtain the corresponding RedeemScript of the `P2SH/P2WSH` output. To meet this requirement, we suggest users to either

- If the `RedeemScript` is short, put the entire RedeemScript at the end of the `OP_RETURN` output. For example, a `RedeemScript` is constructed using a public key hash, as shown in the sample below.
- Set the receiving address of the staking transaction as their own so relayers can extract useful information from the transaction input and compose the `RedeemScript` by themselves. E.g.
    - If it's a normal address, the `pubkey` or `pubkey hash` should be set as the input's corresponding public key when constructing the `RedeemScript`.
    - If it is a multi-signature address, the corresponding multi-signature address's public key should be set when constructing the `RedeemScript`.

## Transaction Examples

### Staking transaction

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

<p align="center">
![btc-staking-tx-example](../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(3).png)
</p>

#### P2WSH output

This is the staking output and it is a standard P2WSH address. The redeem script used for this output is `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`

```jsx
OP_PUSHBYTES_4 1f5e0e66
OP_CLTV
OP_DROP
OP_DUP
OP_HASH160
OP_PUSHBYTES_20 c4b8ae927ff2b9ce218e20bf06d425d6b68424fd
OP_EQUALVERIFY
OP_CHECKSIG
```

The script looks very similar to a normal `P2PKH` redeem script except it starts with a timelock `OP_PUSHBYTES_4 1f5e0e66 OP_CLTV OP_DROP`.

The redeem script hash used in this P2WSH output is `SHA256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` which results to `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0118029b0ba15e44e0e9` .

Here is an online tool to generate `P2WSH` `sha256` hash value from redeem script, by which you can verify the above calculation: [https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php](https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php)

#### OP_RETURN output

The full hex of this output is `6a4c505341542b01045bde60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1a9e209f5ea0036c8c2f41078a3cebee57d8a47d501041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` , where

- `6a` is op_return opcode
- `4c50` is the total byte length after the `OP_RETURN` opcode [1]
- `5341542b` SAT+, which is satoshi plus identifier
- `01` is version
- `045b` 1115, which is chain id (1115 for Core Testnet and 1116 for Core Mainnet)
- `de60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1` is the reward address
- `a9e209f5ea0036c8c2f41078a3cebee57d8a47d5` is the validator address
- `01` is relayer fee, measured in CORE
- `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` is redeem script, which is explained in the above section.

[1] Any bytes bigger than or equal to `0x4c` is pushed by using `0x4c` (ie. `OP_PUSHDATA`) followed by the length followed by the data (`byte[80] -> OP_PUSHDATA + 80 + byte[80])`

### Withdrawal Transaction

[https://mempool.space/tx/dc02ddc54ff82ba561f4d82429338d1df50377fcce0725bc764b9b2562d10832](https://mempool.space/tx/10182ad08fdb0469ab3d91d1bb340c7b0cbd858ad8865f6b6ddf76e3806ba889)

This transaction spent the P2WSH time-lock output from the above staking transaction

<p align="center">
![btc-staking-withdrawal-tx-example](../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(4).png)
</p>

In the input, the redeem script `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` is provided to spend it. Since the time lock `1f5e0e66` (660e5e1f after reverting bytes, which is 1712217631 unix timestamp) has already expired, the UTXO was spent successfully.

:::note
 Code samples of constructing the staking and withdrawal transactions on Bitcoin network will be provided soon. 
:::