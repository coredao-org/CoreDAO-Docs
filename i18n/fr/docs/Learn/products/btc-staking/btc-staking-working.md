---
sidebar_label: Son Fonctionnement
hide_table_of_contents: false
sidebar_position: 2
---

# Fonctionnement du staking Bitcoin non-custodial {#how-non-custodial-bitcoin-staking-works}

Le staking Bitcoin non-custodial est l'un des trois composants fondamentaux du consensus Satoshi Plus de Core. Cette fonctionnalité intègre les détenteurs de Bitcoin dans l'écosystème de Core, renforçant la sécurité du réseau tout en permettant à Bitcoin de devenir un actif générateur de rendement.

Les stakers Bitcoin gagnent un rendement sous forme de récompenses de staking en jetons CORE sur leur Bitcoin autrement passif, pendant la durée de verrouillage qu'ils ont définie (c'est-à-dire qu'ils délèguent leur Bitcoin aux validateurs sur le réseau Core). Le staking Bitcoin sans garde de Core transforme des milliards de dollars de valeur Bitcoin inexploitée en actifs productifs, rémunérant les participants tout en élargissant les possibilités d'utilisation de Bitcoin.

Contrairement aux mécanismes de staking traditionnels qui exigent que les utilisateurs transfèrent la garde de leurs actifs, l'approche de Core utilise le verrouillage temporel CheckLockTimeVerify  (https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify)     (CLTV), une fonction cryptographique native de Bitcoin. Ceci permet de maintenir Bitcoin en sécurité dans les portefeuilles des utilisateurs tout en participant au staking sur le réseau Core.

## Fonctionnement du verrouillage temporel CLTV

Le verrouillage temporel CLTV est une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de transaction ne peut pas être dépensée avant qu'un point spécifique dans le temps ne soit écoulé. Ce temps peut être spécifié soit par une date et une heure précises, soit par un numéro de bloc. Le CLTV agit comme un coffre-fort à verrouillage temporel, limitant l'accès aux Bitcoins stakés jusqu'à ce qu'une période prédéterminée se soit écoulée. Lorsqu'un utilisateur initie une transaction CLTV :

- Le BTC reste verrouillé pendant une durée spécifique.
- Dès que le délai de verrouillage est écoulé, le BTC est automatiquement rendu à l'utilisateur.
- Les utilisateurs gagnent des récompenses de staking en jetons CORE pour la durée de verrouillage.

À la différence des modèles de staking traditionnels impliquant des dépositaires tiers, le modèle de staking de Core permet aux utilisateurs de garder le plein contrôle de leurs Bitcoins tout en contribuant à la sécurité du réseau et en percevant des récompenses.

### Fonctionnement du Staking Bitcoin sur Core

#### 1. Création d'une transaction de staking CLTV

Pour prendre part, les propriétaires de Bitcoin doivent lancer une transaction CLTV éligible sur le réseau Bitcoin. Pour garantir la validité des transactions et être sélectionnées comme délégation pour les validateurs sur le réseau Core, les stakers doivent inclure un script contenant les informations suivantes :

- Adresse de délégation de validateur : L'adresse du validateur Core à laquelle le staker délègue ses Bitcoins.
- Adresse de récompense : L'adresse où le staker souhaite recevoir les récompenses en tokens CORE.

#### 2. Rôle des relais Core (Core Relayers)

Les relais dans l'écosystème Core surveillent en continu le réseau Bitcoin pour détecter les transactions de staking Bitcoin valides destinées aux validateurs Core. Lorsque les relais détectent une transaction CLTV :

- Vérification des détails de la transaction.
- Transférer les données au moteur de consensus Core pour validation et traitement ultérieur.
- Le moteur de consensus Core se charge de distribuer les récompenses aux stakers en fonction de leur participation et des règles établies.

### Considérations de sécurité et de risque :

- Aucun risque de garde : Le mécanisme de Core n'enlève pas les BTC de la chaîne et ne les transfère pas à des contrats intelligents tiers.
- Les Bitcoins restent dans le portefeuille de l'utilisateur : Les utilisateurs gardent toujours le contrôle total sur leurs BTC stakés.
- Aucun risque au niveau du protocole : Le staking implique uniquement le verrouillage de BTC via une fonction native de Bitcoin, garantissant ainsi la sécurité et la décentralisation.

### Exigences pour le staking de Bitcoin :

#### Exigences générales pour le staking de Bitcoin sur Core

Pour garantir qu'une transaction de staking de BTC est valide et détectée par les relais de Core, les utilisateurs doivent :

1. Utiliser le verrouillage temporel CLTV : Les BTC doivent être verrouillés à l'aide d'une transaction de verrouillage temporel native Bitcoin, en spécifiant les détails de délégation comme sortie de transaction.
2. Inclure une sortie OP_RETURN : La transaction doit contenir :
 - Adresse du validateur Core : L'adresse du validateur Core à qui l'utilisateur souhaite déléguer ses Bitcoins stakés.
 - Adresse de récompense CORE : L'adresse où les récompenses de staking en CORE seront envoyées et reçues par l'utilisateur.

#### Exigences minimales de staking

| Méthode                          | Montant minimum de BTC stakés | Durée minimale de verrouillage |
| -------------------------------- | ----------------------------- | ------------------------------ |
| Interface utilisateur officielle | 0.01 BTC      | 5 jours                        |
| **Staking Script**               | No Minimum                    | No Lockup Requirement          |

### Transaction Workflow

Core's implementation of Bitcoin staking is completely native and non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking.

<p align="center">
![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

Core's Non-Custodial BTC Staking operations are conducted on two separate blockchains—Bitcoin and Core. The following table identifies what happens in each blockchain for Bitcoin holders to earn staking rewards successfully through non-custodial Bitcoin staking. It's important to note that Core's Non-Custodial Bitcoin Staking does not introduce any additional risks or trust assumptions. Beyond monitoring and verifying Bitcoin staking transactions and accrual and claiming rewards, all operations—including asset locking, redemption, and asset management—remain securely on the Bitcoin network.

| **Step**                                       | **Bitcoin Network**                                                                                                                                                                                                                                | **Core Network**                                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **1. Initiate Staking**        | User crafts a **CLTV timelock** transaction, locking BTC for a chosen duration, and specifying delegation details in `OP_RETURN`.                                                                                                  | Relayers monitor Bitcoin transactions for valid staking activity.         |
| **2. Broadcast Transaction**   | User sends the **CLTV transaction** on the Bitcoin network.                                                                                                                                                                        | Relayers track and validate the transaction.                              |
| **3. Locking Period Begins**   | BTC is locked in the user's wallet on the Bitcoin network. Once confirmed (which can take hours due to block time, confirmations, and congestion), the locked assets appear in staking records. | Relayers register the locked BTC and update Core’s staking records.       |
| **4. Relayer Detection**       | Relayers detect the staking transaction on Bitcoin.                                                                                                                                                                                | They verify and forward it to Core’s Consensus Engine.                    |
| **5. Staking Rewards Accrual** | BTC remains locked, but rewards accumulate on Core.                                                                                                                                                                                | CORE token rewards accrue during staking; users must claim them manually. |
| **6. Unlocking Bitcoin**       | After the timelock expires, the user **must** send a Redeem script to regain access to their locked BTC.                                                                                                                           | Relayers update the staking records to reflect BTC unlocking.             |

**Important:** Users can also **redelegate** BTC directly without first redeeming it.\
_**(_Optional_)**_ After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit it to the Core blockchain. This step is optional if users compose the transaction in a standard format, as suggested by Core. Relayers from the Core infrastructure will detect the staking transaction and submit it to the Core blockchain for users.

#### Step-by-Step Staking Process

1. **Locking Bitcoin**
 - The user creates a **CLTV timelock transaction** on the Bitcoin network.
 - Minimum lock duration depends on the staking method. The official website UI requires a 5-day minimum, while the script has no lockup requirement.

2. **Delegating to a Core Validator**
 - The staking transaction must include:
  - **Core Validator Address** (for delegation of BTC).
  - Adresse de récompense CORE :
   L'adresse spécifiée par l'utilisateur pour recevoir les récompenses en tokens CORE générées par le staking de Bitcoin sur la plateforme Core.

3. La période de verrouillage du Bitcoin commence
 - Le BTC reste verrouillé pendant une durée spécifique.
 - It remains **securely on the Bitcoin network** without moving off-chain.

4. **Validator Selection & Rewards Accrual**
 - Core uses the staked BTC to calculate the validator’s hybrid score.
 - Higher delegated BTC increases validator election chances.
 - Stakers earn **CORE token rewards** based on delegation duration.

5. **Redeeming Bitcoin After Staking Ends**
 - Once the timelock expires, BTC **remains in the user’s address but stays locked**.
 - The user must send a **Redeem script** explicitly after the timelock period ends to regain access and be able to spend their BTC.
 - Alternatively, users can **redelegate directly** without redemption.

### Timeline for Non-Custodial Bitcoin Staking

Here’s an overview of the timeline for placing a Bitcoin staking order and when rewards take effect:

1. **Staking Order Placement:** Once a staking order is placed, it typically takes 6 Bitcoin blocks (roughly 60 minutes) for the Bitcoin transaction to be transferred to the Core blockchain.
2. **Staking Reward Activation:** After the Bitcoin transaction transfer is completed, it takes one round (~24 hours, based on UTC+0 time) for the staking reward to become effective.
3. **Staking Data Accessibility:** After the staking becomes effective, staking data will be available via the Staking API.

#### **Example: Bitcoin Staking Transaction with 2-day Duration**

- Assume a staking order is placed at 6:00 AM UTC+0 today.
- The transaction will go through 6 Bitcoin blocks on the same day.
- The staking will become effective at 00:00 AM UTC+0 on the second day.
- After the staking goes effective, the staking data is then accessible.

#### **Example: Bitcoin Staking Transaction with 3-day Duration**

- Assume a staking order is placed at 11:30 PM UTC+0.
- The transaction will go through 6 Bitcoin blocks on the next day.
- The staking will become effective at 12:00 AM UTC+0 on the third day.
- After the staking goes effective, the staking data is then accessible.

### Guidelines for Staking/Redeeming Bitcoin

Please follow these guidelines to ensure smooth transactions when staking or redeeming your Bitcoin. Following these recommendations can ensure a more efficient staking and redemption process for your Bitcoin.

1. **Avoid Low Gas Fees**
 - Transactions with **low gas fees** may experience long confirmation times.
 - Use a **competitive network fee** to ensure timely processing.
 - Using a gas fee that is too low, especially during periods of network congestion, may result in your Bitcoin transaction taking an extended amount of time (potentially days) to be confirmed.

2. **Handling Stuck Transactions**

- If your Bitcoin transaction is delayed due to a low gas fee, consider using a **Bitcoin transaction accelerator**.
- Free acceleration services, such as [viaBTC](https://www.viabtc.com/tools/txaccelerator), can help speed up confirmations.
- It is recommended to research and choose a service that best fits your needs.

## Conclusion

Core’s **Non-Custodial Bitcoin Staking** transforms Bitcoin from a passive store of value into a productive asset—**securely and without custodial risk**. By leveraging Bitcoin-native staking, BTC holders can contribute to Core’s security, earn CORE rewards, and maximize asset utility while keeping full control over their Bitcoin.

For a detailed guide on staking transaction design, refer [here](design.md).