---
sidebar_label: Conexión mediante la CLI
hide_table_of_contents: false
sidebar_position: 2
description: "Aprende cómo conectarte a Core RPC usando la línea CLI"
---

# Core RPCs desde la línea de comandos

---

Las blockchains generan enormes cantidades de datos, incluyendo volúmenes de transacciones y propiedad de activos, los cuales son valiosos para las aplicaciones descentralizadas (dApps) en todo el ecosistema. Sin embargo, acceder y utilizar estos datos a menudo requiere un alto nivel de experiencia técnica.

## ¿Qué son las llamadas a procedimiento remoto (RPCs)?

Las llamadas a procedimiento remoto (RPCs) ayudan a resolver este problema al permitir la comunicación entre las redes blockchain y los usuarios, aplicaciones o empresas. En lugar de configurar un nodo personalizado completo o un programa complejo para extraer datos, las RPCs permiten a los desarrolladores obtener la información necesaria simplemente accediendo al endpoint proporcionado.

Piensa en una RPC como el reverso de un oráculo. Mientras que un oráculo introduce datos externos (por ejemplo, resultados electorales o pronósticos del clima) a la blockchain, una RPC extrae datos internos de la blockchain (por ejemplo, información de transacciones o bloques) y los lleva hacia afuera.

## Proveedores de RPC para conectarse al Core Network Mainnet

Core admite distintos [proveedores de RPC](https://chainlist.org/chain/1116), tanto nativos de Core como proveedores de terceros. Consulta la lista completa de endpoints RPC [aquí](./rpc-list.md) para conectarte al mainnet o testnet de Core.

## Trabajando con RPCs desde la línea de comandos

Para conectarte a endpoints RPC de Core mediante la línea de comandos, podemos usar `cURL` (Client URL). Esta herramienta permite a los desarrolladores obtener datos directamente de servidores remotos. El comando `cURL` más simple recupera el código HTML de una página web al pasarle una URL.

Aquí tienes un ejemplo:

```bash
curl https://coredao.org/
```

Para obtener información sobre una transacción específica en la blockchain de Core, utiliza el siguiente comando `cURL`, reemplazando el hash de la transacción por el valor deseado:

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

En la instrucción anterior, los siguientes son los componentes del comando curl:

- **curl**: El comando que ejecuta la solicitud.
- **-H**: Especifica la cabecera; en este caso, se establece el tipo de contenido como JSON.
- **-X POST**: Define el método HTTP a utilizar (`POST`).
- **--data**: El cuerpo de la solicitud, que incluye el `method`, los `parameters` y el `request ID`.
- **--url**: El endpoint o `URL` al que se envía la solicitud.

Como se explicó anteriormente, CURL es un método para enviar solicitudes API, las cuales contienen un endpoint (es decir, la URL desde la que se obtiene la información) y un método HTTP. En nuestro caso, la URL aparece al final, después de la opción --_`url`_; puedes sustituirla por cualquiera de las URLs RPC válidas listadas [aquí](https://chainlist.org/chain/1116) para conectarte al Core Mainnet, solo asegúrate de encerrar la URL entre comillas simples (''). En la figura siguiente, cualquiera de las URLs dentro del recuadro rojo funcionará.

<p align="center">
![rpc-list](../../static/img/rpc/rpc-1.png)
</p>

### Respuesta de ejemplo:

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

## Uso de cURL en un flujo de trabajo con Python

Si prefieres trabajar en IDE en lugar de la línea de comandos, puedes replicar el comando cURL utilizando la librería `requests` de Python. Aquí te mostramos cómo:

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
Puedes reemplazar la URL https://rpc.ankr.com/core por cualquier URL RPC válida que encuentres en la documentación de Core, y no olvides envolver la URL entre comillas simples.
:::




