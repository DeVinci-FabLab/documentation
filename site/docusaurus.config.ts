import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

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
            "https://github.com/DeVinci-FabLab/documentation/tree/main/site/",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
          type: "docSidebar",
          sidebarId: "internalSidebar",
          docsPluginId: "internal",
          position: "left",
          label: "Internal Docs",
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
          href: "https://github.com/DeVinci-FabLab/documentation/",
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    footer: {
      links: [
        {
          title: "Our Services",
          items: [
            {
              label: "Main website",
              href: "https://devinci-fablab.fr/",
            },
            {
              label: "MyFab",
              href: "https://my.devinci-fablab.fr/",
            },
            {
              label: "Our Services Hub",
              href: "https://home.devinci-fablab.fr/",
            },
          ],
        },
        {
          title: "Get Involved",
          items: [
            {
              label: "Request a training", //TODO: forms on website
              href: "https://forms.office.com/e/MqVdQujzjf",
            },
            {
              label: "Contribute to the site",
              href: "https://github.com/DeVinci-FabLab/documentation?tab=contributing-ov-file",
            },
            {
              label: "Suggest a feature",
              href: "https://github.com/DeVinci-FabLab/documentation/issues/new?template=feature_request.md",
            },
            {
              label: "Donate",
              href: "https://www.helloasso.com/associations/devinci-fablab/formulaires/1",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Email",
              href: "mailto:support@devinci-fablab.fr",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/devinci-fablab/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/devinci.fablab/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/devinci.fablab/",
            },
            {
              label: "GitHub",
              href: "https://github.com/DeVinci-FabLab/",
            },
          ],
        },
        {
          title: "Our Partners",
          items: [
            {
              label: "Hauts de Seine Department",
              href: "https://www.hauts-de-seine.fr/",
            },
            {
              label: "Institute for Future Technologies",
              href: "https://ift.devinci.fr/",
            },
          ],
        },
      ],
      logo: {
        alt: "DVFL logo",
        src: "img/logo-full-color-clair.svg",
        srcDark: "img/logo-full-color-clair.svg",
        width: "170px",
      },
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
        "latex",
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
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "internal",
        path: "internal-docs",
        routeBasePath: "internal-documentation",
        sidebarPath: "./sidebarsInternal.ts",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        editUrl:
          "https://github.com/DeVinci-FabLab/documentation/tree/main/site/",
        editLocalizedFiles: true,
        showLastUpdateTime: true,
      },
    ],
    "docusaurus-plugin-sass",
  ],
};

export default config;

//TODO: faire une homepage ? [exemple](https://forge.apps.education.fr/eric.autant/squelettedocusaurus/-/blob/main/src/components/HomepageFeatures/index.js?ref_type=heads)
