---
sidebar_label: Tutoriel sur les sous-graphiques Core
hide_table_of_contents: false
sidebar_position: 2
---

# Création et déploiement d'un sous-graphique sur le réseau Core

Ce guide décrit comment créer, configurer et déployer un sous-graphique sur le réseau Core en utilisant les outils du protocole Graph. Un sous-graphique indexe les données en chaîne d'un contrat intelligent et les rend accessibles via GraphQL, permettant des requêtes puissantes pour les applications décentralisées.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js (v20 or later)](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

Vous aurez également besoin d'accéder aux services suivants:

- Un point de terminaison de nœud Graph sur Core
- Un nœud IPFS (pour les fichiers de sous-graphique)
- Un jeton d'accès Graph (pour l'authentification lors du déploiement)

## Étape 1 : Configuration de votre référentiel de sous-graphique

Pour créer votre propre sous-graphique, suivez [official guide from The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/).

> **Remarque:** Si vous prévoyez de déployer sur le réseau Core, assurez-vous que le champ `network` dans votre fichier `subgraph.yaml` est défini sur `core`.

### Exemple: Clonage d'un sous-graphique préconfiguré

Pour cet exemple, utilisons le sous-graphique fourni dans le [dapp-tutorial GitHub repo](https://github.com/coredao-org/dapp-tutorial/tree/master/06-Subgraphs%20on%20Core):

```bash
git clone https://github.com/coredao-org/dapp-tutorial/.git
cd ./dapp-tutorial/06-subgraph-on-core
npm install
```

## Étape 2: Structure du projet

Une fois à l'intérieur du répertoire `06-subgraph-on-core`, vous verrez la structure de projet suivante :

```
06-subgraph-on-core/
├── subgraph.yaml
├── schema.graphql
├── abis/
│ └── Guestbook.json
├── src/
│ └── guestbook.ts

```

### Aperçu des fichiers

- **`subgraph.yaml`** – Le fichier de configuration principal qui définit les sources de données, le schéma et les gestionnaires de mapping pour le sous-graphique.
- **`schema.graphql`** – Contient le schéma GraphQL, qui définit la structure des données à indexer et à interroger.
- **`abis/`** – Répertoire contenant les fichiers ABI de contrat ; dans cet exemple, `Guestbook.json` est utilisé pour décoder les événements.
- **`src/`** – Contient les fichiers AssemblyScript responsables du traitement des événements et de la création d'entités. La logique de transformation des données Ethereum en entités du sous-graphique se trouve ici.

### `subgraph.yaml`

Configurer `subgraph.yaml` pour spécifier le contrat, l'ABI et les gestionnaires d'événements:

> **Important:** Dans votre `subgraph.yaml`, assurez-vous de:
>
> - Définissez le champ `network` sur `core`.
> - Mettez à jour le champ `address` avec l'adresse de votre contrat déployé.
> - Mettez à jour le `name` et les détails de l'événement pour correspondre à votre contrat et aux événements qu'il émet.
> - Définissez le `startBlock` sur le numéro de bloc où votre contrat a été déployé.

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

Définissez le schéma GraphQL pour les données indexées:

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

Implémentez le gestionnaire d'événements dans `src/guestbook.ts`:

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

  entity.save()
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
