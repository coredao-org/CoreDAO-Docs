---
sidebar_label: En Testnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de nodos completos de Core en Core Testnet

---

Un nodo completo de Core almacena el historial completo de la cadena de bloques Core, lo que permite a cualquiera verificar el estado de cualquier cuenta. Un nodo completo Core puede adoptar muchas formas:

- **Nodo completo normal**: para uso privado.
- **Nodo completo validador**: actúa como validador en Core, validando bloques y transacciones.
- **Nodo completo RPC**: Proporciona servicios RPC y responde a solicitudes HTTP.

:::note
Este documento proporciona una guía detallada sobre cómo ejecutar nodos completos normales en la red Core.
:::

## Requisitos del sistema

Existen varios requisitos de sistema para configurar un nodo completo en Core.

### Especificaciones de software para nodos completos en Core Testnet

Actualmente, **_solo_** se admite la ejecución en **macOS** y **Linux**.

### Especificaciones de hardware para nodos completos en Core Testnet

Para los nodos completos en**Core Testnet**, se recomiendan las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                     |
| --------------------- | ---------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                               |
| CPU                   | CPU 4 nucleos                                                                |
| RAM                   | 8 gigabytes                                                                  |
| Velocidad de Internet | Conexión a Internet de banda ancha con velocidades de 5Mbps de subida/bajada |

## Construya y ejecute un nodo completo en Core Testnet

1. Se recomienda utilizar el repositorio oficial [core-chain](https://github.com/coredao-org/core-chain) en GitHub para compilar y ejecutar tu nodo completo directamente desde el código fuente de la blockchain. Las instrucciones para crear el código fuente se pueden encontrar en él [README] (https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2. Descargue el binario para nodo más reciente para Core Testnet desde el GitHub de Core [repositorio de lanzamientos] (https://github.com/coredao-org/core-chain/releases/latest). El binario del nodo incluye los archivos de configuración para la testnet; asegúrate de utilizar las configuraciones de **testnet2**. Descargue el último snapshot para testnet desde [aquí](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#testnet). Ten en cuenta que el método recomendado para sincronizar un nodo completo es hacerlo desde el _bloque génesis_.

3. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash

```

4. Ahora que la configuración del nodo completo está lista, ¡pongámoslo en marcha!

Ejecuta el siguiente comando `geth` para iniciar el nodo completo:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5. Mientras el nodo de archivo se está ejecutando, puedes monitorear sus logs para asegurarte de que todo esté funcionando correctamente. El archivo de registros se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo deseas.