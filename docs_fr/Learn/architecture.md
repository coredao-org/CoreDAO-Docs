---
sidebar_label: Architecture
hide_table_of_contents: false
sidebar_position: 2
description: Aperçu rapide de l'architecture sous-jacente de Core Chain
---

# Architecture de Core Chain

---

Core Chain, une blockchain EVM alignée sur Bitcoin, représente une innovation majeure pour l'intégration de Bitcoin dans le monde de la finance décentralisée (DeFi). Ce document décrit les composants architecturaux de Core Chain, conçus pour fonctionner comme une plateforme de contrats intelligents hautement évolutive, qui améliore l'utilité du Bitcoin sans compromettre ses principes fondamentaux.

L'écosystème de Core Chain est construit sur une architecture blockchain multifacette et innovante qui garantit la sécurité, l'évolutivité et la décentralisation du réseau. Au cœur de ce système se trouve le Moteur de Consensus CORE, qui intègre le mécanisme de consensus Satoshi Plus, un système hybride qui utilise la force combinée des mineurs de Bitcoin et des validateurs Core.

![component-diagram](../../../static/img/staoshi-plus/component-diagram.jpg)

## Moteur de Consensus Core

Le moteur de consensus Core est le cœur de Core Chain, où le consensus est atteint grâce à une combinaison unique de Preuve de Travail Déléguée (DPoW), de Preuve d’Enjeu Déléguée (DPoS) et de staking non-custodial de Bitcoin. Ce moteur coordonne les processus complexes impliquant les validateurs, délégateurs, stakers, relayeurs et autres participants du réseau pour maintenir l'intégrité et les performances de la blockchain.

### Mécanisme de Consensus Satoshi Plus

Core Chain introduit un nouveau mécanisme de consensus appelé Satoshi Plus, un modèle hybride qui mélange la Preuve de Travail Déléguée (DPoW), la Preuve d’Enjeu Déléguée (DPoS) et le staking non-custodial de Bitcoin. Ce modèle est conçu pour tirer parti de l'infrastructure de minage de Bitcoin existante afin de sécuriser une plateforme de contrats intelligents, établissant ainsi une relation symbiotique entre les deux chaînes.

### Preuve de Travail Déléguée (DPoW)

- Les mineurs de Bitcoin peuvent participer à la partie DPoW du mécanisme Satoshi Plus en ajoutant des métadonnées supplémentaires dans le champ `op_return` des blocs Bitcoin. Ces métadonnées incluent l'adresse du validateur Core auquel ils souhaitent déléguer leur puissance de hachage, ainsi que l'adresse pour recevoir des récompenses en tokens CORE.
- Ce mécanisme permet aux mineurs de gagner des récompenses supplémentaires en tokens CORE, en plus de leurs récompenses habituelles de minage de Bitcoin, les incitant ainsi à participer à l'écosystème de Core Chain.

### Preuve d’Enjeu Déléguée (DPoS) et Staking Non-Custodial de Bitcoin

- Les détenteurs de tokens CORE peuvent staker leurs tokens avec les validateurs Core, participant ainsi directement à la sécurité et à la gouvernance de la blockchain.
- Les détenteurs de BTC peuvent staker leurs BTC sur le réseau Core via le staking non-custodial de BTC et les déléguer à n'importe quel validateur Core, participant ainsi directement à la sécurité et à la gouvernance de la blockchain.
- Les stakers reçoivent des récompenses en tokens CORE, alignant leurs intérêts avec la santé et la sécurité globales du réseau.

### Principaux Composants et Rôles

**1. Validateurs:** Les validateurs ont un rôle crucial dans la production de blocs et la validation des transactions sur le réseau Core. Ils sont élus dans l'ensemble des validateurs en fonction d'un score hybride qui reflète à la fois la puissance de hachage Bitcoin déléguée et les tokens CORE stakés en leur faveur. Les **23 meilleurs validateurs** sont sélectionnés à chaque round, qui dure actuellement un jour.

**2. Relayeurs:** Les relayeurs sont chargés de relayer les en-têtes de blocs Bitcoin vers le réseau Core, garantissant que le composant DPoW du consensus est maintenu. Pour s'enregistrer, un nœud relais doit soumettre un dépôt remboursable en tokens CORE pour participer.

**3. Mineurs de BTC:** Les mineurs de Bitcoin sécurisent le réseau Bitcoin et peuvent déléguer leur puissance de hachage aux validateurs Core pour influencer le consensus sur Core sans compromettre leur travail sur Bitcoin. Cet acte de délégation est facilité par un processus non destructif.

**4. Détenteurs de CORE:** Les détenteurs de CORE peuvent staker leurs tokens en les déléguant aux validateurs, participant ainsi à la sécurisation du réseau et influençant le processus d'élection des validateurs.

**5. Détenteurs de BTC:** Les détenteurs de BTC peuvent staker leurs BTC sur le réseau Core et les déléguer à un validateur Core de leur choix et gagnent ainsi des tokens CORE en récompense de leur BTC staké. De cette manière, les détenteurs de BTC peuvent participer à la sécurisation du réseau et à l'élection des validateurs.

**6. Vérificateurs:** Les vérificateurs sont responsables de l'identification et de la dénonciation des comportements malveillants au sein du réseau. Ils jouent un rôle essentiel dans les mécanismes de sécurité de l'écosystème Core Chain.

### Déroulement des opérations et Processus

**1. Module de Staking et de Gouvernance:** Les détenteurs de CORE et de BTC peuvent déléguer ou staker leurs tokens auprès des validateurs, participant ainsi à la sécurité du réseau et aux décisions de gouvernance, telles que les mises à jour des paramètres de consensus ou les améliorations du protocole.

**2. Production de Blocs et Round Robin:** Les validateurs se relaient pour produire des blocs de manière rotative. Chaque round est divisé en créneaux, avec une durée actuellement fixée à **3 secondes**.

**3. Module de Récompense:** Les récompenses sont distribuées à la fin de chaque round en fonction des performances des validateurs. Le module de récompenses calcule et distribue ces récompenses en conséquence.

**4. Époques et Mises à Jour du Quorum des Validateurs:** Les époques, fixées à **200 créneaux (ou 10 minutes)**, sont les cycles au cours desquels l'état de chaque validateur est vérifié. Les validateurs emprisonnés sont exclus du quorum pour maintenir un taux de Transactions Par Seconde (TPS) stable tout au long du round.

**5. Mesures de Sécurité (Réduction et Emprisonnement):** Les validateurs et relayeurs doivent agir honnêtement pour éviter les pénalités. Les comportements malveillants signalés par les vérificateurs peuvent entraîner une réduction des stakes ou un emprisonnement, où les validateurs sont temporairement exclus du processus de consensus.

**6. Calcul du Score Hybride:** Il s'agit de la fonction du protocole utilisée dans les calculs d'élection des validateurs, incorporant la puissance de hachage BTC déléguée, les tokens BTC et CORE pour produire un score déterminant le classement des validateurs.

## Infrastructure de Core Chain

### Wrapping de Bitcoin Natif à Core (coreBTC)

- Core Chain facilite le wrapping de Bitcoin via un mécanisme décentralisé. Cela implique le verrouillage de Bitcoin sur la blockchain Bitcoin et l'émission d'un montant équivalent de coreBTC sur Core Chain.
- Les "Lockers" et "Porters" jouent des rôles essentiels dans la gestion des processus de verrouillage et de wrap, garantissant que le coreBTC est garanti 1:1 par Bitcoin, préservant ainsi la sécurité et l'absence de confiance nécessaire.

### Staking Non-Custodial de Bitcoin

- Cette fonctionnalité permet aux détenteurs de Bitcoin de staker leurs bitcoins de manière non-custodial à l'aide de verrouillages temporels absolus. Cela signifie que les utilisateurs peuvent gagner des rendements sur leurs bitcoins sans renoncer à leur contrôle.
- Le mécanisme de staking s'intègre au consensus Satoshi Plus, impliquant des processus similaires à ceux utilisés par les mineurs pour sécuriser le réseau.

### Swaps Atomic HTLC

- Core Chain prend en charge les atomic swaps en utilisant des contrats verrouillés par hachage (HTLCs), facilitant l'échange fluide de tokens entre Bitcoin et les chaînes compatibles EVM.
- Cette fonctionnalité améliore l'interopérabilité et les options de liquidité disponibles pour les utilisateurs de Bitcoin et de Core Chain, favorisant un écosystème DeFi plus intégré.

## Améliorations Futures

- **Expansion de la Gouvernance:** Des plans sont en cours pour inclure potentiellement les mineurs et les stakers de Bitcoin dans les processus de gouvernance de Core Chain, alignant ainsi davantage les incitations entre les deux écosystèmes.

- **Développement des Frais du Marché:** Core Chain pourrait introduire des taxes locales des marchés pour rendre les transactions Bitcoin plus rapides et plus économiques, soutenant ainsi l'utilisation de Bitcoin comme moyen de paiement viable.

- **Améliorations des HTLC:** Des améliorations du processus de swap atomic, y compris l'introduction de pools de liquidité et de compléments de carnet d'ordres, sont envisagées pour faciliter des échanges plus efficaces et une meilleure gestion de la liquidité.

## Conclusion

L'architecture de Core Chain est conçue pour exploiter la robustesse de la sécurité du Bitcoin tout en élargissant sa fonctionnalité aux contrats intelligents et à la DeFi. By integrating innovative consensus mechanisms and providing new utilities like non-custodial staking and decentralized wrapping, Core Chain positions itself as a pivotal platform in the evolution of Bitcoin DeFi.
