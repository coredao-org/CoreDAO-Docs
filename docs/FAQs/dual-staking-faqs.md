---
sidebar_label: Dual Staking FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking FAQs
---

### 1\. Are there any requirements for Dual staking?

In order to enable higher yields for Bitcoin staking through Dual Staking, users must meet the following requirements: 

1. Stake both CORE and Bitcoin simultaneously, ensuring that the amount of CORE staked exceeds the minimum dual staking threshold  **AND**   
2. The CORE staking wallet address ***must*** match the designated CORE rewards address for Bitcoin staking to which the yield is paid to.

### 2\. Under Dual Staking, do stakers earn staking rewards on both CORE and Bitcoin staked?

Dual Staking is specifically designed to boost Bitcoin staking yields and does not impact the yield earned from CORE staking. As with independent staking of Bitcoin and CORE, users will receive separate rewards for each asset. However, if the amount of staked CORE exceeds a certain threshold, the Bitcoin staking yield will receive an additional boost. Note that, the additional yield percentages applies solely to Bitcoin staking, allowing Bitcoin stakers to maximize returns without altering the reward structure for CORE staking.

### 3\. What are the steps institutional customers need to take to participate in Dual Staking?

Institutional customers seeking to benefit from Dual Staking ***must*** stake both Bitcoin and CORE simultaneously, with the CORE amount staked being above a certain threshold to unlock the enhanced rewards percentages for Bitcoin staking.   
Additionally, they are required to ensure that the CORE reward address for Bitcoin Staking matches the CORE staking address. This alignment is crucial, as it verifies that the staked Bitcoin and CORE belong to the same owner. Staking platforms should also verify that the CORE addresses align to ensure that the users receive the correct dual staking yield rates based on their combined staking activity.

### 4\. For users already staking Bitcoin and CORE, is there anything they need to do to take advantage of Dual Staking?

To take full advantage of Dual Staking, users must ensure that the designated Bitcoin staking reward address matches the address used for CORE staking. Users who have staked their Bitcoin and/or CORE across multiple addresses may want to consolidate their staking into a single address to optimize yield and maximize returns and ensure that the staked CORE is above the required threshold to unlock higher yield percentages for Bitcoin staking. 

### 5\. How do users balance CORE and Bitcoin across validators to maximize yield?

In order for users to see the distribution of their delegated CORE, Bitcoin, and Hash for each validator, they can visit Core’s official [staking website](https://stake.coredao.org/). The CORE & Bitcoin staking yields from each validator vary because they're dependent on the total and weighted amount of delegations a validator receives, refer [here](../Learn/core-concepts/satoshi-plus-consensus/rewards#3-validator-rewards) for more details.   
The practice of rebalancing delegations among validators is essential for maximizing overall rewards and maintaining a healthy ecosystem of validators. When a validator receives insufficient delegation, it risks becoming inactive. Conversely, excessive delegation to a single validator may result in reduced rewards for each delegator, as the rewards must be shared among a larger pool of delegators.  
The act of delegators rebalancing their delegation to maximize reward is the driving force to ensure a balanced set of validators. For users who prefer not to actively manage their delegations, it is advisable to distribute stakes equally across all active validators. This approach enhances stability in reward percentages.

### 6\. Is there any risk of losing your Bitcoin assets during dual staking?

Dual Staking is a [non-custodial process](../Learn/products/btc-staking/overview#how-non-custodial-bitcoin-staking-works), allowing users to maintain full control over their assets. Throughout the staking process, Bitcoin remains securely in the user’s wallet.  Stakers face no slashing risk, external smart contract risk, or counterparty risk. The trust assumptions for staking Bitcoin are the same trust assumptions underlying holding Bitcoin.

### 7\. While Bitcoin is timelocked, can users unstake CORE that’s dual staked with Bitcoin? If so, do they lose any rewards earned prior to unstaking CORE?

Users can unstake CORE anytime, just as they can when they stake CORE independently. The only difference is that when the Bitcoin staking reward is calculated, the reward percentage will drop due to the decrease in staked CORE. Note that this reduction only applies to future rewards and doesn't apply to rewards already earned by the user.

### 8\. How do users ensure the CORE reward address for Bitcoin Staking is the same as the CORE staking address when staking through [Core’s staking website](https://stake.coredao.org/)?

On **stake.coredao.org**, to ensure that the CORE reward address for Bitcoin staking is the same as the CORE staking address, make sure you adhere to the following steps:

1. To stake CORE, connect your Core wallet which will then be used for signing the CORE staking transaction.  
2. To stake Bitcoin, first connect **the same Core wallet**, and then connect your Bitcoin wallet. When the Bitcoin staking transaction is constructed through the staking website, it uses the connected Core wallet address as the Core reward address for Bitcoin staking. 

As long as the user always uses the same Core wallet address to stake both CORE and Bitcoin, it will be the same address. The staking transactions for both Bitcoin & CORE are also tracked by the Core address. Once the Core wallet is connected, users can go to "[My Staking](https://stake.coredao.org/mystaking)" section on the [staking website](https://stake.coredao.org/) to see all the CORE and Bitcoin staking transactions, all the accrued rewards in CORE for both Bitcoin staking and CORE staking.

### 9\. What happens to the delegators' reward if the validator they delegated their assets to gets slashed?

If a validator is slashed, the stakers who delegated their CORE or Bitcoin will **not** be slashed. However, given that the validator will not receive the staking reward, the delegators will also miss out on the staking rewards for that round.