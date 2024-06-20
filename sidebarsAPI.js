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

 apiSidebar:[
    {
      type: 'category',
      collapsed: true,
      label: '🔗 Connect with CORE API',
      link: {type: 'doc', id: 'api'},
      items: [
        {
          type: 'category',
          collapsed: true,
          label: '📚 Tutorials',
          link: {
            type: 'generated-index',
            title: 'Core Scan Tutorials',
            description: 'Learn about how to use the Core Scan API',
            slug: '/api/category/core-api-tutorials',
          },
          items: [
            'tutorials/creating-an-account',
            'tutorials/generate-an-api-key',
            'tutorials/common-error-messages',
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
            slug: '/api/category/core-api-docs',
          },
          items: [
            'api-documents/accounts',
            'api-documents/blocks',
            'api-documents/contracts',
            'api-documents/geth-proxy',
            'api-documents/statistics',
            'api-documents/transactions',
          ]
        }
      ]
    },
  ],

};

export default sidebars;
