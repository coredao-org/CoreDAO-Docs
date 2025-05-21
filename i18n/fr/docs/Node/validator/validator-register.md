---
sidebar_label: Exécution d'un nœud de validation
hide_table_of_contents: false
sidebar_position: 2
---

importer Tabs depuis '@theme/Tabs';
importer TabItem depuis '@theme/TabItem';

# Enregistrement des Validateurs

---

:::caution
Avant de devenir validateur sur Core, nous vous recommandons vivement de lire le [Whitepaper Technique](https://whitepaper.coredao.org/).
:::

## Configurer un nœud complet en mode validateur

Avant de pouvoir vous enregistrer en tant que validateur, vous devez configurer et exécuter un nœud complet en mode validateur en suivant le guide ici(./setting-up-validator.md).

Assurez-vous que votre nœud de validation est opérationnel et en cours d'exécution.

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

Ouvrez le fichier journal de votre nœud et recherchez le message d'erreur `unauthorized validator`. Si ce message apparaît, cela signifie que votre nœud est enregistré mais n'a pas encore été élu dans l'ensemble des validateurs.

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

## Définition du nom du validateur

Vous pouvez attribuer un nom lisible par l'homme à votre nœud de validation en utilisant l'interface utilisateur Core Staking. Ce nom sert d'étiquette pour les délégateurs et les participants au réseau afin d'identifier votre validateur dans l'interface.

### Étapes pour définir ou mettre à jour votre nom de validateur

1. **Access the Staking Website:** naviguez vers le tableau de bord des validateurs(https://stake.coredao.org/validators).
2. **Localisez votre validateur:** Identifiez l'entrée de votre validateur dans la liste. Par défaut, les validateurs sont répertoriés par leur 'Fee Address' associée.
3. **Ouvrez les détails du validateur:** Cliquez sur votre validateur pour ouvrir la page des détails du validateur.
4. **Accédez au menu de mise à jour:** Sur la page des détails du validateur, cliquez sur le bouton de menu (trois points verticaux) à côté du bouton Stake et sélectionnez "Update Name" dans le menu déroulant.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-1.png)
</p>

4. **Entrez les détails du validateur:** Fournissez le nom et d'autres détails dans le formulaire de saisie. Ce nom sera publiquement visible pour les délégateurs et les utilisateurs de l'interface réseau.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-2.png)
</p>

5. \*\* Signez le message de propriété du validateur:\*\* Cliquez sur Sign pour vérifier la propriété de votre adresse de validateur en signant le message affiché.

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
