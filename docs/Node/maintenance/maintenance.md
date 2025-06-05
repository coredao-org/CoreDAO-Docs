---
sidebar_label: Node Maintenance
hide_table_of_contents: false
sidebar_position: 2
---

# Node Maintenance
---

## Binary
All the clients are suggested to upgrade to the latest release. The [latest version](https://github.com/coredao-org/core-chain/releases/latest) is supposed to be more stable and has better performance.


## Storage


### Prune State


According to conducted tests, the performance of full nodes degrades when the storage size reaches a high volume (approximately 1.5 TB, which is an experimental value). Therefore, it is suggested that the full node always maintain light storage by pruning unnecessary data.


#### Rules for Pruning
1. **Do not try to prune an archive node.** Archive nodes need to maintain **ALL** historic data by definition.
2. Ensure there is at least **40 GB** of storage space still available on the disk that will be pruned. Failures have been reported with **~25GB** of free space.
3. Geth is fully synced
4. Geth has finished creating a snapshot that is at least **128 blocks** old. This is true when "state snapshot generation" is no longer reported in the logs.


#### How to prune:
1. Stop the geth process
2. Run the prune command


   ```   nohup geth --datadir ~/node snapshot prune-state > . /prune.log 2>&1 & ```


3. Check `prune.log`, wait for the prune operation to complete, and start geth.




The maintainers should always have a few backup nodes in case one of the nodes is getting pruned. The hardware is also essential, **make sure the SSD meets: 4TB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms**.




### Prune Ancient Data in Real Time


Ancient data is block data that is already considered immutable. This is determined by a threshold which is currently set at **90000**. This means that blocks older than **90000** are considered ancient data. We recommend the `--prunceancient` flag to users who don't care about the ancient data. This is also recommended for users who want to save disk space, as it will only retain data for the latest **90000** blocks.  Note that once this flag is enabled, the ancient data will not be recoverable, and you cannot restart your node without this flag in the start-up command.


How to use the flag:


```bash
./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --pruneancient=true --syncmode=full
```




### Prune Block Tools


Core offers the offline feature to prune undesired ancient block data. It will discard the block, receipt, and header in the ancient database to save space.


How to prune:


1. Stop the Geth process.
2. Run the following command


```bash
./geth snapshot prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024
```


`block-amount-reserved` is the number of ancient data blocks that you want to keep after pruning.


## Light Storage
When the node crashes or is forcibly killed, it will sync from a block that was a few minutes or a few hours old. This is because the state in memory is not persisted to the database in real-time, and the node needs to replay blocks from the last checkpoint once it starts. The replay time depends on the `TrieTimeout` configuration in the `config.toml`. It is recommended to increase the value for `TrieTimeout` to accommodate long replay times, allowing the node to maintain a lightweight storage.


## Upgrade Geth


Please read [this guide](network-upgrade.md)

