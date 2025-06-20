---
sidebar_label: Mécanique
hide_table_of_contents: false
sidebar_position: 2
---

# Mécanique de Core

---

## Tableau de bord Core Ignition

<p align="center">
  <img width="500" alt="Ignition_Dashboard_new" src="https://github.com/user-attachments/assets/7956ac48-8450-4cdc-a001-a9a6be4ae309" />
</p>

### Profil Core Ignition

Le Profil Core Ignition est un tableau de bord personnalisé connecté au compte utilisateur, permettant aux utilisateurs de mettre en valeur leurs réalisations et leur engagement. Il permet aux utilisateurs de :

1. Afficher un nom d'utilisateur et un avatar personnalisés
2. Connecter X (Twitter) et afficher sa photo de profil
3. Suivre le statut d'engagement de haut niveau
4. Afficher les badges obtenus

Pour mettre à jour le profil utilisateur, cliquez sur le menu à trois points du profil.

<p align="center">
  <img width="288" alt="Ignition Profile meatballs menu" src="https://github.com/user-attachments/assets/d7523504-df48-4f39-93f3-94e472a03a9a"/>
</p>

### Solde du Portefeuille Ignition

Le solde du Portefeuille Ignition affiche un sous-ensemble d'actifs autorisés que le compte détient sur Core. Les utilisateurs peuvent gagner des Sparks (points) en transférant/détenant des actifs avec un boost supplémentaire de Sparks sur Core.

### Solde dApp Ignition

Le solde dApp Ignition reflète les actifs que l'utilisateur a déposés dans les dApps autorisées sur Core. Les utilisateurs peuvent également augmenter les Sparks en interagissant avec les dApps autorisées sur Core.

### Actifs Autorisés

Liste des actifs de jetons éligibles pour gagner des Sparks sur Core Ignition : Reportez-vous à la section [Comment booster les multiplicateurs](#how-to-boost-multipliers) pour la liste complète.

### Actifs Autorisés

Liste des applications décentralisées où les interactions des utilisateurs contribuent à gagner des Sparks sur Core Ignition : Consultez l'onglet "Explorer les dApps" (https://ignition.coredao.org/dashboard?tab=explore)'sur le tableau de bord Ignition pour obtenir tous les détails.

### Les pools autorisés (whitelisted pools)

Pools de liquidité d'une dApp DEX autorisée qui inclut au moins un jeton autorisé, éligible pour les Sparks sur Core Ignition.

---

## Tableau de bord Core Ignition

### 1. Tableau de classement

Classement des utilisateurs basé sur une combinaison d'actifs et d'engagements sur les dApps, de nombre de transactions et de volume de transactions, récompensant la contribution globale à l'écosystème.

<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 51 44 PM" src="https://github.com/user-attachments/assets/39d78e16-e6a1-4787-b0f3-14d4dfb1f112" />
</p>

### 2. Classement d'activité

Classement des utilisateurs en fonction du nombre de transactions et du volume, récompensant à la fois l'activité fréquente et les mouvements de grande valeur. Conçu pour donner aux utilisateurs quotidiens une reconnaissance équitable grâce aux Spark Boosts, quelle que soit la taille de leur portefeuille.

<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 52 02 PM" src="https://github.com/user-attachments/assets/674c4743-7299-4d75-877f-823621182cc6" />
</p>

---

## Comment Booster les Sparks

Les Sparks sont des points cumulatifs reflétant le niveau d'activité des utilisateurs dans l'écosystème Core, mis à jour quotidiennement à 00:00 UTC et apparaissant sur le classement. Les utilisateurs gagnent des Sparks quotidiennement grâce à :

#### 1. Actifs dans le solde du portefeuille Ignition

Le montant et le type d'actifs autorisés que les utilisateurs transfèrent vers Core seront reflétés dans le Solde du Portefeuille Ignition de l'utilisateur. En détenant ces actifs sur Core, les utilisateurs gagneront des Sparks. Les Sparks sont calculés quotidiennement en fonction du solde du portefeuille de l'utilisateur.

#### 2. Activités avec l'écosystème Core dApp

Les utilisateurs peuvent également augmenter les Sparks en interagissant avec les dApps autorisées sur Core. Chaque activité on-chain avec ces dApps contribuera des points Spark au compte utilisateur. Plus de détails seront mis à jour bientôt.

| Type de transaction                | Sparks par transaction | Maximum de Sparks par jour |
| ---------------------------------- | ---------------------- | -------------------------- |
| Provision de Liquidité             | 800                    | 8,000                      |
| Emprunt                            | 400                    | 12,000                     |
| Prêt                               | 200                    | 4,000                      |
| Échange ou Swap                    | 100                    | 3,000                      |
| Interaction avec les dApps de jeux | 50                     | 1,000                      |
| Autres activités                   | 50                     | 2,000                      |
| Coretoshi NFT, Doopidoo            | 200                    | Illimité                   |

#### 3. Campagne suivie / Campagne participante

Core Ignition proposera des campagnes flash ou à durée limitée de manière continue, offrant aux utilisateurs des opportunités spéciales pour supercharger les Sparks. Restez connecté en vérifiant les sections de campagnes intégrées à l'application et en suivant les annonces officielles de Core sur [X (Twitter)](https://x.com/Coredao_Org) pour les dernières mises à jour.

#### 4. Invitez de nouveaux utilisateurs à rejoindre Ignition

Pour les nouveaux sur Core Ignition, transférez des actifs autorisés d'une valeur de 50 USDT vers Core pour débloquer un lien d'invitation permanent. Pour les utilisateurs qui se sont inscrits lors de la Saison 2, le code d'invitation est automatiquement débloqué. En invitant de nouveaux utilisateurs à Core Ignition, vous recevrez 10 % des Sparks quotidiens gagnés par les filleuls de premier degré et 2 % des filleuls de second degré. Veuillez noter qu'un plafond peut s'appliquer au maximum de Sparks que chaque utilisateur peut gagner via les parrainages.

---

## Comment Booster les Multiplicateurs

Les multiplicateurs sont des variables dynamiques pour multiplier les points Spark. Le multiplicateur affiché sur le tableau de bord de l'utilisateur reflète le multiplicateur actuellement appliqué à l'ensemble des actifs de l'utilisateur. Ce multiplicateur est calculé en faisant la moyenne des multiplicateurs répartis sur les actifs. Deux types de multiplicateurs de base qui affectent les points Sparks. Indépendamment de toute campagne spéciale:

- **Multiplicateurs de jetons**:
  Ces multiplicateurs augmentent les points gagnés en fonction des activités liées aux jetons et des avoirs en jetons.
- **Multiplicateurs de volume**
  Ces multiplicateurs amplifient les points gagnés grâce à des activités liées au volume.

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/4f7ceee6-6a93-4cce-a382-5e6002ce2819"/>
</p>

### 1. Multiplicateurs de jetons

Les utilisateurs peuvent bénéficier de multiplicateurs de jetons de base pour les actifs sur liste blanche détenus dans leurs portefeuilles ou déposés dans diverses applications décentralisées (dApps). Différents jetons sur liste blanche sont associés à des multiplicateurs spécifiques, qui varient en fonction du type d'activité effectuée avec ces applications décentralisées (dApps), comme détaillé ci-dessous :

| Actifs Autorisés                                                            | Actifs du Portefeuille | Prêt                 | Emprunt              | Provision de Liquidité |
| --------------------------------------------------------------------------- | ---------------------- | -------------------- | -------------------- | ---------------------- |
| stCORE, CLND                                                                | 1x                     | 2.5x | 3x                   | 3.5x   |
| USDT, USDC                                                                  | 1x                     | 1.5x | 2x                   | 3x                     |
| CORE, WCORE                                                                 | 1x                     | 1.5x | 2x                   | 2.5x   |
| wETH, solvBTC.CORE                                          | n/a                    | 1.4x | 1.6x | 1.8x   |
| aBTC, BTCB, nBTC, oBTC, pumpBTC, rBTC, suBTC, uBTC, wBTC                    | n/a                    | 1.2x | 1.4x | 1.6x   |
| BTC.B, SolvBTC.b, SolvBTC.m | n/a                    | 1x                   | 1.2x | 1.6x   |

> _**Exemple 1 :**_
> Si l'utilisateur détient 10 stCORE dans le solde du portefeuille Ignition, l'utilisateur obtient :  Daily Sparks = Montant stCORE \* Prix stCORE \* Multiplicateur = 10 stCORE \* 1,5 $ (supposé) \* 1 = 15

> _**Exemple 2 :**_
> Si l'utilisateur prête 20 stCORE dans un protocole de prêt, l'utilisateur obtient : Daily Sparks = Montant stCORE \* Prix stCORE \* Multiplicateur = 20 stCORE \* 1,5 $ (supposé) \* 2,5 = 75

### 2. Multiplicateurs de volume

Multiplicateurs basés sur le volume de trading
Les utilisateurs qui interagissent avec les pools Autorisés reçoivent des multiplicateurs basés sur l'équivalent en USD de leur volume de trading par jour. La valeur du multiplicateur augmente progressivement à mesure que le volume de trading augmente, avec différentes valeurs de multiplicateur appliquées selon des seuils de volume spécifiques comme suit :

| Plage de volume                    | Multiplicateurs      |
| ---------------------------------- | -------------------- |
| $0 ~ >$100         | 1x                   |
| $100 ~ >$1,000     | 1.5x |
| $1,000 ~ >$10,000  | 2x                   |
| $10,000 ~ >$50,000 | 2.5x |
| 50 000 $ et plus                   | 3x                   |

> **Exemple de calcul**
> Un utilisateur qui négocie l'équivalent de 51 000 $ en volume par jour recevra :
> Sparks de volume quotidien :
> (51 000 - 50 000) \* 3x +
> (50 000 - 10 000) \* 2,5x +
> (10 000 - 1 000) \* 2x +
> (1 000 - 100) \* 1,5x +
> 100 \* 1x = 122 450 Sparks.
> Cela montre comment les multiplicateurs s'appliquent à différentes tranches de volume pour calculer les récompenses.

Découvrez des opportunités de Multiplicateurs spécifiques dans la section Explorer les dApps :

<p align="center">
  <img width="500" alt="dApp tab" src="https://github.com/user-attachments/assets/a2067f6d-0202-474f-8acb-c9cd2d4007e9"/>
</p>

En plus de détenir des tokens stratégiques et de déployer des actifs dans diverses dApps, les utilisateurs peuvent également gagner des Multiplicateurs supplémentaires en effectuant des actions à partir de campagnes spéciales. Les multiplicateurs provenant des campagnes peuvent se cumuler avec les multiplicateurs de base soulignés ci-dessus pour augmenter davantage les Sparks. Les multiplicateurs de base sont susceptibles de changer sans préavis.

---

## Les détenteurs de NFT Coretoshi

Avec la nouvelle couche d'attribution Coretoshi, les détenteurs de NFT Coretoshi bénéficient désormais d'avantages supplémentaires :

1. 200 Sparks supplémentaires par transaction [sans limite] (#2-activities-with-core-ecosystem-dapp);
2. Multiplicateur de Sparks supplémentaire de 1,5x
  Un multiplicateur de Sparks supplémentaire de 1,5x est automatiquement appliqué en plus du multiplicateur de volume existant des utilisateurs.

> Exemple de calcul :
> Si un détenteur de Coretoshi négocie l'équivalent de 51 000 $ en volume par jour, ce détenteur recevra :
> Sparks de volume quotidien :
> 1,5x \* [(51 000 - 50 000) \* 3x +
> (50 000 - 10 000) \* 2,5x +
> (10 000 - 1 000) \* 2x +
> (1 000 - 100) \* 1,5x +
> 100 \* 1x] = 183 675.

<p align="center">
  <img width="500" alt="Coretoshi_Attribution" src="https://github.com/user-attachments/assets/14619a45-9244-433a-89b5-195e7fa10dc0" />
</p>

Visitez le blog (https://coredao.org/explore/blog/coretoshi-nft-sparks-multiplier-core-ignition-rewards)pour plus de détails et de mises à jour sur les nouveaux avantages.

---

## Réduction des Sparks

La réduction des Sparks garantit des récompenses équitables
La réduction des Sparks assure des récompenses équitables en réduisant les Sparks pour les utilisateurs qui deviennent inactifs, encourageant ainsi une participation active et régulière dans l'écosystème. Avertissement et réduction des Sparks
Les utilisateurs sont avertis si leur activité baisse considérablement. Les Sparks ne sont réduits qu'après des violations répétées. Cependant, toute nouvelle activité arrête immédiatement la réduction des Sparks.

### 1. Mécanisme de réduction :

- Les utilisateurs inactifs perdent des Sparks :
  Si un utilisateur gagne 90 % de Sparks en moins que sa moyenne pendant une semaine, les Sparks sont réduits à partir de la 2e violation.
- La réduction augmente avec le temps
- Avertissements avant la réduction
  Les utilisateurs reçoivent des avertissements avant que la réduction des Sparks ne soit appliquée, leur donnant ainsi la possibilité de rétablir leur activité et d'éviter les pénalités.
- Le mécanisme de réduction se déclenche après 1 mois d'inscription.
- Calcul de la réduction chaque dimanche

### 2. Critères de violation :

Critère de violation :
Si la moyenne quotidienne de Sparks pour la semaine est inférieure à 10 % de la moyenne quotidienne de Sparks pour la saison, cela constitue une violation pouvant entraîner une réduction des Sparks.

### 3. Critères de réduction :

- Sparks accumulés totaux \* (0,9^nombre de violations - 1)
- 1ère violation : Sparks totaux \* 0,9^0 = Pas de réduction
- 2e violation : Sparks totaux \* 0,9^1 = Réduction de 10%
- 3e violation : Sparks totaux \* 0,9^2 = Réduction de 19%

> _**Exemple de calcul :**_
> En supposant qu'un utilisateur avait 50 000 Sparks au début de la saison 3 et aucun Spark depuis lors :
>
> - 1ère violation : Pas de réduction
> - 2e violation : 50 000 - 50 000 \* (0,9^1) = 5 000 Sparks sont déduits
> - 3e violation : 45 000 - 45 000 \* (0,9^2) = 8 550 Sparks sont déduits
> - 4e violation : 36 450 - 36 450 \* (0,9^3) = 9 878 Sparks sont déduits

Visitez le blog(https://coredao.org/explore/blog/core-ignition-season-3-updates) pour plus de détails.