---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Descripción general de apostar en Core

---

Staking is a fundamental component of Core's Satoshi Plus consensus mechanism. It allows both CORE token holders and Bitcoin holders to participate in securing the network and earn rewards. Unlike traditional Proof of Stake systems, Core's unique architecture enables two distinct staking mechanisms: CORE token delegation and Bitcoin timelocking, which together with Bitcoin miner participation form the basis of validator selection and network security.

## Cómo funciona el staking en la blockchain central

Core's staking system combines multiple participation methods that contribute to validator election through a hybrid scoring mechanism. Each validator receives a hybrid score based on three factors: Bitcoin miner support (DPoW), delegated CORE tokens (DPoS), and timelocked Bitcoin.

### CORE Token Staking

CORE token holders can delegate their tokens to validators without transferring ownership:

1. Token holders select a validator to delegate to
2. Upon delegation, tokens remain in the holder's custody but are locked for staking
3. Validators receive the delegated stake, which strengthen their position in validator election
4. Rewards earned by validators are shared with delegators proportionally to their stake

### Bitcoin Staking

Bitcoin holders can participate in Core's Satoshi Plus consensus through Bitcoin's native timelocking mechanism:

1. Bitcoin holders use the CLTV function to timelock their Bitcoin for a specified period
2. During timelock creation, they include metadata specifying their chosen validator and reward address
3. The timelocked Bitcoin amount contributes to the selected validator's hybrid score for election
4. As the validator produces blocks, the Bitcoin holder receives CORE rewards proportional to their timelocked amount
5. When the timelock period ends, the Bitcoin becomes spendable again, the validator loses that delegated support, and the Bitcoin holder no longer collects CORE rewards

### Validator Election

The validator set is determined through an election process using the hybrid score:

1. Every round, all validators receive a hybrid score based on delegated CORE tokens, timelocked Bitcoin, and Bitcoin miner support
2. The top 27 validators with the highest hybrid scores are elected to the active validator set
3. Elected validators produce blocks and validate transactions on the Core blockchain
4. Rewards accumulated during each round are distributed at the end of the round
5. The next round's validator set is determined based on updated hybrid scores

## Economía de apuestas

**Reward Sources:**

- **Block Rewards:** New CORE tokens are minted according to a fixed 81-year schedule with a 3.61% annual reduction rate
- **Transaction Fees:** A portion of fees from transactions on the Core blockchain contributes to the consensus reward pool

## Importance of Staking

Staking plays several critical roles in the Core ecosystem:

- **Security:** By requiring validators to have significant support (in terms of delegated CORE, timelocked Bitcoin, and miner support), the network promotes validators with aligned incentives with the broader ecosystem
- **Decentralization:** The three-pronged approach to validator election mitigates centralization vectors
- **Economic Sustainability:** The staking mechanism distributes rewards to various participants, incentivizing symbiotic participation
- **Bitcoin Utility Enhancement:** By enabling Bitcoin holders to participate in consensus while maintaining custody, Core extends Bitcoin's utility beyond simple value storage

## Dinámicas y estrategias de apuesta

Los participantes de la red Core pueden adoptar varias estrategias de participación para maximizar sus retornos e influencia en la red:

- **Validator Performance:** Delegating to high-performing validators is crucial, as rewards are not accrued by delegators to inactive or malicious validators.
- **Risk Management:** Diversifying the delegation across multiple validators can help mitigate risks associated with the potential failure of a single validator.

## Conclusión

Core's staking architecture represents a significant innovation in consensus design by bridging Bitcoin and modern staking mechanisms. By enabling both CORE and Bitcoin holders to participate in consensus, Core creates a robust, multi-layered security model that aligns incentives across different participant groups.