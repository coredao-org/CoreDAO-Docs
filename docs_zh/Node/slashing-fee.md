---
sidebar_label: Slashing Fee
hide_table_of_contents: false
sidebar_position: 2
---

# Slashing Fees

---

## Unavailability

Slashing penalties are generally incurred because a node fails to successfully produce a block during its designated turn in the **round-robin block-mining** procedure as described in the [Validator Election](../validator/validator-election.md) section.

- If a validator node fails to mine **50 blocks** in a row, the CORE token rewards the validator has accrued so far are slashed completely.
- If they fail on the last **50** blocks of the round, they surrender everything they’ve earned.
- If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose **10%** of the deposit made to become a validator, and they are jailed for **three** days, which means they aren’t eligible to be elected to the validator set.

## Double Sign

Anyone can submit a slash request on CoreChain with the evidence of Double Sign of CoreChain.

### Evidence Validation

- Two block headers have the same height and the same parent block hash
- Two block headers are sealed by the same validator
- Two signatures of these two blocks must not be the same
- The validator should be in the set of current round’s validators.

If the evidence is valid:

1. **1,000 CORE** would be slashed from the self-margined CORE of the validator
2. The slashed validator would be jailed and barred from the network forever
3. **500** of slashed CORE would be allocated to the submitter as a reward
4. The rest of slashed CORE will transfer into System Reward Pool
