---
sidebar_label: Récompenses
hide_table_of_contents: false
sidebar_position: 2
description: Récompenses dans l'écosystème Core
---

# Récompenses de consensus

---

## Aperçu

Le système de récompense du réseau Core est un composant fondamental du **consensus Satoshi Plus**, alignant les incitations entre les mineurs, les stakers, les validateurs, les relais et les vérificateurs. Grâce à ce système, les participants sont indemnisés pour contribuer à la sécurité, à la décentralisation et à la gouvernance du réseau.

Les récompenses sont réparties entre quatre catégories principales :

1. Minage (DPoW)
2. Staking (CORE et Bitcoin)
3. Opérations de validation
4. Rôles au niveau système (Relais et Vérificateurs)

## 1. Récompenses de minage (Preuve de travail déléguée)

**Qui gagne**: Les mineurs Bitcoin et les pools de minage

**Mécanisme**:

- Les mineurs incluent des métadonnées de délégation de validation dans les blocs Bitcoin qu'ils exploitent.
- Cela leur permet d'étendre leur soutien à Core sans détourner de ressources du minage de Bitcoin.
- En retour, les mineurs gagnent des **jetons CORE** en tant que récompenses supplémentaires.

## 2. Récompenses de staking (CORE & Bitcoin)

**Qui gagne**: Les détenteurs de tokens CORE ou de Bitcoin

**Mécanisme**:

- Les participants délèguent des tokens CORE ou du Bitcoin verrouillé dans le temps aux validateurs.
- Le pouvoir de vote est proportionnel au nombre de tokens Core délégués.
- Les récompenses sont distribuées en fonction des performances du validateur et de la part du participant dans la délégation totale.

Les récompenses du staking encouragent une participation à long terme et donnent aux délégateurs une influence sur la sélection des validateurs.

## 3. Récompenses des validateurs

**Qui gagne**: Les validateurs ainsi que leurs délégateurs(miners, CORE stakers, Bitcoin stakers)

**Mécanisme**:

- Les validateurs gagnent à partir de deux sources :
  - **Récompenses de bloc**, c'est-à-dire des jetons CORE nouvellement frappés
  - **Frais de transaction**: Collectés à partir de chaque bloc traité
- Les récompenses sont calculées et distribuées à la **fin de chaque tour** (200 blocs / ~1 jour)

**Partage des Récompenses**:

- **90%** des récompenses vont aux validateurs (ainsi qu'à leurs délégateurs et votants)
- **10%** est alloué au **Contrat de Récompense Système**
- Les validateurs prélèvent une commission avant de distribuer les récompenses restantes à leurs délégateurs

Les validateurs sont incités à offrir des parts de récompenses compétitives pour attirer les délégateurs.

## 4. Formule de distribution des récompenses

Après la commission du validateur, le protocole calcule les récompenses des délégateurs en fonction du type de contribution :

#### Délégateurs de Puissance de Hachage (Mineurs et Pools de Minage)

$$
    rH = \frac{\frac{rHp}{tHp} * m} {S} * R
$$

#### Stakers CORE

$$
    rS = \frac{\frac{rSp}{tSp} * k} {S} * R
$$

#### Stakers de Bitcoin

$$
    rB = \frac{\frac{rBp}{tBp} * l} {S} * R
$$

Où:

- $$rH$$: Récompenses attribuées à la puissance de hachage déléguée (DPoW).
- $$rS$$: Récompenses attribuées au staking de CORE (DPoS).
- $$rB$$: Récompenses attribuées au staking de BTC.
- $$R$$: Récompenses totales allouées à l’ensemble des délégateurs.
- $$m$$: Proportion des récompenses allouées à la puissance de hachage.
- $$k$$: Proportion des récompenses allouées au staking de CORE.
- $$l$$: Proportion des récompenses allouées au staking de BTC.
- $$S$$: Score hybride du validateur.

## 5. Calculs de récompense par unité

Les calculs de récompense par unité déterminent la part de récompenses distribuée pour chaque unité de puissance de hachage, de CORE ou de BTC stakée :

- **Récompense par unité de puissance de hachage:** $$rHu$$ = $$\frac{rH}{rHp}$$
- **Récompense par unité de CORE:** $$rSu$$ = $$\frac{rS}{rSp}$$
- **Récompense par unité de BTC:** $$rBu$$ of **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x Yield Multiplier for Level<sub>n</sub>

Où:

- $$rHu$$ est la récompense de puissance de hachage par unité pour le validateur ;
- $$rSu$$ est la récompense de staking de tokens CORE par unité ;
- $$rBu$$ de **P<sub>n</sub>** désigne la récompense de staking BTC par unité pour un délégateur possédant le niveau de rendement PN BTC
- **Multiplicateurs de rendement :** Chaque niveau de rendement (boosted yield level) possède un multiplicateur spécifique (e, f, g, h, ..., etc), déterminé à la fois par les données de staking de l’utilisateur et par la configuration du dual staking au niveau du système. Les paramètres sont définis dynamiquement par la gouvernance et récompensent les utilisateurs pour l'appariement du staking CORE et Bitcoin.

## 6. Impact du double staking sur les récompenses Bitcoin

Les récompenses de staking Bitcoin sont échelonnées en fonction de la quantité de CORE qu'un délégateur a mis en staking par rapport à sa délégation Bitcoin.

- Les niveaux supérieurs (par exemple, le niveau Satoshi) reçoivent des multiplicateurs de récompense plus élevés
- Cela crée une **incitation axée sur le marché** pour associer CORE à Bitcoin afin de booster les rendements

En savoir plus sur [Dual Staking](../dual-staking/overview.md).

## 7. Stratégies d'optimisation des récompenses

Les délégateurs sont incités à :

- Choisir des validateurs avec des **pools de délégation plus petits**, où leur mise représente un pourcentage plus important
- Rechercher des validateurs avec des **frais de commission plus bas**
- Équilibrer le staking entre les validateurs sous-souscrits pour maximiser le rendement marginal

Cette dynamique favorise des décisions de délégation actives et une concurrence entre validateurs.

## 8. Récompenses des Relayeurs et Vérificateurs

### Relayeurs

- Relayer les données de blocs et de transactions Bitcoin vers Core
- Rémunéré par le **contrat de récompense système**
- Les récompenses sont regroupées tous les **100 blocs Bitcoin**
- Réclamées périodiquement par les relayers

### Vérificateurs

- Surveiller les validateurs pour détecter les comportements malveillants (par exemple, la double signature)
- Lorsque les vérificateurs soumettent des rapports valides, des récompenses sont émises immédiatement par le contrat de récompense système

**Remarque:** Le **contrat de récompense système** est plafonné à **10 millions de jetons CORE**. Tout débordement est **brûlé**, ce qui rend la participation excessive déflationniste.

## Conclusion

<p align="center">![rewards](../../../../../../../static/img/validator/Rewards-In-Core-Ecosystem.png)</p>

Le système de récompense de Core incite et aligne correctement **les mineurs, les stakers, les validateurs et les rôles d'infrastructure**. Grâce à un système transparent et configurable, les récompenses stimulent la sécurité, la décentralisation et une participation communautaire durable à travers le consensus Satoshi Plus.
