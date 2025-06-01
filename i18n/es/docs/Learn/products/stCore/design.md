---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de Staking Líquido (stCORE)

---

stCORE está diseñado para mejorar la utilidad del token CORE y simplificar el proceso de staking. Esta iniciativa permite a los titulares de tokens maximizar el potencial de sus activos con mayor flexibilidad y eficiencia.

## Resumen del Diseño

El liquid staking a través de stCORE se estructura de la siguiente manera:

- Se introduce un nuevo módulo llamado `Earn` junto con un token ERC-20 estándar denominado **stCORE**
- Los usuarios interactúan con el módulo `Earn` para mintear, canjear y retirar activos
- El módulo `Earn`interactúa con contratos de la plataforma Core como `PledgeAgent` (staking) y `CandidateHub`
- Todo el valor acumulado por el módulo `Earn`se refleja en el valor del token **stCORE**
- La relación de conversión **CORE/stCORE** se actualiza **diariamente**
- Se proporcionan métodos adicionales para que el operador del sistema pueda rebalancear y optimizar el staking entre validadores

## Perspectiva del Usuario

### Mint

Los usuarios pueden acuñar stCORE usando CORE. En cualquier momento del día (hora UTC), la relación de conversión permanece fija. Por ejemplo, si la relación es 1:1.1, los usuarios pueden mintear 100 stCORE usando 110 CORE.

###

Los usuarios pueden hacer redeem de cualquier cantidad de stCORE que posean. Por ejemplo, si la relación de conversión es 1:1.1, los usuarios pueden hacer redeem de 100 stCORE para recibir 110 CORE.

:::note
Existe un período de redeem de **7 días**. Una vez que los usuarios inicien el redeem, deberán esperar **7 días** antes de poder retirar los tokens CORE a su wallet.
:::

## Casos de uso comunes con ERC-20

stCORE es un token estándar ERC-20, por lo que puede utilizarse en todos los escenarios típicos de ERC-20: transferencias, provisión de liquidez en DEXs, swaps, entre otros.

## Implementaciones

La implementación del módulo `Earn` para liquid staking puede consultarse [aquí](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

Métodos para usuarios en el módulo `Earn`:

- **`mint()`:** permite mint de stCORE utilizando CORE
- **`redeem()`:** permite redeem de stCORE a cambio de CORE
- **`withdraw()`:** permite retirar CORE a la billetera después del período de redeem

Métodos para el operador en el módulo `Earn`:

- **`afterTurnRound()`:** implementa autocompounding
- **`rebalance()`:** reajusta el staking entre los validadores más y menos delegados
- **`manualRebalance()`:** permite mover staking manualmente entre validadores

### Selección de validadores al hacer Mint/Redeem

Cuando ocurre un `mint`, el contrato `Earn` delegará CORE a `PledgeAgent`. Cuando ocurre un `redeem`, el contrato`Earn` des-delegará CORE desde`PledgeAgent`. Esto se implementa de esta manera para mantener la contabilidad más simple.

En el proceso de mint, los usuarios deben especificar una dirección de validador para delegar el CORE. Esto garantiza un tratamiento equitativo para todos los candidatos a validadores, estén elegidos o en espera. Para facilitar la experiencia del usuario, el frontend oficial puede seleccionar aleatoriamente un validador por él.

En el proceso de redeem, el contrato `Earn` selecciona validadores aleatoriamente usando`_randomIndex()`. Este índice aleatorio determina en qué parte de la lista de validadores comienza la des-delegación de CORE hasta alcanzar la cantidad solicitada.

### Manteniendo el Equilibrio de Staking entre Validadores

La distribución entre validadores funciona de la siguiente manera:

- Durante el mint, los usuarios eligen el validador
- Durante el redeem, el sistema selecciona validadores aleatoriamente

Este enfoque genera un equilibrio natural en la distribución del staking entre los validadores. Sin embargo, operaciones grandes de mint o redeem pueden desequilibrar este reparto. Para corregir estos desequilibrios, existen dos métodos de reequilibrio:

- **`rebalance()`:** Reequilibra automáticamente el validador con más CORE en staking y el que tiene menos, si la diferencia supera un umbral predefinido
- **`manualRebalance()`:** Permite al operador redistribuir manualmente el staking entre validadores

### Cálculo de la Relación de Conversión stCORE/CORE

En cada round, después de que se completa la turn round, el módulo `Earn`:

- Recolecta recompensas de los validadores
- Re-delega las recompensas a los mismos validadores (autocompounding)
- Mueve el stake desde validadores jailed/inactivos hacia validadores activos para maximizar el APR

Luego, el ratio de conversión se recalcula usando la fórmula:

```
    Cantidad de tokens CORE apostados en PledgeAgent / stCORE.totalsupply() 
```

Dado que **la recolección de recompensas solo ocurre una vez al día**, el ratio de conversión se mantiene constante durante todo el día hasta que ocurre la siguiente turn round. La lógica correspondiente se implementa en el método `afterTurnRound()`.

### Manejo de la Protección de Deudas al delegar/desdelegar

En el contrato `PledgeAgent` (el contrato de staking), al delegar, se _requiere_ que la cantidad de CORE sea >= 1.

Al momento de undelegation

- La cantidad de CORE **debe** ser >= 1 **Y**
- El CORE restante en un validador de esta dirección **debe** ser >= 1

Cuando se maneja `delegate` y `undelegate` de manera interna, el módulo`Earn` también debe seguir estas restricciones.

La implementación de estos requisitos puede encontrarse en el método `_undelegateWithStrategy()`.

