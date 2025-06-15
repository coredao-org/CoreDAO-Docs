---
sidebar_label: Core Subgraph
hide_table_of_contents: false
sidebar_position: 2
---

# Core Subgraph using GraphQL
---

Developers can use a self-hosted subgraph to extract data from the Core blockchain, processing and storing it for consumption via GraphQL. Let's take a look at how we can create and deploy this powerful tool.

## Important URLs and Keys

### Core Mainnet

<table><thead><tr><th width="342">URL</th><th>Usage</th></tr></thead><tbody><tr><td><strong>Management URL</strong>: <em>https://thegraph.coredao.org/deploy/</em></td><td>Used to create/deploy subgraphs (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>IPFS URL</strong>: <em>https://thegraph.coredao.org/ipfs/</em></td><td>Used to deploy subgraphs.</td></tr><tr><td><strong>HTTP query URL</strong>: <em>https://thegraph.coredao.org</em></td><td>Used to query data from subgraphs.</td></tr><tr><td><strong>Health check URL</strong>: <br/><em>https://thegraph-is.coredao.org</em> </td><td>Used to check subgraph health.</td></tr></tbody></table>

### Core Testnet2

<table><thead><tr><th width="345">URL</th><th>Usage</th></tr></thead><tbody><tr><td><strong>Management URL</strong>: <br/><em>https://thegraph-node.test2.btcs.network</em></td><td>Used to create/deploy subgraphs (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>IPFS URL</strong>: <br/><em>https://thegraph-ipfs.test2.btcs.network</em></td><td>Used to deploy subgraphs.</td></tr><tr><td><strong>HTTP query URL</strong>: <br/><em>https://thegraph.test2.btcs.network</em></td><td>Used to query data from subgraphs.</td></tr><tr><td><strong>Health check URL</strong>: <br/><em>https://thegraph-sub.test2.btcs.network</em></td><td>Used to check subgraph health.</td></tr></tbody></table>

## General Subgraph Setup Steps

### Create Repository

To create your subgraph repository, follow the[ official guide from The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/). In order to deploy onto the Core graph network, make sure to set your network name in `subgraph.yaml` to core. Depending on your subgraph, there may be a few more changes to make. You’ll find additional details in the full example section below.

### Create and Deploy

To create and deploy your subgraph, execute the following commands in your subgraph project repository.

```bash
# Create subgraph
graph create your-subgraph-name --node https://thegraph.coredao.org/deploy/

# Deploy subgraph
graph deploy your-subgraph-name --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/
```

The `graph deploy` command should return the HTTP query URL for your subgraph, which you can integrate into your application as appropriate.

## Example: Deploying a Uniswap V2 subgraph

Now that we understand the process, let's walk through a full example by setting up a Uniswap V2 subgraph on Core.&#x20;

First, clone the Uniswap V2 [subgraph repository](https://github.com/Uniswap/v2-subgraph), navigate to the project folder, then execute the following commands from that directory:

```
# Install dependencies with npm (or yarn)
npm install

# Generate subgraph code
npm run codegen
```

Now we'll make a few required changes to the _subgraph.yaml_ and _helpers.ts_ files:

* _subgraph.yaml_:
  * Change network name to `core` on lines 9 and 37.
  * Update the factory address on line 11.
  * Update the `startBlock` on line 13 to a reasonable block height (current block height available [here](https://scan.coredao.org/)).
* _src/mappings/helpers.ts_:
  * Update the factory address on line 11.

Finally, we'll run the create and deploy commands. In order to avoid compatibility issues, let's use the graph-cli installed in the project (instead of the global version) by prefixing the `graph` command with `./node_modules/.bin/`.

```bash
# Create a new subgraph called uniswap-4-test
./node_modules/.bin/graph create uniswap-4-test --node https://thegraph.coredao.org/deploy/

# Deploy the uniswap-4-test subgraph
./node_modules/.bin/graph deploy uniswap-4-test --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/

# The deploy command should print an HTTP query URL similar to:
# https://thegraph.coredao.org/subgraphs/name/uniswap-4-test
```

Well done, your subgraph is deployed! Now you can integrate the HTTP query URL printed by the deploy command into your website and use it to query data.

## Authorization

To prevent your subgraph from being overwritten by others, please contact us on [discord](https://discord.com/invite/coredaoofficial) for an authorization key.

If you are testing against the Core Testnet2 Graph, here are the access tokens for general testing purpose: 
* **General key for Core Testnet2:** b020b95e511443699e72a10c697f84c0
