---
sidebar_label: FAQ sur l'API Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur l'API Core Scan

---

### 1. Qu'est-ce que l'API Core Scan ?

Nous avons développé l'Open API Core Scan pour offrir aux développeurs un accès direct aux données et services de l'explorateur de blocs Core Scan. Les API de Core Scan sont fournies en tant que service communautaire sans garantie, donc veuillez les utiliser selon vos besoins et pas plus.

Consultez la documentation complète de l'API disponible [ici](https://docs.coredao.org/docs/api/).

### 2. Comment puis-je accéder à l'API Core Scan ?

Pour accéder à l'API Core Scan, vous devez avoir un compte enregistré sur Core Scan. Consultez [ici](../api/tutorials/creating-an-account.md) le guide détaillé pour savoir comment procéder. De plus, vous aurez besoin de générer une clé API à partir de ce compte enregistré. Consultez [ici](../api/tutorials/generate-an-api-key.md) le guide détaillé pour plus d'informations.

### 3. Comment créer des clés API pour les utiliser avec l'API Core Scan ?

Pour générer des clés API à l'aide d'un compte enregistré sur Core Scan, reportez-vous au guide détaillé [ici](../api/tutorials/generate-an-api-key.md).

### 4. Mes clés API ne fonctionnent pas, que puis-je faire ?

Un problème technique peut s'être produit lors de la création de la clé. Dans ce cas, essayez de supprimer la clé et d'en générer une nouvelle. Si le problème persiste après avoir utilisé une clé fraîchement générée, contactez-nous sur notre serveur [Discord](https://discord.com/invite/coredaoofficial) officiel.

### 5. Y a-t-il une limite de taux sur les requêtes API ?

Oui, il existe des limites de taux fixes sur les requêtes API en fonction du niveau d'API. Pour éviter les erreurs liées aux limites de taux, respectez votre offre disponible en attendant un certain temps entre chaque requête. Si vous utilisez un script ou une application, appliquez un throttling pour limiter la fréquence des appels.

| **Niveau d'API** | **Limite de taux**                           |
| ---------------- | -------------------------------------------- |
| **Gratuit**      | 5 appels/seconde, jusqu'à 10 000 appels/jour |

### 6. Quel est le code de statut d'une API si une erreur survient ?

Un appel API qui rencontre une erreur renverra 0 comme code de statut et affichera la cause de l'erreur dans le champ résultat.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 7. Que dois-je faire si je rencontre des problèmes ou des bugs avec l'API ?

Référez-vous à la documentation officielle de l'API pour les [messages de problèmes courants](../api/tutorials/common-error-messages.md). Si le problème persiste, contactez-nous sur notre serveur [Discord](https://discord.com/invite/coredaoofficial) officiel.
