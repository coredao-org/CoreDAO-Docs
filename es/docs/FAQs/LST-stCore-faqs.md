---
sidebar_label: Preguntas frecuentes sobre apuestas líquidas (stCORE)
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas líquidas (stCORE)

---

### 1 ¿Qué es stCORE?

stCORE es una solución innovadora de Core Chain diseñada para mejorar la utilidad de los tokens CORE mediante la introducción de apuestas líquidas. Esto permite a los poseedores de tokens CORE maximizar el potencial de sus activos con mayor flexibilidad y eficiencia. El proceso implica apostar tokens CORE para proteger la red y, simultáneamente, ganar liquidez mediante la acuñación de tokens stCORE, que se pueden utilizar en varios protocolos DeFi.

### 2. ¿Cuáles son los beneficios de realizar apuestas líquidas con stCORE?

La apuesta líquida con stCORE permite a los poseedores de tokens CORE participar en protocolos DeFi mientras sus activos están en apuesta. Esto mejora la utilidad de los activos y la generación potencial de rendimiento sin comprometer las contribuciones de seguridad a la red.

### 3. ¿Cuál es el período de canje de stCORE?

De forma predeterminada, se requiere un período de desbloqueo de **7 días** para retirar CORE después del inicio del canje.

### 4. ¿Cómo se eligen los validadores en mint/redeem?

Tenga en cuenta que cada vez que ocurre la acuñación/canjeo, el contrato "Earn" delega CORE a "PledgeAgent"/desdelega CORE de "PledgeAgent". Esto se implementa de tal manera que la contabilidad sea más sencilla.

Al llamar al método `mint()`, la persona que llama debe pasar una dirección de validador para apostar los tokens CORE; al hacerlo, esperamos tratar a todos los candidatos de validador por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

Durante el canje, el contrato `Earn` elige validadores aleatoriamente - `_randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.

### 5. ¿Cómo mantener a los validadores equilibrados en cuanto a los montos apostados?

Cada vez que

- Se produce una menta, la persona que llama puede elegir el validador libremente
- Se produce un canje, el sistema elige validadores al azar

Este mecanismo casi garantiza que los tokens CORE en poder del módulo Earn se puedan dividir en diferentes validadores de manera uniforme.

Sin embargo, teniendo en cuenta que hay casos, el equilibrio se romperá mediante determinadas operaciones, p. Nuevo/canjeado de gran valor. También introdujimos algunos métodos para reequilibrar las apuestas a los validadores de Earn.

- **reequilibrio():** el sistema selecciona a los validadores con los montos de apuesta más grandes y más pequeños y los hace alcanzar el equilibrio incluso si la brecha excede el umbral predefinido.
- **manualRebalance():** el operador transfiere manualmente las apuestas de un validador a otro.

### 6. ¿Cómo se calcula el ratio de conversión?

En cada ronda después de que ocurre la ronda de turno, el módulo Ganar obtiene recompensas de cada validador y las delega en consecuencia. Así es como se autocompone internamente. Durante el período, el sistema también traslada las apuestas de validadores inactivos/encarcelados a activos para mejorar la APR general.

Y después de eso, la relación de conversión de stCORE/CORE también se puede actualizar. La fórmula para eso es

```
Cantidad de tokens CORE apostados en PledgeAgent / stCORE.totalsupply()
```

Dado que **el reclamo de recompensas solo ocurre una vez al día** en dicho diseño, la tasa de conversión se puede mantener igual durante todo el día hasta que ocurra la siguiente ronda.

La lógica anterior se implementa en el método `afterTurnRound()`.

### 7. ¿Cómo manejar la protección de cuotas al delegar/desdelegar?

Tenga en cuenta que en el contrato `PledgeAgent` (el contrato de participación), cuando los usuarios delegan

- La cantidad de CORE **debe** >= 1

Y cuando ellos no delegan

- La cantidad de CORE **debe** >= 1 **Y**
- El CORE restante que queda en un validador de esta dirección **debe** >= 1

Al manejar la delegación/anulación de delegación internamente, el módulo "Gana" también debe seguir las mismas restricciones.

Las elaboraciones de implementación/caso están en el método `_undelegateWithStrategy()`.

Al llamar al método `mint()`, la persona que llama debe pasar una dirección de validador para apostar los tokens CORE; al hacerlo, esperamos tratar a todos los candidatos de validador por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

Durante el canje, el contrato Earn elige validadores aleatoriamente: ` _randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.
