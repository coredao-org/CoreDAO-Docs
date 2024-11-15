---
sidebar_label: Délégation de Core
hide_table_of_contents: false
sidebar_position: 2
---

# Délégation de Core

---

Delegated Proof of Stake (DPoS) is one of the three fundamental components of the Satoshi Plus consensus mechanism, playing a pivotal role in enhancing the functionality, security, and efficiency of the blockchain network. In the Core network, DPoS is implemented through CORE delegations, allowing CORE holders to delegate their tokens to trusted validators. This process not only helps secure the network but also enables participants to share in the system’s rewards.\
This process not only helps secure the network but also enables participants to share in the system’s rewards.\
In this guide, we provide a step-by-step walkthrough on how to delegate your CORE tokens to validators within the Core network, empowering you to actively contribute to the ecosystem while reaping the benefits of your investment.

## Core Staking Website

- Mainnet: [https://stake.coredao.org/](https://stake.coredao.org/)
- Testnet: [https://stake.test.btcs.network/](https://stake.test.btcs.network/)

## Step-by-Step Guidelines for Delegating CORE

#### Step 1: Navigating to Core Staking Website

When you visit stake.coredao.org, you’ll see an overview of important metrics related to Core delegation. These metrics provide a snapshot of the staking opportunities available on Core, and are updated in real-time based on the user participation. It also lists Validator information, with all validators ranked by their current hybrid score.

![image](https://github.com/user-attachments/assets/e6fa2e61-1027-4d6e-bdb3-a86ceb265eee)

#### Step 1.1: Connect Your Wallet

To start staking, follow these steps to connect your wallet. Ensure you have CORE tokens in your wallet to participate in staking.

- Click on the “Connect Wallet” button located at the top-right corner of the page.
- Choose your preferred wallet (e.g., MetaMask, WalletConnect) from the available options.
- Follow the on-screen prompts to complete the connection process securely.
- Once connected, your wallet balance and details will be visible, and you can begin delegating CORE tokens.

![image](https://github.com/user-attachments/assets/547fdb6d-67f1-424d-be88-cdfde66224b3)

Step 1.2: Choosing a Validator

On the staking site, each validator is ranked by their Hybrid Score, which reflects a combination of factors such as performance and delegated hash power. To maximize your staking rewards, focus on the following two key metrics:

- **CORE Reward Rate:** This shows the percentage of CORE rewards you can earn by delegating to a particular validator. A higher reward rate means more potential returns on your staked CORE.
- **Commission:** This is the fee that validators take from your staking rewards. A lower commission allows you to keep more of your earned rewards, so it's important to choose a validator with a low commission to maximize your returns.

By choosing a validator with a high CORE reward rate and low commission, you can increase the amount of rewards you receive from staking your CORE tokens. You can view more details about each validator’s metrics by clicking the "i" symbol next to the column headers for explanations. For more information on how the hybrid score is calculated, refer [here](https://docs.coredao.org/docs/Learn/core-concepts/satoshi-plus-consensus/validator-election#workflow-of-the-validator-election-process).

Validator information is refreshed daily at 00:00 UTC at the beginning of each new round, ensuring you always have the latest data when making your staking decisions.

In the example, we are selecting: **DAO Validator 6**. To choose a validator, click on the Validator's name to proceed

![image](https://github.com/user-attachments/assets/527fbabd-019a-4acb-9185-043a9b901992)

### Step 2: Delegating CORE to a Validator

Once you’ve selected a validator, you’ll be taken to their detailed page, as shown below. Here’s what you’re seeing:

- **Delegated Coin (CORE):** The total amount of CORE tokens already delegated to the selected validator (e.g., 6,678,941 CORE).
- **CORE Reward Rate:** The annual percentage of rewards for delegating to the selected validator. For example, if he CORE reward rate is 9.41%, it means the delegator will earn this percentage in rewards on their staked CORE.
- **Commission:** The validator’s commission fee, which is deducted from your rewards, example 5%.
- **Delegators:** The number of users who have delegated to the selected validator (e.g., 16,234 CORE Delegators).

To delegate your CORE tokens, follow these steps:

1. **Click "Delegate":** At the top right of the screen, you’ll see the Delegate button (marked as 1 in the image). Hover over it.
2. **Select CORE:** A drop-down will appear with the option to delegate CORE or BTC. Select CORE (marked as 2 in the image).

![image](https://github.com/user-attachments/assets/6c09ad7e-a61e-449b-a935-973576b464fb)

#### Step 2.1 Specify amount of CORE to delegate

- After selecting CORE, you’ll be prompted to enter the amount of CORE you want to delegate. Review the validator’s commission, then click ‘Confirm Delegation’.
  ![image](https://github.com/user-attachments/assets/b31bbdb5-a2b0-401e-99f9-106c6c3e913a)

- Also confirm the transaction in your Metamask.
  ![image](https://github.com/user-attachments/assets/e3022505-99a3-49eb-bf9f-6fc565e41105)

- Once your transaction is confirmed and succesfully completed, you can see that 1 CORE has been successfully delegated to DAO Validator 6.
  ![image](https://github.com/user-attachments/assets/b378b492-3fea-4218-a937-486f2589049b)

#### Step 2.2 Verifying delegated CORE

Now that we’ve successfully delegated CORE, lets verify that our CORE is now being staked by hovering over our connected wallet in the top right corner, and clicking on the ‘My Staking’ dropdown. We can see under the ‘Core Delegated’ column that we now have 1 CORE delegated, or 1 CORE staked:

![image](https://github.com/user-attachments/assets/d61755d2-177b-485c-9daa-5cc5a863b60d)

### Step 3 Undelegating CORE

If we want to Undelegate our CORE, you will want to click the 3 dots at the end of your chosen validator, and click: ‘**Undelegate CORE**’.

![image](https://github.com/user-attachments/assets/356bfbc6-991d-4a39-804e-cc46086e5399)

#### Step 3.1 Confirm the transaction, and verify undelegated CORE

- After clicking Undelegate, you will be prompted to confirm the transaction in your Metamask. Click the ‘**Confirm**’ button:

![image](https://github.com/user-attachments/assets/787425db-f7c2-4fa4-9cc9-a125d7a9b873)

- Once the transaction is confirmed and sucessfuly executed, you will see the following success prompt.

![image](https://github.com/user-attachments/assets/3b0bb4e4-95aa-407f-8946-442de715906e)

- If you return to ‘**My Staking**’, you should now see your CORE Delegated displaying 0.

![image](https://github.com/user-attachments/assets/f1aa91f9-e861-4e03-b08d-b8be504cef0a)

- Clicking the ‘**Transaction Records**’ button allows us to view the **Staking Records**, and the delegation events that have occurred under the **CORE Records** tab.

![image](https://github.com/user-attachments/assets/da7a3693-2799-4c04-8ba3-649c25694120)

## Réclamation des récompenses

You can view reward information about your active delegations by selecting My Staking on the top right of the staking website. Les récompenses de délégation (staking) sont distribuées après chaque cycle à 00:00 UTC chaque jour.

To claim your rewards, simply select the Claim button on the top left and sign the transaction. Après l'envoi de la transaction, vous recevrez les récompenses à l'adresse liée à votre compte. Historical claim transactions are listed on the website's Claim tab, as shown below.

![image](https://github.com/user-attachments/assets/64f749fc-0746-4df9-bf62-fbdb088952c2)
