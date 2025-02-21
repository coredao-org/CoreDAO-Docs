import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Staking Details",
      items: [
              {
                type: "doc",
                id: "stakingAPI/testnet/retrieve-staking-summary",
                label: "Retrieve Staking Summary",
                className: "api-method get",
              },
              {
                type: "doc",
                id: "stakingAPI/testnet/retrieve-btc-staking-status",
                label: "Retrieve BTC Staking Status",
                className: "api-method get",
              },
              {
                type: "doc",
                id: "stakingAPI/testnet/retrieve-overall-staking-data-on-core-blockchain",
                label: "Retrieve Overall Staking Data on Core Blockchain",
                className: "api-method get",
              },
          ]
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-btc-staking-transactions",
          label: "Retrieve BTC staking transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-full-list-of-btc-staking-transactions",
          label: "Retrieve Full List of BTC Staking Transactions",
          className: "api-method get",
        },
      ]
    },
    {
      type: "category",
      label: "Rewards",
      items: [
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-reward-claim-history",
          label: "Retrieve Reward Claim History",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-reward-distribution-of-a-round",
          label: "Retrieve Reward Distribution of a Round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-collected-and-pending-rewards",
          label: "Retrieve Collected and Pending Rewards",
          className: "api-method get",
        },
      ]
    },
    {
      type: "category",
      label: "Dual Staking",
      items: [
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-current-dual-staking-grade",
          label: "Retrieve Current Dual Staking Grade",
          className: "api-method get",
        },
      ]
    },            
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-latest-staking-round",
          label: "Latest Staking Round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/testnet/retrieve-validator-details",
          label: "Validator Details",
          className: "api-method get",
        },        
        {
          type: "doc",
          id: "stakingAPI/testnet/submit-redeem-script-for-staking-transaction",
          label: "Submit RedeemScript",
          className: "api-method post",
        },
  ],
};

export default sidebar.apisidebar;
