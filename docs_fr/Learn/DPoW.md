---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Preuve de Travail Déléguée (DPoW) dans le mécanisme de consensus Satoshi Plus

---

## Aperçu

La Preuve de Travail Déléguée (DPoW) est un composant fondamental du mécanisme de consensus Satoshi Plus sur la Core Chain. Cette approche innovante adapte le système traditionnel de Preuve de Travail (PoW) utilisé par le Bitcoin, permettant l'intégration des efforts de minage de Bitcoin dans la structure sécurisée d'une plateforme de contrats intelligents. La DPoW maintient la robustesse de la sécurité du Bitcoin tout en améliorant son utilité et les incitations économiques pour les mineurs. Dans le mécanisme de consensus Satoshi Plus, les validateurs sont choisis en fonction d'un score hybride, et ce score hybride est calculé à partir de la Preuve de Travail Déléguée (DPoW) et de la Preuve d'Enjeu Déléguée (DPoS). Dans cette section, nous couvrons en profondeur le fonctionnement et l'importance de la DPoW dans le fonctionnement de Satoshi Plus.

## Fonctionnement de la DPoW dans Satoshi Plus

Sur le réseau Bitcoin, les mineurs de Bitcoin génèrent de la puissance de hachage pour sécuriser le réseau Bitcoin, valider les transactions et gagner des récompenses en BTC. Afin de lisser leurs récompenses dans le temps, les mineurs de Bitcoin contribuent souvent leur puissance de hachage à des pools de minage, qui utilisent la puissance de hachage agrégée pour augmenter les chances globales du pool de miner un bloc de Bitcoin et de recevoir des BTC en retour. La DPoW intègre directement le minage de Bitcoin dans le protocole de sécurité de Core Chain via un système de délégation. Voici une répartition étape par étape de son fonctionnement :

1. **Intégration du Minage**: Les mineurs de Bitcoin poursuivent leurs activités de minage standard, mais avec une étape supplémentaire consistant à signaler leur soutien à Core Chain. Cela se fait en incluant une transaction spéciale dans les blocs de Bitcoin qu'ils minent, qui spécifie le Validateur Core qu'ils souhaitent soutenir.

2. **Métadonnées dans les Blocs Bitcoin**: Dans le bloc de Bitcoin miné, les mineurs ajoutent des métadonnées dans le champ op_return. Ces métadonnées incluent l'adresse du Validateur Core et l'adresse pour recevoir les récompenses en tokens CORE, déléguant ainsi une partie de leur puissance de hachage au réseau Core Chain.

3. **Soutien aux Validateurs**: En incluant ces informations, les mineurs délèguent leur puissance de calcul aux Validateurs sur Core Chain. Ces Validateurs utilisent la puissance déléguée pour participer à la validation et à la création de blocs sur la Core Chain.

4. **Relayeurs**: Les en-têtes de blocs Bitcoin arrivent sur Core Chain via les relayeurs de Core Chain. Chaque relayeur exécute un client léger sur la chaîne (ou utilise un service similaire existant) qui synchronise les blocs minés par le pool de minage Bitcoin avec le réseau Core. Pendant une ronde de 1 jour, le réseau Core calcule la DPoW pour chaque validateur en comptant le nombre de blocs que les mineurs ont délégués à chaque validateur une semaine auparavant. Si la ronde a lieu un jeudi par exemple, Core totalisera la puissance de hachage déléguée à chaque validateur en comptant les blocs du jeudi précédent.

5. **Mécanisme de Récompense**: En retour de leur contribution, les mineurs reçoivent des récompenses supplémentaires sous forme de tokens CORE, en plus des récompenses habituelles de minage de Bitcoin. Ce système de double récompense incite les mineurs à participer au processus DPoW sans avoir besoin de détourner des ressources du minage de Bitcoin.

L'architecture de cette communication inter-chaînes est illustrée dans le diagramme ci-dessous.

![dpow-core-architechture](../../../../static/img/staoshi-plus/dpow.jpg)

## Importance de la DPoW dans Satoshi Plus

- **Sécurité Améliorée**:
  La DPoW tire parti de l'immense puissance de hachage du réseau Bitcoin, qui est le réseau blockchain le plus sécurisé en raison de la participation massive des mineurs et de sa robustesse cryptographique éprouvée. En intégrant cette puissance, Core Chain améliore considérablement sa propre sécurité.

- **Incitations Économiques pour les Mineurs**:
  Les récompenses supplémentaires en tokens CORE créent une nouvelle source de revenus pour les mineurs de Bitcoin, rendant les opérations de minage plus lucratives sans augmenter les coûts opérationnels. Cette incitation est cruciale pour attirer davantage de mineurs à participer à l'écosystème de Core Chain.

- **Efficacité des Ressources**:
  La DPoW permet aux mineurs de maximiser l'utilité de leurs ressources de calcul existantes. En soutenant Core Chain tout en réalisant leurs opérations régulières de minage de Bitcoin, les mineurs peuvent contribuer à deux réseaux simultanément sans dépenses énergétiques supplémentaires.

- **Relation Symbiotique**:
  Ce mécanisme crée une relation symbiotique entre le Bitcoin et la Core Chain. Alors que les mineurs de Bitcoin contribuent à la sécurité de Core Chain, ils améliorent la proposition de valeur globale des deux réseaux. Cette interdépendance aligne les intérêts des parties prenantes sur les deux plateformes.

- **Durabilité**:
  En réutilisant la puissance de hachage déjà dédiée au minage de Bitcoin, la DPoW contribue à un écosystème blockchain plus durable. Elle réduit le besoin de consommation d'énergie supplémentaire qui serait sinon nécessaire pour sécuriser un réseau blockchain distinct.

#### **Conclusion**

La DPoW est une innovation cruciale au sein du mécanisme de consensus Satoshi Plus, mariant les avantages éprouvés en matière de sécurité et de décentralisation de la PoW de Bitcoin avec les capacités avancées de la plateforme de contrats intelligents Core Chain. Cette intégration améliore non seulement la sécurité et l'efficacité économique des deux réseaux, mais favorise également une plus grande participation des mineurs et une meilleure utilisation des ressources, rendant cela comme un élément crucial dans l'évolution de la technologie blockchain.
