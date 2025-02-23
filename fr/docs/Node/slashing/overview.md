---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Régulation des Validateurs

**Slashing** et **jailing** sont les deux mécanismes de base utilisés par la blockchain Core pour décourager les comportements inappropriés des validateurs. Comprendre leur fonctionnement est essentiel pour saisir la structure incitative de l'écosystème Core.

## Slashing et Jailing

Le terme "slashing" désigne soit la réduction des récompenses qu’un validateur aurait reçues pour avoir miné des blocs, soit la réduction du dépôt de tokens CORE effectué par un nœud pour devenir validateur. La gravité de la pénalité de slashing est proportionnelle à la gravité du comportement fautif du validateur.

Les pénalités de slashing sont généralement infligées lorsqu'un nœud ne parvient pas à produire un bloc pendant son tour dans la **procédure de minage de blocs en rotation** comme décrit dans la section de L'[Élection d'un Validateur](../validator/validator-election.md). Si un validateur ne parvient pas à miner **50 blocs** consécutifs, les récompenses en tokens CORE accumulées sont complètement supprimées. Cela signifie qu'il est important de savoir quand un validateur échoue à miner **50** blocs consécutifs. S'il échoue lors des **50** premiers blocs d'un cycle, il renonce seulement à une petite partie des récompenses accumulées. Si un validateur échoue à miner **150 blocs** d'affilée, il perd sa part des récompenses quotidiennes en tokens CORE, il perd **10 %** du dépôt effectué pour devenir validateur, et il est jail (incarcéré) pendant **trois** jours, ce qui signifie qu'il n'est plus éligible pour être élu dans l'ensemble des validateurs pendant cette période.

## Suggestions de Slashing

Les vérificateurs sont responsables de signaler les comportements malveillants sur le réseau via des suggestions de slashing. Ces suggestions peuvent être soumises par n'importe qui, et visent à punir les acteurs malveillants. La soumission de ces suggestions nécessite des preuves solides, mais si elles s'avèrent vraies, les récompenses obtenues dépassent largement les coûts.

Les vérificateurs doivent également signaler les cas de double signature, en fournissant des preuves de cette activité. S'ils ont raison, ils sont récompensés pour avoir assuré la sécurité du réseau.

Lorsque les validateurs de Core produisent des blocs, ils vérifient régulièrement si un validateur a été mis emprisonné. Si c'est le cas, l'ensemble des validateurs est mis à jour après une époque (c'est-à-dire après 10 minutes). L'emprisonnement exclut les validateurs malveillants des activités de consensus afin d'améliorer la sécurité du réseau et de maintenir une bonne vitesse de transaction par seconde (TPS).

## Pénalité pour Double Signature

Il existe un moyen pour qu'un validateur soit définitivement banni du réseau, et cela se produit par le "_double signing_" (double signature), c'est-à-dire la signature de deux blocs différents à la même hauteur de bloc. Alors que l'indisponibilité peut être due à une mauvaise connexion réseau, la double signature est une preuve claire de malveillance intentionnelle. Théoriquement, une double signature bénigne peut se produire si un validateur met à jour la version du réseau qu'il exécute et oublie de mettre à jour son adresse. Il est donc important d'être rigoureux lors des mises à jour du réseau. Les validateurs pris en flagrant délit de double signature perdent toutes leurs récompenses, 100 % de leur dépôt de validateur, et sont ensuite définitivement exclus de la participation au minage des blocs.
