---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 22
---

# Reglamento del validador

---

**Slashing** y **jailing** son los dos mecanismos fundamentales que utiliza la blockchain de Core para desincentivar el mal comportamiento de los validadores. Comprender cómo funcionan estos mecanismos ayuda a entender mejor la estructura de incentivos del ecosistema Core.

## Slashing y Jailing

**Slashing** se refiere al recorte de las recompensas que un validador habría recibido por producir bloques, o al recorte del depósito de tokens CORE que un nodo realiza para convertirse en validador. La severidad de la penalización por slashing aumenta proporcionalmente con la magnitud del mal comportamiento del validador.

Generalmente se incurre en sanciones de reducción porque un nodo no logra producir con éxito un bloque durante su turno designado en el procedimiento de **minería de bloques por turnos** como se describe en la sección [Elección del Validadores](../validator/validator-election.md). Si un nodo validador no logra minar **50 bloques** consecutivos, las recompensas en tokens CORE que ha acumulado hasta ese momento se eliminan completamente. Esto significa que importa cuando un validador no logra minar **50** bloques consecutivos. Si falla en los primeros **50** bloques de una ronda, pierde solo una pequeña parte de las recompensas acumuladas pero si falla en los últimos **50** bloques de la ronda, pierde todas las recompensas obtenidas en esa ronda. Si un validador no logra minar **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el **10 %** del depósito realizado para convertirse en validador y es jailed por **tres** días, lo que significa que no son elegibles para ser elegidos para el conjunto de validadores.

## Sugerencias de Slashing

Los verificadores son responsables de reportar comportamientos maliciosos en la red a través de sugerencias de slashing. Estas sugerencias pueden ser enviadas por cualquier persona y están diseñadas para castigar a los actores maliciosos. La presentación requiere pruebas de la mala conducta, pero si las acusaciones resultan ser verdaderas, las recompensas obtenidas superan significativamente los costos.

Al igual que con las sugerencias de slashing, los verificadores también son responsables de reportar casos de double signing y deben presentar evidencia de esta actividad. Si las acusaciones son comprobadas, son recompensados por mantener la red segura.

Durante la producción de bloques, los validadores actuales de Core revisan periódicamente si algún validador ha sido jailed. Si es el caso, actualizan el conjunto de validadores después de un epoch (es decir, tras 10 minutos). El mecanismo de jailing está diseñado para excluir a validadores maliciosos de las actividades de consenso, lo cual aumenta la seguridad de la red y mantiene un rendimiento estable en TPS.

## Penalización por Double Signing

Existe una forma en que un validador puede ser expulsado permanentemente de la red: mediante “_double signing_”, es decir, firmar dos bloques distintos con la misma altura de bloque. Mientras que la inactividad puede atribuirse razonablemente a una mala conexión de red, la doble firma constituye una prueba sólida de mala conducta intencional. En teoría, es posible que se produzca una doble firma benigna si un validador actualiza la versión de la red que está ejecutando y olvida actualizar su dirección. Asegúrese de ser diligente al realizar actualizaciones de red. Los validadores que sean sorprendidos haciendo doble firma pierden todas sus recompensas, el 100% de su depósito como validador, y además quedan permanentemente excluidos de participar en la producción de bloques.