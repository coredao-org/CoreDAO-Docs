---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de Bitcoin

Plus de [1500 milliards de dollars](https://www.coingecko.com/en/coins/bitcoin) en Bitcoin sont restés inactifs, ne générant aucun rendement natif au cours de leur durée de vie. Étant donné que Bitcoin est une blockchain basée sur la Preuve de Travail (PoW), ses détenteurs ne bénéficient pas des avantages de rendement natif propres aux chaînes basées sur la Preuve d'Enjeu (PoS). Néanmoins, Core a apporté les avantages de la Preuve d'Enjeu à la blockchain de Preuve de Travail par excellence. **Le staking de Bitcoin Non-Custodial** améliore substantiellement le modèle de sécurité de Core tout en débloquant pour la première fois un rendement natif en Bitcoin. Cette approche innovante permet aux détenteurs de Bitcoin de participer et de gagner avec Satoshi Plus sans abandonner la garde de leurs Bitcoins, intégrant ainsi la puissance économique de Bitcoin avec les fonctionnalités avancées de la blockchain Core.

## **Aperçu**

Le Staking de Bitcoin Non-Custodial de Core permet aux détenteurs de Bitcoin de gagner des tokens CORE sans renoncer au contrôle de leurs clés privées ou transférer leurs Bitcoins à un tiers, un contrat intelligent externe ou un portefeuille à calcul multipartite (MPC). Le staking de Bitcoin non-custodial permet aux détenteurs de Bitcoin de verrouiller en toute sécurité leurs Bitcoins nativement sur le réseau Bitcoin. Parallèlement, les stakers peuvent contribuer activement à l'élection des validateurs sur le réseau Core, renforçant sa sécurité et sa décentralisation grâce au mécanisme de consensus Satoshi Plus. Cette approche garantit que le Bitcoin reste sous le contrôle de l'utilisateur tout en lui permettant de soutenir la sécurité du réseau et de gagner des récompenses.

## **Raisonnement derrière le staking de Bitcoin non-custodial de Core**

La blockchain Core propose le staking de Bitcoin non-custodial comme une initiative stratégique pour améliorer sa décentralisation et sa sécurité. En incorporant Bitcoin, qui dispose d'un réseau robuste et bien établi, dans son mécanisme de consensus, Core peut tirer parti des fonctionnalités de décentralisation et de sécurité de Bitcoin. Grâce au staking de Bitcoin non-custodial, Core exploite la sécurité de Bitcoin et offre à la communauté Bitcoin les premières opportunités de génération de rendement natif non-custodial en Bitcoin. Participer au staking de Bitcoin non-custodial offre un incitatif supplémentaire : gagner des tokens CORE. C'est un moyen pour les détenteurs de Bitcoin de conserver la garde complète de leurs actifs Bitcoin sans les transférer ailleurs et de recevoir des récompenses supplémentaires en tokens CORE.

## **Avantages du Staking Non-Custodial de Bitcoin**

1. **Aucun risque pour le BTC principal :** Les utilisateurs peuvent staker leurs bitcoins sans impliquer de nouvelles hypothèses de confiance, de slashing ou de risques de protocole. Leur BTC principal reste sous leur garde et sur la blockchain Bitcoin, tirant parti de la haute sécurité et de la confiance déjà fournies par l'infrastructure robuste de Bitcoin.
2. **Auto-garde et sécurité à 100 % :** Les utilisateurs n'ont qu'à s'envoyer eux-mêmes la transaction de staking sur le réseau Bitcoin, et les actifs Bitcoin _N'ONT PAS_ besoin de quitter le réseau Bitcoin.
3. **Le Taux Sans Risque du Bitcoin :** En n'introduisant aucune nouvelle hypothèse de confiance, le staking de Bitcoin de Core permet de débloquer un rendement sans risque pour les détenteurs de Bitcoin.
4. **Nativité Bitcoin :** En utilisant les verrous temporels absolus natifs de Bitcoin, les stakers de Bitcoin conservent la pleine garde de leurs bitcoins.
5. **Rendement durable :** Ce mécanisme transforme le Bitcoin en un actif productif, permettant aux stakers de gagner une part des émissions fixes et des frais de gaz de Core en tokens CORE pour sécuriser le réseau Core.
6. **Intégration au Réseau :** Le Staking Non-Custodial de Bitcoin intègre les détenteurs de Bitcoin au mécanisme de consensus de Core, contribuant ainsi à la sécurité et à la décentralisation du réseau.

## **How Non-Custodial Bitcoin Staking Works** {#how-non-custodial-bitcoin-staking-works}

Non-custodial Bitcoin Staking is one of the three fundamentals of Core’s Satoshi Plus consensus mechanism. Through this feature, Core incorporates Bitcoin holders into its ecosystem for security and to enable them to turn Bitcoin into a yield-generating asset.

Core's methodology for integrating Bitcoin staking centers on [CLTV timelock](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). CLTV timelock is a Bitcoin-native cryptographic feature that specifies a condition under which the transaction output cannot be spent until a specific point in time has passed. This time can be defined as a specific date and time or by block height.

Imagine CLTV as a **time-locked vault**: when you "lock" your Bitcoin, it’s securely held and inaccessible until the designated time elapses, at which point the Bitcoin is returned to you. This feature enables Core’s staking mechanism to work without requiring users to relinquish control of their Bitcoin. Instead, Bitcoin holders can support Core’s network and earn rewards while retaining custody of their assets.

Rather than holders giving up custody of their Bitcoins to third parties or external smart contracts, Bitcoin stakers need to initiate a qualified CLTV transaction on the Bitcoin network, and the transaction can be designed to return the output after a fixed time period has elapsed. CLTV is a Bitcoin-native feature, and users can use it to lock any amount of their assets at/for any time. However, specific prerequisites should be met to ensure that transactions are valid and to be picked as a delegation for validators on the Core network. Within the CLTV transaction, stakers must include a script containing the following information:

1. The address of the Core Validator the staker wants to delegate their Bitcoin to.
2. The address to which the staker would like their CORE token rewards to be sent.

The **Relayers** are a key component of the Core ecosystem that monitors the Bitcoin network for Bitcoin staking and unstaking transactions. Once the valid CLTV transactions containing information for Bitcoin delegation to validators on Core are sent over the Bitcoin network, the Relayers pick up these transactions and forward them to the Core consensus engine.

It is essential to be clear that Core’s non-custodial Bitcoin staking mechanism introduces no protocol or principal risks to the user’s delegated Bitcoin. Users transact on the Bitcoin network to delegate their assets to Core validators via Bitcoin’s CLTV; their assets remain on the Bitcoin network under their control. The assets are not moved off-chain or to any third-party or smart contracts. On the other side, relayers from the Core network are responsible for monitoring the Bitcoin network, picking up Bitcoin staking transactions, verifying them, and forwarding the valid transactions to the Core consensus mechanism, which is responsible for rewarding the stakers accordingly.

Bitcoin stakers earn yield as staking rewards in the form of CORE tokens on their otherwise passive Bitcoin for however long they set the time lock (i.e., delegate their Bitcoin to validators on the Core network). Core’s Non-Custodial Bitcoin Staking results in billions of dollars in underutilized Bitcoin value becoming productive, remunerating stakers while expanding the scope of Bitcoin's utility.

### **Requirements for Bitcoin Staking**

- For a Bitcoin staking transaction to be considered valid and picked up by the Relayers, users must ensure that the transaction is sent to their address and, using the Bitcoin native timelock feature, specify the lock-up amount intended to be delegated to the validator on the Core blockchain, as the transaction output.
- The transaction should also contain an `op_return` output specifying
  - The address of the Core Validator the staker wants to delegate their Bitcoin to.
  - The address to which the staker would like their CORE token rewards to be sent.
- _Minimum_ _requirements exist_ for both **amount** and **duration**. Users should stake at least **0.01 Bitcoin** (less transaction fees) for at least **10 days**.

### **Transaction Workflow**

Core's implementation of Bitcoin staking is completely native and non-custodial, i.e., users can keep their Bitcoin assets on the Bitcoin network without bridging them out before staking.

![btc-staking-tx-workflow](../../../../static/img/btc-staking/btc-staking-flow.png)

Note that Non-Custodial BTC Staking operations are conducted on two separate blockchains—Bitcoin and Core. The following table identifies what happens in each blockchain for Bitcoin holders to earn staking rewards successfully through non-custodial Bitcoin staking. It's important to note that Core's Non-Custodial Bitcoin Staking does not introduce any additional risks or trust assumptions. Beyond monitoring and verifying Bitcoin staking transactions and accrual and claiming rewards, all operations—including asset locking, redemption, and asset management—remain securely on the Bitcoin network.

| Step\#  | Bitcoin Network                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Core Network                                                                                                        |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| Step\#1 | User craft a CLTV Timelock transaction with a minimum timelock period of 10 days and OP\_RETURN containing  Core Validator Address the user wants to delegate their Bitcoin to. CORE reward address for receiving the staking rewards in the form of CORE. For details on how to compose such a staking transaction, please refer to the [transaction design](https://docs.coredao.org/docs/Learn/products/btc-staking/design).                                                                                                                                                                                                                                                                                                | Relayers monitor the Bitcoin network for valid CLTV transactions for non-custodial Bitcoin staking. |
| Step\#2 | The user sends the crafted transaction to themselves on the Bitcoin network.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                     |
| Step\#3 | The Bitcoins are locked on the Bitcoin network for the specified time period. Once the transaction is confirmed on the Bitcoin network, which can take several hours due to block time, number of block confirmations required, and network congestion, the locked assets will appear in the staking records.  (_Optional_) After the transaction is confirmed on the Bitcoin network, users can retrieve the transaction data and submit it to the Core blockchain. This step is optional if users compose the transaction in a standard format, as suggested by Core. Relayers from the Core infrastructure will detect the staking transaction and submit it to the Core blockchain for users. |                                                                                                                     |
| Step\#4 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Relayers pickup the valid transactions and forward them to the Core Consensus Engine                                |
| Step\#5 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | The rewards for BTC staking are accrued, and users have to claim them manually.                     |
| Step\#6 | Once the time lock expires, users **must** send out a Redeem script to retrieve their locked Bitcoin assets. Users can also choose to delegate directly again rather than redeem and then delegate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                     |

## **Step-by-Step Process**

1. **Verrouillage des Bitcoins :** Les détenteurs de Bitcoin initient le processus de staking en verrouillant leurs bitcoins dans un timelock absolu sur la blockchain Bitcoin.
2. **Inclusion des informations de délégation :** Dans la transaction de verrouillage, les stakers incluent :
   1. **Core Validator Address:** The address of the Core Validator to which to delegate their Bitcoin.
   2. **Adresse de récompense en tokens CORE :** L'adresse où ils souhaitent recevoir leurs récompenses en tokens CORE.
3. **Délégation des Bitcoins :** Cette action délègue les bitcoins du staker au validateur Core choisi pour une période déterminée, durant laquelle les bitcoins ne peuvent pas être dépensés.
4. **Validator Election:** Core uses the delegated Bitcoin to determine the hybrid score for the validator election. Les validateurs avec plus de bitcoins délégués ont de meilleures chances d'être élus dans le groupe des validateurs.
5. **Earning Rewards:** Bitcoin stakers earn CORE token rewards for the lock period based on the validator's performance and the amount of Bitcoin staked.
6. **Unlocking Bitcoin:** After the timelock expires, the staked Bitcoin remains in the staker’s address but stays locked. To regain access and be able to spend their BTC, the staker must redeem it explicitly after the timelock period ends.

### **Guidelines for Staking/Redeeming Bitcoin**

Please follow these guidelines to ensure smooth transactions when staking or redeeming your Bitcoin. Following these recommendations can ensure a more efficient staking and redemption process for your Bitcoin.

1. **Évitez les frais de gas bas:**
   - We recommend avoiding gas fees that are lower than the current market rate.
   - Utiliser un frais de gas trop bas, en particulier pendant les périodes de congestion du réseau, peut entraîner un délai important pour la confirmation de votre transaction Bitcoin (cela peut prendre des jours).
2. **Gérer les situations de frais de gas bas**
   - Si votre transaction Bitcoin est retardée en raison de frais de gas bas, envisagez d'utiliser un accélérateur de transaction pour accélérer le processus.
   - Several third-party services are available, such as the free viaBTC transaction accelerator (accessible [here](https://www.viabtc.com/tools/txaccelerator)).
   - Faites vos propres recherches et choisissez un service qui correspond le mieux à vos besoins.

## **Conclusion**

Le staking Non-Custodial de Bitcoin transforme cet actif, passant d'une réserve de valeur passive à un actif générateur de rendement et fournissant une sécurité. Bitcoin staking allows Bitcoin holders to earn the Bitcoin Risk-Free Rate while contributing to the security of a smart contract platform designed to unlock more Bitcoin asset use cases.
