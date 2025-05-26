---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
description: Conozca los componentes principales del mecanismo Satoshi Plus
---

# Consenso Satoshi Plus

---

Satoshi Plus es el innovador mecanismo de consenso de Core que combina la seguridad de Bitcoin con la programabilidad de la EVM para asegurar un ecosistema blockchain único y potente. Al integrar tres métodos de participación distintos—contribuciones de mineros de Bitcoin mediante Delegated Proof of Work (DPoW), delegación de tokens CORE mediante Delegated Proof of Stake (DPoS) y timelocking de Bitcoin y delegación de Bitcoin mediante Staking Autocustodiado—Satoshi Plus crea un marco de seguridad robusto que alinea los incentivos tanto en el ecosistema de Bitcoin como en el de Core. Este enfoque multinivel está diseñado para evitar que un solo grupo controle la red, al mismo tiempo que permite a los poseedores de Bitcoin generar rendimientos, a los mineros de Bitcoin recibir recompensas adicionales y a los poseedores de CORE participar en la seguridad de la red, todo ello manteniendo las propiedades fundamentales de seguridad de Bitcoin y extendiéndolas para proteger la funcionalidad de contratos inteligentes de Core.

![satoshi-plus](../../../../static/img/staoshi-plus/consensus-components.png)

## Componentes principales del mecanismo Satoshi Plus

<p align="center">
![component-diagram](../../../../static/img/Core-Architecture.png)
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