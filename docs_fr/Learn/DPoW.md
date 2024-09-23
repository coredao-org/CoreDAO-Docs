---
sidebar_label: Preuve de Travail Déléguée
hide_table_of_contents: false
sidebar_position: 2
description: Exploiter la DPoW dans Satoshi Plus
---

# Preuve de Travail Déléguée (DPoW)

---

##

# Preuve de Travail Déléguée (DPoW) dans le mécanisme de consensus Satoshi Plus

---

## Aperçu

Delegated Proof of Work (DPoW) is a crucial element of Core's Satoshi Plus consensus mechanism. This system leverages the robust security of Bitcoin mining, integrating it into the Core blockchain to enhance security and incentivize participation without additional costs. Here’s a detailed look at how DPoW operates and its significance.

DPoW enables Bitcoin miners to earn a second block reward on top of their Bitcoin rewards while securing the Core blockchain, creating a symbiotic relationship that benefits both networks.

![dpow-core-architechture](../../../../static/img/staoshi-plus/dpow.jpg)

## Fonctionnement de la DPoW dans Satoshi Plus

On the Bitcoin network, Bitcoin miners generate hash power to secure the Bitcoin network, validate transactions, and earn Bitcoin rewards. In order to even their rewards out over time, Bitcoin miners often contribute their hash power to mining pools, which use the aggregated hash power to increase the pool’s overall chances of mining a Bitcoin block and receiving Bitcoin in return. La DPoW intègre directement le minage de Bitcoin dans le protocole de sécurité de Core Chain via un système de délégation. Voici une répartition étape par étape de son fonctionnement :

1. **Intégration du Minage**: Les mineurs de Bitcoin poursuivent leurs activités de minage standard, mais avec une étape supplémentaire consistant à signaler leur soutien à Core Chain. Cela se fait en incluant une transaction spéciale dans les blocs de Bitcoin qu'ils minent, qui spécifie le Validateur Core qu'ils souhaitent soutenir.

2. **Métadonnées dans les Blocs Bitcoin**: Dans le bloc de Bitcoin miné, les mineurs ajoutent des métadonnées dans le champ op_return. Ces métadonnées incluent l'adresse du Validateur Core et l'adresse pour recevoir les récompenses en tokens CORE, déléguant ainsi une partie de leur puissance de hachage au réseau Core Chain.

3. **Soutien aux Validateurs**: En incluant ces informations, les mineurs délèguent leur puissance de calcul aux Validateurs sur Core Chain. Ces Validateurs utilisent la puissance déléguée pour participer à la validation et à la création de blocs sur la Core Chain.

4. **Relayeurs**: Les en-têtes de blocs Bitcoin arrivent sur Core Chain via les relayeurs de Core Chain. Chaque relayeur exécute un client léger sur la chaîne (ou utilise un service similaire existant) qui synchronise les blocs minés par le pool de minage Bitcoin avec le réseau Core. Pendant une ronde de 1 jour, le réseau Core calcule la DPoW pour chaque validateur en comptant le nombre de blocs que les mineurs ont délégués à chaque validateur une semaine auparavant. Si la ronde a lieu un jeudi par exemple, Core totalisera la puissance de hachage déléguée à chaque validateur en comptant les blocs du jeudi précédent.

5. **Mécanisme de Récompense**: En retour de leur contribution, les mineurs reçoivent des récompenses supplémentaires sous forme de tokens CORE, en plus des récompenses habituelles de minage de Bitcoin. Ce système de double récompense incite les mineurs à participer au processus DPoW sans avoir besoin de détourner des ressources du minage de Bitcoin.

## Step by Step Process

1. **Mining Bitcoin Blocks:** Bitcoin miners continue their primary role of mining blocks on the Bitcoin network using Proof of Work (PoW).

2. **Including Delegation Information:** Miners add two additional pieces of information in the op_return field of the coinbase transaction:

- **Core Validator Address:** The address of the Core Validator to delegate hash power to.
- **CORE Token Reward Address:** The address where the miner wants their CORE token rewards sent.

3. **Delegating Hash Power:** This action delegates the miner's hash power to the chosen Core Validator, repurposing existing work without incurring additional costs.

4. **Validator Election:** Validators with higher delegated hash power have a greater chance of being elected to the validator set.

5. **Validator Rewards:** Validators earn rewards for processing blocks, take a small commission, and pass rewards to their delegators, including any Bitcoin miners or mining pools who delegated hash power to them.

6. **Earning Rewards:** Miners or mining pools receive CORE token rewards in addition to their Bitcoin rewards, providing extra incentives.

## Importance de la DPoW dans Satoshi Plus

- **Enhanced Security:** By integrating Bitcoin’s PoW, Core benefits from Bitcoin’s unmatched security infrastructure, making the Core network more resilient.

- **Increased Incentives:** Bitcoin miners gain an additional revenue stream through CORE token rewards, enhancing their overall profitability without additional energy costs.

- **Symbiotic Relationship:** This system promotes mutual benefits for both the Bitcoin and Core networks, fostering a cooperative environment that strengthens the blockchain ecosystem.

- **Resource Efficiency**: DPoW allows miners to maximize the utility of their existing computational resources. En soutenant Core Chain tout en réalisant leurs opérations régulières de minage de Bitcoin, les mineurs peuvent contribuer à deux réseaux simultanément sans dépenses énergétiques supplémentaires.

#### **Conclusion**

DPoW is a critical innovation within the Satoshi Plus consensus mechanism, it extends the incentives of the Bitcoin network’s miners to align with Core’s Satoshi Plus consensus mechanism. Core receives Bitcoin miner participation in its security, and Bitcoin receives more highly compensated miners. The result is a miner set that is more heavily incentivized to secure both Bitcoin and Core.
