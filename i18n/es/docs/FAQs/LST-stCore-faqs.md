---
sidebar_label: Preguntas frecuentes sobre apuestas líquidas (stCORE)
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas líquidas (stCORE)

---

### 3. ¿Cuál es el período de canje de stCORE?

stCORE es una solución innovadora en la cadena de bloques Core diseñada para mejorar la utilidad de los tokens CORE mediante la introducción de apuestas líquidas. Esto permite a los poseedores de tokens CORE maximizar el potencial de sus activos con mayor flexibilidad y eficiencia. El proceso implica apostar tokens CORE para proteger la red y, simultáneamente, ganar liquidez mediante la acuñación de tokens stCORE, que se pueden utilizar en varios protocolos DeFi.

### 2. ¿Cuáles son los beneficios de realizar apuestas líquidas con stCORE?

La apuesta líquida con stCORE permite a los poseedores de tokens CORE participar en protocolos DeFi mientras sus activos están en apuesta. Esto mejora la utilidad de los activos y la generación potencial de rendimiento sin comprometer las contribuciones de seguridad a la red.

### 4. ¿Cómo se eligen los validadores en mint/redeem?

De forma predeterminada, se requiere un período de desbloqueo de **7 días** para retirar CORE después del inicio del canje.

### 5. How are validators chosen on mint/redeem?

Tenga en cuenta que cada vez que ocurre la acuñación/canjeo, el contrato "Earn" delega CORE a "PledgeAgent"/desdelega CORE de "PledgeAgent". This is implemented in a way that keeps the bookkeeping simpler.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so, we hope to treat all validator candidates equally, no matter whether they are already elected or queued. However, in order to improve user experiences, we may have the official frontend to randomly choose a proper validator and make it unseen for users.

Durante el canje, el contrato `Earn` elige validadores aleatoriamente - `_randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.

### 7. How to maintain a balanced distribution of validators across staking amounts?

Every time when

- A mint happens, the caller can choose a validator freely
- A redeem happens, and the system picks validators randomly

This mechanism ensures that the CORE tokens held by the Earn module can be distributed evenly among different validators.

However, considering there are cases, the balance will be disrupted by certain operations, e.g., large-value mint/redeem. También introdujimos algunos métodos para reequilibrar las apuestas a los validadores de Earn.

- **rebalance():** The system selects the validators with the largest and smallest staking amounts and ensures they break even if the gap exceeds the predefined threshold.
- **manualRebalance():** The operator manually transfers staking from one validator to another.

### 6. ¿Cómo se calcula el ratio de conversión?

In every round after the turn round happens, the Earn module fetches rewards from each validator and delegates them back correspondingly. This is how it does auto-compounding internally. During this period, the system also transfers staking from inactive or jailed validators to active ones to improve the overall APR.

Additionally, the conversion ratio of stCORE/CORE can also be updated afterward. La fórmula para eso es

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply()
```

Since **rewards claiming only happens once per day**, in such a design, the conversion rate can be kept the same throughout the day until the next turn round happens.

La lógica anterior se implementa en el método `afterTurnRound()`.

### 7. How to handle the dues protection when delegating or undelegating?

Tenga en cuenta que en el contrato `PledgeAgent` (el contrato de participación), cuando los usuarios delegan

- La cantidad de CORE **debe** >= 1

Y cuando ellos no delegan

- La cantidad de CORE **debe** >= 1 **Y**
- El CORE restante que queda en un validador de esta dirección **debe** >= 1

When handling delegate/undelegate operations internally, the `Earn` module must also adhere to the same restrictions.

The implementation and case elaborations are in the `_undelegateWithStrategy()` method.

When calling the `mint()` method, the caller needs to pass in a validator address to stake the CORE tokens to - by doing so, we hope to treat all validator candidates equally, no matter whether they are already elected or queued. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

During redemption, the Earn contract chooses validators randomly using ` randomIndex()`, where an index is randomly selected to serve as the start index for iterating through the validators array until enough CORE tokens are undelegated.