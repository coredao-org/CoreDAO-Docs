---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 22
---

# Reglamento del validador

**Recortar** y **encarcelar** son los dos mecanismos básicos que utiliza Core blockchain para desincentivar el mal comportamiento de los validadores, y comprender cómo funcionan contribuirá en gran medida a hacer que la estructura de incentivos en el ecosistema Core sea más comprensible.

## Ataques y encarcelamientos

"Recortar" se refiere a recortar las recompensas que un validador habría recibido a cambio de minar bloques, o a recortar el depósito de tokens CORE que hace un nodo para convertirse en un validador en primer lugar. La severidad del castigo cortante aumenta en proporción al mal comportamiento del validador.

Generalmente se incurre en sanciones de reducción porque un nodo no logra producir con éxito un bloque durante su turno designado en el procedimiento de **minería de bloques por turnos** como se describe en [Elección del validador](../validator/validator-election.md) sección. Si un nodo de validación no logra extraer **50 bloques** seguidos, las recompensas del token CORE que el validador ha acumulado hasta el momento se reducen por completo. Esto significa que importa cuando un validador no logra extraer **50** bloques consecutivos. Si fallan en los primeros **50** bloques de una ronda, entregan solo una pequeña cantidad de recompensas acumuladas, pero si fallan en los últimos **50** bloques de la ronda, entregan todo lo que han ganado. Si un validador no logra extraer **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el **10 %** del depósito realizado para convertirse en validador y es encarcelado por \* _tres_\* días, lo que significa que no son elegibles para ser elegidos para el conjunto de validadores.

## Sugerencias de barra

Los verificadores son responsables de informar comportamientos maliciosos en la red mediante sugerencias de barras diagonales. Cualquiera puede enviar sugerencias de barras diagonales y están diseñadas para castigar a los actores malintencionados. La presentación requiere pruebas de irregularidades, pero si las acusaciones resultan ciertas, las recompensas obtenidas superan con creces los costos.

Al igual que con las sugerencias de barra diagonal, los verificadores deben informar la doble firma y también deben presentar evidencia de esta actividad. Si sus acusaciones se confirman, serán recompensados ​​por mantener segura la red.

Mientras producen bloques, los validadores Core existentes verifican periódicamente si algún validador actual ha sido encarcelado. Si es así, actualizarán el conjunto de validadores después de una época (es decir, después de 10 minutos). El encarcelamiento está diseñado para excluir a los validadores que se portan mal de las actividades de consenso con el fin de mejorar la seguridad de la red y mantener estable el TPS.

## Penalización por doble fichaje

Hay una manera de prohibir permanentemente a un validador de la red, y es mediante "_doble firma_", es decir, firmar dos bloques diferentes a la misma altura de bloque. Mientras que la falta de disponibilidad podría ser el resultado de una mala conexión de red, la doble firma es una fuerte evidencia de mala conducta intencional. En teoría, es posible que se produzca una doble firma benigna si un validador actualiza la versión de la red que está ejecutando y olvida actualizar su dirección. Asegúrese de ser diligente al realizar actualizaciones de red. Los validadores sorprendidos con doble firma entregan todas las recompensas, el 100% de su depósito de validador y, a partir de entonces, se les prohíbe participar en bloques de minería.
