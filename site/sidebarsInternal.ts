import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  internalSidebar: [
    "intro",
    {
      type: "category",
      label: "IT",
      collapsed: true,
      collapsible: true,
      items: ["it/architecture"],
    },
  ],
};

export default sidebars;
