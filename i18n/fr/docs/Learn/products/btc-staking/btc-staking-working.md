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

| Méthode                          | Montant minimum de BTC stakés | Durée minimale de verrouillage  |
| -------------------------------- | ----------------------------- | ------------------------------- |
| Interface utilisateur officielle | 0.01 BTC      | 5 jours                         |
| Script de staking                | Aucun minimum                 | Aucune exigence de verrouillage |

### Flux de transaction

L'implémentation du staking Bitcoin par Core est entièrement native et non dépositaire, ce qui signifie que les utilisateurs peuvent conserver leurs actifs Bitcoin sur le réseau Bitcoin sans les déplacer ou les mettre en pont avant le staking.

<p align="center">![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow-new.png)</p>

Les opérations de staking BTC non dépositaire de Core sont menées sur deux blockchains distinctes : Bitcoin et Core. Le tableau suivant identifie ce qui se passe sur chaque blockchain pour que les détenteurs de Bitcoin puissent gagner des récompenses de staking avec succès grâce au staking Bitcoin non dépositaire. Le staking Bitcoin non dépositaire de Core n'introduit aucun risque ou hypothèse de confiance supplémentaire. Au-delà de la surveillance et de la vérification des transactions de staking Bitcoin ainsi que de l'accumulation et de la réclamation des récompenses, toutes les opérations - y compris le verrouillage des actifs, le rachat et la gestion des actifs - restent sécurisées sur le réseau Bitcoin.

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
 - La durée minimale de staking dépend de la méthode utilisée. L'interface utilisateur officielle impose un minimum de 5 jours, tandis le script ne comporte aucune période de blocage.

2. Délégation à un validateur Core
 - La transaction de staking doit inclure :
  - Adresse du validateur Core (pour la délégation de BTC)
  - Adresse de récompense CORE :
   L'adresse spécifiée par l'utilisateur pour recevoir les récompenses en tokens CORE générées par le staking de Bitcoin sur la plateforme Core.

3. La période de verrouillage du Bitcoin commence
 - Le BTC reste verrouillé pendant une durée spécifique.
 - Il reste de manière sécurisée sur le réseau Bitcoin sans être déplacé hors de la chaîne.

4. Sélection du validateur et accumulation des récompenses
 - Core utilise les BTC stakés pour calculer le score hybride du validateur
 - Un montant plus élevé de BTC délégués augmente les chances d'élection du validateur.
 - Les stakers gagnent des récompenses en tokens CORE en fonction de la durée de la délégation.

5. Récupération du Bitcoin après la fin du staking
 - Une fois que le verrouillage temporel expire, les BTC restent dans l'adresse de l'utilisateur mais demeurent verrouillés.
 - L'utilisateur doit envoyer un script de rachat (Redeem script) explicitement après la fin de la période de verrouillage temporel pour récupérer l'accès et pouvoir dépenser ses BTC.
 - Les utilisateurs peuvent également réaffecter directement leurs BTC (redelegate) sans passer par le processus de rachat.

### Chronologie du staking de Bitcoin non dépositaire

Voici un aperçu de la chronologie pour passer une commande de staking de Bitcoin et quand les récompenses prennent effet :

1. Placement de la commande de staking :
 Une fois la commande passée, il faut généralement 6 blocs Bitcoin (environ 60 minutes) pour que la transaction Bitcoin soit transférée sur la blockchain Core.
2. Activation des récompenses de staking :
 Après le transfert de la transaction Bitcoin, il faut environ un cycle (environ 24 heures, basé sur l'heure UTC+0) pour que les récompenses de staking prennent effet.
3. Accès aux données de staking :
 Une fois que le staking est effectif, les données de staking sont accessibles via l'API de staking. Cela permet aux utilisateurs de suivre et de gérer leurs activités de staking de manière efficace

#### Exemple : Transaction de staking de Bitcoin d'une durée de 2 jours

- Supposons qu'une commande de staking soit passée à 6h00 UTC+0 aujourd'hui.
- La transaction passera par 6 blocs Bitcoin le même jour.
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