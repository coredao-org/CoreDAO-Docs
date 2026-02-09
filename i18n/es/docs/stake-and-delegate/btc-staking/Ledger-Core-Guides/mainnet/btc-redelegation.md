---
sidebar_label: Redelegar BTC en Staking
description: Guía para redelegar BTC desde un dispositivo Ledger en Core Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Uso de Carteras Hardware Ledger para Redelegar BTC en Staking en Core

Esta guía de usuario te llevará paso a paso a través del proceso de redelegar Bitcoin (BTC) bloqueado por tiempo y ya expirado hacia un nuevo validador de Core utilizando una cartera hardware Ledger, reiniciando así una nueva transacción de staking de BTC.

:::note
Antes de comenzar, asegúrate de que tu dispositivo Ledger esté actualizado y de que la aplicación Ledger Core esté instalada. Debes usar la misma dirección principal de BTC que utilizaste originalmente para hacer staking. Para aprender cómo hacer staking de BTC con Ledger, consulta la guía detallada [aquí](./btc-staking.md).
:::

## Antes de Comenzar: Recordatorios Importantes

Para garantizar una experiencia segura y sin inconvenientes, ten en cuenta los siguientes requisitos clave:

- **Usar solo dispositivos Ledger compatibles:** El staking, la redención y la redelegación de BTC en Core son compatibles **únicamente** con determinados dispositivos Ledger hardware wallets que tengan el firmware más reciente. Actualiza siempre tu dispositivo mediante Ledger Live antes de usarlo.
- **Usar siempre la aplicación Ledger Core:** Debes utilizar la aplicación Ledger Core (no la aplicación Ledger Bitcoin) tanto para hacer staking, redimir o redelegar BTC. La aplicación de Bitcoin no admite operaciones de redención de BTC en staking y puede impedir una redención exitosa.
- **Hacer staking de BTC solo desde la dirección principal de BTC:** Actualmente, el staking, la redención y la redelegación de BTC en Core a través de Ledger **solo** son compatibles con la dirección BTC principal del dispositivo Ledger. Las direcciones secundarias o derivadas no son compatibles por ahora.

## Carteras Hardware Ledger Compatibles

Los siguientes dispositivos Ledger hardware wallets son actualmente compatibles con las operaciones de staking, redención y redelegación de BTC en la blockchain de Core. Para garantizar la mejor experiencia y compatibilidad, como buena práctica asegúrate de que tu dispositivo ejecute la versión más reciente del firmware disponible.

| Dispositivo Ledger | Versión de Firmware (_al momento de redactar_) |
| ------------------ | ----------------------------------------------------------------- |
| **Ledger Nano S+** | 1.4.0                             |
| **Ledger Nano X**  | 2.5.0                             |
| **Ledger Stax**    | 1.8.0                             |
| **Ledger Flex**    | 1.4.0                             |

<br/>

> ⚠️ **Nota**: Las versiones de firmware listadas anteriormente reflejan la última versión disponible al momento de la redacción y están sujetas a cambios. Antes de hacer staking, redimir o redelegar BTC en Core utilizando tu dispositivo Ledger, actualízalo a la versión más reciente para garantizar compatibilidad y seguridad. Verifica siempre en Ledger Live las actualizaciones más recientes. Consulta [aquí](https://support.ledger.com/article/8458939792669-zd) para más detalles sobre cómo actualizar el firmware de tu dispositivo Ledger.

## Requisitos Previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Un dispositivo Ledger compatible con el firmware más reciente.
- Ledger Live instalado y correctamente configurado en tu computadora.
- Haber realizado previamente staking de BTC en la blockchain de Core utilizando tu dispositivo Ledger.
- Si estás usando Xverse Wallet, tu dispositivo Ledger ya debe estar conectado y agregado a ella.
- El período de timelock de tu BTC bloqueado ha expirado, lo que lo hace elegible para redención.

> ⚠️ **Nota:** No podrás redimir o redelegar BTC en staking hasta que haya expirado el timelock designado.

## Pasos para Redelegar BTC con Timelock Expirado

Una vez que el período de timelock del BTC en staking ha expirado, los usuarios son elegibles para redimir o redelegar sus activos de Bitcoin delegados. Debes utilizar la misma dirección de cartera Ledger que usaste originalmente para hacer staking de BTC a fin de redelegar tus BTC tras la expiración del timelock.

### Paso #1: Conectar Core Wallet al Sitio de Staking

1. Conecta tu cartera de Core Mainnet al sitio web de Staking. Recuerda usar la misma cartera que utilizaste al momento de hacer staking de BTC. Haz clic en el botón “**Connect**” en la esquina superior derecha del sitio web.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/connect-core-wallet.png)
</p>

2. En la ventana emergente de selección de carteras, elige la cartera de tu preferencia que tengas configurada para usar con Core.

### Paso #2: Ir al Panel de Staking

1. Asegúrate de que tu dispositivo Ledger tenga instalado el firmware más reciente y esté conectado a tu computadora utilizando la dirección primaria de Bitcoin (BTC) de Ledger.
2. Navega al [sitio web de Core BTC Staking](https://stake.coredao.org/staking)
3. En el sitio de Staking, pasa el cursor sobre tu cartera conectada en la esquina superior derecha y haz clic en “**My Staking**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-1.png)
</p>

### Paso #3: Ir al Registro de BTC Staking

1. En la página del “**My Staking Dashboard**”, selecciona la pestaña de “BTC” para ver los registros correspondientes.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-2.png)
</p>

2. En esta pestaña se listan todos los registros de staking de BTC y los validadores a los que previamente delegaste tu BTC. Busca cualquier registro marcado como “**Expired**” bajo la columna “**Redeem Time**”, haz clic en “**Redelegate**” dentro de la columna “**Action**”.

<p align="center" style={{zoom:"80%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-3.png)
</p>

### Paso #4: Conectar el Dispositivo Ledger para Redelegación

#### Opción #1: Conectar el Dispositivo Ledger Directamente al Sitio Web de Staking

1. Para conectar tu dispositivo Ledger directamente al sitio de Staking, haz clic en “**Ledger**” dentro de la sección “**Hardware Wallets**” en la ventana emergente de selección de carteras. Asegúrate de que tu Ledger esté conectado, desbloqueado y con la aplicación Ledger Core abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-1.png)
</p>

#### Opción #2: Conectar el Dispositivo Ledger Usando Xverse Wallet

De forma alternativa, puedes usar Xverse Wallet para redelegar BTC directamente desde tu dispositivo Ledger. Para lograr esto, los usuarios primero deben agregar su dispositivo Ledger a su wallet Xverse como prerrequisito. Consulta la [guía oficial de Xverse](https://support.xverse.app/hc/en-us/articles/17819233917965-How-to-Connect-Your-Ledger-Device-to-Xverse) para conectar tu dispositivo Ledger con Xverse.

1. Para conectar tu dispositivo Ledger usando Xverse Wallet, haz clic en "**Xverse**" en la sección "**Wallets Supporting Ledger**" desde el modal de wallets mostrado. Asegúrate de que tu Ledger esté conectado, desbloqueado y que la Ledger Core app esté abierta en tu dispositivo.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/wallet-connect-2.png)
</p>

### Step #5: Especificar los detalles de la Redelegación de BTC

1. En el modal "**Redelegate BTC**" mostrado, verifica el monto de BTC a redelegar, la Bitcoin Staking Address, y la Reward Address en Core. Para redelegar BTC bloqueados por timelock y ya expirados, los usuarios deben conectarse a la misma dirección de Bitcoin que usaron para iniciar la transacción de BTC staking.
2. Configura el BTC timelock period. Establecer el tiempo de bloqueo determina cuándo tu Bitcoin se desbloqueará y estará disponible nuevamente para redención o redelegación. Ten en cuenta que el tiempo de bloqueo mostrado en la UI del Staking Website está basado en la zona horaria local del usuario, lo cual puede no coincidir con la zona horaria UTC de tu dispositivo Ledger.
3. Especifica la prioridad de red (network priority speed) para tu transacción.
4. Continúa haciendo clic en "**Confirm Delegation**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-4.png)
</p>

5. **Verificar BTC Staking Address (Opcional):** Usa la herramienta de verificación de BTC Staking Address para confirmar que la dirección de staking de BTC mostrada coincida con la dirección esperada antes de proceder.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-5.png)
</p>

6. **Proceder a aprobar la transacción:** Haz clic en "**Approve Transaction**" en el sitio web para continuar con la transacción.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-6.png)
</p>

### Step #6: Revisar y Aprobar la Transacción de Redelegación de BTC

El usuario recibirá una solicitud en su dispositivo Ledger para revisar y aprobar la transacción.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-7.png)
</p>

#### Usando Xverse Wallet para Aprobar la Transacción

1. Si usas un Xverse Wallet, revisa la transacción. Verifica los detalles y haz clic en "Confirm" en la notificación del wallet en tu navegador.

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/Xverse-wallet-ui.png)
</p>

2. Haz clic en "**Connect**" en el modal "**Connect Your Ledger**".

<p align="center" style={{zoom:"40%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/xverse-wallet-ui-2.png)
</p>

3. Procede a confirmar y aprobar la transacción en tu dispositivo Ledger.

#### Aprobar la Transacción de Staking de BTC en el Dispositivo Ledger

1. Firma la transacción con el wallet de tu dispositivo Ledger después de revisar los detalles de la transacción.
2. Siempre utiliza la Ledger Core app, no la Ledger Bitcoin app, para la redelegación de BTC bloqueados por timelock y ya expirados en la blockchain de Core. La aplicación Bitcoin no admite operaciones de redención ni de redelegación. Además, la Ledger Core app admite Clear Signing, lo que muestra todos los detalles de la transacción (como montos, direcciones y comisiones) directamente en la pantalla de tu dispositivo Ledger. Esto garantiza total transparencia y te permite verificar y aprobar la transacción, protegiendo tus activos de acciones no deseadas o maliciosas. Para más información sobre Clear Signing, consulta aquí.

<p align="center">
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-staking/btc-staking-ledger.gif)
</p>

3. Una vez que la transacción haya sido aprobada en tu dispositivo Ledger, el sitio web de staking mostrará una notificación "**Transaction Submitted**", confirmando que tu solicitud de redelegación de BTC se ha iniciado exitosamente.

<p align="center" style={{zoom:"60%"}}>
![install-coredao-app-on-ledger](../../../../../static/img/ledger-core/mainnet/btc-redelegation/UI-8.png)
</p>

4. Después de la aprobación de la transacción, los usuarios también podrán ver los detalles en el BTC Explorer.

## Preguntas Frecuentes

¿Tienes más preguntas? Consulta la sección [FAQs](../../../../FAQs/ledger-core-faqs.md) para encontrar respuestas a problemas comunes, guías de solución y mejores prácticas.

## Conclusión

Siguiendo esta guía, has redelegado exitosamente BTC bloqueados por timelock y ya expirados en la blockchain de Core, utilizando tu dispositivo Ledger. La combinación del modelo Self-Custodial BTC Timelocking de Core y la seguridad líder en la industria de Ledger, mejorada con Clear Signing mediante la Ledger Core app, proporciona la máxima transparencia, confianza y seguridad. Tu redelegación exitosa significa que tu BTC continúa participando en el ecosistema descentralizado de Core, sin salir nunca de tu custodia.


