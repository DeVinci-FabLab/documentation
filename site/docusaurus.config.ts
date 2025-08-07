import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DVFL Documentation',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DeVinci Fablab', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    path: "i18n",
  },

  future: {
    v4: {
      useCssCascadeLayers: true,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: "/",
          editUrl: ({ locale, version, docPath }) => {
            const repo = "https://github.com/DeVinci-FabLab/documentation/";
            if (locale === "en") {
              return `${repo}/edit/main/site/i18n/en/docusaurus-plugin-content-docs/${version}/${docPath}`;
            }
            return `${repo}/edit/main/site/docs/${docPath}`;
          },
        },
        blog: {
          // Add blog configuration
          showReadingTime: true,
          // Optional: change path if needed
          path: 'blog',
          // Make sure i18n is enabled for blog
          blogTitle: 'Workshops',
          blogSidebarTitle: 'All workshops',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    algolia: {
      appId: '7B6MSZEWAH',
      apiKey: 'b77f0433b3372ea692844d52d1602c86',
      indexName: 'dvfl-documentation",
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'DVFL logo',
        src: 'img/favicon.svg',
        srcDark: 'img/favicon.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation'
        },
        {
          to: 'blog',
          position: 'left',
          label: 'Workshops'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/DeVinci-FabLab/documentation',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/devinci-fablab",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/devinci.fablab/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "devinci-fablab.fr",
              href: "https://devinci-fablab.fr/",
            },
            {
              label: "MyFab",
              href: "https://my.devinci-fablab.fr/",
            },
            {
              label: "GitHub",
              href: "https://github.com/DeVinci-FabLab/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DeVinci Fablab.`
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        'bash',
        'c',
        'cpp',
        'csharp',
        'css',
        'json',
        'markdown',
        'python',
        'rust',
        'sql',
        'typescript',
        'yaml'
      ]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
