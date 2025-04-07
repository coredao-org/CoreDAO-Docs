---
sidebar_label: Using Foundry
hide_table_of_contents: false
sidebar_position: 2
description: Deploy Contracts on Core using the Foundry
---

# Using Foundry

---

Foundry is a fast, efficient, and extensible toolkit for EVM development written in Rust.This guide will walk you through the process of installing Foundry, setting up your project, writing and testing Solidity code, and deploying and verifying your contracts on Core Blockchain.

## 1. Installation of Foundry

Before you start using Foundry, you need to install it on your system. The process is relatively simple and can be done in a few steps. Foundry uses `forge` as the main tool to interact with Solidity contracts.

### Step 1: Install Foundry

You can install Foundry by running the following command on a Unix-based system (macOS, Linux):

```bash
curl -L https://foundry.paradigm.xyz | bash
```

This will download and install Foundry. It includes the following tools:

- `forge`: The command-line interface for compiling, testing, and deploying Solidity contracts.
- `cast`: A tool for interacting with smart contracts and viewing blockchain data.
- `anvil`: A local node used for testing.

Once installed, make sure the binary is in your system’s PATH. To verify the installation, run:

```bash
forge --version
```

You should see the version of Foundry that was installed.

### Step 2: Update Foundry

Foundry is actively developed, so it's important to keep your installation up to date. You can update Foundry with the following command:

```bash
foundryup
```

This ensures that you have the latest version of Foundry installed.

## 2. Setting Up Your Project

### Step 1: Create a New Foundry Project

To create a new project with Foundry, you can use the `forge init` command:

```bash
forge init my-blockchain-project
```

This will generate a new directory structure with all the basic files you need to start writing Solidity contracts and tests.

Here’s what the generated folder structure will look like:

```
my-blockchain-project/
│
├── lib/                       # External dependencies (if any)
├── script/
│   └── Script.s.sol           # Default deploy script file
|
├── src/
│   └── Counter.sol            # Default contract file
|
├── test/                      # Test files
│   └── Counter.t.sol          # Default test file
│
├── foundry.toml               # Configuration file for foundry
└── README.md                  # Project documentation
```

### Step 2: Understanding the Folder Structure

- **src**: Contains your Solidity contracts.
- **script**: Contains your deployment script.
- **lib**: Holds any external libraries or dependencies.
- **test**: Contains test files to validate your contracts.
- **foundry.toml**: The configuration file for Foundry. It includes compiler settings, network configurations, and more.
- **README.md**: A markdown file to document your project.

### Step 3: Update Solidity and EVM version

Update the `foundry.toml` file with the appropriate Solidity and EVM versions.

Ensure you are using Solidity version `0.8.24`, and set the EVM version to `Shanghai`. If you're using an **older testnet**, set the **EVM version to Paris**.

```bash
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
evm_version = "shanghai"
solc_version = "0.8.24"
```

## 3. Writing a Solidity Contract

Now that your project is set up, let's write a simple Solidity contract.

### Step 1: Create a Simple Contract

Navigate to the `src` directory and create a new Solidity contract. Let’s use a simple counter contract to start.

Create a file called `Counter.sol` inside the `src` folder:

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Counter {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}
```

In this contract:

- The `count` state variable keeps track of the count value.
- The `increment` and `decrement` functions increase or decrease the counter.
- The `getCount` function returns the current count.

## 4. Testing the Solidity Contract

Foundry makes it easy to write tests for your contracts. The testing framework uses Solidity itself, making it easy to write tests alongside your contracts.

### Step 1: Create a Test File

Navigate to the `test` directory and create a test file called `Counter.t.sol`:

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Counter.sol";

contract CounterTest is Test {
    Counter counter;

    function setUp() public {
        counter = new Counter();
    }

    function testInitialCount() public {
        assertEq(counter.getCount(), 0);
    }

    function testIncrement() public {
        counter.increment();
        assertEq(counter.getCount(), 1);
    }

    function testDecrement() public {
        counter.increment();
        counter.decrement();
        assertEq(counter.getCount(), 0);
    }
}
```

### Explanation:

- `setUp()`: This function runs before every test and is used to initialize your contract.
- Test functions: `testInitialCount`, `testIncrement`, and `testDecrement` are individual test cases to check the contract's functionality.

### Step 2: Run the Tests

To run the tests, execute the following command:

```bash
forge test
```

Foundry will compile the contract, run the tests, and provide you with a summary of the results.

You should see output similar to the following:

```bash
[⠊] Compiling...
[⠔] Compiling 1 files with Solc 0.8.28
[⠒] Solc 0.8.28 finished in 491.38ms
Compiler run successful!

Ran 3 tests for test/Counter.t.sol:CounterTest
[PASS] testDecrement() (gas: 22192)
[PASS] testIncrement() (gas: 32003)
[PASS] testInitialCount() (gas: 10943)
Suite result: ok. 3 passed; 0 failed; 0 skipped; finished in 5.38ms (3.86ms CPU time)

Ran 1 test suite in 148.37ms (5.38ms CPU time): 3 tests passed, 0 failed, 0 skipped (3 total tests)
```

## 5. Deploying the Contract

Once you’ve written and tested your Solidity contract, you can deploy it to Core Testnet/Mainnet.

### Step 1: Configuring Deployment

To deploy your contract, you’ll need to set up a deployment script. create a file `Counter.s.sol` under script folder and paste the following code.

```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Script, console} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";

contract CounterScript is Script {
    Counter public counter;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        counter = new Counter();

        vm.stopBroadcast();
    }
}
```

#### Creating and Loading environment variables

create an `.env file` and add the following details

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

Make sure you replace `YOUR_API_KEY` and `YOUR_PRIVATE_KEY` with the actual values.

Now that you've created the above `.env` file, run the following command to load the environment variables in the current command line session:

```bash
source .env
```

### Step 2: Deploy the Contract

To deploy the contract to Core testnet, use the `forge create`

```bash
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Counter.sol:Counter  --broadcast
```

or use `forge script` command

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY  --broadcast
```

After running the command, Foundry will compile and deploy your contract to the specified network. It will return the deployed contract’s address.

```bash
[⠊] Compiling...
No files changed, compilation skipped
Deployer: 0x1b984521b42D3B9aCFCf37565Ab865f318b1Cd92
Deployed to: 0xc1C2466cBBa0f8E1FDb7f5E68e232190c745A6Ae
Transaction hash: 0x9ce3604ef36d526cd0cad75a23b6f4bfc9558cb8ee26caa825acf2ad914784b2
```

## 6. Verifying the Contract

Foundry has a built-in feature to automatically verify contracts on Core. You can verify your contract using the `forge verify-contract` command:

```bash
forge verify-contract 0xContract_Address Counter  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Foundry will handle the verification process,you can use[ Core Scan](https://scan.test2.btcs.network/) to search for the contract's address to verify that the contract was successfully deployed and verified.

## Further Reading

For detailed instructions on using Foundry, please visit[ Foundry's official website](https://book.getfoundry.sh/).
