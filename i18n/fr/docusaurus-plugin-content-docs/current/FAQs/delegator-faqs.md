---
sidebar_label: FAQ des délégateurs CORE
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ des délégateurs CORE

---

### 1. Qu'est-ce qu'un délégateur sur la blockchain Core ?

Dans l'écosystème de Core, la délégation est un mécanisme fondamental qui permet aux mineurs de BTC ainsi qu'aux détenteurs de BTC et de tokens CORE de participer activement à la sécurité et à la gouvernance du réseau sans être eux-mêmes des validateurs. Ce processus implique que les délégateurs confient leur pouvoir de vote et opérationnel à des validateurs, qui utilisent ensuite les ressources déléguées (puissance de hachage BTC, BTC et CORE) pour participer au processus de consensus et aux décisions de gouvernance du réseau.

### 2. Quels sont les différents types de délégations possibles sur la Core blockchain grâce au Mécanisme de Consensus Satoshi Plus ?

1. **Délégation de BTC/CORE aux validateurs :** Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs tokens. En retour, les validateurs utilisent la puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.
2. **Délégation de puissance de hachage des mineurs BTC :** Les mineurs de Bitcoin peuvent déléguer une partie de leur puissance de hachage à des validateurs sur le réseau Core. Cette forme unique de délégation utilise la sécurité et le travail déjà effectués sur le réseau Bitcoin pour renforcer la sécurité de la blockchain Core.

### 3. Quels sont les avantages de déléguer des tokens BTC ou CORE ?

En déléguant des tokens CORE à des validateurs, les détenteurs de CORE peuvent aider à sécuriser le réseau et partager les récompenses du système. Veuillez consulter le [guide](../stake-and-delegate/delegating-core.md) détaillé sur la délégation de CORE pour plus d'informations.

<!-- ### 4. What are the minimum staking period requirements for BTC and BTC Hash Power delegation?
For BTC and BTC hash power delegation the minimum requirement is that of **10** days, i.e., you cannot un-delegate your stake prior to **10** days. Technically, (\`CLTV timestamp - transaction confirmation timestamp > 10 days\`). -->

### 4. Y a-t-il des frais associés à la délégation de BTC, de tokens CORE ou de puissance de hachage ?

Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs tokens. En retour, les validateurs utilisent la puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.

### 5. Comment déléguer de la puissance de hachage sur le réseau Core ?

En déléguant de la puissance de hachage à des validateurs, les mineurs de BTC peuvent aider à sécuriser le réseau et partager les récompenses du système. Veuillez consulter le [guide](../stake-and-delegate/delegating-hash.md) détaillé sur la délégation de puissance de hachage pour plus d'informations.

### 6. Comment un délégateur peut-il maximiser ses récompenses ?

Pour maximiser leurs récompenses, les délégateurs doivent rechercher des validateurs qui offrent des paiements généreux, mais qui n'ont pas déjà un montant important de tokens CORE ou de puissance de hachage déléguée. Moins un validateur a de tokens stakés, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'en a qu'un, il représente 50 % de la délégation totale de ce validateur. S'il délègue à un validateur avec 99 tokens CORE, il ne représente que 1 % de la délégation totale de ce validateur. Les paiements étant en partie déterminés par le pourcentage de la mise totale représentée par chaque délégateur, ils seront incités à trouver des validateurs avec de petites délégations.

### 7. Peut-on changer de validateur après avoir délégué ?

- **Puissance de hachage :** la puissance de hachage est déléguée séparément à chaque bloc BTC miné, et une fois déléguée, aucun autre transfert ne peut être effectué.

- **Délégation de BTC :** les utilisateurs verrouillent leur BTC et désignent un validateur pour le staking sur Core. Ils peuvent transférer leur mise BTC à d'autres validateurs, mais perdront les récompenses de la journée en cours.

- **Délégation de CORE :** les utilisateurs peuvent transférer à d'autres validateurs et continueront de recevoir les récompenses de la journée en cours.

### 8. Combien de temps faut-il pour commencer à recevoir des récompenses après la délégation de BTC, de CORE ou de puissance de hachage Bitcoin ?

En dehors des frais de transaction/gas, Core ne facture pas de frais supplémentaires pour la délégation de la puissance de hachage BTC, du BTC ou des tokens CORE.

### 9. Comment les délégateurs peuvent-ils réclamer leurs récompenses ?

- **Délégateurs de puissance de hachage BTC :** La blockchain Core utilise les enregistrements de blocs du réseau Bitcoin d'il y a sept jours pour les calculs du score hybride. De plus, après qu'un validateur soit élu, les récompenses de staking sont distribuées le deuxième jour du tour suivant. Ainsi, après avoir délégué leur puissance de hachage, les mineurs/pools de minage verront leur puissance de hachage utilisée dans le calcul de l'élection des Validateurs N+7 jours plus tard, et les récompenses seront réclamables N+8 jours plus tard.

- **Délégateurs de CORE/BTC :** après avoir délégué leur CORE/BTC, leurs actifs seront utilisés pour le calcul de l'élection des validateurs pour le prochain tour et ils pourront réclamer leurs récompenses un tour plus tard.

### 10. Quand les récompenses sont-elles versées ?

Consultez le guide détaillé [ici](../stake-and-delegate/delegating-core.md) sur la façon de Réclamer les Récompenses obtenues grâce au staking de BTC et de CORE. En cas de délégation de puissance de hachage BTC, consultez [ici](../stake-and-delegate/delegating-hash.md).

### 11. Que se passe-t-il si un validateur cesse de fonctionner ou est pénalisé ?

Les récompenses sont versées à la fin de chaque tour de consensus sur la blockchain Core.

### 12. Que se passe-t-il si un validateur cesse de fonctionner ou est pénalisé ?

Une mauvaise performance ou une mauvaise conduite des validateurs peut entraîner des pénalités telles que le slashing des mises et l'emprisonnement. Notez que les délégateurs ne perdront pas leurs actifs stakés, les pénalités sur les validateurs n'affecteront que les récompenses quotidiennes des délégateurs.
