---
sidebar_label: Overview
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Regulation

**Slashing** and **jailing** are the two basic mechanisms Core Chain uses to disincentivize validator misbehavior, and understanding how they work will go a long way towards making the incentive structure in Core Chain more comprehensible.

## Slashing and Jailing

"Slashing" refers to cutting either the rewards a validator would have received in exchange for mining blocks, or to slashing the deposit of CORE tokens that a node makes in order to become a validator in the first place. The severity of the slashing punishment is scaled up in proportion to the validator’s misbehavior.

Slashing penalties are generally incurred because a node fails to successfully produce a block during its designated turn in the **round-robin block-mining** procedure as described in the [Validator Election](../validator/validator-election.md) section. If a validator node fails to mine **50 blocks** in a row, the CORE token rewards the validator has accrued so far are slashed completely. This means it matters when a validator fails to mine **50** consecutive blocks. If they fail on the first **50** blocks of a round they surrender only a small amount of accumulated rewards, but if they fail on the last **50** blocks of the round, they surrender everything they’ve earned. If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose **10%** of the deposit made to become a validator, and they are jailed for **three** days, which means they aren’t eligible to be elected to the validator set.

## Slash Sugggestions

Verifiers are responsible for reporting malicious behaviors on the network through slash suggestions. Slash suggestions can be submitted by anyone, and are designed to punish malicious actors. The submission requires evidence of wrongdoing, but if the allegations prove true, the rewards earned greatly exceed the costs.

As with slash suggestions, verifiers are charged with reporting double signing, and also have to submit evidence of this activity. If their allegations are borne out, they are rewarded for keeping the network safe.

While producing blocks, the existing Core validators periodically check whether any current validator has been jailed. If so, they will update the validator set after an epoch (i.e. after 10 minutes). Jailing is designed to exclude misbehaving validators from consensus activities in order to enhance network security and keep TPS stable.

## Penalty for Double Signing

There is a way for a validator to be permanently banned from the network, and that’s by “_double signing_”, i.e. signing two different blocks at an equal block height. Whereas unavailability could plausibly be the result of a bad network connection, double signing is strong evidence of willful malfeasance. Theoretically, it is possible for benign double signing to occur, if a validator upgrades the version of the network they’re running and forgets to update their address. Make sure you’re diligent when performing network updates. Validators caught double signing surrender all rewards, 100% of their validator deposit, and are thereafter barred from participating in mining blocks.
