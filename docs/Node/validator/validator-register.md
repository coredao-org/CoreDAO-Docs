---
sidebar_label: Validator Registration
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Registration
---

:::caution 
Before becoming a validator on Core, we strongly recommend reading the [Technical Whitepaper](https://whitepaper.coredao.org/).
:::

## Registration

1. To register as a validator on Core you must be running a full node in validator mode. Please read the guides on [configuring validator nodes](../config/validator-node-config.md) and [running validator nodes](./running-validator.md) for information on how to set this up.

2. Once that’s finished, the easiest way to register a new validator is using one of our staking websites:

    * [Mainnet stake website](https://stake.coredao.org)
    * [Testnet stake website](https://stake.test.btcs.network)

3. Connect your wallet by selecting **Connect Wallet** in the top right. 
4. Once connected, the **register** button should appear on the top right. Selecting **register** opens the following input form:

![validator-register-form](../../../static/img/validator/register/validator-register-1.avif)

Provide information for each of the form's fields:

* **Consensus address**: the validator address you set when you initialized your validator full node.
* **Fee address**: the address used to collect commission fees.
* **Commission**: revenue is split between the validator and its delegators, with the commission determining what percentage of delegator revenue is taken by the validator as compensation.
* **Total deposit**: the refundable CORE deposit locked up while performing validator services. On testnet, the minimum amount is 10,000 CORE.

5. Once you've entered the required information, select **register** to register as a validator.

## Confirm Registration

A quick way to check that you've successfully registered your full node as a validator is to open the log file and search for the error message "unauthorized validator". This error occurs when this node is registered as a validator but not yet elected to the validator set.

![validator-register-form](../../../static/img/validator/register/validator-register-2.avif)

## Validator Election

Each day, the 21 validators with the highest hybrid scores are elected to the validator set, thereby becoming responsible for producing blocks on the Core network for the entirety of the round. When the last block of a round is mined, the round’s accumulated rewards are distributed and the next round's validator set is selected. For more details about how the validator election works, refer to the[ validator election](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/validator-election) section of the Technical Whitepaper.

You can check the validator status on the stake website, active elected validators will be marked as `Active/Normal`. The validator set is updated at 00:00 am UTC every day.

![validator-register-form](../../../static/img/validator/register/validator-register-3.avif)

Validators are assigned a status based on their actions during and before the current round:

<table><thead><tr><th width="208">Validator Status</th><th>Description</th></tr></thead><tbody><tr><td>Active/Normal</td><td>Elected validator in the current round. Qualified for the next election.</td></tr><tr><td>Active/Refuse</td><td>Elected validator in the current round, but refused to accept delegation. Not qualified for the next election.</td></tr><tr><td>Active/Jailed</td><td>Elected validator in the current round, but jailed due to a felony. Not qualified for the next election.</td></tr><tr><td>Inactive/Queued</td><td>Registered, but not elected. Qualified for the next election.</td></tr><tr><td>Inactive/Refuse</td><td>Registered, but refused to accept delegation. Not qualified for the next election.</td></tr><tr><td>Inactive/Jailed</td><td>Registered, in jail. Not qualified for the next election.</td></tr><tr><td>Inactive/Locked</td><td>Registered, But not enough deposit. Not qualified for the next election.</td></tr><tr><td>Inactive/Invalid</td><td>Unregistered.</td></tr></tbody></table>

You can search a validator's consensus address on[ Core Scan](https://scan.coredao.org/) to see their record of producing blocks.

![validator-register-form](../../../static/img/validator/register/validator-register-4.webp)
