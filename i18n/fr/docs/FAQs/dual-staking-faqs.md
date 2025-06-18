---
sidebar_label: FAQ sur le Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Dual Staking

---

### 1\. Y a-t-il des requis pour le Dual Staking ?

To enable higher yields for Bitcoin staking through Dual Staking, users must meet the following requirements:

1. Staker à la fois CORE et Bitcoin simultanément, en s'assurant que le montant de CORE staké dépasse le seuil minimum de dual staking **ET**
2. The CORE staking wallet address _**must**_ match the designated CORE rewards address for Bitcoin staking to which the yield is paid.

### 2\. Avec le Dual Staking, les stakers gagnent-ils des récompenses de staking sur le CORE et le Bitcoin stakés ?

Le Dual Staking est spécifiquement conçu pour augmenter les rendements du staking de Bitcoin et n'affecte pas le rendement obtenu du staking de CORE. Comme pour le staking indépendant de Bitcoin et de CORE, les utilisateurs recevront des récompenses séparées pour chaque actif. Cependant, si le montant de CORE staké dépasse un certain seuil, le rendement du staking de Bitcoin recevra un boost supplémentaire. Note that the additional yield percentages apply solely to Bitcoin staking, allowing Bitcoin stakers to maximize returns without altering the reward structure for CORE staking.

### 3\. Quelles sont les étapes que les clients institutionnels doivent suivre pour participer au Dual Staking ?

Les clients institutionnels souhaitant bénéficier du Dual Staking _**doivent**_ staker à la fois du Bitcoin et du CORE simultanément, avec un montant de CORE staké dépassant un certain seuil pour débloquer les pourcentages de récompenses améliorés pour le staking de Bitcoin.\
De plus, ils doivent s'assurer que l'adresse de récompense CORE pour le staking de Bitcoin correspond à l'adresse de staking CORE. Cet alignement est crucial, car il vérifie que le Bitcoin et le CORE stakés appartiennent au même propriétaire. Les plateformes de staking doivent également vérifier que les adresses CORE correspondent pour s'assurer que les utilisateurs reçoivent les taux de rendement du dual staking corrects en fonction de leur activité de staking combinée.

### 4\. Pour les utilisateurs qui stakent déjà du Bitcoin et du CORE, y a-t-il quelque chose qu'ils doivent faire pour profiter du Dual Staking ?

Pour profiter pleinement du Dual Staking, les utilisateurs doivent s'assurer que l'adresse de récompense du staking de Bitcoin désignée correspond à l'adresse utilisée pour le staking de CORE. Users who have staked their Bitcoin and/or CORE across multiple addresses may want to consolidate their staking into a single address to optimize yield, maximize returns, and ensure that the staked CORE is above the required threshold to unlock higher yield percentages for Bitcoin staking.

### 5\. Comment calcules ton le rendement sous le modèle dual staking?

- Global staking yields fluctuate based on changes in the following variables:
  - [Montant total de Core jalonner sur tous les validateurs] (https://stake.coredao.org/validators)
  - [Total amount of Bitcoin staking across all validators](https://stake.coredao.org/validators)
  - The relative price change between Bitcoin & CORE
  - [Annual reward adjustment](../Learn/core-token/tokenomics.md)
- Les rendements du staking est spécifiques au validateur et varient en fonction de ces facteurs supplémentaires :
  - Nombre total de validateurs actifs
  - Commission de validation
  - The received delegation on hash, Bitcoin staking, & CORE staking
  - Paliers de Dual-staking

### 6\. Comment les utilisateurs équilibrent-ils CORE et Bitcoin entre les validateurs pour maximiser le rendement ?

For users to see the distribution of their delegated CORE, Bitcoin, and Hash for each validator, they can visit Core’s official [staking website](https://stake.coredao.org/). The CORE and Bitcoin staking yields from each validator vary because they're dependent on the total and weighted amount of delegations a validator receives. Refer to [here](../Learn/core-concepts/satoshi-plus-consensus/rewards#3-validator-rewards) for more details.\
La pratique de rééquilibrer les délégations parmi les validateurs est essentielle pour maximiser les récompenses globales et maintenir un écosystème sain de validateurs. Lorsqu'un validateur reçoit une délégation insuffisante, il risque de devenir inactif. À l'inverse, une délégation excessive à un seul validateur peut entraîner une réduction des récompenses pour chaque délégataire, car les récompenses doivent être partagées parmi un plus grand nombre de délégataires.\
The act of delegators rebalancing their delegation to maximize rewards is the driving force behind ensuring a balanced set of validators. For users who prefer not to manage their delegations actively, it is advisable to distribute stakes equally across all active validators. Cette approche améliore la stabilité des pourcentages de récompense.

### 7\. Y a-t-il un risque de perdre vos actifs Bitcoin pendant le Dual Staking ?

Dual Staking is a [self-custodial process](../stake-and-delegate/btc-staking/overview.md), allowing users to maintain complete control over their assets. Tout au long du processus de staking, le Bitcoin reste en sécurité dans le portefeuille de l'utilisateur.  Les stakers ne font face à aucun risque de slashing, de risque de contrat intelligent externe ou de risque de contrepartie. Les hypothèses de confiance pour le staking de Bitcoin sont les mêmes que celles sous-jacentes à la détention de Bitcoin.

### 8\. While Bitcoin is time-locked, can users unstake CORE that’s dual staked with Bitcoin? If so, do they lose any rewards earned before unstaking CORE?

Users can unstake CORE at any time, just as they can when staking CORE independently. La seule différence est que lorsque la récompense de staking de Bitcoin est calculée, le pourcentage de récompense diminuera en raison de la diminution du CORE staké. Notez que cette réduction ne s'applique qu'aux récompenses futures et n'affecte pas les récompenses déjà gagnées par l'utilisateur.

### 9\. Comment les utilisateurs s'assurent-ils que l'adresse de récompense CORE pour le staking de Bitcoin est la même que l'adresse de staking CORE lorsqu'ils stakent via le [site de staking de Core](https://stake.coredao.org/) ?

Sur **stake.coredao.org**, pour vous assurer que l'adresse de récompense CORE pour le staking de Bitcoin est la même que l'adresse de staking CORE, suivez les étapes suivantes :

1. To stake CORE, connect your Core wallet, which will then be used for signing the CORE staking transaction.
2. Pour staker le Bitcoin, connectez d'abord le **même portefeuille Core**, puis connectez votre portefeuille Bitcoin. Lorsque la transaction de staking de Bitcoin est créée via le site de staking, elle utilise l'adresse du portefeuille Core connecté comme adresse de récompense Core pour le staking de Bitcoin.

Tant que l'utilisateur utilise toujours la même adresse de portefeuille Core pour staker à la fois le CORE et le Bitcoin, ce sera la même adresse. Les transactions de staking pour le Bitcoin et le CORE sont également suivies par l'adresse Core. Once the Core wallet is connected, users can go to the "[My Staking](https://stake.coredao.org/mystaking)" section on the [staking website](https://stake.coredao.org/) to see all the CORE and Bitcoin staking transactions, all the accrued rewards in CORE for both Bitcoin staking and CORE staking.

### 10\. What happens to the delegators' reward if the validator to whom they delegated their assets gets slashed?

Si un validateur est pénalisé, les stakers qui ont délégué leur CORE ou Bitcoin ne seront _**pas**_ pénalisés. Cependant, étant donné que le validateur ne recevra pas la récompense de staking, les délégataires manqueront également les récompenses de staking pour cette période.