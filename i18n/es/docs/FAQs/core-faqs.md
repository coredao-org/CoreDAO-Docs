---
sidebar_label: Preguntas frecuentes sobre Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre Core Chain

---

### 1. ¿Dónde puedo encontrar el código base para Core blockchain?

Core Foundation aboga por la creación de proyectos de código abierto y, por lo tanto, todas las bases de código de Core están disponibles para uso comunitario. Puede encontrar el código base de Core blockchain y otras herramientas para desarrolladores en la [cuenta oficial de GitHub de Core](https://github.com/coredao-org).

### 2. ¿Cuáles son los canales de comunicación oficiales?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) or [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

<!-- ### 3. How to query the current system parameters?
     -->

### 3. ¿Qué dApps se implementan en la red central?

Core está diseñado para atender a los constructores, ofreciendo una plataforma sólida donde se pueden implementar y prosperar varias aplicaciones descentralizadas (dApps). El ecosistema Core, que admite una amplia gama de dApps, está estructurado específicamente para fomentar el desarrollo y la innovación, lo que lo convierte en un entorno favorable para los creadores que buscan implementar aplicaciones de vanguardia en el espacio blockchain. Para obtener más detalles, puede consultar nuestro [ecosistema](https://coredao.org/explore/ecosystem) para explorar quién está construyendo qué.

### 4. ¿Cómo conectar MetaMask a Core Network?

Siga nuestra guía detallada sobre cómo conectar su billetera MetaMask a las Core [Testnets](../Dev-Guide/core-wallet-config.md) y a [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md).

### 5. ¿Qué papel juega el token CORE en la seguridad de la red Core?

El token CORE es fundamental para proteger la red Core a través de sus funciones de participación, gobernanza y como token de utilidad. Los usuarios pueden apostar tokens CORE para convertirse en validadores, que son esenciales en la producción de bloques y la validación de transacciones, mejorando la seguridad de la red. El aspecto deflacionario del token, donde se queman una parte de las tarifas de transacción y las recompensas en bloque, alinea los incentivos de las partes interesadas al aumentar potencialmente su valor y fomentar la participación activa.

### 6. Como apostador de bitcoins, ¿tengo que ejecutar un validador yo solo?

No, como apostador de Bitcoin en la red Core, no es necesario que usted mismo ejecute un validador. El sistema permite a los titulares de Bitcoin participar en la seguridad de la red mediante apuestas de Bitcoin sin custodia. Esto significa que puede apostar su Bitcoin sin renunciar a la custodia y sin la necesidad de participar directamente en los procesos de validación, como la producción de bloques o la validación de transacciones. Esta configuración le permite obtener rendimiento de su Bitcoin mientras contribuye a la seguridad de la red de una manera más pasiva.

### 7. ¿Cuáles son las condiciones para la tala? ¿Cuáles son las tarifas de reducción en las que se incurre? ¿Se reducirán todos mis tokens apostados (CORE y BTC)?

En la red Core, los cortes y el encarcelamiento son mecanismos para penalizar a los validadores por mala conducta.

"Recortar" se refiere a recortar la recompensa de un validador por los bloques mineros o sus tokens CORE apostados. La severidad del castigo cortante aumenta en proporción al mal comportamiento del validador.

- **No se puede producir con éxito un bloque durante su turno designado**
    - Si un nodo de validación no logra extraer **50 bloques** seguidos, las recompensas del token CORE que el validador ha acumulado hasta el momento se reducen por completo.
    - Si un validador no logra extraer **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el 10% del depósito CORE del apostador y es encarcelado por tres días, lo que significa que no elegible para ser elegido para el conjunto de validadores
- **Sanción por doble firma**
    - La “doble firma” es el escenario de firmar dos bloques diferentes a la misma altura de bloque. Los validadores sorprendidos firmando dos veces obtienen su recompensa completa y el depósito del validador CORE reducido, y luego se les prohíbe participar en bloques mineros, es decir, encarcelados para siempre.

### 8. ¿Qué mecanismo de consenso utiliza la red Core y cómo previene diferentes ataques?

La red Core utiliza el mecanismo de consenso Satoshi Plus que combina prueba de trabajo delegada (DPoW), prueba de participación delegada (DPoS) y participación BTC sin custodia para proteger la red contra diversos ataques. Esta configuración mitiga los ataques a la red, como DDoS, mediante la dispersión de nodos y la comunicación P2P aleatoria. Para ataques de consenso como el ataque del 51%, emplea minería por turnos y un sistema de puntuación híbrido para la elección del validador, lo que hace que dichos ataques sean económicamente imprácticos. Además, Core utiliza puntos de control para congelar y proteger periódicamente el historial de la cadena de bloques, frustrando ataques de largo alcance. Para obtener más detalles, consulte la [Descripción general de la seguridad de Core Blockchain] (https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. ¿Cuál es el tiempo promedio de confirmación de transacciones de la red Core?

El tiempo promedio de confirmación de transacciones en la red Core es de **12 bloques**.

### 10. ¿Cuánto TPS puede soportar la red Core?

Core blockchain todavía está evolucionando y pisando fuerte en el engranaje de innovación, a partir de ahora Core puede manejar hasta **~700** en la red principal con un límite de gas artificialmente bajo. Sin embargo, esperamos ampliar la red y hacerla eficiente para manejar recuentos de TPS mucho mayores.

### 11. ¿Dónde puedo obtener el token CORE de prueba?

Para ayudar a los usuarios a comenzar y permitir a los desarrolladores crear prototipos rápidamente de sus dApps, Core Testnet Faucets para sus dos redes de prueba, [Faucet for Core Testnet (1114)](https://scan.test2.btcs.network/faucet) y [Faucet para Core Testnet (1115)](https://scan.test.btcs.network/faucet), para distribuir tokens de Core testnet, tCORE. Siga la guía detallada [aquí](../Dev-Guide/core-faucet.md), sobre cómo obtener tCORE o tCORE2 del faucet Core testnet.

### 12. ¿Cómo puedo contribuir a la comunidad Core?

Puedes contribuir a la Comunidad Central de varias maneras diferentes:

- **Contribuya a nuestra documentación oficial:** Envíe PR con sus cambios al repositorio de GitHub de nuestra documentación oficial y nuestro equipo lo revisará en consecuencia. Si lo consideramos correcto, los fusionaremos en nuestra documentación oficial.
- **[Lista de deseos principales](https://github.com/coredao-org/core-community-contributions):** Cree proyectos para el ecosistema Core. La Core Foundation ha elaborado una lista de categorías de proyectos que los constructores pueden construir y contribuir al crecimiento del ecosistema Core.
- **Programas de incentivos para constructores:** Core también ofrece varias subvenciones y programas para constructores para fomentar el desarrollo en la cadena de bloques Core. Ya sea a través de [Core Foundation Grants](https://coredaofoundation.org/fund-your-project) o el [Core Ignition Builders' Incentive Program](https://coredao.org/initiatives/incentiveprogram), puedes impulsar tu viaje de construcción en Web3 en Core.
- **Programa Core Commit:** Core Foundation ofrece un programa acelerador de 3 meses para que los proyectos en etapa inicial se amplíen. El [Core Commit Program](https://coredao.org/initiatives/commit-program) no solo proporciona a los constructores recursos y acceso a tutorías 1:1 de algunas de las mentes más importantes de la industria Web3, sino que también les proporciona la Oportunidad de recompensas y financiación mensuales basadas en el rendimiento de Core Ventures y su red de más de 100 capitalistas de riesgo.

### 13. ¿Core ofrece subvenciones o programas de construcción?

Core no se trata sólo de subvenciones, es una puerta de entrada a oportunidades ilimitadas. Ya sea a través de [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition Builders' Incentive Program](https://coredao.org/initiatives/incentiveprogram) o el [Core Commit Program] ](https://coredao.org/initiatives/commit-program), recibirá orientación técnica, tutoría y exposición a una comunidad vibrante dedicada a innovar en el panorama DeFi.

### 14. ¿Cómo puedo denunciar una estafa o un robo de alfombras?

Para denunciar una estafa o extracción de alfombras, puede proporcionar un informe detallado en nuestro [canal de Discord] (https://discord.com/invite/coredaoofficial).