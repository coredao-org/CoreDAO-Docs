---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Aperçu

Le double staking fait référence au staking simultané de Bitcoin et de tokens CORE, avec des ratios de staking CORE-Bitcoin plus élevés permettant d'accéder à des niveaux de rendement plus élevés. **Plus il y a de CORE misés par rapport au Bitcoin, plus le potentiel de rendement est élevé**. Ainsi, des taux de staking Bitcoin attractifs sont perpétuellement disponibles pour les participants les plus alignés sur Core, encourageant les stakers Bitcoin à miser également des CORE - ce qui aligne les incitations et renforce la sécurité du réseau.

Le double staking crée un **avantage mathématique** dans le système de distribution de récompenses de Core en reconnaissant que la participation double apporte une plus grande valeur de sécurité au réseau que chaque mécanisme isolé, avec des rendements maximaux environ 25 à 50 fois plus élevés que le staking Bitcoin seul.

**Consultez les taux de rendement en direct sur [stake.coredao.org/staking](https://stake.coredao.org/staking)**

## Comment fonctionne le Dual Staking

### 1. La participation double

Le double staking nécessite une participation simultanée à deux branches du consensus tripartite Satoshi Plus de Core :

**Conception du staking de Bitcoin en auto-garde):**

- Verrouiller Bitcoin dans le temps en utilisant CLTV (CheckLockTimeVerify) sur la blockchain Bitcoin
- Inclure les métadonnées de vote du validateur dans la transaction de verrouillage temporel
- Maintenir la pleine auto-garde de Bitcoin tout au long du processus

**Le Delegated Proof of Stake (DPoS) avec délégation de jetons CORE:**

- Déléguer des tokens CORE à des validateurs sur le réseau Core
- Soutenir les mêmes validateurs ou des validateurs différents de ceux choisis pour le staking de Bitcoin

### 2. Système de rendement à plusieurs niveaux

Le protocole utilise un **système de multiplicateurs basé sur les niveaux** pour augmenter les récompenses de staking Bitcoin pour les Dual Stakers:

| **Tier**         | **CORE-to-Bitcoin Ratio (R)** | **Label**           | **Description**                              |
| ---------------- | ------------------------------------------------ | ------------------- | -------------------------------------------- |
| **Base Tier**    | R < R₁                  | P<sub>Base</sub>    | Aucune délégation de CORE                    |
| **Boost Tier**   | R₁ ≤ R < R₂             | P<sub>Boost</sub>   | Niveau d'entrée de double staking            |
| **Super Tier**   | R₂ ≤ R < R₃             | P<sub>Super</sub>   | Ratio CORE-Bitcoin plus élevé                |
| **Satoshi Tier** | R ≥ R₃                                           | P<sub>Satoshi</sub> | Niveau le plus élevé ; récompenses maximales |

- Les seuils de niveau (R₁, R₂, R₃) sont dynamiques et s'ajustent en fonction des conditions du réseau.
- Les niveaux supérieurs débloquent des **multiplicateurs de récompenses** de plus en plus élevés.

### 3. Exemple de calcul

Supposons que vous stakiez **10 Bitcoin**.

Si les ratios de niveau sont définis comme :

- **R₁ = 3,625 CORE/Bitcoin**
- **R₂ = 10,875 CORE/Bitcoin**
- **R₃ = 29,000 CORE/Bitcoin**

Alors vos seuils seraient :

| **Tier**     | **CORE requis** |
| ------------ | --------------- |
| Boost Tier   | 36,250 CORE     |
| Super Tier   | 108,750 CORE    |
| Satoshi Tier | 290,000 CORE    |

Votre niveau de récompense est déterminé par la quantité de CORE que vous avez déléguée par rapport à vos Bitcoin stakés.

## Avantages

**Rendements améliorés:**

- Atteindre des rendements environ 25 à 50 fois supérieurs à ceux du staking solo de Bitcoin
- Accédez à des récompenses durables et natives au protocole
- Bénéficiez à la fois des émissions fixes et des revenus des frais de transaction

**Considérations de risque :**

- Le principal Bitcoin reste complètement sécurisé sans nouvelles hypothèses de confiance
- La délégation de CORE fonctionne sous les mêmes hypothèses de confiance que le DPoS (Delegated Proof of Stake)
- Le staking double ne change pas la façon dont vous stakez, juste la façon dont vous êtes récompensé

## Best Practices

- **Monitor tier thresholds** regularly—they adjust based on participation
- **Track validator performance** to maximize uptime and yield
- **Diversify validator selection** to reduce dependency on a single provider

## Yield Sustainability

- Tiers adjust **dynamically** to maintain attractive yields
- The protocol balances accessibility with long-term sustainability by adapting to market conditions and participation levels

## Why It Matters

Dual Staking unlocks sustainably attractive yields for Bitcoin stakers who are most committed to Core, as represented by their CORE staking relative to Bitcoin. The system incentivizes Bitcoin holders to become CORE holders, thereby aligning the two ecosystems and creating stronger network effects as both assets work together to secure and grow the Core network.

**Start Dual Staking at stake.coredao.org**

:::info
Please refer to the [Dual Staking FAQ section](../../../FAQs/dual-staking-faqs.md) for further questions or clarifications. Pour un support supplémentaire, vous pouvez diriger vos questions vers le [Forum des développeurs de Core](http://forum.coredao.org) ou le [Serveur Discord de Core](https://discord.gg/M2AGJKSG).\
:::
