---
sidebar_label: Delegating Core
hide_table_of_contents: false
sidebar_position: 2
---

# Delegating CORE

---

By delegating CORE to Validators, CORE holders can help secure the network and share in system rewards.

## Validator Selection

Delegators can use Core's staking website to manage their positions:

| Mainnet                                              | Testnet                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------- |
| [Mainnet staking website](https://stake.coredao.org) | [Testnet staking website](https://stake.test.btcs.network) |

Validator information is listed on the staking site, with all validators ranked by their current hybrid score, as shown below. Explanations for key terms are available for each column header on the staking site, viewable by clicking on the `i` symbol next to the column header.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-1.avif)

At the start of each round, Satoshi Plus consensus selects the Validators by their hybrid scores. The nodes are ranked in descending order of this score, with the top **23** nodes selected to form the active Validator set for the current round. Hybrid scores are calculated using the following formula:

`S = hash_percentage * m + coin_percentage * (1 - m)`

Where,
`coin_percentage` accounts for the ratio of both the **CORE** and **BTC** staking tokens
`m` is a dynamic weighting factor initially set to **2/3**

Validator information is refreshed daily at **00:00 UTC** at the beginning of each round.

## Delegation

Selecting the name of a Validator will open up a validator page with more information about them, as shown below.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-2.avif)

To delegate to the Validator, select the **Delegate→DelegateCoin** button on the top left. Enter the deposit amount in the input field and select 'Delegate' to send your delegation transaction, as shown below. To execute the transaction, you'll need to sign and send it using MetaMask or another compatible web wallet.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-3.avif)

After successfully delegating to a Validator, you can find your total delegated amount under the **Coin** tab, with your historical delegation transactions listed under the **CoinRecord** tab. You are able to delegate to more than one Validator.

To undelegate your CORE, simply select the **Undelegate→UndelegateCoin** button and sign the transaction.

## Claiming Rewards

You can view reward information about your active delegations by selecting **My Staking** on the top right of the staking website. Delegation (staking) rewards are distributed after each round at 00:00 am UTC every day.

To claim your rewards, simply select the **Claim** button on the top left and sign the transaction. After sending the transaction, you will receive the rewards to your linked address. Historical claim transactions are listed on the website's **Claim** tab, as shown below.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-4.avif)
