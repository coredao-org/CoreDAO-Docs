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

Double staking, une amélioration du staking non-custodial de BTC de Core, permet aux participants de maximiser leurs récompenses en stakant simultanément du BTC et des tokens CORE. This strategy strengthens the Core network while unlocking higher Bitcoin staking yields based on predefined CORE staking thresholds

En atteignant des ratios de staking CORE/BTC spécifiques, les utilisateurs obtiennent des récompenses de staking Bitcoin boostées, payées en CORE. Bien que le Double Staking améliore les rendements du staking de BTC, il n'affecte pas directement les récompenses du staking CORE.

<p align="center">
<img width="1024" alt="Dual Staking Tiers (8)" src="https://github.com/user-attachments/assets/6ce41ca4-fc7e-476a-814c-4f56665b3c48" />
</p>

### Seuils de rendement boosté

Actuellement, les récompenses Satoshi Plus sont allouées via trois pools, une pour chacune des trois entités participant à l'élection des validateurs Core, à savoir (1) les délégateurs de puissance de hachage, (2) les stakers de Bitcoin et (3) les stakers de CORE.

Le Dual Staking n'affecte pas ces pools de récompenses, mais permet aux stakers de Bitcoin qui stakent également des jetons CORE de gagner une proportion plus élevée de récompenses dans le pool de staking de Bitcoin. In this section, we provide a detailed explanation of the grading algorithm's operation with respect to dual staking.

#### 1. **Seuils de rendement boosté**

Under Dual Staking, there are three boosted yield tiers for Bitcoin Staking based on the proportion of CORE staked relative to Bitcoin staked. Pour les solo-stakers de Bitcoin seulement, un quatrième niveau existe avec le taux de staking de Bitcoin le plus bas. Il est important de noter que le taux de récompense annuel pour le staking de Bitcoin peut fluctuer de manière significative, souvent en raison de variations des prix et d'autres dynamiques du marché. En conséquence, les rendements boostés réels peuvent changer quotidiennement en fonction des conditions du marché.

- **P<sub>BASE</sub>** \= le taux de base du staking BTC
- **P<sub>Level1</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 1
- **P<sub>Level2</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 2
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= le taux de base du staking BTC \+ rendement boosté de Niveau 3

En pratique, les émissions de CORE sont distribuées au prorata en fonction de la TVL (Total Value Locked) en BTC, pondérée en fonction de leur niveau de dual staking (CORE:BTC).

#### 2. Seuils de CORE staké et ratios de staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)

The deciding mechanism for a Bitcoin staker’s yield tier (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, or **P<sub>Level3</sub> (P<sub>MAX</sub>)**) is based on CORE tokens staked relative to Bitcoin staked, where **R** represents the `CORE:BTC` Ratio and **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. Les ratios de staking CORE:BTC actuels sont les suivants :

- Staking Ratio R1 \= 3,000 CORE per 1 BTC
- Staking Ratio R2 \= 9,000 CORE per 1 BTC
- Staking Ratio R3 \= 24,000 CORE per 1 BTC

En gardant ces ratios à l'esprit, les utilisateurs peuvent calculer le seuil requis pour chaque niveau comme suit :

- **Seuil de CORE staké pour P<sub>Niveau1</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>1</sub>**)
- **Seuil de CORE staké pour P<sub>Niveau2</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>2</sub>**)
- **Seuil de CORE staké pour P<sub>Level3</sub> (P<sub>MAX</sub>)** \= quantité de BTC staké \* Ratio de staking (**R<sub>3</sub>**)

:::note
Le CORE staké et/ou le Bitcoin staké peuvent être distribués entre plusieurs validateurs Core actifs.
:::

#### 3. **Détermination du niveau de rendement boosté pour chaque (1) Bitcoin staké**

- If staked CORE amount \< **R<sub>1</sub>**, the user is in tier **P<sub>BASE</sub>**
- Si **R<sub>1</sub>** \=\< quantité de CORE staké \< **R<sub>2</sub>**, l'utilisateur entre dans le niveau **P<sub>Level1</sub>**
- Si **R<sub>2</sub>** \=\< quantité de CORE staké \< **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Level2</sub>**
- Si la quantité de CORE staké \>= **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Level3</sub>** (**P<sub>MAX</sub>**)

:::note
Staking ratios and the number of levels are configurable and subject to change by governance vote.
:::

### Exemple

The following is a simple example explaining how to calculate the required CORE to stake, based on the parameters mentioned above, to unlock boosted yield tiers for Dual Staking.

Supposons que l'utilisateur doive staker du CORE selon les Seuils de CORE Staké suivants pour bénéficier d'un rendement plus élevé sur son BTC staké avec les variables ci-dessus :

- Staking Ratio **R<sub>1</sub>** \= 3,000
- Staking Ratio **R<sub>2</sub>** \= 9,000
- Staking Ratio **R<sub>3</sub>** \= 24,000
- Quantité de BTC staké \= 10 BTC

Les **Seuils de CORE Staké** avec les variables ci-dessus sont :

- Staked CORE Threshold for **P<sub>Level1</sub>** \= 10 \* 3,000 \= 30,000 staked CORE
- Staked CORE Threshold for **P<sub>Level2</sub>** \= 10 \* 9,000 \= 90,000 staked CORE
- Seuil de CORE staké **P<sub>Level3</sub>** \= 10 \* 24,000 \= 240,000 staked CORE

Ainsi, le BTC staké dans cet exemple bénéficiera d'un rendement de :

- **P<sub>BASE</sub>** si la quantité de CORE staké est inférieure à 30 000
- **P<sub>Niveau1</sub>** si la quantité de CORE staké est supérieure ou égale à 30 000 mais inférieure à 90 000
- **P<sub>Niveau2</sub>** si la quantité de CORE staké est supérieure ou égale à 90 000 mais inférieure à 240 000
- **P<sub>Niveau3</sub> (P<sub>MAX</sub>)** si la quantité de CORE staké est supérieure ou égale à 240 000

:::note
The multiplier on each boosted yield tier is dynamic and subject to change based on market supply and demand conditions.
:::

:::info
To activate your new dual-staking tier, follow these two steps. This applies to users who already have BTC staked in earlier rounds at 00:00 UTC and decide to stake additional CORE to advance to higher tiers. First, after staking CORE, wait until the following 00:00 UTC. Ensuite, réclamez toutes vos récompenses à n’importe quel moment après 00:00 UTC afin de réinitialiser le système de calcul du palier. Votre nouveau palier sera activé dès que vous aurez finalisé la réclamation de vos récompenses. Les deux étapes sont essentielles pour garantir la prise en compte de votre nouveau palier.
:::

### Comment être éligible aux récompenses de Double Staking

Pour activer des rendements de staking Bitcoin plus élevés grâce au Double Staking, les utilisateurs doivent :

1. **Stake both BTC and CORE**, ensuring the CORE stake meets or exceeds the minimum Dual Staking threshold.
2. Utilisez le même portefeuille pour le staking CORE et la réception des récompenses de staking BTC.

This approach ensures seamless reward distribution while incentivizing deeper participation in the network.

### Considérations pour optimiser les rendements

- Les scores hybrides des validateurs représentent les délégations pondérées totales sur tous les validateurs. En général, des scores hybrides plus élevés sont corrélés avec des récompenses de staking BTC et CORE plus faibles, bien que cette relation ne soit pas strictement linéaire.
- Lors du staking d'une quantité relativement faible d'actifs qui ne modifie pas significativement la distribution de staking, il est recommandé aux stakers de simplement déléguer le staking BTC ou CORE au validateur qui offre la récompense la plus élevée.
- Lors du staking d'une quantité relativement importante d'actifs pouvant modifier de manière significative la distribution de staking, il est recommandé aux stakers de diversifier le staking BTC ou CORE sur plusieurs validateurs pour éviter la sur-concentration et maintenir des récompenses élevées
  - Par exemple, diversifier votre stake sur 6 à 10 validateurs offrant les récompenses les plus élevées peut aider à réduire l'impact des scores hybrides élevés et à maintenir des rendements optimaux.
- Minimize the need to transfer and/or redelegate BTC staking to another validator to avoid losing rewards during the process.
- Évitez les validateurs avec des scores hybrides élevés.
