---
sidebar_label: ERC-20 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 on Core
---

# ERC20 Tokens
---

ERC20 is currently the dominant approach to implementing fungible, blockchain-based tokens. Each ERC20 token is based on the original ERC20 token interface, meaning that they all share a common set of functions, including (but not limited to):

* Transferring tokens from one account to another;
* Getting the current token balance of an account;
* Getting the total supply of the token available on the network;
* Approving an amount of tokens to be spent by a third-party account;

In order to be ERC-20 compatible, a token must implement all the following functions and events:

```javascript
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

```javascript
event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```

## Best Practices

ERC20 is a simple, secure standard. But we must be careful in our implementation; many ERC20 tokens have been exploited over the years due to the inclusion of additional, buggy code.

For safety and security, we recommend using the OpenZeppelin ERC20 implementation for your project, the source code for which can be found at[ ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol). You can do this with the following steps:

1\. Install OpenZeppelin smart contracts in your project by running the following command:

`npm install @openzeppelin/contracts`

2\. Then, you can import the contracts in the library with this:

```javascript
// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }
}
```

You can find more information on OpenZeppelin ERC-20 implementation [here](https://docs.openzeppelin.com/contracts/4.x/erc20).

#### References

* [https://ethereum.org/en/developers/docs/standards/tokens/erc-20/](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
* [https://docs.openzeppelin.com/contracts/4.x/erc20](https://docs.openzeppelin.com/contracts/4.x/erc20)
