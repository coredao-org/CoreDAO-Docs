---
sidebar_label: Diseño de Transacción
hide_table_of_contents: false
sidebar_position: 2
---

# Diseño de Staking de Bitcoin con Autocustodia

---

## Antecedentes

La metodología para integrar el staking de Bitcoin se centra en el código [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify) `OP_CODE`, nativo de Bitcoin. CLTV es una operación del script de Bitcoin que restringe que las salidas de transacciones sean gastadas hasta que se alcance un tiempo absoluto o altura de bloque especificada. Al crear una transacción con un script CLTV, los poseedores de Bitcoin pueden hacer que sus monedas sean temporalmente no gastables mientras incluyen metadatos que permiten a Core reconocer su participación en el consenso. Este mecanismo aprovecha las capacidades de scripting existentes de Bitcoin sin requerir ninguna modificación al protocolo de Bitcoin.

<p align="center">
![btc-staking-tx-design](../../../static/img/btc-staking/tx-design/staking-tx-design.png)
</p>

### Requisitos para la Validez de la Transacción {#requirements-for-transaction-validity}

- Para crear una transacción de bloqueo temporal válida que los relayers de Core reconozcan, los usuarios deben:
    - Crear una transacción de Bitcoin donde la salida se envíe a su propia dirección utilizando la función nativa de timelock CLTV de Bitcoin
    - Especificar la cantidad de Bitcoin que desean bloquear temporalmente para la delegación a un validador de Core
    - Incluir una salida `OP_RETURN` que contenga dos datos críticos:
        - La dirección del validador de Core al que desean apoyar
        - La dirección Core donde quieren recibir las recompensas en tokens CORE
- Requisitos Mínimos:
    - Cantidad: Al usar la [interfaz oficial de staking](https://stake.coredao.org/staking), se debe bloquear temporalmente un mínimo de 0.01 BTC (excluyendo las comisiones de transacción).
    - Duración: El período mínimo de bloqueo temporal es de 24 horas, aunque la interfaz de staking de Core recomienda un mínimo de 5 días para una participación óptima
    - Implementación técnica: No existen requisitos mínimos al crear transacciones de bloqueo temporal manualmente, aunque se recomiendan los mismos parámetros para una participación efectiva

### Flujo de Transacciones

Las operaciones de Self-Custodial Bitcoin Staking se realizan en dos cadenas de bloques separadas: Bitcoin y Core. El siguiente diagrama de flujo ilustra el proceso para que los poseedores de Bitcoin ganen recompensas de staking a través del Self-Custodial Bitcoin Staking de Core.

<p align="center">
![btc-staking-flow](../../../static/img/btc-staking/btc-staking-workflow.png)
</p>

## Estructura de la Transacción

### Transacción de staking

Una transacción de staking en Bitcoin debe tener dos o tres salidas, que son

- Una salida de tipo `P2SH/P2WSH`, con un script de canje con bloqueo por tiempo habilitado
- Una salida de tipo `OP_RETURN`, con la información de staking de Core
- (_Opcional_) Una dirección de cambio

Tenga en cuenta que **no** hay restricciones sobre las entradas.

<p align="center">
![btc-staking-tx-output](../../../static/img/btc-staking/tx-design/staking-flow.png)
</p>

### Transacción de retiro

El UTXO bloqueado (Bitcoins) puede ser gastado usando el script de canje una vez que finaliza el timelock.

<p align="center">
![btc-staking-withdrawal-tx](../../../static/img/btc-staking/tx-design/withdrawal-flow.png)
</p>

## Diseño del Script

### Salida P2SH/P2WSH

- Core admite salidas tanto de tipo `P2SH` como `P2WSH` para el staking de Bitcoin.

- La construcción de una salida de tipo `P2SH` es la siguiente

    - `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

- La construcción de una salida de tipo `P2WSH` es la siguiente

    - `OP_0 <SHA256(RedeemScript)>`

### Script de Canje

El `RedeemScript` debe comenzar con un timelock CLTV. A continuación, se presentan algunos tipos comunes.

- Cuando se utiliza una clave pública `<CLTV timelock> OP_CLTV OP_DROP <pubKey> OP_CHECKSIG` y el script de desbloqueo correspondiente en la transacción de retiro es `<sig> <RedeemScript>`

- Cuando se utiliza un hash de clave pública (más recomendado) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` y el script de desbloqueo correspondiente en la transacción de retiro es `<sig> <pubKey> <RedeemScript>`

- Cuando se utiliza la dirección de firma múltiple `<CLTV timelock> OP_CLTV OP_DROP M <pubKey1> <pubKey2> ... <pubKeyN> N OP_CHECKMULTISIG` y el script de desbloqueo correspondiente en la transacción de retiro es `OP_0 <sig1>... <sigM> <RedeemScript>` La cantidad y duración de Bitcoin bloqueada en esta salida se utilizarán para el cálculo de la elección del validador y la distribución de recompensas en Core.

:::note
Para ser elegible para el staking autocustodiado de BTC en Core, los requisitos mínimos de participación dependen del método elegido. Si se utiliza la interfaz del [sitio web oficial](https://stake.coredao.org/staking), los usuarios deben hacer staking de al menos **0.01 BTC** (excluyendo las comisiones de transacción). Al hacer staking mediante script, **no** hay un requisito mínimo de cantidad. Asimismo, la duración mínima del staking también varía según el método. La interfaz del sitio web oficial requiere un mínimo de 5 días, mientras que el staking a través del script no tiene ningún requisito de bloqueo.
:::

## Salida OP_RETURN

La salida `OP_RETURN` debe contener toda la información de staking en orden y debe componerse con el siguiente formato:

- **`OP_RETURN`:** identificador `0x6a`
- **`LENGTH`:** representa el tamaño total en bytes después del opcode `OP_RETURN`. _Nota: todos los datos deben incluir su byte(s) de longitud correspondiente_.
- **`Satoshi Plus Identifier`:** (**SAT+**) 4 bytes
- **`Version`:** (**0x01**) 1 byte
- **`Chain ID`:** (1114 para Core Testnet2 y 1116 para Core Mainnet) 2 bytes
- **`Delegator`:** La dirección principal para recibir recompensas, 20 bytes
- **`Validator`:** Dirección del validador de Core al que se delega, 20 bytes
- **`Fee`:** Comisión para el relayer, 1 byte, rango [0,255], medida en CORE
- **`RedeemScript`:** usado para redimir el BTC en staking una vez que el timelock expira.
- (_Opcional_) **`Timelock`:** 4 bytes

> **Nota:** Se debe incluir el RedeemScript. Además, si se incluye el Timelock, debe estar en formato Little Endian.

#### Puntos Clave

- Cualquier byte que pueda traducirse a un número debe usar `OP_number` (`{0}` debe usar `OP_0` en lugar de `0x0100`, `{16}` debe usar `OP_16` en lugar de `0x0110`)
- Cualquier byte con longitudes menores que `0x4c (76)` se envía con 1 byte igual al tamaño `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Cualquier byte mayor o igual a `0x4c` se envía usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Cualquier byte con longitud mayor a `255` utiliza `0x4d` (`OP_PUSHDATA2`)
- Cualquier byte con longitud mayor a `65535` (`0xffff`) utiliza `0x4e` (`OP_PUSHDATA4`)

Ya sea el RedeemScript o el Timelock deben estar disponibles. Esto permite a los relayers obtener el `RedeemScript` y enviar transacciones en Core. Si se proporciona un `RedeemScript`, el relayer lo utilizará directamente. De lo contrario, el relayer construirá el redeem script basado en el timelock y la información contenida en los inputs de la transacción. Puedes encontrar más información sobre el rol del relayer en la [siguiente sección](#role-of-relayers).

## Rol de los Relayers

En un sentido estricto, el proceso de Self-Custodial Bitcoin Staking consiste en dos pasos

1. Realizar el stake en la red de Bitcoin
2. Enviar la transacción de staking confirmada a Core

Para hacer que todo el proceso sea más conveniente, Core introduce el rol de los relayers. Los relayers pueden ayudar a los usuarios a enviar las transacciones a la red de Core después de la confirmación de la transacción de staking en la red de Bitcoin. Dado que es necesario verificar la transacción en la red de Core mediante el cliente ligero de Bitcoin embebido, los relayers necesitan obtener el RedeemScript correspondiente de la salida `P2SH/P2WSH`. Para cumplir con este requerimiento, sugerimos a los usuarios que

- Si el `RedeemScript` es corto, colócalo completo al final de la salida `OP_RETURN`. Por ejemplo, un `RedeemScript` se puede construir utilizando un public key hash, como se muestra en el ejemplo siguiente.
- Configura la dirección receptora de la transacción de staking como tu propia dirección, para que los relayers puedan extraer información útil del input de la transacción y componer el `RedeemScript` por sí mismos. Ejemplo.
    - Si es una dirección normal, la `pubkey` o `pubkey hash` debe configurarse como la clave pública correspondiente del input al construir el `RedeemScript`.
    - Si se trata de una dirección de firmas múltiples, la clave pública de la dirección de firmas múltiples correspondiente se debe configurar al construir el `RedeemScript`.

## Ejemplos de Transacción

### Transacción de staking

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

<p align="center">
![btc-staking-tx-example](../../../static/img/btc-staking/tx-design/staking-tx-design%20(3).png)
</p>

#### Salida P2WSH

Esta es la salida de staking y es una dirección estándar P2WSH. El redeem script utilizado para esta salida es `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`

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

El script se parece mucho a un redeem script `P2PKH` normal, excepto que comienza con un timelock `OP_PUSHBYTES_4 1f5e0e66 OP_CLTV OP_DROP`.

El hash del script de canje utilizado en esta salida de P2WSH es `SHA256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` que resulta en `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0 118029b0ba15e44e0e9`.

Aquí hay una herramienta en línea para generar el valor hash `P2WSH` `sha256` a partir del script de canje, mediante el cual puede verificar el cálculo anterior: [https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php](https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php)

#### Salida OP_RETURN

El hex completo de esta salida es `6a4c505341542b01045bde60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1a9e209f5ea0036c8c2f41078a3cebee57d8a47d501041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` , donde

- `6a` es el código de operación op_return
- `4c50` es la longitud total de bytes después del opcode `OP_RETURN` [1]
- `5341542b` SAT+, que es satoshi plus identificador
- `01` es la versión
- `045b` 1115, que es la identificación de la cadena (1115 para Core Testnet y 1116 para Core Mainnet)
- `de60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1` es la dirección de recompensa
- `a9e209f5ea0036c8c2f41078a3cebee57d8a47d5` es la dirección del validador
- `01` es la tarifa de relayer, medida en CORE
- `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` es un script de canje, que se explica en la sección anterior.

[1] Cualquier cantidad de bytes mayor o igual a `0x4c` se inserta usando `0x4c` (es decir, `OP_PUSHDATA`) seguido de la longitud seguida de los datos (`byte[80] -> OP_PUSHDATA + 80 + byte[80])`

### Transacción de retiro

[https://mempool.space/tx/dc02ddc54ff82ba561f4d82429338d1df50377fcce0725bc764b9b2562d10832](https://mempool.space/tx/10182ad08fdb0469ab3d91d1bb340c7b0cbd858ad8865f6b6ddf76e3806ba889)

Esta transacción gastó la salida P2WSH con time-lock de la transacción de staking mencionada anteriormente

<p align="center">
![btc-staking-withdrawal-tx-example](../../../static/img/btc-staking/tx-design/staking-tx-design%20(4).png)
</p>

In the input, the redeem script `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` is provided to spend it. Since the time lock `1f5e0e66` (660e5e1f after reverting bytes, which is 1712217631 unix timestamp) has already expired, the UTXO was spent successfully.

> **Note**
> \> Code samples of constructing the staking and withdrawal transactions on Bitcoin network will be provided soon.