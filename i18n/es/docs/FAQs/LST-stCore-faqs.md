---
sidebar_label: Preguntas frecuentes sobre Liquid Staking (stCORE)
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas líquidas (stCORE)

---

### 1. ¿Qué es stCORE?

stCORE es una solución innovadora en la cadena de bloques Core diseñada para mejorar la utilidad de los tokens CORE mediante la introducción de apuestas líquidas. Esto permite a los poseedores de tokens CORE maximizar el potencial de sus activos con mayor flexibilidad y eficiencia. El proceso implica apostar tokens CORE para proteger la red y, simultáneamente, ganar liquidez mediante la acuñación de tokens stCORE, que se pueden utilizar en varios protocolos DeFi.

### 2. ¿Cuáles son los beneficios de realizar apuestas líquidas con stCORE?

La apuesta líquida con stCORE permite a los poseedores de tokens CORE participar en protocolos DeFi mientras sus activos están en apuesta. Esto mejora la utilidad de los activos y la generación potencial de rendimiento sin comprometer las contribuciones de seguridad a la red.

### 4. ¿Cómo se eligen los validadores en mint/redeem?

De forma predeterminada, se requiere un período de desbloqueo de **7 días** para retirar CORE después del inicio del canje.

### 5. ¿Cómo se eligen los validadores al hacer mint/redeem?

Tenga en cuenta que cada vez que ocurre la acuñación/canjeo, el contrato `Earn` delega CORE a `PledgeAgent`/desdelega CORE de `PledgeAgent`. Esto se implementa de una manera que simplifica la contabilidad.

Al llamar al método `mint()`, el usuario debe pasar una dirección de validador a la cual se hará staking de los tokens CORE. Con esto, se busca tratar a todos los candidatos a validador por igual, sin importar si ya están electos o en cola. Sin embargo, para mejorar la experiencia del usuario, es posible que el frontend oficial elija aleatoriamente un validador adecuado y oculte este detalle al usuario.

Durante el canje, el contrato `Earn` elige validadores aleatoriamente - `_randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.

### 7. ¿Cómo se mantiene una distribución equilibrada de validadores en términos de cantidades en staking?

Cada vez que

- Se realiza un mint, el usuario puede elegir libremente un validador
- Se realiza un redeem, el sistema selecciona validadores de forma aleatoria

Este mecanismo garantiza que los tokens CORE administrados por el módulo Earn puedan distribuirse de manera equitativa entre diferentes validadores.

Sin embargo, considerando que ciertas operaciones, como mint/redeem de gran valor, pueden romper este equilibrio. También introdujimos algunos métodos para reequilibrar las apuestas a los validadores de Earn.

- **rebalance():** El sistema selecciona a los validadores con las mayores y menores cantidades en staking, y asegura que se igualen si la diferencia supera un umbral predefinido.
- **manualRebalance():** El operador puede transferir staking manualmente de un validador a otro.

### 6. ¿Cómo se calcula el ratio de conversión?

En cada ronda, después de que ocurre la turn round, el módulo Earn obtiene las recompensas de cada validador y las delega nuevamente de manera correspondiente. Así es como realiza auto-compounding internamente. Durante este periodo, el sistema también transfiere el staking desde validadores inactivos o jailed hacia validadores activos para mejorar el APR general.

Además, la tasa de conversión de stCORE/CORE también puede actualizarse posteriormente. La fórmula para eso es

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply()
```

Dado que **la reclamación de recompensas solo ocurre una vez al día**, en este diseño, la tasa de conversión puede mantenerse constante durante todo el día hasta que ocurra la siguiente turn round.

La lógica anterior se implementa en el método `afterTurnRound()`.

### 7. ¿Cómo manejar la protección de deudas al delegar o retirar delegación?

Tenga en cuenta que en el contrato `PledgeAgent` (el contrato de participación), cuando los usuarios delegan

- La cantidad de CORE **debe** >= 1

Y cuando ellos no delegan

- La cantidad de CORE **debe** >= 1 **Y**
- El CORE restante que queda en un validador de esta dirección **debe** >= 1

Al manejar operaciones de delegación o retirada de delegación internamente, el módulo `Earn` también debe cumplir con las mismas restricciones.

La implementación y ejemplos de casos están elaborados en el método `_undelegateWithStrategy()`.

Al llamar al método `mint()`, el llamador debe proporcionar una dirección de validador a la cual delegar los tokens CORE. Con esto, se busca tratar a todos los candidatos a validadores por igual, sin importar si ya están elegidos o en la cola. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

Durante la redención, el contrato Earn elige validadores de forma aleatoria utilizando `randomIndex() `, donde se selecciona aleatoriamente un índice para servir como punto de partida al iterar sobre el arreglo de validadores, hasta que se haya retirado suficiente cantidad de tokens CORE mediante undelegation.