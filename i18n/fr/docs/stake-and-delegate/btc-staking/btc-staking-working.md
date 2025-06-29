---
sidebar_label: Son Fonctionnement
hide_table_of_contents: false
sidebar_position: 2
---

# Fonctionnement du staking Bitcoin non-custodial {#how-self-custodial-bitcoin-staking-works}

---

## Mécanisme de Timelock CLTV

[`CheckLockTimeVerify (CLTV)`](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) est une fonction native de Bitcoin qui verrouille les sorties de transaction jusqu'à un moment spécifié ou une hauteur de bloc définie. Lorsqu'un utilisateur initie une transaction CLTV:

- Les Bitcoins restent verrouillés dans votre portefeuille pendant la durée spécifiée
- Aucun tiers ne peut accéder à vos Bitcoins pendant la période de verrouillage
- Vous conservez la pleine garde tout au long du processus entier
- Après expiration, vous devez envoyer un script de remboursement pour récupérer la capacité de dépense

## Aperçu du processus de staking

1. **Créer une transaction avec verrouillage temporel** (timelock) en utilisant CLTV sur la blockchain Bitcoin
2. **Inclure des métadonnées** spécifiant la délégation de validation et l'adresse de récompense
3. **Les relais détectent** la transaction de staking sur Bitcoin
4. **Gagner des récompenses CORE** en fonction des performances du validateur et du montant mis en jeu (staked)
5. **Racheter des Bitcoins** après l'expiration du verrouillage temporel en utilisant le script de remboursement

## Modèle de sécurité

**Risque de garde zéro**: Vos Bitcoins ne quittent jamais la blockchain Bitcoin ou votre contrôle. Le mécanisme de staking utilise uniquement des fonctions natives de Bitcoin, sans introduire d'hypothèses de confiance supplémentaires.

**Garanties de sécurité clés**:

- Les Bitcoins restent dans votre portefeuille tout au long du staking
- Aucun risque au niveau du protocole au-delà de la sécurité native de Bitcoin
- Aucun risque de garde par un tiers ou de contrat intelligent
- Les comportements malveillants des validateurs ne peuvent pas affecter votre capital Bitcoin

## Exigences techniques

### Structure des transactions

Votre transaction de staking CLTV doit inclure :

**Sorties requises**:

- **Sortie de verrouillage temporel CLTV (CheckLockTimeVerify)** : Verrouille vos Bitcoins pendant une durée spécifiée
- **Sortie `OP_RETURN`**: Contient des métadonnées de délégation

**Format des métadonnées** (in `OP_RETURN`):

- Adresse du validateur Core (cible de délégation)
- Adresse de récompense CORE (où envoyer les récompenses)

### Exigences minimales

| **Méthode**                      | **Montant minimum de BTC** | **Durée minimale**                            |
| -------------------------------- | -------------------------- | --------------------------------------------- |
| Interface utilisateur officielle | 0.01 BTC   | 5 jours                                       |
| Scripting direct                 | Aucun minimum              | Durée recommandée : 24 heures |

## Opérations inter-chaînes

| Étape                                                   | Réseau Bitcoin                                                                    | Core Network                                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Initier**                                             | L'utilisateur crée une transaction CLTV avec des métadonnées de délégation        | Les relais surveillent les transactions de staking valides                   |
| **Verrouillage temporel (Timelock)** | Bitcoins verrouillés dans le portefeuille de l'utilisateur, transaction confirmée | Les relais valident et enregistrent la position de staking                   |
| **Gagner des récompenses**                              | Les Bitcoins restent verrouillés et sécurisés                                     | Les récompenses CORE s'accumulent en fonction des performances du validateur |
| **Rachat**                                              | L'utilisateur envoie le script de rachat pour déverrouiller les Bitcoins          | Les relais mettent à jour les enregistrements de staking                     |

## Flux de transaction

<p align="center">
![btc-staking-tx-workflow](../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

### Chronologie et Activation

**Processus de Confirmation**

1. **Diffusion de la transaction**: Transaction CLTV envoyée au réseau Bitcoin
2. **Confirmation Bitcoin**: Environ 60 minutes (6 blocs) pour la reconnaissance
3. **Core detection**: Relayers identify valid delegation
4. **Reward activation**: Next validator election round (~24 hours from UTC+0)

**Example Timeline**
If you stake Bitcoin at 6:00 AM UTC+0:

- Bitcoin confirmation: Same day after 6 blocks
- Staking becomes active: 12:00 AM UTC+0 next day
- Rewards begin accruing: From first active round

## Best Practices

### Transaction Fees

- **Use competitive fees**: Low fees cause confirmation delays
- **Monitor network congestion**: Adjust fee rates accordingly
- **Consider RBF**: Enable Replace-By-Fee for fee adjustments

### Handling Delays

- **Transaction accelerators**: Use services like viaBTC if stuck
- **Fee bumping**: Increase fees on pending RBF transactions
- **Patience**: Low-fee transactions may take days during congestion

### Validator Selection

Choose validators based on:

- Performance history and uptime
- Commission rates
- Community reputation

## Redelegation vs Redemption

**Redemption**: Unlock Bitcoin for general use

- Requires redeem script after timelock expires
- Bitcoin becomes fully spendable again

**Redelegation**: Switch to different validator without unlocking

- Can be done directly without redemption
- Maintains staking position with new validator

## API and Data Access

Staking data becomes available via Core Staking API once:

- Bitcoin transaction is confirmed (6 blocks)
- Relayers have processed the delegation
- Staking position is active in validator elections

This allows developers to track staking positions, rewards, and validator performance programmatically.

For a detailed guide on staking transaction design, refer [here](./design.md).
