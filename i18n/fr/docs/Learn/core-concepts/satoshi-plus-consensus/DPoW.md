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

### 3. Validator Election Process

Every day, Core calculates validator scores using miner delegation data from **one week prior**. Validators with higher delegated hash power have higher election probability

### 4. Rewards and Incentives

- Elected validators earn CORE rewards for producing blocks
- Validators take a small commission
- Remaining rewards are passed to delegators (including participating miners)

**Outcome:** Miners earn both:

- Bitcoin rewards (as usual)
- CORE token rewards (via validator delegation)

## Benefits

### For Bitcoin Miners

- **Earn More**: Gain CORE tokens with no added energy cost
- **Stay Independent**: Continue mining Bitcoin without operational changes
- **Diversify Returns**: Earn CORE tokens in addition to Bitcoin rewards

### For Core

- **Bitcoin Security**: Integrates real PoW into its validator election
- **Decentralized Validator Set**: Miners from anywhere can help secure Core
- **Ecosystem Alignment**: Miner economic interests are aligned with the Core network

## Best Practices for Miners

- Select trustworthy Core validators
- Ensure correct metadata in op_return field
- Monitor your CORE rewards address for incoming distributions
- Maintain consistent mining operations to ensure reliable delegation

## Potential Challenges & Mitigations

| **Challenge**              | **Mitigation**                                   |
| -------------------------- | ------------------------------------------------ |
| Incorrect metadata format  | Core validates metadata before processing        |
| Missed rewards             | Use reliable tooling to monitor reward addresses |
| Validator underperformance | Choose validators with strong historical uptime  |

## Getting Started

**To participate in DPoW:**

1. **Continue your Bitcoin mining** (no changes needed)
2. **Embed delegation metadata** in op_return of coinbase transaction
3. **Choose a Core validator** to delegate to
4. **Add your CORE reward address**
5. **Track rewards and validator performance**

## Why It Matters

Le DPoW est un composant essentiel du consensus Satoshi Plus. Il étend les incitations des mineurs Bitcoin pour les aligner sur le mécanisme de consensus de Core. Core receives Bitcoin miner participation in its security, and Bitcoin receives better-compensated miners. Le résultat est un ensemble de mineurs qui sont fortement incités à sécuriser à la fois Bitcoin et Core.
