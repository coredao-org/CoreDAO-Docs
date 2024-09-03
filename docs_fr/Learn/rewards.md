---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
---

# Récompenses dans l'écosystème Core Chain

---

L'écosystème Core Chain est conçu pour inciter à la participation et sécuriser l'engagement de sa communauté à travers un système de récompenses bien structuré. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Types de récompenses

:::warning
La structure des récompenses sur Core Chain est sujette à des ajustements basés sur des votes de gouvernance périodiques, permettant à la communauté de répondre aux changements dans l'écosystème, tels que les fluctuations de la valeur des tokens ou des évolutions au niveau de la sécurité.
:::

![rewards](../../../../static/img/validator/Reward-Distribution.png)

### 1. Récompenses de minage

- **Description:** Les récompenses de minage sont accordées aux mineurs de Bitcoin qui contribuent leur puissance de hachage pour sécuriser le réseau Core Chain. Ce processus étend les efforts de minage traditionnels sur la blockchain Bitcoin pour inclure le soutien à Core Chain, sans exiger que les mineurs détournent des ressources de leurs activités de minage de Bitcoin.
- **Mécanisme:** Les mineurs incluent des métadonnées spécifiques dans les blocs Bitcoin qu'ils minent, indiquant leur soutien à Core Chain. En échange de leur contribution, les mineurs reçoivent des tokens CORE en tant que récompenses supplémentaires, en plus de leurs récompenses régulières de minage Bitcoin.

### 2. Récompenses de staking

- **Description:** Les récompenses de staking sont distribuées aux détenteurs de tokens BTC et CORE qui stakent et délèguent leurs tokens avec les validateurs sur le réseau Core. Ce staking contribue non seulement à sécuriser le réseau via le composant Preuve d’Enjeu Déléguée (DPoS) du consensus Satoshi Plus, mais permet également aux détenteurs de tokens de participer à la gouvernance du réseau.
- **Mécanisme:** La DPoS permet aux détenteurs de tokens CORE et de [Bitcoin](../../products/btc-staking/overview.md) de voter et de participer à l'élection du groupe de validateurs en déléguant leurs avoirs aux validateurs de leur choix. Pour le staking des tokens CORE, l'exigence minimale de staking est de 1 token CORE, permettant à tout détenteur de CORE de staker sur le réseau Core. Du côté du staking de Bitcoin, la configuration actuelle exige un **seuil minimal de staking de 0,01 BTC**, qui est ajustable via un vote de gouvernance. Les détenteurs de tokens CORE et de BTC peuvent déléguer leurs tokens respectifs aux validateurs de leur choix via le site officiel de [staking website](https://stake.coredao.org/). Les récompenses gagnées par les stakers sont proportionnelles à la quantité de BTC/CORE stakés et à la durée du staking, incitant à la détention à long terme et à la participation au processus de consensus.

### 3. Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. Le montant des récompenses qu'un validateur reçoit est proportionnel à son stake et à la puissance de hachage déléguée par les mineurs. Il existe deux catégories de récompenses de validateur:
  1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
  2. **Frais collectés à partir des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un tour est miné. Actuellement, **90%** des récompenses vont aux validateurs et **10%** vont au `contrat de récompenses du système`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, donc à long terme, tous les validateurs stables devraient obtenir une part similaire de la récompense.

Les validateurs partagent les récompenses avec les entités qui leur ont été délégué – y compris les stakers de CORE, les stakers de Bitcoin et les délégués PoW – mais ils décident du montant à redistribuer en choisissant combien ils (les validateurs) souhaitent conserver pour eux-mêmes. Les validateurs peuvent prendre comme ils le souhaitent une grande ou une petite partie la récompense, bien qu'ils soient incités à être généreux pour attirer plus de stake et de puissance de hachage.

Après que les validateurs aient prélevé leurs frais, le protocole utilise cette fonction pour déterminer comment les récompenses restantes sont réparties entre les stakers de CORE, les stakers de BTC et les délégués de puissance de hachage. La distribution des récompenses est calculée en fonction de la formule suivante:

$$
    rH = \frac{rHp}{tHp} * \frac{m}{S} * R
$$

$$
    rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
$$

$$
    rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
$$

Où:

- $rH$ est les récompenses reçues par le validateur en raison de la puissance de hachage qui lui est déléguée (DPoW)
- $rS$ = récompenses reçues par le validateur en raison des CORE qui lui sont délégués (DPoS)
- $rB$ = récompenses du validateur attribuées au staking de BTC
- $R$ = récompense globale attribuée à tous les délégués

Pour compléter, voici trois autres ratios d'intérêt:

$$
    rHu = \frac{rH}{rHp}
$$

$$
    rSu = \frac{rS}{rSp}
$$

$$
    rBu = \frac{rB}{rBp}
$$

Où:

- $rHu$ = récompense de puissance de hachage par unité;
- $rSu$ = récompense de staking de token CORE par unité;
- $rBu$ is the BTC staking rewards per unit;

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi le groupe de validateurs pour la puissance de hachage déléguée et le stake délégué. De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations.

### 4. Récompenses des Relayeurs et Vérificateurs

Dans l'écosystème Core Chain, les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'une ronde est miné, avec **90%** allant aux validateurs et **10%** au contrat de récompenses du système. Le contrat de récompenses du système accumule des récompenses pour rémunérer les relayeurs et les vérificateurs. Actuellement, il y a un plafond de **10 millions** de tokens CORE dans le contrat de récompenses du système. Toutes les récompenses excédant ce montant sont brûlées.

Les relayeurs sont responsables de la communication des en-têtes de blocs Bitcoin au réseau Core. Ils gagnent une partie des récompenses de base du système et des frais de transaction pour ce travail de communication inter-chaînes. Les récompenses des relayeurs sont distribuées par lots, tous les 100 blocs de Bitcoin. Les relayeurs réclament périodiquement leurs récompenses.

Les vérificateurs dans l'écosystème Core Chain sont responsables de la surveillance du comportement des validateurs et les signalent s'ils se livrent à une double signature ou à d'autres activités malveillantes. Lorsqu'ils réussissent, les récompenses sont immédiatement versées par le contrat de récompenses du système, dans la même transaction.

### 5. Récompenses pour la Participation à la Gouvernance:

- **Description:** Les participants au processus de gouvernance de Core Chain sont incités par des récompenses qui encouragent une participation active et réfléchie aux processus décisionnels.
- **Mécanisme:** Des récompenses sont distribuées aux utilisateurs qui votent sur les propositions et participent à d'autres activités de gouvernance. Ces récompenses visent à favoriser une communauté de gouvernance proactive et à garantir que les décisions reflètent le large consensus des parties prenantes de l'écosystème.

## Stratégie de Distribution des Récompenses

Core Chain suit les principes de distribution suivants:
\* **Équité:** Le système de récompenses est conçu pour être équitable, en veillant à ce que les contributions, qu'elles soient sous forme de staking, de minage ou de participation à la gouvernance, soient reconnues et récompensées équitablement.
\* **Transparence:** Tous les aspects de la distribution des récompenses sont transparents, permettant aux participants de comprendre comment les récompenses sont calculées et distribuées.
\* **Sécurité:** Le mécanisme de distribution est sécurisé contre la manipulation et les abus, en utilisant des protections cryptographiques et basées sur des contrats intelligents pour garantir l'intégrité du processus de récompense.

## Conclusion

Les récompenses dans l'écosystème Core Chain jouent un rôle crucial dans le maintien de la sécurité, de la vitalité et de la décentralisation du réseau. En alignant les incitations des divers participants à travers un système de récompenses complet et adaptable, Core Chain assure un engagement continu et contribue à la croissance soutenue et à la stabilité de la plateforme. Cette approche structurée de l'incitation est fondamentale pour le succès de Core Chain en tant que plateforme leader dans le l'univers de la DeFi du Bitcoin.
