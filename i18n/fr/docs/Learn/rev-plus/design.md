---
sidebar_label: Conception de protocole
description: Conception du modèle de partage des revenus Core Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du système de protocole Core Rev+

---

## Vue d'ensemble de l'architecture

Rev+ est implémenté comme une fonctionnalité de niveau protocole intégrée directement dans le pipeline de traitement des transactions de la blockchain Core. Le modèle Rev+ comprend deux composants principaux : un contrat de `configuration` en chaîne et des `core chain modifications` qui gèrent la logique de distribution des frais.

## Core Components

### 1. Contrat de Configuration (Configuration.sol)

**Contract Address**: `0x0000000000000000000000000000000000001016`

Le contrat `Configuration.sol` sert de registre en chaîne qui régit les règles de distribution des frais Rev+. Il permet de définir et de gérer quels contrats intelligents, événements ou fonctions sont éligibles aux récompenses de frais de gaz, et comment ces récompenses sont allouées. Notez que toutes ces configurations sont mises à jour via des propositions de gouvernance approuvées par le Core DAO.

**Responsabilités Clés:**

- Stocker les données de configuration pour les contrats cibles, y compris les événements et (éventuellement) les fonctions.
- Définir les allocations de gaz et les bénéficiaires de récompenses associés.
- Appliquer des limites aux bénéficiaires de récompenses par événement.
- Assurer la validité des sommes de pourcentages de récompense (doivent égaler 100 %).
- Autoriser les opérations de cycle de vie contrôlées par la gouvernance (ajouter, mettre à jour, supprimer, basculer).
- Maintenir un drapeau `isActive` pour l'activation de la configuration dynamique.

### 2. Intégration avec la blockchain Core

La logique du protocole Rev+ est intégrée directement dans la couche de traitement des transactions de la blockchain Core. Cette implémentation garantit que la distribution des frais se produit de manière transparente et déterministe après l'exécution EVM, sans modifier la logique des contrats intelligents.

Surtout, les développeurs n'ont pas besoin de modifier leurs contrats intelligents déployés pour participer à Rev+, tant qu'ils utilisent `--eth_estimateGas` pour les estimations de gaz dans leur code. Rev+ fonctionne en surveillant les événements de contrat émis lors de l'exécution des transactions. Tant qu'un contrat émet un événement configuré (via la journalisation Solidity standard), le système Rev+ peut le reconnaître et déclencher la distribution de récompenses. Cela rend Rev+ entièrement composable et compatible avec les applications existantes basées sur EVM.

Les modifications apportées aux configurations soumises via le contrat de gouvernance de Core seront appliquées à la transaction suivante après leur approbation et activation par Core DAO.

La logique de Rev+ est intégrée directement dans la couche de traitement des transactions de la blockchain Core, plus précisément dans les fichiers situés à core-chain/eth/feemarket/ et dans le fichier `core-chain/eth/state_transition.go`. Pour plus de détails,[here](https://www.google.com/url?q=https://github.com/coredao-org/core-chain/pull/59&sa=D&source=docs&ust=1748354919957219&usg=AOvVaw182idwbrHVNYZTy364X1E-). Il utilise les mêmes structures que celles de Solidity.

**Caractéristiques clés:**

- **Chronologie d'exécution:** La logique Rev+ s'exécute après l'exécution EVM, avant la validation finale de l'état de la transaction.
- **Modèle de gaz:** Le gaz distribué est ajouté au pool de gaz du bloc et n'est _**pas**_ inclus dans `block.gasUsed`. Les distributions se font soit via le pool de gaz du bloc. Cela garantit que la comptabilité du gaz du bloc reste inchangée.
- **Synchronisation de configuration:** Lit la dernière configuration à partir de `Configuration.sol`. Les mises à jour de gouvernance sont reflétées immédiatement dans la transaction suivante traitée.
- **Compatibilité des structures:** Utilise des versions en langage Go des mêmes structures qu'en Solidity, assurant ainsi la cohérence entre les couches.

#### Gas Accounting

Rev+ introduit un mécanisme de comptabilité du gaz distinct qui préserve la limite standard de Core de 50 millions de gaz par bloc tout en prenant en charge des distributions de récompenses supplémentaires basées sur le gaz.

- **Gaz distribué**: Le gaz utilisé pour les distributions de frais Rev+ **n'est pas inclus dans `block.gasUsed`**. Il est ajouté au pool de gaz du bloc puis déduit du pool de gaz et du gaz utilisé du bloc, garantissant que la comptabilité du gaz du bloc reste inchangée.
- **Conformité à la limite de bloc**: Malgré la distribution de récompenses de gaz supplémentaires, le bloc respecte toujours le plafond de 50 millions de gaz signalé aux clients et aux explorateurs de blocs.
- **Exécution post-EVM**: La logique Rev+ s'exécute après l'exécution EVM et n'interfère pas avec l'exécution des transactions ou les calculs de gaz EVM.

##### Exemple

- `block.gasUsed`: 50 000 000 (signalé)

- Somme de tous les `tx.gasUsed`: 150 000 000 (comprend 100M pour les récompenses Rev+)

- Effet net: Le débit du bloc reste stable, tandis que le gaz distribué est géré de manière transparente après l'EVM.

Ce modèle comptable garantit que Rev+ peut évoluer en fonction de l'utilisation du réseau sans perturber la production de blocs des validateurs ni dégrader les performances du réseau.

## Les structures de données

### Schéma de configuration

```javascript
// System Constants
MAX_REWARDS = 5;       // Maximum reward recipients per event/function
MAX_EVENTS = 5;        // Maximum events per contract
MAX_FUNCTIONS = 5;     // Maximum functions per contract  
MAX_GAS = 1000000;     // Maximum gas per event/function
DENOMINATOR = 10000;   // Basis points denominator (100%)

struct Reward {
    address rewardAddr;           // Recipient address
    uint16 rewardPercentage;     // Percentage in basis points (10000 = 100%)
}

struct Event {
    bytes32 eventSignature;      // Keccak256 hash of event signature
    uint32 gas;                  // Gas amount to distribute
    Reward[] rewards;            // Array of reward recipients
}

struct Function {
    bytes32 functionSignature;   // Keccak256 hash of function signature
    uint32 gas;                  // Gas amount to distribute  
    Reward[] rewards;            // Array of reward recipients
}

struct Config {
    address configAddress;       // Target contract address
    bool isActive;              // Configuration active status
    Event[] events;             // Array of configured events
    Function[] functions;       // Array of configured functions
}
```

## Fonctionnement

Le protocole Rev+ fonctionne comme une couche décentralisée de distribution de frais post-EVM qui attribue de manière transparente une partie des frais de gaz à des destinataires désignés. This mechanism is executed as part of Core’s transaction finalization process without altering the underlying Rev+ enabled contract logic.

### 1. Configuration de gouvernance

- Les règles de distribution des frais sont proposées par le biais de propositions de gouvernance par les participants de l'écosystème (par exemple, les développeurs de dApp, les émetteurs de stablecoin) et approuvées par Core DAO.
- Chaque configuration inclut:
  - Une adresse de contrat intelligent cible
  - Un ou plusieurs événements déclencheurs ou fonctions
  - Montants de gaz associés à chaque déclencheur
  - Une liste de bénéficiaires de récompenses avec des répartitions en pourcentage (doit totaliser 100 %)

### 2. Estimation de gaz avant transaction

- Lorsque l'utilisateur ou une dApp appelle `eth_estimateGas`:
  - Le noyau vérifie les configurations Rev+ applicables.
  - Si une correspondance est trouvée, l'estimation de gaz renvoyée inclut le gaz Rev+ supplémentaire pour les déclencheurs d'événements configurés.
  - Cela permet aux utilisateurs d'avoir une visibilité transparente et immédiate sur les coûts de gaz.

### 3. Exécution de transaction (couche EVM)

- Comme d'habitude, la transaction est soumise et exécutée par la couche EVM de Core.
- La logique du contrat s'exécute sans interférence ni instrumentation par Rev+.
- Au cours de cette phase, des événements peuvent être émis par le contrat et des transactions internes peuvent se produire.
- La logique Rev+ n'est **pas invoquée** pendant l'exécution EVM pour maintenir une compatibilité totale avec le comportement EVM existant.

### 4. Détection de déclenchement d'événement post-exécution

- Une fois l'exécution EVM terminée:
  - Rev+ inspecte les journaux d'événements de la transaction (y compris ceux provenant d'appels internes).
  - Il compare les signatures d'événements/fonctions émises à la configuration en chaîne stockée dans `Configuration.sol`.
  - Si des correspondances sont trouvées, la valeur de gaz correspondante est enregistrée pour distribution.

### 5. Calcul de récompense

- Pour chaque événement ou fonction correspondante:
  - La valeur de gaz configurée est multipliée par le prix de **gaz effectif** (tip cap or `gasPrice`) de la transaction.
  - Cela produit le pool de **récompenses de frais** total pour l'événement.
  - Le pool est divisé proportionnellement entre les destinataires selon leurs pourcentages en points de base (e.g., 7000 \= 70%).

```javascript
effectiveTip := msg.GasPrice
if rules.IsLondon {
	effectiveTip = cmath.BigMin(msg.GasTipCap, new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee))}
    rewardAmount := new(uint256.Int).SetUint64(rewardGas) // 10000 (comes from Solidity Event.gas)
    rewardAmount.Mul(rewardAmount, effectiveTipU256)  // 10000 * effectiveTip (gasPrice)
```

### 6. Fee Distribution

- La récompense totale distribuée:
  - Est ajoutée au pool de gaz du bloc.
  - N'est **pas comptée** dans le champ `block.gasUsed`.
- Les récompenses de gaz sont transférées directement aux adresses de récompense configurées (par exemple, DAO, développeurs, multisignatures, etc.).
- Tout gaz de transaction inutilisé est remboursé à l'expéditeur conformément au comportement standard de l'EVM.

### 7. Comptabilité et conformité

- Core applique la **limite de gaz de bloc de 50M** standard, même avec Rev+ actif.
- Bien que `block.gasUsed` puisse afficher 50M, la somme réelle de l'utilisation de gaz de toutes les transactions (y compris le gaz de distribution Rev+) peut la dépasser.
- Cette séparation permet à Rev+ de faire évoluer les mécanismes d'incitation tout en préservant le débit et la compatibilité avec les clients et outils existants.
- Toutes les distributions sont visibles en chaîne, et les prochains outils permettront un suivi des gains Rev+ basé sur un tableau de bord.

Ce mécanisme garantit que le protocole Rev+ fonctionne comme **une couche de partage de frais transparente, auditable et composable**, encourageant la participation à long terme de l'écosystème et le développement durable de protocoles sans sacrifier les performances, la sécurité ou la compatibilité.

## Transaction Processing Flow

### 1. Phase pré-transactionnelle

```bash
User calls eth_estimateGas
├── Core calculates base gas requirement
├── Checks for Rev+ configurations on target contract
├── Adds Rev+ gas costs to estimate
└── Returns total gas estimate to user
```

### 2. Phase d'exécution de la transaction

```bash
Transaction submitted to Core
├── EVM executes contract logic normally
├── Transaction generates event logs
├── Rev+ system scans logs for configured events
├── Matches event signatures against configurations
└── Calculates required gas distributions
```

### 3. Distribution post-exécution

```bash
After EVM execution completes
├── Rev+ system processes matched events
├── Calculates reward amounts per recipient
├── Distributes fees to reward addresses
├── Deducts distributed gas from block accounting
└── Refunds remaining gas to the transaction sender
```

## Logique de calcul des frais

### Calcul effectif du pourboire

```go
effectiveTip := msg.GasPrice
if rules.IsLondon {
    effectiveTip = cmath.BigMin(
        msg.GasTipCap, 
        new(big.Int).Sub(msg.GasFeeCap, st.evm.Context.BaseFee)
    )
}
```

### Distribution des récompenses

```go
rewardAmount := new(uint256.Int).SetUint64(rewardGas) // From Event.gas
rewardAmount.Mul(rewardAmount, effectiveTipU256)      // gas * effectiveTip

// For each reward recipient:
recipientAmount = (rewardAmount * rewardPercentage) / DENOMINATOR
```

## Modèle de comptabilité des frais de gaz

### Comptabilité au niveau du bloc

- **Limite de gaz par bloc**: Maintient une limite de gaz de 50 millions
- **Gaz distribué**: Non compté dans `block.gasUsed`
- **Gaz de transaction**: L'`tx.gasUsed` individuel inclut le gaz Rev+
- **Net Effect**: Block can accommodate the same transaction count as before Rev+

### Example Scenario

Block Gas Limit: 50,000,000
Block Gas Used: 50,000,000 (reported)
Actual Transaction Gas Sum: 150,000,000 (includes 100M distributed)

## Cycle de vie de la configuration

Le modèle de partage de revenus Rev+ permet à Core DAO, l'organe directeur de la blockchain Core, de gérer les paramètres de distribution des frais via un ensemble d'opérations de configuration contrôlées par la gouvernance. Toutes les modifications apportées aux configurations Rev+ doivent être proposées et approuvées via le processus de gouvernance en chaîne de Core. Les modifications sont appliquées sur la chaîne via le contrat `Configuration.sol`.

### Opérations prises en charge

- **`addConfig`:** Enregistrement d'une nouvelle configuration. La configuration doit spécifier un ou plusieurs événements et/ou fonctions, ainsi que leurs valeurs de gaz et distributions de récompenses associées.

- **`updateConfig`:** Modifie les définitions d'événements et de fonctions pour une configuration de contrat existante. Cela permet de modifier les allocations de gaz, les pourcentages de récompense ou les conditions de déclenchement sans supprimer la configuration entière.

- **`removeConfig`:** Supprime définitivement une configuration existante et ses règles associées pour un contrat spécifique. Une fois supprimée, aucune récompense Rev+ ne sera distribuée pour ce contrat, sauf si elle est ajoutée à nouveau via une nouvelle proposition de gouvernance.

- **`setConfigStatus`:** Active ou désactive le statut d'une configuration. Cela permet à la gouvernance de désactiver ou de réactiver temporairement une configuration sans la supprimer entièrement.

### Exigences de gouvernance

- Seul le Core DAO peut effectuer ces opérations.

- Toutes les modifications nécessitent une soumission via le processus de proposition de gouvernance du Core.

- Les modifications approuvées sont appliquées immédiatement lors de la transaction suivante après confirmation.

- Il n'y a pas de dérogations administratives ni de clés d'urgence.

#### Règles de validation

##### Contraintes de configuration

- Maximum 5 destinataires de récompenses par événement/fonction
- Maximum 5 événements par configuration de contrat
- Maximum 5 fonctions par configuration de contrat
- Maximum 1 000 000 de gaz par événement/fonction
- Les pourcentages de récompense doivent totaliser exactement 10 000 (100 %)
- Pas d'adresses de contrat en double
- Au moins un événement ou une fonction est requis
- Toutes les adresses doivent être valides (non-nulles)

##### Contrôles de gouvernance

- Toutes les modifications apportées aux configurations ne peuvent être effectuées que par le Core DAO
- Toutes les modifications nécessitent une soumission via des propositions de gouvernance et une approbation
- Les modifications prennent effet lors de la prochaine transaction après approbation et mise en œuvre des nouvelles modifications
- Aucun mécanisme d'urgence ou de dérogation administrative

## Modèle de sécurité

### Contrôle d'accès

- **Approbation du Core DAO**: Toutes les modifications de configuration nécessitent l'approbation du Core DAO pour la proposition
- **Aucune clé d'administrateur**: Pas de portes dérobées ni de mécanismes d'accès d'urgence
- **Logique immuable**: La logique Rev+ de Core ne peut pas être modifiée sans un hardfork

### Sécurité économique

- **Distribution bornée**: Les limites de gaz maximales empêchent un drainage excessif des frais
- **Validation par pourcentage**: Toutes les distributions doivent totaliser exactement 100 %
- **Préservation de la limite de bloc**: La capacité totale de traitement des blocs reste inchangée

### Sécurité de correspondance d'événements

- **Correspondance de signature exacte**: Utilise des hachages de signature d'événement cryptographiques
- **Vérification de logs**: Ne traite que les journaux de transactions vérifiés
- **Liaison d'adresse de contrat**: Configurations liées à des adresses de contrat spécifiques

## Considérations de performance

### Surcharge de gaz

- La logique Rev+ ajoute une surcharge de calcul minimale par transaction
- La correspondance de signature d'événement utilise des recherches de hachage efficaces
- Les calculs de distribution sont des opérations arithmétiques simples

### Scalabilité

- Prend en charge le traitement simultané de plusieurs contrats configurés
- La correspondance d'événements évolue linéairement avec le nombre de configurations
- Pas de gonflement d'état dû aux enregistrements de distribution historiques

### Impact sur le réseau

- Le temps de production de bloc reste inchangé
- Le débit de transaction est maintenu à 50 millions de gaz par bloc
- La comptabilité de gaz distribuée empêche la congestion du réseau

