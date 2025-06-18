---
sidebar_label: FAQ sur l'API Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ sur l'API Core Scan

---

### 1. Qu'est-ce que l'API Core Scan ?

Nous avons développé l'Open API Core Scan pour offrir aux développeurs un accès direct aux données et services de l'explorateur de blocs Core Scan. Core Scan's APIs are provided as a community service and without warranty; please use only what you need.

Consultez la documentation complète de l'API disponible [ici](https://docs.coredao.org/docs/api).

### 2. Comment puis-je accéder à l'API Core Scan ?

To access the Core Scan API, you need to have an account registered on the Core Scan. Refer to [here](https://docs.coredao.org/docs/api/tutorials/creating-an-account) for a detailed guide on this topic. Additionally, you will need to generate an API key using the registered account; refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 3. How to create API Keys for use with the Core Scan API?

To generate API keys using a registered account on Core Scan, refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 4. My API keys are not working; what should I do to resolve the issue?

Un problème technique peut s'être produit lors de la création de la clé. In this case, try deleting the key and generating a new one.​ If the issue persists after using a freshly generated key, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.

### 5. Y a-t-il une limite de taux sur les requêtes API ?

Oui, il existe des limites de taux fixes sur les requêtes API en fonction du niveau d'API. Pour éviter les erreurs liées aux limites de taux, respectez votre offre disponible en attendant un certain temps entre chaque requête. Si vous utilisez un script ou une application, appliquez un throttling pour limiter la fréquence des appels.

| **Niveau d'API** | **Limite de taux**                     |
| ---------------- | -------------------------------------- |
| **Gratuit**      | 5 calls/second, up to 10,000 calls/day |

### 6. Y a-t-il des limites de taux sur les points de terminaison de l'API du staking?

Oui, les points de terminaison de l'API du staking ont une limite de taux de 600 transactions par minute par IP.

### 7. Quel est le code de statut d'une API si une erreur survient ?

An API call that encounters an error will return **0** as its status code and display the cause of the error in the result field.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 8. Que dois-je faire si je rencontre des problèmes ou des bugs avec l'API ?

Refer to official API documentation for [Common issues messages](https://docs.coredao.org/docs/api/tutorials/common-error-messages). If the problem persists, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.