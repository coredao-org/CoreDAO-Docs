---
sidebar_label: Connectez vos RPCs Core via Postman
hide_table_of_contents: false
sidebar_position: 2
description: "Apprenez à interagir avec Core en utilisant Postman"
---

# Connectez-vous aux points de terminaison RPC de Postman

---

## Qu'est-ce que Postman ?

[Postman](https://www.postman.com/) est un logiciel populaire qui facilite la création et l'utilisation des APIs.

This guidebook covers the basics of hitting an RPC endpoint with Postman. It is not intended to be (or to replace) a full, end-to-end tutorial, but rather to offer an introduction to the subject.

## Utilisation des RPCs Core via Postman

1. First, you'll need to sign up for an account. Postman makes this very easy to do by allowing you to enter your account details or use a Gmail address manually.

<p align="center" style={{zoom:"40%"}}>![sign-up-postman](../../static/img/rpc/postman/rpc-psotman-1.png)</p>

2. Les projets dans Postman sont organisés en "espaces de travail", vous devrez donc en créer un pour tester ce processus. Cliquez sur le _Nouveau_ bouton dans le volet de navigation à gauche.

<p align="center" style={{zoom:"40%"}}>![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-2.png)</p>

3. You can choose from several different workspaces. Pour cet exemple, nous allons utiliser `HTTP`.

<p align="center" style={{zoom:"40%"}}>![new-http-workspace-postman](../../static/img/rpc/postman/rpc-psotman-3.png)</p>

4. This will take you to a basic workstation, where you can structure your RPC query and receive a response.

<p align="center" style={{zoom:"40%"}}>![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-4.png)</p>

5. Commencez par changer la requête de `GET` à `POST`, car c'est ainsi que notre requête sera structurée. Ensuite, ajoutez l'URL RPC que vous souhaitez utiliser pour obtenir des informations relatives à une transaction spécifique de la Core blockchain. N'oubliez pas que vous pouvez utiliser n'importe quelle [URL RPC valide de Core](./rpc-list.md).

<p align="center" style={{zoom:"40%"}}>![set-request-type-postman](../../static/img/rpc/postman/rpc-psotman-5.png)</p>

6. Then, head over to the Body tab and add the data from the following CURL request (note that in this example, we are submitting the request as raw JSON).

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

<p align="center" style={{zoom:"70%"}}>![set-boy-postman](../../static/img/rpc/postman/rpc-psotman-6.png)</p>

7. Once the `Send` button is clicked, you'll receive a response in JSON with all the information requested about the transaction whose hash was passed in the request.

<p align="center" style={{zoom:"40%"}}>![response-postman](../../static/img/rpc/postman/rpc-psotman-7.png)</p>