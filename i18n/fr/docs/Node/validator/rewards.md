---
sidebar_label: Validator Rewards
hide_table_of_contents: false
sidebar_position: 2
---

# Récompenses des validateurs dans l'écosystème de Core

---

L'écosystème Core est conçu pour inciter à la participation et sécuriser l'engagement de sa communauté à travers un système de récompenses bien structuré. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. These rewards are critical for compensating validators for their efforts and operational costs.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. The amount of rewards a validator gets is proportional to their stake and the delegated hash power from miners. Il existe deux catégories de récompenses de validateur:
    1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
    2. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un cycle est miné. Currently, **90%** of the rewards are allocated to the validators, and **10%** of the rewards are distributed to the `System Reward Contract`. Of the 90% paid to validators, a percentage is taken as a commission by the validator before they distribute it to their delegates. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

Validators share rewards with the entities that delegated to them – including CORE stakers, Bitcoin stakers, and PoW delegators – but they decide how much to give back by determining how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous to attract more stake and hash power.

Les validateurs sont tenus de partager les récompenses avec les délégués qui ont staké du CORE ou délégué de la puissance de hachage à leur profit. Given the fact that each validator has an equal probability of producing blocks, all stable validators should get a similar portion of the rewards in the long run. La part que les validateurs gardent pour eux-mêmes (**frais de commission**) sera directement versée à leurs adresses de frais à la fin de chaque tour.

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

- $$rH$$: Récompenses attribuées à la puissance de hachage déléguée (DPoW).
- $$rS$$: Récompenses attribuées au staking de CORE (DPoS).
- $$rB$$: Récompenses attribuées au staking de BTC.
- $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
- $$m$$: Proportion des récompenses allouées à la puissance de hachage.
- $$k$$: Proportion des récompenses allouées au staking de CORE.
- $$l$$: Proportion des récompenses allouées au staking de BTC.
- $$S$$: Score hybride du validateur.

Per-unit reward calculations determine the rewards distributed for each staked unit of hash power, CORE, or BTC:

- Récompense par unité de puissance de hachage : $$rHu$$ =  $$\frac{rH}{rHp}$$
- Récompense par unité de CORE : rSu = $$\frac{rS}{rSp}$$
- Récompense par unité de BTC :  $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicateur de rendement pour le Niveau<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e.g., f, g, h, etc.) that is determined by a user's staking data, as well as system dual staking settings. The settings are subject to change and can be configured through governance voting. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (BTC et CORE). For their part, delegators will try to optimize their rewards by choosing validators with lower amounts of delegated hash power and stake. To maximize their rewards, delegators will look for both validators who are generous in their payouts and also don’t already have a substantial amount of delegated CORE tokens or delegated Proof-of-Work (PoW). Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Since payouts are determined in part by the percentage of the total stake each delegator accounts for, they’ll be incentivized to seek out validators with small delegations. Furthermore, BTC staking rewards are influenced by dual staking tiers, encouraging greater network participation without prescribing specific strategies.

## Impact of Dual Staking on Bitcoin Staking Rewards

With the introduction of Dual Staking, Bitcoin Staking staking rewards are now tiered based on the amount of CORE staked relative to BTC. Bitcoin staking rewards are no longer evenly distributed across all participants. Elles sont à la place allouées de manière dynamique en fonction des seuils de dual staking, les paliers supérieurs recevant généralement une plus grande proportion des récompenses. This tiered structure introduces variability in Bitcoin staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

## Stratégie de Distribution des Récompenses

Core suit les principes de distribution suivants:
\* **Équité:** Le système de récompenses est conçu pour être équitable, en veillant à ce que les contributions, qu'elles soient sous forme de staking, de minage ou de participation à la gouvernance, soient reconnues et récompensées équitablement.
\* **Transparence:** Tous les aspects de la distribution des récompenses sont transparents, permettant aux participants de comprendre comment les récompenses sont calculées et distribuées.
\* **Sécurité:** Le mécanisme de distribution est sécurisé contre la manipulation et les abus, en utilisant des protections cryptographiques et basées sur des contrats intelligents pour garantir l'intégrité du processus de récompense.

## Prévention des comportements malveillants des validateurs

Les comportements malveillants des validateurs sont découragés par le slashing et l'emprisonnement. Les vérificateurs peuvent soumettre des preuves pour que les validateurs soient pénalisés ou emprisonnés s'ils ne remplissent pas leurs obligations. Les principales actions passibles de pénalités sont l'inaccessibilité et la signature double. Unavailability is reported by validators themselves in the consensus algorithm, and external verifiers report double signing. Pour plus d'informations, veuillez consulter le guide détaillé sur le [slashing et l'emprisonnement](../slashing/overview.md).