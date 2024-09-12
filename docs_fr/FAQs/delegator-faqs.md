---
sidebar_label: FAQ des délégateurs CORE
hide_table_of_contents: false
sidebar_position: 2
---

# Delegator FAQs

---

### 1. What is a delegator on the Core blockchain?

In the Core ecosystem, delegation is a fundamental mechanism that allows BTC miners and BTC and CORE token holders to participate actively in the network's security and governance without being validators themselves. Ce processus implique que les délégateurs confient leur pouvoir de vote et opérationnel à des validateurs, qui utilisent ensuite les ressources déléguées (puissance de hachage BTC, BTC et CORE) pour participer au processus de consensus et aux décisions de gouvernance du réseau.

### 2. What are the different types of delegations that can be done on Core due to the Satoshi Plus Consensus Mechanism?

1. **Délégation de BTC/CORE aux validateurs :** Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs tokens. En retour, les validateurs utilisent la puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.
2. **Délégation de puissance de hachage des mineurs BTC :** Les mineurs de Bitcoin peuvent déléguer une partie de leur puissance de hachage à des validateurs sur le réseau Core. This unique form of delegation leverages the security and work already being done on the Bitcoin network to enhance the security of Core blockchain.

### 3) How can one delegate CORE tokens in Core?

En déléguant des tokens CORE à des validateurs, les détenteurs de CORE peuvent aider à sécuriser le réseau et partager les récompenses du système. Veuillez consulter le [guide](../stake-and-delegate/delegating-core) détaillé sur la délégation de CORE pour plus d'informations.

### 4. Quelles sont les périodes minimales de staking pour la délégation de BTC et de puissance de hachage BTC ?

Pour la délégation de BTC et de puissance de hachage BTC, la durée minimale requise est de **10 jours**, c'est-à-dire que vous ne pouvez pas annuler votre délégation avant **10 jours**. Techniquement, (\`CLTV timestamp - transaction confirmation timestamp > 10 jours\`).

### 5. Quels sont les avantages de déléguer des tokens BTC ou CORE ?

Ce type de délégation permet aux détenteurs de BTC et de tokens CORE de soutenir des validateurs spécifiques en leur déléguant leurs tokens. En retour, les validateurs utilisent la puissance agrégée pour sécuriser le réseau, valider les transactions et produire des blocs. Les délégateurs partagent les récompenses obtenues par leurs validateurs choisis, recevant une part des frais de transaction et des récompenses de bloc en proportion de leur mise.

### 6. How does one delegate hash power on Core netowrk?

En déléguant de la puissance de hachage à des validateurs, les mineurs de BTC peuvent aider à sécuriser le réseau et partager les récompenses du système. Veuillez consulter le [guide](../stake-and-delegate/delegating-hash) détaillé sur la délégation de puissance de hachage pour plus d'informations.

### 7. Comment un délégateur peut-il maximiser ses récompenses ?

Pour maximiser leurs récompenses, les délégateurs doivent rechercher des validateurs qui offrent des paiements généreux, mais qui n'ont pas déjà un montant important de tokens CORE ou de puissance de hachage déléguée. Moins un validateur a de tokens stakés, plus la contribution d'un délégateur sera importante. Si un délégateur ajoute un token CORE à un validateur qui n'en a qu'un, il représente 50 % de la délégation totale de ce validateur. S'il délègue à un validateur avec 99 tokens CORE, il ne représente que 1 % de la délégation totale de ce validateur. Les paiements étant en partie déterminés par le pourcentage de la mise totale représentée par chaque délégateur, ils seront incités à trouver des validateurs avec de petites délégations.

### 8. Peut-on changer de validateur après avoir délégué ?

- **Puissance de hachage :** la puissance de hachage est déléguée séparément à chaque bloc BTC miné, et une fois déléguée, aucun autre transfert ne peut être effectué.

- **BTC Delegation:** users lock up their BTC and designate a validator to stake to on Core. Ils peuvent transférer leur mise BTC à d'autres validateurs, mais perdront les récompenses de la journée en cours.

- **Délégation de CORE :** les utilisateurs peuvent transférer à d'autres validateurs et continueront de recevoir les récompenses de la journée en cours.

### 9. Are there any fees associated with delegating BTC or CORE tokens or hash power?

Other than the transaction fee/gas charges, Core doesn’t charge any additional fees for delegation of BTC hash power, BTC or CORE tokens.

### 10. How long does it take to start earning rewards after delegation of BTC,CORE or Bitcoin hash power?

- **BTC hash power delegators:** The Core blockchain uses Bitcoin network block records from seven days ago for hybrid score calculations. Additionally, after a validator is elected, staking rewards are distributed on the second day of the switched round. Therefore, after delegating their hash power, miners/mining pools will have their hash power used in the Validator election calculation N+7 days later and will have claimable rewards N+8 days later.

- **CORE/BTC delegators:** after delegating their CORE/BTC, delegators will have their assets used in the Validator election calculation for the next round and will have claimable rewards a round later.

### 11. How can delegators claim their rewards?

Refer to the detailed guide [here](../stake-and-delegate/delegating-core#claiming-rewards) on Claiming Rewards earned through staking of BTC and CORE. In case of BTC Hash Power delegation, refer [here](../stake-and-delegate/delegating-hash#implementation).

### 12. When are the rewards paid out?

The rewards are paid out at the end of each round of consensus on the Core blockchain.

### 13. What happens if a validator stops performing or is penalized?

Poor performance or misconduct by validators can result in penalties like slashing of stakes and jailing. Note that delegators will not lose their staked assets, the penalties on validators will only be affecting the delegator's daily rewards.
