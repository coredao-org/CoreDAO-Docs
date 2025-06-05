---
sidebar_label: Validator Node
hide_table_of_contents: false
sidebar_position: 2
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Validator Nodes on Core
---


Validators are crucial for securing the network by producing blocks and validating transactions within the Core’s Satoshi Plus consensus framework.


## System Requirements


There are several system requirements, both software and hardware, for setting up a Validator node on the Core network.


### Software


* **Operating System:** Currently, a Core Validator node is compatible _only_ with **macOS** or **Linux** operating systems (Ubuntu 20.04 or later).
* **Network Connectivity:** Stable internet connection with low latency and high availability
* **Firewall Configuration:** Open necessary ports to allow communication with the network and other nodes


### Hardware


A Validator node on Core participates in block production and transaction validation, ensuring network security and consensus. Validators are elected based on their hybrid score (delegated Bitcoin hash power, CORE staking, and Bitcoin staking) and take turns producing blocks. They play a critical role in maintaining blockchain integrity and earning rewards for securing the network. The following are the hardware requirements for running Validator Nodes on Core.


<Tabs
  defaultValue="testnet2"
  values={[
    {label: 'Testnet2', value: 'testnet2'},
    {label: 'Testnet', value: 'testnet'},
    {label: 'Mainnet', value: 'mainnet'},
  ]}>
  <TabItem value="testnet2">
    For Validator Nodes on **Core testnet2**, following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                                          |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |


  </TabItem>
  <TabItem value="testnet">
    For Validator Nodes on **Core Testnet**, the following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 4 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                    |
    | **RAM**            | 8 Gigabytes                                                                                             |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
  <TabItem value="mainnet">
   For Validator Nodes on **Core Mainnet**, the following minimum hardware specifications are recommended:


    | Requirements   | Details                                                                                                 |  
    |----------------|---------------------------------------------------------------------------------------------------------|
    | **Storage**        | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
    | **CPU**            | Minimum 8 CPU cores are recommended. Multi-core processors enable the node to handle simultaneous operations such as transaction validation and block verification efficiently.                                                                             |
    | **RAM**            | 32 Gigabytes                                                                                            |
    | **Internet Speed** | A broadband Internet connection with upload/download speeds of 10 megabytes per second.                 |
  </TabItem>
</Tabs>





