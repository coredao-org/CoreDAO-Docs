---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Descripción general de apostar en Core

---

El staking es un componente fundamental del mecanismo de consenso Satoshi Plus de Core. Permite tanto a los holders de tokens CORE como a los holders de Bitcoin participar en la seguridad de la red y ganar recompensas. A diferencia de los sistemas tradicionales Proof of Stake, la arquitectura única de Core permite dos mecanismos de staking distintos: la delegación de tokens CORE y el timelocking de Bitcoin, que junto con la participación de los mineros de Bitcoin forman la base de la selección de validadores y la seguridad de la red.

## Cómo funciona el staking en la blockchain central

El sistema de staking de Core combina múltiples métodos de participación que contribuyen a la elección de validadores mediante un mecanismo de puntuación híbrida. Cada validador recibe una puntuación híbrida basada en tres factores: el apoyo de mineros de Bitcoin (DPoW), los tokens CORE delegados (DPoS) y los Bitcoin en timelock.

### Staking de Tokens CORE

Los holders de tokens CORE pueden delegar sus tokens a validadores sin transferir la propiedad:

1. Los holders de tokens seleccionan un validador al cual delegar
2. Al delegar, los tokens permanecen bajo custodia del titular pero quedan bloqueados para staking
3. Los validadores reciben el stake delegado, lo que fortalece su posición en la elección de validadores
4. Las recompensas obtenidas por los validadores se comparten con los delegadores proporcionalmente a su participación

### Staking de Bitcoin

Los holders de Bitcoin pueden participar en el consenso Satoshi Plus de Core mediante el mecanismo nativo de timelocking de Bitcoin:

1. Los holders de Bitcoin utilizan la función CLTV para hacer timelock de su Bitcoin por un período especificado
2. Durante la creación del timelock, incluyen metadatos que especifican su validador elegido y la dirección de recompensas
3. El monto de Bitcoin en timelock contribuye a la puntuación híbrida del validador seleccionado para su elección
4. A medida que el validador produce bloques, el poseedor de Bitcoin recibe recompensas en CORE proporcionales al monto en timelock
5. Cuando finaliza el período de timelock, el Bitcoin vuelve a estar disponible para gastar, el validador pierde ese apoyo delegado y el poseedor de Bitcoin deja de recibir recompensas en CORE

### Elección de Validadores

El conjunto de validadores se determina mediante un proceso de elección basado en hybrid score:

1. En cada ronda, todos los validadores reciben un hybrid score a basada en los tokens CORE delegados, el Bitcoin bloqueado y el apoyo de los mineros de Bitcoin
2. Los 27 validadores con hybrid scores más altos son elegidos para formar parte del conjunto activo de validadores
3. Los validadores elegidos producen bloques y validan transacciones en la blockchain de Core
4. Las recompensas acumuladas durante cada ronda se distribuyen al final de la misma
5. El conjunto de validadores para la siguiente ronda se determina en función de hybrid scores

## Economía de apuestas

**Fuentes de Recompensas:**

- **Recompensas por Bloques:** Nuevos tokens CORE se emiten según un calendario fijo de 81 años con una tasa anual de reducción del 3.61%
- **Fees de Transacción:** Una porción de las fees de las transacciones en la blockchain de Core contribuye al fondo de recompensas del consenso

## Importancia del Staking

El staking cumple varios roles críticos en el ecosistema Core:

- **Seguridad:** Al requerir que los validadores tengan un apoyo significativo (en términos de CORE delegado, Bitcoin en timelock y apoyo de mineros), la red promueve validadores con incentivos alineados con el ecosistema en general
- **Descentralización:** El enfoque triple para la elección de validadores mitiga vectores de centralización
- **Sostenibilidad Económica:** El mecanismo de staking distribuye recompensas a varios participantes, incentivando una participación simbiótica
- **Mejora de la Utilidad de Bitcoin:** Al permitir que los poseedores de Bitcoin participen en el consenso manteniendo la custodia, Core extiende la utilidad de Bitcoin más allá del simple almacenamiento de valor

## Dinámicas y estrategias de apuesta

Los participantes de la red Core pueden adoptar varias estrategias de participación para maximizar sus retornos e influencia en la red:

- **Rendimiento del Validador:** Delegar a validadores de alto rendimiento es crucial, ya que las recompensas no se acumulan para delegadores que apoyan a validadores inactivos o maliciosos.
- **Gestión de Riesgo:** Diversificar la delegación entre varios validadores puede ayudar a mitigar riesgos asociados con la posible falla de un validador individual.

## Conclusión

La arquitectura de staking de Core representa una innovación significativa en el diseño del consenso al unir Bitcoin con mecanismos modernos de staking. Al permitir que tanto los holders de CORE como de Bitcoin participen en el consenso, Core crea un modelo de seguridad robusto y multinivel que alinea incentivos entre diferentes grupos de participantes.