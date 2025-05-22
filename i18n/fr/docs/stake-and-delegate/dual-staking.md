---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Introduction

[Self-Custodial Bitcoin Staking](https://docs.coredao.org/docs/Learn/products/btc-staking/overview.md) a été intégré à la blockchain Core en avril 2024, permettant aux utilisateurs de staker du Bitcoin et de gagner des rendements tout en conservant le contrôle total de leurs actifs.

Pour maximiser le potentiel de rendement du staking de Bitcoin, Core propose le Dual Staking - un mécanisme qui débloque des niveaux de récompense plus élevés en participant simultanément au staking de Bitcoin avec verrouillage temporel et au staking de jetons CORE.
Étant donné que les émissions quotidiennes de Core suivent un calendrier fixe, les participants qui mettent en jeu des CORE en plus de leur Bitcoin reçoivent des récompenses nettement plus élevées que ceux qui mettent en jeu uniquement du Bitcoin. L'augmentation du pourcentage de rendement est déterminée par la quantité de jetons CORE mis en jeu par rapport à la valeur du Bitcoin, avec des seuils définis correspondant à des niveaux croissants de récompenses de staking.
En alignant les récompenses de staking Bitcoin sur les niveaux de staking de jetons CORE, le Dual Staking crée une puissante incitation économique pour les détenteurs de Bitcoin à approfondir leur implication dans l'écosystème Core.

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

Le Dual Staking n'altère pas le processus de staking pour le Bitcoin et le CORE. Pour plus d'informations sur le fonctionnement du Self-Custodial Bitcoin Staking, référez-vous [ici](https://docs.coredao.org/docs/Learn/products/btc-staking/overview.md). Consultez également ce [guide](https://docs.coredao.org/docs/stake-and-delegate/delegating-core.md) détaillé sur la délégation de CORE et le [staking](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide.md)/la [récupération](https://docs.coredao.org/docs/Learn/products/btc-staking/Redeeming-Guide.md) de BTC.

Le Dual Staking crée une opportunité de débloquer des rendements plus élevés lorsque le Bitcoin et le CORE sont stakés simultanément, avec des seuils de staking de CORE variables correspondant à différents niveaux de boost de rendement sur les récompenses de staking de Bitcoin sur la blockchain Core.

Les détenteurs de Bitcoin peuvent [staker leur Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide.md) via le Self-Custodial Bitcoin Staking de Core pour accumuler des récompenses en CORE. En [stakant ensuite leurs tokens CORE](https://docs.coredao.org/docs/stake-and-delegate/delegating-core.md) à différents seuils de Dual Staking, les utilisateurs débloquent des niveaux supérieurs de rendements en Bitcoin, payés en CORE. Bien que le Dual Staking améliore les récompenses de staking de Bitcoin, il n'impacte pas le rendement généré par le staking de CORE lui-même.

Pour permettre des rendements plus élevés pour le staking de Bitcoin via le Dual Staking, les utilisateurs doivent remplir les conditions suivantes :

1. Staker à la fois du CORE et du Bitcoin simultanément, en s'assurant que la quantité de CORE staké dépasse le seuil minimum de dual staking **ET**
2. L'adresse du portefeuille de staking de CORE **doit** correspondre à l'adresse de récompense CORE désignée pour le staking de Bitcoin à laquelle le rendement est payé.

En fonction des ratios de staking CORE:BTC  (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>)représentant les jetons CORE mis en stake par rapport au Bitcoin mis en stake, les récompenses de staking Bitcoin sont divisées en n rendements boostés(P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>). Selon le niveau de rendement boosté d'un utilisateur, des multiplicateurs de rendement sont appliqués au taux de base pour le staking Bitcoin sur Core. Les multiplicateurs de rendement sont déterminés en fonction des données de staking de l'utilisateur et des paramètres de double staking du système. En conséquence, différents utilisateurs peuvent avoir des multiplicateurs différents. Des seuils spécifiques de staking CORE doivent également être atteints pour être éligible aux rendements boostés. De plus, il convient de noter que les ratios de staking  (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>) et le nombre de niveaux de rendement boostés (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>) peuvent être modifiés et sont ajustables via des votes de gouvernance.

## Qu'est-ce qui change avec le Dual Staking ?

Du point de vue de la manière dont le staking est effectué, rien ne change fondamentalement avec le Dual Staking. Les utilisateurs peuvent toujours staker du Bitcoin et du CORE indépendamment ; cependant, en stakant à la fois du Bitcoin et du CORE simultanément, ils débloquent le potentiel de rendements plus élevés sur le staking de Bitcoin. Staker les deux actifs n'est pas obligatoire mais une amélioration optionnelle pour les détenteurs de Bitcoin cherchant à maximiser leur rendement. Pensez-y comme à un boost de récompense, où les stakers de Bitcoin recevront des récompenses améliorées à mesure qu'ils augmentent la quantité de CORE staké.

Le Dual Staking renforce la relation entre les blockchains Bitcoin et Core, alignant les incitations et la valeur à travers les deux écosystèmes. Il offre des récompenses accrues pour ceux qui participent activement aux deux options de staking sans introduire de nouvelles exigences ou complexités dans le processus de staking.

## Principales caractéristiques du Dual Staking

- **Récompenses augmentées grâce au staking de CORE :** Les stakers de Bitcoin peuvent désormais staker des tokens CORE aux côtés du Bitcoin pour débloquer des rendements de staking de Bitcoin plus élevés. Pour gagner ces taux de staking améliorés, les stakers de Bitcoin sont tenus de staker du CORE au-dessus d'un certain seuil.

- **Staking Sans Risque et Non-Custodial :** Le Staking de Bitcoin Non-Custodial de Core permet aux utilisateurs de maintenir la propriété complète de leurs actifs tout au long du processus de staking. Le Bitcoin reste en sécurité dans le portefeuille de l'utilisateur et est débloqué lorsque la période de verrouillage choisie expire. Aucune entité externe ne prend la garde du Bitcoin du staker. Pendant ce temps, en échange du verrouillage de leur Bitcoin, les stakers peuvent déléguer à des validateurs Core qui sécurisent CORE et gagnent des récompenses. Cette configuration élimine le risque de garde et améliore la sécurité, car les stakers participent à la sécurité de Core sans mettre leur Bitcoin en danger.

## Qui peut bénéficier du Dual Staking ?

Le Dual Staking est conçu pour tout le monde, des individus aux plus grandes institutions financières, qui souhaitent gagner des taux de staking de Bitcoin plus élevés. En plus des détenteurs de Bitcoin, les mineurs de Bitcoin peuvent également tirer parti du Dual Staking pour optimiser leurs gains.

Les mineurs de Bitcoin peuvent gagner des récompenses en CORE en délégant leur puissance de hachage à des validateurs sur le réseau Core et en stakant leurs tokens Bitcoin et CORE. Ils peuvent débloquer des rendements plus élevés sur leurs trésoreries de Bitcoin en stakant des tokens CORE au-dessus du seuil minimum de dual staking. Intégrer les récompenses minières avec le mécanisme de Dual Staking permet aux mineurs de maximiser les rendements sur les activités de minage et de staking.

:::info
Veuillez vous référer à la [section FAQ sur le Dual Staking](../FAQs/dual-staking-faqs.md) pour d'autres questions ou clarifications. Pour un support supplémentaire, vous pouvez diriger vos questions vers le [Forum des développeurs de Core](http://forum.coredao.org) ou le [Serveur Discord de Core](https://discord.gg/M2AGJKSG).\
:::

## Conclusion

Le Dual Staking est un mécanisme pour fournir des taux de staking de Bitcoin durables à grande échelle sur Core. En établissant davantage Core comme la principale plateforme BTCfi de bout en bout, le token CORE devient la clé pour débloquer un rendement durable pour le Bitcoin.
