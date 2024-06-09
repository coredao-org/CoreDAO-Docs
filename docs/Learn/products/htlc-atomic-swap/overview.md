---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---

# Overview 
---

## What are HTLC Atomic Swaps?
Hashed TimeLock Contracts (HTLCs) atomic swaps are a sophisticated mechanism used to facilitate direct, trustless cryptocurrency exchanges between parties across different blockchain networks. This technology plays a crucial role in enhancing interoperability and enabling decentralized trading without the need for intermediaries such as exchanges. Here’s a breakdown of how HTLC atomic swaps work in general:

## Concept of HTLC Atomic Swaps
1. **Cryptographic Hash Functions:** At the heart of an HTLC atomic swap is the use of a cryptographic hash function. This function allows a party to generate a secret hash that can lock and unlock a transaction. The hash and its corresponding preimage (the original data used to create the hash) are central to ensuring that transactions can only be completed if all conditions are met.
2. **TimeLocks:** TimeLocks are another critical component. They ensure that the funds in a transaction can only be accessed within a specified time frame. If the transaction conditions are not met within this period, the funds are automatically returned to the original owner. This feature protects the participants by ensuring that their funds aren't permanently locked if the swap doesn't complete.

## HTLC Atomic Swaps in Core Chain
In the context of Core Chain, Hashed TimeLock Contracts (HTLC) atomic swaps are a sophisticated method for conducting trustless, peer-to-peer exchanges between different blockchain systems, including Bitcoin and other EVM-compatible chains. This technology utilizes cryptographic hash functions combined with time-bound contracts to ensure secure and simultaneous swaps of cryptocurrency across blockchain networks without needing a trusted intermediary.

## Importance in the Core Chain Ecosystem
HTLC atomic swaps are vital for enhancing the interoperability and flexibility of the Core Chain ecosystem. They enable users to seamlessly exchange assets like Bitcoin with coreBTC or other tokens within the Core Chain, thereby connecting Core Chain more closely with the broader blockchain environment. This capability is essential for fostering a robust Bitcoin DeFi (BTCFi) ecosystem, where Bitcoin can be effectively utilized in various decentralized applications.

## Advantages of HTLC Atomic Swaps
- **Trustlessness:** HTLC atomic swaps do not require trust in a counterparty or intermediary, as the contracts are self-executing and only release funds when all conditions are met.
- **Security:** The use of cryptographic proofs prevents the possibility of fraud during the transaction process.
- **Decentralization:** By enabling direct swaps between individuals without intermediaries, HTLC supports the decentralized ethos of the blockchain community.
- **Cross-Blockchain Compatibility:** HTLCs facilitate the exchange of assets across different blockchain networks, enhancing liquidity and user engagement across ecosystems.

## How HTLC Atomic Swaps Work
The process of conducting an HTLC atomic swap involves several key steps:

1. **Contract Creation:** Party A creates an HTLC on their blockchain (e.g., Bitcoin), locking their funds in a contract that can only be unlocked with a specific cryptographic hash. A deadline is set, after which the funds can be reclaimed if the conditions are not met.

2. **Engagement from Party B:** Party B, on another blockchain (e.g., Core Chain), sees the contract and creates a corresponding HTLC on their chain, using the same cryptographic hash provided by Party A. Party B’s funds are similarly locked with a deadline that is typically shorter than Party A's deadline to prevent misuse.

3. **Revelation of the Secret:** Party A reveals the secret to Party B’s blockchain to claim the funds locked in Party B’s HTLC. This revelation is public, and the transaction includes the cryptographic hash that unlocks the contract.

4. **Completion of the Swap:** Once Party A has claimed Party B's funds, the secret is now public, allowing Party B to claim the funds locked in Party A’s original contract on the Bitcoin blockchain. 

5. **Transaction Finality:** If any party fails to act before the deadline (e.g., Party A does not reveal the secret), the funds can be reclaimed by the original owner once the contract expires. This ensures that funds are not permanently locked in the event of incomplete swaps.

## Conclusion
HTLC atomic swaps are a critical component of Core Chain's strategy to integrate Bitcoin more deeply into its DeFi ecosystem, allowing seamless and secure transactions across blockchains while maintaining user sovereignty and trust. This mechanism significantly contributes to the liquidity and usability of digital assets within the Core Chain environment, promoting a more interconnected and efficient blockchain space.