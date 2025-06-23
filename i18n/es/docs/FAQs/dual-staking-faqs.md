---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas duales

---

### 1\. ¿Existe algún requisito para la apuesta dual?

Para habilitar mayores rendimientos para el staking de Bitcoin mediante Dual Staking, los usuarios deben cumplir con los siguientes requisitos:

1. Apoye tanto CORE como Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de doble apuesta **Y**
2. La dirección de la wallet utilizada para el staking de CORE _**debe**_ coincidir con la dirección designada para recibir las recompensas de CORE derivadas del staking de Bitcoin.

### 2\. En el marco de la apuesta dual, ¿los participantes obtienen recompensas por apostar tanto en CORE como en Bitcoin?

Dual Stake está diseñado específicamente para aumentar los rendimientos de las apuestas de Bitcoin y no afecta el rendimiento obtenido de las apuestas CORE. Al igual que con las apuestas independientes de Bitcoin y CORE, los usuarios recibirán recompensas separadas por cada activo. Sin embargo, si la cantidad de CORE apostada supera un cierto umbral, el rendimiento de la apuesta de Bitcoin recibirá un impulso adicional. Ten en cuenta que los porcentajes de rendimiento adicional se aplican únicamente al staking de Bitcoin, lo que permite a los stakers de Bitcoin maximizar sus retornos sin modificar la estructura de recompensas del staking de CORE.

### 3\. ¿Cuáles son los pasos que deben seguir los clientes institucionales para participar en Dual Stake?

Los clientes institucionales que deseen beneficiarse del Dual Stake _**deben**_ apostar tanto Bitcoin como CORE simultáneamente, con la cantidad CORE apostada por encima de un cierto umbral para desbloquear los porcentajes de recompensa mejorados por la apuesta de Bitcoin.\
Además, deben asegurarse de que la dirección de recompensa CORE para Bitcoin Stake coincida con la dirección de recompensa CORE.\
Additionally, they are required to ensure that the CORE reward address for Bitcoin Staking matches the CORE staking address. Esta alineación es crucial, ya que verifica que el Bitcoin y el CORE apostados pertenecen al mismo propietario. Las plataformas de apuestas también deben verificar que las direcciones CORE se alineen para garantizar que los usuarios reciban las tasas de rendimiento de apuestas duales correctas en función de su actividad de apuestas combinada.

### 4\. Para los usuarios que ya están apostando Bitcoin y CORE, ¿hay algo que deban hacer para aprovechar el Dual Stake?

Para aprovechar al máximo la apuesta dual, los usuarios deben asegurarse de que la dirección de recompensa de apuesta de Bitcoin designada coincida con la dirección utilizada para la apuesta CORE. Los usuarios que hayan hecho staking de su Bitcoin y/o CORE en múltiples direcciones pueden considerar consolidar su staking en una sola dirección para optimizar el rendimiento, maximizar los retornos y asegurarse de que el CORE en staking supere el umbral requerido para desbloquear los porcentajes de rendimiento más altos en el staking de Bitcoin.

### 5\. ¿Cómo se calculan los rendimientos con el modelo Dual Staking?

- Los rendimientos globales del staking fluctúan según los cambios en las siguientes variables:
  - [Cantidad total de CORE en staking en todos los validadores](https://stake.coredao.org/validators)
  - [La cantidad total de Bitcoin en staking a través de todos los validadores](https://stake.coredao.org/validators)
  - La variación relativa del precio entre Bitcoin y CORE
  - [El ajuste anual de recompensas](../Learn/core-token/tokenomics.md)
- Los rendimientos de staking específicos de cada validador varían según estos factores adicionales:
  - Número total de validadores activos
  - Comisión del validador
  - La delegación recibida en hash, staking de Bitcoin y staking de CORE
  - Niveles de Dual-Staking

### 6\. ¿Cómo equilibran los usuarios CORE y Bitcoin entre validadores para maximizar el rendimiento?

Para que los usuarios puedan ver la distribución de su CORE, Bitcoin y Hash delegados en cada validador, pueden visitar el [sitio web oficial de staking](https://stake.coredao.org/) de Core. Los rendimientos de staking de CORE y Bitcoin varían entre validadores, ya que dependen del monto total y ponderado de las delegaciones que cada validador recibe. Consulta [aquí](../Learn/core-concepts/satoshi-plus-consensus/rewards#3-validator-rewards) para más detalles.\
La práctica de reequilibrar las delegaciones entre validadores es esencial para maximizar las recompensas generales y mantener un ecosistema saludable de validadores. Cuando un validador recibe una delegación insuficiente, corre el riesgo de volverse inactivo. Por el contrario, una delegación excesiva a un solo validador puede dar lugar a recompensas reducidas para cada delegado, ya que las recompensas deben compartirse entre un grupo más grande de delegados.\
El acto de los delegados de reequilibrar su delegación para maximizar la recompensa es la fuerza impulsora para garantizar un conjunto equilibrado de validadores.\
El acto de que los delegadores reajusten sus delegaciones para maximizar recompensas es el motor que garantiza un conjunto equilibrado de validadores. Para los usuarios que prefieren no gestionar activamente sus delegaciones, se recomienda distribuir los stakes de manera equitativa entre todos los validadores activos. Este enfoque mejora la estabilidad en los porcentajes de recompensa.

### 7\. ¿Existe algún riesgo de perder sus activos de Bitcoin durante la doble apuesta?

Dual Staking is a [self-custodial process](../stake-and-delegate/btc-staking/overview.md), allowing users to maintain complete control over their assets. Durante todo el proceso de apuesta, Bitcoin permanece seguro en la billetera del usuario.  Los participantes no enfrentan ningún riesgo de recorte, riesgo de contrato inteligente externo o riesgo de contraparte. Los supuestos de confianza para apostar Bitcoin son los mismos supuestos de confianza que subyacen a la tenencia de Bitcoin.

### 8\. While Bitcoin is time-locked, can users unstake CORE that’s dual staked with Bitcoin? If so, do they lose any rewards earned before unstaking CORE?

Users can unstake CORE at any time, just as they can when staking CORE independently. La única diferencia es que cuando se calcula la recompensa de la apuesta de Bitcoin, el porcentaje de recompensa disminuirá debido a la disminución del CORE apostado. Tenga en cuenta que esta reducción solo se aplica a recompensas futuras y no se aplica a recompensas ya obtenidas por el usuario.

### 9\. ¿Cómo se aseguran los usuarios de que la dirección de recompensa CORE para la apuesta de Bitcoin sea la misma que la dirección de apuesta CORE cuando apuestan a través del [sitio web de apuesta de Core](https://stake.coredao.org/)?

En **stake.coredao.org**, para garantizar que la dirección de recompensa CORE para apostar Bitcoin sea la misma que la dirección de apuesta CORE, asegúrese de seguir los siguientes pasos:

1. To stake CORE, connect your Core wallet, which will then be used for signing the CORE staking transaction.
2. Para apostar Bitcoin, primero conecte **la misma billetera Core** y luego conecte su billetera Bitcoin. Cuando la transacción de participación de Bitcoin se construye a través del sitio web de participación, utiliza la dirección de la billetera Core conectada como dirección de recompensa principal para la participación de Bitcoin.

Siempre que el usuario utilice siempre la misma dirección de billetera Core para apostar tanto en CORE como en Bitcoin, será la misma dirección. Las transacciones de apuesta tanto para Bitcoin como para CORE también son rastreadas por la dirección Core. Once the Core wallet is connected, users can go to the "[My Staking](https://stake.coredao.org/mystaking)" section on the [staking website](https://stake.coredao.org/) to see all the CORE and Bitcoin staking transactions, all the accrued rewards in CORE for both Bitcoin staking and CORE staking.

### 10\. What happens to the delegators' reward if the validator to whom they delegated their assets gets slashed?

Si se elimina un validador, los participantes que delegaron su CORE o Bitcoin **no** serán eliminados. Sin embargo, dado que el validador no recibirá la recompensa de apuesta, los delegados también perderán las recompensas de apuesta de esa ronda.