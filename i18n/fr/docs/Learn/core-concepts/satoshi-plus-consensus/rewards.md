---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
---

# Récompenses de consensus

---

## Aperçu

Le système de récompense du réseau Core est un composant fondamental du **consensus Satoshi Plus**, alignant les incitations entre les mineurs, les stakers, les validateurs, les relais et les vérificateurs. Grâce à ce système, les participants sont indemnisés pour contribuer à la sécurité, à la décentralisation et à la gouvernance du réseau.

Les récompenses sont réparties entre quatre catégories principales :

1. Minage (DPoW)
2. Staking (CORE et Bitcoin)
3. Opérations de validation
4. Rôles au niveau système (Relais et Vérificateurs)

## 1) Récompenses de minage (Preuve de travail déléguée)

**Qui gagne**: Les mineurs Bitcoin et les pools de minage

**Mécanisme**:

- Les mineurs incluent des métadonnées de délégation de validation dans les blocs Bitcoin qu'ils exploitent.
- Cela leur permet d'étendre leur soutien à Core sans détourner de ressources du minage de Bitcoin.
- En retour, les mineurs gagnent des **jetons CORE** en tant que récompenses supplémentaires.

## 2. Récompenses de staking (CORE & Bitcoin)

**Qui gagne**: Les détenteurs de tokens CORE ou de Bitcoin

**Mécanisme**:

- Les participants délèguent des tokens CORE ou du Bitcoin verrouillé dans le temps aux validateurs.
- Le pouvoir de vote est proportionnel au nombre de tokens Core délégués.
- Les récompenses sont distribuées en fonction des performances du validateur et de la part du participant dans la délégation totale.

Les récompenses du staking encouragent une participation à long terme et donnent aux délégateurs une influence sur la sélection des validateurs.

## 3. Récompenses des validateurs

**Qui gagne**: Les validateurs ainsi que leurs délégateurs(miners, CORE stakers, Bitcoin stakers)

**Mécanisme**:

- Les validateurs gagnent à partir de deux sources :
  - **Récompenses de bloc**, c'est-à-dire des jetons CORE nouvellement frappés
  - **Frais de transaction**: Collectés à partir de chaque bloc traité
- Les récompenses sont calculées et distribuées à la **fin de chaque tour** (200 blocs / ~1 jour)

**Partage des Récompenses**:

- **90%** des récompenses vont aux validateurs (ainsi qu'à leurs délégateurs et votants)
- **10%** est alloué au **Contrat de Récompense Système**
- Validators take a commission before distributing remaining rewards to their delegators

Validators are incentivized to offer competitive reward shares to attract delegators.

## 4. Reward Distribution Formula

After validator commission, the protocol calculates delegator rewards based on contribution type:

#### Délégateurs de Puissance de Hachage (Mineurs et Pools de Minage)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

#### Stakers CORE

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

#### Stakers de Bitcoin

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

## 5. Per-Unit Reward Calculations

Les calculs de récompense par unité déterminent la part de récompenses distribuée pour chaque unité de puissance de hachage, de CORE ou de BTC stakée :

- **Per unit hash power reward:** $$rHu$$ = $$\frac{rH}{rHp}$$
- \*\*Récompense par unité de CORE : $$rSu$$ = $$\frac{rS}{rSp}$$
- **Per unit BTC reward:** $$rBu$$ of **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e, f, g, h,..., etc) that is determined by a user's staking data as well as system Dual Staking settings. The settings are dynamically set through governance and reward users for pairing CORE and Bitcoin staking.

## 6. Dual Staking Impact on Bitcoin Rewards

Bitcoin staking rewards are tiered based on how much CORE a delegator has staked relative to their Bitcoin delegation.

- Higher tiers (e.g., Satoshi Tier) receive larger reward multipliers
- This creates a **market-driven incentive** for pairing CORE with Bitcoin to boost returns

Learn more about [Dual Staking](../dual-staking/overview.md).

## 7. Reward Optimization Strategies

Delegators are incentivized to:

- Choose validators with **smaller delegation pools**, where their stake makes up a larger percentage
- Seek out validators with **lower commission fees**
- Balance staking across under-subscribed validators to maximize marginal yield

This dynamic fosters active delegation decisions and validator competition.

## 8. Relayer & Verifier Rewards

### Relayers

- Relay Bitcoin block and transaction data to Core
- Paid from the **System Reward Contract**
- Rewards are batched every **100 Bitcoin blocks**
- Claimed periodically by relayers

### Verifiers

- Monitor validators for malicious behavior (e.g. double signing)
- When they submit valid reports, rewards are issued **immediately** from the System Reward Contract

**Note:** The **System Reward Contract** is capped at **10 million CORE tokens**. Any overflow is **burned**, making excess participation deflationary.

## Conclusion

<p align="center">![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)</p>

Core's reward system properly incentivizes and aligns **miners, stakers, validators, and infrastructure roles**. Through a transparent and configurable system, rewards drive security, decentralization, and sustained community participation across Satoshi Plus consensus.
