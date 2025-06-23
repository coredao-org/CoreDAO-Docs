---
sidebar_label: Usando Foundry
hide_table_of_contents: false
sidebar_position: 2
description: Despliega contratos en Core usando Foundry
---

# Usando Foundry

---

Foundry es un conjunto de herramientas rápido, eficiente y extensible para el desarrollo en EVM, escrito en Rust. Esta guía te llevará paso a paso por el proceso de instalación de Foundry, configuración de tu proyecto, escritura y pruebas de código Solidity, y despliegue y verificación de tus contratos en la blockchain de Core.

## 1. Instalación de Foundry

Antes de comenzar a usar Foundry, necesitas instalarlo en tu sistema. El proceso es relativamente sencillo y puede completarse en unos pocos pasos. Foundry utiliza `forge` como su herramienta principal para interactuar con contratos en Solidity.

### Paso 1: Instala Foundry

Puedes instalar Foundry ejecutando el siguiente comando en un sistema basado en Unix (macOS, Linux):

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Esto descargará e instalará Foundry. Incluye las siguientes herramientas:

- `forge`: La interfaz de línea de comandos para compilar, probar y desplegar contratos en Solidity.
- `cast`: Una herramienta para interactuar con contratos inteligentes y ver datos de la blockchain.
- `anvil`: Un nodo local utilizado para pruebas.

Una vez instalado, asegúrate de que el binario esté en el PATH de tu sistema. Para verificar la instalación, corre:

```bash
forge --version
```

Deberías ver la versión de Foundry que se instaló.

### Paso 2: Actualiza Foundry

Foundry está en desarrollo activo, por lo que es esencial mantener tu instalación actualizada. Puedes actualizar Foundry con el siguiente comando:

```bash
foundryup
```

Esto asegura que tengas la versión más reciente de Foundry instalada.

## 2. Configurando tu proyecto

### Paso 1: Crea un nuevo proyecto de Foundry

Para crear un nuevo proyecto con Foundry, puedes usar el comando `forge init`:

```bash
forge init my-blockchain-project
```

Esto generará una nueva estructura de directorios con todos los archivos necesarios para comenzar a escribir contratos y pruebas en Solidity.

Aquí está cómo se verá la estructura de carpetas generada:

```
my-blockchain-project/
│
├── lib/                       # External dependencies (if any)
├── script/
│   └── Script.s.sol           # Default deploy script file
|
├── src/
│   └── Counter.sol            # Default contract file
|
├── test/                      # Test files
│   └── Counter.t.sol          # Default test file
│
├── foundry.toml               # Configuration file for foundry
└── README.md                  # Project documentation
```

### Paso 2: Entendiendo la estructura de carpetas

- **src**: Contiene tus contratos Solidity.
- **script**: Contiene tu script de despliegue.
- **lib**: Contiene cualquier biblioteca o dependencia externa.
- **test**: Contiene archivos de prueba para validar tus contratos.
- **foundry.toml**: El archivo de configuración para Foundry. Incluye configuraciones del compilador, configuraciones de red y más.
- **README.md**: Un archivo markdown para documentar tu proyecto.

### Paso 3: Actualiza Solidity y la versión de la EVM

Actualiza el archivo `foundry.toml` con las versiones adecuadas de Solidity y EVM.

Asegúrate de estar utilizando la versión de Solidity `0.8.24` y establece la versión de EVM a `Shanghai`. Si estás utilizando una **testnet antigua**, establece la **versión de EVM a Paris**. Ten en cuenta que Core Testnet (1115) está ahora obsoleta y ya no se mantiene.

```bash
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
evm_version = "shanghai"
solc_version = "0.8.24"
```

## 3. Redacción de contratos inteligentes

Ahora que tu proyecto está configurado, vamos a escribir un contrato simple en Solidity.

### Paso 1: Crea un contrato simple

Navega al directorio `src` y crea un nuevo contrato en Solidity. Comencemos con un contrato simple de contador.

Crea un archivo llamado `Counter.sol` dentro de la carpeta `src`:

```javascript

```

En este contrato:

- La variable de estado `count` mantiene el valor del contador.
- Las funciones `increment` y `decrement` aumentan o disminuyen el contador.
- La función `getCount` devuelve el valor actual del contador.

## 4. Probando el contrato de Solidity

Foundry facilita la escritura de pruebas para tus contratos. El framework de pruebas utiliza Solidity en sí mismo, lo que facilita escribir pruebas junto con tus contratos.

### Paso 1: Crea un archivo de pruebas

Navega al directorio `test` y crea un archivo de prueba llamado `Counter.t.sol`:

```javascript

```

### Explicación:

- `setUp()`: Esta función corre antes de cada uno de los tests y se usa para inicializar tu contrato.
- Las funciones de prueba: `testInitialCount`, `testIncrement` y `testDecrement` son casos de prueba individuales para verificar la funcionalidad del contrato.

### Paso 2: Corre los Tests

Para correr las pruebas, ejecute el siguiente comando:

```bash
forge test
```

Foundry compilará el contrato, ejecutará las pruebas y te proporcionará un resumen de los resultados.

Deberías ver una salida similar a la siguiente:

```bash

```

## 5. Desplegando el Contrato

Una vez que hayas escrito y probado tu contrato en Solidity, puedes desplegarlo en la red de prueba (Testnet) o en la red principal (Mainnet) de Core.

### Paso 1: Configurando el despliegue

Para desplegar tu contrato, necesitarás configurar un script de despliegue. Crea un archivo llamado `Counter.s.sol` dentro de la carpeta script y pega el siguiente código.

```javascript

```

#### Creación y Carga de Variables de Entorno

Crea un `archivo .env` y añade los siguientes detalles

```text
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY="YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

Asegúrate de reemplazar `YOUR_API_KEY` y `YOUR_PRIVATE_KEY` con los valores reales.

Ahora que has creado el archivo `.env`, ejecuta el siguiente comando para cargar las variables de entorno en la sesión actual de la línea de comandos:

```bash
source .env
```

### Paso 2. Despliega el contrato

Para desplegar el contrato en Core Testnet, usa el comando `forge create`

```bash
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Counter.sol:Counter  --broadcast
```

O usa el comando `forge script`

```bash
forge script script/Counter.s.sol:CounterScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY  --broadcast
```

Después de ejecutar el comando, Foundry compilará y desplegará tu contrato en la red especificada. Devolverá la dirección del contrato desplegado.

```bash
[⠊] Compiling...
No files changed, compilation skipped
Deployer: 0x1b984521b42D3B9aCFCf37565Ab865f318b1Cd92
Deployed to: 0xc1C2466cBBa0f8E1FDb7f5E68e232190c745A6Ae
Transaction hash: 0x9ce3604ef36d526cd0cad75a23b6f4bfc9558cb8ee26caa825acf2ad914784b2
```

## 6. Verificando el Contrato

Foundry tiene una función integrada para verificar contratos automáticamente en Core. Puedes verificar tu contrato utilizando el comando `forge verify-contract`:

```bash
forge verify-contract 0xContract_Address Counter  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Foundry se encargará del proceso de verificación. Puedes usar [Core Scan](https://scan.test2.btcs.network/) para buscar la dirección del contrato y verificar que se haya desplegado y verificado correctamente.

## Lectura adicional

Para obtener instrucciones detalladas sobre cómo usar Foundry, visita [el sitio web oficial de Foundry](https://book.getfoundry.sh/).
