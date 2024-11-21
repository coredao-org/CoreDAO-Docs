---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de Liquid Stake (stCORE)

---

stCORE está diseñado para mejorar la utilidad del token CORE y simplificar el proceso de apuesta. Esta iniciativa permite a los poseedores de tokens maximizar el potencial de sus activos con mayor flexibilidad y eficiencia.

## Principios de diseño

Los principios de diseño principales del replanteo líquido a través de stCORE en Chain Chain son los siguientes:

- Cambios simples y mínimos o nulos en los protocolos blockchain existentes.
- Descentralizado y no traerá problemas de seguridad a la red.
- Fácil de usar (perspectiva del usuario).

## Resumen de diseño

Después de investigar diferentes proyectos LST, LiDO y Kava, etc., y combinar las características únicas de Core blockchain, la apuesta líquida en Core blockchain en forma de stCORE se diseña como se describe a continuación:

- Presentamos un nuevo módulo llamado "Gana" junto con un token ERC-20 estándar **stCORE**
- Los usuarios interactúan con el módulo "Gana" para acuñar/canjear/retirar sus activos
- El módulo `Earn` interactúa con los contratos de la plataforma Core, como `PledgeAgent` (el contrato de participación) y `CandidateHub`
- Todo el valor incurrido de "Gana" se reflejará en el valor del token **stCORE**
- La relación de conversión **CORE/stCORE** se actualizará **diariamente** para adaptarse al mecanismo de giro de Core blockchain
- También presentamos algunos otros métodos para que el operador del sistema pueda reequilibrar y optimizar las apuestas en todos los validadores.

## Perspectiva del usuario

### Mint

Los usuarios pueden Mintear stCORE usando CORE. En cualquier momento del día (UTC), pueden Mintear stCORE con la misma tasa de conversión. E.g. si la relación de conversión es 1:1,1, entonces los usuarios pueden crear 100 stCORE utilizando 110 CORE.

### Canjear

El sistema está diseñado de tal manera que los usuarios siempre puedan canjear cualquier cantidad de token stCORE que tengan. E.g. si la relación de conversión es 1:1,1, los usuarios pueden canjear 100 stCORE para recuperar 110 CORE.

:::note
Hay un período de canje que por defecto es de **7 días**. Una vez que los usuarios solicitan el canje del sistema, tienen **7 días** para retirar los tokens CORE a su billetera.
:::

## Casos de uso comunes de ERC-20

stCORE es un token ERC-20 estándar y los usuarios pueden realizar cualquier acción que sea elegible en un token ERC-20, como transferir, proporcionar liquidez en DEX, intercambiar, etc.

## Implementaciones

La implementación del módulo "Earn" de apuestas líquidas se puede encontrar [aquí](https://github.com/coredao-org/Earn/blob/main/contracts/Earn.sol).

Los métodos de usuario en el módulo "Ganar" incluyen lo siguiente:

- **mint():** mint stCORE usando CORE
- **redeem():** canjea stCORE y recupera CORE
- **retirar():** reclamar CORE a la billetera después del período de canje

Los métodos de operador en el módulo "Ganar" incluyen lo siguiente:

- **afterTurnRound():** donde se implementa la autocomposición
- **rebalance():** equilibra los validadores más o menos apostados
- **manualRebalance():** transferir arbitrariamente apuestas entre dos validadores

### Selección de validadores en mint/canjear

Tenga en cuenta que cada vez que ocurre la mint/canjeo, el contrato "Earn" delega CORE a "PledgeAgent"/desdelega CORE de "PledgeAgent". Esto se implementa de tal manera que la contabilidad sea más sencilla.

Al llamar al método `mint()`, la persona que llama debe pasar una dirección de validador para apostar los tokens CORE; al hacerlo, esperamos tratar a todos los candidatos de validador por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

Durante el canje, el contrato `Earn` elige validadores aleatoriamente - `_randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.

### Mantener a los validadores equilibrados en los montos de apuesta

Cada vez que

- Se produce una mint, la persona que llama puede elegir el validador libremente
- Se produce un canje, el sistema elige validadores al azar

Este mecanismo casi garantiza que los tokens CORE en poder del módulo Earn se puedan dividir en diferentes validadores de manera uniforme.

Sin embargo, teniendo en cuenta que hay casos, el equilibrio se romperá mediante determinadas operaciones, p. Nuevo/canjeado de gran valor. También introdujimos algunos métodos para reequilibrar las apuestas a los validadores de Earn.

- \*\*rebalance():\*\*el sistema selecciona a los validadores con los montos de apuesta más grandes y más pequeños y los hace alcanzar el equilibrio incluso si la brecha excede el umbral predefinido.
- **manualRebalance():** el operador transfiere manualmente las apuestas de un validador a otro.

### Cálculo del ratio de conversión stCORE/CORE

En cada ronda después de que ocurre el turno, el módulo "Ganar" obtiene recompensas de cada validador y las delega en consecuencia. Así es como se autocompone internamente. Durante el período, el sistema también traslada las apuestas de validadores inactivos/encarcelados a activos para mejorar la APR general.

Y después de eso, la relación de conversión de stCORE/CORE también se puede actualizar. La fórmula para eso es

```
Cantidad de tokens CORE apostados en PledgeAgent / stCORE.totalsupply()
```

Dado que **el reclamo de recompensas solo ocurre una vez al día** en dicho diseño, la tasa de conversión se puede mantener igual durante todo el día hasta que ocurra la siguiente ronda.

La lógica anterior se implementa en el método `afterTurnRound()`.

### Manejo de la protección de cuotas al delegar/desdelegar

Tenga en cuenta que en el contrato `PledgeAgent` (el contrato de participación), cuando los usuarios delegan

- La cantidad de CORE **debe** >= 1

Y cuando ellos no delegan

- La cantidad de CORE **debe** >= 1 **Y**
- El CORE restante que queda en un validador de esta dirección **debe** >= 1

Al manejar la delegación/anulación de delegación internamente, el módulo "Gana" también debe seguir las mismas restricciones.

Las elaboraciones de implementación/caso están en el método `_undelegateWithStrategy()`.

Al llamar al método `mint()`, la persona que llama debe pasar una dirección de validador para apostar los tokens CORE; al hacerlo, esperamos tratar a todos los candidatos de validador por igual, sin importar si ya están elegidos o en cola. Sin embargo, para mejorar la experiencia del usuario, es posible que tengamos la interfaz oficial para elegir aleatoriamente un validador adecuado y hacerlo invisible para los usuarios.

Durante el canje, el contrato Earn elige validadores aleatoriamente: ` _randomIndex()`, se seleccionará aleatoriamente un índice, que se utiliza como índice inicial para iterar a través de la matriz de validadores hasta que se deleguen suficientes tokens CORE.
