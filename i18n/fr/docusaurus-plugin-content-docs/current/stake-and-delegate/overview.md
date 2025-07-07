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
5. **Déverrouillage après expiration** Après la fin de la période de verrouillage, vos Bitcoins redeviennent dépensables. Pour continuer le staking, vous devez créer un nouveau verrouillage temporel.

### Staking de tokens CORE (Preuve de participation déléguée)

Les détenteurs de tokens CORE peuvent miser en déléguant leurs tokens aux validateurs comme votes.

**Étape:**

1. **Sélectionnez un validateur** Examinez les performances, les taux de commission et l'historique des validateurs pour décider à qui déléguer vos tokens Core.
2. **Déléguez des tokens CORE** Choisissez la quantité de tokens CORE que vous souhaitez déléguer au validateur sélectionné.
3. **Gagnez des récompenses** Si votre validateur sélectionné est élu et participe activement, vous recevrez une partie de leurs récompenses CORE. Ces ci sont envoyées à l'adresse Core que vous avez fournie.
4. **Modifier ou redéléguer** Vous pouvez modifier votre délégation à tout moment, notamment en changeant le montant ou en déplaçant votre participation vers un autre validateur.

## Élection des Validateurs

La sélection des validateurs est basée sur un **score hybride**, en considérant:

- **Le verrouillage temporel de Bitcoin** via CLTV
- **Tokens CORE délégués** (via DPoS)
- **Puissance de hachage Bitcoin déléguée** (via Preuve de travail déléguée)

À chaque tour d'élection, les validateurs ayant les scores hybrides les plus élevés sont sélectionnés pour valider les transactions et produire des blocs.

Plus un validateur reçoit de soutien via le staking de Bitcoin et de CORE, plus sa probabilité d'être élu est élevée.

## Récompenses et économie de staking

### Sources de récompense

- **Récompenses de bloc**: De nouveaux tokens CORE sont émis selon un calendrier fixe sur 81 ans, avec une réduction annuelle de 3,61 %.
- **Frais de transaction**: Une partie des frais de transaction sur Core est distribuée aux validateurs et à leurs délégateurs.

### Distribution

- Les stakers Bitcoin et les stakers CORE reçoivent des récompenses lorsque leurs validateurs choisis sont actifs et performants.
- Les récompenses sont distribuées en fonction de la participation proportionnelle et des structures de commission des validateurs.

## Dual Staking

Le double staking fait référence au staking simultané de Bitcoin et de tokens CORE, avec des ratios de staking CORE-Bitcoin plus élevés permettant d'accéder à des niveaux de rendement plus élevés. **Plus il y a de CORE misés par rapport au Bitcoin, plus le potentiel de rendement est élevé**. Ainsi, des taux de staking Bitcoin attractifs sont perpétuellement disponibles pour les participants les plus alignés sur Core, encourageant les stakers Bitcoin à miser également des CORE - ce qui aligne les incitations et renforce la sécurité du réseau.

Le double staking crée un **avantage mathématique** dans le système de distribution de récompenses de Core en reconnaissant que la participation double apporte une plus grande valeur de sécurité au réseau que chaque mécanisme isolé, avec des rendements maximaux environ 25 à 50 fois plus élevés que le staking Bitcoin seul.
