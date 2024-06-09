---
sidebar_label: How to Guides
hide_table_of_contents: false
sidebar_position: 2
---

# Wrap & Unwrap coreBTC

## Introduction
As a native wrapped BTC on Core, coreBTC maintains a 1:1 peg with BTC through a secured and trustless mechanism, powered by a network of decentralized, permissionless participants. This guide covers the essential steps for minting (wrapping) and redeeming (unwrapping) coreBTC, facilitating Bitcoin integration into decentralized finance (DeFi).

![core-guide-1](../../../../static/img/coreBTC/core-guides-1.png)

## Getting Started: Prerequisites
1. [Unisat Wallet Browser Extension](https://unisat.io/): Required for managing your BTC. Note that, Unisat currently has only desktop and Android wallet app.
2. [MetaMask](https://metamask.io/): Necessary for interacting with the Core blockchain.

## Minting coreBTC
1. **coreBTC Website:** Go to https://bridge.coredao.org/coreBTC
2. **Specify Conversion:** Indicate you're converting from Bitcoin (BTC) to coreBTC.
3. **Connect Unisat Wallet:** Select Connect Unisat Wallet to link your Bitcoin wallet.
4. **Enter BTC Amount:** Input the amount of BTC you wish to convert to coreBTC.
5. **Receiving Core Address:** Enter your Core blockchain wallet address.
6. **Adjust Fee Rate:** The default fees are set according to the current market rates. For faster transaction processing, it's essential to adjust the gas fee appropriately. Keep in mind that setting a higher fee can significantly speed up the transaction. Conversely, if the fee is set too low, the transaction may experience considerable delays in being mined, potentially taking days or even longer to process. It's crucial to find a balance that aligns with your urgency and the network's current demand.
7. **Verification:** Double-check all details, including amounts, fees, and wallet addresses.
8. **Mint:** Click on 'Mint coreBTC' to initiate the conversion.
9. **AddToken:** Select 'Add coreBTC to your wallet' in MetaMask to view your coreBTC.

![core-guide-2](../../../../static/img/coreBTC/core-guides-2.png)
<!-- 
<img src="../../../../static/img/coreBTC/core-guides-2.png" alt="banner" style={{zoom:"80%"}}/> -->

## Redeeming BTC from coreBTC
1. **coreBTC Website:** Go to https://bridge.coredao.org/coreBTC
2. **Specify Conversion:** Choose the conversion from coreBTC to Bitcoin (BTC).
3. **Connect EVM Wallet:** Click on Connect EVM Wallet to link your wallet.
4. **Enter coreBTC Amount:** Specify the amount of coreBTC to be redeemed for BTC.
5. **Receiving Bitcoin Address:** Enter the destination Bitcoin wallet address.
6. **Verification:** Double-check all details, including amounts, fees, and wallet addresses.
7. **Burn:** Click on 'Burn coreBTC' to start the redemption process.

![core-guide-3](../../../../static/img/coreBTC/core-guides-3.png)

## Dashboard: Status Monitoring

![core-guide-4](../../../../static/img/coreBTC/core-guides-4.png)

1. **Pending Transactions:** View and obtain details on ongoing transactions.
2. **Completed Transactions:** Check the history and specifics of finalized transactions.
3. **Locker States:** Explore available lockers, including their fees, collateral, minting capacity, and health factor. Lockers are crucial for securing BTC and are subject to penalties or liquidation based on behavior and collateral status.
4. **Relayer States:** Review the list of relayers responsible for data transmission and verification between Bitcoin and Core blockchain.

:::note
Refer to [coreBTC FAQs section](../../../FAQs/coreBTC-faqs.md) for any queries that you may have.
:::