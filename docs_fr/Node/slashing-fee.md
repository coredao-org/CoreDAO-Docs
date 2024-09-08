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
- S'il échoue dans les **50** derniers blocs du round, il perd tout ce qu'il a gagné.
- Si un validateur échoue à miner **150 blocs** d'affilée, il perd sa part des récompenses quotidiennes en tokens CORE, il perd **10 %** du dépôt effectué pour devenir validateur, et il est jail (incarcéré) pendant **trois** jours, ce qui signifie qu'il n'est plus éligible pour être élu dans l'ensemble des validateurs pendant cette période.

## Double Signature

Toute personne peut soumettre une demande de slashing sur CoreChain avec une preuve de double signature (Double Sign) sur CoreChain.

### Validation des preuves

- Deux en-têtes de bloc ont la même hauteur et le même hash de bloc parent
- Les deux en-têtes de bloc sont scellés par le même validateur
- Les signatures des deux blocs ne doivent pas être identiques
- Le validateur doit faire partie de l'ensemble des validateurs du round en cours.

Si la preuve est valide :

1. **1 000 tokens CORE** seront retirés du CORE auto-marginalisé du validateur
2. Le validateur puni sera emprisonné et exclu du réseau pour toujours
3. **500 tokens CORE** seront attribués au soumetteur de la demande comme récompense
4. Le reste des tokens CORE sera transféré dans le pool de récompenses du système
