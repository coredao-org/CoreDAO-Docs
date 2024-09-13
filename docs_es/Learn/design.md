---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de participación de Bitcoin sin custodia

---

## Fondo

La metodología para integrar las apuestas de bitcoin se centra en [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). El bloqueo de tiempo `OP_CHECKLOCKTIMEVERIFY` (CLTV) es un código de operación específico utilizado en el lenguaje de programación de Bitcoin que permite crear condiciones basadas en el tiempo o la altura del bloque antes de que se puedan gastar bitcoins desde el resultado de una transacción. Esto proporciona una manera de crear salidas con bloqueo de tiempo, lo que significa que no se pueden gastar hasta que se cumpla una determinada condición relacionada con el tiempo o la altura del bloque.

![btc-staking-tx-design](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(5\).png)

## Estructura de transacción

### Estructura de transacción

Una transacción de participación de Bitcoin debe tener dos o tres resultados, que son

- Salida tipo `P2SH/P2WSH`, con secuencia de comandos de canje habilitada para bloqueo de tiempo
- Salida tipo `OP_RETURN`, con información de apuesta central
- v

Tenga en cuenta que **no** hay restricciones en las entradas.

![btc-staking-tx-output](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(1\).png)

### Transacción de retiro

Cuando finaliza el bloqueo de tiempo, el UTXO bloqueado se puede gastar usando el script de canje

![btc-stake-retiro-tx](../../../../static/img/btc-stake/tx-design/stake-tx-design%20\(2\).png)

## Diseño de script

### Salida P2SH/P2WSH

- Core admite salidas `P2SH` y `P2WSH` para apostar Bitcoin.

- La construcción de la salida tipo `P2SH` es la siguiente

  - `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

- La construcción de la salida tipo `P2WSH` es la siguiente

  - `OP_0 <SHA256(RedeemScript)>`

### Script de canje

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
- **`Version`:** (**0x01**) 1 byte
- **`Chain ID`:** (1115 for Core Testnet and 1116 for Core Mainnet) 2 bytes
- **`Delegator`:** La dirección principal para recibir recompensas, 20 bytes
- **`Validador`:** La dirección del validador principal a la que apostar, 20 bytes
- **`Tarifa`:** Tarifa por retransmisor, 1 byte, rango [0,255], medido en CORE
- (_Opcional_) **`script de canje`**
- (_Opcional_) **`Timelock`:** 4 bytes

#### Puntos clave

- Cualquier byte que pueda traducirse a un número debe usar `OP_number` (`{0}` debe usar `OP_0` en lugar de `0x0100`, `{16}` debe usar `OP_16` en lugar de `0x0110`)
- Cualquier byte con longitudes menores que `0x4c (76)` se envía con 1 byte igual al tamaño `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Cualquier byte mayor o igual a `0x4c` se envía usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Cualquier byte mayor o igual a `0x4c` se envía usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Cualquier byte con una longitud mayor que `65535` (`0xffff`) usa `0x4e` (`OP_PUSHDATA4`)

Debe estar disponible `RedeemScript` o `Timelock`; el propósito es permitir que el retransmisor obtenga `RedeemScript` y envíe transacciones en Core. Si se proporciona un `RedeemScript`, el retransmisor lo utilizará directamente. Si se proporciona un `RedeemScript`, el retransmisor lo utilizará directamente. Puede encontrar más información sobre la función del retransmisor en la [sección siguiente](#role-of-relayers).

## Ejemplos de transacciones

### Transacción de apuesta

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

![btc-stake-tx-ejemplo](../../../../static/img/btc-stake/tx-design/stake-tx-design%20\(3\).png)

#### Salida P2WSH

This is the staking output and it is a standard P2WSH address. The redeem script used for this output is `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`

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

The script looks very similar to a normal `P2PKH` redeem script except it starts with a timelock `OP_PUSHBYTES_4 1f5e0e66 OP_CLTV OP_DROP`.

The redeem script hash used in this P2WSH output is `SHA256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` which results to `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0118029b0ba15e44e0e9` .

Here is an online tool to generate `P2WSH` `sha256` hash value from redeem script, by which you can verify the above calculation: [https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php](https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php)

#### OP_RETURN output

The full hex of this output is `6a4c505341542b01045bde60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1a9e209f5ea0036c8c2f41078a3cebee57d8a47d501041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` , where

- `6a` is op_return opcode
- `4c50` is the total byte length after the `OP_RETURN` opcode [1]
- `5341542b` SAT+, which is satoshi plus identifier
- `01` is version
- `045b` 1115, which is chain id (1115 for Core Testnet and 1116 for Core Mainnet)
- `de60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1` is the reward address
- `a9e209f5ea0036c8c2f41078a3cebee57d8a47d5` is the validator address
- `01` is relayer fee, measured in CORE
- `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` is redeem script, which is explained in the above section.

[1] Any bytes bigger than or equal to `0x4c` is pushed by using `0x4c` (ie. `OP_PUSHDATA`) followed by the length followed by the data (`byte[80] -> OP_PUSHDATA + 80 + byte[80])`

### Withdrawal Transaction

[https://mempool.space/tx/dc02ddc54ff82ba561f4d82429338d1df50377fcce0725bc764b9b2562d10832](https://mempool.space/tx/10182ad08fdb0469ab3d91d1bb340c7b0cbd858ad8865f6b6ddf76e3806ba889)

This transaction spent the P2WSH time-lock output from the above staking transaction

![btc-staking-withdrawal-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(4\).png)

In the input, the redeem script `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` is provided to spend it. Since the time lock `1f5e0e66` (660e5e1f after reverting bytes, which is 1712217631 unix timestamp) has already expired, the UTXO was spent successfully.

> **Note**
> \> Code samples of constructing the staking and withdrawal transactions on Bitcoin network will be provided soon.

## Role of Relayers

In a strict sense, the Non-Custodial Bitcoin Staking process consists of two steps

1. Stake on the Bitcoin network
2. Submit the confirmed Bitcoin staking transaction to Core

To make the entire process more convenient, Core introduces the role of relayers. Relayers can help users submit transactions to the Core network after the staking transaction is confirmed on the Bitcoin network. Since it is necessary to verify the transaction on the Core network with the embedded Bitcoin light client, relayers needs to obtain the corresponding `RedeemScript` of the `P2SH/P2WSH` output. To meet this requirement, we suggest users to either

- Put the entire `RedeemScript` at the end of the `OP_RETURN` output, if the script is short. e.g. a `RedeemScript` constructed using public key hash as shown in the sample above.
- Set the receiving address of the staking transaction as their own so relayers can extract useful information from the transaction input and compose the `RedeemScript` by themselves. E.g.
  - If it's a normal address, the `pubkey` or `pubkey hash` should be set as the input's corresponding public key when constructing the `RedeemScript`.
  - If it is a multi-signature address, the corresponding multi-signature address's public key should be set when constructing the `RedeemScript`.
