---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas Frecuentes sobre Core

---

### 1. ¿Dónde puedo encontrar la base de código del blockchain Core?

La Core Foundation promueve la construcción de proyectos de código abierto, por lo que todas las bases de código de Core están disponibles para el uso de la comunidad. Puede encontrar el código base de Core blockchain y otras herramientas para desarrolladores en la [cuenta oficial de GitHub de Core](https://github.com/coredao-org).

### 2. ¿Cuáles son los canales de comunicación oficiales?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) or [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

### ¿Qué dApps están desplegadas en la Red Core?

Core está diseñado para desarrolladores, ofreciendo una plataforma robusta donde diversas aplicaciones descentralizadas (dApps) pueden ser desplegadas y prosperar. Soportando una amplia variedad de dApps, el ecosistema Core está estructurado específicamente para fomentar el desarrollo y la innovación, convirtiéndolo en un entorno favorable para creadores que buscan desplegar aplicaciones de vanguardia en el espacio blockchain. Para más detalles, puedes consultar nuestro [ecosistema](https://coredao.org/explore/ecosystem) para explorar quién está construyendo qué.

### ¿Cómo conectar MetaMask a la Red Core?

Sigue la [guía detallada](../Dev-Guide/core-wallet-config.md) oficial sobre cómo conectar tu billetera MetaMask a la Core Testnet y Mainnet.

### ¿Qué papel juega el token CORE en la seguridad de la red Core?

El token CORE desempeña un papel fundamental en la seguridad de la red Core mediante sus funciones en staking, gobernanza y como token de utilidad. Los usuarios pueden hacer staking de tokens CORE para convertirse en validadores, quienes tienen un papel crucial en la producción de bloques y la validación de transacciones, mejorando así la seguridad de la red. El aspecto deflacionario del token, donde una porción de las tarifas de transacción y recompensas de bloque se quema, alinea los incentivos de los participantes al potencialmente aumentar su valor y fomentar la participación activa.

### Como staker de Bitcoin, ¿necesito correr un validador yo mismo?

No, como staker de Bitcoin en la red Core, no necesitas correr un validador por ti mismo. El sistema permite a los holders de Bitcoin participar en la seguridad de la red mediante el Self-Custodial Bitcoin Staking. Esto significa que puedes hacer staking de tu Bitcoin sin perder la custodia y sin necesidad de participar directamente en los procesos de validación, como la producción de bloques o la validación de transacciones. Esta configuración te permite obtener rendimiento sobre tu Bitcoin mientras contribuyes a la seguridad de la red de manera más pasiva.

### ¿Cuáles son las condiciones para el slashing? ¿Cuáles son las tarifas por slashing? ¿Se slashearán todos mis tokens en staking (CORE y BTC)?

En la red Core, el slashing y el jailing son mecanismos para penalizar a los validadores por mala conducta.

"Slashing" se refiere a la reducción ya sea de las recompensas del validador por minar bloques o de sus tokens CORE en staking. La severidad del castigo por slashing aumenta proporcionalmente según la gravedad del mal comportamiento del validador.

- **Fallo en la producción exitosa de un bloque durante su turno asignado**
    - Si un nodo validador falla en minar **50 bloques** consecutivos, se le revocan completamente las recompensas de tokens CORE acumuladas hasta ese momento.
    - Si un validador falla en minar **150 bloques** consecutivos, pierde su parte de las recompensas diarias de tokens CORE, pierde el 10% del depósito en CORE que hizo como staker, y es puesto en jailing por tres días, lo que significa que no será elegible para formar parte del conjunto de validadores
- **Penalización por Double Signing**
    - “Double signing” ocurre cuando un validador firma dos bloques diferentes en la misma altura de bloque. Los validadores que son atrapados haciendo doble firma pierden todas sus recompensas y se les slashea el depósito CORE como validador; además, quedan excluidos permanentemente de la participación en la minería de bloques, es decir, quedan en jailing para siempre.

### ¿Cuál es el mecanismo de consenso que usa la red Core y cómo previene diferentes ataques?

La red Core utiliza el mecanismo de consenso Satoshi Plus, que combina Delegated Proof of Work (DPoW), Delegated Proof of Stake (DPoS) y Self-Custodial Bitcoin Staking para asegurar la red contra varios tipos de ataques. Esta configuración mitiga ataques a la red, como DDoS, mediante la dispersión de nodos y comunicación peer-to-peer (P2P) aleatoria. Para ataques de consenso como el ataque del 51%, emplea minería en round-robin y un sistema de hybrid score para la elección de validadores, haciendo que estos ataques sean económicamente inviables. Además, Core utiliza checkpointing para congelar y asegurar periódicamente el historial de la blockchain, bloqueando así ataques de largo alcance. Para más detalles, consulta el [Core Blockchain Security Overview}(https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### ¿Cuál es el tiempo promedio de confirmación de transacciones en la red Core?

El tiempo promedio de confirmación de transacciones en la red Core es de **12 bloques**.

### ¿Cuántas TPS puede soportar la red Core?

La blockchain de Core aún está en evolución y avanzando rápidamente en innovación. Por ahora, Core puede manejar hasta aproximadamente **~700** transacciones por segundo en la mainnet con un ímite de gas artificialmente bajo. Sin embargo, esperamos escalar la red y hacerla lo suficientemente eficiente para manejar tasas de procesamiento de transacciones mucho mayores (TPS counts).

### 11. ¿Dónde puedo obtener tokens CORE de prueba?

Para ayudar a los usuarios a comenzar y permitir que los desarrolladores prototipen rápidamente sus dApps, Core proporciona faucets de testnet para [Core Testnet2 (1114)](https://scan.test2.btcs.network/faucet), para la distribución de tokens de prueba, tCORE2. Sigue la guía detallada [aquí](../Dev-Guide/core-faucet.md), sobre cómo obtener tCORE2 desde el faucet de Core Testnet.

### 12. ¿Cómo puedo contribuir a la comunidad Core?

Puedes contribuir a la Comunidad Core de varias maneras diferentes:

- **Contribuye a Nuestra Documentación Oficial:** Envía un pull request con tus cambios al repositorio de GitHub de nuestra documentación oficial, y nuestro equipo los revisará en consecuencia. Si se consideran correctos, los integraremos en nuestra documentación oficial.
- **[Lista de deseos principales](https://github.com/coredao-org/core-community-contributions):** Cree proyectos para el ecosistema Core. La Core Foundation ha delineado una lista de categorías de proyectos a los que los desarrolladores pueden contribuir, fomentando el crecimiento del ecosistema Core.
- **Programas de Incentivos para Desarrolladores:** Core también ofrece programas de apoyo e incentivos para desarrolladores con el objetivo de fomentar el desarrollo sobre la blockchain de Core. Ya sea a través del [Core Starter Program](https://coredaofoundation.org/fund-your-project) o del [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), puedes iniciar tu camino de desarrollo Web3 sobre Core.
- **Programa Core Commit:** La Core Foundation ofrece un programa acelerador de 3 meses diseñado para escalar proyectos en etapa temprana. El [Core Commit Program](https://coredao.org/initiatives/commit-program) no solo proporciona a los desarrolladores recursos y acceso a mentoría personalizada de algunas de las mentes más destacadas de la industria Web3, sino que también les brinda la oportunidad de recibir recompensas mensuales basadas en desempeño y financiamiento por parte de Core Ventures y su red de más de 100 VCs.

### 13. ¿Core ofrece programas de apoyo e incentivos para desarrolladores?

Core no se trata sólo de subvenciones, es una puerta de entrada a oportunidades ilimitadas. Ya sea mediante el [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), el [Core Starter Program](https://coredaofoundation.org/fund-your-project) o el [Core Commit Program](https://coredao.org/initiatives/commit-program), recibirás orientación técnica, mentoría y acceso a una comunidad vibrante dedicada a innovar en el ecosistema DeFi.

### 14. ¿Cómo puedo reportar una estafa o rug pull?

Para reportar una estafa o rug pull, puedes proporcionar un informe detallado en nuestro canal de [Discord](https://discord.com/invite/coredaoofficial).