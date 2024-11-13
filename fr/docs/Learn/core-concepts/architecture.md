---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Quick Glance at Core's Underlying Blockchain Architecture
---

# Architecture of the Core Blockchain

---

The Core blockchain’s architecture centers on its Satoshi Plus consensus, a tripartite mechanism combining Delegated Proof of Work, Delegated Proof of Stake, and Non-Custodial Bitcoin Staking. On top of Satoshi Plus’ security, Core’s infrastructure also includes a trust-minimized bridged Bitcoin asset in coreBTC, trustless peer-to-peer Bitcoin `<>` Core transactions with HTLC atomic swaps, and more.

Through Satoshi Plus, Bitcoin miners/mining pools, CORE token stakers, and Bitcoin stakers elect validators to secure Core. Validators are elected by these three parties on the basis of a hybrid score, which calculates each validator’s reception of delegated hash power, delegated/staked CORE tokens, and delegated/staked Bitcoin from Bitcoin miners/mining pools, CORE token stakers, and Bitcoin stakers respectively.

Satoshi Plus' Non-Custodial Bitcoin Staking component is the first live Bitcoin staking mechanism, unlocking native yield for Bitcoin for the first time in its history. Without introducing any new trust assumptions to holding Bitcoin, Bitcoin staking via Satoshi Plus establishes the Bitcoin Risk-Free Rate.

Additionally, Satoshi Plus is presently benefitting from the security of ~55% of all Bitcoin mining efforts, manifested in delegated hash power. By involving miners and mining pools in the validator election process, Satoshi Plus benefits from Bitcoin’s unrivaled decentralization while also providing miners with supplemental rewards at no additional cost, a valuable proposition as Bitcoin block rewards continue to decline.

![component-diagram](../../../static/img/staoshi-plus/component-diagram.jpg)

## Major Components, Roles, and Workflows

- **Validators:** Validators are responsible for producing blocks and validating transactions on the Core network. Anyone can become a Core validator by registering with the network and locking up a refundable CORE token deposit.

- **Validator Election:** The validator set is determined through election, with validators chosen based on their hybrid score for each round. Any validator in the current validator set which hasn’t been jailed or slashed is considered “live”. To ensure a more stable TPS, the live validators are updated every 200 blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual.

- **Hybrid Score:** Every validator node seeking to become part of the validator set is given a hybrid score, which is calculated based on three factors: the DPoW from Bitcoin miners, the DPoS from CORE holders, and bitcoin holders delegating bitcoin to their preferred validators. The validator set is currently made up of the **27** validators with the highest hybrid scores.

- **Bitcoin Miners:** Bitcoin miners secure the Bitcoin network via PoW, and can delegate their PoW to a Core validator by including certain information in the coinbase transaction of a block as it’s in the process of being mined. This delegation is non-destructive, meaning that they’re re-purposing their existing work, not choosing between securing Bitcoin and securing Core.

- **CORE Stakers:** All holders of Core’s native CORE tokens are able to underwrite the network’s security by delegating their token holdings to a validator.

- **Bitcoin Stakers:** The third leg of Satoshi Plus consensus is non-custodial Bitcoin staking, which allows any bitcoin holder to earn yield by staking their bitcoin tokens without giving up custody.

- **Relayers:** Relayers transmit Bitcoin block headers to the Core network. Anyone can become a relayer by registering and locking up a refundable CORE token deposit.

- **Verifiers:** Verifiers are responsible for reporting malicious behaviors on the network. Successful verification flags may result in slashing a malicious validator’s rewards or stake, or by jailing them outright, and verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a verifier on the Core network.

- **Round:** A round is the period of time during which the Core network updates the validator set and distributes rewards. At present, a round is one day. Every round (i.e. every day), all validators are given a hybrid score, and the 27 validators with the highest hybrid scores are elected to the validator set. The validator set then becomes responsible for producing blocks on the Core network for the entirety of that round. When the last block of each round has been produced, the accumulated rewards for the full round are calculated and distributed, and the validator set for the next round is also determined.

- **Slot:** Each 1-day round is divided into slots, and all validators in the validator set take turns producing one block per slot, in a round robin manner. Currently, the slot length is set to three seconds. In each slot, an honest validator either produces a block or fails to do so (if there are network issues, eclipse attacks, etc).

- **Epoch:** An epoch is the span of time during which the system checks each validator’s status so as to exclude jailed validators from participating in consensus activities. Currently, an epoch is set to 200 slots, which is 600 seconds or 10 minutes. Validator status is checked once per epoch (rather than continuously) in order to keep TPS roughly constant in a given round.

## Delegated Proof of Work

To participate in Satoshi Plus, miners and/or mining pools simply write two additional pieces of information in the `op_return` field as they produce a new Bitcoin block:

1. The address of the Core Validator that the miner wants to delegate their hash power to.
2. The address that the miner would like its CORE token rewards to be sent to.

In exchange for participating in the consensus process by delegating their hash power to vote for Validators, miners receive supplemental CORE token rewards in addition to their existing bitcoin rewards. In sum, Satoshi Plus receives Bitcoin miner participation and Bitcoin receives better compensated (i.e. more highly incentivized) miners.

## Delegated Proof of Stake

Delegated Proof of Stake is the method of involving Core users in the security of the protocol. To participate in consensus, any CORE token holder can stake their CORE tokens with Core Validators, thus voting for those Validators in the same way that a miner might delegate its hash power to elect a validator.

Similarly, just as miners receive rewards, CORE token stakers also earn CORE token rewards for contributing to the Satoshi Plus consensus. One significant advantage of Delegated Proof of Stake compared to standard Proof of Stake models is that the former allows all token holders to participate equally, whereas the latter sometimes only allows large holders to stake.

## Non-Custodial Bitcoin Staking

Satoshi Plus’s methodology for integrating bitcoin staking centers on absolute time locks, a Bitcoin-native cryptographic feature that locks up the outputs of a transaction for a pre-defined period of time, during which they can’t be spent. Rather than holders giving up custody of Bitcoin to external staking, stakers with Satoshi Plus merely place their Bitcoin in absolute time locks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Within that transaction, stakers must include a script containing the same information that Bitcoin miners include in their delegated blocks:

1. The address of the Core Validator the staker wants to delegate their bitcoin to.
2. The address that the staker would like their CORE token rewards to be sent to.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards, for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core). The end result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while also expanding the scope of Bitcoin’s utility.

## Validator Election

The synthesis of Delegated Proof of Work, Delegated Proof of Stake, and Non-Custodial Bitcoin Staking occurs during the election of the Satoshi Plus validator set.

The validators who receive the highest combination of delegated hash power, staked CORE, and staked Bitcoin are elected to the validator set. The highest combination is determined by a hybrid score, which balances the three elements.

## Rewards

Satoshi Plus rewards are derived from:

1. CORE block rewards to be paid out over an 81 year period
2. Transaction fees paid in CORE tokens. Following successful block production, validators earn these CORE token rewards

Since elected validators are entirely dependent upon their delegators, when they receive block rewards and transaction fees for producing blocks, they pay the majority of their rewards back to their delegating miners, CORE stakers, and Bitcoin stakers.

Rewards paid out to delegators are allocated proportional to their voting power. So, whatever weight their vote carried in the hybrid score calculation is the proportion of rewards they will receive from validators.

## Slashing and Security

In traditional Proof of Stake systems, stakers run the risk of being slashed if they fail to maintain a secure and reliable node, behave maliciously, or engage in activities that compromise the network’s integrity. In Satoshi Plus, this remains true for validators. Validators are held to a high standard, because their entire duty is to honestly adhere to the ruleset of Satoshi Plus. Thus, if they fail to perform, their locked up CORE token deposit is slashed, resulting in a serious economic penalty in addition to accruing zero rewards.

While slashing keeps validators maximally accountable, Satoshi Plus’ design is not meant to penalize participants for actions they don’t control. Therefore, miners, CORE stakers, and Bitcoin stakers have no risk of their staked or delegated assets/power being slashed. Their incentive to choose the best validators lies in the rewards they can accrue from selecting diligently. Their risk for choosing the wrong validators is that they won’t receive rewards that they otherwise would receive. That economic penalty serves as an effective incentive while also being fair to stakers.

## Other Workflow Details

1. **Block Production and Round Robin:** Validators take turns producing blocks in a round-robin manner. Each round is divided into slots, with a length currently set to 3 seconds.
2. **Reward Module:** Rewards are distributed at the end of each round based on validators' performance. The Reward Module calculates and distributes these rewards accordingly.
3. **Epochs and Validator Quorum Updates:** Epochs, set to 200 slots (or 10 minutes), are the cycle lengths for checking each validator's status. Jailed validators are excluded from the quorum to keep the Transaction Per Second (TPS) rate stable throughout the round.

## Other Core Infrastructure

### Core-Native Wrapped Bitcoin (coreBTC)

coreBTC is a Core-native bridged Bitcoin asset maintaining a 1:1 peg with Bitcoin, using over-collateralized Lockers for secure and trust-minimized minting and redemption. This design enables Bitcoin participation in Core’s DeFi activities and smart contracts without involving centralized custody. While coreBTC is not essential for Satoshi Plus or engaging with Core DeFi, it does permit Bitcoin holders a trust-minimized and Core-native way to port their assets to the Core blockchain.

### HTLC Atomic Swaps

Hashed TimeLock Contracts (HTLCs) enable the trustless, peer-to-peer exchange of tokens between Core and other blockchains, including (and especially) Bitcoin.

### Future Enhancements

- **Dual Staking:** Higher Bitcoin staking rates are to be enabled for stakers of both Bitcoin and CORE tokens.
- **Fee Market Development:** Core may adopt local fee markets to make Bitcoin transactions more predictable and economical, thus supporting Bitcoin's use as a viable means of payment.
- **HTLC Improvements:** Enhancements to the atomic swap process, including the introduction of liquidity pools and order book supplements, are being designed to facilitate more efficient trading and liquidity management.

## Conclusion

Core’s architecture is designed to make it the ideal platform for BTCfi. Satoshi Plus not only extends Bitcoin’s protection but also reinforces its security model while introducing native yield for Bitcoin for the first time. This comprehensive design secures an end-to-end BTCfi ecosystem, unlocking the full potential of the Bitcoin asset.
