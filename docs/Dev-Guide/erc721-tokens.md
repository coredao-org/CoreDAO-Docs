---
sidebar_label: ERC-721 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-721 on Core Chain
---

# ERC721 Tokens
---

ERC721 is a standard for non-fungible tokens, meaning that each token is verifiably unique from all other tokens, and has become the dominant standard for on-chain NFTs. All ERC721s have a unique `tokenId` that differentiates them from every other token in the set.

An ERC721-compatible token must implement all the following functions and events:

```javascript
    function balanceOf(address _owner) external view returns (uint256);
    function ownerOf(uint256 _tokenId) external view returns (address);
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
    function approve(address _approved, uint256 _tokenId) external payable;
    function setApprovalForAll(address _operator, bool _approved) external;
    function getApproved(uint256 _tokenId) external view returns (address);
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
```

```javascript
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
```

## Best Practices

We recommend using OpenZeppelin's popular and trusted ERC721 implementation in your project. The source code can be found at[ ERC721.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol). You can use OpenZeppelin's ERC721 implementation in your project through the following steps:

1\. Install the OpenZeppelin library in your project by running the command:

`npm install @openzeppelin/contracts`

2\. Once installed, you can use the ERC721 implementation in the library by importing it like this:

```javascript
// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GameItem is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}
```

For more information on OpenZeppelin ERC-20 implementation, please read[ ERC721](https://docs.openzeppelin.com/contracts/4.x/erc721).

#### References

* [https://ethereum.org/en/developers/docs/standards/tokens/erc-721/](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
* [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
