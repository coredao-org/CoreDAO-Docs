---
sidebar_label: Blocs
description: Points de terminaison liés aux données de bloc
hide_table_of_contents: false
sidebar_position: 2
---

# Blocs

## Obtenir les Récompenses de Bloc par Numéro de Bloc

Renvoie les récompenses de bloc pour la validation d’un bloc donné.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblockreward
   &blockno=1807242
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=block\\&action=getblockreward\\&blockno=1807242\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th>Paramètre</th><th width="601">Description</th></tr></thead><tbody><tr><td>blockno</td><td>le numéro de bloc entier pour lequel vérifier les récompenses de bloc, par exemple 1807242</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "status":"1",
   "result":{
      "blockNumber":"1807242",
      "timeStamp":"Mon Mar 13 08:31:54 UTC 2023",
      "blockMiner":"0x2efd3cf0733421aec3e4202480d0a90bd1575149",
      "blockReward":"3002893221000000000.0",
      "uncles":null,
      "uncleInclusionReward":null
   },
   "message":"OK"
}
```

## Obtenir le Temps Restant Estimé du Compte à Rebours du Bloc par Numéro de Bloc

Renvoie le temps restant estimé, en secondes, jusqu’à ce qu’un certain bloc soit validé.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblockcountdown
   &blockno=2807242
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=block\\&action=getblockcountdown\\&blockno=2807242\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="123">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>blockno</td><td>le numéro de bloc entier pour lequel vérifier le temps du compte à rebours, par exemple 2807242</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "status":"1",
   "result":{
      "remainingBlock":"999939",
      "estimateTimeInSec":"2999817",
      "countdownBlock":"2807242",
      "currentBlock":"1807303"
   },
   "message":"OK"
}
```

## Obtenir le Numéro de Bloc par Horodatage

Renvoie le numéro de bloc qui a été validé à un certain horodatage.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblocknobytime
   &timestamp=1678581398
   &closest=before
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=block\\&action=getblocknobytime\\&timestamp=1678581398\\&closest=before\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="136">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td>l’entier représentant l'horodatage Unix en secondes.</td></tr><tr><td>closest</td><td>le bloc disponible le plus proche de l'horodatage fourni, soit avant ou après</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "status":"1",
   "result":1768937,
   "message":"OK"
}
```
