---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Aperçu du Staking sur Core

---

Le staking est une composante fondamentale du mécanisme de consensus Satoshi Plus de Core. Cela permet aux détenteurs de jetons CORE et aux détenteurs de Bitcoin de participer à la sécurisation du réseau et de gagner des récompenses. Contrairement aux systèmes traditionnels de Proof of Stake, l'architecture unique de Core permet deux mécanismes de staking distincts : la délégation de jetons CORE et le verrouillage temporel de Bitcoin, qui, avec la participation des mineurs de Bitcoin, forment la base de la sélection des validateurs et de la sécurité du réseau.

## Fonctionnement du Staking sur la blockchain Core

Le système de staking de Core combine plusieurs méthodes de participation qui contribuent à l'élection des validateurs grâce à un mécanisme de notation hybride. Chaque validateur reçoit un score hybride basé sur trois facteurs : le soutien des mineurs Bitcoin (DPoW), les jetons CORE délégués (DPoS) et le Bitcoin verrouillé temporellement.

### Le staking de jetons CORE

Les détenteurs de jetons CORE peuvent déléguer leurs jetons à des validateurs sans transférer la propriété.

1. Les détenteurs de jetons sélectionnent un validateur auquel déléguer leurs jetons.
2. Lors de la délégation, les jetons restent en la garde du détenteur mais sont verrouillés pour le staking.
3. Les validateurs reçoivent la mise déléguée, ce qui renforce leur position dans l'élection des validateurs.
4. Les récompenses gagnées par les validateurs sont partagées avec les délégateurs proportionnellement à leur mise.

### Stakers de Bitcoin

Les détenteurs de Bitcoin peuvent participer au consensus Satoshi Plus de Core grâce au mécanisme de verrouillage temporel natif de Bitcoin.

1. Les détenteurs de Bitcoin utilisent la fonction CLTV (Check Lock Time Verify) pour verrouiller temporairement leur Bitcoin pendant une période spécifiée.
2. Lors de la création du verrouillage temporel, ils incluent des métadonnées spécifiant le validateur choisi et l'adresse de récompense.
3. Le montant de Bitcoin verrouillé temporairement contribue au score hybride du validateur sélectionné pour l'élection
4. As the validator produces blocks, the Bitcoin holder receives CORE rewards proportional to their timelocked amount
5. Lorsque la période de verrouillage temporaire se termine, le Bitcoin redevient dépensable, le validateur perd ce soutien délégué et le détenteur de Bitcoin ne perçoit plus les récompenses CORE

### Élection des Validateurs

L'ensemble des validateurs est déterminé par un processus électoral utilisant le score hybride.

1. À chaque tour, tous les validateurs reçoivent un score hybride basé sur les jetons CORE délégués, les Bitcoins verrouillés temporairement et le soutien des mineurs de Bitcoin.
2. Les 27 validateurs ayant les scores hybrides les plus élevés sont élus pour faire partie de l'ensemble actif des validateurs.
3. Les validateurs élus produisent des blocs et valident les transactions sur la blockchain Core
4. Les récompenses accumulées pendant chaque tour sont distribuées à la fin du tour
5. Le prochain ensemble de validateurs est déterminé en fonction des scores hybrides mis à jour

## Économie du Staking

**Sources de récompense :**

- **Récompenses de bloc :** De nouveaux jetons CORE sont frappés selon un calendrier fixe de 81 ans avec un taux de réduction annuel de 3,61 %.
- **Frais de transaction :** Une partie des frais des transactions sur la blockchain Core contribue au pool de récompenses de consensus

## l'Importance du staking

Le staking joue plusieurs rôles critiques dans l'écosystème Core :

- **Sécurité :** En exigeant des validateurs qu'ils bénéficient d'un soutien important (en termes de CORE délégués, de Bitcoin timelockés et de soutien des mineurs), le réseau favorise les validateurs ayant des incitations alignées sur celles de l'écosystème plus large.
- **Décentralisation :** L'approche à trois volets pour l'élection des validateurs atténue les vecteurs de centralisation.
- Durabilité économique : Le mécanisme de staking distribue des récompenses à divers participants, incitant à une participation symbiotique.
- **Amélioration de l'utilité de Bitcoin :** En permettant aux détenteurs de Bitcoin de participer au consensus tout en conservant la garde, Core étend l'utilité de Bitcoin au-delà du simple stockage de valeur.

## Dynamiques et Stratégies de Staking

Les participants dans réseau Core peuvent adopter diverses stratégies de staking pour maximiser leurs rendements et leur influence sur le réseau :

- **Performance des validateurs :** Déléguer à des validateurs hautement performants est crucial, car les récompenses ne sont pas accumulées par les délégants auprès de validateurs inactifs ou malveillants.
- **Gestion du Risque :** Diversifier la délégation entre plusieurs validateurs peut aider à réduire les risques liés à la sous-performance ou à l'échec potentiel d'un validateur unique.

## Conclusion

L'architecture de staking de Core représente une innovation significative dans la conception du consensus en reliant Bitcoin et les mécanismes de staking modernes. En permettant aux détenteurs de CORE et de Bitcoin de participer au consensus, Core crée un modèle de sécurité robuste et multicouche qui aligne les incitations entre différents groupes de participants.