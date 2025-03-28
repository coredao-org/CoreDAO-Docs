---
sidebar_label: Register Validator Node
hide_table_of_contents: false
sidebar_position: 2
---

# Registro de validador

---

:::caution
Before running a Validator Node on Core, we strongly recommend reading the [Technical Whitepaper](https://whitepaper.coredao.org/).
:::

## Set Up a Full Node in Validator Mode

Before you can register as a Validator, you need to set up and run a full node in Validator mode. Follow this [guide](./running-validator.md) to setup and run Validator Node. Your full node needs to sync with the Core network, meaning it must download the blockchain data and stay updated with the latest blocks.

### Generate the Consensus Key

When initializing a validator node, you need to generate a Consensus Address (Public Address) for the key. This address will be used by your node for consensus operations.

#### Generating a New Consensus Key

To create a new consensus key, use the following command. This command will create a new account and output an address which will be your validator's address (consensus address).

```bash
./build/bin/geth account new --datadir ./node
```

##### Important Notes

- **Secure Your Keystore & Password:** Store your keystore file and password safely, as you’ll need them later.
- **Backup Your Key:** Losing access to this key means losing control over your validator node.

You'll be prompted to enter a password. This password is essential for unlocking your validator, so store it securely. You can save your password in a text file by running the following command:

```bash
echo {your-password} > password.txt
```

### Start the Validator Node

Once you have the consensus key, you can start the validator node with the following command:

```bash
./build/bin/geth --config ./testnet2/config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt --mine --allow-insecure-unlock --cache 8000 --networkid 1114
```

Let’s break down the flags used in this command:

- **`config ./config.toml`:** Specifies the configuration file for the node. Make sure you have the correct settings in `config.toml` for your environment.

- **`datadir ./node`:** Indicates the data directory for the node.

- **`unlock {your-validator-address}`:** Unlocks the validator account using the address generated in the previous step.

- **`miner.etherbase {your-validator-address}`:** Specifies the address to receive rewards and block rewards. Typically, this would be your validator's address.

- **`password password.txt`:** The password to unlock your validator account (ensure this file is kept secure).

- **`mine`:** Starts the mining process (block validation).

- **`allow-insecure-unlock`:** Allows the unlock process without additional security measures (use cautiously).

- **`cache 8000`:** Allocates a large cache (8GB in this case) to improve performance.

## Register Your Validator

Once your node is running and synced, you can proceed with the registration process.

1. **Navigate to Staking Website:** The easiest way to register a new validator is using Core's official staking websites:

    - [Core Mainnet Staking website](https://stake.coredao.org/become-validator)
    - [Core Testnet Staking website](https://stake.test.btcs.network/become-validator)
    - [Core Testnet2 Staking website](https://stake.test2.btcs.network/become-validator)

2. **Connect Your Wallet:** On the staking website, click **Connect Wallet** in the top right corner and connect your wallet (such as MetaMask, Ledger, etc.) that holds the necessary CORE tokens.

3. **Fill Out the Validator Registration Form**

Once your wallet is connected, the **Register** button will appear. Clicking this button will open a form where you’ll need to provide several pieces of information:

![validator-register-form](../../../static/img/validator/validator-regitration.png)

Proporcione información para cada uno de los campos del formulario:

- **Consensus Address**: the validator address you set when you initialized your validator node.
- **Fee Address**: the address used to collect commission fees.
- **Comisión**: los ingresos se dividen entre el validador y sus delegados, y la comisión determina qué porcentaje de los ingresos del delegador toma el validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. The minimum deposit for testnet and mainnet is **10,000 CORE**.

5. **Submit Registration:** Once you’ve filled out all the required information, click **Register** to submit your validator for registration.

## Confirmar registro

After submitting your registration form, you can check whether the registration was successful.

### Checking the Logs

Open your node’s log file and search for the error message "unauthorized validator." If this message appears, it means that your node is registered but has not yet been elected to the validator set.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-2.avif)

## Elección del validador

Each day, the top **27** validators with the highest hybrid scores are elected to the active validator set, thereby becoming responsible for producing blocks and validating transactions on the Core network for the entirety of the round. Cuando se extrae el último bloque de una ronda, las recompensas acumuladas de la ronda se distribuyen y se selecciona el conjunto de validadores de la siguiente ronda. Para obtener más detalles sobre cómo funciona la elección del validador, consulte la sección [elección del validador](./validator-election.md).

Puede verificar el estado del validador en el sitio web de la apuesta; los validadores elegidos activos se marcarán como "Activo/Normal". El conjunto de validadores se actualiza a las **00:00 am UTC** todos los días.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Validator Status Updates

Validator status is updated daily at 00:00 UTC. You can check the status of your validator on the staking website. There are various possible statuses:

- **`Active/Normal`:** Validator is elected for the current round and qualified for the next election.

- **`Active/Refuse`:** Validator is elected for the current round but refused to accept delegations. No calificado para las próximas elecciones.

- **`Active/Jailed`:** Elected validator in the current round, but jailed due to a felony. No calificado para las próximas elecciones.

- **`Inactive/Queued`:** Validator is registered but not elected. Calificado para las próximas elecciones.

- **`Inactive/Refuse`:** Validator is registered but has refused delegation. No calificado para las próximas elecciones.

- **`Inactive/Jailed`:** Validator is registered but is jailed and not qualified for the next election.

- **`Inactive/Locked`:** Validator is registered but has not met the minimum deposit requirements. No calificado para las próximas elecciones.

- **`Inactive/Invalid`:** Validator is unregistered.

## Monitor Your Validator's Performance

You can monitor the status of your validator and its block production record on [Core Scan](https://scan.coredao.org/). This tool allows you to track whether your node is successfully producing blocks and performing well.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-4.webp)

## Maintaining Your Validator Node

To remain an active and successful validator, you’ll need to keep your node online, perform maintenance, and respond to any issues that arise.

#### Stay Synced

Ensure that your node is always in sync with the Core network to prevent issues with block production and validation.

#### Handle Rewards

At the end of each round, accumulated rewards are distributed to validators. You should track these rewards and monitor any potential issues with your validator's performance.
