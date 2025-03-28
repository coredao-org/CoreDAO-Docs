---
sidebar_label: Preguntas frecuentes sobre apuestas de BTC sin custodia
hide_table_of_contents: false
sidebar_position: 2
---

# Preguntas frecuentes sobre apuestas de BTC sin custodia

---

### 1\. ¿Qué es la apuesta de Bitcoin sin custodia en la red central?

Core ofrece a los titulares de Bitcoin una oportunidad sin riesgos y transparente de bloquear/simular sus Bitcoin en la red de Bitcoin sin renunciar a la custodia de sus activos de Bitcoin. A cambio, pueden participar en la seguridad de la cadena de bloques Core a través de Satohi Plus y ganar recompensas en CORE.

### 2\. ¿Cómo funciona el Stake de Bitcoin sin custodia?

Con la participación sin custodia de bitcoins, el protocolo de Core incorpora a los poseedores de bitcoins en su mecanismo de consenso, Satoshi Plus. La metodología de Core para integrar la participación de Bitcoin se centra en [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify), una característica criptográfica nativa de Bitcoin que especifica una condición bajo la cual el resultado de la transacción no se puede gastar hasta que ha pasado un determinado momento en el tiempo. For more details on how Non-Custodial Bitcoin Staking works, refer [here](../Learn/products/btc-staking/btc-staking-working.md).

### 3\. ¿Cuáles son las ventajas de la apuesta de Bitcoin sin custodia?

1. **Diseñado para titulares e instituciones a largo plazo:** Diseñado para aquellos que prefieren mantener sus bitcoins en la cadena de bloques segura de Bitcoin, la apuesta de Bitcoin sin custodia ofrece una manera de ganar recompensas durante un período de tenencia específico sin transacciones frecuentes.
2. **Sin nuevas suposiciones de confianza:** Los usuarios pueden apostar sus bitcoins directamente en la cadena de bloques de Bitcoin, manteniendo la alta seguridad y confianza inherente a la robusta infraestructura de Bitcoin sin transferir activos fuera de la cadena.
3. **Oportunidad de ganar recompensas pasivas:** Los apostadores de Bitcoin pueden ganar recompensas en tokens CORE a cambio de contribuir al consenso de la cadena de bloques Core, mejorando la funcionalidad y seguridad de la cadena de bloques.
4. **Autocustodia y seguridad:** La Apuesta de Bitcoin es 100% segura con autocustodia; los usuarios ejecutan ellos mismos las transacciones de participación en la red de Bitcoin, asegurando que su Bitcoin no abandone la cadena de bloques.
5. **Uso de funciones criptográficas nativas:** La apuesta de Bitcoin en Core utiliza funciones criptográficas probadas en batalla de la red de Bitcoin, lo que la hace más segura que las soluciones no nativas.
6. **Flexibilidad en la construcción de transacciones:** Los usuarios pueden construir sus transacciones de participación utilizando cualquier herramienta preferida, lo que reduce significativamente el riesgo de ataques en la cadena de suministro provenientes de bibliotecas de terceros.

### 4\. ¿Cómo mantiene la apuesta de Bitcoin sin custodia la seguridad y confianza?

La apuesta de Bitcoin sin custodia de Core evita introducir nuevas suposiciones de confianza permitiendo a los usuarios apostar sus bitcoins sin moverlos de la cadena de bloques de Bitcoin. Aprovecha la seguridad y confianza inherentes a la infraestructura establecida de Bitcoin, manteniendo alta seguridad para los activos apostados.

### 5\. ¿Cuál es el rol de Core en el proceso de la apuesta de Bitcoin sin custodia?

Se destaca que ningún activo se mueve hacia la cadena de bloques de Core ni a ningún tercero confiable o contratos inteligentes. En cambio, los activos de los usuarios permanecen bloqueados en la red de Bitcoin bajo la completa propiedad del usuario. Desde la perspectiva de Core, solo los relés monitorean la red de Bitcoin en busca de transacciones de apuesta de Bitcoin. Al ser detectadas, estas se seleccionan y solo las válidas se pasan al motor de consenso y acumulación de recompensas de participación. Con la actualización Fusion, los usuarios deberán reclamar manualmente sus recompensas de participación en forma de tokens CORE.

### 6\. ¿Qué sucede con mi activo en el validador al que delegué mis Bitcoins, o si la cadena de bloques de Core se cae?

Delegar Bitcoins para recompensas de participación a través de la Apuesta de Bitcoin sin custodia de Core no requiere ningún tipo de transferencia de activos ni puentes hacia la cadena de bloques de Core o hacia los validadores. Incluso si los validadores o la cadena de bloques de Core se caen, los activos de los usuarios permanecen en su custodia completa y pueden ser canjeados una vez que expire el tiempo de bloqueo en la red de Bitcoin.

### 7\. ¿Cuáles son algunos de los desafíos asociados con los tiempos de bloqueo cortos en Bitcoin?

El timelock CLTV es una característica nativa de la red de Bitcoin. Un usuario puede bloquear cualquier cantidad de Bitcoin por el período de tiempo deseado a través de esta función. Sin embargo, con períodos de bloqueo más cortos (por ejemplo, 10 minutos), debido a la congestión de la red y los tiempos de bloque de la red de Bitcoin, es posible que estas transacciones no se procesen lo suficientemente rápido, lo que genera retrasos en el canje del Bitcoin. Tenga en cuenta que para que una transacción de participación de Bitcoin sea válida, se deben cumplir los requisitos mínimos.

### 8\. ¿Core Chain proporciona algún soporte de billetera de hardware para la participación sin custodia de Bitcoin?

Los usuarios deben cumplir con los siguientes requisitos para que una transacción de apuesta de Bitcoin sea considerada válida.

- Los usuarios deben asegurarse de que la transacción se envíe a su dirección.

- Usando la función nativa de timelock de Bitcoin, especifique la cantidad bloqueada que se destinará al validador en la cadena de bloques Core como la salida de la transacción.

- When using the staking script, there is **no** minimum BTC requirement for staking. However, if staking through the [official staking website UI](https://stake.coredao.org/staking), users must stake at least **0.01 BTC** (excluding transaction fees).

- Minimum staking duration depends on the method. The official website UI requires a 5-day minimum, while staking through script has no lockup requirement.

- La transacción también debe contener una salida op\_return especificando
  - La dirección del validador de Core al que el apostador desea delegar su Bitcoin.
  - La dirección a la que el apostador desea que se envíen sus recompensas en tokens CORE.

### 9\. ¿Por qué la dirección de participación proporcionada difiere de tu dirección original de Bitcoin?

La dirección de participación se deriva de la clave privada maestra de tu billetera, lo que garantiza tu control y seguridad sobre tus activos. Tus Bitcoins permanecen almacenados de forma segura en tu billetera original, sin verse afectados por las apuestas. Aunque es posible que los activos apostados no sean visibles en algunas versiones de billetera, aún tienes la propiedad total.

Puedes ver tus fondos apostados buscando la dirección de participación en cualquier explorador de Bitcoin como [Mempool](https://mempool.space/). Estamos trabajando activamente para hacer que los activos apostados sean visibles en todas las billeteras compatibles, especialmente a través de versiones de línea de comandos.

### 10\. ¿Core proporciona soporte de billetera de hardware para la Apuesta de Bitcoin sin Custodia?

Debido a limitaciones técnicas, la Apuesta de Bitcoin sin Custodia actualmente no es compatible con billeteras de hardware. Sin embargo, estamos explorando constantemente formas de mejorar la compatibilidad con varios tipos de billeteras, priorizando la seguridad y la conveniencia para nuestros usuarios.

### 11\. ¿Cuáles son las consideraciones importantes para los períodos de bloqueo antes de apostar tus activos?

- **Expiración del tiempo de bloqueo:** Cuando bloqueas tu Bitcoin para la apuesta, este no es accesible hasta que concluya el período de apuesta.
- **Elegir sabiamente:** Debes seleccionar tu período de bloqueo con cuidado, considerando tus objetivos de inversión y tolerancia al riesgo. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte con duraciones más largas.
- **Verificación de la cantidad apostada:** Debido a algunas complejidades técnicas, es posible que tu activo apostado no sea visible en tu billetera cuando se revisa a través de CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados en el [Sitio Web Oficial de Apuestas de Core](https://stake.coredao.org/). Además, los retrasos en el tiempo de bloque, el número de requisitos de confirmación de bloque y la congestión de la red en la red de Bitcoin podrían causar retrasos en la confirmación de tus transacciones, lo que hará que tus activos no sean visibles en tus billeteras.

### 12\. ¿Por qué mi activo apostado no es visible en mi billetera?

Debido a complejidades técnicas, es posible que tu activo apostado no sea visible en tu billetera al revisarlo a través de CLI. Sin embargo, puedes verificar fácilmente que tienes la propiedad total de tus activos apostados desde el [Sitio web oficial de apuestas de Core](https://stake.coredao.org/). Además, los retrasos debido al tiempo de bloque, los requisitos de confirmación de bloques y la congestión de la red Bitcoin podrían ocasionar demoras en la confirmación de tus transacciones, lo que hace que tus activos no sean visibles en tus billeteras.

### 13\. ¿Qué hacer si el botón "Canjear BTC" no funciona en el sitio web de apuestas?

[Halborn](https://www.halborn.com/), una firma cumplidora de SOC2 Tipo 1 reconocida por su experiencia en seguridad de contratos inteligentes y [de confianza de plataformas blockchain líderes](https://www.halborn.com/about/who-trusts-us) como Ava Labs, Solana y Polygon, así como proyectos DeFi como Sushiswap, ha auditado exhaustivamente el protocolo de Core y la seguridad de la apuesta de Bitcoin sin custodia. Puede revisar los informes de auditoría sobre el protocolo de Core y la participación sin custodia de Bitcoin por parte de empresas líderes [aquí](https://docs.coredao.org/docs/Learn/audit).

### 14\. ¿Qué hacer si el botón _`Canjear BTC`_ no funciona en el sitio web de apuestas?

Puedes canjear tu BTC haciendo clic en el botón `Canjear` en el [Sitio web oficial de Apuestas de Core](https://stake.coredao.org/). Si el botón no funciona, intenta borrar la caché de tu navegador y vuelve a intentarlo. Si sigues teniendo problemas, por favor comunícate en el [Foro de desarrolladores de Core](https://forum.coredao.org/).

