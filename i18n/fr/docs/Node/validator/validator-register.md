---
sidebar_label: Exécution d'un nœud de validation
hide_table_of_contents: false
sidebar_position: 2
---

# Enregistrement des Validateurs

---

:::caution
Avant de devenir validateur sur Core, nous vous recommandons vivement de lire le [Whitepaper Technique](https://whitepaper.coredao.org/).
:::

## Configurer un nœud complet en mode validateur

Prérequis pour devenir validateur : Avant de vous enregistrer en tant que validateur, vous devez configurer et exécuter un nœud complet en mode validateur. Consultez ce guide(./running-validator.md) pour configurer et exécuter un nœud validateur Synchronisation du nœud complet : Votre nœud complet doit se synchroniser avec le réseau Core en téléchargeant les données de la blockchain et en restant à jour avec les derniers blocs.

### Générer la clé de consensus

Lors de l'initialisation d'un nœud validateur, générez une adresse de consensus (adresse publique) associée à la clé de consensus. L'adresse de consensus générée sera utilisée par votre nœud pour les opérations de consensus, notamment pour la validation des blocs et la participation au processus de consensus sur la blockchain.

#### Générer une nouvelle clé de consensus

Exécutez la commande spécifique fournie pour générer une nouvelle clé de consensus Lorsque vous exécutez la commande, un nouveau compte sera créé et une adresse sera générée. Cette adresse servira d'adresse de validation (adresse de consensus) pour votre nœud validateur.

```bash
./build/bin/geth account new --datadir ./node
```

##### Notes importantes

- Sécurisez votre keystore et mot de passe :
    Stockez votre fichier keystore et votre mot de passe dans un endroit sûr et sécurisé, car vous en aurez besoin ultérieurement pour accéder à votre compte et effectuer des opérations de validation.
- Sauvegardez votre clé :
    Il est crucial de sauvegarder votre clé de consensus pour éviter toute perte d'accès à votre nœud validateur. Si vous perdez cette clé, vous perdrez définitivement le contrôle de votre validateur.

Création d'un mot de passe :
Lorsque vous générez la clé, vous serez invité à entrer un mot de passe pour sécuriser l'accès à votre keystore. Sécurisation du mot de passe :
Le mot de passe défini sera nécessaire pour déverrouiller votre validateur. Stockez-le dans un endroit hautement sécurisé pour éviter tout accès non autorisé et assurez-vous de le sauvegarder correctement. Enregistrer le mot de passe dans un fichier texte :
Pour sauvegarder votre mot de passe de manière sécurisée, vous pouvez l'enregistrer dans un fichier texte en utilisant la commande suivante :

```bash
echo {your-password} > password.txt
```

### Démarrer le nœud de validation

Après avoir généré la clé de consensus, vous pouvez démarrer votre nœud validateur en utilisant la commande suivante :

```bash
./build/bin/geth --config ./testnet2/config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt --mine --allow-insecure-unlock --cache 8000 --networkid 1114
```

Analysons les flags utilisés dans cette commande pour comprendre leur rôle et configuration spécifique pour votre nœud validateur.:

- config ./config.toml : Spécifie le fichier de configuration pour le nœud. Assurez-vous que les paramètres dans le fichier config.toml sont correctement configurés pour votre environnement spécifique.

- datadir ./node : Indique le répertoire de données pour le nœud

- unlock {your-validator-address} : Déverrouille le compte validateur en utilisant l'adresse générée à l'étape précédente.

- miner.etherbase {your-validator-address} : Spécifie l'adresse qui recevra les récompenses de minage et les récompenses de bloc. Il s'agit généralement de l'adresse de votre validateur.

- password password.txt : Le mot de passe pour déverrouiller votre compte de validateur (assurez-vous que ce fichier est conservé de manière sécurisée).

- mine : Démarre le processus de minage (validation de blocs)

- allow-insecure-unlock : Autorise le processus de déverrouillage sans mesures de sécurité supplémentaires (à utiliser avec prudence).

- cache 8000 : Alloue un grand cache (8 Go dans ce cas) pour améliorer les performances.

## Enregistrer votre validateur

Une fois que votre nœud est en cours d'exécution et synchronisé, vous pouvez procéder au processus d'enregistrement.

1. Naviguer vers le site Web de staking : Le moyen le plus simple pour enregistrer un nouveau validateur est d'utiliser les sites Web de staking officiels de Core :

    - [Core Mainnet Staking website](https://stake.coredao.org/become-validator)
    - [Core Testnet Staking website](https://stake.test.btcs.network/become-validator)
    - [Core Testnet2 Staking website](https://stake.test2.btcs.network/become-validator)

2. Connecter votre portefeuille : Sur le site Web de staking, cliquez sur Connecter le portefeuille dans le coin supérieur droit et connectez votre portefeuille (comme MetaMask, Ledger, etc.) qui contient les jetons CORE nécessaires.

3. Comment Remplir le formulaire d'inscription de validateur

Une fois votre portefeuille connecté, le bouton Enregistrer apparaîtra. En cliquant sur ce bouton, un formulaire s'ouvrira où vous devrez fournir plusieurs informations :

![validator-register-form](../../../static/img/validator/validator-regitration.png)

Fournissez les informations pour chaque champ du formulaire :

- Adresse de consensus : l'adresse du validateur que vous avez définie lors de l'initialisation de votre nœud de validation.
- Adresse de frais : l'adresse utilisée pour collecter les frais de commission.
- **Commission :** les revenus sont partagés entre le validateur et ses délégateurs, avec la commission déterminant le pourcentage de revenu pris par le validateur.
- **Dépôt total :** le dépôt en CORE remboursable, bloqué pendant la prestation des services de validation. Le dépôt minimum pour le testnet et le mainnet est de 10 000 CORE.

5. Soumettre l'inscription : Une fois que vous avez rempli toutes les informations requises, cliquez sur Enregistrer pour soumettre votre validateur à l'inscription.

## Confirmation de l'Enregistrement

Après avoir soumis le formulaire d'inscription, vous pouvez vérifier si l'inscription a été réussie.

### Vérification des journaux

Open your node’s log file and search for the error message "unauthorized validator." If this message appears, it means that your node is registered but has not yet been elected to the validator set.

![validator-register-form](../../../static/img/validator/register/validator-register-2.avif)

## Élection des Validateurs

Each day, the top **27** validators with the highest hybrid scores are elected to the active validator set, thereby becoming responsible for producing blocks and validating transactions on the Core network for the entirety of the round. Les récompenses accumulées sont ensuite distribuées à la fin du round, et le prochain ensemble de validateurs est sélectionné. Pour plus de détails sur le fonctionnement de l’élection des validateurs, reportez-vous à la section [élection des validateurs](./validator-election.md).

Vous pouvez vérifier le statut des validateurs sur le site de staking. Les validateurs élus sont marqués Active/Normal. L'ensemble des validateurs est mis à jour chaque jour à **00:00 UTC**.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Validator Status Updates

Validator status is updated daily at 00:00 UTC. You can check the status of your validator on the staking website. There are various possible statuses:

- **`Active/Normal`:** Validator is elected for the current round and qualified for the next election.

- **`Active/Refuse`:** Validator is elected for the current round but refused to accept delegations. Non qualifié pour la prochaine élection.

- **`Active/Jailed`:** Elected validator in the current round, but jailed due to a felony. Non qualifié pour la prochaine élection.

- **`Inactive/Queued`:** Validator is registered but not elected. Qualifié pour la prochaine élection.

- **`Inactive/Refuse`:** Validator is registered but has refused delegation. Non qualifié pour la prochaine élection.

- **`Inactive/Jailed`:** Validator is registered but is jailed and not qualified for the next election.

- **`Inactive/Locked`:** Validator is registered but has not met the minimum deposit requirements. Non qualifié pour la prochaine élection.

- **`Inactive/Invalid`:** Validator is unregistered.

## Monitor Your Validator's Performance

You can monitor the status of your validator and its block production record on [Core Scan](https://scan.coredao.org/). This tool allows you to track whether your node is successfully producing blocks and performing well.

![validator-register-form](../../../static/img/validator/register/validator-register-4.webp)

## Maintaining Your Validator Node

To remain an active and successful validator, you’ll need to keep your node online, perform maintenance, and respond to any issues that arise.

#### Stay Synced

Ensure that your node is always in sync with the Core network to prevent issues with block production and validation.

#### Handle Rewards

At the end of each round, accumulated rewards are distributed to validators. You should track these rewards and monitor any potential issues with your validator's performance.
