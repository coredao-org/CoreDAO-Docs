---
sidebar_label: Core Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Conectarse a Core Testnet

---

:::note
Esta es una guía detallada para conectarse a Core Testnet (1114) utilizando la billetera MetaMask.
:::

### Requisitos previos de software

1. [La extensión para el navegador de MetaMask Wallet](https://metamask.io/)

### Configuración de la billetera MetaMask

Recomendamos utilizar la [billetera web MetaMask](https://metamask.io/) para conectarse a Core Testnet. Deberá instalar MetaMask y configurar su cuenta antes de poder usarla para conectarse a Core Testnet. Puede encontrar las instrucciones de configuración de MetaMask aquí.

### Agregar Core Testnet a MetaMask

Hay múltiples formas de agregar configuraciones de Core Testnet2 a tuwallet MetaMask; a continuación, hemos listado las formas más confiables y rápidas.

#### Agregar red manualmente

Una vez que hayas configurado tu walllet MetaMask, puedes usarla para conectarte a Core Testnet añadiendo los detalles de la red Core Testnet2 en la configuración de redes de MetaMask. Navegue hasta `Configuración->Redes` (`Settings->Networks`) en MetaMask y haga clic en el botón `Agregar red` (`Add Network`). Introduzca la siguiente información:

- **Nombre de la red:** Core Blockchain TestNet
- **Nueva URL de RPC:** https://rpc.test2.btcs.network
- **ID de cadena:** 1114
- **Símbolo de moneda:** tCORE2
- **URL del Explorador de bloques:** https://scan.test2.btcs.network
- **Faucet:** https://scan.test2.btcs.network/faucet
- **Web de Staking:** https://stake.test2.btcs.network/

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-config-wallet-1.png)

#### Agregar la red Core a través de Chainlist.org

1. Ve a https://chainlist.org y busca _Core Blockchain_, asegúrate de marcar la opción _Include Testnets_.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-1.png)

2. Verifique dos veces para asegurarse de elegir la red correcta. Verifique los detalles en las siguientes capturas: ID de cadena, moneda, etc. para asegurarse de agregar la correcta.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-2.png)

3. Haga clic en _Connect Wallet_ y luego elija MetaMask. Permita conectarse a la billetera MetaMask confirmando las notificaciones de MetaMask.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-3.png)

4. Cambia a la Core Testnet haciendo clic en el botón _‘Switch Network’_.

![chainlist-testnet-connect-metmask](../../static/img/testnet-wallet-config/chainlist-testnet-connect-4.png)

El Core Testnet ahora está agregado a su MetaMask.

#### Agregar red a través de Core Testnet Explorer

Si usa la extensión de MetaMask en Chrome, puede usar un atajo rápido para agregar Core Testnet a MetaMask. Visite [Core Testnet Explorer](https://scan.test.btcs.network/), desplácese hacia abajo y seleccione el botón `Add Core Network`. Esto abrirá una ventana emergente con toda la información de red necesaria cargada; solo necesita confirmar y aprobar.

![add-network-metamask](../../static/img/testnet-wallet-config/testnet-wallet-config-2.png)

:::info

#### Nueva Testnet

La última testnet de Core, Core Testnet2 con `chainID 1114`, ya está activa y es el entorno de prueba recomendado para la blockchain Core. A diferencia de la versión anterior (`ID de cadena: 1115`), esta soporta BTC Testnet4 para el staking. The old testnet, Core Testnet, is now deprecated and no longer maintained.

#### Actualizaciones de cambio de marca

`Satoshi Chain/BTCs` ha sido rebautizada como `Core/CORE`, respectivamente. Si agregó la Testnet antes del cambio de marca, deberá actualizar manualmente el nombre de la red y el símbolo de moneda en la configuración de MetaMask; de lo contrario, no podrá utilizar la versión actual de Core Testnet. Vaya a `Configuración->Red` y seleccione `Core Testnet` para abrir la configuración de red. Actualice el nombre de la red y el símbolo de moneda a los valores indicados en la [sección anterior](#adding-network-manualmente) y haga clic en el botón Guardar. ¡Listo!
:::

### Fondear Wallet con tokens tCORE2

Para ayudar a los usuarios a comenzar y permitir a los desarrolladores prototipar rápidamente sus dApps, Core ha lanzado el [Core Testnet Faucet](https://scan.test2.btcs.network/faucet) para distribuir tokens **tCORE2** de la testnet Core. Sigue la [guía](./core-faucet.md) detallada para fondear tu cuenta de MetaMask con tokens tCORE2.

### Enviando tokens tCORE2

Puedes usar la wallet MetaMask para enviar tCORE2 a otras direcciones.

1. Navega a la wallet MetaMask, asegúrate de estar conectado a Core Testnet2
2. Haga clic en el botón `Enviar`

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-1.png)

3. Ingresa la cantidad de tokens tCORE2 que deseas enviar y la dirección a la que quieres enviar los tokens tCORE2; asegúrate de que sea una dirección de Core Testnet2. Luego haz clic en _Continue_ y confirma la transacción.

![send-metmask](../../static/img/testnet-wallet-config/send-tcore-2.png)

