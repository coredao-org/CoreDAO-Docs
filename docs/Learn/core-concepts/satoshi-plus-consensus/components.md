---
sidebar_label: Major Components
hide_table_of_contents: false
sidebar_position: 2
description: Learn about the major components of the Satoshi Plus Mechanism
---

# Major Components of Satoshi Plus Consensus
---
* **Validators:** Validators are responsible for producing blocks and validating transactions on the Core network. Anyone can become a Core validator by registering with the network and locking up a refundable CORE token deposit.

* **Validator Election:** The validator set is determined through election, with validators chosen based on their hybrid score for each round. Any validator in the current validator set which hasn’t been jailed or slashed is considered “live”. To ensure a more stable TPS, the live validators are updated every 200 blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual.

* **Hybrid Score:** Every validator node seeking to become part of the validator set is given a hybrid score, which is calculated based on three factors: the DPoW from Bitcoin miners, the DPoS from CORE holders, and Bitcoin holders delegating Bitcoin to their preferred validators. The validator set is made up of the 23 validators with the highest hybrid scores.

* **Bitcoin Miners:** Bitcoin miners secure the Bitcoin network via PoW, and can delegate their PoW to a Core validator by including certain information in the coinbase transaction of a block as it’s in the process of being mined. This delegation is non-destructive, meaning that they’re re-purposing their existing work, not choosing between securing Bitcoin and securing Core.

* **Bitcoin Stakers:** The third leg of Satoshi Plus consensus is non-custodial Bitcoin staking, which allows any Bitcoin holder to earn yield by staking their Bitcoin tokens without giving up custody.

* **CORE Stakers:** All holders of Core’s native CORE tokens are able to underwrite the network’s security by delegating their token holdings to a validator.

* **Relayers:** Relayers transmit Bitcoin block headers to the Core network. Anyone can become a relayer by registering and locking up a refundable CORE token deposit.

* **Verifiers:** Verifiers are responsible for reporting malicious behaviors on the network. Successful verification flags may result in slashing a malicious validator’s rewards or stake, or by jailing them outright. Verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a verifier on the Core network.

* **Round:** A round is the period during which the Core network updates the validator set and distributes rewards. At present, a round is one day. Every round (i.e., every day), all validators are given a hybrid score, and the 23 validators with the highest hybrid scores are elected to the validator set. The validator set then becomes responsible for producing blocks on the Core network for the entirety of that round. When the last block of each round has been produced, the accumulated rewards for the full round are calculated and distributed, and the validator set for the next round is also determined.

* **Slot:** Each 1-day round is divided into slots, and all validators in the validator set take turns producing one block per slot, in a round-robin manner. Currently, the slot length is set to three seconds. In each slot, an honest validator either produces a block or fails to do so (if there are network issues, eclipse attacks, etc.).

* **Epoch:** An epoch is the span of time during which the system checks each validator’s status to exclude jailed validators from participating in consensus activities. Currently, an epoch is set to 200 slots, which is 600 seconds or 10 minutes. Validator status is checked once per epoch (rather than continuously) to keep TPS roughly constant in a given round.
