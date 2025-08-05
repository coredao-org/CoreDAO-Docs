---
sidebar_label: Tutorial de Subgraph en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Creación y Despliegue de un Subgraph en la Red Core

Esta guía describe cómo crear, configurar y desplegar un subgraph en la red Core utilizando las herramientas del protocolo Graph. Un subgraph indexa datos en cadena desde un contrato inteligente y los hace accesibles mediante GraphQL, lo que permite consultas potentes para aplicaciones descentralizadas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js (v20 o posterior)](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

También necesitarás acceso a los siguientes servicios:

- Un endpoint de Graph Node en Core
- Un nodo IPFS (para los archivos del subgraph)
- Un token de acceso de Graph (para autenticación durante el despliegue)

## Paso 1: Configuración de tu Repositorio de Subgraph

Para crear tu propio subgraph, puedes seguir la [guía oficial de The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/).

> **Nota:** Si planeas hacer el despliegue en la red Core, asegúrate de que el campo `network` en tu archivo `subgraph.yaml` esté configurado como `core`.

### Ejemplo: Clonar un Subgraph Preconfigurado

Para este ejemplo, usaremos el subgraph proporcionado en el [repositorio de GitHub dapp-tutorial](https://github.com/coredao-org/dapp-tutorial/tree/master/06-Subgraphs%20on%20Core):

```bash
git clone https://github.com/coredao-org/dapp-tutorial/.git
cd ./dapp-tutorial/06-subgraph-on-core
npm install
```

## Paso 2: Estructura del Proyecto

Una vez dentro del directorio `06-subgraph-on-core`, verás la siguiente estructura de proyecto:

```
06-subgraph-on-core/
├── subgraph.yaml
├── schema.graphql
├── abis/
│ └── Guestbook.json
├── src/
│ └── guestbook.ts

```

### Descripción de Archivos

- **`subgraph.yaml`** – Archivo principal de configuración que define las fuentes de datos, el esquema y los mapeos de handlers para el subgraph.
- **`schema.graphql`** – Contiene el esquema GraphQL, que define la estructura de los datos que se indexarán y consultarán.
- **`abis/`** – Directorio que contiene los archivos ABI del contrato; en este ejemplo, se utiliza `Guestbook.json` para decodificar eventos.
- **`src/`** – Contiene los archivos en AssemblyScript responsables de manejar eventos y crear entidades. Aquí vive la lógica que transforma los datos de Ethereum en entidades del subgraph.

### `subgraph.yaml`

Configura `subgraph.yaml` para especificar el contrato, el ABI y los handlers de eventos:

> **Importante:** Asegúrate de lo siguiente en tu `subgraph.yaml`:
>
> - Establece el campo `network` como `core`.
> - Actualiza el campo `address` con la dirección de tu contrato desplegado.
> - Actualiza el `name` y los detalles del evento para que coincidan con tu contrato y los eventos que emite.
> - Establece `startBlock` al número de bloque en el que se desplegó tu contrato.

```yaml
specVersion: 1.0.0
indexerHints:
  prune: auto
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: Guestbook
    network: core
    source:
      address: "Contract_Address"
      abi: Guestbook
      startBlock: 6000000 # update the block height
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - EntrySigned
      abis:
        - name: Guestbook
          file: ./abis/Guestbook.json
      eventHandlers:
        - event: EntrySigned(string,string)
          handler: handleEntrySigned
      file: ./src/guestbook.ts
```

### `schema.graphql`

Define el esquema GraphQL para los datos indexados:

```graphql
type EntrySigned @entity(immutable: true) {
  id: Bytes!
  name: String! # string
  message: String! # string
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### `guestbook.ts`

Implementa el manejador de eventos en `src/guestbook.ts`:

```typescript
import { EntrySigned as EntrySignedEvent } from "../generated/Guestbook/Guestbook";
import { EntrySigned } from "../generated/schema";

export function handleEntrySigned(event: EntrySignedEvent): void {
  let entity = new EntrySigned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = event.params.name;
  entity.message = event.params.message;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
```

## Paso 3: Configurar Entorno

Crea un archivo `.env` en la raíz del proyecto y define lo siguiente:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mainnet" label="Mainnet" default>

```env
GRAPH_NODE=https://thegraph.coredao.org/deploy/
IPFS_NODE=https://thegraph.coredao.org/ipfs/
GRAPH_ACCESS_TOKEN=your_access_token_here
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```env
GRAPH_NODE=https://thegraph-node.test2.btcs.network
IPFS_NODE=https://thegraph-ipfs.test2.btcs.network
GRAPH_ACCESS_TOKEN=b020b95e511443699e72a10c697f84c0
```

  </TabItem>
</Tabs>

Asegúrate de que estos endpoints sean accesibles desde tu entorno.

## Paso 4: Ejecutar con Docker (Opcional)

Para simular un entorno local, usa Docker:

```bash
docker-compose up -d
```

Verifica los contenedores:

```bash
docker ps
```

Asegúrate de que servicios como Graph Node, IPFS y Postgres estén en ejecución.

## Paso 5: Construir y desplegar el Subgraph

### Construir

Genera el código y construye el subgraph:

```bash
graph codegen
graph build
```

### Crear y desplegar el Subgraph

Crea y despliega el subgraph:

```bash
graph create \
  --node $GRAPH_NODE \
  --access-token $GRAPH_ACCESS_TOKEN \
  your-subgraph-name

graph deploy \
  --node $GRAPH_NODE \
  --ipfs $IPFS_NODE \
  --access-token $GRAPH_ACCESS_TOKEN \
  your-subgraph-name
```

Reemplaza `your-subgraph-name` con el destino de tu despliegue.

## Paso 6: Consultar el Subgraph

Después del despliegue, tu subgraph estará disponible en el endpoint de consulta (por ejemplo, `https://thegraph.test2.btcs.network/subgraphs/name/guestbook-subgraph`).

Consulta de ejemplo:

```graphql
{
  entrySigneds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    name
    message
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

Puedes usar GraphiQL, Apollo Client o cualquier herramienta GraphQL para consultar tus datos.

## Resumen

¡Ahora has creado y desplegado exitosamente un subgraph en la Core Network!

Al indexar eventos de contratos inteligentes y exponerlos vía GraphQL, los subgraphs proveen acceso escalable y en tiempo real a datos de blockchain.

A partir de aquí, puedes:

- Extender tu esquema y mappings para soportar eventos y entidades adicionales
- Configurar handlers programados para tareas periódicas de indexación
- Integrar tu subgraph con frameworks frontend usando herramientas como Apollo Client
- Monitorear y probar tu subgraph con Graph Explorer
