---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Les validateurs sur Core Network

---

Sur la Core blockchain, les validateurs sont des nœuds essentiels chargés de maintenir la sécurité, la décentralisation et l'intégrité du réseau. Ils valident les transactions, produisent de nouveaux blocs et participent à la gouvernance via le consensus Satoshi Plus unique de Core, qui combine la Preuve de Travail Déléguée (DPoW), la Preuve de Participation Déléguée (DPoS) et la mise en jeu auto-custodée de Bitcoin pour assurer la décentralisation, la sécurité et l'évolutivité.

## Rôle de validateur et participation au consensus

Les validateurs sont responsables du maintien de la santé et de la continuité du réseau. En participant au consensus, ils confirment la validité des transactions et contribuent à la production de blocs. Le consensus Satoshi Plus sélectionne les validateurs en fonction d'un système de notation hybride qui prend en compte le Bitcoin délégué, les jetons CORE et la puissance de hachage Bitcoin.

Les ensembles de validateurs sont alternés périodiquement, et les élections de validateurs ont lieu par périodes, généralement toutes les 24 heures (UTC+0), pour sélectionner les **27** meilleurs validateurs actifs en fonction de leurs scores hybrides. Les validateurs inactifs restants doivent attendre le prochain cycle d'élections pour devenir des validateurs actifs avant de pouvoir participer à la production de blocs.

## Économie des récompenses

Les validateurs reçoivent des récompenses en jetons CORE pour participer au mécanisme de consensus de Core et produire des blocs. Les récompenses sont distribuées à la fin de chaque tour (environ toutes les 24 heures) et proviennent de deux sources principales :

- **Base rewards:** Nouveaux jetons CORE nouvellement frappés.
- **Transaction fees:** Frais collectés à partir des transactions incluses dans chaque bloc pendant le tour(round).

Chaque validateur peut fixer son propre taux de commission(**commission rate**), la part des récompenses qu'il conserve avant de distribuer le reste à ses délégateurs. Les frais de commission sont distribués directement à l'adresse de frais spécifiée par le validateur à la fin de chaque tour(round).

Core n'implémente pas d'auto-ajout (**not implement self-bonding**). Les validateurs ne sont pas tenus de miser des CORE sur eux-mêmes pour participer. Ils ne gagnent des commissions que si d'autres participants délèguent des fonds vers eux. Si un validateur mise sur son propre validateur, il reçoit des récompenses comme n'importe quel délégateur régulier - et non en tant que commission.

Les récompenses de base sont distribuées lorsque le dernier bloc du tour(round) est confirmé. Actuellement,**90%** du total des récompenses de base sont alloués aux validateurs, tandis que les **10%** restants sont envoyés au Contrat de Récompense du Système. Des 90% alloués aux validateurs, chaque validateur reçoit des récompenses proportionnelles au nombre de blocs qu'ils produisent. À long terme, tous les validateurs stables devraient recevoir des parts approximativement égales, puisque la production de blocs est uniformément répartie.

Les frais de transaction suivent la même logique de distribution. **90%** du total des frais de transaction collectés pendant le tour sont distribués aux validateurs. Les validateurs peuvent appliquer leur taux de commission à ce montant avant de distribuer les récompenses restantes à leurs délégateurs. Les **10%** restants des frais sont déposés dans le Contrat de Récompense Système.

Les validateurs partagent les récompenses avec les délégateurs qui ont misé du CORE, délégué du BTC ou contribué à la puissance de hachage. Bien que les taux de commission soient flexibles, les validateurs sont incités à offrir des taux compétitifs afin d'attirer davantage de délégation et de renforcer leur score hybride.

Les frais de commission sont payés directement à l'adresse de frais désignée par chaque validateur à la fin de chaque tour(round).

> **Note:** Les récompenses sont réglées par tour(**per round**), et non par bloc. Chaque round correspond à un cycle d'élection de validateurs complet (~24 heures, UTC+0).

<p align="center">
![validator-reward-distribution](../../../static/img/validator/Rewards-In-Core-Ecosystem.png)
</p>

### Exemple du Calcul de Récompense

Prenons l'exemple d'une récompense de base pour un round de **3 000 CORE**, et supposons qu'un validateur fixe son taux de commission à **20 %**. Ces tokens ne vont pas directement à l'auteur de la proposition. Ils sont plutôt partagés entre les validateurs et les délégués. Ces **3000 CORE** seront distribués en fonction de la participation de chaque participant. Supposons que les frais générés par toutes les transactions dans tous les blocs d'un tour s'élèvent à **100 CORE**.

Supposons que la récompense de base pour un round est de **3,000 CORE**, et qu'un validateur fixe un taux de commission de **20%**. Ces jetons ne sont pas payés directement au proposant, mais sont distribués proportionnellement entre tous les validateurs et leurs délégateurs. La récompense de base, 3000 CORE dans ce cas, sera distribuée en fonction de la participation de chaque participant. Supposons également que les frais de transaction collectés pendant le round totalisent **100** CORE.

```maths
    Récompense totale accumulée = Récompense de base + Frais de transaction = 3,000 + 100 = 3,100 CORE

    System Reward Contract reçoit = 3,100 x 10% = 310 CORE  

    Récompense accumulée du validateur = (Récompense de base + Frais de transaction) x 90% = 3,100 x 90% = 2,790 CORE

    Commission = (Récompense de base + Frais de transaction) x 20% = 2,790 x 20% = 558 CORE

    Récompense totale du validateur = Commission = 558 CORE

    Récompense totale des délégués = Récompense accumulée du validateur - Commission = 2,790 - 558 = 2,232 CORE
```

## Risques potentiels et pénalités pour les validateurs

Bien que les validateurs de l'écosystème Core soient incités par des récompenses de bloc et des frais de transaction, le rôle comporte également des risques opérationnels et économiques. Les validateurs sont censés maintenir les performances, la disponibilité et l'intégrité du réseau. Ne pas le faire peut entraîner des pénalités qui affectent à la fois la réputation et les gains.

1. **Slashing:** Les validateurs peuvent être soumis à des sanctions s'ils se livrent à un comportement malveillant ou négligent, tel que : la signature double de blocs, une indisponibilité prolongée ou une inactivité, la violation des règles de consensus, etc. Le slashing entraîne la confiscation permanente d'une partie des CORE mis en jeu par le validateur, ce qui affecte directement ses avoirs financiers et sa crédibilité.

2. **Jailing:** Les validateurs qui sous-performent de manière constante, se déconnectent ou violent les règles du protocole peuvent être emprisonnés. Un validateur emprisonné est temporairement retiré de l'ensemble des validateurs actifs, ce qui le rend inéligible pour produire des blocs ou gagner des récompenses. Des emprisonnements répétés peuvent également entraîner une atteinte à long terme à la réputation au sein de la communauté ou une suppression du réseau.

3. **Loss of Delegation:** Les délégateurs peuvent retirer leur mise des validateurs sous-performants et la réallouer à des validateurs plus fiables. Cela peut réduire considérablement la part de récompenses d'un validateur.

4. **Stake Lock-up and Liquidity:** Les validateurs sont tenus de bloquer **10,000 CORE tokens** en garantie pour faire partie du réseau Core de validateurs participant au consensus. Ces jetons sont soumis à des périodes de blocage et ne peuvent être ni retirés ni transférés pendant cette période. Cela introduit un risque de liquidité, en particulier lors de conditions de marché volatiles ou d'une indisponibilité imprévue du validateur.

5. **Operational and Security Risks:** Les validateurs doivent maintenir une infrastructure sécurisée à haute disponibilité. Les défaillances de la sécurité du système, de la disponibilité ou des performances peuvent entraîner des blocs manqués, des slashing ou des emprisonnements. Les validateurs sont chargés de surveiller leurs systèmes, de maintenir les mises à jour logicielles et d'assurer des opérations fiables 24 heures sur 24.