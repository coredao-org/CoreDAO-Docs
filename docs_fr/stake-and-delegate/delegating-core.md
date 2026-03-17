---
sidebar_label: Délégation de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Délégation de Core

---

En déléguant des tokens CORE aux validateurs, les détenteurs de CORE contribuent à la sécurité du réseau et peuvent participer aux récompenses du système.

## Sélection des Validateurs

Les délégateurs peuvent utiliser le site de staking de Core pour gérer leurs positions :

| Mainnet                                                      | Testnet                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| [Site de staking pour le Mainnet](https://stake.coredao.org) | [Site de staking pour le Testnet](https://stake.test.btcs.network) |

Les informations sur les validateurs sont affichées sur le site de staking, avec un classement des validateurs basé sur leur score hybride actuel. Chaque terme clé est expliqué sur chaque en-tête de colonne sur le site, visionnable en cliquant sur le symbole `i` à côté de l'en-tête.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-1.avif)

Au début de chaque cycle, le consensus Satoshi Plus sélectionne les validateurs selon leurs scores hybrides. Les nœuds sont classés par ordre décroissant de ce score, et les **23** meilleurs nœuds forment l'ensemble des validateurs actifs pour le cycle en cours. Le score hybride est calculé à l'aide de la formule suivante :

`S = hash_percentage * m + coin_percentage * (1 - m)`

Où :
`coin_percentage` pourcentage des tokens **CORE** et **BTC** stakés
`m` est un facteur de pondération dynamique initialement fixé à **2/3**

Les informations sur les validateurs sont actualisées quotidiennement à **00:00 UTC**, au début de chaque cycle.

## Délégation

Sélectionner le nom d'un validateur ouvre une page avec plus d'informations à son sujet comme montré ci-dessous.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-2.avif)

Pour déléguer au validateur, cliquez sur le bouton **Delegate→DelegateCoin** en haut à gauche. Entrez le montant de dépôt dans le champ prévu et sélectionnez 'Delegate' pour envoyer la transaction de délégation, comme montré ci-dessous. Pour exécuter la transaction, vous devrez la signer et l'envoyer via MetaMask ou un autre portefeuille web compatible.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-3.avif)

Après avoir délégué avec succès à un validateur, vous pouvez consulter votre montant total délégué sous l'onglet **Coin**, et vos transactions de délégation passées sous l'onglet **CoinRecord**. Il est possible de déléguer à plus d'un validateur.

Pour retirer la délégation de vos tokens CORE, sélectionnez simplement le bouton **Undelegate→UndelegateCoin** et signez la transaction.

## Réclamation des récompenses

Vous pouvez consulter les informations sur vos délégations actives en sélectionnant **My Staking** en haut à droite du site de staking. Les récompenses de délégation (staking) sont distribuées après chaque cycle à 00:00 UTC chaque jour.

Pour réclamer vos récompenses, sélectionnez simplement le bouton **Claim** en haut à gauche et signez la transaction. Après l'envoi de la transaction, vous recevrez les récompenses à l'adresse liée à votre compte. Les transactions de réclamation passées sont répertoriées dans l'onglet **Claim** du site, comme indiqué ci-dessous.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-4.avif)
