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

Este manual cubre los conceptos básicos para realizar peticiones a un endpoint RPC usando Postman. No está diseñado para ser (ni reemplazar) un tutorial completo de extremo a extremo, sino más bien para ofrecer una introducción al tema.

## Trabajar con los RPCs de Core a través de Postman

1. Primero, necesitarás crear una cuenta. Postman facilita mucho este proceso permitiéndote ingresar los datos de tu cuenta o usar manualmente una dirección Gmail.

<p align="center" style={{zoom:"40%"}}>
![sign-up-postman](../../static/img/rpc/postman/rpc-psotman-1.png)
</p>

2. Los proyectos en Postman están organizados en "espacios de trabajo", por lo que necesitarás crear uno para probar este proceso. Haga clic en el botón _Nuevo_ en el panel de navegación izquierdo.

<p align="center" style={{zoom:"40%"}}>
![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-2.png)
</p>

3. Puedes elegir entre varios espacios de trabajo diferentes. Para este ejemplo, usaremos "HTTP".

<p align="center" style={{zoom:"40%"}}>
![new-http-workspace-postman](../../static/img/rpc/postman/rpc-psotman-3.png)
</p>

4. Esto te llevará a una estación de trabajo básica, donde podrás estructurar tu RPC query y recibir una respuesta.

<p align="center" style={{zoom:"40%"}}>
![new-workspace-postman](../../static/img/rpc/postman/rpc-psotman-4.png)
</p>

5. Primero, cambie la solicitud `GET` por una solicitud `POST`, ya que así es como se estructurará nuestra consulta. Luego, agregue la URL de RPC que desea utilizar para obtener datos relacionados con una transacción específica de Core blockchain. Recuerde que puede utilizar cualquiera de las [URL Core RPC válidas] (./rpc-list.md).

<p align="center" style={{zoom:"40%"}}>
![set-request-type-postman](../../static/img/rpc/postman/rpc-psotman-5.png)
</p>

6. Luego, dirígete a la pestaña Body y agrega los datos de la siguiente solicitud CURL (ten en cuenta que en este ejemplo estamos enviando la solicitud como JSON raw).

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

<p align="center" style={{zoom:"70%"}}>
![set-boy-postman](../../static/img/rpc/postman/rpc-psotman-6.png)
</p>

7. Una vez que hagas clic en el botón `Send`, recibirás una respuesta en formato JSON con toda la información solicitada sobre la transacción cuyo hash fue pasado en la solicitud.

<p align="center" style={{zoom:"40%"}}>
![response-postman](../../static/img/rpc/postman/rpc-psotman-7.png)
</p>