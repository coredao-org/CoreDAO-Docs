---
sidebar_label: Élection des Validateurs
hide_table_of_contents: false
sidebar_position: 2
---

# Validator Election Process on the Core Network

---

## Aperçu

Les validateurs sont une partie cruciale du réseau Core. En plus de valider les transactions et produire des blocs, le processus d’élection des validateurs est l’endroit où tous les composants (DPoW, DPoS, et le staking non-custodial de Bitcoin) du consensus Satoshi Plus se réunissent. The Validator election process is a central feature of the Satoshi Plus consensus mechanism employed by Core blockchain. Ce processus garantit l’intégrité, la sécurité et l’efficacité de la blockchain en élisant les validateurs responsables de la validation des transactions et de la création de nouveaux blocs.

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
   - Les mineurs de Bitcoin délèguent une partie de leur puissance de hachage en spécifiant leurs validateurs préférés dans les blocs Bitcoin qu'ils minent. This process integrates Bitcoin's mining power into Core's security mechanism.

3. **Sélection des Validateurs**:
   - Les validateurs sont sélectionnés en fonction du soutien total qu'ils reçoivent, calculé en combinant les tokens stakés (BTC et CORE) et la puissance de hachage de Bitcoin déléguée.

4. **Formation du Groupe de Validateurs**:
   Un groupe de validateurs est formé à partir de ceux ayant les scores les plus élevés. Ce groupe est mis à jour dynamiquement pour refléter les changements continus dans les délégations de stake et les allocations de puissance de hachage. Il y a deux étapes dans l'élection des validateurs.

5. Les scores hybrides sont calculés pour tous les validateurs du réseau avec l'équation suivante. Le score hybride pour chaque validateur est calculé par la formule suivante :

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Where, $$m + k + l = 1$$

- $$rHp$$: Bitcoin hash power delegated to a validator.
- $$tHp$$: Total hash power on Core.
- $$rSp$$: Amount of CORE tokens staked to a validator.
- $$tSp$$: Total CORE tokens staked on Core.
- $$rBp$$: Amount of BTC tokens staked to a validator.
- $$tBp$$: Total BTC tokens staked on Core.
- $$m$$: Ratio assigned to hash power.
- $$k$$: Ratio assigned to CORE staking.
- $$l$$: Ratio assigned to BTC staking.

2. At the end of each round validators are ranked in order of their hybrid score, and the _27_\* validators with the highest hybrid scores are selected for the validator set in the next round.

En laissant de côté les détails mathématiques, il s'agit essentiellement d'une procédure de vote pondérée et bicamérale. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined), CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the delegation of their tokens. This delegated PoW, delegated PoS, and Non-Custodial BTC Staking are weighted to determine the hybrid score.

C'est le "cœur" de la blockchain Core, le mécanisme par lequel le réseau exploite la sécurité et la décentralisation du réseau Bitcoin ainsi que la scalabilité et la composition des chaînes PoS comme Ethereum. Letting Bitcoin miners and bitcoin stakers vote on validators allows Core to avail itself of Bitcoin’s legendary robustness; and because Core is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core that couldn’t be done without changes to the underlying Bitcoin protocol.

5. **Production de Blocs**:
   - Après l'élection, tous les validateurs sont triés approximativement selon leur score hybride, et ils se relaient pour produire des blocs de **manière rotative** avant que le processus ne recommence depuis le début. By _initially limiting the number of validators to **21**_, Satoshi Plus offers a higher transaction rate and increased scalability, but the number of validators is expected to increase to **34 validators by Q2 2025**. In Q2 2024, Core has already expanded its active validator set from **21** to **27**. De plus, ce mécanisme fournit une sécurité supplémentaire grâce à une efficacité améliorée et une tolérance à un grand nombre de participants byzantins. Core is secure as long as no more than $1 \over 3$ of the validators are malicious.

6. **Distribution des Récompenses**:
   - Les récompenses sont distribuées en fonction des contributions à la sécurité du réseau, en utilisant la formule suivante :

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

#### Impact of Dual Staking on BTC Rewards

With the introduction of Dual Staking, BTC staking rewards are now tiered based on the amount of CORE staked relative to BTC. BTC rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on dual staking thresholds, with higher tiers generally receiving a greater proportion of the rewards. This tiered structure introduces variability in BTC staking returns, aligning incentives across the Core ecosystem while maintaining proportionality in reward distribution.

### Diagramme de Flux du Processus d'Élection des Validateurs

Le diagramme suivant représente visuellement le processus d'élection des validateurs dans Satoshi Plus:

![validator-election-flow](../../../static/img/staoshi-plus/validator-election-flow.png)

Ce schéma illustre la nature cyclique de l'élection des validateurs et leurs responsabilités continues au sein du mécanisme de consensus Satoshi Plus. Il met en évidence comment la délégation de stake et de puissance de hachage influence directement la sélection des validateurs, la production de blocs et la distribution des récompenses, conduisant à un réseau sécurisé, décentralisé et géré de manière efficace.
