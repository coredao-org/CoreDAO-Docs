---
sidebar_label: Transactions
description: Points de terminaison liés aux Transactions
hide_table_of_contents: false
sidebar_position: 2
---

# Transactions

## Vérifier le Statut du Reçu d'une Transaction

Renvoie le code d'état de l'exécution d'une transaction.

```bash
https://openapi.coredao.org/api
   ?module=transaction
   &action=gettxreceiptstatus
   &txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre  🔗

Paramètres de requête

<table><thead><tr><th width="145">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>txhash</td><td>la chaîne représentant le hash de la transaction pour vérifier le statut d'exécution</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "status":"1",
   "result":{
      "status":"1"
   },
   "message":"OK"
}
```
