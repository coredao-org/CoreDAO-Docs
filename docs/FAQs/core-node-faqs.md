---
sidebar_label: Core Nodes FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Core Nodes FAQs
---

### 1. What are the different types of nodes supported on the Core blockchain?

On the Core network, a Core full node stores the entire history of the Core blockchain, enabling anyone to verify the state of any account. A Core full node can take many forms:

- **Normal full node:** for private use.
- **Validator full node:** acts as a validator on Core, validating blocks and transactions.
- **RPC full node:** provides RPC services and responds to HTTP requests.

Other than this, Core also supports

- **Archive node:** stores the entire blockchain data of Core from the genesis block.
- **Snapshot nodes:** store snapshots to help other nodes fast-track syncing to the network.

### 2. What are the benefits of running a Core Node?

Running a Core Full Node offers several benefits, including enhanced network security and decentralization. Operators can independently verify transactions and are not dependent on third parties. Validators using full nodes can participate in block production and validation, earning potential rewards. Nodes configured as RPC servers provide valuable network services. The setup requires adherence to specific hardware and bandwidth specifications, which vary depending on the node's function: full, validator, or RPC server.

### 3. What is a Core Full Node? What are the hardware/software requirements for running a Core Full node?

A Core full node stores the entire history of the Core blockchain, enabling anyone to verify the state of any account. A Core full node can take many forms:

- **Normal full node:** for private use.
- **Validator full node:** acts as a validator on Core, validating blocks and transactions.
- **RPC full node:** provides RPC services and responds to HTTP requests.

**Software Requirements:** Currently, a Core Full Node can only run on Mac OS X and Linux

**Core Testnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space |
| CPU | 4 CPU cores |
| RAM | 8 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

**Core Mainnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space |
| CPU | 4 CPU cores |
| RAM | 32 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

### 4. What is a Core RPC node? What are the hardware/software requirements for running a Core RPC node?

RPC (Remote Procedure Call) nodes on the Core network play a crucial role in facilitating interaction between external applications and the Core blockchain. They serve as the interface through which developers and users can query and interact with the blockchain, making them essential for the functioning of decentralized applications (DApps) and other blockchain services.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 8 CPU cores |
| RAM | 16 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 50Mbps |

**Core Mainnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 16 CPU cores |
| RAM | 32 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 50Mbps |

For more details, refer to [RPC node configuration guide](../Node/config/rpc-node-config.md)

### 5. What is a Core Validator Node? What are the hardware/software requirements for running a Core Validator node?

Validators are crucial for securing the network by producing blocks and validating transactions within the Core blockchain's Satoshi Plus consensus framework.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 4 CPU cores |
| RAM | 8 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 10Mbps |

**Core Mainnet Full Node Hardware Specifications**

| **Requirements** | **Details** |
| ---------------- | ----------- |
| Storage | 1 TB of free disk space, solid-state drive (SSD), gp3, 8k IOPS, 250MB/S throughput, read latency \<1ms. |
| CPU | 8 CPU cores |
| RAM | 32 Gigabytes |
| Internet Speed | A broadband Internet connection with upload/download speeds of 10Mbps |

For more details, refer to [Validator Node Configurations Guide](../Node/config/validator-node-config.md)

### 6. How do I set up a full node on the Core blockchain?

Refer to the detailed guide [here](../Node/config/full-node.md) for instructions on setting up and running a full node on the Core network.