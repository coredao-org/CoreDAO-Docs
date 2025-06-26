---
sidebar_label: Système d'ajustement des paliers(Tier)
hide_table_of_contents: false
sidebar_position: 2
---

# Système d'ajustement des paliers(Tier)

---

## Aperçu

Le système d'ajustement des paliers de Core maintient des rendements durables et attractifs pour les participants au staking double grâce à une gestion dynamique des exigences de ratio CORE-Bitcoin. Le système est conçu pour équilibrer l'attractivité des rendements avec l'accessibilité des paliers, garantissant que les participants les plus alignés avec Core reçoivent des récompenses constamment favorables.

## Comment fonctionnent les ajustements de palier

### Mécanisme principal

Le levier le plus important utilisé par Core est l'ajustement de **l'exigence de ratio CORE-Bitcoin** pour accéder au palier Satoshi et aux autres paliers de rendement.

### Déclencheurs d'ajustement

**Lorsque trop de participants sont admissibles au palier Satoshi**

- Le même pool de récompenses est divisé entre davantage de participants
- Les rendements individuels diminuent pour tous les participants au palier Satoshi
- Le protocole augmente l'exigence de ratio CORE-Bitcoin
- Moins de participants sont admissibles, ce qui augmente les rendements pour les participants restants

**Lorsque trop peu de participants sont admissibles au palier Satoshi**

- Les rendements deviennent très attractifs, mais hautement inaccessibles
- Des barrières élevées limitent la participation à un petit sous-ensemble de stakers
- Le protocole abaisse l'exigence de ratio CORE-Bitcoin
- Plus de participants ont accès, ce qui crée une distribution de rendements plus équilibrée

## Les facteurs clés influençant les ajustements

Plusieurs variables déterminent quand et comment les exigences de palier changent :

- **Niveaux de participation**: Combien de participants sont admissibles à chaque palier
- **Prix actuels des actifs**: Prix de marché actuels de CORE et Bitcoin
- **Distribution du pool de récompenses**: Comment les récompenses sont réparties entre les différents paliers
- **Objectifs d'alignement du réseau**: Maintenir les incitations pour les participants engagés envers Core

## Exemples pratiques

### Scénario 1 : Augmentation des exigences

1. L'adoption du staking dual augmente considérablement
2. De nombreux nouveaux participants se qualifient pour le niveau Satoshi
3. Les rendements individuels diminuent en raison de la dilution du pool de récompenses
4. Le protocole augmente l'exigence CORE-Bitcoin pour le niveau Satoshi
5. Certains participants rétrogradent à des niveaux inférieurs
6. Les participants restants du niveau Satoshi voient une récupération de leur rendement

### Scénario 2 : Réduction des exigences

1. Les conditions de marché rendent le niveau Satoshi très exclusif
2. Seul un petit nombre de participants se qualifient
3. Rendements élevés mais accessibilité limitée
4. Le protocole abaisse l'exigence de ratio CORE-Bitcoin
5. Plus de participants accèdent au niveau Satoshi
6. Les rendements deviennent plus équilibrés sur une base de participants plus large

## Impact sur les participants

### Pour les participants existants du niveau Satoshi

- Doivent peut-être augmenter leurs avoirs en CORE pour maintenir leur statut de niveau
- Profitent de rendements plus élevés lorsque les exigences augmentent
- Incités à maintenir des ratios CORE-Bitcoin solides

### For Lower Tier Participants

- May gain access to higher tiers when requirements decrease
- Motivated to acquire more CORE tokens for tier advancement
- Can plan CORE accumulation strategies around adjustment patterns

## Monitoring Adjustments

Participants can track tier requirement changes and their impact through:

- **Live monitoring** at [stake.coredao.org/staking](https://stake.coredao.org/staking)
- **Announcements** via official Core channels

## Why It Matters

The tier adjustment system ensures that Core's Dual Staking mechanism remains economically sustainable and continues to incentivize the behavior most beneficial to the network: Bitcoin stakers becoming CORE stakers and demonstrating long-term commitment to the Core ecosystem. This creates a self-reinforcing cycle where network growth supports participant rewards, and participant rewards drive network growth.
