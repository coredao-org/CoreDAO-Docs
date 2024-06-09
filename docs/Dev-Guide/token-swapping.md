---
sidebar_label: Using Uniswap
hide_table_of_contents: false
sidebar_position: 2
---

# Token Swapping on Core Testnet Using Uniswap
---

It's possible to swap tokens on the Core Testnet using a decentralized trading platform deployed to Core Testnet and powered by [Uniswap V2 contracts](https://github.com/Uniswap/v2-core/tree/master/contracts). Users can test the process of using a dApp on Core in a safe testnet environment, while developers can leverage the application as a testnet liquidity layer for testing out AMM integrations. The test swap dApp is available [here](https://swap.test.btcs.network/#/swap).

:::caution
Please note that all tokens on Core Testnet are only used for testing and do not have any value.  
:::

## Connect Wallet

After connecting your [MetaMask](https://metamask.io/) account to Core Testnet as described in our [guide](./core-testnet-wallet-config.md), select the **Connect to a wallet** button on the top-right corner of the [Testnet Uniswap Application](https://swap.test.btcs.network/#/swap) as seen in the picture below:

![connect-wallet-uniswap](../../static/img/uniswap/swap-token-1.png)

## Select Token List

The very first time you use the test swap, you'll need to choose a token list. You can select the built-in default Core token list or load your own token list. The default token list contains fake USDT (sUSDT) for testing.

![select-token-list](../../static/img/uniswap/swap-token-2.png)

## Load sUSDT From Faucet

To test swapping, we can fetch sUSDT for free from the [faucet website](https://scan.test.btcs.network/faucet). Navigate to the website and fill in your address to receive **100-200 sUSDT**. Addresses can only fetch sUSDT from the faucet once per day. If you are using the MetaMask Chrome extension, you can add sUSDT to MetaMask automatically by clicking the Add sUSDT to MetaMask button.

:::note
Please note that sUSDT is a testing token and does not have any actual value.
:::

![get-susdt](../../static/img/uniswap/swap-token-3.png)

## Add and Remove Liquidity

Before we swap, let's check out another feature of Uniswap: adding and removing liquidity. Select the **Pool** tab and choose the token pairs for which you want to add liquidity. Make sure you have enough tokens on both sides. After you successfully add liquidity, you will receive the LP tokens which represent your share in the pool.

![add-remmove-liquidity](../../static/img/uniswap/swap-token-4.png)

You can also remove the liquidity on the **Pool** tab. Select the LP token under **Your Liquidity** and choose the amount of the LP token you want to remove. After you successfully remove liquidity, you will receive the underlying pair of tokens.

![add-remmove-liquidity](../../static/img/uniswap/swap-token-5.png)

## Swapping

Select the **Swap** tab and choose the token pairs you'd like to swap. In the **From** field enter the amount of tokens you'd like to swap. The website will calculate the estimated amount of the target token you will receive (and vice versa). Afterward, you'll see the change in your MetaMask wallet's token balances.

![swap-tokens](../../static/img/uniswap/swap-token-6.png)

:::info
If you want to learn more about Uniswap, check out the [Uniswap docs](https://docs.uniswap.org/protocol/V2/introduction).
:::