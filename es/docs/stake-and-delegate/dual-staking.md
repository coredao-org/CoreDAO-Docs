---
sidebar_label: Doble apuesta
hide_table_of_contents: false
sidebar_position: 2
---

# Apuesta dual: desbloquea un APY más alto para la apuesta en BTC

---

## Introducción

[Non-Custodial Bitcoin Stake](../Learn/products/btc-stake/overview) se integró en la cadena de bloques Core en abril de 2024, lo que permite a los usuarios apostar Bitcoin y obtener rendimiento mientras conservan el control total sobre sus activos. Esta implementación proporciona un mecanismo nativo para generar rendimiento de Bitcoin sin introducir suposiciones de confianza adicionales.

Para mejorar aún más la generación de rendimiento a partir de la apuesta de Bitcoin sin custodia a escala, **Dual Stake** desbloquea niveles de rendimiento más altos al apostar Bitcoin y CORE simultáneamente. Dado que las emisiones CORE diarias son fijas, aquellos que apuestan CORE junto con Bitcoin obtienen niveles de recompensa más altos que aquellos que apuestan Bitcoin solo. El porcentaje de aumento del rendimiento se determina apostando CORE por encima de múltiples umbrales definidos, y cada umbral corresponde a niveles crecientes de recompensas de apuesta de Bitcoin. Al vincular mayores recompensas por apostar Bitcoin con el volumen de tokens CORE apostados, este enfoque anima a los apostadores de Bitcoin a hacer un compromiso más profundo con el ecosistema Core y maximiza los rendimientos para los usuarios comprometidos.

## ¿Qué cambia con el doble stake?

Desde la perspectiva de cómo se realiza el stake, nada cambia fundamentalmente con el Dual Stake. Los usuarios aún pueden apostar Bitcoin y CORE de forma independiente; sin embargo, al apostar tanto en Bitcoin como en CORE simultáneamente, se desbloquea el potencial de obtener mayores rendimientos al apostar en Bitcoin. Apostar ambos activos no es obligatorio, sino más bien una mejora opcional para los poseedores de Bitcoin que buscan maximizar su rendimiento. Piense en esto como un aumento de recompensa, donde los apostadores de Bitcoin recibirán recompensas mejoradas a medida que aumenten la cantidad de CORE apostado.

Dual Stake fortalece la relación entre Bitcoin y las cadenas de bloques Core, alineando incentivos y valor en ambos ecosistemas, al ofrecer mayores recompensas para aquellos que participan activamente en ambas opciones de stake, sin introducir nuevos requisitos o complejidades en el proceso de stake.

## Características clave de la apuesta dual

1. **Mayores recompensas mediante apuestas CORE**: los apostadores de Bitcoin ahora pueden apostar tokens CORE junto con Bitcoin para desbloquear mayores rendimientos de apuestas de Bitcoin. Para obtener estas tasas de apuesta mejoradas, los apostadores de Bitcoin deben apostar CORE por encima de un cierto umbral.

2. **Impulso de recompensa acumulativa**: una vez que se adopte el Stake Dual, los apostadores de Bitcoin recibirán tasas más altas a medida que aumenten la cantidad de CORE apostado. Esto significa que los apostadores pueden maximizar sus retornos apostando más CORE.

3. **Risk-Free and Non-Custodial Staking**: Core's Non-Custodial Bitcoin Staking enables users to maintain full ownership of their assets throughout the staking process. Bitcoin permanece de forma segura en la billetera del usuario y se desbloquea cuando expira el período de bloqueo elegido. Ninguna entidad externa obtiene jamás la custodia del Bitcoin del apostador. Mientras tanto, a cambio de que los participantes bloqueen su Bitcoin, pueden delegar en validadores de Core que aseguren CORE y les ganen recompensas. Esta configuración elimina el riesgo de custodia y mejora la seguridad, ya que los participantes participan en la seguridad de Core sin poner en riesgo su Bitcoin.

## ¿Cómo funciona el doble stake?

Dual Stake no altera el proceso de apuesta para Bitcoin y CORE. Para obtener más información sobre la participación sin custodia de Bitcoin, consulte [aquí](../Learn/products/btc-stake/overview) y consulte esta [guía] detallada(./delegating-core) sobre la delegación CORE.

El Dual Stake crea una oportunidad para desbloquear rendimientos más altos cuando tanto Bitcoin como CORE se apuestan simultáneamente, con diferentes umbrales de apuesta CORE correspondientes a diferentes niveles de aumento de rendimiento en las recompensas de apuesta de Bitcoin en la cadena de bloques Core.

Los titulares de Bitcoin pueden [apostar su Bitcoin](../Learn/products/btc-sating/stake-btc-guide) a través del Stake de Bitcoin sin custodia de Core para acumular recompensas de CORE. Al [apostar posteriormente sus tokens CORE](delegating-core.md) por encima del umbral mínimo para Dual Stake, los usuarios desbloquean niveles más altos de rendimientos de Bitcoin, pagados en CORE. Si bien el Dual Stake mejora las recompensas de la apuesta de Bitcoin, no tiene ningún impacto en el rendimiento generado por la apuesta CORE en sí.

Para permitir mayores rendimientos al apostar Bitcoin a través de Dual Stake, los usuarios deben cumplir con los siguientes requisitos:

1. Apoye tanto CORE como Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de doble apuesta **Y**
2. La dirección de la billetera de participación CORE _**debe**_ coincidir con la dirección de recompensas CORE designada para la participación de Bitcoin a la que se le paga el rendimiento.

### Umbrales de rendimiento mejorados

Actualmente, las recompensas de Satoshi Plus se asignan a través de tres grupos, uno para cada una de las tres entidades que participan en la elección de validadores principales, a saber, (1) Hash Power Delegators, (2) Bitcoin Stakers y (3) CORE Stakers.

El Dual Stake no afecta a estos grupos de recompensas, pero permite a los apostadores de Bitcoin que también apuestan tokens CORE ganar una mayor proporción de recompensas en el grupo de Stake de Bitcoin. En esta sección, cubrimos en detalle el funcionamiento del algoritmo de calificación con respecto a la apuesta dual.

1. **Niveles de rendimiento aumentados**\
   En el marco de Dual Stake, hay 3 niveles de rendimiento aumentados para Bitcoin Stake según la proporción de CORE apostado en relación con Bitcoin apostado. Para los Solo-Stakers de Bitcoin únicamente, existe un cuarto nivel con la tasa de apuesta de Bitcoin más baja. Es importante tener en cuenta que el rendimiento porcentual anual (APY) de Bitcoin Stake puede fluctuar significativamente, a menudo debido a la variación de los precios y otras dinámicas del mercado. Como resultado, los rendimientos reales impulsados ​​pueden cambiar diariamente según las condiciones del mercado.

   - **P<sub>BASE</sub>** \= la tasa base de participación de BTC
   - **P<sub>Nivel1</sub>** \= la tasa base de participación de BTC \+ el nivel 1 aumentó el rendimiento
   - **P<sub>Nivel2</sub>** \= tasa base de participación de BTC \+ rendimiento impulsado por el nivel 2
   - **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= tasa base de participación de BTC \+ rendimiento impulsado por el nivel 3

2. **Umbrales CORE apostados y ratios de apuestas (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**\
   El mecanismo decisivo para el nivel de rendimiento de un participante de Bitcoin (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, \*_P<sub>Level2</sub>_ \*, o **P<sub>Level3</sub> (P<sub>MAX</sub>)**) se basa en los tokens CORE apostados en relación con Bitcoin apostados, donde **R** representa el `CORE: Ración BTC` y **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**:

   - **Umbral CORE apostado para P<sub>Nivel1</sub>** \= Cantidad apostada de BTC \* Ratio de apuesta (**R<sub>1</sub>**)
   - **Umbral CORE apostado para P<sub>Nivel2</sub>** \= Cantidad apostada de BTC \* Ratio de apuesta (**R<sub>2</sub>**)
   - **Umbral CORE apostado para P<sub>MAX</sub>** \= Cantidad apostada de BTC \* Ratio de apuesta (**R<sub>3</sub>**)

:::note
El CORE apostado y/o Bitcoin apostado se pueden distribuir entre múltiples validadores Core activos.
:::

3. **Determinación mejorada del nivel de rendimiento para cada (1) Bitcoin apostado**
   - Si el importe CORE apostado \< **R<sub>1</sub>**, el usuario está en el nivel **P<sub>BASE</sub>**
   - Si **R<sub>1</sub>** \=\< monto CORE apostado **R**\< **R<sub>2</sub>**, el usuario ingresa al nivel **P< 0>Nivel1</sub>**
   - Si **R<sub>2</sub>** \=\< monto CORE apostado **R** \< **R<sub>3</sub>**, el usuario ingresa al nivel **P< 0>Nivel2</sub>**
   - Si el monto CORE apostado \>= **R<sub>3</sub>**, el usuario ingresa al nivel **P<sub>Level3</sub>** (\*\*P<sub>MAX</sub> \*\*)

:::note
Los ratios de participación y el número de niveles son configurables y están sujetos a cambios mediante votación de la gobernanza.
:::

### Ejemplo

El siguiente es un ejemplo sencillo siguiendo los parámetros descritos anteriormente:

- Proporción de apuesta **R<sub>1</sub>** \= 1000
- Proporción de apuesta **R<sub>2</sub>** \= 3000
- Proporción de apuesta **R<sub>3</sub>** \= 8000
- Cantidad de BTC apostada \= 10 BTC

Los **Umbrales CORE apostados** con las variables anteriores son:

- Umbral de CORE apostado para **P<sub>Nivel1</sub>** \= 10 \* 1000 \= 10 000 CORE apostado
- Umbral de CORE apostado para **P<sub>Nivel2</sub>** \= 10 \* 3000 \= 30 000 CORE apostado
- Umbral de CORE apostado para **P<sub>Nivel3</sub>** \= 10 \* 8000 \= 80 000 CORE apostado

Por lo tanto, el BTC apostado en este ejemplo disfrutará de un rendimiento de

- **P<sub>BASE</sub>** si la cantidad de CORE apostado es inferior a 10 000
- **P<sub>Nivel1</sub>** si la cantidad de CORE apostado es superior o igual a 10 000 pero inferior a 30 000
- **P<sub>Nivel2</sub>** si la cantidad de CORE apostado es superior o igual a 30 000 pero inferior a 80 000
- **P<sub>Level3</sub> (P<sub>MAX</sub>)** si la cantidad de CORE apostado es superior o igual a 80 000

## ¿Quién puede beneficiarse del doble stake?

El doble scking está diseñado para todos, desde individuos hasta las instituciones financieras más grandes, cualquiera que quiera obtener mayores tasas de stake de Bitcoin. Además de los poseedores de Bitcoin, los mineros de Bitcoin también pueden aprovechar el Dual Stake para optimizar sus ganancias.

Los mineros de Bitcoin pueden ganar recompensas CORE delegando su poder de hash a validadores en la red Core y luego apostar tanto sus tokens Bitcoin como CORE. Al apostar tokens CORE por encima del umbral mínimo de doble apuesta, pueden desbloquear mayores rendimientos en sus tesorerías de Bitcoin. Esta integración de las recompensas mineras con el mecanismo de apuesta dual brinda a los mineros la oportunidad de maximizar los retornos tanto de sus actividades mineras como de apuestas.

:::info
Si tiene más preguntas o aclaraciones, consulte la [sección de preguntas frecuentes sobre apuestas duales] (../FAQs/dual-stake-faqs.md). Además, puede dirigir sus consultas al [Core Dev Forum](http://forum.coredao.org) o al [Core Discord Server](https://discord.gg/M2AGJKSG) para obtener soporte adicional.\
:::

## Conclusion

Dual Stake es un mecanismo para proporcionar tasas de participación de Bitcoin sostenibles a escala en Core. Al establecer aún más a Core como la plataforma BTCfi líder de extremo a extremo, el token CORE se está convirtiendo en la clave para desbloquear el rendimiento sostenible de Bitcoin.
