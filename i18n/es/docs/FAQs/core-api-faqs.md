---
sidebar_label: Preguntas frecuentes sobre la API de Core Scan
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre la API de Core Scan

---

### 3. ¿Cómo crear claves API para usar con Core Scan API?

Hemos desarrollado la API abierta de Core Scan para brindar a los desarrolladores acceso directo a los datos y servicios del explorador de bloques de Core Scan. Las APIs de Core Scan se ofrecen como un servicio comunitario y sin garantía; por favor, utiliza solo lo que necesites.

Revisa la documentación completa del API, disponible [aquí](https://docs.coredao.org/docs/api).

### 4. Mis claves API no funcionan, ¿qué puedo hacer?

Para acceder a la API de Core Scan, necesitas tener una cuenta registrada en Core Scan. Consulta [aquí](https://docs.coredao.org/docs/api/tutorials/creating-an-account) una guía detallada sobre este tema. Además, deberás generar una clave API usando la cuenta registrada; consulta la guía detallada [aquí](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 5. ¿Cómo crear claves API para usar con la API de Core Scan?

Para generar claves API usando una cuenta registrada en Core Scan, consulta la guía detallada [aquí](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 7. Mis claves API no funcionan; ¿qué debo hacer para resolver el problema?

Es posible que haya ocurrido un problema técnico en el proceso de creación de claves. En este caso, intenta eliminar la clave y generar una nueva. Si el problema persiste después de usar una clave recién generada, contáctanos en nuestro servidor oficial de [Discord](https://discord.com/invite/coredaoofficial).

### 6. ¿Existe un límite en la cantidad solicitudes a la API de Core Scan?

Sí, existen límites de tasa fija en las solicitudes de API según el nivel de API. Para evitar errores en el límite de tarifas, cumpla con su plan disponible y espere un cierto tiempo antes de cada solicitud. Si está utilizando un script o una aplicación, aplique limitación para limitar la frecuencia de las llamadas.

| **Nivel API** | **Límite de tarifa**                          |
| ------------- | --------------------------------------------- |
| **Gratis**    | 5 llamadas/segundo, hasta 10,000 llamadas/día |

### 6. ¿Existe una tasa límite en los endpoints de la API de Staking?

Sí, los endpoints de la API de Staking tienen un límite de 600 transacciones por minuto por IP.

### 7. ¿Cuál es el código de estado de una API si ocurre un error?

Una llamada API que encuentre un error devolverá **0** como código de estado y mostrará la causa del error en el campo de resultado.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 8. ¿Qué debo hacer si encuentro problemas o errores con la API?

Consulta la documentación oficial de la API para [Mensajes Comunes de problemas](https://docs.coredao.org/docs/api/tutorials/common-error-messages). Si el problema persiste, contáctanos en nuestro servidor oficial de [Discord](https://discord.com/invite/coredaoofficial).