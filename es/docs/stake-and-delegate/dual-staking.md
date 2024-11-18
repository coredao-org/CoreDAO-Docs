---
sidebar_label: Doble apuesta
hide_table_of_contents: false
sidebar_position: 2
---

# Apuesta dual: desbloquea un APY más alto para la apuesta en BTC

---

## Introducción

[Staking No Custodial de Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/overview) se integró en la blockchain de Core en abril de 2024, permitiendo a los usuarios apostar Bitcoin y ganar rendimiento mientras mantienen el control total sobre sus activos. Esta implementación proporciona un mecanismo nativo para generar rendimiento de Bitcoin sin introducir suposiciones de confianza adicionales.

Para mejorar aún más la generación de rendimiento a partir de la apuesta de Bitcoin sin custodia a escala, **Dual Stake** desbloquea niveles de rendimiento más altos al apostar Bitcoin y CORE simultáneamente. Dado que las emisiones CORE diarias son fijas, aquellos que apuestan CORE junto con Bitcoin obtienen niveles de recompensa más altos que aquellos que apuestan Bitcoin solo. El porcentaje de aumento del rendimiento se determina apostando CORE por encima de múltiples umbrales definidos, y cada umbral corresponde a niveles crecientes de recompensas de apuesta de Bitcoin. Al vincular mayores recompensas por staking de Bitcoin con el volumen de tokens CORE apostados, este enfoque alienta a los stakers de Bitcoin a asumir un compromiso más profundo con el ecosistema Core. Maximiza el rendimiento del rendimiento para los usuarios comprometidos.

## ¿Cómo funciona el doble stake?

Dual Stake no altera el proceso de apuesta para Bitcoin y CORE. Para obtener más información sobre cómo funciona el staking de Bitcoin sin custodia, consulte [aquí](https://docs.coredao.org/docs/Learn/products/btc-staking/overview). Además, consulte esta [guía](https://docs.coredao.org/docs/stake-and-delegate/delegating-core) detallada sobre cómo delegar CORE y [hacer staking](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide)/[canjear](https://docs.coredao.org/docs/Learn/products/btc-staking/Redeeming-Guide) BTC.

El Dual Staking crea una oportunidad para desbloquear rendimientos más altos cuando tanto Bitcoin como CORE se apuestan simultáneamente, con diferentes umbrales de staking de CORE correspondientes a distintos niveles de impulso de rendimiento sobre las recompensas de staking de Bitcoin en la blockchain de Core.

Los poseedores de Bitcoin pueden [apostar su Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide) a través del Staking No Custodial de Bitcoin de Core para acumular recompensas en CORE. Posteriormente, al [apostar sus tokens CORE](https://docs.coredao.org/docs/stake-and-delegate/delegating-core) en diferentes umbrales de Dual Staking, los usuarios desbloquean niveles más altos de rendimientos de Bitcoin, pagados en CORE. Aunque el Dual Staking mejora las recompensas del staking de Bitcoin, no afecta el rendimiento generado por el staking de CORE en sí.

Para habilitar rendimientos más altos en el staking de Bitcoin a través de Dual Staking, los usuarios deben cumplir con los siguientes requisitos:

1. Apoye tanto CORE como Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de doble apuesta **Y**
2. La dirección de la billetera de staking de CORE _**debe**_ coincidir con la dirección designada de recompensas de CORE para el staking de Bitcoin a la cual se pagará el rendimiento.

## ¿Cómo funciona el Dual Staking?

El Dual Staking no altera el proceso de staking de Bitcoin y CORE. Para obtener más información sobre la participación sin custodia de Bitcoin, consulte [aquí](../Learn/products/btc-stake/overview) y consulte esta [guía] detallada(./delegating-core) sobre la delegación CORE.

El Dual Stake crea una oportunidad para desbloquear rendimientos más altos cuando tanto Bitcoin como CORE se apuestan simultáneamente, con diferentes umbrales de apuesta CORE correspondientes a diferentes niveles de aumento de rendimiento en las recompensas de apuesta de Bitcoin en la cadena de bloques Core.

Los titulares de Bitcoin pueden [apostar su Bitcoin](../Learn/products/btc-sating/stake-btc-guide) a través del Stake de Bitcoin sin custodia de Core para acumular recompensas de CORE. Al [apostar posteriormente sus tokens CORE](delegating-core.md) por encima del umbral mínimo para Dual Stake, los usuarios desbloquean niveles más altos de rendimientos de Bitcoin, pagados en CORE. Si bien el Dual Stake mejora las recompensas de la apuesta de Bitcoin, no tiene ningún impacto en el rendimiento generado por la apuesta CORE en sí.

Para permitir mayores rendimientos al apostar Bitcoin a través de Dual Stake, los usuarios deben cumplir con los siguientes requisitos:

1. Apueste tanto CORE como Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de participación dual **Y**
2. La dirección de la billetera de participación CORE _**debe**_ coincidir con la dirección de recompensas CORE designada para la participación de Bitcoin a la que se le paga el rendimiento.

### Umbrales de rendimiento mejorados

Actualmente, las recompensas de Satoshi Plus se asignan a través de tres pools, uno para cada una de las tres entidades participantes en la elección de los validadores de Core, a saber: (1) Delegadores de Poder Hash, (2) Apostadores de Bitcoin y (3) Apostadores de CORE.

El Dual Stake no afecta a estos grupos de recompensas, pero permite a los apostadores de Bitcoin que también apuestan tokens CORE ganar una mayor proporción de recompensas en el grupo de Stake de Bitcoin. En esta sección, cubrimos en detalle el funcionamiento del algoritmo de calificación con respecto a la apuesta dual.

1. **Niveles de rendimiento aumentados**\
   En el marco de Dual Stake, hay 3 niveles de rendimiento aumentados para Bitcoin Stake según la proporción de CORE apostado en relación con Bitcoin apostado. Para los Solo-Stakers de Bitcoin únicamente, existe un cuarto nivel con la tasa de apuesta de Bitcoin más baja. Como resultado, los rendimientos reales impulsados ​​pueden cambiar diariamente según las condiciones del mercado. It is important to note that the annual reward rate for Bitcoin Staking can fluctuate significantly, often due to varying prices and other market dynamics.

   - **P<sub>BASE</sub>** \= la tasa base de participación de BTC
   - **P<sub>Nivel1</sub>** \= la tasa base de participación de BTC \+ el nivel 1 aumentó el rendimiento
   - **P<sub>Nivel2</sub>** \= tasa base de participación de BTC \+ rendimiento impulsado por el nivel 2
   - **P<sub>Level3</sub> (P<sub>MAX</sub>)** \= tasa base de participación de BTC \+ rendimiento impulsado por el nivel 3

Efectivamente, las emisiones de CORE se distribuyen de manera prorrateada en función del TVL de BTC, ponderado en función de su nivel de staking dual (CORE:BTC).

2. **Umbrales de CORE apostado y Ratios de Staking (R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>)**\
   El mecanismo decisivo para el nivel de rendimiento de un apostador de Bitcoin (**P<sub>BASE</sub>**, **P<sub>Level1</sub>**, **P<sub>Level2</sub>**, o **P<sub>Level3</sub> (P<sub>MAX</sub>)**) se basa en los tokens CORE apostados en relación con los Bitcoin apostados, donde **R** representa la proporción `CORE:BTC` y **R<sub>3</sub> \> R<sub>2</sub> \> R<sub>1</sub>**. Los actuales ratios de staking CORE:BTC son los siguientes:

   - Ratio de Staking R1 = 1,000 CORE por 1 BTC
   - Ratio de Staking R2 = 3,000 CORE por 1 BTC
   - Ratio de Staking R3 = 8,000 CORE por 1 BTC

Teniendo en cuenta estos ratios, los usuarios pueden calcular el umbral requerido para cada nivel como sigue:

```
* **Umbral de CORE apostado para P<sub>Level1</sub>** = Cantidad de BTC apostado * Ratio de Staking (**R<sub>1</sub>**)  
* **Umbral de CORE apostado para P<sub>Level2</sub>** = Cantidad de BTC apostado * Ratio de Staking (**R<sub>2</sub>**)  
* **Umbral de CORE apostado para P<sub>Level3</sub> (P<sub>MAX</sub>)** = Cantidad de BTC apostado * Ratio de Staking (**R<sub>3</sub>**)  
```

:::note
El CORE apostado y/o el Bitcoin apostado pueden ser distribuidos entre múltiples validadores activos de Core.
:::

3. **Determinación del nivel de rendimiento aumentado para cada (1) Bitcoin apostado**
   - Si la cantidad de CORE apostado < **R<sub>1</sub>**, el usuario está en el nivel **P<sub>BASE</sub>**.
   - Si **R<sub>1</sub>** ≤ cantidad de CORE apostado **R** < **R<sub>2</sub>**, el usuario entra en el nivel **P<sub>Level1</sub>**.
   - Si **R<sub>2</sub>** ≤ cantidad de CORE apostado **R** < **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level2</sub>**.
   - Si la cantidad de CORE apostado ≥ **R<sub>3</sub>**, el usuario entra en el nivel **P<sub>Level3</sub>** (**P<sub>MAX</sub>**).

:::note
Las ratios de staking y el número de niveles son configurables y están sujetos a cambios por votación de gobernanza.
:::

### Ejemplo

Lo siguiente es un ejemplo simple que explica cómo calcular el CORE requerido para hacer staking, basado en los parámetros mencionados anteriormente, para desbloquear los niveles de rendimiento aumentado para Dual Staking.

Ahora, el usuario tendrá que apostar CORE según los siguientes umbrales de CORE apostado para disfrutar de un mayor rendimiento en su BTC apostado con las variables anteriores:

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

:::note
The multiplier on each boosted yield tier is dynamic and subject to change as per the supply and demand conditions of the market
:::

## ¿Qué cambia con el doble stake?

Desde la perspectiva de cómo se realiza el stake, nada cambia fundamentalmente con el Dual Stake. Los usuarios aún pueden apostar Bitcoin y CORE de forma independiente; sin embargo, al apostar tanto en Bitcoin como en CORE simultáneamente, se desbloquea el potencial de obtener mayores rendimientos al apostar en Bitcoin. Piense en esto como un aumento de recompensa, donde los apostadores de Bitcoin recibirán recompensas mejoradas a medida que aumenten la cantidad de CORE apostado. Staking both assets is not mandatory but an optional enhancement for Bitcoin holders seeking to maximize their yield.

El doble staking fortalece la relación entre Bitcoin y las cadenas de bloques Core, alineando los incentivos y el valor en ambos ecosistemas. Ofrece mayores recompensas para aquellos que participan activamente en ambas opciones de staking sin introducir nuevos requisitos ni complejidades en el proceso de staking.

## Características clave de la apuesta dual

1. **Mayores recompensas mediante apuestas CORE**: los apostadores de Bitcoin ahora pueden apostar tokens CORE junto con Bitcoin para desbloquear mayores rendimientos de apuestas de Bitcoin. Para obtener estas tasas de apuesta mejoradas, los apostadores de Bitcoin deben apostar CORE por encima de un cierto umbral.

2. **Impulso de recompensa acumulativa**: una vez que se adopte el Stake Dual, los apostadores de Bitcoin recibirán tasas más altas a medida que aumenten la cantidad de CORE apostado. Esto significa que los apostadores pueden maximizar sus retornos apostando más CORE.

3. **Staking sin custodia y sin riesgos**: el staking de Bitcoin sin custodia de Core permite a los usuarios mantener la propiedad completa de sus activos durante todo el proceso de staking. Bitcoin permanece de forma segura en la billetera del usuario y se desbloquea cuando expira el período de bloqueo elegido. Ninguna entidad externa obtiene jamás la custodia del Bitcoin del apostador. Mientras tanto, a cambio de que los participantes bloqueen sus Bitcoin, pueden delegar en los validadores de Core que protegen CORE y ganan recompensas. Esta configuración elimina el riesgo de custodia y mejora la seguridad, ya que los participantes participan en la seguridad de Core sin poner en riesgo su Bitcoin.

## ¿Quién puede beneficiarse del doble stake?

Además de los poseedores de Bitcoin, los mineros de Bitcoin también pueden aprovechar el Dual Stake para optimizar sus ganancias. Dual staking está diseñado para todos, desde individuos hasta las instituciones financieras más grandes, que desean obtener tasas más altas de staking de Bitcoin.

Los mineros de Bitcoin pueden ganar recompensas en CORE al delegar su poder de hash a validadores en la red Core y al hacer staking de sus tokens Bitcoin y CORE. Pueden desbloquear rendimientos más altos en sus tesorerías de Bitcoin al hacer staking de tokens CORE por encima del umbral mínimo de staking dual. Integrar las recompensas de minería con el mecanismo de Dual Staking permite a los mineros maximizar los retornos en las actividades de minería y staking.

:::info
:::info
Consulte la sección de [Preguntas Frecuentes sobre Dual Staking](../FAQs/dual-staking-faqs.md) para obtener más detalles o aclaraciones. Para soporte adicional, puede dirigir sus consultas al [Foro de Desarrolladores de Core](http://forum.coredao.org) o al [Servidor de Discord de Core](https://discord.gg/M2AGJKSG).\
:::s\
:::

## Conclusión

Dual Stake es un mecanismo para proporcionar tasas de participación de Bitcoin sostenibles a escala en Core. Al establecer aún más a Core como la plataforma BTCfi líder de extremo a extremo, el token CORE se está convirtiendo en la clave para desbloquear el rendimiento sostenible de Bitcoin.
