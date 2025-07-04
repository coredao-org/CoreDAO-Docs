---
sidebar_label: Upgrading Geth
hide_table_of_contents: false
sidebar_position: 2
---

# How to Upgrade Geth
---

Updating `geth` is as easy as it gets. You just need to download and install the newer version of `geth`, shut down your node, and restart with the new software. Geth will automatically use the data of your old node and sync the latest blocks that were mined since you shut down the old software.


### Step 1: Compile the New Version or download new pre-built binaries from the release


```bash
git clone https://github.com/coredao-org/core-chain

make geth
```

```bash
# Download pre-built binaries

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

### Step 2: Stop Geth

```
$ pid=`ps -ef | grep geth | grep -v grep | awk '{print $2}'`
$ kill  $pid
```

### Step 3: Restart
:::note
Ensure that you use the same start-up command as before the upgrade.
:::


```bash
##
./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```