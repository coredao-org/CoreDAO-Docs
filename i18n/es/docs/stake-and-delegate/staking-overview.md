---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Descripción general de apostar en Core

---

El staking es un componente fundamental del mecanismo de consenso Satoshi Plus de Core. Permite tanto a los holders de tokens CORE como a los holders de Bitcoin participar en la seguridad de la red y ganar recompensas. A diferencia de los sistemas tradicionales Proof of Stake, la arquitectura única de Core permite dos mecanismos de staking distintos: la delegación de tokens CORE y el timelocking de Bitcoin, que junto con la participación de los mineros de Bitcoin forman la base de la selección de validadores y la seguridad de la red.

## Cómo funciona el staking en la blockchain central

El sistema de staking de Core combina múltiples métodos de participación que contribuyen a la elección de validadores mediante un mecanismo de puntuación híbrida. Cada validador recibe una puntuación híbrida basada en tres factores: el apoyo de mineros de Bitcoin (DPoW), los tokens CORE delegados (DPoS) y los Bitcoin en timelock.

### Staking de Tokens CORE

Los holders de tokens CORE pueden delegar sus tokens a validadores sin transferir la propiedad:

1. Los holders de tokens seleccionan un validador al cual delegar
2. Al delegar, los tokens permanecen bajo custodia del titular pero quedan bloqueados para staking
3. Los validadores reciben el stake delegado, lo que fortalece su posición en la elección de validadores
4. Las recompensas obtenidas por los validadores se comparten con los delegadores proporcionalmente a su participación

### Staking de Bitcoin

Los holders de Bitcoin pueden participar en el consenso Satoshi Plus de Core mediante el mecanismo nativo de timelocking de Bitcoin:

1. Los holders de Bitcoin utilizan la función CLTV para hacer timelock de su Bitcoin por un período especificado
2. Durante la creación del timelock, incluyen metadatos que especifican su validador elegido y la dirección de recompensas
3. El monto de Bitcoin en timelock contribuye a la puntuación híbrida del validador seleccionado para su elección
4. A medida que el validador produce bloques, el poseedor de Bitcoin recibe recompensas en CORE proporcionales al monto en timelock
5. Cuando finaliza el período de timelock, el Bitcoin vuelve a estar disponible para gastar, el validador pierde ese apoyo delegado y el poseedor de Bitcoin deja de recibir recompensas en CORE

### Elección de Validadores

El conjunto de validadores se determina mediante un proceso de elección basado en hybrid score:

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