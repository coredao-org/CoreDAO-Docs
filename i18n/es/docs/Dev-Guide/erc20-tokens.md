---
sidebar_label: ERC-20 Tokens
hide_table_of_contents: false
sidebar_position: 2
description: ERC-20 en Core
---

# ERC20 Tokens

---

## ¿Qué es ERC-20?

ERC-20: es un estándar para tokens fungibles en la blockchain de Ethereum. A diferencia de los tokens ERC-721, que no son fungibles y son únicos, los tokens ERC-20 son idénticos entre sí y pueden intercambiarse en cantidades iguales. Son el tipo de token más común para proyectos que involucran criptomonedas, activos digitales y aplicaciones descentralizadas (dApps).

## Prerrequisitos

Antes de empezar, necesitarás:

- **MetaMask** o cualquier billetera EVM.
- Un conocimiento básico de **Solidity** (aunque te guiaremos durante todo el proceso).
- Acceso a **Remix IDE**: [https://remix.ethereum.org](https://remix.ethereum.org)

## Paso 1: Usa el Asistente de OpenZeppelin para generar tu contrato ERC-20

### ¿Por qué usar el asistente de OpenZeppelin?

OpenZeppelin proporciona plantillas de contratos inteligentes seguras y auditadas. El Asistente de OpenZeppelin es una herramienta excelente que simplifica el proceso de creación de tokens ERC-20, garantizando que su contrato sigue las mejores prácticas.

1. **Ve al asistente de OpenZeppelin**: Abre él [asistente de OpenZeppelin](https://wizard.openzeppelin.com/) en tu buscador.
2. **Selecciona ERC-20**: En la lista de modelos de contrato disponibles, seleccione **ERC-20**.
3. **Personaliza tu contrato**:

   - **Token Name**: Introduce el nombre de tu token (ej: `MyToken`).
   - **Token Symbol**: Ingresa el símbolo de tu token (ej: `MTK`).
   - **Initial Supply**: Fija una oferta inicial para tu token (ej: `1000000` tokens). Este es el número de tokens que se crearán tras el despliegue.

<p align="center">
![Openzepplin_Wizard-ERC721](../../static/img/dev_tutorials/ERC20_Wizard.png)
</p>

Opcionalmente, puedes incluir funciones adicionales como **mintear** y **pausar** si es necesario para su caso de uso.

4. **Copia el código**: Una vez configurado el contrato, haga clic en el botón **Copy** para obtener el código de Solidity. Puedes copiarlo en el portapapeles o abrirlo directamente en Remix IDE.

## Paso 2: Configura Remix IDE

Remix IDE es una plataforma en línea para desarrollo en Solidity, ideal para principiantes y pruebas rápidas.

1. **Ve a Remix IDE**: Abre [Remix IDE](https://remix.ethereum.org) en tu navegador.
2. **Crear un nuevo archivo de Solidity**:

   - En Remix, crea un nuevo archivo al navegar al directorio **contracts** y hacer clic en el botón **+**.
   - Paste the ERC-20 contract code you copied from OpenZeppelin’s Wizard into the newly created file.

<p align="center">
![Remix_ERC20_Contract](../../static/img/dev_tutorials/Remix_ERC20.png)
</p>
3. **Install OpenZeppelin Contracts**:
   - If you're using Remix’s built-in **Solidity compiler**, it will automatically fetch OpenZeppelin contracts for you.
   - If you're using Hardhat, you'll need to manually install OpenZeppelin contracts by running `npm install @openzeppelin/contracts`.

## Step 3: Compile the Contract in Remix

1. **Compile Your Contract**:
   - In Remix IDE, go to the **Solidity Compiler** tab (the one with the Solidity logo).
   - Select the compiler version that matches your contract (for example, `0.8.24`).
   - Click **Compile** to compile your contract.

<p align="center">
![Remix_ERC20_Compile](../../static/img/dev_tutorials/Remix_ERC20_Compile.png)
</p>

2. **Fix Any Errors**: If there are any errors in the code, Remix will highlight them. Correct any issues and recompile.

## Step 4: Deploy the Contract on a Test Network

1. **Connect Remix to MetaMask**:

   - Go to the **Deploy & Run Transactions** tab in Remix.
   - Under **Environment**, select **Injected Web3**. This will connect Remix to your MetaMask wallet.

<p align="center">
![ERC20_ConnectMetamask](../../static/img/dev_tutorials/ERC20_ConnectMetamask.png)
</p>

Ensure that your MetaMask is connected to a **Core testnet**

2. **Deploy Your Contract**:
   - In the **Deploy** section, select the **ERC-20 contract** (e.g., `MyToken`).
   - Please paste the `recipient address` for the tokens to be minted in Premint, as well as the `owner address` (note that in this case, both addresses are the same).
   - Click on **Deploy**. You’ll be prompted to confirm the transaction in MetaMask.
   - Once the contract is deployed, you’ll see the contract’s address in Remix.

<p align="center">
![ERC20_Deploy](../../static/img/dev_tutorials/ERC20_Deploy.png)
</p>

## Step 5: Interact with Your Contract

Now that your contract is deployed, you can interact with it directly from Remix.

1. **Check Balance**:

   - Under **Deployed Contracts**, you'll see your deployed contract.
   - Expand the contract’s interface to interact with functions like `balanceOf`, `mint` (if you included minting functionality).
   - Paste the recipient address and click on `balanceOf` to check the recipient's balance.

<p align="center">
![ERC20_Balance](../../static/img/dev_tutorials/ERC20_Balance.png)
</p>

1. **Mint Tokens**:

   - Call the `mint` function to create new tokens. Provide the recipient address and the number of tokens to mint.
   - Confirm the transaction in MetaMask.

2. **Transfer Tokens**:
   - You can also use the **transfer** function to send tokens from one address to another.
   - Provide the recipient's address and the amount of tokens you want to send.
   - Confirm the transaction in MetaMask.

## Step 6: Manage Your Tokens

You can add additional functions to your contract, such as:

- **Burning Tokens**: A function to burn (destroy) tokens.

- **Roles**: Roles allow you to assign different permissions to addresses, such as minting or burning tokens, ensuring secure and controlled actions within the contract.

- **Upgradability** : Enables you to upgrade the contract logic after deployment without losing data, ensuring flexibility for future improvements

Puede encontrar más información sobre la implementación de OpenZeppelin ERC-20 [aquí](https://docs.openzeppelin.com/contracts/4.x/erc20).

## References:

- [ERC-20 Token Standard (Ethereum.org)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [OpenZeppelin ERC-20 Implementation Documentation](https://docs.openzeppelin.com/contracts/4.x/erc20)
