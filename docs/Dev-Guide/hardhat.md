---
sidebar_label: Using Hardhat
hide_table_of_contents: false
sidebar_position: 2
description: Deploy Contracts on Core using the Hardhat
---

# Using Hardhat

---

Hardhat is a popular development environment for EVM-compatible blockchains, consisting of multiple components for writing, compiling, debugging, and deploying smart contracts.

In this tutorial, learn how to compile, deploy and call smart contracts on Core TestNet using HardHatcheck. Obtain codebase for this tutorial from [here](https://github.com/coredao-org/hardhat-tutorial).

## Installation

Navigate to your profile folder and follow the steps below to install HardHat (npm/node [v8.9.4 LTS or later](https://nodejs.org/en/) is required):

1. `npm init --yes`
2. `npm install --save-dev hardhat`
3. `npm install --save-dev chai @nomiclabs/hardhat-waffle`

## Project Initialization

After installation, we can initialize HardHat by executing the `npx hardhat` command:

```javascript
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.10.1 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

Once this project is initialized, you'll find the following project structure:

- `contracts`: for Solidity smart contracts.
- `scripts`: for JavaScript/TypeScript scripts for contract interaction and other utilities.
- `test`: for writing and running tests.
- `hardhat.config.js`: HardHat configuration file.

## Configure HardHat for Core Testnet

Copy the following into your `hardhat.config.js` file:

```javascript
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const { PrivateKey } = require("./secret.json");

module.exports = {
  defaultNetwork: "testnet",

  networks: {
    hardhat: {},
    testnet: {
      url: "https://rpc.test2.btcs.network",
      accounts: [PrivateKey],
      chainId: 1114,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.22",
        settings: {
          evmVersion: "shanghai",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
```

**Make sure that your smart contract follows the [Solidity Support Guidelines for Core Blockchain](./smart-contract-guidelines.md)**, to do so ensure that the `evmVersion` parameter is set to `shanghai` under the solidity compiler settings in the `hardhat.config.js` file.

If you are using **testnet1**, `evmVersion` parameter should be set to '`Paris`.

:::note
Please note that you'll need to provide your private keys or mnemonic for the provider. You can store them in a `secret.json` file. Be sure to add this file to your project's `.gitignore` to prevent accidentally committing your private keys to a public repository. Additionally, keep this file in a secure location to protect your sensitive information!
:::

## Writing Smart Contracts

For the sake of simplicity, let's use the `1_Storage.sol` file we're already familiar with from the Remix tutorial. Copy the code below into a new file called `Storage.sol` and save it to the `contracts` folder.

```javascript
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.8.24;

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

## Contract Compilation

Run the following command to compile the contract:

`npx hardhat compile`

## Contract Testing

Create a new file called `storage-test.js` containing the following code, and save it to the `test` folder:

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage", function () {
  let storage;

  beforeEach(async function () {
    Storage = await ethers.getContractFactory("Storage");
    [operator] = await ethers.getSigners();
    storage = await Storage.connect(operator).deploy();
    await storage.deployed();
    expect(await storage.retrieve()).to.equal(0n);
  });
  describe("Test store function", function () {
    it("should work properly", async function () {
      let tx = await storage.store(100);
      await tx.wait();
      expect(await storage.retrieve()).to.equal(100n);
    });
    it("should throw", async function () {
      await expect(storage.store(-1)).to.be.throws;
    });
  });
});
```

To test our `Storage.sol` contract on the built-in HardHat network, run the following command:

`npx hardhat test --network hardhat`

```javascript
$ npx hardhat test --network hardhat


  Storage
    Test store function
      ✔ should work properly
      ✔ should throw


  2 passing (1s)
```

## Contract Deployment and Interaction

HardHat makes it easy to use the `ethers.js` library to deploy and interact with our smart contracts. Create a new file called `deploy-and-call.js` in the `scripts` folder that contains the following code:

```javascript
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  await storage.deployed();
  console.log("Storage contract deployed to:", storage.address);

  console.log("call retrieve():", await storage.retrieve());

  console.log("call store(), set value to 100");
  const tx = await storage.store(100);
  await tx.wait();

  console.log("call retrieve() again:", await storage.retrieve());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

This script does a few things:

- Deploys our smart contract;
- Prints the deployed contract's address;
- Calls the retrieve function to check the stored number;
- Calls the store function to store a new number;
- Calls the retrieve function to check the stored number again;

Let's run the script by executing the following command:

`npx hardhat run scripts/deploy-and-call.js`

```javascript
$ npx hardhat run scripts/deploy-and-call.js
Storage contract deployed to: 0x65e2F3E4287C0563fBB066134A380e90a48d2D99
call retrieve(): BigNumber { value: "0" }
call store(), set value to 100
call retrieve() again: BigNumber { value: "100" }
```

We can see that the script correctly deployed the contract, stored a number, and confirmed that the number is now stored in the contract.

We can use[ Core Scan](https://scan.test.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and called.

<p align="center">
![hardhat](../../static/img/hardhat/hardhat-1.avif)
</p>

## Further Reading

For detailed instructions on using HardHat and plugins such as `ethers.js`, please visit[ HardHat's official website](https://hardhat.org/docs).
