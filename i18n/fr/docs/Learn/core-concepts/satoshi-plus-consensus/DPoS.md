---
sidebar_label: Preuve d’enjeu déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoS dans Satoshi Plus
---

# Preuve d’enjeu déléguée (DPoS)

---

## Aperçu

La Preuve d’Enjeu Déléguée (DPoS) est un élément crucial du mécanisme de consensus Satoshi Plus utilisé par la blockchain Core. Ce modèle de consensus est conçu pour compléter la robustesse de la Preuve de Travail Déléguée (DPoW) avec un système de staking flexible, démocratique et évolutif. La DPoS non seulement renforce la sécurité du réseau, mais elle favorise également l’implication de la communauté dans la gouvernance, ce qui en fait un aspect essentiel du fonctionnement de la blockchain.
La DPoS permet aux détenteurs de tokens CORE et de [Bitcoin] (../../products/btc-staking/overview.md) de voter et de participer à l’élection du groupe de validateurs en déléguant leurs tokens à leurs validateurs préférés. Étant donné qu’il n’y a qu’un très petit seuil minimal de staking de 1 token CORE, tous les détenteurs de CORE peuvent contribuer à la gouvernance du réseau Core. Du côté du staking Bitcoin, la configuration actuelle n'impose aucune exigence minimale de BTC lors de l'utilisation du script de staking. Cependant, le staking via l'interface utilisateur officielle du site web nécessite un minimum de 0,01 BTC (hors frais de transaction). Notez que cette exigence pourrait être modifiée ultérieurement par un vote de gouvernance. Les détenteurs de tokens CORE et de BTC peuvent déléguer leurs tokens respectifs aux validateurs de leur choix via le site officiel de [staking website]
(https://stake.coredao.org/). Dans cette section, nous couvrons en profondeur le fonctionnement et l’importance de la DPoS dans le mécanisme Satoshi Plus.

## Fonctionnement de la DPoS dans Satoshi Plus

La DPoS permet aux détenteurs de tokens CORE de participer activement au consensus du réseau en stakant leurs tokens avec des validateurs. Ce processus implique plusieurs étapes clés:

- **Staking des Tokens:** Core permet de staker deux types de tokens, son token natif CORE et le BTC. Les détenteurs de tokens CORE peuvent staker leurs tokens sur la plateforme Core en les verrouillant dans un contrat intelligent associé à un validateur qu’ils choisissent de soutenir. Les tokens stakés représentent un vote de confiance dans la capacité du validateur à maintenir l’intégrité et la sécurité du réseau. De même, les détenteurs de BTC peuvent staker leur BTC sur le réseau Core via un staking non-custodial (../../products/btc-staking/overview.md), de manière fiable et sécurisée, sans avoir à renoncer à la garde de leurs actifs. Cela est réalisé en utilisant des verrouillages temporels absolus qui garantissent que le bitcoin reste sous le contrôle du détenteur tout en participant au staking. Ils peuvent ensuite déléguer leur BTC staké à n’importe quel validateur sur le réseau Core et gagner des récompenses sous forme de tokens CORE en échange de leur délégation.

- **Élection des Validateurs** : Les validateurs sont élus en fonction du stake total (BTC et CORE) qui leur sont délégués par les détenteurs de tokens. Plus un validateur a de tokens stakés, plus ses chances d’être sélectionné pour valider des transactions et créer de nouveaux blocs sont élevées. Cette méthode garantit que ceux qui ont le plus de confiance et de stake de la communauté sont responsables de la sécurité du réseau.

- **Création et Validation des Blocs:** Une fois élus, les validateurs jouent un rôle crucial dans le traitement des transactions et la création de nouveaux blocs. Ils s’assurent que toutes les transactions d'un bloc sont valides selon les règles de la blockchain, puis ajoutent ces blocs à la blockchain.

- **Distribution des Récompenses:** Les validateurs et leurs délégateurs gagnent des récompenses sous forme de tokens CORE pour leur participation à la sécurisation du réseau. Ces récompenses sont distribuées proportionnellement en fonction de la quantité de stake que chaque délégateur a contribué, incitant à la fois les validateurs et les détenteurs de tokens à agir dans le meilleur intérêt du réseau.

## Processus étape par étape

1. **Staking de Tokens CORE/BTC :** Les détenteurs de CORE et de BTC décident de participer à la sécurité du réseau en stakant leurs tokens. L'exigence minimale de staking est de 1 token CORE ou 0,01 BTC (si le staking se fait via l'interface utilisateur officielle du site web). Si les utilisateurs optent pour le staking BTC via script, aucune exigence minimale n’est imposée quant à la quantité de BTC staké.

2. **Délégation aux Validateurs :** Les détenteurs de tokens délèguent leurs tokens CORE/BTC stakés à un validateur de leur choix, aidant ainsi à améliorer le score hybride du validateur dans le processus d'élection.

3. **Élection des Validateurs :** Les validateurs ayant le score hybride le plus élevé, qui inclut les CORE délégués, sont élus dans l'ensemble des validateurs pour une période donnée.

4. **Production de Blocs :** Les validateurs élus sont responsables de la production des blocs et de la validation des transactions pendant leur mandat, ce qui leur permet de gagner des récompenses.

5. **Réception des Récompenses :** Les stakers de CORE et de BTC reçoivent des récompenses des validateurs auxquels ils ont délégué leurs tokens.

## Importance de la DPoS dans Satoshi Plus

- **Sécurité et Efficacité Accrues du Réseau:** La DPoS exploite les stakes de nombreux participants pour sécuriser le réseau, ce qui réduit le risque de centralisation inhérent aux systèmes traditionnels de PoW. Le système de délégation permet également un traitement plus efficace des transactions et la création de blocs, car seuls quelques validateurs élus doivent parvenir à un consensus, accélérant ainsi le processus de validation des transactions.

- **Décentralisation et Démocratisation de la Gouvernance du Réseau:** En permettant à tout détenteur de token de participer au processus de consensus, la DPoS démocratise la gouvernance du réseau. Cette inclusivité favorise une structure de réseau plus résiliente et décentralisée, car les décisions sont prises par une base plus large de parties prenantes, reflétant une diversité d’intérêts communautaires.

- **Évolution:** Les systèmes DPoS sont généralement plus évolutifs que les systèmes traditionnels de PoW car ils nécessitent moins de puissance de calcul et peuvent traiter les transactions plus rapidement. Cela est crucial pour la blockchain Core qui vise à soutenir un écosystème croissant d’applications décentralisées sans sacrifice de performance.

- **Incitation communautaire:** La DPoS encourage la participation de la communauté en récompensant les parties prenantes avec des tokens CORE. Cela aligne non seulement les incitations des validateurs et des détenteurs de tokens, mais garantit également que ceux qui investissent des ressources et de la confiance dans le réseau soient compensés pour leurs contributions.

- **Staking Liquide de CORE :** Les tokens CORE peuvent également être stakés de manière liquide, permettant aux stakers d'utiliser les tokens stCORE dans l'écosystème DeFi de Core.

- **Production de Blocs Efficace :** Le processus de délégation permet un modèle efficace et évolutif, car des validateurs éprouvés et compétents sont élus pour sécuriser le réseau.

#### **Conclusion**

Dans le mécanisme de consensus Satoshi Plus, le DPoS joue un rôle critique en équilibrant le composant DPoW énergivore. La Preuve d'Enjeu Déléguée est un mécanisme puissant qui améliore la sécurité et l'efficacité de la blockchain Core. En permettant aux détenteurs de tokens CORE et BTC de staker et de déléguer leurs tokens, le DPoS favorise une participation large et une sécurité robuste du réseau.
