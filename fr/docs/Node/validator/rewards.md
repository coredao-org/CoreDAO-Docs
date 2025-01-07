---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Rewards in the Core Ecosystem

---

The Core ecosystem is designed to incentivize participation and secure commitment from its community through a well-structured rewards system. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. Le montant des récompenses qu'un validateur reçoit est proportionnel à son stake et à la puissance de hachage déléguée par les mineurs. Il existe deux catégories de récompenses de validateur:
  1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
  2. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un cycle est miné. Actuellement, **90 %** des récompenses vont aux validateurs et **10 %** sont alloués au `Contrat de Récompense du Système`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

Les validateurs partagent les récompenses avec les entités qui leur ont délégué des fonds – y compris les stakers de CORE, les stakers de Bitcoin et les délégateurs de PoW – Cependant, ils décident eux-mêmes de la part qu'ils (les validateurs) souhaitent conserver avant de la redistribuer. Ils peuvent choisir de garder plus ou moins de récompenses, bien qu'ils soient incités à être généreux afin d'attirer davantage de mises et de puissance de hachage.

Les validateurs sont tenus de partager les récompenses avec les délégués qui ont staké du CORE ou délégué de la puissance de hachage à leur profit. Étant donné que chaque validateur a une probabilité égale de produire des blocs, tous les validateurs stables devraient recevoir une part similaire des récompenses à long terme. La part que les validateurs gardent pour eux-mêmes (**frais de commission**) sera directement versée à leurs adresses de frais à la fin de chaque tour.

Après que les validateurs aient prélevé leurs frais, le protocole utilise cette fonction pour déterminer comment les récompenses restantes sont réparties entre les stakers de CORE, les stakers de BTC et les délégués de puissance de hachage. La distribution des récompenses est calculée en fonction de la formule suivante:

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Où:

- $$rH$$: Rewards attributed to delegated hash power (DPoW).
- $$rS$$: Rewards attributed to CORE staking (DPoS).
- $$rB$$: Rewards attributed to BTC staking.
- $$R$$: Total rewards allocated to all delegators.
- $$m$$: Proportion of rewards allocated to hash power.
- $$k$$: Proportion of rewards allocated to CORE staking.
- $$l$$: Proportion of rewards allocated to BTC staking.
- $$S$$: Hybrid score of the validator.

Per unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

- Per unit hash power reward: $$rHu$$ =  $$\frac{rH}{rHp}$$
- Per unit CORE reward: rSu = $$\frac{rS}{rSp}$$
- Per unit BTC reward: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ is the validator hash power rewards per unit;
- $$rSu$$ is the CORE token staking rewards per unit;
- $$rBu$$ of **P<sub>n</sub>** is the BTC staking rewards per unit for delegator with PN BTC yield level
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e,f,g,h, ..., etc) that is determined by a user's staking data as well as system dual staking settings. The settings are subject to change and are configurable through governance voting. These calculations ensure proportional rewards are distributed based on individual contributions to a validator’s delegation pool.

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (BTC et CORE). De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations. Furhtermore, BTC staking rewards are influenced by dual staking tiers, encouraging greater network participation without prescribing specific strategies.

## Impact of Dual Staking on BTC Rewards

With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

## Stratégie de Distribution des Récompenses

Core follows the following distribution Principles:
\* **Fairness:** The rewards system is designed to be fair, ensuring that contributions, whether in the form of staking, mining, or governance participation, are equitably recognized and rewarded.
\* **Transparence:** Tous les aspects de la distribution des récompenses sont transparents, permettant aux participants de comprendre comment les récompenses sont calculées et distribuées.
\* **Sécurité:** Le mécanisme de distribution est sécurisé contre la manipulation et les abus, en utilisant des protections cryptographiques et basées sur des contrats intelligents pour garantir l'intégrité du processus de récompense.

## Prévention des comportements malveillants des validateurs

Les comportements malveillants des validateurs sont découragés par le slashing et l'emprisonnement. Les vérificateurs peuvent soumettre des preuves pour que les validateurs soient pénalisés ou emprisonnés s'ils ne remplissent pas leurs obligations. Les principales actions passibles de pénalités sont l'inaccessibilité et la signature double. L'inaccessibilité est signalée par les validateurs eux-mêmes dans l'algorithme de consensus, tandis que la double signature est rapportée par des vérificateurs externes. Pour plus d'informations, veuillez consulter le guide détaillé sur le [slashing et l'emprisonnement](../slashing/overview.md).
