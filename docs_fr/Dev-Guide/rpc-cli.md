---
sidebar_label: Utiliser Core RPC avec la CLI
hide_table_of_contents: false
sidebar_position: 2
---

# RPC Core via la ligne de commande

---

Les blockchains produisent une énorme quantité d’informations relatives à des sujets tels que le volume des transactions et la propriété des actifs, dont une grande partie est utile aux dApps dans le reste de l’écosystème. Cependant, accéder à ces données et les exploiter peut nécessiter des compétences techniques approfondies.

## Qu'est-ce qu'un appel de procédure à distance (RPC) ?

Les appels de procédure à distance (RPCs) sont une solution à ce problème. Les RPCs sont des logiciels qui facilitent la communication entre un réseau blockchain et les utilisateurs, entreprises ou applications. Au lieu d’avoir besoin d’exécuter un nœud personnalisé complet ou de configurer un programme complexe pour extraire des données, les informations pertinentes peuvent être obtenues simplement en accédant au point de terminaison fourni par le RPC.

Pour simplifier, vous pouvez voir un RPC comme étant essentiellement l’opposé d’un oracle. Le [but d’un oracle](https://cointelegraph.com/learn/what-is-a-blockchain-oracle-and-how-does-it-work) est de prendre des données externes (comme les résultats d’une élection ou les prévisions météorologiques) et de les transférer vers une blockchain, tandis que le but d’un RPC est de prendre des données internes (comme des informations liées aux transactions et aux blocs) et de les transférer hors de la blockchain.

## Quels fournisseurs de RPC puis-je utiliser pour me connecter au Mainnet du réseau Core ?

La Core Chain prend en charge différents [fournisseurs de RPC](https://chainlist.org/chain/1116) — à la fois le RPC natif de Core et des fournisseurs de RPC tiers. Consultez la liste complète des points de terminaison RPC [ici](./rpc-list.md) pour vous connecter au mainnet ou au testnet de Core.

## Utilisation des RPCs via la ligne de commande

Nous pouvons utiliser CURL pour se connecter aux points de terminaison RPC de CORE via la CLI. `CURL`, également écrit `cURL`, signifie `client URL`. Pour l'essentiel, il s'agit un outil CLI qui permet aux développeurs de récupérer des données directement depuis un serveur distant. La commande CURL la plus simple consiste à récupérer le code HTML d’une page web en passant une URL. Vous pouvez l’essayer maintenant en exécutant cette commande dans votre CLI préférée :

```bash
    curl https://coredao.org/
```

La commande ci-dessous illustre comment CURL peut être utilisé pour obtenir des informations relatives à une transaction spécifique sur la Core Chain en passant le hash de la transaction et quelques autres paramètres.

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

Dans cette commande, les composants du relevé de `curl` sont les suivants :

- `curl`: puisque nous utilisons CURL, nous devons le préfixer avec le nom de la commande.
- `-H`: c’est un en-tête contenant des informations sur le contenu de la requête, etc.
- `-X`: c’est là que nous spécifions quel type de commande HTTP nous utilisons, qui dans notre cas est `POST`.
- `--data`: c’est là que nous passons la méthode, ses paramètres, l’identifiant, etc., à la requête.
- `--url`: c’est l’URL vers laquelle nous voulons diriger la requête.

Comme expliqué précédemment, CURL est une méthode pour envoyer des requêtes API, qui contiennent un point de terminaison (c’est-à-dire l’URL à partir de laquelle les informations sont récupérées) et une méthode HTTP. Dans notre cas, l’URL apparaît à la fin après l’option_` --url`_; vous pouvez remplacer cette URL par n’importe quelle URL RPC valide trouvée [ici](https://chainlist.org/chain/1116) pour vous connecter au Mainnet de Core, n’oubliez simplement pas de mettre l’URL entre des guillemets simples ("). Dans la figure ci-dessous, n'importe quelle des URL figurant dans l'encadré rouge fonctionnera.

![rpc-list](../../static/img/rpc/rpc-1.png)

Voici un exemple de réponse retournée par la commande CURL :

```javascript
{
    "jsonrpc":"2.0",
    "id":1,
    "result":
        {
            "blockHash":"0xb1cbf38843207e6133b69b53559c22c61463208cc2a822a92ba18e30da3054ba",
            "blockNumber":"0x972743",
            "from":"0x7ef3a94ad1c443481fb3d86829355ca90477f8b5",
            "gas":"0x7a120",
            "gasPrice":"0x0",
            "hash":"0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7",
            "input":"0xf340fa010000000000000000000000007ef3a94ad1c443481fb3d86829355ca90477f8b5",
            "nonce":"0x74622",
            "to":"0x0000000000000000000000000000000000001000",
            "transactionIndex":"0x4",
            "value":"0x2d01fcfa9da000",
            "type":"0x0",
            "v":"0x8dc",
            "r":"0x15c80da30b54e61f383f38f2033f71ef4201a39ff4e799dadf13937dde88b1a0",
            "s":"0xd63214598ae5cd8da665517e60d8471f1b4c591711247d0f94958ec0add4ba9"
        }
 }
```

## Intégration de CURL dans un Workflow Python

Bien que passer toute la journée dans le Terminal puisse être amusant, il est probable que vous souhaitiez passer à un IDE pour construire quelque chose de plus complexe.

En Python, toute cette commande peut être reproduite en utilisant la bibliothèque `requests`. Nous devons importer `requests`, puis créer des dictionnaires d’en-tête et de données, et enfin les passer à requests.post. Voici à quoi cela ressemble :

```python
import requests

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}'

response = requests.post('https://rpc.ankr.com/core', headers=headers, data=data)
print(response.content)
```

Pour utiliser n'importe quelle autre URL RPC autre que celle utilisée dans l'exemple ci-dessus, remplacez simplement l'URL RPC https://rpc.ankr.com/core par l'un des [points de terminaison RPC pris en charge](#which-rpc-providers-can-i-use-to-connect-to-core-network-mainnet).
