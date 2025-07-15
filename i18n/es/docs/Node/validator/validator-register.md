---
sidebar_label: Registrar Nodo Validador
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Registro de Validador

---

:::caution
Antes de ejecutar un nodo validador en Core, se recomienda encarecidamente leer el [Whitepaper Técnico](https://whitepaper.coredao.org/).
:::

## Configurar un Nodo Full en Modo Validador

Antes de poder registrarte como validador, debes configurar y ejecutar un nodo full en modo validador siguiendo la guía indicada [aquí](./setting-up-validator.md).

Asegúrate de que tu nodo validador esté activo y sincronizado.

## Registrar tu Validador

Una vez que tu nodo esté en ejecución y sincronizado, puedes proceder con el proceso de registro.

1. **Ir al Sitio Web de Staking:** La forma más sencilla de registrar un nuevo validador es utilizar los sitios oficiales de staking de Core:

    - [Sitio de Staking de Core Mainnet](https://stake.coredao.org/become-validator)
    - [Sitio de Staking de Core Testnet](https://stake.test2.btcs.network/become-validator)

2. **Conectar tu Wallet:** En el sitio web de staking, haz clic en **Connect Wallet** en la esquina superior derecha y conecta tu wallet (como MetaMask, Ledger, etc.) que contenga los tokens CORE necesarios.

3. **Completar el Formulario de Registro de Validador**

Una vez que tu wallet esté conectada, aparecerá el botón **Register**. Al hacer clic en este botón, se abrirá un formulario en el que deberás proporcionar varios datos:

![validator-register-form](../../../static/img/validator/validator-regitration.png)

Proporcione información para cada uno de los campos del formulario:

- **Dirección de Consenso**: la dirección del validador que configuraste al inicializar tu nodo validador.
- **Dirección de comisión**: la dirección utilizada para cobrar las comisiones.
- **Comisión**: Los ingresos se dividen entre el validador y sus delegadores. La comisión determina el porcentaje de los ingresos de los delegadores que se asigna al validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. El depósito mínimo para testnet y mainnet es de **10,000 CORE**.

5. **Enviar registro:** Una vez que hayas completado toda la información requerida, haz clic en **Register** para enviar tu validador para su registro.

## Confirmar registro

Después de enviar tu formulario de registro, puedes verificar si el registro fue exitoso.

### Revisión de los registros

Abre el archivo de registro de tu nodo y busca el mensaje de error "unauthorized validator". Si este mensaje aparece, significa que tu nodo está registrado pero aún no ha sido elegido para el conjunto de validadores.

![validator-register-form](../../../static/img/validator/register/validator-register-2.avif)

## Elección del Validador

Cada día, los **27** validadores con los puntajes híbridos más altos son elegidos para formar parte del conjunto de validadores activos, siendo responsables de producir bloques y validar transacciones en la red Core durante todo el ciclo. Cuando se extrae el último bloque de una ronda, las recompensas acumuladas de la ronda se distribuyen y se selecciona el conjunto de validadores de la siguiente ronda. Para más detalles sobre cómo funciona la elección de validadores, consulta la sección de [elección de validadores](./validator-election.md).

Puede verificar el estado del validador en el sitio web de la apuesta; los validadores elegidos activos se marcarán como "Active/Normal". El conjunto de validadores se actualiza a las **00:00 am UTC** todos los días.

![validator-register-form](../../../static/img/validator/validator-status.png)

### Actualización del Estado del Validador

El estado del validador se actualiza diariamente a las 00:00 UTC. Puedes verificar el estado de tu validador en el sitio web de staking. Existen varios posibles estados:

- **`Active/Normal`:** El validador ha sido elegido para la ronda actual y está calificado para la próxima elección.

- **`Active/Refuse`:** El validador ha sido elegido para la ronda actual pero rechazó aceptar delegaciones. No califica para la próxima elección.

- **`Active/Jailed`:** El validador fue elegido en la ronda actual, pero fue jailed debido a una infracción grave y no califica para la próxima elección.

- **`Inactive/Queued`:** El validador está registrado pero no fue elegido. Califica para la próxima elección.

- **`Inactive/Refuse`:** El validador está registrado pero ha rechazado delegaciones. No califica para la próxima elección.

- **`Inactive/Jailed`:** El validador está registrado pero ha sido jailed y no califica para la próxima elección.

- **`Inactive/Locked`:** El validador está registrado pero no ha cumplido con los requisitos mínimos de depósito. No califica para la próxima elección.

- **`Inactive/Invalid`:** El validador está no registrado.

## Monitorea el Rendimiento de tu Validador

Puedes monitorear el estado de tu validador y su historial de producción de bloques en [Core Scan](https://scan.coredao.org/). Esta herramienta te permite verificar si tu nodo está produciendo bloques correctamente y funcionando de manera óptima.

![validator-register-form](../../../static/img/validator/register/validator-register-4.webp)

## Asignar Nombre al Validador

Puedes asignar un nombre legible para humanos a tu nodo validador mediante la interfaz de Core Staking. Este nombre sirve como etiqueta para que delegadores y participantes de la red identifiquen tu validador en la interfaz.

### Pasos para Establecer o Actualizar el Nombre de tu Validador

1. **Accede al Sitio de Staking:** navega al [panel de control de validadores](https://stake.coredao.org/validators).
2. **Ubica tu Validador:** identifica tu entrada en la lista de validadores. Por defecto, los validadores están listados por su `Fee Address`.
3. **Abre los Detalles del Validador:** haz clic sobre tu validador para abrir la página de detalles.
4. **Accede al Menú de Actualización:** en la página de detalles del validador, haz clic en el botón de menú (tres puntos verticales) junto al botón Stake, y selecciona "Update Name" en el menú desplegable.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-1.png)
</p>

4. **Ingresa los Detalles del Validador:** Proporciona el nombre y otros datos en el formulario. Este nombre será visible públicamente para los delegadores y los usuarios de la interfaz de la red.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-2.png)
</p>

5. **Firmar el Mensaje de Propiedad del Validador:** Haz clic en Firmar para verificar la propiedad de tu dirección de validador firmando el mensaje que se muestra.

<p align="center">
![validator-rename-menu](../../../static/img/validator/register/validator-rename-3.png)
</p>

6. **Enviar la Actualización:** Después de verificar la información ingresada, envía la transacción para finalizar la actualización. Una vez que la transacción sea confirmada en la cadena, el nombre actualizado se reflejará en la lista de validadores.

## Mantenimiento de tu Nodo Validador

Para seguir siendo un validador activo y exitoso, deberás mantener tu nodo en línea, realizar tareas de mantenimiento y responder ante cualquier problema que surja.

#### Mantente Sincronizado

Asegúrate de que tu nodo siempre esté sincronizado con la red Core para evitar problemas con la producción y validación de bloques.

#### Gestiona las Recompensas

Al final de cada ronda, las recompensas acumuladas se distribuyen a los validadores. Debes hacer un seguimiento de estas recompensas y monitorear cualquier posible problema con el rendimiento de tu validador.