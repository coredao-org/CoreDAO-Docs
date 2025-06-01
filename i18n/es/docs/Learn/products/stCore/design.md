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

- **`afterTurnRound()`:** Implements autocompounding
- **`rebalance()`:** Balances staking between the most and least staked validators
- **`manualRebalance()`:** Manually transfers staking between validators

### Validator Selection on Mint/Redeem

Whenever a `mint` happens, the `Earn` contract delegates CORE to `PledgeAgent`. While when a `redeem` happens, the `Earn` contract undelegates CORE from `PledgeAgent`. Esto se implementa de esta manera para mantener la contabilidad más simple.

When users mint, they must specify a validator address to stake the CORE with. This ensures equal treatment of all validator candidates, whether elected or queued. For a smoother experience, the official frontend may randomly select a validator on behalf of the user.

During redemption, the `Earn` contract selects validators randomly using `_randomIndex()`. This random index determines where in the validator list the system starts undelegating CORE until the requested amount is reached.

### Keeping Validators Balanced in Stake Amounts

Validator distribution works as follows:

- When minting, users choose the validator
- When redeeming, the system randomly selects validators

This system naturally balances staking across validators. However, large mint or redeem operations can disrupt this balance. To correct such imbalances, two rebalancing methods are available:

- **`rebalance()`:** Automatically balances the validator with the most staked CORE and the one with the least, if the difference exceeds a set threshold
- **`manualRebalance()`:** Allows the operator to manually redistribute stake between validators

### Cálculo de la Relación de Conversión stCORE/CORE

Each round, after the turn round completes, the `Earn` module:

- Collects rewards from validators
- Re-delegates rewards to the same validators (autocompounding)
- Moves stake from jailed/inactive validators to active ones to maximize APR

Then, the conversion ratio is recalculated using the formula:

```
    Cantidad de tokens CORE apostados en PledgeAgent / stCORE.totalsupply() 
```

Since **rewards claiming only happens once per day**, the conversion rate remains same for the entire day until the next turn round happens. The logics for this are implemented in the `afterTurnRound()` method.

### Manejo de la Protección de Deudas al delegar/desdelegar

In the `PledgeAgent` contract (the staking contract), when users delegate the amount of CORE **must** >= 1.

Whereas, upon  undelegation

- La cantidad de CORE **debe** ser >= 1 **Y**
- El CORE restante en un validador de esta dirección **debe** ser >= 1

When handling `delegate` and `undelegate` internally, the `Earn` module must also follow the same restrictions.

The implementation of these requriements can be found in `_undelegateWithStrategy()` method.

