---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Aperçu du Staking sur Core

---

Le staking est une composante fondamentale du mécanisme de consensus Satoshi Plus de Core. Cela permet aux détenteurs de jetons CORE et aux détenteurs de Bitcoin de participer à la sécurisation du réseau et de gagner des récompenses. Contrairement aux systèmes traditionnels de Proof of Stake, l'architecture unique de Core permet deux mécanismes de staking distincts : la délégation de jetons CORE et le verrouillage temporel de Bitcoin, qui, avec la participation des mineurs de Bitcoin, forment la base de la sélection des validateurs et de la sécurité du réseau.

## Fonctionnement du Staking sur la blockchain Core

Le système de staking de Core combine plusieurs méthodes de participation qui contribuent à l'élection des validateurs grâce à un mécanisme de notation hybride. Chaque validateur reçoit un score hybride basé sur trois facteurs : le soutien des mineurs Bitcoin (DPoW), les jetons CORE délégués (DPoS) et le Bitcoin verrouillé temporellement.

### Le staking de jetons CORE

Les détenteurs de jetons CORE peuvent déléguer leurs jetons à des validateurs sans transférer la propriété.

1. Les détenteurs de jetons sélectionnent un validateur auquel déléguer leurs jetons.
2. Lors de la délégation, les jetons restent en la garde du détenteur mais sont verrouillés pour le staking.
3. Les validateurs reçoivent la mise déléguée, ce qui renforce leur position dans l'élection des validateurs.
4. Les récompenses gagnées par les validateurs sont partagées avec les délégateurs proportionnellement à leur mise.

### Stakers de Bitcoin

Les détenteurs de Bitcoin peuvent participer au consensus Satoshi Plus de Core grâce au mécanisme de verrouillage temporel natif de Bitcoin.

1. Les détenteurs de Bitcoin utilisent la fonction CLTV (Check Lock Time Verify) pour verrouiller temporairement leur Bitcoin pendant une période spécifiée.
2. Lors de la création du verrouillage temporel, ils incluent des métadonnées spécifiant le validateur choisi et l'adresse de récompense.
3. Le montant de Bitcoin verrouillé temporairement contribue au score hybride du validateur sélectionné pour l'élection
4. As the validator produces blocks, the Bitcoin holder receives CORE rewards proportional to their timelocked amount
5. Lorsque la période de verrouillage temporaire se termine, le Bitcoin redevient dépensable, le validateur perd ce soutien délégué et le détenteur de Bitcoin ne perçoit plus les récompenses CORE

### Élection des Validateurs

L'ensemble des validateurs est déterminé par un processus électoral utilisant le score hybride.

1. À chaque tour, tous les validateurs reçoivent un score hybride basé sur les jetons CORE délégués, les Bitcoins verrouillés temporairement et le soutien des mineurs de Bitcoin.
2. The top 27 validators with the highest hybrid scores are elected to the active validator set
3. Elected validators produce blocks and validate transactions on the Core blockchain
4. Rewards accumulated during each round are distributed at the end of the round
5. The next round's validator set is determined based on updated hybrid scores

## Économie du Staking

**Reward Sources:**

- **Block Rewards:** New CORE tokens are minted according to a fixed 81-year schedule with a 3.61% annual reduction rate
- **Transaction Fees:** A portion of fees from transactions on the Core blockchain contributes to the consensus reward pool

## Importance of Staking

Staking plays several critical roles in the Core ecosystem:

- **Security:** By requiring validators to have significant support (in terms of delegated CORE, timelocked Bitcoin, and miner support), the network promotes validators with aligned incentives with the broader ecosystem
- **Decentralization:** The three-pronged approach to validator election mitigates centralization vectors
- **Economic Sustainability:** The staking mechanism distributes rewards to various participants, incentivizing symbiotic participation
- **Bitcoin Utility Enhancement:** By enabling Bitcoin holders to participate in consensus while maintaining custody, Core extends Bitcoin's utility beyond simple value storage

## Dynamiques et Stratégies de Staking

Les participants dans réseau Core peuvent adopter diverses stratégies de staking pour maximiser leurs rendements et leur influence sur le réseau :

- **Validator Performance:** Delegating to high-performing validators is crucial, as rewards are not accrued by delegators to inactive or malicious validators.
- **Risk Management:** Diversifying the delegation across multiple validators can help mitigate risks associated with the potential failure of a single validator.

## Conclusion

Core's staking architecture represents a significant innovation in consensus design by bridging Bitcoin and modern staking mechanisms. By enabling both CORE and Bitcoin holders to participate in consensus, Core creates a robust, multi-layered security model that aligns incentives across different participant groups.