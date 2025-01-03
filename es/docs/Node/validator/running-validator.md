---
sidebar_label: Ejecución de nodos validadores
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de nodos validadores

---

## Requisitos del Sistema

Existen varios requisitos del sistema para configurar un nodo validador en la red central. Consulte [aquí](../config/validator-node-config.md) y asegúrese de tener los requisitos de hardware y software necesarios antes de ejecutar un nodo validador. Además, asegúrese de registrar su nodo validador correctamente consultando la guía detallada [aquí](./validator-register.md).

## Construir y ejecutar

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo de validación, es decir, ejecutar su nodo de validación directamente desde nuestra base de código de blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario del nodo desde la [página de lanzamientos] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash
INFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
INFO [07-18|14:57:20.724] Writing custom genesis block 
INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
INFO [07-18|14:57:20.729] Writing custom genesis block 
INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
```

4\. Nuestro nodo validador está listo, ¡comencemos a ejecutarlo!

Si planea ejecutar un nodo de validación, deberá configurar la clave de consenso antes de ejecutar el nodo. Asegúrese de mantener guardado su almacén de claves.

```bash
# generate the consensus key and input the password
geth account new --datadir ./node
echo {your-password} > password.txt
# start a validator node
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock  --cache 8000
```

5\. A medida que se ejecuta nuestro nodo validador, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
