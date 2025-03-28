---
sidebar_label: Subgrafo Core
hide_table_of_contents: false
sidebar_position: 2
---

# Subgrafo Core usando GraphQL

---

Los desarrolladores pueden utilizar un subgrafo autohospedado para extraer datos de la cadena de bloques Core, procesarlos y almacenarlos para su consumo a través de GraphQL. Echemos un vistazo a cómo podemos crear e implementar esta poderosa herramienta.

## Important URLs and Keys

### Core MainNet

<table><thead><tr><th width="342">URL</th><th>Uso</th></tr></thead><tbody><tr><td><strong>URL de administración</strong>: <em>https://thegraph.coredao.org/deploy/</em></td><td>Se utiliza para crear/implementar subgrafos.</td></tr><tr><td><strong>IPFS URL</strong>: <em>https://thegraph.coredao.org/ipfs/</em></td><td>Se utiliza para implementar subgrafos.</td></tr><tr><td><strong>HTTP query URL</strong>: <em>https://thegraph.coredao.org</em></td><td>Se utiliza para consultar datos de subgrafos.</td></tr><tr><td><strong>URL de control de estado</strong><br/>><em>https://thegraph-is.coredao.org</em></td><td>Se utiliza para comprobar el estado del subgrafo.</td></tr></tbody></table>

### Core TestNet

<table><thead><tr><th width="345">URL</th><th>Uso</th></tr></thead><tbody><tr><td><strong>Management URL</strong>: <br/><em>https://thegraph-node.test2.btcs.network</em></td><td>Se utiliza para crear/implementar subgrafos (<em>--node</em> o <em>-g</em>).</td></tr><tr><td><strong>IPFS URL</strong>: <br/><em>https://thegraph-ipfs.test2.btcs.network</em></td><td>Se utiliza para implementar subgrafos.</td></tr><tr><td><strong>HTTP query URL</strong>: <br/><em>https://thegraph.test2.btcs.network</em></td><td>Se utiliza para consultar datos de subgrafos.</td></tr><tr><td><strong>Health check URL</strong><br/><em>https://thegraph-sub.test2.btcs.network</em></td><td>Se utiliza para comprobar el estado del subgrafo.</td></tr></tbody></table>

## Pasos generales de configuración del subgrafo

### Crear repositorio

Para crear su repositorio de subgrafos, siga la [guía oficial de The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/). Para implementar en la red Core Graph, asegúrese de configurar el nombre de su red en `subgraph.yaml` como núcleo. Dependiendo de su subgrafo, es posible que haya algunos cambios más que realizar Encontrará detalles adicionales en la sección de ejemplos completa a continuación. Encontrará detalles adicionales en la sección de ejemplo completo a continuación.

### Crear e implementar

Para crear e implementar su subgrafo, ejecute los siguientes comandos en el repositorio de su proyecto de subgrafo.

```bash
# Crear subgraph
graph create your-subgraph-name --node https://thegraph.coredao.org/deploy/

# Deployar subgraph
graph deploy your-subgraph-name --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/
```

El comando `graph depoy` debería devolver la URL de consulta HTTP para su subgrafo, que puede integrar en su aplicación según corresponda.

## Ejemplo: implementación de un subgrafo Uniswap V2

Ahora que entendemos el proceso, veamos un ejemplo completo configurando un subgrafo Uniswap V2 en Core.

Primero, clone el [repositorio de subgrafos] de Uniswap V2 (https://github.com/Uniswap/v2-subgraph), navegue hasta la carpeta del proyecto y luego ejecute los siguientes comandos desde ese directorio:

```
# Instalar dependencias con npm (o hilo)
npm install

# Generar código de subgrafo
npm run codegen
```

Ahora haremos algunos cambios necesarios en el
_subgraph.yaml_ and _helpers.ts_ files:

- _subgraph.yaml_:
  - Cambie el nombre de la red a "core" en las líneas 9 y 37.
  - Actualice la dirección de fábrica en la línea 11.
  - Actualice `startBlock` en la línea 13 a una altura de bloque razonable (la altura del bloque actual está disponible [aquí](https://scan.coredao.org/)).
- _src/mappings/helpers.ts_:
  - Actualice la dirección de fábrica en la línea 11.

Finalmente, ejecutaremos los comandos de creación e implementación. Para evitar problemas de compatibilidad, usemos el graph-cli instalado en el proyecto (en lugar de la versión global) anteponiendo el comando `graph` con `./node_modules/.bin/`.

```bash
# Crea un nuevo subgrafo llamado uniswap-4-test
./node_modules/.bin/graph create uniswap-4-test --node https://thegraph.coredao.org/deploy/

# Implementar el subgrafo uniswap-4-test
./node_modules/.bin/graph deploy uniswap-4-test --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/

# El comando de implementación debería imprimir una URL de consulta HTTP similar a:
# https://thegraph.coredao.org/subgraphs/name/uniswap-4-test
```

¡Bien hecho, tu subgrafo está implementado! Ahora puede integrar la URL de consulta HTTP impresa por el comando de implementación en su sitio web y utilizarla para consultar datos.

## Autorización

To prevent your subgraph from being overwritten by others, please contact us on [discord](https://discord.com/invite/coredaoofficial) for an authorization key.

If you are testing against the Core TestNet Graph, here are the access token for general testing purpose:

- **General key for Core Legacy Testnet:** a9a79c2aea604bfaa861ff93d46d0d11
- **General key for Core Testnet2:** b020b95e511443699e72a10c697f84c0
