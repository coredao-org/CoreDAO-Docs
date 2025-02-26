import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebar: SidebarsConfig = {
  apisidebar: [{
    type: "category",
    label: "Détails du staking",
    items: [{
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-staking-summary",
      label: "Récupérer le Résumé du Staking",
      className: "api-method get"
    }, {
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-btc-staking-status",
      label: "Récupérer le Statut du Staking BTC",
      className: "api-method get"
    }, {
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-overall-staking-data-on-core-blockchain",
      label: "Récupérer les Données Globales de Staking sur la Blockchain Core",
      className: "api-method get"
    }]
  }, {
    type: "category",
    label: "Transactions",
    items: [{
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-btc-staking-transactions",
      label: "Récupérer les transactions de staking BTC",
      className: "api-method get"
    }, {
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-full-list-of-btc-staking-transactions",
      label: "Récupérer la liste complète des transactions de staking BTC",
      className: "api-method get"
    }]
  }, {
    type: "category",
    label: "Rewards",
    items: [{
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-reward-claim-history",
      label: "Récupérer l'Historique des Réclamations de Récompenses",
      className: "api-method get"
    }, {
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-reward-distribution-of-a-round",
      label: "Récupérer la Distribution des Récompenses d'un Round",
      className: "api-method get"
    }, {
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-collected-and-pending-rewards",
      label: "Récupérer les Récompenses Collectées et en Attente",
      className: "api-method get"
    }]
  }, {
    type: "category",
    label: "Dual Staking",
    items: [{
      type: "doc",
      id: "stakingAPI/mainnet/retrieve-current-dual-staking-grade",
      label: "Récupérer le Niveau Actuel de Dual Staking",
      className: "api-method get"
    }]
  }, {
    type: "doc",
    id: "stakingAPI/mainnet/retrieve-latest-staking-round",
    label: "Dernier Round de Staking",
    className: "api-method get"
  }, {
    type: "doc",
    id: "stakingAPI/mainnet/retrieve-validator-details",
    label: "Détails des Validateurs",
    className: "api-method get"
  }, {
    type: "doc",
    id: "stakingAPI/mainnet/submit-redeem-script-for-staking-transaction",
    label: "Soumettre le RedeemScript",
    className: "api-method post"
  }]
};
export default sidebar.apisidebar;