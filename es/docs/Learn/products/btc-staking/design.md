---
sidebar_label: Diseño
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de participación de Bitcoin sin custodia

---

## Fondo

The methodology for integrating Bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). El bloqueo de tiempo `OP_CHECKLOCKTIMEVERIFY` (CLTV) es un código de operación específico utilizado en el lenguaje de programación de Bitcoin que permite crear condiciones basadas en el tiempo o la altura del bloque antes de que se puedan gastar bitcoins desde el resultado de una transacción. Esto proporciona una manera de crear salidas con bloqueo de tiempo, lo que significa que no se pueden gastar hasta que se cumpla una determinada condición relacionada con el tiempo o la altura del bloque.

![btc-stake-tx-design](../../../../static/img/btc-stake/tx-design/stake-tx-design%20\(5\).png)

### Requirements for Transaction Validity {#requirements-for-transaction-validity}

- For a Bitcoin transaction to be considered valid and picked up by the Relayers, users must ensure that the transaction is sent to their address and, using the Bitcoin native timelock feature, specify the lock-up amount intended to be delegated to the validator on the Core blockchain, as the transaction output.
- The transaction should also contain an `op_return` output specifying
  - The address of the Core Validator the staker wants to delegate their Bitcoin to.
  - The address to which the staker would like their CORE token rewards to be sent.
- To make staking eligible on Core, _minimal_ _requirements exist_ for both **amount** and **duration**. Users should stake at least **0.01 Bitcoin** (less transaction fees) for at least **10 days**.

### Transaction Workflow

Non-Custodial Bitcoin Staking operations are conducted on two separate blockchains: Bitcoin and Core. The following flowchart illustrates the workflow for Bitcoin holders to earn staking rewards through Core’s Non-Custodial Bitcoin Staking.

<p align="center">
![btc-staking-flow](../../../../static/img/btc-staking/NCBS%20Workflow.png)
</p>

## Estructura de transacción

### Transacción de apuesta

Una transacción de participación de Bitcoin debe tener dos o tres resultados, que son

- Salida tipo `P2SH/P2WSH`, con secuencia de comandos de canje habilitada para bloqueo de tiempo
- Salida tipo `OP_RETURN`, con información de apuesta central
- (_Opcional_) Cambiar dirección

(_Opcional_) Cambiar dirección.

<p align="center">
![btc-staking-tx-output](../../../../static/img/btc-staking/tx-design/staking-tx-design%20(1).png)
</p>

### Transacción de retiro

The locked UTXO (Bitcoins) can be spent using the redeem script when the time-lock ends.

<p align="center">
![btc-staking-withdrawal-tx](../../../../static/img/btc-staking/tx-design/staking-tx-design%20(2).png)
</p>

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

- When using a public key hash (most recommended) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` and the corresponding unlocking script in the withdrawal transaction is `<sig> <pubKey> <RedeemScript>`

- When using multi-signature address `<CLTV timelock> OP_CLTV OP_DROP M <pubKey1> <pubKey2> ... <pubKeyN> N OP_CHECKMULTISIG` y el script de desbloqueo correspondiente en la transacción de retiro es `OP_0 <sig1>... <sigM> <RedeemScript>` La cantidad y duración de Bitcoin bloqueada en esta salida se utilizarán para el cálculo de la elección del validador y la distribución de recompensas en Core.

:::note
Minimum requirements exist for both amount and duration to make staking eligible for Core. A user should stake at least 0.01 Bitcoin (exclusive of transaction fees) for at least 10 days `(CLTV timestamp—transaction confirmation timestamp > 10 days)`.
:::

## OP_RETURN Salida

The `OP_RETURN` output should contain all staking information in order and be composed in the following format:

- **`OP_RETURN`:** identificador `0x6a`
- **`LENGTH`:** que representa la longitud total de bytes después del código de operación `OP_RETURN`. _Tenga en cuenta que todos los datos deben enviarse con sus bytes de tamaño apropiado_.
- **`Identificador Satoshi Plus`:** (**SAT+**) 4 bytes
- **`Versión`:** (**0x01**) 1 byte
- **`ID de cadena`:** (1115 para Core Testnet y 1116 para Core Mainnet) 2 bytes
- **`Delegator`:** La dirección principal para recibir recompensas, 20 bytes
- **`Validador`:** La dirección del validador principal a la que apostar, 20 bytes
- **`Tarifa`:** Tarifa por retransmisor, 1 byte, rango [0,255], medido en CORE
- **`RedeemScript`:** used for redeeming staked BTC after timelock expires.
- (_Opcional_) **`Canjear script`**

> **Note:** RedeemScript should be included. Also, if the Timelock is included, Little Endian is required first.

#### Puntos clave

- Cualquier byte que pueda traducirse a un número debe usar `OP_number` (`{0}` debe usar `OP_0` en lugar de `0x0100`, `{16}` debe usar `OP_16` en lugar de `0x0110`)
- Any bytes with lengths smaller than `0x4c (76)`  are  pushed with 1 byte equal to the size `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Cualquier byte mayor o igual a `0x4c` se envía usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Cualquier byte con una longitud mayor que `255` usa `0x4d` (`OP_PUSHDATA2`)
- Cualquier byte con una longitud mayor que `65535` (`0xffff`) usa `0x4e` (`OP_PUSHDATA4`)

Either RedeemScript or Timelock must be available. This allows relayers to obtain the `RedeemScript` and submit transactions on Core. Si se proporciona un `RedeemScript`, el retransmisor lo utilizará directamente. De lo contrario, el retransmisor construirá el script de canje basándose en el bloqueo de tiempo y la información en las entradas de la transacción. Puede encontrar más información sobre la función del retransmisor en la [sección siguiente](#role-of-relayers).

## Papel de los retransmisores

En sentido estricto, el proceso de staking de Bitcoin sin custodia consta de dos pasos

1. Participación en la red Bitcoin
2. Envíe la transacción de staking de Bitcoin confirmada a Core

Para que todo el proceso sea más cómodo, Core introduce el rol de retransmisores. Relayers can help users submit transactions to the Core network after confirmation of the staking transaction on the Bitcoin network. Since verifying the transaction on the Core network with the embedded Bitcoin light client is necessary, relayers need to obtain the corresponding RedeemScript of the `P2SH/P2WSH` output. Para cumplir con este requisito, sugerimos a los usuarios

- If the `RedeemScript` is short, put the entire RedeemScript at the end of the `OP_RETURN` output. For example, a `RedeemScript` is constructed using a public key hash, as shown in the sample below.
- Establezca la dirección de recepción de la transacción de staking como propia para que los retransmisores puedan extraer información útil de la entrada de la transacción y componer el `RedeemScript` por sí mismos. P.ej.
  - Si es una dirección normal, la `pubkey` o el `pubkey hash` debe configurarse como la clave pública correspondiente de la entrada al construir el `RedeemScript`.
  - Si se trata de una dirección multifirma, la clave pública de la dirección multifirma correspondiente debe configurarse al construir el `RedeemScript`.

## Ejemplos de transacciones

### Transacción de apuesta

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

<p align="center">
![btc-staking-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20(3).png)
</p>

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

<p align="center">
![btc-staking-withdrawal-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20(4).png)
</p>

En la entrada, se proporciona el script de canje `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` para gastarlo. Dado que el bloqueo de tiempo `1f5e0e66` (660e5e1f después de revertir bytes, que es la marca de tiempo Unix 1712217631) ya expiró, el UTXO se gastó correctamente.

> **Nota**> Pronto se proporcionarán ejemplos de código para la construcción de transacciones de participación y retiro en la red Bitcoin.
