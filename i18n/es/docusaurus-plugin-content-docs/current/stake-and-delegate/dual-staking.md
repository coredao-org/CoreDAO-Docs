---
sidebar_label: Visión general
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Introducción

[Self-Custodial Bitcoin Staking](https://docs.coredao.org/docs/Learn/products/btc-staking/overview.md) was integrated into the Core blockchain in April 2024, allowing users to stake Bitcoin and earn yield while retaining custody of their assets.

To maximize yield potential from Bitcoin staking, Core offers Dual Staking - a mechanism that unlocks higher reward tiers by participating in both Bitcoin timelock staking and CORE token staking simultaneously.
Since Core's daily emissions follow a fixed schedule, participants who stake CORE alongside their Bitcoin receive significantly higher rewards compared to those staking Bitcoin alone. The boost in yield percentage is determined by the amount of CORE tokens staked relative to the Bitcoin value, with defined thresholds corresponding to increasing tiers of staking rewards.
By aligning Bitcoin staking rewards with CORE token staking levels, Dual Staking creates a powerful economic incentive for Bitcoin holders to deepen their involvement in the Core ecosystem.

<!-- <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
  <iframe
    src="https://www.youtube.com/embed/zqzGoQwT9Rs?si=HRHOIRc2viLKHP1g"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div> -->

## ¿Cómo funciona el staking dual?

El Dual Staking no altera el proceso de staking de Bitcoin y CORE. For more information on how Self-Custodial Bitcoin Staking works, refer [here](https://docs.coredao.org/docs/Learn/products/btc-staking/overview.md). Además, consulte esta [guía](https://docs.coredao.org/docs/stake-and-delegate/delegating-core.md) detallada sobre cómo delegar CORE y [hacer staking](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide.md)/[canjear](https://docs.coredao.org/docs/Learn/products/btc-staking/Redeeming-Guide.md) BTC.

El Dual Staking crea una oportunidad para desbloquear rendimientos más altos cuando tanto Bitcoin como CORE son puestos en staking simultáneamente, con diferentes umbrales de staking de CORE que corresponden a distintos niveles de aumento de rendimiento en las recompensas de staking de Bitcoin en la blockchain de Core.

Bitcoin holders can [stake their Bitcoin](https://docs.coredao.org/docs/Learn/products/btc-staking/stake-btc-guide.md) through Core's Self-Custodial Bitcoin Staking to accumulate CORE rewards. Posteriormente, al [hacer staking de sus tokens CORE](https://docs.coredao.org/docs/stake-and-delegate/delegating-core.md) en diferentes umbrales de Dual Staking, los usuarios desbloquean niveles más altos de rendimientos de Bitcoin, pagados en CORE. Aunque el Dual Staking mejora las recompensas del staking de Bitcoin, no afecta el rendimiento generado por el staking de CORE en sí.

Para habilitar rendimientos más altos en el staking de Bitcoin a través de Dual Staking, los usuarios deben cumplir con los siguientes requisitos:

1. Hacer staking tanto de CORE como de Bitcoin simultáneamente, asegurándose de que la cantidad de CORE apostada exceda el umbral mínimo de participación dual **y**
2. La dirección de la billetera de staking de CORE _**debe**_ coincidir con la dirección designada de recompensas de CORE para el staking de Bitcoin a la cual se pagará el rendimiento.

Según las proporciones de staking CORE:BTC (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>), que representan los tokens CORE en staking en relación con los Bitcoins en staking, las recompensas por staking de Bitcoin se dividen en n niveles de rendimiento aumentados (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>). Dependiendo del nivel de rendimiento aumentado de un usuario, se aplican multiplicadores de rendimiento a la tasa base para el staking de Bitcoin en Core. Los multiplicadores de rendimiento se determinan en función de los datos de staking del usuario y la configuración del sistema de dual staking. Como resultado, diferentes usuarios pueden tener multiplicadores distintos. También se deben cumplir umbrales específicos de staking de CORE para calificar a los rendimientos aumentados. Además, cabe señalar que las proporciones de staking (R<sub>1</sub>, R<sub>2</sub>, … , R<sub>n</sub>) y el número de niveles de rendimiento mejorado (P<sub>BASE</sub>, P<sub>1</sub>, P<sub>2</sub>, …, P<sub>MAX</sub>) están sujetos a cambios y pueden ajustarse mediante votaciones de gobernanza.

## ¿Qué cambia con el Dual Staking?

Desde la perspectiva de cómo se realiza el staking, nada cambia fundamentalmente con el Dual Stake. Los usuarios aún pueden hacer staking de Bitcoin y CORE de forma independiente; sin embargo, al hacer staking tanto en Bitcoin como en CORE simultáneamente, se desbloquea el potencial de obtener mayores rendimientos
en staking de Bitcoin. Hacer staking de ambos activos no es obligatorio, sino más bien una mejora opcional para los poseedores de Bitcoin que buscan maximizar su rendimiento. Piense en esto como un aumento de recompensa, donde los stakers de Bitcoin recibirán recompensas mejoradas a medida que aumenten la cantidad de CORE en staking.

El Dual Staking fortalece la relación entre las blockchains de Bitcoin y Core, alineando los incentivos y el valor en ambos ecosistemas. Ofrece mayores recompensas para aquellos que participan activamente en ambas opciones de staking sin introducir nuevos requisitos ni complejidades en el proceso.

## Características clave del Dual Staking

- **Mayores recompensas a través de staking en CORE**: Los stakers de Bitcoin ahora pueden hacer staking de CORE junto con Bitcoin para desbloquear mayores rendimientos de staking de Bitcoin. Para obtener estos rendimientos de staking mejorados, los stakers de Bitcoin deben hacer staking de CORE por encima de un cierto umbral.

- **Self-Custodial Staking**: Core’s Self-Custodial Bitcoin Staking enables users to maintain complete ownership of their assets throughout the staking process. Bitcoin permanece de forma segura en la billetera del usuario y se desbloquea cuando expira el período de bloqueo elegido. Ninguna entidad externa obtiene jamás la custodia del Bitcoin del staker. Mientras tanto, a cambio de que los participantes bloqueen sus Bitcoin, pueden delegarlo a validadores de Core que protegen CORE y ganar recompensas. Esta configuración elimina el riesgo de custodia y mejora la seguridad, ya que los stakers participan en la seguridad de Core sin poner en riesgo su Bitcoin.

## ¿Quién puede beneficiarse del Dual Staking?

El Dual Staking está diseñado para todos, desde individuos hasta las instituciones financieras más grandes, cualquiera que quiera obtener mayores tasas de staking de Bitcoin. Además de los poseedores de Bitcoin, los mineros de Bitcoin también pueden aprovechar el Dual Staking para optimizar sus ganancias.

Bitcoin miners can earn CORE rewards by delegating their hash power to validators on the Core network and staking their Bitcoin and CORE tokens. Pueden desbloquear rendimientos más altos en sus tesorerías de Bitcoin al hacer staking de tokens CORE por encima del umbral mínimo de staking dual. Integrar las recompensas de minería con el mecanismo de Dual Staking permite a los mineros maximizar los retornos en las actividades de minería y staking.

:::info
Consulte la sección de [Preguntas Frecuentes sobre Dual Staking](../FAQs/dual-staking-faqs.md) para obtener más detalles o aclaraciones. Para soporte adicional, puede dirigir sus consultas al [Foro de Desarrolladores de Core](http://forum.coredao.org) o al [Servidor de Discord de Core](https://discord.gg/M2AGJKSG).
:::

## Conclusión

Dual Stake es un mecanismo para proporcionar tasas de participación de Bitcoin sostenibles a escala en Core. Al establecer aún más a Core como la plataforma BTCfi líder de extremo a extremo, el token CORE se está convirtiendo en la clave para desbloquear el rendimiento sostenible de Bitcoin.
