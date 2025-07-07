---
sidebar_label: Staking Non-Custodial de Bitcoin
hide_table_of_contents: false
sidebar_position: 2
description: Tirer parti du staking Bitcoin dans Satoshi Plus
---

# Staking de Bitcoin en auto-garde(verrouillage temporel)

---

## Aperçu

Le staking Bitcoin auto-géré permet aux détenteurs de Bitcoin de gagner des récompenses en tokens CORE en participant au consensus de Core **sans jamais renoncer à la garde de leurs Bitcoin**. En exploitant l'opcode CheckLockTimeVerify (CLTV) natif de Bitcoin, cette approche transforme le Bitcoin inactif en un actif productif tout en préservant ses principes fondamentaux de sécurité et de souveraineté.

Il n'y a pas d'enveloppement, de pontage ou d'exposition au risque de contrat intelligent.

## Principes fondamentaux

- **100% Conservation auto-gérée**: Le Bitcoin ne quitte jamais votre portefeuille
- **Zero Principal Risk**: Les fonds restent entièrement sécurisés par les propres règles de Bitcoin
- **Rendement sans confiance**: Aucun intermédiaire tiers
- **Sécurité native Bitcoin**: Les Bitcoins mis en staking sont sécurisés entièrement par le mécanisme de consensus de Bitcoin

## Son Fonctionnement

### 1. Le verrouillage temporel de Bitcoin via CLTV

L'opcode CheckLockTimeVerify (CLTV) de Bitcoin permet aux détenteurs de verrouiller des Bitcoins pour une durée choisie :

- **Période de verrouillage minimale**: 24 heures
- **Durée flexible**: Vous choisissez la durée de verrouillage
- **Appliqué par le protocole**: Tous les nodes Bitcoin respectent le verrouillage automatiquement

Pendant cette période, les Bitcoins sont non dépensables - même par le propriétaire - jusqu'à l'expiration du verrou.

### 2. Sélection de validateurs via des métadonnées

Lors de la création de la transaction de verrouillage temporel, vous incluez des métadonnées dans le script de remboursement spécifiant :

- **Quel validateur Core** vous soutenez
- **Quelle adresse EVM** doit recevoir vos récompenses en jetons CORE

Votre pouvoir de vote sur Core est **proportionnel au montant de Bitcoin** que vous verrouillez temporairement pour soutenir un validateur.

### 3. Intégration de relais et de consensus

Le réseau de relais de Core analyse en continu la blockchain Bitcoin pour :

- Détecter les verrouillages temporels CLTV valides avec des métadonnées de validation intégrées
- Valider la transaction
- Transmettre les données à la logique de consensus on-chain de Core
- Mettre à jour les poids d'élection des validateurs en fonction du montant de Bitcoin délégué

Ce processus assure une synchronisation en temps réel et sans confiance entre l'activité Bitcoin et le consensus de Core.

### 4. Distribution des Récompenses

Lorsqu'un validateur que vous soutenez est élu et remplit ses fonctions :

- Il gagne des récompenses en jetons CORE
- Une partie de ces récompenses est distribuée à tous les détenteurs de Bitcoin qui ont verrouillé des fonds en soutien
- Les récompenses sont automatiquement envoyées à l'adresse EVM fournie dans les métadonnées de verrouillage

Les montants des récompenses varient en fonction de la disponibilité du validateur et du montant de Bitcoin mis en jeu pour le soutenir.

### 5. Expiration du verrouillage temporel

Une fois que votre période de verrouillage se termine :

- Vos bitcoins redeviennent entièrement utilisables
- Votre vote de validateur et votre éligibilité aux récompenses expirent
- Vous pouvez créer un nouveau verrouillage temporel pour reprendre votre participation

Il n'y a pas **de renouvellement automatique**: une participation continue nécessite une nouvelle transaction de verrouillage temporel.

## Avantages

### Pour les détenteurs de Bitcoin

- Générez des rendements sans renoncer au contrôle
- Conservez vos Bitcoin sous leur forme native
- Évitez les risques liés aux ponts, aux dépositaires et aux contrats intelligents

### Pour le réseau Core

- Élection décentralisée de validateurs adossée à Bitcoin
- Sécurité renforcée par le poids économique réel du Bitcoin
- Un système aligné sur les valeurs de souveraineté et de transparence de Bitcoin

## Pourquoi est-ce important

Le Bitcoin a historiquement été un actif improductif, ne générant aucun rendement. En utilisant la fonction de verrouillage temporel CLTV native de Bitcoin, Core permet aux détenteurs de Bitcoin de générer des rendements en participant de manière décentralisée au processus de consensus d'une plateforme de contrats intelligents haute performance.

## Consulter les rendements actuels

Les récompenses de staking en direct sont disponibles sur **[stake.coredao.org](https://stake.coredao.org)**
