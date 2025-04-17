---
sidebar_label: Registro de un Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

# Registro de validador

---

:::caution
Antes de correr un nodo validador en Core, recomendamos encarecidamente leer él [whitepaper técnico] (https://whitepaper.coredao.org/).
:::

## Configurar un nodo completo en modo validador

Antes de que puedas registrarte como validador, necesitas configurar y ejecutar un nodo completo en modo Validador. Sigue esta [guia](./running-validator.md) para configurar y correr un nodo validador. Tu nodo completo necesita sincronizarse con la red Core, lo que significa que debe descargar los datos de la cadena de bloques y mantenerse actualizado con los bloques más recientes.

### Genera la "Llave de consenso"

Al inicializar un nodo validador, necesitas generar una Dirección de Consenso (Dirección Pública) para la llave. Esta dirección será utilizada por tu nodo para las operaciones de consenso.

#### Generando la "Llave de consenso"

Para crear una nueva clave de consenso, usa el siguiente comando. Este comando creará una nueva cuenta y mostrará una dirección que será la dirección de tu validador (dirección de consenso).

```bash
./build/bin/geth account new --datadir ./node
```

##### Notas importantes

- **Asegura tu archivo de keystore y contraseña:** Guarda de manera segura tu archivo de keystore y la contraseña, ya que los necesitarás más adelante.
- **Haz una copia de seguridad de tu clave:** Perder el acceso a esta clave significa perder el control sobre tu nodo validador.

Se te pedirá que ingreses una contraseña. Esta contraseña es esencial para desbloquear tu validador, así que guárdala de manera segura. Puedes guardar tu contraseña en un archivo de texto ejecutando el siguiente comando:

```bash
echo {your-password} > password.txt
```

### Inicia el nodo validador

Una vez que tengas la clave de consenso, puedes iniciar el nodo validador con el siguiente comando:

```bash
./build/bin/geth --config ./testnet2/config.toml --datadir ./node -unlock {your-validator-address} --miner.etherbase {your-validator-address} --password password.txt --mine --allow-insecure-unlock --cache 8000 --networkid 1114
```

Desglosemos las banderas utilizadas en este comando:

- **`config ./config.toml`:** Especifica el archivo de configuración para el nodo. Asegúrate de tener la configuración correcta en `config.toml` para tu entorno.

- **`datadir ./node`:** Indica el directorio de datos para el nodo.

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

### Actualizaciones en el estatus del validador

El estatus del validador se actualiza diariamente a las 00:00 UTC. Puedes checar el estatus de tu validador en el sitio web de staking. Hay varios estatus posibles:

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
