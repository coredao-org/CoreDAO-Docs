---
sidebar_label: Mantenimiento de nodos
hide_table_of_contents: false
sidebar_position: 2
---

# Mantenimiento de nodos

## Binario

Se sugiere a todos los clientes que actualicen a la última versión. Se supone que la [última versión] (https://github.com/coredao-org/core-chain/releases/latest) es más estable y tiene mejor rendimiento.

## Almacenamiento

### Estado de poda

Según la prueba, el rendimiento de un nodo completo se degradará cuando el tamaño de almacenamiento alcance un volumen alto (anteriormente era 1,5 TB, que es un valor experimental, el último número debe actualizarse). Sugerimos que el nodo completo siempre mantenga un almacenamiento ligero podándolo.

#### Reglas de poda

1. **No intente podar un nodo de archivo.** Los nodos de archivo deben mantener **TODOS** los datos históricos por definición.
2. Asegúrese de que todavía haya al menos **40 GB** de espacio de almacenamiento disponible en el disco que se eliminará. Se han reportado fallas con **~25 GB** de espacio libre.
3. Geth está completamente sincronizado
4. Geth ha terminado de crear una instantánea que tiene al menos **128 bloques** de antigüedad. Esto es cierto cuando la "generación de instantáneas de estado" ya no se informa en los registros.

#### Cómo podar:

1. Detener el proceso geth
2. Ejecute el comando de poda

`	nohup geth --datadir ~/node snapshot prune-state > . /prune.log 2>&1 & `

3. Verifique `prune.log`, espere a que se complete la operación de poda e inicie geth.

Los mantenedores siempre deben tener algunos nodos de respaldo en caso de que uno de los nodos sea eliminado. El hardware también es importante, **asegúrese de que el SSD cumpla con: 4 TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250 MB/S, latencia de lectura \<1 ms**.

### Podar datos antiguos en tiempo real

Los datos antiguos son datos en bloque que ya se consideran inmutables. Esto está determinado por un umbral que actualmente está establecido en **90000** Esto significa que los bloques anteriores a **90000** se consideran datos antiguos. Recomendamos la opción `--prunceancient` a los usuarios que no se preocupan por los datos antiguos. Esto también se recomienda para los usuarios que desean ahorrar espacio en el disco, ya que esto solo conservará los datos de los últimos **90000** bloques.  Tenga en cuenta que una vez que se activa esta bandera, los datos antiguos no se recuperarán nuevamente y no podrá volver a ejecutar su nodo sin esta bandera en el comando de inicio.

Cómo utilizar la bandera:

```bash
./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --pruneancient=true --syncmode=full
```

### Herramientas de poda de bloques

Core ofrece la función fuera de línea para eliminar datos de bloques antiguos no deseados. Descartará el bloque, el recibo y el encabezado en la base de datos antigua para ahorrar espacio.

Cómo podar:

1. Detenga el proceso Geth.
2. Ejecute el siguiente comando

```bash
./geth instantánea prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024
```

`block-amount-reserved` es la cantidad de bloques de datos antiguos que desea conservar después de la poda.

## Almacenamiento ligero

Cuando el nodo falla o se cierra a la fuerza, el nodo se sincronizará desde un bloque que se realizó hace unos minutos o unas horas. Esto se debe a que el estado en la memoria no persiste en la base de datos en tiempo real y el nodo necesita reproducir bloques desde el último punto de control una vez que se inicia. El tiempo de reproducción depende de la configuración `TrieTimeout` en config.toml.  Le sugerimos que lo aumente si puede tolerar un tiempo de reproducción prolongado, para que el nodo pueda mantener un almacenamiento ligero.

## Actualizar Geth

Lea [esta guía] (network-upgrade.md)
