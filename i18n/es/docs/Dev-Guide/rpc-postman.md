---
sidebar_label: Conexión Mediante Postman
hide_table_of_contents: false
sidebar_position: 2
description: "Aprende cómo interactuar con Core usando Postman"
---

# Conéctate a los endpoints de RPC de Core desde Postman

---

## Ques es postman

[Postman](https://www.postman.com/) es una oferta de software popular que facilita la creación y el uso de API.

This guidebook covers the basics of hitting an RPC endpoint with Postman. It is not intended to be (or to replace) a full, end-to-end tutorial, but rather to offer an introduction to the subject.

## Trabajar con los RPCs de Core a través de Postman

1. First, you'll need to sign up for an account. Postman makes this very easy to do by allowing you to enter your account details or use a Gmail address manually.

<p align="center" style={{zoom:"40%"}}>
![sign-up-postman](../../static/img/rpc/postman/rpc-psotman-1.png)
</p>

2. Los proyectos en Postman están organizados en "espacios de trabajo", por lo que necesitarás crear uno para probar este proceso. Haga clic en el botón _Nuevo_ en el panel de navegación izquierdo.

<p align="center" style={{zoom:"40%"}}>
![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-2.png)
</p>

3. You can choose from several different workspaces. Para este ejemplo, usaremos "HTTP".

<p align="center" style={{zoom:"40%"}}>
![new-http-workspace-postman](../../static/img/rpc/postman/rpc-psotman-3.png)
</p>

4. This will take you to a basic workstation, where you can structure your RPC query and receive a response.

<p align="center" style={{zoom:"40%"}}>
![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-4.png)
</p>

5. Primero, cambie la solicitud `GET` por una solicitud `POST`, ya que así es como se estructurará nuestra consulta. Luego, agregue la URL de RPC que desea utilizar para obtener datos relacionados con una transacción específica de Core blockchain. Recuerde que puede utilizar cualquiera de las [URL Core RPC válidas] (./rpc-list.md).

<p align="center" style={{zoom:"40%"}}>
![set-request-type-postman](../../static/img/rpc/postman/rpc-psotman-5.png)
</p>

6. Then, head over to the Body tab and add the data from the following CURL request (note that in this example, we are submitting the request as raw JSON).

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

<p align="center" style={{zoom:"70%"}}>
![set-boy-postman](../../static/img/rpc/postman/rpc-psotman-6.png)
</p>

7. Once the `Send` button is clicked, you'll receive a response in JSON with all the information requested about the transaction whose hash was passed in the request.

<p align="center" style={{zoom:"40%"}}>
![response-postman](../../static/img/rpc/postman/rpc-psotman-7.png)
</p>