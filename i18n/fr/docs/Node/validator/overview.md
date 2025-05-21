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

Les récompenses de base sont distribuées lorsque le dernier bloc du tour(round) est confirmé. Actuellement,**90%** du total des récompenses de base sont alloués aux validateurs, tandis que les **10%** restants sont envoyés au Contrat de Récompense du Système. Des 90% alloués aux validateurs, chaque validateur reçoit des récompenses proportionnelles au nombre de blocs qu'ils produisent. À long terme, tous les validateurs stables devraient recevoir des parts approximativement égales, puisque la production de blocs est uniformément répartie.

Les frais de transaction suivent la même logique de distribution. **90%** du total des frais de transaction collectés pendant le tour sont distribués aux validateurs. Les validateurs peuvent appliquer leur taux de commission à ce montant avant de distribuer les récompenses restantes à leurs délégateurs. Les **10%** restants des frais sont déposés dans le Contrat de Récompense Système.

Les validateurs partagent les récompenses avec les délégateurs qui ont misé du CORE, délégué du BTC ou contribué à la puissance de hachage. Bien que les taux de commission soient flexibles, les validateurs sont incités à offrir des taux compétitifs afin d'attirer davantage de délégation et de renforcer leur score hybride.

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