---
sidebar_label: Registro de un Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---



# Registro de validador

---

:::caution
Before running a Validator node on Core, we strongly recommend reading the [Technical Whitepaper](https://whitepaper.coredao.org/).
:::

## Configurar un nodo completo en modo validador

Antes de poder registrarte como validador, necesitas configurar y ejecutar un nodo completo en modo validador siguiendo la guía indicada [aquí](./setting-up-validator.md).

Asegúrate de que tu nodo validador esté en funcionamiento.

## Registra tu validador

Una vez que tu nodo esté en funcionamiento y sincronizado, puedes proceder con el proceso de registro.

1. **Navigate to Staking Website:** The easiest way to register a new validator is to use Core's official staking websites:

    - [Core Mainnet Staking website](https://stake.coredao.org/become-validator)
    - [Core Testnet Staking website](https://stake.test2.btcs.network/become-validator)

2. **Conecta tu billetera:** En el sitio web de staking, haz clic en **Connect Wallet** en la esquina superior derecha y conecta tu billetera (como MetaMask, Ledger, etc) que contiene los tokens necesarios de CORE.

3. **Completa el formulario de registro del validador**

Una vez que tu billetera esté conectada, aparecerá el botón **Register**. Al hacer clic en este botón, se abrirá un formulario donde deberás proporcionar varios datos:

![validator-register-form](../../../static/img/validator/validator-regitration.png)

Proporcione información para cada uno de los campos del formulario:

- **Consensus Address**: la dirección del validador que configuraste cuando inicializaste tu nodo validador.
- **Fee Address**: la dirección usada para recolectar las tarifas por comisión.
- **Commission**: Revenue is split between the validator and its delegators, with the commission determining the percentage of delegator revenue allocated to the validator as compensation.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. El depósito mínimo para testnet y mainnet es **10,000 CORE**.

5. **Enviar Registro:** Una vez que hayas completado toda la información requerida, haz clic en **Register** para enviar tu validador para su registro.

## Confirmar registro

Después de enviar tu formulario de registro, puedes verificar si el registro fue exitoso.

### Revisando los registros

Abre el log file de tu nodo y busca el mensaje de error `unauthorized validator`. Si aparece este mensaje, significa que tu nodo está registrado pero aún no ha sido elegido para formar parte del conjunto de validadores.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-2.avif)

## Elección del validador

Each day, the top **27** validators with the highest hybrid scores are elected to the active validator set, thereby becoming responsible for producing blocks and validating transactions on the Core network for the entire round. When the last block of a round is mined, the round’s accumulated rewards are distributed, and the next round's validator set is selected. Para obtener más detalles sobre cómo funciona la elección del validador, consulte la sección [elección del validador](./validator-election.md).

You can check the validator status on the stake website; active elected validators will be marked as `Active/Normal`. El conjunto de validadores se actualiza a las **00:00 am UTC** todos los días.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Actualizaciones en el estatus del validador

El estatus del validador se actualiza diariamente a las 00:00 UTC. Puedes checar el estatus de tu validador en el sitio web de staking. Hay varios estatus posibles:

- **`Active/Normal`:** El validador es elegido para el ciclo actual y calificado para la próxima elección.

- **`Active/Refuse`:** El validador ha sido elegido para el ciclo actual, pero ha rechazado aceptar delegaciones. No calificado para las próximas elecciones.

- **`Active/Jailed`:** Elected validator in the current round, but jailed due to a felony and not qualified for the next election.

- **`Inactive/Queued`:** El validador está registrado pero no ha sido elegido. Calificado para las próximas elecciones.

- **`Inactive/Refuse`:** El validador está registrado pero ha rechazado delegaciones. No calificado para las próximas elecciones.

- **`Inactive/Jailed`:** El validador está registrado pero está encarcelado y no está calificado para la próxima elección.

- **`Inactive/Locked`:** El validador está registrado pero no ha cumplido con los requisitos de depósito mínimo. No calificado para las próximas elecciones.

- **`Inactive/Invalid`:** El validador no está registrado.

## Monitorea el desempeño de tu validador

Puedes monitorear el estado de tu validador y su historial de producción de bloques en [Core Scan](https://scan.coredao.org/). Esta herramienta te permite rastrear si tu nodo está produciendo bloques exitosamente y funcionando correctamente.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-4.webp)

## Establecer el Nombre del Validador

Puedes asignar un nombre legible para humanos a tu nodo validador utilizando la UI de Staking de Core. Este nombre sirve como una etiqueta para que los delegadores y participantes de la red identifiquen tu validador en la interfaz.

### Pasos para Establecer o Actualizar el Nombre de tu Validador

1. **Accede al Sitio Web de Staking:** navega al [panel de control de validadores](https://stake.coredao.org/validators).
2. **Ubica tu Validador:** identifica tu entrada en la lista de validadores. Por defecto, los validadores se muestran según su `Fee Address`.
3. **Abre los Detalles del Validador:** haz clic en tu validador para abrir la página de Detalles del Validador.
4. **Accede al Menú de Actualización:** en la página de Detalles del Validador, haz clic en el botón de menú (tres puntos verticales) junto al botón de Stake y selecciona "Update Name" en el menú desplegable.

<p align="center"></p>

4. **Ingresa los Detalles del Validador:** proporciona el nombre y otros detalles en el formulario. Este nombre será visible públicamente para los delegadores y usuarios de la interfaz de red.

<p align="center"></p>

5. **Firma el Mensaje de Propiedad del Validador:** haz clic en Sign para verificar la propiedad de tu dirección de validador firmando el mensaje mostrado.

<p align="center"></p>

6. **Envía la Actualización:** después de verificar la información ingresada, envía la transacción para finalizar la actualización. Una vez que la transacción se confirme en la cadena, el nuevo nombre aparecerá reflejado en la lista de validadores.

## Manteniendo tu nodo validador

Para seguir siendo un validador activo y exitoso, necesitarás mantener tu nodo en línea, realizar mantenimiento de manera regular y responder rápidamente a cualquier problema que surja.

#### Mantente sincronizado

Asegúrate de que tu nodo esté siempre sincronizado con la red de Core para evitar problemas en la producción y validación de bloques.

#### Manejar las recompensas

Al final de cada ronda, las recompensas acumuladas se distribuyen a los validadores. Debes realizar un seguimiento de estas recompensas y monitorear posibles problemas en el rendimiento de tu validador.