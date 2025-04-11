---
sidebar_label: Tarifa de reducción
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
- If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose **10%** of the deposit made to become a validator, i.e., 1,000 CORE, and they are jailed for **three** days, which means they aren’t eligible to be elected to the validator set.

## Doble signo

Anyone can submit a slash request with the evidence of double signing activity on the Core blockchain.

### Validación de evidencia

- Dos encabezados de bloque tienen la misma altura y el mismo hash de bloque principal
- Dos encabezados de bloque están sellados por el mismo validador
- Dos firmas de estos dos bloques no deben ser iguales.
- El validador debe estar en el conjunto de validadores de la ronda actual.

Si la evidencia es válida:

1. **10,000 CORE** i.e., the entire self-margined CORE of the validator will be slashed.
2. El validador recortado sería encarcelado y excluido de la red para siempre.
3. **500** de CORE recortado se asignarían al remitente como recompensa
4. El resto del CORE recortado se transferirá al fondo de recompensas del sistema.

