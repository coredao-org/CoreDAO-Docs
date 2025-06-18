---
sidebar_label: Core Subgraph
hide_table_of_contents: false
sidebar_position: 2
---

# Core Subgraph utilisant GraphQL

---

Les développeurs peuvent utiliser un sous-graphe auto-hébergé pour extraire des données de la blockchain Core, les traiter et les stocker pour une utilisation via GraphQL. Voici comment créer et déployer cet outil puissant.

## URLs et Clés Importantes

### Core Mainnet

<table><thead><tr><th width="342">URL</th><th>Utilisation</th></tr></thead><tbody><tr><td><strong>URL de gestion</strong>: <em>https://thegraph.coredao.org/deploy/</em></td><td>Utiliser pour créer/déployer des sous-graphes (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>URL IPFS</strong>: <em>https://thegraph.coredao.org/ipfs/</em></td><td>Utiliser pour déployer des sous-graphes.</td></tr><tr><td><strong>URL de requête HTTP</strong>: <em>https://thegraph.coredao.org</em></td><td>Utiliser pour interroger des données depuis des sous-graphes.</td></tr><tr><td><strong>Health check URL</strong>: <br/><em>https://thegraph-is.coredao.org</em> </td><td>Utiliser pour vérifier la santé des sous-graphes.</td></tr></tbody></table>

### Core Testnet2

<table><thead><tr><th width="345">URL</th><th>Utilisation</th></tr></thead><tbody><tr><td><strong>URL de gestion</strong>: <br/><em>https://thegraph-node.test2.btcs.network</em></td><td>Utiliser pour créer/déployer des sous-graphes (<em>--node</em> or <em>-g</em>).</td></tr><tr><td><strong>URL IPFS</strong>: <br/><em>https://thegraph-ipfs.test2.btcs.network</em></td><td>Utiliser pour déployer des sous-graphes.</td></tr><tr><td><strong>URL de requête HTTP</strong>: <br/><em>https://thegraph.test2.btcs.network</em></td><td>Utiliser pour interroger des données depuis des sous-graphes.</td></tr><tr><td><strong>Health check URL</strong>: <br/><em>https://thegraph-sub.test2.btcs.network</em></td><td>Utiliser pour vérifier la santé des sous-graphes.</td></tr></tbody></table>

## Étapes Générales pour la Configuration du Sous-Graphe

### Créer un Répertoire

Suivez le [guide officiel de The Graph](https://thegraph.com/docs/en/developing/creating-a-subgraph/) pour créer votre répertoire de sous-graphe. Dans le but de deployer sur le de sous-graphe Core, assurez-vous de définir le nom du réseau dans `subgraph.yaml` sur core. Selon votre sous-graphe, il peut y avoir quelques modifications supplémentaires à effectuer. Vous trouverez des détails supplémentaires dans la section d'exemple complète ci-dessous.

### Créer et Déployer

Pour créer et déployer votre sous-graphe, exécutez les commandes suivantes dans le répertoire de votre projet de sous-graphe.

```bash
# Créer le sous-graphe
graph create your-subgraph-name --node https://thegraph.coredao.org/deploy/

# Déployer le sous-graphe
graph deploy your-subgraph-name --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/
```

La commande de déploiement `graph deploy` devrait retourner l'URL HTTP de requête pour votre sous-graphe, que vous pouvez intégrer dans votre application selon vos besoins.

## Exemple : Déploiement d'un sous-graphe Uniswap V2

Maintenant que nous comprenons le processus, passons à un exemple complet en configurant un sous-graphe Uniswap V2 sur Core.

Premièrement, clonez le [répertoire du sous-graphe](https://github.com/Uniswap/v2-subgraph) Uniswap V2, accédez au dossier du projet, puis exécutez les commandes suivantes depuis ce répertoire :

```
# Installer les dépendances avec npm (ou yarn)
npm install

# Générer le code du sous-graphe
npm run codegen
```

Maintenant nous allons apporter quelques modifications nécessaires aux fichiers _subgraph.yaml_ et _helpers.ts_ :

- _subgraph.yaml_:
  - Changez le nom du réseau en `core` aux lignes 9 et 37.
  - Mettez à jour l'adresse du factory à la ligne 11.
  - Mettez à jour le `startBlock` à la ligne 13 avec une hauteur de bloc raisonnable (la hauteur actuelle du bloc est disponible [ici](https://scan.coredao.org/)).
- _src/mappings/helpers.ts_:
  - Mettez à jour l'adresse du factory à la ligne 11.

Finalement, nous allons exécuter les commandes de création et de déploiement. Pour éviter les problèmes de compatibilité, utilisez la version de graph-cli installée dans le projet (au lieu de la version globale) en préfixant la commande `graph` avec `./node_modules/.bin/`.

```bash
# Créer un nouveau sous-graphe appelé uniswap-4-test
./node_modules/.bin/graph create uniswap-4-test --node https://thegraph.coredao.org/deploy/

# Déployer le sous-graphe uniswap-4-test
./node_modules/.bin/graph deploy uniswap-4-test --node https://thegraph.coredao.org/deploy/ --ipfs https://thegraph.coredao.org/ipfs/

# Le déploiement devrait imprimer une URL HTTP de requête similaire à :
# https://thegraph.coredao.org/subgraphs/name/uniswap-4-test
```

Félicitations, votre sous-graphe est déployé ! Vous pouvez maintenant intégrer l'URL de requête HTTP imprimée par la commande de déploiement dans votre site web et l'utiliser pour interroger les données.

## Autorisation

Pour empêcher que votre sous-graphe soit écrasé par d'autres, veuillez nous contacter sur [Discord](https://discord.com/invite/coredaoofficial) pour obtenir une clé d'autorisation.

If you are testing against the Core Testnet2 Graph, here are the access tokens for general testing purpose:

- **Clé générale pour Core Testnet2:** b020b95e511443699e72a10c697f84c0
