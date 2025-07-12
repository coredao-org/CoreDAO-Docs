---
sidebar_label: Tutorial de Subgraph en Core
hide_table_of_contents: false
sidebar_position: 2
---

# Creación y Despliegue de un Subgraph en la Red Core

Esta guía describe cómo crear, configurar y desplegar un subgraph en la red Core utilizando las herramientas del protocolo Graph. Un subgraph indexa datos en cadena desde un contrato inteligente y los hace accesibles mediante GraphQL, lo que permite consultas potentes para aplicaciones descentralizadas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js (v20 or later)](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

You will also need access to the following services:

- A Graph Node endpoint on Core
- An IPFS node (for subgraph files)
- A Graph access token (for authentication during deployment)

## Step 1: Setting Up Your Subgraph Repository

To create your own subgraph, you can follow the [official guide from The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/).

> **Note:** If you plan to deploy on the Core network, ensure the `network` field in your `subgraph.yaml` is set to `core`.

### Example: Cloning a Preconfigured Subgraph

For this example, let's use the subgraph provided in the [dapp-tutorial GitHub repo](https://github.com/coredao-org/dapp-tutorial/tree/master/06-Subgraphs%20on%20Core):

```bash
git clone https://github.com/coredao-org/dapp-tutorial/.git
cd ./dapp-tutorial/06-subgraph-on-core
npm install
```

## Step 2: project structure

Once inside the `06-subgraph-on-core` directory, you'll see the following project structure:

```
06-subgraph-on-core/
├── subgraph.yaml
├── schema.graphql
├── abis/
│ └── Guestbook.json
├── src/
│ └── guestbook.ts

```

### File Overview

- **`subgraph.yaml`** – The main configuration file that defines the data sources, schema, and mapping handlers for the subgraph.
- **`schema.graphql`** – Contains the GraphQL schema, which defines the structure of the data to be indexed and queried.
- **`abis/`** – Directory holding the contract ABI files; in this example, `Guestbook.json` is used to decode events.
- **`src/`** – Contains the AssemblyScript files responsible for handling events and creating entities. The logic for transforming Ethereum data into the subgraph's entities lives here.

### `subgraph.yaml`

Configure `subgraph.yaml` to specify the contract, ABI, and event handlers:

> **Important:** In your `subgraph.yaml`, make sure to:
>
> - Set the `network` field to `core`.
> - Update the `address` field with your deployed contract address.
> - Update the `name` and event details to match your contract and the events it emits.
> - Set the `startBlock` to the block number where your contract was deployed.

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

Define the GraphQL schema for indexed data:

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

Implement the event handler in `src/guestbook.ts`:

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

## Step 3: Configure Environment

Create a `.env` file in the project root and define the following:

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

Ensure these endpoints are accessible from your environment.

## Step 4: Run with Docker (Optional)

To simulate a local environment, use Docker:

```bash
docker-compose up -d
```

Check containers:

```bash
docker ps
```

Make sure services like Graph Node, IPFS, and Postgres are running.

## Step 5: Build and Deploy the Subgraph

### Build

Generate code and build the subgraph:

```bash
graph codegen
graph build
```

### Create and Deploy Subgraph

Create and deploy the subgraph:

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

Replace `your-subgraph-name` with your deployment target.

## Step 6: Query the Subgraph

After deployment, your subgraph will be available at the query endpoint (e.g., `https://thegraph.test2.btcs.network/subgraphs/name/guestbook-subgraph`).

Example query:

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

You can use GraphiQL, Apollo Client, or any GraphQL tool to query your data.

## Summary

You've now successfully created and deployed a subgraph on the Core Network!

By indexing smart contract events and exposing them through GraphQL, subgraphs provide scalable, real-time access to blockchain data.

From here, you can:

- Extend your schema and mappings to support additional events and entities
- Set up scheduled handlers for periodic indexing tasks
- Integrate your subgraph with frontend frameworks using tools like Apollo Client
- Monitor and test your subgraph with Graph Explorer
