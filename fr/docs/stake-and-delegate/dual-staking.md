---
sidebar_label: Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking - Débloquez un APY plus élevé pour le staking de BTC

---

## Introduction

[Le Staking de Bitcoin Non-Custodial](../Learn/products/btc-staking/overview) a été intégré à la blockchain Core en avril 2024, permettant aux utilisateurs de staker du Bitcoin et de gagner des rendements tout en conservant le contrôle total de leurs actifs. Cette mise en œuvre fournit un mécanisme natif pour générer des rendements en Bitcoin sans introduire d'hypothèses de confiance supplémentaires.

Pour améliorer davantage la génération de rendement du staking de Bitcoin Non-Custodial à grande échelle, le **Dual Staking** débloque des niveaux de rendement plus élevés en stakant simultanément du Bitcoin et du CORE. Étant donné que les émissions quotidiennes de CORE sont fixes, ceux qui stakent du CORE aux côtés du Bitcoin gagnent des niveaux de récompense plus élevés que ceux qui stakent uniquement du Bitcoin. Le pourcentage de boost sur le rendement est déterminé en stakant du CORE au-dessus de plusieurs seuils définis, chaque seuil correspondant à des niveaux croissants de récompenses de staking de Bitcoin. En liant des récompenses de staking de Bitcoin plus élevées avec le volume de tokens CORE stakés, cette approche encourage les stakers de Bitcoin à s'engager plus profondément dans l'écosystème Core et maximise les rendements pour les utilisateurs engagés.

## Qu'est-ce qui change avec le Dual Staking ?

Du point de vue de la manière dont le staking est effectué, rien ne change fondamentalement avec le Dual Staking. Les utilisateurs peuvent toujours staker du Bitcoin et du CORE indépendamment ; cependant, en stakant à la fois du Bitcoin et du CORE simultanément, ils débloquent le potentiel de rendements plus élevés sur le staking de Bitcoin. Staker les deux actifs n'est pas obligatoire, mais plutôt une amélioration optionnelle pour les détenteurs de Bitcoin souhaitant maximiser leur rendement. Pensez-y comme à un boost de récompense, où les stakers de Bitcoin recevront des récompenses améliorées à mesure qu'ils augmentent la quantité de CORE staké.

Le Dual Staking renforce la relation entre le Bitcoin et les blockchains Core, alignant les incitations et la valeur à travers les deux écosystèmes, en offrant des récompenses accrues à ceux qui participent activement aux deux options de staking, sans introduire de nouvelles exigences ou complexités au processus de staking.

## Principales caractéristiques du Dual Staking

1. **Récompenses augmentées grâce au staking de CORE :** Les stakers de Bitcoin peuvent désormais staker des tokens CORE aux côtés du Bitcoin pour débloquer des rendements de staking de Bitcoin plus élevés. Pour gagner ces taux de staking améliorés, les stakers de Bitcoin sont tenus de staker du CORE au-dessus d'un certain seuil.

2. **Boost de récompense cumulatif :** Une fois le Dual Staking adopté, les stakers de Bitcoin recevront des taux plus élevés à mesure qu'ils augmentent la quantité de CORE staké. Cela signifie que les stakers peuvent maximiser leurs rendements en stakant plus de CORE.

3. **Staking Sans Risque et Non-Custodial :** Le staking de Bitcoin Non-Custodial de Core permet aux utilisateurs de conserver la pleine propriété de leurs actifs tout au long du processus de staking. Le Bitcoin reste en sécurité dans le portefeuille de l'utilisateur et est débloqué lorsque la période de verrouillage choisie expire. Aucune entité externe ne prend la garde du Bitcoin du staker. Pendant ce temps, en échange du verrouillage de leur Bitcoin, ils peuvent déléguer aux validateurs Core qui sécurisent CORE et leur font gagner des récompenses. Cette configuration élimine le risque de garde et améliore la sécurité, car les stakers participent à la sécurité de Core sans mettre leur Bitcoin en danger.

## Comment fonctionne le Dual Staking ?

Le Dual Staking n'altère pas le processus de staking pour le Bitcoin et le CORE. Pour plus d'informations sur le staking de Bitcoin non-custodial, veuillez vous référer [ici](../Learn/products/btc-staking/overview) et consulter ce [guide](./delegating-core) détaillé sur la délégation de CORE.

Le Dual Staking crée une opportunité de débloquer des rendements plus élevés lorsque le Bitcoin et le CORE sont stakés simultanément, avec des seuils de staking de CORE variables correspondant à différents niveaux de boost de rendement sur les récompenses de staking de Bitcoin sur la blockchain Core.

Les détenteurs de Bitcoin peuvent [staker leur Bitcoin](../Learn/products/btc-staking/stake-btc-guide) via le staking de Bitcoin Non-Custodial de Core pour accumuler des récompenses en CORE. En [stakant ensuite leurs tokens CORE](delegating-core.md) au-dessus du seuil minimum pour le Dual Staking, les utilisateurs débloquent des niveaux supérieurs de rendements de Bitcoin, payés en CORE. Bien que le Dual Staking améliore les récompenses de staking de Bitcoin, il n'a aucun impact sur le rendement généré par le staking de CORE lui-même.

Afin de permettre des rendements plus élevés pour le staking de Bitcoin via le Dual Staking, les utilisateurs doivent remplir les conditions suivantes :

1. Staker à la fois du CORE et du Bitcoin simultanément, en s'assurant que la quantité de CORE staké dépasse le seuil minimum de dual staking **ET**
2. L'adresse du portefeuille de staking CORE _**doit**_ correspondre à l'adresse de récompense CORE désignée pour le staking de Bitcoin à laquelle le rendement est versé.

### Seuils de rendement boosté

Actuellement, les récompenses Satoshi Plus sont allouées via trois pools, une pour chacune des trois entités participant à l'élection des validateurs Core, à savoir (1) les délégateurs de puissance de hachage, (2) les stakers de Bitcoin et (3) les stakers de CORE.

Le Dual Staking n'affecte pas ces pools de récompenses, mais permet aux stakers de Bitcoin qui stakent également des tokens CORE de gagner une proportion plus élevée de récompenses dans le pool de staking de Bitcoin. Dans cette section, nous couvrons en détail le fonctionnement de l'algorithme de gradation en ce qui concerne le dual staking.

1. **Niveaux de rendement boosté**\
   Sous le Dual Staking, il y a 3 niveaux de rendement boosté pour le staking de Bitcoin basés sur la proportion de CORE staké par rapport au Bitcoin staké. Pour les solo-stakers de Bitcoin seulement, un quatrième niveau existe avec le taux de staking de Bitcoin le plus bas. Il est important de noter que le rendement annuel en pourcentage (APY) pour le staking de Bitcoin peut fluctuer de manière significative, souvent en raison de prix variables et d'autres dynamiques du marché. En conséquence, les rendements boostés réels peuvent changer quotidiennement en fonction des conditions du marché.

   - **P<sub>BASE</sub>** \= le taux de base du staking BTC
   - **P<sub>Level1</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 1
   - **P<sub>Level2</sub>** \= le taux de base du staking BTC \+ rendement boosté de Niveau 2
   - **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= le taux de base du staking BTC \+ rendement boosté de Niveau 3

2. **Seuils de CORE staké et ratios de staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**\
   Le mécanisme de décision pour le niveau de rendement d'un staker de Bitcoin (**P<sub>BASE</sub>**, **P<sub>Niveau1</sub>**, **P<sub>Niveau2</sub>**, ou **P<sub>Niveau3</sub> (P<sub>MAX</sub>)**) est basé sur les tokens CORE stakés par rapport au Bitcoin staké, où **R** représente le ratio `CORE:BTC` et **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**:

   - **Seuil de CORE staké pour P<sub>Niveau1</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>1</sub>**)
   - **Seuil de CORE staké pour P<sub>Niveau2</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>2</sub>**)
   - **Seuil de CORE staké pour P<sub>MAX</sub>** \= quantité de BTC staké \* Ratio de staking (**R<sub>3</sub>**)

:::note
Le CORE staké et/ou le Bitcoin staké peuvent être distribués entre plusieurs validateurs Core actifs.
:::

3. **Détermination du niveau de rendement boosté pour chaque (1) Bitcoin staké**
   - Si la quantité de CORE staké \< **R<sub>1</sub>**, l'utilisateur est dans le niveau  **P<sub>BASE</sub>**
   - Si **R<sub>1</sub>** \=\< quantité de CORE staké **R**\< **R<sub>2</sub>**, l'utilisateur entre dans le niveau **P<sub>Niveau1</sub>**
   - Si **R<sub>2</sub>** \=\< quantité de CORE staké **R** \< **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Niveau2</sub>**
   - Si la quantité de CORE staké \>= **R<sub>3</sub>**, l'utilisateur entre dans le niveau **P<sub>Niveau3</sub>** (**P<sub>MAX</sub>**)

:::note
Les ratios de staking et le nombre de niveaux sont configurables et sujets à modification par vote de gouvernance.
:::

### Exemple

Voici un exemple simple suivant les paramètres décrits ci-dessus :

- Ratio de staking **R<sub>1</sub>** \= 1 000
- Ratio de staking **R<sub>2</sub>** \= 3 000
- Ratio de staking **R<sub>3</sub>** \= 8 000
- Quantité de BTC staké \= 10 BTC

Les **Seuils de CORE Staké** avec les variables ci-dessus sont :

- Seuil de CORE staké pour **P<sub>Niveau1</sub>** \= 10 \* 1 000 \= 10 000 CORE staké
- Seuil de CORE staké pour **P<sub>Level2</sub>** \= 10 \* 3 000 \= 30 000 CORE staké
- Seuil de CORE staké pour **P<sub>Level3</sub>** \= 10 \* 8 000 \= 80 000 CORE staké

Ainsi, le BTC staké dans cet exemple bénéficiera d'un rendement de :

- **P<sub>BASE</sub>** si la quantité de CORE staké est inférieure à 10 000
- **P<sub>Niveau1</sub>** si la quantité de CORE staké est supérieure ou égale à 10 000 mais inférieure à 30 000
- **P<sub>Niveau2</sub>** si la quantité de CORE staké est supérieure ou égale à 30 000 mais inférieure à 80 000
- **P<sub>Niveau3</sub> (P<sub>MAX</sub>)** si la quantité de CORE staké est supérieure ou égale à 80 000

## Qui peut bénéficier du Dual Staking ?

Le dual staking est conçu pour tout le monde, des particuliers aux plus grandes institutions financières — quiconque souhaite obtenir des taux de staking de Bitcoin plus élevés. En plus des détenteurs de Bitcoin, les mineurs de Bitcoin peuvent également tirer parti du Dual Staking pour optimiser leurs gains.

Les mineurs de Bitcoin peuvent gagner des récompenses en CORE en déléguant leur puissance de hachage aux validateurs sur le réseau Core, puis staker à la fois leur Bitcoin et leurs tokens CORE. En stakant des tokens CORE au-dessus du seuil minimum de dual staking, ils peuvent débloquer des rendements plus élevés sur leurs trésoreries de Bitcoin. Cette intégration des récompenses minières avec le mécanisme de Dual Staking offre aux mineurs l'opportunité de maximiser les rendements à la fois sur leurs activités minières et de staking.

:::info
Pour toute question ou clarification supplémentaire, veuillez vous référer à la [Section FAQ sur le Dual Staking](../FAQs/dual-staking-faqs.md). De plus, vous pouvez adresser vos demandes au [Forum des développeurs de Core](http://forum.coredao.org) ou au [Serveur Discord de Core](https://discord.gg/M2AGJKSG) pour obtenir un support supplémentaire.\
:::

## Conclusion

Le Dual Staking est un mécanisme pour fournir des taux de staking de Bitcoin durables à grande échelle sur Core. En établissant davantage Core comme la principale plateforme BTCfi de bout en bout, le token CORE devient la clé pour débloquer un rendement durable pour le Bitcoin.
