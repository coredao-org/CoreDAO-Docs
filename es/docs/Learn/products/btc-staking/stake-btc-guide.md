---
sidebar_label: Apostar Bitcoin Core
hide_table_of_contents: false
sidebar_position: 2
---

# Apuesta de Bitcoin sin custodia

Esta guía técnica está diseñada para guiarlo a través del proceso de apostar su Bitcoin en la cadena de bloques Core para ganar recompensas en tokens CORE. Con la participación sin custodia de Bitcoin, puede obtener rendimiento pasivo en CORE mientras conserva la propiedad de sus activos de Bitcoin. Profundicemos en cómo funciona y cómo puedes empezar a apostar hoy.

## Requisitos previos

Se debe cumplir lo siguiente antes para poder completar esta guía:

1. **Xverse y/o Unisat Wallet(s):** Deberá agregar a [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\&authuser =1) y/o billetera(s) [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) a través de la extensión del navegador Chrome, para participar en el proceso de participación. (_Debe utilizar una computadora de escritorio; las billeteras móviles y de hardware no son compatibles en este momento_)

2. **Dirección de Core Wallet para recompensas:** Prepare la dirección de su Core Wallet donde recibirá recompensas de tokens Core por apostar su Bitcoin. Si no tiene una dirección de billetera Core, puede crear una fácilmente conectándose a MetaMask.

**1. Agregar la red Core a MetaMask a través de Core Explorer:**

- Vaya a [coredao.org](http://coredao.org) y desplácese hasta el final de la página

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-1.avif)

- Haga clic en el botón "Agregar Core Network"
- Aprobar en tu MetaMask

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-2.png)

2. Alternativamente, puede usar esta guía: [Agregar Core a MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce) para obtener una guía paso a paso más detallada para completar manualmente la información de la red.

## Antes de comenzar a apostar

Aclaremos el mecanismo de apuesta, para que sepa qué esperar al realizar la apuesta de Bitcoin sin custodia.

1. **Mínimo de 0,01 Bitcoin + tarifa de gasolina**

   - **Por qué es necesario:** Para crear una experiencia de apuesta fluida, debe tener un mínimo de **0,01 Bitcoin** disponible junto con la tarifa de gas necesaria para ejecutar transacciones en la red Bitcoin. Las tarifas del gas cubren el costo de procesar transacciones en blockchain. Además, recomendamos tener al menos **0,05 Bitcoin** si vas a apostar durante menos de **1 mes**. Este colchón tiene en cuenta la posible congestión de la red, donde los precios de las transacciones del gas pueden exceder la recompensa de apuesta obtenida.

2. **Comprensión de las diferencias en las direcciones de apuesta**

   - **Qué está pasando:** Es posible que notes que la dirección de participación proporcionada difiere de tu dirección de Bitcoin original.
   - **Qué significa:** La dirección de participación se deriva de la clave privada maestra de su billetera, lo que mantiene su control y seguridad sobre sus activos. Su Bitcoin permanece almacenado de forma segura en la dirección de apuesta controlada por su clave privada, sin verse afectado por la apuesta. Estamos trabajando activamente con socios de billetera para respaldar esta visualización de sus activos de manera oportuna.
   - Puede ver sus fondos apostados buscando la dirección de depósito en un explorador de Bitcoin. [Mempool.space](https://mempool.space/) es una opción que recomendamos. Estamos trabajando activamente para que los activos apostados sean visibles en la billetera.

3. **Consideraciones para los períodos de bloqueo**

   - **Recordatorio importante:** Una vez que bloquees tu Bitcoin para apostar, será inaccesible hasta que concluya el período de apuesta.
   - **Elegir sabiamente:** Le recomendamos seleccionar cuidadosamente su período de bloqueo, teniendo en cuenta sus objetivos de inversión y tolerancia al riesgo. Comenzar con períodos de bloqueo más cortos puede ayudarle a familiarizarse con el proceso antes de comprometerse con duraciones más largas.

   Estas indicaciones tienen como objetivo brindar claridad y confianza a medida que se embarca en su viaje de Stake de Bitcoin sin custodia. Su comprensión y preparación son clave para una experiencia de apuesta exitosa. Ahora, vamos a guiarlo a través del proceso paso a paso para apostar su Bitcoin en la cadena de bloques Core y obtener recompensas de tokens Core.

## Cómo funciona la apuesta de Bitcoin sin custodia

### Descripción general del proceso de apuesta

La participación sin custodia de Bitcoin introduce un método seguro y descentralizado para que los poseedores de Bitcoin obtengan recompensas. Al bloquear su Bitcoin dentro de la red original a través de un mecanismo de duración determinada, puede participar activamente en el mecanismo de consenso de la cadena de bloques central mientras realiza apuestas. Estos son los pasos involucrados en este proceso.

1. **Iniciar apuesta:** Comience accediendo a la plataforma de apuesta utilizando la [interfaz de línea de comando para usuarios técnicos](https://github.com/coredao-org/btc-smaking-tool) o la interfaz web para usuarios generales [https://stake.coredao.org](https://stake.coredao.org)
2. **Apuesta Bitcoin con bloqueo de tiempo:** Apuesta tu Bitcoin enviando una transacción en la red Bitcoin con un parámetro de bloqueo de tiempo, de modo que tu Bitcoin permanezca bloqueado hasta que finalice el período especificado. El período mínimo de apuesta es de **10 días**.
3. **Vote por los validadores:** Delegue su Bitcoin apostado al validador elegido en la cadena de bloques Core.
4. **Conecte una billetera Core para obtener recompensas:** Verifique su dirección Core en el campo de devolución, donde recibirá recompensas en tokens Core.
5. **Reclamación de recompensas:** Las recompensas de tokens principales aparecerán cuando los usuarios conecten su billetera y se podrán reclamar diariamente. Las recompensas de tokens principales aparecerán en el [sitio de apuestas] (http://stake.coredao.org/).
6. **Canjear Bitcoin:** Una vez que expire el tiempo de bloqueo de la apuesta, el Bitcoin apostado permanecerá inactivo en la dirección de apuesta hasta que el usuario lo canjee.

## Tutorial sobre la apuesta de Bitcoin sin custodia

Para comenzar a apostar su Bitcoin en la cadena de bloques Core y ganar recompensas de apuesta en forma de tokens CORE, siga los pasos que se detallan a continuación para apostar Bitcoin a través del [sitio web de apuesta] oficial de Core (http://stake.coredao.org/).

### Conecte su billetera

Conectar su billetera es el primer paso para acceder a la plataforma de apuestas e iniciar el proceso de apuestas. Esto le permitirá interactuar con la cadena de bloques Core y participar en Stake de Bitcoin sin custodia.

1. Visite [https://stake.coredao.org](https://stake.coredao.org)

2. Una vez en el sitio web, ubique y haga clic en el botón "**Connect Wallet**".

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-3.avif)

3. **Elija una billetera disponible**

   - Si aún no tiene una billetera, consulte **[Core Wallet for Rewards](#prerequisitos)** en la sección de requisitos previos anterior.

4. **Elija un validador para delegar Bitcoin**

Aquí seleccionaremos un validador al que nos gustaría delegar nuestro Bitcoin. En el ejemplo que se muestra, elegiremos el Validador 4, pero usted es libre de elegir cualquier validador activo.

```
1. Haga clic en el nombre del validador elegido para seleccionar
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-4.avif)

```
2. Pase el cursor sobre Delegado y luego seleccione "BTC" en el menú desplegable
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-5.avif)

### Conecte la billetera Bitcoin

```
1. Al seleccionar un validador para delegar Bitcoin en el paso anterior, se le pedirá que conecte una billetera Bitcoin
```

:::info
En este ejemplo, demostramos el uso de Unisat Wallet, pero también es compatible con Xverse Wallet. Asegúrate de tener cualquiera de estos dos instalados.
:::

```
2. En la pantalla emergente Connect wallet, seleccione una de las billeteras disponibles.
```

- Para desarrolladores y usuarios más avanzados que estén interesados ​​en utilizar la herramienta Stake, consulte [aquí](https://github.com/coredao-org/btc-s Taking-tool?tab=readme-ov-file)

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-6.png)

```
3. En la siguiente pantalla, haga clic en **Conectar**
```

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-7.avif)

### Delegar Bitcoin

Al iniciar el proceso de delegación, es importante comprender y especificar varios parámetros clave:

1. **Especificando la cantidad de Bitcoin que deseas delegar**

- La cantidad mínima a delegar es **0.01 Bitcoin**
- En nuestro ejemplo, delegaremos **0,05 Bitcoin**, lo que satisface este requisito

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-8.avif)

2. **Configuración del tiempo de bloqueo**: esto determina cuándo se desbloqueará el Bitcoin apostado y estará disponible para su uso nuevamente en su dispositivo local.

- Seleccione el cuadro de tiempo de bloqueo interno para ingresar valores
- El tiempo de bloqueo predeterminado se establece con un mes de anticipación. El tiempo mínimo de bloqueo es **10 días.**
- En nuestro ejemplo, hemos seleccionado una fecha con 10 días de antelación (24 de abril)
- Haga clic en '**Aceptar**' para continuar

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-9.avif)

3. Especificación de la velocidad de prioridad de la red para su transacción

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-10.avif)

4. Finalmente, haga clic en '**Confirmar delegación**' para **Delegar Bitcoin**

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-11.avif)

5. Antes de firmar la transacción en su billetera, verifique los resultados de la transacción para asegurarse de que incluya un resultado OP\_Return.  La salida OP\_Return es donde se guarda su canje\_script y es esencialmente para canjear su Bitcoin apostado. Puede haber 2 o 3 salidas, pero al menos una de las salidas siempre debe ser OP\_Return. Cancele la transacción si no incluye la salida OP\_Return.

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-12.avif)

6. Verificar transacción enviada

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-13.avif)

5. Desde cualquier pantalla CORE, coloque el cursor sobre su billetera conectada en la esquina superior derecha y haga clic en "**Mi apuesta**".

![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-14.png)

6. En la pantalla **Delegador**, busque la columna **BTC(x)** y haga clic.

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-15.avif)

7. Verifique que el validador elegido esté pendiente de confirmación de la transacción.

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-16.avif)

8. Verifique que el validador elegido diga "**Recompensa**" en "**Canjear** **Tiempo**".

   ![guía-de-stake-nativo](../../../../static/img/native-stake/native-stake-17.avif)

**Felicitaciones.** Ha apostado con éxito su Bitcoin en la cadena de bloques Core y ahora ganará activamente tokens CORE de su Bitcoin delegado. Al apostar Bitcoin y votar por validadores, usted contribuye activamente a la gobernanza y seguridad de la red Core, ayudando a mantener su equilibrio y descentralización.
