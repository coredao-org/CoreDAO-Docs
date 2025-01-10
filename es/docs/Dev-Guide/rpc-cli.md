---
sidebar_label: Usando Core RPC con CLI
hide_table_of_contents: false
sidebar_position: 2
---

# RPC principales a través de la línea de comando

---

Las cadenas de bloques producen enormes cantidades de información relacionada con aspectos como el volumen de transacciones y la propiedad de activos, gran parte de la cual es útil para las dApps del resto del ecosistema. Sin embargo, acceder a esos datos y ponerlos a trabajar puede requerir una gran cantidad de conocimientos técnicos.

## ¿Qué son las llamadas a procedimientos remotos?

Las llamadas a procedimiento remoto (RPC) son una forma de resolver este problema. Los RPC son software que facilitan la comunicación entre una red blockchain y usuarios, empresas o aplicaciones. En lugar de tener que ejecutar un nodo personalizado completo o configurar un programa complejo para extraer datos, la información relevante se puede recopilar simplemente accediendo al punto final proporcionado por RPC.

Si te ayuda, puedes pensar en un RPC como esencialmente lo opuesto a un oráculo. El [propósito de un oráculo](https://cointelegraph.com/learn/what-is-a-blockchain-oracle-and-how-does-it-work) es tomar datos externos (como los resultados de un elecciones o un pronóstico del tiempo) y moverlos a una cadena de bloques, mientras que el propósito de un RPC es tomar datos internos (como información relacionada con transacciones y bloques) y sacarlos de una cadena de bloques.

## ¿Qué proveedores de RPC puedo utilizar para conectarme a Core Network Mainnet?

The Core supports different [RPC providers](https://chainlist.org/chain/1116) -- both native Core RPC and third-party RPCs providers. Consulte la lista completa de puntos finales RPC [aquí] (./rpc-list.md) para conectarse a Core mainnet o testnet.

## Trabajar con RPC a través de la línea de comando

Podemos usar CURL para conectarnos a los puntos finales de CORE RPC a través de CLI. `CURL`, también escrito como `cURL`, es la abreviatura de `cliente URL`. En esencia, es una herramienta CLI que ofrece a los desarrolladores una forma de obtener datos directamente desde un servidor remoto. El comando CURL más simple consiste en obtener el código HTML de una página web pasando una URL, y puedes probarlo ahora ejecutando esto en la CLI de tu elección:

```bash
    curl https://coredao.org/
```

The below command illustrates how CURL can be used to get information related to a specific transaction on the Core blockchain by passing in the transactions hash and a few other parameters.

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

En la declaración anterior, los siguientes son los componentes de la declaración "curl":

- `curl`: como estamos usando CURL, tenemos que anteponerle el nombre del comando.
- `-H`: este es un encabezado que contiene información sobre el contenido de la solicitud, etc.
- `-X`: aquí es donde especificamos qué tipo de comando HTTP estamos usando, que en nuestro caso es `POST`.
- `--data`: aquí es donde pasamos el `método`, sus `parámetros`, el `id`, etc. a la solicitud.
- `--url`: esta es la `URL` a la que queremos que apunte la solicitud.

Como se explicó anteriormente, CURL es un método para enviar solicitudes API, que contienen un punto final (es decir, la URL desde la que se recupera la información) y un método HTTP. En nuestro caso, la URL viene al final después de la opción _`--url`_; puede intercambiar cualquiera de las URL RPC válidas que se encuentran [aquí](https://chainlist.org/chain/1116) para conectarse a Core Mainnet, pero no olvide incluir la URL entre comillas simples (''). En la siguiente figura, cualquiera de las URL en el cuadro rojo funcionará.

![rpc-list](../../static/img/rpc/rpc-1.png)

A continuación se muestra la respuesta de ejemplo devuelta por el comando CURL:

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

## Incorporación de CURL en un flujo de trabajo de Python

Por más divertido que sea pasar todo el día en la Terminal, es probable que quieras pasar a un IDE para construir algo más complicado.

En Python, todo este comando se puede duplicar usando la biblioteca `solicitudes`. Tendremos que importar `solicitudes`, luego crear diccionarios de datos y encabezados, y luego pasarlos a request.post. Así es como se ve:

```python
import requests

headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}'

response = requests.post('https://rpc.ankr.com/core', headers=headers, data=data)
print(response.content)
```

Para utilizar cualquier otra URL de RPC distinta a la utilizada en el ejemplo anterior, simplemente reemplace la URL de RPC https://rpc.ankr.com/core con uno de los [puntos finales RPC admitidos](# Which-rpc-providers -puedo-usar-para-conectarme-a-la-red-central-mainnet).
