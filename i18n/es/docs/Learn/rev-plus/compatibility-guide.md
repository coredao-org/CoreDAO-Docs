---
sidebar_label: Guía de Compatibilidad Rev+
description: Guía de Compatibilidad para Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Rev+ Enabled Contracts: Guía de Compatibilidad

---

Esta guía describe las mejores prácticas y pasos de configuración para asegurar compatibilidad entre frameworks populares de desarrollo en Ethereum, incluyendo Foundry y Hardhat, así como librerías de frontend como **`ethers.js`**, al interactuar con contratos habilitados para Rev+.

## Foundry

**Foundry** es un toolkit de alto rendimiento para desarrollo en la EVM, que incluye herramientas como Forge para scripting y testing de smart contracts. Cuando trabajes con contratos habilitados para Rev+, el consumo de gas puede ser ligeramente mayor porque el contrato incluye lógica de asignación de revenue para los participantes de Rev+.

#### Ajustar Estimaciones de Gas con `--gas-estimate-multiplier`

Rev+ introduce un overhead adicional de gas que no es manejado automáticamente por la lógica de estimación de gas por defecto en Foundry.

- Usa el flag `--gas-estimate-multiplier` para incrementar la estimación de gas.
- **Rango recomendado**: `200–500`, dependiendo de la complejidad del contrato y la naturaleza de la integración de Rev+.
- Usa también el flag `--legacy` con Foundry para mejor compatibilidad.

**Ejemplo:**

```shell
forge script script/MyScript.s.sol --rpc-url <URL> --gas-estimate-multiplier 500 --broadcast --legacy
```

#### Probar exhaustivamente con múltiples valores de gas

Debido a que el uso de gas puede variar por rutas de ejecución en tiempo de ejecución y la lógica de Rev+, es esencial:

- Comenzar con un gas multiplier más alto (p. ej., 500\)
- Probar valores progresivamente más bajos para determinar el gas multiplier óptimo
- Asegurar robustez frente a fallos por out-of-gas

## Hardhat

**Hardhat** es un framework ampliamente usado para desarrollar smart contracts basados en EVM. Soporta la interacción con contratos habilitados para Rev+, pero requiere configuración manual del gas.

#### Manual Gas Estimation

Para contratos habilitados para Rev+, `eth_estimateGas` proporciona una estimación de gas fiable que incluye la lógica adicional. No se requiere multiplier; simplemente pasa el valor estimado como `gasLimit`.

**Ejemplo:**

```javascript
const estimatedGas = await contract.estimateGas.myMethod(...args);

await contract.myMethod(...args, {
  gasLimit: estimatedGas,
});
```

## Integración Frontend con Contratos Habilitados para Rev+

Al integrar contratos habilitados para Rev+ en aplicaciones frontend (p. ej., usando **ethers.js**, **wagmi**, o **web3.js**), se deben seguir prácticas similares a las de Hardhat para asegurar la ejecución confiable de las transacciones.

### Mejores Prácticas

- **Estimación de Gas**: Utiliza `.estimateGas.method()` para estimar el consumo de gas.
- **Sin Multiplier Necesario**: Usa el valor estimado directamente.
- **Manejo de Errores**: Implementa fallbacks para errores de `out-of-gas errors` y mejorar la experiencia del usuario.

**Ejemplo (ethers.js):**

```javascript
const estimatedGas = await contract.estimateGas.myMethod(...args);

const tx = await contract.myMethod(...args, {
  gasLimit: estimatedGas,
  gasPrice: ethers.utils.parseUnits("50", "gwei"),
});
```

## Conclusión

Al interactuar con contratos habilitados para Rev+:

- **Ajusta las estimaciones de gas en Foundry usando el flag `--gas-estimate-multiplier`**.
- **Utiliza el formato de transacción legacy** en Foundry
- **Estima manualmente el gas** y pasa el valor estimado explícitamente al interactuar a través del **frontend** o **Hardhat**
- **Realiza pruebas exhaustivas** bajo diferentes condiciones de ejecución para garantizar la robustez.