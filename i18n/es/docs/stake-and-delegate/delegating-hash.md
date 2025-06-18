---
sidebar_label: Bitcoin Hash Power Delegation
hide_table_of_contents: false
sidebar_position: 2
---

# Delegando poder de hasheo

---

Using their public and private keys, Bitcoin miners can delegate their hash power to a Core validator or delegate to themselves if they choose to run a validator by verifying and syncing their identity (addresses) on both the Bitcoin and Core blockchains. When relayers submit transactions, they sync the blocks mined by the Bitcoin miner with the Core network. Each round, the Core network calculates the Bitcoin hash power associated with each validator by counting the number of blocks produced by each miner in the Bitcoin network during the same day of the prior week. La arquitectura de la comunicación de la cadena de mapeo se ilustra en el siguiente diagrama. By delegating Bitcoin hash power to Validators, Bitcoin miners can help secure the network and share in system rewards.

<p align="center">
![delegate-hash](../../static/img/staoshi-plus/DPoW.png)
</p>

## Proceso de configuración para mineros

Let's take a look at how Bitcoin miners or mining pools can delegate hash power to the Core blockchain by adding an `OP_RETURN` output in the Bitcoin coinbase transaction.

:::info
Para obtener más información sobre la cadena de bloques Core y el consenso Satoshi Plus, consulte el [documento técnico](https://whitepaper.coredao.org/).
:::

### Implementación

Los mineros de Bitcoin y los grupos de minería deben redactar la siguiente información en el siguiente formato y colocarla en el bloque de Bitcoin:

`OP_RETURN + LENGTH + CORE + VERSION + Delegate Information`

Aquí hay una breve descripción de lo que pertenece a cada lugar:

- OP_RETURN: `0x6a`
- LONGITUD: `0x2d`, que representa la longitud total de bytes después del código de operación `OP_RETURN`
- CORE: `0x434f5245`
- VERSION: `0x01`
- La "Información del delegado" contiene dos direcciones principales, cada una de 20 bytes. La primera dirección es la dirección del Validador que recibirá su delegación de PoW. La segunda dirección es la dirección principal en la que desea recibir sus distribuciones de recompensas.

Para ilustrar, supongamos que la dirección del Validador es:

- &#x20;`0x0a53b7e0ffd97357e444b85f4d683c1d8e22879a`&#x20;

Y la dirección de recompensa es:

- &#x20;`0xBD13F9435f8B327C222d1D1930C17ea6719e8a33` &#x20;

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
- La información del validador para Core mainnet se puede encontrar [aquí](https://stake.coredao.org/). Validator information for Core Testnet can be found[ here](https://stake.test2.btcs.network/). Utilice la dirección del operador del Validador para completar la parte de la cadena de bytes descrita anteriormente.
- Su dirección de recompensa debe ser compatible con EVM. Después de crear una dirección con formato Ethereum para usarla como dirección de recompensa, agréguela después de la dirección del Validador en la cadena de bytes como se describe anteriormente. Más adelante, utilizará su dirección de recompensa para reclamar recompensas de Core blockchain usando MetaMask o su billetera web preferida. For more information about adding Core to MetaMask, please refer to our guide on [adding Core to MetaMask](https://medium.com/@core_dao/add-core-to-metamask-7b1dd90041ce).
