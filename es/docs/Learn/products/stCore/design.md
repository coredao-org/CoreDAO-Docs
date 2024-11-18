---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de Staking Líquido (stCORE)

---

stCORE está diseñado para mejorar la utilidad del token CORE y simplificar el proceso de staking. Esta iniciativa permite a los titulares de tokens maximizar el potencial de sus activos con mayor flexibilidad y eficiencia.

## Principios de Diseño

Los principios de diseño principales del staking líquido a través de stCORE en la cadena Core son los siguientes:

- Cambios simples o nulos en los protocolos existentes de la blockchain.
- Descentralizado y sin preocupaciones de seguridad para la red.
- Fácil de usar (desde la perspectiva del usuario).

## Resumen del Diseño

Después de investigar diferentes proyectos LST, como LiDO y Kava, entre otros, y combinar las características únicas de la blockchain de Core, el staking líquido en la blockchain de Core en forma de stCORE está diseñado de la siguiente manera:

- Introducimos un nuevo módulo llamado `Earn` junto con un token estándar ERC-20 **stCORE**.
- Los usuarios interactúan con el módulo `Earn` para acuñar/canjear/retiros de sus activos.
- El módulo `Earn` interactúa con los contratos de la plataforma Core, como `PledgeAgent` (el contrato de staking) y `CandidateHub`.
- Todo el valor incurrido en `Earn` se reflejará en el valor del token **stCORE**.
- La relación de conversión **CORE/stCORE** se actualizará **diariamente** para ajustarse al mecanismo de turnos de la blockchain Core.
- También introducimos algunos otros métodos para que el operador del sistema pueda reequilibrar y optimizar el staking en todos los validadores.

## Perspectiva del Usuario

### Mint

Los usuarios pueden acuñar stCORE usando CORE. En cualquier momento del día (UTC), pueden acuñar stCORE a la misma tasa de conversión. E.g. Por ejemplo, si la tasa de conversión es 1:1.1, entonces los usuarios pueden acuñar 100 stCORE usando 110 CORE.

### Acuñar

El sistema está diseñado de tal manera que los usuarios siempre pueden canjear cualquier cantidad de tokens stCORE que tengan. E.g. Por ejemplo, si la tasa de conversión es 1:1.1, los usuarios pueden canjear 100 stCORE para obtener 110 CORE de vuelta.

:::note
Hay un período de canje que por defecto es **7 días**. Una vez que los usuarios solicitan el canje al sistema, tienen **7 días** para retirar los tokens CORE a su billetera.
:::

## Casos de Uso Comunes de ERC-20

stCORE es un token estándar ERC-20 y los usuarios pueden realizar cualquier acción elegible sobre un token ERC-20, como transferir, proporcionar liquidez en DEX, intercambiar, etc.

## Implementaciones

La implementación del módulo `Earn` de staking líquido se puede encontrar [aquí](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

Los métodos de usuario en el módulo `Earn` incluyen los siguientes:

- **mint():** acuñar stCORE usando CORE
- **redeem():** canjear stCORE y obtener CORE de vuelta
- **withdraw():** reclamar CORE a la billetera después del período de canje

Los métodos del operador en el módulo `Earn` incluyen los siguientes:

- **afterTurnRound():** donde se implementa el autocompounding
- **rebalance():** equilibrar los validadores más y menos apostados
- **manualRebalance():** transferir arbitrariamente el staking entre dos validadores

### Selección de Validadores al Acuñar/Canjear

Ten en cuenta que siempre que ocurra un acuñamiento o canje, el contrato `Earn` delega CORE a `PledgeAgent` / desdelega CORE de `PledgeAgent`. Esto se implementa de esta manera para mantener la contabilidad más simple.

Al llamar al método `mint()`, el llamador necesita pasar una dirección de validador para hacer stake de los tokens CORE, al hacerlo esperamos tratar a todos los candidatos a validadores por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, podemos hacer que el frontend oficial elija aleatoriamente un validador adecuado y lo haga invisible para los usuarios.

Durante el canje, el contrato `Earn` elige validadores aleatoriamente - `_randomIndex()`, un índice será seleccionado aleatoriamente, el cual se usa como el índice de inicio para iterar a través del array de validadores hasta que se desdelegue suficiente CORE.

### Mantener los Validadores Balanceados en los Montos de Staking

Cada vez que

- Ocurre un acuñamiento, el llamador puede elegir un validador libremente
- Ocurre un canje, el sistema elige validadores aleatoriamente

Este mecanismo casi garantiza que los tokens CORE sostenidos por el módulo `Earn` puedan dividirse entre diferentes validadores de manera uniforme.

However, considering there are cases the balance will be broken by certain operations, e.g. large value mint/redeem. We also introduced a few methods to rebalance stakings to validators from Earn.

- **rebalance():** el sistema elige los validadores con los mayores y menores montos de staking y los hace equilibrarse si la brecha excede el umbral predefinido.
- **manualRebalance():** el operador transfiere manualmente el staking de un validador a otro.

### Cálculo de la Relación de Conversión stCORE/CORE

En cada ronda después de que ocurra el turno, el módulo `Earn` obtiene recompensas de cada validador y las delega nuevamente de manera correspondiente. Así es como se hace el auto-compounding internamente. Durante el período, el sistema también mueve el staking de validadores inactivos/en prisión a los activos para mejorar el APR general.

And after that the conversion ratio of stCORE/CORE can also be updated. The formula for that is

```
    Amount of CORE tokens staked on PledgeAgent / stCORE.totalsupply() 
```

Dado que **la reclamación de recompensas solo ocurre una vez al día** en dicho diseño, la tasa de conversión se puede mantener igual durante todo el día hasta que ocurra el siguiente ciclo.

La lógica anterior está implementada en el método `afterTurnRound()`.

### Manejo de la Protección de Deudas al delegar/desdelegar

Ten en cuenta que en el contrato `PledgeAgent` (el contrato de staking), cuando los usuarios delegan

- La cantidad de CORE **debe** ser >= 1

Y cuando desdelegan

- La cantidad de CORE **debe** ser >= 1 **Y**
- El CORE restante en un validador de esta dirección **debe** ser >= 1

Al manejar la delegación/desdelegación internamente, el módulo `Earn` también debe seguir las mismas restricciones.

Las implementaciones/casos de elaboración están en el método `_undelegateWithStrategy()`.

Al llamar al método `mint()`, el llamador debe pasar una dirección de validador para hacer stake de los tokens CORE. Al hacerlo, esperamos tratar a todos los candidatos a validadores por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, podemos hacer que el frontend oficial elija aleatoriamente un validador adecuado y lo haga invisible para los usuarios.

Durante la redención, el contrato `Earn` elige validadores aleatoriamente - ` _randomIndex()`, se seleccionará un índice aleatorio, el cual se usará como el índice de inicio para iterar a través del array de validadores hasta que se desdelegue suficiente CORE.
