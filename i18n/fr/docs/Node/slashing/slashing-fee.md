---
sidebar_label: Frais de pénalisation (Slashing Fees)
hide_table_of_contents: false
sidebar_position: 2
---

# Frais de pénalisation (Slashing Fees)

---

## Indisponibilité

Les pénalités de slashing sont généralement appliquées lorsqu'un nœud ne parvient pas à produire un bloc pendant son tour désigné dans la procédure de minage en round-robin, comme décrit dans la section [Élection des validateurs](../validator/validator-election.md).

- Si un validateur ne parvient pas à miner **50 blocs** consécutifs, les récompenses en tokens CORE accumulées sont complètement supprimées.
- Si un nœud validateur ne parvient pas à miner les **49 premiers blocs** d'un tour, puis manque le dernier bloc du même tour, cela entraînera le slashing de l'ensemble des récompenses en tokens CORE que le validateur a accumulées jusqu'à présent.
- S'il échoue dans les **50** derniers blocs du round, il perd tout ce qu'il a gagné.
- If a validator fails to mine **150 blocks** in a row, they surrender their share of the daily CORE token rewards, they lose **10%** of the deposit made to become a validator, i.e., 1,000 CORE, and they are jailed for **three** days, which means they aren’t eligible to be elected to the validator set.

## Double Signature

Anyone can submit a slash request with the evidence of double signing activity on the Core blockchain.

### Validation des preuves

- Deux en-têtes de bloc ont la même hauteur et le même hash de bloc parent
- Les deux en-têtes de bloc sont scellés par le même validateur
- Les signatures des deux blocs ne doivent pas être identiques
- Le validateur doit faire partie de l'ensemble des validateurs du round en cours.

Si la preuve est valide :

1. **10,000 CORE** i.e., the entire self-margined CORE of the validator will be slashed.
2. Le validateur puni sera emprisonné et exclu du réseau pour toujours
3. **500 tokens CORE** seront attribués au soumetteur de la demande comme récompense
4. Le reste des tokens CORE sera transféré dans le pool de récompenses du système

