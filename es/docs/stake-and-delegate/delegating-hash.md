---
sidebar_label: Delegating Hash-Rate
hide_table_of_contents: false
sidebar_position: 2
---

# Delegar hash

---

Usando sus claves públicas y privadas, los mineros de BTC pueden delegar su poder de hash a un validador Core o delegarlo a sí mismos si eligen ejecutar un validador verificando y sincronizando su identidad (direcciones) tanto en la cadena de bloques BTC como en la Core. Cuando los retransmisores envían transacciones, sincronizan los bloques extraídos por el minero BTC con la Core Network. En cada ronda, la red Core calcula el poder de hash BTC asociado con cada validador contando la cantidad de bloques producidos por cada minero en la red BTC durante el mismo día de la semana anterior. La arquitectura de la comunicación de la cadena de mapeo se ilustra en el siguiente diagrama. La arquitectura de la comunicación de la cadena de mapeo se ilustra en el siguiente diagrama.

![delegate-hash](../../static/img/delegate/miner-power-relaying.png)

## Proceso de configuración para mineros

Echemos un vistazo a cómo los mineros o grupos de minería de BTC pueden delegar el poder de hash a la cadena de bloques Core agregando una salida `OP_RETURN` en la transacción de base de monedas BTC.

:::info
Echemos un vistazo a cómo los mineros o grupos de minería de BTC pueden delegar el poder de hash a la cadena de bloques Core agregando una salida `OP_RETURN` en la transacción de base de monedas BTC.
:::

### Implementación

Los mineros de Bitcoin y los grupos de minería deben redactar la siguiente información en el siguiente formato y colocarla en el bloque de Bitcoin:

`OP_RETURN + LENGTH + CORE + VERSION + Delegate Information`

Aquí hay una breve descripción de lo que pertenece a cada lugar:

- OP\_RETURN: `0x6a`
- LONGITUD: `0x2d`, que representa la longitud total de bytes después del código de operación `OP_RETURN`
- CORE: `0x434f5245`
- VERSION: `0x01`
- La "Información del delegado" contiene dos direcciones principales, cada una de 20 bytes. La primera dirección es la dirección del Validador que recibirá su delegación de PoW. La segunda dirección es la dirección principal en la que desea recibir sus distribuciones de recompensas.

Para ilustrar, supongamos que la dirección del Validador es:

- &#x20`0x0a53b7e0ffd97357e444b85f4d683c1d8e22879a`&#x20

Y la dirección de recompensa es:

- &#x20`0xBD13F9435f8B327C222d1D1930C17ea6719e8a33` &#x20

Combinando la constante `OP_RETURN + LENGTH + CORE + VERSION`, vemos que el prefijo para esta (y cualquier otra) cadena de bytes será `0x6a2d434f5245010`.

Recuerde que la "Información del delegado" completa proviene de la combinación del Validador y las direcciones de recompensa, por lo que sería:

- `0x0a53b7e0ffd97357e444b85f4d683c1d8e22879aBD13F9435f8B327C222d1D1930C17ea6719e8a33`

Al agregar el prefijo constante a nuestro ejemplo de información del delegado, obtenemos una cadena de bytes de ejemplo completa y válida:

- `0x6a2d434f5245010a53b7e0ffd97357e444b85f4d683c1d8e22879aBD13F9435f8B327C222d1D1930C17ea6719e8a33`

Simplemente incluya esta cadena de bytes como una nueva salida de la transacción Coinbase de Bitcoin para delegar su poder hash y recibir recompensas.

:::note
Tenga en cuenta que su Validador y dirección de recompensa serán diferentes a los anteriores y deben sustituirse en la parte "Información del delegado" de la cadena de bytes para poder delegar correctamente el poder de hash y recibir recompensas.
:::

### información adicional

- La cadena de bloques Core utiliza registros de bloques de la red Bitcoin de hace siete días para cálculos de puntuación híbrida. Además, después de elegir un validador, las recompensas de apuesta se distribuyen el segundo día de la ronda de cambio. Por lo tanto, después de delegar su poder de hash, los mineros/grupos de minería utilizarán su poder de hash en el cálculo de la elección del Validador N+7 días después y tendrán recompensas reclamables N+8 días después.
- Para mejorar las recompensas recibidas de Core blockchain, animamos a los mineros/grupos de minería a delegar en más de un Validador y distribuir sus poderes de hash de manera uniforme. La solución óptima es delegar **\~5%** de su tasa de hash general a cada validador.
- La información del validador para Core mainnet se puede encontrar [aquí](https://stake.coredao.org/). La información del validador para Core testnet se puede encontrar [aquí](https://stake.test.btcs.network/). Utilice la dirección del operador del Validador para completar la parte de la cadena de bytes descrita anteriormente.
- Su dirección de recompensa debe ser compatible con EVM. Después de crear una dirección con formato Ethereum para usarla como dirección de recompensa, agréguela después de la dirección del Validador en la cadena de bytes como se describe anteriormente. Más adelante, utilizará su dirección de recompensa para reclamar recompensas de Core blockchain usando MetaMask o su billetera web preferida. Para obtener más información sobre cómo agregar Core a MetaMask, consulte nuestra guía sobre [agregar Core a MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce).
