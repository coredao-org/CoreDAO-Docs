---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
description: Découvrez le processus d'élection des validateurs
---

# Processus d'Élection des Validateurs sur le Réseau Core Chain

---

## Aperçu

Les validateurs sont une partie cruciale de la blockchain Core. En plus de gérer la validation des transactions et la production de blocs, le processus d'élection des validateurs est le point de convergence de tous les composants du consensus Satoshi Plus, à savoir la DPoW, la DPoS et le staking non-custodial du Bitcoin. Le processus d'élection des validateurs est une fonctionnalité centrale du mécanisme de consensus Satoshi Plus utilisé par Core Chain. Ce processus assure l'intégrité, la sécurité et l'efficacité de la blockchain en élisant les validateurs responsables de la validation des transactions et de la création de nouveaux blocs.

## Importance de l'Élection des Validateurs

- **Sécurité et Intégrité**: Les validateurs maintiennent l'intégrité de la blockchain, rendant un processus d'élection robuste crucial pour garantir que seuls les nœuds les plus fiables gèrent le registre de la blockchain.

- **Décentralisation**: Le processus d'élection permet aux mineurs et aux stakers de participer à la sélection des validateurs, favorisant ainsi la décentralisation et empêchant la concentration du contrôle.

- **Alignement des Incitations**: Les parties prenantes sont incitées à soutenir les validateurs efficaces, alignant ainsi les intérêts à travers le réseau. Les validateurs et leurs supporters (mineurs et stakers) reçoivent des récompenses, garantissant la responsabilité et la participation continue.

- **Efficacité et Évolutivité**: Des validateurs compétents améliorent la capacité de traitement des transactions du réseau, ce qui est crucial pour la performance et l'évolutivité.

## Déroulement du Processus d'Élection des Validateurs

Le processus d'élection des validateurs dans Satoshi Plus implique des étapes clés, soutenues par des équations spécifiques pour quantifier les contributions en staking et en puissance de hachage:

1. **Délégation de Stake**:
   - Les détenteurs de tokens CORE et BTC stakent et délèguent leurs tokens aux candidats validateurs. Cette délégation est une forme de vote, où le poids de chaque vote correspond au nombre de tokens stakés.

2. **Délégation de la Puissance de Hachage**:
   - Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils minent. This process integrates Bitcoin's mining power into Core Chain's security mechanism.

3. **Validator Selection**:
   - Validators are selected based on the total support they receive, calculated by combining staked tokens and delegated hash power. The selection equation is:

$$
   Validator Score = \alpha * {Staked Tokens} + \beta * {Delegated Hash Power} 
$$

- In this equation, $\alpha$ and $\beta$ are weights assigned to staked tokens and delegated hash power, respectively, balancing their contributions to the election process.

4. **Validator Set Formation**:
   A set of Validators is formed from those with the highest scores. This set is dynamically updated to reflect ongoing changes in stake delegations and hash power allocations. There are two steps involved in validator election.

5. Hybrid scores are calculated for all validators in the network with the following equation. Before we added bitcoin staking, we calculated hybrid score for each validator with the following equation:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp}{tSp} * (1 - m) 
$$

Where:

- $rHp$ is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;
- $tHp$ is the total hash power on Core Chain;
- $rSp$ is the amount of CORE tokens delegated by CORE holders to that validator;
- $tSp$ is the total stake on Core Chain;
- $m$ is a dynamic weighting that adjusts over time to ensure a smooth transition during ramp up;

With the implementation of staking, the new hybrid score is calculated with this equation:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Where:

- $rHp$ is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;
- $tHp$ is the total hash power on Core Chain
- $rSp$ is the amount of CORE tokens delegated by CORE token holders to that validator
- $tSp$ is the total amount of CORE tokens stake on Core Chain
- $rBp$ is the amount of BTC tokens delegated by BTC holders to that validator
- $tBp$ is the total amount of BTC staked on Core Chain
- $m$ is a dynamic factor that controls the overall weights of hash power $(0 < m <1)$
- $n$ is a dynamic factor that controls the voting power of each BTC vs. each CORE token.

2. At the end of each round validators are ranked in order of their hybrid score, and the **23** validators with the highest hybrid scores are selected for the validator set in the next round.

Leaving aside the mathematical details, this is essentially a weighted, bicameral voting procedure. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the same mechanism. This delegated PoW and delegated PoS are weighted to determine the hybrid score.

This is the “core” of the Core blockchain, the mechanism by which the network leverages the security and decentralization of the Bitcoin network and the scalability and composability of Ethereum. Letting Bitcoin miners and bitcoin stakers vote on validators allows Core Chain to avail itself of Bitcoin’s legendary robustness; and because Core Chain is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core Chain that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Block Production**:
   - After election, all validators are sorted roughly in order of their hybrid score, and they take turns producing blocks in a **round-robin manner** before the process starts over again from the beginning. By _initially limiting the number of validators to **23**_, Satoshi Plus offers a higher transaction rate and increased scalability, but the number of validators is expected to increase over time as the network grows. What’s more, this mechanism provides additional security through improved efficiency and a tolerance for a large number of Byzantine players. Core Chain is secure as long as no more than $1 \over 3$ of the validators are malicious.

6. **Reward Distribution**:

   - Rewards are distributed based on contributions to network security, using the following formula:

     $$
        rH = \frac{rHp}{tHp} * \frac{m}{S} * R
     $$

     $$
        rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
     $$

     $$
        rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
     $$

     Where:

     - $rH$ is the rewards received by the validator because of the hash power delegated to it (DPoW)
     - $rS$ is the rewards received by the validator because of the CORE delegated to it (DPoS)
     - $rB$ is validator rewards attributed to BTC staking
     - $R$ is the overall rewards attributed to all delegators

     For completeness, here are three other ratios of interest:

     $$
        rHu = \frac{rH}{rHp}
     $$

     $$
        rSu = \frac{rS}{rSp}
     $$

     $$
        rBu = \frac{rB}{rBp}
     $$

     Where:

     - $rHu$ is the validator hash power rewards per unit;
     - $rSu$ is the CORE token staking rewards per unit;
     - $rBu$ is the BTC staking rewards per unit;

   These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated stake (BTC and CORE).

### Flow Diagram of the Validator Election Process

The following diagram visually represents the Validator election process in Satoshi Plus:

![validator-election-flow](../../../../static/img/staoshi-plus/validator-election-flow.png)

This flowchart illustrates the cyclical nature of the validator election and their ongoing responsibilities within the Satoshi Plus consensus mechanism. It emphasizes how stake and hash power delegation directly influence validator selection, block production, and reward distribution, driving a secure, decentralized, and efficiently managed network.
