---
sidebar_label: Tokens ERC-721
hide_table_of_contents: false
sidebar_position: 2
description: ERC-721 sur Core
---

# Tokens ERC721

---

ERC-721 est un standard pour les tokens non fongibles, ce qui signifie que chaque token est vérifiable et unique par rapport aux autres tokens, et cette norme est devenue dominante pour les NFTs (tokens non fongibles) sur la chaîne. Tous les ERC721 ont un`tokenId` unique qui les différencie de tous les autres tokens de l'ensemble.

Un token compatible ERC721 doit implémenter toutes les fonctions et événements suivants :

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

## Bonnes pratiques

Nous recommandons d'utiliser l'implémentation ERC721 populaire et fiable d'OpenZeppelin dans votre projet. Le code source peut être trouvé dans [ERC721.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol). Vous pouvez utiliser l'implémentation ERC-721 d'OpenZeppelin dans votre projet en suivant les étapes suivantes :

1\. Installez la bibliothèque OpenZeppelin dans votre projet en exécutant la commande suivante :

`npm install @openzeppelin/contracts`

2\. Une fois installée, vous pouvez utiliser l'implémentation ERC-721 de la bibliothèque en l'important comme suit :

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

Pour plus d'informations sur l'implémentation ERC-721 d'OpenZeppelin, veuillez consulter [ERC721](https://docs.openzeppelin.com/contracts/4.x/erc721).

#### Références

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-721/](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
- [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
