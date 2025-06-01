---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Preuve de Travail Déléguée (DPoW)

---

## Aperçu

La Preuve de Travail Déléguée (DPoW) est une pierre angulaire du consensus Satoshi Plus. Ce système tire parti de l'infrastructure minière établie de Bitcoin, l'intégrant au blockchain Core pour renforcer la sécurité sans nécessiter de travail de calcul supplémentaire.

Le DPoW crée une relation mutuellement bénéfique où les mineurs Bitcoin peuvent gagner des récompenses CORE supplémentaires tout en maintenant leurs opérations de minage Bitcoin primaires. En incluant des métadonnées de sélection de validateurs dans les nouveaux blocs Bitcoin minés, les mineurs étendent leur influence au réseau Core sans compromettre leur rôle de sécurité Bitcoin.

<p align="center">![dpow-core-architechture](../../../../static/img/staoshi-plus/DPoW.png)</p>

## Fonctionnement de la DPoW dans Satoshi Plus

Sur le réseau Bitcoin, les mineurs génèrent du hash power pour miner des blocs, sécuriser le réseau et gagner des récompenses Bitcoin. Pour stabiliser les récompenses au fil du temps, les mineurs contribuent souvent à des pools de minage, qui agrègent le hash power pour augmenter les chances de miner des blocs. Le DPoW intègre le minage Bitcoin dans le protocole de sécurité de Core grâce à un système de délégation.

1. **Intégration du minage :** Les mineurs Bitcoin poursuivent leurs activités de minage standard tout en signalant leur soutien à la blockchain Core en incluant des informations spécifiques dans les blocs Bitcoin qu'ils minent, indiquant leur validateur Core préféré.

2. **Métadonnées dans les blocs Bitcoin :** Dans le bloc Bitcoin miné, les mineurs ajoutent des métadonnées dans le champ op_return contenant l'adresse du validateur Core et l'adresse pour recevoir des récompenses en jetons CORE, déléguant ainsi leur influence de minage au réseau Core.

3. **Soutien aux validateurs :** En incluant ces informations, les mineurs délèguent leur puissance de calcul aux validateurs sur Core. Les proportions de hash power délégué sont cruciales pour l'élection des validateurs de Core, influençant directement quels validateurs sont élus pour produire des blocs et sécuriser le réseau.

4. **Relayeurs** : Les relayeurs sont chargés de surveiller le réseau Bitcoin et de transmettre les blocs ainsi que les données de transaction au réseau Core. Un client léger BTC intégré en chaîne traite ces données et transmet les informations de délégation au "Hub de délégation", qui gère toutes les délégations au sein de Core. Lors de chaque tour d'une journée, Core calcule le DPoW pour les validateurs en fonction des délégations de mineurs d'une semaine précédente.

5. **Mécanisme de récompense :** Les mineurs reçoivent des jetons CORE en plus de leurs récompenses Bitcoin régulières, créant un système de double récompense qui incite à la participation sans détourner les ressources du minage Bitcoin.

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

#### **Conclusion**

Le DPoW est un composant essentiel du consensus Satoshi Plus. Il étend les incitations des mineurs Bitcoin pour les aligner sur le mécanisme de consensus de Core. Core bénéficie de la participation des mineurs de Bitcoin à sa sécurité, et les mineurs de Bitcoin reçoivent une meilleure rémunération. Le résultat est un ensemble de mineurs qui sont fortement incités à sécuriser à la fois Bitcoin et Core.