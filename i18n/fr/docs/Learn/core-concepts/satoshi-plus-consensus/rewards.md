---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
---

# Récompenses dans l'écosystème Core

---

L'écosystème Core est conçu pour inciter à la participation et sécuriser l'engagement de sa communauté à travers un système de récompenses bien structuré. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Types de récompenses

<p align="center">![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)</p> 

### 1. Récompenses de minage

- **Description:** Les récompenses de minage sont accordées aux mineurs de Bitcoin qui contribuent leur puissance de hachage pour sécuriser la blockchain Core. Ce processus étend les efforts de minage traditionnels sur la blockchain Bitcoin pour inclure le soutien à blockchain Core, sans exiger que les mineurs détournent des ressources de leurs activités de minage de Bitcoin.
- **Mécanisme:** Les mineurs incluent des métadonnées spécifiques dans les blocs Bitcoin qu'ils minent, indiquant leur soutien à la blockchain Core. En échange de leur contribution, les mineurs reçoivent des tokens CORE en tant que récompenses supplémentaires, en plus de leurs récompenses régulières de minage Bitcoin.

### 2. Récompenses de staking

- **Description:** Les récompenses de staking sont distribuées aux détenteurs de Bitcoin et CORE qui jalonne et délèguent leurs jetons avec les validateurs sur le réseau Core.
- **Mécanisme:** La DPoS permet aux détenteurs de jetons CORE et de [Bitcoin](../../products/btc-staking/overview.md) de voter et de participer à l'élection du groupe de validateurs en déléguant leurs avoirs aux validateurs de leur choix. Pour le staking des jetons CORE, l'exigence minimale de staking est de **1 jeton CORE**, permettant à tout détenteur de CORE de jalonner sur le réseau Core. Du côté du staking Bitcoin, la configuration actuelle n'impose aucune exigence minimale de BTC lors de l'utilisation du script de staking. Cependant, le staking via l'interface utilisateur officielle du site web nécessite un minimum de 0,01 BTC (hors frais de transaction). Les détenteurs de jetons CORE et de Bitcoin peuvent déléguer leurs jetons respectifs aux validateurs de leur choix via le site officiel de [staking website](https://stake.coredao.org/staking). Les récompenses gagnées par les stakers sont proportionnelles à la quantité de Bitcoin/CORE stakés et à la durée du staking, incitant à la détention à long terme et à la participation au processus de consensus.

### 3. Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme :** Les validateurs reçoivent une combinaison de récompenses de blocs CORE et de frais de gaz. Il existe deux catégories de récompenses de validateur:
    1. **Récompenses de bloc**, c'est-à-dire des jetons CORE nouvellement frappés.
    2. **Frais collectés à partir des transactions dans chaque bloc**;

Block rewards are calculated and distributed when the last block of a round is mined. Actuellement, **90%** des récompenses vont aux validateurs et **10%** vont au `contrat de récompenses du système`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, donc à long terme, tous les validateurs stables devraient obtenir une part similaire de la récompense.

Validators share rewards with the entities that delegated to them – including CORE stakers, Bitcoin stakers, and Bitcoin miners – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous in order to attract more delegators.

Après que les validateurs aient prélevé leurs frais, le protocole utilise cette fonction pour déterminer comment les récompenses restantes sont réparties entre les stakers de CORE, les stakers de Bitcoin et les délégués de puissance de hachage. La distribution des récompenses est calculée en fonction de la formule suivante:

### Délégateurs de Puissance de Hachage (Mineurs et Pools de Minage)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

### Stakers CORE

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

### Stakers de Bitcoin

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Où:

- $$rH$$: Récompenses attribuées à la puissance de hachage déléguée (DPoW).
- $$rS$$: Récompenses attribuées au staking de CORE (DPoS).
- $$rB$$: Récompenses attribuées au staking de BTC.
- $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
- $$m$$: Proportion des récompenses allouées à la puissance de hachage.
- $$k$$: Proportion des récompenses allouées au staking de CORE.
- $$l$$: Proportion des récompenses allouées au staking de BTC.
- $$S$$: Score hybride du validateur.

Les calculs de récompense par unité déterminent la part de récompenses distribuée pour chaque unité de puissance de hachage, de CORE ou de BTC stakée :

- \*\*Récompense par unité de puissance de hachage : $$rHu$$ =  $$\frac{rH}{rHp}$$
- \*\*Récompense par unité de CORE : $$rSu$$ = $$\frac{rS}{rSp}$$
- \*\*Récompense par unité de BTC : $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Multiplicateurs de rendement :** Chaque niveau de rendement (boosted yield level) possède un multiplicateur spécifique (e,f,g,h, ..., etc), déterminé à la fois par les données de staking de l’utilisateur et par la configuration du dual staking au niveau du système. Ces paramètres peuvent être ajustés et sont soumis à un processus de gouvernance. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

#### Impact du Dual Staking sur les récompenses BTC

With the introduction of Dual Staking, Bitcoin staking rewards are now tiered based on the amount of CORE staked relative to Bitcoin. Bitcoin rewards are no longer evenly distributed across all participants. Instead, they are allocated dynamically based on Dual Staking thresholds, with higher tiers generally receiving a greater proportion of the rewards.

#### Partage des Récompenses

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué de CORE et de Bitcoin. De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations.

### 4. Récompenses des Relayeurs et Vérificateurs

Dans l'écosystème Core, les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'une ronde est miné, avec **90%** allant aux validateurs et **10%** au contrat de récompenses du système. Le contrat de récompenses du système accumule des récompenses pour rémunérer les relayeurs et les vérificateurs. Actuellement, il y a un plafond de **10 millions** de tokens CORE dans le contrat de récompenses du système. Toutes les récompenses excédant ce montant sont brûlées.

Les relayeurs sont chargés de transmettre les blocs Bitcoin et les données de transaction au réseau Core. Ils gagnent une partie des récompenses de base du système et des frais de transaction pour ce travail de communication inter-chaînes. Les récompenses des relayeurs sont distribuées par lots, tous les 100 blocs de Bitcoin. Les relayeurs réclament périodiquement leurs récompenses.

Les vérificateurs dans l'écosystème Core sont responsables de la surveillance du comportement des validateurs et les signalent s'ils se livrent à une double signature ou à d'autres activités malveillantes. Lorsqu'ils réussissent, les récompenses sont immédiatement versées par le contrat de récompenses du système, dans la même transaction.

## Conclusion

Rewards in Satoshi Plus play a crucial role in maintaining the security, vitality, and decentralization of the network. En alignant les incitations des divers participants à travers un système de récompenses complet et adaptable, Core assure un engagement continu et contribue à la croissance soutenue et à la stabilité de la plateforme.