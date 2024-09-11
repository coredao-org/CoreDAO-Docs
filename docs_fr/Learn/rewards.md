---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
---

# Rewards in the Core Ecosystem

---

The Core ecosystem is designed to incentivize participation and secure commitment from its community through a well-structured rewards system. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Types de récompenses

![rewards](../../../../static/img/validator/Reward-Distribution.png)

### 1. Récompenses de minage

- **Description:** Mining rewards are provided to Bitcoin miners who contribute their hashing power to secure the Core blockchain. This process extends the traditional mining efforts on the Bitcoin blockchain to include support for Core blockchain, without requiring miners to divert resources from their Bitcoin mining activities.
- **Mechanism:** Miners include specific metadata in the Bitcoin blocks they mine, indicating their support for Core blockchain. En échange de leur contribution, les mineurs reçoivent des tokens CORE en tant que récompenses supplémentaires, en plus de leurs récompenses régulières de minage Bitcoin.

### 2. Récompenses de staking

- **Description:** Staking rewards are distributed to Bitcoin and CORE token holders who stake and delegate their tokens with Validators on the Core network. Ce staking contribue non seulement à sécuriser le réseau via le composant Preuve d’Enjeu Déléguée (DPoS) du consensus Satoshi Plus, mais permet également aux détenteurs de tokens de participer à la gouvernance du réseau.
- **Mécanisme:** La DPoS permet aux détenteurs de tokens CORE et de [Bitcoin](../../products/btc-staking/overview.md) de voter et de participer à l'élection du groupe de validateurs en déléguant leurs avoirs aux validateurs de leur choix. Pour le staking des tokens CORE, l'exigence minimale de staking est de 1 token CORE, permettant à tout détenteur de CORE de staker sur le réseau Core. On the bitcoin-staking side, the present configuration requires a **minimum staking requirement of 0.01 Bitcoin** which is adjustable through a governance vote. Holders of both CORE token and Bitcoin can delegate their respective tokens to validators of their choice through the official [staking website](https://stake.coredao.org/). The rewards earned by stakers are proportional to the amount of Bitcoin/CORE staked and the duration of the staking, incentivizing long-term holding and participation in the consensus process.

### 3. Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. Le montant des récompenses qu'un validateur reçoit est proportionnel à son stake et à la puissance de hachage déléguée par les mineurs. Il existe deux catégories de récompenses de validateur:
  1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
  2. **Frais collectés à partir des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un tour est miné. Actuellement, **90%** des récompenses vont aux validateurs et **10%** vont au `contrat de récompenses du système`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, donc à long terme, tous les validateurs stables devraient obtenir une part similaire de la récompense.

Les validateurs partagent les récompenses avec les entités qui leur ont été délégué – y compris les stakers de CORE, les stakers de Bitcoin et les délégués PoW – mais ils décident du montant à redistribuer en choisissant combien ils (les validateurs) souhaitent conserver pour eux-mêmes. Les validateurs peuvent prendre comme ils le souhaitent une grande ou une petite partie la récompense, bien qu'ils soient incités à être généreux pour attirer plus de stake et de puissance de hachage.

After the validators take their fees, the protocol uses this function to determine how the remaining rewards are split between CORE stakers, Bitcoin stakers, and hash power delegators. La distribution des récompenses est calculée en fonction de la formule suivante:

### Hash Power Delegators (Miners & Mining Pools)

$$
    rH = \frac{rHp}{tHp} * \frac{m}{S} * R
$$

### CORE Stakers

$$
    rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
$$

### Bitcoin Stakers

$$
    rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
$$

Où:

- $rH$ est les récompenses reçues par le validateur en raison de la puissance de hachage qui lui est déléguée (DPoW)
- $rS$ = récompenses reçues par le validateur en raison des CORE qui lui sont délégués (DPoS)
- $rB$ is validator rewards attributed to Bitcoin staking
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
- $rBu$ is the Bitcoin staking rewards per unit;

## Reward Split

These reward-splitting functions are designed to create an active market for rewards while encouraging competition amongst the validator set for both delegated hash power and delegated staked CORE and Bitcoin. De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations.

### 4. Récompenses des Relayeurs et Vérificateurs

In the Core ecosystem, the base rewards are calculated and distributed when the last block of a round is mined, with **90%** going to the validators and **10%** to the System Rewards Contract. Le contrat de récompenses du système accumule des récompenses pour rémunérer les relayeurs et les vérificateurs. Actuellement, il y a un plafond de **10 millions** de tokens CORE dans le contrat de récompenses du système. Toutes les récompenses excédant ce montant sont brûlées.

Les relayeurs sont responsables de la communication des en-têtes de blocs Bitcoin au réseau Core. Ils gagnent une partie des récompenses de base du système et des frais de transaction pour ce travail de communication inter-chaînes. Les récompenses des relayeurs sont distribuées par lots, tous les 100 blocs de Bitcoin. Les relayeurs réclament périodiquement leurs récompenses.

Verifiers in the Core ecosytem are responsible for monitoring the behavior of validators and report them if they engage in double signing or other malicious activity. Lorsqu'ils réussissent, les récompenses sont immédiatement versées par le contrat de récompenses du système, dans la même transaction.

## Conclusion

The rewards in the Core ecosystem play a crucial role in maintaining the security, vitality, and decentralization of the network. By aligning the incentives of various participants through a comprehensive and adaptable rewards system, Core ensures ongoing engagement and contributes to the sustained growth and stability of the platform. This structured approach to incentivization is foundational to the success of Core as a leading platform in the Bitcoin DeFi landscape.
