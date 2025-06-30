---
sidebar_label: Conexión mediante CLI
hide_table_of_contents: false
sidebar_position: 2
description: "Aprende a conectarte al RPC de Core usando la CLI"
---

# RPC principales a través de la línea de comando

---

Las blockchains generan enormes cantidades de datos, incluyendo volúmenes de transacciones y propiedad de activos, que son valiosos para aplicaciones descentralizadas (dApps) en todo el ecosistema. Sin embargo, acceder y utilizar estos datos generalmente requiere experiencia técnica significativa.

## ¿Qué son las Llamadas a Procedimiento Remoto (RPCs)?

Las Llamadas a Procedimiento Remoto (RPCs) ayudan a resolver este problema al permitir la comunicación entre las redes blockchain y los usuarios, aplicaciones o empresas. En lugar de configurar un nodo personalizado completo o un programa complejo para extraer datos, las RPC permiten a los desarrolladores recopilar la información necesaria simplemente accediendo al endpoint proporcionado.

Piensa en una RPC como lo opuesto a un oráculo. Mientras que un oráculo introduce datos externos (como resultados electorales o pronósticos del tiempo) en la blockchain, una RPC extrae datos internos de la blockchain (como información de transacciones o bloques) y los saca.

## Proveedores de RPC para conectarse a la Mainnet de la Red Core

Core soporta diferentes [proveedores RPC](https://chainlist.org/chain/1116), tanto RPC nativo de Core como proveedores RPC de terceros. Consulta la lista completa de endpoints RPC [aquí](./rpc-list.md) para conectarte al mainnet o testnet de Core.

## Trabajar con RPC a través de la línea de comando

Para conectarse a los endpoints RPC de Core mediante la línea de comandos, podemos usar `cURL` (Client URL). Esta herramienta permite a los desarrolladores obtener datos directamente de servidores remotos. El comando `cURL` más simple recupera el código HTML de una página web pasando una URL.

Aquí hay un ejemplo:

```bash
curl https://coredao.org/
```

Para obtener información sobre una transacción específica en la blockchain de Core, usa el siguiente comando `cURL`, reemplazando el hash de transacción con el valor deseado:

```bash
curl -H "Content-Type: application/json" \
     -X POST \
     --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc9c4a5d14857ace0db197c7393806868824763377f802645aacf6f38d9c309b7"],"id":1}' \
     --url 'https://rpc.ankr.com/core'
```

En la declaración anterior, los siguientes son los componentes de la instrucción curl:

- **curl**: El comando para ejecutar la solicitud.
- **-H**: Especifica el encabezado, en este caso, estableciendo el tipo de contenido como JSON.
- **-X POST**: Define el método HTTP a usar (`POST`).
- **--data**: El cuerpo de la petición, incluyendo `method`, `parameters` y `request ID`.
- **--url**: La `URL` del endpoint al que se envía la solicitud.

Como se explicó anteriormente, CURL es un método para enviar solicitudes API, que contienen un endpoint (es decir, la URL desde la cual se recupera la información) y un método HTTP. En nuestro caso, la URL viene al final después de la opción _`--url`_; puede intercambiar cualquiera de las URL RPC válidas que se encuentran [aquí](https://chainlist.org/chain/1116) para conectarse a Core Mainnet, pero no olvide incluir la URL entre comillas simples (''). En la siguiente figura, cualquiera de las URL en el cuadro rojo funcionará.

<p align="center">
![rpc-list](../../static/img/rpc/rpc-1.png)
</p>

### Ejemplo de Respuesta:

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

## Usando cURL en un flujo de trabajo de Python

Si prefieres trabajar en un IDE en lugar de la línea de comandos, puedes replicar el comando cURL usando la biblioteca `requests` de Python. Así es cómo:

```python
```

:::note
Puedes reemplazar la URL (`https://rpc.ankr.com/core`) con cualquier URL RPC válida que encuentres en la documentación de Core, y no olvides envolver la URL entre comillas simples.
:::




