---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Preuve de Travail Déléguée (DPoW)

---

## Aperçu

Le Delegated Proof of Work (DPoW) intègre les mineurs Bitcoin dans le processus de sécurité et d'élection des validateurs du consensus Satoshi Plus, sans nécessiter de calculs supplémentaires.

Le DPoW crée une **relation symbiotique** entre les réseaux Bitcoin et Core:

- Les mineurs Bitcoin gagnent une deuxième récompense de bloc grâce aux récompenses en tokens CORE
- Core bénéficie de la sécurité et de l'infrastructure décentralisée sans précédent de Bitcoin

<p align="center">
![dpow-core-architechture](../../../../static/img/staoshi-plus/DPoW.png)
</p>

## Concepts de Core

- Aucun nouveau matériel ou activité minière n'est requis
- Les mineurs maintiennent des opérations minières Bitcoin standard
- Les mineurs délèguent leur puissance de hachage pour voter pour les validateurs Core via des métadonnées
- Les mineurs gagnent des récompenses CORE en plus de leurs récompenses Bitcoin

## Fonctionnement du DPoW

### 1. Intégration minière

Les mineurs Bitcoin poursuivent leurs opérations minières habituelles. Pour participer au DPoW, ils incluent des **métadonnées de délégation** dans le champ op_return de la transaction coinbase. Ces métadonnées doivent contenir :

- **Adresse du validateur Core**: L'adresse du validateur Core que le mineur soutient
- **Adresse de Récompense en Tokens CORE :** L'adresse où le mineur souhaite que ses récompenses en tokens CORE soient envoyées

Ce processus:

- Ne nécessite pas d'énergie supplémentaire
- N'interfère pas avec le minage Bitcoin
- Étend la protection des mineurs au réseau Core

### 2. Relayers and Data Flow

Pour capturer ces informations de délégation:

- **Les relais** surveillent la blockchain Bitcoin en temps réel
- Un **client léger BTC en chaîne** extrait les métadonnées de délégation
- Les données sont envoyées au **Hub de Délégation Core**, qui :
  - Valide les données
  - Agrège les délégations
  - Attribue un poids aux validateurs en fonction de la puissance de hachage des mineurs

### 3. Processus d'Élection des Validateurs sur le Réseau Core

. Chaque jour, Core calcule les scores des validateurs en utilisant les données de délégation des mineurs datant d’une **semaine précédente**. Les validateurs avec une puissance de hachage déléguée plus élevée ont une probabilité d'élection plus forte,

### 4. Récompenses et Incitations

- Les validateurs élus gagnent des récompenses en CORE pour la production de blocs,
- Les validateurs prélèvent une petite commission
- Les récompenses restantes sont redistribuées aux délégateurs (y compris les mineurs participants)

**Résultat**: Les mineurs gagnent à la fois :

- Récompenses Bitcoin (comme d'habitude)
- Récompenses en tokens CORE (via la délégation de validateurs)

## Avantages

### Pour les mineurs Bitcoin

- **Gagnez Plus**: Gagnez des tokens CORE sans coût énergétique supplémentaire
- **Restez Indépendant**: Continuez à miner du Bitcoin sans changements opérationnels
- **Diversifiez vos revenus**: Gagnez des tokens CORE en plus des récompenses Bitcoin

### **Sécurité Bitcoin**: Intègre une véritable preuve de travail (PoW) dans l'élection de ses validateurs

- **Sécurité Bitcoin**: Intègre une véritable preuve de travail (PoW) dans l'élection de ses validateurs
- **Ensemble de validateurs décentralisé**: Les mineurs de partout peuvent aider à sécuriser le réseau Core
- **Alignement de l'écosystème**: Les intérêts économiques des mineurs sont alignés avec ceux du réseau Core

## Meilleures pratiques pour les mineurs

- Sélectionner des validateurs Core de confiance
- Assurer des métadonnées correctes dans le champ op_return
- Surveillez votre adresse de récompenses CORE pour les distributions entrantes
- Maintenir des opérations de minage cohérentes pour garantir une délégation fiable

## Défis potentiels et mesures d'atténuation

| **Défi**                        | **Atténuation**                                  |
| ------------------------------- | ------------------------------------------------ |
| Format de métadonnées incorrect | Core valide les métadonnées avant le traitement  |
| Missed rewards                  | Use reliable tooling to monitor reward addresses |
| Validator underperformance      | Choose validators with strong historical uptime  |

## Getting Started

**To participate in DPoW:**

1. **Continue your Bitcoin mining** (no changes needed)
2. **Embed delegation metadata** in op_return of coinbase transaction
3. **Choose a Core validator** to delegate to
4. **Add your CORE reward address**
5. **Track rewards and validator performance**

## Why It Matters

Le DPoW est un composant essentiel du consensus Satoshi Plus. Il étend les incitations des mineurs Bitcoin pour les aligner sur le mécanisme de consensus de Core. Core receives Bitcoin miner participation in its security, and Bitcoin receives better-compensated miners. Le résultat est un ensemble de mineurs qui sont fortement incités à sécuriser à la fois Bitcoin et Core.
