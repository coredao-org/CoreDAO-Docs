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
- Si un validateur ne parvient pas à miner 150 blocs d'affilée, il abandonne sa part des récompenses quotidiennes en jetons CORE, il perd 10 % du dépôt effectué pour devenir validateur, c'est-à-dire 1 000 CORE, et il est emprisonné pendant trois jours, ce qui signifie qu'il n'est pas éligible pour être élu dans l'ensemble des validateurs.

## Double Signature

N'importe qui peut soumettre une demande de slash avec la preuve d'une activité de double signature sur la blockchain Core.

### Validation des preuves

- Deux en-têtes de bloc ont la même hauteur et le même hash de bloc parent
- Le même validateur scelle deux en-têtes de bloc
- Les signatures des deux blocs ne doivent pas être identiques
- Le validateur doit faire partie de l'ensemble des validateurs du round en cours.

Si la preuve est valide :

1. 10 000 CORE, soit la totalité des CORE auto-jugés du validateur, sera réduite.
2. Le validateur puni sera emprisonné et exclu du réseau pour toujours
3. **500 tokens CORE** seront attribués au soumetteur de la demande comme récompense
4. Le reste des tokens CORE sera transféré dans le pool de récompenses du système