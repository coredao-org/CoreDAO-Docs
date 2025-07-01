---
sidebar_label: Nodo Completo
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos Completos en Core

---

Un nodo completo de Core almacena todo el historial de la blockchain de Core, permitiendo que cualquiera verifique el estado de cualquier cuenta. Un nodo completo en Core puede tomar distintas formas:

- **Nodo completo normal**: Para uso privado.
- **Nodo completo validador**: Actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

A continuación se describen los pasos detallados para ejecutar **nodos completos normales** en la red Core.

## Requisitos del Sistema

Existen varios requisitos de sistema para configurar un nodo completo en Core.

### Software

- **Sistema Operativo:** Actualmente, un Nodo Validador de Core es compatible _únicamente_ con los sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad
- **Configuración del Firewall:** Abrir los puertos necesarios para permitir la comunicación con la red y otros nodos

### Hardware

Un Nodo Completo en Core realiza varias tareas que demandan recursos, como almacenar datos de la blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder a solicitudes de la red, según su configuración. A diferencia de los validadores, los nodos completos no producen bloques, en vez de eso, ayudan a propagar transacciones y bloques a través de la red. Cumplen un papel crucial en el mantenimiento de la integridad de los datos y el soporte de un entorno trustless. Para ejecutar Nodos Completos en Core, se recomiendan las siguientes especificaciones mínimas de hardware:

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para Nodos Completos en **Core Testnet2**, las siguientes especificaciones mínimas de hardware son recomendadas:

    

  </TabItem>

  <TabItem value="mainnet">
Para Nodos Completos en **Core Mainnet**, las siguientes especificaciones mínimas de hardware son recomendadas:

    

  </TabItem>
</Tabs>

## Construya y ejecute un nodo completo en Core



1. Se recomienda utilizar el repositorio [core-chain](https://github.com/coredao-org/core-chain) en GitHub para compilar y ejecutar el nodo completo directamente desde el código fuente de la blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descargue el binario para nodo más reciente para Core Testnet desde GitHub de Core [repositorio de lanzamientos] (https://github.com/coredao-org/core-chain/releases/latest). El binario del nodo incluye los archivos de configuración para la testnet; asegúrate de utilizar las configuraciones de **testnet2**. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Ten en cuenta que el método recomendado para sincronizar nodos en testnet es hacerlo desde el bloque génesis.

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

    ```bash
    geth --datadir node init genesis.json
    ```

  Deberías ver el siguiente resultado:

    ```bash
    
    ```

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Ejecuta el siguiente comando para iniciar el nodo completo:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

  5\. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.

   </TabItem>

 <TabItem value="mainnet">

1. Recomendamos usar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para construir el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2. Descargue el binario del nodo desde la [página de lanzamientos] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

    ```bash
    geth --datadir node init genesis.json
    ```

  Deberías ver el siguiente resultado:

    ```bash
    
    ```

4. Nuestro nodo completo está listo, ¡comencemos a ejecutarlo! Ejecuta el siguiente comando para iniciar el nodo completo:

    ```bash
    ## start a full node
    geth --config ./config.toml --datadir ./node  --cache 8000
    ```

5. Mientras el nodo de archivo se está ejecutando, puedes monitorear sus logs para asegurarte de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
    </TabItem>

</Tabs>