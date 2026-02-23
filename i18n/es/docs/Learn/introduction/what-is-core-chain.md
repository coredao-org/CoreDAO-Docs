---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
---

# Core: Liberando el DeFi de Bitcoin

---

Core es una blockchain Layer-1 de alto rendimiento, EVM-compatible, diseñada para ser la plataforma de contratos inteligentes complementaria e hiperescalable de Bitcoin. Aprovechando los timelocks nativos de Bitcoin CLTV, el poder de hash de Bitcoin y las capacidades modernas de contratos inteligentes, Core desbloquea a Bitcoin como protector principal y activo central dentro de un ecosistema de aplicaciones descentralizadas en pleno crecimiento.

La principal innovación de Core es su novedoso mecanismo de consenso, **Satoshi Plus**, que combina Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Staking de Bitcoin Autocustodiado.



La blockchain Core incorpora a los mineros de Bitcoin en la seguridad de contratos inteligentes Turing-complete, desbloqueando nuevas funcionalidades y utilidades para los mineros más allá del simple mantenimiento del ledger de Bitcoin. Los mineros pueden adjuntar metadatos a los bloques recién minados que incluyan votos para validadores de Core, lo que les permite obtener ingresos adicionales en forma de recompensas en tokens CORE. Esta relación simbiótica trabaja para fortalecer Bitcoin sin consumir espacio de bloque de Bitcoin ni restar valor al papel principal de los mineros como defensores de la red Bitcoin.

**Staking de Bitcoin Autocustodiado**

Los holders de Bitcoin aprovechan la funcionalidad nativa de Check Lock Time Verify (CLTV) de Bitcoin para hacer un timelock de su Bitcoin durante un periodo específico. A cambio de hacer timelock, los holders de Bitcoin obtienen el derecho a participar en la elección de validadores de Core. En el timelock, los usuarios incluyen metadatos que delegan su voto a un validador elegido, además de especificar direcciones de recompensa, manteniendo completamente la custodia de sus activos. Este enfoque innovador permite a los holders de Bitcoin participar en el mecanismo de consenso de Core sin transferir su Bitcoin, sin riesgos de slashing y sin depender de bridges cross-chain. Este mecanismo convierte a Bitcoin en un activo productivo que genera rendimiento, al mismo tiempo que conserva sus propiedades fundamentales de seguridad.

**Delegated Proof of Stake**

Junto con los stakers de Bitcoin, los holders de tokens CORE pueden delegar sus tokens CORE a validadores para participar en el consenso y ganar recompensas. El staking de tokens CORE es el único medio para que los stakers de Bitcoin accedan a niveles más altos de rendimiento.

<p align="center">
![core-products](../../../static/img/What-Is-Core.png)
</p>

## Características Clave de la Core Blockchain

Algunas de las características distintivas de Core:

- **Trustless Bitcoin Yield:** Core permite que los holders de Bitcoin obtengan rendimiento sobre su Bitcoin sin renunciar a la custodia, utilizando la función nativa CLTV de Bitcoin para hacer timelock sus activos mientras mantienen el control total. Este enfoque elimina el riesgo de contraparte y las vulnerabilidades de contratos inteligentes que suelen estar asociadas con estrategias de rendimiento en Bitcoin, transformando a Bitcoin de un almacén de valor estático en un activo productivo.
- **Bitcoin Staking Security Integration:** El mecanismo de consenso de Core utiliza a Bitcoin como activo de staking, aprovechando la criptomoneda más valiosa como base de su modelo de seguridad. Al permitir que los holders de Bitcoin hagan un timelock de sus activos para la selección de validadores, Core incrementa su seguridad mientras habilita una utilidad adicional para Bitcoin.
- **Miner Security Integration:** Core incorpora a los mineros de Bitcoin para la seguridad de contratos inteligentes, extendiendo su utilidad más allá del mantenimiento al ledger de Bitcoin.
- **Dual Staking:** Los rendimientos más altos de staking en Bitcoin están reservados para los stakers más alineados con la red Core, lo cual se expresa en la relación entre CORE tokens staked y BTC staked. Al vincular mayores rendimientos en Bitcoin al staking de CORE, este mecanismo crea una fuerte alineación económica entre los holders de Bitcoin y de CORE, contribuyendo al crecimiento y la seguridad a largo plazo de la blockchain Core
- **EVM Execution Environment:** Core adapta la Ethereum Virtual Machine (EVM) para la ejecución de contratos inteligentes, lo que la hace EVM-compatible, de forma similar a la [BNB Smart Chain's implementation](https://github.com/bnb-chain/bsc) de Geth.
- **High-Performance:** Core ofrece procesamiento de transacciones de alto rendimiento con un consenso optimizado, permitiendo aplicaciones descentralizadas escalables que requieren velocidad y capacidad de respuesta.
- **stCORE:** El token de staking líquido de Core, stCORE, mejora la utilidad de los CORE tokens y simplifica el proceso de staking. Al permitir que los holders de CORE participen en el consenso mediante delegación a validadores sin bloquear sus activos, stCORE maximiza el potencial del activo con mayor flexibilidad y eficiencia, permitiendo obtener recompensas y contribuir a la seguridad de la red.
- **lstBTC _(Próximamente)_:** Emitido por Maple Finance y asegurado por custodios de nivel institucional, lstBTC tokeniza el Dual Staking, convirtiendo Bitcoin en timelock con rendimiento en un token líquido que puede intercambiarse y utilizarse como colateral.

## Problemas que Resuelve la Blockchain Core

La blockchain Core aborda varios problemas clave dentro del ecosistema de Bitcoin y el espacio blockchain en general mediante su enfoque y tecnología únicos. Entre ellos se incluyen:

- **Falta de Rendimiento Nativo en Bitcoin:** Bitcoin no genera rendimiento de forma nativa, aunque cuenta con una función de bloqueo temporal mediante el CLTV op_code. Core aprovecha esta funcionalidad existente para habilitar la generación de rendimiento sin riesgos de puentes ni préstamos. Cuando los holders de Bitcoin hacen timelock de su Bitcoin, pueden participar en la elección de validadores en Core y ganar rendimiento, creando una vía segura para obtener ingresos pasivos.

- **Ineficiencia de Capital en Bitcoin:** Bitcoin suele generar una carga negativa debido a los costos de custodia y a que no produce ingresos, lo que resulta en una ineficiencia de capital para los holders. Core resuelve este problema al permitir que Bitcoin genere rendimiento mediante mecanismos de timelock y opciones de staking líquido, transformando activos estáticos en activos productivos.

- **Limitaciones de Seguridad de Bitcoin:** Core extiende las capacidades de seguridad de Bitcoin más allá de asegurar su propio ledger. Permite que el hashrate y el valor de Bitcoin se utilicen para asegurar un ecosistema completo de contratos inteligentes sin requerir modificaciones al protocolo de Bitcoin, ni comprometer su función principal como red de seguridad.

- **Utilidad Limitada de Bitcoin:** Core aborda las limitaciones de usabilidad de Bitcoin en su propia blockchain—donde las transacciones pueden ser lentas y costosas—ofreciendo un entorno EVM-compatible impulsado por Bitcoin.

- **Presupuesto de Seguridad de los Mineros de Bitcoin:** Los mineros de Bitcoin enfrentan un modelo de recompensas decreciente con halvings cada cuatro años, lo que genera preocupaciones sobre la sostenibilidad del presupuesto de seguridad. Core proporciona una fuente adicional de ingresos para los mineros de Bitcoin que eligen participar en el consenso Satoshi Plus, complementando sus ganancias sin modificar sus operaciones de minería en Bitcoin ni comprometer su modelo de seguridad.

- **Alineación con Token:** El token CORE es la clave para desbloquear mayores rendimientos en el staking de Bitcoin, lo que alinea los incentivos entre los stakers de Bitcoin y de CORE. CORE, el token nativo de la blockchain Core, se utiliza para pagar gas fees, participar en la gobernanza y hacer staking. Además, CORE tiene un suministro total fijo de **2.1 mil millones** de tokens, con una distribución de recompensas de bloque programada a lo largo de **81 años**.