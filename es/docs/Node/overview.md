---
sidebar_label: Overview of Nodes Running on Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# Nodes in the Core Chain Ecosystem

---

In the Core Chain ecosystem, the robustness, security, and decentralization of the network are upheld by the nodes operated by community participants. These nodes facilitate various functions, from transaction validation to block propagation, ensuring the network's overall health and efficiency. Depending on your goals, there are different node configurations possible on the Core network. If you haven't already started the Core Chain node, please review the documentation for [Running a Local Validator Node](./validator/running-validator.md) before proceeding with different configurations.

- If you want to be part of the governance of the Core Nework:

  - [Start a Validator Node](./config/validator-node-config.md)

- If you want to run a Core Chain node for private use:
  - [Start a Normal Full Node](./Full-Node/on-mainnet.md)

- If you want to send transactions or query the chain directly from your own Core Chain node:

  - [Start an RPC Node](./config/rpc-node-config.md)

- If you want to query historical chain data since the genesis block:

  - [Start an Archive Node](./config/archive-node-config.md)

- If you want to help node operators sync up quickly with the network:

  - [Start a Snapshot Node](./config/snapshot-node-config.md)

## Types of Nodes on the Core Chain Network

1. **Validators:**
   - **Role:** Validators are crucial for securing the network by producing blocks and validating transactions within the Core Chain’s consensus framework.
   - **Requirements:** Validators need to stake minimum amount of **10,000 CORE tokens** to participate, aligning their financial incentives with the network's performance and security.
   - **Incentives:** Validators earn rewards in CORE tokens for their active role in maintaining and securing network operations.

2. **Normal Full Nodes:**
   - **Role:** Normal Full Nodes maintain a complete, real-time copy of the blockchain ledger, validate transactions, and support the network by relaying block and transaction data. These are essentially useful for private use.
   - **Requirements:** Operating a Full Node requires significant computational and storage resources to handle the complete blockchain data and continuous network traffic.

3. **RPC Nodes:**
   - **Role:** RPC Nodes provide an application programming interface (API) for developers and external applications to interact with the blockchain, facilitating queries and transactions.
     **Importance:** They are essential for the development and operation of decentralized applications (DApps) and for external access to the blockchain’s data.

4. **Archive Nodes:**
   - **Role:** Archive Nodes store the entire history of the blockchain including all states and transactions since the genesis block, providing a valuable resource for deep historical queries.
   - **Requirements:** These nodes require extensive storage capacity as they keep all expired and current states of the blockchain, making them resource-intensive.
   - **Usage:** Archive Nodes are crucial for developers needing access to all historical blockchain data for analysis, audits, and advanced blockchain querying.

5. **Snapshot Nodes:**
   - **Role:** Snapshot Nodes maintain copies of blockchain snapshots at various intervals. These snapshots include the state of the blockchain at a given block height, offering a restore point for Full Nodes or new nodes.
   - **Benefits:** They provide a means for rapid synchronization and recovery of other nodes in the network, enhancing the resilience and scalability of the network infrastructure.

## Importance of Each Node Type

- **Validators** ensure transaction validity and network consensus.
- **Full Nodes** and **Archive Nodes** provide redundancy and data integrity.
- **RPC Nodes** enable application development and interaction with the blockchain.
- **Snapshot Nodes** aid in efficient network scaling and faster node synchronization.

## Conclusion

The diverse roles of nodes in the Core Chain ecosystem collectively ensure the blockchain is secure, efficient, accessible, and robust. Validators, Full Nodes, and Archive Nodes form the backbone of the network's security and data integrity. At the same time, RPC Nodes, and Snapshot Nodes provide flexibility, accessibility, and scalability. This multi-faceted node architecture supports a wide range of operations from transaction processing to complex dApp interactions and historical data analysis.
