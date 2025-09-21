---
sidebar_label: Guide de compatibilité Rev+
description: Guide de compatibilité pour Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Contrats activés par Rev+ : Guide de compatibilité

---

Ce guide décrit les meilleures pratiques et les étapes de configuration pour assurer la compatibilité entre les frameworks de développement Ethereum populaires, notamment Foundry et Hardhat, ainsi que les bibliothèques frontend comme **`ethers.js`**, lors de l'interaction avec les contrats activés par Rev+.

## Foundry

**Foundry** est une boîte à outils haute performance pour le développement EVM, dotée d'outils tels que Forge pour la création de scripts et le test de contrats intelligents. Lorsque vous travaillez avec des contrats activés par Rev+, la consommation de gaz peut être légèrement plus élevée en raison de l'inclusion de la logique d'allocation de revenus pour les participants Rev+.

#### Ajustez les estimations de gaz avec `--gas-estimate-multiplier`

Rev+ introduit une surcharge de gaz supplémentaire non gérée automatiquement par la logique d'estimation de gaz par défaut de Foundry.

- Utilisez l'indicateur `--gas-estimate-multiplier` pour augmenter le gaz estimé.
- **Plage recommandée**: `200–500`, selon la complexité du contrat et la nature de l'intégration Rev+.
- Utilisez l'indicateur `--legacy` avec Foundry pour une meilleure compatibilité.

**Exemple:**

```shell
forge script script/MyScript.s.sol --rpc-url <URL> --gas-estimate-multiplier 500 --broadcast --legacy
```

#### Thoroughly Test with Multiple Gas Values

Because gas usage can vary due to runtime execution paths and Rev+ logic, it’s essential to:

- Start with a higher gas multiplier (e.g., 500\)
- Test progressively lower values to determine the optimal multiplier
- Ensure robustness against out-of-gas failures

## Hardhat

**Hardhat** is a widely used framework for developing EVM-based smart contracts. It supports interaction with Rev+ enabled contracts but requires manual configuration for gas.

#### Manual Gas Estimation

For Rev+ enabled contracts, `eth_estimateGas` provides a reliable gas estimate that includes the additional logic. No multiplier is required; just pass the estimated value as `gasLimit`.

**Example:**

```javascript
const estimatedGas = await contract.estimateGas.myMethod(...args);

await contract.myMethod(...args, {
  gasLimit: estimatedGas,
});
```

## Frontend Integration with Rev+ Enabled Contracts

When integrating Rev+ enabled contracts into frontend applications (e.g., using **ethers.js**, **wagmi**, or **web3.js**), similar practices to those of Hardhat must be followed to ensure reliable transaction execution.

### Best Practices

- **Gas Estimation**: Use the  `.estimateGas.method()` to estimate gas usage.
- **No Multiplier Needed**: Use the estimated value directly.
- **Error Handling**: Implement fallbacks for `out-of-gas errors` to enhance the user experience.

**Example (ethers.js):**

```javascript
const estimatedGas = await contract.estimateGas.myMethod(...args);

const tx = await contract.myMethod(...args, {
  gasLimit: estimatedGas,
  gasPrice: ethers.utils.parseUnits("50", "gwei"),
});
```

## Conclusion

When interacting with Rev+ enabled contracts:

- **Adjust gas estimates in Foundry using the `--gas-estimate-multiplier`** flag.
- **Use legacy transaction formatting** in Foundry
- **Manually estimate the gas** and pass the estimated value explicitly when interacting through the **frontend** or **Hardhat**
- **Test extensively** under different runtime conditions to ensure robustness.