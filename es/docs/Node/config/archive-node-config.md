---
sidebar_label: Configuración del nodo de archivo
hide_table_of_contents: false
sidebar_position: 2
---

# Configuración del nodo de archivo

---

Los nodos de archivo en la red Core desempeñan un papel crucial en el mantenimiento del estado histórico completo de la red. Estos nodos son versiones especializadas de nodos completos con capacidades mejoradas diseñadas para almacenar y brindar acceso al historial completo de todas las transacciones y estados desde el inicio del Core.

## Requisitos del sistema

Existen varios requisitos del sistema, tanto de software como de hardware, para configurar un nodo de archivo en la red central.

### Software

- Actualmente, un nodo de archivo Core solo se puede ejecutar en **Mac OS X** o en los sistemas operativos **Linux**.

### Hardware

Los nodos centrales realizan varias tareas que consumen muchos recursos, que pueden incluir almacenar datos de blockchain, verificar bloques o transacciones, comunicarse con nodos pares y responder solicitudes de red, según su configuración. Cada tipo de nodo Core tiene requisitos de hardware específicos según sus necesidades esperadas.

#### Especificaciones de hardware del nodo de archivo Testnet

Para los nodos de archivo en **Core Blockchain Testnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB |
| CPU                   | CPU 8 nucleos                                                                     |
| RAM                   | 32 Gigabytes                                                                      |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

#### Especificaciones de hardware del nodo de archivo Mainnet

Para los nodos de archivo en **Core Blockchain Mainnet**, recomendamos las siguientes especificaciones mínimas de hardware:

| Requisitos            | Detalles                                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| Almacenamiento        | Unidad de estado sólido (SSD) con una capacidad mínima de 4 TB |
| CPU                   | CPU 8 nucleos                                                                     |
| RAM                   | Ram                                                                               |
| Velocidad de Internet | Una conexión a Internet de banda ancha con velocidades de carga/descarga de 5Mbps |

## Ejecución del nodo de archivo principal

1\. Recomendamos utilizar el repositorio de GitHub [core-chain](https://github.com/coredao-org/core-chain) para construir y ejecutar directamente su nodo completo, ejecutando su nodo completo directamente desde nuestra base de código blockchain. Las instrucciones para crear el código fuente se pueden encontrar en el [README] del repositorio (https://github.com/coredao-org/core-chain#building-the-source).

2\. Descargue el binario de nodo más reciente desde GitHub de Core [repositorio de versiones](https://github.com/coredao-org/core-chain/releases/latest) y la última instantánea para el nodo de archivo desde el [repositorio de instantáneas] de Core(https: //github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full). El binario del nodo incluye los archivos de configuración relevantes de mainnet y testnet.

3\. Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su proyecto:

```bash
geth --datadir node init genesis.json
```

4\. Nuestro nodo completo/de archivo está listo, ¡comencemos a ejecutarlo! Puedes ejecutar el siguiente comando `geth` directamente:

```bash
## iniciar un nodo de archivogeth --config ./config.toml --datadir ./node --cache 8000 --gcmode=archive --syncmode=full 
```

5\. A medida que se ejecuta nuestro nodo de archivo, podemos monitorear sus registros para asegurarnos de que todo esté funcionando correctamente. El archivo de registro se encuentra en `./node/logs/core.log` de forma predeterminada, pero se puede cambiar a otra ubicación si lo desea.
