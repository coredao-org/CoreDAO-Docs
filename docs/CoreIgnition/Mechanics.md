---
sidebar_label: Mechanics
hide_table_of_contents: false
sidebar_position: 2
---

# Core Mechanics
---

## Core Ignition Dashboard
<p align="center">
  <img width="500" alt="Ignition_Dashboard_new" src="https://github.com/user-attachments/assets/7956ac48-8450-4cdc-a001-a9a6be4ae309" />
</p>



### Core Ignition Profile  
The Core Ignition Profile is a personalized dashboard connected to the user account, allowing users to showcase their achievements and engagement. It enables users to:
1. Display a customized username and avatar
2. Connect X (Twitter) and display its profile photo
3. Track high-level engagement status
4. Display the badges earned

To update the user profile, click on the profile menu.
<p align="center">
  <img width="288" alt="Ignition Profile meatballs menu" src="https://github.com/user-attachments/assets/d7523504-df48-4f39-93f3-94e472a03a9a"/>
</p>


### Ignition Wallet Balance
The Ignition Wallet balance displays a subset of whitelisted assets that the account holds on Core. Users can earn Sparks (points) by bridging/holding assets with an extra Sparks boost on Core.

### Ignition dApp Balance
The Ignition dApp balance reflects the assets the user has deposited within the whitelisted dApps on Core. Users can also boost Sparks by interacting with whitelisted dApps on Core.


### Whitelisted Assets
A list of token assets eligible for earning Sparks on Core Ignition. Refer to the [How to Boost Multipliers](#how-to-boost-multipliers) section for the complete list.


### Whitelisted dApps
A list of decentralized applications where user interactions contribute to earning Sparks on Core Ignition. Visit the '[Explore dApps](https://ignition.coredao.org/dashboard?tab=explore)' tab on the Ignition Dashboard for complete details.

### Whitelisted Pools
Liquidity pools from a whitelisted DEX dApp that includes at least one whitelisted token, qualifying for Sparks on Core Ignition.

---
## Core Ignition Leaderboard


### 1. Leaderboard
Ranks users based on a combination of assets & dApp engagements, transaction count, and transaction volume, rewarding overall contribution to the ecosystem.

<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 51 44 PM" src="https://github.com/user-attachments/assets/39d78e16-e6a1-4787-b0f3-14d4dfb1f112" />
</p>

### 2. Activity Leaderboard
Ranks users by transaction count and volume, rewarding both frequent activity and high-value moves. Designed to give everyday users fair recognition through Spark Boosts, regardless of wallet size.


<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 52 02 PM" src="https://github.com/user-attachments/assets/674c4743-7299-4d75-877f-823621182cc6" />
</p>


---


## How to Boost Sparks
Sparks are cumulative points reflecting how active users are in the Core ecosystem, updated daily at 00:00 UTC and appear on the Leaderboard. Users earn Sparks daily through:


**1. Assets in Ignition Wallet Balance:**
The amount and type of whitelisted assets users bridge to Core will be reflected in the user's Ignition Wallet Balance. By holding these assets on Core, users will earn Sparks. Sparks are calculated daily based on the user's wallet balance.


**2. Activities with Core Ecosystem dApp:**
Users could also earn Sparks by interacting with whitelisted dApps on Core Ignition. Each on-chain activity with these dApps will contribute Spark points to the user account. More details will be updated soon.

| Transaction Type | Sparks per Transaction | Maximum Sparks per Day |
| ------------- |-------------| ------------- |
| Liquidity Provision | 800 | 8,000 |
| Borrowing | 400 | 12,000 |
| Lending | 200 | 4,000 |
| Swapping | 100 | 3,000 |
| Interacting with Gaming dApps | 50 | 1,000 |
| Others | 50 | 2,000 |
| Coretoshi NFT, Doopidoo | 200 | Unlimited |

**3. Campaign Joined:**
Core Ignition will feature flash or time-limited campaigns on a rolling basis, offering users special opportunities to supercharge Sparks. Stay connected by checking the in-app campaign sections and following Core's official announcements on [X (Twitter)](https://x.com/Coredao_Org) for the latest updates.

**4. Invite New Users to Join Ignition:**
For those new to Core Ignition, bridge $50 USD worth of whitelisted assets to Core to unlock a permanent invite link. For users who have signed up in Season 2, the invite code is automatically unlocked. By inviting new users to Core Ignition, users will receive 10% of the daily Sparks earned by introducing first-degree invitees and 2% from second-degree invitees. Please note that a cap may apply to the maximum Sparks each user can earn through referrals.

---

## How to Boost Multipliers
Multipliers are dynamic variables to multiply Spark points. The consolidated multiplier displayed on the user's dashboard reflects the total multiplier currently applied to the user's entire asset. This total multiplier is calculated by averaging out the multipliers distributed across the assets. Two types of baseline multipliers affect Sparks points through specific activities, independent of any special campaigns:

- **Token Multipliers**: These increase points earned based on token-related activities and holdings.
- **Volume Multipliers**: These amplify points earned through volume-related activities.

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/4f7ceee6-6a93-4cce-a382-5e6002ce2819"/>
</p>

### 1. Token Multipliers
Users can benefit from baseline token multipliers for whitelisted assets held in their wallets or deposited into various dApps. Different whitelisted tokens are associated with specific multipliers, which vary depending on the type of activity performed with these dApps, as detailed below:

| Whitelisted Assets  |Wallet Assets | Lending | Borrowing | Liquidity Provision |
| ------------- |-------------| ------------- |-------------| ------------- |
| stCORE, CLND | 1x | 2.5x | 3x | 3.5x |
| USDT, USDC | 1x | 1.5x | 2x | 3x |
| CORE, WCORE | 1x | 1.5x | 2x | 2.5x |
| wETH, solvBTC.CORE | n/a | 1.4x | 1.6x | 1.8x |
| aBTC, BTCB, nBTC, oBTC, pumpBTC, rBTC, suBTC, uBTC, wBTC | n/a | 1.2x | 1.4x | 1.6x |
| BTC.B, SolvBTC.b, SolvBTC.m | n/a | 1x | 1.2x | 1.6x |


>***Example 1:***
>If the user holds 10 stCORE in the Ignition wallet balance, the user gets:  
>Daily Asset Sparks = stCORE amount * stCORE price * Multiplier = 10 stCORE * $1.5 (assumed) * 1 = 15

>***Example 2:***
>If the user lends 20 stCORE in a Lending Protocol, the user gets:  
>Daily Asset Sparks = stCORE amount * stCORE price * Multiplier = 20 stCORE * $1.5(assumed) * 2.5 = 75

### 2. Volume Multipliers
Users who interact with [whitelisted pools](#whitelisted-pools) receive multipliers based on the USD equivalent of their trading volume per day. The multiplier value increases progressively as trading volume grows, with different multiplier values applied according to specific volume thresholds as below:


| Volume Range  | Multipliers |
| ------------- |-------------|
| $0 ~ > $100 | 1x |
| $100 ~ > $1,000  | 1.5x |
| $1,000 ~ > $10,000 | 2x |
| $10,000 ~ > $50,000| 2.5x |
| $50,000 & above | 3x |
 
>***Example Calculation:***
>If a user trades the equivalent of $51,000 in volume a day, the user will receive:  
>Daily Volume Sparks: (51,000 - 50,000) * 3x + (50,000 -10,000) * 2.5x + (10,000-1,000) * 2x + (1,000-100) 1.5x + 100 * 1x = 122,450


Find out specific Multiplier opportunities in the Explore dApps section:
<p align="center">
  <img width="500" alt="dApp tab" src="https://github.com/user-attachments/assets/a2067f6d-0202-474f-8acb-c9cd2d4007e9"/>
</p>

In addition to holding strategic tokens and deploying assets into various dApps, users can also earn additional Multipliers by taking actions from special campaigns. The multipliers from campaigns can stack on top of the baseline multipliers highlighted above to boost Sparks further. Baseline multipliers are subject to change without prior notice.  

---
## Coretoshi NFT Holders

With the new Coretoshi Attribution layer, Coretoshi NFT holders now enjoy extra benefits:

1. 200 additional Sparks per transaction with [no limit](#activities-with-core-ecosystem-dapp);
2. 1.5x extra Sparks Multiplier automatically applied on top of users' existing Volume Multiplier.

>***Example Calculation:***
>If a Coretoshi holder trades the equivalent of $51,000 in volume a day, this holder will receive:  
>Daily Volume Sparks: 1.5x * [(51,000 - 50,000) * 3x + (50,000 -10,000) * 2.5x + (10,000-1,000) * 2x + (1,000-100) 1.5x + 100 * 1x]  = 183,675

<p align="center">
  <img width="500" alt="Coretoshi_Attribution" src="https://github.com/user-attachments/assets/14619a45-9244-433a-89b5-195e7fa10dc0" />
</p>

Visit the [blog](https://coredao.org/explore/blog/coretoshi-nft-sparks-multiplier-core-ignition-rewards) for more details and updates for new benefits.

---
## Sparks Slashing
Sparks Slashing ensures fair rewards by reducing Sparks for users who become inactive. Users are warned if their activity drops significantly, and Sparks are only slashed after repeated violations, but any new activity stops slashing immediately.

### 1. Slashing mechanism:
- Inactive users lose Sparks: If a user earns 90% fewer Sparks than their average for a week, Sparks are slashed starting on the 2nd violation.
- Slashing increases over time.
- Users receive warnings before the slashing occurs.
- Slashing Mechanism kicks in 1 month after sign-up.
- Slashing calculation happens every Sunday.

### 2. Violation criteria:
If the average daily Sparks for that week < Average daily sparks for the season * 10%

### 3. Slashing criteria:
- Total accumulated Sparks  * (0.9^# of violation - 1)
- 1st violation: Total Sparks * 0.9^0 = NO slashing
- 2nd violation: total sparks * 0.9^1 = 10% slashing
- 3rd violation: total sparks * 0.9^2 = 19% slashing


>***Example Calculation:***  
>Assuming that a user got 50,000 total Sparks at the start of season 3 and no Sparks since then:  
>- 1st violation: NO slashing  
>- 2nd violation: 50,000 - 50,000 * (0.9 ^1) = 5,000 Sparks are deducted  
>- 3rd violation: 45000 - 45000*(0.9^2) = 8,550 Sparks are deducted  
>- 4th violation: 36,450 -36,450*(0.9^3) = 9,878 Sparks are deducted  

Visit the [blog](https://coredao.org/explore/blog/core-ignition-season-3-updates) for more details.