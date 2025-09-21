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

#### Testez minutieusement avec plusieurs valeurs de gaz pour garantir la compatibilité et la fiabilité

Parce que la consommation de gaz peut varier en raison des chemins d'exécution à l'exécution et de la logique Rev+, il est essentiel de:

- Démarrez avec un multiplicateur de gaz plus élevé (e.g., 500\)
- Testez des valeurs progressivement plus basses pour déterminer le multiplicateur optimal
- Assurez-vous de la robustesse contre les échecs

## Hardhat

**Hardhat** est un framework largement utilisé pour développer des contrats intelligents EVM. Il prend en charge l'interaction avec les contrats activés pour Rev+ mais nécessite une configuration manuelle pour le gaz.

#### L'estimation manuelle du gaz

Pour les contrats activés pour Rev+,`eth_estimateGas` fournit une estimation fiable du gaz qui prend en compte la logique supplémentaire. Pas besoin de multiplicateur, il suffit de passer la valeur estimée en tant que `gasLimit`.

**Exemple:**

```javascript
const estimatedGas = await contract.estimateGas.myMethod(...args);

await contract.myMethod(...args, {
  gasLimit: estimatedGas,
});
```

## L'intégration frontend avec des contrats activés pour Rev+

Lors de l'intégration de contrats activés pour Rev+ dans des applications frontend (e.g., using **ethers.js**, **wagmi**, or **web3.js**), des pratiques similaires à celles de Hardhat doivent être suivies pour garantir une exécution fiable des transactions.

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