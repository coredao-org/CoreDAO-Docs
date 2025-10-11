---
sidebar_label: Mantenimiento de Nodo
hide_table_of_contents: false
sidebar_position: 2
---

# Mantenimiento de Nodo

---

## Binario

Se recomienda a todos los clientes actualizar a la última versión del binario disponible. Se supone que la [última versión](https://github.com/coredao-org/core-chain/releases/latest) es más estable y tiene mejor rendimiento.

## Almacenamiento

### Estado de poda

Según pruebas realizadas, el rendimiento de los nodos completos se degrada cuando el tamaño del almacenamiento alcanza un volumen alto (aproximadamente 1.5 TB, valor estimado de forma experimental). Por lo tanto, se recomienda que el nodo completo mantenga un almacenamiento ligero, eliminando datos innecesarios (pruning) regularmente.

#### Reglas de poda

1. **No intente podar un nodo de archivo.** Los nodos de archivo deben mantener **TODOS** los datos históricos por definición.
2. Asegúrese de que todavía haya al menos **40 GB** de espacio de almacenamiento disponible en el disco que se eliminará. Se han reportado fallas con **~25GB** de espacio libre.
3. Geth debe estar completamente sincronizado
4. Geth debe haber generado un snapshot del estado que tenga al menos **128 bloques** de antigüedad. Esto se confirma cuando ya no aparece "state snapshot generation" en los registros.

#### Cómo podar:

1. Detén el proceso de geth

2. Ejecute el comando de poda

   `  nohup geth --datadir ~/node snapshot prune-state > . /prune.log 2>&1 &`

3. Verifique `prune.log`, espere a que se complete la operación de poda e inicie geth.

Los administradores deben contar con nodos de respaldo en caso de que alguno esté en proceso de poda. El hardware también es importante, **asegúrese de que el SSD cumpla con: 4TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, rendimiento de 250MB/S, latencia de lectura \<1ms**.

### Podar datos antiguos en tiempo real

Los datos antiguos son datos de bloques que ya se consideran inmutables. Esto se determina mediante un umbral, que actualmente está establecido en **90000**. Es decir, todos los bloques anteriores al bloque actual menos **90000** se consideran datos antiguos. Recomendamos la opción `--prunceancient` a los usuarios que no se preocupan por los datos antiguos. Esto también se recomienda para los usuarios que desean ahorrar espacio en disco, ya que solo conservará los datos de los últimos **90000** bloques.  Ten en cuenta que, una vez activada esta bandera, los datos antiguos no podrán recuperarse y no podrás reiniciar tu nodo sin incluir esta bandera en el comando de arranque.

Cómo utilizar la bandera:

```bash
./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --pruneancient=true --syncmode=full
```

### Herramientas de Poda de Bloques

Core ofrece una función offline para podar datos antiguos de bloques no deseados. Esta función descarta el bloque, el receipt y header de la base de datos antigua para ahorrar espacio.

Cómo podar:

1. Detén el proceso de Geth.
2. Ejecuta el siguiente comando

```bash
./geth snapshot prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024
```

`block-amount-reserved` es la cantidad de bloques de datos antiguos que deseas conservar después de realizar la poda.

## Almacenamiento ligero

Cuando el nodo se bloquea o se termina de forma forzada, sincronizará desde un bloque que podría tener algunos minutos o incluso horas de antigüedad. Esto ocurre porque el estado que reside en memoria no se guarda en la base de datos en tiempo real, y el nodo necesita reprocesar los bloques desde el último punto de control cuando vuelve a iniciarse. El tiempo de reprocesamiento depende del parámetro `TrieTimeout` en el archivo `config.toml`. Se recomienda aumentar el valor de `TrieTimeout` para manejar tiempos de reprocesamiento prolongados, permitiendo que el nodo mantenga un almacenamiento más liviano.

## Actualizar Geth

Lea [esta guía] (network-upgrade.md)

