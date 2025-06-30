---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Aperçu du Staking

---

Le staking constitue les 2/3 du consensus Satoshi Plus de Core, permettant aux détenteurs de Bitcoin et de tokens CORE de sécuriser le réseau et de gagner des récompenses. Core prend en charge deux formes distinctes de staking:

- **Staking Bitcoin auto-géré**, qui utilise le verrouillage temporel natif de Bitcoin pour permettre aux détenteurs de Bitcoin de voter pour les validateurs Core sans renoncer à la garde de leurs fonds
- **Staking de tokens CORE**, qui permet aux détenteurs de tokens CORE de déléguer leur mise à des validateurs en tant que vote, soutenant ainsi la sécurité et la gouvernance du réseau

## Comment fonctionne le Staking

Core prend en charge deux méthodes de staking sans confiance, chacune contribuant à l'élection des validateurs et à la distribution des récompenses. Chaque méthode vous permet de soutenir les validateurs et de gagner des récompenses en tokens CORE en retour.

### Staking Non-Custodial de Bitcoin

Les détenteurs de Bitcoin peuvent staker de manière native sans enveloppement, pontage ou abandon de la garde. Ceci est réalisé en utilisant l'opcode CheckLockTimeVerify (CLTV) de Bitcoin.

**Étape:**

1. **Verrouillez vos Bitcoins** Utilisez CLTV pour bloquer une quantité spécifique de BTC pendant une période fixe (minimum : 24 heures). Pendant cette période, le Bitcoin est complètement non dépensable.
2. **Spécifier le validateur et l'adresse de récompense** Lors de la création de la transaction de verrouillage temporel, intégrer des métadonnées qui :
   - Indiquez quel validateur Core vous souhaitez soutenir
   - Spécifie une adresse Core pour recevoir vos récompenses CORE
3. **Diffusion de la transaction Bitcoin** Une fois confirmée sur le réseau Bitcoin, le verrouillage temporel est scanné et enregistré par le réseau de relais de Core.
4. **Gagnez des récompenses** Si votre validateur sélectionné est élu et participe activement, vous recevrez une partie de leurs récompenses CORE. Ces récompenses sont envoyées à l'adresse Core que vous avez fournie.
5. \*\* Déverrouillage après expiration\*\* Après la fin de la période de verrouillage, vos Bitcoins redeviennent dépensables. Pour continuer le staking, vous devez créer un nouveau verrouillage temporel.

### Staking de tokens CORE (Preuve de participation déléguée)

Les détenteurs de tokens CORE peuvent miser en déléguant leurs tokens aux validateurs comme votes.

**Étape:**

1. **Sélectionnez un validateur** Examinez les performances, les taux de commission et l'historique des validateurs pour décider à qui déléguer vos tokens Core.
2. **Déléguez des tokens CORE** Choisissez la quantité de tokens CORE que vous souhaitez déléguer au validateur sélectionné.
3. **Gagnez des récompenses** Si votre validateur sélectionné est élu et participe activement, vous recevrez une partie de leurs récompenses CORE. Ces ci sont envoyées à l'adresse Core que vous avez fournie.
4. **Modifier ou redéléguer** Vous pouvez modifier votre délégation à tout moment, notamment en changeant le montant ou en déplaçant votre participation vers un autre validateur.

## Élection des Validateurs

La sélection des validateurs est basée sur un **score hybride**, en considérant:

- **Le verrouillage temporel de Bitcoin** via CLTV)
- **Tokens CORE délégués** (via DPoS)
- **Puissance de hachage Bitcoin déléguée** (via Preuve de travail déléguée)

À chaque tour d'élection, les validateurs ayant les scores hybrides les plus élevés sont sélectionnés pour valider les transactions et produire des blocs.

Plus un validateur reçoit de soutien via le staking de Bitcoin et de CORE, plus sa probabilité d'être élu est élevée.

## Récompenses et économie de staking

### Reward Sources

- **Block Rewards**: New CORE tokens are issued on a fixed schedule over 81 years, with a 3.61% annual reduction.
- **Transaction Fees**: A portion of transaction fees on Core is distributed to validators and their delegators.

### Distribution

- Bitcoin stakers and CORE stakers receive rewards when their chosen validators are active and performing.
- Rewards are distributed based on proportional stake and validator commission structures.

## Dual Staking

Dual Staking refers to staking both Bitcoin and CORE tokens simultaneously, with higher CORE-to-Bitcoin staking ratios earning access to higher tiers of yield. **The more CORE staked relative to Bitcoin, the higher the yield potential.** Thus, attractive Bitcoin staking rates are perpetually available to the most Core-aligned participants, encouraging Bitcoin stakers to also stake CORE—aligning incentives and strengthening network security.

Dual Staking creates a **mathematical advantage** in Core's reward distribution system by recognizing dual participation as providing greater security value to the network than either mechanism in isolation, with max yields ~25-50x higher than Bitcoin staking alone.
