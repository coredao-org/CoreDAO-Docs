---
sidebar_label: Mechanics
hide_table_of_contents: false
sidebar_position: 2
---

# Core Mechanics
---

## Core Ignition Dashboard
<p align="center">
  <img width="500" alt="Screenshot 2025-05-12 at 4 09 52 PM" src="https://github.com/user-attachments/assets/7956ac48-8450-4cdc-a001-a9a6be4ae309" />
</p>

  
### Core Ignition Profile  
The Core Ignition Profile is a personalized dashboard connected to the user account, allowing users to showcase their achievements and engagement. It enables users to:
1. Display a customized username and avatar
2. Connect X (Twitter) and display its profile photo
3. Track high-level engagement status
4. Display the badges earned

To update the user profile, click on the profile meatballs menu.
<p align="center">
  <img width="288" alt="Ignition Profile meatballs menu" src="https://github.com/user-attachments/assets/d7523504-df48-4f39-93f3-94e472a03a9a"/>
</p>

  
### Ignition Wallet Balance 
Ignition Wallet balance displays a subset of whitelisted assets the account holds on Core. Users can earn Sparks (points) by bridging/holding assets with extra Sparks boost on Core.

  
### Ignition dApp Balance 
Ignition dApp balance reflects the assets the user has deposited inside the whitelisted dApps on Core. Users can also boost Sparks by interacting with whitelisted dApps on Core.

### Whitelisted Assets
A list of token assets eligible for earning Sparks on Core Ignition. Refer to the [How to Boost Multipliers](#how-to-boost-multipliers) section for the full list.

### Whitelisted dApps
A list of decentralized applications where user interactions contribute to earning Sparks on Core Ignition. Visit the '[Explore dApps](https://ignition.coredao.org/dashboard?tab=explore)' tab on the Ignition Dashboard for full details.

### Whitelisted Pools
Liquidity pools from a whitelisted DEX dApp that includes at least one whitelisted token, qualifying for Sparks on Core Ignition.

---
  
### How to Boost Sparks 
Sparks are cumulative points reflecting how active users are in Core ecosystem, updated daily at 00:00 UTC and appear on Leaderboard. Users earn Sparks daily through:

**1. Assets in Ignition Wallet Balance:**
The amount and type of whitelisted assets users bridge to Core will be reflected in the user's Ignition Wallet Balance. By holding these assets on Core, users will earn Sparks. Sparks are calculated daily based on the wallet balance of the user.

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
| Coretoshi NFT | 200 | Unlimited |

**3. Campaign Joined:**
Core Ignition will feature flash or time-limited campaigns on a rolling basis, offering users special opportunities to supercharge Sparks. Stay connected by checking the in-app campaign sections and following Core's official announcements on [X (Twitter)](https://x.com/Coredao_Org) for the latest updates.

**4. Invite New Users to Join Ignition:**
For those new to Core Ignition, bridge $50 USD worth of whitelisted assets to Core to unlock a permanent invite link. For users who have signed up in Season 2, the invite code is automatically unlocked. By inviting new users to Core Ignition, users will receive 10% of the daily Sparks earned by introducing first-degree invitees and 2% from second-degree invitees. Please note that a cap may apply to the maximum Sparks each user can earn through referrals. 

---

### How to Boost Multipliers 
Multipliers are dynamic variables to multiply Spark points. The consolidated multiplier displayed on the user's dashboard reflects the total multiplier currently applying to the entire asset of the user. This total multiplier is calculated by averaging out the multipliers distributed across the assets. There are two types of baseline multipliers that affect Sparks points through specific activities, independent of any special campaigns:

- **Token Multipliers**: These increase points earned based on token-related activities and holdings.
- **Volume Multipliers**: These amplify points earned through volume-related activities.


<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/4f7ceee6-6a93-4cce-a382-5e6002ce2819"/>
</p>

### 1. Token Multipliers
Users can benefit from baseline token multipliers for whitelisted assets held in their wallets or deposited into various dApps. Different whitelisted tokens are associated with specific multipliers, which vary depending on the type of activity performed with these dApps, as detailed below:

| Whitelisted Assets  |Wallet Assets | Lending | Borrowing | Liquidity Provision | 
| ------------- |-------------| ------------- |-------------| ------------- |
| stCORE, CLND, dualCORE | 1x | 2.5x | 3x | 3.5x |
| USDT, USDC | 1x | 1.5x | 2x | 3x |
| CORE, WCORE | 1x | 1.5x | 2x | 2.5x |
| wETH, solvBTC.CORE | n/a | 1.4x | 1.6x | 1.8x |
| aBTC, BTCB, nBTC, oBTC, pumpBTC, rBTC, suBTC, uBTC, wBTC | n/a | 1.2x | 1.4x | 1.6x |
| BTC.B, SolvBTC.b, SolvBTC.m | n/a | 1x | 1.2x | 1.6x |

  
>***Example 1:***
>If the user holds 10 stCORE in Ignition wallet balance, the user gets:  
>Daily Sparks = stCORE amount * stCORE price * Multiplier = 10 stCORE * $1.5 (assumed) * 1 = 15 

  
>***Example 2:***
>If the user lends 20 stCORE in a Lending Protocol, the user get:  
>Daily Sparks = stCORE amount * stCORE price * Multiplier = 20 stCORE * $1.5(assumed) * 2.5 = 75


### 2. Volume Multipliers
Users who interact with [whitelisted pools](#whitelisted-pools) receive multipliers based on the USD equivalent of their trading volume. The multiplier value increases progressively as trading volume grows, with different multiplier values applied according to specific volume thresholds as below:

| Volume Range  | Multipliers | 
| ------------- |-------------|
| $0 ~ >$100 | 1x |
| $10 ~ >$1,000  | 1.5x |
| $1,000 ~ >$10,000 | 2x |
| $10,000 ~ >$50,000| 2.5x |
| $50,000 & above | 3x |
  

Find out specific Multiplier opportunities in the Explore dApps section:
<p align="center">
  <img width="500" alt="dApp tab" src="https://github.com/user-attachments/assets/a2067f6d-0202-474f-8acb-c9cd2d4007e9"/>
</p>


In addition to holding strategic tokens and deploying assets into various dApps, users can also earn additional Multipliers by taking actions from special campaigns. The multipliers from campaigns can stack on top of the baseline multipliers highlighted above to further boost Sparks. Baseline multipliers are subject to change without prior notice.  
