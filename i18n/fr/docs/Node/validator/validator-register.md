---
sidebar_label: Exécution d'un nœud de validation
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enregistrement des Validateurs

---

:::caution
Avant de devenir validateur sur Core, nous vous recommandons vivement de lire le [Whitepaper Technique](https://whitepaper.coredao.org/).
:::

## Configurer un nœud complet en mode validateur

Before you can register as a validator, you need to set up and run a full node in validator mode following the guide [here](./setting-up-validator.md).

Make sure your validator node is up and running.

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

Open your node’s log file and search for the error message `unauthorized validator`. Si ce message apparaît, cela signifie que votre nœud est enregistré mais n'a pas encore été élu dans l'ensemble des validateurs.

![validator-register-form](../../../static/img/validator/register/validator-register-2.avif)

## Élection des Validateurs

Chaque jour, les 27 meilleurs validateurs avec les scores hybrides les plus élevés sont élus dans l'ensemble actif des validateurs, devenant ainsi responsables de la production de blocs et de la validation des transactions sur le réseau Core pour toute la durée de la ronde. Les récompenses accumulées sont ensuite distribuées à la fin du round, et le prochain ensemble de validateurs est sélectionné. Pour plus de détails sur le fonctionnement de l’élection des validateurs, reportez-vous à la section [élection des validateurs](./validator-election.md).

Vous pouvez vérifier le statut des validateurs sur le site de staking. Les validateurs élus sont marqués Active/Normal. L'ensemble des validateurs est mis à jour chaque jour à **00:00 UTC**.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Mises à jour du statut du validateur

Le statut du validateur est mis à jour quotidiennement à 00h00 UTC. Vous pouvez vérifier le statut de votre validateur sur le site Web de staking. Il existe différents statuts possibles :

- Actif/Normale : Le validateur est élu pour la ronde actuelle et qualifié pour la prochaine élection.

- Actif/Refus : Le validateur est élu pour la ronde actuelle mais a refusé d'accepter les délégations. Non qualifié pour la prochaine élection.

- Actif/Emprisonné : Validateur élu pour la ronde actuelle, mais emprisonné en raison d'un délit majeur (ou faute grave). Non qualifié pour la prochaine élection.

- Inactif/En attente : Le validateur est enregistré mais pas élu. Qualifié pour la prochaine élection.

- Inactif/Refus : Le validateur est enregistré mais a refusé la délégation. Non qualifié pour la prochaine élection.

- Inactif/Emprisonné : Le validateur est enregistré mais est emprisonné et n'est pas qualifié pour la prochaine élection.

- Inactif/Vérouillé : Le validateur est enregistré mais n'a pas satisfait aux exigences de dépôt minimum. Non qualifié pour la prochaine élection.

- Inactif/Invalide : Le validateur n'est pas enregistré.

## Surveillez les performances de votre validateur

Vous pouvez surveiller l'état de votre validateur et son historique de production de blocs sur [Core Scan].(https://scan.coredao.org/). Cet outil vous permet de suivre si votre nœud produit des blocs avec succès et fonctionne bien.

![validator-register-form](../../../static/img/validator/register/validator-register-4.webp)

## Setting Validator Name

You may assign a human-readable name to your validator node using the Core Staking UI. This name serves as a label for delegators and network participants to identify your validator in the interface.

### Steps to Set or Update Your Validator Name

1. **Access the Staking Website:** navigate to the [validator dashboard](https://stake.coredao.org/validators).
2. **Locate Your Validator:** Identify your validator entry within the list. By default, validators are listed by their associated `Fee Address`.
3. **Open Validator Details:** Click on your validator to open the Validator Details page.
4. **Access the Update Menu:** On the Validator Details page, click the menu button (three vertical dots) next to the Stake button and select "Update Name" from the dropdown.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-1.png)
</p>

4. **Enter Validator Details:** Provide the name and other details in the input form. This name will be publicly visible to delegators and users of the network interface.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-2.png)
</p>

5. **Sign Validator Ownership Message:** Click Sign to verify ownership of your validator address by signing the displayed message.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-3.png)
</p>

6. **Submit the Update:** After verifying the entered information, submit the transaction to finalize the update. Once the transaction is confirmed on-chain, the updated name will be reflected in the validator list.

## Maintenance de votre nœud de validation

Pour rester un validateur actif et performant, vous devrez maintenir votre nœud en ligne, effectuer des tâches de maintenance et répondre à tout problème qui survient.

#### Restez synchronisé

Assurez-vous que votre nœud est toujours synchronisé avec le réseau Core pour éviter les problèmes de production et de validation de blocs.

#### Gestion des récompenses

À la fin de chaque tour, les récompenses accumulées sont distribuées aux validateurs. Vous devriez suivre ces récompenses et surveiller tout problème potentiel avec les performances de votre validateur.
