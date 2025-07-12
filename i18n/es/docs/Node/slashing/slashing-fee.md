---
sidebar_label: Tarifa de Slashing
hide_table_of_contents: false
sidebar_position: 2
---

# Tarifa de reducción

---

## Indisponibilidad

Generalmente se incurre en sanciones de reducción porque un nodo no logra producir con éxito un bloque durante su turno designado en el procedimiento de **minería de bloques por turnos** como se describe en [Elección del validador](../validator/validator-election.md) sección.

- Si un nodo validador no logra minar **50 bloques** seguidos, las recompensas de tokens CORE que el validador ha acumulado hasta el momento se reducen por completo.
- Si un nodo de validación no logra extraer los primeros **49 bloques** en una ronda y luego pierde el último bloque de la misma ronda, esto dará lugar a una reducción de todas las recompensas de tokens CORE que el validador ha acumulado hasta el momento.
- Si fallan en los últimos **50** bloques de la ronda, entregarán todo lo que han ganado.
- Si un validador no logra extraer **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el **10 %** del depósito realizado para convertirse en validador (ej: 1,000 CORE) y es encarcelado por **tres** días, lo que significa que no son elegibles para ser elegidos para el conjunto de validadores.

## Doble signo

Cualquiera puede enviar una solicitud de slash con evidencia de una actividad de doble firma en la blockchain de Core.

### Validación de evidencia

- Dos encabezados de bloque tienen la misma altura y el mismo hash de bloque principal
- El mismo validador ha sellado dos encabezados de bloque diferentes
- Dos firmas de estos dos bloques no deben ser iguales.
- El validador debe estar en el conjunto de validadores de la ronda actual.

Si la evidencia es válida:

1. **10,000 CORE** (es decir, la totalidad del CORE auto-garantizado del validador) será slasheado.
2. El validador recortado sería encarcelado y excluido de la red para siempre.
3. **500** de CORE recortado se asignarían al remitente como recompensa
4. El resto de los tokens CORE penalizados se transfiere al System Reward Pool