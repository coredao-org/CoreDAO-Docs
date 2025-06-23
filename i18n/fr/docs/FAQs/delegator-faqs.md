---
sidebar_label: FAQ des délégateurs CORE
hide_table_of_contents: false
sidebar_position: 2
---

# FAQ des délégateurs CORE

---

### 1. Qu'est-ce qu'un délégateur sur la blockchain Core ?

Dans l'écosystème de Core, la délégation est un mécanisme fondamental qui permet aux mineurs de BTC ainsi qu'aux détenteurs de BTC et de tokens CORE de participer activement à la sécurité et à la gouvernance du réseau sans être eux-mêmes des validateurs. Ce processus permet aux délégateurs de confier leur pouvoir de vote et d'opération à des validateurs, qui utilisent ensuite les ressources déléguées (puissance de hachage BTC, BTC et CORE) pour participer au processus de consensus et aux décisions de gouvernance du réseau.

### 2. Quels sont les différents types de délégations possibles sur la Core Chain grâce au Mécanisme de Consensus Satoshi Plus ?

1. **Délégation de BTC/CORE aux validateurs :** Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs jetons. En retour, les validateurs utilisent la puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.
2. **Délégation de puissance de hachage des mineurs Btc :** Les mineurs de Bitcoin peuvent déléguer une partie de leur puissance de hachage à des validateurs sur le réseau Core. Cette forme unique de délégation utilise la sécurité et le travail déjà effectués sur le réseau Bitcoin pour renforcer la sécurité de la blockchain Core.

### 5) Quels sont les avantages de déléguer des tokens BTC ou CORE ?

En déléguant des tokens CORE à des validateurs, les détenteurs de CORE peuvent aider à sécuriser le réseau et partager les récompenses du système. Veuillez consulter le [guide](../stake-and-delegate/CORE-staking.md) détaillé sur la délégation de CORE pour plus d'informations.

### 4. Quels sont les avantages de déléguer des Bitcoins ou des jetons CORE ?

Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs tokens. En retour, les validateurs utilisent cette puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.

### 5. Comment déléguer de la puissance de hachage sur le réseau Core ?

By delegating hash power to Validators, Bitcoin miners can help secure the network and share in system rewards. Please refer to the detailed [guide](../stake-and-delegate/delegating-hash.md) on hash power delegation for more details.

### 6. How can a delegator maximize their rewards?

To maximize their rewards, delegators will look for both validators who are generous in their payouts and also don’t already have a substantial amount of delegated CORE tokens or delegated Proof-of-Work (PoW). The less a given validator has staked, the greater a contribution from a delegator will be. If a delegator adds one CORE token to a validator that only has one token, they’re 50% of that validator’s total delegation. If they delegate to a validator with 99 CORE tokens, they’re only 1% of that validator’s total delegation. Since payouts are determined in part by the percentage of the total stake each delegator accounts for, they’ll be incentivized to try to find validators with small delegations.

### 7. Can you change your validator once you have delegated?

- **Hash Power:** hash is delegated separately in each Bitcoin block mined, and once delegated, no further transfer can be made.

- **Bitcoin Delegation:** Users lock up their Bitcoin and designate a validator to stake on Core. They can transfer Bitcoin stake to other validators on Core, but will lose the rewards of the current day.

- **CORE Delegation:** Users can transfer to other validators and will still receive the rewards of the current day.

### 8. Are there any fees associated with delegating Bitcoin or CORE tokens or hash power?

Except for the transaction fee and gas charges, Core doesn’t charge any additional fees for delegating Bitcoin hash power, Bitcoin, or CORE tokens.

### 9. How long does it take to start earning rewards after delegating Bitcoin, CORE, or Bitcoin hash power?

- **Bitcoin hash power delegators:** The Core blockchain uses Bitcoin network block records from seven days ago for hybrid score calculations. Additionally, after a validator is elected, staking rewards are distributed on the second day of the switched round. Therefore, after delegating their hash power, miners and mining pools will have their hash power used in the Validator election calculation N+7 days later and will receive claimable rewards N+8 days later.

- **CORE/Bitcoin delegators:** After delegating their CORE/Bitcoin, delegators will have their assets used in the Validator election calculation for the next round. They will have claimable rewards a round later.

### 11. Quand les récompenses sont-elles versées ?

Refer to the detailed guide [here](../stake-and-delegate/CORE-staking.md#claiming-rewards) on Claiming Rewards earned through staking of Bitcoin and CORE. In case of Bitcoin hash power delegation, refer [here](../stake-and-delegate/delegating-hash#implementation).

### 11. Que se passe-t-il si un validateur cesse de fonctionner ou est pénalisé ?

The rewards are paid out at the end of each consensus round on the Core blockchain.

### 13. Que se passe-t-il si un validateur cesse de fonctionner ou est pénalisé ?

Une mauvaise performance ou une mauvaise conduite des validateurs peut entraîner des pénalités telles que le slashing des mises et l'emprisonnement. Note that delegators will not lose their staked assets; the penalties on validators will only affect the delegator's daily rewards.