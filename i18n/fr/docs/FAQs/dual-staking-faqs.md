---
sidebar_label: FAQ sur le Dual Staking
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur le Dual Staking

---

### 1\. Y a-t-il des requis pour le Dual Staking ?

Pour bénéficier de rendements plus élevés pour le staking de Bitcoin via le Dual Staking, les utilisateurs doivent remplir les conditions suivantes :

1. Staker à la fois CORE et Bitcoin simultanément, en s'assurant que le montant de CORE staké dépasse le seuil minimum de dual staking **ET**
2. L'adresse du portefeuille de staking CORE _**doit**_ correspondre à l'adresse de récompense CORE désignée pour le staking de Bitcoin à laquelle le rendement est versé.

### 2\. Avec le Dual Staking, les stakers gagnent-ils des récompenses de staking sur le CORE et le Bitcoin stakés ?

Le Dual Staking est spécifiquement conçu pour augmenter les rendements du staking de Bitcoin et n'affecte pas le rendement obtenu du staking de CORE. Comme pour le staking indépendant de Bitcoin et de CORE, les utilisateurs recevront des récompenses séparées pour chaque actif. Cependant, si le montant de CORE staké dépasse un certain seuil, le rendement du staking de Bitcoin recevra un boost supplémentaire. Notez que les pourcentages de rendement supplémentaires s'appliquent uniquement au staking de Bitcoin, permettant aux stakers de Bitcoin de maximiser les retours sans modifier la structure de récompense pour le staking de CORE.

### 3\. Quelles sont les étapes que les clients institutionnels doivent suivre pour participer au Dual Staking ?

Les clients institutionnels souhaitant bénéficier du Dual Staking _**doivent**_ staker à la fois du Bitcoin et du CORE simultanément, avec un montant de CORE staké dépassant un certain seuil pour débloquer les pourcentages de récompenses améliorés pour le staking de Bitcoin.\
De plus, ils doivent s'assurer que l'adresse de récompense CORE pour le staking de Bitcoin correspond à l'adresse de staking CORE. Cet alignement est crucial, car il vérifie que le Bitcoin et le CORE stakés appartiennent au même propriétaire. Les plateformes de staking doivent également vérifier que les adresses CORE correspondent pour s'assurer que les utilisateurs reçoivent les taux de rendement du dual staking corrects en fonction de leur activité de staking combinée.

### 4\. Pour les utilisateurs qui stakent déjà du Bitcoin et du CORE, y a-t-il quelque chose qu'ils doivent faire pour profiter du Dual Staking ?

Pour profiter pleinement du Dual Staking, les utilisateurs doivent s'assurer que l'adresse de récompense du staking de Bitcoin désignée correspond à l'adresse utilisée pour le staking de CORE. Les utilisateurs qui ont staké leur Bitcoin et/ou CORE sur plusieurs adresses peuvent envisager de consolider leur staking sur une seule adresse pour optimiser le rendement et maximiser les retours, et s'assurer que le CORE staké est au-dessus du seuil requis pour débloquer des pourcentages de rendement plus élevés pour le staking de Bitcoin.

### 5\. Comment calcules ton le rendement sous le modèle dual staking?

- Les rendements globaux du staking changent en fonction des modifications des variables suivantes :
  - [Montant total de Core jalonner sur tous les validateurs] (https://stake.coredao.org/validators)
  - [Montant total de BTC jalonner sur tous les validateurs] (https://stake.coredao.org/validators)
  - Le changement de prix relatif entre BTC et Core
  - [Ajustement annuel des récompenses] (https://docs.coredao.org/docs/learn/economics/core-token/tokenomics-and-utility#sound-supply-and-emissions)
- Les rendements du staking est spécifiques au validateur et varient en fonction de ces facteurs supplémentaires :
  - Nombre total de validateurs actifs
  - Commission de validation
  - La délégation reçue sur le hachage, le staking de BTC et le staking CORE
  - Paliers de Dual-staking

### 6\. Comment les utilisateurs équilibrent-ils CORE et Bitcoin entre les validateurs pour maximiser le rendement ?

Pour que les utilisateurs voient la distribution de leur CORE, Bitcoin et Hash délégués pour chaque validateur, ils peuvent visiter le site officiel de [staking de Core](https://stake.coredao.org/). Les rendements de staking CORE et Bitcoin de chaque validateur varient car ils dépendent du montant total et pondéré des délégations qu'un validateur reçoit, voir [ici](../Learn/core-concepts/satoshi-plus-consensus/rewards#3-validator-rewards) pour plus de détails.\
La pratique de rééquilibrer les délégations parmi les validateurs est essentielle pour maximiser les récompenses globales et maintenir un écosystème sain de validateurs. Lorsqu'un validateur reçoit une délégation insuffisante, il risque de devenir inactif. À l'inverse, une délégation excessive à un seul validateur peut entraîner une réduction des récompenses pour chaque délégataire, car les récompenses doivent être partagées parmi un plus grand nombre de délégataires.\
L'action des délégataires de rééquilibrer leur délégation pour maximiser la récompense est le moteur pour assurer un ensemble équilibré de validateurs. Pour les utilisateurs qui préfèrent ne pas gérer activement leurs délégations, il est conseillé de répartir les mises de manière égales entre tous les validateurs actifs. Cette approche améliore la stabilité des pourcentages de récompense.

### 7\. Y a-t-il un risque de perdre vos actifs Bitcoin pendant le Dual Staking ?

Dual Staking is a [self-custodial process](../Learn/products/btc-staking/overview), allowing users to maintain full control over their assets. Tout au long du processus de staking, le Bitcoin reste en sécurité dans le portefeuille de l'utilisateur.  Les stakers ne font face à aucun risque de slashing, de risque de contrat intelligent externe ou de risque de contrepartie. Les hypothèses de confiance pour le staking de Bitcoin sont les mêmes que celles sous-jacentes à la détention de Bitcoin.

### 8\. Alors que le Bitcoin est verrouillé dans le temps, les utilisateurs peuvent-ils unstaker le CORE qui est dual staké avec le Bitcoin ? Si oui, perdent-ils les récompenses gagnées avant de unstaker le CORE ?

Les utilisateurs peuvent unstaker le CORE à tout moment, tout comme lorsqu'ils stakent le CORE indépendamment. La seule différence est que lorsque la récompense de staking de Bitcoin est calculée, le pourcentage de récompense diminuera en raison de la diminution du CORE staké. Notez que cette réduction ne s'applique qu'aux récompenses futures et n'affecte pas les récompenses déjà gagnées par l'utilisateur.

### 9\. Comment les utilisateurs s'assurent-ils que l'adresse de récompense CORE pour le staking de Bitcoin est la même que l'adresse de staking CORE lorsqu'ils stakent via le [site de staking de Core](https://stake.coredao.org/) ?

Sur **stake.coredao.org**, pour vous assurer que l'adresse de récompense CORE pour le staking de Bitcoin est la même que l'adresse de staking CORE, suivez les étapes suivantes :

1. Pour staker le CORE, connectez votre portefeuille Core qui sera alors utilisé pour signer la transaction de staking CORE.
2. Pour staker le Bitcoin, connectez d'abord le **même portefeuille Core**, puis connectez votre portefeuille Bitcoin. Lorsque la transaction de staking de Bitcoin est créée via le site de staking, elle utilise l'adresse du portefeuille Core connecté comme adresse de récompense Core pour le staking de Bitcoin.

Tant que l'utilisateur utilise toujours la même adresse de portefeuille Core pour staker à la fois le CORE et le Bitcoin, ce sera la même adresse. Les transactions de staking pour le Bitcoin et le CORE sont également suivies par l'adresse Core. Une fois que le portefeuille Core est connecté, les utilisateurs peuvent aller à la section "[Mon Staking](https://stake.coredao.org/mystaking)" sur le [site de staking](https://stake.coredao.org/) pour voir toutes les transactions de staking CORE et Bitcoin, ainsi que toutes les récompenses accumulées en CORE pour le staking de Bitcoin et de CORE.

### 10\. Que se passe-t-il pour la récompense des délégataires si le validateur auquel ils ont délégué leurs actifs est pénalisé (slashed) ?

Si un validateur est pénalisé, les stakers qui ont délégué leur CORE ou Bitcoin ne seront _**pas**_ pénalisés. Cependant, étant donné que le validateur ne recevra pas la récompense de staking, les délégataires manqueront également les récompenses de staking pour cette période.