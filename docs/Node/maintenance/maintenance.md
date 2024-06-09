---
sidebar_label: Node Maintenance
hide_table_of_contents: false
sidebar_position: 2
---

# Node Maintainence

## Binary
All the clients are suggested to upgrade to the latest release. The [latest version](https://github.com/coredao-org/core-chain/releases/latest) is supposed to be more stable and has better performance.

## Storage

### Prune State

According to the test, the performance of a full node will degrade when the storage size reaches a high volume (previously it was 1.5TB, which is an experimental value, the latest number needs to be updated). We suggest that the fullnode always keep light storage by pruning the storage.

#### Rules for Pruning
1.	**Do not try to prune an archive node.** Archive nodes need to maintain **ALL** historic data by definition.
2.	Ensure there is at least **40 GB** of storage space still available on the disk that will be pruned. Failures have been reported with **~25GB** of free space.
3.	Geth is fully sync'd
4.	Geth has finished creating a snapshot that is at least **128 blocks** old. This is true when "state snapshot generation" is no longer reported in the logs.

#### How to prune:
1.	Stop the geth process
2.	Run the prune command 

   ```	nohup geth --datadir ~/node snapshot prune-state > . /prune.log 2>&1 & ```

3.	Check `prune.log`, wait for the prune operation to complete, and start geth.


The maintainers should always have a few backup nodes in case one of the nodes is getting pruned. The hardware is also important, **make sure the SSD meets: 4TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms**.


### Prune Ancient Data in Real Time

Ancient data is block data that is already considered immutable. This is determined by a threshold which is currently set at **90000**. This means that blocks older than **90000** are considered ancient data. We recommend the `--prunceancient` flag to users who don't care about the ancient data. This is also advised for users who want to save disk space since this will only keep data for the latest **90000** blocks.  Note that once this flag is turned on, the ancient data will not be recovered again and you cannot go back running your node without this flag in the start-up command. 

How to use the flag:

```bash
./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --pruneancient=true --syncmode=full
```


### Prune Block Tools

Core offers the offline feature to prune undesired ancient block data. It will discard block, receipt, and header in the ancient database to save space.

How to prune:

1. Stop the Geth process.
2. Run the following command

```bash
./geth snapshot prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024
```

`block-amount-reserved` is the number of ancient data blocks that you want to keep after pruning. 

## Light Storage
When the node crashes or been force killed, the node will sync from a block that was a few minutes or a few hours ago. This is because the state in memory is not persisted into the database in real time, and the node needs to replay blocks from the last checkpoint once it start. The replaying time depends on the configuration `TrieTimeout` in the config.toml.  We suggest you raise it if you can tolerate with long replaying time, so the node can keep light storage.

## Upgrade Geth

Please read [this guide](network-upgrade.md)