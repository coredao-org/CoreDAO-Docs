---
sidebar_label: Accounts
description: Endpoints related to Accounts
hide_table_of_contents: false
sidebar_position: 2
---

# Accounts

## Get CORE Balance for an Address

Returns the CORE balance of a given address.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=balance
   &address=0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="146">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the address to check for balance</td></tr><tr><td>tag</td><td>the string pre-defined block parameter, either earliest, pending or latest</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":946852160000000000,
   "message":"OK"
}
```

## Get a list of Transactions by Address

Returns the list of transactions of a given address.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=txlist
   &address=0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F
   &startblock=0
   &endblock=99999999
   &page=1
   &offset=5
   &sort=asc
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="166">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the addresses to search for transactions</td></tr><tr><td>startblock</td><td>the integer block number to start searching for transactions</td></tr><tr><td>endblock</td><td>the integer block number to stop searching for transactions</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr><tr><td>sort</td><td>the sorting preference, use asc to sort by ascending and desc to sort by descending</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"24835",
         "timeStamp":"Tue Jan 10 09:03:10 UTC 2023",
         "hash":"0xb04fd307b708e28209c1a0c6645e59ce7135a5db718762e103436bdbb821a2a3",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"0",
         "from":"0xf8b18cecc98d976ad253d38e4100a73d4e154726",
         "to":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "value":"1000000000000000000",
         "gas":"21000",
         "gasPrice":"1000000000",
         "isError":"0",
         "input":null,
         "contractAddress":null,
         "cumulativeGasUsed":"21000",
         "gasUsed":"21000",
         "confirmations":"1782285",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25884",
         "timeStamp":"Tue Jan 10 09:55:37 UTC 2023",
         "hash":"0x228fb0d8ede1ddd9c8f57b5a10674344421a9473632d9f935c0d9020b5f3d8aa",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"2",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x3fab184622dc19b6109349b94811493bf2a45362",
         "value":"10000000000000000",
         "gas":"21000",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":null,
         "contractAddress":null,
         "cumulativeGasUsed":"387533",
         "gasUsed":"21000",
         "confirmations":"1781236",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25890",
         "timeStamp":"Tue Jan 10 09:55:55 UTC 2023",
         "hash":"0xfb31ff46c2c8d822884a1409008485e555699e6b89cde417d156cb48657c0604",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"0",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x4e59b44847b379578588920ca78fbf26c0b4956c",
         "value":"0",
         "gas":"240529",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":"0x60a060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c6103526100656000398061017052506103526000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631c5fb21114610030575b600080fd5b6100de6004803603608081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561008d57600080fd5b82018360208201111561009f57600080fd5b803590602001918460018302840111640100000000831117156100c157600080fd5b9091929391929390803560ff169060200190929190505050610169565b60405180848152602001831515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561012c578082015181840152602081019050610111565b50505050905090810190601f1680156101595780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60008060607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610213576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806102e46039913960400191505060405180910390fd5b60005a9050610269898989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050885a610297565b92505a8103935060405160203d0181016040523d81523d6000602083013e8092505050955095509592505050565b60006001808111156102a557fe5b8360018111156102b157fe5b14156102ca576000808551602087018986f490506102da565b600080855160208701888a87f190505b9594505050505056fe53696d756c61746554784163636573736f722073686f756c64206f6e6c792062652063616c6c6564207669612064656c656761746563616c6ca2646970667358221220405c212754c23731ee9658f3175dafa74dea363d2619aad9d5576f5a9d4982f764736f6c63430007060033",
         "contractAddress":"0x59ad6735bcd8152b84860cb256dd9e96b85f69da",
         "cumulativeGasUsed":"237871",
         "gasUsed":"237871",
         "confirmations":"1781230",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25894",
         "timeStamp":"Tue Jan 10 09:56:07 UTC 2023",
         "hash":"0x4029958a3847b0154074a908d67d94498a415005f70ab49d6a9449f30cc067bd",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"1",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x4e59b44847b379578588920ca78fbf26c0b4956c",
         "value":"0",
         "gas":"879543",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":"0x608060405234801561001057600080fd5b50610ebe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631688f0b9146100675780632500510e1461017657806353e5d9351461024357806361b69abd146102c6578063addacc0f146103cb578063d18af54d1461044e575b600080fd5b61014a6004803603606081101561007d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100ba57600080fd5b8201836020820111156100cc57600080fd5b803590602001918460018302840111640100000000831117156100ee57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061057d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102176004803603606081101561018c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101c957600080fd5b8201836020820111156101db57600080fd5b803590602001918460018302840111640100000000831117156101fd57600080fd5b909192939192939080359060200190929190505050610624565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61024b610751565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028b578082015181840152602081019050610270565b50505050905090810190601f1680156102b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61039f600480360360408110156102dc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561031957600080fd5b82018360208201111561032b57600080fd5b8035906020019184600183028401116401000000008311171561034d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061077c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103d3610861565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104135780820151818401526020810190506103f8565b50505050905090810190601f1680156104405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105516004803603608081101561046457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156104a157600080fd5b8201836020820111156104b357600080fd5b803590602001918460018302840111640100000000831117156104d557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061088c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600061058a848484610a3b565b90506000835111156105b25760008060008551602087016000865af114156105b157600080fd5b5b7f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2358185604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a19392505050565b60006106758585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505084610a3b565b905080604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107165780820151818401526020810190506106fb565b50505050905090810190601f1680156107435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60606040518060200161076390610bde565b6020820181038252601f19601f82011660405250905090565b60008260405161078b90610bde565b808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051809103906000f0801580156107c7573d6000803e3d6000fd5b5090506000825111156107f05760008060008451602086016000865af114156107ef57600080fd5b5b7f4f51faf6c4561ff95f067657e43439f0f856d97c04d9ec9070a6199ad418e2358184604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a192915050565b60606040518060200161087390610beb565b6020820181038252601f19601f82011660405250905090565b6000808383604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060001c90506108e786868361057d565b9150600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a32578273ffffffffffffffffffffffffffffffffffffffff16631e52b518838888886040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156109ca5780820151818401526020810190506109af565b50505050905090810190601f1680156109f75780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610a1957600080fd5b505af1158015610a2d573d6000803e3d6000fd5b505050505b50949350505050565b6000808380519060200120836040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050600060405180602001610a8890610bde565b6020820181038252601f19601f820116604052508673ffffffffffffffffffffffffffffffffffffffff166040516020018083805190602001908083835b60208310610ae95780518252602082019150602081019050602083039250610ac6565b6001836020036101000a038019825116818451168082178552505050505050905001828152602001925050506040516020818303038152906040529050818151826020016000f59250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bd5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f437265617465322063616c6c206661696c65640000000000000000000000000081525060200191505060405180910390fd5b50509392505050565b6101e680610bf883390190565b60ab80610dde8339019056fe608060405234801561001057600080fd5b506040516101e63803806101e68339818101604052602081101561003357600080fd5b8101908080519060200190929190505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806101c46022913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060ab806101196000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea2646970667358221220d1429297349653a4918076d650332de1a1068c5f3e07c5c82360c277770b955264736f6c63430007060033496e76616c69642073696e676c65746f6e20616464726573732070726f7669646564608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea2646970667358221220d1429297349653a4918076d650332de1a1068c5f3e07c5c82360c277770b955264736f6c63430007060033a26469706673582212200c75fe2196b9f752c82794253f2ebce0d821afef5997e1d5a35ec316ce592f6664736f6c63430007060033",
         "contractAddress":"0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
         "cumulativeGasUsed":"909434",
         "gasUsed":"867594",
         "confirmations":"1781226",
         "txreceipt_status":"1"
      },
      {
         "blockNumber":"25898",
         "timeStamp":"Tue Jan 10 09:56:19 UTC 2023",
         "hash":"0x613d118e446e35b41c8c9a80808124eed401d0ec47aa0841b2d2181e1da4d044",
         "nonce":null,
         "blockHash":null,
         "transactionIndex":"0",
         "from":"0x7731f51a600afa5d57f09fe1dbeb13a13a32674f",
         "to":"0x4e59b44847b379578588920ca78fbf26c0b4956c",
         "value":"0",
         "gas":"549639",
         "gasPrice":"2000000000",
         "isError":"0",
         "input":"0x608060405234801561001057600080fd5b506108dd806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063a3f4df7e1161005b578063a3f4df7e14610312578063bc197c8114610395578063f23a6e611461052b578063ffa1ad741461062b5761007c565b806223de291461008157806301ffc9a7146101b9578063150b7a021461021c575b600080fd5b6101b7600480360360c081101561009757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561011e57600080fd5b82018360208201111561013057600080fd5b8035906020019184600183028401116401000000008311171561015257600080fd5b90919293919293908035906020019064010000000081111561017357600080fd5b82018360208201111561018557600080fd5b803590602001918460018302840111640100000000831117156101a757600080fd5b90919293919293905050506106ae565b005b610204600480360360208110156101cf57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506106b8565b60405180821515815260200191505060405180910390f35b6102dd6004803603608081101561023257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460018302840111640100000000831117156102cd57600080fd5b90919293919293905050506107f2565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61031a610807565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035a57808201518184015260208101905061033f565b50505050905090810190601f1680156103875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104f6600480360360a08110156103ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561040857600080fd5b82018360208201111561041a57600080fd5b8035906020019184602083028401116401000000008311171561043c57600080fd5b90919293919293908035906020019064010000000081111561045d57600080fd5b82018360208201111561046f57600080fd5b8035906020019184602083028401116401000000008311171561049157600080fd5b9091929391929390803590602001906401000000008111156104b257600080fd5b8201836020820111156104c457600080fd5b803590602001918460018302840111640100000000831117156104e657600080fd5b9091929391929390505050610840565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6105f6600480360360a081101561054157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156105b257600080fd5b8201836020820111156105c457600080fd5b803590602001918460018302840111640100000000831117156105e657600080fd5b9091929391929390505050610858565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61063361086e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610673578082015181840152602081019050610658565b50505050905090810190601f1680156106a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5050505050505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061078357507f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107eb57507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600063150b7a0260e01b905095945050505050565b6040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b600063bc197c8160e01b905098975050505050505050565b600063f23a6e6160e01b90509695505050505050565b6040518060400160405280600581526020017f312e302e300000000000000000000000000000000000000000000000000000008152508156fea26469706673582212200bbabd2b02039e0c6d17ac82e70232971fd892df99a0509daa50ef3d6edad0bc64736f6c63430007060033",
         "contractAddress":"0x1ac114c2099afaf5261731655dc6c306bfcd4dbd",
         "cumulativeGasUsed":"542473",
         "gasUsed":"542473",
         "confirmations":"1781222",
         "txreceipt_status":"1"
      }
   ],
   "message":"OK"
}
```

## Get a list of 'Internal' Transactions by Address

Returns the list of internal transactions performed by an address, with optional pagination.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=txlistinternal
   &address=0x7731f51A600afa5d57F09Fe1dbEb13A13A32674F
   &startblock=0
   &endblock=99999999
   &page=1
   &offset=5
   &sort=asc
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="147">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the addresses to search for internal transactions</td></tr><tr><td>startblock</td><td>the integer block number to start searching for transactions</td></tr><tr><td>endblock</td><td>the integer block number to stop searching for transactions</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr><tr><td>sort</td><td>the sorting preference, use asc to sort by ascending and desc to sort by descending</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"918282",
         "timeStamp":"Fri Feb 10 10:57:58 UTC 2023",
         "hash":"0x047d0dbb43cb39f721ee6872b93447b31b70def845c2dd42138fb556775e314c",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4888476",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918410",
         "timeStamp":"Fri Feb 10 11:04:22 UTC 2023",
         "hash":"0x73042039415254a3f4a9d9c1fbf56af3fd3df9ff99ccf3cea02f0936d43e9caa",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4890244",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918562",
         "timeStamp":"Fri Feb 10 11:11:58 UTC 2023",
         "hash":"0x82a553ff3c2e9e0ac7ade6cccaa1f0d36f146c750de3849ab9b30dc146e2ef5a",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"952240",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918562",
         "timeStamp":"Fri Feb 10 11:11:58 UTC 2023",
         "hash":"0xc2683488978b58dde9ca08a2cfe0d5e4fe04155783d0664fc8df2239fda414bc",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"4889740",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"918825",
         "timeStamp":"Fri Feb 10 11:25:07 UTC 2023",
         "hash":"0x66acaa932740c3265b53c396ce61b3ff2ce3bb2e8b7fefcdd90f7c69ae76c204",
         "from":"0x0000000000000000000000000000000000001003",
         "to":"0x0000000000000000000000000000000000001004",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"951736",
         "gasUsed":"1236",
         "traceId":null,
         "isError":null,
         "errCode":null
      }
   ],
   "message":"OK"
}
```

## Get 'Internal' Transactions by Transaction Hash

Returns the list of internal transactions performed within a transaction.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=txlistinternal
   &txhash=0x2fb68017c83b3b0b93c88f9eb5208898b148323e7cc80ed04ac726fe497b15c3
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="170">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>txhash</td><td>the string representing the transaction hash to search for internal transactions</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x40c1aee85fb22c762f409959d28153a1eb013bd9",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"1210663",
         "gasUsed":"445541",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x71b6501598f82926560df1ae7a05325749184e3e",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"950369",
         "gasUsed":"72478",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0x53f0239f4f6675af62c38084cc7679b6e27046190545f1ff5f7a62cf69698399",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0xfee8f527e3909b3f16cbda437da6876deea132ca",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"72272",
         "gasUsed":"57333",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0x77be944a83c846ab23ba55b0df833f7e2057d30b06a7fe55b7e136561d7a666b",
         "from":"0xd04e7d9cb10a03312bb640980fd965dc4681dd5a",
         "to":"0x5ebae3a840ff34b107d637c8ed07c3d1d2017178",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"3698181",
         "gasUsed":"40961",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x81bcea03678d1cef4830942227720d542aa15817",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"961571",
         "gasUsed":"1283",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0x71b6501598f82926560df1ae7a05325749184e3e",
         "to":"0x40c1aee85fb22c762f409959d28153a1eb013bd9",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"893507",
         "gasUsed":"1397",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x71b6501598f82926560df1ae7a05325749184e3e",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"834127",
         "gasUsed":"1217",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0x5ebae3a840ff34b107d637c8ed07c3d1d2017178",
         "to":"0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"693711",
         "gasUsed":"30327",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xfb8134d597f3dbbaf86e35bac22ebdb770e85f358cec94b7c87bb07072975c6c",
         "from":"0x5ebae3a840ff34b107d637c8ed07c3d1d2017178",
         "to":"0x81bcea03678d1cef4830942227720d542aa15817",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"STATICCALL",
         "gas":"659201",
         "gasUsed":"1283",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971039",
         "timeStamp":"Sun Feb 12 06:55:49 UTC 2023",
         "hash":"0xe7434484c6f739449006e5930c5bcadfb2be6ca3fcd81436b1d9d3d15d1dd530",
         "from":"0x0000000000000000000000000000000000001007",
         "to":"0x04e634ab1fa68da22b5f15aa30e8a58c3358e982",
         "value":"699560324559074167",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"47443",
         "gasUsed":"0",
         "traceId":null,
         "isError":null,
         "errCode":null
      }
   ],
   "message":"OK"
}
```

## Get 'Internal' Transactions by Block Range

Returns the list of internal transactions performed within a block range, with optional pagination.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=txlistinternal
   &startblock=0
   &endblock=2702578
   &page=1
   &offset=5
   &sort=asc
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="185">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>startblock</td><td>the integer block number to start searching for transactions</td></tr><tr><td>endblock</td><td>the integer block number to stop searching for transactions</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr><tr><td>sort</td><td>the sorting preference, use asc to sort by ascending and desc to sort by descending</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"971087",
         "timeStamp":"Sun Feb 12 06:58:13 UTC 2023",
         "hash":"0xff1d8fc906a7285d4d0ec65873a8b3b399de144cfbd8cc2a05e14e6c35ff134e",
         "from":"0xed291d99922c13cd0225c18628a7fde15a8eb017",
         "to":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"1376857",
         "gasUsed":"178922",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971087",
         "timeStamp":"Sun Feb 12 06:58:13 UTC 2023",
         "hash":"0xff1d8fc906a7285d4d0ec65873a8b3b399de144cfbd8cc2a05e14e6c35ff134e",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"1198881",
         "gasUsed":"12048",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971087",
         "timeStamp":"Sun Feb 12 06:58:13 UTC 2023",
         "hash":"0xff1d8fc906a7285d4d0ec65873a8b3b399de144cfbd8cc2a05e14e6c35ff134e",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0x5ebae3a840ff34b107d637c8ed07c3d1d2017178",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"860758",
         "gasUsed":"72333",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971087",
         "timeStamp":"Sun Feb 12 06:58:13 UTC 2023",
         "hash":"0xff1d8fc906a7285d4d0ec65873a8b3b399de144cfbd8cc2a05e14e6c35ff134e",
         "from":"0xbb5e1777a331ed93e07cf043363e48d320eb96c4",
         "to":"0xed291d99922c13cd0225c18628a7fde15a8eb017",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"706367",
         "gasUsed":"55900",
         "traceId":null,
         "isError":null,
         "errCode":null
      },
      {
         "blockNumber":"971087",
         "timeStamp":"Sun Feb 12 06:58:13 UTC 2023",
         "hash":"0xe694262c3f274812e3833385a725efcdb60dd90d3f09f188dbd908b06ea12a9a",
         "from":"0xd04e7d9cb10a03312bb640980fd965dc4681dd5a",
         "to":"0xfee8f527e3909b3f16cbda437da6876deea132ca",
         "value":"0",
         "contractAddress":null,
         "input":"",
         "type":"CALL",
         "gas":"3748040",
         "gasUsed":"45152",
         "traceId":null,
         "isError":null,
         "errCode":null
      }
   ],
   "message":"OK"
}
```

## Get a list of 'ERC-20 Token Transfer Events' by Address

Returns the list of ERC-20 tokens transferred by an address, with optional filtering by token contract.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=tokentx
   &contractaddress=0xF7a0b80681eC935d6dd9f3Af9826E68B99897d6D
   &address=0xcF17abb2CeA7e96eD1E35E0F3FAC919cFECad2F3
   &page=1
   &offset=5
   &startblock=0
   &endblock=999999999
   &sort=asc
   &apikey=YourApiKeyToken
```

Usage:

- ERC-20 transfers from an address, specify the address parameter
- ERC-20 transfers from a contract address, specify the contract address parameter
- ERC-20 transfers from an address filtered by a token contract, specify both address and contract address parameters.

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="196">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the address to search for ERC-20 transfers</td></tr><tr><td>contractaddress</td><td>the string representing the token contract address to search for ERC-20 transfers</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr><tr><td>startblock</td><td>the integer block number to start searching for transactions</td></tr><tr><td>endblock</td><td>the integer block number to stop searching for transactions</td></tr><tr><td>sort</td><td>the sorting preference, use asc to sort by ascending and desc to sort by descending</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"1774377",
         "blockHash":"0x5253e6b04e7780f3b5b002942169c4170193e39db0b9e156e65b68cbc09d6217",
         "timeStamp":"Sun Mar 12 05:08:35 UTC 2023",
         "hash":"0xae4a5493c9a2c1f7d09655891784c74f54348f21270e8a05ed3f5c9362e81342",
         "from":"0xcf17abb2cea7e96ed1e35e0f3fac919cfecad2f3",
         "to":"0x024c3e76fcb39cf8d48ffd274139971c3946615f",
         "value":"0",
         "contractAddress":"f7a0b80681ec935d6dd9f3af9826e68b99897d6d",
         "input":null,
         "type":null,
         "gas":"500000",
         "gasUsed":"111923",
         "gasPrice":"1000000000",
         "traceId":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"37",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1774453",
         "blockHash":"0x9b39facfa923e61cabd4eba31bffee1dc26f5dc8dfbef0feb162f8d54a13f0bc",
         "timeStamp":"Sun Mar 12 05:12:23 UTC 2023",
         "hash":"0x17388f41c86b737e5a01e2f43fdd1552bc2a8e211661f27a557d1aab785d05d9",
         "from":"0xcf17abb2cea7e96ed1e35e0f3fac919cfecad2f3",
         "to":"0x998cf41c39cb6266c808109a759148b834d7b6b3",
         "value":"0",
         "contractAddress":"f7a0b80681ec935d6dd9f3af9826e68b99897d6d",
         "input":null,
         "type":null,
         "gas":"500000",
         "gasUsed":"134461",
         "gasPrice":"1000000000",
         "traceId":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"29",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1774453",
         "blockHash":"0x9b39facfa923e61cabd4eba31bffee1dc26f5dc8dfbef0feb162f8d54a13f0bc",
         "timeStamp":"Sun Mar 12 05:12:23 UTC 2023",
         "hash":"0x17388f41c86b737e5a01e2f43fdd1552bc2a8e211661f27a557d1aab785d05d9",
         "from":"0xcf17abb2cea7e96ed1e35e0f3fac919cfecad2f3",
         "to":"0x000000000000000000000000000000000000dead",
         "value":"0",
         "contractAddress":"f7a0b80681ec935d6dd9f3af9826e68b99897d6d",
         "input":null,
         "type":null,
         "gas":"500000",
         "gasUsed":"134461",
         "gasPrice":"1000000000",
         "traceId":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"30",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1774501",
         "blockHash":"0x92e96efe820106f39c1f06a82c1dd98166e40c1f12f91c0fa0f0f294ccfd5ceb",
         "timeStamp":"Sun Mar 12 05:14:47 UTC 2023",
         "hash":"0x07793d1d1cac8da3a578e95a6abaed7ec12daaf8f3a69a0ca41b21eae2f35b3a",
         "from":"0xcf17abb2cea7e96ed1e35e0f3fac919cfecad2f3",
         "to":"0x000000000000000000000000000000000000dead",
         "value":"0",
         "contractAddress":"f7a0b80681ec935d6dd9f3af9826e68b99897d6d",
         "input":null,
         "type":null,
         "gas":"500000",
         "gasUsed":"96923",
         "gasPrice":"1000000000",
         "traceId":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"15",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1774648",
         "blockHash":"0x70e0d2edd90e027a44154d53accd69f757d56a86cb09acf57878e9a2f2dffb79",
         "timeStamp":"Sun Mar 12 05:22:08 UTC 2023",
         "hash":"0xc4c4a4e1a02379cb0975cd836bc627a58370758d619a6646c0d85c09a2b9cd04",
         "from":"0xcf17abb2cea7e96ed1e35e0f3fac919cfecad2f3",
         "to":"0x1d2c474ddba082ac8991b3922cdfcaa6daaad6dd",
         "value":"0",
         "contractAddress":"f7a0b80681ec935d6dd9f3af9826e68b99897d6d",
         "input":null,
         "type":null,
         "gas":"500000",
         "gasUsed":"111923",
         "gasPrice":"1000000000",
         "traceId":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"19",
         "cumulativeGasUsed":null,
         "confirmations":null
      }
   ],
   "message":"OK"
}
```

## Get a list of 'ERC-721 Token Transfer Events' by Address

Returns the list of ERC-721 (NFT) tokens transferred by an address, with optional filtering by token contract.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=tokennfttx
   &contractaddress=0x75eB562081dE66B982Df285Ac3922E143936D718
   &address=0x704614399D7889AC60dD713319B664dB8c1c026a
   &page=1
   &offset=5
   &startblock=0
   &endblock=999999999
   &sort=asc
   &apikey=YourApiKeyToken
```

Usage:

- ERC-721 transfers from an address, specify the address parameter
- ERC-721 transfers from a contract address, specify the contract address parameter
- ERC-721 transfers from an address filtered by a token contract, specify both address and contract address parameters.

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="192">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the address to search for ERC-721 transfers</td></tr><tr><td>contractaddress</td><td>the string representing the token contract address to search for ERC-721 transfers</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr><tr><td>startblock</td><td>the integer block number to start searching for transactions</td></tr><tr><td>endblock</td><td>the integer block number to stop searching for transactions</td></tr><tr><td>sort</td><td>the sorting preference, use asc to sort by ascending and desc to sort by descending</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"1411509",
         "blockHash":"0x0dd492b7cbb989535c4a2bbd1dd24f1e93c6c33a5396483fc70394db0fb8e6e2",
         "timeStamp":"Mon Feb 27 14:27:39 UTC 2023",
         "hash":"0x474211ca4cd0da5db64e87e9f8488ecc5b5a3814cdb6423f7166622dc77f2cdb",
         "from":"0x0000000000000000000000000000000000000000",
         "to":"0x704614399d7889ac60dd713319b664db8c1c026a",
         "value":null,
         "contractAddress":"75eb562081de66b982df285ac3922e143936d718",
         "input":null,
         "type":null,
         "gas":"425843",
         "gasUsed":"353243",
         "gasPrice":"1000000000",
         "tokenID":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"37",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1411563",
         "blockHash":"0xc462a2cbbd86939d7c5518342110ec7f651e0e267469b82c04dfe2ecf2937932",
         "timeStamp":"Mon Feb 27 14:30:21 UTC 2023",
         "hash":"0x71ff26be4f3ad6ec0531047c674ceedc840490d0f599c05d27c1d01d8ad94282",
         "from":"0x704614399d7889ac60dd713319b664db8c1c026a",
         "to":"0x9826a59aa17c36e88aa2f6dc367772381f034401",
         "value":null,
         "contractAddress":"75eb562081de66b982df285ac3922e143936d718",
         "input":null,
         "type":null,
         "gas":"418419",
         "gasUsed":"345819",
         "gasPrice":"1000000000",
         "tokenID":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"79",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1411610",
         "blockHash":"0xc9f57c61585c787dfc70ec173c9b80937f58698e8ccf3dcc2057a4d90f682026",
         "timeStamp":"Mon Feb 27 14:32:42 UTC 2023",
         "hash":"0x405792d28361ec579fff2da7dc986fe6c67810cbab4f6e286f7c4be6cc7856d5",
         "from":"0x0000000000000000000000000000000000000000",
         "to":"0x704614399d7889ac60dd713319b664db8c1c026a",
         "value":null,
         "contractAddress":"75eb562081de66b982df285ac3922e143936d718",
         "input":null,
         "type":null,
         "gas":"422131",
         "gasUsed":"349531",
         "gasPrice":"1000000000",
         "tokenID":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"23",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1411686",
         "blockHash":"0x543a500f78e8be81cd8c793ffe18bf078e0f19985531387d7dcff8169520f86f",
         "timeStamp":"Mon Feb 27 14:36:30 UTC 2023",
         "hash":"0x8c16253cf69cdc66263e35942dab698f695d621bb7acf197f9ad7e7bec4a6550",
         "from":"0x704614399d7889ac60dd713319b664db8c1c026a",
         "to":"0x9826a59aa17c36e88aa2f6dc367772381f034401",
         "value":null,
         "contractAddress":"75eb562081de66b982df285ac3922e143936d718",
         "input":null,
         "type":null,
         "gas":"420275",
         "gasUsed":"347675",
         "gasPrice":"1000000000",
         "tokenID":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"50",
         "cumulativeGasUsed":null,
         "confirmations":null
      },
      {
         "blockNumber":"1413547",
         "blockHash":"0x5dc63e8c3ca774a793bd7d69ef86501e729e0d769bca8ebe1ed250606c94f587",
         "timeStamp":"Mon Feb 27 16:09:33 UTC 2023",
         "hash":"0xe89bd626f0291664ff5f39c2d05bd66d3c61c7387b47d0f02ed12457648689b7",
         "from":"0x704614399d7889ac60dd713319b664db8c1c026a",
         "to":"0x9826a59aa17c36e88aa2f6dc367772381f034401",
         "value":null,
         "contractAddress":"75eb562081de66b982df285ac3922e143936d718",
         "input":null,
         "type":null,
         "gas":"429494",
         "gasUsed":"371894",
         "gasPrice":"1000000000",
         "tokenID":null,
         "isError":null,
         "errCode":null,
         "nonce":"0",
         "tokenName":null,
         "tokenSymbol":null,
         "tokenDecimal":"18",
         "transactionIndex":"18",
         "cumulativeGasUsed":null,
         "confirmations":null
      }
   ],
   "message":"OK"
}
```

## Get list of Blocks Validated by Address

Returns the list of blocks validated by an address.

```bash
https://openapi.coredao.org/api
   ?module=account
   &action=getminedblocks
   &address=0x258f1d17e3DC298C0276C824238422ddeAcA1619
   &blocktype=blocks
   &page=1
   &offset=5
   &apikey=YourApiKeyToken
```

> Try this endpoint in your  🔗

Request Query Parameters

<table><thead><tr><th width="181">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>the string representing the address to search for validated blocks</td></tr><tr><td>blocktype</td><td>the string pre-defined block type, blocks for canonical blocks</td></tr><tr><td>page</td><td>the integer page number, if pagination is enabled</td></tr><tr><td>offset</td><td>the number of transactions displayed per page</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "blockNumber":"2063526",
         "timeStamp":"Wed Mar 22 06:37:31 UTC 2023",
         "blockReward":"3002954102982000000.0"
      },
      {
         "blockNumber":"2063505",
         "timeStamp":"Wed Mar 22 06:36:28 UTC 2023",
         "blockReward":"3002792212717400000.0"
      },
      {
         "blockNumber":"2063484",
         "timeStamp":"Wed Mar 22 06:35:25 UTC 2023",
         "blockReward":"3002036306979800000.0"
      },
      {
         "blockNumber":"2063463",
         "timeStamp":"Wed Mar 22 06:34:22 UTC 2023",
         "blockReward":"3002922554909800000.0"
      },
      {
         "blockNumber":"2063442",
         "timeStamp":"Wed Mar 22 06:33:19 UTC 2023",
         "blockReward":"3002268766959600000.0"
      }
   ],
   "message":"OK"
}
```
