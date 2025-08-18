import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "DVFL Documentation",
  favicon: "img/favicon.ico",

  url: "http://localhost:3000",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    path: "i18n",
  },

  future: {
    v4: {
      useCssCascadeLayers: true,
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl:
            "https://github.com/DeVinci-FabLab/documentation/tree/main/site",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
        },
        blog: {
          routeBasePath: "workshops",
          path: "blog",
          showReadingTime: true,
          blogTitle: "Workshops",
          blogSidebarTitle: "All workshops",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "7B6MSZEWAH",
      apiKey: "b77f0433b3372ea692844d52d1602c86",
      indexName: "dvfl-documentation",
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "DVFL logo",
        src: "img/favicon.svg",
        srcDark: "img/favicon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "workshops",
          position: "left",
          label: "Workshops",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/DeVinci-FabLab/documentation",
          position: "right",
          className: "header-github-link",
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
      copyright: `Copyright © ${new Date().getFullYear()} DeVinci Fablab.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        "bash",
        "c",
        "cpp",
        "csharp",
        "css",
        "json",
        "markdown",
        "powershell",
        "python",
        "rust",
        "sql",
        "typescript",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: ["docusaurus-plugin-sass"],
};

export default config;

//TODO: faire une homepage ? [exemple](https://forge.apps.education.fr/eric.autant/squelettedocusaurus/-/blob/main/src/components/HomepageFeatures/index.js?ref_type=heads)
