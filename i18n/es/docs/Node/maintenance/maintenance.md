---
sidebar_label: Mantenimiento de nodos
hide_table_of_contents: false
sidebar_position: 2
---

# Mantenimiento del Nodo

---

## Binario

Se recomienda a todos los clientes actualizar a la última versión. Se espera que la [versión más reciente](https://github.com/coredao-org/core-chain/releases/latest) sea más estable y ofrezca un mejor rendimiento.

## Almacenamiento

### Prune State

Según pruebas realizadas, el rendimiento de los nodos completos se degrada cuando el tamaño del almacenamiento alcanza un volumen elevado (aproximadamente 1.5 TB, valor experimental). Por lo tanto, se sugiere que el nodo completo mantenga siempre un almacenamiento ligero podando los datos innecesarios.

#### Reglas para la Poda

1. **No intente podar un nodo de archivo.** Los nodos de archivo deben mantener **TODOS** los datos históricos por definición.
2. Asegúrese de que haya al menos **40 GB** de espacio de almacenamiento disponible en el disco que será podado. Se han reportado fallos con **~25GB** de espacio libre.
3. Geth debe estar completamente sincronizado
4. Geth debe haber terminado de crear un snapshot que tenga al menos **128 bloques de antigüedad**. Esto es cierto cuando ya no se informa "state snapshot generation" en los logs.

#### Cómo podar:

1. Detener el proceso geth

2. Ejecute el comando de poda

   ```nohup geth --datadir \~/node snapshot prune-state > .
   ```

3. Revisa `prune.log`, espera a que se complete la operación de poda y luego inicia geth nuevamente.

Se recomienda que los responsables del mantenimiento siempre tengan algunos nodos de respaldo en caso de que uno de los nodos esté siendo podado. El hardware también es fundamental. **Asegúrate de que el SSD cumpla con los siguientes requisitos: 4TB de espacio libre en disco, unidad de estado sólido (SSD), gp3, 8k IOPS, 250MB/S throughput, latencia de lectura \<1ms**.

### Poda de Datos Antiguos en Tiempo Real

Los datos antiguos son datos de bloques que ya se consideran inmutables. Esto está determinado por un umbral que actualmente está establecido en **90000**. Esto significa que los bloques anteriores a **90000** se consideran datos antiguos. Recomendamos el uso del flag `--pruneancient` a los usuarios que no necesiten conservar estos datos antiguos. Esto también se recomienda para los usuarios que desean ahorrar espacio en el disco, ya que esto solo conservará los datos de los últimos **90000** bloques.   Ten en cuenta que una vez habilitado este flag, los datos antiguos no serán recuperables y no podrás reiniciar tu nodo sin este flag en el comando de inicio.

Cómo usar el flag:

```bash
```

### Herramientas de poda de bloques

Core ofrece la función fuera de línea para eliminar datos de bloques antiguos no deseados. Esta función elimina los datos de bloques, recibos y cabeceras almacenados en la base de datos de datos antiguos para ahorrar espacio.

Cómo podar:

1. Detén el proceso de Geth.
2. Ejecuta el siguiente comando

```bash
```

`block-amount-reserved` es el número de bloques de datos antiguos que deseas conservar después de la poda.

## Almacenamiento Ligero

Cuando un nodo se bloquea o es finalizado de manera forzada, se sincroniza desde un bloque que tiene unos minutos u horas de antigüedad. Esto ocurre porque el estado almacenado en memoria no se guarda en la base de datos en tiempo real, y el nodo necesita reprocesar bloques desde el último checkpoint al reiniciarse. El tiempo de replay depende del parámetro `TrieTimeout` en el archivo `config.toml`.  Se recomienda aumentar el valor de `TrieTimeout` para acomodar tiempos de reejecución largos, lo que permite que el nodo mantenga un almacenamiento ligero.

## Actualizar Geth

Lea [esta guía] (network-upgrade.md)

