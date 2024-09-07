---
sidebar_label: Vue d'ensemble
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de BTC - Déverrouiller la DeFi de Bitcoin

---

Plus de [1 000 milliards de dollars](https://www.coingecko.com/en/coins/bitcoin) en BTC sont restés inactifs, ne générant aucun rendement depuis plus de 10 ans. Le réseau Bitcoin n'est pas Turing-complet, ce qui signifie que, pour avoir une utilité en dehors du réseau Bitcoin, les bitcoins doivent être encapsulés, transférés sur un pont ou envoyés à un tiers dépositaire. Aucun de ces moyens n'est sûr, car ils nécessitent tous de faire confiance à une tierce partie. C'est pourquoi la majorité des bitcoins reste inactive. Les utiliser de manière sécurisée pour protéger l'économie décentralisée semble être une mission impossible. Les tentatives précédentes par d'autres projets d'exploiter cette liquidité ont rencontré un succès limité. Cependant, avec les avancées techniques du côté du Bitcoin et grâce à un écosystème innovant et robuste, Core Chain présente une opportunité prometteuse pour libérer le potentiel dormant de la liquidité en Bitcoin.

L'une des caractéristiques les plus remarquables de Core Chain, qui la distingue de ses concurrents, est le **`Staking Non-Custodial de BTC`**. Core Chain invite les détenteurs de BTC à staker leurs BTC sur le réseau Bitcoin. Avec l'introduction du staking non-custodial de bitcoin, les récentes mises à jour du protocole de Core Chain intègrent les détenteurs de Bitcoin comme la troisième partie du mécanisme de consensus Satoshi Plus.

## Donner du pouvoir aux Détenteurs de Bitcoin et Renforcer Core

#### _Le double avantage du Staking Non-Custodial de BTC_

1. **Avantages pour les Détenteurs de BTC grâce au Staking Non-Custodial**
   - **Maintenir les Actifs sur Bitcoin:** Grâce au Staking Non-Custodial de BTC, les détenteurs de Bitcoin ont l'opportunité unique de conserver leurs actifs en toute sécurité sur le réseau Bitcoin. Cela leur permet de maintenir leur investissement dans ce qui est largement considéré comme la blockchain la plus décentralisée et sécurisée, souvent surnommée "l'or numérique". En principe, ils peuvent continuer à détenir leur Bitcoin, en profitant de la sécurité et de la réputation qu'il offre, sans avoir besoin de transférer leurs actifs ailleurs.
   - **Gagner des Récompenses en Tokens Core:** Participer au Staking Non-Custodial de BTC offre une incitation supplémentaire: gagner des tokens Core. Cela permet aux détenteurs de Bitcoin de conserver leurs actifs tout en recevant des récompenses supplémentaires sous forme de tokens Core.
   - **Responsabilité Sociale dans la Décentralisation:** En stakant leurs BTC, les détenteurs contribuent à la décentralisation de la blockchain Core. Il s'agit d'une forme de responsabilité sociale, car leur participation contribue à maintenir un réseau diversifié et distribué, ce qui est fondamental pour l'éthique de la technologie blockchain.
2. **Raison d'être de Core pour Offrir le Staking Non-Custodial de BTC**
   - **Renforcer la Décentralisation et la Sécurité:** Le Staking Non-Custodial de BTC est proposé par la blockchain Core dans un but strategique d'amélioration de sa décentralisation et de sa sécurité. En intégrant le Bitcoin, qui dispose d'un réseau solide et bien établi, dans son mécanisme de consensus, Core peut exploiter les caractéristiques de décentralisation et de sécurité de Bitcoin.

## Avantages du Staking Non-Custodial de BTC

1. Conçu spécialement pour les détenteurs à long terme et les institutions préférant conserver leurs actifs sur le réseau Bitcoin. Reconnaissant que ces entités sont habituées à détenir leurs bitcoins sans effectuer de transactions fréquentes, le staking natif de bitcoin leur offre l'opportunité de gagner des récompenses pendant une période de détention spécifiée.
2. Aucune nouvelle hypothèse de confiance n'est ajoutée. Les utilisateurs peuvent staker leurs bitcoins sans les retirer du réseau Bitcoin, préservant ainsi la sécurité élevée et la confiance de l'infrastructure Bitcoin.
3. Opportunité de gagner des récompenses passives en tokens CORE en échange de la contribution sur le consensus de la Core Chain.
4. Garde autonome et sécurité à 100 %. Les utilisateurs ont uniquement besoin d'envoyer par eux même la transaction de staking sur le réseau BTC, SANS déplacer les BTC du réseau Bitcoin.
5. La fonction est mise en œuvre en utilisant les fonctionnalités cryptographiques natives du réseau Bitcoin, et elle a été entièrement testée en conditions réelles, ce qui la rend plus sûre que toutes les autres solutions non natives de Bitcoin.
6. Les utilisateurs peuvent construire la transaction de la manière qu'ils préfèrent et avec l'outil de leur choix, réduisant considérablement les risques d'attaques sur la chaîne d'approvisionnement provenant de bibliothèques tierces non fiables ou non vérifiées.

## Pourquoi Opter pour le Staking Non-Custodial de BTC de Core Chain

Il y a quelques aspects de l'implémentation du staking sur Core Chain qui le distinguent.

1. There is no need to transfer your assets. Unlike other DeFi protocols that require transferring bitcoin to a different blockchain or wrapping it, Core Chain's staking allows users to stake directly within the Bitcoin ecosystem.
2. Core Chain's bitcoin staking maintains the basic blockchain ethos by allowing bitcoin holders to contribute to the expansion of Core Chain's overall security budget.
3. There are options to stake through the command line or a web interface, and there's a simple claim process for rewards.
4. The product is designed for ease of use, catering to both tech-savvy users and those preferring a more straightforward approach.
5. The reward system helps align cross-chain incentives. The reward pool comes from a shared consensus reward system that integrates the contributions of both Bitcoin miners and CORE token stakers, thereby optimizing the reward distribution for all participants. Additionally, the rewards are sustainable over the long-term, and will be distributed over a period of 81 years.

## How Non-Custodial BTC Staking Works

With the non-custodial bitcoin staking, Core Chain's protocol incorporate bitcoin holders as the third part of Satoshi Plus consensus. Core Chain's methodology for integrating bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). CLTV timelock are Bitcoin-native cryptographic feature that specify a condition under which the transaction output cannot be spent until a certain point in time has passed. This time can be defined in terms of a specific date and time or by block height. Rather than holders giving up custody of their bitcoins to external staking, stakers on Core Chain merely need to place their bitcoins in CLTV timelocks as part of a transaction, and the transaction can be designed to return the output after the time period has elapsed. Within that transaction, stakers must include a script containing the same information that Bitcoin miners include in their delegated blocks:

1. The address of the Core Validator the staker wants to delegate their bitcoin to.
2. The address that the staker would like their CORE token rewards to be sent to.

Bitcoin stakers earn a yield on their otherwise passive bitcoin in the form of CORE token rewards, for however long they set the time-lock (and thus for however long they delegate their bitcoin to vote for Validators on Core Chain). The end result is that billions of dollars in underutilized Bitcoin value will become productive, remunerating stakers while also expanding the scope of Bitcoin's utility.

### Guidelines for Staking/Redeeming BTC

When staking or redeeming your BTC, please follow these guidelines to ensure smooth transactions:

1. **Avoid Low Gas Fees:**
   - We recommend avoiding gas fees lower than the current market rate.
   - Using a gas fee that is too low, especially during periods of network congestion, may result in your Bitcoin transaction taking an extended amount of time (potentially days) to be confirmed.
2. **Handling Low Gas Fee Situations:**
   - If your Bitcoin transaction is delayed due to a low gas fee, consider using a transaction accelerator to speed up the process.
   - There are several third-party services available; for example, the free viaBTC transaction accelerator (which can be accessed [here](https://www.viabtc.com/tools/txaccelerator)).
   - Please research and choose a service that best fits your needs.

By following these recommendations, you can ensure a more efficient staking and redemption process for your BTC.

### Requirements for Eligibility

Core Chain welcomes BTC holders to stake their BTC on the Bitcoin network. By voting for a Core validator during your BTC staking transaction, you play a pivotal role in Core's decentralization, earning CORE tokens as recurring rewards.

- There are _minimal requirements_ on both **amount** and **duration** to make the staking eligible on Core Chain.
  - A user should at least stake **0.01 BTC** (less transaction fees) for at least **10 days**.

### Transaction Work Flow

![btc-staking-flow](../../../../static/img/btc-staking/btc-staking-flow.png)

Core Chain's implementation of BTC native staking is completely non-custodial, i.e., users can keep their BTC assets on the Bitcoin network without bridging them out before staking. Users are required to perform only the following steps:

- Send a BTC transaction to their own address, and lock up the output whose amount is intended to stake on Core blockchain by using the Bitcoin native timelock feature. Besides, the transaction should also contain an `op_return` output in which users can designate the Core validator address to stake to and a `reward address` to receive CORE rewards. For details to compose such a staking transaction, please refer to the [transaction design](design.md).

- (_Optional_) After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit to the Core blockchain. This step is optional, if users compose the transaction in a standard format as suggested by Core Chain (defined in the [transaction design](design.md)). The Core infrastructure will detect the staking transaction and submit it to Core blockchain for users.

- When the timelock expires, users can spend the UTXO using the corresponding redeem script. It is easy for them to build the redeem script from the original staking transaction.
