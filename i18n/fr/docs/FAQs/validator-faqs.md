---
sidebar_label: FAQ des Validateurs Core
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ des Validateurs Core

---

### 1. Qu'est-ce qu'un validateur dans l'écosystème Core ?

Dans l'écosystème de Core, un "validateur" fait référence aux nœuds ou participants du réseau blockchain qui sont responsables de la vérification, de la validation et de l'ajout de nouvelles transactions à la blockchain. Validators play a crucial role in maintaining and securing the network.

### 2. Comment devenir un validateur ?

- 1. To register as a validator on Core, you must be running a full node in validator mode. Please read the guides on [validator nodes requirements](../Node/config/validator-node-config.md) and [setting up validator nodes](../Node/validator/setting-up-validator.md) for information on how to set this up.
  2. Once that’s finished, the easiest way to register a new validator is by using one of our staking websites:
    1. [Site de staking pour le Mainnet](https://stake.coredao.org)
    2. [Testnet stake website](https://stake.test2.btcs.network)
  3. Connectez votre portefeuille en sélectionnant **Connect Wallet** en haut à droite.
  4. Une fois connecté, le bouton **Register** devrait apparaître en haut à droite. En sélectionnant **register** le formulaire suivant s'affiche :

![register-validator](../../static/img/validator/register/validator-register-1.png)

Fournissez les informations pour chaque champ du formulaire :

- **Adresse de consensus:** l'adresse du validateur que vous avez définie lors de l'initialisation de votre nœud complet validateur.
- **Adresse de frais :** l'adresse utilisée pour collecter les frais de commission.
- **Commission**: Revenue is split between the validator and its delegators, with the commission determining the percentage of delegator revenue allocated to the validator as compensation.
- **Dépôt total :** le dépôt en CORE remboursable, bloqué pendant la prestation des services de validation. On testnet, the minimum amount is **10,000 tCORE2**. Whereas, on the mainnet, the minimum amount is **10,000 CORE**.
  1. Once you've entered the required information, select **Register** to complete the registration process as a validator.
  2. A quick way to check that you've successfully registered your full node as a validator is to open the log file and search for the error message "**unauthorized validator**". Cette erreur se produit lorsque le nœud est enregistré mais pas encore élu au sein de l'ensemble des validateurs.

![validator-logs](../../static/img/validator/register/validator-register-2.avif)

### 3. Quelles sont les exigences matérielles/logiciels pour exécuter un nœud validateur sur Core ?

Les validateurs sont essentiels pour sécuriser le réseau en produisant des blocs et en validant les transactions dans le cadre du consensus Satoshi Plus de la blockchain Core.

**Software Requirements:** Currently, a Core Full Node can only run on macOS X and Linux.

**Core Testnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 4 cœurs CPU                                                                                                                                  |
| RAM              | 8 Go                                                                                                                                         |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

**Core Mainnet Full Node Hardware Specifications**

| **Requis**       | **Details**                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Stockage         | 1 To d'espace libre sur un disque SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1 ms. |
| CPU              | 8 cœurs CPU                                                                                                                                  |
| RAM              | 32 Go                                                                                                                                        |
| Vitesse Internet | Connexion large bande avec une vitesse de chargement/téléchargement de 10 Mbps                                                               |

For more details, refer to [Full Node Configuration Guide](../Node/config/full-node.md)

### 4. What is the minimum amount of CORE tokens required to stake to become a validator?

On the Core network, validators are required to stake a certain minimum amount of CORE tokens, which are locked up for the duration that a validator node provides its services. On testnet, the minimum amount is **10,000 tCORE2**. Whereas, on the mainnet, the minimum amount is **10,000 CORE**.

### 5. Comment les validateurs sont-ils récompensés dans l'écosystème Core ?

Les validateurs gagnent des récompenses pour leur rôle dans le traitement des transactions, la création de nouveaux blocs et le maintien de l'intégrité de la blockchain. Ces récompenses sont essentielles pour compenser les validateurs pour leurs efforts et leurs coûts opérationnels. The Core validators operate in a round-robin manner, and each active validator receives nearly the same amount of rewards every round. Il existe deux catégories de récompenses de validateur:

1. **Récompenses de base**, c'est-à-dire les nouveaux tokens CORE miné;
2. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base et les frais de transaction sont calculés et distribués lorsque le dernier bloc d'un tour est miné. Currently, **90%** of the rewards are allocated to the validators, and **10%** of the rewards are allocated to the System Reward Contract. Of the 90% paid to validators, some percentage is taken as a commission by the validator before they pay out to their delegates. The portion validators' keep for themselves (commission fees) will be distributed directly to their fee addresses at the end of each round. Validators are required to share rewards with the delegators who staked Bitcoin, CORE, or delegated Bitcoin hash power to them. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

### 6. Quand les récompenses sont-elles versées ?

Cycle time for Core to distribute rewards is currently set to **1 day**. Each day, **27** validators with the highest hybrid scores are elected to the validator set, thereby becoming responsible for producing blocks on the Core network for the entire round. At the end of each round, the accumulated rewards for that round are calculated and distributed.

### 7. Quels sont les risques/pénalités pour être un validateur ?

Voici un aperçu détaillé des risques et pénalités auxquels les validateurs peuvent faire face dans l'écosystème de Core :

1. **Risques de slashing :** les validateurs peuvent subir un slashing pour des actions comme la double signature ou le non-respect de leurs devoirs, ce qui entraîne la perte d'une partie de leurs tokens CORE stakés.
2. **Stake Lock-up and Liquidity Risk:** Validators must lock up CORE tokens as collateral, which cannot be accessed during the lock-up period, thereby posing a liquidity risk during market volatility.
3. **Emprisonnement des validateurs :** les validateurs sous-performants ou en violation du protocole peuvent être temporairement retirés du groupe de validateurs, les empêchant de participer au consensus et de gagner des récompenses.
4. **Perte de délégation :** les délégateurs peuvent retirer leur soutien si un validateur performe mal ou est fréquemment pénalisé.
5. **Operational and Security Risks:** Validators must maintain secure and efficient operations around the clock. Operational failures or security breaches can result in significant financial and reputational damage.

### 9) Comment fonctionne le processus d'élection des validateurs sur l'écosystème Core ?

Le processus d'élection des validateurs dans le mécanisme Satoshi Plus sur le réseau Core implique différentes étapes qui intègrent des éléments de Preuve de Travail (PoW) et de Preuve d'Enjeu (PoS) :

1. **Stake Delegation**: Holders of CORE and Bitcoin tokens delegate their tokens to validator candidates, influencing the election with their staked tokens.
2. **Délégation de puissance de hachage :** les mineurs de Bitcoin contribuent à la sélection des validateurs en allouant une partie de leur puissance de hachage.
3. **Validator Selection and Scoring**: Validators are chosen based on a hybrid score combining delegated hash power from Bitcoin and staked tokens (CORE and Bitcoin). Le score hybride de chaque validateur est calculé sur la base de :

$$
    S =  rHp/tHp  × m +  ((rSp + rBp × n))/((tSp + tBp × n) )  × (1-m)  
$$

Où :

- rHp et tHp représentent respectivement la puissance de hachage déléguée à un validateur et la puissance de hachage totale.
- rSp et tSp représentent respectivement les tokens CORE stakés pour un validateur et le total des tokens CORE stakés.
- rBp and tBp are the Bitcoin tokens delegated to a validator and total staked Bitcoin tokens, respectively.
- m and n are dynamic factors adjusting the weights of hash power and the voting power of Bitcoin versus CORE tokens.

4. **Formation du groupe de validateurs :** Les **27** validateurs ayant les meilleurs scores hybrides sont sélectionnés pour le tour suivant.

### 9) What is slashing, and what are the different slashing fees charged on the Core blockchain?

Le "slashing" est une pénalité appliquée aux validateurs pour mauvaise conduite ou manquements à leurs devoirs. Dans le réseau Core, le slashing peut affecter les récompenses et les mises déposées.

- **Slashing des récompenses :** si un validateur ne parvient pas à miner 50 blocs consécutifs, toutes les récompenses en tokens CORE accumulées sont perdues. The impact is more significant if the failure occurs later in the round, as more rewards would have been accumulated by then.
- **Deposit Slashing and Jailing**: Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **three-day jailing**, during which they cannot be elected to the validator set.
- **Permanent Ban for Double Signing**: Double signing, i.e., signing two different blocks at the same height, results in severe consequences, including the slashing of all rewards, the entire validator deposit, and a permanent ban from the network, effectively rendering the validator permanently ineligible.

### 10. Quand les validateurs sont-ils emprisonnés ? Quelle est la durée ?

There are two scenarios in which validators can be jailed.

1. Failing to mine **150** consecutive blocks results in losing **10%** of the validator's deposit and a **three-day jail term**, during which they cannot be elected to the validator set.
2. Double signing can result in the slashing of all rewards, the entire validator deposit, and a permanent ban from the network, i.e., being jailed forever.

### 11) À quelle fréquence les validateurs doivent-ils être en ligne ?

Les validateurs sont généralement censés être en ligne et participer activement presque en continu.