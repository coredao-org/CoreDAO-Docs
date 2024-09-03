---
sidebar_label: Sécurité
hide_table_of_contents: false
sidebar_position: 2
description: Apprenez-en plus sur le modèle de sécurité de Core Chain
---

# Approche de Core Chain en matière de sécurité

---

## Aperçu

Core Chain, en tant que blockchain EVM alignée sur Bitcoin, exploite le mécanisme de consensus Satoshi Plus pour garantir un mélange optimal de sécurité, de décentralisation et d'évolution. Cette approche tire parti des caractéristiques de sécurité intrinsèques du Bitcoin tout en permettant une fonctionnalité robuste des contrats intelligents et une intégration à la DeFi, faisant de cette plateforme une pionnière dans l'espace blockchain.

## Éléments de sécurité

### 1. Preuve de Travail Déléguée (DPoW) et Preuve d’Enjeu Déléguée (DPoS)

Core Chain intègre ces deux mécanismes puissants pour former un environnement blockchain équilibré et sécurisé. La DPoW étend le modèle de sécurité éprouvé du Bitcoin en permettant aux mineurs de déléguer leur puissance de hachage à Core Chain, bénéficiant ainsi du taux de hachage immense du Bitcoin et de sa sécurité. On the other hand, DPoS enables both BTC (through non-custodial staking) and CORE token holders to stake their assets with validators on the Core network, promoting a decentralized network governance and additional security layers.

### 2. Sécurité des Validateurs

Les validateurs sont essentiels pour maintenir l'intégrité et la sécurité de Core Chain. Ils sont sélectionnés en fonction du poids combiné des tokens stakés (CORE et BTC) et de la puissance de hachage déléguée, garantissant que seuls les nœuds les plus soutenus et de confiance gèrent le processus de consensus. Ce système de double soutien atténue les risques de centralisation et de brèches de sécurité.

### 3. Sécurité via l'incitation

Le mécanisme Satoshi Plus incite à la fois les mineurs et les stakers (CORE et BTC) en leur fournissant des récompenses sous forme de tokens CORE, alignant ainsi leurs intérêts avec la longévité et l'intégrité du réseau. Cette incitation économique aide à maintenir un niveau de participation robuste, crucial pour maintenir un réseau sécurisé et décentralisé.

## Protocoles et Implémentations de Sécurité

1. **Validation Robuste des Transactions**
   Les validateurs de Core Chain sont responsables de la vérification des transactions et de la création de nouveaux blocs. La combinaison unique de DPoW, DPoS, et du staking non-custodial de BTC garantit que ces validateurs disposent d'un soutien suffisant en termes de calcul et de stake pour remplir efficacement leurs rôles, réduisant ainsi la probabilité d'activités frauduleuses et assurant l'exactitude du registre blockchain.

2. **Résilience du Réseau Contre les Attaques**
   L'intégration de la puissance de hachage de Bitcoin avec le staking de CORE et de BTC rend Core Chain exceptionnellement résilient contre divers types d'attaques. Le coût élevé d'une attaque sur un tel système hybride, combiné au consensus distribué obtenu via des mécanismes délégués, améliore significativement la sécurité du réseau.

3. **Adaptabilité et Flexibilité**
   Contrairement aux blockchains traditionnelles qui reposent uniquement sur une seule forme de consensus, le modèle hybride de Core Chain permet l'adaptabilité et la possibilité de mise à jour. Cette flexibilité garantit que le réseau peut évoluer en réponse aux menaces de sécurité émergentes ou aux avancées technologiques dans le domaine de la blockchain.

## Vecteurs d'Attaque et Mesures de Sécurité dans l'Écosystème Core Chain

La Core Chain utilise une architecture de sécurité robuste pour atténuer les menaces potentielles, intégrant à la fois des protections technologiques et des incitations économiques au sein du mécanisme de consensus Satoshi Plus. Voici une vue d'ensemble des mesures de mitigation pour chaque vecteur d'attaque potentiel.

### Attaques de Double Dépense

- **Description:** La double dépense implique qu'un attaquant tente de dépenser la même monnaie numérique deux fois.
- **Mesures d'atténuation réalisées par:**
  - **Intégration de PoW et PoS:** L'utilisation du réseau de minage du Bitcoin pour son composant PoW ajoute une puissance de hachage significative, ce qui rend la réécriture de la blockchain coûteuse et impraticable. Le composant PoS exige que les validateurs aient des intérêts en jeu, rendant les activités malveillantes financièrement dommageables pour l'attaquant lui-même.
  - **Validation Améliorée des Transactions:** Chaque transaction est validée à la fois par les mineurs et les stakers, fournissant des couches de vérification supplémentaires contre les incohérences ou les fraudes.

### Attaques à 51 %

- **Description:** Ces attaques se produisent lorsqu'une entité unique contrôle plus de la moitié de la puissance de calcul ou de la capacité de staking du réseau.
- **Mesures d'atténuation réalisées par:**
  - **Base de Validateurs Décentralisée:** En exigeant que les validateurs soient soutenus par des contributions substantielles en termes de staking et de hachage, le système assure une large distribution du contrôle, diluant le pouvoir qu'un seul mineur ou groupe pourrait avoir.
  - **Désincitations Économiques:** Le coût associé à l'acquisition des ressources suffisantes pour contrôler plus de la moitié des aspects de minage et de staking du réseau rend de telles attaques économiquement désavantageuses.

### Attaques Sybil

- **Description:** Un attaquant crée de nombreuses fausses identités pour obtenir une influence disproportionnée sur le réseau.
- **Mesures d'atténuation réalisées par:**
  - **Barrières Économiques:** Les exigences de staking et de minage introduisent des barrières financières significatives à l'entrée, décourageant la prolifération d'identités fausses, car chacune doit être soutenue par des ressources réelles substantielles.
  - **Vérification de l'Identité via Staking et Minage:** Les validateurs sont des entités connues qui doivent continuellement prouver leur engagement par le minage et le staking continus, garantissant que seuls les participants authentiques contrôlent le réseau.

### Attaques à Longue Portée

- **Description:** Les attaquants tentent de revenir à un état antérieur de la blockchain en construisant une chaîne alternative à partir d'un point passé.
- **Mesures d'atténuation réalisées par:**
  - **Pointage de Contrôle:** Core Chain implémente un pointage de contrôle périodique où l'état de la blockchain à certains intervalles est solidifié, empêchant le retour au-delà de ces points.
  - **Mécanisme de Finalité:** La blockchain utilise des mécanismes qui confèrent la finalité aux blocs après un certain nombre de confirmations, rendant impossible l'altération de l'histoire de la chaîne au-delà de ces blocs confirmés.

### Alignement des Incitations Économiques

- **Description:** Assurer que tous les participants au réseau sont incités économiquement à agir dans le meilleur intérêt du réseau.
- **Mesures d'atténuation réalisées par:**
  - **Distribution des Récompenses:** Les mineurs, stakers, et validateurs reçoivent des récompenses qui sont en corrélation avec leur contribution à la sécurité du réseau, alignant leurs incitations économiques avec la santé et la sécurité globales de la blockchain.
  - **Pénalités pour Comportement Malhonnête:** Les validateurs et les mineurs risquent de perdre leurs stakes ou leur potentiel futur gain s'ils sont trouvés coupables d'actes malveillants, ajoutant une couche de dissuasion financière contre les comportements répréhensibles.

### Attaques de Gouvernance

- **Description:** Celles-ci impliquent l'exploitation du mécanisme de gouvernance pour faire passer des propositions défavorables ou malveillantes.
- **Mesures d'atténuation réalisées par:**
  - **Exigences de Consensus Large:** Les propositions nécessitent un large consensus parmi un ensemble diversifié de parties prenantes, minimisant le risque qu'un petit groupe concentré puisse affecter unilatéralement les changements.
  - **Processus Transparent de Proposition et de Vote:** Toutes les actions de gouvernance sont enregistrées de manière transparente sur la blockchain, garantissant la traçabilité et la responsabilité.

### Vulnérabilités des Contrats Intelligents

- **Description:** Les vulnérabilités dans le code des contrats intelligents peuvent être exploitées pour réaliser des vols ou manipuler des services.
- **Mesures d'atténuation réalisées par:**
  - **Audits de Code et Revues de Sécurité:** Des audits réguliers et approfondis du code des contrats intelligents par des firmes de sécurité indépendantes aident à identifier et rectifier les vulnérabilités potentielles.
  - **Programmes de Récompenses de Bug:** Encourager la communauté et les chercheurs en sécurité à trouver et signaler des bugs garantit que de nombreuses potentielles exploitations sont détectées tôt en offrant des récompenses pour leur découverte.

## Conclusion

La stratégie de sécurité de Core Chain est profondément intégrée à son mécanisme de consensus unique, Satoshi Plus, qui exploite les forces des capacités de minage du Bitcoin et des mécanismes de staking présents dans les blockchains modernes. De plus, la stratégie de sécurité de Core Chain est multi-facettes, abordant les vulnérabilités potentielles à travers des protections techniques, des incitations économiques et des processus communautaires. Cette approche complète renforce non seulement la résilience du réseau contre les attaques, mais elle favorise également un écosystème robuste où les parties prenantes sont motivées à maintenir et protéger l'intégrité du réseau. À mesure que Core Chain continue de se développer et d'intégrer de nouvelles fonctionnalités, son accent fondamental sur la sécurité reste un composant critique de sa conception et de son fonctionnement, garantissant qu'elle demeure une plateforme sécurisée et digne de confiance pour les utilisateurs et les développeurs.
