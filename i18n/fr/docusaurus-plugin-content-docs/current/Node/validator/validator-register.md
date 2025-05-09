---
sidebar_label: Enregistrement des Validateurs
hide_table_of_contents: false
sidebar_position: 2
---

# Enregistrement des Validateurs

---

:::caution
Avant de devenir validateur sur Core, nous vous recommandons vivement de lire le [Whitepaper Technique](https://whitepaper.coredao.org/).
:::

## Enregistrement

1. Pour vous enregistrer en tant que validateur sur Core, vous devez exécuter un nœud complet en mode validateur. Veuillez lire les guides sur la [configuration des nœuds de validation](../config/validator-node-config.md) et [l'exécution des nœuds de validation](running-validator.md) pour savoir comment configurer cela.

2. Une fois cela terminé, la façon la plus simple de s'enregistrer comme validateur est d'utiliser l'un de nos sites de staking :

   - [Site de staking pour le Mainnet](https://stake.coredao.org)
   - [Site de staking pour le Testnet](https://stake.test.btcs.network)

3. Connectez votre portefeuille en sélectionnant **Connect Wallet** en haut à droite.

4. Une fois connecté, le bouton **Register** devrait apparaître en haut à droite. En sélectionnant **register** le formulaire suivant s'affiche :

![validator-register-form](../../../../../../static/img/validator/register/validator-register-1.avif)

Fournissez les informations pour chaque champ du formulaire :

- **Adresse de consensus:** l'adresse du validateur que vous avez définie lors de l'initialisation de votre nœud complet validateur.
- **Adresse de frais :** l'adresse utilisée pour collecter les frais de commission.
- **Commission :** les revenus sont partagés entre le validateur et ses délégateurs, avec la commission déterminant le pourcentage de revenu pris par le validateur.
- **Dépôt total :** le dépôt en CORE remboursable, bloqué pendant la prestation des services de validation. Sur le testnet, le montant minimum est de 10 000 CORE.

5. Une fois les informations saisies, sélectionnez **Register** pour vous enregistrer en tant que validateur.

## Confirmation de l'Enregistrement

Pour vérifier rapidement si votre nœud complet a bien été enregistré comme validateur, ouvrez le fichier de log et recherchez le message d'erreur "unauthorized validator". Cette erreur se produit lorsque le nœud est enregistré mais pas encore élu au sein de l'ensemble des validateurs.

![validator-register-form](../../../../../../static/img/validator/register/validator-register-2.avif)

## Élection des Validateurs

Chaque jour, les **27**validateurs avec les scores hybrides les plus élevés sont élus pour produire des blocs sur le réseau Core pendant toute la durée du round. Les récompenses accumulées sont ensuite distribuées à la fin du round, et le prochain ensemble de validateurs est sélectionné. Pour plus de détails sur le fonctionnement de l’élection des validateurs, reportez-vous à la section [élection des validateurs](./validator-election.md).

Vous pouvez vérifier le statut des validateurs sur le site de staking. Les validateurs élus sont marqués Active/Normal. L'ensemble des validateurs est mis à jour chaque jour à **00:00 UTC**.

![validator-register-form](../../../../../../static/img/validator/register/validator-register-3.avif)

Les validateurs reçoivent un statut basé sur leurs actions pendant et avant le round actuel :

<table><thead><tr><th width="208">Statut des Validateurs</th><th>Description</th></tr></thead><tbody><tr><td>Actif/Normal</td><td>Élu pour le round actuel. Qualifié pour la prochaine élection.</td></tr><tr><td>Actif/Refus</td><td>Validateur élu pour le round actuel, mais a refusé les délégations. Non qualifié pour la prochaine élection.</td></tr><tr><td>Actif/Emprisonné</td><td>Validateur élu pour le round actuel, mais emprisonné pour une faute. Non qualifié pour la prochaine élection.</td></tr><tr><td>Inactif/En attente</td><td>Enregistré, mais non élu. Qualifié pour la prochaine élection.</td></tr><tr><td>Inactif/Refus</td><td>Enregistré, mais a refusé les délégations. Non qualifié pour la prochaine élection.</td></tr><tr><td>Inactif/Emprisonné</td><td>Enregistré, en prison. Non qualifié pour la prochaine élection.</td></tr><tr><td>Inactif/Verrouillé</td><td>Enregistré, mais dépôt insuffisant. Non qualifié pour la prochaine élection.</td></tr><tr><td>Inactif/Invalide</td><td>Non enregistré.</td></tr></tbody></table>

Vous pouvez rechercher l'adresse de consensus d'un validateur sur [Core Scan](https://scan.coredao.org/) pour consulter leur historique de production de blocs.

![validator-register-form](../../../../../../static/img/validator/register/validator-register-4.webp)
