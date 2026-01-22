---
sidebar_label: ERC-721 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-721 en Core Chain
---

# ERC721 Tokens

---

ERC721 es un estándar para tokens no fungibles, lo que significa que cada token es verificablemente único de todos los demás tokens y se ha convertido en el estándar dominante para las NFT en cadena. Todos los ERC721 tienen un "tokenId" único que los diferencia de todos los demás tokens del conjunto.

Un token compatible con ERC721 debe implementar todas las funciones y eventos siguientes:

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

## Mejores prácticas

Recomendamos utilizar la popular y confiable implementación ERC721 de OpenZeppelin en su proyecto. El código fuente se puede encontrar en[ERC721.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol). Puede utilizar la implementación ERC721 de OpenZeppelin en su proyecto mediante los siguientes pasos:

1\. Instale la biblioteca OpenZeppelin en su proyecto ejecutando el comando:

`npm install @openzeppelin/contracts`

2\. Una vez instalada, puede usar la implementación ERC721 en la biblioteca importándola así:

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

Para obtener más información sobre la implementación de OpenZeppelin ERC-20, lea [ERC721](https://docs.openzeppelin.com/contracts/4.x/erc721).

#### Referencias

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-721/](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
- [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
