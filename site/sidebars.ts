import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "safety",
    "srg",
    {
      type: "category",
      label: "Spaces Charters", // This label will be automatically translated
      collapsed: true,
      collapsible: true,
      items: [
        "spaces_charters/global",
        "spaces_charters/3D-printing",
        "spaces_charters/electronics",
        "spaces_charters/fabrication",
        "spaces_charters/resin",
        "spaces_charters/textile",
      ],
    },
    {
      type: "category",
      label: "3D Printing",
      collapsed: true,
      collapsible: true,
      items: [
        "3d_printing/bambulab",
        "3d_printing/filament",
        "3d_printing/orcaslicer",
      ],
    },
    {
      type: "category",
      label: "Laser and CNC",
      collapsed: true,
      collapsible: true,
      items: ["CNC/snapmaker"],
    },
    {
      type: "category",
      label: "Electronic Hardware",
      collapsed: true,
      collapsible: true,
      items: ["electronics/test"],
    },
    {
      type: "category",
      label: "IT Courses",
      collapsed: true,
      collapsible: true,
      items: [
        "it_courses/csharp-docs",
        "it_courses/csharp-on-vscode",
        "it_courses/csharp-to-postgres",
        "it_courses/postgres-docker",
        "it_courses/rust",
        "it_courses/unit-testing",
      ],
    },
  ],
};

export default sidebars;
