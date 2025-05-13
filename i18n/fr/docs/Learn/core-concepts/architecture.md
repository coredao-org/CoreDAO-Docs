---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de la blockchain de Core
---

# Architecture de la blockchain Core

---

L'architecture de Core est construite autour de \*\* Satoshi Plus \*\*, un mécanisme consensus tripartite qui intègre \*\* une preuve de travail déléguée (DPOW), une preuve de participation par délégation (DPoS) et le staking bitcoin sans garde \*\*.

Grâce à Satoshi Plus, les mineurs de Bitcoin, les pools de minage, les stakers de jetons CORE et les stakers de Bitcoin participent à l'élection des validateurs pour sécuriser le reseau Core. La sélection des validateurs est basée sur un score hybride, en considérant:

- Puissance de hachage déléguée par les mineurs/pools de minage
- Jetons CORE délégués/mis en staking par les détenteurs de jetons CORE
- Bitcoin délégués/mis en staking par les stakers de Bitcoin

### **Le premier mécanisme de staking Bitcoin non-custodial**

Le composant de staking Bitcoin non-custodial de Satoshi Plus est le premier mécanisme de staking Bitcoin non-custodial opérationnel, permettant aux détenteurs de Bitcoin de générer un rendement natif sans altérer les postulats de confiance de Bitcoin.

### Exploiter la sécurité de Bitcoin et donner du pouvoir aux mineurs

Actuellement, Satoshi Plus bénéficie de la sécurité de ~75% de toute la puissance de hachage minière de Bitcoin grâce à la délégation. En impliquant les mineurs dans les élections de validateurs, cela tire parti de la décentralisation inégalée de Bitcoin tout en offrant aux mineurs des récompenses supplémentaires, répondant ainsi au déclin à long terme des récompenses de bloc Bitcoin.

<p align="center">![component-diagram](../../../static/img/Core-Architecture.png)</p>

## Core Blockchain : Composants, Rôles et Flux de travail

#### Rôles Clés

- \*\*Les validateurs jouent un rôle crucial dans la production des blocs et la validation des transactions sur le réseau Core. Le validateur doit s'enregistrer et bloquer un dépôt caution validateur CORE remboursable.
- **Les mineurs de Bitcoin :** sécurisent Bitcoin via PoW et peuvent déléguer la puissance de hachage aux validateurs Core en incluant les informations de délégation dans la transaction coinbase d'un bloc sans compromettre la sécurité de Bitcoin.
- Les Stakers CORE : Délèguent des jetons CORE aux validateurs pour soutenir la sécurité du réseau
- Les Stakers Bitcoin : Délèguent du Bitcoin aux validateurs sur Core via un staking Bitcoin non-dépositaire et gagnent un rendement sans renoncer à la garde de leurs actifs.
- Les Relayers : Ceux-ci sont chargés de synchroniser les données entre le réseau Core et Bitcoin. Ils acheminent les données de blocs et de transactions Bitcoin vers Core. N'importe qui peut devenir un relayer en s'inscrivant et en bloquant un dépôt de jetons CORE remboursable.
- Les Vérificateurs (verifiers) : Signalent les comportements malveillants sur le réseau Core. Les indicateurs de vérification réussis peuvent déclencher des sanctions, comme la réduction de récompense ou la mise à l'écart temporaire des validateurs et des acteurs malveillants. Les vérificateurs sont indemnisés pour cette activité de surveillance lorsque les récompenses de bloc sont distribuées. Toute personne peut jouer le rôle de vérificateur sur le réseau Core.

#### Consensus et Élection

- **Élection des validateurs :** Chaque tour (1 jour), les 27 meilleurs validateurs selon le score hybride (PoW des mineurs, DPoS des stakers CORE et staking Bitcoin) sont élus pour faire partie de l'ensemble actif de validateurs et sécuriser le réseau. Tout validateur de l'ensemble actuel de validateurs qui n'a pas été emprisonné ou sanctionné est considéré comme "actif" ou "en activité". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les 200 blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement.
- Score Hybride : Chaque nœud de validation cherchant à faire partie de l'ensemble actif de validateurs se voit attribuer un score hybride, calculé en fonction de trois délégations : puissance de hachage, CORE et Bitcoin. L'ensemble actif de validateurs comprend actuellement les 27 meilleurs validateurs ayant les scores hybrides les plus élevés.
- Tour : Un tour dure un jour, pendant lequel les 27 meilleurs validateurs (classés selon leur score hybride) sont élus pour produire des blocs. À la fin du tour, les récompenses sont calculées pour ce tour complet et distribuées, et le prochain ensemble de validateurs est sélectionné.
- Époque (10 min ou 200 créneaux) : Des vérifications périodiques du statut des validateurs garantissent que les nœuds emprisonnés ne participent pas au consensus. Le statut du validateur est vérifié une fois par époque pour garder un TPS stable durant chaque tour.
- Créneau (3 sec) : Chaque tour d'un jour est divisé en créneaux, et tous les validateurs de l'ensemble prennent tour à tour pour produire un bloc par créneau de manière rotative.

#### Récompenses & Stabilité

- **Module de Récompense :** Les récompenses sont distribuées à la fin de chaque round en fonction des performances des validateurs. Le module de récompenses calcule et distribue ces récompenses en conséquence.
- Les récompenses sont distribuées à la fin de chaque tour.
- Les validateurs actifs sont mis à jour toutes les 200 blocs pour maintenir un TPS stable.

## Preuve de Travail Déléguée

Pour participer à Satoshi Plus, les mineurs de Bitcoin et/ou les pools de minage écrivent simplement deux informations supplémentaires dans le champ op_return lorsqu'ils produisent un nouveau bloc Bitcoin :

1. L'adresse du validateur Core auquel ils souhaitent déléguer leur puissance de hachage.
2. L'adresse à laquelle le mineur souhaite recevoir les récompenses en jetons CORE.

En échange de leur participation au processus de consensus de Core en déléguant leur puissance de hachage pour voter pour les validateurs, les mineurs de Bitcoin reçoivent des récompenses supplémentaires en jetons CORE en plus de leurs récompenses de minage existantes du réseau Bitcoin Ainsi, Satoshi Plus permet de relier la participation des mineurs Bitcoin au réseau Core, tandis que le réseau Bitcoin bénéficie de mineurs mieux rémunérés (c'est-à-dire plus incités).

## Preuve d’enjeu déléguée

La Preuve de Participation Déléguée (DPoS) est la méthode utilisée pour impliquer les détenteurs de jetons CORE dans la sécurité du protocole. Pour participer au consensus, tout détenteur de jetons CORE peut miser ses jetons CORE avec des validateurs sur le réseau Core, votant ainsi pour ces validateurs de la même manière qu'un mineur pourrait déléguer sa puissance de hachage pour élire un validateur\
De manière similaire, tout comme les mineurs reçoivent des récompenses, les stakers de tokens CORE gagnent également des récompenses en tokens CORE pour leur contribution au consensus Satoshi Plus. La DPoS se distingue des modèles PoS standard en permettant une participation égale de tous les détenteurs de jetons. Contrairement aux modèles PoS standard qui favorisent souvent les gros détenteurs.

## Staking Non-Custodial de Bitcoin

La méthodologie de Satoshi Plus pour intégrer le staking Bitcoin repose sur des verrous temporels absolus utilisant la fonction native Bitcoin CLTV (CheckLockTimeVerify), une fonctionnalité cryptographique qui bloque les sorties d'une transaction pendant une période prédéfinie, pendant laquelle elles ne peuvent pas être dépensées.
Plutôt que de céder la garde de leurs bitcoins à un système de staking externe, les stakers de Satoshi Plus placent simplement leurs bitcoins dans ces verrous temporels comme partie intégrante d'une transaction, et la transaction peut être conçue pour renvoyer la sortie après l'expiration de la période définie. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs Bitcoin dans leurs blocs délégués :

1. L'adresse du validateur Core à laquelle le staker souhaite déléguer ses Bitcoins.
2. L'adresse à laquelle le staker souhaite recevoir ses récompenses en jetons CORE.

Les stakeurs Bitcoin gagnent un rendement sur leurs bitcoins autrement passifs sous forme de récompenses en jetons CORE, et ce, pendant toute la durée du verrouillage temporel (et donc pendant toute la durée de la délégation de leurs bitcoins pour voter pour les validateurs sur Core).

## Élection des Validateurs

La synthèse de DPoW, DPoS et du staking Bitcoin non-dépositaire se produit lors de l'élection de l'ensemble des validateurs Satoshi Plus. Les validateurs qui reçoivent la plus grande combinaison de puissance de hachage déléguée, de CORE stakés et de bitcoins stakés sont élus à l'ensemble des validateurs. Cette combinaison est déterminée par un score hybride qui équilibre les trois éléments.

## Récompenses

Les récompenses de Satoshi Plus proviennent de :

1. Les récompenses en blocs CORE seront étalées sur 81 ans.
2. Frais de transaction sur le réseau Core réglés en jetons CORE.

Après une production de bloc réussie, les validateurs gagnent ces récompenses en jetons CORE. Étant donné que les validateurs élus sont entièrement dépendants de leurs délégateurs, lorsqu'ils reçoivent des récompenses de bloc et des frais de transaction pour la production de blocs, ils reversent la majeure partie de leurs récompenses à leurs mineurs délégants, aux stakeurs CORE et aux stakeurs Bitcoin.\
Les récompenses sont réparties entre les délégateurs en fonction de leur pouvoir de vote. Ainsi, le poids que leur vote représente dans le calcul du score hybride correspond à la proportion de récompenses qu'ils recevront des validateurs.

## Slashing et Sécurité

Dans les systèmes Proof of Stake classiques, les stakers s'exposent à des sanctions (slash) en cas de défaillance de leur nœud, de comportement malveillant ou d'activités nuisant à l'intégrité du réseau Dans Satoshi Plus, cela reste vrai pour les validateurs. Les validateurs sont tenus à un niveau élevé d'exigence car leur rôle est de respecter honnêtement l'ensemble de règles de Satoshi Plus. S'ils échouent, ils s'exposent à la confiscation de leurs récompenses accumulées et/ou de leur dépôt CORE bloqué, ce qui entraîne une pénalité économique sévère et la suppression des récompenses.

Bien que le slashing maintienne les validateurs responsables, la conception de Satoshi Plus n'est pas faite pour pénaliser les participants pour des actions hors de leur contrôle. Par conséquent, les mineurs, les détenteurs de CORE et les détenteurs de Bitcoin ne risquent pas de voir leurs actifs délégués confisqués (slash) Leur incitation à choisir les meilleurs validateurs réside dans les récompenses qu'ils peuvent accumuler en les sélectionnant de manière rigoureuse. S'ils choisissent les mauvais validateurs, les mineurs et les stakers risquent simplement de ne pas obtenir les récompenses attendues. Cette pénalité économique constitue une incitation efficace tout en étant équitable pour les stakers.

## Conclusion

L'architecture de Core est conçue pour en faire la plateforme idéale pour le BTCfi. Satoshi Plus renforce la sécurité de Bitcoin et élargit sa protection, tout en offrant un rendement natif inédit pour Bitcoin. Cette conception complète sécurise un écosystème BTCfi de bout en bout, débloquant tout le potentiel de l'actif Bitcoin.
