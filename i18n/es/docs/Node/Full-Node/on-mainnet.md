---
sidebar_label: En la Mainnet
hide_table_of_contents: false
sidebar_position: 2
---

# Ejecución de nodos completos de Core en Core Mainnet

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

### Especificaciones de software para nodos completos en Core Mainnet

- Actualmente, un nodo completo de Core **_sólo_** puede ejecutarse en **Mac OS X** y **Linux**.

### Especificaciones de hardware para nodos completos en Core Mainnet

Los nodos de Core realizan varias tareas que consumen muchos recursos, incluyendo almacenar datos de blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder solicitudes de red, según su configuración. Para nodos completos en **Core mainnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                           |
| --------------------- | ---------------------------------------------------------------------------------- |
| Almacenimiento        | 1 TB de espacio libre en disco                                                     |
| CPU                   | CPU 4 nucleos                                                                      |
| RAM                   | 32 Gigabytes                                                                       |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5 Mbps |

## Construya y ejecute un nodo completo en Core Mainnet

1\. Recomendamos usar el repositorio de GitHub de [core-chain](https://github.com/coredao-org/core-chain) para compilar y ejecutar tu nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en él [README] (https://github.com/coredao-org/core-chain#building-the-source) del repositorio.

2\. Descargue el binario del nodo desde la [página de lanzamientos] (https://github.com/coredao-org/core-chain/releases) del repositorio de core-chain. El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet. Esta es la [última versión] (https://github.com/coredao-org/core-chain/releases/latest).

3\. Escriba el estado génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash

```

4\. Ahora que la configuración del nodo completo está lista, ¡pongámoslo en marcha!

Ejecuta el siguiente comando `geth` para iniciar el nodo completo:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. A medida que se ejecuta nuestro nodo completo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `/node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.