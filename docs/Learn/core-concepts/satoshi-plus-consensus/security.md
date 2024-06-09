---
sidebar_label: Security
hide_table_of_contents: false
sidebar_position: 2
description: Learn about the Security Model of Core Chain
---

# Core Chain's Approach to Security
---

## Overview
Core Chain, as a revolutionary Bitcoin-aligned EVM blockchain, leverages the Satoshi Plus consensus mechanism to ensure an optimal blend of security, decentralization, and scalability. This approach harnesses the intrinsic security features of Bitcoin while enabling robust smart contract functionality and DeFi integration, making it a pioneering platform in the blockchain space.

## Security Components
### 1. Delegated Proof of Work (DPoW) and Delegated Proof of Stake (DPoS)
Core Chain incorporates these two powerful mechanisms to form a balanced and secure blockchain environment. The DPoW extends the proven security model of Bitcoin by allowing miners to delegate hashing power to Core Chain, thereby benefiting from Bitcoin’s immense hash rate and security pedigree. On the other hand, DPoS enables both BTC (through non-custodial staking) and CORE token holders to stake their assets with validators on the Core network, promoting a decentralized network governance and additional security layers.

### 2. Validator Security
Validators are central to maintaining the integrity and security of the Core Chain. They are selected based on the combined weight of staked tokens (CORE and BTC) and delegated hash power, ensuring that only the most supported and trusted nodes handle the consensus process. This dual support system mitigates the risk of centralization and security breaches.

### 3. Security Through Incentivization
The Satoshi Plus mechanism incentivizes both miners and stakers (CORE and BTC) by providing rewards in CORE tokens, aligning their interests with the network’s longevity and integrity. This economic incentivization helps sustain a robust participation level, crucial for maintaining a secure and decentralized network.

## Security Protocols and Implementations
1. **Robust Transaction Validation**
Core Chain validators are responsible for verifying transactions and creating new blocks. The unique combination of DPoW, DPoS, and Non-custodial BTC Staking ensures that these validators have sufficient computational and stake-based support to perform their roles effectively, reducing the likelihood of fraudulent activities and ensuring the accuracy of the blockchain ledger.

2. **Network Resilience Against Attacks**
The integration of Bitcoin’s hash power with CORE and BTC staking makes the Core Chain exceptionally resilient against various types of attacks. The high cost of attacking such a hybrid system, combined with distributed consensus achieved through delegated mechanisms, significantly enhances network security.

3. **Upgradability and Flexibility**
Unlike traditional blockchains that rely solely on a single form of consensus, Core Chain’s hybrid model allows for adaptability and upgradability. This flexibility ensures that the network can evolve in response to emerging security threats or advancements in blockchain technology.

## Attack Vectors and Security Measures in the Core Chain Ecosystem

The Core Chain employs a robust security architecture to mitigate potential threats, integrating both technological safeguards and economic incentives within the Satoshi Plus consensus mechanism. Here is an expanded view on how these mitigations are achieved for each potential attack vector.

### Double Spending Attacks
- **Description:** Double spending involves an attacker attempting to spend the same digital currency twice.
- **Mitigation Achieved By:**
  - **Integration of PoW and PoS:** Utilizing Bitcoin’s mining network for its PoW component adds significant hashing power, which makes rewriting the blockchain costly and impractical. The PoS component requires validators to have skin in the game, making malicious activities financially damaging to the attacker themselves.
  - **Enhanced Transaction Validation:** Every transaction is validated by both miners and stakers, providing dual layers of verification against inconsistencies or fraud.

### 51% Attacks
- **Description:** These attacks occur when a single entity gains control of more than half of the network's computational power or staking capacity.
- **Mitigation Achieved By:**
  - **Decentralized Validator Base:** By requiring validators to be backed by substantial staking and hashing contributions, the system ensures a broad distribution of control, diluting the power any single miner or group might have.
  - **Economic Disincentives:** The cost associated with acquiring sufficient resources to control more than half of both mining and staking aspects of the network makes such attacks economically disadvantageous.

### Sybil Attacks
- **Description:** An attacker creates numerous fake identities to gain disproportionate influence over the network.
- **Mitigation Achieved By:**
  - **Economic Barriers:** Staking and mining requirements introduce significant financial barriers to entry, discouraging the proliferation of false identities as each must be backed by substantial real resources.
  - **Identity Verification via Staking and Mining:** Validators are known entities that must continuously prove their commitment through ongoing mining and staking, ensuring only genuine participants control the network.

### Long-Range Attacks
- **Description:** Attackers attempt to revert the blockchain to a previous state by building an alternative chain from a past point.
- **Mitigation Achieved By:**
  - **Checkpointing:** Core Chain implements periodic checkpointing where the state of the blockchain at certain intervals is solidified, preventing reversion past these points.
  - **Finality Mechanism:** The blockchain employs mechanisms that confer finality on blocks after a certain number of confirmations, making it impossible to alter the chain’s history beyond these confirmed blocks.

### Economic Incentive Alignment
- **Description:** Ensuring all network participants are economically incentivized to act in the network's best interest.
- **Mitigation Achieved By:**
  - **Reward Distribution:** Miners, stakers, and validators receive rewards that correlate with their contribution to network security, aligning their economic incentives with the overall health and security of the blockchain.
  - **Penalties for Dishonest Behavior:** Validators and miners stand to lose their stakes or future earning potential if found to be acting maliciously, adding a layer of financial deterrence against misconduct.

### Governance Attacks
- **Description:** These involve exploiting the governance mechanism to pass unfavorable or malicious proposals.
- **Mitigation Achieved By:**
  - **Broad Consensus Requirements:** Proposals require broad consensus across a diverse set of stakeholders, minimizing the risk that a small, concentrated group can unilaterally affect changes.
  - **Transparent Proposal and Voting Process:** All governance actions are recorded transparently on the blockchain, ensuring traceability and accountability.

### Smart Contract Vulnerabilities
- **Description:** Vulnerabilities in smart contract code can be exploited to conduct thefts or manipulate services.
- **Mitigation Achieved By:**
  - **Code Audits and Security Reviews:** Regular and thorough audits of smart contract code by independent security firms help identify and rectify potential vulnerabilities.
  - **Bug Bounty Programs:** Encouraging the community and security researchers to find and report bugs ensures that many potential exploits are caught early by offering rewards for their discovery.


## Conclusion
Core Chain's security strategy is deeply integrated with its unique consensus mechanism, Satoshi Plus, which leverages the strengths of both Bitcoin's mining capabilities and the staking mechanisms prevalent in modern blockchains. Furthermore, Core Chain's security strategy is multi-faceted, addressing potential vulnerabilities through technical safeguards, economic incentives, and community-driven processes. This comprehensive approach not only enhances the resilience of the network against attacks but also fosters a robust ecosystem where stakeholders are motivated to maintain and protect the network's integrity. As Core Chain continues to develop and integrate new features, its foundational focus on security remains a critical component in its design and operation, ensuring that it remains a secure and trustworthy platform for users and developers alike.
