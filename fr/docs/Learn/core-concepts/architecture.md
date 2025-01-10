---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de la blockchain de Core
---

# Architecture de la blockchain Core

---

L'architecture de la blockchain Core se concentre sur son mécanisme de consensus Satoshi Plus, une approche tripartite qui combine la Preuve de Travail Déléguée (DPoW), la Preuve de Stake Déléguée (DPoS) et le Staking Non-Custodial de Bitcoin. En plus de la sécurité offerte par Satoshi Plus, l'infrastructure de Core inclut également un actif Bitcoin "bridgé" à confiance minimale sous forme de coreBTC, des transactions peer-to-peer Bitcoin <> Core sans confiance avec des swaps atomiques HTLC, et plus encore.

Grâce à Satoshi Plus, les mineurs de Bitcoin, les pools de minage, les stakers de tokens CORE et les stakers de Bitcoin participent à l'élection des validateurs pour sécuriser Core. Ces validateurs sont élus par ces trois groupes en fonction d'un score hybride, calculé selon la quantité de puissance de hachage déléguée, de tokens CORE délégués/stakés, et de Bitcoin délégué/staké, fournie respectivement par les mineurs/pools de minage de Bitcoin, les stakers de tokens CORE et les stakers de Bitcoin.

Le composant de Staking Non-Custodial de Bitcoin de Satoshi Plus est le premier mécanisme de staking de Bitcoin en direct, offrant pour la première fois dans son histoire un rendement natif pour le Bitcoin. Sans introduire de nouveaux risques en matière de confiance, le staking de Bitcoin via Satoshi Plus établit le taux sans risque pour le Bitcoin.

En outre, Satoshi Plus bénéficie actuellement de la sécurité de ~55 % des efforts de minage de Bitcoin, manifestés sous forme de puissance de hachage déléguée. En impliquant les mineurs et les pools de minage dans le processus d'élection des validateurs, Satoshi Plus profite de la décentralisation inégalée de Bitcoin tout en offrant aux mineurs des récompenses supplémentaires sans coûts supplémentaires, une proposition précieuse alors que les récompenses de blocs de Bitcoin continuent de diminuer.

![component-diagram](../../../static/img/staoshi-plus/component-diagram.jpg)

## Principaux composants, rôles et déroulement

- **Validateurs :** Les validateurs sont responsables de la production des blocs et de la validation des transactions sur le réseau Core. Tout le monde peut devenir un validateur Core en s'enregistrant au réseau et en verrouillant un dépôt remboursable de tokens CORE.

- **Élection des validateurs :** Le groupe de validateurs est déterminé par élection, les validateurs étant choisis sur la base de leur score hybride à chaque tour. Chaque validateur qui est dans l’ensemble actuel des validateurs et qui n’a pas été emprisonné ou pénalisé est considéré "actif". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.

- **Score Hybride :** A chaque nœud de validateur souhaitant faire partie de l’ensemble des validateurs est attribué un score hybride, qui est calculé en se basant sur trois facteurs : le DPoW des mineurs de Bitcoin, le DPoS des détenteurs de CORE, et les détenteurs de bitcoin déléguant leur bitcoin aux validateurs de leur choix. L’ensemble des validateurs actuel est composé de **27** validateurs avec le plus grand score hybride.

- **Mineurs de Bitcoin :** Les mineurs de Bitcoin sécurisent le réseau Bitcoin via le PoW et peuvent déléguer leur PoW à un validateur Core en incluant certaines informations dans la transaction coinbase d’un bloc comme il est en cours de minage. Cette délégation est non destructrice, cela signifie qu’ils réaffectent leur travail existant, sans choisir entre la sécurité du Bitcoin et celle de Core.

- **Stakers de Core :** Tous les détenteurs de tokens natif CORE de Core sont en mesure de garantir la sécurité du réseau en déléguant leurs tokens à un validateur.

- **Stakers de Bitcoin :** Le troisième volet du consensus de Satoshi Plus est le staking de Bitcoin non-custodial, qui permet, à n’importe quel détenteur de Bitcoin, de gagner un rendement en stakant leurs tokens bitcoin sans renoncer à leur garde.

- **Relayers:** Relayers transmit Bitcoin blocks and transaction data to the Core network. N’importe qui peut devenir un relayeur en s’enregistrant et bloquant un dépôt de token CORE remboursable.

- **Vérificateurs :** Les vérificateurs sont responsables de signaler tout comportement malveillant sur le réseau. Un signalement de la sorte lors d’une vérification peut entraîner une pénalisation du validateur sur ses récompenses ou stakes, ou l’emprisonnement direct, et les vérificateurs sont rémunérés pour ce contrôle d’activité lorsque les récompenses du bloc sont distribuées. N’importe qui peut être vérificateur sur le réseau Core.

- **Tour :** Un tour est la période durant laquelle le réseau Core met à jour son ensemble de validateurs et distribue ses récompenses. Actuellement, un tour correspond à une journée. Tous les tours (i.e. tous les jours), les validateurs reçoivent un score hybride, et les 27 validateurs avec le plus score hybride sont élus pour faire partie de l’ensemble des validateurs. L’ensemble des validateurs deviennent alors responsables de la production des blocs sur le réseau Core pour l’entièreté du tour. Lorsque le dernier bloc de chaque tour est produit, les récompenses accumulées pour le tour complet sont calculées et distribuées, et l’ensemble des validateurs pour le prochain tour est aussi déterminé.

- **Créneau :** Chaque tour d’une journée est divisé en plusieurs créneaux, et tous les validateurs de l’ensemble des validateurs prennent à tour de rôle la production d’un bloc par créneau, chacun leur tour. Actuellement, la durée des créneaux est fixée à trois secondes. Pour chaque créneau, un validateur honnête peut alors soit réussir à produire un bloc, soit échouer (dans le cas ou il y aurait des soucis sur le réseau, des attaques Éclipses, etc.).

- **Époque :** Une époque est le laps de temps durant lequel le système vérifie le statut de chaque validateur afin d’exclure les validateurs emprisonnés du consensus d’activité. Actuellement, une époque est fixée à 200 créneaux, c’est-à-dire 600 secondes ou encore 10 minutes. Le statut d’un validateur est vérifié une fois par époque (plutôt que de manière continue) afin de garder le TPS assez constant lors d’un tour donné.

## Preuve de Travail Déléguée

Pour participer à Satoshi Plus, les mineurs et/ou les pools de minage doivent simplement inscrire deux informations supplémentaires dans le champ `op_return` lorsqu'ils produisent un nouveau bloc Bitcoin :

1. L'adresse du validateur Core à qui le mineur souhaite déléguer sa puissance de hachage.
2. L'adresse où le mineur souhaite que ses récompenses en tokens CORE soient envoyées.

En échange de leur participation au processus de consensus en déléguant leur puissance de hachage pour voter pour les validateurs, les mineurs reçoivent des récompenses supplémentaires en tokens CORE en plus de leurs récompenses habituelles en Bitcoin. En résumé, Satoshi Plus bénéficie de la participation des mineurs de Bitcoin, et ces derniers reçoivent une meilleure rémunération (c'est-à-dire des incitations plus fortes).

## Preuve d’enjeu déléguée

La Preuve d'Enjeu Déléguée est la méthode qui permet d'impliquer les utilisateurs de Core dans la sécurité du protocole. Pour participer au consensus, tout détenteur de tokens CORE peut staker ses tokens avec les validateurs de Core, votant ainsi pour ces validateurs de la même manière qu'un mineur délègue sa puissance de hachage pour élire un validateur.

De manière similaire, tout comme les mineurs reçoivent des récompenses, les stakers de tokens CORE gagnent également des récompenses en tokens CORE pour leur contribution au consensus Satoshi Plus. Un avantage majeur de la Preuve d'Enjeu Déléguée par rapport aux modèles classiques de Preuve d'Enjeu est que ce système permet à tous les détenteurs de tokens de participer de manière équitable, alors que les systèmes classiques de Preuve d'Enjeu favorisent parfois uniquement les grands détenteurs pour le staking.

## Staking Non-Custodial de Bitcoin

La méthodologie de Satoshi Plus pour intégrer le staking de bitcoin repose sur les verrous temporels absolus, une fonctionnalité cryptographique native de Bitcoin qui verrouille les sorties d'une transaction pour une période de temps définie, pendant laquelle elles ne peuvent pas être dépensées. Plutôt que de céder la garde de leurs bitcoins à un système de staking externe, les stakers de Satoshi Plus placent simplement leurs bitcoins dans ces verrous temporels comme partie intégrante d'une transaction, et la transaction peut être conçue pour renvoyer la sortie après l'expiration de la période définie. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs Bitcoin dans leurs blocs délégués :

1. L'adresse du validateur Core auquel le staker souhaite déléguer ses bitcoins.
2. L'adresse à laquelle le staker souhaite que les récompenses en tokens CORE soient envoyées.

Les détenteurs de bitcoins qui participent au staking gagnent un rendement sur leurs bitcoins, autrement passifs, sous forme de récompenses en tokens CORE, pour la durée de leur timelock (et donc pour la durée pendant laquelle ils délèguent leurs bitcoins pour voter pour les validateurs sur Core). Le résultat final est que des milliards de dollars de valeur Bitcoin sous-utilisée deviendront productifs, rémunérant les stakers tout en élargissant l'utilité de Bitcoin.

## Élection des Validateurs

La synthèse de la Preuve de Travail Déléguée (DPoW), de la Preuve d'Enjeu Déléguée (DPoS) et du Staking Non-Custodial de Bitcoin se produit lors de l'élection de l'ensemble des validateurs du consensus Satoshi Plus.

Les validateurs qui reçoivent la plus grande combinaison de puissance de hachage déléguée, de CORE stakés et de bitcoins stakés sont élus à l'ensemble des validateurs. Cette combinaison est déterminée par un score hybride qui équilibre les trois éléments.

## Récompenses

Les récompenses de Satoshi Plus proviennent de :

1. Récompenses de bloc CORE distribuées sur une période de 81 ans
2. Frais de transaction payés en tokens CORE. Après la production réussie de blocs, les validateurs gagnent ces récompenses en tokens CORE

Étant donné que les validateurs élus dépendent entièrement de leurs délégateurs, lorsqu'ils reçoivent des récompenses pour la production de blocs et des frais de transaction, ils redistribuent la majorité de leurs récompenses à leurs mineurs délégués, aux stakers de CORE et aux stakers de Bitcoin.

Les récompenses versées aux délégateurs sont proportionnelles à leur poids de vote. Ainsi, le poids que leur vote a dans le calcul du score hybride détermine la proportion de récompenses qu'ils recevront des validateurs.

## Slashing et Sécurité

Dans les systèmes traditionnels de Preuve d'Enjeu Déléguée, les stakers risquent d'être pénalisés (slashing) s'ils ne parviennent pas à maintenir un nœud sécurisé et fiable, s'ils se comportent de manière malveillante ou s'ils compromettent l'intégrité du réseau. Dans Satoshi Plus, cela reste vrai pour les validateurs. Les validateurs doivent respecter des normes élevées, car leur devoir est d'adhérer honnêtement aux règles de Satoshi Plus. Ainsi, s'ils échouent, leur dépôt en tokens CORE est amputé, ce qui entraîne une pénalité économique sérieuse en plus de ne recevoir aucune récompense.

Bien que le slashing maintienne les validateurs responsables, la conception de Satoshi Plus n'est pas faite pour pénaliser les participants pour des actions hors de leur contrôle. Par conséquent, les mineurs, les stakers de CORE et de Bitcoin n'ont pas à craindre que leurs actifs stakés ou délégués soient pénalisés. Leur incitation à choisir les meilleurs validateurs réside dans les récompenses qu'ils peuvent accumuler en les sélectionnant de manière rigoureuse. Le risque pour eux de choisir de mauvais validateurs est qu'ils ne recevront pas les récompenses qu'ils auraient autrement obtenues. Cette pénalité économique sert d'incitation efficace tout en étant équitable pour les stakers.

## Autres Détails du Déroulement

1. **Production de Blocs et Round Robin:** Les validateurs se relaient pour produire des blocs de manière rotative. Chaque round est divisé en créneaux, avec une durée actuellement fixée à 3 secondes.
2. **Module de Récompense :** Les récompenses sont distribuées à la fin de chaque round en fonction des performances des validateurs. Le module de récompenses calcule et distribue ces récompenses en conséquence.
3. **Époques et Mises à Jour du Quorum des Validateurs:** Les époques, fixées à 200 créneaux (ou 10 minutes), sont les cycles au cours desquels l'état de chaque validateur est vérifié. Les validateurs emprisonnés sont exclus du quorum pour maintenir un taux de Transactions Par Seconde (TPS) stable tout au long du round.

## Autres Infrastructures de Core

### Bitcoin encapsulé natif de Core (coreBTC)

Le coreBTC est un actif Bitcoin encapsulé de manière native sur Core, maintenu à un taux de 1:1 avec Bitcoin. Il utilise des "Lockers" surcollatéralisés pour garantir une création et un rachat sécurisés et sans confiance. Ce concept permet la participation du Bitcoin aux activités DeFi et aux contrats intelligents de Core sans impliquer de garde centralisée. Bien que coreBTC ne soit pas essentiel pour Satoshi Plus ou pour interagir avec le DeFi de Core, il offre aux détenteurs de Bitcoin un moyen sécurisé et natif à Core pour transférer leurs actifs sur la blockchain Core.

### Swaps Atomic HTLC

Les contrats verrouillés par hachage et à délai (Hashed TimeLock Contracts - HTLCs) permettent l'échange décentralisé et sans confiance de tokens entre Core et d'autres blockchains, y compris (et surtout) Bitcoin.

### Améliorations Futures

- **Dual Staking :** Des taux de staking de Bitcoin plus élevés seront activés pour les stakers de Bitcoin et de tokens CORE.
- **Développement du Marché des Frais :** Core pourrait adopter des marchés de frais locaux pour rendre les transactions Bitcoin plus prévisibles et économiques, soutenant ainsi l'utilisation de Bitcoin comme moyen de paiement.
- **Améliorations des HTLC :** Des améliorations au processus de swap atomique, y compris l'introduction de pools de liquidités et de suppléments de carnet d'ordres, sont en cours de conception pour faciliter un trading et une gestion de la liquidité plus efficaces.

## Conclusion

L'architecture de Core est conçue pour en faire la plateforme idéale pour le BTCfi. Satoshi Plus ne se contente pas d'étendre la protection de Bitcoin, mais renforce également son modèle de sécurité tout en introduisant pour la première fois un rendement natif pour le Bitcoin. Cette conception complète sécurise un écosystème BTCfi de bout en bout, débloquant tout le potentiel de l'actif Bitcoin.
