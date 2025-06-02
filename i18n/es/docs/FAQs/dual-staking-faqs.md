---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas duales

---

### 1\. ¿Existe algún requisito para la apuesta dual?

Para permitir mayores rendimientos al apostar Bitcoin a través de Dual Stake, los usuarios deben cumplir con los siguientes requisitos:

1. Apoye tanto CORE como Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de doble apuesta **Y**
2. La dirección de la billetera de participación CORE _**debe**_ coincidir con la dirección de recompensas CORE designada para la participación de Bitcoin a la que se le paga el rendimiento.

### 2\. En el marco de la apuesta dual, ¿los participantes obtienen recompensas por apostar tanto en CORE como en Bitcoin?

Dual Stake está diseñado específicamente para aumentar los rendimientos de las apuestas de Bitcoin y no afecta el rendimiento obtenido de las apuestas CORE. Al igual que con las apuestas independientes de Bitcoin y CORE, los usuarios recibirán recompensas separadas por cada activo. Sin embargo, si la cantidad de CORE apostada supera un cierto umbral, el rendimiento de la apuesta de Bitcoin recibirá un impulso adicional. Tenga en cuenta que los porcentajes de rendimiento adicionales se aplican únicamente a las apuestas de Bitcoin, lo que permite a los participantes de Bitcoin maximizar los rendimientos sin alterar la estructura de recompensas de las apuestas CORE.

### 3\. ¿Cuáles son los pasos que deben seguir los clientes institucionales para participar en Dual Stake?

Los clientes institucionales que deseen beneficiarse del Dual Stake _**deben**_ apostar tanto Bitcoin como CORE simultáneamente, con la cantidad CORE apostada por encima de un cierto umbral para desbloquear los porcentajes de recompensa mejorados por la apuesta de Bitcoin.\
Además, deben asegurarse de que la dirección de recompensa CORE para Bitcoin Stake coincida con la dirección de recompensa CORE.\
Additionally, they are required to ensure that the CORE reward address for Bitcoin Staking matches the CORE staking address. Esta alineación es crucial, ya que verifica que el Bitcoin y el CORE apostados pertenecen al mismo propietario. Las plataformas de apuestas también deben verificar que las direcciones CORE se alineen para garantizar que los usuarios reciban las tasas de rendimiento de apuestas duales correctas en función de su actividad de apuestas combinada.

### 4\. Para los usuarios que ya están apostando Bitcoin y CORE, ¿hay algo que deban hacer para aprovechar el Dual Stake?

Para aprovechar al máximo la apuesta dual, los usuarios deben asegurarse de que la dirección de recompensa de apuesta de Bitcoin designada coincida con la dirección utilizada para la apuesta CORE. Los usuarios que han apostado su Bitcoin y/o CORE en múltiples direcciones pueden querer consolidar su apuesta en una sola dirección para optimizar el rendimiento y maximizar los retornos y garantizar que el CORE apostado esté por encima del umbral requerido para desbloquear porcentajes de rendimiento más altos para la apuesta de Bitcoin.

### 5\. ¿Cómo se calculan los rendimientos con el modelo Dual Staking?

- El rendimiento global del staking fluctúa en función de la evolución de las siguientes variables:
  - [Cantidad total de CORE en staking en todos los validadores](https://stake.coredao.org/validators)
  - [Cantidad total de BTC en staking en todos los validadores](https://stake.coredao.org/validators)
  - Cambio relativo de precio entre BTC y CORE
  - [Ajuste anual de recompensas](https://docs.coredao.org/docs/Learn/economics/core-token/tokenomics-and-utility#sound-supply-and-emissions)
- Los rendimientos de staking específicos de cada validador varían según estos factores adicionales:
  - Número total de validadores activos
  - Comisión del validador
  - La delegación recibida de hash, el staking de BTC y el staking de CORE
  - Niveles de Dual-Staking

### 6\. ¿Cómo equilibran los usuarios CORE y Bitcoin entre validadores para maximizar el rendimiento?

Para que los usuarios puedan ver la distribución de su CORE, Bitcoin y Hash delegados para cada validador, pueden visitar el [sitio web de apuestas] oficial de Core (https://stake.coredao.org/). Los rendimientos de participación de CORE y Bitcoin de cada validador varían porque dependen de la cantidad total y ponderada de delegaciones que recibe un validador; consulte [aquí](../Learn/core-concepts/satoshi-plus-consensus/rewards#3 -validator-rewards) para más detalles.\
La práctica de reequilibrar las delegaciones entre validadores es esencial para maximizar las recompensas generales y mantener un ecosistema saludable de validadores.\
La práctica de reequilibrar las delegaciones entre validadores es esencial para maximizar las recompensas generales y mantener un ecosistema saludable de validadores. Cuando un validador recibe una delegación insuficiente, corre el riesgo de volverse inactivo. Por el contrario, una delegación excesiva a un solo validador puede dar lugar a recompensas reducidas para cada delegado, ya que las recompensas deben compartirse entre un grupo más grande de delegados.\
El acto de los delegados de reequilibrar su delegación para maximizar la recompensa es la fuerza impulsora para garantizar un conjunto equilibrado de validadores.\
El acto de los delegantes de reequilibrar su delegación para maximizar la recompensa es la fuerza impulsora para garantizar un conjunto equilibrado de validadores. Para los usuarios que prefieren no gestionar activamente sus delegaciones, es recomendable distribuir las apuestas por igual entre todos los validadores activos. Este enfoque mejora la estabilidad en los porcentajes de recompensa.

### 7\. ¿Existe algún riesgo de perder sus activos de Bitcoin durante la doble apuesta?

El Dual Staking es un [proceso de autocustodia](../Learn/products/btc-staking/overview.md), que permite a los usuarios mantener el control total sobre sus activos. Durante todo el proceso de apuesta, Bitcoin permanece seguro en la billetera del usuario.  Los participantes no enfrentan ningún riesgo de recorte, riesgo de contrato inteligente externo o riesgo de contraparte. Los supuestos de confianza para apostar Bitcoin son los mismos supuestos de confianza que subyacen a la tenencia de Bitcoin.

### 8\. Si bien Bitcoin tiene un límite de tiempo, ¿pueden los usuarios cancelar la apuesta de CORE que tiene doble apuesta con Bitcoin? Si es así, ¿pierden las recompensas obtenidas antes de retirar la apuesta de CORE?

Los usuarios pueden retirar su apuesta de CORE en cualquier momento, al igual que cuando lo hacen de forma independiente. La única diferencia es que cuando se calcula la recompensa de la apuesta de Bitcoin, el porcentaje de recompensa disminuirá debido a la disminución del CORE apostado. Tenga en cuenta que esta reducción solo se aplica a recompensas futuras y no se aplica a recompensas ya obtenidas por el usuario.

### 9\. ¿Cómo se aseguran los usuarios de que la dirección de recompensa CORE para la apuesta de Bitcoin sea la misma que la dirección de apuesta CORE cuando apuestan a través del [sitio web de apuesta de Core](https://stake.coredao.org/)?

En **stake.coredao.org**, para garantizar que la dirección de recompensa CORE para apostar Bitcoin sea la misma que la dirección de apuesta CORE, asegúrese de seguir los siguientes pasos:

1. Para apostar CORE, conecte su billetera Core, que luego se utilizará para firmar la transacción de participación CORE.
2. Para apostar Bitcoin, primero conecte **la misma billetera Core** y luego conecte su billetera Bitcoin. Cuando la transacción de participación de Bitcoin se construye a través del sitio web de participación, utiliza la dirección de la billetera Core conectada como dirección de recompensa principal para la participación de Bitcoin.

Siempre que el usuario utilice siempre la misma dirección de billetera Core para apostar tanto en CORE como en Bitcoin, será la misma dirección. Las transacciones de apuesta tanto para Bitcoin como para CORE también son rastreadas por la dirección Core. Una vez que la billetera Core esté conectada, los usuarios pueden ir a la sección "[Mi apuesta](https://stake.coredao.org/mystake)" en el [sitio web de apuesta](https://stake.coredao.org/) para vea todas las transacciones de participación de CORE y Bitcoin, todas las recompensas acumuladas en CORE tanto para la participación de Bitcoin como para la participación de CORE.

### 10\. ¿Qué sucede con la recompensa de los delegados si el validador al que delegaron sus activos es recortado?

Si se elimina un validador, los participantes que delegaron su CORE o Bitcoin **no** serán eliminados. Sin embargo, dado que el validador no recibirá la recompensa de apuesta, los delegados también perderán las recompensas de apuesta de esa ronda.