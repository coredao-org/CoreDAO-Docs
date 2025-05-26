---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Staking Autocustodiado de Bitcoin (Timelocking) en Satoshi Plus

---

## Visión general

El Staking de Bitcoin (o Bitcoin Timelocking) permite a los poseedores de Bitcoin participar en el consenso de Core bloqueando temporalmente sus Bitcoins mediante la función nativa de CheckLockTimeVerify (CLTV), sin ceder la custodia ni exponer sus activos al riesgo de contratos inteligentes.

El Staking de Bitcoin transforma el Bitcoin de un activo estático a uno productivo que genera rendimiento, sin comprometer sus propiedades de seguridad. By including validator selection metadata in timelock transactions, Bitcoin holders can participate in the Core validator election in order to earn CORE token rewards.

## How Bitcoin Staking Works in Satoshi Plus

Bitcoin's native protocol includes a CLTV function that allows users to make Bitcoin unspendable for a specified period. Core leverages this mechanism to enable Bitcoin holders to participate in consensus while maintaining complete control of their assets.

1. **Creating Timelocks:** Bitcoin holders use the CLTV function to timelock their Bitcoin on the Bitcoin blockchain for a chosen period (minimum 24 hours), making those coins temporarily unspendable.

2. **Including Metadata:** During timelock creation, holders include metadata specifying their chosen Core validator and a Core address to receive CORE rewards.

3. **Validator Support:** The amount of Bitcoin timelocked in support of a validator influences their position in Core's validator election, impacting their chances of being selected to produce blocks.

4. **Relayer Monitoring:** Core's relayer network monitors the Bitcoin blockchain for timelock transactions that include valid consensus metadata.

5. **Reward Distribution:** Elected validators secure the Core blockchain by producing blocks and validating transactions. Based on validator reliability and the amount of timelocked Bitcoin delegated in their support, the Core protocol distributes CORE token rewards to the specified Core addresses of Bitcoin stakers.

6. **Timelock Expiration:** When the timelock period ends, the Bitcoin becomes spendable again, and participation in Core consensus ceases. Any earned CORE rewards remain in the holder's Core address, but no additional rewards will be earned unless a new timelock is created.

## Importance of Bitcoin Staking in Satoshi Plus

- **Bitcoin Activation:** Transforms Bitcoin from a static asset into a productive one that generates yield without compromising security or requiring conversion.

- **Security Contribution:** Leverages Bitcoin's immense value to strengthen Core's security model without requiring Bitcoin to leave its native blockchain.

- **Custody Preservation:** Enables Bitcoin holders to participate in Core's consensus while maintaining complete self-custody of their assets.

#### **Conclusion**

Bitcoin Staking enables Bitcoin holders to earn yield by contributing to Core's security while maintaining complete custody of their assets. As an integral component of Satoshi Plus consensus, it works in concert with DPoW and DPoS to create a robust, multi-layered security framework. This mechanism aligns incentives between Bitcoin holders and the Core network, transforming Bitcoin from a static store of value into a productive asset without requiring it to leave its native blockchain.