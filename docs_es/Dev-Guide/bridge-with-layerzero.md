---
sidebar_label: Puentear Tokens a Core con una Layer zero
hide_table_of_contents: false
sidebar_position: 2
---

# Puentear Tokens a Core con una Layer zero

---&#x20;

Esta guia alinea los pasos para puentear tu token ERC-20 a Core utilizando Omnichains Tokens Fungibles mediante una Layer Zero. El protocolo LayerZero empodera comunicaciones sin ficción cross-chain, así dejando a tus tokens operar a través múltiples cadenas. Por favor refiera a la LayerZero para ver todas las cacdenas de bloques soportadas (https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids).

## Descripción general

Antes de continuar, debes saber qué son los tokens fungibles omnichain y el protocolo LayerZero

**Omnichain Fungible Token (OFT)**: permite la creación de tokens nativos de múltiples cadenas, simplificando la gestión de tokens y mejorando la interoperabilidad.

**Protocolo LayerZero**: sirve como tecnología fundamental para interacciones entre cadenas, proporcionando un método confiable para que diferentes cadenas de bloques se comuniquen, garantizando transacciones seguras y eficientes.

## Puentiando los tokens ERC-20 existentes a Core

### Implementar el contrato LayerZero ProxyOFTV2 en la cadena de origen

Primero, **acceda al contrato ProxyOFTV2** recuperando el código del contrato `ProxyOFTV2` del[repositorio oficial](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft /v2/ProxyOFTV2.sol).

Luego\*\*, ajuste el contrato ProxyOFTV2 para la cadena de bloques de origen\*\*, así:

```
constructor(
        address _token,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Aquí hay algo de contexto sobre lo que está presente en este fragmento de código:

- **Dirección del contrato del token** (`_token`): proporcione la dirección del contrato del token ERC-20 para un contrato que ya se ha implementado en la cadena de origen. Si su token fuera USDC en Ethereum, por ejemplo, usaría la dirección del contrato [0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)
- **Decimals compartidos** (`_sharedDecimals`): establece el número de decimales para el token en el entorno LayerZero. Los decimales compartidos normalizan las diferencias entre los tipos de datos entre cadenas EVM y no EVM. Es una buena práctica utilizar un punto decimal compartido más pequeño en todas las cadenas para que su token pueda tener un saldo mayor.
  - Si su token se implementa en cadenas que no son EVM, debe configurarse con los decimales más bajos en todas las cadenas.
  - Si sus tokens solo se implementan en cadenas EVM y todos tienen decimales mayores que ocho, este valor debe establecerse como "8".
  - Consulte este [documento LayerZero](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2#what-should-i-set-as-shared-decimals) para más información.
- **Dirección de punto final de LayerZero para la cadena de origen** (`_lzEndpoint`): esta dirección de punto final es necesaria para que el contrato interactúe con el protocolo LayerZero. Por ejemplo, punto final de Ethereum: 0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675.
- Consulte la [documentación de LayerZero] (https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) para conocer los puntos finales de las cadenas de bloques compatibles.

Finalmente, **implemente el contrato `ProxyOFTV2`** en la cadena de bloques de origen elegida.

### Implementar el contrato OFTV2 LayerZero en la cadena central

Primero, **acceda al contrato OFTV2** recuperando el código del contrato `ProxyOFTV2` del[repositorio oficial](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/oft /v2/OFTV2.sol).

Luego, **prepare los parámetros para la implementación del contrato OFTV2 en Core Chain**, así:

```
constructor(
        string memory _name,
        string memory _symbol,
        uint8 _sharedDecimals,
        address _lzEndpoint
```

Aquí hay algo de contexto sobre lo que está sucediendo en este fragmento de código:

- **Nombre del token** (`_name`): especifique el nombre de su token (por ejemplo, moneda USD)
- **Símbolo de token** (`_symbol`): especifique su símbolo de token (por ejemplo, USDC)
- **Decimals compartidos** (`_sharedDecimals`): haga coincidir los decimales compartidos en `ProxyOFTV2` en la cadena de origen.
- **Dirección de punto final LayerZero para Core Chain** (`_lzEndpoint`): La dirección de punto final para Core Chain es `0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4`.
- Consulte la [documentación de LayerZero](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) para conocer los puntos finales de las cadenas de bloques compatibles.

Finalmente, **implemente el contrato en CoreDAO:** implemente este contrato OFTV2 en la cadena de bloques Core.

### Vincular contratos a través de controles remotos confiables

El término "remoto confiable" proviene de la mensajería de EVM a EVM y se refiere a los 40 bytes que identifican el contrato del cual recibirá mensajes en su contrato de aplicación de usuario LayerZero. El objeto de 40 bytes son los bytes empaquetados de `remoteAddress` y `localAddress`.

Puede generar `TrustedRemote` usando `ethers.js`:

```
// el control remoto confiable (o a veces denominado ruta o pathData)
// es el objeto empaquetado de 40 bytes de las direcciones del contrato de aplicación de usuario REMOTA + LOCAL

let trustedRemote = hre.ethers.utils.solidityPack(
    ['address','address'],
    [remoteContract.address, localContract.address]
)
```

En la cadena de bloques de origen, llame a la función `setTrustedRemoteAddress` del contrato `ProxyOFTV2` con los siguientes parámetros:

- `trustedRemote`: Estos son los 40 bytes generados por el control remoto confiable en el paso anterior
- `localContract`: esta es la dirección del contrato `ProxyOFTV2` de la cadena de origen.
- `remoteContract`: esta es la dirección del contrato `OFTV2` de la cadena Core

En la cadena de bloques Core, llame a la función `setTrustedRemoteAddress` del contrato `OFTV2` con los siguientes parámetros:

- `trustedRemote`: Estos son los 40 bytes generados por el control remoto confiable en el paso anterior.
- `localContract`: esta es la dirección del contrato `OFTV2` de la cadena Core.
- `remoteContract`: esta es la dirección del contrato `ProxyOFTV2` de la cadena de origen

Para obtener más información, consulte la [guía LayerZero para configurar controles remotos confiables](https://layerzero.gitbook.io/docs/evm-guides/master/set-trusted-remotes) para vincular sus contratos entre las dos redes.

### Establecer límite mínimo de gas para cada cadena

Deberá establecer el límite mínimo de gas para cada cadena. Es recomendable utilizar un mínimo de 200k para todas las cadenas EVM; la única excepción importante es Arbitrum, donde el límite de gas debería ser 2M. Aquí están los pasos.

Primero, llame a `setMinDstGas` en la cadena de origen (Core [chainId es 153] (https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids)). Asegúrese de incluir el tipo de paquete ("0" significa enviar, "1" significa enviar y llamar) y la cantidad límite de gasolina.

Luego, llame a `setMinDstGas` en Core Chain con el [chainId de la cadena de origen] (https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids). Asegúrese de incluir el tipo de paquete ("0" significa enviar, "1" significa enviar y llamar) y la cantidad límite de gasolina.

Finalmente, asegúrese de que su límite de gas `AdapterParams` sea mayor que `setMinDstGas`.

Para obtener más información, consulte la [guía LayerZero](https://layerzero.gitbook.io/docs/evm-guides/layerzero-omnichain-contracts/oft/oftv2).

### Transferir tokens entre cadenas

Aquí, cubriremos los pasos básicos involucrados en la transferencia de tokens entre cadenas.

Primero, asegúrese de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados.

Luego, clone el repositorio `oft-transfer-script` que se encuentra [aquí](https://github.com/LayerZero-Labs/oft-transfer-script/tree/main).

Una vez hecho esto, navegue hasta la carpeta `hardhat` en el repositorio clonado y ejecute `npm install` para instalar los paquetes npm requeridos.

A continuación, cree un archivo `.env` en el directorio raíz del repositorio y agregue las siguientes variables:

- `RPC_ENDPOINT`: esta debe ser la URL de su punto final Ethereum JSON RPC.
- `PRIVATE_KEY`: la clave privada de la dirección de Ethereum que desea utilizar con el script.&#x20

Aquí hay un fragmento de código que explica cómo se deben configurar `RPC_ENDPOINT` y `PRIVATE_KEY`:

```
RPC_ENDPOINT=<Your_RPC_Endpoint_URL> 
PRIVATE_KEY=<Your__Private_Key>
```

Finalmente, ejecute el script FT Token Transfer. Este script está diseñado para interactuar con el contrato inteligente OFT para facilitar las transferencias de tokens usando `estimateFees()` y `sendFrom()`. Aquí hay un poco más de contexto sobre lo que logran estos métodos:

- `estimateFees()`: Esta función proporciona una estimación de las tarifas requeridas para enviar una determinada cantidad de tokens.
- `sendFrom()`: Esta función le permite enviar tokens desde una dirección en la cadena de bloques de origen a otra en el destino.

Aquí hay un fragmento de código que muestra cómo transferir tokens con `sendFrom`:&#x20

```
npx hardhat sendFrom --qty 100000000000000 --network core
```

### Transferencias manuales a través de Etherscan

Si su contrato `ProxyOFT` está registrado en Etherscan, puede usar la interfaz de usuario de Etherscan para transferir sus tokens ERC20 manualmente llamando a la función `sendFrom()` con los siguientes parámetros:

- `de`: esta es la dirección del remitente en Ethereum.
- `dstChainId`: ID de cadena único de LayerZero para la cadena receptora (usaremos [chainId 153](https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids) para la cadena Core).
- `toAddress`: la dirección del destinatario previsto en la cadena Core.
- `cantidad`: El número de tokens **en unidades wei.**
- `refundAddress`: Esta es la dirección donde se enviarán los reembolsos de gasolina si es necesario. Es aconsejable utilizar la dirección del remitente como dirección de reembolso.
- `zroAddress`: en Etherscan, la "dirección cero" es `0x00000000000000000000000000000000000000000`.
- `adapterParams`: 0x
- `nativeFee`: puede calcular la tarifa nativa llamando a la función `estimateSendFee` en el mismo contrato usando los mismos `remoteChainId`, `toAddress`, `amount`, `useZro` y `adapterParams` anteriores.

## Lista de verificación de integración LayerZero

Consulte la [lista de verificación] (https://layerzero.gitbook.io/docs/evm-guides/layerzero-integration-checklist) para prepararse para una implementación de Mainnet.
