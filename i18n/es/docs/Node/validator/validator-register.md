---
sidebar_label: Registro de un Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Registro de validador

---

:::caution
Antes de correr un nodo validador en Core, recomendamos encarecidamente leer él [whitepaper técnico] (https://whitepaper.coredao.org/).
:::

## Configurar un nodo completo en modo validador

Before you can register as a validator, you need to set up and run a full node in validator mode following the guide [here](./setting-up-validator.md).

Make sure your validator node is up and running.

## Registra tu validador

Una vez que tu nodo esté en funcionamiento y sincronizado, puedes proceder con el proceso de registro.

1. **Navega al sitio web de Staking:** La forma más fácil de registrar un nuevo validador es utilizando los sitios web oficiales de staking de Core:

    - [Core Mainnet Staking website](https://stake.coredao.org/become-validator)
    - [Core Testnet Staking website](https://stake.test.btcs.network/become-validator)
    - [Core Testnet2 Staking website](https://stake.test2.btcs.network/become-validator)

2. **Conecta tu billetera:** En el sitio web de staking, haz clic en **Connect Wallet** en la esquina superior derecha y conecta tu billetera (como MetaMask, Ledger, etc) que contiene los tokens necesarios de CORE.

3. **Completa el formulario de registro del validador**

Una vez que tu billetera esté conectada, aparecerá el botón **Register**. Al hacer clic en este botón, se abrirá un formulario donde deberás proporcionar varios datos:

![validator-register-form](../../../static/img/validator/validator-regitration.png)

Proporcione información para cada uno de los campos del formulario:

- **Consensus Address**: la dirección del validador que configuraste cuando inicializaste tu nodo validador.
- **Fee Address**: la dirección usada para recolectar las tarifas por comisión.
- **Comisión**: los ingresos se dividen entre el validador y sus delegados, y la comisión determina qué porcentaje de los ingresos del delegador toma el validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. El depósito mínimo para testnet y mainnet es **10,000 CORE**.

5. **Enviar Registro:** Una vez que hayas completado toda la información requerida, haz clic en **Register** para enviar tu validador para su registro.

## Confirmar registro

Después de enviar tu formulario de registro, puedes verificar si el registro fue exitoso.

### Revisando los registros

Open your node’s log file and search for the error message `unauthorized validator`. Si aparece este mensaje, significa que tu nodo está registrado pero aún no ha sido elegido para formar parte del conjunto de validadores.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-2.avif)

## Elección del validador

Cada día, los **27** validadores con los puntajes híbridos más altos son elegidos para formar parte del conjunto de validadores activos, siendo responsables de producir bloques y validar transacciones en la red Core durante todo el ciclo. Cuando se extrae el último bloque de una ronda, las recompensas acumuladas de la ronda se distribuyen y se selecciona el conjunto de validadores de la siguiente ronda. Para obtener más detalles sobre cómo funciona la elección del validador, consulte la sección [elección del validador](./validator-election.md).

Puede verificar el estado del validador en el sitio web de la apuesta; los validadores elegidos activos se marcarán como "Activo/Normal". El conjunto de validadores se actualiza a las **00:00 am UTC** todos los días.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Actualizaciones en el estatus del validador

El estatus del validador se actualiza diariamente a las 00:00 UTC. Puedes checar el estatus de tu validador en el sitio web de staking. Hay varios estatus posibles:

- **`Active/Normal`:** El validador es elegido para el ciclo actual y calificado para la próxima elección.

- **`Active/Refuse`:** El validador ha sido elegido para el ciclo actual, pero ha rechazado aceptar delegaciones. No calificado para las próximas elecciones.

- **`Active/Jailed`:** El validador fue elegido para el ciclo actual, pero fue encarcelado debido a un delito. No calificado para las próximas elecciones.

- **`Inactive/Queued`:** El validador está registrado pero no ha sido elegido. Calificado para las próximas elecciones.

- **`Inactive/Refuse`:** El validador está registrado pero ha rechazado delegaciones. No calificado para las próximas elecciones.

- **`Inactive/Jailed`:** El validador está registrado pero está encarcelado y no está calificado para la próxima elección.

- **`Inactive/Locked`:** El validador está registrado pero no ha cumplido con los requisitos de depósito mínimo. No calificado para las próximas elecciones.

- **`Inactive/Invalid`:** El validador no está registrado.

## Monitorea el desempeño de tu validador

Puedes monitorear el estado de tu validador y su historial de producción de bloques en [Core Scan](https://scan.coredao.org/). Esta herramienta te permite rastrear si tu nodo está produciendo bloques exitosamente y funcionando correctamente.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-4.webp)

## Setting Validator Name

You may assign a human-readable name to your validator node using the Core Staking UI. This name serves as a label for delegators and network participants to identify your validator in the interface.

### Steps to Set or Update Your Validator Name

1. **Access the Staking Website:** navigate to the [validator dashboard](https://stake.coredao.org/validators).
2. **Locate Your Validator:** Identify your validator entry within the list. By default, validators are listed by their associated `Fee Address`.
3. **Open Validator Details:** Click on your validator to open the Validator Details page.
4. **Access the Update Menu:** On the Validator Details page, click the menu button (three vertical dots) next to the Stake button and select "Update Name" from the dropdown.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-1.png)
</p>

4. **Enter Validator Details:** Provide the name and other details in the input form. This name will be publicly visible to delegators and users of the network interface.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-2.png)
</p>

5. **Sign Validator Ownership Message:** Click Sign to verify ownership of your validator address by signing the displayed message.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-3.png)
</p>

6. **Submit the Update:** After verifying the entered information, submit the transaction to finalize the update. Once the transaction is confirmed on-chain, the updated name will be reflected in the validator list.

## Manteniendo tu nodo validador

Para seguir siendo un validador activo y exitoso, necesitarás mantener tu nodo en línea, realizar mantenimiento de manera regular y responder rápidamente a cualquier problema que surja.

#### Mantente sincronizado

Asegúrate de que tu nodo esté siempre sincronizado con la red de Core para evitar problemas en la producción y validación de bloques.

#### Manejar las recompensas

Al final de cada ronda, las recompensas acumuladas se distribuyen a los validadores. Debes realizar un seguimiento de estas recompensas y monitorear posibles problemas en el rendimiento de tu validador.
