---
sidebar_label: Preguntas frecuentes sobre la API de Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre la API de Core Scan

---

### 3. ¿Cómo crear claves API para usar con Core Scan API?

Hemos desarrollado la API abierta de Core Scan para brindar a los desarrolladores acceso directo a los datos y servicios del explorador de bloques de Core Scan. Core Scan's APIs are provided as a community service and without warranty; please use only what you need.

Revisa la documentación completa del API, disponible [aquí](https://docs.coredao.org/docs/api).

### 4. Mis claves API no funcionan, ¿qué puedo hacer?

To access the Core Scan API, you need to have an account registered on the Core Scan. Refer to [here](https://docs.coredao.org/docs/api/tutorials/creating-an-account) for a detailed guide on this topic. Additionally, you will need to generate an API key using the registered account; refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 5. How to create API Keys for use with the Core Scan API?

To generate API keys using a registered account on Core Scan, refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 7. My API keys are not working; what should I do to resolve the issue?

Es posible que haya ocurrido un problema técnico en el proceso de creación de claves. In this case, try deleting the key and generating a new one.​ If the issue persists after using a freshly generated key, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.

### 6. ¿Existe un límite en la cantidad solicitudes a la API de Core Scan?

Sí, existen límites de tasa fija en las solicitudes de API según el nivel de API. Para evitar errores en el límite de tarifas, cumpla con su plan disponible y espere un cierto tiempo antes de cada solicitud. Si está utilizando un script o una aplicación, aplique limitación para limitar la frecuencia de las llamadas.

| **Nivel API** | **Límite de tarifa**                   |
| ------------- | -------------------------------------- |
| **Gratis**    | 5 calls/second, up to 10,000 calls/day |

### 6. ¿Existe una tasa límite en los endpoints de la API de Staking?

Sí, los endpoints de la API de Staking tienen un límite de 600 transacciones por minuto por IP.

### 7. ¿Cuál es el código de estado de una API si ocurre un error?

An API call that encounters an error will return **0** as its status code and display the cause of the error in the result field.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 8. ¿Qué debo hacer si encuentro problemas o errores con la API?

Refer to official API documentation for [Common issues messages](https://docs.coredao.org/docs/api/tutorials/common-error-messages). If the problem persists, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.