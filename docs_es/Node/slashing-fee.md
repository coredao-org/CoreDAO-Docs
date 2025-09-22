---
sidebar_label: Tarifa de reducción
hide_table_of_contents: false
sidebar_position: 2
---

# Tarifa de reducción

---

## Indisponibilidad

Generalmente se incurre en sanciones de reducción porque un nodo no logra producir con éxito un bloque durante su turno designado en el procedimiento de **minería de bloques por turnos** como se describe en [Elección del validador](../validator/validator-election.md) sección.

- Generalmente se incurre en sanciones de reducción porque un nodo no logra producir con éxito un bloque durante su turno designado en el procedimiento de **minería de bloques por turnos** como se describe en [Elección del validador](../validator/validator-election.md) sección.
- If a validator node fails to mine the first **49 blocks** in a round, and then misses the last block of the same round, this will lead to slashing of the entire CORE token rewards the validator has accrued so far.
- Si fallan en los últimos **50** bloques de la ronda, entregarán todo lo que han ganado.
- Si un validador no logra extraer **150 bloques** seguidos, entrega su parte de las recompensas diarias de tokens CORE, pierde el **10 %** del depósito realizado para convertirse en validador y es encarcelado por \* _tres_\* días, lo que significa que no son elegibles para ser elegidos para el conjunto de validadores.

## Doble signo

Cualquiera puede enviar una solicitud de barra diagonal en CoreChain con la evidencia de Double Sign de CoreChain.

### Validación de evidencia

- Dos encabezados de bloque tienen la misma altura y el mismo hash de bloque principal
- Dos encabezados de bloque están sellados por el mismo validador
- Dos firmas de estos dos bloques no deben ser iguales.
- El validador debe estar en el conjunto de validadores de la ronda actual.

Si la evidencia es válida:

1. **1000 CORE** se eliminarían del CORE con margen propio del validador
2. El validador recortado sería encarcelado y excluido de la red para siempre.
3. **500** de CORE recortado se asignarían al remitente como recompensa
4. El resto del CORE recortado se transferirá al fondo de recompensas del sistema.
