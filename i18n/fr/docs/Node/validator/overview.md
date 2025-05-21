---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Les validateurs sur Core Network

---

Sur la Core blockchain, les validateurs sont des nœuds essentiels chargés de maintenir la sécurité, la décentralisation et l'intégrité du réseau. Ils valident les transactions, produisent de nouveaux blocs et participent à la gouvernance via le consensus Satoshi Plus unique de Core, qui combine la Preuve de Travail Déléguée (DPoW), la Preuve de Participation Déléguée (DPoS) et la mise en jeu auto-custodée de Bitcoin pour assurer la décentralisation, la sécurité et l'évolutivité.

## Rôle de validateur et participation au consensus

Les validateurs sont responsables du maintien de la santé et de la continuité du réseau. En participant au consensus, ils confirment la validité des transactions et contribuent à la production de blocs. Le consensus Satoshi Plus sélectionne les validateurs en fonction d'un système de notation hybride qui prend en compte le Bitcoin délégué, les jetons CORE et la puissance de hachage Bitcoin.

Les ensembles de validateurs sont alternés périodiquement, et les élections de validateurs ont lieu par périodes, généralement toutes les 24 heures (UTC+0), pour sélectionner les **27** meilleurs validateurs actifs en fonction de leurs scores hybrides. Les validateurs inactifs restants doivent attendre le prochain cycle d'élections pour devenir des validateurs actifs avant de pouvoir participer à la production de blocs.

## Économie des récompenses

Les validateurs reçoivent des récompenses en jetons CORE pour participer au mécanisme de consensus de Core et produire des blocs. Les récompenses sont distribuées à la fin de chaque tour (environ toutes les 24 heures) et proviennent de deux sources principales :

- **Base rewards:** Nouveaux jetons CORE nouvellement frappés.
- **Transaction fees:** Frais collectés à partir des transactions incluses dans chaque bloc pendant le tour(round).

Chaque validateur peut fixer son propre taux de commission(**commission rate**), la part des récompenses qu'il conserve avant de distribuer le reste à ses délégateurs. Les frais de commission sont distribués directement à l'adresse de frais spécifiée par le validateur à la fin de chaque tour(round).

Core n'implémente pas d'auto-ajout (**not implement self-bonding**). Les validateurs ne sont pas tenus de miser des CORE sur eux-mêmes pour participer. Ils ne gagnent des commissions que si d'autres participants délèguent des fonds vers eux. Si un validateur mise sur son propre validateur, il reçoit des récompenses comme n'importe quel délégateur régulier - et non en tant que commission.

Les récompenses de base sont distribuées lorsque le dernier bloc du tour(round) est confirmé. Currently, **90%** of total base rewards are allocated to validators, while the remaining **10%** is sent to the `System Reward Contract`. Of the 90% allocated to validators, each validator receives rewards proportional to the number of blocks they produce. In the long term, all stable validators are expected to receive approximately equal shares, since block production is uniformly distributed.

Transaction fees follow the same distribution logic. **90%** of total transaction fees collected during the round are distributed to validators. Validators may apply their commission rate to this amount before distributing the remaining rewards to their delegators. The remaining **10%** of fees is deposited into the `System Reward Contract`.

Validators share rewards with delegators who staked CORE, delegated BTC, or contributed hash power. While commission rates are flexible, validators are incentivized to offer competitive rates in order to attract more delegation and strengthen their hybrid score.

Commission fees are paid directly to each validator’s designated fee address at the end of every round.

> **Note:** Rewards are settled **per round**, not per block. Each round corresponds to a full validator election cycle (~24 hours, UTC+0).

<p align="center">
![validator-reward-distribution](../../../static/img/validator/Rewards-In-Core-Ecosystem.png) 
</p>

### Sample Reward Calculation

Let us assume that the base reward for a round is **3000 CORE** and that a certain validator sets its commission rate to **20%**. These tokens do not go directly to the proposer. Instead, they are shared among validators and delegators. These **3000 CORE** will be distributed according to each participant's stake. Assume that the fees generated from all transactions in all the blocks in a round was **100 CORE**.

Assume that the base reward for a round is **3,000 CORE**, and a validator sets a **20%** commission rate. These tokens are not paid directly to the proposer but are distributed among all validators and their delegators proportionally. The base reward, 3000 CORE in this case, will be distributed according to each participant's stake. Also, assume that transaction fees collected during the round total **100** CORE.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE

    System Reward Contract gets = 3,100 x 10% = 310 CORE  

    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE

    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE

    Total Reward Validator gets = Commission = 558 CORE

    All Delegators gets = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

## Potential Risks and Penalties for Validators

While validators in the Core ecosystem are incentivized through block rewards and transaction fees, the role also carries operational and economic risks. Validators are expected to maintain performance, uptime, and network integrity. Failure to do so may result in penalties that impact both reputation and earnings.

1. **Slashing:** Validators may be subject to slashing if they engage in malicious or negligent behavior, such as: double signing blocks, extended downtime or inactivity, violating consensus rules, etc. Slashing results in a portion of the validator's staked CORE being permanently forfeited, directly impacting financial holdings and trustworthiness.

2. **Jailing:** Validators that consistently underperform, go offline, or breach protocol rules may be jailed. A jailed validator is temporarily removed from the active validator set, making them ineligible to produce blocks or earn rewards. Repeated jailing can also lead to long-term reputation damage within the community or removal from the network.

3. **Loss of Delegation:** Delegators may withdraw their stake from underperforming validators and reallocate it to more reliable ones. This can significantly reduce a validator’s reward share.

4. **Stake Lock-up and Liquidity:** Validators are required to lock **10,000 CORE tokens** as collateral to become part of Core network of validators participating in consensus. These tokens are subject to lock-up periods and cannot be withdrawn or transferred during that time. This introduces liquidity risk, especially during volatile market conditions or unforeseen validator downtime.

5. **Operational and Security Risks:** Validators must maintain secure, high-availability infrastructure. Failures in system security, uptime, or performance may result in missed blocks, slashing, or jailing. Validators are responsible for monitoring their systems, maintaining software updates, and ensuring reliable operations around the clock.