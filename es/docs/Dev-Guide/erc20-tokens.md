---
sidebar_label: ERC-20 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 en Core Chain
---

# ERC20 Tokens

---

ERC20 es actualmente el enfoque dominante para implementar tokens fungibles basados ​​en blockchain. Cada token ERC20 se basa en la interfaz del token ERC20 original, lo que significa que todos comparten un conjunto común de funciones, que incluyen (entre otras):

- Transferir tokens de una cuenta a otra;
- Obtener el saldo actual de tokens de una cuenta;
- Obtener el suministro total del token disponible en la red;
- Aprobar una cantidad de tokens para ser gastados por una cuenta de terceros;

Para ser compatible con ERC-20, un token debe implementar todas las funciones y eventos siguientes:

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

## Mejores prácticas

ERC20 es un estándar simple y seguro. Pero debemos tener cuidado en nuestra implementación; Muchos tokens ERC20 han sido explotados a lo largo de los años debido a la inclusión de código adicional con errores.

Por motivos de seguridad, recomendamos utilizar la implementación OpenZeppelin ERC20 para su proyecto, cuyo código fuente se puede encontrar en[ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts /token/ERC20/ERC20.sol). Puedes hacer esto con los siguientes pasos:

1\. Instale los contratos inteligentes de OpenZeppelin en su proyecto ejecutando el siguiente comando:

`npm install @openzeppelin/contracts`

`npm install @openzeppelin/contracts`. Luego, puedes importar los contratos en la biblioteca con esto:

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

Puede encontrar más información sobre la implementación de OpenZeppelin ERC-20 [aquí](https://docs.openzeppelin.com/contracts/4.x/erc20).

#### Referencias

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-20/](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [https://docs.openzeppelin.com/contracts/4.x/erc20](https://docs.openzeppelin.com/contracts/4.x/erc20)
