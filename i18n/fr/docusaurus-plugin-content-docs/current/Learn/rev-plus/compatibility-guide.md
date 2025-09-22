---
sidebar_label: Rev+ Compatibility Guide
description: Compatibility Guide for Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Rev+ Enabled Contracts: Compatibility Guide

---

This guide outlines best practices and configuration steps to ensure compatibility between popular Ethereum development frameworks, including Foundry and Hardhat, as well as frontend libraries like **`ethers.js`**, when interacting with Rev+ enabled contracts.

## Foundry

**Foundry** is a high-performance toolkit for EVM development, featuring tools such as Forge for scripting and testing smart contracts. When working with Rev+ enabled contracts, gas usage may be slightly higher because the contract includes revenue allocation logic for Rev+ participants.

#### Adjust Gas Estimates with `--gas-estimate-multiplier`

Rev+ introduces additional gas overhead not automatically handled by Foundry’s default gas estimation logic.

- Use the `--gas-estimate-multiplier` flag to increase the estimated gas.
- **Recommended Range**: `200–500`, depending on the complexity of the contract and the nature of the Rev+ integration.
- Use the `--legacy` flag with Foundry for better compatibility.

**Example:**

```shell
forge script script/MyScript.s.sol --rpc-url <URL> --gas-estimate-multiplier 500 --broadcast --legacy
```

#### Thoroughly Test with Multiple Gas Values

Because gas usage can vary due to runtime execution paths and Rev+ logic, it’s essential to:

- Start with a higher gas multiplier (e.g., 500)
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