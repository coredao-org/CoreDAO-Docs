---
sidebar_label: Self-Custodial BTC Staking FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas Frecuentes sobre Staking de Bitcoin con Autocustodia

---

### 1. ¿Qué es el Staking de Bitcoin con Autocustodia en la red Core?

Core provides Bitcoin holders with a risk-free and transparent opportunity to lock up or stake their Bitcoin on the Bitcoin Network without relinquishing custody of their Bitcoin assets. In return, they can participate in the Core blockchain’s security through Satoshi Plus and earn CORE rewards.

### 2. ¿Cómo funciona el Staking de Bitcoin con Autocustodia?

Con el Staking de Bitcoin con Autocustodia, el protocolo de Core incorpora a los holders de bitcoin en su mecanismo de consenso, Satoshi Plus. La metodología de Core para integrar la participación de Bitcoin se centra en [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), una característica criptográfica nativa de Bitcoin que especifica una condición bajo la cual el resultado de la transacción no se puede gastar hasta que ha pasado un determinado momento en el tiempo. For more details on how Self-Custodial Bitcoin Staking works, refer [here](../stake-and-delegate/btc-staking/btc-staking-working.md).

### 3. ¿Cuáles son las ventajas del Staking de Bitcoin con Autocustodia?

1. **Tailored for Long-Term Holders and Institutions:** Designed for those who prefer to keep their bitcoins on the secure Bitcoin blockchain, Self-Custodial Bitcoin Staking offers a way to earn rewards during a specified holding period without requiring frequent transactions.
2. **Sin nuevas suposiciones de confianza:** Los usuarios pueden apostar sus bitcoins directamente en la cadena de bloques de Bitcoin, manteniendo la alta seguridad y confianza inherente a la robusta infraestructura de Bitcoin sin transferir activos fuera de la cadena.
3. **Oportunidad de ganar recompensas pasivas:** Los apostadores de Bitcoin pueden ganar recompensas en tokens CORE a cambio de contribuir al consenso de la cadena de bloques Core, mejorando la funcionalidad y seguridad de la cadena de bloques.
4. **Self-Custody and Security:** Bitcoin Staking is 100% secure with self-custody; users execute staking transactions themselves on the Bitcoin network, ensuring their Bitcoin remains on the blockchain.
5. **Uso de funciones criptográficas nativas:** La apuesta de Bitcoin en Core utiliza funciones criptográficas probadas en batalla de la red de Bitcoin, lo que la hace más segura que las soluciones no nativas.
6. **Flexibilidad en la construcción de transacciones:** Los usuarios pueden construir sus transacciones de participación utilizando cualquier herramienta preferida, lo que reduce significativamente el riesgo de ataques en la cadena de suministro provenientes de bibliotecas de terceros.

### 4) ¿Cómo mantiene la seguridad y la confianza el Staking de Bitcoin con Autocustodia?

Core's Self-Custodial Bitcoin staking eliminates the need to introduce new trust assumptions by enabling users to stake their bitcoins without transferring them off the Bitcoin blockchain. Aprovecha la seguridad y confianza inherentes a la infraestructura establecida de Bitcoin, manteniendo alta seguridad para los activos apostados.

### 5. ¿Cuál es el papel de Core en el proceso de Staking de Bitcoin con Autocustodia?

Se destaca que ningún activo se mueve hacia la cadena de bloques de Core ni a ningún tercero confiable o contratos inteligentes. En cambio, los activos de los usuarios permanecen bloqueados en la red de Bitcoin bajo la completa propiedad del usuario. Desde la perspectiva de Core, solo los relés monitorean la red de Bitcoin en busca de transacciones de apuesta de Bitcoin. Upon detection, these are selected, and only the valid ones are passed down to the consensus engine for the accrual of staking rewards. With the Fusion Upgrade, users would have to manually claim their staking rewards in the form of CORE tokens.

### 6. What happens to my asset in the validator I delegated my Bitcoins to, or the Core blockchain goes down?

Delegar Bitcoins para obtener recompensas mediante el Staking de Bitcoin con Autocustodia de Core no requiere transferencias de activos ni puentes hacia la blockchain de Core ni hacia los validadores. Even if the validators or the Core blockchain go down, users' assets remain in their complete custody and can be redeemed after the timelock expires on the Bitcoin network.

### 7. ¿Cuáles son algunos de los desafíos asociados con los tiempos de bloqueo cortos en Bitcoin?

El timelock CLTV es una característica nativa de la red de Bitcoin. A user can lock up any amount of Bitcoin for the desired period through this feature. However, with shorter time lock periods (e.g., 10 minutes) due to network congestion and Bitcoin network block times, these transactions may not be processed quickly enough, leading to delays in redeeming the Bitcoin. Tenga en cuenta que para que una transacción de participación de Bitcoin sea válida, se deben cumplir los requisitos mínimos.

### 8. ¿Hay requisitos específicos para participar en el Staking de Bitcoin con Autocustodia?

Users must meet the following requirements for a Bitcoin staking transaction to be considered valid.

- Los usuarios deben asegurarse de que la transacción se envíe a su dirección.

- Usando la función nativa de timelock de Bitcoin, especifique la cantidad bloqueada que se destinará al validador en la cadena de bloques Core como la salida de la transacción.

- When using the staking script, there is **no** minimum Bitcoin requirement for staking. Sin embargo, si se hace staking a través de la [interfaz web oficial de staking](https://stake.coredao.org/staking), los usuarios deben hacer staking por un mínimo de **0.01 BTC** (excluyendo las tarifas de transacción).

- La duración mínima del staking depende del método. The official website UI requires a 5-day minimum, while staking through the script has no lockup requirement.

- The transaction should also contain an `op_return` output specifying
  - La dirección del validador de Core al que el apostador desea delegar su Bitcoin.
  - La dirección a la que el apostador desea que se envíen sus recompensas en tokens CORE.

### 9. ¿Por qué la dirección de participación proporcionada difiere de tu dirección original de Bitcoin?

La dirección de participación se deriva de la clave privada maestra de tu billetera, lo que garantiza tu control y seguridad sobre tus activos. Your Bitcoins remain safely stored in your original wallet, unaffected by the staking process. Aunque es posible que los activos apostados no sean visibles en algunas versiones de billetera, aún tienes la propiedad total.

You can view your staked funds by searching for the staking address on any Bitcoin explorer, such as [Mempool](https://mempool.space/). We're actively working to make staked assets visible in all supported wallets, primarily through command-line versions.

### 10. ¿Core ofrece soporte para billeteras hardware en el Staking de Bitcoin con Autocustodia?

Debido a limitaciones técnicas, actualmente el Staking de Bitcoin con Autocustodia no es compatible con billeteras hardware. Nevertheless, we continually explore ways to enhance compatibility with various wallet types, prioritizing both security and convenience for our users.

### 11. ¿Cuáles son las consideraciones importantes para los períodos de bloqueo antes de apostar tus activos?

- **Expiración del tiempo de bloqueo:** Cuando bloqueas tu Bitcoin para la apuesta, este no es accesible hasta que concluya el período de apuesta.
- **Choosing wisely:** Select your locking period thoughtfully, considering your investment objectives and risk tolerance. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte con duraciones más largas.
- **Staked Amount Verification:** Due to technical complexities, it is possible that your staked asset may not be visible in your wallet when checked through the CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados en el [Sitio Web Oficial de Apuestas de Core](https://stake.coredao.org/). Additionally, delays due to block time, the number of block confirmation requirements, and network congestion on the Bitcoin network may lead to delays in transaction confirmation, making your assets not visible in your wallets.

### 12. ¿Por qué mi activo apostado no es visible en mi billetera?

Due to technical complexities, it is possible that your staked asset is not visible in your wallet when checked through the CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados desde el [Sitio web oficial de apuestas de Core](https://stake.coredao.org/). Additionally, delays due to block time, the number of block confirmation requirements, and network congestion on the Bitcoin network may lead to delays in transaction confirmation, making your assets not visible in your wallets.

### 13. ¿Cómo se garantiza la seguridad del Staking de Bitcoin con Autocustodia?

[Halborn](https://www.halborn.com/), una firma que cumple con la norma SOC2 Tipo 1, reconocida por su experiencia en seguridad de contratos inteligentes y [en la que confían plataformas líderes de blockchain](https://www.halborn.com/about/who-trusts-us) como Ava Labs, Solana y Polygon, así como para proyectos DeFi como Sushiswap, ha auditado exhaustivamente el protocolo de Core y la seguridad del Staking de Bitcoin con Autocustodia. Puedes consultar los informes de auditoría sobre el protocolo de Core y el Staking de Bitcoin con Autocustodia realizados por firmas líderes [aquí](https://docs.coredao.org/docs/Learn/audit).

### 14. ¿Qué hacer si el botón _`Canjear BTC`_ no funciona en el sitio web de apuestas?

You can Redeem your Bitcoin by clicking the `Redeem` button on Core's official [Staking Website](https://stake.coredao.org/). Si el botón no funciona, intenta borrar la caché de tu navegador y vuelve a intentarlo. If you encounter further issues, please reach out at [Core Dev Forum](https://forum.coredao.org/).