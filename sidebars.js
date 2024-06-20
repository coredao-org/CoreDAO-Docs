/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar: [
    {
      type: 'category',
      label: '📖 All About Core Chain',
      link: {type: 'doc', id: 'intro'},
      items:[
          {
            type: 'category',
            collapsed: true,
            label: 'Introduction',
            items: ['Learn/introduction/what-is-core-chain',
                    'Learn/introduction/why-core-chain',
                    'Learn/introduction/quickstart',
                    {
                      type: 'link',
                      label: 'Whitepaper', 
                      href: 'https://docs.coredao.org/core-white-paper-v1.0.7', 
                    },
                  ]
          },
          {
            type: 'category',
            collapsed: true,
            label: 'Core Concepts',
            link: {
              type: 'generated-index',
              title: 'Core Concepts',
              description: 'Learn about the Nuts and Bolts of the Core Chain Ecossytem!',
              slug: '/category/core-concepts',
            },
            items: ['Learn/core-concepts/overview', 'Learn/core-concepts/architecture',
                      {
                        type: 'category',
                        collapsed: true,
                        label: 'Satoshi Plus Consensus',
                        items: [
                          'Learn/core-concepts/satoshi-plus-consensus/components',
                          'Learn/core-concepts/satoshi-plus-consensus/DPoW',
                          'Learn/core-concepts/satoshi-plus-consensus/DPoS',
                          'Learn/core-concepts/satoshi-plus-consensus/validator-election',
                          'Learn/core-concepts/satoshi-plus-consensus/rewards', 
                          'Learn/core-concepts/satoshi-plus-consensus/security',
                          ]
                      },
                  ]
          },
          {
            type: 'category',
              collapsed: true,
              label: 'Products',
              link: {
                type: 'generated-index',
                title: 'Exploring Core Chain: Pioneering DeFi Solutions for Bitcoin',
                description: 'Learn about the different innovative products offered by Core Chain that are helping in unclocking the DeFi landscape for Bitcoin!',
                slug: '/category/products',
              },
              items: [
                {
                  type: 'category',
                    collapsed: true,
                    label: 'Non-Custodial BTC Staking',
                    items: [
                      'Learn/products/btc-staking/overview',
                      'Learn/products/btc-staking/design',
                      {
                        type: 'category',
                          collapsed: true,
                          label: 'How To Guides',
                          items: [
                            'Learn/products/btc-staking/stake-btc-guide',
                            'Learn/products/btc-staking/Redeeming-Guide',
                          ]
                      },
                      
                    ]
                },
                {
                  type: 'category',
                    collapsed: true,
                    label: 'coreBTC',
                    items: [
                      'Learn/products/coreBTC/overview',
                      'Learn/products/coreBTC/design',
                      'Learn/products/coreBTC/how-to-guides',
                    ]
                },
                {
                  type: 'category',
                    collapsed: true,
                    label: 'stCORE',
                    items: [
                      'Learn/products/stCore/overview',
                      'Learn/products/stCore/design',
                      {
                        type: 'category',
                          collapsed: true,
                          label: 'How To Guides',
                          items: [
                            'Learn/products/stCore/stCore-on-Core',
                          ]
                      },
                      
                    ]
                },
              ]
          },
          {
            type: 'category',
              collapsed: true,
              label: 'Economics',
              items: [
                  'Learn/economics/core-token/tokenomics-and-utility',
              ]
          },
          'Learn/governance',
          {type: 'doc', id: 'Learn/audit', label:'Audit'},

    ]
    },
  ],
  devGuideSidebar: [
    {
      type: 'category',
      collapsed: true,
      label: '💻 Core Chain for Developers',
      items: [
      {
        type: 'category',
        collapsed: true,
        label: 'Connecting to Core',
        items: ['Dev-Guide/dev-tools','Dev-Guide/network-config',
        {
          type: 'category',
          collapsed: true,
          label: 'RPC Endpoints',
          link: {type: 'doc', id: 'Dev-Guide/rpc-list'},
          items: ['Dev-Guide/rpc-cli', 'Dev-Guide/rpc-postman']
        },
      ]
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Wallet Configurations',
        items: ['Dev-Guide/core-faucet', 'Dev-Guide/core-testnet-wallet-config',
        'Dev-Guide/core-mainnet-wallet-config']
      },
      'Dev-Guide/precompile-addresses',
      'Dev-Guide/core-explorer', 
      {
        type: 'category',
        collapsed: true,
        label: 'Developer Guides',
        link: {
          type: 'generated-index',
          title: 'Developer Guides: Mastering Core Chain Essentials',
          description: 'Unlock Your Potential: Detailed Developer Guides for Building on Core Chain',
          slug: '/category/dev-guides',
        },
        items: [
          'Dev-Guide/smart-contract-guidelines',
          'Dev-Guide/remix', 'Dev-Guide/hardhat', 
          'Dev-Guide/contract-verify', 
          'Dev-Guide/erc20-tokens', 
          'Dev-Guide/erc721-tokens',
          'Dev-Guide/dapp-on-core-copy',]
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Bridging with Core',
        items: ['Dev-Guide/bridge-with-layerzero',
          'Dev-Guide/core-bridge-resources', ]
      },
      'Dev-Guide/core-subgraph',
       ]
    },
  ],

  faqSidebar: [
    {
      type: 'category',
      collapsed: true,
      label: '🤔 FAQs',
      items: ['FAQs/core-faqs', 'FAQs/core-node-faqs',
              'FAQs/validator-faqs', 'FAQs/delegator-faqs', 
              'FAQs/coreBTC-faqs', 'FAQs/btc-staking-faqs', 
              'FAQs/LST-stCore-faqs','FAQs/core-api-faqs' ]
    },
  ],
  nodeSidebar:[ 
    {
      type: 'category',
      collapsed: true,
      label: '🔮 Running Core Nodes',
      items: ['Node/overview',    
      {
        type: 'category',
        collapsed: true,
        label: 'Node Configurations',
        items: ['Node/config/validator-node-config', 'Node/config/rpc-node-config',
        'Node/config/archive-node-config', 'Node/config/snapshot-node-config']
      },     
      {
        type: 'category',
        collapsed: true,
        label: 'Running Full Node',
        items: [
        'Node/Full-Node/on-testnet', 
        'Node/Full-Node/on-mainnet']
      },
      'Node/sync/snapshot-sync',

      {
        type: 'category',
        collapsed: true,
        label: 'Become a Validator',
        items: ['Node/validator/overview',
        'Node/validator/validator-register', 
        'Node/validator/running-validator',
        'Node/validator/validator-election',
        'Node/validator/rewards',
        {
          type: 'category',
          collapsed: true,
          label: 'Slashing',
          items: ['Node/slashing/overview', 'Node/slashing/slashing-fee'
        ]
        },
      ],
      },
      {
        type: 'category',
        collapsed: true,
        label: 'Node Maintenance',
        items: ['Node/maintenance/maintenance','Node/maintenance/network-upgrade', ]
      },
    ]
    },
  ],
  stakeDelegateSidebar:[
    {
      type: 'category',
      collapsed: true,
      label: '💸 Staking',
      items: ['stake-and-delegate/staking-overview']
    },
    {
      type: 'category',
      collapsed: true,
      label: '💰 Become a Delegator',
      items: ['stake-and-delegate/delegators', 'stake-and-delegate/delegating-core',
      'stake-and-delegate/delegating-hash']
    },
  ],

 apiSidebar:[
    {
      type: 'category',
      collapsed: true,
      label: '🔗 Connect with CORE API',
      link: {type: 'doc', id: 'API/corescan'},
      items: [
        {
          type: 'category',
          collapsed: true,
          label: '📚 Tutorials',
          link: {
            type: 'generated-index',
            title: 'Core Scan Tutorials',
            description: 'Learn about how to use the Core Scan API',
            slug: '/API/category/core-api-tutorials',
          },
          items: [
            'API/tutorials/creating-an-account',
            'API/tutorials/generate-an-api-key',
            'API/tutorials/common-error-messages',
          ]
        },
        {
          type: 'category',
          collapsed: true,
          label: '📑 API Documents',
          link: {
            type: 'generated-index',
            title: 'Core Scan API Documentation',
            description: 'Explore the various Core Scan API Endpoints',
            slug: '/API/category/core-api-docs',
          },
          items: [
            'API/api-documents/accounts',
            'API/api-documents/blocks',
            'API/api-documents/contracts',
            'API/api-documents/geth-proxy',
            'API/api-documents/statistics',
            'API/api-documents/transactions',
          ]
        }
      ]
    },
  ],

};

export default sidebars;
