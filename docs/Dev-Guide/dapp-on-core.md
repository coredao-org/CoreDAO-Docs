---
sidebar_label: Build dApp on Core
hide_table_of_contents: false
sidebar_position: 2
description: Build a Full Stack dApp on Core Chain
---

# Building a dApp on Core
---

Decentralized applications (dApps) use a blockchain or on-chain smart contracts to store and reference data, rather than relying on traditional centralized databases. A common, simple dApp structure generally consists of a React.js or Vue.js front-end using Web3.js or Ethers.js to interact with smart contracts deployed to an EVM-compatible blockchain.

## What Are We Building
In this tutorial, we'll develop a simple dApp using React.js and Ethers.js that stores data in a smart contract on the Core blockchain and displays it to users. The dApp's full code is available on GitHub in the [dApp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master) repository.

:::note
This tutorial assumes that the reader has front-end development experience and is familiar with JavaScript, Node.js, and React.js.
:::

## Learning Takeaways
This tutorial will help you gain knowledge on the following learning points:

* MetaMask Wallet connectivity to Core Testnet;
* Smart contract development and deployment on Core Testnet;
* Front-end integration with the smart contract using Ethers.js library;
* Read data from a smart contract;
* Write data to a smart contract;

## Software Prerequisites
* [Git](https://git-scm.com/) v2.44.0
* [Node.js](https://nodejs.org/en) v20.11.1
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v10.2.4
* [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) v10.2.4
* [MetaMask Web Wallet Extension](https://metamask.io/download/)

## Setting up the development environment

1. Clone the [dApp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master) repository from GitHub using the following command.

```bash
git clone https://github.com/coredao-org/dapp-tutorial.git
```

2. Navigate into the project directory.

```bash
cd dapp-tutorial
```

3. Install all the dependencies, i.e., node modules.

```bash
npm install
```

4. Install and configure MetaMask Chrome Extension to use with Core Testnet. Refer [here](./core-testnet-wallet-config.md) for a detailed guide.

5. To test if things are working fine, run the application by using the following command. This will serve applciation with hot reload feature at [http://localhost:5173](http://localhost:5173/)

```bash
npm run dev
```

## Key Implementations

The application's key blockchain logic is implemented in [App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/src/components/App.tsx):

1. [App.tsx (Wallet)](https://github.com/coredao-org/dapp-tutorial/blob/master/src/components/App.tsx#L16): used to connect to MetaMask.
2. [App.tsx (Store)](https://github.com/coredao-org/dapp-tutorial/blob/master/src/components/App.tsx#L54): used to write data to a smart contract.
3. [App.tsx (Retrieve)](https://github.com/coredao-org/dapp-tutorial/blob/master/src/components/App.tsx#L83): used to read data from a smart contract.

We recommend using Remix and the MetaMask web wallet for the remainder of the tutorial. To connect MetaMask to Core Testnet, refer to our guide on[ using MetaMask on Core Testnet](./core-testnet-wallet-config.md).

## Smart Contract Deployment

To interact with our smart contract, we'll first need to deploy the smart contract to Core Testnet. Please follow the steps in our [Remix deployment](./remix.md) and [HardHat deployment](./hardhat.md) tutorials to deploy the following `1_Storage.sol` contract to Core Testnet:

```javascript
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
```

After the smart contract is successfully deployed, copy the address into [Line 9 of App.tsx](https://github.com/coredao-org/dapp-tutorial/blob/master/src/components/App.tsx#L9). Additionally, we'll need the ABI metadata to interact with the contract from our dApp.

For simplicity, we can use the smart contract metadata from Remix located at `/default workspace/contracts/artifacts/Storage_metadata.json` on the Remix File Explorer. Create a new file called `Storage.json`, copy in the metadata, and save it to the `/src/contracts folder`.

## Test Locally Using MetaMask

1\. Make sure that your MetaMask wallet is correctly installed and switched to Core Testnet as described in our [Core Testnet user guide](./core-testnet-wallet-config.md). You'll also need to connect your MetaMask wallet to the local site.

![dapp-on-core](../../static/img/dapp/dapp-1.png)

2\. Enter a number in the input field and click the **store** button to save it to the contract. A write action on the smart contract invokes the MetaMask wallet. Click the **Confirm** button to sign the transaction and wait for confirmation on the blockchain.

![dapp-on-core](../../static/img/dapp/dapp-2.avif)

3\. After the transaction is confirmed on the blockchain, click the **retrieve** button to read the value from the smart contract. You will notice the value has been updated.

![dapp-on-core](../../static/img/dapp/dapp-3.avif)

Congratulations, you've just interacted with your newly-deployed contract using your dApp's front end! You can build on the codebase by deploying and interacting with different contracts, and by adding new UI components to the website for your users.
