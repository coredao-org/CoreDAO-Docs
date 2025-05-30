import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/testnet/api-documentation",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-balance-using-get",
          label: "Get CORE balance by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-internal-tx-by-block-range-using-get",
          label: "Get internal transactions by block range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-internal-tx-by-tx-hash-using-get",
          label: "Get internal transactions by transaction hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-mined-blocks-by-address-using-get",
          label: "Get list of blocks validated by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-erc-20-transfers-by-address-using-get",
          label: "Get list of ERC20 transfer events by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-erc-721-transfers-by-address-using-get",
          label: "Get list of ERC721 transfer events by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-tx-list-by-address-using-get",
          label: "Get list of transactions by address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Blocks",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-block-number-by-timestamp-using-get",
          label: "Get block number by timestamp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-block-rewards-by-block-number-using-get",
          label: "Get block rewards by block number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-estimated-block-countdown-time-using-get",
          label: "Get estimated block countdown time by block number",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-contract-abi-using-get",
          label: "Get ABI of verified contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/check-proxy-contract-verification-status-using-get",
          label: "Check proxy contract verification submission status using cURL",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-contract-source-code-using-get",
          label: "Get source code of verified contract",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/verify-proxy-contract-using-post",
          label: "Verify proxy contract",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/testnet/verify-proxy-contract-curl-using-post",
          label: "Verify proxy contract using cURL",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/testnet/verify-source-code-using-post",
          label: "Verify source code",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Geth Proxy",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-block-number-using-get",
          label: "Get block number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/eth-call-using-get",
          label: "Get transaction receipt",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/estimate-gas-using-get",
          label: "Estimate gas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-gas-price-using-get",
          label: "Get gas price",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-block-by-number-using-get",
          label: "Get block by number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-block-transaction-count-by-number-using-get",
          label: "Get block transaction count by number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-code-using-get",
          label: "Get code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-storage-at-using-get",
          label: "Get storage at",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-transaction-by-block-number-and-index-using-get",
          label: "Get transaction by block number and index",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-transaction-by-hash-using-get",
          label: "Get transaction by hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-transaction-count-using-get",
          label: "Get transaction count",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-transaction-receipt-using-get",
          label: "Get transaction receipt",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/send-raw-transaction-using-get",
          label: "Send raw transaction",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Stats",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-last-core-price-using-get",
          label: "Get last core price",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-list-of-validators-using-get",
          label: "Get list of validators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/testnet/get-total-core-supply-using-get",
          label: "Get total core supply",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "api/testnet/get-transaction-receipt-status-using-get",
          label: "Get transaction receipt status",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
