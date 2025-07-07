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

**Conception du staking de Bitcoin en auto-garde:**

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

## Bonnes pratiques

- **Surveillez régulièrement les seuils de palier**—ils s'ajustent en fonction de la participation
- **Suivez les performances des validateurs** pour maximiser la disponibilité et les rendements
- **Diversifiez la sélection des validateurs** pour réduire la dépendance à l'égard d'un seul fournisseur

## Durabilité du rendement

- Les paliers s'ajustent **dynamiquement** pour maintenir des rendements attractifs
- Le protocole équilibre l'accessibilité avec la durabilité à long terme en s'adaptant aux conditions de marché et aux niveaux de participation

## Pourquoi est-ce important

Le staking double offre des rendements attractifs et durables pour les stakers Bitcoin les plus engagés envers Core, comme représenté par leur staking de CORE par rapport au Bitcoin. Le système incite les détenteurs de Bitcoin à devenir détenteurs de CORE, alignant ainsi les deux écosystèmes et créant des effets de réseau plus forts à mesure que les deux actifs travaillent ensemble pour sécuriser et développer le réseau Core.

**Commencez le staking double sur stake.coredao.org**

:::info
Veuillez vous référer à la [section FAQ sur le Dual Staking](../../../FAQs/dual-staking-faqs.md) pour d'autres questions ou clarifications. Pour un support supplémentaire, vous pouvez diriger vos questions vers le [Forum des développeurs de Core](http://forum.coredao.org) ou le [Serveur Discord de Core](https://discord.gg/M2AGJKSG).
:::
