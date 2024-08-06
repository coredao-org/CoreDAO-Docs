---
sidebar_label: Design
hide_table_of_contents: false
sidebar_position: 2
---

# Design of coreBTC

The coreBTC within the Core blockchain represents a significant innovation in the realm of blockchain technology, specifically focusing on enhancing Bitcoin's utility within decentralized finance (DeFi). This synthetic representation of Bitcoin on the Core Chain ensures seamless interaction with DeFi applications while maintaining the inherent properties of Bitcoin.

## Key Components and Their Roles

**1. Lockers:**

- **Role:** Lockers are responsible for holding the actual Bitcoin that backs the coreBTC. Users send their Bitcoin to a Locker's address to initiate the wrapping process. Anyone can register as a Locker on Core Chain by locking up collateral, and the Core Chain itself also runs one of the many Lockers.
- **Security:** Lockers must provide a significant amount of collateral in CORE tokens to ensure the security of the Bitcoin they hold. This collateral can be liquidated to cover losses in case of malfeasance, providing a strong disincentive against fraudulent activities.

**2. Collateral:**
\- The particular assets and required collateral ratio are network parameters determined by the Core DAO, and the collateral deposited by Lockers means that locked bitcoin should always be backed by assets of a higher value. If there's a change in the price of bitcoin relative to the value of the collateral, the Locker must adjust its collateral or face potential liquidation.
\- Collateral can be slashed if Lockers transfer bitcoin without authorization or do not promptly return bitcoin when coreBTC is burned.
\- Lockers can unregister and retrieve their collateral at any time, as long as they have no residual bitcoin locked and have no unfulfilled unlocking requests. In exchange for the services provided, Lockers earn small fees.

**2. Relayers:**

- **Role:** Relayers monitor the Bitcoin blockchain for locking transactions directed at Lockers and validate these transactions. They play a crucial role in ensuring that the locked Bitcoin corresponds accurately to the minted coreBTC on the Core Chain.
- **Functionality:** Upon detecting a valid locking transaction, Relayers submit proof to the Core Chain to mint the corresponding amount of coreBTC, bridging Bitcoin into the Core Chain ecosystem securely.

**3. coreBTC Smart Contract:**

- **Role:** The coreBTC smart contract on the Core Chain manages the minting and burning of coreBTC tokens. It interacts with Relayers and Lockers to ensure that all operations adhere to the protocol rules.
- **Security Mechanisms:** The smart contract includes mechanisms for verifying transaction proofs submitted by Relayers, managing collateral posted by Lockers, and executing the minting and redemption processes of coreBTC.

**4. Liquidators:**

- **Role:** In the event of price fluctuations or Locker misbehavior, Liquidators are responsible for ensuring the safety and backing of the coreBTC by enforcing collateral requirements.
- **Function:** Liquidators can force the liquidation of a Locker's collateral if the value of the locked Bitcoin falls or if the Locker fails to maintain the required collateral ratio. This helps maintain the integrity and backing of the coreBTC.

\*\*5. Guardians: \*\*

- **Role:** The activity of Lockers is monitored by Guardians, who check for any misbehavior and apply slashing as appropriate.
- **Function:** A Guardian can trigger Core Chain smart contract to slash some of the Locker’s collateral. In this event, a portion of the Locker's collateral, equivalent to the value of the user's burned coreBTC, is transferred to the user. Additionally, the slasher is rewarded with a percentage of this collateral value for their action.

## How coreBTC Works

coreBTC is an innovative synthetic asset developed within the Core blockchain ecosystem that allows Bitcoin to be used seamlessly in decentralized finance (DeFi) applications on the Core Chain. The process begins when a user locks their Bitcoin with a designated custodian known as a **Locker**, who holds the actual Bitcoin and provides a significant amount of collateral to secure the transaction. This Bitcoin is then represented on the Core Chain as coreBTC, maintaining a strict **1:1 peg** to ensure value consistency between the locked Bitcoin and the issued coreBTC.

Relayers play a crucial role in monitoring these Bitcoin transactions and validating them to the Core Chain. Once validated, the transaction details are sent to the coreBTC smart contract, which mints an equivalent amount of coreBTC and credits it to the user's wallet. This coreBTC can then be used across various DeFi platforms within the Core Chain ecosystem, enabling Bitcoin holders to engage in lending, borrowing, trading, and other financial activities without actually spending or risking their original Bitcoin holdings.

Redemption of coreBTC for the original Bitcoin involves the user initiating a burn process where the coreBTC is destroyed, and the corresponding Bitcoin is unlocked and returned from the Locker to the user’s specified address. The entire system is safeguarded by rigorous collateral management and liquidation protocols that ensure Lockers maintain sufficient collateral against the Bitcoin they hold. Additionally, slashing mechanisms are in place to penalize any fraudulent activities by Lockers, protecting the integrity and trustworthiness of coreBTC within the Core Chain ecosystem. This design not only enhances the liquidity and utility of Bitcoin but also maintains its core properties of decentralization and security.

## Minting and Pegging In coreBTC

Locking Bitcoin and pegging it into coreBTC are crucial for maintaining the integrity and trustworthiness of the synthetic asset:

- **Secure Storage:** Locked Bitcoin is stored in addresses controlled by Lockers, who are incentivized to maintain security and transparency due to their collateral obligations.
- **Collateralization:** The collateral provided by Lockers underpins the pegging process, ensuring that for every coreBTC in circulation, there is an equivalent amount of Bitcoin securely held by a Locker.

Minting of coreBTC begins when a user locks their Bitcoin into the system. The user sends Bitcoin to a secure address controlled by a designated entity known as a Locker. This action triggers the minting process on the Core Chain.

- **Lockers:** These are trusted nodes within the Core Chain network responsible for holding the actual Bitcoin. Each Locker must deposit a significant amount of collateral, usually in CORE tokens, to cover potential defaults or fraudulent activities.
- **Relayers:** After the Bitcoin is sent to the Locker's address, Relayers monitor these transactions. Once a transaction is confirmed, Relayers validate it and submit proof to the coreBTC smart contract on the Core Chain.
- **Smart Contract Execution:** Upon receiving the necessary proof from Relayers, the coreBTC smart contract calls the bitcoin Light Client to verify the authenticity and finality of the relevant bitcoin transaction, and then mints an equivalent amount of coreBTC. This minted coreBTC is then issued to the user's wallet on the Core Chain, reflecting a 1:1 peg with the locked Bitcoin.

![pegging-in-coreBTC](../../../../static/img/coreBTC/pegin-corebtc.png)

## Redemption and Pegging Out coreBTC

Redemption, or pegging out, involves reversing the minting process:

- **Burning coreBTC:** Users initiate the redemption process by sending a request to the coreBTC smart contract to burn a specified amount of coreBTC, indicating the Bitcoin address where they wish to receive their Bitcoin.
- **Unlocking Bitcoin:** Upon successful burning of the coreBTC, the smart contract signals the Locker to release the corresponding amount of Bitcoin. The Locker then sends this Bitcoin to the user's specified address, completing the pegging out process. Once the bitcoin transaction is confirmed, the Locker transmits it to Core Chain where it is finally verified by the bitcoin Light Client

![pegging-out-coreBTC](../../../../static/img/coreBTC/pegout-corebtc.png)

## Liquidation Process

The liquidation process is designed to protect the system from defaults and ensure that the backing of coreBTC remains secure:

- **Monitoring Collateral Ratios:** Liquidators continuously monitor the value of the Bitcoin held by Lockers relative to the issued coreBTC.
- **Triggering Liquidation:** If the market value of the locked Bitcoin drops significantly, or if a Locker fails to maintain the required collateral ratio, liquidators may initiate the sale of the Locker's collateral to cover potential losses.
- **Mechanism for Liquidation:** Liquidation is conducted through the Core Chain platform, where the insufficient collateral is sold off to maintain the necessary backing for coreBTC. During the process, the Liquidators use coreBTC to buy the collateralized CORE tokens at a discounted price, and the coreBTC is burned. This pushes the collateral ratio up and restores the Locker to a healthy condition. When the coreBTC is burned its supply is reduced and it becomes more scarce, thereby freeing the Locker to take ownership of a quantity of the underlying bitcoin equivalent to the value of the eliminated coreBTC. The Locker is then rebalanced in accordance with the collateral requirements; if the original user who sent bitcoin to that Locker’s address wants their bitcoin  back, they can choose any Locker to get it from. Redemption of coreBTC for bitcoin occurs at a systemic level, it’s not a relationship between one user and one Locker.

![liquidation](../../../../static/img/coreBTC/liquidation-process.png)

## Slashing Process

On the Core Chain, the concept of slashing is crucial to maintaining the integrity and security of coreBTC transactions. Slashing is a punitive measure used to penalize Lockers for misconduct or failure to adhere to the established protocols. There are two primary scenarios where slashing may occur, each designed to protect the system and its users from potential fraud and malfeasance:

### 1. **Unauthorized Movement of Locked Bitcoin**

In this case, slashing occurs if a Locker moves locked Bitcoin without receiving a corresponding burn request from a coreBTC holder. This scenario is considered a serious breach as it directly threatens the 1:1 pegging and trust that coreBTC holders have in the system's ability to securely back their tokens with real Bitcoin.

- **Trigger:** The slashing process is triggered when a Locker transfers any locked Bitcoin to an unauthorized address or for any unauthorized purpose that does not correspond to a legitimate and verified request to redeem coreBTC.
- **Detection and Reporting:** This misconduct can be detected through the Core Chain's monitoring systems or by other participants in the network, often referred to as Guardians, who observe and report any suspicious Locker activities.
- **Consequence:** Upon confirmation of the unauthorized transfer, a portion of the Locker’s collateral is seized and used to compensate for the discrepancy created in the system. This not only penalizes the Locker but also helps to re-establish the balance of backed and circulating coreBTC, maintaining the system's integrity.

![slashing](../../../../static/img/coreBTC/slashing-1.png)

### 2. **Failure to Release Bitcoin Upon coreBTC Redemption**

This scenario occurs when a coreBTC holder decides to redeem their tokens for the underlying Bitcoin, but the Locker responsible for releasing the Bitcoin fails to do so within the designated timeframe.

- **Trigger:** A coreBTC holder submits a burn transaction, effectively destroying a certain amount of coreBTC with the expectation of receiving an equivalent amount of Bitcoin from a Locker. If the Locker does not process this transaction and release the Bitcoin as required, slashing is triggered.
- **Detection and Response:** Similar to the first case, this failure can be detected by network monitors or reported by users. Upon verification that the Locker has not fulfilled the redemption request in time, the system initiates a slashing protocol.
- **Consequence:** A significant portion of the Locker's collateral is slashed as a punitive and compensatory measure. The slashed collateral is typically used to ensure that the user receives their Bitcoin, preserving trust in the coreBTC system and compensating for any potential losses incurred by the delay or failure.

![slashing](../../../../static/img/coreBTC/slashing-2.png)

## Conclusion

The design of coreBTC in Core Chain presents a robust framework for integrating Bitcoin into DeFi applications while maintaining its fundamental characteristics of security and decentralization. Through a well-structured system of minting, redemption, liquidation, and slashing, all backed by strict collateral requirements, coreBTC ensures that Bitcoin's value can be leveraged in new and innovative ways without compromising the trust and security that define it.
