// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Core DAO Official Documentation',
  //tagline: 'Core DAO Official Developer Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.coredao.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CoreDAO-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coredao-org', // Usually your GitHub org/user name.
  projectName: 'CoreDAO-Docs', // Usually your repo name.
  deploymentBranch:'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  staticDirectories: ['public', 'static'],

  
  presets: [
    [
      '@docusaurus/preset-classic',
      // 'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      //(
        {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/coredao-org/CoreDAO-Docs/blob/main',
        
              path: 'docs',
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }, 
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      
      image: 'img/core.png',
      navbar: {
        title: 'Core DAO Documentation',
        logo: {
          alt: 'Core DAO Logo',
          src: 'img/core.png',
          href:'/docs/intro'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learnSidebar',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devGuideSidebar',
            position: 'left',
            label: 'Developer Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'nodeSidebar',
            position: 'left',
            label: 'Run a Node',
          },
          {
            type: 'docSidebar',
            sidebarId: 'stakeDelegateSidebar',
            position: 'left',
            label: 'Staking & Delegation',
          },
          {
            href: 'https://docs.coredao.org/api',
            label: 'Core API',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'faqSidebar',
            position: 'left',
            label: 'FAQs',
          },

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://coredao.org/explore/blog',
            label: 'Blog',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'Core DAO',
            href: 'https://coredao.org/',
          },
          {
            label: 'Docs',
            to: '/docs/intro',
          },
          {
            label: 'Explorer',
            href: 'https://scan.coredao.org/'
          },
          {
           label: 'Blog',
           href: 'https://coredao.org/explore/blog',
          },
          {
            label:'Discord',
            href:'https://discord.com/invite/coredaoofficial'
          },
          {
            label:'X (formerly Twitter)',
            href:'https://twitter.com/Coredao_Org'
          },
          {
            label:'Telegram',
            href:'https://t.me/CoreDAOTelegram'
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Core DAO`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,

        
      },
    }),

    
};

export default config;
