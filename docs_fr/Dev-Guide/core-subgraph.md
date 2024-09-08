---
sidebar_label: Core Subgraph
hide_table_of_contents: false
sidebar_position: 2
---

# Core Subgraph utilisant GraphQL

---

Les développeurs peuvent utiliser un sous-graphe auto-hébergé pour extraire des données de la blockchain Core, les traiter et les stocker pour une utilisation via GraphQL. Voici comment créer et déployer cet outil puissant.

### URLs Importantes

Nous utiliserons plusieurs URLs standard dans ce guide, qui seront utile de revoir avant de commencer.

#### MainNet

<table><thead><tr><th width="342">URL</th><th>Utilisation</th></tr></thead><tbody><tr><td><strong>URL de gestion</strong>: <em>https://thegraph.coredao.org/deploy/</em></td><td>Utiliser pour créer/déployer des sous-graphes (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>URL IPFS</strong>: <em>https://thegraph.coredao.org/ipfs/</em></td><td>Utiliser pour déployer des sous-graphes.</td></tr><tr><td><strong>URL de requête HTTP</strong>: <em>https://thegraph.coredao.org</em></td><td>Utiliser pour interroger des données depuis des sous-graphes.</td></tr><tr><td><strong>URL de vérification de santé</strong><br/><em>https://thegraph-is.coredao.org</em> </td><td>Utiliser pour vérifier la santé des sous-graphes.</td></tr></tbody></table>

#### TestNet

<table><thead><tr><th width="345">URL</th><th>Utilisation</th></tr></thead><tbody><tr><td><strong>URL de gestion</strong>: <br/><em>https://thegraph-node.test.btcs.network</em></td><td>Utiliser pour créer/déployer des sous-graphes (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>URL IPFS</strong>: <br/><em>https://thegraph-ipfs.test.btcs.network</em></td><td>Utiliser pour déployer des sous-graphes.</td></tr><tr><td><strong>URL de requête HTTP</strong>: <br/><em>https://thegraph.test.btcs.network</em></td><td>Utiliser pour interroger des données depuis des sous-graphes.</td></tr><tr><td><strong>URL de vérification de santé</strong><br/><em>https://thegraph-sub.test.btcs.network</em></td><td>Utiliser pour vérifier la santé des sous-graphes.</td></tr></tbody></table>

### Étapes Générales pour la Configuration du Sous-Graphe

#### Créer un Répertoire

Suivez le [guide officiel de The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/) pour créer votre répertoire de sous-graphe. Dans le but de deployer sur le de sous-graphe Core, assurez-vous de définir le nom du réseau dans `subgraph.yaml` sur core. Selon votre sous-graphe, il peut y avoir quelques modifications supplémentaires à effectuer. Vous trouverez des détails supplémentaires dans la section d'exemple complète ci-dessous.

#### Créer et Déployer

Pour créer et déployer votre sous-graphe, exécutez les commandes suivantes dans le répertoire de votre projet de sous-graphe.

```bash
# Créer le sous-graphe
graph create your-subgraph-name --node https://thegraph.coredao.org/deploy/

# Déployer le sous-graphe
graph deploy your-subgraph-name --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/
```

La commande de déploiement `graph deploy` devrait retourner l'URL HTTP de requête pour votre sous-graphe, que vous pouvez intégrer dans votre application selon vos besoins.

### Exemple : Déploiement d'un sous-graphe Uniswap V2

Maintenant que nous comprenons le processus, passons à un exemple complet en configurant un sous-graphe Uniswap V2 sur Core.

First, clone the Uniswap V2 [subgraph repository](https://github.com/Uniswap/v2-subgraph), navigate to the project folder, then execute the following commands from that directory:

```
# Install dependencies with npm (or yarn)
npm install

# Generate subgraph code
npm run codegen
```

Now we'll make a few required changes to the _subgraph.yaml_ and _helpers.ts_ files:

- _subgraph.yaml_:
  - Change network name to `core` on lines 9 and 37.
  - Update the factory address on line 11.
  - Update the `startBlock` on line 13 to a reasonable block height (current block height available [here](https://scan.coredao.org/)).
- _src/mappings/helpers.ts_:
  - Update the factory address on line 11.

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

### Authorization

To prevent your subgraph from being overwritten by others, please contact us on [discord](https://discord.com/invite/coredaoofficial) for an authorization key.\
\
If you are testing against the TestNet Graph, here is an access token for general testing purpose: **a9a79c2aea604bfaa861ff93d46d0d11**.
