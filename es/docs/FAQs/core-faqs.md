---
sidebar_label: Preguntas frecuentes sobre Core Chain
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre Core Chain

---

### 1. Where can I find the codebase for Core blockchain?

Core Foundation advocates open source project building and hence all of Core's codebases are available for community use. You can find Core blockchain’s codebase and other developer tools on the [official GitHub account of Core](https://github.com/coredao-org).

### 2. ¿Cuáles son los canales de comunicación oficiales de Core Chain?

- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Telegram:** [https://t.me/CoreDAOTelegram](https://t.me/CoreDAOTelegram)
- **Twitter:** [https://twitter.com/Coredao_Org](https://twitter.com/Coredao_Org)
- **Blog:** [https://medium.com/@core_dao](https://medium.com/@core_dao) or [https://coredao.org/explore/blog](https://coredao.org/explore/blog)

<!-- ### 3. How to query the current system parameters?
     -->

### 3. ¿Qué dApps se implementan en la red central?

Core is designed to cater to builders, offering a robust platform where various decentralized applications (dApps) can be deployed and flourish. El ecosistema Core, que admite una amplia gama de dApps, está estructurado específicamente para fomentar el desarrollo y la innovación, lo que lo convierte en un entorno favorable para los creadores que buscan implementar aplicaciones de vanguardia en el espacio blockchain. Para obtener más detalles, puede consultar nuestro [ecosistema](https://coredao.org/explore/ecosystem) para explorar quién está construyendo qué.

### 4. ¿Cómo conectar MetaMask a Core Network?

Follow our detailed guide on how to connect your MetaMask wallet to the Core [Testnet](../Dev-Guide/core-testnet-wallet-config.md) and [Mainnet](../Dev-Guide/core-mainnet-wallet-config.md).

### 5. ¿Qué papel juega el token CORE en la seguridad de la red Core?

El token CORE es fundamental para proteger la red Core a través de sus funciones de participación, gobernanza y como token de utilidad. Los usuarios pueden apostar tokens CORE para convertirse en validadores, que son esenciales en la producción de bloques y la validación de transacciones, mejorando la seguridad de la red. El aspecto deflacionario del token, donde se queman una parte de las tarifas de transacción y las recompensas en bloque, alinea los incentivos de las partes interesadas al aumentar potencialmente su valor y fomentar la participación activa.

### 6. Como apostador de bitcoins, ¿tengo que ejecutar un validador yo solo?

No, como apostador de Bitcoin en la red Core, no es necesario que usted mismo ejecute un validador. El sistema permite a los titulares de Bitcoin participar en la seguridad de la red mediante apuestas de Bitcoin sin custodia. Esto significa que puede apostar su Bitcoin sin renunciar a la custodia y sin la necesidad de participar directamente en los procesos de validación, como la producción de bloques o la validación de transacciones. Esta configuración le permite obtener rendimiento de su Bitcoin mientras contribuye a la seguridad de la red de una manera más pasiva.

### 7. ¿Cuáles son las condiciones para la tala? ¿Cuáles son las tarifas de reducción en las que se incurre? ¿Se reducirán todos mis tokens apostados (CORE y BTC)?

On the Core network, slashing and jailing are mechanisms to penalize validators for misconduct.

"Recortar" se refiere a recortar la recompensa de un validador por los bloques mineros o sus tokens CORE apostados. La severidad del castigo cortante aumenta en proporción al mal comportamiento del validador.

- **No se puede producir con éxito un bloque durante su turno designado**
  - Si un nodo de validación no logra extraer **50 bloques** seguidos, las recompensas del token CORE que el validador ha acumulado hasta el momento se reducen por completo.
  - Si un validador no logra extraer **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el 10% del depósito CORE del apostador y es encarcelado por tres días, lo que significa que no elegible para ser elegido para el conjunto de validadores
- **Sanción por doble firma**
  - La “doble firma” es el escenario de firmar dos bloques diferentes a la misma altura de bloque. Los validadores sorprendidos firmando dos veces obtienen su recompensa completa y el depósito del validador CORE reducido, y luego se les prohíbe participar en bloques mineros, es decir, encarcelados para siempre.

### 8. ¿Qué mecanismo de consenso utiliza la red Core y cómo previene diferentes ataques?

La red Core utiliza el mecanismo de consenso Satoshi Plus que combina prueba de trabajo delegada (DPoW), prueba de participación delegada (DPoS) y participación BTC sin custodia para proteger la red contra diversos ataques. Esta configuración mitiga los ataques a la red, como DDoS, mediante la dispersión de nodos y la comunicación P2P aleatoria. Para ataques de consenso como el ataque del 51%, emplea minería por turnos y un sistema de puntuación híbrido para la elección del validador, lo que hace que dichos ataques sean económicamente imprácticos. Additionally, Core uses checkpointing to freeze and secure the blockchain's history periodically, thwarting long-range attacks. For more details, see the [Core Blockchain Security Overview](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/security).

### 9. ¿Cuál es el tiempo promedio de confirmación de transacciones de la red Core?

El tiempo promedio de confirmación de transacciones en la red Core es de **12 bloques**.

### 10. ¿Cuánto TPS puede soportar la red Core?

Core blockchain is still evolving and stepping hard on the innovation gear, as of now Core can handle up to **~700** on mainnet with an artificially low gas limit. Sin embargo, esperamos ampliar la red y hacerla eficiente para manejar recuentos de TPS mucho mayores.

### 11. Where can I get the test CORE token from?

To help users get started and allow developers to quickly prototype their dApps, Core Testnet Faucets for both of its testnets, [Faucet for Core Testnet (1114)](https://scan.test2.btcs.network/faucet) and [Faucet for Core Testnet (1115)](https://scan.test.btcs.network/faucet), to distribute Core testnet tokens, tCORE. Follow the detailed guide [here](../Dev-Guide/core-faucet.md), on how to obtain tCORE or tCORE2 from the Core testnet faucet.

### 12. How can I contribute to the Core community?

You can contribute to the Core Community through several different ways:

- **Contribute to our Official Documentation:** Send PR with your changes to GitHub repo of our official documentation and our team will review it accordingly. If deem correct, we will merge them into our official documentation.
- **[Core Wishlist](https://github.com/coredao-org/core-community-contributions):** Build projects for the Core ecosystem. The Core Foundation has laid out a list of project categories that builders can build and contribute to the growth of the Core ecosystem.
- **Builder Incentive Programs:** Core also offers several grants and builder programs for encouraging developement on the Core blockchain. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project) or the [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram), you can jumpstart your building journey on the Web3 on Core.
- **Core Commit Program:** Core Foundation offers a 3-month accelerator program for early stage projects to scale up. The [Core Commit Program](https://coredao.org/initiatives/commit-program) not only provides builders with resources and access to 1:1 mentorhsip from some of the biggest minds in the Web3 industry, it also provides them the opportunity of monthly perforamce based rewards and funding from Core Ventures and its network of 100+ VCs.

### 13. ¿Core ofrece subvenciones o programas de construcción?

Core isn't just about grants, it's a gateway to limitless opportunities. Whether through [Core Foundation Grants](https://coredaofoundation.org/fund-your-project), [Core Ignition Builders’ Incentive Program](https://coredao.org/initiatives/incentiveprogram) or the [Core Commit Program](https://coredao.org/initiatives/commit-program), you'll receive technical guidance, mentorship, and exposure to a vibrant community dedicated to innovating in the DeFi landscape.

### 14. ¿Cómo puedo denunciar una estafa o un robo de alfombras?

Para denunciar una estafa o extracción de alfombras, puede proporcionar un informe detallado en nuestro [canal de Discord] (https://discord.com/invite/coredaoofficial).
