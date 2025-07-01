---
sidebar_label: ERC-721 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-721 en Core
---

# Tokens ERC-721

---

## ¿Qué es ERC-721?

ERC-721 es el estándar para tokens no fungibles (NFTs). A diferencia de los tokens ERC-20 que son fungibles, los tokens ERC-721 son únicos y distinguibles entre sí. Esto los hace ideales para casos de uso como arte digital, coleccionables, objetos de juego y más.

## Prerrequisitos

Antes de comenzar, necesitarás:

- **MetaMask** o cualquier billetera EVM.
- Un conocimiento básico de **Solidity** (aunque te guiaremos durante todo el proceso).
- Acceso a **Remix IDE**: [https://remix.ethereum.org](https://remix.ethereum.org)

## Paso 1: Utiliza el Asistente de OpenZeppelin para generar tu contrato ERC-721

### ¿Por qué usar el asistente de OpenZeppelin?

OpenZeppelin proporciona plantillas de contratos inteligentes seguras y auditadas. El **asistente de OpenZeppelin** es una herramienta excelente que te permite generar contratos inteligentes ERC-721 con solo unos clics, garantizando el seguimiento de las mejores prácticas.

1. **Ve al asistente de OpenZeppelin**: Abre él [Asistente de OpenZeppelin](https://wizard.openzeppelin.com/#erc721) en tu navegador.

2. **Selecciona ERC-721**:

- De las diferentes plantillas de contrato listadas, selecciona **ERC-721**.

3. **Personaliza tu contrato**:

- **Token Name**: Introduce el nombre de tu token (ej: `MyNFT`).
- **Token Symbol**: Ingresa el símbolo de tu token (ej: `MNFT`).
- **Función de acuñación**: Añade una función para permitir que se creen nuevos tokens.
- **URI de metadatos**: Puedes configurar los metadatos mediante una URI, que apuntará a la información de tus NFTs (ej: IPFS o un servidor centralizado).

<p align="center"></p>

4. **Copia el código**:

Después de configurar tu contrato, has clic en el botón **Copy** para obtener el código de Solidity, o puedes abrirlo directamente en Remix IDE.

## Paso 2: Configura Remix IDE

Remix es un IDE en línea para desarrollo en Solidity que permite escribir, desplegar y gestionar contratos inteligentes en la blockchain de Ethereum. Es ideal para principiantes y para pruebas rápidas.

1. **Ve a Remix IDE**: Abre [Remix IDE](https://remix.ethereum.org/) en tu navegador.

2. **Crea un nuevo archivo de Solidity**:

- En Remix, crea un nuevo archivo navegando al directorio **contracts** y haciendo clic en el botón **+**.
- Pega el código del contrato ERC-721 que copiaste del asistente de OpenZeppelin en el archivo recién creado.

<p align="center"></p>
3. **Instala los contratos de OpenZeppelin**:

- Remix ofrece una forma de importar contratos de OpenZeppelin directamente. Esto se hace agregando la siguiente declaración de importación al inicio de tu contrato:

```javascript
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
```

Si usas el plugin "Solidity compiler" de Remix, este obtendrá automáticamente los contratos de OpenZeppelin por ti. Sin embargo, si estás usando Hardhat, deberás instalar manualmente los contratos de OpenZeppelin.

## Paso 3: Compila el contrato en Remix

**Compila tu Contrato:**

- En Remix IDE, ve a la pestaña de **Solidity Compiler** (la que tiene el logo de Solidity).
- Selecciona la versión del compilador que corresponde a tu contrato (por ejemplo, 0.8.24).
- Haz clic en **Compile** para compilar el contrato.
- Corrige los errores\*\*: Si hay errores en el código, Remix los resaltará. Corrige los errores y recompila.

<p align="center"></p>

## Paso 4: Despliega el contrato en una red de pruebas

### Conecta Remix con MetaMask:

- Ve a la pestaña de Deploy & Run Transactions en Remix.
- En Environment, selecciona Injected Web3. Esto va a conectar Remix con tu billetera MetaMask.

<p align="center"></p>

- Asegúrate de que tu MetaMask esté conectado a Core Testnet2.

### Despliega tu Contrato:

- Ve a la sección de Deploy.
- Selecciona el **contrato de NFT** que quieres desplegar (`MyNFT`).
- Asegúrate de que la cuenta esté conectada a la testnet correcta.
- Pega la dirección del propietario (owner) en la pestaña de despliegue (dado que el contrato es "ownable").
- Clic en **Deploy**. MetaMask te pedirá que confirmes la transacción.

<p align="center"></p>

Una vez desplegado, verás la dirección del contrato en Remix.

## Paso 5: Interacción con el contrato

Ahora que tu contrato está desplegado, puedes interactuar con él directamente desde Remix.

**Acuña un nuevo NFT:**

- En Deployed Contracts, verás tu contrato desplegado.
- Expande la interfaz de contrato para interactuar con funciones como safeMint.
- Llama a la función **safeMint** para acuñar nuevos NFTs. Vas a necesitar proporcionar la `dirección del destinatario` y el `token Id` como argumentos.
- Confirma la transacción en Metamask.

<p align="center"></p>

**Ver tu NFT**

- Después de acuñar tu NFT, puedes verlo en una billetera que soporte tokens ERC-721 como MetaMask.

## Paso 6: Administrar tus NFTs

Puedes añadir funciones adicionales a tu contrato, como:

**Burning Tokens**: Una función para quemar (destruir) NFTs.
Para personalización adicional, consulta la documentación de ERC-721 de OpenZeppelin y añade nuevas características a tu contrato.

Para más información sobre la implementación ERC-721 de OpenZeppelin, por favor lee [ERC-721](https://docs.openzeppelin.com/contracts/4.x/erc721).

#### Referencias

- [https://ethereum.org/en/developers/docs/standards/tokens/erc-721/](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)
- [https://docs.openzeppelin.com/contracts/4.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
