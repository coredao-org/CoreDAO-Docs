---
sidebar_label: Messages d'Erreur Courants
description: Messages d'Erreur Courants lors de l'utilisation de l'API Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# Messages d'Erreur Courants de l'API Core

Un appel API qui rencontre une erreur renverra 0 comme code de statut et affichera la cause de l'erreur dans le champ résultat.

```json
{
   "status":"0",
   "message":"NOTOK",
   "result":"Max rate limit reached"
}
```

***

## Limite de taux maximale

> "Limite de taux maximale atteinte"

Cette erreur survient lorsque vous dépassez la limite de taux assignée à votre clé API spécifique. Pour résoudre, respectez votre plan en attendant un certain temps avant chaque requête. Si vous utilisez un script ou une application, appliquez un régulateur de débit (throttling) pour limiter la fréquence des appels.

Référence pour les différents niveaux d'API et leurs limites de taux 🚧.

| Niveau d'API |                Limite de taux                |
| :----------: | :------------------------------------------: |
|     Free     | 5 appels/seconde, jusqu'à 10 000 appels/jour |

***

## Action manquante ou invalide

> "Erreur ! Nom d'action manquant ou invalide"

Cette erreur survient lorsque vous ne spécifiez pas, ou que vous spécifiez un module et un nom d'action invalides. Pour résoudre, vérifiez minutieusement votre requête API afin d'utiliser un module et un nom d'action valides. Si vous avez besoin d'aide pour démarrer, essayez de copier les requêtes d'exemple fournies dans la documentation et de les coller dans votre navigateur.

***

## Erreurs spécifiques API

> "Erreur ! Le numéro de bloc est déjà passé" "Erreur ! Format d'adresse invalide" "Le code source du contrat n'est pas vérifié"

Ces messages d'erreur renvoyés sont spécifiques à certaines API et à leurs paramètres associés. Pour résoudre, veuillez consulter la documentation spécifique de l'API et vérifier le format ou les valeurs correctes à spécifier en tant que paramètres.
