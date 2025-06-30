---
sidebar_label: Self-Custodial BTC Staking FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas Frecuentes sobre Staking de Bitcoin con Autocustodia

---

### ¿Qué es el Staking de Bitcoin con Autocustodia en la red Core?

Core ofrece a los holders de Bitcoin una oportunidad libre de riesgos y transparente para bloquear o hacer staking con su Bitcoin en la Red de Bitcoin sin perder la custodia de sus activos Bitcoin. A cambio, pueden participar en la seguridad de la blockchain de Core mediante Satoshi Plus y ganar recompensas en CORE.

### ¿Cómo funciona el Staking de Bitcoin con Autocustodia?

Con el Staking de Bitcoin con Autocustodia, el protocolo de Core incorpora a los holders de bitcoin en su mecanismo de consenso, Satoshi Plus. La metodología de Core para integrar la participación de Bitcoin se centra en [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), una característica criptográfica nativa de Bitcoin que especifica una condición bajo la cual el resultado de la transacción no se puede gastar hasta que ha pasado un determinado momento en el tiempo. Para más detalles sobre cómo funciona el Self-Custodial Bitcoin Staking, consulte [aquí](../stake-and-delegate/btc-staking/btc-staking-working.md).

### ¿Cuáles son las ventajas del Staking de Bitcoin con Autocustodia?

1. **Diseñado para Holders a Largo Plazo e Instituciones:** Pensado para quienes prefieren mantener sus bitcoins en la segura blockchain de Bitcoin, el Self-Custodial Bitcoin Staking ofrece una forma de ganar recompensas durante un periodo de retención especificado sin necesidad de transacciones frecuentes.
2. **Sin nuevas suposiciones de confianza:** Los usuarios pueden apostar sus bitcoins directamente en la cadena de bloques de Bitcoin, manteniendo la alta seguridad y confianza inherente a la robusta infraestructura de Bitcoin sin transferir activos fuera de la cadena.
3. **Oportunidad de ganar recompensas pasivas:** Los apostadores de Bitcoin pueden ganar recompensas en tokens CORE a cambio de contribuir al consenso de la cadena de bloques Core, mejorando la funcionalidad y seguridad de la cadena de bloques.
4. **Autocustodia y Seguridad:** El Bitcoin Staking es 100% seguro con autocustodia; los usuarios ejecutan las transacciones de staking por sí mismos en la red Bitcoin, asegurando que su bitcoin permanezcan en la blockchain.
5. **Uso de funciones criptográficas nativas:** La apuesta de Bitcoin en Core utiliza funciones criptográficas probadas en batalla de la red de Bitcoin, lo que la hace más segura que las soluciones no nativas.
6. **Flexibilidad en la construcción de transacciones:** Los usuarios pueden construir sus transacciones de participación utilizando cualquier herramienta preferida, lo que reduce significativamente el riesgo de ataques en la cadena de suministro provenientes de bibliotecas de terceros.

### ¿Cómo mantiene la seguridad y la confianza el Staking de Bitcoin con Autocustodia?

El Self-Custodial Bitcoin Staking de Core elimina la necesidad de introducir nuevas suposiciones de confianza al permitir que los usuarios hagan staking de sus bitcoins sin transferirlos fuera de la blockchain de Bitcoin. Aprovecha la seguridad y confianza inherentes a la infraestructura establecida de Bitcoin, manteniendo alta seguridad para los activos apostados.

### ¿Cuál es el papel de Core en el proceso de Staking de Bitcoin con Autocustodia?

Se destaca que ningún activo se mueve hacia la cadena de bloques de Core ni a ningún tercero confiable o contratos inteligentes. En cambio, los activos de los usuarios permanecen bloqueados en la red de Bitcoin bajo la completa propiedad del usuario. Desde la perspectiva de Core, solo los relés monitorean la red de Bitcoin en busca de transacciones de apuesta de Bitcoin. Al ser detectados, estos son seleccionados, y solo los válidos son enviados al motor de consenso para la acumulación de recompensas de staking. Con la Fusion Upgrade, los usuarios deberán reclamar manualmente sus recompensas de staking en forma de tokens CORE.

### ¿Qué sucede con mi activo en el validador al que delegué mis Bitcoins, o si la blockchain de Core deja de funcionar?

Delegar Bitcoins para obtener recompensas mediante el Staking de Bitcoin con Autocustodia de Core no requiere transferencias de activos ni puentes hacia la blockchain de Core ni hacia los validadores. Incluso si los validadores o la blockchain de Core dejan de funcionar, los activos de los usuarios permanecen bajo su custodia completa y pueden ser redimidos una vez que expire el timelock en la red de Bitcoin.

### ¿Cuáles son algunos de los desafíos asociados con los tiempos de bloqueo cortos en Bitcoin?

El timelock CLTV es una característica nativa de la red de Bitcoin. Un usuario puede bloquear cualquier cantidad de Bitcoin por el período deseado a través de esta función. Sin embargo, con períodos de timelock más cortos (por ejemplo, 10 minutos), debido a la congestión de la red y los tiempos de bloque de la red de Bitcoin, estas transacciones pueden no procesarse lo suficientemente rápido, lo que genera demoras en la redención del Bitcoin. Tenga en cuenta que para que una transacción de participación de Bitcoin sea válida, se deben cumplir los requisitos mínimos.

### ¿Hay requisitos específicos para participar en el Staking de Bitcoin con Autocustodia?

Los usuarios deben cumplir con los siguientes requisitos para que una transacción de staking de Bitcoin sea considerada válida.

- Los usuarios deben asegurarse de que la transacción se envíe a su dirección.

- Usando la función nativa de timelock de Bitcoin, especifique la cantidad bloqueada que se destinará al validador en la cadena de bloques Core como la salida de la transacción.

- Al usar el script de staking, **no** hay un requisito mínimo de Bitcoin para hacer staking. Sin embargo, si se hace staking a través de la [interfaz web oficial de staking](https://stake.coredao.org/staking), los usuarios deben hacer staking por un mínimo de **0.01 BTC** (excluyendo las tarifas de transacción).

- La duración mínima del staking depende del método. La interfaz oficial del sitio web requiere un mínimo de 5 días, mientras que al hacer staking mediante el script no hay un requisito de bloqueo.

- La transacción también debe contener una salida `op_return` que especifique
  - La dirección del validador de Core al que el apostador desea delegar su Bitcoin.
  - La dirección a la que el apostador desea que se envíen sus recompensas en tokens CORE.

### ¿Por qué la dirección de participación proporcionada difiere de tu dirección original de Bitcoin?

La dirección de participación se deriva de la clave privada maestra de tu billetera, lo que garantiza tu control y seguridad sobre tus activos. Tus Bitcoins permanecen almacenados de forma segura en tu wallet original, sin verse afectados por el proceso de staking. Aunque es posible que los activos apostados no sean visibles en algunas versiones de billetera, aún tienes la propiedad total.

Puedes ver tus fondos en staking buscando la dirección de staking en cualquier explorador de Bitcoin, como [Mempool](https://mempool.space/). Estamos trabajando activamente para que los activos en staking sean visibles en todas las wallets compatibles, principalmente a través de versiones de línea de comandos.

### ¿Core ofrece soporte para billeteras hardware en el Staking de Bitcoin con Autocustodia?

Debido a limitaciones técnicas, actualmente el Staking de Bitcoin con Autocustodia no es compatible con billeteras hardware. No obstante, exploramos continuamente formas de mejorar la compatibilidad con diversos tipos de wallets, priorizando tanto la seguridad como la comodidad para nuestros usuarios.

### ¿Cuáles son las consideraciones importantes para los períodos de bloqueo antes de apostar tus activos?

- **Expiración del tiempo de bloqueo:** Cuando bloqueas tu Bitcoin para la apuesta, este no es accesible hasta que concluya el período de apuesta.
- **Elegir sabiamente:** Selecciona tu periodo de bloqueo con cuidado, considerando tus objetivos de inversión y tolerancia al riesgo. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte con duraciones más largas.
- **Verificación del monto en Staking** debido a complejidades técnicas, es posible que tu activo en staking no sea visible en tu wallet cuando lo consultes mediante la CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados en el [Sitio Web Oficial de Apuestas de Core](https://stake.coredao.org/). Además, los retrasos causados por el tiempo de bloque, la cantidad de confirmaciones requeridas y la congestión en la red Bitcoin pueden ocasionar demoras en la confirmación de transacciones, haciendo que tus activos no sean visibles en tus wallets.

### ¿Por qué mi activo apostado no es visible en mi billetera?

Debido a complejidades técnicas, es posible que tu activo apostado no sea visible en tu wallet cuando lo consultes mediante la CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados desde el [Sitio web oficial de apuestas de Core](https://stake.coredao.org/). Además, los retrasos ocasionados por el tiempo de bloque, la cantidad de confirmaciones necesarias y la congestión en la red Bitcoin pueden provocar demoras en la confirmación de transacciones, haciendo que tus activos no se muestren en tus wallets.

### ¿Cómo se garantiza la seguridad del Staking de Bitcoin con Autocustodia?

[Halborn](https://www.halborn.com/), una firma que cumple con la norma SOC2 Tipo 1, reconocida por su experiencia en seguridad de contratos inteligentes y [en la que confían plataformas líderes de blockchain](https://www.halborn.com/about/who-trusts-us) como Ava Labs, Solana y Polygon, así como para proyectos DeFi como Sushiswap, ha auditado exhaustivamente el protocolo de Core y la seguridad del Staking de Bitcoin con Autocustodia. Puedes consultar los informes de auditoría sobre el protocolo de Core y el Staking de Bitcoin con Autocustodia realizados por firmas líderes [aquí](https://docs.coredao.org/docs/Learn/audit).

### ¿Qué hacer si el botón _`Canjear BTC`_ no funciona en el sitio web de apuestas?

Puedes redimir tu Bitcoin haciendo clic en el botón `Redeem` en el [Sitio Oficial de Staking](https://stake.coredao.org/) de Core. Si el botón no funciona, intenta borrar la caché de tu navegador y vuelve a intentarlo. Si sigues teniendo problemas, por favor contacta en el [Core Dev Forum](https://forum.coredao.org/).