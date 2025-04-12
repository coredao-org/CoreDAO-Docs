---
sidebar_label: Preguntas frecuentes sobre la API de Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre la API de Core Scan

---

### 3. ¿Cómo crear claves API para usar con Core Scan API?

Hemos desarrollado la API abierta de Core Scan para brindar a los desarrolladores acceso directo a los datos y servicios del explorador de bloques de Core Scan. Las API de Core Scan se proporcionan como un servicio comunitario y sin garantía, así que utilice lo que necesita y nada más.

Consulte los documentos API completos disponibles [aquí](https://docs.coredao.org/docs/api/).

### 4. Mis claves API no funcionan, ¿qué puedo hacer?

Para acceder a Core Scan API, debe tener una cuenta registrada en Core Scan; consulte [aquí](https://docs.coredao.org/docs/api/tutorials/creating-an-account) para obtener información detallada. guía sobre esto. Aparte de esto, también necesita generar una clave API utilizando la cuenta registrada; consulte la guía detallada [aquí](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key) .

### 5. ¿Existe un límite de tasa en las solicitudes de API?

Para generar claves API utilizando una cuenta registrada en Core Scan, consulte la guía detallada [aquí](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 7. ¿Qué debo hacer si encuentro problemas o errores con la API?

Es posible que haya ocurrido un problema técnico en el proceso de creación de claves. En este caso, intente eliminar la clave y generar una nueva. Si el problema persiste después de usar una clave recién generada, contáctenos en nuestro servidor oficial [Discord](https://discord.com/invite/coredaoofficial).

### 6. Is there a rate limit on Core Scan API requests?

Sí, existen límites de tasa fija en las solicitudes de API según el nivel de API. Para evitar errores en el límite de tarifas, cumpla con su plan disponible y espere un cierto tiempo antes de cada solicitud. Si está utilizando un script o una aplicación, aplique limitación para limitar la frecuencia de las llamadas.

| **Nivel API** | **Límite de tarifa**                                          |
| ------------- | ------------------------------------------------------------- |
| **Gratis**    | 5 llamadas/segundo, hasta 10.000 llamadas/día |

### 6. Are there any rate limits on the Staking API endpoints?

Yes, the Staking API endpoints have a rate limit of 600 transactions per minute per IP.

### 7. ¿Cuál es el código de estado de una API si ocurre un error?

Una llamada API que encuentra un error devolverá 0 como código de estado y mostrará la causa del error en el campo de resultado.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 8. ¿Qué debo hacer si encuentro problemas o errores con la API?

Consulte la documentación oficial de la API para [mensajes de problemas comunes] (https://docs.coredao.org/docs/api/tutorials/common-error-messages). Si el problema persiste, contáctenos en nuestro [Discord] oficial (https ://discord.com/invite/coredaoofficial) servidor.
