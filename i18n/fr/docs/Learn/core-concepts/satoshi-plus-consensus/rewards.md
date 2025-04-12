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

<p align="center">
![rewards](../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p> 

### 1. Récompenses de minage

- **Description:** Les récompenses de minage sont accordées aux mineurs de Bitcoin qui contribuent leur puissance de hachage pour sécuriser la blockchain Core. Ce processus étend les efforts de minage traditionnels sur la blockchain Bitcoin pour inclure le soutien à blockchain Core, sans exiger que les mineurs détournent des ressources de leurs activités de minage de Bitcoin.
- **Mécanisme:** Les mineurs incluent des métadonnées spécifiques dans les blocs Bitcoin qu'ils minent, indiquant leur soutien à la blockchain Core. En échange de leur contribution, les mineurs reçoivent des tokens CORE en tant que récompenses supplémentaires, en plus de leurs récompenses régulières de minage Bitcoin.

### 2. Récompenses de staking

- **Description:** Staking rewards are distributed to Bitcoin and CORE token holders who stake and delegate their tokens with Core Validators. Ce staking contribue non seulement à sécuriser le réseau via le composant Preuve d’Enjeu Déléguée (DPoS) du consensus Satoshi Plus, mais permet également aux détenteurs de tokens de participer à la gouvernance du réseau.
- **Mechanism:**  DPoS allows holders of both CORE tokens and [Bitcoin](../../products/btc-staking/overview.md) to vote and participate in the election of active validator set by delegating their holdings to their preferred validators. For CORE token staking, the minimum staking requirement is **1 CORE** token, allowing any CORE holders to stake onto the Core network. On the Bitcoin staking side, the current configuration imposes **no minimum BTC requirement** when using the staking script. However, staking via the official website UI requires a **minimum of 0.01 BTC** (excluding transaction fees). Notez que cette exigence pourrait être modifiée ultérieurement par un vote de gouvernance. Holders of both CORE and Bitcoin can delegate their respective tokens to validators of their choice through the official [staking website](https://stake.coredao.org/staking). Les récompenses gagnées par les stakers sont proportionnelles à la quantité de Bitcoin/CORE stakés et à la durée du staking, incitant à la détention à long terme et à la participation au processus de consensus.

### 3. Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. Le montant des récompenses qu'un validateur reçoit est proportionnel à son stake et à la puissance de hachage déléguée par les mineurs. Il existe deux catégories de récompenses de validateur:
    1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
    2. **Frais collectés à partir des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un tour est miné. Actuellement, **90%** des récompenses vont aux validateurs et **10%** vont au `contrat de récompenses du système`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, donc à long terme, tous les validateurs stables devraient obtenir une part similaire de la récompense.

Validators share rewards with the entities that delegated to them – including CORE stakers, Bitcoin stakers, and Bitcoin Miners – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Les validateurs peuvent prendre comme ils le souhaitent une grande ou une petite partie la récompense, bien qu'ils soient incités à être généreux pour attirer plus de stake et de puissance de hachage.

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

- **Per unit hash power reward:** $$rHu$$ =  $$\frac{rH}{rHp}$$
- **Per unit CORE reward:** $$rSu$$ = $$\frac{rS}{rSp}$$
- **Per unit BTC reward:** $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Yield Multipliers:** Each boosted yield level has a specific multiplier (e, f, g, h,..., etc) that is determined by a user's staking data as well as system dual staking settings. Ces paramètres peuvent être ajustés et sont soumis à un processus de gouvernance. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

#### Impact du Dual Staking sur les récompenses BTC

Avec l’introduction du Dual Staking, les récompenses de staking de BTC sont désormais réparties par paliers, en fonction du montant de CORE staké par rapport à la quantité de BTC. Les récompenses en BTC ne sont donc plus réparties uniformément entre tous les participants. Elles sont à la place allouées de manière dynamique en fonction des seuils de dual staking, les paliers supérieurs recevant généralement une plus grande proportion des récompenses. Cette structure de paliers introduit une variabilité dans les rendements de staking BTC, aligne les intérêts au sein de l’écosystème Core et maintient une distribution proportionnelle des récompenses.

#### Partage des Récompenses

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué de CORE et de Bitcoin. De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations.

### 4. Récompenses des Relayeurs et Vérificateurs

Dans l'écosystème Core, les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'une ronde est miné, avec **90%** allant aux validateurs et **10%** au contrat de récompenses du système. Le contrat de récompenses du système accumule des récompenses pour rémunérer les relayeurs et les vérificateurs. Actuellement, il y a un plafond de **10 millions** de tokens CORE dans le contrat de récompenses du système. Toutes les récompenses excédant ce montant sont brûlées.

Les relayeurs sont chargés de transmettre les blocs Bitcoin et les données de transaction au réseau Core. Ils gagnent une partie des récompenses de base du système et des frais de transaction pour ce travail de communication inter-chaînes. Les récompenses des relayeurs sont distribuées par lots, tous les 100 blocs de Bitcoin. Les relayeurs réclament périodiquement leurs récompenses.

Les vérificateurs dans l'écosystème Core sont responsables de la surveillance du comportement des validateurs et les signalent s'ils se livrent à une double signature ou à d'autres activités malveillantes. Lorsqu'ils réussissent, les récompenses sont immédiatement versées par le contrat de récompenses du système, dans la même transaction.

## Conclusion

Les récompenses dans l'écosystème Core jouent un rôle crucial dans le maintien de la sécurité, de la vitalité et de la décentralisation du réseau. En alignant les incitations des divers participants à travers un système de récompenses complet et adaptable, Core assure un engagement continu et contribue à la croissance soutenue et à la stabilité de la plateforme. Cette approche structurée de l'incitation est fondamentale pour le succès de Core en tant que plateforme leader dans le l'univers de la DeFi du Bitcoin.
