---
sidebar_label: Son Fonctionnement
hide_table_of_contents: false
sidebar_position: 2
---

# Comment fonctionne le Dual Staking

---

Core fonctionne sur le consensus Satoshi Plus, intégrant trois sources de délégation pour sécuriser le réseau :

- Preuve de travail déléguée (DPoW) : Les mineurs Bitcoin délèguent la puissance de hachage aux validateurs Core.
- Preuve d'enjeu déléguée (DPoS) : Les détenteurs de jetons CORE délèguent leurs jetons aux validateurs.
- Staking non dépositaire de BTC : Les détenteurs de BTC mettent en jeu directement sur le réseau Bitcoin et délèguent leur jetons bitcoin aux validateurs Core.

Double staking, une amélioration du staking non-custodial de BTC de Core, permet aux participants de maximiser leurs récompenses en stakant simultanément du BTC et des tokens CORE. Cette stratégie renforce le réseau Core tout en débloquant des rendements plus élevés pour le staking de Bitcoin en fonction de seuils de staking CORE prédéfinis.

En atteignant des ratios de staking CORE/BTC spécifiques, les utilisateurs obtiennent des récompenses de staking Bitcoin boostées, payées en CORE. Bien que le Double Staking améliore les rendements du staking de BTC, il n'affecte pas directement les récompenses du staking CORE.

<p align="center">
<img width="1024" alt="Dual Staking Tiers (8)" src="https://github.com/user-attachments/assets/6ce41ca4-fc7e-476a-814c-4f56665b3c48" />
</p>

### Seuils de rendement boosté

Actuellement, les récompenses Satoshi Plus sont allouées via trois pools, une pour chacune des trois entités participant à l'élection des validateurs Core, à savoir (1) les délégateurs de puissance de hachage, (2) les stakers de Bitcoin et (3) les stakers de CORE.

Le Dual Staking n'affecte pas ces pools de récompenses, mais permet aux stakers de Bitcoin qui stakent également des jetons CORE de gagner une proportion plus élevée de récompenses dans le pool de staking de Bitcoin. Dans cette section, nous couvrons en détail le fonctionnement de l'algorithme de gradation en ce qui concerne le dual staking.

#### 1. **Boosted Yield Levels**

Under Dual Staking, there are 3 boosted yield tiers for Bitcoin Staking based on the proportion of CORE staked relative to Bitcoin staked. For Solo-Stakers of only Bitcoin, a fourth tier exists with the lowest Bitcoin staking rate. It is important to note that the annual reward rate for Bitcoin Staking can fluctuate significantly, often due to varying prices and other market dynamics. As a result, the actual boosted yields may change daily based on market conditions.

- **P<sub>BASE</sub>** \= the BTC staking base rate
- **P<sub>Level1</sub>** \= the BTC staking base rate \+ Level 1 boosted yield
- **P<sub>Level2</sub>** \= the BTC staking base rate \+ Level 2 boosted yield
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= the BTC staking base rate \+ Level 3 boosted yield

Effectively, the CORE emissions are distributed pro rata based on the BTC TVL, weighted based on their dual staking tier (CORE:BTC).

#### 2. **Staked CORE Thresholds and Staking Ratios (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**

The deciding mechanism for a Bitcoin staker’s yield tier  (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, or **P<sub>Level3</sub> (P<sub>MAX</sub>)**) is based on CORE tokens staked relative to Bitcoin staked, where **R** represents the `CORE:BTC` Ration and **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. The current CORE:BTC staking ratios are as follows:

- Staking Ratio R1 \= 3,000 CORE per 1 BTC
- Staking Ratio R2 \= 9,000 CORE per 1 BTC
- Staking Ratio R3 \= 24,000 CORE per 1 BTC

Keeping these ratios in mind, users can calculate the required threshold for each tier as follows:

- **Staked CORE Threshold for P<sub>Level1</sub>** \= BTC staked quantity \* Staking Ratio (**R<sub>1</sub>**)
- **Staked CORE Threshold for P<sub>Level2</sub>** \= BTC staked quantity \* Staking Ratio (**R<sub>2</sub>**)
- **Staked CORE Threshold for P<sub>Level3</sub> (P<sub>MAX</sub>)** \= BTC staked quantity \* Staking Ratio (**R<sub>3</sub>**)

:::note
The staked CORE and/or staked Bitcoin can be distributed across multiple active Core validators.
:::

#### 3. **Boosted yield level determination for each (1) staked Bitcoin**

- If staked CORE amount  \< **R<sub>1</sub>**, the user is in tier **P<sub>BASE</sub>**
- If **R<sub>1</sub>** \=\< staked CORE amount \< **R<sub>2</sub>**, the user enters tier **P<sub>Level1</sub>**
- If **R<sub>2</sub>** \=\< staked CORE amount \< **R<sub>3</sub>**, the user enters tier **P<sub>Level2</sub>**
- If staked CORE amount \>= **R<sub>3</sub>**, the user enters tier **P<sub>Level3</sub>** (**P<sub>MAX</sub>**)

:::note
Staking ratios and the number of levels are configurable and subject to change by governance vote.
:::

### Example

The following is a simple example explaining how to calculate the required CORE to stake, based on the above mentioned parameters, to unlock boosted yield tiers for Dual Staking.

Now, the user will have to stake CORE as per the following Staked CORE Thresholds to enjoy a higher yield on their staked BTC with the above variables:

- Staking Ratio **R<sub>1</sub>** \= 3,000
- Staking Ratio **R<sub>2</sub>** \= 9,000
- Staking Ratio **R<sub>3</sub>** \= 24,000
- Staked BTC quantity \= 10 BTC

The **Staked CORE Thresholds** with the above variables are:

- Staked CORE Threshold for **P<sub>Level1</sub>** \= 10 \* 3,000 \= 30,000 staked CORE
- Staked CORE Threshold for **P<sub>Level2</sub>** \= 10 \* 9,000 \= 90,000 staked CORE
- Staked CORE Threshold for **P<sub>Level3</sub>** \= 10 \* 24,000 \= 240,000 staked CORE

Hence, the staked BTC in this example will enjoy a yield of

- **P<sub>BASE</sub>** if the amount of staked CORE is below 30,000
- **P<sub>Level1</sub>** if the amount of staked CORE is above or equal to 30,000 but below 90,000
- **P<sub>Level2</sub>** if the amount of staked CORE is above or equal to 90,000 but below 240,000
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** if the amount of staked CORE is above or equal to 240,000

:::note
The multiplier on each boosted yield tier is dynamic and subject to change as per the supply and demand conditions of the market
:::

:::info
For your new dual staking tier to take effect, you  may need to follow two steps. This applies to users who already have BTC staked in earlier rounds at 00:00 am UTC and decide to stake additional CORE to move up tiers. First, after staking CORE, wait until the next 00:00 UTC. Then, claim all your rewards anytime after 00:00 UTC to reset the tier calculation system. Your new tier will activate as soon as you complete the claim. Both steps are essential to ensure your new tier takes effect.
:::

### How to Qualify for Dual Staking Rewards

To enable higher Bitcoin staking yields through Dual Staking, users must:

1. **Stake both BTC and CORE**, ensuring the CORE staked meets or exceeds the minimum Dual Staking threshold.
2. **Use the same wallet** for both CORE staking and receiving BTC staking rewards.

This approach ensures seamless reward distribution while incentivizing deeper network participation.

### Considerations for Optimizing Yields

- Validator hybrid scores represent the total weighted delegations across all validators. Generally, higher hybrid scores correlate with lower BTC and CORE staking rewards, although this relationship is not strictly linear.
- When staking a relatively low quantity of assets that don’t significantly alter the staking distribution, stakers are recommended to simply delegate the BTC or CORE staking to the validator that gives out the highest reward.
- When staking a relatively large quantity of assets that can meaningfully alter the staking distribution, stakers are recommended to diversify the BTC or CORE staking across multiple validators to prevent over-concentration and maintain high rewards.
  - For instance, diversifying your stake across 6 to 10 validators with the highest rewards can help reduce the impact of high hybrid scores and maintain optimal yields.
- Minimize the need to transfer and/or redelegate BTC staking to another validator to avoid loss of reward during the process.
- Avoid validators with high hybrid scores.
