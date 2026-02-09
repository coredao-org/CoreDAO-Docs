---
sidebar_label: Tokens ERC-20
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 sur Core
---

# Tokens ERC20

---

ERC-20 est actuellement la méthode dominante pour implémenter des tokens fongibles basés sur la blockchain. Chaque token ERC20 est basé sur l'interface originale du token ERC20, ce qui signifie qu'ils partagent tous un ensemble commun de fonctions, y compris (mais sans s'y limiter) :

- Transférer des tokens d'un compte à un autre ;
- Obtenir le solde actuel d'un compte en token ;
- Obtenir l'offre totale de tokens disponibles sur le réseau ;
- Approuver un montant de tokens pour être dépensé par un compte tiers ;

Pour être compatible avec ERC-20, un token doit implémenter toutes les fonctions et événements suivants :

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

## Bonnes pratiques

ERC-20 est un standard simple et sécurisé. Cependant, il est important d'être prudent lors de son implémentation ; de nombreux tokens ERC-20 ont été exploités au fil des années en raison de l'inclusion de code additionnel défectueux.

Pour plus de sécurité, nous recommandons d'utiliser l'implémentation ERC-20 d'OpenZeppelin pour votre projet. Le code source est disponible dans le fichier [ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol). Voici les étapes à suivre :

1\. Installez les contrats intelligents OpenZeppelin dans votre projet en exécutant la commande suivante :

`npm install @openzeppelin/contracts`

2\. Ensuite, vous pouvez importer les contrats de la bibliothèque avec le code suivant:

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

Vous trouverez plus d'informations sur l'implémentation ERC-20 d'OpenZeppelin [ici](https://docs.openzeppelin.com/contracts/4.x/erc20).

#### Références

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-20/](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [https://docs.openzeppelin.com/contracts/4.x/erc20](https://docs.openzeppelin.com/contracts/4.x/erc20)
