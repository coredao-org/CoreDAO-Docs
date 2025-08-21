---
sidebar_label: Staking Bitcoin con Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking de Bitcoin Auto-Custodiado

Esta guía de usuario está diseñada para guiarte paso a paso en el proceso de hacer staking con tus Bitcoin en la blockchain de Core para ganar recompensas en tokens CORE.

## Requisitos Previos

Para poder hacer staking, debes tener los siguientes requisitos previos:

1. **Extensión de Navegador de una Wallet de Bitcoin Compatible:**
   Para participar en el proceso de staking de BTC, debes instalar extensiones de navegador de alguna de las wallets de Bitcoin compatibles, como [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), y/o [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge). Visita https://stake.coredao.org para consultar la lista actualizada de wallets compatibles. Debes usar la versión de escritorio, ya que las wallets móviles y hardware wallets no están actualmente soportadas. También puedes hacer staking directamente usando la aplicación móvil [Element Wallet](https://www.elementwallet.com/).
2. **Dirección de Wallet de Core para Recompensas:**
   Prepara tu dirección de wallet de Core para recibir las recompensas en tokens CORE por hacer staking de Bitcoin. Si aún no tienes una dirección de wallet de Core, puedes crear una rápidamente conectándote con MetaMask. Para más información sobre cómo configurar MetaMask para que funcione con la red de Core, sigue la guía detallada disponible [aquí](../../Dev-Guide/core-wallet-config.md).

## **Consideraciones Clave para el Staking de BTC**

A continuación, se presentan algunos puntos clave que los usuarios deben tener en cuenta al hacer staking de sus Bitcoin con Core.

1. **Cantidad Mínima de Bitcoin \+ Tarifa de Gas**:
   La cantidad mínima de BTC requerida para hacer staking con Core depende del método elegido. Si utilizas la interfaz oficial del sitio web, debes hacer staking con al menos 0.01 BTC (excluyendo las tarifas de transacción). No hay un requisito mínimo cuando se hace staking mediante script. Además, los usuarios deben considerar las tarifas de gas de la red Bitcoin necesarias para las transacciones. Si planeas hacer staking por menos de un mes, se recomienda tener al menos 0.05 BTC para cubrir posibles congestiones de red, que podrían aumentar las tarifas de gas por encima de las recompensas de staking obtenidas.
2. **Duración Mínima del Staking:**
   La duración mínima del staking también depende del método utilizado. La interfaz web oficial requiere un mínimo de 5 días, mientras que el staking mediante script no tiene requisito de bloqueo.
3. **Comprendiendo las Diferencias en las Direcciones de Staking de Bitcoin:**
   - La dirección de staking que aparece en la solicitud de transacción de tu cartera de Bitcoin puede diferir de tu dirección original de Bitcoin. Esto se debe a que la dirección de staking de Bitcoin se deriva de la clave privada maestra de tu cartera de Bitcoin, lo cual garantiza el control y la seguridad sobre tus activos. Tu Bitcoin permanece seguro en la dirección de staking, sin verse afectado por el proceso de staking.
4. **Retrasos en la Visualización de Activos Bloqueados en tu Wallet de Bitcoin:**
   - Puede que experimentes ciertos retrasos antes de que tu Bitcoin bloqueado se muestre en tus carteras. Este retraso se debe principalmente a demoras en la confirmación de transacciones en la red de Bitcoin, que pueden tardar varias horas debido al tiempo de bloque, el número de confirmaciones necesarias, y la congestión de la red.
   - Aunque estamos trabajando activamente con socios de wallets para facilitar la visualización puntual de tus activos, puedes ver tus activos bloqueados en la página “MyStaking” del sitio web de staking de Core.
   - También puedes ver tus fondos en staking buscando la dirección de staking en un explorador de Bitcoin como [Mempool.space](https://mempool.space/).
5. **Consideraciones sobre los Períodos de Bloqueo**
   - Una vez que bloqueas tu Bitcoin para hacer staking, este se vuelve inaccesible hasta que finalice el período de bloqueo. Teniendo en cuenta tus objetivos de inversión y tolerancia al riesgo, se recomienda seleccionar cuidadosamente el período de bloqueo. Comenzar con períodos de bloqueo más cortos puede ayudarte a familiarizarte con el proceso antes de comprometerte a duraciones más largas.
6. **Tipos de Direcciones de Bitcoin Compatibles**

   - El staking de BTC en Core es compatible con los siguientes formatos de direcciones de Bitcoin:

     | Tipo de Dirección                         | Prefijo | Ejemplo (hipotético)    |
     | ----------------------------------------- | ------- | ------------------------------------------ |
     | Legacy (P2PKH)         | 1       | 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY         |
     | Nested SegWit (P2SH)   | 3       | 3Ai1JZ8pdJb2ksieUV8FsxSNVJCpoPi8W6         |
     | Native SegWit (Bech32) | bc1     | bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kygt080 |
     | Taproot (P2TR)         | bc1p    | bc1p5cyxnuxmeuwuvkwfem96lkw4rfd4x0dc9kwljz |

:::info
Asegúrate de que tu wallet de BTC utilice uno de los formatos compatibles mencionados anteriormente al participar en el staking autocustodiado de BTC en Core. Siempre verifica dos veces tu dirección de wallet antes de realizar el staking.
:::

## Flujo de Trabajo del Staking Autodetenido de BTC

El staking autodetenido de Bitcoin introduce un método seguro y descentralizado para que los poseedores de Bitcoin obtengan recompensas de staking. Al bloquear tu Bitcoin de forma nativa en la red de Bitcoin mediante un mecanismo con límite de tiempo, puedes participar activamente en el mecanismo de consenso de la blockchain de Core mientras haces staking. A continuación, se presentan los pasos involucrados en este proceso.

1. **Iniciar Staking:** Comienza accediendo a la [herramienta de staking de BTC basada en CLI](https://github.com/coredao-org/btc-staking-tool) (para usuarios técnicos) o a la [plataforma web de staking](https://stake.coredao.org/) (para usuarios en general).
2. **Hacer Staking de Bitcoin con Time-Lock:** Realizas el staking de tu Bitcoin enviando una transacción en la red de Bitcoin con un parámetro time-lock, y tu Bitcoin permanece bloqueado hasta que finaliza el período especificado. Asegúrate de cumplir con los requisitos necesarios para que la transacción sea válida y elegible; consulta [aquí](../btc-staking/design.md) para más detalles.
   1. **La duración mínima de staking depende del método que elijas.** La interfaz del sitio web oficial requiere un mínimo de 5 días, mientras que el script no impone ningún requisito de bloqueo. Por lo tanto, asegúrate de seleccionar cuidadosamente tus períodos de bloqueo.
   2. Incluye la Dirección del Validador de Core para delegar tus activos.
   3. Incluye la dirección de tu wallet de Core para recibir recompensas.
3. **Votar por Validadores:** Al incluir la dirección de los Validadores de Core en tu transacción, puedes delegar tu Bitcoin en staking al validador elegido en la blockchain de Core.
4. **Conecta una wallet de Core para recompensas:** En el campo de retorno, verifica la dirección de tu wallet de Core; recibirás las recompensas en tokens CORE en esa dirección.
5. **Reclamar Recompensas:** Las recompensas acumuladas en tokens CORE también aparecerán en el [sitio de staking](http://stake.coredao.org/). Las recompensas en tokens CORE estarán disponibles cuando los usuarios conecten sus wallets y pueden reclamarse diariamente. Además, para ser elegible para recibir recompensas, es necesario completar un ciclo de staking completo (00:00:00 - 23:59:29 UTC).
6. **Canjear Bitcoin:** Una vez que expire el período de bloqueo del staking, el Bitcoin en staking permanecerá inactivo en la dirección de staking hasta que el usuario lo canjee.

## Guía paso a paso para el Staking Autocustodiado de Bitcoin

Para comenzar a hacer staking de tu Bitcoin en la blockchain de Core y ganar recompensas de staking en tokens CORE, sigue los pasos detallados a continuación para hacer staking de Bitcoin a través del [sitio web oficial de staking de Core](http://stake.coredao.org/).

### Conectar la Wallet de Core

1. Visita [https://stake.coredao.org](https://stake.coredao.org/) y haz clic en **Validators** en el encabezado superior.

2. Haz clic en **Connect Wallet** en la esquina superior derecha del encabezado para conectar tu wallet de Core. Desde la lista de wallets compatibles, elige tu wallet de Core preferida. Para esta guía, se ha utilizado MetaMask.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-1.png)
</p>

3. Confirma la notificación de la wallet para permitir la conexión con el sitio web de staking.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-2.png)
</p>

### Seleccionando un Validador de Core para la Delegación de Bitcoin

4. Una vez en la página de **Validators**, desplázate hacia abajo para ver la lista de Validadores de Core y elige al validador al que deseas delegar tus Bitcoins. Asegúrate de elegir validadores activos.

<p align="center" >
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-3.png)
</p>

5. Al hacer clic en el nombre del validador deseado, serás dirigido a la página de **Detalles del Validador**. Esta página muestra información sobre los registros de staking/delegación del validador seleccionado.

<p align="center">
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-4.png)
</p>

6. Haz clic en el botón **Stake**, luego selecciona **BTC**

<p align="center"  style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-5.png)
</p>

7. Para conectar tu wallet de Bitcoin, haz clic en la wallet compatible de tu preferencia. Para esta guía, seleccionamos Unisat.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-6.png)
</p>

8. Una vez conectada tu wallet de Bitcoin, es importante entender y especificar varios parámetros clave:

- Especificar la cantidad de Bitcoin que deseas delegar
  - La cantidad mínima para delegar es 0.01 Bitcoin si haces la delegación a través de la interfaz oficial del sitio web.
  - En nuestro ejemplo, delegaremos 0.05 Bitcoin, que cumple con este requisito
- Configurar el tiempo de bloqueo determina cuándo tu Bitcoin en staking será desbloqueado y estará disponible para redención o re-delegación.
  - Selecciona dentro del cuadro de tiempo de bloqueo para ingresar valores, o haz clic en el ícono de calendario para elegir la fecha y luego clic en ‘OK’ para continuar.
  - El tiempo de bloqueo predeterminado está configurado para un mes adelante.
- Especifica la prioridad de velocidad de red para tu transacción

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-7.png)
</p>

9. Ten en cuenta que la **Dirección de Recompensa en Core** se extrae de la cartera de Core conectada. Debes conectar la wallet de Core con la misma dirección en la que deseas recibir las recompensas por staking en tokens CORE.
10. Haz clic en **Confirmar** para completar la transacción.

:::note
Nota: En el staking de BTC, transferir el validador de staking interrumpirá el proceso de staking, lo que resultará en la pérdida de las recompensas de ese día.
:::

### Confirmar la salida OP_Return

11. Antes de firmar la transacción en tu wallet, verifica las salidas de la transacción para asegurarte de que incluyan una salida OP_Return. La salida OP_Return es donde se guarda tu redeem_script y es esencial para redimir tu Bitcoin en staking. Puede haber dos o tres salidas en total, pero al menos una siempre debe ser OP_Return. Cancela la transacción si no incluye una salida OP_Return.

<p align="center" style={{zoom:"80%"}}>
![dual-staking-on-core](../../../static/img/dual-staking/dual-staking-15.png)
</p>

12. Una vez que confirmes la transacción, recibirás una notificación de **Transacción Enviada**. Puedes verificar tu transacción haciendo clic en **Ver en explorador de BTC**.

<p align="center" >
![btc-staking-on-core](../../../static/img/native-staking/native-staking-13.avif)
</p>

### BTC Staking Transaction Decoder

Los usuarios pueden verificar sus transacciones de BTC staking en [Core Scan](https://scan.coredao.org/btc-stake-txn-decoder) mediante:

- Revisar el estado de confirmación de la transacción
- Validar el formato de salida OP_RETURN
- Confirmar la dirección del validator objetivo

<p align="center" >
![btc-staking-txn-decoder](../../../static/img/btc-staking-txn-decoder/txn-decoder.png)
</p>

Esto te permite verificar que tu transacción de BTC staking cumpla con todos los requisitos del protocolo e identificar posibles problemas si la transacción no ha sido procesada por los relayers de la red Core.

:::info
Para información detallada sobre el BTC Staking Transaction Decoder, incluyendo problemas comunes y sus soluciones, consulta la [guía](../btc-staking-txn-decoder.md) para más detalles.
:::

### Cómo usar

1. **Pegar el Transaction Hash**: Ingresa el hash de tu transacción de BTC staking en la herramienta de decodificación
2. **Obtener el estado de la transacción**: La herramienta proporcionará el estado actual de la transacción
3. **Decodificar los detalles de la transacción**: Decodificará y mostrará:
   - Input address
   - Output address
   - OP_RETURN output details
   - Validator Address
   - Delegator address

<p align="center" >
![btc-staking-txn-decoder](../../../static/img/btc-staking-txn-decoder/decoded-data.png)
</p>

### Verificar Dirección de Staking de BTC

13. Antes de proceder a confirmar tu transacción de staking. Esta función de verificación permite a los usuarios verificar de forma independiente su dirección de staking de BTC, lo que ayuda a prevenir firmas a ciegas y mejora la seguridad del proceso de staking.

14. Para proceder con la verificación, haz clic en el botón **Verificar la Dirección de Staking de BTC**. Esto te redirigirá a un sitio web externo.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

15. En la interfaz del sitio web de verificación, asegúrate de que los datos obtenidos sean correctos y luego haz clic en el botón _Submit_.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/external-verification-UI.png)
</p>

16. El resultado de la verificación aparecerá en la sección **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

17. Una vez verificado, regresa a stake.coredao.org y continúa haciendo clic en **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../static/img/btc-staking/approve-tx.png)
</p>

### Visualización de Registros de Staking

18. En la esquina superior derecha del sitio web de staking, coloca el cursor sobre tu wallet conectada y haz clic en **My Staking**.

<p align="center">
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

19. La página **My Staking** muestra los registros de todos tus procesos de staking (CORE, BTC y hash). Haz clic en la pestaña **BTC Records** para ver los detalles de tus delegaciones en BTC.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../static/img/native-staking/updated-ui/staking-guide-9.png)
</p>

**Felicidades,** has realizado exitosamente el staking de tu Bitcoin en la blockchain de Core y ahora comenzarás a ganar tokens CORE de forma activa a partir de tu Bitcoin delegado. Al hacer staking con Bitcoin y ayudar a elegir validadores en Core, contribuyes activamente a la seguridad de la red Core, apoyando su descentralización y estabilidad.
