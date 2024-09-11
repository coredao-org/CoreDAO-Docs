---
sidebar_label: Preuve d’enjeu déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoS dans Satoshi Plus
---

# Delegated Proof of Stake (DPoS)

---

## Aperçu

Delegated Proof of Stake (DPoS) is a pivotal component of the Satoshi Plus consensus mechanism employed by Core blockchain. Ce modèle de consensus est conçu pour compléter la robustesse de la Preuve de Travail Déléguée (DPoW) avec un système de staking flexible, démocratique et évolutif. La DPoS non seulement renforce la sécurité du réseau, mais elle favorise également l’implication de la communauté dans la gouvernance, ce qui en fait un aspect essentiel du fonctionnement de la blockchain.
La DPoS permet aux détenteurs de tokens CORE et de [Bitcoin] (../../products/btc-staking/overview.md) de voter et de participer à l’élection du groupe de validateurs en déléguant leurs tokens à leurs validateurs préférés. Étant donné qu’il n’y a qu’un très petit seuil minimal de staking de 1 token CORE, tous les détenteurs de CORE peuvent contribuer à la gouvernance du réseau Core. Du côté du staking de bitcoin, la configuration actuelle exige un **seuil minimal de staking de 0,01 BTC** (mais cela peut être ajusté à l’avenir via un vote de gouvernance). Les détenteurs de tokens CORE et de BTC peuvent déléguer leurs tokens respectifs aux validateurs de leur choix via le site officiel de [staking website]
(https://stake.coredao.org/). Dans cette section, nous couvrons en profondeur le fonctionnement et l’importance de la DPoS dans le mécanisme Satoshi Plus.

## Fonctionnement de la DPoS dans Satoshi Plus

La DPoS permet aux détenteurs de tokens CORE de participer activement au consensus du réseau en stakant leurs tokens avec des validateurs. Ce processus implique plusieurs étapes clés:

- **Staking des Tokens:** Core permet de staker deux types de tokens, son token natif CORE et le BTC. CORE token holders can stake their tokens on the Core platform by locking them in a smart contract associated with a Validator they choose to support. Les tokens stakés représentent un vote de confiance dans la capacité du validateur à maintenir l’intégrité et la sécurité du réseau. De même, les détenteurs de BTC peuvent staker leur BTC sur le réseau Core via un staking non-custodial (../../products/btc-staking/overview.md), de manière fiable et sécurisée, sans avoir à renoncer à la garde de leurs actifs. Cela est réalisé en utilisant des verrouillages temporels absolus qui garantissent que le bitcoin reste sous le contrôle du détenteur tout en participant au staking. Ils peuvent ensuite déléguer leur BTC staké à n’importe quel validateur sur le réseau Core et gagner des récompenses sous forme de tokens CORE en échange de leur délégation.

- **Élection des Validateurs** : Les validateurs sont élus en fonction du stake total (BTC et CORE) qui leur sont délégués par les détenteurs de tokens. Plus un validateur a de tokens stakés, plus ses chances d’être sélectionné pour valider des transactions et créer de nouveaux blocs sont élevées. Cette méthode garantit que ceux qui ont le plus de confiance et de stake de la communauté sont responsables de la sécurité du réseau.

- **Création et Validation des Blocs:** Une fois élus, les validateurs jouent un rôle crucial dans le traitement des transactions et la création de nouveaux blocs. Ils s’assurent que toutes les transactions d'un bloc sont valides selon les règles de la blockchain, puis ajoutent ces blocs à la blockchain.

- **Distribution des Récompenses:** Les validateurs et leurs délégateurs gagnent des récompenses sous forme de tokens CORE pour leur participation à la sécurisation du réseau. Ces récompenses sont distribuées proportionnellement en fonction de la quantité de stake que chaque délégateur a contribué, incitant à la fois les validateurs et les détenteurs de tokens à agir dans le meilleur intérêt du réseau.

## Step by Step Process

1. **Staking CORE/BTC Tokens:** CORE token holders decide to participate in network security by staking their tokens. The minimum staking requirement is 1 CORE token or 0.01 BTC.

2. **Delegating to Validators:** Token holders delegate their staked CORE/BTC tokens to a chosen validator, assisting their hybrid score in the validator election process.

3. **Validator Election:** Validators with the highest hybrid score, which includes delegated CORE, are elected to the validator set for a given round.

4. **Producing Blocks:** Elected validators are responsible for producing blocks and validating transactions during their term, thereby earning rewards.

5. **Earning Rewards:** CORE and BTC stakers earn rewards from the validators to whom they delegated.

## Importance de la DPoS dans Satoshi Plus

- **Sécurité et Efficacité Accrues du Réseau:** La DPoS exploite les stakes de nombreux participants pour sécuriser le réseau, ce qui réduit le risque de centralisation inhérent aux systèmes traditionnels de PoW. Le système de délégation permet également un traitement plus efficace des transactions et la création de blocs, car seuls quelques validateurs élus doivent parvenir à un consensus, accélérant ainsi le processus de validation des transactions.

- **Décentralisation et Démocratisation de la Gouvernance du Réseau:** En permettant à tout détenteur de token de participer au processus de consensus, la DPoS démocratise la gouvernance du réseau. Cette inclusivité favorise une structure de réseau plus résiliente et décentralisée, car les décisions sont prises par une base plus large de parties prenantes, reflétant une diversité d’intérêts communautaires.

- **Évolution:** Les systèmes DPoS sont généralement plus évolutifs que les systèmes traditionnels de PoW car ils nécessitent moins de puissance de calcul et peuvent traiter les transactions plus rapidement. This is crucial for Core blockchain as it aims to support a growing ecosystem of decentralized applications without sacrificing performance.

- **Incitation communautaire:** La DPoS encourage la participation de la communauté en récompensant les parties prenantes avec des tokens CORE. Cela aligne non seulement les incitations des validateurs et des détenteurs de tokens, mais garantit également que ceux qui investissent des ressources et de la confiance dans le réseau soient compensés pour leurs contributions.

- **Liquid Staked CORE:** CORE tokens can also be liquid staked, enabling stakers to use stCORE tokens in Core’s DeFi ecosystem.

- **Efficient Block Production:** The delegation process allows for an efficient and scalable model, as proven and capable validators are elected to secure the network.

#### **Conclusion**

In the Satoshi Plus consensus mechanism, DPoS plays a critical role by providing a balance to the energy-intensive DPoW component. Delegated Proof of Stake is a powerful mechanism that enhances the Core blockchain's security and efficiency. By allowing CORE and BTC token holders to stake and delegate their tokens, DPoS promotes broad participation and robust network security.
