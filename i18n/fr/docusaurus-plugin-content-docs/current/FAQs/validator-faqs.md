---
sidebar_label: FAQ des Validateurs Core
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ des Validateurs Core

---

### 1. Qu'est-ce qu'un validateur dans l'écosystème Core ?

Dans l'écosystème de Core, un "validateur" fait référence aux nœuds ou participants du réseau blockchain qui sont responsables de la vérification, de la validation et de l'ajout de nouvelles transactions à la blockchain. Les validateurs jouent un rôle essentiel dans la maintenance et la sécurité du réseau.

### 2. Comment devenir un validateur ?

- 1. Pour vous enregistrer en tant que validateur sur Core, vous devez exécuter un nœud complet en mode validateur. Veuillez lire les guides sur la [configuration des nœuds validateurs](../Node/config/validator-node-config.md) et l'[exécution des nœuds validateurs](../Node/validator/setting-up-validator.md) pour obtenir des informations sur la configuration.
  2. Ensuite, le moyen le plus simple d'enregistrer un nouveau validateur est d'utiliser l'un de nos sites Web de staking :
    1. [Site de staking pour le Mainnet](https://stake.coredao.org)
    2. [Site de staking pour le Testnet](https://stake.test.btcs.network)
  3. Connectez votre portefeuille en sélectionnant **Connect Wallet** en haut à droite.
  4. Une fois connecté, le bouton **Register** devrait apparaître en haut à droite. En sélectionnant **register** le formulaire suivant s'affiche :

![register-validator](../../../../../static/img/validator/register/validator-register-1.avif)

Fournissez les informations pour chaque champ du formulaire :

- **Adresse de consensus:** l'adresse du validateur que vous avez définie lors de l'initialisation de votre nœud complet validateur.
- **Adresse de frais :** l'adresse utilisée pour collecter les frais de commission.
- **Commission :** les revenus sont partagés entre le validateur et ses délégateurs, avec la commission déterminant le pourcentage de revenu pris par le validateur.
- **Dépôt total :** le dépôt en CORE remboursable, bloqué pendant la prestation des services de validation. Sur le testnet, le montant minimum est de **10 000 tCORE2**. Sur le mainnet, le montant minimum est de **10 000 CORE**.
  1. Une fois les informations saisies, sélectionnez **Register** pour vous enregistrer en tant que validateur.
  2. Pour vérifier rapidement si votre nœud complet a bien été enregistré comme validateur, ouvrez le fichier de log et recherchez le message d'erreur "unauthorized validator". Cette erreur se produit lorsque le nœud est enregistré mais pas encore élu au sein de l'ensemble des validateurs.

![validator-logs](../../../../../static/img/validator/register/validator-register-2.avif)

### 3. Quelles sont les exigences matérielles/logiciels pour exécuter un nœud validateur sur Core ?

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de la blockchain Core.

**Exigences logicielles :** Actuellement, un nœud complet Core ne peut fonctionner que sur Mac OS X et Linux.

**Spécifications matérielles pour le Testnet**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 4 cœurs CPU                                                                                                                                  |
| RAM              | 8 Go                                                                                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

#### **Spécifications matérielles pour le Mainnet**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 8 cœurs CPU                                                                                                                                  |
| RAM              | 32 Go                                                                                                                                        |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

For more details, refer to [Full Node Confgiurations Guide](../Node/config/full-node.md)

### 4. Quel est le montant minimum de tokens CORE requis pour devenir validateur ?

Sur le réseau Core, les validateurs doivent staker un certain montant minimum de tokens CORE, qui est verrouillé pendant que le nœud validateur fournit ses services. Sur le testnet, le montant minimum est de **10 000 tCORE2**. Sur le mainnet, le montant minimum est de **10 000 CORE**.

### 5. Comment les validateurs sont-ils récompensés dans l'écosystème Core ?

Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels. Les validateurs de la Core Chain fonctionnent selon un système de tourniquet, et chaque validateur actif reçoit à peu près le même montant de récompenses à chaque tour. Il existe deux catégories de récompenses de validateur:

1\. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;

2\. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base et les frais de transaction sont calculés et distribués lorsque le dernier bloc d'un tour est miné. Actuellement, **90 %** des récompenses vont aux validateurs et **10 %** sont alloués au Contrat de Récompense du Système. Des 90 % payés aux validateurs, un pourcentage est prélevé comme commission par le validateur avant qu'il ne verse des récompenses à ses délégateurs. La part que les validateurs gardent pour eux-mêmes (frais de commission) sera directement versée à leurs adresses de frais à la fin de chaque tour. Les validateurs sont tenus de partager les récompenses avec les délégués qui ont staké du BTC, CORE ou délégué de la puissance de hachage à leur profit. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

### 6. Quand les récompenses sont-elles versées ?

Le cycle de distribution des récompenses de Core est actuellement fixé à **1 jour**. Chaque jour, les **27** validateurs avec les meilleurs scores hybrides sont élus pour former l'ensemble des validateurs actifs responsables de la production des blocs sur le réseau Core pendant tout le tour. À la fin de chaque tour, les récompenses accumulées sont calculées et distribuées.

### 7. Quels sont les risques/pénalités pour être un validateur ?

Voici un aperçu détaillé des risques et pénalités auxquels les validateurs peuvent faire face dans l'écosystème de Core :

1. **Risques de slashing :** les validateurs peuvent subir un slashing pour des actions comme la double signature ou le non-respect de leurs devoirs, ce qui entraîne la perte d'une partie de leurs tokens CORE stakés.
2. **Risque de blocage de mise et de liquidité :** les validateurs doivent verrouiller des tokens CORE comme garantie, ce qui ne peut pas être accédé pendant les périodes de blocage, posant un risque de liquidité.
3. **Emprisonnement des validateurs :** les validateurs sous-performants ou en violation du protocole peuvent être temporairement retirés du groupe de validateurs, les empêchant de participer au consensus et de gagner des récompenses.
4. **Perte de délégation :** les délégateurs peuvent retirer leur soutien si un validateur performe mal ou est fréquemment pénalisé.
5. **Risques opérationnels et de sécurité :** les validateurs doivent maintenir des opérations sûres et efficaces 24h/24. Des défaillances opérationnelles ou des violations de sécurité peuvent entraîner des dommages financiers et réputationnels.

### 8. Comment fonctionne le processus d'élection des validateurs sur l'écosystème Core ?

Le processus d'élection des validateurs dans le mécanisme Satoshi Plus sur le réseau Core implique différentes étapes qui intègrent des éléments de Preuve de Travail (PoW) et de Preuve d'Enjeu (PoS) :

1. **Délégation de staking :** les détenteurs de tokens CORE et BTC délèguent leurs tokens à des candidats validateurs, influençant l'élection avec leurs tokens stakés.
2. **Délégation de puissance de hachage :** les mineurs de Bitcoin contribuent à la sélection des validateurs en allouant une partie de leur puissance de hachage.
3. **Sélection et score des validateurs :** les validateurs sont choisis en fonction d'un score hybride combinant la puissance de hachage déléguée de Bitcoin et les tokens stakés (CORE et BTC). Le score hybride de chaque validateur est calculé sur la base de :

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Où :

- rHp et tHp représentent respectivement la puissance de hachage déléguée à un validateur et la puissance de hachage totale.
- rSp et tSp représentent respectivement les tokens CORE stakés pour un validateur et le total des tokens CORE stakés.
- rBp et tBp représentent respectivement les tokens BTC délégués à un validateur et le total des tokens BTC stakés.
- m et n sont des facteurs dynamiques ajustant le poids de la puissance de hachage et de la puissance de vote des tokens BTC par rapport aux tokens CORE.

4. **Formation du groupe de validateurs :** Les **27** validateurs ayant les meilleurs scores hybrides sont sélectionnés pour le tour suivant.

### 9. Qu'est-ce que le slashing, et quels sont les frais de slashing appliqués sur la blockchain Core ?

Le "slashing" est une pénalité appliquée aux validateurs pour mauvaise conduite ou manquements à leurs devoirs. Dans le réseau Core, le slashing peut affecter les récompenses et les mises déposées.

- **Slashing des récompenses :** si un validateur ne parvient pas à miner 50 blocs consécutifs, toutes les récompenses en tokens CORE accumulées sont perdues. L'impact est plus important si l'échec se produit plus tard dans le tour, car plus de récompenses auraient été accumulées.
- **Slashing du dépôt et emprisonnement :** ne pas miner **150** blocs consécutifs entraîne la perte de **10 %** du dépôt du validateur et un **emprisonnement de trois jours**, pendant lesquels il ne peut pas être élu dans le groupe de validateurs.
- **Interdiction permanente pour double signature :** la double signature, c'est-à-dire la signature de deux blocs différents à la même hauteur, entraîne des conséquences sévères, y compris le slashing de toutes les récompenses, la perte du dépôt entier du validateur et une interdiction permanente du réseau, c'est-à-dire un emprisonnement à vie.

### 10. Quand les validateurs sont-ils emprisonnés ? Quelle est la durée ?

Il y a deux scénarios où les validateurs peuvent être emprisonnés.

1. Ne pas miner **150** blocs consécutifs entraîne la perte de **10 %** du dépôt du validateur et un emprisonnement de trois jours, pendant lesquels ils ne peuvent pas être élus dans le groupe de validateurs.
2. La double signature peut entraîner le slashing de toutes les récompenses, la perte du dépôt entier du validateur et une interdiction permanente du réseau, c'est-à-dire un emprisonnement à vie.

### 11. À quelle fréquence les validateurs doivent-ils être en ligne ?

Les validateurs sont généralement censés être en ligne et participer activement presque en continu.

