import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  sidebar: [
    {
      title: "Menu",
      items: [
        {
          title: "Playground",
          url: "#",
          icon: SquareTerminal,
          isActive: true,
        },
        {
          title: "Models",
          url: "",
          icon: Bot,
          items: [
            {
              title: "Genesis",
              url: "#",
            },
            {
              title: "Explorer",
              url: "#",
            },
            {
              title: "Quantum",
              url: "#",
            },
          ],
        },
        {
          title: "Documentation",
          url: "",
          icon: BookOpen,
          items: [
            {
              title: "Introduction",
              url: "introduction",
            },
            {
              title: "Get Started",
              url: "start",
            },
            {
              title: "Tutorials",
              url: "tutorials",
            },
            {
              title: "Changelog",
              url: "changelog",
            },
          ],
        },
        {
          title: "Settings",
          url: "settings",
          icon: Settings2,
          items: [
            {
              title: "General",
              url: "#",
            },
            {
              title: "Team",
              url: "#",
            },
            {
              title: "Billing",
              url: "#",
            },
            {
              title: "Limits",
              url: "#",
            },
          ],
        },
      ],
    },
  ],
     header: {
     title: "Acme Inc",
     icon: Command,
     href: "#",
     },
};

