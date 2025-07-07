---
sidebar_label: Verificación de Contrato
hide_table_of_contents: false
sidebar_position: 2
description: Aprende cómo verificar un contrato inteligente usando Core Scan
---

# Verificación de Contrato

---

En el interés de la transparencia, nosotros recomendamos verificar todos los contratos en [Core Scan](https://scan.coredao.org/). Si bien existen varias formas de lograr la verificación del contrato, recomendamos utilizar la herramienta de verificación oficial de Core, [Core Scan](https://scan.coredao.org/), para una confiabilidad óptima. Este documento lo guía a través de los métodos más utilizados para la verificación de contratos: la herramienta web Core Scan, la API REST de Core y el complemento Hardhat Verification.

:::note
Asegúrese de que su contrato inteligente siga las [Pautas de soporte de Solidity de Core Chain](./smart-contract-guidelines.md). Para cumplir con estas directrices, configure el parámetro `evmVersion` a `paris` en los ajustes del compilador de Solidity.
:::

## Verificación web mediante Core Scan

La verificación web es el método más comúnmente usado para la verificación de smart contracts. Después de desplegar tu sart contract en la blockchain de Core, puedes usar su código fuente para verificarlo en Core Scan.

1. Navega al sitio web de Core Scan.

- [Para Core Mainnet](https://scan.coredao.org/)
- [Para Core Testnet2](https://scan.test.btcs.network)

2. Busque el contrato por dirección en Core Scan. Simplemente pegue la dirección del contrato en la barra de búsqueda del sitio web.
3. Después de ubicar el contrato, seleccione la pestaña **Contrato** y haga clic en **Verificar y publicar**_._

<p align="center"></p>

4. Complete la información de verificación requerida en la página, específicamente:

- Dirección del contrato;
- Compiler Type: Para contratos simples, selecciona el tipo de compilador `Single File`. Para contratos más complejos, como aquellos con importaciones externas, elige el tipo de compilador `Standard Json`.
- Versión del compilador;
- Tipo de licencia de código abierto;

<p align="center">
![verify-core-scan](../../../../../static/img/contract-verification/contract-verify-2.avif)
</p>

5. En la siguiente página, por favor llena el código fuente de Solidity para el contrato.

Los parámetros del constructor deben tener el formato de bytes codificados en ABI. Si su contrato tiene parámetros de constructor, le recomendamos agregarlos en el campo "Argumentos del constructor", aunque no es obligatorio. Remix y otras herramientas pueden generarlos por usted.

Si habilitó la optimización durante la compilación del contrato, seleccione "Sí" para el campo "Optimización".

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-3.avif)
</p>

6. Haga clic en **Verificar y publicar** para finalizar el proceso.

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-4.avif)
</p>

Ahora su contrato verificado en Core Scan debería verse así:

<p align="center">
![verify-contract](../../../../../static/img/contract-verification/contract-verify-5.avif)
</p>

## Verificación API

Puede encontrar la guía sobre el uso de Core API para verificar contratos [aquí](https://docs.coredao.org/docs/api/api-documents/contracts). Por favor, ten en cuenta que para hacer llamadas a la API, debes registrarte en Core Scan y generar una API key.

Si estás familiarizado con la API de Etherscan, ¡estás de suerte! Las llamadas API en Core son 100% compatibles con la API de Etherscan. Solo necesitas reemplazar la API key y la URL del endpoint, y todo debería funcionar correctamente.

## Verificación con Hardhat

La verificación con Hardhat es la forma más conveniente para que los desarrolladores verifiquen smart contracts. Para obtener más información sobre la verificación de Hardhat, consulte la guía oficial de verificación de Hardhat que se encuentra [aquí](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify).

Ten en cuenta que necesitarás agregar las redes de Core como cadenas custom, como se muestra a continuación en una configuración de ejemplo de Hardhat:

```javascript
```

## Verificación con Foundry

Actualiza el archivo `foundry.toml` para especificar la versión de Solidity y la versión de EVM para tu proyecto.

```bash
```

Crea un archivo `.env` para almacenar información sensible como tu clave privada, RPC URL y API keys. Esto ayuda a mantener tus credenciales seguras y te permite referenciarlas fácilmente en tu código.

```bash
RPC_URL = " https://rpc.test2.btcs.network"
PRIVATE_KEY = "YOUR_PRIVATE_KEY"
CORESCAN_API_KEY= "YOUR_API_KEY"
API_URL="https://api.test2.btcs.network/api"
```

**Importante:** Nunca hagas commit de este archivo `.env` al control de versiones (ej. GitHub) para evitar exponer información sensible. Si estás usando git, agrega el archivo `.env` a tu `.gitignore`.

Ahora que has creado el archivo `.env`, ejecuta el siguiente comando para cargar las variables de entorno en la sesión actual de la línea de comandos:

```bash
source .env
```

Ejecute el siguiente comando para verificar su contrato inteligente

```bash
forge verify-contract 0xContract_Address ContractName  --verifier-url $API_URL  --api-key $CORESCAN_API_KEY --watch
```

Reemplace `0xContract_Address` y `ContractName` con la dirección real de su contrato y su nombre correspondiente.

Foundry manejará el proceso de verificación; puedes usar [Core Scan](https://scan.test2.btcs.network/) para buscar la dirección del contrato y verificar que el contrato fue desplegado y verificado con éxito.

## Limitaciones conocidas

- Actualmente, Core solo soporta versiones del compilador Solidity hasta la 0.8.24.
- Las bibliotecas no son compatibles con las verificaciones API.
- Si tienes problemas verificando contratos muy grandes (más de 1000 líneas) en un solo archivo, recomendamos cambiar al formato `Standard JSON` para la verificación.