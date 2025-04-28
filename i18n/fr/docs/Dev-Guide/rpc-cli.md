---
sidebar_label: Connexion via CLI
hide_table_of_contents: false
sidebar_position: 2
description: Apprenez à vous connecter à Core RPC à l'aide de la CLI
---

# RPC Core via la ligne de commande

---

Les blockchains génèrent des quantités massives de données, telles que les volumes de transactions et la propriété des actifs, qui sont précieuses pour les dApps dans l'ensemble de l'écosystème. Cependant, l’accès à ces données et leur utilisation nécessitent souvent une expertise technique importante.

## Qu'est-ce qu'un appel de procédure à distance (RPC) ?

Les appels de procédure à distance (RPC) aident à résoudre ce problème en permettant la communication entre les réseaux blockchain et les utilisateurs, les applications ou les entreprises. Au lieu de configurer un nœud personnalisé complet ou un programme complexe pour extraire des données, les RPC permettent aux développeurs de collecter les informations nécessaires en accédant simplement au point de terminaison fourni.

Considérez un RPC comme l’inverse d’un oracle. Alors qu'un oracle apporte des données externes (par exemple, les résultats des élections ou les prévisions météorologiques) dans la blockchain, un RPC extrait des données internes de la blockchain (par exemple, des informations sur les transactions ou les blocs) et les déplace vers l'extérieur.

## Fournisseurs RPC pour la connexion Core Network Mainnet

Core prend en charge différents [fournisseurs de RPC](https://chainlist.org/chain/1116) — à la fois le RPC natif de Core et des fournisseurs de RPC tiers. Consultez la liste complète des points de terminaison RPC [ici](./rpc-list.md) pour vous connecter au mainnet ou au testnet de Core.

## Utilisation des RPCs via la ligne de commande

Pour se connecter aux points de terminaison Core RPC via la ligne de commande, nous pouvons utiliser « cURL » (URL client). Cet outil permet aux développeurs de récupérer des données directement à partir de serveurs distants. La commande « cURL » la plus simple récupère le code HTML d'une page Web en transmettant une URL.

Voici un exemple :

```bash
curl https://coredao.org/
```

To fetch information about a specific transaction on the Core blockchain, use the following `cURL` command, replacing the transaction hash with your desired value:

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

In the above statement, following are the components of the curl statement:

- **curl**: The command to execute the request.
- **-H**: Specifies the header, in this case, setting the content type to JSON.
- **-X POST**: Defines the HTTP method to use (`POST`).
- **--data**: The request body, including the `method`, `parameters`, and `request ID`.
- **--url**: The endpoint `URL` to which the request is sent.

As explained earlier, CURL is a method for sending API requests, which contain an endpoint (i.e. the URL from which the information is being retrieved) and an HTTP method. In our case, the URL comes at the end after the _`--url`_ option; you can swap in any of the valid RPC URLs found [here](https://chainlist.org/chain/1116) for connecting to Core Mainnet, just don't forget to wrap the URL in single quotes (''). In the figure below, any of the URLs in the red box will work.

<p align="center">
![rpc-list](../../static/img/rpc/rpc-1.png)
</p>

### Sample Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xb1cbf38843207e6133b69b53559c22c61463208cc2a822a92ba18e30da3054ba",
    "blockNumber": "0x972743",
    "from": "0x7ef3a94ad1c443481fb3d86829355ca90477f8b5",
    "gas": "0x7a120",
    "gasPrice": "0x0",
    "hash": "0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7",
    "input": "0xf340fa010000000000000000000000007ef3a94ad1c443481fb3d86829355ca90477f8b5",
    "nonce": "0x74622",
    "to": "0x0000000000000000000000000000000000001000",
    "transactionIndex": "0x4",
    "value": "0x2d01fcfa9da000",
    "type": "0x0",
    "v": "0x8dc",
    "r": "0x15c80da30b54e61f383f38f2033f71ef4201a39ff4e799dadf13937dde88b1a0",
    "s": "0xd63214598ae5cd8da665517e60d8471f1b4c591711247d0f94958ec0add4ba9"
  }
}
```

## Using cURL in a Python Workflow

If you prefer working in an IDE rather than the command line, you can replicate the cURL command using Python’s `requests` library. Here's how:

```python
import requests

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}'

response = requests.post('https://rpc.ankr.com/core', headers=headers, data=data)
print(response.content)
```

:::note
You can replace the URL (`https://rpc.ankr.com/core`) with any valid RPC URL found in the Core documentation, and don't forget to wrap the URL in single quotes.
:::
