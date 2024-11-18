---
sidebar_label: Registro de validador
hide_table_of_contents: false
sidebar_position: 2
---

# Registro de validador

---

:::caution
Antes de convertirse en validador de Core, recomendamos encarecidamente leer el [documento técnico] (https://whitepaper.coredao.org/).
:::

## Registro

1. Para registrarse como validador en Core, debe ejecutar un nodo completo en modo validador. Lea las guías sobre [configurar nodos de validación] (../config/validator-node-config.md) y [ejecutar nodos de validación] (./running-validator.md) para obtener información sobre cómo configurar esto.

2. Una vez terminado, la forma más sencilla de registrar un nuevo validador es utilizando uno de nuestros sitios web de apuestas:

   - [Sitio web de participación de Mainnet] (https://stake.coredao.org)
   - [Sitio web de participación de Testnet](https://stake.test.btcs.network)

3. Conecte su billetera seleccionando **Conectar billetera** en la parte superior derecha.

4. Una vez conectado, el botón **registrarse** debería aparecer en la parte superior derecha. Al seleccionar **registrarse** se abre el siguiente formulario de entrada:

![formulario-registro-validador](../../../static/img/validator/register/validator-register-1.avif)

Proporcione información para cada uno de los campos del formulario:

- **Dirección de consenso**: la dirección del validador que configuró cuando inicializó su nodo completo del validador.
- **Dirección de comisión**: la dirección utilizada para cobrar las comisiones.
- **Comisión**: los ingresos se dividen entre el validador y sus delegados, y la comisión determina qué porcentaje de los ingresos del delegador toma el validador como compensación.
- **Depósito total**: el depósito CORE reembolsable bloqueado mientras se realizan servicios de validación. En testnet, la cantidad mínima es 10,000 CORE.

5. Una vez que haya ingresado la información requerida, seleccione **registrarse** para registrarse como validador.

## Confirmar registro

Una forma rápida de comprobar que ha registrado correctamente su nodo completo como validador es abrir el archivo de registro y buscar el mensaje de error "validador no autorizado". Este error ocurre cuando este nodo está registrado como validador pero aún no ha sido elegido para el conjunto de validadores.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-2.avif)

## Elección del validador

Cada día, los 23 validadores principales con las puntuaciones híbridas más altas son elegidos para el conjunto de validadores, convirtiéndose así en responsables de producir bloques en la red Core durante toda la ronda. Cuando se extrae el último bloque de una ronda, las recompensas acumuladas de la ronda se distribuyen y se selecciona el conjunto de validadores de la siguiente ronda. Para obtener más detalles sobre cómo funciona la elección del validador, consulte la sección [elección del validador](https://whitepaper.coredao.org/core-white-paper-v1.0.7/satoshi-plus-consensus/validator-election) de el documento técnico.

Puede verificar el estado del validador en el sitio web de la apuesta; los validadores elegidos activos se marcarán como "Activo/Normal". El conjunto de validadores se actualiza a las 00:00 a. m. UTC todos los días.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-3.avif)

A los validadores se les asigna un estado según sus acciones durante y antes de la ronda actual:

<table><thead><tr><th width="208">Estado del validador</th><th>Descripción</th></tr></thead><tbody><tr><td>Activo / Normal</td><td>Validador electo en la ronda actual. Calificado para las próximas elecciones.</td></tr><tr><td>Activo / Rechazar</td><td>Registrado, pero se negó a aceptar la delegación. No calificado para las próximas elecciones.</td></tr><tr><td>Activo / Encarcelado</td><td>Elegido validador en la actual ronda, pero encarcelado por un delito grave. No calificado para las próximas elecciones.</td></tr><tr><td>Inactivo / En cola</td><td>Registrado, pero no elegido. Calificado para las próximas elecciones.</td></tr><tr><td>Inactivo / rechazar</td><td>Registrado, pero no hay suficiente depósito. No calificado para las próximas elecciones.</td></tr><tr><td>Inactivo / Encarcelado</td><td>Registrado, en la cárcel. No calificado para las próximas elecciones.</td></tr><tr><td>Inactivo / Bloqueado</td><td>Registered, But not enough deposit. Not qualified for the next election.</td></tr><tr><td>Inactivo / Inválido</td><td>No registrado.</td></tr></tbody></table>

Puede buscar la dirección de consenso de un validador en [Core Scan](https://scan.coredao.org/) para ver su registro de producción de bloques.

![formulario-registro-validador](../../../static/img/validator/register/validator-register-4.webp)
