---
sidebar_label: Récompenses des validateurs
hide_table_of_contents: false
sidebar_position: 2
---

# Récompenses des validateurs dans l'écosystème de Core

---

L'écosystème Core est conçu pour inciter à la participation et sécuriser l'engagement de sa communauté à travers un système de récompenses bien structuré. Ce système soutient le mécanisme de consensus Satoshi Plus, garantissant la sécurité du réseau, l'engagement des parties prenantes et l'alignement des intérêts de tous les participants. Le système de récompenses est fondamental pour encourager la communauté à participer activement au minage, au staking et à la gouvernance, renforçant ainsi la santé et la croissance globale de l'écosystème.

## Récompenses des validateurs

- **Description:** Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels.
- **Mécanisme:** Les validateurs reçoivent une combinaison de frais de transaction et de nouveaux tokens CORE miné par la politique d'inflation de la blockchain. Le montant des récompenses qu'un validateur reçoit est proportionnel à son stake et à la puissance de hachage déléguée par les mineurs. Il existe deux catégories de récompenses de validateur:
    1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
    2. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un cycle est miné. Actuellement, **90 %** des récompenses vont aux validateurs et **10 %** sont alloués au Contrat de Récompense du `System`. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

Les validateurs partagent les récompenses avec les entités qui leur ont été délégué – y compris les stakers de CORE, les stakers de Bitcoin et les délégués PoW – mais ils décident du montant à redistribuer en choisissant combien ils (les validateurs) souhaitent conserver pour eux-mêmes. Ils peuvent choisir de garder plus ou moins de récompenses, bien qu'ils soient incités à être généreux afin d'attirer davantage de mises et de puissance de hachage.

Les validateurs sont tenus de partager les récompenses avec les délégués qui ont staké du CORE ou délégué de la puissance de hachage à leur profit. Étant donné que chaque validateur a une probabilité égale de produire des blocs, tous les validateurs stables devraient recevoir une part similaire des récompenses à long terme. La part que les validateurs gardent pour eux-mêmes (**frais de commission**) sera directement versée à leurs adresses de frais à la fin de chaque tour.

Après que les validateurs aient prélevé leurs frais, le protocole utilise cette fonction pour déterminer comment les récompenses restantes sont réparties entre les stakers de CORE, les stakers de BTC et les délégués de puissance de hachage. La distribution des récompenses est calculée en fonction de la formule suivante:

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

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

- Récompense par unité de puissance de hachage : $$rHu$$ =  $$\frac{rH}{rHp}$$
- Récompense par unité de CORE : rSu = $$\frac{rS}{rSp}$$
- Récompense par unité de BTC :  $$rBu$$ de **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicateur de rendement pour le Niveau<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Multiplicateurs de rendement:** Chaque niveau de rendement boosté a un multiplicateur spécifique (par exemple, f, g, h, etc.) qui est déterminé par les données de staking d'un utilisateur, ainsi que par les paramètres de double staking du système. Ces paramètres peuvent être ajustés et sont soumis à un processus de gouvernance. Ces calculs assurent une distribution proportionnelle des récompenses, en fonction de la contribution de chaque participant au pool de délégation d’un validateur.

Ces fonctions de répartition des récompenses sont conçues pour créer un marché actif des récompenses tout en encourageant la concurrence parmi les validateurs pour la puissance de hachage déléguée et le staking délégué (BTC et CORE). De leur côté, les délégateurs tenteront d'optimiser leurs propres récompenses en choisissant des validateurs avec de faibles montants de puissance de hachage déléguée et de stake. Pour maximiser leurs récompenses, les délégateurs rechercheront à la fois des validateurs généreux dans leurs paiements, mais qui n'ont pas déjà une quantité substantielle de tokens CORE ou de PoW délégués. Plus le stake d'un validateur sera faible, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'a qu'un seul token, il représente 50 % de la délégation totale de ce validateur. S'ils délèguent à un validateur avec 99 tokens CORE, ils ne représentent que 1 % de la délégation totale de ce validateur. Étant donné que les paiements sont en partie déterminés en fonction du pourcentage de stake total que chaque délégateur représente, ils seront incités à essayer de trouver des validateurs avec de petites délégations. En outre, les récompenses de staking BTC sont influencées par des niveaux de dual staking (paliers de rendement), ce qui encourage une plus grande participation au réseau sans imposer de stratégies spécifiques.

## Impact du Dual Staking sur les récompenses Btc

Avec l'introduction du Dual Staking, les récompenses de staking Bitcoin sont désormais échelonnées en fonction de la quantité de CORE misée par rapport à Bitcoin. Les récompenses en Btc ne sont donc plus réparties uniformément entre tous les participants. Elles sont à la place allouées de manière dynamique en fonction des seuils de dual staking, les paliers supérieurs recevant généralement une plus grande proportion des récompenses. Cette structure de paliers introduit une variabilité dans les rendements de staking Btc, aligne les intérêts au sein de l’écosystème Core et maintient une distribution proportionnelle des récompenses.

## Stratégie de Distribution des Récompenses

Core suit les principes de distribution suivants:
 * **Équité:** Le système de récompenses est conçu pour être équitable, en veillant à ce que les contributions, qu'elles soient sous forme de staking, de minage ou de participation à la gouvernance, soient reconnues et récompensées équitablement.
 * **Transparence:** Tous les aspects de la distribution des récompenses sont transparents, permettant aux participants de comprendre comment les récompenses sont calculées et distribuées.
 * **Sécurité:** Le mécanisme de distribution est sécurisé contre la manipulation et les abus, en utilisant des protections cryptographiques et basées sur des contrats intelligents pour garantir l'intégrité du processus de récompense.

## Prévention des comportements malveillants des validateurs

Les comportements malveillants des validateurs sont découragés par le slashing et l'emprisonnement. Les vérificateurs peuvent soumettre des preuves pour que les validateurs soient pénalisés ou emprisonnés s'ils ne remplissent pas leurs obligations. Les principales actions passibles de pénalités sont l'inaccessibilité et la signature double. L'inaccessibilité est signalée par les validateurs eux-mêmes dans l'algorithme de consensus, tandis que la double signature est rapportée par des vérificateurs externes. Pour plus d'informations, veuillez consulter le guide détaillé sur le [slashing et l'emprisonnement](../slashing/overview.md).