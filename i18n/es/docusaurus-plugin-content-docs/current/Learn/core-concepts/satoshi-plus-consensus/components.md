---
sidebar_label: Componentes principales
hide_table_of_contents: false
sidebar_position: 2
description: Conozca los componentes principales del mecanismo Satoshi Plus
---

# Satoshi Plus Consensus

---

Satoshi Plus is Core's innovative consensus mechanism that unites Bitcoin's security with EVM programmability to secure a uniquely powerful blockchain ecosystem. By integrating three distinct participation methods—Bitcoin miner contributions via Delegated Proof of Work (DPoW), CORE token delegation via Delegated Proof of Stake (DPoS), and Bitcoin timelocking and delegation via Self-Custodial Bitcoin Staking—Satoshi Plus creates a robust security framework that aligns incentives across both the Bitcoin and Core ecosystems. This multi-layered approach is designed to prevent any single group from controlling the network, while enabling Bitcoin holders to earn yield, Bitcoin miners to receive supplemental rewards, and CORE holders to participate in network security—all while maintaining Bitcoin's fundamental security properties and extending them to protect Core's smart contract functionality.

![satoshi-plus](../../../../../../../static/img/staoshi-plus/consensus-components.png)

## Componentes principales del mecanismo Satoshi Plus

<p align="center">
![component-diagram](../../../../../../../static/img/Core-Architecture.png)
</p>

**Validators:** Validators are responsible for producing blocks and validating transactions on the Core network. Cualquiera puede convertirse en validador de Core registrándose en la red y bloqueando un depósito de token CORE reembolsable.

**Validator Election:** The validator set is determined through an election, with validators chosen based on their hybrid score for each round. Any validator in the current validator set which hasn't been jailed or slashed is considered "live". To ensure a more stable TPS, the live validators are updated every 200 blocks, meaning that if any validators are jailed or slashed, the others can continue producing blocks as usual.

**Hybrid Score:** Every validator node seeking to become part of the validator set receives a hybrid score, calculated based on three factors: hash power delegated by Bitcoin miners/mining pools (DPoW), delegated CORE tokens from CORE stakers (DPoS), and Bitcoin delegated from Bitcoin stakers (timelocking). The validator set is currently composed of the top 27 validators with the highest hybrid scores.

**Bitcoin Miners:** Bitcoin miners secure the Bitcoin network via Delegated Proof of Work and can delegate their support to a Core validator by including specific metadata in the coinbase transaction of a newly mined block. This delegation is non-destructive, meaning miners continue their primary role of securing Bitcoin while simultaneously supporting Core.

**CORE Stakers:** Holders of Core's native CORE tokens can participate in network security by delegating their tokens to validators, earning rewards proportional to their delegation and the liveness of their chosen validators.

**Bitcoin Stakers (Timelockers):** Bitcoin holders can timelock their Bitcoin on the Bitcoin blockchain using Bitcoin's native CLTV function, effectively making their Bitcoin unspendable for the designated period of time. In exchange for timelocking their Bitcoin, Bitcoin holders earn the right to participate in the Core validator election. When their elected validators secure Core, the Bitcoin holder earns CORE rewards.

**Relayers:** Relayers transmit Bitcoin block headers to the Core network. Cualquiera puede convertirse en retransmisor registrándose y bloqueando un depósito de token CORE reembolsable.

**Verifiers:** Verifiers monitor the network for malicious behaviors. Successful verification of violations may result in slashing a malicious validator's rewards or stake, or jailing them, with verifiers receiving compensation for this oversight. Cualquiera puede actuar como verificador en la red Core.

**Round:** A round lasts one day, during which the top 27 validators (ranked by hybrid score) serve as block producers. At the end of each round, rewards are calculated and distributed, and a new validator set is selected for the next round.