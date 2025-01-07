---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Preuve de Travail Déléguée (DPoW) dans le mécanisme de consensus Satoshi Plus

---

## Aperçu

La Preuve de Travail Déléguée (DPoW) est un élément crucial du mécanisme de consensus Satoshi Plus de Core. Ce système exploite la sécurité robuste du minage de Bitcoin, en l'intégrant dans la blockchain Core pour améliorer la sécurité et encourager la participation sans coûts supplémentaires. Voici un aperçu détaillé du fonctionnement de la DPoW et de son importance.

La DPoW permet aux mineurs de Bitcoin de gagner une seconde récompense de bloc en plus de leurs récompenses Bitcoin tout en sécurisant la blockchain Core, créant ainsi une relation symbiotique qui profite aux deux réseaux.

![dpow-core-architechture](../../../../static/img/staoshi-plus/dpow.jpg)

## Fonctionnement de la DPoW dans Satoshi Plus

Sur le réseau Bitcoin, les mineurs de Bitcoin génèrent de la puissance de hachage pour sécuriser le réseau Bitcoin, valider les transactions et gagner des récompenses en Bitcoin. Afin de lisser leurs récompenses dans le temps, les mineurs de Bitcoin contribuent souvent leur puissance de hachage à des pools de minage, qui utilisent la puissance de hachage agrégée pour augmenter les chances globales du pool de miner un bloc de Bitcoin et de recevoir des Bitcoin en retour. DPoW integrates Bitcoin mining directly into the Core's security protocol through a delegation system. Voici une répartition étape par étape de son fonctionnement :

1. **Mining Integration**: Bitcoin miners continue their standard mining activities but with the additional step of signaling their support for Core blockchain. Cela se fait en incluant une transaction spéciale dans les blocs de Bitcoin qu'ils minent, qui spécifie le Validateur Core qu'ils souhaitent soutenir.

2. **Métadonnées dans les Blocs Bitcoin**: Dans le bloc de Bitcoin miné, les mineurs ajoutent des métadonnées dans le champ op_return. This metadata includes the address of the Core Validator and the address for receiving CORE token rewards, effectively delegating a portion of their hashing power to the Core network.

3. **Validator Support**: By including this information, miners delegate their computational power to Validators on Core. These Validators use the delegated power to participate in the Core blockchain's version of block validation and creation.

4. **Relayers**: Relayers are responsible for monitoring the Bitcoin network and transmitting blocks and transaction data to the Core network. Within the Core network, an on-chain embedded BTC light client processes the incoming data from relayers and forwards the delegation information (including hash power and Non custodial staking) to the "Delegation Hub." The Delegation Hub serves as the central component responsible for managing and overseeing delegations within the Core network.  During a 1-day round, the Core network calculates the DPoW for each validator by counting the number of blocks the miners delegated to each validator _one week prior_. If the round occurs on a Thursday, for example, Core will tabulate the hash power delegated to each validator by counting blocks from _last_ Thursday.

5. **Mécanisme de Récompense**: En retour de leur contribution, les mineurs reçoivent des récompenses supplémentaires sous forme de tokens CORE, en plus des récompenses habituelles de minage de Bitcoin. Ce système de double récompense incite les mineurs à participer au processus DPoW sans avoir besoin de détourner des ressources du minage de Bitcoin.

## Processus étape par étape

1. **Minage des Blocs Bitcoin :** Les mineurs de Bitcoin continuent leur rôle principal de minage de blocs sur le réseau Bitcoin en utilisant la Preuve de Travail (PoW).

2. **Inclusion des Informations de Délégation :** Les mineurs ajoutent deux informations supplémentaires dans le champ op_return de la transaction coinbase :

- **Adresse du Validateur Core :** L'adresse du validateur Core à qui déléguer la puissance de hachage.
- **Adresse de Récompense en Tokens CORE :** L'adresse où le mineur souhaite que ses récompenses en tokens CORE soient envoyées.

3. **Délégation de la Puissance de Hachage :** Cette action délègue la puissance de hachage du mineur au validateur Core choisi, réutilisant le travail existant sans encourir de coûts supplémentaires.

4. **Élection des Validateurs :** Les validateurs avec une puissance de hachage déléguée plus élevée ont une plus grande chance d'être élus dans l'ensemble des validateurs.

5. **Récompenses des Validateurs :** Les validateurs gagnent des récompenses pour le traitement des blocs, prennent une petite commission et transfèrent les récompenses à leurs délégateurs, y compris les mineurs de Bitcoin ou les pools de minage qui leur ont délégué de la puissance de hachage.

6. **Obtention des Récompenses :** Les mineurs ou les pools de minage reçoivent des récompenses en tokens CORE en plus de leurs récompenses en Bitcoin, offrant ainsi des incitations supplémentaires.

## Importance de la DPoW dans Satoshi Plus

- **Sécurité Améliorée :** En intégrant la PoW de Bitcoin, Core bénéficie de l'infrastructure de sécurité inégalée de Bitcoin, rendant le réseau Core plus résilient.

- **Incitations Augmentées :** Les mineurs de Bitcoin gagnent une source de revenus supplémentaire grâce aux récompenses en tokens CORE, améliorant leur rentabilité globale sans coûts énergétiques supplémentaires.

- **Relation Symbiotique :** Ce système promeut des avantages mutuels pour les réseaux Bitcoin et Core, encourageant un environnement coopératif qui renforce l'écosystème blockchain.

- **Efficacité des Ressources**: La DPoW permet aux mineurs de maximiser l'utilité de leurs ressources de calcul existantes. By supporting security of Core ecosystem while conducting their regular Bitcoin mining operations, miners can contribute to two networks simultaneously without additional energy expenditure.

#### **Conclusion**

Le DPoW est une innovation essentielle au sein du mécanisme de consensus Satoshi Plus, il étend les incitations des mineurs du réseau Bitcoin pour s'aligner sur le mécanisme de consensus Satoshi Plus de Core. Core bénéficie de la participation des mineurs de Bitcoin à sa sécurité, et les mineurs de Bitcoin reçoivent une meilleure rémunération. Le résultat est un ensemble de mineurs qui sont fortement incités à sécuriser à la fois Bitcoin et Core.
