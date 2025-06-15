import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX....)

const DefaultLocale = "en";

const config: Config = {
  title: "Core DAO Official Documentation",
  favicon: "img/favicon.ico",

  /// Set the production url of your site here
  url: "https://docs.coredao.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "coredao", // Usually your GitHub org/user name.
  projectName: "CoreDAO-Docs", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es"],
  },

  staticDirectories: ["public", "static"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/coredao-org/CoreDAO-Docs/blob/main',
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `https://github.com/coredao-org/CoreDAO-Docs/blob/main`;
            }
            // Link to GitHub for English docs
            return `https://github.com/coredao-org/CoreDAO-Docs/blob/main`;
          },
          routeBasePath: "docs",
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        gtag: {
          trackingID: "G-F20V7Q57RZ",
          anonymizeIP: true,
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          stakingapimainnet: {
            specPath: "docs/stakingAPI/swagger/mainnet.yaml",
            outputDir: "docs/stakingAPI/mainnet",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          stakingapitestnet: {
            specPath: "docs/stakingAPI/swagger/testnet.yaml",
            outputDir: "docs/stakingAPI/testnet",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          coreapimainnet: {
            specPath: "docs/api/mainnet.yaml",
            outputDir: "docs/api/mainnet",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          coreapitestnet: {
            specPath: "docs/api/testnet.yaml",
            outputDir: "docs/api/testnet",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"], // export theme components

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/core.png",

    //Color Scheme Preferrence
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    //Announcement Bar
    announcementBar: {
      id: "latest_updates",
      content:
        '⚠️ <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@core_dao/lstbtc-is-coming-sunsetting-corebtc-486d6744c3b9">LstBTC Launching Soon!</a> coreBTC is sunsetting — redeem your assets now to secure your holdings. ⚠️',
      backgroundColor: "#f96e34",
      textColor: "#FBFCFC",
      isCloseable: false,
    },

  //   algolia:{
  //     // The application ID provided by Algolia
  //     appId: "FA8VWNN4PE",

  //     // Public API key: it is safe to commit it
  //     apiKey: "32c49e31158edbf93b2c5adee12fc9e7", 

  //     indexName: "coredao",

  //     contextualSearch: true,
  // },

    //Header Navigation Items
    navbar: {
      title: "Core DAO",
      logo: {
        alt: "Core DAO Logo",
        src: "img/core.png",
        href: "/docs/intro",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "learnSidebar",
          position: "left",
          label: "Learn",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "docSidebar",
          sidebarId: "devGuideSidebar",
          position: "left",
          label: "Build",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "docSidebar",
          sidebarId: "nodeSidebar",
          position: "left",
          label: "Run a Node",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "docSidebar",
          sidebarId: "stakeDelegateSidebar",
          position: "left",
          label: "Stake & Delegate",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "docSidebar",
          sidebarId: "faqSidebar",
          position: "left",
          label: "FAQs",
          activeBaseRegex: `/docs/`,
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/coredao-org",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://coredao.org/explore/blog",
          label: "Blog",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Core DAO",
          href: "https://coredao.org/",
        },
        {
          label: "Docs",
          to: "/docs/intro",
        },
        {
          label: "Explorer",
          href: "https://scan.coredao.org/",
        },
        {
          label: "Blog",
          href: "https://coredao.org/explore/blog",
        },
        {
          label: "Discord",
          href: "https://discord.com/invite/coredaoofficial",
        },
        {
          label: "X (formerly Twitter)",
          href: "https://twitter.com/Coredao_Org",
        },
        {
          label: "Telegram",
          href: "https://t.me/CoreDAOTelegram",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Core DAO`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
