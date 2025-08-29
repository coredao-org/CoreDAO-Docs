---
sidebar_label: Modèle de sécurité
hide_table_of_contents: false
sidebar_position: 2
description: Apprendre sur le modèle de sécurité de Core
---

# Modèle de sécurité de Core

---

## Vecteurs d'Attaque et Mesures de Sécurité dans l'Écosystème Core

Core utilise une architecture de sécurité robuste pour atténuer les menaces potentielles, intégrant à la fois des protections technologiques et des incitations économiques au sein du mécanisme de consensus Satoshi Plus. Voici une vue d'ensemble des mesures de mitigation pour chaque vecteur d'attaque potentiel.

### Attaques de Double Dépense

- **Description:** La double dépense implique qu'un attaquant tente de dépenser la même monnaie numérique deux fois.
- **Mesures d'atténuation réalisées par:**
  - **Intégration de PoW et PoS:** L'utilisation du réseau de minage du Bitcoin pour son composant PoW ajoute une puissance de hachage significative, ce qui rend la réécriture de la blockchain coûteuse et impraticable. Le composant PoS exige que les validateurs aient des intérêts en jeu, rendant les activités malveillantes financièrement dommageables pour l'attaquant lui-même.
  - **Validation Améliorée des Transactions:** Chaque transaction est validée à la fois par les mineurs et les stakers, fournissant des couches de vérification supplémentaires contre les incohérences ou les fraudes.

### Attaques à 51 %

- **Description:** Ces attaques se produisent lorsqu'une entité unique contrôle plus de la moitié de la puissance de calcul ou de la capacité de staking du réseau.
- **Mesures d'atténuation réalisées par:**
  - **Base de Validateurs Décentralisée:** En exigeant que les validateurs soient soutenus par des contributions substantielles en termes de staking et de hachage, le système attribue une large distribution du contrôle, diluant le pouvoir qu'un seul mineur ou groupe pourrait avoir.
  - **Désincitations Économiques:** Le coût associé à l'acquisition des ressources suffisantes pour contrôler plus de la moitié des aspects de minage et de staking du réseau rend de telles attaques économiquement désavantageuses.

### Attaques Sybil

- **Description:** Un attaquant crée de nombreuses fausses identités pour obtenir une influence disproportionnée sur le réseau.
- **Mesures d'atténuation réalisées par:**
  - **Barrières Économiques:** Les exigences de staking et de minage introduisent des barrières financières significatives à l'entrée, décourageant la prolifération d'identités fausses, car chacune doit être soutenue par des ressources réelles substantielles.
  - **Vérification de l'Identité via Staking et Minage:** Les validateurs sont des entités connues qui doivent continuellement prouver leur engagement par le minage et le staking continus, ainsi seuls les participants authentiques contrôlent le réseau.

### Attaques à Longue Portée

- **Description:** Les attaquants tentent de revenir à un état antérieur de la blockchain en construisant une chaîne alternative à partir d'un point passé.
- **Mesures d'atténuation réalisées par:**
  - **Pointage de Contrôle:** Core implémente un pointage de contrôle périodique où l'état de la blockchain à certains intervalles est solidifié, empêchant le retour au-delà de ces points.
  - **Mécanisme de Finalité:** La blockchain utilise des mécanismes qui confèrent la finalité aux blocs après un certain nombre de confirmations, rendant impossible l'altération de l'histoire de la chaîne au-delà de ces blocs confirmés.

### Alignement des Incitations Économiques

- **Description:** Tous les participants au réseau sont incités économiquement à agir dans le meilleur intérêt du réseau.
- **Mesures d'atténuation réalisées par:**
  - **Distribution des Récompenses:** Les mineurs, stakers, et validateurs reçoivent des récompenses qui sont en corrélation avec leur contribution à la sécurité du réseau, alignant leurs incitations économiques avec la santé et la sécurité globales de la blockchain.
  - **Pénalités pour Comportement Malhonnête:** Les validateurs et les mineurs risquent de perdre leurs stakes ou leur potentiel futur gain s'ils sont trouvés coupables d'actes malveillants, ajoutant une couche de dissuasion financière contre les comportements répréhensibles.

### Attaques de Gouvernance

- **Description:** Celles-ci impliquent l'exploitation du mécanisme de gouvernance pour faire passer des propositions défavorables ou malveillantes.
- **Mesures d'atténuation réalisées par:**
  - **Exigences de Consensus Large:** Les propositions nécessitent un large consensus parmi un ensemble diversifié de parties prenantes, minimisant le risque qu'un petit groupe concentré puisse affecter unilatéralement les changements.
  - **Processus Transparent de Proposition et de Vote:** Toutes les actions de gouvernance sont enregistrées de manière transparente sur la blockchain, facilitant la traçabilité et la responsabilité.

### Vulnérabilités des Contrats Intelligents

- **Description:** Les vulnérabilités dans le code des contrats intelligents peuvent être exploitées pour réaliser des vols ou manipuler des services.
- **Mitigation Achieved By:**
  - **Audits de Code et Revues de Sécurité:** Des audits réguliers et approfondis du code des contrats intelligents par des firmes de sécurité indépendantes aident à identifier et rectifier les vulnérabilités potentielles.
  - \*\* Rapports de bogues : \*\* Encourager la communauté et les chercheurs en sécurité à trouver et signaler les bogues afin que de nombreux exploits potentiels soient détectés précocement

## Conclusion

La stratégie de sécurité de Core est profondément intégrée à son mécanisme de consensus unique, Satoshi Plus, qui exploite les forces des capacités de minage du Bitcoin et des mécanismes de staking présents dans les blockchains modernes. De plus, la stratégie de sécurité de Core est multi-facettes, abordant les vulnérabilités potentielles à travers des protections techniques, des incitations économiques et des processus communautaires. Cette approche complète renforce non seulement la résilience du réseau contre les attaques, mais elle favorise également un écosystème robuste où les parties prenantes sont motivées à maintenir et protéger l'intégrité du réseau. À mesure que Core continue de se développer et d'intégrer de nouvelles fonctionnalités, son accent fondamental sur la sécurité reste un composant critique de sa conception et de son fonctionnement, de sorte qu'elle demeure une plateforme sécurisée et digne de confiance pour les utilisateurs et les développeurs.
