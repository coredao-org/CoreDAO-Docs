---
sidebar_label: Nodo RPC
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nodos RPC en Core

---

Los nodos RPC (llamada a procedimiento remoto) en la red Core desempeñan un papel crucial a la hora de facilitar la interacción entre las aplicaciones externas y la cadena de bloques Core. Sirven como interfaz a través de la cual los desarrolladores y usuarios pueden consultar e interactuar con la cadena de bloques, lo que las hace esenciales para el funcionamiento de aplicaciones descentralizadas (DApps) y otros servicios de la cadena de bloques.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo RPC en la red Core.

### Software

- **Sistema Operativo:** Actualmente, _solo_ se admiten sistemas operativos **macOS** o **Linux** (Ubuntu 20.04 o superior).
- **Conectividad de Red:** Conexión a internet estable, con baja latencia y alta disponibilidad.
- **Configuración del Firewall:** Para asegurar que tu Nodo RPC pueda comunicarse con aplicaciones externas y otros nodos, debes permitir el tráfico HTTP entrante en el puerto 8575, que es el puerto predeterminado para la comunicación RPC. Puedes ajustar esta configuración en el archivo `config.toml` si prefieres usar un puerto diferente. Asegúrate de que la configuración de tu firewall esté correctamente ajustada para permitir tráfico en este puerto.

### Hardware

Los nodos RPC en Core actúan como una puerta de enlace para que las aplicaciones, desarrolladores y usuarios interactúen con la blockchain. Procesa consultas, envía transacciones y recupera datos en tiempo real de la blockchain mediante Llamadas a Procedimientos Remotos (RPC). Estos nodos son esenciales para que las dApps, wallets y plataformas de analítica accedan a la red de Core sin fricciones. A continuación, se indican los requisitos de hardware para un nodo RPC en Core.

<Tabs
defaultValue="testnet2"
values={[
{label: 'Testnet', value: 'testnet2'},
{label: 'Mainnet', value: 'mainnet'},
]}> <TabItem value="testnet2">
Para nodos RPC en **Core Testnet2**, se recomiendan las siguientes especificaciones mínimas de hardware:

```
```

  </TabItem>

  <TabItem value="mainnet">
Para Nodos RPC en **Core Mainnet**, las siguientes especificaciones mínimas de hardware son recomendadas:

```
```

  </TabItem>
</Tabs>

## Ejecutando el nodo RPC

### Habilitar el puerto de entrada HTTP

Si está ejecutando un nodo RPC, debe habilitar las reglas de entrada "HTTP" en el puerto **8575** en la configuración del firewall. El puerto **8575** está configurado como puerto predeterminado. Puede cambiar las configuraciones en `config.toml`.

### Construir y ejecutar

1\. Recomendamos usar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo RPC directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario para nodo desde la [página de lanzamientos de Core] (https://github.com/coredao-org/core-chain/releases) del repositorio core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash
```

4\. Ahora que la configuración del nodo RPC está completa, es momento de ejecutarlo.

Para ejecutar un nodo RPC, ejecuta el siguiente comando `geth `:

```bash
## iniciar un nodo RPC
geth --config ./config.toml --datadir ./node --cache 8000 --gcmode=full --rpc.allow-unprotected-txs
```

5\. Mientras el nodo RPC full node esté en ejecución, puedes monitorear sus logs para asegurarte de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.