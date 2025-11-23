---
sidebar_label: Guide d’intégration du double staking
hide_table_of_contents: false
sidebar_position: 2
---

# Guide d'intégration du double staking

Core est une blockchain Layer 1 compatible EVM, conçue pour être la plateforme de contrats intelligents évolutive de Bitcoin. Il utilise les timelocks CLTV natifs de Bitcoin et la puissance de hachage du minage pour faire de Bitcoin à la fois un protecteur et un actif au sein d’un écosystème d’applications décentralisées.

Le consensus Satoshi Plus de Core combine le Delegated Proof of Work (DPoW), le staking Bitcoin auto‑custodial et le Delegated Proof of Stake (DPoS) pour élire les validateurs, impliquant les mineurs Bitcoin, les stakers Bitcoin et les stakers CORE afin d'améliorer la sécurité et l'alignement des incitations.

## Différents mécanismes de staking sur Core

| Type                           | Réseau  | Mécanisme               | Montant                                                                                             | Durée                                                                            | Transférer le validateur de staking                                         | Éligibilité aux récompenses                                                                                                                                                                                | Slashing                                                                                                                  |
| ------------------------------ | ------- | ----------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **CORE Staking**               | Core    | Preuve d’enjeu déléguée | Minimum 1 CORE                                                                                      | Aucune période de blocage                                                        | Aucune perturbation des récompenses de staking                              | Vous devez terminer un cycle de staking complet (00:00:00 – 23:59:59 UTC) pour obtenir des récompenses. | Delegators’ staked principal remains safe, but they may miss daily rewards if their validator is slashed. |
| **Self-Custodial BTC Staking** | Bitcoin | Delegated Proof of Work | No minimum (script)<br/>Minimum 0.01 BTC (UI) | No minimum (script)<br/>5-day minimum (UI) | Interrupts staking, causing a loss of rewards for that day. | Must complete a full staking round (00:00:00 - 23:59:59 UTC) to earn rewards.                           | Delegators’ staked principal remains safe, but they may miss daily rewards if their validator is slashed. |

|                  |                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dual Staking** | Dual staking occurs when the same Core address is used for both CORE staking and as the reward address for BTC staking. Based on the [BTC:CORE staking ratio](https://docs.coredao.org/docs/stake-and-delegate/dual-staking-working), stakers fall into one of four tiers. Higher CORE staking relative to BTC increases BTC staking yield. |

## The First Self-Custodial Bitcoin Staking Mechanism

Satoshi Plus's Self-Custodial Bitcoin Staking component is the first live mechanism that allows Bitcoin holders to earn a trustless yield without requiring new trust assumptions. It enables Bitcoin holders to earn CORE token rewards by participating in Core's consensus without relinquishing custody of their Bitcoin, leveraging Bitcoin's native **CheckLockTimeVerify (CLTV) opcode**. This transforms idle Bitcoin into a productive asset while preserving security and sovereignty, with no risk of loss or compromise through wrapping or bridging.

### Core Principles

- **100% Self-Custody:** Bitcoin remains within the user's wallet at all times.
- **Zero Principal Risk:** Funds remain fully secured by Bitcoin's own rules
- **Trustless Yield:** No third-party intermediaries.
- **Bitcoin-Native Security:** Staked Bitcoin is secured entirely by Bitcoin's consensus mechanism.

### How It Works

1. **Time-locking Bitcoin via CLTV:** Holders lock Bitcoin for a chosen duration (**min 0.01 BTC, min 24 hours for rewards**) using CLTV. During this period, Bitcoin is locked.
2. **Specifying Validator & Reward Address Details:** When creating a timelock transaction, the `OP_RETURN` data should include the following key details:
   1. **Validator Information:** The address of the Core validator to whom the user intends to delegate their Bitcoin.
   2. **EVM Wallet Address:** The EVM wallet address where the user wishes to receive their CORE token rewards.
3. **Relayer and Consensus Integration:** Core's relayer network scans the Bitcoin network for valid CLTV timelocks with embedded metadata, validates transactions, transmits data to Core's consensus, and updates validator election weights based on delegated Bitcoin.
4. **Reward Distribution:** When an elected validator is active and performs duties, they receive CORE tokens as validator rewards. The validators keep a specific portion, also known as commission, and distribute the rest to their supporting Bitcoin delegators. These rewards are sent to the delegator’s provided EVM wallet address. Reward amounts vary based on validator liveness and the amount of Bitcoin staked in support.
5. **Timelock Expiration:** After the lock period expires, Bitcoin is unlocked, and validator vote and reward eligibility expires. New timelocks are required for continued participation. There is no auto-renewal—ongoing participation requires a new timelock transaction.

## Dual Staking on Core

Dual Staking enhances Core’s self-custodial BTC staking by allowing participants to stake both BTC and CORE to maximize Bitcoin yield. Rewards are paid in CORE and scale with the BTC:CORE ratio staked. While BTC rewards are boosted, CORE staking rewards remain unaffected.

By meeting specific CORE-to-BTC predefined staking ratios/thresholds, users gain boosted Bitcoin staking rewards, paid in CORE. While Dual Staking enhances BTC staking yields, it does not affect CORE staking rewards directly.

### Boosted Yield Levels

Under Dual Staking, the following yield tiers for Bitcoin Staking exist based on the proportion of CORE staked relative to Bitcoin staked.

- Base Layer \= BTC Staking Rate for solo staking BTC.
- Boost Layer \= BTC Staking Rate \+ Level 1 Boosted Yield Multiplier (Requires Staking 8,500 CORE per 1 BTC)
- Super Layer \= BTC Staking Rate \+ Level 2 Boosted Yield Multiplier (Requires Staking 25,500 CORE per 1 BTC)
- Satoshi Layer \= BTC Staking Rate \+ Level 3 Boosted Yield Multiplier (Requires Staking 68,000 CORE per 1 BTC)

**Yield Dynamics & Tier Activation**

- BTC staking yields fluctuate daily based on CORE/BTC prices and network conditions.
- CORE rewards are distributed based on the amount of delegated BTC, the validator selected, and the total delegation that the validator receives.
- Tier multipliers are dynamic and subject to governance changes due to market changes.

**Activating a Higher Tier**  
If you add more CORE after BTC is already staked:

1. Wait until the next 00:00 UTC.
2. Claim rewards once after 00:00 UTC.

Your new tier takes effect immediately after the claim.

**How to Qualify**

- Stake both BTC (via timelock transaction) and CORE (via validator delegation).
- Use the **same Core address** for CORE staking and BTC reward collection.

## Core Networks & Environments

| Network     |             Chain ID            | Currency | RPC                                                                                                                               | Explorer                                                                                                                           | Staking Website                                                                                                                                                                                 | Faucet                                                                                                                                           |
| ----------- | :-----------------------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mainnet** | 1116 (0x45c) |  `CORE`  | https://rpc.coredao.org                                                           | [scan.coredao.org](https://scan.coredao.org/)                                                      | [https://stake.coredao.org/](https://stake.coredao.org/) (Supports Bitcoin Mainnet)                                          | —                                                                                                                                                |
| **Testnet** | 1114 (0x45a) | `tCORE2` | [https://rpc.test2.btcs.network](https://rpc.test2.btcs.network/) | [https://scan.test2.btcs.network](https://scan.test2.btcs.network) | [https://scan.test2.btcs.network/faucet](https://scan.test2.btcs.network/faucet) (Supports Bitcoin Testnet4) | [https://scan.test2.btcs.network/faucet](https://scan.test2.btcs.network/faucet) |

⚠️ **Note**: Core Testnet **1115 is deprecated**. Always use **1114** for testing.

For more details on network configuration, refer [here](https://docs.coredao.org/docs/Dev-Guide/network-config%20).

## Staking Tools

- **Core Official Staking Websites**
  - [Mainnet Staking Site](https://stake.coredao.org/) (Supports Bitcoin Mainnet)
  - [Testnet Staking Site](https://stake.test2.btcs.network/) (Supports Bitcoin Testnet 4)

- **Staking Script (Advanced Users)**
  - [Bitcoin Staking Repository](https://github.com/coredao-org/btc-staking-tool)
  - [Core Staking Repo](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/CoreAgent.sol#L166)

## Smart Contracts & ABIs

All verified ABIs and addresses are in [core-genesis-contracts](https://github.com/coredao-org/core-genesis-contract).

| Contract                                                                                                                            | Role                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PledgeAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/PledgeAgent.sol)       | This contract manages user delegation, including both the delegation of CORE from token holders and the delegation of PoW from Bitcoin miners. This contract is deprecated as of version 1.0.12 and has been replaced by Stakehub.sol and other agent contracts.                                                               |
| [StakeHub.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/StakeHub.sol)             | This contract deals with the overall hybrid score and reward distribution logics. It replaces the existing role of PledgeAgent.sol to interact with CandidateHub.sol and other protocol contracts during the turnround process.                                                                                                                |
| [CoreAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/CoreAgent.sol)           | This contract handles CORE staking.                                                                                                                                                                                                                                                                                                                                                            |
| [BitcoinAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BitcoinAgent.sol)     | This contract handles BTC staking. It interacts with BitcoinStake.sol for non-custodial BTC staking correspondingly.                                                                                                                                                                                                                                           |
| [BitcoinStake.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BitcoinStake.sol)     | This contract handles non-custodial BTC staking.                                                                                                                                                                                                                                                                                                                                               |
| [BTCLightClient.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BtcLightClient.sol) | This contract implements a BTC light client on the Core blockchain. Relayers transmit BTC block headers to Core by calling this contract. It also calculates powers of BTC miners in each round, which is used to calculate the hybrid score and reward distribution. It also provides support to verify Bitcoin transactions for BTC staking. |
| [`HashPowerAgent.sol`](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/HashPowerAgent.sol)               | This contract handles Bitcoin hash power staking (measured in BTC blocks).                                                                                                                                                                                                                                                                                                  |

## Staking CORE and BTC Programmatically

This section explains how to stake assets **programmatically** on the Core network. As of Core protocol version 1.1.12, Core supports staking of CORE and BTC tokens.

### 1. CORE Native Token

#### Stake CORE

To stake CORE, call [CoreAgent.delegateCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L166) method:  
`function delegateCoin(address candidate) external payable;`

- `candidate`: operator address of a registered and active validator (does not need to be elected).
- `msg.value`: amount of CORE to stake.

#### Unstake CORE

To withdraw staked CORE, call [CoreAgent.undelegateCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L179):  
`function undelegateCoin(address candidate, uint256 amount) public;`

- **Parameters:** validator address and amount to unstake.
- Note: Rewards are not automatically sent when unstaking. Call [StakeHub.claimReward()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/StakeHub.sol#L228) separately to claim them.

#### Transfer CORE Stake

To move stake between validators without losing rewards, call [CoreAgent.transferCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L191):  
`function transferCoin(address sourceCandidate, address targetCandidate, uint256 amount) public;`

- **Parameters:** source validator, target validator, and amount of CORE tokens to transfer.
- Note: the target validator must be active.

### 2. Bitcoin (BTC)

Bitcoin staking requires constructing a native BTC transaction that:

- Locks UTXOs with **CheckLockTimeVerify (CLTV)**, and
- Includes validator and reward address metadata in an **`OP_RETURN`** output.

For more information on how to stake and redeem Bitcoin assets on the Core blockchain, refer to [BTC Staking Design](https://docs.coredao.org/docs/Learn/products/btc-staking/design).

Sample repository on how to do it programmatically using TypeScript: [btc-staking-tool](https://github.com/coredao-org/btc-staking-tool).

#### Stake BTC (Timelock)

To submit a BTC stake transaction on Core, please refer to the following sample [Stake script](https://github.com/coredao-org/btc-staking-tool/blob/main/src/stake.ts).

#### Redeem BTC

To redeem staked BTC after the timelock expires, please refer to the following sample [Redeem script](https://github.com/coredao-org/btc-staking-tool/blob/main/src/redeem.ts).

#### Relaying BTC Staking Transaction

Relayers, part of the Core blockchain infrastructure, transmit Bitcoin stake and redeem transactions from the Bitcoin network to the Core network. Additionally, users can transmit Bitcoin transactions to the Core network independently if they choose to. To transmit a stake transaction, [BitcoinStake.delegate()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L158) method should be called. To transmit a redeem transaction [BitcoinStake.undelegate()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L206) method should be called.

#### Transfer BTC Stake

Core supports transferring staked BTC assets to a different validator. To move BTC stake to a new validator, call [BitcoinStake.transfer()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L353) method:

`function transfer(bytes32 txid, address targetCandidate) external;`

- **Parameters:** staked BTC transaction ID (`txid`) and target validator address.
- **Note:** Unlike CORE transfers, BTC transfers result in the loss of rewards for the transfer day.

### 3. Claim Rewards

To collect accrued rewards, call [StakeHub.claimReward()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/StakeHub.sol#L228) method:

`function claimReward() external returns (uint256[] memory rewards);`

- Claims rewards for **all stake types** (CORE and BTC).
- The returned array contains amounts in this order:
  1. CORE rewards
  2. BTC rewards

### 4. Wallet Connection

The official staking portal ([stake.coredao.org](https://stake.coredao.org)) integrates with standard wallet libraries for wallet connections.

#### Ledger Wallet library

```ts
import { AppClient, DefaultWalletPolicy, PsbtV2, DefaultDescriptorTemplate } from 'ledger-bitcoin';
import TransportWebHid from '@ledgerhq/hw-transport-webhid';
const transport = await TransportWebHid.create();
      const app = new AppClient(transport);
      this.app = app;
      const result = await app.getAppAndVersion();
      const appName = isMainnet ? 'Core' : 'Core Testnet';
      if (result.name !== appName) {
        throw new Error(`Connect ledger app correctly ,Please open ${appName} app on your Ledger device`);
      } else {
        return transport;
      }
```

#### Xverse Wallet library

```ts
import { AddressPurpose, BitcoinNetworkType, request } from 'sats-connect';
try {
        const response = await request('wallet_connect', null);
        if (response.status === 'success') {
          const network = response.result.network.bitcoin.name;
          if (network !== BitcoinNetworkTypeMap[bitcoinSupportChain()]) {
            const res = await request('wallet_changeNetwork', {
              name: BitcoinNetworkTypeMap[bitcoinSupportChain()]
            });
            if (res.status === 'error') {
              bitcoinStore.setBitcoinAppAccounts(null);
              console.error(res.error);
              throw new Error(res.error.message);
            }
          }
          const addressRes = await request('getAddresses', {
            purposes: [AddressPurpose.Payment]
          });
          if (addressRes.status === 'error') {
            console.error(addressRes.error);
            throw new Error(addressRes.error.message);
          }
          const accounts = addressRes.result.addresses?.filter(
            (i: any) => i.purpose === AddressPurpose.Payment && i.publicKey !== ''
          );
          bitcoinStore.setBitcoinAppAccounts(accounts);
          console.log(JSON.stringify(accounts));
          forEach(accounts, (account) => {
            hardWalletType = account.walletType;
          });
          return { accounts: accounts || [], network: bitcoinSourceNetworkName(), hardWalletType };
        } else {
          bitcoinStore.setBitcoinAppAccounts(null);
          console.error(response.error);
          throw new Error(response.error.message);
        }
      } catch (error: any) {
        bitcoinStore.setBitcoinAppAccounts(null);
        console.error(error);
        throw new Error('Connect XVerse wallet failed, Check your wallet has installed');
      }
```

## API Endpoints

- **Core Scan API Endpoints**
  - [Mainnet API Endpoints](https://docs.coredao.org/docs/api/core-api-mainnet-docs)
  - [Testnet API Endpoints](https://docs.coredao.org/docs/api/core-api-testnet-docs)
- **Staking API Endpoints**
  - [Mainnet Staking API Endpoints](https://staking-api.coredao.org/)
  - [Testnet Staking API Endpoints](https://staking-api.test2.btcs.network/)
- **API Playgrounds**
  - [Mainnet Staking API (Chain ID: 1116)](https://docs.coredao.org/docs/api/mainnet-staking-api-docs)
  - [Testnet Staking API (Chain ID: 1114)](https://docs.coredao.org/docs/api/testnet-staking-api-docs)

## Data Retrieval Guidelines for Staking UX

- **Get Details of All Validators**: For the staking user interface, the validator with the highest reward rate should be automatically selected by default, as retrieved from the Validator Details API endpoint, for validator selection.
  - For BTC timelocking, select the validator address with the highest “**estimatedBTCRewardRate**” from the response of [this endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators).
  - For CORE staking, select the validator address with the highest “**estimatedCORERewardRate**” from the response of [this endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators).

- **Projected Reward Rate Display:** To display the projected reward rate, retrieve data from the [staking reward rate API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_rewards_reward_rate), input the required key parameters, and output the calculated projected reward rate.

- **Dual Staking Tier Requirement:** Retrieve the Dual Staking tier requirements using the "stakeRate" field from the [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade). This field specifies the amount of CORE tokens that must be staked for each 1 timelocked BTC to meet the criteria for each Dual Staking Tier. Please note that the Dual Staking tier requirements may vary periodically due to protocol updates or network conditions.

- **Dual Staking Tier Reward Rate:** Retrieve the Dual Staking tier reward rate using the "percentage" field from the [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade). This field specifies the adjustment to the "estimatedBTCRewardRate" from the [Validator details API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators), where the value represents the percentage adjustment (e.g., 1000 \= 10%, 2000 \= 20%, 3000 \= 30%, up to 50000 \= 500%). Please note that the Dual Staking tier reward rate may be adjusted periodically due to protocol updates or network conditions.

- **Current Staking Status:** Retrieve the current staking status for a specified Core address using the [Staking Summary API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_core).
  - The "**Staked Amount**" field indicates the quantity of tokens actively staked
    - The "**Pending Reward**" field indicates the CORE rewards earned but not yet claimed
    - The "**Claimed Reward**" field indicates the CORE rewards that have been earned and claimed

- **Additional CORE for Next Dual Staking Tier:** Using the [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade) and [Staking Summary API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_core), calculate and display the additional amount of CORE tokens that must be staked for the account to advance to the next Dual Staking tier.