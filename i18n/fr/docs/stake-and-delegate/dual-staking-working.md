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

Double staking, une amélioration du staking non-custodial de BTC de Core, permet aux participants de maximiser leurs récompenses en stakant simultanément du BTC et des tokens CORE. Cette stratégie renforce le réseau Core tout en débloquant des rendements plus élevés pour le staking de Bitcoin en fonction de seuils de staking CORE prédéfinis

En atteignant des ratios de staking CORE/BTC spécifiques, les utilisateurs obtiennent des récompenses de staking Bitcoin boostées, payées en CORE. Bien que le Double Staking améliore les rendements du staking de BTC, il n'affecte pas directement les récompenses du staking CORE.

![image](../../static/img/dual-staking/dual-staking-tiers.png)

### Seuils de rendement boosté

Actuellement, les récompenses Satoshi Plus sont allouées via trois pools, une pour chacune des trois entités participant à l'élection des validateurs Core, à savoir (1) les délégateurs de puissance de hachage, (2) les stakers de Bitcoin et (3) les stakers de CORE.

Le Dual Staking n'affecte pas ces pools de récompenses, mais permet aux stakers de Bitcoin qui stakent également des jetons CORE de gagner une proportion plus élevée de récompenses dans le pool de staking de Bitcoin. Dans cette section, nous couvrons en détail le fonctionnement de l'algorithme de gradation en ce qui concerne le dual staking.

#### 1. **Seuils de rendement boosté**

Dans le cadre du Double Staking, il existe 3 paliers de rendement boosté pour le staking de Bitcoin, basés sur la proportion de CORE staké par rapport au Bitcoin staké. Pour les solo-stakers de Bitcoin seulement, un quatrième niveau existe avec le taux de staking de Bitcoin le plus bas. Il est important de noter que le taux de récompense annuel pour le staking de Bitcoin peut fluctuer de manière significative, souvent en raison de variations des prix et d'autres dynamiques du marché. En conséquence, les rendements boostés réels peuvent changer quotidiennement en fonction des conditions du marché.

- **P<sub>BASE</sub>** \= le taux de base du staking BTC
- **P<sub>Level1</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 1
- **P<sub>Level2</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 2
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= le taux de base du staking BTC \+ rendement boosté de Niveau 3

En pratique, les émissions de CORE sont distribuées au prorata en fonction de la TVL (Total Value Locked) en BTC, pondérée en fonction de leur niveau de dual staking (CORE:BTC).

#### 2. Seuils de CORE staké et ratios de staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)

Le mécanisme de décision pour le niveau de rendement d'un staker de Bitcoin (**P<sub>BASE</sub>**, **P<sub>Niveau1</sub>**, **P<sub>Niveau2</sub>**, or **P<sub>Niveau3</sub> (P<sub>MAX</sub>)**) est basé sur les tokens CORE stakés par rapport au Bitcoin staké, où R représente le ratio `CORE:BTC` et **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. Les ratios de staking CORE:BTC actuels sont les suivants :

- Staking Ratio R1 \= 3,625 CORE per 1 BTC
- Staking Ratio R2 \= 10,875 CORE per 1 BTC
- Staking Ratio R3 \= 29,000 CORE per 1 BTC

En gardant ces ratios à l'esprit, les utilisateurs peuvent calculer le seuil requis pour chaque niveau comme suit :

- **Seuil de CORE staké pour P<sub>Niveau1</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>1</sub>**)
- **Seuil de CORE staké pour P<sub>Niveau2</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>2</sub>**)
- **Seuil de CORE staké pour P<sub>Level3</sub> (P<sub>MAX</sub>)** \= quantité de BTC staké \* Ratio de staking (**R<sub>3</sub>**)

:::note
Le CORE staké et/ou le Bitcoin staké peuvent être distribués entre plusieurs validateurs Core actifs.
:::

#### 3. **Détermination du niveau de rendement boosté pour chaque (1) Bitcoin staké**

- Si la quantité de CORE staké \< **R<sub>1</sub>**, l'utilisateur est dans le niveau **P<sub>BASE</sub>**
- Si **R<sub>1</sub>** \=\< quantité de CORE staké \< **R<sub>2</sub>**, l'utilisateur entre dans le niveau **P<sub>Level1</sub>**
- Si **R<sub>2</sub>** \=\< quantité de CORE staké \< **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Level2</sub>**
- Si la quantité de CORE staké \>= **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Level3</sub>** (**P<sub>MAX</sub>**)

:::note
Les ratios de staking et le nombre de niveaux sont configurables et sujets à modification par vote de gouvernance.
:::

### Exemple

Voici un exemple simple expliquant comment calculer le CORE requis pour staker, basé sur les paramètres mentionnés ci-dessus, pour débloquer des niveaux de rendement augmentés pour le Dual Staking.

Supposons que l'utilisateur doive staker du CORE selon les Seuils de CORE Staké suivants pour bénéficier d'un rendement plus élevé sur son BTC staké avec les variables ci-dessus :

- Staking Ratio **R<sub>1</sub>** \= 3,625
- Staking Ratio **R<sub>2</sub>** \= 10,875
- Staking Ratio **R<sub>3</sub>** \= 29,000
- Quantité de BTC staké \= 10 BTC

Les **Seuils de CORE Staké** avec les variables ci-dessus sont :

- Staked CORE Threshold for **P<sub>Level1</sub>** \= 10 \* 3,625 \= 36,250 staked CORE
- Staked CORE Threshold for **P<sub>Level2</sub>** \= 10 \* 10,875 \= 108,875 staked CORE
- Seuil de CORE staké **P<sub>Level3</sub>** \= 10 \* 29,000 \= 290,000 staked CORE

Ainsi, le BTC staké dans cet exemple bénéficiera d'un rendement de :

- **P<sub>BASE</sub>** if the amount of staked CORE is below 36,250
- **P<sub>Level1</sub>** if the amount of staked CORE is above or equal to 36,250 but below 108,875
- **P<sub>Level2</sub>** if the amount of staked CORE is above or equal to 108,875 but below 290,000
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** if the amount of staked CORE is above or equal to 290,000

:::note
The multiplier on each boosted yield tier is dynamic and subject to change based on market supply and demand conditions.
:::

:::info
To activate your new dual-staking tier, follow these two steps. Cela concerne les utilisateurs qui ont déjà staké du BTC lors de précédents tours à 00:00 UTC et qui décident de staker du CORE supplémentaire pour passer à un palier supérieur. Tout d'abord, après avoir staké du CORE, attendez le prochain 00:00 UTC. Ensuite, réclamez toutes vos récompenses à n’importe quel moment après 00:00 UTC afin de réinitialiser le système de calcul du palier. Votre nouveau palier sera activé dès que vous aurez finalisé la réclamation de vos récompenses. Les deux étapes sont essentielles pour garantir la prise en compte de votre nouveau palier.
:::

### Comment être éligible aux récompenses de Double Staking

Pour activer des rendements de staking Bitcoin plus élevés grâce au Double Staking, les utilisateurs doivent :

1. Stakez à la fois des BTC et des CORE, en veillant à ce que les CORE stakés répondent ou dépassent le seuil minimum de Double Staking.
2. Utilisez le même portefeuille pour le staking CORE et la réception des récompenses de staking BTC.

Cette approche garantit une distribution de récompenses fluide tout en encourageant une participation plus profonde au réseau.

### Considérations pour optimiser les rendements

- Les scores hybrides des validateurs représentent les délégations pondérées totales sur tous les validateurs. En général, des scores hybrides plus élevés sont corrélés avec des récompenses de staking BTC et CORE plus faibles, bien que cette relation ne soit pas strictement linéaire.
- Lors du staking d'une quantité relativement faible d'actifs qui ne modifie pas significativement la distribution de staking, il est recommandé aux stakers de simplement déléguer le staking BTC ou CORE au validateur qui offre la récompense la plus élevée.
- Lors du staking d'une quantité relativement importante d'actifs pouvant modifier de manière significative la distribution de staking, il est recommandé aux stakers de diversifier le staking BTC ou CORE sur plusieurs validateurs pour éviter la sur-concentration et maintenir des récompenses élevées
  - Par exemple, diversifier votre stake sur 6 à 10 validateurs offrant les récompenses les plus élevées peut aider à réduire l'impact des scores hybrides élevés et à maintenir des rendements optimaux.
- Minimisez la nécessité de transférer et/ou de redéléguer le staking BTC à un autre validateur pour éviter la perte de récompense pendant le processus.
- Évitez les validateurs avec des scores hybrides élevés.
