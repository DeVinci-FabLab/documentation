import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  internalSidebar: [
    "intro",
    {
      type: "category",
      label: "Engineering Science",
      collapsed: true,
      collapsible: true,
      items: ["engineering_science/electricity"],
    },
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
