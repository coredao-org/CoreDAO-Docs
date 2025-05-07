---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Introduction

[Self-Custodial Bitcoin Staking](https://docs.coredao.org/docs/Learn/products/btc-staking/overview) was integrated into the Core blockchain in April 2024, allowing users to stake Bitcoin and earn yield while retaining custody of their assets.

To maximize yield potential from Bitcoin staking, Core offers Dual Staking - a mechanism that unlocks higher reward tiers by participating in both Bitcoin timelock staking and CORE token staking simultaneously.
Since Core's daily emissions follow a fixed schedule, participants who stake CORE alongside their Bitcoin receive significantly higher rewards compared to those staking Bitcoin alone. The boost in yield percentage is determined by the amount of CORE tokens staked relative to the Bitcoin value, with defined thresholds corresponding to increasing tiers of staking rewards.
By aligning Bitcoin staking rewards with CORE token staking levels, Dual Staking creates a powerful economic incentive for Bitcoin holders to deepen their involvement in the Core ecosystem.

<!-- <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
  <iframe
    src="https://www.youtube.com/embed/zqzGoQwT9Rs?si=HRHOIRc2viLKHP1g"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div> -->

## Comment fonctionne le Dual Staking ?

Le Dual Staking n'altère pas le processus de staking pour le Bitcoin et le CORE. For more information on how Self-Custodial Bitcoin Staking works, refer [here](https://docs.coredao.org/docs/Learn/products/btc-staking/overview). Consultez également ce [guide](https://docs.coredao.org/docs/stake-and-delegate/delegating-core) détaillé sur la délégation de CORE et le [staking](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide)/la [récupération](https://docs.coredao.org/docs/Learn/products/btc-staking/Redeeming-Guide) de BTC.

Le Dual Staking crée une opportunité de débloquer des rendements plus élevés lorsque le Bitcoin et le CORE sont stakés simultanément, avec des seuils de staking de CORE variables correspondant à différents niveaux de boost de rendement sur les récompenses de staking de Bitcoin sur la blockchain Core.

Bitcoin holders can [stake their Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide) through Core's Self-Custodial Bitcoin Staking to accumulate CORE rewards. En [stakant ensuite leurs tokens CORE](https://docs.coredao.org/docs/stake-and-delegate/delegating-core) à différents seuils de Dual Staking, les utilisateurs débloquent des niveaux supérieurs de rendements en Bitcoin, payés en CORE. Bien que le Dual Staking améliore les récompenses de staking de Bitcoin, il n'impacte pas le rendement généré par le staking de CORE lui-même.

Pour permettre des rendements plus élevés pour le staking de Bitcoin via le Dual Staking, les utilisateurs doivent remplir les conditions suivantes :

1. Staker à la fois du CORE et du Bitcoin simultanément, en s'assurant que la quantité de CORE staké dépasse le seuil minimum de dual staking **ET**
2. L'adresse du portefeuille de staking de CORE **doit** correspondre à l'adresse de récompense CORE désignée pour le staking de Bitcoin à laquelle le rendement est payé.

En fonction des ratios de staking CORE:BTC  (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>)représentant les jetons CORE mis en stake par rapport au Bitcoin mis en stake, les récompenses de staking Bitcoin sont divisées en n rendements boostés(P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>). Selon le niveau de rendement boosté d'un utilisateur, des multiplicateurs de rendement sont appliqués au taux de base pour le staking Bitcoin sur Core. Les multiplicateurs de rendement sont déterminés en fonction des données de staking de l'utilisateur et des paramètres de double staking du système. En conséquence, différents utilisateurs peuvent avoir des multiplicateurs différents. Des seuils spécifiques de staking CORE doivent également être atteints pour être éligible aux rendements boostés. De plus, il convient de noter que les ratios de staking  (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>) et le nombre de niveaux de rendement boostés (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>) peuvent être modifiés et sont ajustables via des votes de gouvernance.

## Qu'est-ce qui change avec le Dual Staking ?

Du point de vue de la manière dont le staking est effectué, rien ne change fondamentalement avec le Dual Staking. Les utilisateurs peuvent toujours staker du Bitcoin et du CORE indépendamment ; cependant, en stakant à la fois du Bitcoin et du CORE simultanément, ils débloquent le potentiel de rendements plus élevés sur le staking de Bitcoin. Staker les deux actifs n'est pas obligatoire mais une amélioration optionnelle pour les détenteurs de Bitcoin cherchant à maximiser leur rendement. Pensez-y comme à un boost de récompense, où les stakers de Bitcoin recevront des récompenses améliorées à mesure qu'ils augmentent la quantité de CORE staké.

Le Dual Staking renforce la relation entre les blockchains Bitcoin et Core, alignant les incitations et la valeur à travers les deux écosystèmes. Il offre des récompenses accrues pour ceux qui participent activement aux deux options de staking sans introduire de nouvelles exigences ou complexités dans le processus de staking.

## Principales caractéristiques du Dual Staking

- **Récompenses augmentées grâce au staking de CORE :** Les stakers de Bitcoin peuvent désormais staker des tokens CORE aux côtés du Bitcoin pour débloquer des rendements de staking de Bitcoin plus élevés. Pour gagner ces taux de staking améliorés, les stakers de Bitcoin sont tenus de staker du CORE au-dessus d'un certain seuil.

- **Self-Custodial Staking**: Core’s Self-Custodial Bitcoin Staking enables users to maintain complete ownership of their assets throughout the staking process. Le Bitcoin reste en sécurité dans le portefeuille de l'utilisateur et est débloqué lorsque la période de verrouillage choisie expire. Aucune entité externe ne prend la garde du Bitcoin du staker. Pendant ce temps, en échange du verrouillage de leur Bitcoin, les stakers peuvent déléguer à des validateurs Core qui sécurisent CORE et gagnent des récompenses. Cette configuration élimine le risque de garde et améliore la sécurité, car les stakers participent à la sécurité de Core sans mettre leur Bitcoin en danger.

## Qui peut bénéficier du Dual Staking ?

Le Dual Staking est conçu pour tout le monde, des individus aux plus grandes institutions financières, qui souhaitent gagner des taux de staking de Bitcoin plus élevés. En plus des détenteurs de Bitcoin, les mineurs de Bitcoin peuvent également tirer parti du Dual Staking pour optimiser leurs gains.

Bitcoin miners can earn CORE rewards by delegating their hash power to validators on the Core network and staking their Bitcoin and CORE tokens. Ils peuvent débloquer des rendements plus élevés sur leurs trésoreries de Bitcoin en stakant des tokens CORE au-dessus du seuil minimum de dual staking. Intégrer les récompenses minières avec le mécanisme de Dual Staking permet aux mineurs de maximiser les rendements sur les activités de minage et de staking.

:::info
Veuillez vous référer à la [section FAQ sur le Dual Staking](../FAQs/dual-staking-faqs.md) pour d'autres questions ou clarifications. Pour un support supplémentaire, vous pouvez diriger vos questions vers le [Forum des développeurs de Core](http://forum.coredao.org) ou le [Serveur Discord de Core](https://discord.gg/M2AGJKSG).\
:::

## Conclusion

Le Dual Staking est un mécanisme pour fournir des taux de staking de Bitcoin durables à grande échelle sur Core. En établissant davantage Core comme la principale plateforme BTCfi de bout en bout, le token CORE devient la clé pour débloquer un rendement durable pour le Bitcoin.
