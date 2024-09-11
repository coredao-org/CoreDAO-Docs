---
sidebar_label: Vue d'ensemble
hide_table_of_contents: false
sidebar_position: 2
---

# Non-Custodial Bitcoin Staking

---

Over [1 trillion dollars'](https://www.coingecko.com/en/coins/bitcoin) worth of Bitcoin has remained idle, yielding no native yield for over its lifetime. Since Bitcoin is a Proof of Work blockchain, its holders do not get the yield benefits native to Proof of Stake chains. Nevertheless, Core has delivered Proof of Stake benefits to the definitive Proof of Work blockchain. Non-Custodial Bitcoin Staking substantially adds to Core’s security model while also unlocking Bitcoin-native yield for the first time in history. This innovative approach allows Bitcoin holders to participate in and earn from Satoshi Plus without giving up custody of their Bitcoin, thereby integrating Bitcoin's economic power with Core's advanced blockchain functionalities.

## Overview

Non-Custodial Bitcoin Staking enables Bitcoin holders to earn CORE tokens by simply locking up their Bitcoin on the Bitcoin blockchain, thereby never giving up custody of their private keys to any third party, external smart contract, or MPC wallet. In locking up their Bitcoin on the Bitcoin blockchain, Bitcoin stakers contribute to the election of Core validators, thereby enhancing and decentralizing the security of Satoshi Plus.

## Donner du pouvoir aux Détenteurs de Bitcoin et Renforcer Core

#### _The Dual Benefits of Non-Custodial Bitcoin Staking_

1. **Benefits for Bitcoin Holders from Non-Custodial Bitcoin Staking**
   - **Maintaining Assets on Bitcoin:** By Non-Custodial Bitcoin Staking, Bitcoin holders have the unique opportunity to keep their assets securely on the Bitcoin network. Cela leur permet de maintenir leur investissement dans ce qui est largement considéré comme la blockchain la plus décentralisée et sécurisée, souvent surnommée "l'or numérique". En principe, ils peuvent continuer à détenir leur Bitcoin, en profitant de la sécurité et de la réputation qu'il offre, sans avoir besoin de transférer leurs actifs ailleurs.
   - **Earning Core Tokens as Rewards:** Participating in Non-Custodial Bitcoin Staking offers an additional incentive: earning Core tokens. Cela permet aux détenteurs de Bitcoin de conserver leurs actifs tout en recevant des récompenses supplémentaires sous forme de tokens Core.
   - **Social Responsibility in Decentralization:** By staking their Bitcoin, holders contribute to the decentralization of the Core blockchain. Il s'agit d'une forme de responsabilité sociale, car leur participation contribue à maintenir un réseau diversifié et distribué, ce qui est fondamental pour l'éthique de la technologie blockchain.
2. **Core's Rationale Behind Offering Non-Custodial Bitcoin Staking**
   - **Enhancing Decentralization and Security:** Core blockchain is offering Non-Custodial Bitcoin Staking as a strategic move to enhance its decentralization and security. En intégrant le Bitcoin, qui dispose d'un réseau solide et bien établi, dans son mécanisme de consensus, Core peut exploiter les caractéristiques de décentralisation et de sécurité de Bitcoin.

## Advantages of Non-Custodial Bitcoin Staking

1. **No New Trust Assumptions:** Users can stake their bitcoins without moving it off the Bitcoin blockchain, thereby maintaining the high security and trust that comes with Bitcoin's robust infrastructure.
2. **Self custody and 100% secure:** Users only need to send themselves the staking transaction on the Bitcoin network and the Bitcoin assets DO NOT need to leave the Bitcoin network at all.
3. **The Bitcoin Risk-Free Rate:** By introducing zero new trust assumptions, Core’s Bitcoin staking unlocks riskless yield for Bitcoin holders.
4. **Bitcoin-Nativity:** By using Bitcoin’s native absolute time locks, Bitcoin stakers retain full custody of their Bitcoin.
5. **Yield Generation:** This mechanism transforms Bitcoin into a yield-bearing asset, providing stakers with CORE token rewards and enhancing the utility of their holdings.
6. **Network Integration:** Non-Custodial Bitcoin Staking integrates Bitcoin holders into Core’s consensus mechanism, contributing to the network’s security and decentralization.
7. **Core Emission:** The reward system helps align cross-chain incentives. Le pool de récompenses provient d'un système de consensus partagé qui intègre les contributions des mineurs de Bitcoin et des stakers de tokens CORE, optimisant ainsi la distribution des récompenses pour tous les participants. Additionally, the rewards are sustainable over the long-term, and will be distributed over a period of **81** years.

## How Non-Custodial Bitcoin Staking Works

With the non-custodial bitcoin staking, Core incorporates bitcoin holders as the third part of Satoshi Plus consensus. Core's methodology for integrating bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). Les timelocks CLTV sont des fonctionnalités cryptographiques natives de Bitcoin qui spécifient une condition selon laquelle la sortie de la transaction ne peut pas être dépensée avant qu'un certain temps soit écoulé. Ce temps peut être défini en termes de date et d'heure spécifiques ou de hauteur de bloc. Rather than holders giving up custody of their bitcoins to external staking, stakers on Core merely need to place their bitcoins in CLTV timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Dans cette transaction, les stakers doivent inclure un script contenant les mêmes informations que les mineurs de Bitcoin incluent dans leurs blocs délégués:

1. L'adresse du validateur Core à qui le staker veut déléguer ses bitcoins.
2. L'adresse où le staker souhaite que ses récompenses en tokens CORE soient envoyées.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards, for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core network). Le résultat final est que des milliards de dollars en valeur de bitcoins sous-utilisés deviendront productifs, rémunérant les stakers tout en étendant l'utilité de Bitcoin.

### Guidelines for Staking/Redeeming Bitcoin

When staking or redeeming your Bitcoin, please follow these guidelines to ensure smooth transactions:

1. **Évitez les frais de gas bas:**
   - Nous recommandons d'éviter des frais de gas inférieurs au taux du marché actuel.
   - Utiliser un frais de gas trop bas, en particulier pendant les périodes de congestion du réseau, peut entraîner un délai important pour la confirmation de votre transaction Bitcoin (cela peut prendre des jours).
2. **Gérer les situations de frais de gas bas**
   - Si votre transaction Bitcoin est retardée en raison de frais de gas bas, envisagez d'utiliser un accélérateur de transaction pour accélérer le processus.
   - Il existe plusieurs services tiers disponibles, comme l'accélérateur de transaction gratuit viaBTC (qui peut être accédé [ici](https://www.viabtc.com/tools/txaccelerator)).
   - Faites vos propres recherches et choisissez un service qui correspond le mieux à vos besoins.

By following these recommendations, you can ensure a more efficient staking and redemption process for your Bitcoin.

### Conditions d'Éligibilité

Core welcomes Bitcoin holders to stake their Bitcoin on the Bitcoin network. By voting for a Core validator during your Bitcoin staking transaction, you play a pivotal role in Core's decentralization, earning CORE tokens as recurring rewards.

- There are _minimal requirements_ on both **amount** and **duration** to make the staking eligible on Core.
  - A user should at least stake **0.01 Bitcoin** (less transaction fees) for at least **10 days**.

### Déroulement des transactions

![btc-staking-flow](../../../../static/img/btc-staking/btc-staking-flow.png)

Core's implementation of Bitcoin native staking is completely non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking. Les utilisateurs doivent simplement suivre les étapes suivantes:

- Send a Bitcoin transaction to their own address, and lock up the output whose amount is intended to stake on Core blockchain by using the Bitcoin native timelock feature. De plus, la transaction doit contenir une sortie `op_return` dans laquelle les utilisateurs peuvent désigner l'adresse du validateur Core pour le staking et une adresse de récompense pour recevoir les récompenses en CORE. Pour plus de détails sur la composition de cette transaction de staking, veuillez consulter la [conception de la transaction](design.md).

- (_Optionnel_) Après la confirmation de la transaction sur le réseau Bitcoin, les utilisateurs peuvent récupérer les données de transaction et les soumettre à la blockchain Core. This step is optional, if users compose the transaction in a standard format as suggested by Core (defined in the [transaction design](design.md)). L'infrastructure Core détectera la transaction de staking et la soumettra à la blockchain Core pour les utilisateurs.

- Lorsque le timelock expire, les utilisateurs peuvent dépenser l'UTXO en utilisant le script de rachat correspondant. Il leur est facile de construire le script de rachat à partir de la transaction de staking originale.

## Step by Step Process

1. **Locking Bitcoin:** Bitcoin holders initiate the staking process by locking their Bitcoin in an absolute time lock on the Bitcoin blockchain.

2. **Including Delegation Information:** Within the locking transaction, stakers include:

3. **Core Validator Address:** The address of the Core Validator to delegate their Bitcoin to.

4. **CORE Token Reward Address:** The address where they want their CORE token rewards sent.

5. **Delegating Bitcoin:** This action delegates the staker’s Bitcoin to the chosen Core validator for a specified period, during which the Bitcoin cannot be spent.

6. **Validator Election:** Core uses the delegated Bitcoin to help elect validators. Validators with higher delegated Bitcoin have a better chance of being elected to the validator set.

7. **Earning Rewards:** Bitcoin stakers earn CORE token rewards for the duration of the lock period, based on the validator's performance and the amount of Bitcoin staked.

8. **Unlocking Bitcoin:** After the lock period ends, the staker’s Bitcoin is unlocked and can be spent again.

## Conclusion

Non-Custodial Bitcoin Staking transforms the Bitcoin asset from a passive Store of Value into an active, yield-bearing, and security-providing asset. Bitcoin staking allows Bitcoin holders to earn the Bitcoin Risk-Free Rate while also contributing to the security of a smart contract platform designed to unlock more Bitcoin asset use-cases.
