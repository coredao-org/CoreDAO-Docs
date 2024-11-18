---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de participación de Bitcoin sin custodia

---

## Fondo

La metodología para integrar las apuestas de bitcoin se centra en [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). El bloqueo de tiempo `OP_CHECKLOCKTIMEVERIFY` (CLTV) es un código de operación específico utilizado en el lenguaje de programación de Bitcoin que permite crear condiciones basadas en el tiempo o la altura del bloque antes de que se puedan gastar bitcoins desde el resultado de una transacción. Esto proporciona una manera de crear salidas con bloqueo de tiempo, lo que significa que no se pueden gastar hasta que se cumpla una determinada condición relacionada con el tiempo o la altura del bloque.

![btc-stake-tx-design](../../../../static/img/btc-stake/tx-design/stake-tx-design%20\(5\).png)

## Estructura de transacción

### Transacción de apuesta

Una transacción de participación de Bitcoin debe tener dos o tres resultados, que son

- Salida tipo `P2SH/P2WSH`, con secuencia de comandos de canje habilitada para bloqueo de tiempo
- Salida tipo `OP_RETURN`, con información de apuesta central
- (_Opcional_) Cambiar dirección

(_Opcional_) Cambiar dirección.

(_Opcional_) Cambiar dirección

### Transacción de retiro

Cuando finaliza el bloqueo de tiempo, el UTXO bloqueado se puede gastar usando el script de canje

![btc-staking-withdrawal-tx](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(2\).png)

## Diseño de guión

### Salida P2SH/P2WSH

- Core admite salidas `P2SH` y `P2WSH` para apostar Bitcoin.

- La construcción de la salida tipo `P2SH` es la siguiente

  - `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

- La construcción de la salida tipo `P2WSH` es la siguiente

  - `OP_0 <SHA256(RedeemScript)>`

### Canjear Script

El `RedeemScript` debería comenzar con un bloqueo de tiempo CLTV. A continuación se muestran algunos tipos comunes.

- Cuando se utiliza una clave pública `<CLTV timelock> OP_CLTV OP_DROP <pubKey Hash> OP_CHECKSIG` y el script de desbloqueo correspondiente en la transacción de retiro es `<sig> <pubKey>`

- Cuando se utiliza un hash de clave pública (más recomendado) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` y el script de desbloqueo correspondiente en la transacción de retiro es `<sig> <pubKey> <RedeepScript>`

- Cuando se utiliza la dirección de firma múltiple `<pubKeyN> OP_CLTV OP_DROP M <sig1> <pubKey1> ... <pubKeyN> N OP_CHECKMULTISIG` y el script de desbloqueo correspondiente en la transacción de retiro es `OP_0 <sig1>... <sigM> <RedeemScript>` La cantidad y duración de Bitcoin bloqueada en esta salida se utilizarán para el cálculo de la elección del validador y la distribución de recompensas en Core.

> **Nota**
> Hay _requisitos mínimos_ tanto en **cantidad** como en **duración** para que la apuesta sea elegible en Core. Un usuario debe apostar al menos **0,01 Bitcoin** (menos tarifas de transacción) durante al menos **10 días** (`marca de tiempo CLTV - marca de tiempo de confirmación de transacción > 10 días`).

## OP_RETURN Salida

La salida `OP_RETURN` debe contener toda la información de apuestas en orden y estar compuesta en el siguiente formato:

- **`OP_RETURN`:** identificador `0x6a`
- **`LENGTH`:** que representa la longitud total de bytes después del código de operación `OP_RETURN`. _Tenga en cuenta que todos los datos deben enviarse con sus bytes de tamaño apropiado_.
- **`Identificador Satoshi Plus`:** (**SAT+**) 4 bytes
- **`Versión`:** (**0x01**) 1 byte
- **`ID de cadena`:** (1115 para Core Testnet y 1116 para Core Mainnet) 2 bytes
- **`Delegator`:** La dirección principal para recibir recompensas, 20 bytes
- **`Validador`:** La dirección del validador principal a la que apostar, 20 bytes
- **`Tarifa`:** Tarifa por retransmisor, 1 byte, rango [0,255], medido en CORE
- (_Opcional_) **`Canjear script`**
- (_Opcional_) **`Canjear script`**

#### Puntos clave

- Cualquier byte que pueda traducirse a un número debe usar `OP_number` (`{0}` debe usar `OP_0` en lugar de `0x0100`, `{16}` debe usar `OP_16` en lugar de `0x0110`)
- Cualquier byte con longitudes menores que `0x4c (76)` se envía con 1 byte igual al tamaño `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Cualquier byte mayor o igual a `0x4c` se envía usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Cualquier byte con una longitud mayor que `255` usa `0x4d` (`OP_PUSHDATA2`)
- Cualquier byte con una longitud mayor que `65535` (`0xffff`) usa `0x4e` (`OP_PUSHDATA4`)

Debe estar disponible `RedeemScript` o `Timelock`; el propósito es permitir que el retransmisor obtenga `RedeemScript` y envíe transacciones en Core. Si se proporciona un `RedeemScript`, el retransmisor lo utilizará directamente. De lo contrario, el retransmisor construirá el script de canje basándose en el bloqueo de tiempo y la información en las entradas de la transacción. Puede encontrar más información sobre la función del retransmisor en la [sección siguiente](#role-of-relayers).

## Ejemplos de transacciones

### Transacción de apuesta

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

![btc-staking-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(3\).png)

#### Salida P2WSH

Esta es la salida de replanteo y es una dirección P2WSH estándar. El script de canje utilizado para este resultado es `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`

```jsx
OP_PUSHBYTES_4 1f5e0e66
OP_CLTV
OP_DROP
OP_DUP
OP_HASH160
OP_PUSHBYTES_20 c4b8ae927ff2b9ce218e20bf06d425d6b68424fd
OP_EQUALVERIFY
OP_CHECKSIG
```

El script se parece mucho a un script de canje `P2PKH` normal, excepto que comienza con un bloqueo de tiempo `OP_PUSHBYTES_4 1f5e0e66 OP_CLTV OP_DROP`.

El hash del script de canje utilizado en esta salida de P2WSH es `SHA256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` que resulta en `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0118029b0ba15e44e0e9`.

El hash del script de canje utilizado en esta salida de P2WSH es `Sha256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` que resulta en `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0118029b0ba15e44e0e9`

#### Salida OP_RETURN

El hexadecimal completo de esta salida es `6a4c505341542b01045bde60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1a9e209f5ea0036c8c2f41078a3cebee57d8a47d501041f5e0e66b17576a91 4c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`, donde

- `6a` es el código de operación op_return
- `4c50` es la longitud total de bytes después del código de operación `OP_RETURN` [1]
- `5341542b` SAT+, que es satoshi plus identificador
- `01` es la versión
- `045b` 1115, que es la identificación de la cadena (1115 para Core Testnet y 1116 para Core Mainnet)
- `de60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1` es la dirección de recompensa
- `a9e209f5ea0036c8c2f41078a3cebee57d8a47d5` es la dirección del validador
- `01` es la tarifa de retransmisión, medida en CORE
- `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` es un script de canje, que se explica en la sección anterior.

`041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` es un script de rescate, que se explica en la sección anterior

### Transacción de retiro

[https://mempool.space/tx/dc02ddc54ff82ba561f4d82429338d1df50377fcce0725bc764b9b2562d10832](https://mempool.space/tx/10182ad08fdb0469ab3d91d1bb340c7b0cbd858ad8865 f6b6ddf76e3806ba889)

This transaction spent the P2WSH time-lock output from the above staking transaction

![btc-staking-withdrawal-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(4\).png)

En la entrada, se proporciona el script de canje `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` para gastarlo. Dado que el bloqueo de tiempo `1f5e0e66` (660e5e1f después de revertir bytes, que es la marca de tiempo Unix 1712217631) ya expiró, el UTXO se gastó correctamente.

> **Nota**> Pronto se proporcionarán ejemplos de código para la construcción de transacciones de participación y retiro en la red Bitcoin.

## Papel de los retransmisores

En sentido estricto, el proceso de staking de Bitcoin sin custodia consta de dos pasos

1. Participación en la red Bitcoin
2. Envíe la transacción de staking de Bitcoin confirmada a Core

Para que todo el proceso sea más cómodo, Core introduce el rol de retransmisores. Los retransmisores pueden ayudar a los usuarios a enviar transacciones a la red central después de que se confirme la transacción de staking en la red Bitcoin. Dado que es necesario verificar la transacción en la red Core con el cliente Bitcoin Light integrado, los retransmisores deben obtener el `RedeemScript` correspondiente de la salida `P2SH/P2WSH`. Para cumplir con este requisito, sugerimos a los usuarios

- Coloque el `RedeemScript` completo al final de la salida `OP_RETURN`, si el script es corto. coloque el `RedeemScript` completo al final de la salida `OP_RETURN`, si el script es corto.
- Establezca la dirección de recepción de la transacción de staking como propia para que los retransmisores puedan extraer información útil de la entrada de la transacción y componer el `RedeemScript` por sí mismos. P.ej.
  - Si es una dirección normal, la `pubkey` o el `pubkey hash` debe configurarse como la clave pública correspondiente de la entrada al construir el `RedeemScript`.
  - Si se trata de una dirección multifirma, la clave pública de la dirección multifirma correspondiente debe configurarse al construir el `RedeemScript`.
