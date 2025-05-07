---
sidebar_label: Son Fonctionnement
hide_table_of_contents: false
sidebar_position: 2
---

# How Self-Custodial Bitcoin Staking Works {#how-self-custodial-bitcoin-staking-works}

Self-Custodial Bitcoin Staking is one of the three fundamental components of Core’s Satoshi Plus consensus. This feature integrates Bitcoin holders into Core’s consensus, enhancing network security while enabling Bitcoin to become a yield-generating asset.

Unlike traditional staking mechanisms that require users to transfer custody of their assets, Core's approach leverages [`CheckLockTimeVerify (CLTV`)](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) timelocks, a Bitcoin-native cryptographic function. This ensures Bitcoin remains securely in users’ wallets while still being staked to support the Core network.

## Fonctionnement du verrouillage temporel CLTV

Le verrouillage temporel CLTV est une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de transaction ne peut pas être dépensée avant qu'un point spécifique dans le temps ne soit écoulé. Ce temps peut être spécifié soit par une date et une heure précises, soit par un numéro de bloc. Le CLTV agit comme un coffre-fort à verrouillage temporel, limitant l'accès aux Bitcoins stakés jusqu'à ce qu'une période prédéterminée se soit écoulée. Lorsqu'un utilisateur initie une transaction CLTV :

- The Bitcoin remains locked for a specified duration.
- Once the timelock expires, the Bitcoin is automatically returned to the user.
- Les utilisateurs gagnent des récompenses de staking en jetons CORE pour la durée de verrouillage.

À la différence des modèles de staking traditionnels impliquant des dépositaires tiers, le modèle de staking de Core permet aux utilisateurs de garder le plein contrôle de leurs Bitcoins tout en contribuant à la sécurité du réseau et en percevant des récompenses.

### Fonctionnement du Staking Bitcoin sur Core

#### 1. Création d'une transaction de staking CLTV

To participate in Bitcoin staking, holders must create a valid timelock transaction using Bitcoin's CLTV (`CheckLockTimeVerify`) function. For the Core network to recognize this transaction as a valid delegation to a validator, the timelock transaction must include specific metadata in the script. This metadata must contain:

- Adresse de délégation de validateur : L'adresse du validateur Core à laquelle le staker délègue ses Bitcoins.
- Adresse de récompense : L'adresse où le staker souhaite recevoir les récompenses en tokens CORE.

#### 2. Rôle des relais Core (Core Relayers)

**Relayers** in the Core ecosystem continuously **monitor the Bitcoin network** for valid Bitcoin timelock transactions. Lorsque les relais détectent une transaction CLTV :

- Vérification des détails de la transaction.
- Transférer les données au moteur de consensus Core pour validation et traitement ultérieur.
- Core’s **Consensus Engine** is then responsible for awarding the stakers delegated Bitcoin accordingly.

### Considérations de sécurité et de risque :

- Aucun risque de garde : Le mécanisme de Core n'enlève pas les BTC de la chaîne et ne les transfère pas à des contrats intelligents tiers.
- Les Bitcoins restent dans le portefeuille de l'utilisateur : Les utilisateurs gardent toujours le contrôle total sur leurs BTC stakés.
- **No Protocol-Level Risk:** Staking only involves locking BTC via a Bitcoin-native function.

### Exigences pour le staking de Bitcoin :

#### Exigences générales pour le staking de Bitcoin sur Core

Pour garantir qu'une transaction de staking de BTC est valide et détectée par les relais de Core, les utilisateurs doivent :

1. Utiliser le verrouillage temporel CLTV : Les BTC doivent être verrouillés à l'aide d'une transaction de verrouillage temporel native Bitcoin, en spécifiant les détails de délégation comme sortie de transaction.
2. Inclure une sortie OP_RETURN : La transaction doit contenir :
 - Adresse du validateur Core : L'adresse du validateur Core à qui l'utilisateur souhaite déléguer ses Bitcoins stakés.
 - Adresse de récompense CORE : L'adresse où les récompenses de staking en CORE seront envoyées et reçues par l'utilisateur.

#### Exigences minimales de staking

| Méthode                          | Montant minimum de BTC stakés | Durée minimale de verrouillage  |
| -------------------------------- | ----------------------------- | ------------------------------- |
| Interface utilisateur officielle | 0.01 BTC      | 5 jours                         |
| Script de staking                | Aucun minimum                 | Aucune exigence de verrouillage |

### Flux de transaction

<p align="center">![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)</p>

Core's Bitcoin Timelocking operates across two separate blockchains—Bitcoin and Core. The table below outlines the specific operations that occur on each chain when Bitcoin holders participate and earn rewards. Importantly, this mechanism maintains Bitcoin's security model without introducing additional risks or trust assumptions. While the Core blockchain monitors and verifies timelock transactions and distributes rewards, all Bitcoin operations—including timelocking, redemption, and custody—remain entirely on the Bitcoin network under the holder's control.

| Étape                                              | Réseau Bitcoin                                                                                                                                                                                                                                                                                                                           | Core Network                                                                                                                         |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| \*\*1. Lancer le staking           | L'utilisateur crée une transaction de verrouillage temporel CLTV, bloquant les BTC pour une durée choisie et spécifiant les détails de délégation dans OP_RETURN.                                                                                                                                   | Les relais surveillent les transactions Bitcoin pour détecter les activités de staking valides.                      |
| \*\*2. Diffusion de la transaction | L'utilisateur envoie la transaction CLTV sur le réseau Bitcoin.                                                                                                                                                                                                                                                          | Les relais suivent et valident la transaction                                                                                        |
| 3 La période de verrouillage commence              | Les BTC sont verrouillés dans le portefeuille de l'utilisateur sur le réseau Bitcoin. Une fois confirmée (ce qui peut prendre des heures en raison du temps de bloc, des confirmations et de la congestion), les actifs verrouillés apparaissent dans les enregistrements de staking. | Les relais enregistrent les BTC verrouillés et mettent à jour les enregistrements de staking de Core.                |
| 4 Détection par les relais                         | Les relais détectent la transaction de staking sur Bitcoin.                                                                                                                                                                                                                                                              | Ils la vérifient et la transmettent au moteur de consensus de Core.                                                  |
| 5 Accumulation des récompenses de staking          | Les BTC restent verrouillés, mais les récompenses s'accumulent sur Core.                                                                                                                                                                                                                                                 | Les récompenses en tokens CORE s'accumulent pendant le staking ; les utilisateurs doivent les réclamer manuellement. |
| 6. Déverrouillage du Bitcoin      | Après l'expiration du verrouillage temporel, l'utilisateur doit envoyer un script de rachat pour retrouver l'accès à ses BTC verrouillés.                                                                                                                                                                                | Les relais mettent à jour les enregistrements de staking pour refléter le déverrouillage des BTC.                    |

Les utilisateurs peuvent également réaffecter leurs BTC directement sans les retirer au préalable.\
Après confirmation de la transaction sur le réseau Bitcoin, les utilisateurs peuvent récupérer les données de transaction et les soumettre à la blockchain Core. Cette étape est facultative si les utilisateurs composent la transaction dans un format standard, comme suggéré par Core. Les Relayeurs de l'infrastructure Core détecteront la transaction de staking et la soumettront à la blockchain Core pour les utilisateurs.

#### Processus étape par étape

1. Verrouillage du Bitcoin
 - L'utilisateur crée une transaction avec verrouillage temporel CLTV sur le réseau Bitcoin.
 - While there’s no minimum lock duration when staking via the CLI tool, a minimum of 24 hours is recommended to be eligible for staking rewards. The Core UI typically suggests a lock period of 5+ days to ensure optimal participation and reward potential.

2. Délégation à un validateur Core
 - The timelocking transaction must include:
  - Adresse du validateur Core (pour la délégation de BTC)
  - Adresse de récompense CORE :
   L'adresse spécifiée par l'utilisateur pour recevoir les récompenses en tokens CORE générées par le staking de Bitcoin sur la plateforme Core.

3. La période de verrouillage du Bitcoin commence
 - Le BTC reste verrouillé pendant une durée spécifique.
 - It remains **securely on the Bitcoin network** in the holder's custody.

4. Sélection du validateur et accumulation des récompenses
 - Core utilise les BTC stakés pour calculer le score hybride du validateur
 - Un montant plus élevé de BTC délégués augmente les chances d'élection du validateur.
 - Stakers earn **CORE token rewards** based on their timelocked amount and validator reliability.

5. **Bitcoin Availability After Timelock Expiration**
 - Une fois que le verrouillage temporel expire, les BTC restent dans l'adresse de l'utilisateur mais demeurent verrouillés.
 - L'utilisateur doit envoyer un script de rachat (Redeem script) explicitement après la fin de la période de verrouillage temporel pour récupérer l'accès et pouvoir dépenser ses BTC.
 - Les utilisateurs peuvent également réaffecter directement leurs BTC (redelegate) sans passer par le processus de rachat.

### Timeline

Here's an overview of the timeline for Bitcoin timelocking and when rewards take effect:

1. **Timelock Confirmation:** Once a Bitcoin timelock transaction is broadcast, it requires confirmation on the Bitcoin blockchain (typically 6 blocks or approximately 60 minutes) before Core's relayers will recognize it.
2. **Core Network Recognition:** After the timelock transaction is confirmed on Bitcoin, Core's relayers detect the delegation information and include it in the validator election calculations for the next round.
3. **Rewards Activation:** Validator election occurs once per round (~24 hours, based on UTC+0 time). Timelocked Bitcoin will influence validator election and generate rewards starting from the first round after transaction confirmation.
4. **Data Availability:** Once the timelocked Bitcoin is actively participating in consensus, all related staking data becomes accessible via the Core Staking API.

#### **Example: Bitcoin Staking Transaction with 2-day Duration**

- Assume a timelock order is placed at 6:00 AM UTC+0 today.
- The transaction will go through 6 Bitcoin blocks on the same day.
- The staking will become effective at 00:00 AM UTC+0 on the second day.
- After the staking goes effective, the staking data is then accessible.

#### **Example: Bitcoin Staking Transaction with 3-day Duration**

- Assume a staking order is placed at 11:30 PM UTC+0.
- The transaction will go through 6 Bitcoin blocks on the next day.
- The staking will become effective at 12:00 AM UTC+0 on the third day.

### Lignes directrices pour le staking et le rachat de Bitcoin

Follow these guidelines to ensure efficient Bitcoin timelocking and redemption:

1. **Include Sufficient Fees**

- Transactions with low fees may experience delayed confirmation times.
- Use a competitive fee rate (measured in sats/vB) to ensure timely processing.
- During periods of network congestion, insufficient fees may result in your transaction remaining in the mempool for an extended period (potentially days).

2. **Handling Delayed Transactions**

- If your Bitcoin transaction is stuck due to low fees, consider using a transaction accelerator service.
- Several mining pools offer acceleration services, such as viaBTC.
- Alternatively, if your wallet supports Replace-By-Fee (RBF), you can increase the fee on your pending transaction.

## Conclusion

Bitcoin Timelocking transforms Bitcoin from a passive store of value into a productive asset that generates yield while maintaining self-custody. By leveraging Bitcoin's native CLTV mechanism, holders can participate in Core's consensus, contribute to validator selection, and earn CORE rewards—all while their Bitcoin remains securely on the Bitcoin blockchain. This integration exemplifies how Core extends Bitcoin's utility without compromising its fundamental security properties.

Pour un guide détaillé sur la conception des transactions de staking, consultez [ici](design.md).
