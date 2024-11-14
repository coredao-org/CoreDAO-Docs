---
sidebar_label: Mise à niveau de Geth
hide_table_of_contents: false
sidebar_position: 2
---

# How to Upgrade Geth

Mettre à jour `geth` est un processus simple. Il vous suffit de télécharger et d'installer la nouvelle version de `geth`, d'arrêter votre nœud et de le redémarrer avec le nouveau logiciel. Geth utilisera automatiquement les données de votre ancien nœud et synchronisera les derniers blocs minés depuis que vous avez arrêté l'ancien logiciel.

### Étape 1 : Compiler la nouvelle version ou télécharger les nouveaux binaires précompilés depuis la page des versions

```bash
git clone https://github.com/coredao-org/core-chain

make geth
```

```bash
# Download pre-build binaries

# Linux
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth

# MacOS
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
make geth
```

### Étape 2 : Arrêter Geth

```

$ pid=`ps -ef | grep geth | grep -v grep | awk '{print $2}'`
$ kill  $pid

```

### Étape 3 : Redémarrer

:::note
Assurez-vous d'utiliser la même commande de démarrage que celle utilisée avant la mise à jour.
:::

```bash
##
./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```
