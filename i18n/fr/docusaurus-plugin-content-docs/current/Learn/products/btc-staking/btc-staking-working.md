---
sidebar_label: Son Fonctionnement
hide_table_of_contents: false
sidebar_position: 2
---

# Fonctionnement du staking Bitcoin non-custodial {#how-self-custodial-bitcoin-staking-works}

Le staking Bitcoin non-custodial est l'un des trois composants fondamentaux du consensus Satoshi Plus de Core. Cette fonctionnalité intègre les détenteurs de Bitcoin dans l'écosystème de Core, renforçant la sécurité du réseau tout en permettant à Bitcoin de devenir un actif générateur de rendement.

Contrairement aux mécanismes de staking traditionnels qui exigent que les utilisateurs transfèrent la garde de leurs actifs, l'approche de Core utilise le verrouillage temporel [CheckLockTimeVerify](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) (CLTV), une fonction cryptographique native de Bitcoin. Ceci permet de maintenir Bitcoin en sécurité dans les portefeuilles des utilisateurs tout en participant au staking sur le réseau Core.

## Fonctionnement du verrouillage temporel CLTV

Le verrouillage temporel CLTV est une fonctionnalité cryptographique native de Bitcoin qui spécifie une condition selon laquelle la sortie de transaction ne peut pas être dépensée avant qu'un point spécifique dans le temps ne soit écoulé. Ce temps peut être spécifié soit par une date et une heure précises, soit par un numéro de bloc. Le CLTV agit comme un coffre-fort à verrouillage temporel, limitant l'accès aux Bitcoins stakés jusqu'à ce qu'une période prédéterminée se soit écoulée. Lorsqu'un utilisateur initie une transaction CLTV :

- Le BTC reste verrouillé pendant une durée spécifique.
- Dès que le délai de verrouillage est écoulé, le BTC est automatiquement rendu à l'utilisateur.
- Les utilisateurs gagnent des récompenses de staking en jetons CORE pour la durée de verrouillage.

À la différence des modèles de staking traditionnels impliquant des dépositaires tiers, le modèle de staking de Core permet aux utilisateurs de garder le plein contrôle de leurs Bitcoins tout en contribuant à la sécurité du réseau et en percevant des récompenses.

### Fonctionnement du Staking Bitcoin sur Core

#### 1. Création d'une transaction de staking CLTV

Pour participer au jalonnement de Bitcoin, les détenteurs doivent créer une transaction de verrouillage temporel valide en utilisant la fonction CLTV (CheckLockTimeVerify) de Bitcoin. Pour que le réseau Core reconnaisse cette transaction comme une délégation valide à un validateur, la transaction de verrouillage temporel doit inclure des métadonnées spécifiques dans le script. Ces métadonnées doivent contenir :

- Adresse de délégation de validateur: L'adresse du validateur Core à laquelle le staker délègue ses Bitcoins.
- Adresse de récompense: L'adresse où le staker souhaite recevoir les récompenses en tokens CORE.

#### 2. Rôle des relais Core (Core Relayers)

Les 'relayers' dans l'écosystème Core surveillent en continu le réseau Bitcoin pour détecter les transactions de verrouillage temporel Bitcoin valides. Lorsque les relais détectent une transaction CLTV:

- Vérification des détails de la transaction.
- Transférer les données au moteur de consensus Core pour validation et traitement ultérieur.
- Le moteur de consensus Core se charge de distribuer les récompenses aux stakers en fonction de leur participation et des règles établies.

### Considérations de sécurité et de risque:

- Aucun risque de garde : Le mécanisme de Core n'enlève pas les BTC de la chaîne et ne les transfère pas à des contrats intelligents tiers.
- Les Bitcoins restent dans le portefeuille de l'utilisateur : Les utilisateurs gardent toujours le contrôle total sur leurs BTC stakés.
- Aucun risque au niveau du protocole : Le staking implique uniquement le verrouillage de BTC via une fonction native de Bitcoin, garantissant ainsi la sécurité et la décentralisation.

### Exigences pour le staking de Bitcoin:

#### Exigences générales pour le staking de Bitcoin sur Core

Pour garantir qu'une transaction de staking de BTC est valide et détectée par les relais de Core, les utilisateurs doivent:

1. Utiliser le verrouillage temporel CLTV : Les BTC doivent être verrouillés à l'aide d'une transaction de verrouillage temporel native Bitcoin, en spécifiant les détails de délégation comme sortie de transaction.
2. Inclure une sortie OP_RETURN: La transaction doit contenir 
 - Adresse du validateur Core: L'adresse du validateur Core à qui l'utilisateur souhaite déléguer ses Bitcoins stakés.
 - Adresse de récompense CORE: L'adresse où les récompenses de staking en CORE seront envoyées et reçues par l'utilisateur.

#### Exigences minimales de staking

| Méthode                          | Montant minimum de BTC stakés | Durée minimale de verrouillage  |
| -------------------------------- | ----------------------------- | ------------------------------- |
| Interface utilisateur officielle | 0.01 BTC      | 5 jours                         |
| **Script de staking**            | Aucun minimum                 | Aucune exigence de verrouillage |

### Flux de transaction

<p align="center">
![btc-staking-tx-workflow](../../../../../../../static/img/btc-staking/btc-staking-flow-new.png)
</p>

Le verrouillage temporel de Bitcoin de Core fonctionne sur deux blockchains distinctes: Bitcoin et Core. Le tableau ci-dessous décrit les opérations spécifiques qui se produisent sur chaque chaîne lorsque les détenteurs de Bitcoin participent et gagnent des récompenses. Surtout, ce mécanisme maintient le modèle de sécurité de Bitcoin sans introduire de risques supplémentaires ou d'hypothèses de confiance. Alors que la blockchain Core surveille et vérifie les transactions de verrouillage temporel et distribue les récompenses, toutes les opérations Bitcoin, y compris le verrouillage temporel, le rachat et la garde, restent entièrement sur le réseau Bitcoin sous le contrôle du détenteur.

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
 - Bien qu'il n'y ait pas de durée de verrouillage minimum lors du jalonnement via l'outil CLI, un minimum de 24 heures est recommandé pour être éligible aux récompenses de jalonnement. L'interface utilisateur Core suggère généralement une période de verrouillage de 5 jours ou plus pour garantir une participation optimale et un potentiel de récompense maximal.

2. Délégation à un validateur Core
 - La transaction de verrouillage temporel doit inclure:
  - Adresse du validateur Core (pour la délégation de BTC)
  - Adresse de récompense CORE: L'adresse spécifiée par l'utilisateur pour recevoir les récompenses en tokens CORE générées par le staking de Bitcoin sur la plateforme Core.

3. La période de verrouillage du Bitcoin commence
 - Le BTC reste verrouillé pendant une durée spécifique.
 - Il reste de manière sécurisée sur le réseau Bitcoin sans être déplacé hors de la chaîne.

4. Sélection du validateur et accumulation des récompenses
 - Core utilise les BTC stakés pour calculer le score hybride du validateur
 - Un montant plus élevé de BTC délégués augmente les chances d'élection du validateur.
 - Les jalonneurs gagnent des récompenses en jetons CORE en fonction de leur montant verrouillé et de la fiabilité du validateur.

5. **Disponibilité du Bitcoin après expiration du verrouillage temporel**
 - Une fois que le verrouillage temporel expire, les BTC restent dans l'adresse de l'utilisateur mais demeurent verrouillés.
 - L'utilisateur doit envoyer un script de rachat (Redeem script) explicitement après la fin de la période de verrouillage temporel pour récupérer l'accès et pouvoir dépenser ses BTC.
 - Les utilisateurs peuvent également réaffecter directement leurs BTC (redelegate) sans passer par le processus de rachat.

### Voici une chronologie possible :

Voici un aperçu de la chronologie pour passer une commande de staking de Bitcoin et quand les récompenses prennent effet :

1. **Confirmation du verrouillage temporel :** Une fois qu'une transaction de verrouillage temporel Bitcoin est diffusée, elle nécessite une confirmation sur la blockchain Bitcoin (généralement 6 blocs ou environ 60 minutes) avant que les relais de Core ne la reconnaissent.
2. **Reconnaissance par le réseau Core :** Après confirmation de la transaction de verrouillage temporel sur Bitcoin, les relais de Core détectent les informations de délégation et les incluent dans les calculs d'élection des validateurs pour le prochain tour.
3. Activation des récompenses : L'élection des validateurs a lieu une fois par tour (~24 heures, basé sur l'heure UTC+0). Le Bitcoin verrouillé temporairement influencera l'élection des validateurs et générera des récompenses à partir du premier tour après confirmation de la transaction.
4. **Disponibilité des données :** Une fois que le Bitcoin verrouillé temporairement participe activement au consensus, toutes les données de jalonnement associées deviennent accessibles via l'API de jalonnement Core.

#### Exemple : Transaction de staking de Bitcoin d'une durée de 2 jours

- Supposons qu'une commande de verroullage soit passée à 6h00 UTC+0 aujourd'hui.
- La transaction passera par 6 blocs Bitcoin le même jour.
- Le staking prendra effet à 00h00 UTC+0 le deuxième jour.
- Après que le staking soit effectif, les données de staking sont alors accessibles.

#### **Exemple : Transaction de staking de Bitcoin d'une durée de 3 jours**

- Supposons qu'une commande de staking soit passée à 23h30 UTC+0.
- La transaction passera par 6 blocs Bitcoin le jour suivant.
- Le staking prendra effet à 00h00 UTC+0 le troisième jour.

### Lignes directrices pour le staking et le rachat de Bitcoin

Suivez ces directives pour garantir un verrouillage temporel et un remboursement efficaces du Bitcoin:

1. **Incluez des frais de gaz suffisants**

- Les transactions avec des frais de gaz bas peuvent connaître des temps de confirmation longs
- Utilisez un taux de frais compétitif (mesuré en sats/vB) pour garantir un traitement rapide de votre transaction de verrouillage temporel sur le réseau Bitcoin.
- Pendant les périodes de congestion du réseau, des frais insuffisants peuvent entraîner le maintien de votre transaction dans le mempool pendant une période prolongée (potentiellement plusieurs jours).

2. **Gestion des transactions retardées**

- Si votre transaction Bitcoin est retardée en raison de frais de gas bas, envisagez d'utiliser un accélérateur de transaction pour accélérer le processus.
- Plusieurs pools miniers proposent des services d'accélération, tels que viaBTC, pour aider à accélérer les transactions Bitcoin retardées en les incluant dans les blocs plus rapidement.
- Vous pouvez également augmenter les frais de votre transaction en attente si votre portefeuille prend en charge la fonctionnalité Replace-By-Fee (RBF), ce qui peut aider à accélérer son traitement par le réseau Bitcoin.

## Conclusion

Le verrouillage temporel du Bitcoin transforme le Bitcoin d'un simple stockage de valeur passif en un actif productif qui génère des rendements tout en maintenant l'auto-garde. En utilisant le mécanisme CLTV natif de Bitcoin, les détenteurs peuvent participer au consensus de Core, contribuer à la sélection des validateurs et gagner des récompenses CORE, tout en gardant leur Bitcoin en toute sécurité sur la blockchain Bitcoin. Cette intégration illustre comment Core étend l'utilité du Bitcoin sans compromettre ses propriétés de sécurité fondamentales.

Pour un guide détaillé sur la conception des transactions de staking, consultez [ici](./design.md).
