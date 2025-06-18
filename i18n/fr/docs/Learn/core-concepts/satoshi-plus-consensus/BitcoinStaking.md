---
sidebar_label: Self-Custodial Bitcoin Staking
hide_table_of_contents: false
sidebar_position: 2
description: Tirer parti du staking Bitcoin dans Satoshi Plus
---

# Self-Custodial Bitcoin Staking (Timelocking)

---

## Aperçu

Self-Custodial Bitcoin Staking enables Bitcoin holders to earn CORE token rewards by participating in Core's consensus—**without ever giving up custody of their Bitcoin**. Leveraging Bitcoin's native CheckLockTimeVerify (CLTV) opcode, this approach transforms idle Bitcoin into a productive asset while preserving its core principles of security and sovereignty.

There is no wrapping, bridging, or exposure to smart contract risk.

## Core Principles

- **100% Self-Custody**: Bitcoin never leaves your wallet
- **Zero Principal Risk**: Funds remain fully secured by Bitcoin's own rules
- **Trustless Yield**: No third-party intermediaries
- **Bitcoin-Native Security**: Staked Bitcoin is secured entirely by Bitcoin's consensus mechanism

## How It Works

### 1. Timelocking Bitcoin via CLTV

Bitcoin's CheckLockTimeVerify (CLTV) opcode allows holders to lock Bitcoin for a chosen duration:

- **Minimum lock period**: 24 hours
- **Flexible duration**: You choose how long to lock
- **Enforced by protocol**: All Bitcoin nodes honor the lock automatically

During this time, the Bitcoin is unspendable—even by the owner—until the lock expires.

### 2. Validator Selection via Metadata

While creating the timelock transaction, you include metadata in the redeem script specifying:

- **Which Core validator** you support
- **Which EVM address** should receive your CORE token rewards

Your voting power on Core is **proportional to the amount of Bitcoin** you timelock in support of a validator.

### 3. Relayer and Consensus Integration

Core's relayer network continuously scans the Bitcoin blockchain to:

- Detect valid CLTV timelocks with embedded validator metadata
- Validate the transaction
- Transmit the data to Core's on-chain consensus logic
- Update validator election weights based on the amount of Bitcoin delegated

This process ensures real-time, trustless synchronization between Bitcoin activity and Core's consensus.

### 4. Reward Distribution

When a validator you support is elected and performs its duties:

- It earns CORE token rewards
- A portion of those rewards is distributed to all Bitcoin holders who timelocked in support
- Rewards are automatically sent to the EVM address provided in the timelock metadata

Reward amounts vary based on validator liveness and the amount of Bitcoin staked in support.

### 5. Timelock Expiration

Once your lock period ends:

- Your Bitcoin becomes fully spendable again
- Your validator vote and reward eligibility expire
- You may create a new timelock to resume participation

There is **no auto-renewal**—ongoing participation requires a new timelock transaction.

## Benefits

### For Bitcoin Holders

- Generate yield without giving up control
- Keep Bitcoin in its native form
- Avoid bridges, custodians, and smart contract risks

### For the Core Network

- Decentralized, Bitcoin-backed validator election
- Security reinforced by real Bitcoin economic weight
- A system aligned with the values of Bitcoin sovereignty and transparency

## Why It Matters

Bitcoin has historically been an unproductive asset, earning no yield. By using Bitcoin's native CLTV timelock function, Core enables Bitcoin holders to earn yield by trustlessly participating in the consensus process of a high-performance smart contract platform.

## View Current Yields

Live staking rewards are available at **[stake.coredao.org](https://stake.coredao.org)**
