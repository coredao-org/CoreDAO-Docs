---
sidebar_label: Using Core RPC with CLI
hide_table_of_contents: false
sidebar_position: 2
---

# Core RPCs Through the Command Line
---

Blockchains produce huge amounts of information related to things like transaction volume and asset ownership, much of which is useful to dApps in the rest of the ecosystem. Accessing and putting that data to work, however, can require a huge amount of technical know-how. 

## What are Remote Procedure Calls?
Remote Procedure Calls (RPCs) are one way of solving this problem. RPCs are software that facilitate communication between a blockchain network and users, companies, or applications. Rather than needing to run a full custom node or set up a complex program to pull data, the relevant information can be gathered by simply hitting the endpoint provided by the RPC. 

If it helps, you can think of an RPC as being essentially the opposite of an oracle. The [purpose of an oracle](https://cointelegraph.com/learn/what-is-a-blockchain-oracle-and-how-does-it-work) is to take external data (such as the results of an election or a weather forecast) and move it into a blockchain, while the purpose of an RPC is to take internal data (such as information related to transactions and blocks) and move it out of a blockchain. 

## Which RPC Providers can I Use to connect to Core Network Mainnet?
The Core Chain supports different [RPC providers](https://chainlist.org/chain/1116) -- both native Core RPC and third-party RPCs providers. Refer to the complete list of RPC endpoints [here](./rpc-list.md) for conencting to Core mainnet or testnet. 

## Working with RPCs Through the Command Line
We can use the CURL for connecting to CORE RPC endpoitns via CLI. `CURL`, also written as `cURL`, is short for `client URL`. In essence, it's a CLI tool that offers developers a way of fetching data directly from a remote server. The simplest CURL command consists of fetching a webpage's HTML code by passing in a URL, and you can try it now by running this in your CLI of choice:

```bash
    curl https://coredao.org/
```

The below command illustrates how CURL can be used to get information related to a specific transaction on the Core Chain by passing in the transactions hash and a few other parameters. 

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

In the above statement, following are the components of the `curl` statement: 

* `curl`: since we're using CURL, we have to prefix it with the name of the command.
* `-H`: this is a header containing information about the request's content etc.
* `-X`: this is where we specify what kind of HTTP command we're using, which in our case is `POST`.
* `--data`: this is where we pass the `method`, its `parameters`, the `id`, etc. to the request. 
* `--url`: this is the `URL` we want the request to be pointed at.

As explained earlier, CURL is a method for sending API requests, which contain an endpoint (i.e. the URL from which the information is being retrieved) and an HTTP method. In our case, the URL comes at the end after the _`--url`_ option; you can swap in any of the valid RPC URLs found [here](https://chainlist.org/chain/1116) for connecting to Core Mainnet, just don't forget to wrap the URL in single quotes (''). In the figure below, any of the URLs in the red box will work.

![rpc-list](../../static/img/rpc/rpc-1.png)

Following is the sample response returned by the CURL command:

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

## Incorporating CURL into a Python Workflow
As much fun as it would be to spend all day in Terminal, chances are you'll want to move into an IDE to build anything more complicated. 

In Python, this whole command can be duplicated using the `requests` library. We'll have to import `requests`, then create header and data dictionaries, then pass those into requests.post. Here's what that looks like:


```python
import requests

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}'

response = requests.post('https://rpc.ankr.com/core', headers=headers, data=data)
print(response.content)
```

In order to use any other RPC URL other than the one used in the above sample, simply replace the RPC URL https://rpc.ankr.com/core with one of the [supported RPC endpoints](#which-rpc-providers-can-i-use-to-connect-to-core-network-mainnet).